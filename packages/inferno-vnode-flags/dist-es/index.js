var VNodeFlags;
(function (VNodeFlags) {
    VNodeFlags[VNodeFlags["Text"] = 1] = "Text";
    VNodeFlags[VNodeFlags["HtmlElement"] = 2] = "HtmlElement";
    VNodeFlags[VNodeFlags["ComponentClass"] = 4] = "ComponentClass";
    VNodeFlags[VNodeFlags["ComponentFunction"] = 8] = "ComponentFunction";
    VNodeFlags[VNodeFlags["ComponentUnknown"] = 16] = "ComponentUnknown";
    VNodeFlags[VNodeFlags["HasKeyedChildren"] = 32] = "HasKeyedChildren";
    VNodeFlags[VNodeFlags["HasNonKeyedChildren"] = 64] = "HasNonKeyedChildren";
    VNodeFlags[VNodeFlags["SvgElement"] = 128] = "SvgElement";
    VNodeFlags[VNodeFlags["MediaElement"] = 256] = "MediaElement";
    VNodeFlags[VNodeFlags["InputElement"] = 512] = "InputElement";
    VNodeFlags[VNodeFlags["TextareaElement"] = 1024] = "TextareaElement";
    VNodeFlags[VNodeFlags["SelectElement"] = 2048] = "SelectElement";
    VNodeFlags[VNodeFlags["Void"] = 4096] = "Void";
    VNodeFlags[VNodeFlags["Element"] = 3970] = "Element";
    VNodeFlags[VNodeFlags["Component"] = 28] = "Component";
})(VNodeFlags || (VNodeFlags = {}));
;
export default VNodeFlags;
