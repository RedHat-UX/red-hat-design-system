/**
 * This function returns whether or not an element is within the viewable area of a container. If partial is true,
 * then this function will return true even if only part of the element is in view.
 *
 * @param {HTMLElement} container  The container to check if the element is in view of.
 * @param {HTMLElement} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 * @param {boolean} strict    true if strict mode is set, never consider the container width and element width
 *
 * @returns True if the component is in View.
 */
export declare function isElementInView(container: HTMLElement, element: HTMLElement, partial?: boolean, strict?: boolean): boolean;
