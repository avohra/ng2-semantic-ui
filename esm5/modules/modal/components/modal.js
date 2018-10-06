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
var SuiModal = /** @class */ (function () {
    function SuiModal(_renderer, _element, _componentFactory) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        /** @type {?} */
        var config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(function (res) { return _this.dismiss(function () { return _this.onApprove.emit(res); }); }, function (res) { return _this.dismiss(function () { return _this.onDeny.emit(res); }); });
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    Object.defineProperty(SuiModal.prototype, "approve", {
        get: /**
         * @return {?}
         */
        function () {
            return this.controls.approve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "deny", {
        get: /**
         * @return {?}
         */
        function () {
            return this.controls.deny;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isFullScreen", {
        // Value to deny with when closing via `isClosable`.
        get: /**
         * @return {?}
         */
        function () {
            return this._isFullScreen;
        },
        set: /**
         * @param {?} fullScreen
         * @return {?}
         */
        function (fullScreen) {
            this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "mustScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mustScroll;
        },
        set: /**
         * @param {?} mustScroll
         * @return {?}
         */
        function (mustScroll) {
            this._mustScroll = mustScroll;
            // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
            this._mustAlwaysScroll = mustScroll;
            this.updateScroll();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isInverted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isInverted;
        },
        set: /**
         * @param {?} inverted
         * @return {?}
         */
        function (inverted) {
            this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "dynamicClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = {};
            if (this.size) {
                classes[this.size] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiModal.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(function () { return _this.dimBackground = true; });
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode; /** @type {?} */
        ((document.querySelector("body"))).appendChild(this._element.nativeElement);
        /** @type {?} */
        var templateElement = /** @type {?} */ (this.templateSibling.element.nativeElement);
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        var element = /** @type {?} */ (this._modalElement.nativeElement);
        setTimeout(function () { return _this.updateScroll(); });
        /** @type {?} */
        var autoFocus = /** @type {?} */ (element.querySelector("[autofocus]"));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(function () { return autoFocus.focus(); }, 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
        }
    };
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    SuiModal.prototype.loadConfig = /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    function (config) {
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
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    SuiModal.prototype.dismiss = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (_this._originalContainer) {
                    _this._originalContainer.appendChild(_this._element.nativeElement);
                }
                _this.onDismiss.emit();
                callback();
            }));
        }
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.updateScroll = /**
     * @return {?}
     */
    function () {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            /** @type {?} */
            var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            var margin = fontSize * 2;
            /** @type {?} */
            var element = /** @type {?} */ (this._modalElement.nativeElement);
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiModal.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    };
    // Document listener is fine here because nobody will have enough modals open.
    /**
     * @param {?} e
     * @return {?}
     */
    SuiModal.prototype.onDocumentKeyUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.onDocumentResize = /**
     * @return {?}
     */
    function () {
        this.updateScroll();
    };
    SuiModal.decorators = [
        { type: Component, args: [{
                    selector: "sui-modal",
                    template: "\n<!-- Page dimmer for modal background. -->\n<sui-modal-dimmer [ngClass]=\"{'top aligned': !isCentered}\" \n            [class.inverted]=\"isInverted\"\n            [(isDimmed)]=\"dimBackground\"\n            [transitionDuration]=\"transitionDuration\"\n            (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scrolling]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable && isFullScreen\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-modal-dimmer>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SuiModal.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory }
    ]; };
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
    return SuiModal;
}());
export { SuiModal };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUMxRCxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBbUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztJQXlKN0Qsa0JBQW9CLFNBQW1CLEVBQVUsUUFBbUIsRUFBVSxpQkFBcUM7UUFBbkgsaUJBbUJDO1FBbkJtQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7O1FBRS9HLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFtQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxD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LFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUNBUXpDLFlBQVksU0FBQyxlQUFlOzttQkE5UmpDOztTQTBDYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElEeW5hbWljQ2xhc3NlcywgS2V5Q29kZSwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbHMsIE1vZGFsUmVzdWx0IH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBNb2RhbFNpemUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUGFnZSBkaW1tZXIgZm9yIG1vZGFsIGJhY2tncm91bmQuIC0tPlxuPHN1aS1tb2RhbC1kaW1tZXIgW25nQ2xhc3NdPVwieyd0b3AgYWxpZ25lZCc6ICFpc0NlbnRlcmVkfVwiIFxuICAgICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImlzSW52ZXJ0ZWRcIlxuICAgICAgICAgICAgWyhpc0RpbW1lZCldPVwiZGltQmFja2dyb3VuZFwiXG4gICAgICAgICAgICBbdHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiPlxuXG4gICAgPCEtLSBNb2RhbCBjb21wb25lbnQsIHdpdGggdHJhbnNpdGlvbiBjb21wb25lbnQgYXR0YWNoZWQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInVpIG1vZGFsXCJcbiAgICAgICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidHJhbnNpdGlvbkNvbnRyb2xsZXI/LmlzVmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuZnVsbHNjcmVlbl09XCJpc0Z1bGxTY3JlZW5cIlxuICAgICAgICAgW2NsYXNzLmJhc2ljXT1cImlzQmFzaWNcIlxuICAgICAgICAgW2NsYXNzLnNjcm9sbGluZ109XCJtdXN0U2Nyb2xsXCJcbiAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgI21vZGFsPlxuXG4gICAgICAgIDwhLS0gQ29uZmlndXJhYmxlIGNsb3NlIGljb24gLS0+XG4gICAgICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNDbG9zYWJsZSAmJiBpc0Z1bGxTY3JlZW5cIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvaT5cbiAgICAgICAgPCEtLSA8bmctY29udGVudD4gc28gdGhhdCA8c3VpLW1vZGFsPiBjYW4gYmUgdXNlZCBhcyBhIG5vcm1hbCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS0gQFZpZXdDaGlsZCByZWZlcmVuY2Ugc28gd2UgY2FuIGluc2VydCBlbGVtZW50cyBiZXNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG4gICAgPC9kaXY+XG48L3N1aS1tb2RhbC1kaW1tZXI+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbDxULCBVPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KClcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpVO1xuXG4gICAgLy8gU2VwYXJhdGUgY2xhc3MgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBtZXRob2RzIHRvIHN1cHBvcnQgcGFzc2luZyBpbnRvIGNvbXBvbmVudHMuXG4gICAgcHVibGljIGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VCwgVT47XG5cbiAgICBwdWJsaWMgZ2V0IGFwcHJvdmUoKTpNb2RhbFJlc3VsdDxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmFwcHJvdmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZW55KCk6TW9kYWxSZXN1bHQ8VT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5kZW55O1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGFwcHJvdmVgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiYXBwcm92ZWRcIilcbiAgICBwdWJsaWMgb25BcHByb3ZlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiZGVuaWVkXCIpXG4gICAgcHVibGljIG9uRGVueTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMuXG4gICAgQE91dHB1dChcImRpc21pc3NlZFwiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQFZpZXdDaGlsZChcIm1vZGFsXCIpXG4gICAgcHJpdmF0ZSBfbW9kYWxFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHByaXZhdGUgX2lzRnVsbFNjcmVlbjpib29sZWFuO1xuXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Z1bGxTY3JlZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnVsbFNjcmVlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRnVsbFNjcmVlbihmdWxsU2NyZWVuOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGdWxsU2NyZWVuID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZ1bGxTY3JlZW4pO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgY3VycmVudGx5IGlzIGRpc3BsYXlpbmcgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdFNjcm9sbDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdEFsd2F5c1Njcm9sbDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG11c3RTY3JvbGwoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c3RTY3JvbGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtdXN0U2Nyb2xsKG11c3RTY3JvbGw6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgLy8gJ0NhY2hlJyB2YWx1ZSBpbiBfbXVzdEFsd2F5c1Njcm9sbCBzbyB0aGF0IGlmIGB0cnVlYCwgX211c3RTY3JvbGwgaXNuJ3QgZXZlciBhdXRvLXVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX211c3RBbHdheXNTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHByaXZhdGUgX2lzSW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0ludmVydGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludmVydGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgYmFja3JvdW5kIGRpbW1lciBpcyBhY3RpdmUuXG4gICAgcHVibGljIGRpbUJhY2tncm91bmQ6Ym9vbGVhbjtcbiAgICAvLyBUcnVlIGFmdGVyIGBhcHByb3ZlYCBvciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIHByaXZhdGUgX2lzQ2xvc2luZzpib29sZWFuO1xuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICAvLyBQYXJlbnQgZWxlbWVudCBvZiBtb2RhbCBiZWZvcmUgcmVsb2NhdGlvbiB0byBkb2N1bWVudCBib2R5LlxuICAgIHByaXZhdGUgX29yaWdpbmFsQ29udGFpbmVyPzpFbGVtZW50O1xuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCBjb25maWd1cmF0aW9uIGZyb20gYE1vZGFsQ29uZmlnYCAodG8gYXZvaWQgd3JpdGluZyBkZWZhdWx0cyB0d2ljZSkuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBNb2RhbENvbmZpZzx1bmRlZmluZWQsIFQsIFU+KCk7XG4gICAgICAgIHRoaXMubG9hZENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIC8vIEV2ZW50IGVtaXR0ZXJzIGZvciBlYWNoIG9mIHRoZSBwb3NzaWJsZSBtb2RhbCBvdXRjb21lcy5cbiAgICAgICAgdGhpcy5vbkFwcHJvdmUgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gICAgICAgIHRoaXMub25EZW55ID0gbmV3IEV2ZW50RW1pdHRlcjxVPigpO1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIGNvbnRyb2xzIHdpdGggYWN0aW9ucyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIGNhc2VzLlxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE1vZGFsQ29udHJvbHM8VCwgVT4oXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25BcHByb3ZlLmVtaXQocmVzKSksXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25EZW55LmVtaXQocmVzKSkpO1xuXG4gICAgICAgIC8vIEludGVybmFsIHZhcmlhYmxlIGluaXRpYWxpc2F0aW9uLlxuICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSB2aXNpYmxlLlxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGltQmFja2dyb3VuZCA9IHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gTW92ZSB0aGUgbW9kYWwgdG8gdGhlIGRvY3VtZW50IGJvZHkgdG8gZW5zdXJlIGNvcnJlY3Qgc2Nyb2xsaW5nLlxuICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSAjdGVtcGxhdGVTaWJsaW5nIGVsZW1lbnQgZnJvbSB0aGUgRE9NIHRvIGZpeCBib3R0b20gYm9yZGVyIHN0eWxlcy5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gdGhpcy50ZW1wbGF0ZVNpYmxpbmcuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIGlmICh0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsKCkpO1xuXG4gICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBtb2RhbCB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICBwdWJsaWMgbG9hZENvbmZpZzxWPihjb25maWc6TW9kYWxDb25maWc8ViwgVCwgVT4pOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBjb25maWcuaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGNvbmZpZy5jbG9zZVJlc3VsdDtcblxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBjb25maWcuaXNGdWxsU2NyZWVuO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBjb25maWcuaXNCYXNpYztcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gY29uZmlnLmlzSW52ZXJ0ZWQ7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IGNvbmZpZy5pc0NlbnRlcmVkO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGNvbmZpZy5tdXN0U2Nyb2xsO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGEgdHJhbnNpdGlvbiwgZmlyaW5nIHRoZSBjYWxsYmFjayBhZnRlciB0aGUgbW9kYWwgaGFzIGZpbmlzaGVkIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBkaXNtaXNzKGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCBjdXJyZW50bHkgY2xvc2luZyxcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIGludmlzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkb25lLCBtb3ZlIHRoZSBtb2RhbCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiwgZW1pdCBhIGRpc21pc3MgZXZlbnQsIGFuZCBmaXJlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29yaWdpbmFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbG9zZXMgdGhlIG1vZGFsIHdpdGggYSAnZGVueScgb3V0Y29tZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBkZWZhdWx0IHJlYXNvbi5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zYWJsZSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFsbG93ZWQgdG8gY2xvc2UsIGZpcmUgdGhlIGRlbnkgcmVzdWx0IHdpdGggdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbnkodGhpcy5jbG9zZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNpZGVzIHdoZXRoZXIgdGhlIG1vZGFsIG5lZWRzIHRvIHJlcG9zaXRpb24gdG8gYWxsb3cgc2Nyb2xsaW5nLlxuICAgIHByaXZhdGUgdXBkYXRlU2Nyb2xsKCk6dm9pZCB7XG5cbiAgICAgICAgLy8gX211c3RBbHdheXNTY3JvbGwgd29ya3MgYnkgc3RvcHBpbmcgX211c3RTY3JvbGwgZnJvbSBiZWluZyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQsIHNvIGl0IHN0YXlzIGB0cnVlYC5cbiAgICAgICAgaWYgKCF0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsICYmIHRoaXMuX21vZGFsRWxlbWVudCkge1xuXG4gICAgICAgICAgICAvLyBTZW1hbnRpYyBVSSBtb2RhbCBtYXJnaW4gYW5kIGRpbW1lciBwYWRkaW5nIGFyZSAxcmVtLCB3aGljaCBpcyByZWxhdGl2ZSB0byB0aGUgZ2xvYmFsIGZvbnQgc2l6ZSwgc28gZm9yIGNvbXBhdGliaWxpdHk6XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBUaGUgbW9kYWwgbXVzdCBzY3JvbGwgaWYgdGhlIHdpbmRvdyBoZWlnaHQgaXMgc21hbGxlciB0aGFuIHRoZSBtb2RhbCBoZWlnaHQgKyBib3RoIG1hcmdpbnMuXG4gICAgICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gd2luZG93LmlubmVySGVpZ2h0IDwgZWxlbWVudC5jbGllbnRIZWlnaHQgKyBtYXJnaW4gKiAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIG1vZGFsIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRG9jdW1lbnQgbGlzdGVuZXIgaXMgZmluZSBoZXJlIGJlY2F1c2Ugbm9ib2R5IHdpbGwgaGF2ZSBlbm91Z2ggbW9kYWxzIG9wZW4uXG4gICAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmtleXVwXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Eb2N1bWVudEtleVVwKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICAvLyBDbG9zZSBhdXRvbWF0aWNhbGx5IGNvdmVycyBjYXNlIG9mIGAhaXNDbG9zYWJsZWAsIHNvIGNoZWNrIG5vdCBuZWVkZWQuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwid2luZG93OnJlc2l6ZVwiKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50UmVzaXplKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxufVxuIl19