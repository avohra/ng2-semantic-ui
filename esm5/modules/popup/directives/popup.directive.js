/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
/** @type {?} */
var templateRef = TemplateRef;
/**
 * @template T
 */
var SuiPopupDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: /**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: /**
         * @param {?} inverted
         * @return {?}
         */
        function (inverted) {
            this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: /**
         * @param {?} basic
         * @return {?}
         */
        function (basic) {
            this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: /**
         * @param {?} duration
         * @return {?}
         */
        function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: /**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.popup.config.trigger;
        },
        set: /**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: /**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[suiPopup]",
                    exportAs: "suiPopup"
                },] },
    ];
    /** @nocollapse */
    SuiPopupDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: SuiPopupConfig }
    ]; };
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
    return SuiPopupDirective;
}(SuiPopupTemplateController));
export { SuiPopupDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBdUIsSUFBSSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFFLDBCQUEwQixFQUErQyxNQUFNLHNDQUFzQyxDQUFDOztBQUUvSCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUM7Ozs7O0lBTVUsNkNBQTZCO0lBaUVuRSwyQkFBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixnQkFBb0MsRUFDcEMsYUFBNEI7ZUFFcEMsa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM3RTtJQXRFRCxzQkFDVywwQ0FBVzs7Ozs7UUFEdEIsVUFDdUIsTUFBYTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUNXLHdDQUFTOzs7OztRQURwQixVQUNxQixJQUFXO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakM7OztPQUFBO0lBRUQsc0JBQ1csNENBQWE7Ozs7O1FBRHhCLFVBQ3lCLFFBQWdCO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNFOzs7T0FBQTtJQUVELHNCQUNXLHlDQUFVOzs7OztRQURyQixVQUNzQixLQUFhO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JFOzs7T0FBQTtJQUVELHNCQUNXLDhDQUFlOzs7OztRQUQxQixVQUMyQixVQUFpQjtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdDOzs7T0FBQTtJQUVELHNCQUNXLHNEQUF1Qjs7Ozs7UUFEbEMsVUFDbUMsUUFBZTtZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7U0FDbkQ7OztPQUFBO0lBRUQsc0JBQ1csNkNBQWM7Ozs7O1FBRHpCLFVBQzBCLFNBQThCO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDM0M7OztPQUFBO0lBRUQsc0JBQ1cseUNBQVU7Ozs7O1FBRHJCLFVBQ3NCLEtBQVk7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQzs7O09BQUE7SUFFRCxzQkFDVywyQ0FBWTs7OztRQUR2QjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDcEM7Ozs7O2tCQUV1QixPQUFvQjtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7O09BSHZDO0lBTUQsc0JBQ1csNENBQWE7Ozs7O1FBRHhCLFVBQ3lCLFFBQTBEO1lBQy9FLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUNXLG1EQUFvQjs7Ozs7UUFEL0IsVUFDZ0MsT0FBcUI7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQ1csMENBQVc7Ozs7O1FBRHRCLFVBQ3VCLE1BQTBDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7OztPQUFBOztnQkFuRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBYm1ELFNBQVM7Z0JBQWxDLFVBQVU7Z0JBQ3FCLG1CQUFtQjtnQkFHcEUsY0FBYzs7OzhCQVdsQixLQUFLOzRCQUtMLEtBQUs7Z0NBS0wsS0FBSzs2QkFLTCxLQUFLO2tDQUtMLEtBQUs7MENBS0wsS0FBSztpQ0FLTCxLQUFLOzZCQUtMLEtBQUs7K0JBS0wsS0FBSztnQ0FTTCxLQUFLO3VDQUtMLEtBQUs7OEJBS0wsS0FBSzs7NEJBMUVWO0VBYzBDLDBCQUEwQjtTQUF2RCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFV0aWwsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vc2VydmljZXMvcG9wdXAuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXIsIElUZW1wbGF0ZVBvcHVwQ29udGV4dCwgSVRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlQb3B1cF1cIixcbiAgICBleHBvcnRBczogXCJzdWlQb3B1cFwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwRGlyZWN0aXZlPFQ+IGV4dGVuZHMgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXI8VD4ge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEhlYWRlcihoZWFkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZXh0KHRleHQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQmFzaWMoYmFzaWM6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0Jhc2ljID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGJhc2ljKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBvcHVwVHJpZ2dlcigpOlBvcHVwVHJpZ2dlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmlnZ2VyKHRyaWdnZXI6UG9wdXBUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlQ29udGV4dChjb250ZXh0OlQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBDb25maWcoY29uZmlnOklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcG9wdXBEZWZhdWx0czpTdWlQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBuZXcgUG9wdXBDb25maWcocG9wdXBEZWZhdWx0cykpO1xuICAgIH1cbn1cbiJdfQ==