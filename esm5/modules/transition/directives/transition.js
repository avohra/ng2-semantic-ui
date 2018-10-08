/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Renderer2, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef } from "@angular/core";
import { TransitionController } from "../classes/transition-controller";
var SuiTransition = /** @class */ (function () {
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        set: /**
         * @param {?} tC
         * @return {?}
         */
        function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // Initialises the controller with the injected renderer and elementRef.
    // Initialises the controller with the injected renderer and elementRef.
    /**
     * @param {?} transitionController
     * @return {?}
     */
    SuiTransition.prototype.setTransitionController = 
    // Initialises the controller with the injected renderer and elementRef.
    /**
     * @param {?} transitionController
     * @return {?}
     */
    function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    SuiTransition.decorators = [
        { type: Directive, args: [{
                    selector: "[suiTransition]",
                    exportAs: "transition"
                },] },
    ];
    SuiTransition.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiTransition.propDecorators = {
        suiTransition: [{ type: Input }],
        transitionClass: [{ type: HostBinding, args: ["class.transition",] }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isHidden: [{ type: HostBinding, args: ["class.hidden",] }]
    };
    return SuiTransition;
}());
export { SuiTransition };
if (false) {
    /** @type {?} */
    SuiTransition.prototype._controller;
    /** @type {?} */
    SuiTransition.prototype.transitionClass;
    /** @type {?} */
    SuiTransition.prototype._renderer;
    /** @type {?} */
    SuiTransition.prototype._element;
    /** @type {?} */
    SuiTransition.prototype._changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJhbnNpdGlvbi9kaXJlY3RpdmVzL3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhFO0lBaUNJLHVCQUFzQixTQUFtQixFQUFZLFFBQW1CLEVBQVUsZUFBaUM7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFsQjVHLG9CQUFlLEdBQVcsSUFBSSxDQUFDO0lBa0JnRixDQUFDO0lBekJ2SCxzQkFDVyx3Q0FBYTs7Ozs7UUFEeEIsVUFDeUIsRUFBdUI7WUFDNUMsNkZBQTZGO1lBQzdGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUtELHNCQUNXLG9DQUFTOzs7O1FBRHBCO1lBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVELHNCQUNXLG1DQUFROzs7O1FBRG5CO1lBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUlELHdFQUF3RTs7Ozs7O0lBQ2pFLCtDQUF1Qjs7Ozs7O0lBQTlCLFVBQStCLG9CQUF5QztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBekNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsWUFBWTtpQkFDekI7OztnQkFOUSxTQUFTO2dCQUFFLFVBQVU7Z0JBQWlDLGlCQUFpQjs7O2dDQVczRSxLQUFLO2tDQU1MLFdBQVcsU0FBQyxrQkFBa0I7NEJBRzlCLFdBQVcsU0FBQyxlQUFlOzJCQVEzQixXQUFXLFNBQUMsY0FBYzs7SUFpQi9CLG9CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F0Q1ksYUFBYTs7O0lBRXRCLG9DQUF5Qzs7SUFRekMsd0NBQ3NDOztJQWtCMUIsa0NBQTZCOztJQUFFLGlDQUE2Qjs7SUFBRSx3Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3RyYW5zaXRpb24tY29udHJvbGxlclwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVHJhbnNpdGlvbl1cIixcbiAgICBleHBvcnRBczogXCJ0cmFuc2l0aW9uXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gRWFjaCB0cmFuc2l0aW9uIG11c3QgaGF2ZSBhIGNvbnRyb2xsZXIgYXNzb2NpYXRlZCB0aGF0IGRpc3BhdGNoZXMgdGhlIHRyYW5zaXRpb25zLlxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc3VpVHJhbnNpdGlvbih0QzpUcmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAvLyBTZXQgdGhlIHRyYW5zaXRpb24gY29udHJvbGxlciAoZS5nLiAnPGRpdiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPjwvZGl2PicpLlxuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRDKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50cmFuc2l0aW9uXCIpXG4gICAgcHVibGljIHRyYW5zaXRpb25DbGFzczpib29sZWFuID0gdHJ1ZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXIuaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5oaWRkZW5cIilcbiAgICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc0hpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByb3RlY3RlZCBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIC8vIEluaXRpYWxpc2VzIHRoZSBjb250cm9sbGVyIHdpdGggdGhlIGluamVjdGVkIHJlbmRlcmVyIGFuZCBlbGVtZW50UmVmLlxuICAgIHB1YmxpYyBzZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSB0cmFuc2l0aW9uQ29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlclJlbmRlcmVyKHRoaXMuX3JlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlckVsZW1lbnQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5yZWdpc3RlckNoYW5nZURldGVjdG9yKHRoaXMuX2NoYW5nZURldGVjdG9yKTtcbiAgICB9XG59XG4iXX0=