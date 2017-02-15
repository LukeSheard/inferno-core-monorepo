import { NO_OP } from 'inferno-shared';
import { Props, VNode, createVNode, cloneVNode, InfernoInput, InfernoChildren } from './core/VNodes';
import linkEvent from './DOM/events/linkEvent';
import options from './core/options';
import { render, findDOMNode, createRenderer } from './DOM/rendering';
import _VNodeFlags from 'inferno-vnode-flags';
import { EMPTY_OBJ } from './DOM/utils';
export declare const VNodeFlags: _VNodeFlags;
export declare const version = "VERSION";
declare var _default: {
    linkEvent: (data: any, event: any) => {
        data: any;
        event: any;
    };
    createVNode: (flags: any, type?: string | Function, props?: Props, children?: InfernoChildren, events?: any, key?: any, ref?: Function, noNormalise?: boolean) => VNode;
    cloneVNode: (vNodeToClone: VNode, props?: Props, ..._children: InfernoChildren[]) => VNode;
    NO_OP: any;
    EMPTY_OBJ: {};
    render: (input: string | number | VNode, parentDom?: Element | DocumentFragment | SVGAElement) => InfernoChildren;
    findDOMNode: (ref: any) => any;
    createRenderer: (parentDom?: any) => (lastInput: any, nextInput: any) => void;
    options: {
        recyclingEnabled: boolean;
        findDOMNodeEnabled: boolean;
        roots: any;
        createVNode: any;
        beforeRender: any;
        afterRender: any;
        afterMount: any;
        afterUpdate: any;
        beforeUnmount: any;
    };
    version: string;
};
export default _default;
export { Props, VNode, InfernoChildren, InfernoInput, linkEvent, createVNode, cloneVNode, NO_OP, EMPTY_OBJ, render, findDOMNode, createRenderer, options };
export { isUnitlessNumber as internal_isUnitlessNumber } from './DOM/constants';
export { normalize as internal_normalize } from './core/normalization';
