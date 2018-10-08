/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Tab = /** @class */ (function () {
    function Tab(header, content) {
        var _this = this;
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(function () { return _this.content.isActive = _this.isActive; });
    }
    Object.defineProperty(Tab.prototype, "isActive", {
        // Saves accessing .header.isActive every time.
        get: 
        // Saves accessing .header.isActive every time.
        /**
         * @return {?}
         */
        function () {
            return this.header.isActive;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            // Use `setActiveState` so as not to fire 'external changes' event.
            this.header.setActiveState(active);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "isDisabled", {
        // Saves accessing .header.isDisabled every time.
        get: 
        // Saves accessing .header.isDisabled every time.
        /**
         * @return {?}
         */
        function () {
            return this.header.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
export { Tab };
if (false) {
    /** @type {?} */
    Tab.prototype.id;
    /** @type {?} */
    Tab.prototype.header;
    /** @type {?} */
    Tab.prototype.content;
    /** @type {?} */
    Tab.prototype.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YWJzL2NsYXNzZXMvdGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQU1JLGFBQVksTUFBbUIsRUFBRSxPQUFxQjtRQUF0RCxpQkFRQztRQVBHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2Qix5RUFBeUU7UUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO2FBQ3JCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxzQkFBVyx5QkFBUTtRQURuQiwrQ0FBK0M7Ozs7OztRQUMvQztZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUVELFVBQW9CLE1BQWM7WUFDOUIsbUVBQW1FO1lBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUxBO0lBUUQsc0JBQVcsMkJBQVU7UUFEckIsaURBQWlEOzs7Ozs7UUFDakQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7OztJQTdCRyxpQkFBaUI7O0lBQ2pCLHFCQUEyQjs7SUFDM0Isc0JBQTZCOztJQUM3QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRhYiB7XG4gICAgcHVibGljIGlkOnN0cmluZztcbiAgICBwdWJsaWMgaGVhZGVyOlN1aVRhYkhlYWRlcjtcbiAgICBwdWJsaWMgY29udGVudDpTdWlUYWJDb250ZW50O1xuICAgIHB1YmxpYyBpbmRleDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihoZWFkZXI6U3VpVGFiSGVhZGVyLCBjb250ZW50OlN1aVRhYkNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGhlYWRlci5pZDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgLy8gU28gdGhhdCB0aGUgaGVhZGVyIGFuZCBjb250ZW50IGlzQWN0aXZlIHByb3BlcnRpZXMgYXJlIGFsd2F5cyBpbiBzeW5jLlxuICAgICAgICB0aGlzLmhlYWRlci5pc0FjdGl2ZUNoYW5nZVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNvbnRlbnQuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlcyBhY2Nlc3NpbmcgLmhlYWRlci5pc0FjdGl2ZSBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyLmlzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gVXNlIGBzZXRBY3RpdmVTdGF0ZWAgc28gYXMgbm90IHRvIGZpcmUgJ2V4dGVybmFsIGNoYW5nZXMnIGV2ZW50LlxuICAgICAgICB0aGlzLmhlYWRlci5zZXRBY3RpdmVTdGF0ZShhY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzRGlzYWJsZWQgZXZlcnkgdGltZS5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyLmlzRGlzYWJsZWQ7XG4gICAgfVxufVxuIl19