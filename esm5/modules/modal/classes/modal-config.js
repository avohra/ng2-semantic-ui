/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var ModalSize = {
    Mini: /** @type {?} */ ("mini"),
    Tiny: /** @type {?} */ ("tiny"),
    Small: /** @type {?} */ ("small"),
    Normal: /** @type {?} */ ("normal"),
    Large: /** @type {?} */ ("large")
};
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
ModalConfig = /** @class */ (function () {
    function ModalConfig(context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        // Initialise with default values.
        this.isClosable = isClosable;
        this.context = context;
        this.size = ModalSize.Normal;
        this.isFullScreen = false;
        this.isBasic = false;
        this.isInverted = false;
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
    return ModalConfig;
}());
/**
 * @template T, U, V
 */
export { ModalConfig };
if (false) {
    /** @type {?} */
    ModalConfig.prototype.isClosable;
    /** @type {?} */
    ModalConfig.prototype.closeResult;
    /** @type {?} */
    ModalConfig.prototype.context;
    /** @type {?} */
    ModalConfig.prototype.size;
    /** @type {?} */
    ModalConfig.prototype.isFullScreen;
    /** @type {?} */
    ModalConfig.prototype.isBasic;
    /** @type {?} */
    ModalConfig.prototype.isInverted;
    /** @type {?} */
    ModalConfig.prototype.mustScroll;
    /** @type {?} */
    ModalConfig.prototype.transition;
    /** @type {?} */
    ModalConfig.prototype.transitionDuration;
}
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
TemplateModalConfig = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateModalConfig, _super);
    function TemplateModalConfig(template, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.template = template;
        return _this;
    }
    return TemplateModalConfig;
}(ModalConfig));
/**
 * @template T, U, V
 */
export { TemplateModalConfig };
if (false) {
    /** @type {?} */
    TemplateModalConfig.prototype.template;
}
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
ComponentModalConfig = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentModalConfig, _super);
    function ComponentModalConfig(component, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.component = component;
        return _this;
    }
    return ComponentModalConfig;
}(ModalConfig));
/**
 * @template T, U, V
 */
export { ComponentModalConfig };
if (false) {
    /** @type {?} */
    ComponentModalConfig.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxXQUFhLFNBQVMsR0FBRztJQUNyQixJQUFJLG9CQUFFLE1BQW1CLENBQUE7SUFDekIsSUFBSSxvQkFBRSxNQUFtQixDQUFBO0lBQ3pCLEtBQUssb0JBQUUsT0FBb0IsQ0FBQTtJQUMzQixNQUFNLG9CQUFFLFFBQXFCLENBQUE7SUFDN0IsS0FBSyxvQkFBRSxPQUFvQixDQUFBO0NBQzlCLENBQUM7Ozs7QUFHRjs7O0FBQUE7SUEwQkkscUJBQVksT0FBaUMsRUFBRSxVQUF5QjtRQUE1RCx3QkFBQSxFQUFBLG1CQUFpQztRQUFFLDJCQUFBLEVBQUEsaUJBQXlCOztRQUVwRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztLQUNqQztzQkF0REw7SUF1REMsQ0FBQTs7OztBQXpDRCx1QkF5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Q7OztBQUFBO0lBQTBFLCtDQUFvQjtJQUcxRiw2QkFBWSxRQUErQixFQUFFLE9BQWlDLEVBQUUsVUFBeUI7UUFBNUQsd0JBQUEsRUFBQSxtQkFBaUM7UUFBRSwyQkFBQSxFQUFBLGlCQUF5QjtRQUF6RyxZQUNJLGtCQUFNLE9BQU8sRUFBRSxVQUFVLENBQUMsU0FHN0I7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7S0FDNUI7OEJBakVMO0VBMEQwRSxXQUFXLEVBUXBGLENBQUE7Ozs7QUFSRCwrQkFRQzs7Ozs7Ozs7QUFHRDs7O0FBQUE7SUFBMkUsZ0RBQW9CO0lBRzNGLDhCQUFZLFNBQW1CLEVBQUUsT0FBaUMsRUFBRSxVQUF5QjtRQUE1RCx3QkFBQSxFQUFBLG1CQUFpQztRQUFFLDJCQUFBLEVBQUEsaUJBQXlCO1FBQTdGLFlBQ0ksa0JBQU0sT0FBTyxFQUFFLFVBQVUsQ0FBQyxTQUc3QjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztLQUM5QjsrQkE1RUw7RUFxRTJFLFdBQVcsRUFRckYsQ0FBQTs7OztBQVJELGdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbFRlbXBsYXRlIH0gZnJvbSBcIi4vbW9kYWwtdGVtcGxhdGVcIjtcblxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibm9ybWFsXCIgfCBcImxhcmdlXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFNpemUgPSB7XG4gICAgTWluaTogXCJtaW5pXCIgYXMgTW9kYWxTaXplLFxuICAgIFRpbnk6IFwidGlueVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBTbWFsbDogXCJzbWFsbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBOb3JtYWw6IFwibm9ybWFsXCIgYXMgTW9kYWxTaXplLFxuICAgIExhcmdlOiBcImxhcmdlXCIgYXMgTW9kYWxTaXplXG59O1xuXG4vLyBTdG9yZXMgYSBiYXNpYyBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIG1vZGFsLlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IHtcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlY7XG5cbiAgICAvLyBEYXRhIHRvIHBhc3MgdG8gdGhlIG1vZGFsIGluc3RhbmNlIHdoZW4gb3BlbmVkLlxuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHB1YmxpYyBpc0Z1bGxTY3JlZW46Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHVibGljIG11c3RTY3JvbGw6Ym9vbGVhbjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBpc0Nsb3NhYmxlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IE1vZGFsU2l6ZS5Ob3JtYWw7XG4gICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNjYWxlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNTAwO1xuICAgIH1cbn1cblxuLy8gVXNlZCB3aGVuIGNyZWF0aW5nIGEgbW9kYWwgZnJvbSBhIGBUZW1wbGF0ZVJlZmAuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29uZmlnPFQsIFUsIFY+IHtcbiAgICBwdWJsaWMgdGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPjtcblxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlOk1vZGFsVGVtcGxhdGU8VCwgVSwgVj4sIGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihjb250ZXh0LCBpc0Nsb3NhYmxlKTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGFuIGV4aXN0aW5nIGNvbXBvbmVudC5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29uZmlnPFQsIFUsIFY+IHtcbiAgICBwdWJsaWMgY29tcG9uZW50OlR5cGU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudDpUeXBlPGFueT4sIGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihjb250ZXh0LCBpc0Nsb3NhYmxlKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG59XG4iXX0=