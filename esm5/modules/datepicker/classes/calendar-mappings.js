/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CalendarViewType } from "../views/calendar-view";
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarMappings = /** @class */ (function () {
    function CalendarMappings() {
    }
    return CalendarMappings;
}());
/**
 * @abstract
 */
export { CalendarMappings };
if (false) {
    /** @type {?} */
    CalendarMappings.prototype.initialView;
    /** @type {?} */
    CalendarMappings.prototype.finalView;
    /** @type {?} */
    CalendarMappings.prototype.changed;
    /** @type {?} */
    CalendarMappings.prototype.zoom;
}
var DateMappings = /** @class */ (function (_super) {
    tslib_1.__extends(DateMappings, _super);
    function DateMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Date;
        _this.finalView = CalendarViewType.Date;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Date]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month]
        ]);
        return _this;
    }
    return DateMappings;
}(CalendarMappings));
export { DateMappings };
var TimeMappings = /** @class */ (function (_super) {
    tslib_1.__extends(TimeMappings, _super);
    function TimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Hour;
        _this.finalView = CalendarViewType.Minute;
        _this.changed = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
        return _this;
    }
    return TimeMappings;
}(CalendarMappings));
export { TimeMappings };
var DatetimeMappings = /** @class */ (function (_super) {
    tslib_1.__extends(DatetimeMappings, _super);
    function DatetimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Date;
        _this.finalView = CalendarViewType.Minute;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Hour],
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month],
            [CalendarViewType.Hour, CalendarViewType.Date],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
        return _this;
    }
    return DatetimeMappings;
}(CalendarMappings));
export { DatetimeMappings };
var MonthMappings = /** @class */ (function (_super) {
    tslib_1.__extends(MonthMappings, _super);
    function MonthMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Month;
        _this.finalView = CalendarViewType.Month;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Month]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Year]
        ]);
        return _this;
    }
    return MonthMappings;
}(CalendarMappings));
export { MonthMappings };
var YearMappings = /** @class */ (function (_super) {
    tslib_1.__extends(YearMappings, _super);
    function YearMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Year;
        _this.finalView = CalendarViewType.Year;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        return _this;
    }
    return YearMappings;
}(CalendarMappings));
export { YearMappings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbWFwcGluZ3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvY2xhc3Nlcy9jYWxlbmRhci1tYXBwaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTFEOzs7O0lBQUE7SUFLQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7Ozs7OztJQUpHLHVDQUFvQzs7SUFDcEMscUNBQWtDOztJQUNsQyxtQ0FBK0I7O0lBQy9CLGdDQUE0Qjs7QUFHaEM7SUFBa0Msd0NBQWdCO0lBQzlDO1FBQUEsWUFDSSxpQkFBTyxTQWdCVjtRQWRHLEtBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3ZELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUMvQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3BELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxD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QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3BELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUMvQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FDbEQsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBbUMsZ0JBQWdCLEdBaUJsRDs7QUFFRDtJQUFrQyx3Q0FBZ0I7SUFDOUM7UUFBQSxZQUNJLGlCQUFPLFNBWVY7UUFWRyxLQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUV2QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFxQztZQUN2RCxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FDakQsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBcUM7WUFDcEQsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2pELENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBa0MsZ0JBQWdCLEdBZWpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5cbmV4cG9ydCB0eXBlIENhbGVuZGFyTWFwcGluZzxUID0gQ2FsZW5kYXJWaWV3VHlwZT4gPSBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgVD47XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBwdWJsaWMgaW5pdGlhbFZpZXc6Q2FsZW5kYXJWaWV3VHlwZTtcbiAgICBwdWJsaWMgZmluYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGNoYW5nZWQ6Q2FsZW5kYXJNYXBwaW5nO1xuICAgIHB1YmxpYyB6b29tOkNhbGVuZGFyTWFwcGluZztcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVNYXBwaW5ncyBleHRlbmRzIENhbGVuZGFyTWFwcGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLkRhdGU7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuWWVhcl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLk1vbnRoXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVNYXBwaW5ncyBleHRlbmRzIENhbGVuZGFyTWFwcGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLkRhdGU7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGU7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLk1vbnRoXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1vbnRoO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLk1vbnRoXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFllYXJNYXBwaW5ncyBleHRlbmRzIENhbGVuZGFyTWFwcGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLlllYXI7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuIl19