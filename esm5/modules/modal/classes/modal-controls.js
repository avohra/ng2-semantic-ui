/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
var 
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
ModalControls = /** @class */ (function () {
    function ModalControls(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    // Use method here rather than arrow variables to make intellisense show they're methods.
    // Use method here rather than arrow variables to make intellisense show they're methods.
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.approve = 
    // Use method here rather than arrow variables to make intellisense show they're methods.
    /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.deny = /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    return ModalControls;
}());
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
export { ModalControls };
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
var 
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal(controls, context) {
        var _this = 
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        _super.call(this, controls.approve, controls.deny) || this;
        _this.context = context;
        return _this;
    }
    return Modal;
}(ModalControls));
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
export { Modal };
if (false) {
    /** @type {?} */
    Modal.prototype.context;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udHJvbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7Ozs7OztJQUNJLHVCQUFZLE9BQXNCLEVBQUUsSUFBbUI7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHlGQUF5Rjs7Ozs7O0lBQ2xGLCtCQUFPOzs7Ozs7SUFBZCxVQUFlLE1BQVEsSUFBUSxDQUFDOzs7OztJQUN6Qiw0QkFBSTs7OztJQUFYLFVBQVksTUFBUSxJQUFRLENBQUM7SUFDakMsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7Ozs7Ozs7OztBQUdEOzs7Ozs7SUFBNEQsaUNBQW1CO0lBRzNFLGVBQVksUUFBNEIsRUFBRSxPQUFTO1FBQW5EO1FBQ0ksK0VBQStFO1FBQy9FLHlFQUF5RTtRQUN6RSxrQkFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FHekM7UUFERyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDM0IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBNEQsYUFBYSxHQVV4RTs7Ozs7Ozs7SUFURyx3QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaG9ydGhhbmQgdG8gYXZvaWQgd3JpdGluZyBhcnJvdyB0eXBlcyBldmVyeXdoZXJlLlxuZXhwb3J0IHR5cGUgTW9kYWxSZXN1bHQ8VD4gPSAocmVzdWx0OlQpID0+IHZvaWQ7XG5cbi8vIFVzZWQgdG8gcGFzcyBhYmlsaXR5IHRvIGNvbnRyb2wgYSBtb2RhbCB0byBhIGNvbXBvbmVudC5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRyb2xzPFQsIFU+IHtcbiAgICBjb25zdHJ1Y3RvcihhcHByb3ZlOk1vZGFsUmVzdWx0PFQ+LCBkZW55Ok1vZGFsUmVzdWx0PFU+KSB7XG4gICAgICAgIHRoaXMuYXBwcm92ZSA9IGFwcHJvdmU7XG4gICAgICAgIHRoaXMuZGVueSA9IGRlbnk7XG4gICAgfVxuXG4gICAgLy8gVXNlIG1ldGhvZCBoZXJlIHJhdGhlciB0aGFuIGFycm93IHZhcmlhYmxlcyB0byBtYWtlIGludGVsbGlzZW5zZSBzaG93IHRoZXkncmUgbWV0aG9kcy5cbiAgICBwdWJsaWMgYXBwcm92ZShyZXN1bHQ6VCk6dm9pZCB7fVxuICAgIHB1YmxpYyBkZW55KHJlc3VsdDpVKTp2b2lkIHt9XG59XG5cbi8vIEluamVjdGVkIGludG8gY3VzdG9tIG1vZGFsIGNvbXBvbmVudHMsIHRvIGFsbG93IGNvbnRyb2wgb2YgdGhlIG1vZGFsLCBhbmQgYWNjZXNzIHRvIGEgY29udGV4dCBvYmplY3QuXG5leHBvcnQgY2xhc3MgTW9kYWw8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbnRyb2xzPFUsIFY+IHtcbiAgICBwdWJsaWMgY29udGV4dDpUO1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbHM6TW9kYWxDb250cm9sczxVLCBWPiwgY29udGV4dDpUKSB7XG4gICAgICAgIC8vIEluc3RhbmNlcyBvZiBgTW9kYWxDb250cm9sc2AgYXJlIG9ubHkgY3JlYXRlZCBpbiB0aGUgYFN1aU1vZGFsYCBjb25zdHJ1Y3RvcixcbiAgICAgICAgLy8gc28gd2UgdGFrZSBhbiBpbml0aWFsaXNlZCBpbnN0YW5jZSByYXRoZXIgdGhhbiByZW1ha2luZyBvbmUgZWFjaCB0aW1lLlxuICAgICAgICBzdXBlcihjb250cm9scy5hcHByb3ZlLCBjb250cm9scy5kZW55KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cbiJdfQ==