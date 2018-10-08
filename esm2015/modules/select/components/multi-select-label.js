/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { SuiTransition, TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { HandledEvent, SuiComponentFactory } from "../../../misc/util/internal";
// See https://github.com/Microsoft/TypeScript/issues/13449.
/** @type {?} */
const templateRef = TemplateRef;
/**
 * @template T
 */
export class SuiMultiSelectLabel extends SuiTransition {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     * @param {?} componentFactory
     */
    constructor(renderer, element, changeDetector, componentFactory) {
        super(renderer, element, changeDetector);
        this.componentFactory = componentFactory;
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false, "inline-block");
        this.setTransitionController(this._transitionController);
        this.onDeselected = new EventEmitter();
        this.hasClasses = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
    }
    /**
     * @return {?}
     */
    get template() {
        return this._template;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    deselectOption(e) {
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, () => this.onDeselected.emit(this.value)));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.eventHandled = true;
    }
}
SuiMultiSelectLabel.decorators = [
    { type: Component, args: [{
                selector: "sui-multi-select-label",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value)"></span>
<i class="delete icon" (click)="deselectOption($event)"></i>
`
            },] },
];
SuiMultiSelectLabel.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: SuiComponentFactory }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LWxhYmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QtbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUMzRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O01BSTFFLFdBQVcsR0FBRyxXQUFXOzs7O0FBVS9CLE1BQU0sMEJBQThCLFNBQVEsYUFBYTs7Ozs7OztJQTBDckQsWUFBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixjQUFnQyxFQUN6QixnQkFBb0M7UUFFbkQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFGMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUluRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQW5DRCxJQUNXLFFBQVE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQVcsUUFBUSxDQUFDLFFBQW1EO1FBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNwQixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUF3Qk0sY0FBYyxDQUFDLENBQWM7UUFDaEMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUIsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFHTSxPQUFPLENBQUMsQ0FBYztRQUN6QixDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7WUEvRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7OztDQUliO2FBQ0E7OztZQWhCYyxTQUFTO1lBQUUsVUFBVTtZQUFVLGlCQUFpQjtZQUd4QyxtQkFBbUI7Ozt5QkFpQnJDLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxhQUFhO29CQUt6QixLQUFLO29CQUdMLEtBQUs7MkJBR0wsTUFBTSxTQUFDLFlBQVk7d0JBR25CLEtBQUs7dUJBS0wsS0FBSzs4QkFnQkwsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3NCQTZCdkQsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWpFakMseUNBRW1DOztJQUVuQyxvREFBbUQ7O0lBRW5ELG9DQUNlOztJQUVmLG9DQUNxQjs7SUFFckIsMkNBQ29DOztJQUVwQyx3Q0FDbUM7O0lBRW5DLHdDQUFrRDs7SUFrQmxELDhDQUN3Qzs7SUFLNUIsK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJT3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdC1sYWJlbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUpXCI+PC9zcGFuPlxuPGkgY2xhc3M9XCJkZWxldGUgaWNvblwiIChjbGljayk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9pPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdExhYmVsPFQ+IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxhYmVsXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5PzpzdHJpbmc7XG5cbiAgICBAT3V0cHV0KFwiZGVzZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvbkRlc2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMub25EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==