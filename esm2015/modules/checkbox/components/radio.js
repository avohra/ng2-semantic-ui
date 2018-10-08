/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
/**
 * @template T
 */
export class SuiRadio {
    constructor() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    /**
     * @return {?}
     */
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown(e) {
        e.preventDefault();
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        this.onTouched.emit();
    }
    /**
     * @return {?}
     */
    update() {
        this.isChecked = this.currentValue === this.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.currentValue = value;
        this.update();
    }
    /**
     * @return {?}
     */
    focusRadio() {
        this._radioElement.nativeElement.focus();
    }
}
SuiRadio.decorators = [
    { type: Component, args: [{
                selector: "sui-radio-button",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [ngModel]="isChecked"
       (ngModel)="currentValue = value"
       #radio>
<label>
    <ng-content></ng-content>
</label>
`
            },] },
];
SuiRadio.ctorParameters = () => [];
SuiRadio.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.radio",] }, { type: HostBinding, args: ["class.checkbox",] }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    isChecked: [{ type: HostBinding, args: ["class.checked",] }],
    onCurrentValueChange: [{ type: Output, args: ["currentValueChange",] }],
    onTouched: [{ type: Output, args: ["touched",] }],
    isDisabled: [{ type: Input }],
    isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
    _radioElement: [{ type: ViewChild, args: ["radio",] }],
    onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
    onClick: [{ type: HostListener, args: ["click",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout",] }]
};
if (false) {
    /** @type {?} */
    SuiRadio.prototype.hasClasses;
    /** @type {?} */
    SuiRadio.prototype.name;
    /** @type {?} */
    SuiRadio.prototype.value;
    /** @type {?} */
    SuiRadio.prototype.isChecked;
    /** @type {?} */
    SuiRadio.prototype.currentValue;
    /** @type {?} */
    SuiRadio.prototype.onCurrentValueChange;
    /** @type {?} */
    SuiRadio.prototype.onTouched;
    /** @type {?} */
    SuiRadio.prototype.isDisabled;
    /** @type {?} */
    SuiRadio.prototype.isReadonly;
    /** @type {?} */
    SuiRadio.prototype._radioElement;
}
/**
 * @template T
 */
export class SuiRadioValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiRadioValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-radio-button",
                host: {
                    "(currentValueChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
            },] },
];
SuiRadioValueAccessor.ctorParameters = () => [
    { type: SuiRadio }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDOUQsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDdUIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBRTVFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFrQnJDLE1BQU07SUF5Q0Y7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQWpCRCxJQUFXLGdCQUFnQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQWNNLFdBQVcsQ0FBQyxDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBR00sT0FBTztRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7Ozs7SUFHTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQU87UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7O1lBbkdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVliO2FBQ0E7Ozs7eUJBRUksV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGFBQWEsY0FDekIsV0FBVyxTQUFDLGdCQUFnQjttQkFHNUIsS0FBSztvQkFHTCxLQUFLO3dCQUdMLFdBQVcsU0FBQyxlQUFlO21DQUszQixNQUFNLFNBQUMsb0JBQW9CO3dCQUczQixNQUFNLFNBQUMsU0FBUzt5QkFHaEIsS0FBSzt5QkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7NEJBR0wsU0FBUyxTQUFDLE9BQU87MEJBc0JqQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQUtwQyxZQUFZLFNBQUMsT0FBTzt5QkFVcEIsWUFBWSxTQUFDLFVBQVU7Ozs7SUFsRXhCLDhCQUdtQzs7SUFFbkMsd0JBQ21COztJQUVuQix5QkFDZTs7SUFFZiw2QkFDeUI7O0lBRXpCLGdDQUFzQjs7SUFFdEIsd0NBQzRDOztJQUU1Qyw2QkFDb0M7O0lBRXBDLDhCQUMwQjs7SUFFMUIsOEJBRTBCOztJQUUxQixpQ0FDaUM7Ozs7O0FBK0RyQyxNQUFNLDRCQUFnQyxTQUFRLG1CQUFtQzs7OztJQUM3RSxZQUFZLElBQWdCO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7WUFYSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNGLHNCQUFzQixFQUFFLGtCQUFrQjtvQkFDMUMsV0FBVyxFQUFFLGFBQWE7aUJBQzdCO2dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDakU7OztZQUVvQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuLCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBVdGlsXG59IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48aW5wdXQgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICBbYXR0ci5jaGVja2VkXT1cImNoZWNrZWRBdHRyaWJ1dGVcIlxuICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzRGlzYWJsZWRBdHRyaWJ1dGVcIlxuICAgICAgIFtuZ01vZGVsXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgKG5nTW9kZWwpPVwiY3VycmVudFZhbHVlID0gdmFsdWVcIlxuICAgICAgICNyYWRpbz5cbjxsYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpbzxUPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxUPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYWRpb1wiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrZWRcIilcbiAgICBwdWJsaWMgaXNDaGVja2VkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgY3VycmVudFZhbHVlOlQ7XG5cbiAgICBAT3V0cHV0KFwiY3VycmVudFZhbHVlQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uQ3VycmVudFZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBAVmlld0NoaWxkKFwicmFkaW9cIilcbiAgICBwcml2YXRlIF9yYWRpb0VsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBnZXQgY2hlY2tlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hlY2tlZCA/IFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSYWRpbygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzUmFkaW8oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFkaW9FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYWRpby1idXR0b25cIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGN1cnJlbnRWYWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmFkaW9WYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yPFQ+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxULCBTdWlSYWRpbzxUPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpUmFkaW88VD4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIl19