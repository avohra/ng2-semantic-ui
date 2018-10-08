/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CalendarMode } from "../services/calendar.service";
import { DatetimeMappings, DateMappings, TimeMappings, MonthMappings, YearMappings } from "./calendar-mappings";
import { DatePrecision, DateUtil } from "../../../misc/util/internal";
/**
 * @abstract
 */
export class CalendarConfig {
    /**
     * @param {?} mode
     * @param {?} precision
     * @param {?} mappings
     * @param {?} fallback
     */
    constructor(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    updateBounds(providedDate) {
        this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    }
}
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
export class DateConfigBase extends CalendarConfig {
    /**
     * @param {?} precision
     * @param {?} mappings
     * @param {?} fallback
     */
    constructor(precision, mappings, fallback) {
        super(CalendarMode.DateOnly, precision, mappings, fallback);
    }
}
export class YearConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Year, new YearMappings(), "number");
    }
}
export class MonthConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Month, new MonthMappings(), "month");
    }
}
export class DateConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Date, new DateMappings(), "date");
    }
}
export class DatetimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local");
    }
}
export class TimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time");
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    updateBounds(providedDate) {
        this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
        this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsSSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXRFLE1BQU07Ozs7Ozs7SUFVRixZQUFZLElBQWlCLEVBQUUsU0FBdUIsRUFBRSxRQUF5QixFQUFFLFFBQWU7UUFDOUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsWUFBaUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7OztJQXBCRyw4QkFBeUI7O0lBQ3pCLG1DQUErQjs7SUFDL0Isa0NBQWlDOztJQUVqQyxrQ0FBdUI7O0lBRXZCLHNDQUEwQjs7SUFDMUIsc0NBQTBCOztBQWU5QixNQUFNLHFCQUFzQixTQUFRLGNBQWM7Ozs7OztJQUM5QyxZQUFZLFNBQXVCLEVBQUUsUUFBeUIsRUFBRSxRQUFlO1FBQzNFLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNKO0FBRUQsTUFBTSxpQkFBa0IsU0FBUSxjQUFjO0lBQzFDO1FBQ0ksS0FBSyxDQUNELGFBQWEsQ0FBQyxJQUFJLEVBQ2xCLElBQUksWUFBWSxFQUFFLEVBQ2xCLFFBQVEsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUVELE1BQU0sa0JBQW1CLFNBQVEsY0FBYztJQUMzQztRQUNJLEtBQUssQ0FDRCxhQUFhLENBQUMsS0FBSyxFQUNuQixJQUFJLGFBQWEsRUFBRSxFQUNuQixPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUFFRCxNQUFNLGlCQUFrQixTQUFRLGNBQWM7SUFDMUM7UUFDSSxLQUFLLENBQ0QsYUFBYSxDQUFDLElBQUksRUFDbEIsSUFBSSxZQUFZLEVBQUUsRUFDbEIsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBRUQsTUFBTSxxQkFBc0IsU0FBUSxjQUFjO0lBQzlDO1FBQ0ksS0FBSyxDQUNELFlBQVksQ0FBQyxJQUFJLEVBQ2pCLGFBQWEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksZ0JBQWdCLEVBQUUsRUFDdEIsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFFRCxNQUFNLGlCQUFrQixTQUFRLGNBQWM7SUFDMUM7UUFDSSxLQUFLLENBQ0QsWUFBWSxDQUFDLFFBQVEsRUFDckIsYUFBYSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxZQUFZLEVBQUUsRUFDbEIsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsWUFBaUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXJNb2RlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbGVuZGFyTWFwcGluZ3MsIERhdGV0aW1lTWFwcGluZ3MsIERhdGVNYXBwaW5ncywgVGltZU1hcHBpbmdzLCBNb250aE1hcHBpbmdzLCBZZWFyTWFwcGluZ3MgfSBmcm9tIFwiLi9jYWxlbmRhci1tYXBwaW5nc1wiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiwgRGF0ZVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgcHVibGljIG1vZGU6Q2FsZW5kYXJNb2RlO1xuICAgIHB1YmxpYyBwcmVjaXNpb246RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFwcGluZ3M6Q2FsZW5kYXJNYXBwaW5ncztcblxuICAgIHB1YmxpYyBmYWxsYmFjazpzdHJpbmc7XG5cbiAgICBwdWJsaWMgZGF0ZU1pbkJvdW5kPzpEYXRlO1xuICAgIHB1YmxpYyBkYXRlTWF4Qm91bmQ/OkRhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RlOkNhbGVuZGFyTW9kZSwgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICAgICAgdGhpcy5tYXBwaW5ncyA9IG1hcHBpbmdzO1xuICAgICAgICB0aGlzLmZhbGxiYWNrID0gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJvdW5kcyhwcm92aWRlZERhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZU1pbkJvdW5kID0gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLlllYXIsIG5ldyBEYXRlKCksIHRydWUpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZC5zZXRGdWxsWWVhcigwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnQmFzZSBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgbWFwcGluZ3M6Q2FsZW5kYXJNYXBwaW5ncywgZmFsbGJhY2s6c3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKENhbGVuZGFyTW9kZS5EYXRlT25seSwgcHJlY2lzaW9uLCBtYXBwaW5ncywgZmFsbGJhY2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFllYXJDb25maWcgZXh0ZW5kcyBEYXRlQ29uZmlnQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgRGF0ZVByZWNpc2lvbi5ZZWFyLFxuICAgICAgICAgICAgbmV3IFllYXJNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJudW1iZXJcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW9udGhDb25maWcgZXh0ZW5kcyBEYXRlQ29uZmlnQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgRGF0ZVByZWNpc2lvbi5Nb250aCxcbiAgICAgICAgICAgIG5ldyBNb250aE1hcHBpbmdzKCksXG4gICAgICAgICAgICBcIm1vbnRoXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGVDb25maWcgZXh0ZW5kcyBEYXRlQ29uZmlnQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgRGF0ZVByZWNpc2lvbi5EYXRlLFxuICAgICAgICAgICAgbmV3IERhdGVNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJkYXRlXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lQ29uZmlnIGV4dGVuZHMgQ2FsZW5kYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIENhbGVuZGFyTW9kZS5Cb3RoLFxuICAgICAgICAgICAgRGF0ZVByZWNpc2lvbi5NaW51dGUsXG4gICAgICAgICAgICBuZXcgRGF0ZXRpbWVNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJkYXRldGltZS1sb2NhbFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lQ29uZmlnIGV4dGVuZHMgQ2FsZW5kYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIENhbGVuZGFyTW9kZS5UaW1lT25seSxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IFRpbWVNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJ0aW1lXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNYXhCb3VuZCA9IERhdGVVdGlsLmVuZE9mKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUocHJvdmlkZWREYXRlKSk7XG4gICAgICAgIHRoaXMuZGF0ZU1pbkJvdW5kID0gRGF0ZVV0aWwucHJldmlvdXMoRGF0ZVByZWNpc2lvbi5EYXRlLCBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVNYXhCb3VuZCkpO1xuICAgIH1cbn1cbiJdfQ==