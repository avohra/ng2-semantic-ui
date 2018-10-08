/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HostListener } from "@angular/core";
import { PopupTrigger } from "./popup-config";
import { SuiPopup } from "../components/popup";
/**
 * @record
 */
export function IPopup() { }
if (false) {
    /**
     * @return {?}
     */
    IPopup.prototype.open = function () { };
    /**
     * @return {?}
     */
    IPopup.prototype.close = function () { };
    /**
     * @return {?}
     */
    IPopup.prototype.toggle = function () { };
}
/**
 * @abstract
 */
var SuiPopupController = /** @class */ (function () {
    function SuiPopupController(_renderer, _element, _componentFactory, config) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(function () { return _this.cleanup(); });
    }
    Object.defineProperty(SuiPopupController.prototype, "popup", {
        // Returns generated popup instance.
        get: 
        // Returns generated popup instance.
        /**
         * @return {?}
         */
        function () {
            // Use non-null assertion as we only access this when a popup exists.
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} config
     * @return {?}
     */
    SuiPopupController.prototype.configure = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.openDelayed = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(function () { return _this.open(); }, this.popup.config.delay);
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Attach the generated component to the current application.
        this._componentFactory.attachToApplication(this._componentRef);
        if (this.popup.config.isInline) {
            this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
        }
        else {
            // Move the generated element to the body to avoid any positioning issues.
            this._componentFactory.moveToDocumentBody(this._componentRef);
        }
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", function (e) {
            return _this.onDocumentClick(e);
        });
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        /** @type {?} */
        var lifecycle = ((/** @type {?} */ (this))).popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.close = /**
     * @return {?}
     */
    function () {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        /** @type {?} */
        var lifecycle = ((/** @type {?} */ (this))).popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.toggleDelayed = /**
     * @return {?}
     */
    function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.toggle = /**
     * @return {?}
     */
    function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Click ||
            this.popup.config.trigger === PopupTrigger.OutsideClick) {
            // Repeated clicks require a toggle, rather than just opening the popup each time.
            this.toggleDelayed();
        }
        else if (this.popup.config.trigger === PopupTrigger.Focus &&
            (!this._componentRef || (this._componentRef && !this.popup.isOpen))) {
            // Repeated clicks with a focus trigger requires an open (as focus isn't ever lost on repeated click).
            this.openDelayed();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiPopupController.prototype.onDocumentClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            /** @type {?} */
            var target = (/** @type {?} */ (e.target));
            // Close the popup if the click is outside of the popup element.
            if (!((/** @type {?} */ (this._element.nativeElement))).contains(target)) {
                this.close();
            }
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiPopupController.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cleanup();
    };
    SuiPopupController.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }],
        onClick: [{ type: HostListener, args: ["click",] }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
    };
    return SuiPopupController;
}());
export { SuiPopupController };
if (false) {
    /** @type {?} */
    SuiPopupController.prototype._componentRef;
    /** @type {?} */
    SuiPopupController.prototype._openingTimeout;
    /** @type {?} */
    SuiPopupController.prototype._documentListener;
    /** @type {?} */
    SuiPopupController.prototype._renderer;
    /** @type {?} */
    SuiPopupController.prototype._element;
    /** @type {?} */
    SuiPopupController.prototype._componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFlLFlBQVksRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHL0MsNEJBSUM7Ozs7O0lBSEcsd0NBQVk7Ozs7SUFDWix5Q0FBYTs7OztJQUNiLDBDQUFjOzs7OztBQUdsQjtJQWdCSSw0QkFBc0IsU0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsaUJBQXFDLEVBQy9DLE1BQWtCO1FBSDlCLGlCQWFDO1FBYnFCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBR3ZELDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUzQixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXhCRCxzQkFBVyxxQ0FBSztRQURoQixvQ0FBb0M7Ozs7OztRQUNwQztZQUNJLHFFQUFxRTtZQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7Ozs7O0lB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O0lBRXBDLDJDQUE2Qzs7SUFTN0MsNkNBQStCOztJQUcvQiwrQ0FBbUQ7O0lBRXZDLHVDQUE2Qjs7SUFDN0Isc0NBQTZCOztJQUM3QiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgSVBvcHVwTGlmZWN5Y2xlIH0gZnJvbSBcIi4vcG9wdXAtbGlmZWN5Y2xlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwIHtcbiAgICBvcGVuKCk6dm9pZDtcbiAgICBjbG9zZSgpOnZvaWQ7XG4gICAgdG9nZ2xlKCk6dm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVBvcHVwQ29udHJvbGxlciBpbXBsZW1lbnRzIElQb3B1cCwgT25EZXN0cm95IHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBwb3B1cCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlQb3B1cD47XG5cbiAgICAvLyBSZXR1cm5zIGdlbmVyYXRlZCBwb3B1cCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IHBvcHVwKCk6U3VpUG9wdXAge1xuICAgICAgICAvLyBVc2Ugbm9uLW51bGwgYXNzZXJ0aW9uIGFzIHdlIG9ubHkgYWNjZXNzIHRoaXMgd2hlbiBhIHBvcHVwIGV4aXN0cy5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgZGVsYXllZCBwb3B1cCBvcGVuLlxuICAgIHByaXZhdGUgX29wZW5pbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZG9jdW1lbnQgY2xpY2sgaGFuZGxlci5cbiAgICBwcml2YXRlIF9kb2N1bWVudExpc3RlbmVyOigoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFN1aVBvcHVwIGNvbXBvbmVudCBhbmQgYXR0YWNoIGl0IHRvIHRoZSBhcHBsaWNhdGlvbiB2aWV3LlxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChTdWlQb3B1cCk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIHBvcHVwIHdpdGggcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICAvLyBXaGVuIHRoZSBwb3B1cCBpcyBjbG9zZWQgKG9uQ2xvc2UgZmlyZXMgb24gYW5pbWF0aW9uIGNvbXBsZXRlKSxcbiAgICAgICAgdGhpcy5wb3B1cC5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFudXAoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc/OklQb3B1cENvbmZpZyk6dm9pZCB7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wb3B1cC5jb25maWcsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRlbGF5ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBvcGVuaW5nIHRpbWVyLlxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkgaW50ZXJ2YWwuXG4gICAgICAgIHRoaXMuX29wZW5pbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuKCksIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGdlbmVyYXRlZCBjb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgYXBwbGljYXRpb24uXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZiwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTW92ZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgdG8gdGhlIGJvZHkgdG8gYXZvaWQgYW55IHBvc2l0aW9uaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRG9jdW1lbnRCb2R5KHRoaXMuX2NvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggYSByZWZlcmVuY2UgdG8gdGhlIGFuY2hvciBlbGVtZW50LiBXZSBkbyBpdCBoZXJlIGJlY2F1c2UgSUUxMSBsb3ZlcyB0byBjb21wbGFpbi5cbiAgICAgICAgdGhpcy5wb3B1cC5hbmNob3IgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGhhbmRsZSBjbG9zaW5nLlxuICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChlOk1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZSkpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBvcHVwIG9wZW4gdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wb3B1cC5vcGVuKCk7XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbk9wZW47XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lciB0byBzdG9wIHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIGNsb3NlIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBwb3B1cCBjbG9zZSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbkNsb3NlO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5DbGljayB8fFxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuXG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3MgcmVxdWlyZSBhIHRvZ2dsZSwgcmF0aGVyIHRoYW4ganVzdCBvcGVuaW5nIHRoZSBwb3B1cCBlYWNoIHRpbWUuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURlbGF5ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpKSB7XG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3Mgd2l0aCBhIGZvY3VzIHRyaWdnZXIgcmVxdWlyZXMgYW4gb3BlbiAoYXMgZm9jdXMgaXNuJ3QgZXZlciBsb3N0IG9uIHJlcGVhdGVkIGNsaWNrKS5cbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCB0cmlnZ2VyIGlzIG91dHNpZGUgY2xpY2ssXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYgJiYgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCBpZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSBvZiB0aGUgcG9wdXAgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTphbnkpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICAhdGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbUFwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG59XG4iXX0=