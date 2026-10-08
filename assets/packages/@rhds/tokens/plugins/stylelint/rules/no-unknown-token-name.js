import { readFileSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';
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
// Reading and parsing a CEM for every declaration would be unnecessarily
// expensive. Cache the allowed property names by manifest path for the life of
// the Stylelint process instead.
const cemCache = new Map();
/**
 * Collect component-level `--rh-*` properties from a Custom Elements Manifest.
 * These properties are valid public APIs, but they do not appear in the global
 * design-token registry and would otherwise be reported as unknown tokens.
 */
function getCemAllowed(cemPath) {
    if (cemCache.has(cemPath)) {
        return cemCache.get(cemPath);
    }
    const allowed = new Set();
    try {
        const cem = JSON.parse(readFileSync(cemPath, 'utf8'));
        // CSS custom properties are declared on custom-element class declarations
        // in the CEM schema. Ignore non-custom-element declarations and non-RHDS
        // properties so the manifest does not broadly disable this rule.
        for (const mod of cem?.modules ?? []) {
            for (const declaration of mod.declarations ?? []) {
                if (declaration.customElement) {
                    for (const cssProperty of declaration.cssProperties ?? []) {
                        if (cssProperty.name.startsWith('--rh')) {
                            allowed.add(cssProperty.name);
                        }
                    }
                }
            }
        }
    }
    catch {
        // Treat a missing or invalid optional manifest as having no allowed names;
        // normal unknown-token validation should continue to run.
    }
    cemCache.set(cemPath, allowed);
    return allowed;
}
const ruleFunction = (_, opts) => {
    return (root, result) => {
        // Component styles conventionally live under */rh-tagname/rh-tagname.css.
        // Values using that component's own prefix are local custom properties,
        // not global token names. Inline CSS may not provide a source filename, so
        // guard access to the input metadata.
        const tagName = root.source?.input?.file
            ? dirname(root.source.input.file).split(sep).findLast(x => x.startsWith('rh-'))
            : undefined;
        const validOptions = stylelint.utils.validateOptions(result, ruleName);
        if (!validOptions) {
            return;
        }
        const migrations = new Map(Object.entries(opts?.migrations ?? {}));
        const allowed = new Set(opts?.allowed ?? []);
        if (opts?.cem) {
            // Resolve relative CEM paths the same way Stylelint resolves project
            // configuration: from the process working directory.
            for (const name of getCemAllowed(resolve(process.cwd(), opts.cem))) {
                allowed.add(name);
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdW5rbm93bi10b2tlbi1uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm8tdW5rbm93bi10b2tlbi1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0sY0FBYyxDQUFDO0FBRXRELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztBQUU5QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7SUFDdEQsUUFBUSxFQUFFLGNBQWM7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUc7SUFDWCxHQUFHLEVBQUUsK0dBQStHO0lBQ3BILE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLHlFQUF5RTtBQUN6RSwrRUFBK0U7QUFDL0UsaUNBQWlDO0FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0FBRWhEOzs7O0dBSUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxPQUFlO0lBQ3BDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUVsQyxJQUFJLENBQUM7UUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztR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