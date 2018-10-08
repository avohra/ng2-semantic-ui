/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Renderer2, EventEmitter, Output, HostListener, ViewContainerRef } from "@angular/core";
import { Util, KeyCode, SuiComponentFactory } from "../../../misc/util/internal";
import { TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { ModalControls } from "../classes/modal-controls";
import { ModalConfig, ModalSize } from "../classes/modal-config";
/**
 * @template T, U
 */
export class SuiModal {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _componentFactory
     */
    constructor(_renderer, _element, _componentFactory) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        /** @type {?} */
        const config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(res => this.dismiss(() => this.onApprove.emit(res)), res => this.dismiss(() => this.onDeny.emit(res)));
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    /**
     * @return {?}
     */
    get approve() {
        return this.controls.approve;
    }
    /**
     * @return {?}
     */
    get deny() {
        return this.controls.deny;
    }
    // Value to deny with when closing via `isClosable`.
    /**
     * @return {?}
     */
    get isFullScreen() {
        return this._isFullScreen;
    }
    /**
     * @param {?} fullScreen
     * @return {?}
     */
    set isFullScreen(fullScreen) {
        this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
    }
    /**
     * @return {?}
     */
    get mustScroll() {
        return this._mustScroll;
    }
    /**
     * @param {?} mustScroll
     * @return {?}
     */
    set mustScroll(mustScroll) {
        this._mustScroll = mustScroll;
        // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
        this._mustAlwaysScroll = mustScroll;
        this.updateScroll();
    }
    /**
     * @return {?}
     */
    get isInverted() {
        return this._isInverted;
    }
    /**
     * @param {?} inverted
     * @return {?}
     */
    set isInverted(inverted) {
        this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    /**
     * @return {?}
     */
    get dynamicClasses() {
        /** @type {?} */
        const classes = {};
        if (this.size) {
            classes[this.size] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(() => this.dimBackground = true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        (/** @type {?} */ (document.querySelector("body"))).appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        /** @type {?} */
        const templateElement = (/** @type {?} */ (this.templateSibling.element.nativeElement));
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        const element = (/** @type {?} */ (this._modalElement.nativeElement));
        setTimeout(() => this.updateScroll());
        // Focus any element with [autofocus] attribute.
        /** @type {?} */
        const autoFocus = (/** @type {?} */ (element.querySelector("[autofocus]")));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
    // Updates the modal with the specified configuration.
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    loadConfig(config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    }
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    /**
     * @param {?=} callback
     * @return {?}
     */
    dismiss(callback = () => { }) {
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (this._originalContainer) {
                    this._originalContainer.appendChild(this._element.nativeElement);
                }
                this.onDismiss.emit();
                callback();
            }));
        }
    }
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    /**
     * @return {?}
     */
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    // Decides whether the modal needs to reposition to allow scrolling.
    /**
     * @return {?}
     */
    updateScroll() {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            /** @type {?} */
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            const margin = fontSize * 2;
            /** @type {?} */
            const element = (/** @type {?} */ (this._modalElement.nativeElement));
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    }
    // Document listener is fine here because nobody will have enough modals open.
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyUp(e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    }
    /**
     * @return {?}
     */
    onDocumentResize() {
        this.updateScroll();
    }
}
SuiModal.decorators = [
    { type: Component, args: [{
                selector: "sui-modal",
                template: `
<!-- Page dimmer for modal background. -->
<sui-modal-dimmer [ngClass]="{'top aligned': !isCentered}" 
            [class.inverted]="isInverted"
            [(isDimmed)]="dimBackground"
            [transitionDuration]="transitionDuration"
            (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scrolling]="mustScroll"
         [class.inverted]="isInverted"
         [ngClass]="dynamicClasses"
         (click)="onClick($event)"
         #modal>

        <!-- Configurable close icon -->
        <i class="close icon" *ngIf="isClosable && isFullScreen" (click)="close()"></i>
        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->
        <ng-content></ng-content>
        <!-- @ViewChild reference so we can insert elements beside this div. -->
        <div #templateSibling></div>
    </div>
</sui-modal-dimmer>
`,
                styles: [``]
            },] },
];
SuiModal.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory }
];
SuiModal.propDecorators = {
    isClosable: [{ type: Input }],
    closeResult: [{ type: Input }],
    onApprove: [{ type: Output, args: ["approved",] }],
    onDeny: [{ type: Output, args: ["denied",] }],
    onDismiss: [{ type: Output, args: ["dismissed",] }],
    _modalElement: [{ type: ViewChild, args: ["modal",] }],
    size: [{ type: Input }],
    isCentered: [{ type: Input }],
    isFullScreen: [{ type: Input }],
    isBasic: [{ type: Input }],
    mustScroll: [{ type: Input }],
    isInverted: [{ type: Input }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
    onDocumentKeyUp: [{ type: HostListener, args: ["document:keyup", ["$event"],] }],
    onDocumentResize: [{ type: HostListener, args: ["window:resize",] }]
};
if (false) {
    /** @type {?} */
    SuiModal.prototype.isClosable;
    /** @type {?} */
    SuiModal.prototype.closeResult;
    /** @type {?} */
    SuiModal.prototype.controls;
    /** @type {?} */
    SuiModal.prototype.onApprove;
    /** @type {?} */
    SuiModal.prototype.onDeny;
    /** @type {?} */
    SuiModal.prototype.onDismiss;
    /** @type {?} */
    SuiModal.prototype._modalElement;
    /** @type {?} */
    SuiModal.prototype.size;
    /** @type {?} */
    SuiModal.prototype.isCentered;
    /** @type {?} */
    SuiModal.prototype._isFullScreen;
    /** @type {?} */
    SuiModal.prototype.isBasic;
    /** @type {?} */
    SuiModal.prototype._mustScroll;
    /** @type {?} */
    SuiModal.prototype._mustAlwaysScroll;
    /** @type {?} */
    SuiModal.prototype._isInverted;
    /** @type {?} */
    SuiModal.prototype.transitionController;
    /** @type {?} */
    SuiModal.prototype.transition;
    /** @type {?} */
    SuiModal.prototype.transitionDuration;
    /** @type {?} */
    SuiModal.prototype.dimBackground;
    /** @type {?} */
    SuiModal.prototype._isClosing;
    /** @type {?} */
    SuiModal.prototype.templateSibling;
    /** @type {?} */
    SuiModal.prototype._originalContainer;
    /** @type {?} */
    SuiModal.prototype._renderer;
    /** @type {?} */
    SuiModal.prototype._element;
    /** @type {?} */
    SuiModal.prototype._componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUMxRCxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBbUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBbUNqRSxNQUFNOzs7Ozs7SUFzSEYsWUFBb0IsU0FBbUIsRUFBVSxRQUFtQixFQUFVLGlCQUFxQztRQUEvRixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7OztjQUV6RyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQW1CO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEIsMERBQTBEO1FBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFDLHVFQUF1RTtRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUM3QixHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDbkQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQTdIRCxJQUFXLE9BQU87UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDOzs7OztJQTRCRCxJQUNXLFlBQVk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFXLFlBQVksQ0FBQyxVQUFrQjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQVdELElBQ1csVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQVcsVUFBVSxDQUFDLFVBQWtCO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBS0QsSUFDVyxVQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBVyxVQUFVLENBQUMsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUF3QkQsSUFBVyxjQUFjOztjQUNmLE9BQU8sR0FBbUIsRUFBRTtRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7Ozs7SUF1Qk0sUUFBUTtRQUNYLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEgsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVNLGVBQWU7UUFDbEIsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDakUsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Y0FFbkUsZUFBZSxHQUFHLG1CQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBVztRQUM3RSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixlQUFlLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxDQUFDOztjQUVLLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBVztRQUMzRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7OztjQUdoQyxTQUFTLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBc0I7UUFDNUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLDRFQUE0RTtZQUM1RSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLGdGQUFnRjtZQUNoRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBR00sVUFBVSxDQUFJLE1BQTJCO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBR08sT0FBTyxDQUFDLFdBQXNCLEdBQUcsRUFBRSxHQUFFLENBQUM7UUFDMUMsa0NBQWtDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFdkIsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUM3QixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUNuRix3R0FBd0c7Z0JBQ3hHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHTSxLQUFLO1FBQ1IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsMkVBQTJFO1lBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDOzs7OztJQUdPLFlBQVk7UUFFaEIsd0dBQXdHO1FBQ3hHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7a0JBRzFDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7a0JBQ3RHLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQzs7a0JBQ3JCLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBVztZQUUzRCw4RkFBOEY7WUFDOUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsQ0FBWTtRQUN2QiwyRUFBMkU7UUFDM0UsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUlNLGVBQWUsQ0FBQyxDQUFlO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQzs7OztJQUdNLGdCQUFnQjtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBeFJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNmOzs7WUF4Q29ELFNBQVM7WUFBckIsVUFBVTtZQUdWLG1CQUFtQjs7O3lCQXVDdkQsS0FBSzswQkFJTCxLQUFLO3dCQWdCTCxNQUFNLFNBQUMsVUFBVTtxQkFJakIsTUFBTSxTQUFDLFFBQVE7d0JBSWYsTUFBTSxTQUFDLFdBQVc7NEJBR2xCLFNBQVMsU0FBQyxPQUFPO21CQUlqQixLQUFLO3lCQUdMLEtBQUs7MkJBT0wsS0FBSztzQkFVTCxLQUFLO3lCQVFMLEtBQUs7eUJBZUwsS0FBSzt5QkFZTCxLQUFLO2lDQUlMLEtBQUs7OEJBU0wsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzhCQW9JdkQsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOytCQVF6QyxZQUFZLFNBQUMsZUFBZTs7OztJQW5QN0IsOEJBRTBCOztJQUUxQiwrQkFFcUI7O0lBR3JCLDRCQUFvQzs7SUFXcEMsNkJBQ2lDOztJQUdqQywwQkFDOEI7O0lBRzlCLDZCQUNvQzs7SUFFcEMsaUNBQ2lDOztJQUdqQyx3QkFDc0I7O0lBRXRCLDhCQUMwQjs7SUFHMUIsaUNBQThCOztJQWE5QiwyQkFDdUI7O0lBR3ZCLCtCQUE0Qjs7SUFFNUIscUNBQWtDOztJQWVsQywrQkFBNEI7O0lBVzVCLHdDQUFpRDs7SUFHakQsOEJBQ3lCOztJQUd6QixzQ0FDaUM7O0lBR2pDLGlDQUE2Qjs7SUFFN0IsOEJBQTJCOztJQUczQixtQ0FDd0M7O0lBR3hDLHNDQUFvQzs7SUFVeEIsNkJBQTJCOztJQUFFLDRCQUEyQjs7SUFBRSxxQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgSUR5bmFtaWNDbGFzc2VzLCBLZXlDb2RlLCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scywgTW9kYWxSZXN1bHQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcsIE1vZGFsU2l6ZSB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbW9kYWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBQYWdlIGRpbW1lciBmb3IgbW9kYWwgYmFja2dyb3VuZC4gLS0+XG48c3VpLW1vZGFsLWRpbW1lciBbbmdDbGFzc109XCJ7J3RvcCBhbGlnbmVkJzogIWlzQ2VudGVyZWR9XCIgXG4gICAgICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICAgICBbKGlzRGltbWVkKV09XCJkaW1CYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgIFt0cmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgpXCI+XG5cbiAgICA8IS0tIE1vZGFsIGNvbXBvbmVudCwgd2l0aCB0cmFuc2l0aW9uIGNvbXBvbmVudCBhdHRhY2hlZCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwidWkgbW9kYWxcIlxuICAgICAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0cmFuc2l0aW9uQ29udHJvbGxlcj8uaXNWaXNpYmxlXCJcbiAgICAgICAgIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbFNjcmVlblwiXG4gICAgICAgICBbY2xhc3MuYmFzaWNdPVwiaXNCYXNpY1wiXG4gICAgICAgICBbY2xhc3Muc2Nyb2xsaW5nXT1cIm11c3RTY3JvbGxcIlxuICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImlzSW52ZXJ0ZWRcIlxuICAgICAgICAgW25nQ2xhc3NdPVwiZHluYW1pY0NsYXNzZXNcIlxuICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAjbW9kYWw+XG5cbiAgICAgICAgPCEtLSBDb25maWd1cmFibGUgY2xvc2UgaWNvbiAtLT5cbiAgICAgICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Nsb3NhYmxlICYmIGlzRnVsbFNjcmVlblwiIChjbGljayk9XCJjbG9zZSgpXCI+PC9pPlxuICAgICAgICA8IS0tIDxuZy1jb250ZW50PiBzbyB0aGF0IDxzdWktbW9kYWw+IGNhbiBiZSB1c2VkIGFzIGEgbm9ybWFsIGNvbXBvbmVudC4gLS0+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPCEtLSBAVmlld0NoaWxkIHJlZmVyZW5jZSBzbyB3ZSBjYW4gaW5zZXJ0IGVsZW1lbnRzIGJlc2lkZSB0aGlzIGRpdi4gLS0+XG4gICAgICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc3VpLW1vZGFsLWRpbW1lcj5cbmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsPFQsIFU+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKVxuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlU7XG5cbiAgICAvLyBTZXBhcmF0ZSBjbGFzcyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIG1ldGhvZHMgdG8gc3VwcG9ydCBwYXNzaW5nIGludG8gY29tcG9uZW50cy5cbiAgICBwdWJsaWMgY29udHJvbHM6TW9kYWxDb250cm9sczxULCBVPjtcblxuICAgIHB1YmxpYyBnZXQgYXBwcm92ZSgpOk1vZGFsUmVzdWx0PFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuYXBwcm92ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlbnkoKTpNb2RhbFJlc3VsdDxVPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmRlbnk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgYXBwcm92ZWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJhcHByb3ZlZFwiKVxuICAgIHB1YmxpYyBvbkFwcHJvdmU6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJkZW5pZWRcIilcbiAgICBwdWJsaWMgb25EZW55OkV2ZW50RW1pdHRlcjxVPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3Nlcy5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc2VkXCIpXG4gICAgcHVibGljIG9uRGlzbWlzczpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAVmlld0NoaWxkKFwibW9kYWxcIilcbiAgICBwcml2YXRlIF9tb2RhbEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIC8vIFNpemUgdXNlZCB0byBkaXNwbGF5IHRoZSBtb2RhbC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQ2VudGVyZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHJpdmF0ZSBfaXNGdWxsU2NyZWVuOmJvb2xlYW47XG5cbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRnVsbFNjcmVlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGdWxsU2NyZWVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNGdWxsU2NyZWVuKGZ1bGxTY3JlZW46Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0Z1bGxTY3JlZW4gPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoZnVsbFNjcmVlbik7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIGhhcyBiYXNpYyBzdHlsZXMgYXBwbGllZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBjdXJyZW50bHkgaXMgZGlzcGxheWluZyBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0U2Nyb2xsOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0QWx3YXlzU2Nyb2xsOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbXVzdFNjcm9sbCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVzdFNjcm9sbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG11c3RTY3JvbGwobXVzdFNjcm9sbDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICAvLyAnQ2FjaGUnIHZhbHVlIGluIF9tdXN0QWx3YXlzU2Nyb2xsIHNvIHRoYXQgaWYgYHRydWVgLCBfbXVzdFNjcm9sbCBpc24ndCBldmVyIGF1dG8tdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHJpdmF0ZSBfaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzSW52ZXJ0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW52ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0ludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBiYWNrcm91bmQgZGltbWVyIGlzIGFjdGl2ZS5cbiAgICBwdWJsaWMgZGltQmFja2dyb3VuZDpib29sZWFuO1xuICAgIC8vIFRydWUgYWZ0ZXIgYGFwcHJvdmVgIG9yIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfaXNDbG9zaW5nOmJvb2xlYW47XG5cbiAgICAvLyBgVmlld0NvbnRhaW5lclJlZmAgZm9yIHRoZSBlbGVtZW50IHRoZSB0ZW1wbGF0ZSBnZXRzIGluamVjdGVkIGFzIGEgc2libGluZyBvZi5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIC8vIFBhcmVudCBlbGVtZW50IG9mIG1vZGFsIGJlZm9yZSByZWxvY2F0aW9uIHRvIGRvY3VtZW50IGJvZHkuXG4gICAgcHJpdmF0ZSBfb3JpZ2luYWxDb250YWluZXI/OkVsZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZnJvbSBgTW9kYWxDb25maWdgICh0byBhdm9pZCB3cml0aW5nIGRlZmF1bHRzIHR3aWNlKS5cbiAgICAgICAgY29uc3QgY29uZmlnID0gbmV3IE1vZGFsQ29uZmlnPHVuZGVmaW5lZCwgVCwgVT4oKTtcbiAgICAgICAgdGhpcy5sb2FkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gRXZlbnQgZW1pdHRlcnMgZm9yIGVhY2ggb2YgdGhlIHBvc3NpYmxlIG1vZGFsIG91dGNvbWVzLlxuICAgICAgICB0aGlzLm9uQXBwcm92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgY29udHJvbHMgd2l0aCBhY3Rpb25zIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgY2FzZXMuXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgTW9kYWxDb250cm9sczxULCBVPihcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkFwcHJvdmUuZW1pdChyZXMpKSxcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkRlbnkuZW1pdChyZXMpKSk7XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgdmFyaWFibGUgaW5pdGlhbGlzYXRpb24uXG4gICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIHZpc2libGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaW1CYWNrZ3JvdW5kID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBNb3ZlIHRoZSBtb2RhbCB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBlbnN1cmUgY29ycmVjdCBzY3JvbGxpbmcuXG4gICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlICN0ZW1wbGF0ZVNpYmxpbmcgZWxlbWVudCBmcm9tIHRoZSBET00gdG8gZml4IGJvdHRvbSBib3JkZXIgc3R5bGVzLlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlU2libGluZy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgaWYgKHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTY3JvbGwoKSk7XG5cbiAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIG1vZGFsIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICAgIHB1YmxpYyBsb2FkQ29uZmlnPFY+KGNvbmZpZzpNb2RhbENvbmZpZzxWLCBULCBVPik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGNvbmZpZy5pc0Nsb3NhYmxlO1xuICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gY29uZmlnLmNsb3NlUmVzdWx0O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGNvbmZpZy5pc0Z1bGxTY3JlZW47XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBjb25maWcuaXNJbnZlcnRlZDtcbiAgICAgICAgdGhpcy5pc0NlbnRlcmVkID0gY29uZmlnLmlzQ2VudGVyZWQ7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gY29uZmlnLm11c3RTY3JvbGw7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gY29uZmlnLnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzZXMgdGhlIG1vZGFsIHdpdGggYSB0cmFuc2l0aW9uLCBmaXJpbmcgdGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIGRpc21pc3MoY2FsbGJhY2s6KCkgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IGN1cnJlbnRseSBjbG9zaW5nLFxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgaW52aXNpYmxlLlxuICAgICAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRvbmUsIG1vdmUgdGhlIG1vZGFsIGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uLCBlbWl0IGEgZGlzbWlzcyBldmVudCwgYW5kIGZpcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3JpZ2luYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhICdkZW55JyBvdXRjb21lLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgcmVhc29uLlxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYWxsb3dlZCB0byBjbG9zZSwgZmlyZSB0aGUgZGVueSByZXN1bHQgd2l0aCB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVueSh0aGlzLmNsb3NlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY2lkZXMgd2hldGhlciB0aGUgbW9kYWwgbmVlZHMgdG8gcmVwb3NpdGlvbiB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgcHJpdmF0ZSB1cGRhdGVTY3JvbGwoKTp2b2lkIHtcblxuICAgICAgICAvLyBfbXVzdEFsd2F5c1Njcm9sbCB3b3JrcyBieSBzdG9wcGluZyBfbXVzdFNjcm9sbCBmcm9tIGJlaW5nIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCwgc28gaXQgc3RheXMgYHRydWVgLlxuICAgICAgICBpZiAoIXRoaXMuX211c3RBbHdheXNTY3JvbGwgJiYgdGhpcy5fbW9kYWxFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIC8vIFNlbWFudGljIFVJIG1vZGFsIG1hcmdpbiBhbmQgZGltbWVyIHBhZGRpbmcgYXJlIDFyZW0sIHdoaWNoIGlzIHJlbGF0aXZlIHRvIHRoZSBnbG9iYWwgZm9udCBzaXplLCBzbyBmb3IgY29tcGF0aWJpbGl0eTpcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgKiAyO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIFRoZSBtb2RhbCBtdXN0IHNjcm9sbCBpZiB0aGUgd2luZG93IGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gdGhlIG1vZGFsIGhlaWdodCArIGJvdGggbWFyZ2lucy5cbiAgICAgICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPCBlbGVtZW50LmNsaWVudEhlaWdodCArIG1hcmdpbiAqIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgbW9kYWwgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBEb2N1bWVudCBsaXN0ZW5lciBpcyBmaW5lIGhlcmUgYmVjYXVzZSBub2JvZHkgd2lsbCBoYXZlIGVub3VnaCBtb2RhbHMgb3Blbi5cbiAgICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5dXBcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50S2V5VXAoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGF1dG9tYXRpY2FsbHkgY292ZXJzIGNhc2Ugb2YgYCFpc0Nsb3NhYmxlYCwgc28gY2hlY2sgbm90IG5lZWRlZC5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6cmVzaXplXCIpXG4gICAgcHVibGljIG9uRG9jdW1lbnRSZXNpemUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG59XG4iXX0=