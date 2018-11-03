/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PositioningPlacement } from "../../../misc/util/internal";
/** @type {?} */
export const PopupTrigger = {
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
export class PopupConfig {
    /**
     * @param {?=} defaults
     */
    constructor(defaults = {}) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQU94RixNQUFNLE9BQU8sWUFBWSxHQUFHO0lBQ3hCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLFlBQVksRUFBRSxtQkFBQSxjQUFjLEVBQWdCO0lBQzVDLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWdCO0lBQzlCLE1BQU0sRUFBRSxtQkFBQSxRQUFRLEVBQWdCO0NBQ25DOzs7O0FBRUQsa0NBYUM7OztJQVpHLDhCQUFlOztJQUNmLDRCQUFhOztJQUNiLGlDQUFnQzs7SUFDaEMsK0JBQXNCOztJQUN0QixrQ0FBb0I7O0lBQ3BCLDZCQUFjOztJQUNkLCtCQUFpQjs7SUFDakIsa0NBQW1COztJQUNuQiwwQ0FBMkI7O0lBQzNCLGlDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQiw4QkFBZ0I7O0FBR3BCLE1BQU07Ozs7SUFnQkYsWUFBWSxXQUF3QixFQUFFO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKOzs7SUEzQkcsNkJBQXNCOztJQUN0QiwyQkFBb0I7O0lBQ3BCLGdDQUFzQzs7SUFDdEMsOEJBQTRCOztJQUM1QixpQ0FBMEI7O0lBQzFCLDRCQUFvQjs7SUFDcEIsOEJBQXVCOztJQUN2QixpQ0FBeUI7O0lBQ3pCLDJCQUFzQjs7SUFDdEIsNEJBQXdCOztJQUN4Qix5Q0FBaUM7O0lBQ2pDLGdDQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4Qiw2QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5leHBvcnQgdHlwZSBQb3B1cFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJsYXJnZVwiIHwgXCJodWdlXCI7XG5leHBvcnQgdHlwZSBQb3B1cFdpZHRoID0gXCJ3aWRlXCIgfCBcInZlcnkgd2lkZVwiICB8IFwiZmxvd2luZ1wiO1xuXG5leHBvcnQgY29uc3QgUG9wdXBUcmlnZ2VyID0ge1xuICAgIEhvdmVyOiBcImhvdmVyXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIENsaWNrOiBcImNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgRm9jdXM6IFwiZm9jdXNcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgTWFudWFsOiBcIm1hbnVhbFwiIGFzIFBvcHVwVHJpZ2dlclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBDb25maWcge1xuICAgIGhlYWRlcj86c3RyaW5nO1xuICAgIHRleHQ/OnN0cmluZztcbiAgICBwbGFjZW1lbnQ/OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHRyaWdnZXI/OlBvcHVwVHJpZ2dlcjtcbiAgICBpc0ludmVydGVkPzpib29sZWFuO1xuICAgIGRlbGF5PzpudW1iZXI7XG4gICAgaXNCYXNpYz86Ym9vbGVhbjtcbiAgICB0cmFuc2l0aW9uPzpzdHJpbmc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzpudW1iZXI7XG4gICAgaXNGbG93aW5nPzpib29sZWFuO1xuICAgIGlzSW5saW5lPzpib29sZWFuO1xuICAgIHBhcmVudD86RWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHNpemU6UG9wdXBTaXplO1xuICAgIHB1YmxpYyB3aWR0aDpQb3B1cFdpZHRoO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Zsb3dpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbmxpbmU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgcGFyZW50OkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5pc0Zsb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0lubGluZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iXX0=