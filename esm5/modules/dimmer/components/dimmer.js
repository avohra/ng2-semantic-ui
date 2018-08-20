/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/internal";
var SuiDimmer = /** @class */ (function (_super) {
    tslib_1.__extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDimmed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDimmer.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    SuiDimmer.decorators = [
        { type: Component, args: [{
                    selector: "sui-dimmer",
                    template: "\n<div [class.content]=\"wrapContent\">\n    <div [class.center]=\"wrapContent\">\n        <ng-content></ng-content>\n    </div>\n</div>\n",
                    styles: ["\n:host.dimmer {\n    transition: none;\n}\n"]
                },] },
    ];
    /** @nocollapse */
    SuiDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiDimmer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dimmer",] }],
        isDimmed: [{ type: HostBinding, args: ["class.active",] }, { type: Input }],
        isDimmedChange: [{ type: Output }],
        isClickable: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        wrapContent: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click",] }]
    };
    return SuiDimmer;
}(SuiTransition));
export { SuiDimmer };
if (false) {
    /** @type {?} */
    SuiDimmer.prototype.hasClasses;
    /** @type {?} */
    SuiDimmer.prototype._transitionController;
    /** @type {?} */
    SuiDimmer.prototype._isDimmed;
    /** @type {?} */
    SuiDimmer.prototype.isDimmedChange;
    /** @type {?} */
    SuiDimmer.prototype.isClickable;
    /** @type {?} */
    SuiDimmer.prototype.transition;
    /** @type {?} */
    SuiDimmer.prototype.transitionDuration;
    /** @type {?} */
    SuiDimmer.prototype.wrapContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUM1RSxVQUFVLEVBQUUsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBaUJsRixxQ0FBYTtJQW1EeEMsbUJBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFFLGNBQWdDO1FBQXBGLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsU0FTM0M7UUFQRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0tBQzFCO0lBcERELHNCQUVXLCtCQUFROzs7O1FBRm5CO1lBR0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7Ozs7O2tCQUVtQixLQUFhOztZQUM3QixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs7Z0JBRTlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFekUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUV6RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUM3QjtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUUxQixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQzlCLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckg7Ozs7T0FuQko7Ozs7SUFtRE0sMkJBQU87OztJQURkO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO0tBQ0o7O2dCQXBGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw0SUFNYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyw4Q0FJWixDQUFDO2lCQUNEOzs7O2dCQW5Cc0UsU0FBUztnQkFDNUUsVUFBVTtnQkFBRSxpQkFBaUI7Ozs2QkFvQjVCLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxjQUFjOzJCQU8xQixXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLO2lDQXlCTCxNQUFNOzhCQUdOLEtBQUs7NkJBR0wsS0FBSztxQ0FHTCxLQUFLOzhCQUlMLEtBQUs7MEJBZUwsWUFBWSxTQUFDLE9BQU87O29CQXBGekI7RUFxQitCLGFBQWE7U0FBL0IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW2NsYXNzLmNvbnRlbnRdPVwid3JhcENvbnRlbnRcIj5cbiAgICA8ZGl2IFtjbGFzcy5jZW50ZXJdPVwid3JhcENvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LmRpbW1lciB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lciBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHJpdmF0ZSBfaXNEaW1tZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaW1tZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0RpbW1lZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGlzRGltbWVkID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eSB3aGVuIGZpcnN0IHNldHRpbmcgZGltbWVkLCB0byBlbnN1cmUgaW5pdGlhbCBzdGF0ZSBkb2Vzbid0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihpc0RpbW1lZCwgXCJibG9ja1wiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNEaW1tZWQgIT09IGlzRGltbWVkKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJmYWRlXCIsIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBpc0RpbW1lZCA/IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4gOiBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQ2xpY2thYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvKiBJbnRlcm5hbCBmb3Igbm93ICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd3JhcENvbnRlbnQ6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lzRGltbWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMud3JhcENvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UuZW1pdCh0aGlzLmlzRGltbWVkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==