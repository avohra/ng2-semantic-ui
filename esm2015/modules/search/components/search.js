/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, HostBinding, Input, HostListener, EventEmitter, Output, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util } from "../../../misc/util/internal";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SearchService } from "../services/search.service";
/**
 * @record
 * @template T
 */
export function IResultContext() { }
if (false) {
    /** @type {?} */
    IResultContext.prototype.query;
}
/**
 * @template T
 */
export class SuiSearch {
    /**
     * @param {?} _element
     * @param {?} renderer
     * @param {?} _localizationService
     */
    constructor(_element, renderer, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this.hasClasses = true;
        this.tabindex = 0;
        this.hasIcon = true;
        this.retainSelectedResult = true;
        this.searchDelay = 200;
        this.maxResults = 7;
        this.onResultSelected = new EventEmitter();
        this.transition = "scale";
        this.transitionDuration = 200;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.dropdownService.isOpen;
    }
    // Gets & sets the placeholder text displayed inside the text input.
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.placeholder;
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
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @return {?}
     */
    get query() {
        return this.searchService.query;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        this.selectedResult = undefined;
        // Initialise a delayed search.
        this.searchService.updateQueryDelayed(query, () => 
        // Set the results open state depending on whether a query has been entered.
        this.dropdownService.setOpenState(this.searchService.query.length > 0));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        if (options) {
            this.searchService.options = options;
        }
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
        }
    }
    /**
     * @param {?} lookupFn
     * @return {?}
     */
    set optionsLookup(lookupFn) {
        this.searchService.optionsLookup = lookupFn;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set optionsField(field) {
        this.searchService.optionsField = field;
    }
    /**
     * @return {?}
     */
    get resultFormatter() {
        if (this._resultFormatter) {
            return this._resultFormatter;
        }
        else if (this.searchService.optionsLookup) {
            return r => this.readValue(r);
        }
        else {
            return (r, q) => this.searchService.highlightMatches(this.readValue(r), q);
        }
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set resultFormatter(formatter) {
        this._resultFormatter = formatter;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
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
    get results() {
        return this.searchService.results.slice(0, this.maxResults);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._menu.service = this.dropdownService;
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().search;
    }
    // Selects a result.
    /**
     * @param {?} result
     * @return {?}
     */
    select(result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.open();
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    }
    // Reads the specified field from an item.
    /**
     * @param {?} object
     * @return {?}
     */
    readValue(object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    }
}
SuiSearch.decorators = [
    { type: Component, args: [{
                selector: "sui-search",
                template: `
<div class="ui input" [class.icon]="hasIcon" (click)="onClick($event)">
    <input class="prompt" type="text" [attr.placeholder]="placeholder" autocomplete="off" [(ngModel)]="query">
    <i *ngIf="hasIcon" class="search icon"></i>
</div>
<div class="results"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     menuSelectedItemClass="active">

    <sui-search-result *ngFor="let r of results"
                       class="item"
                       [value]="r"
                       [query]="query"
                       [formatter]="resultFormatter"
                       [template]="resultTemplate"
                       (click)="select(r)"></sui-search-result>

    <div *ngIf="results.length == 0" class="message empty">
        <div class="header">{{ localeValues.noResults.header }}</div>
        <div class="description">{{ localeValues.noResults.message }}</div>
    </div>
</div>
`,
                styles: [`
/* Ensures results div has margin. */
:host {
    display: block;
    outline: 0;
}

/* Fixes positioning when results are pushed above the search. */
.results {
    margin-bottom: .5em;
}
`]
            },] },
];
SuiSearch.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SuiLocalizationService }
];
SuiSearch.propDecorators = {
    _menu: [{ type: ViewChild, args: [SuiDropdownMenu,] }],
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.search",] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    hasIcon: [{ type: Input }],
    placeholder: [{ type: Input }],
    options: [{ type: Input }],
    optionsFilter: [{ type: Input }],
    optionsLookup: [{ type: Input }],
    optionsField: [{ type: Input }],
    resultFormatter: [{ type: Input }],
    resultTemplate: [{ type: Input }],
    retainSelectedResult: [{ type: Input }],
    searchDelay: [{ type: Input }],
    isSearching: [{ type: HostBinding, args: ["class.loading",] }],
    maxResults: [{ type: Input }],
    onResultSelected: [{ type: Output, args: ["resultSelected",] }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    onFocusIn: [{ type: HostListener, args: ["focusin",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiSearch.prototype.dropdownService;
    /** @type {?} */
    SuiSearch.prototype.searchService;
    /** @type {?} */
    SuiSearch.prototype._menu;
    /** @type {?} */
    SuiSearch.prototype.hasClasses;
    /** @type {?} */
    SuiSearch.prototype.tabindex;
    /** @type {?} */
    SuiSearch.prototype.hasIcon;
    /** @type {?} */
    SuiSearch.prototype._placeholder;
    /** @type {?} */
    SuiSearch.prototype._localeValues;
    /** @type {?} */
    SuiSearch.prototype.localeOverrides;
    /** @type {?} */
    SuiSearch.prototype._resultFormatter;
    /** @type {?} */
    SuiSearch.prototype.resultTemplate;
    /** @type {?} */
    SuiSearch.prototype.retainSelectedResult;
    /** @type {?} */
    SuiSearch.prototype.maxResults;
    /** @type {?} */
    SuiSearch.prototype.selectedResult;
    /** @type {?} */
    SuiSearch.prototype.onResultSelected;
    /** @type {?} */
    SuiSearch.prototype.transition;
    /** @type {?} */
    SuiSearch.prototype.transitionDuration;
    /** @type {?} */
    SuiSearch.prototype._element;
    /** @type {?} */
    SuiSearch.prototype._localizationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWlCLFlBQVksRUFDckUsWUFBWSxFQUFFLE1BQU0sRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBb0MsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBeUMsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRzNELG9DQUVDOzs7SUFERywrQkFBYTs7Ozs7QUEyQ2pCLE1BQU07Ozs7OztJQXNJRixZQUFvQixRQUFtQixFQUFFLFFBQWtCLEVBQVUsb0JBQTJDO1FBQTVGLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBOEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUM1RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxD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QUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdCYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Q0FXWixDQUFDO2FBQ0Q7OztZQW5Eb0MsVUFBVTtZQUFlLFNBQVM7WUFJdkIsc0JBQXNCOzs7b0JBb0RqRSxTQUFTLFNBQUMsZUFBZTt5QkFLekIsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGNBQWM7dUJBRzFCLFdBQVcsU0FBQyxlQUFlO3VCQUczQixXQUFXLFNBQUMsY0FBYztzQkFNMUIsS0FBSzswQkFNTCxLQUFLO3NCQTZCTCxLQUFLOzRCQU9MLEtBQUs7NEJBT0wsS0FBSzsyQkFLTCxLQUFLOzhCQWlCTCxLQUFLOzZCQUtMLEtBQUs7bUNBR0wsS0FBSzswQkFHTCxLQUFLOzBCQUtMLFdBQVcsU0FBQyxlQUFlO3lCQUszQixLQUFLOytCQVdMLE1BQU0sU0FBQyxnQkFBZ0I7eUJBR3ZCLEtBQUs7aUNBR0wsS0FBSzt3QkFnREwsWUFBWSxTQUFDLFNBQVM7eUJBY3RCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFoTXBDLG9DQUF1Qzs7SUFDdkMsa0NBQXlDOztJQUV6QywwQkFDOEI7O0lBSTlCLCtCQUVtQzs7SUFFbkMsNkJBQ2dDOztJQVFoQyw0QkFDdUI7O0lBRXZCLGlDQUE0Qjs7SUFZNUIsa0NBQTBDOztJQUUxQyxvQ0FBNkQ7O0lBMEM3RCxxQ0FBb0Q7O0lBaUJwRCxtQ0FDcUQ7O0lBRXJELHlDQUNvQzs7SUFZcEMsK0JBQ3lCOztJQU96QixtQ0FBeUI7O0lBR3pCLHFDQUN3Qzs7SUFFeEMsK0JBQ3lCOztJQUV6Qix1Q0FDaUM7O0lBRXJCLDZCQUEyQjs7SUFBc0IseUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIElucHV0LCBBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgSVRlbXBsYXRlUmVmQ29udGV4dCwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlYXJjaExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0Q29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5OnN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgaW5wdXRcIiBbY2xhc3MuaWNvbl09XCJoYXNJY29uXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cInByb21wdFwiIHR5cGU9XCJ0ZXh0XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XG4gICAgPGkgKm5nSWY9XCJoYXNJY29uXCIgY2xhc3M9XCJzZWFyY2ggaWNvblwiPjwvaT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc3VsdHNcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M9XCJhY3RpdmVcIj5cblxuICAgIDxzdWktc2VhcmNoLXJlc3VsdCAqbmdGb3I9XCJsZXQgciBvZiByZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cInJlc3VsdEZvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJyZXN1bHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QocilcIj48L3N1aS1zZWFyY2gtcmVzdWx0PlxuXG4gICAgPGRpdiAqbmdJZj1cInJlc3VsdHMubGVuZ3RoID09IDBcIiBjbGFzcz1cIm1lc3NhZ2UgZW1wdHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMubWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEVuc3VyZXMgcmVzdWx0cyBkaXYgaGFzIG1hcmdpbi4gKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4vKiBGaXhlcyBwb3NpdGlvbmluZyB3aGVuIHJlc3VsdHMgYXJlIHB1c2hlZCBhYm92ZSB0aGUgc2VhcmNoLiAqL1xuLnJlc3VsdHMge1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2g8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFQ+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIC8vIFNldHMgd2hldGhlciB0aGUgc2VhcmNoIGVsZW1lbnQgaGFzIGEgdmlzaWJsZSBzZWFyY2ggaWNvbi5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNJY29uOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICAvLyBHZXRzICYgc2V0cyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0ZXh0IGlucHV0LlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VhcmNoTG9jYWxlVmFsdWVzO1xuXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWFyY2hMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VhcmNoTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWFyY2hcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBhIGRlbGF5ZWQgc2VhcmNoLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXN1bHRzIG9wZW4gc3RhdGUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBxdWVyeSBoYXMgYmVlbiBlbnRlcmVkLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3VsdEZvcm1hdHRlcj86KHI6VCwgcTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0Rm9ybWF0dGVyKCk6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRGb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiByID0+IHRoaXMucmVhZFZhbHVlKHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChyLCBxKSA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLnJlYWRWYWx1ZShyKSwgcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVzdWx0Rm9ybWF0dGVyKGZvcm1hdHRlcjoocmVzdWx0OlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdEZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXN1bHRUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXRhaW5TZWxlY3RlZFJlc3VsdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFJlc3VsdHM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzLnNsaWNlKDAsIHRoaXMubWF4UmVzdWx0cyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzdWx0LlxuICAgIHB1YmxpYyBzZWxlY3RlZFJlc3VsdD86VDtcblxuICAgIC8vIEVtaXRzIHdoZW5ldmVyIGEgbmV3IHJlc3VsdCBpcyBzZWxlY3RlZC5cbiAgICBAT3V0cHV0KFwicmVzdWx0U2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25SZXN1bHRTZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHJlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBUPigpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnJldGFpblNlbGVjdGVkUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDIwMDtcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzID0gNztcblxuICAgICAgICB0aGlzLm9uUmVzdWx0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWFyY2g7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0cyBhIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0KHJlc3VsdDpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkLmVtaXQocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeSh0aGlzLnJlYWRWYWx1ZShyZXN1bHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgb3BlbiBvbiBjbGljayB3aGVuIHRoZXJlIGlzIGEgcXVlcnkgZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVhZHMgdGhlIHNwZWNpZmllZCBmaWVsZCBmcm9tIGFuIGl0ZW0uXG4gICAgcHVibGljIHJlYWRWYWx1ZShvYmplY3Q6VCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iamVjdCwgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCk7XG4gICAgfVxufVxuIl19