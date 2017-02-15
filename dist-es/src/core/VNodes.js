import { isArray, isInvalid, isNull, isNullOrUndef, isStatefulComponent, isUndefined } from 'inferno-shared';
import VNodeFlags from 'inferno-vnode-flags';
import { normalize } from './normalization';
import options from './options';
export function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
    if (flags & VNodeFlags.ComponentUnknown) {
        flags = isStatefulComponent(type) ? VNodeFlags.ComponentClass : VNodeFlags.ComponentFunction;
    }
    const vNode = {
        children: isUndefined(children) ? null : children,
        dom: null,
        events: events || null,
        flags,
        key: isUndefined(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type
    };
    if (!noNormalise) {
        normalize(vNode);
    }
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
export function cloneVNode(vNodeToClone, props, ..._children) {
    let children = _children;
    if (_children.length > 0 && !isNull(_children[0])) {
        if (!props) {
            props = {};
        }
        if (_children.length === 1) {
            children = _children[0];
        }
        if (isUndefined(props.children)) {
            props.children = children;
        }
        else {
            if (isArray(children)) {
                if (isArray(props.children)) {
                    props.children = props.children.concat(children);
                }
                else {
                    props.children = [props.children].concat(children);
                }
            }
            else {
                if (isArray(props.children)) {
                    props.children.push(children);
                }
                else {
                    props.children = [props.children];
                    props.children.push(children);
                }
            }
        }
    }
    children = null;
    let newVNode;
    if (isArray(vNodeToClone)) {
        const tmpArray = [];
        for (let i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(cloneVNode(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        const flags = vNodeToClone.flags;
        const events = vNodeToClone.events || (props && props.events) || null;
        const key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        const ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & VNodeFlags.Component) {
            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
            const newProps = newVNode.props;
            if (newProps) {
                const newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (isArray(newChildren)) {
                        for (let i = 0, len = newChildren.length; i < len; i++) {
                            const child = newChildren[i];
                            if (!isInvalid(child) && isVNode(child)) {
                                newProps.children[i] = cloneVNode(child);
                            }
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = cloneVNode(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & VNodeFlags.Element) {
            children = (props && props.children) || vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
        }
        else if (flags & VNodeFlags.Text) {
            newVNode = createTextVNode(vNodeToClone.children);
        }
    }
    return newVNode;
}
export function createVoidVNode() {
    return createVNode(VNodeFlags.Void);
}
export function createTextVNode(text) {
    return createVNode(VNodeFlags.Text, null, null, text, null, null, null, true);
}
export function isVNode(o) {
    return !!o.flags;
}
