/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarMode } from "../services/calendar.service";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
var CalendarRangeMinuteService = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarRangeMinuteService, _super);
    function CalendarRangeMinuteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.calcStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.calcDates = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5); });
    };
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeMinuteService;
}(CalendarRangeService));
export { CalendarRangeMinuteService };
var SuiCalendarMinuteView = /** @class */ (function (_super) {
    tslib_1.__extends(SuiCalendarMinuteView, _super);
    function SuiCalendarMinuteView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMinuteView.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.service.config.mode !== CalendarMode.TimeOnly) {
                // Set minutes and seconds to 0
                /** @type {?} */
                var dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
            }
            else {
                // Set minutes and seconds to 0
                /** @type {?} */
                var timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
                return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarMinuteView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-minute-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column minute\">\n<thead>\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarMinuteView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarMinuteView;
}(CalendarView));
export { SuiCalendarMinuteView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlLXZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvbWludXRlLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRDtJQUFnRCxzREFBb0I7SUFBcEU7O0lBZUEsQ0FBQzs7Ozs7SUFkVSw4Q0FBUzs7OztJQUFoQixVQUFpQixLQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVNLDhDQUFTOzs7O0lBQWhCLFVBQWlCLEtBQVU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7O0lBRU0sa0RBQWE7Ozs7O0lBQXBCLFVBQXFCLElBQWlCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pILElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUMsQUFmRCxDQUFnRCxvQkFBb0IsR0FlbkU7O0FBRUQ7SUF5QjJDLGlEQUFZO0lBYW5ELCtCQUFZLFFBQWtCO2VBQzFCLGtCQUFNLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSwwQkFBMEIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBZEQsc0JBQVcsdUNBQUk7Ozs7UUFBZjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O29CQUUvQyxjQUFjLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztnQkFDOUYsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDOzs7b0JBRUUsVUFBVSxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7Z0JBQ3RGLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFGLENBQUM7UUFDTCxDQUFDOzs7T0FBQTs7Z0JBcENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsZ21CQXFCYjtpQkFDQTs7O2dCQWpEbUIsU0FBUzs7SUFrRTdCLDRCQUFDO0NBQUEsQUF6Q0QsQ0F5QjJDLFlBQVksR0FnQnREO1NBaEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2RlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZU1pbnV0ZVNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNhbGNTdGFydChzdGFydDpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5Ib3VyLCBEYXRlVXRpbC5jbG9uZShzdGFydCksIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjRGF0ZXMoc3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQoRGF0ZVByZWNpc2lvbi5NaW51dGUsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSwgaSAqIDUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4gbWludXRlXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyTWludXRlVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5jb25maWcubW9kZSAhPT0gQ2FsZW5kYXJNb2RlLlRpbWVPbmx5KSB7XG4gICAgICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMuZGF0ZXRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIoZGF0ZVRpbWVGb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgICAgIGNvbnN0IHRpbWVGb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGltZUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgbmV3IENhbGVuZGFyUmFuZ2VNaW51dGVTZXJ2aWNlKERhdGVQcmVjaXNpb24uSG91ciwgNCwgMykpO1xuICAgIH1cbn1cbiJdfQ==