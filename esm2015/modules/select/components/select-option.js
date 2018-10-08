/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
/**
 * @template T
 */
export class SuiSelectOption extends SuiDropdownMenuItem {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    constructor(renderer, element, changeDetector) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);
        this.changeDetector = changeDetector;
        this.hasClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        this.renderedText = "";
        this.usesTemplate = false;
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set formatter(formatter) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        }
        else {
            this.renderedText = "";
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.eventHandled = true;
        setTimeout(() => this.onSelected.emit(this.value));
    }
}
SuiSelectOption.decorators = [
    { type: Component, args: [{
                selector: "sui-select-option",
                template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
            },] },
];
SuiSelectOption.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SuiSelectOption.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.item",] }],
    value: [{ type: Input }],
    onSelected: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiSelectOption.prototype.hasClasses;
    /** @type {?} */
    SuiSelectOption.prototype.value;
    /** @type {?} */
    SuiSelectOption.prototype.onSelected;
    /** @type {?} */
    SuiSelectOption.prototype.isActive;
    /** @type {?} */
    SuiSelectOption.prototype.renderedText;
    /** @type {?} */
    SuiSelectOption.prototype.usesTemplate;
    /** @type {?} */
    SuiSelectOption.prototype.templateSibling;
    /** @type {?} */
    SuiSelectOption.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFDOUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBUzNELE1BQU0sc0JBQTBCLFNBQVEsbUJBQW1COzs7Ozs7SUErQnZELFlBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFTLGNBQWdDO1FBQ3ZGLDhGQUE4RjtRQUM5RixxRkFBcUY7UUFDckYsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUg4QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFLdkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRXhDLHFIQUFxSDtRQUNySCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQTNCRCxJQUFXLFNBQVMsQ0FBQyxTQUEyQjtRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUF3Qk0sT0FBTyxDQUFDLENBQWM7UUFDekIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQTFESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Q0FHYjthQUNBOzs7WUFYYyxTQUFTO1lBQUUsVUFBVTtZQUFVLGlCQUFpQjs7O3lCQWMxRCxXQUFXLFNBQUMsWUFBWTtvQkFHeEIsS0FBSzt5QkFJTCxNQUFNO3VCQUdOLFdBQVcsU0FBQyxjQUFjOzhCQWdCMUIsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3NCQWtCdkQsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTVDakMscUNBQ21DOztJQUVuQyxnQ0FDZTs7SUFHZixxQ0FDa0M7O0lBRWxDLG1DQUN3Qjs7SUFFeEIsdUNBQTRCOztJQVU1Qix1Q0FBNEI7O0lBRzVCLDBDQUN3Qzs7SUFFWSx5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51SXRlbSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0LW9wdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuIFtpbm5lckhUTUxdPVwicmVuZGVyZWRUZXh0XCI+PC9zcGFuPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RPcHRpb248VD4gZXh0ZW5kcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLCB3aGV0aGVyIGJ5IGNsaWNraW5nIG9yIGJ5IGtleWJvYXJkLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIHJlbmRlcmVkVGV4dD86c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBmb3JtYXR0ZXIoZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gZm9ybWF0dGVyKHRoaXMudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXNUZW1wbGF0ZTpib29sZWFuO1xuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgcHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIC8vIFdlIGluaGVyaXQgU3VpRHJvcGRvd25NZW51SXRlbSB0byBhdXRvbWF0aWNhbGx5IGdhaW4gYWxsIGtleWJvYXJkIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgZG9uZSB2aWEgYWRkaW5nIHRoZSAuaXRlbSBjbGFzcyBiZWNhdXNlIGl0IGlzbid0IHN1cHBvcnRlZCBieSBBbmd1bGFyLlxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoZSBkZWZhdWx0IHRleHQgYW4gZW1wdHkgbGFiZWwsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBvbmUuXG4gICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnVzZXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKSk7XG4gICAgfVxufVxuIl19