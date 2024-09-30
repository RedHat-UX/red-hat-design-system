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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdW5rbm93bi10b2tlbi1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm8tdW5rbm93bi10b2tlbi1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFDO0FBRTFDLE1BQU0sUUFBUSxHQUFHLDRCQUE0QixDQUFDO0FBRTlDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtJQUN0RCxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLElBQUksR0FBRztJQUNYLEdBQUcsRUFBRSwrR0FBK0c7SUFDcEgsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDckMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN0QixpRUFBaUU7UUFDakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUMxQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEIsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3hCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQzt3QkFDekQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUNuQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO3dCQUN4QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOytCQUNyQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxPQUFPLEVBQUUsQ0FBQzsrQkFDakMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQXlCLENBQUM7K0JBQ3RDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7K0JBQ25CLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs0QkFDN0IsTUFBTSxPQUFPLEdBQUcsWUFBWSxLQUFLLDJCQUEyQixDQUFDOzRCQUM3RCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQ0FDckIsSUFBSTtnQ0FDSixPQUFPO2dDQUNQLFFBQVE7Z0NBQ1IsTUFBTTtnQ0FDTixJQUFJLEVBQUUsS0FBSztnQ0FDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0NBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYztnQ0FDOUIsR0FBRztvQ0FDRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3Q0FDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQXFCLENBQUMsQ0FBQztvQ0FDcEYsQ0FBQztnQ0FDSCxDQUFDOzZCQUNGLENBQUMsQ0FBQzt3QkFDTCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUV6QixlQUFlLFlBQVksQ0FBQyJ9