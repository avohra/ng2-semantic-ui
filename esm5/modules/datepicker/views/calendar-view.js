/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input, QueryList, ViewChildren } from "@angular/core";
import { KeyCode } from "../../../misc/util/internal";
import { SuiCalendarItem } from "../directives/calendar-item";
import { CalendarService } from "../services/calendar.service";
/** @enum {number} */
var CalendarViewType = {
    Year: 0,
    Month: 1,
    Date: 2,
    Hour: 3,
    Minute: 4,
};
export { CalendarViewType };
CalendarViewType[CalendarViewType.Year] = 'Year';
CalendarViewType[CalendarViewType.Month] = 'Month';
CalendarViewType[CalendarViewType.Date] = 'Date';
CalendarViewType[CalendarViewType.Hour] = 'Hour';
CalendarViewType[CalendarViewType.Minute] = 'Minute';
/**
 * @abstract
 */
var CalendarView = /** @class */ (function () {
    function CalendarView(renderer, viewType, ranges) {
        var _this = this;
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", function (e) { return _this.onDocumentKeyDown(e); });
    }
    Object.defineProperty(CalendarView.prototype, "service", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            var _this = this;
            this._service = service;
            this.ranges.loadService(service);
            this.service.onManualUpdate = function () {
                _this.ranges.refresh();
                delete _this._highlightedItem;
                _this.autoHighlight();
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "currentDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.currentDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.selectedDate;
        },
        enumerable: true,
        configurable: true
    });
    // Template Methods
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarView.prototype.setDate = 
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.service.changeDate(item.date, this._type);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        this.service.zoomOut(this._type);
    };
    // Keyboard Control
    // Keyboard Control
    /**
     * @return {?}
     */
    CalendarView.prototype.ngAfterViewInit = 
    // Keyboard Control
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderedItems.changes.subscribe(function () { return _this.onRenderedItemsChanged(); });
        this.onRenderedItemsChanged();
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.onRenderedItemsChanged = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderedItems.forEach(function (i) {
            return i.onFocussed.subscribe(function (hasFocus) {
                if (hasFocus) {
                    _this.highlightItem(i.item);
                }
            });
        });
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.autoHighlight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        /** @type {?} */
        var initiallyHighlighted = this.ranges.current.items.find(function (i) { return _this.ranges.dateComparer.equal(i.date, date); });
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarView.prototype.highlightItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this._renderedItems.forEach(function (i) { return i.hasFocus = false; });
            /** @type {?} */
            var rendered = this._renderedItems.find(function (ri) { return ri.item === item; });
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarView.prototype.onDocumentKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        /** @type {?} */
        var index = this.ranges.current.findIndex(this._highlightedItem);
        /** @type {?} */
        var isMovingForward = true;
        /** @type {?} */
        var delta = 0;
        switch (e.keyCode) {
            case KeyCode.Right:
                delta += 1;
                break;
            case KeyCode.Left:
                delta -= 1;
                isMovingForward = false;
                break;
            case KeyCode.Down:
                delta += this.ranges.columns;
                break;
            case KeyCode.Up:
                delta -= this.ranges.columns;
                isMovingForward = false;
                break;
            default:
                return;
        }
        // Stop these keypresses being captured elsewhere.
        e.preventDefault();
        /** @type {?} */
        var nextItem = this.ranges.current.items[index + delta];
        if (nextItem && nextItem.isDisabled) {
            return;
        }
        if (nextItem && !nextItem.isOutsideRange) {
            return this.highlightItem(nextItem);
        }
        if (nextItem && nextItem.isOutsideRange) {
            if (index + delta >= this.ranges.current.inRange.length) {
                isMovingForward = true;
            }
        }
        if (!nextItem) {
            /** @type {?} */
            var adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            /** @type {?} */
            var nextItems = this.ranges.calc(isMovingForward).inRange;
            if (isMovingForward) {
                adjustedIndex -= this.ranges.current.inRange.length;
            }
            else {
                adjustedIndex += nextItems.length;
            }
            nextItem = nextItems[adjustedIndex + delta];
            if (nextItem.isDisabled) {
                return;
            }
        }
        this.ranges.move(isMovingForward);
        this._highlightedItem = this.ranges.current.find(nextItem);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._documentKeyDownListener();
    };
    CalendarView.propDecorators = {
        _renderedItems: [{ type: ViewChildren, args: [SuiCalendarItem,] }],
        service: [{ type: Input }]
    };
    return CalendarView;
}());
export { CalendarView };
if (false) {
    /** @type {?} */
    CalendarView.prototype._type;
    /** @type {?} */
    CalendarView.prototype._service;
    /** @type {?} */
    CalendarView.prototype._renderedItems;
    /** @type {?} */
    CalendarView.prototype._highlightedItem;
    /** @type {?} */
    CalendarView.prototype.ranges;
    /** @type {?} */
    CalendarView.prototype._documentKeyDownListener;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9jYWxlbmRhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXFELE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0lBSTNELE9BQVE7SUFDUixRQUFTO0lBQ1QsT0FBUTtJQUNSLE9BQVE7SUFDUixTQUFVOzs7Ozs7Ozs7OztBQUlkO0lBcUNJLHNCQUFZLFFBQWtCLEVBQUUsUUFBeUIsRUFBRSxNQUEyQjtRQUF0RixpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBbENELHNCQUNXLGlDQUFPOzs7O1FBWWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFmRCxVQUNtQixPQUF1QjtZQUQxQyxpQkFXQztZQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FB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LG1CQUFDO0NBQUEsQUEvS0QsSUErS0M7U0EvS3FCLFlBQVk7OztJQUM5Qiw2QkFBK0I7O0lBQy9CLGdDQUFpQzs7SUFFakMsc0NBQ2tEOztJQUNsRCx3Q0FBdUM7O0lBbUJ2Qyw4QkFBbUM7O0lBVW5DLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiJdfQ==