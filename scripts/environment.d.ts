/**
 * create a javascript map containing icon names
 */
export declare async function getIconSetsMap(): Promise<Map<IconSetName, IconNameFor<IconSetName>[]>>;

/**
 * create a javascript module containing element and icon names
 */
export async function makeDemoEnv(): Promise<string>;
