/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class SuiAccordionService {
    constructor() {
        this.closeOthers = true;
        this.transition = "fade";
        this.transitionDuration = 350;
        this.panels = [];
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    addPanel(panel) {
        panel.service = this;
        this.panels.push(panel);
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    closeOtherPanels(panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(p => {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTtJQVFGO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUF1QjtRQUNuQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLEtBQXVCO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7O0lBaENHLDBDQUEyQjs7SUFFM0IseUNBQXlCOztJQUN6QixpREFBaUM7O0lBRWpDLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uLXBhbmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25TZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2xvc2VPdGhlcnM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBwYW5lbHM6U3VpQWNjb3JkaW9uUGFuZWxbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsb3NlT3RoZXJzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcImZhZGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAzNTA7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGFuZWwocGFuZWw6U3VpQWNjb3JkaW9uUGFuZWwpOnZvaWQge1xuICAgICAgICBwYW5lbC5zZXJ2aWNlID0gdGhpcztcbiAgICAgICAgdGhpcy5wYW5lbHMucHVzaChwYW5lbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlT3RoZXJQYW5lbHMocGFuZWw6U3VpQWNjb3JkaW9uUGFuZWwpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFuZWxzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBpZiAocCAhPT0gcGFuZWwpIHtcbiAgICAgICAgICAgICAgICBwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=