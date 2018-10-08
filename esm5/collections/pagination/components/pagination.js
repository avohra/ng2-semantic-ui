/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
var SuiPagination = /** @class */ (function () {
    function SuiPagination() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    Object.defineProperty(SuiPagination.prototype, "maxSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "collectionSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collectionSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collectionSize = Math.max(value, 0);
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var maxSize = this._maxSize || this.pageCount;
            return this._hasNavigationLinks || maxSize < this.pageCount;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasNavigationLinks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setPage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "pages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    // Public methods
    // Public methods
    /**
     * @return {?}
     */
    SuiPagination.prototype.hasPrevious = 
    // Public methods
    /**
     * @return {?}
     */
    function () {
        return this.page > 1;
    };
    /**
     * @return {?}
     */
    SuiPagination.prototype.hasNext = /**
     * @return {?}
     */
    function () {
        return this.page < this.pageCount;
    };
    /**
     * @param {?} newPage
     * @return {?}
     */
    SuiPagination.prototype.setPage = /**
     * @param {?} newPage
     * @return {?}
     */
    function (newPage) {
        /** @type {?} */
        var value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    };
    // Lifecycle hooks
    // Lifecycle hooks
    /**
     * @return {?}
     */
    SuiPagination.prototype.ngOnChanges = 
    // Lifecycle hooks
    /**
     * @return {?}
     */
    function () {
        this.updatePages();
    };
    // Private methods
    // Private methods
    /**
     * @return {?}
     */
    SuiPagination.prototype.updatePages = 
    // Private methods
    /**
     * @return {?}
     */
    function () {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        var _a = tslib_1.__read(this.applyPagination(), 2), start = _a[0], end = _a[1];
        this._pages = Array(end - start)
            .fill(start + 1)
            .map(function (s, i) { return s + i; });
    };
    /**
     * @return {?}
     */
    SuiPagination.prototype.applyPagination = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        /** @type {?} */
        var page = Math.ceil(this.page / maxSize) - 1;
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var end = this.pageCount;
        if (this.canRotate) {
            /** @type {?} */
            var leftOffset = Math.floor(maxSize / 2);
            /** @type {?} */
            var rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    };
    SuiPagination.decorators = [
        { type: Component, args: [{
                    selector: "sui-pagination",
                    template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
                    styles: ["\n:host .item {\n    transition: none;\n}\n"]
                },] },
    ];
    SuiPagination.ctorParameters = function () { return []; };
    SuiPagination.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.pagination",] }, { type: HostBinding, args: ["class.menu",] }],
        pageChange: [{ type: Output }],
        maxSize: [{ type: Input }],
        pageSize: [{ type: Input }],
        collectionSize: [{ type: Input }],
        hasNavigationLinks: [{ type: Input }],
        hasBoundaryLinks: [{ type: Input }],
        canRotate: [{ type: Input }],
        hasEllipses: [{ type: Input }],
        page: [{ type: Input }]
    };
    return SuiPagination;
}());
export { SuiPagination };
if (false) {
    /** @type {?} */
    SuiPagination.prototype.hasClasses;
    /** @type {?} */
    SuiPagination.prototype.pageCount;
    /** @type {?} */
    SuiPagination.prototype.pageChange;
    /** @type {?} */
    SuiPagination.prototype._maxSize;
    /** @type {?} */
    SuiPagination.prototype._collectionSize;
    /** @type {?} */
    SuiPagination.prototype._page;
    /** @type {?} */
    SuiPagination.prototype._pages;
    /** @type {?} */
    SuiPagination.prototype._hasNavigationLinks;
    /** @type {?} */
    SuiPagination.prototype.pageSize;
    /** @type {?} */
    SuiPagination.prototype.hasBoundaryLinks;
    /** @type {?} */
    SuiPagination.prototype.canRotate;
    /** @type {?} */
    SuiPagination.prototype.hasEllipses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0Y7SUErR0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQWxFRCxzQkFDVyxrQ0FBTzs7OztRQURsQjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBbUIsS0FBd0I7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FKQTtJQVNELHNCQUNXLHlDQUFjOzs7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QUM7WUFDSixLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUN2QixHQUFHLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQXZMSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGd6Q0E0QmI7b0JBQ0csTUFBTSxFQUFFLENBQUMsNkNBSVosQ0FBQztpQkFDRDs7Ozs2QkFHSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLFdBQVcsU0FBQyxZQUFZOzZCQU14QixNQUFNOzBCQVVOLEtBQUs7MkJBU0wsS0FBSztpQ0FHTCxLQUFLO3FDQVVMLEtBQUs7bUNBVUwsS0FBSzs0QkFHTCxLQUFLOzhCQUdMLEtBQUs7dUJBR0wsS0FBSzs7SUFzRlYsb0JBQUM7Q0FBQSxBQXhMRCxJQXdMQztTQW5KWSxhQUFhOzs7SUFFdEIsbUNBR21DOztJQUduQyxrQ0FBd0I7O0lBRXhCLG1DQUN1Qzs7SUFHdkMsaUNBQXlCOztJQUN6Qix3Q0FBK0I7O0lBQy9CLDhCQUFxQjs7SUFDckIsK0JBQXdCOztJQUN4Qiw0Q0FBb0M7O0lBV3BDLGlDQUN1Qjs7SUFzQnZCLHlDQUNnQzs7SUFFaEMsa0NBQ3lCOztJQUV6QixvQ0FDMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wYWdpbmF0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZSgxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09MVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UtMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzKClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZSgxKVwiICpuZ0lmPVwicGFnZXNbMF0gIT09IDFcIj5cbiAgICAgICAgPHNwYW4+MTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1swXSA+IDJcIj4uLi48L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgY2xhc3M9XCJpdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJwPT09cGFnZVwiIChjbGljayk9XCJzZXRQYWdlKHApXCI+XG4gICAge3sgcCB9fVxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSA8IHBhZ2VDb3VudCAtIDFcIj4uLi48L2E+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gIT09IHBhZ2VDb3VudFwiPlxuICAgICAgICA8c3Bhbj57eyBwYWdlQ291bnQgfX08L3NwYW4+XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UrMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc05leHQoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09cGFnZUNvdW50XCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IC5pdGVtIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUGFnaW5hdGlvbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2luYXRpb25cIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIC8vIFB1YmxpYyBtZW1iZXJzXG4gICAgcHVibGljIHBhZ2VDb3VudDpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcGFnZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIC8vIFByaXZhdGUgbWVtYmVyc1xuICAgIHByaXZhdGUgX21heFNpemU/Om51bWJlcjtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uU2l6ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFnZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFnZXM6bnVtYmVyW107XG4gICAgcHJpdmF0ZSBfaGFzTmF2aWdhdGlvbkxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4U2l6ZSgpOm51bWJlcnx1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4U2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heFNpemUodmFsdWU6bnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heFNpemUgPSAodmFsdWUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWF4KHZhbHVlLCAxKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYWdlU2l6ZTpudW1iZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvblNpemUoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvblNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb2xsZWN0aW9uU2l6ZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvblNpemUgPSBNYXRoLm1heCh2YWx1ZSwgMCk7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRoaXMuX2NvbGxlY3Rpb25TaXplIC8gdGhpcy5wYWdlU2l6ZSkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBoYXNOYXZpZ2F0aW9uTGlua3MoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9IHRoaXMuX21heFNpemUgfHwgdGhpcy5wYWdlQ291bnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgfHwgbWF4U2l6ZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzTmF2aWdhdGlvbkxpbmtzKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzQm91bmRhcnlMaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuUm90YXRlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNFbGxpcHNlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBhZ2UoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhZ2UodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0UGFnZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYWdlcygpOm51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gMTA7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSAxO1xuICAgICAgICB0aGlzLl9wYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IDE7XG4gICAgICAgIHRoaXMuaGFzTmF2aWdhdGlvbkxpbmtzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNCb3VuZGFyeUxpbmtzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRWxsaXBzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGhhc1ByZXZpb3VzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnZShuZXdQYWdlOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlOm51bWJlciA9IChOdW1iZXIuaXNJbnRlZ2VyKG5ld1BhZ2UpKSA/IE1hdGgubWluKE1hdGgubWF4KG5ld1BhZ2UsIDEpLCB0aGlzLnBhZ2VDb3VudCkgOiAxO1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMuX3BhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIHVwZGF0ZVBhZ2VzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRoaXMuX2NvbGxlY3Rpb25TaXplIC8gdGhpcy5wYWdlU2l6ZSkpO1xuXG4gICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHRoaXMuYXBwbHlQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5fcGFnZXMgPSBBcnJheTxudW1iZXI+KGVuZCAtIHN0YXJ0KVxuICAgICAgICAgICAgLmZpbGwoc3RhcnQgKyAxKVxuICAgICAgICAgICAgLm1hcCgocywgaSkgPT4gcyArIGkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlQYWdpbmF0aW9uKCk6W251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSAodGhpcy5tYXhTaXplICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1pbih0aGlzLm1heFNpemUsIHRoaXMucGFnZUNvdW50KSA6IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBNYXRoLmNlaWwodGhpcy5wYWdlIC8gbWF4U2l6ZSkgLSAxO1xuICAgICAgICBsZXQgc3RhcnQgPSAwO1xuICAgICAgICBsZXQgZW5kID0gdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuUm90YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcihtYXhTaXplIC8gMik7XG4gICAgICAgICAgICBjb25zdCByaWdodE9mZnNldCA9IG1heFNpemUgJSAyID09PSAwID8gbGVmdE9mZnNldCAtIDEgOiBsZWZ0T2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlIDw9IGxlZnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VDb3VudCAtIHRoaXMucGFnZSA8IGxlZnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZUNvdW50IC0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2UgLSBsZWZ0T2Zmc2V0IC0gMTtcbiAgICAgICAgICAgICAgICBlbmQgPSB0aGlzLnBhZ2UgKyByaWdodE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gcGFnZSAqIG1heFNpemU7XG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIG1heFNpemU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3N0YXJ0LCBNYXRoLm1pbihlbmQsIHRoaXMucGFnZUNvdW50KV07XG4gICAgfVxufVxuIl19