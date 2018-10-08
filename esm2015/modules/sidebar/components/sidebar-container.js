/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, ContentChild } from "@angular/core";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
export class SuiSidebarContainer {
    constructor() {
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    }
}
SuiSidebarContainer.decorators = [
    { type: Component, args: [{
                selector: "sui-sidebar-container",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            },] },
];
SuiSidebarContainer.ctorParameters = () => [];
SuiSidebarContainer.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.pushable",] }],
    sidebar: [{ type: ContentChild, args: [SuiSidebar,] }],
    sibling: [{ type: ContentChild, args: [SuiSidebarSibling,] }]
};
if (false) {
    /** @type {?} */
    SuiSidebarContainer.prototype.service;
    /** @type {?} */
    SuiSidebarContainer.prototype.hasClasses;
    /** @type {?} */
    SuiSidebarContainer.prototype.sidebar;
    /** @type {?} */
    SuiSidebarContainer.prototype.sibling;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBV3RELE1BQU07SUFZRjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEMsQ0FBQzs7O1lBbkNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQzs7OztDQUlaLENBQUM7YUFDRDs7Ozt5QkFJSSxXQUFXLFNBQUMsZ0JBQWdCO3NCQUc1QixZQUFZLFNBQUMsVUFBVTtzQkFHdkIsWUFBWSxTQUFDLGlCQUFpQjs7OztJQVIvQixzQ0FBOEI7O0lBRTlCLHlDQUNtQzs7SUFFbkMsc0NBQzBCOztJQUUxQixzQ0FDaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItY29udGFpbmVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoYWJsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXIpXG4gICAgcHVibGljIHNpZGViYXI6U3VpU2lkZWJhcjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhclNpYmxpbmcpXG4gICAgcHVibGljIHNpYmxpbmc6U3VpU2lkZWJhclNpYmxpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaWRlYmFyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcnZpY2UgPSB0aGlzLnNpZGViYXIuc2VydmljZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2libGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhci1zaWJsaW5nPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpYmxpbmcuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICB9XG59XG4iXX0=