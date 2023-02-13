/**
 * Binds a class method to the instance
 *
 * @example Binding an event listener
 *     ```ts
 *     private mo = new MutationObserver(this.onMutation);
 *
 *     @bound onMutation(records: MutationRecord[]) {
 *       this.count = this.children.length;
 *     }
 *     ```
 */
export declare function bound(_: unknown, key: string, descriptor: PropertyDescriptor): PropertyDescriptor;
