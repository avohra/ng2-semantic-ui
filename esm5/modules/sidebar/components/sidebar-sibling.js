/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, ElementRef, Renderer2 } from "@angular/core";
import { SidebarTransition } from "../services/sidebar.service";
var SuiSidebarSibling = /** @class */ (function () {
    function SuiSidebarSibling(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebarSibling.prototype, "service", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            var _this = this;
            this._service = service;
            setTimeout(function () { return _this.updateTransform(); });
            this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible && this.isDimmedWhenVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSidebarSibling.prototype.updateTransform = /**
     * @return {?}
     */
    function () {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== SidebarTransition.Overlay &&
            this.service.transition !== SidebarTransition.ScaleDown) {
            /** @type {?} */
            var translate = "translate3d(" + this.service.width + "px, " + this.service.height + "px, 0)";
            this._renderer.setStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiSidebarSibling.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    };
    SuiSidebarSibling.decorators = [
        { type: Component, args: [{
                    selector: "sui-sidebar-sibling",
                    template: "<ng-content></ng-content>",
                    styles: ["\n:host {\n    display: block;\n}\n"]
                },] },
    ];
    SuiSidebarSibling.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiSidebarSibling.propDecorators = {
        isDimmedWhenVisible: [{ type: Input }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isDimmed: [{ type: HostBinding, args: ["class.dimmed",] }],
        hasClasses: [{ type: HostBinding, args: ["class.pusher",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiSidebarSibling;
}());
export { SuiSidebarSibling };
if (false) {
    /** @type {?} */
    SuiSidebarSibling.prototype._service;
    /** @type {?} */
    SuiSidebarSibling.prototype.isDimmedWhenVisible;
    /** @type {?} */
    SuiSidebarSibling.prototype.hasClasses;
    /** @type {?} */
    SuiSidebarSibling.prototype._renderer;
    /** @type {?} */
    SuiSidebarSibling.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1zaWJsaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci1zaWJsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhGO0lBNkNJLDJCQUFvQixTQUFtQixFQUFVLFFBQW1CO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQXJDRCxzQkFBVyxzQ0FBTzs7OztRQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBbUIsT0FBc0I7WUFBekMsaUJBS0M7WUFKRyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUV4QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDMUUsQ0FBQzs7O09BUEE7SUFZRCxzQkFDVyx3Q0FBUzs7OztRQURwQjtZQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLHVDQUFROzs7O1FBRG5CO1lBRUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTs7OztJQVdPLDJDQUFlOzs7SUFBdkI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRTdFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxpQkFBaUIsQ0FBQyxPQUFPO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O2dCQUVwRCxTQUFTLEdBQUcsaUJBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFlBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLFdBQVE7WUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7SUFDTCxDQUFDOzs7OztJQUdNLG1DQUFPOzs7O0lBRGQsVUFDZSxLQUFnQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxxQ0FJWixDQUFDO2lCQUNEOzs7Z0JBWGlFLFNBQVM7Z0JBQXJCLFVBQVU7OztzQ0EwQjNELEtBQUs7NEJBR0wsV0FBVyxTQUFDLGVBQWU7MkJBUTNCLFdBQVcsU0FBQyxjQUFjOzZCQVExQixXQUFXLFNBQUMsY0FBYzswQkF1QjFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTXJDLHdCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0E5RFksaUJBQWlCOzs7SUFDMUIscUNBQWdDOztJQWFoQyxnREFDbUM7O0lBa0JuQyx1Q0FDbUM7O0lBRXZCLHNDQUEyQjs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhci1zaWJsaW5nXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyU2libGluZyB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOlNpZGViYXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U2lkZWJhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpKTtcbiAgICAgICAgdGhpcy5fc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtKCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkV2hlblZpc2libGU6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJiB0aGlzLmlzRGltbWVkV2hlblZpc2libGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHVzaGVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRXaGVuVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm0oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIi13ZWJraXQtdHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiAhPT0gU2lkZWJhclRyYW5zaXRpb24uT3ZlcmxheSAmJlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gIT09IFNpZGViYXJUcmFuc2l0aW9uLlNjYWxlRG93bikge1xuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlM2QoJHt0aGlzLnNlcnZpY2Uud2lkdGh9cHgsICR7dGhpcy5zZXJ2aWNlLmhlaWdodH1weCwgMClgO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIi13ZWJraXQtdHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJiAhdGhpcy5zZXJ2aWNlLndhc0p1c3RPcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19