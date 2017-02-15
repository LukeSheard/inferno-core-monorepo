export declare function sortAttributes(html: string): string;
export declare function innerHTML(HTML: string): string;
export declare function createStyler(CSS: string): string;
export declare function style(CSS: string[] | string): string[] | string;
export declare function createContainerWithHTML(html: string): HTMLDivElement;
export declare function validateNodeTree(node: any): boolean;
export declare function waits(timer: number, done: Function): void;
export declare function triggerEvent(name: string, element: any): void;
