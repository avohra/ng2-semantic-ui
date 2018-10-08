/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SuiPopupController } from "./popup-controller";
/**
 * @template T
 */
var /**
 * @template T
 */
SuiPopupComponentController = /** @class */ (function (_super) {
    tslib_1.__extends(SuiPopupComponentController, _super);
    function SuiPopupComponentController(renderer, element, componentFactory, _component, config) {
        var _this = _super.call(this, renderer, element, componentFactory, config) || this;
        _this._component = _component;
        return _this;
    }
    Object.defineProperty(SuiPopupComponentController.prototype, "componentInstance", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._contentComponentRef) {
                return this._contentComponentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopupComponentController.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._contentComponentRef) {
            this._contentComponentRef = this._componentFactory.createComponent((/** @type {?} */ (this._component)));
            this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
        }
        _super.prototype.open.call(this);
    };
    /**
     * @return {?}
     */
    SuiPopupComponentController.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        _super.prototype.cleanup.call(this);
        if (this._contentComponentRef) {
            this._contentComponentRef.destroy();
            this._contentComponentRef = undefined;
        }
    };
    return SuiPopupComponentController;
}(SuiPopupController));
/**
 * @template T
 */
export { SuiPopupComponentController };
if (false) {
    /** @type {?} */
    SuiPopupComponentController.prototype._contentComponentRef;
    /** @type {?} */
    SuiPopupComponentController.prototype._component;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29tcG9uZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NsYXNzZXMvcG9wdXAtY29tcG9uZW50LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUd4RDs7OztJQUFvRCx1REFBa0I7SUFVbEUscUNBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsZ0JBQW9DLEVBQzVCLFVBQWtCLEVBQzFCLE1BQWtCO1FBSjlCLFlBTUksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsU0FDckQ7UUFKbUIsZ0JBQVUsR0FBVixVQUFVLENBQVE7O0lBSXRDLENBQUM7SUFiRCxzQkFBVywwREFBaUI7Ozs7UUFBNUI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7Ozs7SUFXTSwwQ0FBSTs7O0lBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBVyxDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBRUQsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVTLDZDQUFPOzs7SUFBakI7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUVoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBcENELENBQW9ELGtCQUFrQixHQW9DckU7Ozs7Ozs7SUFsQ0csMkRBQThDOztJQVdsQyxpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFR5cGUsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBjb250ZW50IGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb250ZW50Q29tcG9uZW50UmVmPzpDb21wb25lbnRSZWY8VD47XG5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudEluc3RhbmNlKCk6VCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudDpUeXBlPFQ+LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudCBhcyBUeXBlPFQ+KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYsIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBzdXBlci5jbGVhbnVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==