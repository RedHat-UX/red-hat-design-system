/**
 * Whether or not the container contains the node,
 * and if not, whether the node is contained by any element
 * slotted in to the container
 * @param container haystack
 * @param node needle
 */
export function containsDeep(container, node) {
    if (container.contains(node)) {
        return true;
    }
    else {
        for (const slot of container.querySelectorAll('slot') ?? []) {
            for (const el of slot.assignedElements()) {
                if (el.contains(node)) {
                    return true;
                }
            }
        }
        return false;
    }
}
//# sourceMappingURL=containsDeep.js.map