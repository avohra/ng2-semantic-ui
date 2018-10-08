/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { SuiTransition, TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { HandledEvent, SuiComponentFactory } from "../../../misc/util/internal";
// See https://github.com/Microsoft/TypeScript/issues/13449.
/** @type {?} */
var templateRef = TemplateRef;
/**
 * @template T
 */
var SuiMultiSelectLabel = /** @class */ (function (_super) {
    tslib_1.__extends(SuiMultiSelectLabel, _super);
    function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.componentFactory = componentFactory;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false, "inline-block");
        _this.setTransitionController(_this._transitionController);
        _this.onDeselected = new EventEmitter();
        _this.hasClasses = true;
        _this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
        return _this;
    }
    Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.deselectOption = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, function () {
            return _this.onDeselected.emit(_this.value);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.eventHandled = true;
    };
    SuiMultiSelectLabel.decorators = [
        { type: Component, args: [{
                    selector: "sui-multi-select-label",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
                },] },
    ];
    SuiMultiSelectLabel.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: SuiComponentFactory }
    ]; };
    SuiMultiSelectLabel.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.label",] }],
        value: [{ type: Input }],
        query: [{ type: Input }],
        onDeselected: [{ type: Output, args: ["deselected",] }],
        formatter: [{ type: Input }],
        template: [{ type: Input }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiMultiSelectLabel;
}(SuiTransition));
export { SuiMultiSelectLabel };
if (false) {
    /** @type {?} */
    SuiMultiSelectLabel.prototype.hasClasses;
    /** @type {?} */
    SuiMultiSelectLabel.prototype._transitionController;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.value;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.query;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.onDeselected;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.formatter;
    /** @type {?} */
    SuiMultiSelectLabel.prototype._template;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.templateSibling;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LWxhYmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QtbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFDM0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztJQUkxRSxXQUFXLEdBQUcsV0FBVzs7OztBQUUvQjtJQVE0QywrQ0FBYTtJQTBDckQsNkJBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsY0FBZ0MsRUFDekIsZ0JBQW9DO1FBSHZELFlBS0ksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsU0FXM0M7UUFia0Isc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUluRCx1Q0FBdUM7UUFDdkMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV6RCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFFMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBQzdGLENBQUM7SUFuQ0Qsc0JBQ1cseUNBQVE7Ozs7UUFEbkI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQW9CLFFBQW1EO1lBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbEUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDOzs7T0FWQTs7Ozs7SUFrQ00sNENBQWM7Ozs7SUFBckIsVUFBc0IsQ0FBYztRQUFwQyxpQkFNQztRQUxHLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQzlCLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFO1lBQ2xELE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztRQUFsQyxDQUFrQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUdNLHFDQUFPOzs7O0lBRGQsVUFDZSxDQUFjO1FBQ3pCLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7O2dCQS9FSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDBLQUliO2lCQUNBOzs7Z0JBaEJjLFNBQVM7Z0JBQUUsVUFBVTtnQkFBVSxpQkFBaUI7Z0JBR3hDLG1CQUFtQjs7OzZCQWlCckMsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGFBQWE7d0JBS3pCLEtBQUs7d0JBR0wsS0FBSzsrQkFHTCxNQUFNLFNBQUMsWUFBWTs0QkFHbkIsS0FBSzsyQkFLTCxLQUFLO2tDQWdCTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7MEJBNkJ2RCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUlyQywwQkFBQztDQUFBLEFBaEZELENBUTRDLGFBQWEsR0F3RXhEO1NBeEVZLG1CQUFtQjs7O0lBRzVCLHlDQUVtQzs7SUFFbkMsb0RBQW1EOztJQUVuRCxvQ0FDZTs7SUFFZixvQ0FDcUI7O0lBRXJCLDJDQUNvQzs7SUFFcEMsd0NBQ21DOztJQUVuQyx3Q0FBa0Q7O0lBa0JsRCw4Q0FDd0M7O0lBSzVCLCtDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSU9wdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzQ0OS5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3QtbGFiZWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlKVwiPjwvc3Bhbj5cbjxpIGNsYXNzPVwiZGVsZXRlIGljb25cIiAoY2xpY2spPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvaT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3RMYWJlbDxUPiBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAvLyBEb2luZyBpdCBvbiB0aGUgaG9zdCBlbmFibGVzIHVzZSBpbiBtZW51cyBldGMuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sYWJlbFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBxdWVyeT86c3RyaW5nO1xuXG4gICAgQE91dHB1dChcImRlc2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25EZXNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQpID0+IHN0cmluZztcblxuICAgIHByaXZhdGUgX3RlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICBwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzZWxlY3RPcHRpb24oZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwic2NhbGVcIiwgMTAwLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=