/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";
export class SuiSelectSearch {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        this._renderer.setProperty(this._element.nativeElement, "value", query);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    updateQuery(query) {
        this.onQueryUpdated.emit(query);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        this.onQueryKeyDown.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(() => this._element.nativeElement.focus());
    }
}
SuiSelectSearch.decorators = [
    { type: Directive, args: [{
                selector: "input[suiSelectSearch]"
            },] },
];
SuiSelectSearch.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SuiSelectSearch.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.search",] }],
    autoComplete: [{ type: HostBinding, args: ["attr.autocomplete",] }],
    updateQuery: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiSelectSearch.prototype.hasClasses;
    /** @type {?} */
    SuiSelectSearch.prototype.autoComplete;
    /** @type {?} */
    SuiSelectSearch.prototype.onQueryUpdated;
    /** @type {?} */
    SuiSelectSearch.prototype.onQueryKeyDown;
    /** @type {?} */
    SuiSelectSearch.prototype._renderer;
    /** @type {?} */
    SuiSelectSearch.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pILE1BQU07Ozs7O0lBY0YsWUFBb0IsU0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUV4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQWJELElBQVcsS0FBSyxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBY00sV0FBVyxDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFHTSxTQUFTLENBQUMsQ0FBZTtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sS0FBSztRQUNSLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUF2Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7OztZQUp3QyxTQUFTO1lBQUUsVUFBVTs7O3lCQU16RCxXQUFXLFNBQUMsY0FBYzsyQkFHMUIsV0FBVyxTQUFDLG1CQUFtQjswQkFrQi9CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFLN0MsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTFCbkMscUNBQ21DOztJQUVuQyx1Q0FDb0M7O0lBTXBDLHlDQUEyQzs7SUFDM0MseUNBQWtEOztJQUV0QyxvQ0FBMkI7O0lBQUUsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlTZWxlY3RTZWFyY2hdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0U2VhcmNoIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5hdXRvY29tcGxldGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXV0b0NvbXBsZXRlOnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCBxdWVyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlVcGRhdGVkOkV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIHB1YmxpYyBvblF1ZXJ5S2V5RG93bjpFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUgPSBcIm9mZlwiO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkLmVtaXQocXVlcnkpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24uZW1pdChlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgdG8gc3VwcG9ydCBpbiBtZW51IHNlYXJjaC5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbn1cbiJdfQ==