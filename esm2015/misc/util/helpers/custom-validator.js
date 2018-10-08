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
export class CustomValidator {
    /**
     * @param {?} _host
     */
    constructor(_host) {
        this._host = _host;
        this.onValidatorChange = () => { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this._host.validate(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onValidatorChange = fn;
    }
}
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
        useExisting: forwardRef(() => type),
        multi: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakUsMENBRUM7Ozs7OztJQURHLDJEQUFvRDs7Ozs7QUFHeEQsTUFBTTs7OztJQUNGLFlBQW9CLEtBQU87UUFBUCxVQUFLLEdBQUwsS0FBSyxDQUFFO1FBRXBCLHNCQUFpQixHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUZOLENBQUM7Ozs7O0lBSXhCLFFBQVEsQ0FBQyxDQUFpQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSx5QkFBeUIsQ0FBQyxFQUFhO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUNKOzs7SUFURyw0Q0FBb0M7O0lBRnhCLGdDQUFlOzs7OztBQWEvQix5Q0FJQzs7O0lBSEcsc0NBQWlEOztJQUNqRCwwQ0FBc0I7O0lBQ3RCLG9DQUFjOzs7Ozs7QUFHbEIsTUFBTSxpQ0FBaUMsSUFBYTtJQUNoRCxNQUFNLENBQUM7UUFDSCxPQUFPLEVBQUUsYUFBYTtRQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsaWRhdG9ySG9zdCB7XG4gICAgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmFsaWRhdG9yPFQgZXh0ZW5kcyBJQ3VzdG9tVmFsaWRhdG9ySG9zdD4gaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZSA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0LnZhbGlkYXRlKGMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uUHJvdmlkZXIge1xuICAgIHByb3ZpZGU6SW5qZWN0aW9uVG9rZW48KEZ1bmN0aW9uIHwgVmFsaWRhdG9yKVtdPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbGlkYXRvckZhY3RvcnkodHlwZTpGdW5jdGlvbik6SVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gdHlwZSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbn1cbiJdfQ==