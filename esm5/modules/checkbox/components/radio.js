/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
/**
 * @template T
 */
var SuiRadio = /** @class */ (function () {
    function SuiRadio() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiRadio.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        this.onTouched.emit();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.update = /**
     * @return {?}
     */
    function () {
        this.isChecked = this.currentValue === this.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRadio.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.currentValue = value;
        this.update();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.focusRadio = /**
     * @return {?}
     */
    function () {
        this._radioElement.nativeElement.focus();
    };
    SuiRadio.decorators = [
        { type: Component, args: [{
                    selector: "sui-radio-button",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                },] },
    ];
    SuiRadio.ctorParameters = function () { return []; };
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
    return SuiRadio;
}());
export { SuiRadio };
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
var SuiRadioValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
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
    SuiRadioValueAccessor.ctorParameters = function () { return [
        { type: SuiRadio }
    ]; };
    return SuiRadioValueAccessor;
}(CustomValueAccessor));
export { SuiRadioValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQzlELFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUN0QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ3VCLDBCQUEwQixFQUFFLG1CQUFtQixFQUU1RSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXJDO0lBeURJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFqQkQsc0JBQVcsc0NBQWdCOzs7O1FBQTNCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUNBQW1COzs7O1FBQTlCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELENBQUM7OztPQUFBOzs7OztJQWNNLDhCQUFXOzs7O0lBRGxCLFVBQ21CLENBQVk7UUFDM0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFHTSwwQkFBTzs7O0lBRGQ7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDOzs7O0lBR00sNkJBQVU7OztJQURqQjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLHlCQUFNOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU0sNkJBQVU7Ozs7SUFBakIsVUFBa0IsS0FBTztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVPLDZCQUFVOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDOztnQkFuR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSw2VEFZYjtpQkFDQTs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsYUFBYSxjQUN6QixXQUFXLFNBQUMsZ0JBQWdCO3VCQUc1QixLQUFLO3dCQUdMLEtBQUs7NEJBR0wsV0FBVyxTQUFDLGVBQWU7dUNBSzNCLE1BQU0sU0FBQyxvQkFBb0I7NEJBRzNCLE1BQU0sU0FBQyxTQUFTOzZCQUdoQixLQUFLOzZCQUdMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSztnQ0FHTCxTQUFTLFNBQUMsT0FBTzs4QkFzQmpCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBS3BDLFlBQVksU0FBQyxPQUFPOzZCQVVwQixZQUFZLFNBQUMsVUFBVTs7SUFpQjVCLGVBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQXBGWSxRQUFROzs7SUFDakIsOEJBR21DOztJQUVuQyx3QkFDbUI7O0lBRW5CLHlCQUNlOztJQUVmLDZCQUN5Qjs7SUFFekIsZ0NBQXNCOztJQUV0Qix3Q0FDNEM7O0lBRTVDLDZCQUNvQzs7SUFFcEMsOEJBQzBCOztJQUUxQiw4QkFFMEI7O0lBRTFCLGlDQUNpQzs7Ozs7QUF1RHJDO0lBUThDLGlEQUFtQztJQUM3RSwrQkFBWSxJQUFnQjtlQUN4QixrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDOztnQkFYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNGLHNCQUFzQixFQUFFLGtCQUFrQjt3QkFDMUMsV0FBVyxFQUFFLGFBQWE7cUJBQzdCO29CQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ2pFOzs7Z0JBRW9CLFFBQVE7O0lBRzdCLDRCQUFDO0NBQUEsQUFaRCxDQVE4QyxtQkFBbUIsR0FJaEU7U0FKWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=