/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input, QueryList, ViewChildren } from "@angular/core";
import { KeyCode } from "../../../misc/util/internal";
import { SuiCalendarItem } from "../directives/calendar-item";
import { CalendarService } from "../services/calendar.service";
/** @enum {number} */
const CalendarViewType = {
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
export class CalendarView {
    /**
     * @param {?} renderer
     * @param {?} viewType
     * @param {?} ranges
     */
    constructor(renderer, viewType, ranges) {
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", (e) => this.onDocumentKeyDown(e));
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set service(service) {
        this._service = service;
        this.ranges.loadService(service);
        this.service.onManualUpdate = () => {
            this.ranges.refresh();
            delete this._highlightedItem;
            this.autoHighlight();
        };
    }
    /**
     * @return {?}
     */
    get service() {
        return this._service;
    }
    /**
     * @return {?}
     */
    get currentDate() {
        return this.service.currentDate;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this.service.selectedDate;
    }
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    setDate(item) {
        this.service.changeDate(item.date, this._type);
    }
    /**
     * @return {?}
     */
    zoomOut() {
        this.service.zoomOut(this._type);
    }
    // Keyboard Control
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderedItems.changes.subscribe(() => this.onRenderedItemsChanged());
        this.onRenderedItemsChanged();
    }
    /**
     * @return {?}
     */
    onRenderedItemsChanged() {
        this._renderedItems.forEach(i => i.onFocussed.subscribe((hasFocus) => {
            if (hasFocus) {
                this.highlightItem(i.item);
            }
        }));
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    }
    /**
     * @return {?}
     */
    autoHighlight() {
        /** @type {?} */
        let date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        /** @type {?} */
        const initiallyHighlighted = this.ranges.current.items.find(i => this.ranges.dateComparer.equal(i.date, date));
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    highlightItem(item) {
        if (item) {
            this._renderedItems.forEach(i => i.hasFocus = false);
            /** @type {?} */
            const rendered = this._renderedItems.find(ri => ri.item === item);
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyDown(e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        /** @type {?} */
        const index = this.ranges.current.findIndex(this._highlightedItem);
        /** @type {?} */
        let isMovingForward = true;
        /** @type {?} */
        let delta = 0;
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
        let nextItem = this.ranges.current.items[index + delta];
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
            let adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            /** @type {?} */
            const nextItems = this.ranges.calc(isMovingForward).inRange;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._documentKeyDownListener();
    }
}
CalendarView.propDecorators = {
    _renderedItems: [{ type: ViewChildren, args: [SuiCalendarItem,] }],
    service: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9jYWxlbmRhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXFELE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0lBSTNELE9BQVE7SUFDUixRQUFTO0lBQ1QsT0FBUTtJQUNSLE9BQVE7SUFDUixTQUFVOzs7Ozs7Ozs7OztBQUlkLE1BQU07Ozs7OztJQXFDRixZQUFZLFFBQWtCLEVBQUUsUUFBeUIsRUFBRSxNQUEyQjtRQUNsRixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzSCxDQUFDOzs7OztJQWxDRCxJQUNXLE9BQU8sQ0FBQyxPQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV0QixPQUFP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LE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztrQkFFbEUsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU87WUFFM0QsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGFBQWEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxRQUFRLEdBQUcsU0FBUyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUU1QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OzZCQTFLQSxZQUFZLFNBQUMsZUFBZTtzQkFJNUIsS0FBSzs7OztJQVBOLDZCQUErQjs7SUFDL0IsZ0NBQWlDOztJQUVqQyxzQ0FDa0Q7O0lBQ2xELHdDQUF1Qzs7SUFtQnZDLDhCQUFtQzs7SUFVbkMsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0sIFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyVmlld1R5cGUge1xuICAgIFllYXIgPSAwLFxuICAgIE1vbnRoID0gMSxcbiAgICBEYXRlID0gMixcbiAgICBIb3VyID0gMyxcbiAgICBNaW51dGUgPSA0XG59XG5leHBvcnQgdHlwZSBDYWxlbmRhclZpZXdSZXN1bHQgPSBbRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZV07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYWxlbmRhclZpZXcgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3R5cGU6Q2FsZW5kYXJWaWV3VHlwZTtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIEBWaWV3Q2hpbGRyZW4oU3VpQ2FsZW5kYXJJdGVtKVxuICAgIHByaXZhdGUgX3JlbmRlcmVkSXRlbXM6UXVlcnlMaXN0PFN1aUNhbGVuZGFySXRlbT47XG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRJdGVtPzpDYWxlbmRhckl0ZW07XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5yYW5nZXMubG9hZFNlcnZpY2Uoc2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLm9uTWFudWFsVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYW5nZXMucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtO1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6Q2FsZW5kYXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIHB1YmxpYyBnZXQgY3VycmVudERhdGUoKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kb2N1bWVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCB2aWV3VHlwZTpDYWxlbmRhclZpZXdUeXBlLCByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZpZXdUeXBlO1xuICAgICAgICB0aGlzLnJhbmdlcyA9IHJhbmdlcztcblxuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwia2V5ZG93blwiLCAoZTpLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRG9jdW1lbnRLZXlEb3duKGUpKTtcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZSBNZXRob2RzXG5cbiAgICBwdWJsaWMgc2V0RGF0ZShpdGVtOkNhbGVuZGFySXRlbSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VEYXRlKGl0ZW0uZGF0ZSwgdGhpcy5fdHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnpvb21PdXQodGhpcy5fdHlwZSk7XG4gICAgfVxuXG4gICAgLy8gS2V5Ym9hcmQgQ29udHJvbFxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5vblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+XG4gICAgICAgICAgICBpLm9uRm9jdXNzZWQuc3Vic2NyaWJlKChoYXNGb2N1czpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbShpLml0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXRvSGlnaGxpZ2h0KCk6dm9pZCB7XG4gICAgICAgIGxldCBkYXRlID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5yYW5nZXMuY3VycmVudC5jb250YWluc0RhdGUodGhpcy5zZWxlY3RlZERhdGUpID8gdGhpcy5zZWxlY3RlZERhdGUgOiB0aGlzLmN1cnJlbnREYXRlO1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbS5kYXRlKSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuX2hpZ2hsaWdodGVkSXRlbS5kYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zLmZpbmQoaSA9PiB0aGlzLnJhbmdlcy5kYXRlQ29tcGFyZXIuZXF1YWwoaS5kYXRlLCBkYXRlKSk7XG4gICAgICAgIGlmIChpbml0aWFsbHlIaWdobGlnaHRlZCAmJiAhaW5pdGlhbGx5SGlnaGxpZ2h0ZWQuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gaW5pdGlhbGx5SGlnaGxpZ2h0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZ2hsaWdodEl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGkgPT4gaS5oYXNGb2N1cyA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gdGhpcy5fcmVuZGVyZWRJdGVtcy5maW5kKHJpID0+IHJpLml0ZW0gPT09IGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkICYmICFyZW5kZXJlZC5oYXNGb2N1cykge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRLZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9oaWdobGlnaHRlZEl0ZW0gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kSW5kZXgodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgICAgbGV0IGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgIGxldCBkZWx0YSA9IDA7XG5cbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxlZnQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgLT0gMTtcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIGRlbHRhICs9IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgZGVsdGEgLT0gdGhpcy5yYW5nZXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcCB0aGVzZSBrZXlwcmVzc2VzIGJlaW5nIGNhcHR1cmVkIGVsc2V3aGVyZS5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXh0SXRlbSA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuaXRlbXNbaW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmIG5leHRJdGVtLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiAhbmV4dEl0ZW0uaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodEl0ZW0obmV4dEl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmIG5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggKyBkZWx0YSA+PSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV4dEl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZGp1c3RlZEluZGV4ID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kSW5kZXgodGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW1zID0gdGhpcy5yYW5nZXMuY2FsYyhpc01vdmluZ0ZvcndhcmQpLmluUmFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChpc01vdmluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4IC09IHRoaXMucmFuZ2VzLmN1cnJlbnQuaW5SYW5nZS5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkanVzdGVkSW5kZXggKz0gbmV4dEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dEl0ZW0gPSBuZXh0SXRlbXNbYWRqdXN0ZWRJbmRleCArIGRlbHRhXTtcblxuICAgICAgICAgICAgaWYgKG5leHRJdGVtLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhbmdlcy5tb3ZlKGlzTW92aW5nRm9yd2FyZCk7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZChuZXh0SXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxufVxuIl19