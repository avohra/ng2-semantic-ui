/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PositioningPlacement } from "../../../misc/util/internal";
/** @type {?} */
export var PopupTrigger = {
    Hover: (/** @type {?} */ ("hover")),
    Click: (/** @type {?} */ ("click")),
    OutsideClick: (/** @type {?} */ ("outsideClick")),
    Focus: (/** @type {?} */ ("focus")),
    Manual: (/** @type {?} */ ("manual"))
};
/**
 * @record
 */
export function IPopupConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPopupConfig.prototype.header;
    /** @type {?|undefined} */
    IPopupConfig.prototype.text;
    /** @type {?|undefined} */
    IPopupConfig.prototype.placement;
    /** @type {?|undefined} */
    IPopupConfig.prototype.trigger;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isInverted;
    /** @type {?|undefined} */
    IPopupConfig.prototype.delay;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isBasic;
    /** @type {?|undefined} */
    IPopupConfig.prototype.transition;
    /** @type {?|undefined} */
    IPopupConfig.prototype.transitionDuration;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isFlowing;
    /** @type {?|undefined} */
    IPopupConfig.prototype.isInline;
    /** @type {?|undefined} */
    IPopupConfig.prototype.parent;
}
var PopupConfig = /** @class */ (function () {
    function PopupConfig(defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
    return PopupConfig;
}());
export { PopupConfig };
if (false) {
    /** @type {?} */
    PopupConfig.prototype.header;
    /** @type {?} */
    PopupConfig.prototype.text;
    /** @type {?} */
    PopupConfig.prototype.placement;
    /** @type {?} */
    PopupConfig.prototype.trigger;
    /** @type {?} */
    PopupConfig.prototype.isInverted;
    /** @type {?} */
    PopupConfig.prototype.delay;
    /** @type {?} */
    PopupConfig.prototype.isBasic;
    /** @type {?} */
    PopupConfig.prototype.transition;
    /** @type {?} */
    PopupConfig.prototype.size;
    /** @type {?} */
    PopupConfig.prototype.width;
    /** @type {?} */
    PopupConfig.prototype.transitionDuration;
    /** @type {?} */
    PopupConfig.prototype.isFlowing;
    /** @type {?} */
    PopupConfig.prototype.isInline;
    /** @type {?} */
    PopupConfig.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQU94RixNQUFNLEtBQU8sWUFBWSxHQUFHO0lBQ3hCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLFlBQVksRUFBRSxtQkFBQSxjQUFjLEVBQWdCO0lBQzVDLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLE1BQU0sRUFBRSxtQkFBQSxRQUFRLEVBQWdCO0NBQ25DOzs7O0FBRUQsa0NBYUM7OztJQVpHLDhCQUFlOztJQUNmLDRCQUFhOztJQUNiLGlDQUFnQzs7SUFDaEMsK0JBQXNCOztJQUN0QixrQ0FBb0I7O0lBQ3BCLDZCQUFjOztJQUNkLCtCQUFpQjs7SUFDakIsa0NBQW1COztJQUNuQiwwQ0FBMkI7O0lBQzNCLGlDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQiw4QkFBZ0I7O0FBR3BCO0lBZ0JJLHFCQUFZLFFBQTBCO1FBQTFCLHlCQUFBLEVBQUEsYUFBMEI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOzs7O0lBM0JHLDZCQUFzQjs7SUFDdEIsMkJBQW9COztJQUNwQixnQ0FBc0M7O0lBQ3RDLDhCQUE0Qjs7SUFDNUIsaUNBQTBCOztJQUMxQiw0QkFBb0I7O0lBQ3BCLDhCQUF1Qjs7SUFDdkIsaUNBQXlCOztJQUN6QiwyQkFBc0I7O0lBQ3RCLDRCQUF3Qjs7SUFDeEIseUNBQWlDOztJQUNqQyxnQ0FBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgUG9zaXRpb25pbmdQbGFjZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCB0eXBlIFBvcHVwVHJpZ2dlciA9IFwiaG92ZXJcIiB8IFwiY2xpY2tcIiB8IFwib3V0c2lkZUNsaWNrXCIgfCBcImZvY3VzXCIgfCBcIm1hbnVhbFwiO1xuZXhwb3J0IHR5cGUgUG9wdXBTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibGFyZ2VcIiB8IFwiaHVnZVwiO1xuZXhwb3J0IHR5cGUgUG9wdXBXaWR0aCA9IFwid2lkZVwiIHwgXCJ2ZXJ5IHdpZGVcIiAgfCBcImZsb3dpbmdcIjtcblxuZXhwb3J0IGNvbnN0IFBvcHVwVHJpZ2dlciA9IHtcbiAgICBIb3ZlcjogXCJob3ZlclwiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBDbGljazogXCJjbGlja1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBPdXRzaWRlQ2xpY2s6IFwib3V0c2lkZUNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIEZvY3VzOiBcImZvY3VzXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE1hbnVhbDogXCJtYW51YWxcIiBhcyBQb3B1cFRyaWdnZXJcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwQ29uZmlnIHtcbiAgICBoZWFkZXI/OnN0cmluZztcbiAgICB0ZXh0PzpzdHJpbmc7XG4gICAgcGxhY2VtZW50PzpQb3NpdGlvbmluZ1BsYWNlbWVudDtcbiAgICB0cmlnZ2VyPzpQb3B1cFRyaWdnZXI7XG4gICAgaXNJbnZlcnRlZD86Ym9vbGVhbjtcbiAgICBkZWxheT86bnVtYmVyO1xuICAgIGlzQmFzaWM/OmJvb2xlYW47XG4gICAgdHJhbnNpdGlvbj86c3RyaW5nO1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbj86bnVtYmVyO1xuICAgIGlzRmxvd2luZz86Ym9vbGVhbjtcbiAgICBpc0lubGluZT86Ym9vbGVhbjtcbiAgICBwYXJlbnQ/OkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbmZpZyBpbXBsZW1lbnRzIElQb3B1cENvbmZpZyB7XG4gICAgcHVibGljIGhlYWRlcj86c3RyaW5nO1xuICAgIHB1YmxpYyB0ZXh0PzpzdHJpbmc7XG4gICAgcHVibGljIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcbiAgICBwdWJsaWMgdHJpZ2dlcjpQb3B1cFRyaWdnZXI7XG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcbiAgICBwdWJsaWMgZGVsYXk6bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyBzaXplOlBvcHVwU2l6ZTtcbiAgICBwdWJsaWMgd2lkdGg6UG9wdXBXaWR0aDtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcbiAgICBwdWJsaWMgaXNGbG93aW5nOmJvb2xlYW47XG4gICAgcHVibGljIGlzSW5saW5lOmJvb2xlYW47XG4gICAgcHVibGljIHBhcmVudDpFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGVmYXVsdHM6SVBvcHVwQ29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BMZWZ0O1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSBQb3B1cFRyaWdnZXIuSG92ZXI7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgICAgIHRoaXMuaXNGbG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cyk7XG4gICAgfVxufVxuIl19