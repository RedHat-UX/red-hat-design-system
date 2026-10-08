import { tokens } from '@rhds/tokens';
import stylelint from 'stylelint';
import parser from 'postcss-value-parser';
const ruleName = 'rhds/token-values';
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: 'Expected ...',
});
const meta = {
    url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/token-values.ts',
    fixable: true,
};
function isVarCall(parsedNode) {
    return parsedNode.type === 'function'
        && parsedNode.value === 'var'
        && parsedNode.nodes.length > 1;
}
/**
 * Extract exactly two arguments from a `light-dark()` value. Each argument
 * must be a single significant node, but it can be any kind of node.
 */
function extractLightDarkArgs(parsed) {
    const significantNodes = parsed.nodes.filter(node => node.type !== 'space');
    const [lightDark] = significantNodes;
    if (!lightDark
        || significantNodes.length !== 1
        || lightDark.type !== 'function'
        || lightDark.value !== 'light-dark') {
        return null;
    }
    const args = [[]];
    for (const node of lightDark.nodes) {
        if (node.type === 'div' && node.value === ',') {
            args.push([]);
        }
        else if (node.type !== 'space') {
            args[args.length - 1].push(node);
        }
    }
    if (args.length !== 2 || args.some(arg => arg.length !== 1)) {
        return null;
    }
    return args;
}
/**
 * Return whether an argument is a direct `var()` call for a known RHDS token.
 */
function isRhdsTokenVarArg(arg) {
    const [variable] = arg;
    if (!variable || variable.type !== 'function' || variable.value !== 'var') {
        return false;
    }
    const [nameNode] = variable.nodes.filter(node => node.type !== 'space');
    return nameNode?.type === 'word'
        && nameNode.value.startsWith('--rh-')
        && tokens.has(nameNode.value);
}
/**
 * Compare the RHDS token `var()` arguments in a theme-aware fallback. A null
 * result means the expected value is not in the supported shape and should use
 * string comparison.
 */
function lightDarkMatches(actual, expected) {
    const expectedArgs = extractLightDarkArgs(parser(expected));
    if (!expectedArgs || !expectedArgs.every(isRhdsTokenVarArg)) {
        return null;
    }
    const actualArgs = extractLightDarkArgs(parser(actual));
    if (!actualArgs) {
        return false;
    }
    return actualArgs.every((actualArg, index) => {
        const expectedArg = expectedArgs[index];
        return !!expectedArg
            && isRhdsTokenVarArg(actualArg)
            && parser.stringify(actualArg) === parser.stringify(expectedArg);
    });
}
const ruleFunction = () => {
    return (root, result) => {
        const validOptions = stylelint.utils.validateOptions(result, ruleName);
        if (!validOptions) {
            return;
        }
        root.walk(node => {
            if (node.type === 'decl') {
                const parsedValue = parser(node.value);
                parsedValue.walk(parsedNode => {
                    if (isVarCall(parsedNode)) {
                        const [value, , ...values] = parsedNode.nodes ?? [];
                        const { value: name } = value;
                        if (tokens.has(name)) {
                            const actual = parser.stringify(values);
                            const expected = tokens.get(name);
                            // Theme-aware tokens contain nested `var()` calls inside
                            // `light-dark()`. Comparing their parsed branches avoids rewriting
                            // a valid fallback solely because its whitespace differs.
                            if (typeof expected === 'string' && expected.startsWith('light-dark(')) {
                                const match = lightDarkMatches(actual, expected);
                                if (match === true) {
                                    return;
                                }
                                else if (match === false) {
                                    // Replace the complete outer fallback so both theme branches,
                                    // including their literal fallbacks, are restored together.
                                    stylelint.utils.report({
                                        node,
                                        message: `Expected ${name} fallback to be ${expected}`,
                                        ruleName,
                                        result,
                                        word: name,
                                        index: value.sourceIndex,
                                        endIndex: value.sourceEndIndex,
                                        fix() {
                                            const prefix = node.value.slice(0, parsedNode.sourceIndex);
                                            const infix = `var(${name}, ${expected})`;
                                            const suffix = node.value.slice(parsedNode.sourceEndIndex);
                                            node.value = `${prefix}${infix}${suffix}`;
                                        },
                                    });
                                    return;
                                }
                            }
                            if (expected === null && actual == null) {
                                return;
                            }
                            else if (expected?.toString() !== actual) {
                                const message = expected === null ? `Expected ${name} to not have a fallback value`
                                    : `Expected ${name} to equal ${expected}`;
                                stylelint.utils.report({
                                    node,
                                    message,
                                    ruleName,
                                    result,
                                    word: name,
                                    index: value.sourceIndex,
                                    endIndex: value.sourceEndIndex,
                                    fix() {
                                        const prefix = node.value.slice(0, parsedNode.sourceIndex);
                                        let infix = `var(${name}, ${expected})`;
                                        const suffix = node.value.slice(parsedNode.sourceEndIndex);
                                        if (expected === null) {
                                            infix = `var(${name})`;
                                        }
                                        node.value = `${prefix}${infix}${suffix}`;
                                    },
                                });
                            }
                        }
                    }
                });
            }
        });
    };
};
ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;
export default ruleFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tdmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tdmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0sY0FBYyxDQUFDO0FBRXRELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUVyQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7SUFDdEQsUUFBUSxFQUFFLGNBQWM7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUc7SUFDWCxHQUFHLEVBQUUsc0dBQXNHO0lBQzNHLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUFDLFVBQXVCO0lBQ3hDLE9BQU8sVUFBVSxDQUFDLElBQUksS0FBSyxVQUFVO1dBQ2hDLFVBQVUsQ0FBQyxLQUFLLEtBQUssS0FBSztXQUMxQixVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsb0JBQW9CLENBQUMsTUFBMEI7SUFDdEQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7SUFDNUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ3JDLElBQUksQ0FBQyxTQUFTO1dBQ1AsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7V0FDN0IsU0FBUyxDQUFDLElBQUksS0FBSyxVQUFVO1dBQzdCLFNBQVMsQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENB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