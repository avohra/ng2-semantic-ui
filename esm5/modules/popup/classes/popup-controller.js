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
        else if (this.popup.config.parent) {
            this._componentFactory.moveToElement(this._componentRef, this.popup.config.parent);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFlLFlBQVksRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHL0MsNEJBSUM7Ozs7O0lBSEcsd0NBQVk7Ozs7SUFDWix5Q0FBYTs7OztJQUNiLDBDQUFjOzs7OztBQUdsQjtJQWdCSSw0QkFBc0IsU0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsaUJBQXFDLEVBQy9DLE1BQWtCO1FBSDlCLGlCQWFDO1FBYnFCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBR3ZELDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUzQixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXhCRCxzQkFBVyxxQ0FBSztRQURoQixvQ0FBb0M7Ozs7OztRQUNwQztZQUNJLHFFQUFxRTtZQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7Ozs7O0lB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Q0FBQztJQUNuQixDQUFDOzsrQkF4RUEsWUFBWSxTQUFDLFlBQVk7K0JBT3pCLFlBQVksU0FBQyxZQUFZOzBCQU96QixZQUFZLFNBQUMsT0FBTzs0QkF5QnBCLFlBQVksU0FBQyxTQUFTOzZCQU90QixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTJCeEMseUJBQUM7Q0FBQSxBQXpMRCxJQXlMQztTQXpMcUIsa0JBQWtCOzs7SUFFcEMsMkNBQTZDOztJQVM3Qyw2Q0FBK0I7O0lBRy9CLCtDQUFtRDs7SUFFdkMsdUNBQTZCOztJQUM3QixzQ0FBNkI7O0lBQzdCLCtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgSVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBJUG9wdXBMaWZlY3ljbGUgfSBmcm9tIFwiLi9wb3B1cC1saWZlY3ljbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXAge1xuICAgIG9wZW4oKTp2b2lkO1xuICAgIGNsb3NlKCk6dm9pZDtcbiAgICB0b2dnbGUoKTp2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VpUG9wdXBDb250cm9sbGVyIGltcGxlbWVudHMgSVBvcHVwLCBPbkRlc3Ryb3kge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIHBvcHVwIGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aVBvcHVwPjtcblxuICAgIC8vIFJldHVybnMgZ2VuZXJhdGVkIHBvcHVwIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgcG9wdXAoKTpTdWlQb3B1cCB7XG4gICAgICAgIC8vIFVzZSBub24tbnVsbCBhc3NlcnRpb24gYXMgd2Ugb25seSBhY2Nlc3MgdGhpcyB3aGVuIGEgcG9wdXAgZXhpc3RzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBkZWxheWVkIHBvcHVwIG9wZW4uXG4gICAgcHJpdmF0ZSBfb3BlbmluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBkb2N1bWVudCBjbGljayBoYW5kbGVyLlxuICAgIHByaXZhdGUgX2RvY3VtZW50TGlzdGVuZXI6KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3VpUG9wdXAgY29tcG9uZW50IGFuZCBhdHRhY2ggaXQgdG8gdGhlIGFwcGxpY2F0aW9uIHZpZXcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFN1aVBvcHVwKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgcG9wdXAgd2l0aCBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHBvcHVwIGlzIGNsb3NlZCAob25DbG9zZSBmaXJlcyBvbiBhbmltYXRpb24gY29tcGxldGUpLFxuICAgICAgICB0aGlzLnBvcHVwLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYW51cCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVBvcHVwQ29uZmlnKTp2b2lkIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBvcHVwLmNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheSBpbnRlcnZhbC5cbiAgICAgICAgdGhpcy5fb3BlbmluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW4oKSwgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbi5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0VsZW1lbnQodGhpcy5fY29tcG9uZW50UmVmLCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cC5jb25maWcucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0VsZW1lbnQodGhpcy5fY29tcG9uZW50UmVmLCB0aGlzLnBvcHVwLmNvbmZpZy5wYXJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTW92ZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgdG8gdGhlIGJvZHkgdG8gYXZvaWQgYW55IHBvc2l0aW9uaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRG9jdW1lbnRCb2R5KHRoaXMuX2NvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggYSByZWZlcmVuY2UgdG8gdGhlIGFuY2hvciBlbGVtZW50LiBXZSBkbyBpdCBoZXJlIGJlY2F1c2UgSUUxMSBsb3ZlcyB0byBjb21wbGFpbi5cbiAgICAgICAgdGhpcy5wb3B1cC5hbmNob3IgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGhhbmRsZSBjbG9zaW5nLlxuICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChlOk1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZSkpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBvcHVwIG9wZW4gdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wb3B1cC5vcGVuKCk7XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbk9wZW47XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lciB0byBzdG9wIHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIGNsb3NlIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBwb3B1cCBjbG9zZSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbkNsb3NlO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5DbGljayB8fFxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuXG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3MgcmVxdWlyZSBhIHRvZ2dsZSwgcmF0aGVyIHRoYW4ganVzdCBvcGVuaW5nIHRoZSBwb3B1cCBlYWNoIHRpbWUuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURlbGF5ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpKSB7XG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3Mgd2l0aCBhIGZvY3VzIHRyaWdnZXIgcmVxdWlyZXMgYW4gb3BlbiAoYXMgZm9jdXMgaXNuJ3QgZXZlciBsb3N0IG9uIHJlcGVhdGVkIGNsaWNrKS5cbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCB0cmlnZ2VyIGlzIG91dHNpZGUgY2xpY2ssXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYgJiYgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCBpZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSBvZiB0aGUgcG9wdXAgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTphbnkpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICAhdGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbUFwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG59XG4iXX0=