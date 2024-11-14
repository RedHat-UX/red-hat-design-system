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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tdmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tdmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFDO0FBRTFDLE1BQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDO0FBRXJDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtJQUN0RCxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLElBQUksR0FBRztJQUNYLEdBQUcsRUFBRSxzR0FBc0c7SUFDM0csT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsVUFBdUI7SUFDeEMsT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLFVBQVU7V0FDaEMsVUFBVSxDQUFDLEtBQUssS0FBSyxLQUFLO1dBQzFCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTSxZQUFZLEdBQVMsR0FBRyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzVCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQUFBRCxFQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQ3BELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO3dCQUM5QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBd0IsQ0FBQyxFQUFFLENBQUM7NEJBQ3pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBd0IsQ0FBQyxDQUFDOzRCQUN0RCxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO2dDQUN4QyxPQUFPOzRCQUNULENBQUM7aUNBQU0sSUFBSSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFFLENBQUM7Z0NBQzNDLE1BQU0sT0FBTyxHQUNULFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSwrQkFBK0I7b0NBQ3JFLENBQUMsQ0FBQyxZQUFZLElBQUksYUFBYSxRQUFRLEVBQUUsQ0FBQztnQ0FDNUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7b0NBQ3JCLElBQUk7b0NBQ0osT0FBTztvQ0FDUCxRQUFRO29DQUNSLE1BQU07b0NBQ04sSUFBSSxFQUFFLElBQUk7b0NBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXO29DQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLGNBQWM7b0NBQzlCLEdBQUc7d0NBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3Q0FDM0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxHQUFHLENBQUM7d0NBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3Q0FDM0QsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7NENBQ3RCLEtBQUssR0FBRyxPQUFPLElBQUksR0FBRyxDQUFDO3dDQUN6QixDQUFDO3dDQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDO29DQUM1QyxDQUFDO2lDQUNGLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXpCLGVBQWUsWUFBWSxDQUFDIn0=