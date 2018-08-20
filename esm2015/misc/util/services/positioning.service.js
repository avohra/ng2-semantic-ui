/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import Popper from "popper.js";
/** @typedef {?} */
var PopperModifiers;
/** @typedef {?} */
var PopperInstance;
/** @type {?} */
export const PositioningPlacement = {
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
    const [direction, alignment] = placement.split(" ");
    /** @type {?} */
    const chosenPlacement = [direction];
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
    const [direction, alignment] = popper.split("-");
    /** @type {?} */
    const chosenPlacement = [direction];
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
export class PositioningService {
    /**
     * @return {?}
     */
    get placement() {
        return this._placement;
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    set placement(placement) {
        this._placement = placement;
        this._popper.options.placement = placementToPopper(placement);
        this.update();
    }
    /**
     * @return {?}
     */
    get actualPlacement() {
        if (!this._popperState) {
            return PositioningPlacement.Auto;
        }
        return popperToPlacement(this._popperState.placement);
    }
    /**
     * @return {?}
     */
    get state() {
        return this._popperState;
    }
    /**
     * @param {?} anchor
     * @param {?} subject
     * @param {?} placement
     * @param {?=} arrowSelector
     */
    constructor(anchor, subject, placement, arrowSelector) {
        this.anchor = anchor;
        this.subject = subject;
        this._placement = placement;
        /** @type {?} */
        const modifiers = {
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
            modifiers,
            onCreate: initial => this._popperState = initial,
            onUpdate: update => this._popperState = update
        }));
    }
    /**
     * @return {?}
     */
    update() {
        this._popper.update();
    }
    /**
     * @return {?}
     */
    destroy() {
        this._popper.destroy();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9zZXJ2aWNlcy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLE1BQXFELE1BQU0sV0FBVyxDQUFDOzs7Ozs7QUFtQjlFLGFBQWEsb0JBQW9CLEdBQUc7SUFDaEMsSUFBSSxvQkFBRSxNQUE4QixDQUFBO0lBQ3BDLE9BQU8sb0JBQUUsVUFBa0MsQ0FBQTtJQUMzQyxHQUFHLG9CQUFFLEtBQTZCLENBQUE7SUFDbEMsUUFBUSxvQkFBRSxXQUFtQyxDQUFBO0lBQzdDLE9BQU8sb0JBQUUsVUFBa0MsQ0FBQTtJQUMzQyxJQUFJLG9CQUFFLE1BQThCLENBQUE7SUFDcEMsVUFBVSxvQkFBRSxhQUFxQyxDQUFBO0lBQ2pELFVBQVUsb0JBQUUsYUFBcUMsQ0FBQTtJQUNqRCxNQUFNLG9CQUFFLFFBQWdDLENBQUE7SUFDeEMsV0FBVyxvQkFBRSxjQUFzQyxDQUFBO0lBQ25ELFFBQVEsb0JBQUUsV0FBbUMsQ0FBQTtJQUM3QyxLQUFLLG9CQUFFLE9BQStCLENBQUE7SUFDdEMsV0FBVyxvQkFBRSxjQUFzQyxDQUFBO0NBQ3RELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdGLDJCQUEyQixTQUE4QjtJQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBR0QsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUdwRCxNQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUdwQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FB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QUk7Z0JBQ3pCLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxJQUFJO2FBQ25DO1lBQ0QsS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxhQUFhO2FBQ3pCO1NBQ0osQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsT0FBTyxxQkFBRyxJQUFJLE1BQU0sQ0FDckIsTUFBTSxDQUFDLGFBQWEsRUFDcEIsT0FBTyxDQUFDLGFBQWEsRUFDckI7WUFDSSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLFNBQVM7WUFDVCxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU87WUFDaEQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNO1NBQ2pELENBQW1CLENBQUEsQ0FBQztLQUM1Qjs7OztJQUVNLE1BQU07UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7OztJQUduQixPQUFPO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Q0FFOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBQb3BwZXIsIHsgTW9kaWZpZXJzLCBQb3BwZXJPcHRpb25zLCBQbGFjZW1lbnQsIERhdGEgfSBmcm9tIFwicG9wcGVyLmpzXCI7XG5cbnR5cGUgUG9wcGVyTW9kaWZpZXJzID0gTW9kaWZpZXJzICYge1xuICAgIGNvbXB1dGVTdHlsZT86e1xuICAgICAgICBncHVBY2NlbGVyYXRpb246Ym9vbGVhbjtcbiAgICB9O1xufTtcbnR5cGUgUG9wcGVySW5zdGFuY2UgPSBQb3BwZXIgJiB7XG4gICAgb3B0aW9uczpQb3BwZXJPcHRpb25zICYge1xuICAgICAgICBtb2RpZmllcnM6UG9wcGVyTW9kaWZpZXJzO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IFwiYXV0b1wiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3AgbGVmdFwiIHwgXCJ0b3BcIiB8IFwidG9wIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbSBsZWZ0XCIgfCBcImJvdHRvbVwiIHwgXCJib3R0b20gcmlnaHRcIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCB0b3BcIiB8IFwibGVmdFwiIHwgXCJsZWZ0IGJvdHRvbVwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodCB0b3BcIiB8IFwicmlnaHRcIiB8IFwicmlnaHQgYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IHtcbiAgICBBdXRvOiBcImF1dG9cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BMZWZ0OiBcInRvcCBsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wOiBcInRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcFJpZ2h0OiBcInRvcCByaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnRUb3A6IFwibGVmdCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0Qm90dG9tOiBcImxlZnQgYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tTGVmdDogXCJib3R0b20gbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b21SaWdodDogXCJib3R0b20gcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodFRvcDogXCJyaWdodCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0Qm90dG9tOiBcInJpZ2h0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3NpdGlvbkJvdW5kaW5nQm94IHtcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0Om51bWJlcjtcbiAgICB0b3A6bnVtYmVyO1xuICAgIGxlZnQ6bnVtYmVyO1xuICAgIGJvdHRvbTpudW1iZXI7XG4gICAgcmlnaHQ6bnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpOlBsYWNlbWVudCB7XG4gICAgaWYgKCFwbGFjZW1lbnQgfHwgcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvKSB7XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICB9XG5cbiAgICAvLyBBbGwgcGxhY2VtZW50cyBvZiB0aGUgZm9ybWF0OiBgZGlyZWN0aW9uIGFsaWdubWVudGAsIGUuZy4gYHRvcCBsZWZ0YC5cbiAgICBjb25zdCBbZGlyZWN0aW9uLCBhbGlnbm1lbnRdID0gcGxhY2VtZW50LnNwbGl0KFwiIFwiKTtcblxuICAgIC8vIERpcmVjdGlvbiBhbG9uZSBjb3ZlcnMgY2FzZSBvZiBqdXN0IGB0b3BgLCBgbGVmdGAsIGBib3R0b21gLCBgcmlnaHRgLlxuICAgIGNvbnN0IGNob3NlblBsYWNlbWVudCA9IFtkaXJlY3Rpb25dO1xuXG4gICAgLy8gQWRkIGBzdGFydGAgLyBgZW5kYCB0byBwbGFjZW1lbnQsIGRlcGVuZGluZyBvbiBhbGlnbm1lbnQgZGlyZWN0aW9uLlxuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwic3RhcnRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiZW5kXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSm9pbiB3aXRoIGh5cGhlbiB0byBjcmVhdGUgUG9wcGVyIGNvbXBhdGlibGUgcGxhY2VtZW50LlxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIi1cIikgYXMgUGxhY2VtZW50O1xufVxuXG5mdW5jdGlvbiBwb3BwZXJUb1BsYWNlbWVudChwb3BwZXI6c3RyaW5nKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgaWYgKCFwb3BwZXIgfHwgcG9wcGVyID09PSBcImF1dG9cIikge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBvcHBlci5zcGxpdChcIi1cIik7XG5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJ0b3BcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3NlblBsYWNlbWVudC5qb2luKFwiIFwiKSBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGFuY2hvcjpFbGVtZW50UmVmO1xuICAgIHB1YmxpYyByZWFkb25seSBzdWJqZWN0OkVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9wb3BwZXI6UG9wcGVySW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBfcG9wcGVyU3RhdGU6RGF0YTtcbiAgICBwcml2YXRlIF9wbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0dWFsUGxhY2VtZW50KCk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuX3BvcHBlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3BwZXJUb1BsYWNlbWVudCh0aGlzLl9wb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTpEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHBlclN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFuY2hvcjpFbGVtZW50UmVmLCBzdWJqZWN0OkVsZW1lbnRSZWYsIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCwgYXJyb3dTZWxlY3Rvcj86c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycyA9IHtcbiAgICAgICAgICAgIGNvbXB1dGVTdHlsZToge1xuICAgICAgICAgICAgICAgIGdwdUFjY2VsZXJhdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICBlc2NhcGVXaXRoUmVmZXJlbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBhcnJvd1NlbGVjdG9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFhcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIGFuY2hvci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgc3ViamVjdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50KSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgb25DcmVhdGU6IGluaXRpYWwgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSBpbml0aWFsLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSB1cGRhdGVcbiAgICAgICAgICAgIH0pIGFzIFBvcHBlckluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19