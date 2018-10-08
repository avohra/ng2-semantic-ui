/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
var CalendarRangeYearService = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarRangeYearService, _super);
    function CalendarRangeYearService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeYearService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    };
    return CalendarRangeYearService;
}(CalendarRangeService));
export { CalendarRangeYearService };
var SuiCalendarYearView = /** @class */ (function (_super) {
    tslib_1.__extends(SuiCalendarYearView, _super);
    function SuiCalendarYearView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
        get: /**
         * @return {?}
         */
        function () {
            return DateUtil
                .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
                .getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} year
     * @return {?}
     */
    SuiCalendarYearView.prototype.pad = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    };
    SuiCalendarYearView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-year-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarYearView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarYearView;
}(CalendarView));
export { SuiCalendarYearView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQUE4QyxvREFBb0I7SUFBbEU7O0lBS0EsQ0FBQzs7Ozs7O0lBSlUsZ0RBQWE7Ozs7O0lBQXBCLFVBQXFCLElBQWlCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqRyxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsb0JBQW9CLEdBS2pFOztBQUVEO0lBeUJ5QywrQ0FBWTtJQU9qRCw2QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQVJELHNCQUFXLDRDQUFXOzs7O1FBQXRCO1lBQ0ksTUFBTSxDQUFDLFFBQVE7aUJBQ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN2RSxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7SUFNTSxpQ0FBRzs7OztJQUFWLFVBQVcsSUFBVztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkF0Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSx3b0JBcUJiO2lCQUNBOzs7Z0JBckNtQixTQUFTOztJQW9EN0IsMEJBQUM7Q0FBQSxBQXZDRCxDQXlCeUMsWUFBWSxHQWNwRDtTQWRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gVXRpbC5TdHJpbmcucGFkTGVmdChpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKSA+PSB0aGlzLmNhbGNTdGFydChiYXNlRGF0ZSkuZ2V0RnVsbFllYXIoKSArIDEwO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLXllYXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIHllYXJcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgcGFkKGRlY2FkZVN0YXJ0KSB9fSAtIHt7IHBhZChkZWNhZGVTdGFydCArIDEwKSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJZZWFyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkZWNhZGVTdGFydCgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbFxuICAgICAgICAgICAgLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5EZWNhZGUsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpXG4gICAgICAgICAgICAuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuWWVhciwgbmV3IENhbGVuZGFyUmFuZ2VZZWFyU2VydmljZShEYXRlUHJlY2lzaW9uLkRlY2FkZSwgNCwgMykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWQoeWVhcjpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLlN0cmluZy5wYWRMZWZ0KHllYXIudG9TdHJpbmcoKSwgNCwgXCIwXCIpO1xuICAgIH1cbn1cbiJdfQ==