/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ElementRef, EventEmitter, Output, Input, Directive } from "@angular/core";
import { KeyCode, customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
/**
 * @template T, U
 */
var SuiMultiSelect = /** @class */ (function (_super) {
    tslib_1.__extends(SuiMultiSelect, _super);
    function SuiMultiSelect(element, localizationService) {
        var _this = _super.call(this, element, localizationService) || this;
        _this.selectedOptions = [];
        _this.selectedOptionsChange = new EventEmitter();
        _this.hasLabels = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiMultiSelect.prototype, "filteredOptions", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.maxSelectedReached) {
                // If we have reached the maximum number of selections, then empty the results completely.
                return [];
            }
            /** @type {?} */
            var searchResults = this.searchService.results;
            if (!this.hasLabels) {
                return searchResults;
            }
            else {
                // Returns the search results \ selected options.
                return searchResults
                    .filter(function (r) { return _this.selectedOptions.find(function (o) { return r === o; }) == undefined; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "hasLabels", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasLabels;
        },
        set: /**
         * @param {?} hasLabels
         * @return {?}
         */
        function (hasLabels) {
            this._hasLabels = hasLabels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder || this.localeValues.multi.placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.maxSelected == undefined) {
                // If there is no maximum then we can immediately return.
                return false;
            }
            return this.selectedOptions.length === this.maxSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "selectedMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiMultiSelect.prototype.optionsUpdateHook = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                .map(function (v) { return (/** @type {?} */ (_this.findOption(_this.searchService.options, v))); })
                .filter(function (v) { return v != undefined; });
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.initialiseRenderedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.selectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    /**
     * @param {?} values
     * @return {?}
     */
    SuiMultiSelect.prototype.writeValue = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        var _this = this;
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    .map(function (v) { return (/** @type {?} */ (_this.findOption(_this.searchService.options, v))); })
                    .filter(function (v) { return v != undefined; });
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(function (items) { return _this.selectedOptions = items; });
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
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.deselectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(function (so) { return so !== option; });
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiMultiSelect.prototype.onQueryInputKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    };
    SuiMultiSelect.decorators = [
        { type: Component, args: [{
                    selector: "sui-multi-select",
                    template: "\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n\n<ng-container *ngIf=\"hasLabels\">\n<!-- Multi-select labels -->\n    <sui-multi-select-label *ngFor=\"let selected of selectedOptions;\"\n                            [value]=\"selected\"\n                            [query]=\"query\"\n                            [formatter]=\"configuredFormatter\"\n                            [template]=\"optionTemplate\"\n                            (deselected)=\"deselectOption($event)\"></sui-multi-select-label>\n</ng-container>\n\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Helper text -->\n<div class=\"text\"\n     [class.default]=\"hasLabels\"\n     [class.filtered]=\"!!query && !isSearchExternal\">\n    \n    <!-- Placeholder text -->\n    <ng-container *ngIf=\"hasLabels; else selectedBlock\">{{ placeholder }}</ng-container>\n    \n    <!-- Summary shown when labels are hidden -->\n    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>\n</div>\n\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"true\">\n\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ localeValues.noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">{{ maxSelectedMessage }}</div>\n    </ng-container>\n</div>\n",
                    styles: ["\n:host input.search {\n    width: 12em !important;\n}\n"]
                },] },
    ];
    SuiMultiSelect.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SuiLocalizationService }
    ]; };
    SuiMultiSelect.propDecorators = {
        selectedOptionsChange: [{ type: Output }],
        hasLabels: [{ type: Input }],
        placeholder: [{ type: Input }],
        maxSelected: [{ type: Input }],
        hasClasses: [{ type: HostBinding, args: ["class.multiple",] }]
    };
    return SuiMultiSelect;
}(SuiSelectBase));
export { SuiMultiSelect };
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
var SuiMultiSelectValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(SuiMultiSelectValueAccessor, _super);
    function SuiMultiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
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
    SuiMultiSelectValueAccessor.ctorParameters = function () { return [
        { type: SuiMultiSelect }
    ]; };
    return SuiMultiSelectValueAccessor;
}(CustomValueAccessor));
export { SuiMultiSelectValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBNEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBR3ZEO0lBcUQwQywwQ0FBbUI7SUE2RXpELHdCQUFZLE9BQWtCLEVBQUUsbUJBQTBDO1FBQTFFLFlBQ0ksa0JBQU0sT0FBTyxFQUFFLG1CQUFtQixDQUFDLFNBT3RDO1FBTEcsS0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0lBQzNCLENBQUM7SUE3RUQsc0JBQVcsMkNBQWU7Ozs7UUFBMUI7WUFBQSxpQkFlQztZQWRHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLDBGQUEwRjtnQkFDMUYsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUM7O2dCQUVLLGFBQWEsR0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87WUFFcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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QztDQUFBLEFBWkQsQ0FRdUQsbUJBQW1CLEdBSXpFO1NBSlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBLZXlDb2RlLCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9zZWxlY3Qtb3B0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3RcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBEcm9wZG93biBpY29uIC0tPlxuPGkgY2xhc3M9XCJ7eyBpY29uIH19IGljb25cIiAoY2xpY2spPVwib25DYXJldENsaWNrKCRldmVudClcIj48L2k+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNMYWJlbHNcIj5cbjwhLS0gTXVsdGktc2VsZWN0IGxhYmVscyAtLT5cbiAgICA8c3VpLW11bHRpLXNlbGVjdC1sYWJlbCAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2Ygc2VsZWN0ZWRPcHRpb25zO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZXJdPVwiY29uZmlndXJlZEZvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIm9wdGlvblRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVzZWxlY3RlZCk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9zdWktbXVsdGktc2VsZWN0LWxhYmVsPlxuPC9uZy1jb250YWluZXI+XG5cbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gSGVscGVyIHRleHQgLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiXG4gICAgIFtjbGFzcy5kZWZhdWx0XT1cImhhc0xhYmVsc1wiXG4gICAgIFtjbGFzcy5maWx0ZXJlZF09XCIhIXF1ZXJ5ICYmICFpc1NlYXJjaEV4dGVybmFsXCI+XG4gICAgXG4gICAgPCEtLSBQbGFjZWhvbGRlciB0ZXh0IC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNMYWJlbHM7IGVsc2Ugc2VsZWN0ZWRCbG9ja1wiPnt7IHBsYWNlaG9sZGVyIH19PC9uZy1jb250YWluZXI+XG4gICAgXG4gICAgPCEtLSBTdW1tYXJ5IHNob3duIHdoZW4gbGFiZWxzIGFyZSBoaWRkZW4gLS0+XG4gICAgPG5nLXRlbXBsYXRlICNzZWxlY3RlZEJsb2NrPiB7eyBzZWxlY3RlZE1lc3NhZ2UgfX08L25nLXRlbXBsYXRlPlxuPC9kaXY+XG5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cInRydWVcIj5cblxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT0gMCBcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFtYXhTZWxlY3RlZFJlYWNoZWRcIiBjbGFzcz1cIm1lc3NhZ2VcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzTWVzc2FnZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbWF4U2VsZWN0ZWRNZXNzYWdlIH19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgaW5wdXQuc2VhcmNoIHtcbiAgICB3aWR0aDogMTJlbSAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFVbXT4ge1xuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnM6VFtdO1xuICAgIC8vIFN0b3JlcyB0aGUgdmFsdWVzIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgaXQgY2FuIGJlIG1hdGNoZWQgdG8gYW4gb3B0aW9uIGZyb20gYG9wdGlvbnNgLlxuICAgIHByaXZhdGUgX3dyaXR0ZW5PcHRpb25zPzpVW107XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zQ2hhbmdlOkV2ZW50RW1pdHRlcjxVW10+O1xuXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZE9wdGlvbnMoKTpUW10ge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3RlZFJlYWNoZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc2VsZWN0aW9ucywgdGhlbiBlbXB0eSB0aGUgcmVzdWx0cyBjb21wbGV0ZWx5LlxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0czpUW10gPSB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgdGhlIHNlYXJjaCByZXN1bHRzIFxcIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIociA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maW5kKG8gPT4gciA9PT0gbykgPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkT3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYXNMYWJlbHM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBoYXNMYWJlbHMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0xhYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc0xhYmVscyhoYXNMYWJlbHM6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNMYWJlbHMgPSBoYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyIHx8IHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4U2VsZWN0ZWQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBtYXhTZWxlY3RlZFJlYWNoZWQoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBtYXhpbXVtIHRoZW4gd2UgY2FuIGltbWVkaWF0ZWx5IHJldHVybi5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSB0aGlzLm1heFNlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRNZXNzYWdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5tYXhTZWxlY3RlZE1lc3NhZ2UsXG4gICAgICAgICAgICBbW1wibWF4XCIsIHRoaXMubWF4U2VsZWN0ZWQudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkuc2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcImNvdW50XCIsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aC50b1N0cmluZygpXV0pO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm11bHRpcGxlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZiwgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGxvY2FsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVW10+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNMYWJlbHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbnMgc3RpbGwgZXhpc3QuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdlcmUgdmFsdWVzIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgdGhlIG9wdGlvbnMgaGFkIGJlZW4gbG9hZGVkLCB0aGlzIHJ1bnMgdG8gZml4IGl0LlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl93cml0dGVuT3B0aW9uc1xuICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgIC5tYXAodiA9PiB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHYpISlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSB0aGlzLl93cml0dGVuT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9ICF0aGlzLmhhc0xhYmVscyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFF1ZXJ5KGZhbHNlKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZXM6VVtdKTp2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlcyB0byBvcHRpb25zLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0aWFsTG9va3VwKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gaXRlbXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2FjaGUgdGhlIHdyaXR0ZW4gdmFsdWUgZm9yIHdoZW4gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIG9wdGlvbnMgdG8gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgb3B0aW9ucyBcXCB7b3B0aW9ufS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maWx0ZXIoc28gPT4gc28gIT09IG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5CYWNrc3BhY2UgJiYgdGhpcy5xdWVyeSA9PT0gXCJcIiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBEZXNlbGVjdCB0aGUgcmlnaHRtb3N0IG9wdGlvbiB3aGVuIHRoZSB1c2VyIHByZXNzZXMgYmFja3NwYWNlIGluIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKHRoaXMuc2VsZWN0ZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVmFsdWUgYWNjZXNzb3IgZGlyZWN0aXZlIGZvciB0aGUgc2VsZWN0IHRvIHN1cHBvcnQgbmdNb2RlbC5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3RcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKHNlbGVjdGVkT3B0aW9uc0NoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yPFQsIFU+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxVW10sIFN1aU11bHRpU2VsZWN0PFQsIFU+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlNdWx0aVNlbGVjdDxULCBVPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=