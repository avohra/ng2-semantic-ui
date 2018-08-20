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
        setTimeout(function () {
            _this.updateScroll();
        });
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
        /** @type {?} */
        var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
        /** @type {?} */
        var margin = fontSize * 3.5;
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
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
                    template: "\n<!-- Page dimmer for modal background. -->\n<sui-dimmer class=\"page\"\n            [class.inverted]=\"isInverted\"\n            [(isDimmed)]=\"dimBackground\"\n            [isClickable]=\"false\"\n            [transitionDuration]=\"transitionDuration\"\n            [wrapContent]=\"false\"\n            (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scroll]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable && isFullScreen\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-dimmer>\n",
                    styles: ["\n.ui.dimmer {\n    overflow-y: auto;\n    display: flex !important;\n}\n\n/* avoid .scrolling as Semantic UI adds unwanted styles. */\n.scroll {\n    margin-top: 3.5rem !important;\n    margin-bottom: 3.5rem !important;\n    top: 0;\n}\n"]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUMxRCxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBbUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztJQW9LN0Qsa0JBQW9CLFNBQW1CLEVBQVUsUUFBbUIsRUFBVSxpQkFBcUM7UUFBbkgsaUJBbUJDO1FBbkJtQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7O1FBRS9HLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFtQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxD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OztTQXdEYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElEeW5hbWljQ2xhc3NlcywgS2V5Q29kZSwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbHMsIE1vZGFsUmVzdWx0IH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBNb2RhbFNpemUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUGFnZSBkaW1tZXIgZm9yIG1vZGFsIGJhY2tncm91bmQuIC0tPlxuPHN1aS1kaW1tZXIgY2xhc3M9XCJwYWdlXCJcbiAgICAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgICAgIFsoaXNEaW1tZWQpXT1cImRpbUJhY2tncm91bmRcIlxuICAgICAgICAgICAgW2lzQ2xpY2thYmxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgIFt0cmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgICAgICAgIFt3cmFwQ29udGVudF09XCJmYWxzZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiPlxuXG4gICAgPCEtLSBNb2RhbCBjb21wb25lbnQsIHdpdGggdHJhbnNpdGlvbiBjb21wb25lbnQgYXR0YWNoZWQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInVpIG1vZGFsXCJcbiAgICAgICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidHJhbnNpdGlvbkNvbnRyb2xsZXI/LmlzVmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuZnVsbHNjcmVlbl09XCJpc0Z1bGxTY3JlZW5cIlxuICAgICAgICAgW2NsYXNzLmJhc2ljXT1cImlzQmFzaWNcIlxuICAgICAgICAgW2NsYXNzLnNjcm9sbF09XCJtdXN0U2Nyb2xsXCJcbiAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgI21vZGFsPlxuXG4gICAgICAgIDwhLS0gQ29uZmlndXJhYmxlIGNsb3NlIGljb24gLS0+XG4gICAgICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNDbG9zYWJsZSAmJiBpc0Z1bGxTY3JlZW5cIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvaT5cbiAgICAgICAgPCEtLSA8bmctY29udGVudD4gc28gdGhhdCA8c3VpLW1vZGFsPiBjYW4gYmUgdXNlZCBhcyBhIG5vcm1hbCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS0gQFZpZXdDaGlsZCByZWZlcmVuY2Ugc28gd2UgY2FuIGluc2VydCBlbGVtZW50cyBiZXNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG4gICAgPC9kaXY+XG48L3N1aS1kaW1tZXI+XG5gLFxuICAgIHN0eWxlczogW2Bcbi51aS5kaW1tZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4vKiBhdm9pZCAuc2Nyb2xsaW5nIGFzIFNlbWFudGljIFVJIGFkZHMgdW53YW50ZWQgc3R5bGVzLiAqL1xuLnNjcm9sbCB7XG4gICAgbWFyZ2luLXRvcDogMy41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMy41cmVtICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWw8VCwgVT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VTtcblxuICAgIC8vIFNlcGFyYXRlIGNsYXNzIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgbWV0aG9kcyB0byBzdXBwb3J0IHBhc3NpbmcgaW50byBjb21wb25lbnRzLlxuICAgIHB1YmxpYyBjb250cm9sczpNb2RhbENvbnRyb2xzPFQsIFU+O1xuXG4gICAgcHVibGljIGdldCBhcHByb3ZlKCk6TW9kYWxSZXN1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5hcHByb3ZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVueSgpOk1vZGFsUmVzdWx0PFU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZGVueTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBhcHByb3ZlYCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImFwcHJvdmVkXCIpXG4gICAgcHVibGljIG9uQXBwcm92ZTpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImRlbmllZFwiKVxuICAgIHB1YmxpYyBvbkRlbnk6RXZlbnRFbWl0dGVyPFU+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLlxuICAgIEBPdXRwdXQoXCJkaXNtaXNzZWRcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBWaWV3Q2hpbGQoXCJtb2RhbFwiKVxuICAgIHByaXZhdGUgX21vZGFsRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwcml2YXRlIF9pc0Z1bGxTY3JlZW46Ym9vbGVhbjtcblxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNGdWxsU2NyZWVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Z1bGxTY3JlZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Z1bGxTY3JlZW4oZnVsbFNjcmVlbjpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRnVsbFNjcmVlbiA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmdWxsU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIGN1cnJlbnRseSBpcyBkaXNwbGF5aW5nIGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RTY3JvbGw6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RBbHdheXNTY3JvbGw6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtdXN0U2Nyb2xsKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXN0U2Nyb2xsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbXVzdFNjcm9sbChtdXN0U2Nyb2xsOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIC8vICdDYWNoZScgdmFsdWUgaW4gX211c3RBbHdheXNTY3JvbGwgc28gdGhhdCBpZiBgdHJ1ZWAsIF9tdXN0U2Nyb2xsIGlzbid0IGV2ZXIgYXV0by11cGRhdGVkLlxuICAgICAgICB0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwcml2YXRlIF9pc0ludmVydGVkOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNJbnZlcnRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZlcnRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIGJhY2tyb3VuZCBkaW1tZXIgaXMgYWN0aXZlLlxuICAgIHB1YmxpYyBkaW1CYWNrZ3JvdW5kOmJvb2xlYW47XG4gICAgLy8gVHJ1ZSBhZnRlciBgYXBwcm92ZWAgb3IgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBwcml2YXRlIF9pc0Nsb3Npbmc6Ym9vbGVhbjtcblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgLy8gUGFyZW50IGVsZW1lbnQgb2YgbW9kYWwgYmVmb3JlIHJlbG9jYXRpb24gdG8gZG9jdW1lbnQgYm9keS5cbiAgICBwcml2YXRlIF9vcmlnaW5hbENvbnRhaW5lcj86RWxlbWVudDtcblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tIGBNb2RhbENvbmZpZ2AgKHRvIGF2b2lkIHdyaXRpbmcgZGVmYXVsdHMgdHdpY2UpLlxuICAgICAgICBjb25zdCBjb25maWcgPSBuZXcgTW9kYWxDb25maWc8dW5kZWZpbmVkLCBULCBVPigpO1xuICAgICAgICB0aGlzLmxvYWRDb25maWcoY29uZmlnKTtcblxuICAgICAgICAvLyBFdmVudCBlbWl0dGVycyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgbW9kYWwgb3V0Y29tZXMuXG4gICAgICAgIHRoaXMub25BcHByb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uRGVueSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBjb250cm9scyB3aXRoIGFjdGlvbnMgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBjYXNlcy5cbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBNb2RhbENvbnRyb2xzPFQsIFU+KFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uQXBwcm92ZS5lbWl0KHJlcykpLFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uRGVueS5lbWl0KHJlcykpKTtcblxuICAgICAgICAvLyBJbnRlcm5hbCB2YXJpYWJsZSBpbml0aWFsaXNhdGlvbi5cbiAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgdmlzaWJsZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpbUJhY2tncm91bmQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIE1vdmUgdGhlIG1vZGFsIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGVuc3VyZSBjb3JyZWN0IHNjcm9sbGluZy5cbiAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgI3RlbXBsYXRlU2libGluZyBlbGVtZW50IGZyb20gdGhlIERPTSB0byBmaXggYm90dG9tIGJvcmRlciBzdHlsZXMuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMudGVtcGxhdGVTaWJsaW5nLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBpZiAodGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbWFyZ2luIG9mZnNldCB0byBjZW50ZXIgbW9kYWwgY29ycmVjdGx5IG9uLXNjcmVlbi5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIG1vZGFsIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWd1cmF0aW9uLlxuICAgIHB1YmxpYyBsb2FkQ29uZmlnPFY+KGNvbmZpZzpNb2RhbENvbmZpZzxWLCBULCBVPik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGNvbmZpZy5pc0Nsb3NhYmxlO1xuICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gY29uZmlnLmNsb3NlUmVzdWx0O1xuXG4gICAgICAgIHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGNvbmZpZy5pc0Z1bGxTY3JlZW47XG4gICAgICAgIHRoaXMuaXNCYXNpYyA9IGNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICB0aGlzLmlzSW52ZXJ0ZWQgPSBjb25maWcuaXNJbnZlcnRlZDtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBjb25maWcubXVzdFNjcm9sbDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBjb25maWcudHJhbnNpdGlvbjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSBjb25maWcudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhIHRyYW5zaXRpb24sIGZpcmluZyB0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nLlxuICAgIHByaXZhdGUgZGlzbWlzcyhjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgY3VycmVudGx5IGNsb3NpbmcsXG4gICAgICAgIGlmICghdGhpcy5faXNDbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSBpbnZpc2libGUuXG4gICAgICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZG9uZSwgbW92ZSB0aGUgbW9kYWwgYmFjayB0byBpdHMgb3JpZ2luYWwgbG9jYXRpb24sIGVtaXQgYSBkaXNtaXNzIGV2ZW50LCBhbmQgZmlyZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbCB3aXRoIGEgJ2RlbnknIG91dGNvbWUsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCByZWFzb24uXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbGxvd2VkIHRvIGNsb3NlLCBmaXJlIHRoZSBkZW55IHJlc3VsdCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZW55KHRoaXMuY2xvc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjaWRlcyB3aGV0aGVyIHRoZSBtb2RhbCBuZWVkcyB0byByZXBvc2l0aW9uIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICBwcml2YXRlIHVwZGF0ZVNjcm9sbCgpOnZvaWQge1xuICAgICAgICAvLyBTZW1hbnRpYyBVSSBtb2RhbCBtYXJnaW4gaXMgMy41cmVtLCB3aGljaCBpcyByZWxhdGl2ZSB0byB0aGUgZ2xvYmFsIGZvbnQgc2l6ZSwgc28gZm9yIGNvbXBhdGliaWxpdHk6XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAqIDMuNTtcblxuICAgICAgICAvLyBfbXVzdEFsd2F5c1Njcm9sbCB3b3JrcyBieSBzdG9wcGluZyBfbXVzdFNjcm9sbCBmcm9tIGJlaW5nIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCwgc28gaXQgc3RheXMgYHRydWVgLlxuICAgICAgICBpZiAoIXRoaXMuX211c3RBbHdheXNTY3JvbGwgJiYgdGhpcy5fbW9kYWxFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gVGhlIG1vZGFsIG11c3Qgc2Nyb2xsIGlmIHRoZSB3aW5kb3cgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiB0aGUgbW9kYWwgaGVpZ2h0ICsgYm90aCBtYXJnaW5zLlxuICAgICAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IHdpbmRvdy5pbm5lckhlaWdodCA8IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICogMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBtb2RhbCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIERvY3VtZW50IGxpc3RlbmVyIGlzIGZpbmUgaGVyZSBiZWNhdXNlIG5vYm9keSB3aWxsIGhhdmUgZW5vdWdoIG1vZGFscyBvcGVuLlxuICAgIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRG9jdW1lbnRLZXlVcChlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgLy8gQ2xvc2UgYXV0b21hdGljYWxseSBjb3ZlcnMgY2FzZSBvZiBgIWlzQ2xvc2FibGVgLCBzbyBjaGVjayBub3QgbmVlZGVkLlxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpyZXNpemVcIilcbiAgICBwdWJsaWMgb25Eb2N1bWVudFJlc2l6ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cbn1cbiJdfQ==