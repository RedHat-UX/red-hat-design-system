import { dirname, sep } from 'node:path';
import { tokens } from '@rhds/tokens';
import stylelint from 'stylelint';
import parser from 'postcss-value-parser';
const ruleName = 'rhds/no-unknown-token-name';
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: 'Expected ...',
});
const meta = {
    url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/no-unknown-token-name.ts',
    fixable: true,
};
const ruleFunction = (_, opts) => {
    return (root, result) => {
        // here we assume a file structure of */rh-tagname/rh-tagname.css
        const tagName = dirname(root.source.input.file)
            .split(sep)
            .findLast(x => x.startsWith('rh-'));
        const validOptions = stylelint.utils.validateOptions(result, ruleName);
        if (!validOptions) {
            return;
        }
        const migrations = new Map(Object.entries(opts?.migrations ?? {}));
        const allowed = new Set(opts?.allowed ?? []);
        root.walk(node => {
            if (node.type === 'decl') {
                const parsedValue = parser(node.value);
                parsedValue.walk(parsed => {
                    if (parsed.type === 'function' && parsed.value === 'var') {
                        const [child] = parsed.nodes ?? [];
                        const { value } = child;
                        if (value.startsWith('--rh')
                            && !value.startsWith(`--${tagName}`)
                            && !tokens.has(value)
                            && !allowed.has(value)
                            || migrations.has(value)) {
                            const message = `Expected ${value} to be a known token name`;
                            stylelint.utils.report({
                                node,
                                message,
                                ruleName,
                                result,
                                word: value,
                                index: child.sourceIndex,
                                endIndex: child.sourceEndIndex,
                                fix() {
                                    if (migrations.has(value)) {
                                        node.value = node.value.replace(value, migrations.get(value));
                                    }
                                },
                            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdW5rbm93bi10b2tlbi1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm8tdW5rbm93bi10b2tlbi1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0sY0FBYyxDQUFDO0FBRXRELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztBQUU5QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7SUFDdEQsUUFBUSxFQUFFLGNBQWM7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUc7SUFDWCxHQUFHLEVBQUUsK0dBQStHO0lBQ3BILE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEIsaUVBQWlFO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO2dCQUN6QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN4QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7d0JBQ3pELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzsrQkFDckIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssT0FBTyxFQUFFLENBQUM7K0JBQ2pDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7K0JBQ2xCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7K0JBQ25CLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0IsTUFBTSxPQUFPLEdBQUcsWUFBWSxLQUFLLDJCQUEyQixDQUFDOzRCQUM3RCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQ0FDckIsSUFBSTtnQ0FDSixPQUFPO2dDQUNQLFFBQVE7Z0NBQ1IsTUFBTTtnQ0FDTixJQUFJLEVBQUUsS0FBSztnQ0FDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0NBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYztnQ0FDOUIsR0FBRztvQ0FDRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3Q0FDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQXFCLENBQUMsQ0FBQztvQ0FDcEYsQ0FBQztnQ0FDSCxDQUFDOzZCQUNGLENBQUMsQ0FBQzt3QkFDTCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUV6QixlQUFlLFlBQVksQ0FBQyJ9