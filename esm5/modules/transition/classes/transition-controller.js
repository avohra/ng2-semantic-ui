/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { TransitionDirection } from "./transition";
var TransitionController = /** @class */ (function () {
    function TransitionController(isInitiallyVisible, display) {
        if (isInitiallyVisible === void 0) { isInitiallyVisible = true; }
        if (display === void 0) { display = "block"; }
        // isInitiallyVisible sets whether the element starts out visible.
        this._isVisible = isInitiallyVisible;
        this._isHidden = !this._isVisible;
        this._display = display;
        this._queue = [];
        this._isAnimating = false;
    }
    Object.defineProperty(TransitionController.prototype, "_isReady", {
        // Used to delay animations until we have an element to animate.
        get: 
        // Used to delay animations until we have an element to animate.
        /**
         * @return {?}
         */
        function () {
            return this._renderer != undefined && this._element != undefined && this._changeDetector != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isAnimating", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "_queueFirst", {
        // Gets the first transition in the queue.
        get: 
        // Gets the first transition in the queue.
        /**
         * @return {?}
         */
        function () {
            return this._queue[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "_queueLast", {
        // Gets the last transition in the queue.
        get: 
        // Gets the last transition in the queue.
        /**
         * @return {?}
         */
        function () {
            return this._queue[this._queue.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    // Sets the renderer to be used for animating.
    // Sets the renderer to be used for animating.
    /**
     * @param {?} renderer
     * @return {?}
     */
    TransitionController.prototype.registerRenderer = 
    // Sets the renderer to be used for animating.
    /**
     * @param {?} renderer
     * @return {?}
     */
    function (renderer) {
        this._renderer = renderer;
        this.performTransition();
    };
    // Sets the element to perform the animations on.
    // Sets the element to perform the animations on.
    /**
     * @param {?} element
     * @return {?}
     */
    TransitionController.prototype.registerElement = 
    // Sets the element to perform the animations on.
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this._element = element;
        this.performTransition();
    };
    // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
    // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
    /**
     * @param {?} changeDetector
     * @return {?}
     */
    TransitionController.prototype.registerChangeDetector = 
    // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
    /**
     * @param {?} changeDetector
     * @return {?}
     */
    function (changeDetector) {
        this._changeDetector = changeDetector;
        this.performTransition();
    };
    /**
     * @param {?} transition
     * @return {?}
     */
    TransitionController.prototype.animate = /**
     * @param {?} transition
     * @return {?}
     */
    function (transition) {
        // Test if transition is one of the list that doesn't change the visible state.
        // Should these eventually become classes?
        /** @type {?} */
        var isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) !== -1;
        if (isDirectionless) {
            transition.direction = TransitionDirection.Static;
        }
        else if (transition.direction == undefined || transition.direction === TransitionDirection.Either) {
            // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
            transition.direction = this._isVisible ? TransitionDirection.Out : TransitionDirection.In;
            if (this._queueLast) {
                // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
                if (this._queueLast.direction === TransitionDirection.In) {
                    transition.direction = TransitionDirection.Out;
                }
                else if (this._queueLast.direction === TransitionDirection.Out) {
                    transition.direction = TransitionDirection.In;
                }
            }
        }
        // Store the transition in the queue before attempting to perform it.
        this._queue.push(transition);
        this.performTransition();
    };
    /**
     * @return {?}
     */
    TransitionController.prototype.performTransition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isReady || this._isAnimating || !this._queueFirst) {
            // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
            return;
        }
        this._isAnimating = true;
        /** @type {?} */
        var transition = this._queueFirst;
        // Set the Semantic UI classes for transitioning.
        transition.classes.forEach(function (c) { return _this._renderer.addClass(_this._element, c); });
        this._renderer.addClass(this._element, "animating");
        this._renderer.addClass(this._element, transition.directionClass);
        // Set the Semantic UI styles for transitioning.
        this._renderer.setStyle(this._element, "animationDuration", transition.duration + "ms");
        this._renderer.setStyle(this._element, "display", this._display);
        if (transition.direction === TransitionDirection.In) {
            // Unset hidden if we are transitioning in.
            this._isHidden = false;
        }
        // Wait the length of the animation before calling the complete callback.
        this._animationTimeout = window.setTimeout(function () { return _this.finishTransition(transition); }, transition.duration);
    };
    // Called when a transition has completed.
    // Called when a transition has completed.
    /**
     * @param {?} transition
     * @return {?}
     */
    TransitionController.prototype.finishTransition = 
    // Called when a transition has completed.
    /**
     * @param {?} transition
     * @return {?}
     */
    function (transition) {
        var _this = this;
        // Unset the Semantic UI classes & styles for transitioning.
        transition.classes.forEach(function (c) { return _this._renderer.removeClass(_this._element, c); });
        this._renderer.removeClass(this._element, "animating");
        this._renderer.removeClass(this._element, transition.directionClass);
        this._renderer.removeStyle(this._element, "animationDuration");
        this._renderer.removeStyle(this._element, "display");
        if (transition.direction === TransitionDirection.In) {
            // If we have just animated in, we are now visible.
            this._isVisible = true;
        }
        else if (transition.direction === TransitionDirection.Out) {
            // If we have transitioned out, we should be invisible and hidden.
            this._isVisible = false;
            this._isHidden = true;
        }
        if (transition.onComplete) {
            // Call the user-defined transition callback.
            transition.onComplete();
        }
        // Delete the transition from the queue.
        this._queue.shift();
        this._isAnimating = false;
        this._changeDetector.markForCheck();
        // Immediately attempt to perform another transition.
        this.performTransition();
    };
    // Stops the current transition, leaves the rest of the queue intact.
    // Stops the current transition, leaves the rest of the queue intact.
    /**
     * @param {?=} transition
     * @return {?}
     */
    TransitionController.prototype.stop = 
    // Stops the current transition, leaves the rest of the queue intact.
    /**
     * @param {?=} transition
     * @return {?}
     */
    function (transition) {
        if (transition === void 0) { transition = this._queueFirst; }
        if (!transition || !this._isAnimating) {
            return;
        }
        clearTimeout(this._animationTimeout);
        this.finishTransition(transition);
    };
    // Stops the current transition, and empties the queue.
    // Stops the current transition, and empties the queue.
    /**
     * @return {?}
     */
    TransitionController.prototype.stopAll = 
    // Stops the current transition, and empties the queue.
    /**
     * @return {?}
     */
    function () {
        this.clearQueue();
        this.stop();
    };
    // Empties the transition queue but carries on with the current transition.
    // Empties the transition queue but carries on with the current transition.
    /**
     * @return {?}
     */
    TransitionController.prototype.clearQueue = 
    // Empties the transition queue but carries on with the current transition.
    /**
     * @return {?}
     */
    function () {
        if (this.isAnimating) {
            this._queue = [this._queueFirst];
            return;
        }
        this._queue = [];
    };
    return TransitionController;
}());
export { TransitionController };
if (false) {
    /** @type {?} */
    TransitionController.prototype._renderer;
    /** @type {?} */
    TransitionController.prototype._element;
    /** @type {?} */
    TransitionController.prototype._changeDetector;
    /** @type {?} */
    TransitionController.prototype._display;
    /** @type {?} */
    TransitionController.prototype._queue;
    /** @type {?} */
    TransitionController.prototype._isAnimating;
    /** @type {?} */
    TransitionController.prototype._isVisible;
    /** @type {?} */
    TransitionController.prototype._isHidden;
    /** @type {?} */
    TransitionController.prototype._animationTimeout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90cmFuc2l0aW9uL2NsYXNzZXMvdHJhbnNpdGlvbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWMsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0Q7SUFtREksOEJBQVksa0JBQWlDLEVBQUUsT0FBd0I7UUFBM0QsbUNBQUEsRUFBQSx5QkFBaUM7UUFBRSx3QkFBQSxFQUFBLGlCQUF3QjtRQUNuRSxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBcERELHNCQUFZLDBDQUFRO1FBRHBCLGdFQUFnRTs7Ozs7O1FBQ2hFO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDO1FBQzFHLENBQUM7OztPQUFBO0lBVUQsc0JBQVcsNkNBQVc7Ozs7UUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDJDQUFTOzs7O1FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVywwQ0FBUTs7OztRQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FB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O0lBUTFDLHdDQUF3Qjs7SUFHeEIsc0NBQTRCOztJQUU1Qiw0Q0FBNkI7O0lBTzdCLDBDQUEyQjs7SUFPM0IseUNBQTBCOztJQWlCMUIsaURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbkNvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMjtcblxuICAgIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmO1xuXG4gICAgLy8gVXNlZCB0byBkZWxheSBhbmltYXRpb25zIHVudGlsIHdlIGhhdmUgYW4gZWxlbWVudCB0byBhbmltYXRlLlxuICAgIHByaXZhdGUgZ2V0IF9pc1JlYWR5KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlciAhPSB1bmRlZmluZWQgJiYgdGhpcy5fZWxlbWVudCAhPSB1bmRlZmluZWQgJiYgdGhpcy5fY2hhbmdlRGV0ZWN0b3IgIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlICdkaXNwbGF5JyBzdHlsZSB3aGVuIHZpc2libGUuXG4gICAgcHJpdmF0ZSBfZGlzcGxheTpzdHJpbmc7XG5cbiAgICAvLyBTdG9yZXMgcXVldWVkIHRyYW5zaXRpb25zLlxuICAgIHByaXZhdGUgX3F1ZXVlOlRyYW5zaXRpb25bXTtcblxuICAgIHByaXZhdGUgX2lzQW5pbWF0aW5nOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzQW5pbWF0aW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FuaW1hdGluZztcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlLCBhbmQgd2hpbGUgaXQgaXMgdHJhbnNpdGlvbmluZyBvdXQuXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGhpZGRlbiwgYW5kIG5vdCB3aGlsZSBpdCBpcyB0cmFuc2l0aW9uaW5nLlxuICAgIHByaXZhdGUgX2lzSGlkZGVuOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hpZGRlbjtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBmaXJzdCB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZS5cbiAgICBwcml2YXRlIGdldCBfcXVldWVGaXJzdCgpOlRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVldWVbMF07XG4gICAgfVxuXG4gICAgLy8gR2V0cyB0aGUgbGFzdCB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZS5cbiAgICBwcml2YXRlIGdldCBfcXVldWVMYXN0KCk6VHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZVt0aGlzLl9xdWV1ZS5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIHNldFRpbWVvdXQgcG9pbnRlciBmb3IgY2FuY2VsbGluZyB0aGUgYW5pbWF0aW9uIGNhbGxiYWNrLlxuICAgIHByaXZhdGUgX2FuaW1hdGlvblRpbWVvdXQ6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaXNJbml0aWFsbHlWaXNpYmxlOmJvb2xlYW4gPSB0cnVlLCBkaXNwbGF5OnN0cmluZyA9IFwiYmxvY2tcIikge1xuICAgICAgICAvLyBpc0luaXRpYWxseVZpc2libGUgc2V0cyB3aGV0aGVyIHRoZSBlbGVtZW50IHN0YXJ0cyBvdXQgdmlzaWJsZS5cbiAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gaXNJbml0aWFsbHlWaXNpYmxlO1xuICAgICAgICB0aGlzLl9pc0hpZGRlbiA9ICF0aGlzLl9pc1Zpc2libGU7XG5cbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG5cbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSByZW5kZXJlciB0byBiZSB1c2VkIGZvciBhbmltYXRpbmcuXG4gICAgcHVibGljIHJlZ2lzdGVyUmVuZGVyZXIocmVuZGVyZXI6UmVuZGVyZXIyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIGVsZW1lbnQgdG8gcGVyZm9ybSB0aGUgYW5pbWF0aW9ucyBvbi5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnQ6RWxlbWVudFJlZik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgY2hhbmdlIGRldGVjdG9yIHRvIGRldGVjdCBjaGFuZ2VzIHdoZW4gdXNpbmcgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLlxuICAgIHB1YmxpYyByZWdpc3RlckNoYW5nZURldGVjdG9yKGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IgPSBjaGFuZ2VEZXRlY3RvcjtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmltYXRlKHRyYW5zaXRpb246VHJhbnNpdGlvbik6dm9pZCB7XG4gICAgICAgIC8vIFRlc3QgaWYgdHJhbnNpdGlvbiBpcyBvbmUgb2YgdGhlIGxpc3QgdGhhdCBkb2Vzbid0IGNoYW5nZSB0aGUgdmlzaWJsZSBzdGF0ZS5cbiAgICAgICAgLy8gU2hvdWxkIHRoZXNlIGV2ZW50dWFsbHkgYmVjb21lIGNsYXNzZXM/XG4gICAgICAgIGNvbnN0IGlzRGlyZWN0aW9ubGVzcyA9IFtcImppZ2dsZVwiLCBcImZsYXNoXCIsIFwic2hha2VcIiwgXCJwdWxzZVwiLCBcInRhZGFcIiwgXCJib3VuY2VcIl0uaW5kZXhPZih0cmFuc2l0aW9uLnR5cGUpICE9PSAtMTtcbiAgICAgICAgaWYgKGlzRGlyZWN0aW9ubGVzcykge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLlN0YXRpYztcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PSB1bmRlZmluZWQgfHwgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uRWl0aGVyKSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3Bwb3NpdGUgb2YgdGhlIGN1cnJlbnQgdmlzaWJsZSBzdGF0ZSBhdXRvbWF0aWNhbGx5IGlmIG5vdCBzZXQsIG9yIHNldCB0byBlaXRoZXIgZGlyZWN0aW9uLlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSB0aGlzLl9pc1Zpc2libGUgPyBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCA6IFRyYW5zaXRpb25EaXJlY3Rpb24uSW47XG4gICAgICAgICAgICBpZiAodGhpcy5fcXVldWVMYXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUgYWxyZWFkeSwgc2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIG9wcG9zaXRlIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhhdCB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZUxhc3QuZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9xdWV1ZUxhc3QuZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uSW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBlcmZvcm0gaXQuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnB1c2godHJhbnNpdGlvbik7XG5cbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVyZm9ybVRyYW5zaXRpb24oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1JlYWR5IHx8IHRoaXMuX2lzQW5pbWF0aW5nIHx8ICF0aGlzLl9xdWV1ZUZpcnN0KSB7XG4gICAgICAgICAgICAvLyBEb24ndCB0cmFuc2l0aW9uIHVudGlsIHdlIGFyZSByZWFkeSwgb3IgaWYgd2UgYXJlIGFuaW1hdGluZywgb3IgaWYgdGhlcmUgYXJlbid0IGFueSB0cmFuc2l0aW9ucyBpbiB0aGUgcXVldWUuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMuX3F1ZXVlRmlyc3Q7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0cmFuc2l0aW9uLmNsYXNzZXMuZm9yRWFjaChjID0+IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIGMpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYGFuaW1hdGluZ2ApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uLmRpcmVjdGlvbkNsYXNzKTtcblxuICAgICAgICAvLyBTZXQgdGhlIFNlbWFudGljIFVJIHN0eWxlcyBmb3IgdHJhbnNpdGlvbmluZy5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudCwgYGFuaW1hdGlvbkR1cmF0aW9uYCwgYCR7dHJhbnNpdGlvbi5kdXJhdGlvbn1tc2ApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50LCBgZGlzcGxheWAsIHRoaXMuX2Rpc3BsYXkpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgLy8gVW5zZXQgaGlkZGVuIGlmIHdlIGFyZSB0cmFuc2l0aW9uaW5nIGluLlxuICAgICAgICAgICAgdGhpcy5faXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhaXQgdGhlIGxlbmd0aCBvZiB0aGUgYW5pbWF0aW9uIGJlZm9yZSBjYWxsaW5nIHRoZSBjb21wbGV0ZSBjYWxsYmFjay5cbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uKSwgdHJhbnNpdGlvbi5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW4gYSB0cmFuc2l0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgcHJpdmF0ZSBmaW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb246VHJhbnNpdGlvbik6dm9pZCB7XG4gICAgICAgIC8vIFVuc2V0IHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzICYgc3R5bGVzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0cmFuc2l0aW9uLmNsYXNzZXMuZm9yRWFjaChjID0+IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIGMpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgYGFuaW1hdGluZ2ApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uLmRpcmVjdGlvbkNsYXNzKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW9uRHVyYXRpb25gKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudCwgYGRpc3BsYXlgKTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUganVzdCBhbmltYXRlZCBpbiwgd2UgYXJlIG5vdyB2aXNpYmxlLlxuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgdHJhbnNpdGlvbmVkIG91dCwgd2Ugc2hvdWxkIGJlIGludmlzaWJsZSBhbmQgaGlkZGVuLlxuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc0hpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNpdGlvbi5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSB1c2VyLWRlZmluZWQgdHJhbnNpdGlvbiBjYWxsYmFjay5cbiAgICAgICAgICAgIHRyYW5zaXRpb24ub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhlIHF1ZXVlLlxuICAgICAgICB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIC8vIEltbWVkaWF0ZWx5IGF0dGVtcHQgdG8gcGVyZm9ybSBhbm90aGVyIHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcyB0aGUgY3VycmVudCB0cmFuc2l0aW9uLCBsZWF2ZXMgdGhlIHJlc3Qgb2YgdGhlIHF1ZXVlIGludGFjdC5cbiAgICBwdWJsaWMgc3RvcCh0cmFuc2l0aW9uOlRyYW5zaXRpb24gPSB0aGlzLl9xdWV1ZUZpcnN0KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0cmFuc2l0aW9uIHx8ICF0aGlzLl9pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2FuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICB0aGlzLmZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gU3RvcHMgdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiwgYW5kIGVtcHRpZXMgdGhlIHF1ZXVlLlxuICAgIHB1YmxpYyBzdG9wQWxsKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXJRdWV1ZSgpO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvLyBFbXB0aWVzIHRoZSB0cmFuc2l0aW9uIHF1ZXVlIGJ1dCBjYXJyaWVzIG9uIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbi5cbiAgICBwdWJsaWMgY2xlYXJRdWV1ZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5fcXVldWUgPSBbdGhpcy5fcXVldWVGaXJzdF07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG59XG4iXX0=