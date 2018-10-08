/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, HostBinding, Input, TemplateRef } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
// See https://github.com/Microsoft/TypeScript/issues/13449.
/** @type {?} */
var templateRef = TemplateRef;
/**
 * @template T
 */
var SuiSearchResult = /** @class */ (function () {
    function SuiSearchResult(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = function (value) { return ""; };
    }
    Object.defineProperty(SuiSearchResult.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSearchResult.decorators = [
        { type: Component, args: [{
                    selector: "sui-search-result",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
                },] },
    ];
    SuiSearchResult.ctorParameters = function () { return [
        { type: SuiComponentFactory }
    ]; };
    SuiSearchResult.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.result",] }],
        value: [{ type: Input }],
        query: [{ type: Input }],
        formatter: [{ type: Input }],
        template: [{ type: Input }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }]
    };
    return SuiSearchResult;
}());
export { SuiSearchResult };
if (false) {
    /** @type {?} */
    SuiSearchResult.prototype.hasClasses;
    /** @type {?} */
    SuiSearchResult.prototype.value;
    /** @type {?} */
    SuiSearchResult.prototype.query;
    /** @type {?} */
    SuiSearchResult.prototype.formatter;
    /** @type {?} */
    SuiSearchResult.prototype._template;
    /** @type {?} */
    SuiSearchResult.prototype.templateSibling;
    /** @type {?} */
    SuiSearchResult.prototype.componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQXlCLFdBQVcsRUFDMUUsS0FBSyxFQUFFLFdBQVcsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7SUFJakYsV0FBVyxHQUFHLFdBQVc7Ozs7QUFFL0I7SUEyQ0kseUJBQW1CLGdCQUFvQztRQUFwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLDRIQUE0SDtRQUM1SCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxFQUFGLENBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeEJELHNCQUNXLHFDQUFROzs7O1FBRG5CO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFvQixRQUFtRDtZQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQzs7O09BVkE7O2dCQTNCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLCtHQUdiO2lCQUNBOzs7Z0JBWjZCLG1CQUFtQjs7OzZCQWU1QyxXQUFXLFNBQUMsY0FBYzt3QkFHMUIsS0FBSzt3QkFHTCxLQUFLOzRCQUlMLEtBQUs7MkJBS0wsS0FBSztrQ0FnQkwsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztJQVM1RCxzQkFBQztDQUFBLEFBakRELElBaURDO1NBMUNZLGVBQWU7OztJQUV4QixxQ0FDbUM7O0lBRW5DLGdDQUNlOztJQUVmLGdDQUNvQjs7SUFHcEIsb0NBQ2lEOztJQUVqRCxvQ0FBa0Q7O0lBa0JsRCwwQ0FDd0M7O0lBRTVCLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVJlc3VsdENvbnRleHQgfSBmcm9tIFwiLi9zZWFyY2hcIjtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM0NDkuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoLXJlc3VsdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUsIHF1ZXJ5KVwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoUmVzdWx0PFQ+IHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVzdWx0XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBxdWVyeTpzdHJpbmc7XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBsYWJlbCBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF90ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhpcyBmdW5jdGlvbiByZXR1cm4gYW4gZW1wdHkgc3RyaW5nLCBmb3IgdGhlIGJyaWVmIG1vbWVudCB3aGVuIGl0IGlzbid0IGRpc3BsYXlpbmcgdGhlIGNvcnJlY3QgbGFiZWwuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVyID0gdmFsdWUgPT4gXCJcIjtcbiAgICB9XG59XG4iXX0=