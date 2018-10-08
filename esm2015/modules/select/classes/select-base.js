/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ViewChild, HostBinding, HostListener, Input, ContentChildren, QueryList, TemplateRef, ContentChild, EventEmitter, Output } from "@angular/core";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SearchService } from "../../search/internal";
import { Util, HandledEvent, KeyCode } from "../../../misc/util/internal";
import { SuiSelectOption } from "../components/select-option";
import { SuiSelectSearch } from "../directives/select-search";
/**
 * @record
 * @template T
 */
export function IOptionContext() { }
if (false) {
    /** @type {?|undefined} */
    IOptionContext.prototype.query;
}
// We use generic type T to specify the type of the options we are working with,
// and U to specify the type of the property of the option used as the value.
/**
 * @abstract
 * @template T, U
 */
export class SuiSelectBase {
    /**
     * @param {?} _element
     * @param {?} _localizationService
     */
    constructor(_element, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new EventEmitter();
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.dropdownService.isOpen;
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this._menu.isVisible;
    }
    /**
     * @return {?}
     */
    get hasSearchClass() {
        return this.isSearchable && !this.isSearchExternal;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this.searchService.isSearching;
    }
    /**
     * @return {?}
     */
    get searchInput() {
        return this._manualSearch || this._internalSearch;
    }
    /**
     * @return {?}
     */
    get tabindex() {
        if (this.isDisabled) {
            // If disabled, remove from tabindex.
            return -1;
        }
        if (this.dropdownService.isOpen && this.isSearchExternal) {
            // If open & in menu search, remove from tabindex (as input always autofocusses).
            return -1;
        }
        if (this._tabIndex != undefined) {
            // If custom tabindex, default to that.
            return this._tabIndex;
        }
        if (this.hasSearchClass) {
            // If search input enabled, tab goes to input.
            return -1;
        }
        // Otherwise, return default of 0.
        return 0;
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.dropdownService.isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this.dropdownService.isDisabled = !!value;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        if (options) {
            this.searchService.options = options;
            this.optionsUpdateHook();
        }
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
            this.optionsUpdateHook();
        }
    }
    /**
     * @param {?} lookup
     * @return {?}
     */
    set optionsLookup(lookup) {
        if (lookup) {
            this.searchService.optionsLookup = lookup;
            this.optionsUpdateHook();
        }
    }
    /**
     * @return {?}
     */
    get filteredOptions() {
        return this.searchService.results;
    }
    // Deprecated
    /**
     * @return {?}
     */
    get availableOptions() {
        return this.filteredOptions;
    }
    /**
     * @return {?}
     */
    get query() {
        return this.isSearchable ? this.searchService.query : undefined;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (query != undefined) {
            this.queryUpdateHook();
            this.updateQuery(query);
            // Update the rendered text as query has changed.
            this._renderedOptions.forEach(ro => this.initialiseRenderedOption(ro));
            if (this.searchInput) {
                this.searchInput.query = query;
            }
        }
    }
    /**
     * @return {?}
     */
    get labelField() {
        return this.searchService.optionsField;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set labelField(field) {
        this.searchService.optionsField = field;
    }
    /**
     * @return {?}
     */
    get labelGetter() {
        // Helper function to retrieve the label from an item.
        return (obj) => {
            /** @type {?} */
            const label = Util.Object.readValue(obj, this.labelField);
            if (label != undefined) {
                return label.toString();
            }
            return "";
        };
    }
    /**
     * @return {?}
     */
    get valueGetter() {
        // Helper function to retrieve the value from an item.
        return (obj) => Util.Object.readValue(obj, this.valueField);
    }
    /**
     * @return {?}
     */
    get configuredFormatter() {
        if (this._optionFormatter) {
            return o => (/** @type {?} */ (this._optionFormatter))(o, this.isSearchable ? this.query : undefined);
        }
        else if (this.searchService.optionsLookup) {
            return o => this.labelGetter(o);
        }
        else {
            return o => this.searchService.highlightMatches(this.labelGetter(o), this.query || "");
        }
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set optionFormatter(formatter) {
        this._optionFormatter = formatter;
    }
    /**
     * @return {?}
     */
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe((q) => this.query = q);
            this.searchInput.onQueryKeyDown.subscribe((e) => this.onQueryInputKeydown(e));
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(() => this.onAvailableOptionsRendered());
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().select;
    }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    optionsUpdateHook() { }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    queryUpdateHook() { }
    /**
     * @param {?} query
     * @return {?}
     */
    updateQuery(query) {
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, () => this.dropdownService.setOpenState(true));
    }
    /**
     * @param {?=} delayed
     * @return {?}
     */
    resetQuery(delayed = true) {
        // The search delay is set to the transition duration to ensure results
        // aren't rendered as the select closes as that causes a sudden flash.
        if (delayed) {
            this.searchService.searchDelay = this._menu.menuTransitionDuration;
            this.searchService.updateQueryDelayed("");
        }
        else {
            this.searchService.updateQuery("");
        }
        if (this.searchInput) {
            this.searchInput.query = "";
        }
    }
    /**
     * @return {?}
     */
    onAvailableOptionsRendered() {
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(rs => rs.unsubscribe());
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(ro => {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(() => this.initialiseRenderedOption(ro));
            this._renderedSubscriptions.push(ro.onSelected.subscribe(() => this.selectOption(ro.value)));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(ro => ro.value);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    }
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    findOption(options, value) {
        // Tries to find an option in options array
        return options.find(o => value === this.valueGetter(o));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onCaretClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyPress(e) {
        if (e.keyCode === KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onQueryInputKeydown(event) { }
    /**
     * @return {?}
     */
    focus() {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    }
    // Helper that draws the provided template beside the provided ViewContainerRef.
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    drawTemplate(siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._renderedSubscriptions.forEach(s => s.unsubscribe());
    }
}
SuiSelectBase.propDecorators = {
    _menu: [{ type: ViewChild, args: [SuiDropdownMenu,] }],
    _renderedOptions: [{ type: ContentChildren, args: [SuiSelectOption, { descendants: true },] }],
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dropdown",] }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    isVisible: [{ type: HostBinding, args: ["class.visible",] }],
    isSearchable: [{ type: Input }],
    hasSearchClass: [{ type: HostBinding, args: ["class.search",] }],
    isSearching: [{ type: HostBinding, args: ["class.loading",] }],
    _internalSearch: [{ type: ViewChild, args: [SuiSelectSearch,] }],
    _manualSearch: [{ type: ContentChild, args: [SuiSelectSearch,] }],
    _tabIndex: [{ type: Input, args: ["tabindex",] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
    isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
    options: [{ type: Input }],
    optionsFilter: [{ type: Input }],
    optionsLookup: [{ type: Input }],
    labelField: [{ type: Input }],
    valueField: [{ type: Input }],
    optionTemplate: [{ type: Input }],
    optionFormatter: [{ type: Input }],
    icon: [{ type: Input }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    onTouched: [{ type: Output, args: ["touched",] }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }],
    onFocusIn: [{ type: HostListener, args: ["focusin",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }],
    onKeyPress: [{ type: HostListener, args: ["keypress", ["$event"],] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiSelectBase.prototype.dropdownService;
    /** @type {?} */
    SuiSelectBase.prototype.searchService;
    /** @type {?} */
    SuiSelectBase.prototype._menu;
    /** @type {?} */
    SuiSelectBase.prototype._renderedOptions;
    /** @type {?} */
    SuiSelectBase.prototype._renderedSubscriptions;
    /** @type {?} */
    SuiSelectBase.prototype.hasClasses;
    /** @type {?} */
    SuiSelectBase.prototype.isSearchable;
    /** @type {?} */
    SuiSelectBase.prototype.isSearchExternal;
    /** @type {?} */
    SuiSelectBase.prototype._internalSearch;
    /** @type {?} */
    SuiSelectBase.prototype._manualSearch;
    /** @type {?} */
    SuiSelectBase.prototype._tabIndex;
    /** @type {?} */
    SuiSelectBase.prototype.valueField;
    /** @type {?} */
    SuiSelectBase.prototype.optionTemplate;
    /** @type {?} */
    SuiSelectBase.prototype._optionFormatter;
    /** @type {?} */
    SuiSelectBase.prototype._localeValues;
    /** @type {?} */
    SuiSelectBase.prototype.localeOverrides;
    /** @type {?} */
    SuiSelectBase.prototype.icon;
    /** @type {?} */
    SuiSelectBase.prototype.transition;
    /** @type {?} */
    SuiSelectBase.prototype.transitionDuration;
    /** @type {?} */
    SuiSelectBase.prototype.onTouched;
    /** @type {?} */
    SuiSelectBase.prototype._element;
    /** @type {?} */
    SuiSelectBase.prototype._localizationService;
    /**
     * @abstract
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.selectOption = function (option) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC9jbGFzc2VzL3NlbGVjdC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFdBQVcsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ2pFLFdBQVcsRUFBb0IsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQ3RGLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBc0IsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUF1QixZQUFZLEVBQUUsT0FBTyxFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFFNUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFOUQsb0NBRUM7OztJQURHLCtCQUFjOzs7Ozs7OztBQUtsQixNQUFNOzs7OztJQWlORixZQUFvQixRQUFtQixFQUFZLG9CQUEyQztRQUExRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVkseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUMxRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDN0MsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQU8sSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENB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QUFXLFNBQUMsY0FBYzswQkFLMUIsV0FBVyxTQUFDLGVBQWU7OEJBSzNCLFNBQVMsU0FBQyxlQUFlOzRCQUd6QixZQUFZLFNBQUMsZUFBZTt3QkFPNUIsS0FBSyxTQUFDLFVBQVU7dUJBR2hCLFdBQVcsU0FBQyxlQUFlO3lCQXNCM0IsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLO3NCQVNMLEtBQUs7NEJBU0wsS0FBSzs0QkFTTCxLQUFLO3lCQW1DTCxLQUFLO3lCQW9CTCxLQUFLOzZCQVFMLEtBQUs7OEJBZUwsS0FBSzttQkFZTCxLQUFLO3lCQUdMLEtBQUs7aUNBR0wsS0FBSzt3QkFHTCxNQUFNLFNBQUMsU0FBUztzQkEySGhCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBYWhDLFlBQVksU0FBQyxTQUFTO3lCQVN0QixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQVFuQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQVNuQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBL1duQyx3Q0FBdUM7O0lBQ3ZDLHNDQUF5Qzs7SUFFekMsOEJBQ2dDOztJQUdoQyx5Q0FDeUQ7O0lBR3pELCtDQUE4Qzs7SUFHOUMsbUNBRW1DOztJQVluQyxxQ0FDNEI7O0lBRTVCLHlDQUFnQzs7SUFZaEMsd0NBQ3lDOztJQUV6QyxzQ0FDdUM7O0lBTXZDLGtDQUMwQjs7SUEyRzFCLG1DQUN5Qjs7SUFPekIsdUNBQ3FEOztJQUVyRCx5Q0FBcUQ7O0lBaUJyRCxzQ0FBMEM7O0lBQzFDLHdDQUE2RDs7SUFNN0QsNkJBQ21COztJQUVuQixtQ0FDeUI7O0lBRXpCLDJDQUNpQzs7SUFFakMsa0NBQ29DOztJQUV4QixpQ0FBMkI7O0lBQUUsNkNBQXFEOzs7Ozs7SUFxRzlGLDZEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlLCBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vLi4vc2VhcmNoL2ludGVybmFsXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlbGVjdExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbkNvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeT86c3RyaW5nO1xufVxuXG4vLyBXZSB1c2UgZ2VuZXJpYyB0eXBlIFQgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgb3B0aW9ucyB3ZSBhcmUgd29ya2luZyB3aXRoLFxuLy8gYW5kIFUgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIG9wdGlvbiB1c2VkIGFzIHRoZSB2YWx1ZS5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFU+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJvdGVjdGVkIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSByZW5kZXJlZCBzZWxlY3Qgb3B0aW9ucy4gKFJlbmRlcmVkIGJ5IHRoZSB1c2VyIHVzaW5nICpuZ0ZvcikuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlTZWxlY3RPcHRpb24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVkT3B0aW9uczpRdWVyeUxpc3Q8U3VpU2VsZWN0T3B0aW9uPFQ+PjtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzZWxlY3RlZCBldmVudHMgb24gdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRTdWJzY3JpcHRpb25zOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZHJvcGRvd25cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVudS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNTZWFyY2hhYmxlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXNTZWFyY2hFeHRlcm5hbDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIGdldCBoYXNTZWFyY2hDbGFzcygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgJiYgIXRoaXMuaXNTZWFyY2hFeHRlcm5hbDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX2ludGVybmFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNlbGVjdFNlYXJjaClcbiAgICBwcml2YXRlIF9tYW51YWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIHB1YmxpYyBnZXQgc2VhcmNoSW5wdXQoKTpTdWlTZWxlY3RTZWFyY2ggfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFudWFsU2VhcmNoIHx8IHRoaXMuX2ludGVybmFsU2VhcmNoO1xuICAgIH1cblxuICAgIEBJbnB1dChcInRhYmluZGV4XCIpXG4gICAgcHJpdmF0ZSBfdGFiSW5kZXg/Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgZ2V0IHRhYmluZGV4KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgZGlzYWJsZWQsIHJlbW92ZSBmcm9tIHRhYmluZGV4LlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgdGhpcy5pc1NlYXJjaEV4dGVybmFsKSB7XG4gICAgICAgICAgICAvLyBJZiBvcGVuICYgaW4gbWVudSBzZWFyY2gsIHJlbW92ZSBmcm9tIHRhYmluZGV4IChhcyBpbnB1dCBhbHdheXMgYXV0b2ZvY3Vzc2VzKS5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBjdXN0b20gdGFiaW5kZXgsIGRlZmF1bHQgdG8gdGhhdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNTZWFyY2hDbGFzcykge1xuICAgICAgICAgICAgLy8gSWYgc2VhcmNoIGlucHV0IGVuYWJsZWQsIHRhYiBnb2VzIHRvIGlucHV0LlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGRlZmF1bHQgb2YgMC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cDpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cDtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZE9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gRGVwcmVjYXRlZFxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkT3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWFyY2hhYmxlID8gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5IDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChxdWVyeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlVcGRhdGVIb29rKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcmVuZGVyZWQgdGV4dCBhcyBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHRoaXMuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKHJvKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxhYmVsRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxhYmVsRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxhYmVsR2V0dGVyKCk6KG9iajpUKSA9PiBzdHJpbmcge1xuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGxhYmVsIGZyb20gYW4gaXRlbS5cbiAgICAgICAgcmV0dXJuIChvYmo6VCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmosIHRoaXMubGFiZWxGaWVsZCk7XG4gICAgICAgICAgICBpZiAobGFiZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUZpZWxkOnN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgdmFsdWVHZXR0ZXIoKToob2JqOlQpID0+IFUge1xuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gYW4gaXRlbS5cbiAgICAgICAgcmV0dXJuIChvYmo6VCkgPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIFU+KG9iaiwgdGhpcy52YWx1ZUZpZWxkKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvcHRpb25UZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj47XG5cbiAgICBwcml2YXRlIF9vcHRpb25Gb3JtYXR0ZXI/OihvOlQsIHE/OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCBjb25maWd1cmVkRm9ybWF0dGVyKCk6KG9wdGlvbjpUKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9uRm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLl9vcHRpb25Gb3JtYXR0ZXIhKG8sIHRoaXMuaXNTZWFyY2hhYmxlID8gdGhpcy5xdWVyeSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMubGFiZWxHZXR0ZXIobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLmxhYmVsR2V0dGVyKG8pLCB0aGlzLnF1ZXJ5IHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbkZvcm1hdHRlcihmb3JtYXR0ZXI6KChvcHRpb246VCwgcXVlcnk/OnN0cmluZykgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklTZWxlY3RMb2NhbGVWYWx1ZXM7XG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWxlY3RMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VsZWN0TG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWxlY3RcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBAT3V0cHV0KFwidG91Y2hlZFwiKVxuICAgIHB1YmxpYyBvblRvdWNoZWQ6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgLy8gV2UgZG8gd2FudCBhbiBlbXB0eSBxdWVyeSB0byByZXR1cm4gYWxsIHJlc3VsdHMuXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IG5ldyBTZWFyY2hTZXJ2aWNlPFQsIFU+KHRydWUpO1xuXG4gICAgICAgIHRoaXMuaXNTZWFyY2hhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaWNvbiA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzbGlkZSBkb3duXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICAgICAgLy8gV2UgbWFudWFsbHkgc3BlY2lmeSB0aGUgbWVudSBpdGVtcyB0byB0aGUgbWVudSBiZWNhdXNlIHRoZSBAQ29udGVudENoaWxkcmVuIGRvZXNuJ3QgcGljayB1cCBvdXIgZHluYW1pY2FsbHkgcmVuZGVyZWQgaXRlbXMuXG4gICAgICAgIHRoaXMuX21lbnUuaXRlbXMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnM7XG4gICAgICAgIHRoaXMuX21lbnUucGFyZW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX21hbnVhbFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1NlYXJjaEV4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uUXVlcnlVcGRhdGVkLnN1YnNjcmliZSgocTpzdHJpbmcpID0+IHRoaXMucXVlcnkgPSBxKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeUtleURvd24uc3Vic2NyaWJlKChlOktleWJvYXJkRXZlbnQpID0+IHRoaXMub25RdWVyeUlucHV0S2V5ZG93bihlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBtdXN0IGNhbGwgdGhpcyBpbW1lZGlhdGVseSBhcyBjaGFuZ2VzIGRvZXNuJ3QgZmlyZSB3aGVuIHlvdSBzdWJzY3JpYmUuXG4gICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLnNlbGVjdDtcbiAgICB9XG5cbiAgICAvLyBIb29rIGlzIGhlcmUgc2luY2UgVHlwZXNjcmlwdCBkb2Vzbid0IHlldCBzdXBwb3J0IG92ZXJyaWRpbmcgZ2V0dGVycyAmIHNldHRlcnMgd2hpbGUgc3RpbGwgY2FsbGluZyB0aGUgc3VwZXJjbGFzcy5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICAvLyBIb29rIGlzIGhlcmUgc2luY2UgVHlwZXNjcmlwdCBkb2Vzbid0IHlldCBzdXBwb3J0IG92ZXJyaWRpbmcgZ2V0dGVycyAmIHNldHRlcnMgd2hpbGUgc3RpbGwgY2FsbGluZyB0aGUgc3VwZXJjbGFzcy5cbiAgICBwcm90ZWN0ZWQgcXVlcnlVcGRhdGVIb29rKCk6dm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcXVlcnkgdGhlbiBvcGVuIHRoZSBkcm9wZG93biwgYXMgYWZ0ZXIga2V5Ym9hcmQgaW5wdXQgaXQgc2hvdWxkIGFsd2F5cyBiZSBvcGVuLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkocXVlcnksICgpID0+XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNldFF1ZXJ5KGRlbGF5ZWQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICAvLyBUaGUgc2VhcmNoIGRlbGF5IGlzIHNldCB0byB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbiB0byBlbnN1cmUgcmVzdWx0c1xuICAgICAgICAvLyBhcmVuJ3QgcmVuZGVyZWQgYXMgdGhlIHNlbGVjdCBjbG9zZXMgYXMgdGhhdCBjYXVzZXMgYSBzdWRkZW4gZmxhc2guXG4gICAgICAgIGlmIChkZWxheWVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSB0aGlzLl9tZW51Lm1lbnVUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQucXVlcnkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gYWxsIHByZXZpb3VzIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzIG9uIGxhcmdlIHNlbGVjdHMuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHJzID0+IHJzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuZm9yRWFjaChybyA9PiB7XG4gICAgICAgICAgICAvLyBTbGlnaHRseSBkZWxheSBpbml0aWFsaXNhdGlvbiB0byBhdm9pZCBjaGFuZ2UgYWZ0ZXIgY2hlY2tlZCBlcnJvcnMuIFRPRE8gLSBsb29rIGludG8gYXZvaWRpbmcgdGhpcyFcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLnB1c2gocm8ub25TZWxlY3RlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZWxlY3RPcHRpb24ocm8udmFsdWUpKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIG5vIG9wdGlvbnMgaGF2ZSBiZWVuIHByb3ZpZGVkLCBhdXRvZ2VuZXJhdGUgdGhlbSBmcm9tIHRoZSByZW5kZXJlZCBvbmVzLlxuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID09PSAwICYmICF0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5fcmVuZGVyZWRPcHRpb25zLm1hcChybyA9PiByby52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBvcHRpb24udXNlc1RlbXBsYXRlID0gISF0aGlzLm9wdGlvblRlbXBsYXRlO1xuICAgICAgICBvcHRpb24uZm9ybWF0dGVyID0gdGhpcy5jb25maWd1cmVkRm9ybWF0dGVyO1xuXG4gICAgICAgIGlmIChvcHRpb24udXNlc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZW1wbGF0ZShvcHRpb24udGVtcGxhdGVTaWJsaW5nLCBvcHRpb24udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgZmluZE9wdGlvbihvcHRpb25zOlRbXSwgdmFsdWU6VSk6VCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIC8vIFRyaWVzIHRvIGZpbmQgYW4gb3B0aW9uIGluIG9wdGlvbnMgYXJyYXlcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZChvID0+IHZhbHVlID09PSB0aGlzLnZhbHVlR2V0dGVyKG8pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DYXJldENsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQgJiYgIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkcm9wZG93biBpcyBzZWFyY2hhYmxlLCBjbGlja2luZyBzaG91bGQga2VlcCBpdCBvcGVuLCBvdGhlcndpc2Ugd2UgdG9nZ2xlIHRoZSBvcGVuIHN0YXRlLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuaXNTZWFyY2hhYmxlID8gdHJ1ZSA6ICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4pO1xuXG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSBmb2N1cyB0aGUgc2VhcmNoIGlucHV0IHdoZW5ldmVyIGNsaWNraW5nIG9uIHRoZSBzZWxlY3QuXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5cHJlc3NcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleVByZXNzKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgIC8vIEVuYWJsZXMgc3VwcG9ydCBmb3IgZm9jdXNzaW5nIGFuZCBvcGVuaW5nIHdpdGggdGhlIGtleWJvYXJkIGFsb25lLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Eb3duKSB7XG5cbiAgICAgICAgICAgIC8vIEVuYWJsZXMgc3VwcG9ydCBmb3IgZm9jdXNzaW5nIGFuZCBvcGVuaW5nIHdpdGggdGhlIGtleWJvYXJkIGFsb25lLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlJbnB1dEtleWRvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGZvY3VzKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VhcmNoYWJsZSAmJiB0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICAvLyBGb2N1c3NlcyB0aGUgc2VhcmNoIGlucHV0IG9ubHkgd2hlbiBzZWFyY2hhYmxlLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciB0aGF0IGRyYXdzIHRoZSBwcm92aWRlZCB0ZW1wbGF0ZSBiZXNpZGUgdGhlIHByb3ZpZGVkIFZpZXdDb250YWluZXJSZWYuXG4gICAgcHJvdGVjdGVkIGRyYXdUZW1wbGF0ZShzaWJsaW5nUmVmOlZpZXdDb250YWluZXJSZWYsIHZhbHVlOlQpOnZvaWQge1xuICAgICAgICBzaWJsaW5nUmVmLmNsZWFyKCk7XG4gICAgICAgIC8vIFVzZSBvZiBgJGltcGxpY2l0YCBtZWFucyB1c2Ugb2YgPG5nLXRlbXBsYXRlIGxldC1vcHRpb24+IHN5bnRheCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgIHNpYmxpbmdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMub3B0aW9uVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdmFsdWUsXG4gICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==