/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
import enGB from "../locales/en-GB";
import * as $extend from "extend";
/**
 * @template T
 * @param {?} obj
 * @return {?}
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * @template T, U
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function deepExtend(target, source) {
    // Rollup...
    /** @type {?} */
    const extend = ((/** @type {?} */ ($extend))).default || $extend;
    return extend(true, target, source);
}
/**
 * @param {?} language
 * @return {?}
 */
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
/**
 * @record
 */
function ILocalizationValuesContainer() { }
export class SuiLocalizationService {
    constructor() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    /**
     * @return {?}
     */
    get language() {
        return this._language;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    setLanguage(language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    }
    /**
     * @param {?=} language
     * @return {?}
     */
    get(language = this.language) {
        /** @type {?} */
        const values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error(`Locale ${language} is not loaded`);
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    }
    /**
     * @template T
     * @param {?} values
     * @param {?} overrides
     * @return {?}
     */
    override(values, overrides) {
        return deepExtend(deepClone(values), overrides);
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    load(language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    patch(language, values) {
        deepExtend(this._values[lang(language)], values);
    }
    /**
     * @param {?} value
     * @param {?} variables
     * @return {?}
     */
    interpolate(value, variables) {
        return variables.reduce((s, [k, v]) => s.replace(new RegExp(`#{${k}}`, "g"), v), value);
    }
}
SuiLocalizationService.decorators = [
    { type: Injectable },
];
SuiLocalizationService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    SuiLocalizationService.prototype._language;
    /** @type {?} */
    SuiLocalizationService.prototype._fallbackValues;
    /** @type {?} */
    SuiLocalizationService.prototype._values;
    /** @type {?} */
    SuiLocalizationService.prototype.onLanguageUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJiZWhhdmlvcnMvbG9jYWxpemF0aW9uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBRWxDLG1CQUFzQixHQUFLO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7O0FBRUQsb0JBQTBCLE1BQVEsRUFBRSxNQUFROzs7VUFFbEMsTUFBTSxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTztJQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7Ozs7QUFFRCxjQUFjLFFBQWU7SUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7QUFFRCwyQ0FFQztBQUdELE1BQU07SUFZRjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWpELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFiRCxJQUFXLFFBQVE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQWFNLFdBQVcsQ0FBQyxRQUFlO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sR0FBRyxDQUFDLFdBQWtCLElBQUksQ0FBQyxRQUFROztjQUNoQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsUUFBUSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFFTSxRQUFRLENBQ1gsTUFBdUIsRUFDdkIsU0FBNEM7UUFFNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU0sSUFBSSxDQUFDLFFBQWUsRUFBRSxNQUEyQjtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLFFBQWUsRUFBRSxNQUEyQjtRQUNyRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsS0FBWSxFQUFFLFNBQTRCO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7O1lBeERKLFVBQVU7Ozs7O0lBRVAsMkNBQXlCOztJQUV6QixpREFBc0M7O0lBQ3RDLHlDQUE2Qzs7SUFNN0Msa0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2NhbGVWYWx1ZXMsIElQYXJ0aWFsTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW50ZXJmYWNlcy92YWx1ZXNcIjtcbmltcG9ydCBlbkdCIGZyb20gXCIuLi9sb2NhbGVzL2VuLUdCXCI7XG5pbXBvcnQgKiBhcyAkZXh0ZW5kIGZyb20gXCJleHRlbmRcIjtcblxuZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajpUKTpUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZDxULCBVPih0YXJnZXQ6VCwgc291cmNlOlUpOlQgJiBVIHtcbiAgICAvLyBSb2xsdXAuLi5cbiAgICBjb25zdCBleHRlbmQgPSAoJGV4dGVuZCBhcyBhbnkpLmRlZmF1bHQgfHwgJGV4dGVuZDtcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIHRhcmdldCwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbGFuZyhsYW5ndWFnZTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIi1cIiwgXCJcIik7XG59XG5cbmludGVyZmFjZSBJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyIHtcbiAgICBbbmFtZTpzdHJpbmddOklQYXJ0aWFsTG9jYWxlVmFsdWVzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tWYWx1ZXM6SUxvY2FsZVZhbHVlcztcbiAgICBwcml2YXRlIF92YWx1ZXM6SUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lcjtcblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFuZ3VhZ2VVcGRhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLl9mYWxsYmFja1ZhbHVlcyA9IGVuR0I7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IFwiZW4tR0JcIjtcbiAgICAgICAgdGhpcy5sb2FkKFwiZW4tR0JcIiwgZW5HQik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGlmIChsYW5nKHRoaXMuX2xhbmd1YWdlKSAhPT0gbGFuZyhsYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChsYW5ndWFnZTpzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTpJTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGVlcENsb25lKHRoaXMuX2ZhbGxiYWNrVmFsdWVzKTtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvY2FsZSAke2xhbmd1YWdlfSBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVlcEV4dGVuZCh2YWx1ZXMsIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlPFQgZXh0ZW5kcyBrZXlvZiBJTG9jYWxlVmFsdWVzPihcbiAgICAgICAgdmFsdWVzOklMb2NhbGVWYWx1ZXNbVF0sXG4gICAgICAgIG92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElMb2NhbGVWYWx1ZXNbVF0+XG4gICAgKTpJTG9jYWxlVmFsdWVzW1RdIHtcbiAgICAgICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVlcENsb25lKHZhbHVlcyksIG92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldID0gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgZGVlcEV4dGVuZCh0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZSh2YWx1ZTpzdHJpbmcsIHZhcmlhYmxlczpbc3RyaW5nLCBzdHJpbmddW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXMucmVkdWNlKChzLCBbaywgdl0pID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKGAjeyR7a319YCwgXCJnXCIpLCB2KSwgdmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==