/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild, Output, EventEmitter, ElementRef, Directive, Input } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
/**
 * @template T, U
 */
export class SuiSelect extends SuiSelectBase {
    /**
     * @param {?} element
     * @param {?} localizationService
     */
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.single.placeholder;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    /**
     * @return {?}
     */
    optionsUpdateHook() {
        if (!this._writtenOption && this.selectedOption) {
            // We need to check the option still exists.
            this.writeValue(this.valueGetter(this.selectedOption));
        }
        if (this._writtenOption && this.searchService.options.length > 0) {
            // If there was an value written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOption = this.findOption(this.searchService.options, this._writtenOption);
            if (this.selectedOption) {
                this._writtenOption = undefined;
                this.drawSelectedOption();
            }
        }
    }
    /**
     * @return {?}
     */
    queryUpdateHook() {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = undefined;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        this.resetQuery();
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value != undefined) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel value to an option.
                this.selectedOption = this.findOption(this.searchService.options, value);
                this.drawSelectedOption();
            }
            if (this.selectedOption == undefined) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial value.
                    this.searchService
                        .initialLookup(value)
                        .then(i => {
                        this.selectedOption = i;
                        this.drawSelectedOption();
                    });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOption = value;
                }
            }
        }
        else {
            this.selectedOption = undefined;
            this.drawSelectedOption();
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value === this.selectedOption;
    }
    /**
     * @return {?}
     */
    drawSelectedOption() {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption != undefined && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    }
}
SuiSelect.decorators = [
    { type: Component, args: [{
                selector: "sui-select",
                template: `
<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Placeholder text -->
<div *ngIf="selectedOption == undefined" class="default text" [class.filtered]="query">{{ placeholder }}</div>
<!-- Selected item -->
<div class="text" [class.filtered]="query || selectedOption == undefined">
    <span #optionTemplateSibling></span>
    <span *ngIf="!optionTemplate && selectedOption != undefined" [innerHTML]="configuredFormatter(selectedOption)"></span>
</div>
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>
<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="isSearchable">

    <ng-content></ng-content>
    <div *ngIf="isSearchable && availableOptions.length === 0" class="message">
        {{ localeValues.noResultsMessage }}
    </div>
</div>
`
            },] },
];
SuiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiSelect.propDecorators = {
    _optionTemplateSibling: [{ type: ViewChild, args: ["optionTemplateSibling", { read: ViewContainerRef },] }],
    selectedOptionChange: [{ type: Output }],
    placeholder: [{ type: Input }],
    searchDelay: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SuiSelect.prototype.selectedOption;
    /** @type {?} */
    SuiSelect.prototype._writtenOption;
    /** @type {?} */
    SuiSelect.prototype._optionTemplateSibling;
    /** @type {?} */
    SuiSelect.prototype.selectedOptionChange;
    /** @type {?} */
    SuiSelect.prototype._placeholder;
}
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
export class SuiSelectValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiSelectValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-select",
                host: {
                    "(selectedOptionChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
            },] },
];
SuiSelectValueAccessor.ctorParameters = () => [
    { type: SuiSelect }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUE0QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQWtDdkQsTUFBTSxnQkFBdUIsU0FBUSxhQUFtQjs7Ozs7SUEyQnBELFlBQVksT0FBa0IsRUFBRSxtQkFBMEM7UUFDdEUsS0FBSyxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFsQkQsSUFDVyxXQUFXO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUVELElBQ1csV0FBVyxDQUFDLEtBQVk7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsSUFBVyxXQUFXLENBQUMsV0FBa0I7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQzs7OztJQVFTLGlCQUFpQjtRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElB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N0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUNsRTs7O1lBRW9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9zZWxlY3Qtb3B0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3RcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBRdWVyeSBpbnB1dCAtLT5cbjxpbnB1dCBzdWlTZWxlY3RTZWFyY2hcbiAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgW2hpZGRlbl09XCIhaXNTZWFyY2hhYmxlIHx8IGlzU2VhcmNoRXh0ZXJuYWxcIj5cblxuPCEtLSBQbGFjZWhvbGRlciB0ZXh0IC0tPlxuPGRpdiAqbmdJZj1cInNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZFwiIGNsYXNzPVwiZGVmYXVsdCB0ZXh0XCIgW2NsYXNzLmZpbHRlcmVkXT1cInF1ZXJ5XCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cbjwhLS0gU2VsZWN0ZWQgaXRlbSAtLT5cbjxkaXYgY2xhc3M9XCJ0ZXh0XCIgW2NsYXNzLmZpbHRlcmVkXT1cInF1ZXJ5IHx8IHNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZFwiPlxuICAgIDxzcGFuICNvcHRpb25UZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiIW9wdGlvblRlbXBsYXRlICYmIHNlbGVjdGVkT3B0aW9uICE9IHVuZGVmaW5lZFwiIFtpbm5lckhUTUxdPVwiY29uZmlndXJlZEZvcm1hdHRlcihzZWxlY3RlZE9wdGlvbilcIj48L3NwYW4+XG48L2Rpdj5cbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuPCEtLSBTZWxlY3QgZHJvcGRvd24gbWVudSAtLT5cbjxkaXYgY2xhc3M9XCJtZW51XCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgW21lbnVBdXRvU2VsZWN0Rmlyc3RdPVwiaXNTZWFyY2hhYmxlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiAqbmdJZj1cImlzU2VhcmNoYWJsZSAmJiBhdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICB7eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzTWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdDxULCBVPiBleHRlbmRzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4ge1xuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbj86VDtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgaXQgY2FuIGJlIG1hdGNoZWQgdG8gYW4gb3B0aW9uIGZyb20gYG9wdGlvbnNgLlxuICAgIHByaXZhdGUgX3dyaXR0ZW5PcHRpb24/OlU7XG5cbiAgICBAVmlld0NoaWxkKFwib3B0aW9uVGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHByaXZhdGUgX29wdGlvblRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uQ2hhbmdlOkV2ZW50RW1pdHRlcjxVPjtcblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5zaW5nbGUucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZiwgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGxvY2FsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb24gc3RpbGwgZXhpc3RzLlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMudmFsdWVHZXR0ZXIodGhpcy5zZWxlY3RlZE9wdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dyaXR0ZW5PcHRpb24gJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFuIHZhbHVlIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgdGhlIG9wdGlvbnMgaGFkIGJlZW4gbG9hZGVkLCB0aGlzIHJ1bnMgdG8gZml4IGl0LlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdGhpcy5fd3JpdHRlbk9wdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgcXVlcnkgaXMgdXBkYXRlZCwgd2UganVzdCBhYmFuZG9uIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgLy8gQ2hvb3NlIGFuZCBlbWl0IHRoZSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLnZhbHVlR2V0dGVyKG9wdGlvbikpO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFF1ZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpVKTp2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZSB0byBhbiBvcHRpb24uXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0aWFsTG9va3VwKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2FjaGUgdGhlIHdyaXR0ZW4gdmFsdWUgZm9yIHdoZW4gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSBvcHRpb24udmFsdWUgPT09IHRoaXMuc2VsZWN0ZWRPcHRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3U2VsZWN0ZWRPcHRpb24oKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvblRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZW1wbGF0ZSh0aGlzLl9vcHRpb25UZW1wbGF0ZVNpYmxpbmcsIHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBWYWx1ZSBhY2Nlc3NvciBkaXJlY3RpdmUgZm9yIHRoZSBzZWxlY3QgdG8gc3VwcG9ydCBuZ01vZGVsLlxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoc2VsZWN0ZWRPcHRpb25DaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yPFQsIFU+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxVLCBTdWlTZWxlY3Q8VCwgVT4+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVNlbGVjdDxULCBVPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=