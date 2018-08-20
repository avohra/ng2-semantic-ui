/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import Popper from "popper.js";
/** @typedef {?} */
var PopperModifiers;
/** @typedef {?} */
var PopperInstance;
/** @type {?} */
export var PositioningPlacement = {
    Auto: /** @type {?} */ ("auto"),
    TopLeft: /** @type {?} */ ("top left"),
    Top: /** @type {?} */ ("top"),
    TopRight: /** @type {?} */ ("top right"),
    LeftTop: /** @type {?} */ ("left top"),
    Left: /** @type {?} */ ("left"),
    LeftBottom: /** @type {?} */ ("left bottom"),
    BottomLeft: /** @type {?} */ ("bottom left"),
    Bottom: /** @type {?} */ ("bottom"),
    BottomRight: /** @type {?} */ ("bottom right"),
    RightTop: /** @type {?} */ ("right top"),
    Right: /** @type {?} */ ("right"),
    RightBottom: /** @type {?} */ ("right bottom")
};
/**
 * @record
 */
export function IPositionBoundingBox() { }
/** @type {?} */
IPositionBoundingBox.prototype.width;
/** @type {?} */
IPositionBoundingBox.prototype.height;
/** @type {?} */
IPositionBoundingBox.prototype.top;
/** @type {?} */
IPositionBoundingBox.prototype.left;
/** @type {?} */
IPositionBoundingBox.prototype.bottom;
/** @type {?} */
IPositionBoundingBox.prototype.right;
/**
 * @param {?} placement
 * @return {?}
 */
function placementToPopper(placement) {
    if (!placement || placement === PositioningPlacement.Auto) {
        return "auto";
    }
    var _a = tslib_1.__read(placement.split(" "), 2), direction = _a[0], alignment = _a[1];
    /** @type {?} */
    var chosenPlacement = [direction];
    // Add `start` / `end` to placement, depending on alignment direction.
    switch (alignment) {
        case "top":
        case "left":
            chosenPlacement.push("start");
            break;
        case "bottom":
        case "right":
            chosenPlacement.push("end");
            break;
    }
    // Join with hyphen to create Popper compatible placement.
    return /** @type {?} */ (chosenPlacement.join("-"));
}
/**
 * @param {?} popper
 * @return {?}
 */
function popperToPlacement(popper) {
    if (!popper || popper === "auto") {
        return "auto";
    }
    var _a = tslib_1.__read(popper.split("-"), 2), direction = _a[0], alignment = _a[1];
    /** @type {?} */
    var chosenPlacement = [direction];
    switch (direction) {
        case "top":
        case "bottom":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("left");
                    break;
                case "end":
                    chosenPlacement.push("right");
                    break;
            }
            break;
        case "left":
        case "right":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("top");
                    break;
                case "end":
                    chosenPlacement.push("bottom");
                    break;
            }
            break;
    }
    return /** @type {?} */ (chosenPlacement.join(" "));
}
var PositioningService = /** @class */ (function () {
    function PositioningService(anchor, subject, placement, arrowSelector) {
        var _this = this;
        this.anchor = anchor;
        this.subject = subject;
        this._placement = placement;
        /** @type {?} */
        var modifiers = {
            computeStyle: {
                gpuAcceleration: false
            },
            preventOverflow: {
                escapeWithReference: true,
                boundariesElement: document.body
            },
            arrow: {
                element: arrowSelector
            }
        };
        if (!arrowSelector) {
            delete modifiers.arrow;
        }
        this._popper = /** @type {?} */ (new Popper(anchor.nativeElement, subject.nativeElement, {
            placement: placementToPopper(placement),
            modifiers: modifiers,
            onCreate: function (initial) { return _this._popperState = initial; },
            onUpdate: function (update) { return _this._popperState = update; }
        }));
    }
    Object.defineProperty(PositioningService.prototype, "placement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            this._placement = placement;
            this._popper.options.placement = placementToPopper(placement);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningService.prototype, "actualPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._popperState) {
                return PositioningPlacement.Auto;
            }
            return popperToPlacement(this._popperState.placement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningService.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            return this._popperState;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PositioningService.prototype.update = /**
     * @return {?}
     */
    function () {
        this._popper.update();
    };
    /**
     * @return {?}
     */
    PositioningService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this._popper.destroy();
    };
    return PositioningService;
}());
export { PositioningService };
if (false) {
    /** @type {?} */
    PositioningService.prototype.anchor;
    /** @type {?} */
    PositioningService.prototype.subject;
    /** @type {?} */
    PositioningService.prototype._popper;
    /** @type {?} */
    PositioningService.prototype._popperState;
    /** @type {?} */
    PositioningService.prototype._placement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9zZXJ2aWNlcy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxNQUFxRCxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBbUI5RSxXQUFhLG9CQUFvQixHQUFHO0lBQ2hDLElBQUksb0JBQUUsTUFBOEIsQ0FBQTtJQUNwQyxPQUFPLG9CQUFFLFVBQWtDLENBQUE7SUFDM0MsR0FBRyxvQkFBRSxLQUE2QixDQUFBO0lBQ2xDLFFBQVEsb0JBQUUsV0FBbUMsQ0FBQTtJQUM3QyxPQUFPLG9CQUFFLFVBQWtDLENBQUE7SUFDM0MsSUFBSSxvQkFBRSxNQUE4QixDQUFBO0lBQ3BDLFVBQVUsb0JBQUUsYUFBcUMsQ0FBQTtJQUNqRCxVQUFVLG9CQUFFLGFBQXFDLENBQUE7SUFDakQsTUFBTSxvQkFBRSxRQUFnQyxDQUFBO0lBQ3hDLFdBQVcsb0JBQUUsY0FBc0MsQ0FBQTtJQUNuRCxRQUFRLG9CQUFFLFdBQW1DLENBQUE7SUFDN0MsS0FBSyxvQkFBRSxPQUErQixDQUFBO0lBQ3RDLFdBQVcsb0JBQUUsY0FBc0MsQ0FBQTtDQUN0RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXRiwyQkFBMkIsU0FBOEI7SUFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxLQUFLLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtJQUdELGtEQUFPLGlCQUFTLEVBQUUsaUJBQVMsQ0FBeUI7O0lBR3BELElBQU0sZUFBZSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBR3BDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLE1BQU07WUFDUCxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQztRQUNWLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxPQUFPO1lBQ1IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUM7S0FDYjs7SUFHRCxNQUFNLG1CQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLEVBQUM7Q0FDakQ7Ozs7O0FBRUQsMkJBQTJCLE1BQWE7SUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtJQUVELCtDQUFPLGlCQUFTLEVBQUUsaUJBQVMsQ0FBc0I7O0lBRWpELElBQU0sZUFBZSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFcEMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssUUFBUTtZQUNULE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssT0FBTztvQkFDUixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxLQUFLO29CQUNOLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQzthQUNiO1lBQ0QsS0FBSyxDQUFDO1FBQ1YsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLE9BQU87WUFDUixNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLE9BQU87b0JBQ1IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsS0FBSyxDQUFDO2dCQUNWLEtBQUssS0FBSztvQkFDTixlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7YUFDYjtZQUNELEtBQUssQ0FBQztLQUNiO0lBRUQsTUFBTSxtQkFBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsRUFBQztDQUM1RDtBQUVELElBQUE7SUE4QkksNEJBQVksTUFBaUIsRUFBRSxPQUFrQixFQUFFLFNBQThCLEVBQUUsYUFBcUI7UUFBeEcsaUJBK0JDO1FBOUJHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDOztRQUU1QixJQUFNLFNBQVMsR0FBbUI7WUFDOUIsWUFBWSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxLQUFLO2FBQ3pCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxJQUFJO2FBQ25DO1lBQ0QsS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxhQUFhO2FBQ3pCO1NBQ0osQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsT0FBTyxxQkFBRyxJQUFJLE1BQU0sQ0FDckIsTUFBTSxDQUFDLGFBQWEsRUFDcEIsT0FBTyxDQUFDLGFBQWEsRUFDckI7WUFDSSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLFNBQVMsV0FBQTtZQUNULFFBQVEsRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUEzQixDQUEyQjtZQUNoRCxRQUFRLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sRUFBMUIsQ0FBMEI7U0FDakQsQ0FBbUIsQ0FBQSxDQUFDO0tBQzVCOzBCQXJEVSx5Q0FBUzs7Ozs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7OztrQkFHTixTQUE4QjtZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7OzswQkFHUCwrQ0FBZTs7Ozs7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQzthQUNwQztZQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OzswQkFHL0MscUNBQUs7Ozs7O1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7O0lBb0N0QixtQ0FBTTs7OztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O0lBR25CLG9DQUFPOzs7O1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7NkJBakwvQjtJQW1MQyxDQUFBO0FBdEVELDhCQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFBvcHBlciwgeyBNb2RpZmllcnMsIFBvcHBlck9wdGlvbnMsIFBsYWNlbWVudCwgRGF0YSB9IGZyb20gXCJwb3BwZXIuanNcIjtcblxudHlwZSBQb3BwZXJNb2RpZmllcnMgPSBNb2RpZmllcnMgJiB7XG4gICAgY29tcHV0ZVN0eWxlPzp7XG4gICAgICAgIGdwdUFjY2VsZXJhdGlvbjpib29sZWFuO1xuICAgIH07XG59O1xudHlwZSBQb3BwZXJJbnN0YW5jZSA9IFBvcHBlciAmIHtcbiAgICBvcHRpb25zOlBvcHBlck9wdGlvbnMgJiB7XG4gICAgICAgIG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnM7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uaW5nUGxhY2VtZW50ID0gXCJhdXRvXCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcCBsZWZ0XCIgfCBcInRvcFwiIHwgXCJ0b3AgcmlnaHRcIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tIGxlZnRcIiB8IFwiYm90dG9tXCIgfCBcImJvdHRvbSByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IHRvcFwiIHwgXCJsZWZ0XCIgfCBcImxlZnQgYm90dG9tXCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0IHRvcFwiIHwgXCJyaWdodFwiIHwgXCJyaWdodCBib3R0b21cIjtcblxuZXhwb3J0IGNvbnN0IFBvc2l0aW9uaW5nUGxhY2VtZW50ID0ge1xuICAgIEF1dG86IFwiYXV0b1wiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcExlZnQ6IFwidG9wIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3A6IFwidG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wUmlnaHQ6IFwidG9wIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdFRvcDogXCJsZWZ0IHRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnQ6IFwibGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnRCb3R0b206IFwibGVmdCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b21MZWZ0OiBcImJvdHRvbSBsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tOiBcImJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbVJpZ2h0OiBcImJvdHRvbSByaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0VG9wOiBcInJpZ2h0IHRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRCb3R0b206IFwicmlnaHQgYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnRcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc2l0aW9uQm91bmRpbmdCb3gge1xuICAgIHdpZHRoOm51bWJlcjtcbiAgICBoZWlnaHQ6bnVtYmVyO1xuICAgIHRvcDpudW1iZXI7XG4gICAgbGVmdDpudW1iZXI7XG4gICAgYm90dG9tOm51bWJlcjtcbiAgICByaWdodDpudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBsYWNlbWVudFRvUG9wcGVyKHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCk6UGxhY2VtZW50IHtcbiAgICBpZiAoIXBsYWNlbWVudCB8fCBwbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkF1dG8pIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIC8vIEFsbCBwbGFjZW1lbnRzIG9mIHRoZSBmb3JtYXQ6IGBkaXJlY3Rpb24gYWxpZ25tZW50YCwgZS5nLiBgdG9wIGxlZnRgLlxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwbGFjZW1lbnQuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy8gRGlyZWN0aW9uIGFsb25lIGNvdmVycyBjYXNlIG9mIGp1c3QgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAsIGByaWdodGAuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICAvLyBBZGQgYHN0YXJ0YCAvIGBlbmRgIHRvIHBsYWNlbWVudCwgZGVwZW5kaW5nIG9uIGFsaWdubWVudCBkaXJlY3Rpb24uXG4gICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJzdGFydFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJlbmRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBKb2luIHdpdGggaHlwaGVuIHRvIGNyZWF0ZSBQb3BwZXIgY29tcGF0aWJsZSBwbGFjZW1lbnQuXG4gICAgcmV0dXJuIGNob3NlblBsYWNlbWVudC5qb2luKFwiLVwiKSBhcyBQbGFjZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBvcHBlclRvUGxhY2VtZW50KHBvcHBlcjpzdHJpbmcpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICBpZiAoIXBvcHBlciB8fCBwb3BwZXIgPT09IFwiYXV0b1wiKSB7XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICB9XG5cbiAgICBjb25zdCBbZGlyZWN0aW9uLCBhbGlnbm1lbnRdID0gcG9wcGVyLnNwbGl0KFwiLVwiKTtcblxuICAgIGNvbnN0IGNob3NlblBsYWNlbWVudCA9IFtkaXJlY3Rpb25dO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCIgXCIpIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5jaG9yOkVsZW1lbnRSZWY7XG4gICAgcHVibGljIHJlYWRvbmx5IHN1YmplY3Q6RWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgX3BvcHBlcjpQb3BwZXJJbnN0YW5jZTtcbiAgICBwcml2YXRlIF9wb3BwZXJTdGF0ZTpEYXRhO1xuICAgIHByaXZhdGUgX3BsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcblxuICAgIHB1YmxpYyBnZXQgcGxhY2VtZW50KCk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgIHRoaXMuX3BvcHBlci5vcHRpb25zLnBsYWNlbWVudCA9IHBsYWNlbWVudFRvUG9wcGVyKHBsYWNlbWVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3R1YWxQbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wcGVyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHBlclRvUGxhY2VtZW50KHRoaXMuX3BvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wcGVyU3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYW5jaG9yOkVsZW1lbnRSZWYsIHN1YmplY3Q6RWxlbWVudFJlZiwgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50LCBhcnJvd1NlbGVjdG9yPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcblxuICAgICAgICBjb25zdCBtb2RpZmllcnM6UG9wcGVyTW9kaWZpZXJzID0ge1xuICAgICAgICAgICAgY29tcHV0ZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIGVzY2FwZVdpdGhSZWZlcmVuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGFycm93U2VsZWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWFycm93U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtb2RpZmllcnMuYXJyb3c7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKFxuICAgICAgICAgICAgYW5jaG9yLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBzdWJqZWN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgICAgICAgICBvbkNyZWF0ZTogaW5pdGlhbCA9PiB0aGlzLl9wb3BwZXJTdGF0ZSA9IGluaXRpYWwsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IHVwZGF0ZSA9PiB0aGlzLl9wb3BwZXJTdGF0ZSA9IHVwZGF0ZVxuICAgICAgICAgICAgfSkgYXMgUG9wcGVySW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=