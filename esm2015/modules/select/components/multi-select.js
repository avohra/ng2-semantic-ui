/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, ElementRef, EventEmitter, Output, Input, Directive } from "@angular/core";
import { KeyCode, customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
/**
 * @template T, U
 */
export class SuiMultiSelect extends SuiSelectBase {
    /**
     * @param {?} element
     * @param {?} localizationService
     */
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptions = [];
        this.selectedOptionsChange = new EventEmitter();
        this.hasLabels = true;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get filteredOptions() {
        if (this.maxSelectedReached) {
            // If we have reached the maximum number of selections, then empty the results completely.
            return [];
        }
        /** @type {?} */
        const searchResults = this.searchService.results;
        if (!this.hasLabels) {
            return searchResults;
        }
        else {
            // Returns the search results \ selected options.
            return searchResults
                .filter(r => this.selectedOptions.find(o => r === o) == undefined);
        }
    }
    /**
     * @return {?}
     */
    get availableOptions() {
        return this.filteredOptions;
    }
    /**
     * @return {?}
     */
    get hasLabels() {
        return this._hasLabels;
    }
    /**
     * @param {?} hasLabels
     * @return {?}
     */
    set hasLabels(hasLabels) {
        this._hasLabels = hasLabels;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.multi.placeholder;
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
    get maxSelectedReached() {
        if (this.maxSelected == undefined) {
            // If there is no maximum then we can immediately return.
            return false;
        }
        return this.selectedOptions.length === this.maxSelected;
    }
    /**
     * @return {?}
     */
    get maxSelectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
    }
    /**
     * @return {?}
     */
    get selectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
    }
    /**
     * @return {?}
     */
    optionsUpdateHook() {
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(o => this.valueGetter(o)));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                .map(v => (/** @type {?} */ (this.findOption(this.searchService.options, v))))
                .filter(v => v != undefined);
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    /**
     * @param {?} values
     * @return {?}
     */
    writeValue(values) {
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    .map(v => (/** @type {?} */ (this.findOption(this.searchService.options, v))))
                    .filter(v => v != undefined);
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(items => this.selectedOptions = items);
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
        else {
            this.selectedOptions = [];
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(so => so !== option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onQueryInputKeydown(event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    }
}
SuiMultiSelect.decorators = [
    { type: Component, args: [{
                selector: "sui-multi-select",
                template: `
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>

<ng-container *ngIf="hasLabels">
<!-- Multi-select labels -->
    <sui-multi-select-label *ngFor="let selected of selectedOptions;"
                            [value]="selected"
                            [query]="query"
                            [formatter]="configuredFormatter"
                            [template]="optionTemplate"
                            (deselected)="deselectOption($event)"></sui-multi-select-label>
</ng-container>

<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Helper text -->
<div class="text"
     [class.default]="hasLabels"
     [class.filtered]="!!query && !isSearchExternal">
    
    <!-- Placeholder text -->
    <ng-container *ngIf="hasLabels; else selectedBlock">{{ placeholder }}</ng-container>
    
    <!-- Summary shown when labels are hidden -->
    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>
</div>

<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="true">

    <ng-content></ng-content>
    <ng-container *ngIf="availableOptions.length == 0 ">
        <div *ngIf="!maxSelectedReached" class="message">{{ localeValues.noResultsMessage }}</div>
        <div *ngIf="maxSelectedReached" class="message">{{ maxSelectedMessage }}</div>
    </ng-container>
</div>
`,
                styles: [`
:host input.search {
    width: 12em !important;
}
`]
            },] },
];
SuiMultiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiMultiSelect.propDecorators = {
    selectedOptionsChange: [{ type: Output }],
    hasLabels: [{ type: Input }],
    placeholder: [{ type: Input }],
    maxSelected: [{ type: Input }],
    hasClasses: [{ type: HostBinding, args: ["class.multiple",] }]
};
if (false) {
    /** @type {?} */
    SuiMultiSelect.prototype.selectedOptions;
    /** @type {?} */
    SuiMultiSelect.prototype._writtenOptions;
    /** @type {?} */
    SuiMultiSelect.prototype.selectedOptionsChange;
    /** @type {?} */
    SuiMultiSelect.prototype._hasLabels;
    /** @type {?} */
    SuiMultiSelect.prototype._placeholder;
    /** @type {?} */
    SuiMultiSelect.prototype.maxSelected;
    /** @type {?} */
    SuiMultiSelect.prototype.hasClasses;
}
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
export class SuiMultiSelectValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiMultiSelectValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-multi-select",
                host: {
                    "(selectedOptionsChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
            },] },
];
SuiMultiSelectValueAccessor.ctorParameters = () => [
    { type: SuiMultiSelect }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUE0QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUF3RHZELE1BQU0scUJBQTRCLFNBQVEsYUFBbUI7Ozs7O0lBNkV6RCxZQUFZLE9BQWtCLEVBQUUsbUJBQTBDO1FBQ3RFLEtBQUssQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBN0VELElBQVcsZUFBZTtRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLDBGQUEwRjtZQUMxRixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7Y0FFSyxhQUFhLEdBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO1FBRXBELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxD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Q1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRDYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQzs7OztDQUlaLENBQUM7YUFDRDs7O1lBMURnQyxVQUFVO1lBRWxDLHNCQUFzQjs7O29DQThEMUIsTUFBTTt3QkEwQk4sS0FBSzswQkFXTCxLQUFLOzBCQVNMLEtBQUs7eUJBdUJMLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7SUF6RTdCLHlDQUEyQjs7SUFFM0IseUNBQTZCOztJQUU3QiwrQ0FDK0M7O0lBdUIvQyxvQ0FBMkI7O0lBVzNCLHNDQUE0Qjs7SUFXNUIscUNBQzBCOztJQXNCMUIsb0NBQ21DOzs7Ozs7QUFrSHZDLE1BQU0sa0NBQXlDLFNBQVEsbUJBQThDOzs7O0lBQ2pHLFlBQVksSUFBeUI7UUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OztZQVhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0YseUJBQXlCLEVBQUUsa0JBQWtCO29CQUM3QyxXQUFXLEVBQUUsYUFBYTtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUN2RTs7O1lBRW9CLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIEtleUNvZGUsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL3NlbGVjdC1vcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsc1wiPlxuPCEtLSBNdWx0aS1zZWxlY3QgbGFiZWxzIC0tPlxuICAgIDxzdWktbXVsdGktc2VsZWN0LWxhYmVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBzZWxlY3RlZE9wdGlvbnM7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJjb25maWd1cmVkRm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwib3B0aW9uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXNlbGVjdGVkKT1cImRlc2VsZWN0T3B0aW9uKCRldmVudClcIj48L3N1aS1tdWx0aS1zZWxlY3QtbGFiZWw+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBRdWVyeSBpbnB1dCAtLT5cbjxpbnB1dCBzdWlTZWxlY3RTZWFyY2hcbiAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgW2hpZGRlbl09XCIhaXNTZWFyY2hhYmxlIHx8IGlzU2VhcmNoRXh0ZXJuYWxcIj5cblxuPCEtLSBIZWxwZXIgdGV4dCAtLT5cbjxkaXYgY2xhc3M9XCJ0ZXh0XCJcbiAgICAgW2NsYXNzLmRlZmF1bHRdPVwiaGFzTGFiZWxzXCJcbiAgICAgW2NsYXNzLmZpbHRlcmVkXT1cIiEhcXVlcnkgJiYgIWlzU2VhcmNoRXh0ZXJuYWxcIj5cbiAgICBcbiAgICA8IS0tIFBsYWNlaG9sZGVyIHRleHQgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsczsgZWxzZSBzZWxlY3RlZEJsb2NrXCI+e3sgcGxhY2Vob2xkZXIgfX08L25nLWNvbnRhaW5lcj5cbiAgICBcbiAgICA8IS0tIFN1bW1hcnkgc2hvd24gd2hlbiBsYWJlbHMgYXJlIGhpZGRlbiAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+IHt7IHNlbGVjdGVkTWVzc2FnZSB9fTwvbmctdGVtcGxhdGU+XG48L2Rpdj5cblxuPCEtLSBTZWxlY3QgZHJvcGRvd24gbWVudSAtLT5cbjxkaXYgY2xhc3M9XCJtZW51XCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgW21lbnVBdXRvU2VsZWN0Rmlyc3RdPVwidHJ1ZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PSAwIFwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIW1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHNNZXNzYWdlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJtYXhTZWxlY3RlZFJlYWNoZWRcIiBjbGFzcz1cIm1lc3NhZ2VcIj57eyBtYXhTZWxlY3RlZE1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCBpbnB1dC5zZWFyY2gge1xuICAgIHdpZHRoOiAxMmVtICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdDxULCBVPiBleHRlbmRzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VVtdPiB7XG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uczpUW107XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZXMgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSBpdCBjYW4gYmUgbWF0Y2hlZCB0byBhbiBvcHRpb24gZnJvbSBgb3B0aW9uc2AuXG4gICAgcHJpdmF0ZSBfd3JpdHRlbk9wdGlvbnM/OlVbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnNDaGFuZ2U6RXZlbnRFbWl0dGVyPFVbXT47XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkUmVhY2hlZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWxlY3Rpb25zLCB0aGVuIGVtcHR5IHRoZSByZXN1bHRzIGNvbXBsZXRlbHkuXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzOlRbXSA9IHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJucyB0aGUgc2VhcmNoIHJlc3VsdHMgXFwgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihyID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbmQobyA9PiByID09PSBvKSA9PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0xhYmVsczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc0xhYmVscygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzTGFiZWxzKGhhc0xhYmVsczpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0xhYmVscyA9IGhhc0xhYmVscztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhTZWxlY3RlZDpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkUmVhY2hlZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3RlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG1heGltdW0gdGhlbiB3ZSBjYW4gaW1tZWRpYXRlbHkgcmV0dXJuLlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IHRoaXMubWF4U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtYXhTZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLm1heFNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJtYXhcIiwgdGhpcy5tYXhTZWxlY3RlZC50b1N0cmluZygpXV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRNZXNzYWdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5zZWxlY3RlZE1lc3NhZ2UsXG4gICAgICAgICAgICBbW1wiY291bnRcIiwgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubXVsdGlwbGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFVbXT4oKTtcblxuICAgICAgICB0aGlzLmhhc0xhYmVscyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fd3JpdHRlbk9wdGlvbnMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGUgb3B0aW9ucyBzdGlsbCBleGlzdC5cbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbnMgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSB2YWx1ZXMgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuX3dyaXR0ZW5PcHRpb25zXG4gICAgICAgICAgICAgICAgLy8gbm9uLW51bGwgYXNzZXJ0aW9uIGFkZGVkIGhlcmUgYmVjYXVzZSBUeXBlc2NyaXB0IGRvZXNuJ3QgcmVjb2duaXNlIHRoZSBub24tbnVsbCBmaWx0ZXIuXG4gICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IHRoaXMuX3dyaXR0ZW5PcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbik7XG5cbiAgICAgICAgLy8gQm9sZGVucyB0aGUgaXRlbSBzbyBpdCBhcHBlYXJzIHNlbGVjdGVkIGluIHRoZSBkcm9wZG93bi5cbiAgICAgICAgb3B0aW9uLmlzQWN0aXZlID0gIXRoaXMuaGFzTGFiZWxzICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoZmFsc2UpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlczpVW10pOnZvaWQge1xuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gbG9hZGVkLCB3ZSBjYW4gaW1tZWRpYXRlbHkgbWF0Y2ggdGhlIG5nTW9kZWwgdmFsdWVzIHRvIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9uLW51bGwgYXNzZXJ0aW9uIGFkZGVkIGhlcmUgYmVjYXVzZSBUeXBlc2NyaXB0IGRvZXNuJ3QgcmVjb2duaXNlIHRoZSBub24tbnVsbCBmaWx0ZXIuXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodiA9PiB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHYpISlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUZpZWxkICYmIHRoaXMuc2VhcmNoU2VydmljZS5oYXNJdGVtTG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWFyY2ggc2VydmljZSBoYXMgYSBzZWxlY3RlZCBsb29rdXAgZnVuY3Rpb24sIG1ha2UgdXNlIG9mIHRoYXQgdG8gbG9hZCB0aGUgaW5pdGlhbCB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaXRlbXMgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBpdGVtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb25zID0gdmFsdWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgb3B0aW9ucyB0byB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBvcHRpb25zIFxcIHtvcHRpb259LlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbHRlcihzbyA9PiBzbyAhPT0gb3B0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlJbnB1dEtleWRvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkJhY2tzcGFjZSAmJiB0aGlzLnF1ZXJ5ID09PSBcIlwiICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIERlc2VsZWN0IHRoZSByaWdodG1vc3Qgb3B0aW9uIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBiYWNrc3BhY2UgaW4gdGhlIHNlYXJjaCBpbnB1dC5cbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24odGhpcy5zZWxlY3RlZE9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBWYWx1ZSBhY2Nlc3NvciBkaXJlY3RpdmUgZm9yIHRoZSBzZWxlY3QgdG8gc3VwcG9ydCBuZ01vZGVsLlxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoc2VsZWN0ZWRPcHRpb25zQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFVbXSwgU3VpTXVsdGlTZWxlY3Q8VCwgVT4+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aU11bHRpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==