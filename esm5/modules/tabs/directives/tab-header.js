/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HostBinding, Input, Directive, EventEmitter, HostListener, Output } from "@angular/core";
var SuiTabHeader = /** @class */ (function () {
    function SuiTabHeader() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiTabHeader.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            /** @type {?} */
            var isActive = active;
            // Only used by @Input(), runs whenever user input changes `isActive`.
            // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
            // so update is delayed to avoid 'changed after checked' error.
            setTimeout(function () {
                // Only allow change if tab header is not disabled.
                isActive = !_this.isDisabled ? active : false;
                _this.setActiveState(isActive);
                // Fire 'external change' event as user input has occured.
                _this.isActiveExternalChange.emit(isActive);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            // Only update if value provided is different to current one.
            if (this._isDisabled !== disabled) {
                this._isDisabled = disabled;
                // If now disabled, then tab header must be deactivated.
                if (this.isDisabled) {
                    this.isActive = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // Internally update active state.
    // Internally update active state.
    /**
     * @param {?} active
     * @return {?}
     */
    SuiTabHeader.prototype.setActiveState = 
    // Internally update active state.
    /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        // If (cast) active value has changed:
        if (!!this._isActive !== active) {
            // Update to the new value.
            this._isActive = active;
            // Fire the appropriate activation event.
            if (active) {
                this.onActivate.emit();
            }
            else {
                this.onDeactivate.emit();
            }
        }
        // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
        this.isActiveChange.emit(active);
    };
    /**
     * @return {?}
     */
    SuiTabHeader.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    };
    SuiTabHeader.decorators = [
        { type: Directive, args: [{
                    selector: "[suiTabHeader]"
                },] },
    ];
    SuiTabHeader.ctorParameters = function () { return []; };
    SuiTabHeader.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.item",] }],
        id: [{ type: Input, args: ["suiTabHeader",] }],
        isActiveChange: [{ type: Output }],
        onActivate: [{ type: Output, args: ["activate",] }],
        onDeactivate: [{ type: Output, args: ["deactivate",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }, { type: Input }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        onClick: [{ type: HostListener, args: ["click",] }]
    };
    return SuiTabHeader;
}());
export { SuiTabHeader };
if (false) {
    /** @type {?} */
    SuiTabHeader.prototype.hasClasses;
    /** @type {?} */
    SuiTabHeader.prototype.id;
    /** @type {?} */
    SuiTabHeader.prototype._isActive;
    /** @type {?} */
    SuiTabHeader.prototype.isActiveChange;
    /** @type {?} */
    SuiTabHeader.prototype.isActiveExternalChange;
    /** @type {?} */
    SuiTabHeader.prototype.onActivate;
    /** @type {?} */
    SuiTabHeader.prototype.onDeactivate;
    /** @type {?} */
    SuiTabHeader.prototype._isDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRztJQXFFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFwREQsc0JBRVcsa0NBQVE7Ozs7UUFGbkI7WUFHSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQW9CLE1BQWM7WUFBbEMsaUJBYUM7O2dCQVpPLFFBQVEsR0FBRyxNQUFNO1lBQ3JCLHNFQUFzRTtZQUN0RSxrRkFBa0Y7WUFDbEYsK0RBQStEO1lBQy9ELFVBQVUsQ0FBQztnQkFDUCxtREFBbUQ7Z0JBQ25ELFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUU5QiwwREFBMEQ7Z0JBQzFELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDOzs7T0FmQTtJQW1CRCxzQkFFVyxvQ0FBVTs7OztRQUZyQjtZQUdJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBRUQsVUFBc0IsUUFBZ0I7WUFDbEMsNkRBQTZEO1lBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBRTVCLHdEQUF3RDtnQkFDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7OztPQVpBO0lBMkJELGtDQUFrQzs7Ozs7O0lBQzNCLHFDQUFjOzs7Ozs7SUFBckIsVUFBc0IsTUFBYztRQUNoQyxzQ0FBc0M7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFFeEIseUNBQXlDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQztRQUVELDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBR00sOEJBQU87OztJQURkO1FBRUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQiwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7O2dCQTNHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtpQkFDN0I7Ozs7NkJBRUksV0FBVyxTQUFDLFlBQVk7cUJBR3hCLEtBQUssU0FBQyxjQUFjO2lDQU9wQixNQUFNOzZCQU9OLE1BQU0sU0FBQyxVQUFVOytCQUlqQixNQUFNLFNBQUMsWUFBWTsyQkFHbkIsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzs2QkFzQkwsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzBCQWlETCxZQUFZLFNBQUMsT0FBTzs7SUFPekIsbUJBQUM7Q0FBQSxBQTVHRCxJQTRHQztTQXpHWSxZQUFZOzs7SUFDckIsa0NBQ21DOztJQUVuQywwQkFDaUI7O0lBR2pCLGlDQUEwQjs7SUFHMUIsc0NBQzRDOztJQUc1Qyw4Q0FBb0Q7O0lBR3BELGtDQUNxQzs7SUFHckMsb0NBQ3VDOztJQXVCdkMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIElucHV0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiSGVhZGVyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkhlYWRlciB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJIZWFkZXJcIilcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuXG4gICAgLy8gSW50ZXJuYWxseSBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBoZWFkZXIgaXMgYWN0aXZlLlxuICAgIHByaXZhdGUgX2lzQWN0aXZlOmJvb2xlYW47XG5cbiAgICAvLyBFbmFibGVzIHVzZSBvZiBbKGlzQWN0aXZlKV0gc28gc3RhdGUgY2FuIGJlIHNldCB1c2luZyBib29sZWFucy5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNBY3RpdmVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgb25seSB3aGVuIGBpc0FjdGl2ZWAgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnB1dC5cbiAgICBwdWJsaWMgaXNBY3RpdmVFeHRlcm5hbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBkZWFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25BY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBkZWFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiZGVhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkRlYWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gT25seSB1c2VkIGJ5IEBJbnB1dCgpLCBydW5zIHdoZW5ldmVyIHVzZXIgaW5wdXQgY2hhbmdlcyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBSdW4gaW4gdGltZW91dCBiZWNhdXNlIGBpc0Rpc2FibGVkYCBjYW4gcHJvaGliaXQgdXNlciBmcm9tIGNoYW5naW5nIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIHNvIHVwZGF0ZSBpcyBkZWxheWVkIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgY2hhbmdlIGlmIHRhYiBoZWFkZXIgaXMgbm90IGRpc2FibGVkLlxuICAgICAgICAgICAgaXNBY3RpdmUgPSAhdGhpcy5pc0Rpc2FibGVkID8gYWN0aXZlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVN0YXRlKGlzQWN0aXZlKTtcblxuICAgICAgICAgICAgLy8gRmlyZSAnZXh0ZXJuYWwgY2hhbmdlJyBldmVudCBhcyB1c2VyIGlucHV0IGhhcyBvY2N1cmVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLmVtaXQoaXNBY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZChkaXNhYmxlZDpib29sZWFuKSB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHZhbHVlIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0byBjdXJyZW50IG9uZS5cbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIC8vIElmIG5vdyBkaXNhYmxlZCwgdGhlbiB0YWIgaGVhZGVyIG11c3QgYmUgZGVhY3RpdmF0ZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxseSB1cGRhdGUgYWN0aXZlIHN0YXRlLlxuICAgIHB1YmxpYyBzZXRBY3RpdmVTdGF0ZShhY3RpdmU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIC8vIElmIChjYXN0KSBhY3RpdmUgdmFsdWUgaGFzIGNoYW5nZWQ6XG4gICAgICAgIGlmICghIXRoaXMuX2lzQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBhY3RpdmU7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGFwcHJvcHJpYXRlIGFjdGl2YXRpb24gZXZlbnQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcywgZW1pdCBhIGNoYW5nZSB0byBgaXNBY3RpdmVgLCBzbyBbKGlzQWN0aXZlKV0gd29ya3MgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlLmVtaXQoYWN0aXZlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIHRhYiB3aGVuIGNsaWNrZWQsIHNvIGxvbmcgYXMgaXQgaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==