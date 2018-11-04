/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, EventEmitter, Output, Input, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor, customValidatorFactory, CustomValidator, PositioningPlacement, SuiComponentFactory, KeyCode } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiPopupComponentController, PopupConfig, PopupTrigger } from "../../popup/internal";
import { SuiDatepicker, DatepickerMode } from "../components/datepicker";
import { YearConfig, MonthConfig, DatetimeConfig, TimeConfig, DateConfig } from "../classes/calendar-config";
export class SuiDatepickerDirective extends SuiPopupComponentController {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} componentFactory
     * @param {?} localizationService
     */
    constructor(renderer, element, componentFactory, localizationService) {
        super(renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        }));
        this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        this._renderer.addClass(this.popup.elementRef.nativeElement, "ui");
        this._renderer.addClass(this.popup.elementRef.nativeElement, "calendar");
        this.onLocaleUpdate();
        this.localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this.onSelectedDateChange = new EventEmitter();
        this.onValidatorChange = new EventEmitter();
        this.mode = DatepickerMode.Datetime;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this._selectedDate;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set selectedDate(date) {
        this._selectedDate = date;
        this.onSelectedDateChange.emit(date);
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this._mode = mode || DatepickerMode.Datetime;
        switch (this._mode) {
            case DatepickerMode.Year:
                this.config = new YearConfig();
                break;
            case DatepickerMode.Month:
                this.config = new MonthConfig();
                break;
            case DatepickerMode.Date:
            default:
                this.config = new DateConfig();
                break;
            case DatepickerMode.Datetime:
                this.config = new DatetimeConfig();
                break;
            case DatepickerMode.Time:
                this.config = new TimeConfig();
                break;
        }
        this.writeValue(this.selectedDate);
    }
    /**
     * @return {?}
     */
    get localeValues() {
        return this.localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    set placement(placement) {
        this.popup.config.placement = placement;
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    set transition(transition) {
        this.popup.config.transition = transition;
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    set transitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set popupParent(element) {
        this.popup.config.parent = element;
    }
    /**
     * @return {?}
     */
    popupOnOpen() {
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe((d) => {
                this.selectedDate = d;
                this.close();
            });
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ maxDate, minDate, mode }) {
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this.localizationService.get().datepicker;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    }
}
SuiDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                providers: [customValidatorFactory(SuiDatepickerDirective)]
            },] },
];
/** @nocollapse */
SuiDatepickerDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory },
    { type: SuiLocalizationService }
];
SuiDatepickerDirective.propDecorators = {
    mode: [{ type: Input, args: ["pickerMode",] }],
    initialDate: [{ type: Input, args: ["pickerInitialDate",] }],
    maxDate: [{ type: Input, args: ["pickerMaxDate",] }],
    minDate: [{ type: Input, args: ["pickerMinDate",] }],
    firstDayOfWeek: [{ type: Input, args: ["pickerFirstDayOfWeek",] }],
    localeOverrides: [{ type: Input, args: ["pickerLocaleOverrides",] }],
    placement: [{ type: Input, args: ["pickerPlacement",] }],
    transition: [{ type: Input, args: ["pickerTransition",] }],
    transitionDuration: [{ type: Input, args: ["pickerTransitionDuration",] }],
    popupParent: [{ type: Input, args: ["pickerPopupParent",] }],
    onSelectedDateChange: [{ type: Output, args: ["pickerSelectedDateChange",] }],
    onValidatorChange: [{ type: Output, args: ["pickerValidatorChange",] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiDatepickerDirective.prototype._selectedDate;
    /** @type {?} */
    SuiDatepickerDirective.prototype._mode;
    /** @type {?} */
    SuiDatepickerDirective.prototype.config;
    /** @type {?} */
    SuiDatepickerDirective.prototype.initialDate;
    /** @type {?} */
    SuiDatepickerDirective.prototype.maxDate;
    /** @type {?} */
    SuiDatepickerDirective.prototype.minDate;
    /** @type {?} */
    SuiDatepickerDirective.prototype.firstDayOfWeek;
    /** @type {?} */
    SuiDatepickerDirective.prototype._localeValues;
    /** @type {?} */
    SuiDatepickerDirective.prototype.localeOverrides;
    /** @type {?} */
    SuiDatepickerDirective.prototype.onSelectedDateChange;
    /** @type {?} */
    SuiDatepickerDirective.prototype.onValidatorChange;
    /** @type {?} */
    SuiDatepickerDirective.prototype.localizationService;
}
export class SuiDatepickerDirectiveValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerSelectedDateChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
            },] },
];
/** @nocollapse */
SuiDatepickerDirectiveValueAccessor.ctorParameters = () => [
    { type: SuiDatepickerDirective }
];
if (false) {
    /** @type {?} */
    SuiDatepickerDirectiveValueAccessor.prototype.host;
}
export class SuiDatepickerDirectiveValidator extends CustomValidator {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValidator.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerValidatorChange)": "onValidatorChange()" },
                providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
            },] },
];
/** @nocollapse */
SuiDatepickerDirectiveValidator.ctorParameters = () => [
    { type: SuiDatepickerDirective }
];
if (false) {
    /** @type {?} */
    SuiDatepickerDirectiveValidator.prototype.host;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUM3RCxZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUN1QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFDbkQsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFDcEgsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQTZDLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0gsT0FBTyxFQUFFLDJCQUEyQixFQUFrQixXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQWtCLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU03SCxNQUFNLDZCQUNDLFNBQVEsMkJBQTBDOzs7Ozs7O0lBNEZyRCxZQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUM3QjtRQUVmLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUN0RSxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDM0IsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDMUMsVUFBVSxFQUFFLE9BQU87WUFDbkIsa0JBQWtCLEVB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QWtCLEVBQUU7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDL0U7Ozs7WUFFMkIsc0JBQXNCOzs7Ozs7QUFRbEQsTUFBTSxzQ0FBdUMsU0FBUSxlQUF1Qzs7OztJQUN4RixZQUFtQixJQUEyQjtRQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUF1QjtLQUFrQjs7O1lBTm5FLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRTtnQkFDMUQsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUN2RTs7OztZQUUyQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsXG4gICAgSG9zdExpc3RlbmVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIElDdXN0b21WYWxpZGF0b3JIb3N0LCBjdXN0b21WYWxpZGF0b3JGYWN0b3J5LCBDdXN0b21WYWxpZGF0b3IsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5LCBLZXlDb2RlXG59IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlciwgUG9wdXBBZnRlck9wZW4sIFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXIsIERhdGVwaWNrZXJNb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcsIFllYXJDb25maWcsIE1vbnRoQ29uZmlnLCBEYXRldGltZUNvbmZpZywgVGltZUNvbmZpZywgRGF0ZUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmUpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlXG4gICAgICAgZXh0ZW5kcyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXI8U3VpRGF0ZXBpY2tlcj5cbiAgICAgICBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxEYXRlPiwgSUN1c3RvbVZhbGlkYXRvckhvc3QsIE9uQ2hhbmdlcywgUG9wdXBBZnRlck9wZW4ge1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRGF0ZShkYXRlOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vZGU6RGF0ZXBpY2tlck1vZGU7XG4gICAgcHVibGljIGNvbmZpZzpDYWxlbmRhckNvbmZpZztcblxuICAgIEBJbnB1dChcInBpY2tlck1vZGVcIilcbiAgICBwdWJsaWMgZ2V0IG1vZGUoKTpEYXRlcGlja2VyTW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbW9kZShtb2RlOkRhdGVwaWNrZXJNb2RlKSB7XG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlIHx8IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuWWVhcjpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLk1vbnRoOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IE1vbnRoQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGU6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgRGF0ZXRpbWVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuVGltZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBUaW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJJbml0aWFsRGF0ZVwiKVxuICAgIHB1YmxpYyBpbml0aWFsRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1heERhdGVcIilcbiAgICBwdWJsaWMgbWF4RGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1pbkRhdGVcIilcbiAgICBwdWJsaWMgbWluRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlckZpcnN0RGF5T2ZXZWVrXCIpXG4gICAgcHVibGljIGZpcnN0RGF5T2ZXZWVrPzpudW1iZXI7XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJMb2NhbGVPdmVycmlkZXNcIilcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJkYXRlcGlja2VyXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclBsYWNlbWVudFwiKVxuICAgIHB1YmxpYyBzZXQgcGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJUcmFuc2l0aW9uRHVyYXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyUG9wdXBQYXJlbnRcIilcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGFyZW50KGVsZW1lbnQ6RWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBPdXRwdXQoXCJwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25TZWxlY3RlZERhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPERhdGU+O1xuXG4gICAgQE91dHB1dChcInBpY2tlclZhbGlkYXRvckNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIFN1aURhdGVwaWNrZXIsIG5ldyBQb3B1cENvbmZpZyh7XG4gICAgICAgICAgICB0cmlnZ2VyOiBQb3B1cFRyaWdnZXIuRm9jdXMsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbUxlZnQsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDIwMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBwb3B1cCBpcyBkcmF3biBjb3JyZWN0bHkgKGkuZS4gbm8gYm9yZGVyKS5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwidWlcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImNhbGVuZGFyXCIpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLm1vZGUgPSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdXBPbk9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsZVZhbHVlcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jdXJyZW50RGF0ZSA9IHRoaXMuaW5pdGlhbERhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5maXJzdERheU9mV2VlayA9IHRoaXMuZmlyc3REYXlPZldlZWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uub25EYXRlQ2hhbmdlLnN1YnNjcmliZSgoZDpEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKHsgbWF4RGF0ZSwgbWluRGF0ZSwgbW9kZSB9OlNpbXBsZUNoYW5nZXMpOnZvaWQge1xuICAgICAgICBpZiAobWF4RGF0ZSB8fCBtaW5EYXRlIHx8IG1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIHBvc3QgcHJvY2VzcyB0aGUgbWluICYgbWF4IGRhdGUgYmVjYXVzZSBzb21ldGltZXMgdGhpcyBwdXRzIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGFsbG93ZWQgcmFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHZhbHVlIDwgdGhpcy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWluRGF0ZTogeyByZXF1aXJlZDogdGhpcy5taW5EYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4RGF0ZSAmJiB2YWx1ZSA+IHRoaXMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1heERhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWF4RGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmd1bGFyIGV4cGVjdHMgbnVsbFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbnVsbC1rZXl3b3JkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOkRhdGUgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxEYXRlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclZhbGlkYXRvckNoYW5nZSlcIjogXCJvblZhbGlkYXRvckNoYW5nZSgpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yIGV4dGVuZHMgQ3VzdG9tVmFsaWRhdG9yPFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG4iXX0=