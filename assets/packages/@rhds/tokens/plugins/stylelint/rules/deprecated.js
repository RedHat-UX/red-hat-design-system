import { tokens } from '@rhds/tokens/meta.js';
import stylelint from 'stylelint';
import parser from 'postcss-value-parser';
const ruleName = 'rhds/deprecated';
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: '...',
});
const meta = {
    url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/deprecated.ts',
    fixable: true,
};
function isVarCall(parsedNode) {
    return parsedNode.type === 'function'
        && parsedNode.value === 'var';
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
                        const [value, ...fallback] = parsedNode.nodes ?? [];
                        const { value: name } = value;
                        if (tokens.has(name)) {
                            const expected = tokens.get(name);
                            if (expected?.$deprecated) {
                                const replacement = `--rh-${expected.original.$value.toString().replace(/{(.*)}/, '$1').replaceAll('.', '-')}`;
                                const message = `${name} is deprecated, use ${replacement} instead`;
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
                                        const infix = `var(${replacement}${fallback?.map(node => node.value)?.join('') ?? ''})`;
                                        const suffix = node.value.slice(parsedNode.sourceEndIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLENBQUM7QUFFMUMsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUM7QUFFbkMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO0lBQ3RELFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQztBQUVILE1BQU0sSUFBSSxHQUFHO0lBQ1gsR0FBRyxFQUFFLG9HQUFvRztJQUN6RyxPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixTQUFTLFNBQVMsQ0FBQyxVQUF1QjtJQUN4QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssVUFBVTtXQUNoQyxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBRUQsTUFBTSxZQUFZLEdBQVMsR0FBRyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzVCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDcEQsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7d0JBQzlCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFpQixDQUFDLEVBQUUsQ0FBQzs0QkFDbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFpQixDQUFDLENBQUM7NEJBQy9DLElBQUksUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO2dDQUMxQixNQUFNLFdBQVcsR0FBRyxRQUFRLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO2dDQUMvRyxNQUFNLE9BQU8sR0FBRyxHQUFHLElBQUksdUJBQXVCLFdBQVcsVUFBVSxDQUFDO2dDQUNwRSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQ0FDckIsSUFBSTtvQ0FDSixPQUFPO29DQUNQLFFBQVE7b0NBQ1IsTUFBTTtvQ0FDTixJQUFJLEVBQUUsSUFBSTtvQ0FDVixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7b0NBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYztvQ0FDOUIsR0FBRzt3Q0FDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dDQUMzRCxNQUFNLEtBQUssR0FBRyxPQUFPLFdBQVcsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzt3Q0FDeEYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQztvQ0FDNUMsQ0FBQztpQ0FDRixDQUFDLENBQUM7NEJBQ0wsQ0FBQzt3QkFDSCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUV6QixlQUFlLFlBQVksQ0FBQyJ9