/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener } from "@angular/core";
import { CalendarService } from "./../services/calendar.service";
import { DatetimeConfig } from "../classes/calendar-config";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
/** @type {?} */
export const DatepickerMode = {
    Year: (/** @type {?} */ ("year")),
    Month: (/** @type {?} */ ("month")),
    Date: (/** @type {?} */ ("date")),
    Datetime: (/** @type {?} */ ("datetime")),
    Time: (/** @type {?} */ ("time"))
};
export class SuiDatepicker {
    /**
     * @param {?} localizationService
     */
    constructor(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown(e) {
        e.preventDefault();
    }
}
SuiDatepicker.decorators = [
    { type: Component, args: [{
                selector: "sui-datepicker",
                template: `
<ng-container [ngSwitch]="service.currentView">
    <sui-calendar-year-view [service]="service" *ngSwitchCase="0"></sui-calendar-year-view>
    <sui-calendar-month-view [service]="service" *ngSwitchCase="1"></sui-calendar-month-view>    
    <sui-calendar-date-view [service]="service" *ngSwitchCase="2"></sui-calendar-date-view>    
    <sui-calendar-hour-view [service]="service" *ngSwitchCase="3"></sui-calendar-hour-view>    
    <sui-calendar-minute-view [service]="service" *ngSwitchCase="4"></sui-calendar-minute-view>    
</ng-container>
`,
                styles: [`
:host {
    user-select: none;
}
`]
            },] },
];
SuiDatepicker.ctorParameters = () => [
    { type: SuiLocalizationService }
];
SuiDatepicker.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.active",] }, { type: HostBinding, args: ["class.calendar",] }],
    onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    SuiDatepicker.prototype.hasClasses;
    /** @type {?} */
    SuiDatepicker.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUlsRixNQUFNLE9BQU8sY0FBYyxHQUFHO0lBQzFCLElBQUksRUFBRSxtQkFBQSxNQUFNLEVBQWtCO0lBQzlCLEtBQUssRUFBRSxtQkFBQSxPQUFPLEVBQWtCO0lBQ2hDLElBQUksRUFBRSxtQkFBQSxNQUFNLEVBQWtCO0lBQzlCLFFBQVEsRUFBRSxtQkFBQSxVQUFVLEVBQWtCO0lBQ3RDLElBQUksRUFBRSxtQkFBQSxNQUFNLEVBQWtCO0NBQ2pDO0FBbUJELE1BQU07Ozs7SUFRRixZQUFZLG1CQUEwQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksY0FBYyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHTSxXQUFXLENBQUMsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBbENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7O0NBUWI7Z0JBQ0csTUFBTSxFQUFFLENBQUM7Ozs7Q0FJWixDQUFDO2FBQ0Q7OztZQTVCUSxzQkFBc0I7Ozt5QkE4QjFCLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxjQUFjLGNBQzFCLFdBQVcsU0FBQyxnQkFBZ0I7MEJBVzVCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFickMsbUNBR21DOztJQUVuQyxnQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZXRpbWVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgdHlwZSBEYXRlcGlja2VyTW9kZSA9IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJkYXRlXCIgfCBcImRhdGV0aW1lXCIgfCBcInRpbWVcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVwaWNrZXJNb2RlID0ge1xuICAgIFllYXI6IFwieWVhclwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIE1vbnRoOiBcIm1vbnRoXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgRGF0ZTogXCJkYXRlXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgRGF0ZXRpbWU6IFwiZGF0ZXRpbWVcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBUaW1lOiBcInRpbWVcIiBhcyBEYXRlcGlja2VyTW9kZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRhdGVwaWNrZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2VydmljZS5jdXJyZW50Vmlld1wiPlxuICAgIDxzdWktY2FsZW5kYXIteWVhci12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMFwiPjwvc3VpLWNhbGVuZGFyLXllYXItdmlldz5cbiAgICA8c3VpLWNhbGVuZGFyLW1vbnRoLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIxXCI+PC9zdWktY2FsZW5kYXItbW9udGgtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1kYXRlLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIyXCI+PC9zdWktY2FsZW5kYXItZGF0ZS12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLWhvdXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjNcIj48L3N1aS1jYWxlbmRhci1ob3VyLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItbWludXRlLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCI0XCI+PC9zdWktY2FsZW5kYXItbWludXRlLXZpZXc+ICAgIFxuPC9uZy1jb250YWluZXI+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXIge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2FsZW5kYXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UobmV3IERhdGV0aW1lQ29uZmlnKCksIGxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcik7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbiJdfQ==