/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CalendarMode } from "../services/calendar.service";
import { DatetimeMappings, DateMappings, TimeMappings, MonthMappings, YearMappings } from "./calendar-mappings";
import { DatePrecision, DateUtil } from "../../../misc/util/internal";
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarConfig = /** @class */ (function () {
    function CalendarConfig(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    CalendarConfig.prototype.updateBounds = /**
     * @param {?} providedDate
     * @return {?}
     */
    function (providedDate) {
        this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    };
    return CalendarConfig;
}());
/**
 * @abstract
 */
export { CalendarConfig };
if (false) {
    /** @type {?} */
    CalendarConfig.prototype.mode;
    /** @type {?} */
    CalendarConfig.prototype.precision;
    /** @type {?} */
    CalendarConfig.prototype.mappings;
    /** @type {?} */
    CalendarConfig.prototype.fallback;
    /** @type {?} */
    CalendarConfig.prototype.dateMinBound;
    /** @type {?} */
    CalendarConfig.prototype.dateMaxBound;
}
var DateConfigBase = /** @class */ (function (_super) {
    tslib_1.__extends(DateConfigBase, _super);
    function DateConfigBase(precision, mappings, fallback) {
        return _super.call(this, CalendarMode.DateOnly, precision, mappings, fallback) || this;
    }
    return DateConfigBase;
}(CalendarConfig));
export { DateConfigBase };
var YearConfig = /** @class */ (function (_super) {
    tslib_1.__extends(YearConfig, _super);
    function YearConfig() {
        return _super.call(this, DatePrecision.Year, new YearMappings(), "number") || this;
    }
    return YearConfig;
}(DateConfigBase));
export { YearConfig };
var MonthConfig = /** @class */ (function (_super) {
    tslib_1.__extends(MonthConfig, _super);
    function MonthConfig() {
        return _super.call(this, DatePrecision.Month, new MonthMappings(), "month") || this;
    }
    return MonthConfig;
}(DateConfigBase));
export { MonthConfig };
var DateConfig = /** @class */ (function (_super) {
    tslib_1.__extends(DateConfig, _super);
    function DateConfig() {
        return _super.call(this, DatePrecision.Date, new DateMappings(), "date") || this;
    }
    return DateConfig;
}(DateConfigBase));
export { DateConfig };
var DatetimeConfig = /** @class */ (function (_super) {
    tslib_1.__extends(DatetimeConfig, _super);
    function DatetimeConfig() {
        return _super.call(this, CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local") || this;
    }
    return DatetimeConfig;
}(CalendarConfig));
export { DatetimeConfig };
var TimeConfig = /** @class */ (function (_super) {
    tslib_1.__extends(TimeConfig, _super);
    function TimeConfig() {
        return _super.call(this, CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time") || this;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    TimeConfig.prototype.updateBounds = /**
     * @param {?} providedDate
     * @return {?}
     */
    function (providedDate) {
        this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
        this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
    };
    return TimeConfig;
}(CalendarConfig));
export { TimeConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEksT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUV0RTs7OztJQVVJLHdCQUFZLElBQWlCLEVBQUUsU0FBdUIsRUFBRSxRQUF5QixFQUFFLFFBQWU7UUFDOUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSxxQ0FBWTs7OztJQUFuQixVQUFvQixZQUFpQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7Ozs7SUFwQkcsOEJBQXlCOztJQUN6QixtQ0FBK0I7O0lBQy9CLGtDQUFpQzs7SUFFakMsa0NBQXVCOztJQUV2QixzQ0FBMEI7O0lBQzFCLHNDQUEwQjs7QUFlOUI7SUFBb0MsMENBQWM7SUFDOUMsd0JBQVksU0FBdUIsRUFBRSxRQUF5QixFQUFFLFFBQWU7ZUFDM0Usa0JBQU0sWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUMvRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBb0MsY0FBYyxHQUlqRDs7QUFFRDtJQUFnQyxzQ0FBYztJQUMxQztlQUNJLGtCQUNJLGFBQWEsQ0FBQyxJQUFJLEVBQ2xCLElBQUksWUFBWSxFQUFFLEVBQ2xCLFFBQVEsQ0FBQztJQUNqQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBZ0MsY0FBYyxHQU83Qzs7QUFFRDtJQUFpQyx1Q0FBYztJQUMzQztlQUNJLGtCQUNJLGFBQWEsQ0FBQyxLQUFLLEVBQ25CLElBQUksYUFBYSxFQUFFLEVBQ25CLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBaUMsY0FBYyxHQU85Qzs7QUFFRDtJQUFnQyxzQ0FBYztJQUMxQztlQUNJLGtCQUNJLGFBQWEsQ0FBQyxJQUFJLEVBQ2xCLElBQUksWUFBWSxFQUFFLEVBQ2xCLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFQRCxDQUFnQyxjQUFjLEdBTzdDOztBQUVEO0lBQW9DLDBDQUFjO0lBQzlDO2VBQ0ksa0JBQ0ksWUFBWSxDQUFDLElBQUksRUFDakIsYUFBYSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxnQkFBZ0IsRUFBRSxFQUN0QixnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBb0MsY0FBYyxHQVFqRDs7QUFFRDtJQUFnQyxzQ0FBYztJQUMxQztlQUNJLGtCQUNJLFlBQVksQ0FBQyxRQUFRLEVBQ3JCLGFBQWEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksWUFBWSxFQUFFLEVBQ2xCLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU0saUNBQVk7Ozs7SUFBbkIsVUFBb0IsWUFBaUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWJELENBQWdDLGNBQWMsR0FhN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhck1vZGUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJNYXBwaW5ncywgRGF0ZXRpbWVNYXBwaW5ncywgRGF0ZU1hcHBpbmdzLCBUaW1lTWFwcGluZ3MsIE1vbnRoTWFwcGluZ3MsIFllYXJNYXBwaW5ncyB9IGZyb20gXCIuL2NhbGVuZGFyLW1hcHBpbmdzXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBwdWJsaWMgbW9kZTpDYWxlbmRhck1vZGU7XG4gICAgcHVibGljIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uO1xuICAgIHB1YmxpYyBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzO1xuXG4gICAgcHVibGljIGZhbGxiYWNrOnN0cmluZztcblxuICAgIHB1YmxpYyBkYXRlTWluQm91bmQ/OkRhdGU7XG4gICAgcHVibGljIGRhdGVNYXhCb3VuZD86RGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGU6Q2FsZW5kYXJNb2RlLCBwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgbWFwcGluZ3M6Q2FsZW5kYXJNYXBwaW5ncywgZmFsbGJhY2s6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgICB0aGlzLm1hcHBpbmdzID0gbWFwcGluZ3M7XG4gICAgICAgIHRoaXMuZmFsbGJhY2sgPSBmYWxsYmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQgPSBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uWWVhciwgbmV3IERhdGUoKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZGF0ZU1pbkJvdW5kLnNldEZ1bGxZZWFyKDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGVDb25maWdCYXNlIGV4dGVuZHMgQ2FsZW5kYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoQ2FsZW5kYXJNb2RlLkRhdGVPbmx5LCBwcmVjaXNpb24sIG1hcHBpbmdzLCBmYWxsYmFjayk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgWWVhckNvbmZpZyBleHRlbmRzIERhdGVDb25maWdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLlllYXIsXG4gICAgICAgICAgICBuZXcgWWVhck1hcHBpbmdzKCksXG4gICAgICAgICAgICBcIm51bWJlclwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aENvbmZpZyBleHRlbmRzIERhdGVDb25maWdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1vbnRoLFxuICAgICAgICAgICAgbmV3IE1vbnRoTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibW9udGhcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZyBleHRlbmRzIERhdGVDb25maWdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLkRhdGUsXG4gICAgICAgICAgICBuZXcgRGF0ZU1hcHBpbmdzKCksXG4gICAgICAgICAgICBcImRhdGVcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVDb25maWcgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgQ2FsZW5kYXJNb2RlLkJvdGgsXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRldGltZU1hcHBpbmdzKCksXG4gICAgICAgICAgICBcImRhdGV0aW1lLWxvY2FsXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVDb25maWcgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgQ2FsZW5kYXJNb2RlLlRpbWVPbmx5LFxuICAgICAgICAgICAgRGF0ZVByZWNpc2lvbi5NaW51dGUsXG4gICAgICAgICAgICBuZXcgVGltZU1hcHBpbmdzKCksXG4gICAgICAgICAgICBcInRpbWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJvdW5kcyhwcm92aWRlZERhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZU1heEJvdW5kID0gRGF0ZVV0aWwuZW5kT2YoRGF0ZVByZWNpc2lvbi5EYXRlLCBEYXRlVXRpbC5jbG9uZShwcm92aWRlZERhdGUpKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQgPSBEYXRlVXRpbC5wcmV2aW91cyhEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZU1heEJvdW5kKSk7XG4gICAgfVxufVxuIl19