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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tdmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tdmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFDO0FBRTFDLE1BQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDO0FBRXJDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtJQUN0RCxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLElBQUksR0FBRztJQUNYLEdBQUcsRUFBRSxzR0FBc0c7SUFDM0csT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsVUFBdUI7SUFDeEMsT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLFVBQVU7V0FDaEMsVUFBVSxDQUFDLEtBQUssS0FBSyxLQUFLO1dBQzFCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTSxZQUFZLEdBQVMsR0FBRyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzVCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQUFBRCxFQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQ3BELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO3dCQUM5QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDeEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEMsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQ0FDeEMsT0FBTzs0QkFDVCxDQUFDO2lDQUFNLElBQUssUUFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsQ0FBQztnQ0FDdkQsTUFBTSxPQUFPLEdBQ1QsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLCtCQUErQjtvQ0FDckUsQ0FBQyxDQUFDLFlBQVksSUFBSSxhQUFhLFFBQVEsRUFBRSxDQUFDO2dDQUM1QyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQ0FDckIsSUFBSTtvQ0FDSixPQUFPO29DQUNQLFFBQVE7b0NBQ1IsTUFBTTtvQ0FDTixJQUFJLEVBQUUsSUFBSTtvQ0FDVixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7b0NBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYztvQ0FDOUIsR0FBRzt3Q0FDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dDQUMzRCxJQUFJLEtBQUssR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLEdBQUcsQ0FBQzt3Q0FDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMzRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQzs0Q0FDdEIsS0FBSyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUM7d0NBQ3pCLENBQUM7d0NBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUM7b0NBQzVDLENBQUM7aUNBQ0YsQ0FBQyxDQUFDOzRCQUNMLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDakMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDakMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFFekIsZUFBZSxZQUFZLENBQUMifQ==