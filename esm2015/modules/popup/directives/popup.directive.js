/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
/** @type {?} */
const templateRef = TemplateRef;
/**
 * @template T
 */
export class SuiPopupDirective extends SuiPopupTemplateController {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} componentFactory
     * @param {?} popupDefaults
     */
    constructor(renderer, element, componentFactory, popupDefaults) {
        super(renderer, element, componentFactory, new PopupConfig(popupDefaults));
    }
    /**
     * @param {?} header
     * @return {?}
     */
    set popupHeader(header) {
        this.popup.config.header = header;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set popupText(text) {
        this.popup.config.text = text;
    }
    /**
     * @param {?} inverted
     * @return {?}
     */
    set popupInverted(inverted) {
        this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    /**
     * @param {?} basic
     * @return {?}
     */
    set popupBasic(basic) {
        this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    set popupTransition(transition) {
        this.popup.config.transition = transition;
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    set popupTransitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    set popupPlacement(placement) {
        this.popup.config.placement = placement;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    set popupDelay(delay) {
        this.popup.config.delay = delay;
    }
    /**
     * @return {?}
     */
    get popupTrigger() {
        return this.popup.config.trigger;
    }
    /**
     * @param {?} trigger
     * @return {?}
     */
    set popupTrigger(trigger) {
        this.popup.config.trigger = trigger;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set popupTemplate(template) {
        this.template = template;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    set popupTemplateContext(context) {
        this.context = context;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set popupConfig(config) {
        this.configure(config);
    }
}
SuiPopupDirective.decorators = [
    { type: Directive, args: [{
                selector: "[suiPopup]",
                exportAs: "suiPopup"
            },] },
];
/** @nocollapse */
SuiPopupDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory },
    { type: SuiPopupConfig }
];
SuiPopupDirective.propDecorators = {
    popupHeader: [{ type: Input }],
    popupText: [{ type: Input }],
    popupInverted: [{ type: Input }],
    popupBasic: [{ type: Input }],
    popupTransition: [{ type: Input }],
    popupTransitionDuration: [{ type: Input }],
    popupPlacement: [{ type: Input }],
    popupDelay: [{ type: Input }],
    popupTrigger: [{ type: Input }],
    popupTemplate: [{ type: Input }],
    popupTemplateContext: [{ type: Input }],
    popupConfig: [{ type: Input }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUF1QixJQUFJLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQStDLE1BQU0sc0NBQXNDLENBQUM7O0FBRS9ILE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQzs7OztBQU1oQyxNQUFNLHdCQUE0QixTQUFRLDBCQUE2Qjs7Ozs7OztJQWlFbkUsWUFBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixnQkFBb0MsRUFDcEMsYUFBNEI7UUFFcEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztLQUM5RTs7Ozs7SUF0RUQsSUFDVyxXQUFXLENBQUMsTUFBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3JDOzs7OztJQUVELElBQ1csU0FBUyxDQUFDLElBQVc7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQzs7Ozs7SUFFRCxJQUNXLGFBQWEsQ0FBQyxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMzRTs7Ozs7SUFFRCxJQUNXLFVBQVUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JFOzs7OztJQUVELElBQ1csZUFBZSxDQUFDLFVBQWlCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDN0M7Ozs7O0lBRUQsSUFDVyx1QkFBdUIsQ0FBQyxRQUFlO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztLQUNuRDs7Ozs7SUFFRCxJQUNXLGNBQWMsQ0FBQyxTQUE4QjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzNDOzs7OztJQUVELElBQ1csVUFBVSxDQUFDLEtBQVk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQzs7OztJQUVELElBQ1csWUFBWTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ3BDOzs7OztRQUVVLFlBQVksQ0FBQyxPQUFvQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7SUFHeEMsSUFDVyxhQUFhLENBQUMsUUFBMEQ7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFDVyxvQkFBb0IsQ0FBQyxPQUFxQjtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUMxQjs7Ozs7SUFFRCxJQUNXLFdBQVcsQ0FBQyxNQUEwQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFCOzs7WUFuRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsVUFBVTthQUN2Qjs7OztZQWJtRCxTQUFTO1lBQWxDLFVBQVU7WUFDcUIsbUJBQW1CO1lBR3BFLGNBQWM7OzswQkFXbEIsS0FBSzt3QkFLTCxLQUFLOzRCQUtMLEtBQUs7eUJBS0wsS0FBSzs4QkFLTCxLQUFLO3NDQUtMLEtBQUs7NkJBS0wsS0FBSzt5QkFLTCxLQUFLOzJCQUtMLEtBQUs7NEJBU0wsS0FBSzttQ0FLTCxLQUFLOzBCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFV0aWwsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vc2VydmljZXMvcG9wdXAuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXIsIElUZW1wbGF0ZVBvcHVwQ29udGV4dCwgSVRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlQb3B1cF1cIixcbiAgICBleHBvcnRBczogXCJzdWlQb3B1cFwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwRGlyZWN0aXZlPFQ+IGV4dGVuZHMgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXI8VD4ge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEhlYWRlcihoZWFkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZXh0KHRleHQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQmFzaWMoYmFzaWM6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0Jhc2ljID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGJhc2ljKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBvcHVwVHJpZ2dlcigpOlBvcHVwVHJpZ2dlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmlnZ2VyKHRyaWdnZXI6UG9wdXBUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlQ29udGV4dChjb250ZXh0OlQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBDb25maWcoY29uZmlnOklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcG9wdXBEZWZhdWx0czpTdWlQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBuZXcgUG9wdXBDb25maWcocG9wdXBEZWZhdWx0cykpO1xuICAgIH1cbn1cbiJdfQ==