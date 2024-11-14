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
                            if (expected?.$extensions?.['com.redhat.ux']?.deprecated) {
                                const replacement = `--rh-${expected.original.$value.replace(/{(.*)}/, '$1').replaceAll('.', '-')}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlDLE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztBQUVuQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7SUFDdEQsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUc7SUFDWCxHQUFHLEVBQUUsb0dBQW9HO0lBQ3pHLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUFDLFVBQXVCO0lBQ3hDLE9BQU8sVUFBVSxDQUFDLElBQUksS0FBSyxVQUFVO1dBQ2hDLFVBQVUsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxNQUFNLFlBQVksR0FBUyxHQUFHLEVBQUU7SUFDOUIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN0QixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDNUIsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUNwRCxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQzt3QkFDOUIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQXdCLENBQUMsRUFBRSxDQUFDOzRCQUN6QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQXdCLENBQUMsQ0FBQzs0QkFDdEQsSUFBSSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0NBQ3pELE1BQU0sV0FBVyxHQUFHLFFBQVEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0NBQ3BHLE1BQU0sT0FBTyxHQUFHLEdBQUcsSUFBSSx1QkFBdUIsV0FBVyxVQUFVLENBQUM7Z0NBQ3BFLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29DQUNyQixJQUFJO29DQUNKLE9BQU87b0NBQ1AsUUFBUTtvQ0FDUixNQUFNO29DQUNOLElBQUksRUFBRSxJQUFJO29DQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVztvQ0FDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxjQUFjO29DQUM5QixHQUFHO3dDQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7d0NBQzNELE1BQU0sS0FBSyxHQUFHLE9BQU8sV0FBVyxHQUFHLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO3dDQUN4RixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7d0NBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDO29DQUM1QyxDQUFDO2lDQUNGLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXpCLGVBQWUsWUFBWSxDQUFDIn0=