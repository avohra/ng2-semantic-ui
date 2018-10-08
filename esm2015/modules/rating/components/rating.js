/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
export class SuiRating {
    constructor() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get maximum() {
        return this._maximum;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maximum(value) {
        this._maximum = +value;
    }
    /**
     * @return {?}
     */
    get icons() {
        // tslint:disable-next-line:prefer-literal
        return new Array(this.maximum);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onClick(i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onMouseover(i) {
        this.hoveredIndex = i;
    }
    /**
     * @return {?}
     */
    onMouseout() {
        this.hoveredIndex = -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
SuiRating.decorators = [
    { type: Component, args: [{
                selector: "sui-rating",
                template: `
<i class="icon"
   *ngFor="let icon of icons; let i = index"
   (mouseover)="onMouseover(i)"
   (click)="onClick(i)"
   [class.selected]="hoveredIndex >= i && !isReadonly"
   [class.active]="value > i">
</i>
`,
                styles: [`
:host.read-only .icon {
    cursor: auto
}
`]
            },] },
];
SuiRating.ctorParameters = () => [];
SuiRating.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.rating",] }],
    valueChange: [{ type: Output }],
    maximum: [{ type: Input }],
    isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
    onMouseout: [{ type: HostListener, args: ["mouseout",] }]
};
if (false) {
    /** @type {?} */
    SuiRating.prototype.hasClasses;
    /** @type {?} */
    SuiRating.prototype.value;
    /** @type {?} */
    SuiRating.prototype.valueChange;
    /** @type {?} */
    SuiRating.prototype._maximum;
    /** @type {?} */
    SuiRating.prototype.isReadonly;
    /** @type {?} */
    SuiRating.prototype.hoveredIndex;
}
export class SuiRatingValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiRatingValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-rating",
                host: { "(valueChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            },] },
];
SuiRatingValueAccessor.ctorParameters = () => [
    { type: SuiRating }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9yYXRpbmcvY29tcG9uZW50cy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUE0QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbUJ4SCxNQUFNO0lBZ0NGO1FBRk8saUJBQVksR0FBVSxDQUFDLENBQUMsQ0FBQztRQUc1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBNUJELElBQ1csT0FBTztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBVyxPQUFPLENBQUMsS0FBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFNRCxJQUFXLEtBQUs7UUFDWiwwQ0FBMEM7UUFDMUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQWNNLE9BQU8sQ0FBQyxDQUFRO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsQ0FBUTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBR00sVUFBVTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBWTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7WUE3RUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7O0NBUWI7Z0JBQ0csTUFBTSxFQUFFLENBQUM7Ozs7Q0FJWixDQUFDO2FBQ0Q7Ozs7eUJBRUksV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGNBQWM7MEJBSzFCLE1BQU07c0JBS04sS0FBSzt5QkFTTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7eUJBK0JMLFlBQVksU0FBQyxVQUFVOzs7O0lBcER4QiwrQkFFbUM7O0lBRW5DLDBCQUFvQjs7SUFFcEIsZ0NBQ3dDOztJQUV4Qyw2QkFBd0I7O0lBV3hCLCtCQUUwQjs7SUFPMUIsaUNBQWdDOztBQXNDcEMsTUFBTSw2QkFBOEIsU0FBUSxtQkFBc0M7Ozs7SUFDOUUsWUFBWSxJQUFjO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7WUFSSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTtnQkFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUNsRTs7O1lBRW9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYXRpbmdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGkgY2xhc3M9XCJpY29uXCJcbiAgICpuZ0Zvcj1cImxldCBpY29uIG9mIGljb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgIChtb3VzZW92ZXIpPVwib25Nb3VzZW92ZXIoaSlcIlxuICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgW2NsYXNzLnNlbGVjdGVkXT1cImhvdmVyZWRJbmRleCA+PSBpICYmICFpc1JlYWRvbmx5XCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwidmFsdWUgPiBpXCI+XG48L2k+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LnJlYWQtb25seSAuaWNvbiB7XG4gICAgY3Vyc29yOiBhdXRvXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmcgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8bnVtYmVyPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYXRpbmdcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHZhbHVlOm51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heGltdW0gPSArdmFsdWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVhZC1vbmx5XCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNSZWFkb25seTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpY29ucygpOnVuZGVmaW5lZFtdIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1saXRlcmFsXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkodGhpcy5tYXhpbXVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG92ZXJlZEluZGV4Om51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5tYXhpbXVtID0gNTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaSArIDE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3VzZW92ZXIoaTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLmhvdmVyZWRJbmRleCA9IGk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlb3V0XCIpXG4gICAgcHVibGljIG9uTW91c2VvdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgaG9zdDogeyBcIih2YWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8bnVtYmVyLCBTdWlSYXRpbmc+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVJhdGluZykge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=