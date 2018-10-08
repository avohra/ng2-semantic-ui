/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/internal";
/**
 * @template T
 */
var SuiRadioManager = /** @class */ (function () {
    function SuiRadioManager(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateNesting();
        this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
        this.updateRadios();
        this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateNesting = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subManagers
            .filter(function (m) { return m !== _this; })
            .forEach(function (m) { return m.isNested = true; });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateRadios = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
        this._radioSubs = [];
        /** @type {?} */
        var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(function (k) { return groups[k]; })
            .forEach(function (g) { return g
            .forEach(function (r) { return _this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe(function (v) {
            if (!_this.isNested) {
                g.forEach(function (radio) { return radio.writeValue(v); });
            }
        })); }); });
    };
    SuiRadioManager.decorators = [
        { type: Directive, args: [{
                    selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
                },] },
    ];
    SuiRadioManager.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiRadioManager.propDecorators = {
        _subManagers: [{ type: ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
        _renderedRadios: [{ type: ContentChildren, args: [SuiRadio, { descendants: true },] }]
    };
    return SuiRadioManager;
}());
export { SuiRadioManager };
if (false) {
    /** @type {?} */
    SuiRadioManager.prototype.isNested;
    /** @type {?} */
    SuiRadioManager.prototype._subManagers;
    /** @type {?} */
    SuiRadioManager.prototype._renderedRadios;
    /** @type {?} */
    SuiRadioManager.prototype._radioSubs;
    /** @type {?} */
    SuiRadioManager.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRW5EO0lBZUkseUJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLDRDQUFrQjs7O0lBQXpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRU8sdUNBQWE7OztJQUFyQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFlBQVk7YUFDWixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSSxFQUFWLENBQVUsQ0FBQzthQUN2QixPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFTyxzQ0FBWTs7O0lBQXBCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1lBRWYsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO1FBQ3pFLE1BQU07YUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQzthQUNuQixPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDO2FBQ1YsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVU7YUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkIsU0FBUyxDQUFDLFVBQUMsQ0FBRztZQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEVBTkcsQ0FNSCxDQUFDLEVBUEYsQ0FPRSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBbERKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0RBQW9EO2lCQUNqRTs7O2dCQVBpRSxVQUFVOzs7K0JBWXZFLGVBQWUsU0FBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2tDQUd0RCxlQUFlLFNBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7SUF5Q3BELHNCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FoRFksZUFBZTs7O0lBRXhCLG1DQUF3Qjs7SUFFeEIsdUNBQ21EOztJQUVuRCwwQ0FDK0M7O0lBRS9DLHFDQUFrQzs7SUFFdEIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlSYWRpbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiZm9ybTpub3QoW25nRm9ybV0pOm5vdChbW25nRm9ybV1dKSxuZ0Zvcm0sW25nRm9ybV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb01hbmFnZXI8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIHB1YmxpYyBpc05lc3RlZDpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpb01hbmFnZXIsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9zdWJNYW5hZ2VyczpRdWVyeUxpc3Q8U3VpUmFkaW9NYW5hZ2VyPFQ+PjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpUmFkaW8sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZFJhZGlvczpRdWVyeUxpc3Q8U3VpUmFkaW88VD4+O1xuXG4gICAgcHJpdmF0ZSBfcmFkaW9TdWJzOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzTmVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVOZXN0aW5nKCk7XG4gICAgICAgIHRoaXMuX3N1Yk1hbmFnZXJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlTmVzdGluZygpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFJhZGlvcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU5lc3RpbmcoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnNcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtICE9PSB0aGlzKVxuICAgICAgICAgICAgLmZvckVhY2gobSA9PiBtLmlzTmVzdGVkID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVSYWRpb3MoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMgPSBbXTtcblxuICAgICAgICBjb25zdCBncm91cHMgPSBVdGlsLkFycmF5Lmdyb3VwQnkodGhpcy5fcmVuZGVyZWRSYWRpb3MudG9BcnJheSgpLCBcIm5hbWVcIik7XG4gICAgICAgIE9iamVjdFxuICAgICAgICAgICAgLmtleXMoZ3JvdXBzKVxuICAgICAgICAgICAgLm1hcChrID0+IGdyb3Vwc1trXSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGcgPT4gZ1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHIgPT4gdGhpcy5fcmFkaW9TdWJzXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKHIub25DdXJyZW50VmFsdWVDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHY6VCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmZvckVhY2gocmFkaW8gPT4gcmFkaW8ud3JpdGVWYWx1ZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgfVxufVxuIl19