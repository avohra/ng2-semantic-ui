/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
/** @type {?} */
export const SidebarTransition = {
    Overlay: (/** @type {?} */ ("overlay")),
    Push: (/** @type {?} */ ("push")),
    ScaleDown: (/** @type {?} */ ("scale down")),
    Uncover: (/** @type {?} */ ("uncover")),
    SlideAlong: (/** @type {?} */ ("slide along")),
    SlideOut: (/** @type {?} */ ("slide out"))
};
/** @type {?} */
export const SidebarDirection = {
    Left: (/** @type {?} */ ("left")),
    Right: (/** @type {?} */ ("right")),
    Top: (/** @type {?} */ ("top")),
    Bottom: (/** @type {?} */ ("bottom"))
};
export class SidebarService {
    /**
     * @return {?}
     */
    get width() {
        if (this.direction === SidebarDirection.Left) {
            return this._width;
        }
        if (this.direction === SidebarDirection.Right) {
            return -this._width;
        }
        return 0;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    set width(width) {
        this._width = width;
        this.widthChange.emit();
    }
    /**
     * @return {?}
     */
    get height() {
        if (this.direction === SidebarDirection.Top) {
            return this._height;
        }
        if (this.direction === SidebarDirection.Bottom) {
            return -this._height;
        }
        return 0;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    set height(height) {
        this._height = height;
        this.heightChange.emit();
    }
    /**
     * @param {?=} isVisible
     */
    constructor(isVisible = false) {
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisibleState(isVisible) {
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(() => this.wasJustOpened = false);
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(() => this.isAnimating = false, 500);
        }
    }
    /**
     * @return {?}
     */
    toggleVisibleState() {
        this.setVisibleState(!this.isVisible);
    }
}
if (false) {
    /** @type {?} */
    SidebarService.prototype.isVisible;
    /** @type {?} */
    SidebarService.prototype.isAnimating;
    /** @type {?} */
    SidebarService.prototype.wasJustOpened;
    /** @type {?} */
    SidebarService.prototype.direction;
    /** @type {?} */
    SidebarService.prototype._width;
    /** @type {?} */
    SidebarService.prototype._height;
    /** @type {?} */
    SidebarService.prototype.isVisibleChange;
    /** @type {?} */
    SidebarService.prototype.widthChange;
    /** @type {?} */
    SidebarService.prototype.heightChange;
    /** @type {?} */
    SidebarService.prototype._isAnimatingTimeout;
    /** @type {?} */
    SidebarService.prototype.transition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJN0MsTUFBTSxPQUFPLGlCQUFpQixHQUFHO0lBQzdCLE9BQU8sRUFBRSxtQkFBQSxTQUFTLEVBQXFCO0lBQ3ZDLElBQUksRUFBRSxtQkFBQSxNQUFNLEVBQXFCO0lBQ2pDLFNBQVMsRUFBRSxtQkFBQSxZQUFZLEVBQXFCO0lBQzVDLE9BQU8sRUFBRSxtQkFBQSxTQUFTLEVBQXFCO0lBQ3ZDLFVBQVUsRUFBRSxtQkFBQSxhQUFhLEVBQXFCO0lBQzlDLFFBQVEsRUFBRSxtQkFBQSxXQUFXLEVBQXFCO0NBQzdDOztBQUlELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRztJQUM1QixJQUFJLEVBQUUsbUJBQUEsTUFBTSxFQUFvQjtJQUNoQyxLQUFLLEVBQUUsbUJBQUEsT0FBTyxFQUFvQjtJQUNsQyxHQUFHLEVBQUUsbUJBQUEsS0FBSyxFQUFvQjtJQUM5QixNQUFNLEVBQUUsbUJBQUEsUUFBUSxFQUFvQjtDQUN2QztBQUVELE1BQU07Ozs7SUFVRixJQUFXLEtBQUs7UUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxJQUFXLEtBQUssQ0FBQyxLQUFZO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQVcsTUFBTTtRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDOzs7OztJQUVELElBQVcsTUFBTSxDQUFDLE1BQWE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBVUQsWUFBWSxZQUFvQixLQUFLO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLFNBQWlCO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEYsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7OztJQS9FRyxtQ0FBeUI7O0lBQ3pCLHFDQUEyQjs7SUFDM0IsdUNBQTZCOztJQUU3QixtQ0FBa0M7O0lBRWxDLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQWdDdkIseUNBQTZDOztJQUM3QyxxQ0FBc0M7O0lBQ3RDLHNDQUF1Qzs7SUFFdkMsNkNBQW1DOztJQUVuQyxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyVHJhbnNpdGlvbiA9IFwib3ZlcmxheVwiIHwgXCJwdXNoXCIgfCBcInNjYWxlIGRvd25cIiB8IFwidW5jb3ZlclwiIHwgXCJzbGlkZSBhbG9uZ1wiIHwgXCJzbGlkZSBvdXRcIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJUcmFuc2l0aW9uID0ge1xuICAgIE92ZXJsYXk6IFwib3ZlcmxheVwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFB1c2g6IFwicHVzaFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNjYWxlRG93bjogXCJzY2FsZSBkb3duXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgVW5jb3ZlcjogXCJ1bmNvdmVyXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVBbG9uZzogXCJzbGlkZSBhbG9uZ1wiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlT3V0OiBcInNsaWRlIG91dFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uXG59O1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyRGlyZWN0aW9uID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInRvcFwiIHwgXCJib3R0b21cIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJEaXJlY3Rpb24gPSB7XG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgVG9wOiBcInRvcFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgQm90dG9tOiBcImJvdHRvbVwiIGFzIFNpZGViYXJEaXJlY3Rpb25cbn07XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyU2VydmljZSB7XG4gICAgcHVibGljIGlzVmlzaWJsZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIHB1YmxpYyB3YXNKdXN0T3BlbmVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb247XG5cbiAgICBwcml2YXRlIF93aWR0aDpudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0Om51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHdpZHRoKHdpZHRoOm51bWJlcikge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Ub3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoZWlnaHQoaGVpZ2h0Om51bWJlcikge1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBwdWJsaWMgd2lkdGhDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHB1YmxpYyBoZWlnaHRDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaXNWaXNpYmxlOmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDI2MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpc2libGVTdGF0ZShpc1Zpc2libGU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAhPT0gaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UuZW1pdChpc1Zpc2libGUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5faXNBbmltYXRpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlLCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVZpc2libGVTdGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNldFZpc2libGVTdGF0ZSghdGhpcy5pc1Zpc2libGUpO1xuICAgIH1cbn1cbiJdfQ==