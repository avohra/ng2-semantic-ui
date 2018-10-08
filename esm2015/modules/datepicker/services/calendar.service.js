/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
/** @enum {number} */
const CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
export { CalendarMode };
CalendarMode[CalendarMode.DateOnly] = 'DateOnly';
CalendarMode[CalendarMode.TimeOnly] = 'TimeOnly';
CalendarMode[CalendarMode.Both] = 'Both';
export class CalendarService {
    /**
     * @param {?} config
     * @param {?} localeValues
     */
    constructor(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = () => { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
        config.updateBounds(this._selectedDate || this.currentDate);
    }
    /**
     * @return {?}
     */
    get inFinalView() {
        return this.currentView === this.config.mappings.finalView;
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
        if (date) {
            this._selectedDate = DateUtil.clone(date);
            this.currentDate = DateUtil.clone(date);
        }
        else {
            this._selectedDate = undefined;
        }
        this.config.updateBounds(this._selectedDate || this.currentDate);
        this.onManualUpdate();
    }
    /**
     * @return {?}
     */
    get minDate() {
        if (this._minDate && this.config.dateMinBound) {
            return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
        }
        return this._minDate || this.config.dateMinBound;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    set minDate(min) {
        this._minDate = min;
    }
    /**
     * @return {?}
     */
    get maxDate() {
        if (this._maxDate && this.config.dateMaxBound) {
            return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
        }
        return this._maxDate || this.config.dateMaxBound;
    }
    /**
     * @param {?} max
     * @return {?}
     */
    set maxDate(max) {
        this._maxDate = max;
    }
    /**
     * @return {?}
     */
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    set firstDayOfWeek(firstDayOfWeek) {
        if (firstDayOfWeek != undefined) {
            this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            /** @type {?} */
            let current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    }
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    changeDate(date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    }
    /**
     * @param {?} fromView
     * @return {?}
     */
    zoomOut(fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    }
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    updateView(mappings, fromView) {
        /** @type {?} */
        const mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    }
}
if (false) {
    /** @type {?} */
    CalendarService.prototype._config;
    /** @type {?} */
    CalendarService.prototype.currentView;
    /** @type {?} */
    CalendarService.prototype.currentDate;
    /** @type {?} */
    CalendarService.prototype._selectedDate;
    /** @type {?} */
    CalendarService.prototype._minDate;
    /** @type {?} */
    CalendarService.prototype._maxDate;
    /** @type {?} */
    CalendarService.prototype._firstDayOfWeek;
    /** @type {?} */
    CalendarService.prototype.onDateChange;
    /** @type {?} */
    CalendarService.prototype.onManualUpdate;
    /** @type {?} */
    CalendarService.prototype.localeValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0lBS25ELFdBQVk7SUFDWixXQUFZO0lBQ1osT0FBUTs7Ozs7O0FBR1osTUFBTTs7Ozs7SUEyRUYsWUFBWSxNQUFxQixFQUFTLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQVl2RSxtQkFBYyxHQUFjLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQVh4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUV2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFsRkQsSUFBVyxNQUFNO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxNQUFxQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFHRCxJQUFXLFdBQVc7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxD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LENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsUUFBZ0QsRUFBRSxRQUF5Qjs7Y0FDcEYsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQztDQUNKOzs7SUFsSUcsa0NBQStCOztJQVcvQixzQ0FBb0M7O0lBS3BDLHNDQUF3Qjs7SUFDeEIsd0NBQTRCOztJQWtCNUIsbUNBQXVCOztJQUN2QixtQ0FBdUI7O0lBd0J2QiwwQ0FBK0I7O0lBWS9CLHVDQUF1Qzs7SUFjdkMseUNBQTRDOztJQVpULHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuZXhwb3J0IGVudW0gQ2FsZW5kYXJNb2RlIHtcbiAgICBEYXRlT25seSA9IDAsXG4gICAgVGltZU9ubHkgPSAxLFxuICAgIEJvdGggPSAyXG59XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2NvbmZpZzpDYWxlbmRhckNvbmZpZztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6Q2FsZW5kYXJDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29uZmlnKGNvbmZpZzpDYWxlbmRhckNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIGNvbmZpZy51cGRhdGVCb3VuZHModGhpcy5fc2VsZWN0ZWREYXRlIHx8IHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50VmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBnZXQgaW5GaW5hbFZpZXcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3VycmVudERhdGU6RGF0ZTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWREYXRlKGRhdGU6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gRGF0ZVV0aWwuY2xvbmUoZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gRGF0ZVV0aWwuY2xvbmUoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVCb3VuZHModGhpcy5fc2VsZWN0ZWREYXRlIHx8IHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm9uTWFudWFsVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluRGF0ZT86RGF0ZTtcbiAgICBwcml2YXRlIF9tYXhEYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBtaW5EYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9taW5EYXRlICYmIHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgPiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQgPyB0aGlzLl9taW5EYXRlIDogdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlIHx8IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1pbkRhdGUobWluOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IG1pbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21heERhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSA8IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZCA/IHRoaXMuX21heERhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4RGF0ZShtYXg6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhEYXRlID0gbWF4O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpcnN0RGF5T2ZXZWVrOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgZmlyc3REYXlPZldlZWsoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3REYXlPZldlZWs7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmaXJzdERheU9mV2VlayhmaXJzdERheU9mV2VlazpudW1iZXIpIHtcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3REYXlPZldlZWsgPSBNYXRoLm1heCgwLCBNYXRoLm1pbig2LCBmaXJzdERheU9mV2VlaykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8RGF0ZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6Q2FsZW5kYXJDb25maWcsIHB1YmxpYyBsb2NhbGVWYWx1ZXM6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgdGhpcy5maXJzdERheU9mV2VlayA9IHRoaXMubG9jYWxlVmFsdWVzLmZpcnN0RGF5T2ZXZWVrO1xuXG4gICAgICAgIHRoaXMub25EYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NYW51YWxVcGRhdGU6KCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHJlc2V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5maW5hbFZpZXc7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBNYXRoLm1heChjdXJyZW50LCB0aGlzLl9taW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBNYXRoLm1pbihjdXJyZW50LCB0aGlzLl9tYXhEYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLmN1cnJlbnREYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmluaXRpYWxWaWV3O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZURhdGUoZGF0ZTpEYXRlLCBmcm9tVmlldzpDYWxlbmRhclZpZXdUeXBlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgaWYgKGZyb21WaWV3ID09PSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5maW5hbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5jb25maWcubWFwcGluZ3MuY2hhbmdlZCwgZnJvbVZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5jb25maWcubWFwcGluZ3Muem9vbSwgZnJvbVZpZXcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlldyhtYXBwaW5nczpNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4sIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICBjb25zdCBtYXBwaW5nID0gbWFwcGluZ3MuZ2V0KGZyb21WaWV3KTtcbiAgICAgICAgaWYgKG1hcHBpbmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHZpZXcgdHlwZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG1hcHBpbmc7XG4gICAgfVxufVxuIl19