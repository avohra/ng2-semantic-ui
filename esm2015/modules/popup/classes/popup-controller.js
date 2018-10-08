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
export class SuiPopupController {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _componentFactory
     * @param {?} config
     */
    constructor(_renderer, _element, _componentFactory, config) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(() => this.cleanup());
    }
    // Returns generated popup instance.
    /**
     * @return {?}
     */
    get popup() {
        // Use non-null assertion as we only access this when a popup exists.
        return this._componentRef.instance;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    configure(config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    }
    /**
     * @return {?}
     */
    openDelayed() {
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(() => this.open(), this.popup.config.delay);
    }
    /**
     * @return {?}
     */
    open() {
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
            .listen("document", "click", (e) => this.onDocumentClick(e));
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        /** @type {?} */
        const lifecycle = ((/** @type {?} */ (this))).popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    /**
     * @return {?}
     */
    close() {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        /** @type {?} */
        const lifecycle = ((/** @type {?} */ (this))).popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    /**
     * @return {?}
     */
    toggleDelayed() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    }
    /**
     * @return {?}
     */
    toggle() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    onClick() {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentClick(e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            /** @type {?} */
            const target = (/** @type {?} */ (e.target));
            // Close the popup if the click is outside of the popup element.
            if (!((/** @type {?} */ (this._element.nativeElement))).contains(target)) {
                this.close();
            }
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    cleanup() {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanup();
    }
}
SuiPopupController.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }],
    onClick: [{ type: HostListener, args: ["click",] }],
    onFocusIn: [{ type: HostListener, args: ["focusin",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFlLFlBQVksRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHL0MsNEJBSUM7Ozs7O0lBSEcsd0NBQVk7Ozs7SUFDWix5Q0FBYTs7OztJQUNiLDBDQUFjOzs7OztBQUdsQixNQUFNOzs7Ozs7O0lBZ0JGLFlBQXNCLFNBQW1CLEVBQ25CLFFBQW1CLEVBQ25CLGlCQUFxQyxFQUMvQyxNQUFrQjtRQUhSLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBR3ZELDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEUsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUUzQixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBeEJELElBQVcsS0FBSztRQUNaLHFFQUFxRTtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUF1Qk0sU0FBUyxDQUFDLE1BQW9CO1FBQ2pDLEVBQUUsQ0FBQyxD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Q0FBQyxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDOzs7O0lBRVMsT0FBTztRQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdELENBQUM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7OzsyQkF4RUEsWUFBWSxTQUFDLFlBQVk7MkJBT3pCLFlBQVksU0FBQyxZQUFZO3NCQU96QixZQUFZLFNBQUMsT0FBTzt3QkF5QnBCLFlBQVksU0FBQyxTQUFTO3lCQU90QixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBMUpwQywyQ0FBNkM7O0lBUzdDLDZDQUErQjs7SUFHL0IsK0NBQW1EOztJQUV2Qyx1Q0FBNkI7O0lBQzdCLHNDQUE2Qjs7SUFDN0IsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IElQb3B1cExpZmVjeWNsZSB9IGZyb20gXCIuL3BvcHVwLWxpZmVjeWNsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cCB7XG4gICAgb3BlbigpOnZvaWQ7XG4gICAgY2xvc2UoKTp2b2lkO1xuICAgIHRvZ2dsZSgpOnZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlQb3B1cENvbnRyb2xsZXIgaW1wbGVtZW50cyBJUG9wdXAsIE9uRGVzdHJveSB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgcG9wdXAgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpUG9wdXA+O1xuXG4gICAgLy8gUmV0dXJucyBnZW5lcmF0ZWQgcG9wdXAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBwb3B1cCgpOlN1aVBvcHVwIHtcbiAgICAgICAgLy8gVXNlIG5vbi1udWxsIGFzc2VydGlvbiBhcyB3ZSBvbmx5IGFjY2VzcyB0aGlzIHdoZW4gYSBwb3B1cCBleGlzdHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGRlbGF5ZWQgcG9wdXAgb3Blbi5cbiAgICBwcml2YXRlIF9vcGVuaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIGRvY3VtZW50IGNsaWNrIGhhbmRsZXIuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRMaXN0ZW5lcjooKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBTdWlQb3B1cCBjb21wb25lbnQgYW5kIGF0dGFjaCBpdCB0byB0aGUgYXBwbGljYXRpb24gdmlldy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoU3VpUG9wdXApO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwb3B1cCB3aXRoIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgcG9wdXAgaXMgY2xvc2VkIChvbkNsb3NlIGZpcmVzIG9uIGFuaW1hdGlvbiBjb21wbGV0ZSksXG4gICAgICAgIHRoaXMucG9wdXAub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhbnVwKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJUG9wdXBDb25maWcpOnZvaWQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucG9wdXAuY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lci5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5IGludGVydmFsLlxuICAgICAgICB0aGlzLl9vcGVuaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbigpLCB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcuaXNJbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRWxlbWVudCh0aGlzLl9jb21wb25lbnRSZWYsIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGdlbmVyYXRlZCBlbGVtZW50IHRvIHRoZSBib2R5IHRvIGF2b2lkIGFueSBwb3NpdGlvbmluZyBpc3N1ZXMuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0RvY3VtZW50Qm9keSh0aGlzLl9jb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gV2UgZG8gaXQgaGVyZSBiZWNhdXNlIElFMTEgbG92ZXMgdG8gY29tcGxhaW4uXG4gICAgICAgIHRoaXMucG9wdXAuYW5jaG9yID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBoYW5kbGUgY2xvc2luZy5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZTpNb3VzZUV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGUpKTtcblxuICAgICAgICAvLyBTdGFydCBwb3B1cCBvcGVuIHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMucG9wdXAub3BlbigpO1xuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25PcGVuO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIgdG8gc3RvcCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciBjbG9zZSBoYXMgYmVlbiBjYWxsZWQuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgLy8gU3RhcnQgcG9wdXAgY2xvc2UgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25DbG9zZTtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxuICAgIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuQ2xpY2sgfHxcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcblxuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHJlcXVpcmUgYSB0b2dnbGUsIHJhdGhlciB0aGFuIGp1c3Qgb3BlbmluZyB0aGUgcG9wdXAgZWFjaCB0aW1lLlxuICAgICAgICAgICAgdGhpcy50b2dnbGVEZWxheWVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzICYmXG4gICAgICAgICAgICAgICAgICAgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSkge1xuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHdpdGggYSBmb2N1cyB0cmlnZ2VyIHJlcXVpcmVzIGFuIG9wZW4gKGFzIGZvY3VzIGlzbid0IGV2ZXIgbG9zdCBvbiByZXBlYXRlZCBjbGljaykuXG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgdHJpZ2dlciBpcyBvdXRzaWRlIGNsaWNrLFxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmICYmIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgcG9wdXAgaWYgdGhlIGNsaWNrIGlzIG91dHNpZGUgb2YgdGhlIHBvcHVwIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoISh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6YW55KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UgJiYgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgfVxufVxuIl19