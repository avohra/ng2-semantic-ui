/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, ElementRef, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { PositioningService } from "../../../misc/util/internal";
import { TransitionController, TransitionDirection, Transition } from "../../transition/internal";
var SuiPopup = /** @class */ (function () {
    function SuiPopup(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    Object.defineProperty(SuiPopup.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "anchor", {
        set: /**
         * @param {?} anchor
         * @return {?}
         */
        function (anchor) {
            this._anchor = anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        get: 
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        /**
         * @return {?}
         */
        function () {
            // We need to set direction attribute before popper init to allow correct positioning
            return this.config.placement.split(" ").shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "alignment", {
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        get: 
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        /**
         * @return {?}
         */
        function () {
            return this.config.placement.split(" ").pop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = {};
            if (this.direction) {
                classes[this.direction] = true;
            }
            if (this.alignment) {
                classes[this.alignment] = true;
            }
            if (this.config.isInverted) {
                classes.inverted = true;
            }
            if (this.config.isBasic) {
                classes.basic = true;
            }
            if (this.config.isFlowing) {
                classes.flowing = true;
            }
            if (this.config.size) {
                classes[this.config.size] = true;
            }
            if (this.config.width) {
                classes[this.config.width] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopup.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(function () {
                _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                _this.positioningService.hasArrow = !_this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                // Focus any element with [autofocus] attribute.
                /** @type {?} */
                var autoFocus = (/** @type {?} */ (_this.elementRef.nativeElement.querySelector("[autofocus]")));
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(function () { return autoFocus.focus(); }, 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    };
    /**
     * @return {?}
     */
    SuiPopup.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopup.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiPopup.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    };
    SuiPopup.decorators = [
        { type: Component, args: [{
                    selector: "sui-popup",
                    template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                    styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
                },] },
    ];
    SuiPopup.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiPopup.propDecorators = {
        _container: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiPopup;
}());
export { SuiPopup };
if (false) {
    /** @type {?} */
    SuiPopup.prototype.config;
    /** @type {?} */
    SuiPopup.prototype.transitionController;
    /** @type {?} */
    SuiPopup.prototype.positioningService;
    /** @type {?} */
    SuiPopup.prototype._anchor;
    /** @type {?} */
    SuiPopup.prototype._isOpen;
    /** @type {?} */
    SuiPopup.prototype.closingTimeout;
    /** @type {?} */
    SuiPopup.prototype.onOpen;
    /** @type {?} */
    SuiPopup.prototype.onClose;
    /** @type {?} */
    SuiPopup.prototype._container;
    /** @type {?} */
    SuiPopup.prototype.templateSibling;
    /** @type {?} */
    SuiPopup.prototype.tabindex;
    /** @type {?} */
    SuiPopup.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSWxHO0lBZ0lJLGtCQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQWpFRCxzQkFBVyw0QkFBTTs7OztRQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsNEJBQU07Ozs7O1FBQWpCLFVBQWtCLE1BQWlCO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsK0JBQVM7UUFEcEIscUZBQXFGOzs7Ozs7UUFDckY7WUFDSSxxRkFBcUY7WUFDckYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFN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eyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSwgSUR5bmFtaWNDbGFzc2VzIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBwb3B1cFwiXG4gICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgI2NvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLnRlbXBsYXRlICYmICghIWNvbmZpZy5oZWFkZXIgfHwgISFjb25maWcudGV4dClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiICpuZ0lmPVwiY29uZmlnLmhlYWRlclwiPnt7IGNvbmZpZy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBjb25maWcudGV4dCB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cblxuICAgIDxzdWktcG9wdXAtYXJyb3cgKm5nSWY9XCIhY29uZmlnLmlzQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgIFtpbnZlcnRlZF09XCJjb25maWcuaXNJbnZlcnRlZFwiPjwvc3VpLXBvcHVwLWFycm93PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi51aS5wb3B1cCB7XG4gICAgLyogQXV0b2ZpdCBwb3B1cCB0byB0aGUgY29udGVudHMuICovXG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udWkuYW5pbWF0aW5nLnBvcHVwIHtcbiAgICAvKiBXaGVuIHRoZSBwb3B1cCBpcyBhbmltYXRpbmcsIGl0IG1heSBub3QgaW5pdGlhbGx5IGJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgIFRoaXMgZmlyZXMgYSBtb3VzZSBldmVudCwgY2F1c2luZyB0aGUgYW5jaG9yJ3MgbW91c2VsZWF2ZSB0byBmaXJlIC0gbWFraW5nIHRoZSBwb3B1cCBmbGlja2VyLlxuICAgICAgIFNldHRpbmcgcG9pbnRlci1ldmVudHMgdG8gbm9uZSB3aGlsZSBhbmltYXRpbmcgZml4ZXMgdGhpcyBidWcuICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS5wb3B1cDo6YmVmb3JlIHtcbiAgICAvKiBIaWRlIHRoZSBTZW1hbnRpYyBVSSBDU1MgYXJyb3cuICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogT2Zmc2V0IHBvcHVwIGJ5IDAuNzVlbSBhYm92ZSBhbmQgYmVsb3cgd2hlbiBwbGFjZWQgJ3ZlcnRpY2FsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cInRvcFwiXSxcbi51aS5wb3B1cFtkaXJlY3Rpb249XCJib3R0b21cIl0ge1xuICAgIG1hcmdpbi10b3A6IDAuNzVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gZWl0aGVyIHNpZGUgd2hlbiBwbGFjZWQgJ2hvcml6b250YWxseScuICovXG4udWkucG9wdXBbZGlyZWN0aW9uPVwibGVmdFwiXSxcbi51aS5wb3B1cFtkaXJlY3Rpb249XCJyaWdodFwiXSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwIGltcGxlbWVudHMgSVBvcHVwIHtcbiAgICAvLyBDb25maWcgc2V0dGluZ3MgZm9yIHRoaXMgcG9wdXAuXG4gICAgcHVibGljIGNvbmZpZzpUZW1wbGF0ZVBvcHVwQ29uZmlnPGFueT47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG4gICAgcHVibGljIHBvc2l0aW9uaW5nU2VydmljZTpQb3NpdGlvbmluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfYW5jaG9yOkVsZW1lbnRSZWY7XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBwb3B1cCBpcyBvcGVuIGludGVybmFsbHkuXG4gICAgcHJpdmF0ZSBfaXNPcGVuOmJvb2xlYW47XG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGNhbmNlbGxpbmcgcG9wdXAgY2xvc2UuXG4gICAgcHVibGljIGNsb3NpbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIHBvcHVwIG9wZW5zIChhbmQgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQpLlxuICAgIHB1YmxpYyBvbk9wZW46RXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIC8vIEZpcmVzIHdoZW4gdGhlIHBvcHVwIGNsb3NlcyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25DbG9zZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIC8vIGBFbGVtZW50UmVmYCBmb3IgdGhlIHBvc2l0aW9uaW5nIHN1YmplY3QuXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9jb250YWluZXI6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuY2hvciA9IGFuY2hvcjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gKGB0b3BgLCBgbGVmdGAsIGByaWdodGAsIGBib3R0b21gKSBvZiB0aGUgY3VycmVudCBwbGFjZW1lbnQuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCBkaXJlY3Rpb24gYXR0cmlidXRlIGJlZm9yZSBwb3BwZXIgaW5pdCB0byBhbGxvdyBjb3JyZWN0IHBvc2l0aW9uaW5nXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgYWxpZ25tZW50IChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmFsaWdubWVudF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0ludmVydGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmludmVydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNCYXNpYykge1xuICAgICAgICAgICAgY2xhc3Nlcy5iYXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzRmxvd2luZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5mbG93aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuY29uZmlnLndpZHRoXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gb3BlbiBpZiBjdXJyZW50bHkgY2xvc2VkLlxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwb3NpdGlvbmluZyBzZXJ2aWNlIGFmdGVyIGEgYnJpZWYgZGVsYXkuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZ1NlcnZpY2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCIuZHluYW1pYy5hcnJvd1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZS5oYXNBcnJvdyA9ICF0aGlzLmNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgb3BlbmluZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBvcGVuLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25PcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGNsb3NlIGlmIGN1cnJlbnRseSBvcGVuLlxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgY2xvc2luZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgY2xvc2luZyB0aW1lciwgdGhhdCBmaXJlcyB0aGUgYG9uQ2xvc2VgIGV2ZW50IGFmdGVyIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAgICAgICAgICB0aGlzLmNsb3NpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkNsb3NlLmVtaXQoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBjbG9zZWQuXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBwb3B1cCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG4iXX0=