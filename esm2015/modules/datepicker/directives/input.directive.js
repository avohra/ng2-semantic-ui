/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Host, Input, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { PopupTrigger } from "../../popup/internal";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor } from "./datepicker.directive";
import { InternalDateParser, DateParser } from "../classes/date-parser";
import * as bowser from "bowser";
import "../helpers/is-webview";
import * as isUAWebView from "is-ua-webview";
/** @type {?} */
const isWebView = isUAWebView["default"] || isUAWebView;
export class SuiDatepickerInputDirective {
    /**
     * @param {?} datepicker
     * @param {?} valueAccessor
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} localizationService
     */
    constructor(datepicker, valueAccessor, _renderer, _element, localizationService) {
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(() => this.updateValue(this.selectedDateString));
        localizationService.onLanguageUpdate.subscribe(() => this.updateValue(this.selectedDateString));
    }
    /**
     * @return {?}
     */
    get useNativeOnMobile() {
        return this._useNativeOnMobile;
    }
    /**
     * @param {?} fallback
     * @return {?}
     */
    set useNativeOnMobile(fallback) {
        this._useNativeOnMobile = fallback;
        /** @type {?} */
        const isOnMobile = bowser.mobile || bowser.tablet || isWebView(navigator.userAgent);
        this.fallbackActive = this.useNativeOnMobile && isOnMobile;
    }
    /**
     * @return {?}
     */
    get fallbackActive() {
        return this._fallbackActive;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set fallbackActive(active) {
        this._fallbackActive = active;
        // If the fallback is active, then the trigger must be manual so the datepicker never opens.
        this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
        // Update the input value (this will insert the `T` as required).
        this.updateValue(this.selectedDateString);
    }
    /**
     * @return {?}
     */
    get parser() {
        if (this.fallbackActive) {
            return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
        }
        return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
    }
    /**
     * @return {?}
     */
    get selectedDateString() {
        if (this.datepicker.selectedDate) {
            return this.parser.format(this.datepicker.selectedDate);
        }
    }
    /**
     * @return {?}
     */
    get type() {
        if (this.fallbackActive) {
            return this.datepicker.config.fallback;
        }
        return "text";
    }
    /**
     * @return {?}
     */
    get max() {
        if (this.fallbackActive && this.datepicker.maxDate) {
            // Since HTML doesn't use a date object max is somewhat tricky.
            // Our Datepicker will always choose the 1st date on the provided precision,
            // meaning anything below the maxDate will work, hence endOf.
            /** @type {?} */
            const max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
            return this.parser.format(max);
        }
    }
    /**
     * @return {?}
     */
    get min() {
        if (this.fallbackActive && this.datepicker.minDate) {
            // Since HTML doesn't use a date object min is somewhat tricky.
            // We use 1 minute before the next date at the configured precision since
            // our Datepicker picks the first available date at that precision.
            /** @type {?} */
            const min = DateUtil.clone(this.datepicker.minDate);
            return this.parser.format(min);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    typeValue(value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        /** @type {?} */
        const parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        this.valueAccessor.onTouched();
    }
}
SuiDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: "input[suiDatepicker]"
            },] },
];
SuiDatepickerInputDirective.ctorParameters = () => [
    { type: SuiDatepickerDirective, decorators: [{ type: Host }] },
    { type: SuiDatepickerDirectiveValueAccessor, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiDatepickerInputDirective.propDecorators = {
    useNativeOnMobile: [{ type: Input, args: ["pickerUseNativeOnMobile",] }],
    type: [{ type: HostBinding, args: ["attr.type",] }],
    max: [{ type: HostBinding, args: ["attr.max",] }],
    min: [{ type: HostBinding, args: ["attr.min",] }],
    typeValue: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
    onFocusOut: [{ type: HostListener, args: ["focusout",] }]
};
if (false) {
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._useNativeOnMobile;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._fallbackActive;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._currentInputValue;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._lastUpdateTyped;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype.datepicker;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype.valueAccessor;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._renderer;
    /** @type {?} */
    SuiDatepickerInputDirective.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sS0FBSyxXQUFXLE1BQU0sZUFBZSxDQUFDOztNQUN2QyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFdBQVc7QUFLdkQsTUFBTTs7Ozs7Ozs7SUEwRUYsWUFBMkIsVUFBaUMsRUFDakMsYUFBaUQsRUFDeEQsU0FBbUIsRUFDbkIsUUFBbUIsRUFDM0IsbUJBQTBDO1FBSjNCLGVBQVUsR0FBVixVQUFVLENBQXVCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFvQztRQUN4RCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFHbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMs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LENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUNyRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFHTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUE1SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7YUFDbkM7OztZQVZRLHNCQUFzQix1QkFxRmQsSUFBSTtZQXJGWSxtQ0FBbUMsdUJBc0ZuRCxJQUFJO1lBMUZtRCxTQUFTO1lBQWhELFVBQVU7WUFFbEMsc0JBQXNCOzs7Z0NBZ0IxQixLQUFLLFNBQUMseUJBQXlCO21CQXlDL0IsV0FBVyxTQUFDLFdBQVc7a0JBUXZCLFdBQVcsU0FBQyxVQUFVO2tCQVd0QixXQUFXLFNBQUMsVUFBVTt3QkFzQ3RCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt5QkFpQjdDLFlBQVksU0FBQyxVQUFVOzs7O0lBckh4Qix5REFBbUM7O0lBYW5DLHNEQUFnQzs7SUFxQmhDLHlEQUE4Qzs7SUFDOUMsdURBQWlDOztJQXNDckIsaURBQWdEOztJQUNoRCxvREFBZ0U7O0lBQ2hFLGdEQUEyQjs7SUFDM0IsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi8uLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgSW50ZXJuYWxEYXRlUGFyc2VyLCBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIGJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmltcG9ydCBcIi4uL2hlbHBlcnMvaXMtd2Vidmlld1wiO1xuaW1wb3J0ICogYXMgaXNVQVdlYlZpZXcgZnJvbSBcImlzLXVhLXdlYnZpZXdcIjtcbmNvbnN0IGlzV2ViVmlldyA9IGlzVUFXZWJWaWV3W1wiZGVmYXVsdFwiXSB8fCBpc1VBV2ViVmlldztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbc3VpRGF0ZXBpY2tlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX3VzZU5hdGl2ZU9uTW9iaWxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJwaWNrZXJVc2VOYXRpdmVPbk1vYmlsZVwiKVxuICAgIHB1YmxpYyBnZXQgdXNlTmF0aXZlT25Nb2JpbGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdXNlTmF0aXZlT25Nb2JpbGUoZmFsbGJhY2s6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZSA9IGZhbGxiYWNrO1xuICAgICAgICBjb25zdCBpc09uTW9iaWxlID0gYm93c2VyLm1vYmlsZSB8fCBib3dzZXIudGFibGV0IHx8IGlzV2ViVmlldyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgJiYgaXNPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBmYWxsYmFja0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2tBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmYWxsYmFja0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9mYWxsYmFja0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gSWYgdGhlIGZhbGxiYWNrIGlzIGFjdGl2ZSwgdGhlbiB0aGUgdHJpZ2dlciBtdXN0IGJlIG1hbnVhbCBzbyB0aGUgZGF0ZXBpY2tlciBuZXZlciBvcGVucy5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdGhpcy5mYWxsYmFja0FjdGl2ZSA/IFBvcHVwVHJpZ2dlci5NYW51YWwgOiBQb3B1cFRyaWdnZXIuRm9jdXM7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUgKHRoaXMgd2lsbCBpbnNlcnQgdGhlIGBUYCBhcyByZXF1aXJlZCkuXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFyc2VyKCk6RGF0ZVBhcnNlciB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludGVybmFsRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubW9kZSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMuZm9ybWF0c1t0aGlzLmRhdGVwaWNrZXIubW9kZV0sIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2N1cnJlbnRJbnB1dFZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9sYXN0VXBkYXRlVHlwZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlU3RyaW5nKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnR5cGVcIilcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci5jb25maWcuZmFsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidGV4dFwiO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWF4XCIpXG4gICAgcHVibGljIGdldCBtYXgoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1heCBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBPdXIgRGF0ZXBpY2tlciB3aWxsIGFsd2F5cyBjaG9vc2UgdGhlIDFzdCBkYXRlIG9uIHRoZSBwcm92aWRlZCBwcmVjaXNpb24sXG4gICAgICAgICAgICAvLyBtZWFuaW5nIGFueXRoaW5nIGJlbG93IHRoZSBtYXhEYXRlIHdpbGwgd29yaywgaGVuY2UgZW5kT2YuXG4gICAgICAgICAgICBjb25zdCBtYXggPSBEYXRlVXRpbC5lbmRPZih0aGlzLmRhdGVwaWNrZXIuY29uZmlnLnByZWNpc2lvbiwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1heERhdGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWF4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWluXCIpXG4gICAgcHVibGljIGdldCBtaW4oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1pbiBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBXZSB1c2UgMSBtaW51dGUgYmVmb3JlIHRoZSBuZXh0IGRhdGUgYXQgdGhlIGNvbmZpZ3VyZWQgcHJlY2lzaW9uIHNpbmNlXG4gICAgICAgICAgICAvLyBvdXIgRGF0ZXBpY2tlciBwaWNrcyB0aGUgZmlyc3QgYXZhaWxhYmxlIGRhdGUgYXQgdGhhdCBwcmVjaXNpb24uXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1pbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyBkYXRlcGlja2VyOlN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgICAgQEhvc3QoKSBwdWJsaWMgdmFsdWVBY2Nlc3NvcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGRhdGVwaWNrZXIgdmFsdWUgdXBkYXRlcywgdXBkYXRlIHRoZSBpbnB1dCB0ZXh0IGFsb25nc2lkZSBpdC5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uU2VsZWN0ZWREYXRlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuXG4gICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIGlmIGl0IGlzIGRpZmZlcmVudCB0byB3aGF0IGl0J3MgYmVpbmcgdXBkYXRlZCB0by5cbiAgICAgICAgLy8gVGhpcyBpcyBzbyB0aGF0IHRoZSBlZGl0aW5nIHBvc2l0aW9uIGlzbid0IGNoYW5nZWQgd2hlbiBtYW51YWxseSB0eXBpbmcgdGhlIGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5fbGFzdFVwZGF0ZVR5cGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidmFsdWVcIiwgdmFsdWUgfHwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcbiAgICBwdWJsaWMgdHlwZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbnB1dFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBzZWxlY3RlZCBkYXRlIGlmIG5vIGRhdGUgd2FzIGVudGVyZWQgbWFudWFsbHkuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VyLnBhcnNlKHZhbHVlLCB0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZWQuZ2V0VGltZSgpKSAmJiB2YWx1ZSA9PT0gdGhpcy5wYXJzZXIuZm9ybWF0KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZShwYXJzZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5vblRvdWNoZWQoKTtcbiAgICB9XG59XG4iXX0=