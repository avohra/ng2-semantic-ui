/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Util } from "../../../misc/util/internal";
/**
 * @record
 * @template T
 */
function ICachedArray() { }
/**
 * @template T, U
 */
export class SearchService {
    /**
     * @param {?=} allowEmptyQuery
     */
    constructor(allowEmptyQuery = false) {
        this._options = [];
        this.optionsFilter = (os, q) => {
            // Convert the query string to a RegExp.
            /** @type {?} */
            const regex = this.toRegex(this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    .filter(o => Util.Object.readValue(o, this._optionsField)
                    .toString()
                    .match(regex));
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = options || [];
        // We cannot use both local & remote options simultaneously.
        this._optionsLookup = undefined;
        // Reset entire service with new options.
        this.reset();
    }
    /**
     * @return {?}
     */
    get optionsLookup() {
        return this._optionsLookup;
    }
    /**
     * @param {?} lookupFn
     * @return {?}
     */
    set optionsLookup(lookupFn) {
        this._optionsLookup = lookupFn;
        // As before, cannot use local & remote options simultaneously.
        this._options = [];
        this.reset();
    }
    /**
     * @return {?}
     */
    get hasItemLookup() {
        return !!this.optionsLookup && this.optionsLookup.length === 2;
    }
    /**
     * @return {?}
     */
    get optionsField() {
        return this._optionsField;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set optionsField(field) {
        this._optionsField = field;
        // We need to reset otherwise we would now be showing invalid search results.
        this.reset();
    }
    /**
     * @return {?}
     */
    get results() {
        return this._results;
    }
    /**
     * @return {?}
     */
    get query() {
        return this._query;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    // Updates the query after the specified search delay.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQueryDelayed(query, callback = () => { }) {
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(() => {
            this.updateQuery(query, callback);
        }, this.searchDelay);
    }
    // Updates the current search query.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQuery(query, callback = () => { }) {
        this._query = query;
        if (this._query === "" && !this.allowEmptyQuery) {
            // Don't update if the new query is empty (and we don't allow empty queries).
            // Don't reset so that when animating closed we don't get a judder.
            return callback();
        }
        if (this._resultsCache.hasOwnProperty(this._query)) {
            // If the query is already cached, make use of it.
            this._results = this._resultsCache[this._query];
            return callback();
        }
        if (this._optionsLookup) {
            this._isSearching = true;
            // Call the options lookup without a this context.
            /** @type {?} */
            const queryLookup = (/** @type {?} */ (this._optionsLookup.call(undefined, this._query)));
            queryLookup
                .then(results => {
                this._isSearching = false;
                this.updateResults(results);
                return callback();
            })
                .catch(error => {
                // Unset 'loading' state, and throw the returned error without updating the results.
                this._isSearching = false;
                return callback(error);
            });
            return;
        }
        /** @type {?} */
        const filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    }
    // Updates & caches the new set of results.
    /**
     * @param {?} results
     * @return {?}
     */
    updateResults(results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    }
    // tslint:disable-next-line:promise-function-async
    /**
     * @param {?} initial
     * @return {?}
     */
    initialLookup(initial) {
        if (initial instanceof Array) {
            return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
        }
        return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
    }
    // Converts a query string to regex without throwing an error.
    /**
     * @param {?} query
     * @return {?}
     */
    toRegex(query) {
        try {
            return new RegExp(query, "i");
        }
        catch (e) {
            return query;
        }
    }
    // Generates HTML for highlighted match text.
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    highlightMatches(text, query) {
        /** @type {?} */
        const regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, match => `<b>${match}</b>`);
        }
        return text;
    }
    // Resets the search back to a pristine state.
    /**
     * @return {?}
     */
    reset() {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    }
}
if (false) {
    /** @type {?} */
    SearchService.prototype._options;
    /** @type {?} */
    SearchService.prototype._optionsLookup;
    /** @type {?} */
    SearchService.prototype._optionsField;
    /** @type {?} */
    SearchService.prototype.optionsFilter;
    /** @type {?} */
    SearchService.prototype._results;
    /** @type {?} */
    SearchService.prototype._resultsCache;
    /** @type {?} */
    SearchService.prototype._query;
    /** @type {?} */
    SearchService.prototype.allowEmptyQuery;
    /** @type {?} */
    SearchService.prototype.searchDelay;
    /** @type {?} */
    SearchService.prototype._searchDelayTimeout;
    /** @type {?} */
    SearchService.prototype._isSearching;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQUduRCwyQkFBaUQ7Ozs7QUFFakQsTUFBTTs7OztJQTBFRixZQUFZLGtCQUEwQixLQUFLO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OztrQkFFckIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsd0RBQXdEO2dCQUN4RCwwRkFBMEY7Z0JBQzFGLE1BQU0sQ0FBQyxFQUFFO3FCQUVKLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO3FCQUMvRCxRQUFRLEVBQUU7cUJBQ1YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUVELDhDQUE4QztZQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUVGLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQXhGRCxJQUFXLE9BQU87UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEs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QUEwQjs7SUFFMUIsNENBQW1DOztJQUVuQyxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIExvb2t1cEZuUmVzdWx0LCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5pbnRlcmZhY2UgSUNhY2hlZEFycmF5PFQ+IHsgW3F1ZXJ5OnN0cmluZ106VFtdOyB9XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlPFQsIFU+IHtcbiAgICAvLyBTdG9yZXMgdGhlIGF2YWlsYWJsZSBvcHRpb25zLlxuICAgIHByaXZhdGUgX29wdGlvbnM6VFtdO1xuICAgIC8vIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygb3B0aW9ucy4gTXVzdCBiZSBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2UuXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0xvb2t1cD86TG9va3VwRm48VCwgVT47XG4gICAgLy8gRmllbGQgdGhhdCBvcHRpb25zIGFyZSBzZWFyY2hlZCAmIGRpc3BsYXllZCBvbi5cbiAgICBwcml2YXRlIF9vcHRpb25zRmllbGQ/OnN0cmluZztcbiAgICAvLyBGaWx0ZXJzIGEgbGlzdCBvZiBvcHRpb25zLlxuICAgIHB1YmxpYyBvcHRpb25zRmlsdGVyOkZpbHRlckZuPFQ+O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IFtdO1xuICAgICAgICAvLyBXZSBjYW5ub3QgdXNlIGJvdGggbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gUmVzZXQgZW50aXJlIHNlcnZpY2Ugd2l0aCBuZXcgb3B0aW9ucy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0xvb2t1cCgpOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNMb29rdXA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSBsb29rdXBGbjtcbiAgICAgICAgLy8gQXMgYmVmb3JlLCBjYW5ub3QgdXNlIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzSXRlbUxvb2t1cCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLm9wdGlvbnNMb29rdXAgJiYgdGhpcy5vcHRpb25zTG9va3VwLmxlbmd0aCA9PT0gMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc2V0IG90aGVyd2lzZSB3ZSB3b3VsZCBub3cgYmUgc2hvd2luZyBpbnZhbGlkIHNlYXJjaCByZXN1bHRzLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzOlRbXTtcbiAgICAvLyBDYWNoZSBvZiByZXN1bHRzLCBpbmRleGVkIGJ5IHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHNDYWNoZTpJQ2FjaGVkQXJyYXk8VD47XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdHMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeTpzdHJpbmc7XG4gICAgLy8gQWxsb3dzIHRoZSBlbXB0eSBxdWVyeSB0byBwcm9kdWNlIHJlc3VsdHMuXG4gICAgcHVibGljIGFsbG93RW1wdHlRdWVyeTpib29sZWFuO1xuICAgIC8vIEhvdyBsb25nIHRvIGRlbGF5IHRoZSBzZWFyY2ggZm9yIHdoZW4gdXNpbmcgdXBkYXRlUXVlcnlEZWxheWVkLiBTdG9yZWQgaW4gbXMuXG4gICAgcHVibGljIHNlYXJjaERlbGF5Om51bWJlcjtcbiAgICAvLyBTdG9yZXMgdGhlIHNlYXJjaCB0aW1lb3V0IGhhbmRsZSBzbyB3ZSBjYW4gY2FuY2VsIGl0LlxuICAgIHByaXZhdGUgX3NlYXJjaERlbGF5VGltZW91dDpudW1iZXI7XG4gICAgLy8gUHJvdmlkZXMgJ2xvYWRpbmcnIGZ1bmN0aW9uYWxpdHkuXG4gICAgcHJpdmF0ZSBfaXNTZWFyY2hpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uc0ZpbHRlciA9IChvcywgcSkgPT4ge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcXVlcnkgc3RyaW5nIHRvIGEgUmVnRXhwLlxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgodGhpcy5fcXVlcnkpO1xuXG4gICAgICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcmVzdWx0cyBpZiB0aGUgcXVlcnkgd2FzIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXZvaWRzIHRoZSByZXN1bHRzIHN1ZGRlbmx5IGJlY29taW5nIGVtcHR5IGlmIGFuIGludmFsaWQgcmVnZXggc3RyaW5nIGlzIGlucHV0dGVkLlxuICAgICAgICAgICAgICAgIHJldHVybiBvc1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgb24gdGhlIG9wdGlvbnMgd2l0aCBhIHN0cmluZyBtYXRjaCBvbiB0aGUgZmllbGQgd2UgYXJlIHRlc3RpbmcuXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobyA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvLCB0aGlzLl9vcHRpb25zRmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGNoKHJlZ2V4KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBzaW5jZSBpdCB3YXNuJ3QgYSB2YWxpZCByZWdleC5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIHJlc2V0LlxuICAgICAgICB0aGlzLmFsbG93RW1wdHlRdWVyeSA9IGFsbG93RW1wdHlRdWVyeTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBxdWVyeSBhZnRlciB0aGUgc3BlY2lmaWVkIHNlYXJjaCBkZWxheS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERlbGF5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgY3VycmVudCBzZWFyY2ggcXVlcnkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5ID09PSBcIlwiICYmICF0aGlzLmFsbG93RW1wdHlRdWVyeSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHRoZSBuZXcgcXVlcnkgaXMgZW1wdHkgKGFuZCB3ZSBkb24ndCBhbGxvdyBlbXB0eSBxdWVyaWVzKS5cbiAgICAgICAgICAgIC8vIERvbid0IHJlc2V0IHNvIHRoYXQgd2hlbiBhbmltYXRpbmcgY2xvc2VkIHdlIGRvbid0IGdldCBhIGp1ZGRlci5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VsdHNDYWNoZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLl9xdWVyeSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBxdWVyeSBpcyBhbHJlYWR5IGNhY2hlZCwgbWFrZSB1c2Ugb2YgaXQuXG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRzID0gdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XTtcblxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25zIGxvb2t1cCB3aXRob3V0IGEgdGhpcyBjb250ZXh0LlxuICAgICAgICAgICAgY29uc3QgcXVlcnlMb29rdXAgPSB0aGlzLl9vcHRpb25zTG9va3VwLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9xdWVyeSkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcblxuICAgICAgICAgICAgcXVlcnlMb29rdXBcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5zZXQgJ2xvYWRpbmcnIHN0YXRlLCBhbmQgdGhyb3cgdGhlIHJldHVybmVkIGVycm9yIHdpdGhvdXQgdXBkYXRpbmcgdGhlIHJlc3VsdHMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5vcHRpb25zRmlsdGVyLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9vcHRpb25zLCB0aGlzLl9xdWVyeSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzICYgY2FjaGVzIHRoZSBuZXcgc2V0IG9mIHJlc3VsdHMuXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXN1bHRzKHJlc3VsdHM6VFtdKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XSA9IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSByZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVKTpMb29rdXBGblJlc3VsdDxUPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VVtdKTpMb29rdXBGblJlc3VsdDxUW10+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVIHwgVVtdKTpMb29rdXBGblJlc3VsdDxUPiB8IExvb2t1cEZuUmVzdWx0PFRbXT4ge1xuICAgICAgICBpZiAoaW5pdGlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVVtdPikodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCBhcyBMb29rdXBGbjxULCBVPikodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUPjtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyB0byByZWdleCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgIHByaXZhdGUgdG9SZWdleChxdWVyeTpzdHJpbmcpOlJlZ0V4cCB8IHN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChxdWVyeSwgXCJpXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZXMgSFRNTCBmb3IgaGlnaGxpZ2h0ZWQgbWF0Y2ggdGV4dC5cbiAgICBwdWJsaWMgaGlnaGxpZ2h0TWF0Y2hlcyh0ZXh0OnN0cmluZywgcXVlcnk6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleChxdWVyeSk7XG4gICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgbWF0Y2ggPT4gYDxiPiR7bWF0Y2h9PC9iPmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlc2V0cyB0aGUgc2VhcmNoIGJhY2sgdG8gYSBwcmlzdGluZSBzdGF0ZS5cbiAgICBwcml2YXRlIHJlc2V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlID0ge307XG4gICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgfVxufVxuIl19