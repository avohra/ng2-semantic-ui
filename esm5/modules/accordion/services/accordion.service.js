/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiAccordionService = /** @class */ (function () {
    function SuiAccordionService() {
        this.closeOthers = true;
        this.transition = "fade";
        this.transitionDuration = 350;
        this.panels = [];
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.addPanel = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        panel.service = this;
        this.panels.push(panel);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.closeOtherPanels = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(function (p) {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    };
    return SuiAccordionService;
}());
export { SuiAccordionService };
if (false) {
    /** @type {?} */
    SuiAccordionService.prototype.closeOthers;
    /** @type {?} */
    SuiAccordionService.prototype.transition;
    /** @type {?} */
    SuiAccordionService.prototype.transitionDuration;
    /** @type {?} */
    SuiAccordionService.prototype.panels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFRSTtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSxzQ0FBUTs7OztJQUFmLFVBQWdCLEtBQXVCO1FBQ25DLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU0sOENBQWdCOzs7O0lBQXZCLFVBQXdCLEtBQXVCO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDOzs7O0lBaENHLDBDQUEyQjs7SUFFM0IseUNBQXlCOztJQUN6QixpREFBaUM7O0lBRWpDLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uLXBhbmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25TZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2xvc2VPdGhlcnM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBwYW5lbHM6U3VpQWNjb3JkaW9uUGFuZWxbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsb3NlT3RoZXJzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcImZhZGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAzNTA7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGFuZWwocGFuZWw6U3VpQWNjb3JkaW9uUGFuZWwpOnZvaWQge1xuICAgICAgICBwYW5lbC5zZXJ2aWNlID0gdGhpcztcbiAgICAgICAgdGhpcy5wYW5lbHMucHVzaChwYW5lbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlT3RoZXJQYW5lbHMocGFuZWw6U3VpQWNjb3JkaW9uUGFuZWwpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFuZWxzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBpZiAocCAhPT0gcGFuZWwpIHtcbiAgICAgICAgICAgICAgICBwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=