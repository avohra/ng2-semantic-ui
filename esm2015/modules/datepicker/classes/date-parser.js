/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DateFnsParser } from "../helpers/date-fns";
export class DateParser {
    /**
     * @param {?} format
     * @param {?} locale
     */
    constructor(format, locale) {
        this._format = format;
        this._parser = new DateFnsParser(locale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        return this._parser.format(date, this._format);
    }
    /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    parse(dateString, baseDate = new Date()) {
        return this._parser.parse(dateString, this._format, baseDate);
    }
}
if (false) {
    /** @type {?} */
    DateParser.prototype._format;
    /** @type {?} */
    DateParser.prototype._parser;
}
export class InternalDateParser extends DateParser {
    /**
     * @param {?} mode
     * @param {?} locale
     */
    constructor(mode, locale) {
        /** @type {?} */
        const internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        super(internalFormats[mode], locale);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvY2xhc3Nlcy9kYXRlLXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3BELE1BQU07Ozs7O0lBSUYsWUFBWSxNQUFhLEVBQUUsTUFBOEI7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFTO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVNLEtBQUssQ0FBQyxVQUFpQixFQUFFLFdBQWdCLElBQUksSUFBSSxFQUFFO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7OztJQWZHLDZCQUF1Qjs7SUFDdkIsNkJBQThCOztBQWdCbEMsTUFBTSx5QkFBMEIsU0FBUSxVQUFVOzs7OztJQUM5QyxZQUFZLElBQW1CLEVBQUUsTUFBOEI7O2NBQ3JELGVBQWUsR0FBa0M7WUFDbkQsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLElBQUksRUFBRSxZQUFZO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2Y7UUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVwaWNrZXJNb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgRGF0ZUZuc1BhcnNlciB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGUtZm5zXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgSURhdGVwaWNrZXJGb3JtYXRzTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVQYXJzZXIge1xuICAgIHByaXZhdGUgX2Zvcm1hdDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFyc2VyOkRhdGVGbnNQYXJzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtYXQ6c3RyaW5nLCBsb2NhbGU6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSBuZXcgRGF0ZUZuc1BhcnNlcihsb2NhbGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3JtYXQoZGF0ZTpEYXRlKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VyLmZvcm1hdChkYXRlLCB0aGlzLl9mb3JtYXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZShkYXRlU3RyaW5nOnN0cmluZywgYmFzZURhdGU6RGF0ZSA9IG5ldyBEYXRlKCkpOkRhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VyLnBhcnNlKGRhdGVTdHJpbmcsIHRoaXMuX2Zvcm1hdCwgYmFzZURhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVybmFsRGF0ZVBhcnNlciBleHRlbmRzIERhdGVQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKG1vZGU6RGF0ZXBpY2tlck1vZGUsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICBjb25zdCBpbnRlcm5hbEZvcm1hdHM6SURhdGVwaWNrZXJGb3JtYXRzTG9jYWxlVmFsdWVzID0ge1xuICAgICAgICAgICAgdGltZTogXCJISDptbVwiLFxuICAgICAgICAgICAgZGF0ZXRpbWU6IFwiWVlZWS1NTS1ERFRISDptbVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJZWVlZLU1NLUREXCIsXG4gICAgICAgICAgICBtb250aDogXCJZWVlZLU1NXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHN1cGVyKGludGVybmFsRm9ybWF0c1ttb2RlXSwgbG9jYWxlKTtcbiAgICB9XG59XG4iXX0=