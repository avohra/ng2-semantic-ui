/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from "@angular/forms";
import { forwardRef } from "@angular/core";
/**
 * @record
 */
export function ICustomValidatorHost() { }
if (false) {
    /**
     * @param {?} c
     * @return {?}
     */
    ICustomValidatorHost.prototype.validate = function (c) { };
}
/**
 * @template T
 */
var /**
 * @template T
 */
CustomValidator = /** @class */ (function () {
    function CustomValidator(_host) {
        this._host = _host;
        this.onValidatorChange = function () { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CustomValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._host.validate(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValidatorChange = fn;
    };
    return CustomValidator;
}());
/**
 * @template T
 */
export { CustomValidator };
if (false) {
    /** @type {?} */
    CustomValidator.prototype.onValidatorChange;
    /** @type {?} */
    CustomValidator.prototype._host;
}
/**
 * @record
 */
export function IValidationProvider() { }
if (false) {
    /** @type {?} */
    IValidationProvider.prototype.provide;
    /** @type {?} */
    IValidationProvider.prototype.useExisting;
    /** @type {?} */
    IValidationProvider.prototype.multi;
}
/**
 * @param {?} type
 * @return {?}
 */
export function customValidatorFactory(type) {
    return {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakUsMENBRUM7Ozs7OztJQURHLDJEQUFvRDs7Ozs7QUFHeEQ7Ozs7SUFDSSx5QkFBb0IsS0FBTztRQUFQLFVBQUssR0FBTCxLQUFLLENBQUU7UUFFcEIsc0JBQWlCLEdBQUcsY0FBTyxDQUFDLENBQUM7SUFGTixDQUFDOzs7OztJQUl4QixrQ0FBUTs7OztJQUFmLFVBQWdCLENBQWlCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLG1EQUF5Qjs7OztJQUFoQyxVQUFpQyxFQUFhO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7Ozs7SUFURyw0Q0FBb0M7O0lBRnhCLGdDQUFlOzs7OztBQWEvQix5Q0FJQzs7O0lBSEcsc0NBQWlEOztJQUNqRCwwQ0FBc0I7O0lBQ3RCLG9DQUFjOzs7Ozs7QUFHbEIsTUFBTSxpQ0FBaUMsSUFBYTtJQUNoRCxNQUFNLENBQUM7UUFDSCxPQUFPLEVBQUUsYUFBYTtRQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYWxpZGF0b3JIb3N0IHtcbiAgICB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3I8VCBleHRlbmRzIElDdXN0b21WYWxpZGF0b3JIb3N0PiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QudmFsaWRhdGUoYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjwoRnVuY3Rpb24gfCBWYWxpZGF0b3IpW10+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIl19