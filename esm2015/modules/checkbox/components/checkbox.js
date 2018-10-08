/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
export class SuiCheckbox {
    constructor() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
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
            this.toggle();
            this.focusCheckbox();
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
    toggle() {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.isChecked = value;
    }
    /**
     * @return {?}
     */
    focusCheckbox() {
        this._checkboxElement.nativeElement.focus();
    }
}
SuiCheckbox.decorators = [
    { type: Component, args: [{
                selector: "sui-checkbox",
                exportAs: "suiCheckbox",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [(ngModel)]="isChecked"
       #checkbox>
<label>
    <ng-content></ng-content>
</label>
`
            },] },
];
SuiCheckbox.ctorParameters = () => [];
SuiCheckbox.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.checkbox",] }],
    name: [{ type: Input }],
    isChecked: [{ type: HostBinding, args: ["class.checked",] }],
    onCheckChange: [{ type: Output, args: ["checkChange",] }],
    onTouched: [{ type: Output, args: ["touched",] }],
    isDisabled: [{ type: Input }],
    isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
    _checkboxElement: [{ type: ViewChild, args: ["checkbox",] }],
    onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
    onClick: [{ type: HostListener, args: ["click",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout",] }]
};
if (false) {
    /** @type {?} */
    SuiCheckbox.prototype.hasClasses;
    /** @type {?} */
    SuiCheckbox.prototype.name;
    /** @type {?} */
    SuiCheckbox.prototype.isChecked;
    /** @type {?} */
    SuiCheckbox.prototype.onCheckChange;
    /** @type {?} */
    SuiCheckbox.prototype.onTouched;
    /** @type {?} */
    SuiCheckbox.prototype.isDisabled;
    /** @type {?} */
    SuiCheckbox.prototype.isReadonly;
    /** @type {?} */
    SuiCheckbox.prototype._checkboxElement;
}
export class SuiCheckboxValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiCheckboxValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-checkbox",
                host: {
                    "(checkChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
            },] },
];
SuiCheckboxValueAccessor.ctorParameters = () => [
    { type: SuiCheckbox }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDOUQsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNEIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWtCeEgsTUFBTTtJQW1DRjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQXBCRCxJQUFXLGdCQUFnQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQWlCTSxXQUFXLENBQUMsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUdNLE9BQU87UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7Ozs7SUFHTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFTyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7O1lBM0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXYjthQUNBOzs7O3lCQUVJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxnQkFBZ0I7bUJBRzVCLEtBQUs7d0JBR0wsV0FBVyxTQUFDLGVBQWU7NEJBRzNCLE1BQU0sU0FBQyxhQUFhO3dCQUdwQixNQUFNLFNBQUMsU0FBUzt5QkFHaEIsS0FBSzt5QkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7K0JBV0wsU0FBUyxTQUFDLFVBQVU7MEJBY3BCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBS3BDLFlBQVksU0FBQyxPQUFPO3lCQVFwQixZQUFZLFNBQUMsVUFBVTs7OztJQTFEeEIsaUNBRW1DOztJQUVuQywyQkFDbUI7O0lBRW5CLGdDQUN5Qjs7SUFFekIsb0NBQzJDOztJQUUzQyxnQ0FDb0M7O0lBRXBDLGlDQUMwQjs7SUFFMUIsaUNBRTBCOztJQVUxQix1Q0FDb0M7O0FBcUR4QyxNQUFNLCtCQUFnQyxTQUFRLG1CQUF5Qzs7OztJQUNuRixZQUFZLElBQWdCO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7WUFYSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDRixlQUFlLEVBQUUsa0JBQWtCO29CQUNuQyxXQUFXLEVBQUUsYUFBYTtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUNwRTs7O1lBRW9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBleHBvcnRBczogXCJzdWlDaGVja2JveFwiLFxuICAgIHRlbXBsYXRlOiBgXG48aW5wdXQgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICBbYXR0ci5jaGVja2VkXT1cImNoZWNrZWRBdHRyaWJ1dGVcIlxuICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzRGlzYWJsZWRBdHRyaWJ1dGVcIlxuICAgICAgIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCJcbiAgICAgICAjY2hlY2tib3g+XG48bGFiZWw+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2hlY2tib3ggaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8Ym9vbGVhbj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jaGVja2VkXCIpXG4gICAgcHVibGljIGlzQ2hlY2tlZDpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImNoZWNrQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uQ2hlY2tDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgY2hlY2tlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hlY2tlZCA/IFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFwiY2hlY2tib3hcIilcbiAgICBwcml2YXRlIF9jaGVja2JveEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUmVhZG9ubHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDaGVja2JveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMub25DaGVja0NoYW5nZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzQ2hlY2tib3goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hlY2tib3hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jaGVja2JveFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2hlY2tDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8Ym9vbGVhbiwgU3VpQ2hlY2tib3g+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aUNoZWNrYm94KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==