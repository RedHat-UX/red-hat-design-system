"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const stylelint_1 = __importDefault(require("stylelint"));
module.exports = [
    {
        ruleName: 'rhds/token-values',
        meta: {
            url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/token-values.ts',
            fixable: true,
        },
        rule: () => {
            function ruleFunction(primary, secondary, options) {
                return async (root, result) => {
                    const mod = await import('./stylelint/rules/token-values.js');
                    const rule = mod.default(primary, secondary, options);
                    return rule(root, result);
                };
            }
            ruleFunction.messages = stylelint_1.default.utils.ruleMessages('rhds/token-values', {
                expected: 'Expected ...',
            });
            ruleFunction.meta = {
                url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/token-values.ts',
                fixable: true,
            };
            return ruleFunction;
        },
    },
    {
        ruleName: 'rhds/no-unknown-token-name',
        rule: () => {
            function ruleFunction(primary, secondary, options) {
                return async (root, result) => {
                    const mod = await import('./stylelint/rules/no-unknown-token-name.js');
                    const rule = mod.default(primary, secondary, options);
                    return rule(root, result);
                };
            }
            ruleFunction.messages = stylelint_1.default.utils.ruleMessages('rhds/no-unknown-token-name', {
                expected: 'Expected ...',
            });
            ruleFunction.meta = {
                url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/no-unknown-token-name.ts',
                fixable: true,
            };
            return ruleFunction;
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVsaW50LmNqcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0eWxlbGludC5jdHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLDBEQUFrQztBQUdsQyxpQkFBUztJQUNQO1FBQ0UsUUFBUSxFQUFFLG1CQUFtQjtRQUU3QixJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsc0dBQXNHO1lBQzNHLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFFRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1QsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUMvQyxPQUFPLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7b0JBQzlELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUM7WUFDSixDQUFDO1lBRUQsWUFBWSxDQUFDLFFBQVEsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3hFLFFBQVEsRUFBRSxjQUFjO2FBQ3pCLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxJQUFJLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSxzR0FBc0c7Z0JBQzNHLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztZQUVGLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FDUTtJQUNYO1FBQ0UsUUFBUSxFQUFFLDRCQUE0QjtRQUV0QyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1QsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUMvQyxPQUFPLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7b0JBQ3ZFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUM7WUFDSixDQUFDO1lBRUQsWUFBWSxDQUFDLFFBQVEsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsNEJBQTRCLEVBQUU7Z0JBQ2pGLFFBQVEsRUFBRSxjQUFjO2FBQ3pCLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxJQUFJLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSwrR0FBK0c7Z0JBQ3BILE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztZQUVGLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FDUTtDQUNaLENBQUMifQ==