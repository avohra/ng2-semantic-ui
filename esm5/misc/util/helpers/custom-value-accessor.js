/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { forwardRef } from "@angular/core";
/**
 * @record
 * @template T
 */
export function ICustomValueAccessorHost() { }
if (false) {
    /**
     * @param {?} value
     * @return {?}
     */
    ICustomValueAccessorHost.prototype.writeValue = function (value) { };
}
/**
 * @template U, T
 */
var /**
 * @template U, T
 */
CustomValueAccessor = /** @class */ (function () {
    function CustomValueAccessor(_host) {
        this._host = _host;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CustomValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._host.writeValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    return CustomValueAccessor;
}());
/**
 * @template U, T
 */
export { CustomValueAccessor };
if (false) {
    /** @type {?} */
    CustomValueAccessor.prototype.onChange;
    /** @type {?} */
    CustomValueAccessor.prototype.onTouched;
    /** @type {?} */
    CustomValueAccessor.prototype._host;
}
/**
 * @record
 */
export function IValueAccessorProvider() { }
if (false) {
    /** @type {?} */
    IValueAccessorProvider.prototype.provide;
    /** @type {?} */
    IValueAccessorProvider.prototype.useExisting;
    /** @type {?} */
    IValueAccessorProvider.prototype.multi;
}
/**
 * @param {?} type
 * @return {?}
 */
export function customValueAccessorFactory(type) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRWpFLDhDQUVDOzs7Ozs7SUFERyxxRUFBeUI7Ozs7O0FBRzdCOzs7O0lBQ0ksNkJBQW9CLEtBQU87UUFBUCxVQUFLLEdBQUwsS0FBSyxDQUFFO1FBRXBCLGFBQVEsR0FBRyxjQUFPLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQUcsY0FBTyxDQUFDLENBQUM7SUFIRSxDQUFDOzs7OztJQUt4Qix3Q0FBVTs7OztJQUFqQixVQUFrQixLQUFPO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU0sOENBQWdCOzs7O0lBQXZCLFVBQXdCLEVBQWE7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSwrQ0FBaUI7Ozs7SUFBeEIsVUFBeUIsRUFBYTtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7Ozs7O0lBZEcsdUNBQTJCOztJQUMzQix3Q0FBNEI7O0lBSGhCLG9DQUFlOzs7OztBQWtCL0IsNENBSUM7OztJQUhHLHlDQUE2Qzs7SUFDN0MsNkNBQXNCOztJQUN0Qix1Q0FBYzs7Ozs7O0FBR2xCLE1BQU0scUNBQXFDLElBQWE7SUFDcEQsTUFBTSxDQUFDO1FBQ0gsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VD4ge1xuICAgIHdyaXRlVmFsdWUodmFsdWU6VCk6dm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgVCBleHRlbmRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uQ2hhbmdlID0gKCkgPT4ge307XG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2hvc3Qud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHByb3ZpZGU6SW5qZWN0aW9uVG9rZW48Q29udHJvbFZhbHVlQWNjZXNzb3I+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkodHlwZTpGdW5jdGlvbik6SVZhbHVlQWNjZXNzb3JQcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iXX0=