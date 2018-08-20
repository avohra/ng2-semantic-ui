/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const ModalSize = {
    Mini: /** @type {?} */ ("mini"),
    Tiny: /** @type {?} */ ("tiny"),
    Small: /** @type {?} */ ("small"),
    Normal: /** @type {?} */ ("normal"),
    Large: /** @type {?} */ ("large")
};
/**
 * @template T, U, V
 */
export class ModalConfig {
    /**
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(context = undefined, isClosable = true) {
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
}
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
export class TemplateModalConfig extends ModalConfig {
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(template, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.template = template;
    }
}
if (false) {
    /** @type {?} */
    TemplateModalConfig.prototype.template;
}
/**
 * @template T, U, V
 */
export class ComponentModalConfig extends ModalConfig {
    /**
     * @param {?} component
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(component, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.component = component;
    }
}
if (false) {
    /** @type {?} */
    ComponentModalConfig.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGFBQWEsU0FBUyxHQUFHO0lBQ3JCLElBQUksb0JBQUUsTUFBbUIsQ0FBQTtJQUN6QixJQUFJLG9CQUFFLE1BQW1CLENBQUE7SUFDekIsS0FBSyxvQkFBRSxPQUFvQixDQUFBO0lBQzNCLE1BQU0sb0JBQUUsUUFBcUIsQ0FBQTtJQUM3QixLQUFLLG9CQUFFLE9BQW9CLENBQUE7Q0FDOUIsQ0FBQzs7OztBQUdGLE1BQU07Ozs7O0lBMEJGLFlBQVksVUFBd0IsU0FBUyxFQUFFLGFBQXFCLElBQUk7O1FBRXBFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0QsTUFBTSwwQkFBNEQsU0FBUSxXQUFvQjs7Ozs7O0lBRzFGLFlBQVksUUFBK0IsRUFBRSxVQUF3QixTQUFTLEVBQUUsYUFBcUIsSUFBSTtRQUNyRyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVCO0NBQ0o7Ozs7Ozs7O0FBR0QsTUFBTSwyQkFBNkQsU0FBUSxXQUFvQjs7Ozs7O0lBRzNGLFlBQVksU0FBbUIsRUFBRSxVQUF3QixTQUFTLEVBQUUsYUFBcUIsSUFBSTtRQUN6RixLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzlCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsVGVtcGxhdGUgfSBmcm9tIFwiLi9tb2RhbC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJub3JtYWxcIiB8IFwibGFyZ2VcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsU2l6ZSA9IHtcbiAgICBNaW5pOiBcIm1pbmlcIiBhcyBNb2RhbFNpemUsXG4gICAgVGlueTogXCJ0aW55XCIgYXMgTW9kYWxTaXplLFxuICAgIFNtYWxsOiBcInNtYWxsXCIgYXMgTW9kYWxTaXplLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIiBhcyBNb2RhbFNpemUsXG4gICAgTGFyZ2U6IFwibGFyZ2VcIiBhcyBNb2RhbFNpemVcbn07XG5cbi8vIFN0b3JlcyBhIGJhc2ljIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgbW9kYWwuXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4ge1xuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VjtcblxuICAgIC8vIERhdGEgdG8gcGFzcyB0byB0aGUgbW9kYWwgaW5zdGFuY2Ugd2hlbiBvcGVuZWQuXG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHVibGljIGlzRnVsbFNjcmVlbjpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwdWJsaWMgbXVzdFNjcm9sbDpib29sZWFuO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiJdfQ==