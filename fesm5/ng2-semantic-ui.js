import { __read, __extends, __assign } from 'tslib';
import { Injectable, EventEmitter, NgModule, Renderer2, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef, Component, Output, ContentChildren, forwardRef, ApplicationRef, ComponentFactoryResolver, Injector, ReflectiveInjector, HostListener, ViewChild, ViewChildren, ViewContainerRef, TemplateRef, Host, ContentChild } from '@angular/core';
import * as $extend from 'extend';
import $extend__default, {  } from 'extend';
import { CommonModule } from '@angular/common';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import Popper from 'popper.js';
import { format, parse } from 'date-fns';
import * as defaultLocale from 'date-fns/locale/en-US';
import { mobile, tablet } from 'bowser';
import * as isUAWebView from 'is-ua-webview';
import isUAWebView__default, {  } from 'is-ua-webview';
import 'element-closest';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var enGB = {
    datepicker: {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        monthsShort: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        weekdays: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        weekdaysShort: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ],
        weekdaysNarrow: [
            "S", "M", "T", "W", "T", "F", "S"
        ],
        timesOfDay: [
            "a.m.", "p.m."
        ],
        timesOfDayUppercase: [
            "AM", "PM"
        ],
        timesOfDayLowercase: [
            "am", "pm"
        ],
        formats: {
            time: "h:mm A",
            datetime: "D MMMM YYYY h:mm A",
            date: "D MMMM YYYY",
            month: "MMMM YYYY",
            year: "YYYY"
        },
        firstDayOfWeek: 1
    },
    search: {
        placeholder: "Search...",
        noResults: {
            header: "No Results",
            message: "Your search returned no results."
        }
    },
    select: {
        noResultsMessage: "No results",
        single: {
            placeholder: "Select one"
        },
        multi: {
            placeholder: "Select...",
            maxSelectedMessage: "Max #{max} selections",
            selectedMessage: "#{count} selections"
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} obj
 * @return {?}
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * @template T, U
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function deepExtend(target, source) {
    // Rollup...
    /** @type {?} */
    var extend = $extend__default || $extend;
    return extend(true, target, source);
}
/**
 * @param {?} language
 * @return {?}
 */
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
var SuiLocalizationService = /** @class */ (function () {
    function SuiLocalizationService() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    Object.defineProperty(SuiLocalizationService.prototype, "language", {
        get: /**
         * @return {?}
         */
        function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} language
     * @return {?}
     */
    SuiLocalizationService.prototype.setLanguage = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    };
    /**
     * @param {?=} language
     * @return {?}
     */
    SuiLocalizationService.prototype.get = /**
     * @param {?=} language
     * @return {?}
     */
    function (language) {
        if (language === void 0) { language = this.language; }
        /** @type {?} */
        var values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error("Locale " + language + " is not loaded");
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    };
    /**
     * @template T
     * @param {?} values
     * @param {?} overrides
     * @return {?}
     */
    SuiLocalizationService.prototype.override = /**
     * @template T
     * @param {?} values
     * @param {?} overrides
     * @return {?}
     */
    function (values, overrides) {
        return deepExtend(deepClone(values), overrides);
    };
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    SuiLocalizationService.prototype.load = /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    function (language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    };
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    SuiLocalizationService.prototype.patch = /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    function (language, values) {
        deepExtend(this._values[lang(language)], values);
    };
    /**
     * @param {?} value
     * @param {?} variables
     * @return {?}
     */
    SuiLocalizationService.prototype.interpolate = /**
     * @param {?} value
     * @param {?} variables
     * @return {?}
     */
    function (value, variables) {
        return variables.reduce(function (s, _a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return s.replace(new RegExp("#{" + k + "}", "g"), v);
        }, value);
    };
    SuiLocalizationService.decorators = [
        { type: Injectable },
    ];
    SuiLocalizationService.ctorParameters = function () { return []; };
    return SuiLocalizationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiLocalizationModule = /** @class */ (function () {
    function SuiLocalizationModule() {
    }
    SuiLocalizationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [SuiLocalizationService]
                },] },
    ];
    return SuiLocalizationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var TransitionDirection = {
    In: 0,
    Out: 1,
    Either: 2,
    Static: 3,
};
TransitionDirection[TransitionDirection.In] = 'In';
TransitionDirection[TransitionDirection.Out] = 'Out';
TransitionDirection[TransitionDirection.Either] = 'Either';
TransitionDirection[TransitionDirection.Static] = 'Static';
var Transition = /** @class */ (function () {
    function Transition(name, duration, direction, onComplete) {
        if (duration === void 0) { duration = 250; }
        if (direction === void 0) { direction = TransitionDirection.Either; }
        if (onComplete === void 0) { onComplete = function () { }; }
        this.type = name;
        // We set a minimum duration of 1ms, to give the appearance of an immediate transition
        // whilst allowing positioning calculations to happen without a visible flicker.
        this.duration = Math.max(duration, 1);
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
    Object.defineProperty(Transition.prototype, "directionClass", {
        // Converts TransitionDirection to class name.
        get: 
        // Converts TransitionDirection to class name.
        /**
         * @return {?}
         */
        function () {
            switch (this.direction) {
                case TransitionDirection.In: return "in";
                case TransitionDirection.Out: return "out";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    return Transition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiTransition = /** @class */ (function () {
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        set: /**
         * @param {?} tC
         * @return {?}
         */
        function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // Initialises the controller with the injected renderer and elementRef.
    // Initialises the controller with the injected renderer and elementRef.
    /**
     * @param {?} transitionController
     * @return {?}
     */
    SuiTransition.prototype.setTransitionController = 
    // Initialises the controller with the injected renderer and elementRef.
    /**
     * @param {?} transitionController
     * @return {?}
     */
    function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    SuiTransition.decorators = [
        { type: Directive, args: [{
                    selector: "[suiTransition]",
                    exportAs: "transition"
                },] },
    ];
    SuiTransition.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiTransition.propDecorators = {
        suiTransition: [{ type: Input }],
        transitionClass: [{ type: HostBinding, args: ["class.transition",] }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isHidden: [{ type: HostBinding, args: ["class.hidden",] }]
    };
    return SuiTransition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiTransitionModule = /** @class */ (function () {
    function SuiTransitionModule() {
    }
    SuiTransitionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        SuiTransition
                    ],
                    exports: [
                        SuiTransition
                    ],
                    providers: []
                },] },
    ];
    return SuiTransitionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiMessage = /** @class */ (function () {
    function SuiMessage() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this.transitionController = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    /**
     * @return {?}
     */
    SuiMessage.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
            _this.isDismissed = true;
            _this.onDismiss.emit(_this);
        }));
    };
    SuiMessage.decorators = [
        { type: Component, args: [{
                    selector: "sui-message",
                    template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
                },] },
    ];
    SuiMessage.ctorParameters = function () { return []; };
    SuiMessage.propDecorators = {
        isDismissable: [{ type: Input }],
        onDismiss: [{ type: Output, args: ["dismiss",] }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        class: [{ type: Input, args: ["class",] }]
    };
    return SuiMessage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiMessageModule = /** @class */ (function () {
    function SuiMessageModule() {
    }
    SuiMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiTransitionModule
                    ],
                    declarations: [
                        SuiMessage
                    ],
                    exports: [
                        SuiMessage
                    ]
                },] },
    ];
    return SuiMessageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPagination = /** @class */ (function () {
    function SuiPagination() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    Object.defineProperty(SuiPagination.prototype, "maxSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "collectionSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collectionSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collectionSize = Math.max(value, 0);
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var maxSize = this._maxSize || this.pageCount;
            return this._hasNavigationLinks || maxSize < this.pageCount;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasNavigationLinks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setPage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "pages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    // Public methods
    // Public methods
    /**
     * @return {?}
     */
    SuiPagination.prototype.hasPrevious = 
    // Public methods
    /**
     * @return {?}
     */
    function () {
        return this.page > 1;
    };
    /**
     * @return {?}
     */
    SuiPagination.prototype.hasNext = /**
     * @return {?}
     */
    function () {
        return this.page < this.pageCount;
    };
    /**
     * @param {?} newPage
     * @return {?}
     */
    SuiPagination.prototype.setPage = /**
     * @param {?} newPage
     * @return {?}
     */
    function (newPage) {
        /** @type {?} */
        var value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    };
    // Lifecycle hooks
    // Lifecycle hooks
    /**
     * @return {?}
     */
    SuiPagination.prototype.ngOnChanges = 
    // Lifecycle hooks
    /**
     * @return {?}
     */
    function () {
        this.updatePages();
    };
    // Private methods
    // Private methods
    /**
     * @return {?}
     */
    SuiPagination.prototype.updatePages = 
    // Private methods
    /**
     * @return {?}
     */
    function () {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        var _a = __read(this.applyPagination(), 2), start = _a[0], end = _a[1];
        this._pages = Array(end - start)
            .fill(start + 1)
            .map(function (s, i) { return s + i; });
    };
    /**
     * @return {?}
     */
    SuiPagination.prototype.applyPagination = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        /** @type {?} */
        var page = Math.ceil(this.page / maxSize) - 1;
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var end = this.pageCount;
        if (this.canRotate) {
            /** @type {?} */
            var leftOffset = Math.floor(maxSize / 2);
            /** @type {?} */
            var rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    };
    SuiPagination.decorators = [
        { type: Component, args: [{
                    selector: "sui-pagination",
                    template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
                    styles: ["\n:host .item {\n    transition: none;\n}\n"]
                },] },
    ];
    SuiPagination.ctorParameters = function () { return []; };
    SuiPagination.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.pagination",] }, { type: HostBinding, args: ["class.menu",] }],
        pageChange: [{ type: Output }],
        maxSize: [{ type: Input }],
        pageSize: [{ type: Input }],
        collectionSize: [{ type: Input }],
        hasNavigationLinks: [{ type: Input }],
        hasBoundaryLinks: [{ type: Input }],
        canRotate: [{ type: Input }],
        hasEllipses: [{ type: Input }],
        page: [{ type: Input }]
    };
    return SuiPagination;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPaginationModule = /** @class */ (function () {
    function SuiPaginationModule() {
    }
    SuiPaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [SuiPagination],
                    declarations: [SuiPagination],
                    providers: []
                },] },
    ];
    return SuiPaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiAccordionPanel = /** @class */ (function () {
    function SuiAccordionPanel(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.isOpenChange = new EventEmitter(false);
    }
    Object.defineProperty(SuiAccordionPanel.prototype, "service", {
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this._service = service;
            this._changeDetector.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert to boolean (fixes false != undefined)
            /** @type {?} */
            var isOpen = !!value;
            if (isOpen !== this.isOpen) {
                // Only update if the value has changed.
                this._isOpen = isOpen;
                if (isOpen && this._service) {
                    // If we are opening this panel, we must close the other ones.
                    this._service.closeOtherPanels(this);
                }
                this.isOpenChange.emit(this.isOpen);
                // Cancel all current animations, and fade the contents. The direction is automatic.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.transition, this.transitionDuration));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "transition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._service) {
                return this._service.transition;
            }
            return "fade";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "transitionDuration", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._service) {
                // Return the service defined transition duration.
                return this._service.transitionDuration;
            }
            // Revert to instantaneous if the service is not yet loaded.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordionPanel.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    SuiAccordionPanel.decorators = [
        { type: Component, args: [{
                    selector: "sui-accordion-panel",
                    exportAs: "suiAccordionPanel",
                    template: "\n<!-- Title -->\n<div class=\"title\" [class.active]=\"isOpen\" (click)=\"toggle()\" >\n    <ng-content select=\"[title]\"></ng-content>\n</div>\n<!-- Content -->\n<div [suiCollapse]=\"!isOpen\" [collapseDuration]=\"transitionDuration\">\n    <div class=\"content\" [class.active]=\"isOpen\" [suiTransition]=\"transitionController\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n</div>\n",
                    styles: ["\n/* Manual style as Semantic UI relies on > selector */\n.content {\n    padding: .5em 0 1em;\n}\n\n/* Another > selector fix */\n:host:first-child .title {\n    border-top: none;\n}\n"]
                },] },
    ];
    SuiAccordionPanel.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SuiAccordionPanel.propDecorators = {
        isDisabled: [{ type: Input }],
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }]
    };
    return SuiAccordionPanel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiAccordionService = /** @class */ (function () {
    function SuiAccordionService() {
        this.closeOthers = true;
        this.transition = "fade";
        this.transitionDuration = 350;
        this.panels = [];
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.addPanel = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        panel.service = this;
        this.panels.push(panel);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.closeOtherPanels = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(function (p) {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    };
    return SuiAccordionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiAccordion = /** @class */ (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service.closeOthers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: /**
         * @param {?} duration
         * @return {?}
         */
        function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordion.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    /**
     * @return {?}
     */
    SuiAccordion.prototype.updatePanels = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    SuiAccordion.decorators = [
        { type: Component, args: [{
                    selector: "sui-accordion",
                    template: "\n<ng-content></ng-content>\n",
                    styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
                },] },
    ];
    SuiAccordion.ctorParameters = function () { return []; };
    SuiAccordion.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.accordion",] }],
        closeOthers: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        _panels: [{ type: ContentChildren, args: [SuiAccordionPanel,] }]
    };
    return SuiAccordion;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiCollapse = /** @class */ (function () {
    function SuiCollapse(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    Object.defineProperty(SuiCollapse.prototype, "isExpanded", {
        // Set when the collapse is open, and not animating.
        get: 
        // Set when the collapse is open, and not animating.
        /**
         * @return {?}
         */
        function () {
            return this._isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCollapse.prototype, "isCollapsed", {
        // Set when the collapse is closed, and not animating.
        get: 
        // Set when the collapse is closed, and not animating.
        /**
         * @return {?}
         */
        function () {
            return !this.isExpanded && !this.isCollapsing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCollapse.prototype, "isCollapsing", {
        // Set when the collapse is animating.
        get: 
        // Set when the collapse is animating.
        /**
         * @return {?}
         */
        function () {
            return this._isCollapsing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCollapse.prototype, "suiCollapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isExpanded;
        },
        // Sets the state of the collapse, `true` is collapsed.
        set: 
        // Sets the state of the collapse, `true` is collapsed.
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.hide();
            }
            else {
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCollapse.prototype, "_animationDuration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pristine ? 0 : this.collapseDuration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiCollapse.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, false, function () {
            _this._isCollapsing = false;
        });
    };
    /**
     * @return {?}
     */
    SuiCollapse.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, function () {
            // Remove the overflow override to enable user styling once again.
            _this._renderer.removeStyle(_this._element.nativeElement, "overflow");
            _this._isCollapsing = false;
            _this._isExpanded = true;
        });
    };
    /**
     * @param {?} startHeight
     * @param {?} endHeight
     * @param {?=} removeOnComplete
     * @param {?=} callback
     * @return {?}
     */
    SuiCollapse.prototype.animate = /**
     * @param {?} startHeight
     * @param {?} endHeight
     * @param {?=} removeOnComplete
     * @param {?=} callback
     * @return {?}
     */
    function (startHeight, endHeight, removeOnComplete, callback) {
        if (removeOnComplete === void 0) { removeOnComplete = false; }
        if (callback === void 0) { callback = function () { }; }
        /** @type {?} */
        var heightFrames = [
            {
                offset: 0,
                height: startHeight + "px"
            },
            {
                offset: 1,
                height: endHeight + "px"
            }
        ];
        if (removeOnComplete) {
            heightFrames.push({
                offset: 1,
                height: "auto"
            });
        }
        // Animate the collapse using the web animations API.
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this._element.nativeElement.animate(heightFrames, {
            delay: 0,
            // Disable animation on 1st collapse / expansion.
            duration: this._animationDuration,
            iterations: 1,
            easing: "ease",
            fill: "both"
        });
        if (this._pristine) {
            // Remove pristine flag when first hit.
            this._pristine = false;
        }
        setTimeout(function () { return callback(); }, this.collapseDuration);
    };
    SuiCollapse.decorators = [
        { type: Directive, args: [{
                    selector: "[suiCollapse]"
                },] },
    ];
    SuiCollapse.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SuiCollapse.propDecorators = {
        isExpanded: [{ type: HostBinding, args: ["class.expanded",] }],
        isCollapsed: [{ type: HostBinding, args: ["class.collapsed",] }],
        isCollapsing: [{ type: HostBinding, args: ["class.collapsing",] }],
        suiCollapse: [{ type: Input }],
        collapseDuration: [{ type: Input }]
    };
    return SuiCollapse;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiCollapseModule = /** @class */ (function () {
    function SuiCollapseModule() {
    }
    SuiCollapseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SuiCollapse
                    ],
                    exports: [
                        SuiCollapse
                    ]
                },] },
    ];
    return SuiCollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiAccordionModule = /** @class */ (function () {
    function SuiAccordionModule() {
    }
    SuiAccordionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiCollapseModule,
                        SuiTransitionModule
                    ],
                    declarations: [
                        SuiAccordion,
                        SuiAccordionPanel
                    ],
                    exports: [
                        SuiAccordion,
                        SuiAccordionPanel
                    ],
                    providers: []
                },] },
    ];
    return SuiAccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
CustomValidator = /** @class */ (function () {
    function CustomValidator(_host) {
        this._host = _host;
        this.onValidatorChange = function () { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CustomValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._host.validate(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValidatorChange = fn;
    };
    return CustomValidator;
}());
/**
 * @param {?} type
 * @return {?}
 */
function customValidatorFactory(type) {
    return {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template U, T
 */
var  /**
 * @template U, T
 */
CustomValueAccessor = /** @class */ (function () {
    function CustomValueAccessor(_host) {
        this._host = _host;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CustomValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._host.writeValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    return CustomValueAccessor;
}());
/**
 * @param {?} type
 * @return {?}
 */
function customValueAccessorFactory(type) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var KeyCode = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Escape: 27,
    Enter: 13,
    Space: 32,
    Backspace: 8,
};
KeyCode[KeyCode.Left] = 'Left';
KeyCode[KeyCode.Up] = 'Up';
KeyCode[KeyCode.Right] = 'Right';
KeyCode[KeyCode.Down] = 'Down';
KeyCode[KeyCode.Escape] = 'Escape';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.Backspace] = 'Backspace';
/** @type {?} */
var Util = {
    Array: {
        range: /**
         * @param {?} n
         * @param {?=} offset
         * @return {?}
         */
        function (n, offset) {
            if (offset === void 0) { offset = 0; }
            return Array(n).fill(0).map(function (z, i) { return i + offset; });
        },
        group: /**
         * @template T
         * @param {?} items
         * @param {?} groupLength
         * @return {?}
         */
        function (items, groupLength) {
            /** @type {?} */
            var mutable = items.slice(0);
            /** @type {?} */
            var groups = [];
            while (mutable.length > 0) {
                groups.push(mutable.splice(0, groupLength));
            }
            return groups;
        },
        groupBy: /**
         * @template T
         * @param {?} items
         * @param {?} field
         * @return {?}
         */
        function (items, field) {
            return items.reduce(function (groups, i) {
                /** @type {?} */
                var fieldValue = i[field].toString();
                groups[fieldValue] = groups[fieldValue] || [];
                groups[fieldValue].push(i);
                return groups;
            }, Object());
        },
        flatten: /**
         * @template T
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return items.reduce(function (is, i) { return is.concat(i); }, []);
        }
    },
    String: {
        padLeft: /**
         * @param {?} str
         * @param {?} length
         * @param {?} padding
         * @return {?}
         */
        function (str, length, padding) {
            /** @type {?} */
            var s = str;
            while (s.length < length) {
                s = padding + s;
            }
            return s;
        }
    },
    DOM: {
        parseBooleanAttribute: /**
         * @param {?} attributeValue
         * @return {?}
         */
        function (attributeValue) {
            /** @type {?} */
            var value = attributeValue;
            if (typeof attributeValue === "string") {
                value = true;
            }
            return value;
        }
    },
    Object: {
        readValue: /**
         * @template T, U
         * @param {?} object
         * @param {?=} path
         * @return {?}
         */
        function (object, path) {
            if (!path) {
                return (/** @type {?} */ ((/** @type {?} */ (object))));
            }
            /** @type {?} */
            var recursed = (/** @type {?} */ ((/** @type {?} */ (object))));
            for (var i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = ((/** @type {?} */ ((/** @type {?} */ (recursed)))))[p[i]];
            }
            return (/** @type {?} */ ((/** @type {?} */ (recursed))));
        }
    },
    Math: {
        round: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.round(r / n) * n;
        },
        roundUp: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.ceil(r / n) * n;
        },
        roundDown: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.floor(r / n) * n;
        },
        mod: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            /** @type {?} */
            var rem = r % n;
            if (rem < 0) {
                return rem + n;
            }
            return rem;
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var DatePrecision = {
    Decade: 0,
    Year: 1,
    Month: 2,
    Date: 3,
    Hour: 4,
    Minute: 5,
};
DatePrecision[DatePrecision.Decade] = 'Decade';
DatePrecision[DatePrecision.Year] = 'Year';
DatePrecision[DatePrecision.Month] = 'Month';
DatePrecision[DatePrecision.Date] = 'Date';
DatePrecision[DatePrecision.Hour] = 'Hour';
DatePrecision[DatePrecision.Minute] = 'Minute';
/** @type {?} */
var DateUtil = {
    startOf: /**
     * @param {?} precision
     * @param {?} date
     * @param {?=} resetAll
     * @return {?}
     */
    function (precision, date, resetAll) {
        if (resetAll === void 0) { resetAll = false; }
        switch (precision) {
            case DatePrecision.Decade:
                /** @type {?} */
                var start = Math.floor(date.getFullYear() / 10) * 10 + 1;
                date.setFullYear(start);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Year:
                date.setMonth(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Month:
                date.setDate(1);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Date:
                date.setHours(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Hour:
                date.setMinutes(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Minute:
                date.setSeconds(0, 0);
        }
        return date;
    },
    endOf: /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    function (precision, date) {
        switch (precision) {
            case DatePrecision.Year:
                date.setMonth(12, 0);
            // falls through
            case DatePrecision.Month:
                date.setMonth(date.getMonth() + 1, 0);
            // falls through
            case DatePrecision.Date:
                date.setHours(23, 59, 59, 999);
                break;
            case DatePrecision.Hour:
                date.setMinutes(59, 59, 999);
                break;
            case DatePrecision.Minute:
                date.setSeconds(59, 999);
                break;
        }
        return date;
    },
    equal: /**
     * @param {?} precision
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (precision, a, b) {
        /** @type {?} */
        var equal = true;
        switch (precision) {
            case DatePrecision.Minute:
                equal = equal && a.getMinutes() === b.getMinutes();
            // falls through
            case DatePrecision.Hour:
                equal = equal && a.getHours() === b.getHours();
            // falls through
            case DatePrecision.Date:
                equal = equal && a.getDate() === b.getDate();
            // falls through
            case DatePrecision.Month:
                equal = equal && a.getMonth() === b.getMonth();
            // falls through
            case DatePrecision.Year:
                equal = equal && a.getFullYear() === b.getFullYear();
        }
        return equal;
    },
    next: /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    function (precision, date) {
        return DateUtil.add(precision, date, 1);
    },
    add: /**
     * @param {?} precision
     * @param {?} date
     * @param {?} i
     * @return {?}
     */
    function (precision, date, i) {
        /** @type {?} */
        var year = date.getFullYear();
        /** @type {?} */
        var month = date.getMonth();
        /** @type {?} */
        var day = date.getDate();
        switch (precision) {
            case DatePrecision.Decade:
                date.setFullYear(year + i * 10);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Year:
                date.setFullYear(year + i);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Month:
                date.setMonth(month + i);
                if (date.getMonth() !== Util.Math.mod(month + i, 12)) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Date:
                date.setDate(day + i);
                break;
            case DatePrecision.Hour:
                date.setHours(date.getHours() + i);
                break;
            case DatePrecision.Minute:
                date.setMinutes(date.getMinutes() + i);
                break;
        }
        return date;
    },
    previous: /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    function (precision, date) {
        /** @type {?} */
        var year = date.getFullYear();
        /** @type {?} */
        var month = date.getMonth();
        /** @type {?} */
        var day = date.getDate();
        switch (precision) {
            case DatePrecision.Decade:
                date.setFullYear(year - 10);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Year:
                date.setFullYear(year - 1);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Month:
                date.setMonth(month - 1);
                if (date.getMonth() !== Util.Math.mod(month - 1, 12)) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Date:
                date.setDate(day - 1);
                break;
            case DatePrecision.Hour:
                /** @type {?} */
                var hours = date.getHours();
                date.setHours(hours - 1);
                if (date.getHours() !== Util.Math.mod(hours - 1, 24)) {
                    date.setHours(hours - 2);
                }
                break;
            case DatePrecision.Minute:
                /** @type {?} */
                var minutes = date.getMinutes();
                date.setMinutes(minutes - 1);
        }
        return date;
    },
    clone: /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getTime());
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiComponentFactory = /** @class */ (function () {
    function SuiComponentFactory(_applicationRef, _componentFactoryResolver, _injector) {
        this._applicationRef = _applicationRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    /**
     * @template T
     * @param {?} type
     * @param {?=} providers
     * @return {?}
     */
    SuiComponentFactory.prototype.createComponent = /**
     * @template T
     * @param {?} type
     * @param {?=} providers
     * @return {?}
     */
    function (type, providers) {
        if (providers === void 0) { providers = []; }
        // Resolve a factory for creating components of type `type`.
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (type)));
        // Resolve and create an injector with the specified providers.
        /** @type {?} */
        var injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
        // Create a component using the previously resolved factory & injector.
        /** @type {?} */
        var componentRef = factory.create(injector);
        return componentRef;
    };
    /**
     * @template T, U
     * @param {?} viewContainer
     * @param {?} template
     * @param {?} context
     * @return {?}
     */
    SuiComponentFactory.prototype.createView = /**
     * @template T, U
     * @param {?} viewContainer
     * @param {?} template
     * @param {?} context
     * @return {?}
     */
    function (viewContainer, template, context) {
        viewContainer.createEmbeddedView(template, context);
    };
    // Inserts the component into the specified view container.
    // Inserts the component into the specified view container.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    SuiComponentFactory.prototype.attachToView = 
    // Inserts the component into the specified view container.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    function (componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    };
    // Inserts the component in the root application node.
    // Inserts the component in the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.attachToApplication = 
    // Inserts the component in the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    };
    // Detaches the component from the root application node.
    // Detaches the component from the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.detachFromApplication = 
    // Detaches the component from the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    };
    // Moves the component to the specified DOM element.
    // Moves the component to the specified DOM element.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    SuiComponentFactory.prototype.moveToElement = 
    // Moves the component to the specified DOM element.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    function (componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    };
    // Moves the component to the document body.
    // Moves the component to the document body.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.moveToDocumentBody = 
    // Moves the component to the document body.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this.moveToElement(componentRef, (/** @type {?} */ (document.querySelector("body"))));
    };
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.detachFromDocument = /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        /** @type {?} */
        var element = (/** @type {?} */ (componentRef.location.nativeElement));
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
    SuiComponentFactory.decorators = [
        { type: Injectable },
    ];
    SuiComponentFactory.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    return SuiComponentFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var PositioningPlacement = {
    Auto: (/** @type {?} */ ("auto")),
    TopLeft: (/** @type {?} */ ("top left")),
    Top: (/** @type {?} */ ("top")),
    TopRight: (/** @type {?} */ ("top right")),
    LeftTop: (/** @type {?} */ ("left top")),
    Left: (/** @type {?} */ ("left")),
    LeftBottom: (/** @type {?} */ ("left bottom")),
    BottomLeft: (/** @type {?} */ ("bottom left")),
    Bottom: (/** @type {?} */ ("bottom")),
    BottomRight: (/** @type {?} */ ("bottom right")),
    RightTop: (/** @type {?} */ ("right top")),
    Right: (/** @type {?} */ ("right")),
    RightBottom: (/** @type {?} */ ("right bottom"))
};
/**
 * @param {?} placement
 * @return {?}
 */
function placementToPopper(placement) {
    if (!placement || placement === PositioningPlacement.Auto) {
        return "auto";
    }
    // All placements of the format: `direction alignment`, e.g. `top left`.
    var _a = __read(placement.split(" "), 2), direction = _a[0], alignment = _a[1];
    // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
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
    return (/** @type {?} */ (chosenPlacement.join("-")));
}
/**
 * @param {?} popper
 * @return {?}
 */
function popperToPlacement(popper) {
    if (!popper || popper === "auto") {
        return "auto";
    }
    var _a = __read(popper.split("-"), 2), direction = _a[0], alignment = _a[1];
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
    return (/** @type {?} */ (chosenPlacement.join(" ")));
}
var PositioningService = /** @class */ (function () {
    function PositioningService(anchor, subject, placement, arrowSelector) {
        this.anchor = anchor;
        this.subject = subject;
        this._placement = placement;
        this._arrowSelector = arrowSelector;
        this.init();
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
            if (this._popper) {
                this._popper.options.placement = placementToPopper(placement);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningService.prototype, "hasArrow", {
        set: /**
         * @param {?} hasArrow
         * @return {?}
         */
        function (hasArrow) {
            this._hasArrow = hasArrow;
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
    PositioningService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
                element: this._arrowSelector
            },
            offset: {
                fn: function (data) {
                    if (_this._hasArrow) {
                        /** @type {?} */
                        var offsets = _this.calculateOffsets();
                        data.offsets.popper.left += offsets.left;
                        data.offsets.popper.top += offsets.top;
                    }
                    return data;
                }
            }
        };
        if (!this._arrowSelector) {
            delete modifiers.arrow;
        }
        this._popper = (/** @type {?} */ (new Popper(this.anchor.nativeElement, this.subject.nativeElement, {
            placement: placementToPopper(this._placement),
            modifiers: modifiers,
            onCreate: function (initial) { return _this._popperState = initial; },
            onUpdate: function (update) { return _this._popperState = update; }
        })));
    };
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
    /**
     * @return {?}
     */
    PositioningService.prototype.calculateOffsets = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var left = 0;
        /** @type {?} */
        var top = 0;
        // To support correct positioning for all popup sizes we should calculate offset using em
        /** @type {?} */
        var fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
        // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
        /** @type {?} */
        var arrowCenter = (0.71428571 / 2 + 1) * fontSize;
        if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
            /** @type {?} */
            var anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
            if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                left = anchorCenterWidth - arrowCenter;
            }
            if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                left = arrowCenter - anchorCenterWidth;
            }
        }
        if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
            /** @type {?} */
            var anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
            if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                top = anchorCenterHeight - arrowCenter;
            }
            if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                top = arrowCenter - anchorCenterHeight;
            }
        }
        return { top: top, left: left, width: 0, height: 0 };
    };
    return PositioningService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiUtilityModule = /** @class */ (function () {
    function SuiUtilityModule() {
    }
    SuiUtilityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [
                        SuiComponentFactory
                    ]
                },] },
    ];
    return SuiUtilityModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiCheckbox = /** @class */ (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiCheckbox.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        this.onTouched.emit();
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiCheckbox.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isChecked = value;
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.focusCheckbox = /**
     * @return {?}
     */
    function () {
        this._checkboxElement.nativeElement.focus();
    };
    SuiCheckbox.decorators = [
        { type: Component, args: [{
                    selector: "sui-checkbox",
                    exportAs: "suiCheckbox",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                },] },
    ];
    SuiCheckbox.ctorParameters = function () { return []; };
    SuiCheckbox.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.checkbox",] }],
        name: [{ type: Input }],
        isChecked: [{ type: HostBinding, args: ["class.checked",] }],
        onCheckChange: [{ type: Output, args: ["checkChange",] }],
        onTouched: [{ type: Output, args: ["touched",] }],
        isDisabled: [{ type: Input }],
        isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
        _checkboxElement: [{ type: ViewChild, args: ["checkbox",] }],
        onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
        onClick: [{ type: HostListener, args: ["click",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout",] }]
    };
    return SuiCheckbox;
}());
var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
    __extends(SuiCheckboxValueAccessor, _super);
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiCheckboxValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-checkbox",
                    host: {
                        "(checkChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
                },] },
    ];
    SuiCheckboxValueAccessor.ctorParameters = function () { return [
        { type: SuiCheckbox }
    ]; };
    return SuiCheckboxValueAccessor;
}(CustomValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiRadio = /** @class */ (function () {
    function SuiRadio() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiRadio.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        this.onTouched.emit();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.update = /**
     * @return {?}
     */
    function () {
        this.isChecked = this.currentValue === this.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRadio.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.currentValue = value;
        this.update();
    };
    /**
     * @return {?}
     */
    SuiRadio.prototype.focusRadio = /**
     * @return {?}
     */
    function () {
        this._radioElement.nativeElement.focus();
    };
    SuiRadio.decorators = [
        { type: Component, args: [{
                    selector: "sui-radio-button",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                },] },
    ];
    SuiRadio.ctorParameters = function () { return []; };
    SuiRadio.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.radio",] }, { type: HostBinding, args: ["class.checkbox",] }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        isChecked: [{ type: HostBinding, args: ["class.checked",] }],
        onCurrentValueChange: [{ type: Output, args: ["currentValueChange",] }],
        onTouched: [{ type: Output, args: ["touched",] }],
        isDisabled: [{ type: Input }],
        isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
        _radioElement: [{ type: ViewChild, args: ["radio",] }],
        onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
        onClick: [{ type: HostListener, args: ["click",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout",] }]
    };
    return SuiRadio;
}());
/**
 * @template T
 */
var SuiRadioValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRadioValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-radio-button",
                    host: {
                        "(currentValueChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
                },] },
    ];
    SuiRadioValueAccessor.ctorParameters = function () { return [
        { type: SuiRadio }
    ]; };
    return SuiRadioValueAccessor;
}(CustomValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiRadioManager = /** @class */ (function () {
    function SuiRadioManager(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateNesting();
        this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
        this.updateRadios();
        this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateNesting = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subManagers
            .filter(function (m) { return m !== _this; })
            .forEach(function (m) { return m.isNested = true; });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateRadios = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
        this._radioSubs = [];
        /** @type {?} */
        var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(function (k) { return groups[k]; })
            .forEach(function (g) { return g
            .forEach(function (r) { return _this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe(function (v) {
            if (!_this.isNested) {
                g.forEach(function (radio) { return radio.writeValue(v); });
            }
        })); }); });
    };
    SuiRadioManager.decorators = [
        { type: Directive, args: [{
                    selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
                },] },
    ];
    SuiRadioManager.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiRadioManager.propDecorators = {
        _subManagers: [{ type: ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
        _renderedRadios: [{ type: ContentChildren, args: [SuiRadio, { descendants: true },] }]
    };
    return SuiRadioManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiCheckboxModule = /** @class */ (function () {
    function SuiCheckboxModule() {
    }
    SuiCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [
                        SuiCheckbox,
                        SuiCheckboxValueAccessor,
                        SuiRadio,
                        SuiRadioValueAccessor,
                        SuiRadioManager
                    ],
                    exports: [
                        SuiCheckbox,
                        SuiCheckboxValueAccessor,
                        SuiRadio,
                        SuiRadioValueAccessor,
                        SuiRadioManager
                    ]
                },] },
    ];
    return SuiCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
CalendarMode[CalendarMode.DateOnly] = 'DateOnly';
CalendarMode[CalendarMode.TimeOnly] = 'TimeOnly';
CalendarMode[CalendarMode.Both] = 'Both';
var CalendarService = /** @class */ (function () {
    function CalendarService(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = function () { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    Object.defineProperty(CalendarService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = config;
            config.updateBounds(this._selectedDate || this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "inFinalView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentView === this.config.mappings.finalView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDate;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date) {
                this._selectedDate = DateUtil.clone(date);
                this.currentDate = DateUtil.clone(date);
            }
            else {
                this._selectedDate = undefined;
            }
            this.config.updateBounds(this._selectedDate || this.currentDate);
            this.onManualUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "minDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._minDate && this.config.dateMinBound) {
                return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
            }
            return this._minDate || this.config.dateMinBound;
        },
        set: /**
         * @param {?} min
         * @return {?}
         */
        function (min) {
            this._minDate = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "maxDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._maxDate && this.config.dateMaxBound) {
                return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
            }
            return this._maxDate || this.config.dateMaxBound;
        },
        set: /**
         * @param {?} max
         * @return {?}
         */
        function (max) {
            this._maxDate = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "firstDayOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstDayOfWeek;
        },
        set: /**
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        function (firstDayOfWeek) {
            if (firstDayOfWeek != undefined) {
                this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            /** @type {?} */
            var current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    };
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.changeDate = /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    function (date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    };
    /**
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.zoomOut = /**
     * @param {?} fromView
     * @return {?}
     */
    function (fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    };
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.updateView = /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    function (mappings, fromView) {
        /** @type {?} */
        var mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    };
    return CalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarItem = /** @class */ (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
var SuiCalendarItem = /** @class */ (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiCalendarItem.prototype.onMouseMove = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    /**
     * @return {?}
     */
    SuiCalendarItem.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    SuiCalendarItem.decorators = [
        { type: Directive, args: [{
                    selector: "[calendarItem]"
                },] },
    ];
    SuiCalendarItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SuiCalendarItem.propDecorators = {
        item: [{ type: Input, args: ["calendarItem",] }],
        isSelectable: [{ type: HostBinding, args: ["class.disabled",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isToday: [{ type: HostBinding, args: ["class.today",] }],
        hasFocus: [{ type: HostBinding, args: ["class.focus",] }],
        onMouseMove: [{ type: HostListener, args: ["mousemove",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
    };
    return SuiCalendarItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var CalendarViewType = {
    Year: 0,
    Month: 1,
    Date: 2,
    Hour: 3,
    Minute: 4,
};
CalendarViewType[CalendarViewType.Year] = 'Year';
CalendarViewType[CalendarViewType.Month] = 'Month';
CalendarViewType[CalendarViewType.Date] = 'Date';
CalendarViewType[CalendarViewType.Hour] = 'Hour';
CalendarViewType[CalendarViewType.Minute] = 'Minute';
/**
 * @abstract
 */
var CalendarView = /** @class */ (function () {
    function CalendarView(renderer, viewType, ranges) {
        var _this = this;
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", function (e) { return _this.onDocumentKeyDown(e); });
    }
    Object.defineProperty(CalendarView.prototype, "service", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            var _this = this;
            this._service = service;
            this.ranges.loadService(service);
            this.service.onManualUpdate = function () {
                _this.ranges.refresh();
                delete _this._highlightedItem;
                _this.autoHighlight();
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "currentDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.currentDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.selectedDate;
        },
        enumerable: true,
        configurable: true
    });
    // Template Methods
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarView.prototype.setDate = 
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.service.changeDate(item.date, this._type);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        this.service.zoomOut(this._type);
    };
    // Keyboard Control
    // Keyboard Control
    /**
     * @return {?}
     */
    CalendarView.prototype.ngAfterViewInit = 
    // Keyboard Control
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderedItems.changes.subscribe(function () { return _this.onRenderedItemsChanged(); });
        this.onRenderedItemsChanged();
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.onRenderedItemsChanged = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderedItems.forEach(function (i) {
            return i.onFocussed.subscribe(function (hasFocus) {
                if (hasFocus) {
                    _this.highlightItem(i.item);
                }
            });
        });
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.autoHighlight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        /** @type {?} */
        var initiallyHighlighted = this.ranges.current.items.find(function (i) { return _this.ranges.dateComparer.equal(i.date, date); });
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarView.prototype.highlightItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this._renderedItems.forEach(function (i) { return i.hasFocus = false; });
            /** @type {?} */
            var rendered = this._renderedItems.find(function (ri) { return ri.item === item; });
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarView.prototype.onDocumentKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        /** @type {?} */
        var index = this.ranges.current.findIndex(this._highlightedItem);
        /** @type {?} */
        var isMovingForward = true;
        /** @type {?} */
        var delta = 0;
        switch (e.keyCode) {
            case KeyCode.Right:
                delta += 1;
                break;
            case KeyCode.Left:
                delta -= 1;
                isMovingForward = false;
                break;
            case KeyCode.Down:
                delta += this.ranges.columns;
                break;
            case KeyCode.Up:
                delta -= this.ranges.columns;
                isMovingForward = false;
                break;
            default:
                return;
        }
        // Stop these keypresses being captured elsewhere.
        e.preventDefault();
        /** @type {?} */
        var nextItem = this.ranges.current.items[index + delta];
        if (nextItem && nextItem.isDisabled) {
            return;
        }
        if (nextItem && !nextItem.isOutsideRange) {
            return this.highlightItem(nextItem);
        }
        if (nextItem && nextItem.isOutsideRange) {
            if (index + delta >= this.ranges.current.inRange.length) {
                isMovingForward = true;
            }
        }
        if (!nextItem) {
            /** @type {?} */
            var adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            /** @type {?} */
            var nextItems = this.ranges.calc(isMovingForward).inRange;
            if (isMovingForward) {
                adjustedIndex -= this.ranges.current.inRange.length;
            }
            else {
                adjustedIndex += nextItems.length;
            }
            nextItem = nextItems[adjustedIndex + delta];
            if (nextItem.isDisabled) {
                return;
            }
        }
        this.ranges.move(isMovingForward);
        this._highlightedItem = this.ranges.current.find(nextItem);
    };
    /**
     * @return {?}
     */
    CalendarView.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._documentKeyDownListener();
    };
    CalendarView.propDecorators = {
        _renderedItems: [{ type: ViewChildren, args: [SuiCalendarItem,] }],
        service: [{ type: Input }]
    };
    return CalendarView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarMappings = /** @class */ (function () {
    function CalendarMappings() {
    }
    return CalendarMappings;
}());
var DateMappings = /** @class */ (function (_super) {
    __extends(DateMappings, _super);
    function DateMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Date;
        _this.finalView = CalendarViewType.Date;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Date]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month]
        ]);
        return _this;
    }
    return DateMappings;
}(CalendarMappings));
var TimeMappings = /** @class */ (function (_super) {
    __extends(TimeMappings, _super);
    function TimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Hour;
        _this.finalView = CalendarViewType.Minute;
        _this.changed = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
        return _this;
    }
    return TimeMappings;
}(CalendarMappings));
var DatetimeMappings = /** @class */ (function (_super) {
    __extends(DatetimeMappings, _super);
    function DatetimeMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Date;
        _this.finalView = CalendarViewType.Minute;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Hour],
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month],
            [CalendarViewType.Hour, CalendarViewType.Date],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
        return _this;
    }
    return DatetimeMappings;
}(CalendarMappings));
var MonthMappings = /** @class */ (function (_super) {
    __extends(MonthMappings, _super);
    function MonthMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Month;
        _this.finalView = CalendarViewType.Month;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Month]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Year]
        ]);
        return _this;
    }
    return MonthMappings;
}(CalendarMappings));
var YearMappings = /** @class */ (function (_super) {
    __extends(YearMappings, _super);
    function YearMappings() {
        var _this = _super.call(this) || this;
        _this.initialView = CalendarViewType.Year;
        _this.finalView = CalendarViewType.Year;
        _this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        _this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        return _this;
    }
    return YearMappings;
}(CalendarMappings));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarConfig = /** @class */ (function () {
    function CalendarConfig(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    CalendarConfig.prototype.updateBounds = /**
     * @param {?} providedDate
     * @return {?}
     */
    function (providedDate) {
        this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    };
    return CalendarConfig;
}());
var DateConfigBase = /** @class */ (function (_super) {
    __extends(DateConfigBase, _super);
    function DateConfigBase(precision, mappings, fallback) {
        return _super.call(this, CalendarMode.DateOnly, precision, mappings, fallback) || this;
    }
    return DateConfigBase;
}(CalendarConfig));
var YearConfig = /** @class */ (function (_super) {
    __extends(YearConfig, _super);
    function YearConfig() {
        return _super.call(this, DatePrecision.Year, new YearMappings(), "number") || this;
    }
    return YearConfig;
}(DateConfigBase));
var MonthConfig = /** @class */ (function (_super) {
    __extends(MonthConfig, _super);
    function MonthConfig() {
        return _super.call(this, DatePrecision.Month, new MonthMappings(), "month") || this;
    }
    return MonthConfig;
}(DateConfigBase));
var DateConfig = /** @class */ (function (_super) {
    __extends(DateConfig, _super);
    function DateConfig() {
        return _super.call(this, DatePrecision.Date, new DateMappings(), "date") || this;
    }
    return DateConfig;
}(DateConfigBase));
var DatetimeConfig = /** @class */ (function (_super) {
    __extends(DatetimeConfig, _super);
    function DatetimeConfig() {
        return _super.call(this, CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local") || this;
    }
    return DatetimeConfig;
}(CalendarConfig));
var TimeConfig = /** @class */ (function (_super) {
    __extends(TimeConfig, _super);
    function TimeConfig() {
        return _super.call(this, CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time") || this;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    TimeConfig.prototype.updateBounds = /**
     * @param {?} providedDate
     * @return {?}
     */
    function (providedDate) {
        this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
        this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
    };
    return TimeConfig;
}(CalendarConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateComparer = /** @class */ (function () {
    function DateComparer(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.equal = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._precision === DatePrecision.Minute) {
            return !!b &&
                DateUtil.equal(DatePrecision.Hour, b, a) &&
                Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && DateUtil.equal(this._precision, a, b);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.lessThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.greaterThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
    };
    /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateComparer.prototype.between = /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    };
    return DateComparer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} values
 * @param {?} defaultType
 * @param {?=} indexCallback
 * @return {?}
 */
function buildLocalizeFn(values, defaultType, indexCallback) {
    return function (dirtyIndex, _a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        /** @type {?} */
        var index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
        return values[type][index];
    };
}
/**
 * @param {?} values
 * @param {?} defaultType
 * @return {?}
 */
function buildLocalizeArrayFn(values, defaultType) {
    return function (_a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        return values[type];
    };
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildMatchFn(patterns, defaultType) {
    return function (dirtyString, _a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        return dirtyString.match("^(" + patterns[type].join("|") + ")");
    };
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildParseFn(patterns, defaultType) {
    return function (_a, _b) {
        var _c = __read(_a, 2), result = _c[1];
        var type = (_b === void 0 ? { type: defaultType } : _b).type;
        return (patterns[type] || patterns[defaultType])
            .map(function (p) { return new RegExp("^" + p); })
            .findIndex(function (pattern) { return pattern.test(result); });
    };
}
var DateFnsParser = /** @class */ (function () {
    function DateFnsParser(locale) {
        this._weekStartsOn = (/** @type {?} */ (locale.firstDayOfWeek));
        /** @type {?} */
        var weekdayValues = {
            long: locale.weekdays,
            short: locale.weekdaysShort,
            narrow: locale.weekdaysNarrow
        };
        /** @type {?} */
        var monthValues = {
            long: locale.months,
            short: locale.monthsShort
        };
        /** @type {?} */
        var timeOfDayValues = {
            long: locale.timesOfDay,
            uppercase: locale.timesOfDayUppercase,
            lowercase: locale.timesOfDayLowercase
        };
        /** @type {?} */
        var timeOfDayMatchValues = {
            long: locale.timesOfDay,
            short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
        };
        this._locale = (/** @type {?} */ (defaultLocale));
        this._locale.localize = __assign({}, this._locale.localize, {
            weekday: buildLocalizeFn(weekdayValues, "long"),
            weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
            month: buildLocalizeFn(monthValues, "long"),
            months: buildLocalizeArrayFn(monthValues, "long"),
            timeOfDay: buildLocalizeFn(timeOfDayValues, "long", function (hours) {
                return hours / 12 >= 1 ? 1 : 0;
            }),
            timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
        });
        this._locale.match = __assign({}, this._locale.match, {
            weekdays: buildMatchFn(weekdayValues, "long"),
            weekday: buildParseFn(weekdayValues, "long"),
            months: buildMatchFn(monthValues, "long"),
            month: buildParseFn(monthValues, "long"),
            timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
            timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
        });
    }
    Object.defineProperty(DateFnsParser.prototype, "_config", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                weekStartsOn: this._weekStartsOn,
                locale: this._locale
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    DateFnsParser.prototype.format = /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    function (d, f) {
        return format(d, f, this._config);
    };
    /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    DateFnsParser.prototype.parse = /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    function (dS, f, bD) {
        return parse(dS, f, bD, this._config);
    };
    return DateFnsParser;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateParser = /** @class */ (function () {
    function DateParser(format$$1, locale) {
        this._format = format$$1;
        this._parser = new DateFnsParser(locale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateParser.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._parser.format(date, this._format);
    };
    /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    DateParser.prototype.parse = /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    function (dateString, baseDate) {
        if (baseDate === void 0) { baseDate = new Date(); }
        return this._parser.parse(dateString, this._format, baseDate);
    };
    return DateParser;
}());
var InternalDateParser = /** @class */ (function (_super) {
    __extends(InternalDateParser, _super);
    function InternalDateParser(mode, locale) {
        var _this = this;
        /** @type {?} */
        var internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        _this = _super.call(this, internalFormats[mode], locale) || this;
        return _this;
    }
    return InternalDateParser;
}(DateParser));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRange = /** @class */ (function () {
    function CalendarRange(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    Object.defineProperty(CalendarRange.prototype, "inRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.items.filter(function (i) { return !i.isOutsideRange; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.find = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.items.find(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.findIndex = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!item) {
            return -1;
        }
        return this.items.findIndex(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRange.prototype.containsDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        return !!this.inRange.find(function (i) { return _this._comparer.equal(i.date, date); });
    };
    return CalendarRange;
}());
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CalendarRangeService = /** @class */ (function () {
    function CalendarRangeService(interval, rows, columns) {
        this.interval = interval;
        this.marginal = (/** @type {?} */ (interval)) + 1;
        this.rows = rows;
        this.columns = columns;
    }
    Object.defineProperty(CalendarRangeService.prototype, "dateComparer", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateComparer(this.marginal, this.service.inFinalView);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rows * this.columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMoveNext", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var firstItem = this.next.inRange[0];
            if (firstItem && this.service.maxDate) {
                return firstItem.date <= this.service.maxDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMovePrevious", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var lastItem = this.previous.inRange.slice(-1).pop();
            if (lastItem && this.service.minDate) {
                return lastItem.date >= this.service.minDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} service
     * @return {?}
     */
    CalendarRangeService.prototype.loadService = /**
     * @param {?} service
     * @return {?}
     */
    function (service) {
        this.service = service;
        this.refresh();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.move = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.moveNext = /**
     * @return {?}
     */
    function () {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.movePrevious = /**
     * @return {?}
     */
    function () {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.calc = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    };
    /**
     * @param {?} startDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcRange = /**
     * @param {?} startDate
     * @return {?}
     */
    function (startDate) {
        /** @type {?} */
        var start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        /** @type {?} */
        var dates = this.calcDates(start);
        /** @type {?} */
        var items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRangeService.prototype.calcStart = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    };
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    CalendarRangeService.prototype.calcDates = /**
     * @param {?} rangeStart
     * @return {?}
     */
    function (rangeStart) {
        var _this = this;
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(_this.marginal, DateUtil.clone(rangeStart), i); });
    };
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcItems = /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    function (dateRange, baseDate) {
        var _this = this;
        return dateRange.map(function (date) {
            /** @type {?} */
            var item = new CalendarItem(date);
            item.isDisabled = !_this.dateComparer.between(item.date, _this.service.minDate, _this.service.maxDate);
            item.isActive = _this.dateComparer.equal(item.date, _this.service.selectedDate);
            item.isToday = _this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            _this.configureItem(item, baseDate);
            return item;
        });
    };
    return CalendarRangeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiCalendarViewTitle = /** @class */ (function () {
    function SuiCalendarViewTitle() {
        this.onZoomOut = new EventEmitter();
    }
    SuiCalendarViewTitle.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-view-title",
                    template: "\n<span class=\"title link\" (click)=\"onZoomOut.emit()\">\n    <ng-content></ng-content>\n</span>\n<span class=\"prev link\" [class.disabled]=\"!ranges?.canMovePrevious\" (click)=\"ranges?.movePrevious()\">\n    <i class=\"chevron left icon\"></i>\n</span>\n<span class=\"next link\" [class.disabled]=\"!ranges?.canMoveNext\" (click)=\"ranges?.moveNext()\">\n    <i class=\"chevron right icon\"></i>\n</span>\n",
                    styles: ["\n.title.link {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n"]
                },] },
    ];
    SuiCalendarViewTitle.ctorParameters = function () { return []; };
    SuiCalendarViewTitle.propDecorators = {
        ranges: [{ type: Input }],
        onZoomOut: [{ type: Output, args: ["zoomOut",] }]
    };
    return SuiCalendarViewTitle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DatepickerMode = {
    Year: (/** @type {?} */ ("year")),
    Month: (/** @type {?} */ ("month")),
    Date: (/** @type {?} */ ("date")),
    Datetime: (/** @type {?} */ ("datetime")),
    Time: (/** @type {?} */ ("time"))
};
var SuiDatepicker = /** @class */ (function () {
    function SuiDatepicker(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDatepicker.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    SuiDatepicker.decorators = [
        { type: Component, args: [{
                    selector: "sui-datepicker",
                    template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>    \n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>    \n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>    \n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>    \n</ng-container>\n",
                    styles: ["\n:host {\n    user-select: none;\n}\n"]
                },] },
    ];
    SuiDatepicker.ctorParameters = function () { return [
        { type: SuiLocalizationService }
    ]; };
    SuiDatepicker.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.active",] }, { type: HostBinding, args: ["class.calendar",] }],
        onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }]
    };
    return SuiDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var PopupTrigger = {
    Hover: (/** @type {?} */ ("hover")),
    Click: (/** @type {?} */ ("click")),
    OutsideClick: (/** @type {?} */ ("outsideClick")),
    Focus: (/** @type {?} */ ("focus")),
    Manual: (/** @type {?} */ ("manual"))
};
var PopupConfig = /** @class */ (function () {
    function PopupConfig(defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
    return PopupConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPopup = /** @class */ (function () {
    function SuiPopup(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    Object.defineProperty(SuiPopup.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "anchor", {
        set: /**
         * @param {?} anchor
         * @return {?}
         */
        function (anchor) {
            this._anchor = anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        get: 
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        /**
         * @return {?}
         */
        function () {
            // We need to set direction attribute before popper init to allow correct positioning
            return this.config.placement.split(" ").shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "alignment", {
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        get: 
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        /**
         * @return {?}
         */
        function () {
            return this.config.placement.split(" ").pop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = {};
            if (this.direction) {
                classes[this.direction] = true;
            }
            if (this.alignment) {
                classes[this.alignment] = true;
            }
            if (this.config.isInverted) {
                classes.inverted = true;
            }
            if (this.config.isBasic) {
                classes.basic = true;
            }
            if (this.config.isFlowing) {
                classes.flowing = true;
            }
            if (this.config.size) {
                classes[this.config.size] = true;
            }
            if (this.config.width) {
                classes[this.config.width] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopup.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(function () {
                _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                _this.positioningService.hasArrow = !_this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                // Focus any element with [autofocus] attribute.
                /** @type {?} */
                var autoFocus = (/** @type {?} */ (_this.elementRef.nativeElement.querySelector("[autofocus]")));
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(function () { return autoFocus.focus(); }, 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    };
    /**
     * @return {?}
     */
    SuiPopup.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopup.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiPopup.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    };
    SuiPopup.decorators = [
        { type: Component, args: [{
                    selector: "sui-popup",
                    template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                    styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
                },] },
    ];
    SuiPopup.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiPopup.propDecorators = {
        _container: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiPopup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var SuiPopupController = /** @class */ (function () {
    function SuiPopupController(_renderer, _element, _componentFactory, config) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(function () { return _this.cleanup(); });
    }
    Object.defineProperty(SuiPopupController.prototype, "popup", {
        // Returns generated popup instance.
        get: 
        // Returns generated popup instance.
        /**
         * @return {?}
         */
        function () {
            // Use non-null assertion as we only access this when a popup exists.
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} config
     * @return {?}
     */
    SuiPopupController.prototype.configure = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.openDelayed = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(function () { return _this.open(); }, this.popup.config.delay);
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Attach the generated component to the current application.
        this._componentFactory.attachToApplication(this._componentRef);
        if (this.popup.config.isInline) {
            this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
        }
        else {
            // Move the generated element to the body to avoid any positioning issues.
            this._componentFactory.moveToDocumentBody(this._componentRef);
        }
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", function (e) {
            return _this.onDocumentClick(e);
        });
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        /** @type {?} */
        var lifecycle = ((/** @type {?} */ (this))).popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.close = /**
     * @return {?}
     */
    function () {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        /** @type {?} */
        var lifecycle = ((/** @type {?} */ (this))).popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.toggleDelayed = /**
     * @return {?}
     */
    function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.toggle = /**
     * @return {?}
     */
    function () {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Click ||
            this.popup.config.trigger === PopupTrigger.OutsideClick) {
            // Repeated clicks require a toggle, rather than just opening the popup each time.
            this.toggleDelayed();
        }
        else if (this.popup.config.trigger === PopupTrigger.Focus &&
            (!this._componentRef || (this._componentRef && !this.popup.isOpen))) {
            // Repeated clicks with a focus trigger requires an open (as focus isn't ever lost on repeated click).
            this.openDelayed();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiPopupController.prototype.onDocumentClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            /** @type {?} */
            var target = (/** @type {?} */ (e.target));
            // Close the popup if the click is outside of the popup element.
            if (!((/** @type {?} */ (this._element.nativeElement))).contains(target)) {
                this.close();
            }
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiPopupController.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupController.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cleanup();
    };
    SuiPopupController.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }],
        onClick: [{ type: HostListener, args: ["click",] }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
    };
    return SuiPopupController;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
SuiPopupComponentController = /** @class */ (function (_super) {
    __extends(SuiPopupComponentController, _super);
    function SuiPopupComponentController(renderer, element, componentFactory, _component, config) {
        var _this = _super.call(this, renderer, element, componentFactory, config) || this;
        _this._component = _component;
        return _this;
    }
    Object.defineProperty(SuiPopupComponentController.prototype, "componentInstance", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._contentComponentRef) {
                return this._contentComponentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopupComponentController.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._contentComponentRef) {
            this._contentComponentRef = this._componentFactory.createComponent((/** @type {?} */ (this._component)));
            this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
        }
        _super.prototype.open.call(this);
    };
    /**
     * @return {?}
     */
    SuiPopupComponentController.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        _super.prototype.cleanup.call(this);
        if (this._contentComponentRef) {
            this._contentComponentRef.destroy();
            this._contentComponentRef = undefined;
        }
    };
    return SuiPopupComponentController;
}(SuiPopupController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
TemplatePopupConfig = /** @class */ (function (_super) {
    __extends(TemplatePopupConfig, _super);
    function TemplatePopupConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TemplatePopupConfig;
}(PopupConfig));
/**
 * @template T
 */
var  /**
 * @template T
 */
SuiPopupTemplateController = /** @class */ (function (_super) {
    __extends(SuiPopupTemplateController, _super);
    function SuiPopupTemplateController(renderer, element, componentFactory, config) {
        return _super.call(this, renderer, element, componentFactory, config) || this;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    SuiPopupTemplateController.prototype.configure = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        _super.prototype.configure.call(this, config);
        if (config) {
            this.template = config.template;
            this.context = config.context;
        }
    };
    /**
     * @return {?}
     */
    SuiPopupTemplateController.prototype.open = /**
     * @return {?}
     */
    function () {
        // If there is a template, inject it into the view.
        if (this.template) {
            this.popup.templateSibling.clear();
            this._componentFactory.createView(this.popup.templateSibling, this.template, {
                $implicit: this.popup,
                context: this.context
            });
        }
        _super.prototype.open.call(this);
    };
    return SuiPopupTemplateController;
}(SuiPopupController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPopupArrow = /** @class */ (function () {
    function SuiPopupArrow() {
    }
    Object.defineProperty(SuiPopupArrow.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.placement) {
                return this.placement.split(" ").shift();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupArrow.prototype, "alignment", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.placement) {
                /** @type {?} */
                var alignment = this.placement.split(" ").pop();
                if (alignment === this.direction) {
                    return "center";
                }
                return alignment;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupArrow.decorators = [
        { type: Component, args: [{
                    selector: "sui-popup-arrow",
                    template: "\n<div class=\"dynamic arrow\" [attr.direction]=\"direction\" *ngIf=\"alignment == 'center'\"></div>\n<div class=\"static arrow\" [attr.direction]=\"direction\" [attr.alignment]=\"alignment\" *ngIf=\"alignment != 'center'\"></div>\n",
                    styles: ["\n.arrow {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n:host.inverted .arrow {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"],\n.static.arrow[direction=\"top\"][alignment=\"left\"] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"],\n.static.arrow[direction=\"right\"][alignment=\"top\"] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"],\n.static.arrow[direction=\"top\"][alignment=\"right\"] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"],\n.static.arrow[direction=\"right\"][alignment=\"bottom\"] {\n    top: auto;\n    bottom: 1em;\n}\n"]
                },] },
    ];
    SuiPopupArrow.propDecorators = {
        placement: [{ type: Input }],
        inverted: [{ type: HostBinding, args: ["class.inverted",] }, { type: Input }]
    };
    return SuiPopupArrow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPopupConfig = /** @class */ (function (_super) {
    __extends(SuiPopupConfig, _super);
    function SuiPopupConfig() {
        // We use an empty constructor to ensure Angular DI works correctly.
        return _super.call(this) || this;
    }
    SuiPopupConfig.decorators = [
        { type: Injectable },
    ];
    SuiPopupConfig.ctorParameters = function () { return []; };
    return SuiPopupConfig;
}(PopupConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiPopupDirective = /** @class */ (function (_super) {
    __extends(SuiPopupDirective, _super);
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
    Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
        set: /**
         * @param {?} inline
         * @return {?}
         */
        function (inline) {
            this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
        set: /**
         * @param {?} flowing
         * @return {?}
         */
        function (flowing) {
            this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
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
    Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
        set: /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this.popup.config.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this.popup.config.size = size;
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
        popupInline: [{ type: Input }],
        popupFlowing: [{ type: Input }],
        popupTransition: [{ type: Input }],
        popupTransitionDuration: [{ type: Input }],
        popupPlacement: [{ type: Input }],
        popupWidth: [{ type: Input }],
        popupSize: [{ type: Input }],
        popupDelay: [{ type: Input }],
        popupTrigger: [{ type: Input }],
        popupTemplate: [{ type: Input }],
        popupTemplateContext: [{ type: Input }],
        popupConfig: [{ type: Input }]
    };
    return SuiPopupDirective;
}(SuiPopupTemplateController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiPopupModule = /** @class */ (function () {
    function SuiPopupModule() {
    }
    SuiPopupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiTransitionModule,
                        SuiUtilityModule
                    ],
                    declarations: [
                        SuiPopupDirective,
                        SuiPopupArrow,
                        SuiPopup
                    ],
                    exports: [
                        SuiPopupDirective,
                        SuiPopup
                    ],
                    providers: [
                        SuiPopupConfig
                    ],
                    entryComponents: [
                        SuiPopup
                    ]
                },] },
    ];
    return SuiPopupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDatepickerDirective = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirective, _super);
    function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
        var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        })) || this;
        _this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
        _this.onLocaleUpdate();
        _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        _this.onSelectedDateChange = new EventEmitter();
        _this.onValidatorChange = new EventEmitter();
        _this.mode = DatepickerMode.Datetime;
        return _this;
    }
    Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDate;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._selectedDate = date;
            this.onSelectedDateChange.emit(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._mode = mode || DatepickerMode.Datetime;
            switch (this._mode) {
                case DatepickerMode.Year:
                    this.config = new YearConfig();
                    break;
                case DatepickerMode.Month:
                    this.config = new MonthConfig();
                    break;
                case DatepickerMode.Date:
                default:
                    this.config = new DateConfig();
                    break;
                case DatepickerMode.Datetime:
                    this.config = new DatetimeConfig();
                    break;
                case DatepickerMode.Time:
                    this.config = new TimeConfig();
                    break;
            }
            this.writeValue(this.selectedDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this.localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
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
    Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
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
    Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
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
    /**
     * @return {?}
     */
    SuiDatepickerDirective.prototype.popupOnOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe(function (d) {
                _this.selectedDate = d;
                _this.close();
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SuiDatepickerDirective.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    };
    /**
     * @return {?}
     */
    SuiDatepickerDirective.prototype.onLocaleUpdate = /**
     * @return {?}
     */
    function () {
        this._localeValues = this.localizationService.get().datepicker;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    SuiDatepickerDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiDatepickerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDatepickerDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    };
    SuiDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[suiDatepicker]",
                    providers: [customValidatorFactory(SuiDatepickerDirective)]
                },] },
    ];
    SuiDatepickerDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: SuiLocalizationService }
    ]; };
    SuiDatepickerDirective.propDecorators = {
        mode: [{ type: Input, args: ["pickerMode",] }],
        initialDate: [{ type: Input, args: ["pickerInitialDate",] }],
        maxDate: [{ type: Input, args: ["pickerMaxDate",] }],
        minDate: [{ type: Input, args: ["pickerMinDate",] }],
        firstDayOfWeek: [{ type: Input, args: ["pickerFirstDayOfWeek",] }],
        localeOverrides: [{ type: Input, args: ["pickerLocaleOverrides",] }],
        placement: [{ type: Input, args: ["pickerPlacement",] }],
        transition: [{ type: Input, args: ["pickerTransition",] }],
        transitionDuration: [{ type: Input, args: ["pickerTransitionDuration",] }],
        onSelectedDateChange: [{ type: Output, args: ["pickerSelectedDateChange",] }],
        onValidatorChange: [{ type: Output, args: ["pickerValidatorChange",] }],
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return SuiDatepickerDirective;
}(SuiPopupComponentController));
var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValueAccessor, _super);
    function SuiDatepickerDirectiveValueAccessor(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "[suiDatepicker]",
                    host: { "(pickerSelectedDateChange)": "onChange($event)" },
                    providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
                },] },
    ];
    SuiDatepickerDirectiveValueAccessor.ctorParameters = function () { return [
        { type: SuiDatepickerDirective }
    ]; };
    return SuiDatepickerDirectiveValueAccessor;
}(CustomValueAccessor));
var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValidator, _super);
    function SuiDatepickerDirectiveValidator(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValidator.decorators = [
        { type: Directive, args: [{
                    selector: "[suiDatepicker]",
                    host: { "(pickerValidatorChange)": "onValidatorChange()" },
                    providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
                },] },
    ];
    SuiDatepickerDirectiveValidator.ctorParameters = function () { return [
        { type: SuiDatepickerDirective }
    ]; };
    return SuiDatepickerDirectiveValidator;
}(CustomValidator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var isWebView = isUAWebView__default || isUAWebView;
var SuiDatepickerInputDirective = /** @class */ (function () {
    function SuiDatepickerInputDirective(datepicker, valueAccessor, _renderer, _element, localizationService) {
        var _this = this;
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(function () {
            return _this.updateValue(_this.selectedDateString);
        });
        localizationService.onLanguageUpdate.subscribe(function () {
            return _this.updateValue(_this.selectedDateString);
        });
    }
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "useNativeOnMobile", {
        get: /**
         * @return {?}
         */
        function () {
            return this._useNativeOnMobile;
        },
        set: /**
         * @param {?} fallback
         * @return {?}
         */
        function (fallback) {
            this._useNativeOnMobile = fallback;
            /** @type {?} */
            var isOnMobile = mobile || tablet || isWebView(navigator.userAgent);
            this.fallbackActive = this.useNativeOnMobile && isOnMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "fallbackActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fallbackActive;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            this._fallbackActive = active;
            // If the fallback is active, then the trigger must be manual so the datepicker never opens.
            this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
            // Update the input value (this will insert the `T` as required).
            this.updateValue(this.selectedDateString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "parser", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.fallbackActive) {
                return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
            }
            return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "selectedDateString", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.datepicker.selectedDate) {
                return this.parser.format(this.datepicker.selectedDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.fallbackActive) {
                return this.datepicker.config.fallback;
            }
            return "text";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "max", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.fallbackActive && this.datepicker.maxDate) {
                // Since HTML doesn't use a date object max is somewhat tricky.
                // Our Datepicker will always choose the 1st date on the provided precision,
                // meaning anything below the maxDate will work, hence endOf.
                /** @type {?} */
                var max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
                return this.parser.format(max);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "min", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.fallbackActive && this.datepicker.minDate) {
                // Since HTML doesn't use a date object min is somewhat tricky.
                // We use 1 minute before the next date at the configured precision since
                // our Datepicker picks the first available date at that precision.
                /** @type {?} */
                var min = DateUtil.clone(this.datepicker.minDate);
                return this.parser.format(min);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SuiDatepickerInputDirective.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiDatepickerInputDirective.prototype.typeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        /** @type {?} */
        var parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    };
    /**
     * @return {?}
     */
    SuiDatepickerInputDirective.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        this.valueAccessor.onTouched();
    };
    SuiDatepickerInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[suiDatepicker]"
                },] },
    ];
    SuiDatepickerInputDirective.ctorParameters = function () { return [
        { type: SuiDatepickerDirective, decorators: [{ type: Host }] },
        { type: SuiDatepickerDirectiveValueAccessor, decorators: [{ type: Host }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiLocalizationService }
    ]; };
    SuiDatepickerInputDirective.propDecorators = {
        useNativeOnMobile: [{ type: Input, args: ["pickerUseNativeOnMobile",] }],
        type: [{ type: HostBinding, args: ["attr.type",] }],
        max: [{ type: HostBinding, args: ["attr.max",] }],
        min: [{ type: HostBinding, args: ["attr.min",] }],
        typeValue: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
        onFocusOut: [{ type: HostListener, args: ["focusout",] }]
    };
    return SuiDatepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRangeDateService = /** @class */ (function (_super) {
    __extends(CalendarRangeDateService, _super);
    function CalendarRangeDateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarRangeDateService.prototype.calcStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        /** @type {?} */
        var monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
        monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
        return monthStart;
    };
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeDateService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = item.date.getDate().toString();
        item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
        item.isSelectable = item.isDisabled;
    };
    return CalendarRangeDateService;
}(CalendarRangeService));
var SuiCalendarDateView = /** @class */ (function (_super) {
    __extends(SuiCalendarDateView, _super);
    function SuiCalendarDateView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7)) || this;
    }
    Object.defineProperty(SuiCalendarDateView.prototype, "days", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var days = this.service.localeValues.weekdaysNarrow;
            return days.map(function (d, i) { return days[(i + _this.service.firstDayOfWeek) % days.length]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarDateView.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarDateView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-date-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table seven column day\">\n<thead>\n    <tr>\n        <th colspan=\"7\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n    <tr>\n        <th *ngFor=\"let day of days\">{{ day }}</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarDateView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarDateView;
}(CalendarView));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRangeHourService = /** @class */ (function (_super) {
    __extends(CalendarRangeHourService, _super);
    function CalendarRangeHourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeHourService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        // Set minutes and seconds to 0
        /** @type {?} */
        var customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeHourService;
}(CalendarRangeService));
var SuiCalendarHourView = /** @class */ (function (_super) {
    __extends(SuiCalendarHourView, _super);
    function SuiCalendarHourView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
    }
    Object.defineProperty(SuiCalendarHourView.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarHourView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-hour-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarHourView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarHourView;
}(CalendarView));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRangeMinuteService = /** @class */ (function (_super) {
    __extends(CalendarRangeMinuteService, _super);
    function CalendarRangeMinuteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.calcStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.calcDates = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5); });
    };
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeMinuteService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeMinuteService;
}(CalendarRangeService));
var SuiCalendarMinuteView = /** @class */ (function (_super) {
    __extends(SuiCalendarMinuteView, _super);
    function SuiCalendarMinuteView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMinuteView.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.service.config.mode !== CalendarMode.TimeOnly) {
                // Set minutes and seconds to 0
                /** @type {?} */
                var dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
            }
            else {
                // Set minutes and seconds to 0
                /** @type {?} */
                var timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
                return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarMinuteView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-minute-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column minute\">\n<thead>\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarMinuteView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarMinuteView;
}(CalendarView));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRangeMonthService = /** @class */ (function (_super) {
    __extends(CalendarRangeMonthService, _super);
    function CalendarRangeMonthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeMonthService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    };
    return CalendarRangeMonthService;
}(CalendarRangeService));
var SuiCalendarMonthView = /** @class */ (function (_super) {
    __extends(SuiCalendarMonthView, _super);
    function SuiCalendarMonthView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMonthView.prototype, "year", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarMonthView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-month-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column month\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ year }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarMonthView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarMonthView;
}(CalendarView));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarRangeYearService = /** @class */ (function (_super) {
    __extends(CalendarRangeYearService, _super);
    function CalendarRangeYearService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeYearService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    };
    return CalendarRangeYearService;
}(CalendarRangeService));
var SuiCalendarYearView = /** @class */ (function (_super) {
    __extends(SuiCalendarYearView, _super);
    function SuiCalendarYearView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
        get: /**
         * @return {?}
         */
        function () {
            return DateUtil
                .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
                .getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} year
     * @return {?}
     */
    SuiCalendarYearView.prototype.pad = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    };
    SuiCalendarYearView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-year-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                },] },
    ];
    SuiCalendarYearView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarYearView;
}(CalendarView));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDatepickerModule = /** @class */ (function () {
    function SuiDatepickerModule() {
    }
    SuiDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        SuiPopupModule,
                        SuiLocalizationModule,
                        SuiUtilityModule
                    ],
                    declarations: [
                        SuiCalendarItem,
                        SuiCalendarViewTitle,
                        SuiCalendarYearView,
                        SuiCalendarMonthView,
                        SuiCalendarDateView,
                        SuiCalendarHourView,
                        SuiCalendarMinuteView,
                        SuiDatepicker,
                        SuiDatepickerDirective,
                        SuiDatepickerDirectiveValueAccessor,
                        SuiDatepickerDirectiveValidator,
                        SuiDatepickerInputDirective
                    ],
                    exports: [
                        SuiDatepickerDirective,
                        SuiDatepickerDirectiveValueAccessor,
                        SuiDatepickerDirectiveValidator,
                        SuiDatepickerInputDirective
                    ],
                    entryComponents: [
                        SuiDatepicker
                    ]
                },] },
    ];
    return SuiDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDimmer = /** @class */ (function (_super) {
    __extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDimmed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDimmer.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    SuiDimmer.decorators = [
        { type: Component, args: [{
                    selector: "sui-dimmer",
                    template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
                },] },
    ];
    SuiDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiDimmer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dimmer",] }],
        isDimmed: [{ type: HostBinding, args: ["class.active",] }, { type: Input }],
        isDimmedChange: [{ type: Output }],
        isClickable: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        wrapContent: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click",] }]
    };
    return SuiDimmer;
}(SuiTransition));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDimmerModule = /** @class */ (function () {
    function SuiDimmerModule() {
    }
    SuiDimmerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiTransitionModule
                    ],
                    declarations: [
                        SuiDimmer
                    ],
                    exports: [
                        SuiDimmer
                    ]
                },] },
    ];
    return SuiDimmerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Creates essentially a 'string' enum.
/** @type {?} */
var DropdownAutoCloseType = {
    ItemClick: (/** @type {?} */ ("itemClick")),
    OutsideClick: (/** @type {?} */ ("outsideClick")),
    Disabled: (/** @type {?} */ ("disabled"))
};
var DropdownService = /** @class */ (function () {
    function DropdownService(autoCloseMode) {
        if (autoCloseMode === void 0) { autoCloseMode = DropdownAutoCloseType.ItemClick; }
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    Object.defineProperty(DropdownService.prototype, "isNested", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.parent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    DropdownService.prototype.setOpenState = /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    function (isOpen, reflectInParent) {
        var _this = this;
        if (reflectInParent === void 0) { reflectInParent = false; }
        if (this.isOpen !== isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            this.isAnimating = true;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(function (c) { return c.setOpenState(_this.isOpen); });
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen !== isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DropdownService.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (this.isDisabled !== isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.toggleOpenState = /**
     * @return {?}
     */
    function () {
        this.setOpenState(!this.isOpen);
    };
    // Registers a dropdown service as a child of this service.
    // Registers a dropdown service as a child of this service.
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.registerChild = 
    // Registers a dropdown service as a child of this service.
    /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    };
    // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
    // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.isChildRegistered = 
    // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
    /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        return this === child || !!this.children
            .find(function (c) { return !!c.children
            .find(function (cChild) { return cChild.isChildRegistered(child); }); });
    };
    // Wipes any nested data, so all services can be cleanly reattached.
    // Wipes any nested data, so all services can be cleanly reattached.
    /**
     * @return {?}
     */
    DropdownService.prototype.clearChildren = 
    // Wipes any nested data, so all services can be cleanly reattached.
    /**
     * @return {?}
     */
    function () {
        this.children.forEach(function (c) {
            c.parent = undefined;
        });
        this.children = [];
    };
    // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
    // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
    /**
     * @param {?} callback
     * @return {?}
     */
    DropdownService.prototype.delay = 
    // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
    /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        setTimeout(function () { return callback(); });
    };
    return DropdownService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDropdownMenuItem = /** @class */ (function () {
    function SuiDropdownMenuItem(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            // We must use nativeElement as Angular doesn't have a way of reading class information.
            /** @type {?} */
            var element = (/** @type {?} */ (this.element.nativeElement));
            return element.classList.contains("disabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Renderer is used to enable a dynamic class name.
            if (value) {
                this._renderer.addClass(this.element.nativeElement, this.selectedClass);
            }
            else {
                this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.childDropdownMenu;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDropdownMenuItem.prototype.performClick = /**
     * @return {?}
     */
    function () {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    };
    SuiDropdownMenuItem.decorators = [
        { type: Directive, args: [{
                    // We must attach to every '.item' as Angular doesn't support > selectors.
                    selector: ".item"
                },] },
    ];
    SuiDropdownMenuItem.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiDropdownMenuItem.propDecorators = {
        childDropdownMenu: [{ type: ContentChild, args: [forwardRef(function () { return SuiDropdownMenu; }),] }]
    };
    return SuiDropdownMenuItem;
}());
var SuiDropdownMenu = /** @class */ (function (_super) {
    __extends(SuiDropdownMenu, _super);
    function SuiDropdownMenu(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false);
        _this.setTransitionController(_this._transitionController);
        _this.menuTransition = "slide down";
        _this.menuTransitionDuration = 200;
        _this.menuAutoSelectFirst = false;
        _this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        _this._parentKeyDownListener = function () { };
        return _this;
    }
    Object.defineProperty(SuiDropdownMenu.prototype, "service", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._service = value;
            /** @type {?} */
            var previousIsOpen = this._service.isOpen;
            this._service.isOpenChange.subscribe(function (isOpen) {
                if (isOpen !== previousIsOpen) {
                    // Only run transitions if the open state has changed.
                    _this._transitionController.stopAll();
                    _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration, TransitionDirection.Either, function () { return _this._service.isAnimating = false; }));
                }
                if (!isOpen) {
                    // Reset the item selections when a nested item is selected to avoid incosistent open states.
                    if (_this.selectedItems.length > 1) {
                        _this.resetSelection();
                    }
                }
                previousIsOpen = isOpen;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "parentElement", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._parentKeyDownListener = this._renderer
                .listen(value.nativeElement, "keydown", function (e) {
                return _this.onParentKeyDown(e);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "items", {
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._itemsQueryOverride = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemsQueryOverride || this._itemsQueryInternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
        // Get the list of items, ignoring those that are disabled.
        get: 
        // Get the list of items, ignoring those that are disabled.
        /**
         * @return {?}
         */
        function () {
            return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdownMenu.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                /** @type {?} */
                var target = (/** @type {?} */ (e.target));
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdownMenu.prototype.onParentKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            /** @type {?} */
            var target = (/** @type {?} */ (e.target));
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            /** @type {?} */
            var selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                var _b = __read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
                selectedContainer = selectedParent.childDropdownMenu;
            }
            switch (e.keyCode) {
                // Escape : close the entire dropdown.
                case KeyCode.Escape: {
                    this._service.setOpenState(false);
                    break;
                }
                // Down : select the next item below the current one, or the 1st if none selected.
                case KeyCode.Down:
                // Up : select the next item above the current one, or the 1st if none selected.
                case KeyCode.Up: {
                    this.selectedItems.pop();
                    this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                    // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                    e.preventDefault();
                    break;
                }
                // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                case KeyCode.Enter: {
                    if (selected && !selected.hasChildDropdown) {
                        selected.performClick();
                        break;
                    }
                }
                // falls through
                // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                case KeyCode.Right: {
                    if (selected && selected.hasChildDropdown) {
                        selected.childDropdownMenu.service.setOpenState(true);
                        this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                    }
                    break;
                }
                // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                case KeyCode.Left: {
                    if (this.selectedItems.length >= 2) {
                        this.selectedItems.pop();
                        var _c = __read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.resetSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedItems = [];
        this._items.forEach(function (i) {
            i.selectedClass = _this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    };
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    /**
     * @param {?} selectedItem
     * @param {?} keyCode
     * @return {?}
     */
    SuiDropdownMenu.prototype.updateSelection = 
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    /**
     * @param {?} selectedItem
     * @param {?} keyCode
     * @return {?}
     */
    function (selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        /** @type {?} */
        var selectedIndex = this._items
            .findIndex(function (i) { return i === selectedItem; });
        /** @type {?} */
        var newSelection;
        switch (keyCode) {
            case KeyCode.Enter:
            case KeyCode.Right:
            case KeyCode.Down:
                selectedIndex += 1;
                break;
            case KeyCode.Up:
                if (selectedIndex === -1) {
                    // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                    selectedIndex = 0;
                    break;
                }
                selectedIndex -= 1;
                break;
        }
        // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
        newSelection = this._items[selectedIndex] || selectedItem;
        if (newSelection) {
            // Set the selected status on the newly selected item.
            newSelection.isSelected = true;
            // Set the current scroll position to the location of the newly selected item.
            this.scrollToItem(newSelection);
        }
        return newSelection;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SuiDropdownMenu.prototype.scrollToItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var menu = this._element.nativeElement;
        /** @type {?} */
        var selectedRect = item.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var menuRect = menu.getBoundingClientRect();
        /** @type {?} */
        var scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.onItemsChanged = /**
     * @return {?}
     */
    function () {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._parentKeyDownListener();
    };
    SuiDropdownMenu.decorators = [
        { type: Directive, args: [{
                    selector: "[suiDropdownMenu]"
                },] },
    ];
    SuiDropdownMenu.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiDropdownMenu.propDecorators = {
        menuTransition: [{ type: Input }],
        menuTransitionDuration: [{ type: Input }],
        _itemsQueryInternal: [{ type: ContentChildren, args: [SuiDropdownMenuItem,] }],
        menuAutoSelectFirst: [{ type: Input }],
        menuSelectedItemClass: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiDropdownMenu;
}(SuiTransition));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDropdown = /** @class */ (function () {
    function SuiDropdown(_element) {
        var _this = this;
        this._element = _element;
        this.service = new DropdownService();
        this.service.isOpenChange.subscribe(function () {
            if (_this.service.isOpen) {
                _this._element.nativeElement.focus();
            }
        });
    }
    Object.defineProperty(SuiDropdown.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            // @ContentChildren includes the current element by default.
            return this._children.filter(function (c) { return c !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isOpenChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            // This is to ensure nested dropdowns don't get made bold.
            return this.service.isOpen && !this.service.isNested;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // If we are opening the dropdown, we want to always open its parents.
            this.service.setOpenState(value, !!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.service.setDisabledState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isDisabled || this.service.isNested) {
                // If disabled, remove from tabindex.
                return undefined;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.autoCloseMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.service.autoCloseMode = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDropdown.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this._menu.parentElement = this._element;
        this.childrenUpdated();
        this._children.changes
            .subscribe(function () { return _this.childrenUpdated(); });
    };
    /**
     * @return {?}
     */
    SuiDropdown.prototype.childrenUpdated = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(function (c) { return c.service; })
            .forEach(function (s) { return _this.service.registerChild(s); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.externallyClose();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onKeypress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode === KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    };
    /**
     * @return {?}
     */
    SuiDropdown.prototype.externallyClose = /**
     * @return {?}
     */
    function () {
        if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
            this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
            // No need to reflect in parent since they are also bound to document.
            this.service.setOpenState(false);
        }
    };
    SuiDropdown.decorators = [
        { type: Directive, args: [{
                    selector: "[suiDropdown]"
                },] },
    ];
    SuiDropdown.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiDropdown.propDecorators = {
        _menu: [{ type: ContentChild, args: [SuiDropdownMenu,] }],
        _children: [{ type: ContentChildren, args: [SuiDropdown, { descendants: true },] }],
        isOpenChange: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        _tabIndex: [{ type: Input, args: ["tabindex",] }],
        tabIndex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        autoClose: [{ type: Input }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }],
        onKeypress: [{ type: HostListener, args: ["keypress", ["$event"],] }]
    };
    return SuiDropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiDropdownModule = /** @class */ (function () {
    function SuiDropdownModule() {
    }
    SuiDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiTransitionModule
                    ],
                    declarations: [
                        SuiDropdown,
                        SuiDropdownMenu,
                        SuiDropdownMenuItem
                    ],
                    exports: [
                        SuiDropdown,
                        SuiDropdownMenu,
                        SuiDropdownMenuItem
                    ]
                },] },
    ];
    return SuiDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Helper class to support method chaining when calling `SuiModalService.open(...)`.
/**
 * @template T, U, V
 */
var  
// Helper class to support method chaining when calling `SuiModalService.open(...)`.
/**
 * @template T, U, V
 */
ActiveModal = /** @class */ (function () {
    function ActiveModal(instance, componentRef) {
        var _this = this;
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(function () { return _this._componentRef.destroy(); });
    }
    Object.defineProperty(ActiveModal.prototype, "component", {
        // Shorthand for direct access to the `SuiModal` instance.
        get: 
        // Shorthand for direct access to the `SuiModal` instance.
        /**
         * @return {?}
         */
        function () {
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    // Registers a callback for when `onApprove` is fired.
    // Registers a callback for when `onApprove` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onApprove = 
    // Registers a callback for when `onApprove` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onApprove.subscribe(function (res) { return callback(res); });
        return this;
    };
    // Registers a callback for when `onDeny` is fired.
    // Registers a callback for when `onDeny` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onDeny = 
    // Registers a callback for when `onDeny` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onDeny.subscribe(function (res) { return callback(res); });
        return this;
    };
    // Fires the approve event of the modal manually.
    // Fires the approve event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.approve = 
    // Fires the approve event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.approve(result);
    };
    // Fires the deny event of the modal manually.
    // Fires the deny event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.deny = 
    // Fires the deny event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.deny(result);
    };
    // Removes the modal component instantly, without transitions or firing any events.
    // Removes the modal component instantly, without transitions or firing any events.
    /**
     * @return {?}
     */
    ActiveModal.prototype.destroy = 
    // Removes the modal component instantly, without transitions or firing any events.
    /**
     * @return {?}
     */
    function () {
        this._componentRef.destroy();
    };
    return ActiveModal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ModalSize = {
    Mini: (/** @type {?} */ ("mini")),
    Tiny: (/** @type {?} */ ("tiny")),
    Small: (/** @type {?} */ ("small")),
    Normal: (/** @type {?} */ ("normal")),
    Large: (/** @type {?} */ ("large"))
};
// Stores a basic set of configuration options for a modal.
/**
 * @template T, U, V
 */
var  
// Stores a basic set of configuration options for a modal.
/**
 * @template T, U, V
 */
ModalConfig = /** @class */ (function () {
    function ModalConfig(context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        // Initialise with default values.
        this.isClosable = isClosable;
        this.context = context;
        this.size = ModalSize.Normal;
        this.isFullScreen = false;
        this.isBasic = false;
        this.isInverted = false;
        this.isCentered = true;
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
    return ModalConfig;
}());
// Used when creating a modal from a `TemplateRef`.
/**
 * @template T, U, V
 */
var  
// Used when creating a modal from a `TemplateRef`.
/**
 * @template T, U, V
 */
TemplateModalConfig = /** @class */ (function (_super) {
    __extends(TemplateModalConfig, _super);
    function TemplateModalConfig(template, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.template = template;
        return _this;
    }
    return TemplateModalConfig;
}(ModalConfig));
// Used when creating a modal from an existing component.
/**
 * @template T, U, V
 */
var  
// Used when creating a modal from an existing component.
/**
 * @template T, U, V
 */
ComponentModalConfig = /** @class */ (function (_super) {
    __extends(ComponentModalConfig, _super);
    function ComponentModalConfig(component, context, isClosable) {
        if (context === void 0) { context = undefined; }
        if (isClosable === void 0) { isClosable = true; }
        var _this = _super.call(this, context, isClosable) || this;
        _this.component = component;
        return _this;
    }
    return ComponentModalConfig;
}(ModalConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
var  
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
ModalControls = /** @class */ (function () {
    function ModalControls(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    // Use method here rather than arrow variables to make intellisense show they're methods.
    // Use method here rather than arrow variables to make intellisense show they're methods.
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.approve = 
    // Use method here rather than arrow variables to make intellisense show they're methods.
    /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.deny = /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    return ModalControls;
}());
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
var  
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(controls, context) {
        var _this = 
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        _super.call(this, controls.approve, controls.deny) || this;
        _this.context = context;
        return _this;
    }
    return Modal;
}(ModalControls));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
// We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
/**
 * @abstract
 * @template T, U, V
 */
var  
// Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
// We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
/**
 * @abstract
 * @template T, U, V
 */
ModalTemplate = /** @class */ (function (_super) {
    __extends(ModalTemplate, _super);
    // Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
    // We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
    function ModalTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalTemplate;
}(TemplateRef));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
var SuiModal = /** @class */ (function () {
    function SuiModal(_renderer, _element, _componentFactory) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        /** @type {?} */
        var config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(function (res) { return _this.dismiss(function () { return _this.onApprove.emit(res); }); }, function (res) { return _this.dismiss(function () { return _this.onDeny.emit(res); }); });
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    Object.defineProperty(SuiModal.prototype, "approve", {
        get: /**
         * @return {?}
         */
        function () {
            return this.controls.approve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "deny", {
        get: /**
         * @return {?}
         */
        function () {
            return this.controls.deny;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isFullScreen", {
        // Value to deny with when closing via `isClosable`.
        get: 
        // Value to deny with when closing via `isClosable`.
        /**
         * @return {?}
         */
        function () {
            return this._isFullScreen;
        },
        set: /**
         * @param {?} fullScreen
         * @return {?}
         */
        function (fullScreen) {
            this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "mustScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mustScroll;
        },
        set: /**
         * @param {?} mustScroll
         * @return {?}
         */
        function (mustScroll) {
            this._mustScroll = mustScroll;
            // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
            this._mustAlwaysScroll = mustScroll;
            this.updateScroll();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "isInverted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isInverted;
        },
        set: /**
         * @param {?} inverted
         * @return {?}
         */
        function (inverted) {
            this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiModal.prototype, "dynamicClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = {};
            if (this.size) {
                classes[this.size] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiModal.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(function () { return _this.dimBackground = true; });
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        (/** @type {?} */ (document.querySelector("body"))).appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        /** @type {?} */
        var templateElement = (/** @type {?} */ (this.templateSibling.element.nativeElement));
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        var element = (/** @type {?} */ (this._modalElement.nativeElement));
        setTimeout(function () { return _this.updateScroll(); });
        // Focus any element with [autofocus] attribute.
        /** @type {?} */
        var autoFocus = (/** @type {?} */ (element.querySelector("[autofocus]")));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(function () { return autoFocus.focus(); }, 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
        }
    };
    // Updates the modal with the specified configuration.
    // Updates the modal with the specified configuration.
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    SuiModal.prototype.loadConfig = 
    // Updates the modal with the specified configuration.
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    };
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    /**
     * @param {?=} callback
     * @return {?}
     */
    SuiModal.prototype.dismiss = 
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (_this._originalContainer) {
                    _this._originalContainer.appendChild(_this._element.nativeElement);
                }
                _this.onDismiss.emit();
                callback();
            }));
        }
    };
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    /**
     * @return {?}
     */
    SuiModal.prototype.close = 
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    /**
     * @return {?}
     */
    function () {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    };
    // Decides whether the modal needs to reposition to allow scrolling.
    // Decides whether the modal needs to reposition to allow scrolling.
    /**
     * @return {?}
     */
    SuiModal.prototype.updateScroll = 
    // Decides whether the modal needs to reposition to allow scrolling.
    /**
     * @return {?}
     */
    function () {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            /** @type {?} */
            var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            var margin = fontSize * 2;
            /** @type {?} */
            var element = (/** @type {?} */ (this._modalElement.nativeElement));
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiModal.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    };
    // Document listener is fine here because nobody will have enough modals open.
    // Document listener is fine here because nobody will have enough modals open.
    /**
     * @param {?} e
     * @return {?}
     */
    SuiModal.prototype.onDocumentKeyUp = 
    // Document listener is fine here because nobody will have enough modals open.
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.onDocumentResize = /**
     * @return {?}
     */
    function () {
        this.updateScroll();
    };
    SuiModal.decorators = [
        { type: Component, args: [{
                    selector: "sui-modal",
                    template: "\n<!-- Page dimmer for modal background. -->\n<sui-modal-dimmer [ngClass]=\"{'top aligned': !isCentered}\" \n            [class.inverted]=\"isInverted\"\n            [(isDimmed)]=\"dimBackground\"\n            [transitionDuration]=\"transitionDuration\"\n            (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scrolling]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable && isFullScreen\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-modal-dimmer>\n",
                    styles: [""]
                },] },
    ];
    SuiModal.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory }
    ]; };
    SuiModal.propDecorators = {
        isClosable: [{ type: Input }],
        closeResult: [{ type: Input }],
        onApprove: [{ type: Output, args: ["approved",] }],
        onDeny: [{ type: Output, args: ["denied",] }],
        onDismiss: [{ type: Output, args: ["dismissed",] }],
        _modalElement: [{ type: ViewChild, args: ["modal",] }],
        size: [{ type: Input }],
        isCentered: [{ type: Input }],
        isFullScreen: [{ type: Input }],
        isBasic: [{ type: Input }],
        mustScroll: [{ type: Input }],
        isInverted: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        onDocumentKeyUp: [{ type: HostListener, args: ["document:keyup", ["$event"],] }],
        onDocumentResize: [{ type: HostListener, args: ["window:resize",] }]
    };
    return SuiModal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiModalService = /** @class */ (function () {
    function SuiModalService(_componentFactory) {
        this._componentFactory = _componentFactory;
    }
    /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    SuiModalService.prototype.open = /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        // Generate the modal component to be shown.
        /** @type {?} */
        var componentRef = this._componentFactory.createComponent(SuiModal);
        // Shorthand for the created modal component instance.
        /** @type {?} */
        var modalComponent = componentRef.instance;
        if (modal instanceof TemplateModalConfig) {
            // Inject the template into the view.
            this._componentFactory.createView(modalComponent.templateSibling, modal.template, {
                // `let-context`
                $implicit: modal.context,
                // `let-modal="modal"`
                modal: componentRef.instance.controls
            });
        }
        else if (modal instanceof ComponentModalConfig) {
            // Generate the component to be used as the modal content,
            // injecting an instance of `Modal` to be used in the component constructor.
            /** @type {?} */
            var contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            // Shorthand for access to the content component's DOM element.
            /** @type {?} */
            var contentElement = (/** @type {?} */ (contentComponentRef.location.nativeElement));
            // Move all of the DOM elements inside the component to the main modal element.
            // This is done so that CSS classes apply correctly. It does stop any custom styles from working however,
            // so other ways may have to be investigated.
            while (contentElement.hasChildNodes() && contentElement.parentElement && contentElement.firstChild) {
                contentElement.parentElement.appendChild(contentElement.removeChild(contentElement.firstChild));
            }
            // Remove the generated component's 'empty shell' from the DOM.
            this._componentFactory.detachFromDocument(contentComponentRef);
        }
        // Attach the new modal component to the application.
        // The component will move itself to the document body for correctl styling.
        this._componentFactory.attachToApplication(componentRef);
        // Initialise the generated modal with the provided config.
        modalComponent.loadConfig(modal);
        // Return an instance of an `ActiveModal`, so the user can control the new modal.
        return new ActiveModal(modal, componentRef);
    };
    SuiModalService.decorators = [
        { type: Injectable },
    ];
    SuiModalService.ctorParameters = function () { return [
        { type: SuiComponentFactory }
    ]; };
    return SuiModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiModalDimmer = /** @class */ (function (_super) {
    __extends(SuiModalDimmer, _super);
    function SuiModalDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.hasClasses = true;
        _this.isClickable = false;
        return _this;
    }
    SuiModalDimmer.decorators = [
        { type: Component, args: [{
                    selector: "sui-modal-dimmer",
                    template: "<ng-content></ng-content>",
                    styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
                },] },
    ];
    SuiModalDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiModalDimmer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.page",] }, { type: HostBinding, args: ["class.modals",] }]
    };
    return SuiModalDimmer;
}(SuiDimmer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiModalModule = /** @class */ (function () {
    function SuiModalModule() {
    }
    SuiModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SuiDimmerModule,
                        SuiTransitionModule,
                        SuiUtilityModule
                    ],
                    declarations: [
                        SuiModal,
                        SuiModalDimmer
                    ],
                    exports: [
                        SuiModal,
                        SuiModalDimmer
                    ],
                    providers: [
                        SuiModalService
                    ],
                    entryComponents: [
                        SuiModal
                    ]
                },] },
    ];
    return SuiModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiProgress = /** @class */ (function () {
    function SuiProgress() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiProgress.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            /** @type {?} */
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._value = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "maximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maximum;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            /** @type {?} */
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._maximum = converted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "precision", {
        get: /**
         * @return {?}
         */
        function () {
            return this._precision;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Convert value from string to number where necessary.
            /** @type {?} */
            var converted = +value;
            if (Number.isNaN(converted)) {
                return;
            }
            this._precision = Math.min(Math.max(converted, 0), 20);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "reachedMaximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "percentage", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
            /** @type {?} */
            var percentage = (boundedValue / this.maximum) * 100;
            return percentage.toFixed(this.precision);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "classValue", {
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            if (classes.includes("attached") || classes.includes("tiny")) {
                this.showProgress = false;
            }
            if (classes.includes("success")) {
                this._overrideSuccess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiProgress.decorators = [
        { type: Component, args: [{
                    selector: "sui-progress",
                    template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n.bar {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}\n"]
                },] },
    ];
    SuiProgress.ctorParameters = function () { return []; };
    SuiProgress.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.progress",] }],
        autoSuccess: [{ type: Input }],
        showProgress: [{ type: Input }],
        value: [{ type: Input }],
        maximum: [{ type: Input }],
        precision: [{ type: Input }],
        reachedMaximum: [{ type: HostBinding, args: ["class.success",] }],
        percentage: [{ type: HostBinding, args: ["attr.data-percent",] }],
        classValue: [{ type: Input, args: ["class",] }]
    };
    return SuiProgress;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiProgressModule = /** @class */ (function () {
    function SuiProgressModule() {
    }
    SuiProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SuiProgress
                    ],
                    exports: [
                        SuiProgress
                    ]
                },] },
    ];
    return SuiProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiRating = /** @class */ (function () {
    function SuiRating() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maximum;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:prefer-literal
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onMouseover = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.hoveredIndex = i;
    };
    /**
     * @return {?}
     */
    SuiRating.prototype.onMouseout = /**
     * @return {?}
     */
    function () {
        this.hoveredIndex = -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRating.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    SuiRating.decorators = [
        { type: Component, args: [{
                    selector: "sui-rating",
                    template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                    styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
                },] },
    ];
    SuiRating.ctorParameters = function () { return []; };
    SuiRating.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.rating",] }],
        valueChange: [{ type: Output }],
        maximum: [{ type: Input }],
        isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
        onMouseout: [{ type: HostListener, args: ["mouseout",] }]
    };
    return SuiRating;
}());
var SuiRatingValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRatingValueAccessor, _super);
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRatingValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-rating",
                    host: { "(valueChange)": "onChange($event)" },
                    providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
                },] },
    ];
    SuiRatingValueAccessor.ctorParameters = function () { return [
        { type: SuiRating }
    ]; };
    return SuiRatingValueAccessor;
}(CustomValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiRatingModule = /** @class */ (function () {
    function SuiRatingModule() {
    }
    SuiRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    declarations: [
                        SuiRating,
                        SuiRatingValueAccessor
                    ],
                    exports: [
                        SuiRating,
                        SuiRatingValueAccessor
                    ]
                },] },
    ];
    return SuiRatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiSearchResult = /** @class */ (function () {
    function SuiSearchResult(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = function (value) { return ""; };
    }
    Object.defineProperty(SuiSearchResult.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSearchResult.decorators = [
        { type: Component, args: [{
                    selector: "sui-search-result",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
                },] },
    ];
    SuiSearchResult.ctorParameters = function () { return [
        { type: SuiComponentFactory }
    ]; };
    SuiSearchResult.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.result",] }],
        value: [{ type: Input }],
        query: [{ type: Input }],
        formatter: [{ type: Input }],
        template: [{ type: Input }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }]
    };
    return SuiSearchResult;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
var  /**
 * @template T, U
 */
SearchService = /** @class */ (function () {
    function SearchService(allowEmptyQuery) {
        if (allowEmptyQuery === void 0) { allowEmptyQuery = false; }
        var _this = this;
        this._options = [];
        this.optionsFilter = function (os, q) {
            // Convert the query string to a RegExp.
            /** @type {?} */
            var regex = _this.toRegex(_this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    .filter(function (o) { return Util.Object.readValue(o, _this._optionsField)
                    .toString()
                    .match(regex); });
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    Object.defineProperty(SearchService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = options || [];
            // We cannot use both local & remote options simultaneously.
            this._optionsLookup = undefined;
            // Reset entire service with new options.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "optionsLookup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionsLookup;
        },
        set: /**
         * @param {?} lookupFn
         * @return {?}
         */
        function (lookupFn) {
            this._optionsLookup = lookupFn;
            // As before, cannot use local & remote options simultaneously.
            this._options = [];
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "hasItemLookup", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.optionsLookup && this.optionsLookup.length === 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "optionsField", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionsField;
        },
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this._optionsField = field;
            // We need to reset otherwise we would now be showing invalid search results.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "results", {
        get: /**
         * @return {?}
         */
        function () {
            return this._results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    // Updates the query after the specified search delay.
    // Updates the query after the specified search delay.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQueryDelayed = 
    // Updates the query after the specified search delay.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(function () {
            _this.updateQuery(query, callback);
        }, this.searchDelay);
    };
    // Updates the current search query.
    // Updates the current search query.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQuery = 
    // Updates the current search query.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        if (this._query === "" && !this.allowEmptyQuery) {
            // Don't update if the new query is empty (and we don't allow empty queries).
            // Don't reset so that when animating closed we don't get a judder.
            return callback();
        }
        if (this._resultsCache.hasOwnProperty(this._query)) {
            // If the query is already cached, make use of it.
            this._results = this._resultsCache[this._query];
            return callback();
        }
        if (this._optionsLookup) {
            this._isSearching = true;
            // Call the options lookup without a this context.
            /** @type {?} */
            var queryLookup = (/** @type {?} */ (this._optionsLookup.call(undefined, this._query)));
            queryLookup
                .then(function (results) {
                _this._isSearching = false;
                _this.updateResults(results);
                return callback();
            })
                .catch(function (error) {
                // Unset 'loading' state, and throw the returned error without updating the results.
                _this._isSearching = false;
                return callback(error);
            });
            return;
        }
        /** @type {?} */
        var filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    };
    // Updates & caches the new set of results.
    // Updates & caches the new set of results.
    /**
     * @param {?} results
     * @return {?}
     */
    SearchService.prototype.updateResults = 
    // Updates & caches the new set of results.
    /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    };
    // tslint:disable-next-line:promise-function-async
    // tslint:disable-next-line:promise-function-async
    /**
     * @param {?} initial
     * @return {?}
     */
    SearchService.prototype.initialLookup = 
    // tslint:disable-next-line:promise-function-async
    /**
     * @param {?} initial
     * @return {?}
     */
    function (initial) {
        if (initial instanceof Array) {
            return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
        }
        return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
    };
    // Converts a query string to regex without throwing an error.
    // Converts a query string to regex without throwing an error.
    /**
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.toRegex = 
    // Converts a query string to regex without throwing an error.
    /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        try {
            return new RegExp(query, "i");
        }
        catch (e) {
            return query;
        }
    };
    // Generates HTML for highlighted match text.
    // Generates HTML for highlighted match text.
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.highlightMatches = 
    // Generates HTML for highlighted match text.
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    function (text, query) {
        /** @type {?} */
        var regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, function (match) { return "<b>" + match + "</b>"; });
        }
        return text;
    };
    // Resets the search back to a pristine state.
    // Resets the search back to a pristine state.
    /**
     * @return {?}
     */
    SearchService.prototype.reset = 
    // Resets the search back to a pristine state.
    /**
     * @return {?}
     */
    function () {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    };
    return SearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiSearch = /** @class */ (function () {
    function SuiSearch(_element, renderer, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this.hasClasses = true;
        this.tabindex = 0;
        this.hasIcon = true;
        this.retainSelectedResult = true;
        this.searchDelay = 200;
        this.maxResults = 7;
        this.onResultSelected = new EventEmitter();
        this.transition = "scale";
        this.transitionDuration = 200;
    }
    Object.defineProperty(SuiSearch.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "placeholder", {
        // Gets & sets the placeholder text displayed inside the text input.
        get: 
        // Gets & sets the placeholder text displayed inside the text input.
        /**
         * @return {?}
         */
        function () {
            return this._placeholder || this.localeValues.placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "localeValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.query;
        },
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            var _this = this;
            this.selectedResult = undefined;
            // Initialise a delayed search.
            this.searchService.updateQueryDelayed(query, function () {
                // Set the results open state depending on whether a query has been entered.
                return _this.dropdownService.setOpenState(_this.searchService.query.length > 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (options) {
                this.searchService.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsLookup", {
        set: /**
         * @param {?} lookupFn
         * @return {?}
         */
        function (lookupFn) {
            this.searchService.optionsLookup = lookupFn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsField", {
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "resultFormatter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._resultFormatter) {
                return this._resultFormatter;
            }
            else if (this.searchService.optionsLookup) {
                return function (r) { return _this.readValue(r); };
            }
            else {
                return function (r, q) { return _this.searchService.highlightMatches(_this.readValue(r), q); };
            }
        },
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            this._resultFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "searchDelay", {
        set: /**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            this.searchService.searchDelay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "results", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.results.slice(0, this.maxResults);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSearch.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._menu.service = this.dropdownService;
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.onLocaleUpdate = /**
     * @return {?}
     */
    function () {
        this._localeValues = this._localizationService.get().search;
    };
    // Selects a result.
    // Selects a result.
    /**
     * @param {?} result
     * @return {?}
     */
    SuiSearch.prototype.select = 
    // Selects a result.
    /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.open();
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    };
    // Reads the specified field from an item.
    // Reads the specified field from an item.
    /**
     * @param {?} object
     * @return {?}
     */
    SuiSearch.prototype.readValue = 
    // Reads the specified field from an item.
    /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    };
    SuiSearch.decorators = [
        { type: Component, args: [{
                    selector: "sui-search",
                    template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\" (click)=\"onClick($event)\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n</div>\n<div class=\"results\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     menuSelectedItemClass=\"active\">\n\n    <sui-search-result *ngFor=\"let r of results\"\n                       class=\"item\"\n                       [value]=\"r\"\n                       [query]=\"query\"\n                       [formatter]=\"resultFormatter\"\n                       [template]=\"resultTemplate\"\n                       (click)=\"select(r)\"></sui-search-result>\n\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">{{ localeValues.noResults.header }}</div>\n        <div class=\"description\">{{ localeValues.noResults.message }}</div>\n    </div>\n</div>\n",
                    styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: block;\n    outline: 0;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
                },] },
    ];
    SuiSearch.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SuiLocalizationService }
    ]; };
    SuiSearch.propDecorators = {
        _menu: [{ type: ViewChild, args: [SuiDropdownMenu,] }],
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.search",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        hasIcon: [{ type: Input }],
        placeholder: [{ type: Input }],
        options: [{ type: Input }],
        optionsFilter: [{ type: Input }],
        optionsLookup: [{ type: Input }],
        optionsField: [{ type: Input }],
        resultFormatter: [{ type: Input }],
        resultTemplate: [{ type: Input }],
        retainSelectedResult: [{ type: Input }],
        searchDelay: [{ type: Input }],
        isSearching: [{ type: HostBinding, args: ["class.loading",] }],
        maxResults: [{ type: Input }],
        onResultSelected: [{ type: Output, args: ["resultSelected",] }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
    };
    return SuiSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSearchModule = /** @class */ (function () {
    function SuiSearchModule() {
    }
    SuiSearchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        SuiDropdownModule,
                        SuiLocalizationModule,
                        SuiUtilityModule
                    ],
                    declarations: [
                        SuiSearch,
                        SuiSearchResult
                    ],
                    exports: [
                        SuiSearch
                    ]
                },] },
    ];
    return SuiSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiSelectOption = /** @class */ (function (_super) {
    __extends(SuiSelectOption, _super);
    function SuiSelectOption(renderer, element, changeDetector) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this.changeDetector = changeDetector;
        _this.hasClasses = true;
        _this.isActive = false;
        _this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        _this.renderedText = "";
        _this.usesTemplate = false;
        return _this;
    }
    Object.defineProperty(SuiSelectOption.prototype, "formatter", {
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            if (!this.usesTemplate) {
                this.renderedText = formatter(this.value);
            }
            else {
                this.renderedText = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectOption.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    SuiSelectOption.decorators = [
        { type: Component, args: [{
                    selector: "sui-select-option",
                    template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
                },] },
    ];
    SuiSelectOption.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiSelectOption.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.item",] }],
        value: [{ type: Input }],
        onSelected: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiSelectOption;
}(SuiDropdownMenuItem));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSelectSearch = /** @class */ (function () {
    function SuiSelectSearch(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    Object.defineProperty(SuiSelectSearch.prototype, "query", {
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this._renderer.setProperty(this._element.nativeElement, "value", query);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @return {?}
     */
    SuiSelectSearch.prototype.updateQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.onQueryUpdated.emit(query);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectSearch.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onQueryKeyDown.emit(e);
    };
    /**
     * @return {?}
     */
    SuiSelectSearch.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(function () { return _this._element.nativeElement.focus(); });
    };
    SuiSelectSearch.decorators = [
        { type: Directive, args: [{
                    selector: "input[suiSelectSearch]"
                },] },
    ];
    SuiSelectSearch.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiSelectSearch.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.search",] }],
        autoComplete: [{ type: HostBinding, args: ["attr.autocomplete",] }],
        updateQuery: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return SuiSelectSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// We use generic type T to specify the type of the options we are working with,
// and U to specify the type of the property of the option used as the value.
/**
 * @abstract
 * @template T, U
 */
var SuiSelectBase = /** @class */ (function () {
    function SuiSelectBase(_element, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new EventEmitter();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSelectBase.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menu.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "hasSearchClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSearchable && !this.isSearchExternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "searchInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this._manualSearch || this._internalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "tabindex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isDisabled) {
                // If disabled, remove from tabindex.
                return -1;
            }
            if (this.dropdownService.isOpen && this.isSearchExternal) {
                // If open & in menu search, remove from tabindex (as input always autofocusses).
                return -1;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            if (this.hasSearchClass) {
                // If search input enabled, tab goes to input.
                return -1;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropdownService.isDisabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (options) {
                this.searchService.options = options;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionsLookup", {
        set: /**
         * @param {?} lookup
         * @return {?}
         */
        function (lookup) {
            if (lookup) {
                this.searchService.optionsLookup = lookup;
                this.optionsUpdateHook();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "filteredOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
        // Deprecated
        get: 
        // Deprecated
        /**
         * @return {?}
         */
        function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSearchable ? this.searchService.query : undefined;
        },
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            var _this = this;
            if (query != undefined) {
                this.queryUpdateHook();
                this.updateQuery(query);
                // Update the rendered text as query has changed.
                this._renderedOptions.forEach(function (ro) { return _this.initialiseRenderedOption(ro); });
                if (this.searchInput) {
                    this.searchInput.query = query;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelField", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.optionsField;
        },
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Helper function to retrieve the label from an item.
            return function (obj) {
                /** @type {?} */
                var label = Util.Object.readValue(obj, _this.labelField);
                if (label != undefined) {
                    return label.toString();
                }
                return "";
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            // Helper function to retrieve the value from an item.
            return function (obj) { return Util.Object.readValue(obj, _this.valueField); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "configuredFormatter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._optionFormatter) {
                return function (o) { return (/** @type {?} */ (_this._optionFormatter))(o, _this.isSearchable ? _this.query : undefined); };
            }
            else if (this.searchService.optionsLookup) {
                return function (o) { return _this.labelGetter(o); };
            }
            else {
                return function (o) { return _this.searchService.highlightMatches(_this.labelGetter(o), _this.query || ""); };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "optionFormatter", {
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            this._optionFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "localeValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe(function (q) { return _this.query = q; });
            this.searchInput.onQueryKeyDown.subscribe(function (e) { return _this.onQueryInputKeydown(e); });
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onLocaleUpdate = /**
     * @return {?}
     */
    function () {
        this._localeValues = this._localizationService.get().select;
    };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.optionsUpdateHook = 
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    function () { };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.queryUpdateHook = 
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} query
     * @return {?}
     */
    SuiSelectBase.prototype.updateQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, function () {
            return _this.dropdownService.setOpenState(true);
        });
    };
    /**
     * @param {?=} delayed
     * @return {?}
     */
    SuiSelectBase.prototype.resetQuery = /**
     * @param {?=} delayed
     * @return {?}
     */
    function (delayed) {
        if (delayed === void 0) { delayed = true; }
        // The search delay is set to the transition duration to ensure results
        // aren't rendered as the select closes as that causes a sudden flash.
        if (delayed) {
            this.searchService.searchDelay = this._menu.menuTransitionDuration;
            this.searchService.updateQueryDelayed("");
        }
        else {
            this.searchService.updateQuery("");
        }
        if (this.searchInput) {
            this.searchInput.query = "";
        }
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onAvailableOptionsRendered = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(function (ro) {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(function () { return _this.initialiseRenderedOption(ro); });
            _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(function (ro) { return ro.value; });
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.initialiseRenderedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    };
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.findOption = /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    function (options, value) {
        var _this = this;
        // Tries to find an option in options array
        return options.find(function (o) { return value === _this.valueGetter(o); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onCaretClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onKeyPress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiSelectBase.prototype.onQueryInputKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    // Helper that draws the provided template beside the provided ViewContainerRef.
    // Helper that draws the provided template beside the provided ViewContainerRef.
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.drawTemplate = 
    // Helper that draws the provided template beside the provided ViewContainerRef.
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    function (siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._renderedSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SuiSelectBase.propDecorators = {
        _menu: [{ type: ViewChild, args: [SuiDropdownMenu,] }],
        _renderedOptions: [{ type: ContentChildren, args: [SuiSelectOption, { descendants: true },] }],
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.dropdown",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isSearchable: [{ type: Input }],
        hasSearchClass: [{ type: HostBinding, args: ["class.search",] }],
        isSearching: [{ type: HostBinding, args: ["class.loading",] }],
        _internalSearch: [{ type: ViewChild, args: [SuiSelectSearch,] }],
        _manualSearch: [{ type: ContentChild, args: [SuiSelectSearch,] }],
        _tabIndex: [{ type: Input, args: ["tabindex",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        isDisabled: [{ type: HostBinding, args: ["class.disabled",] }, { type: Input }],
        options: [{ type: Input }],
        optionsFilter: [{ type: Input }],
        optionsLookup: [{ type: Input }],
        labelField: [{ type: Input }],
        valueField: [{ type: Input }],
        optionTemplate: [{ type: Input }],
        optionFormatter: [{ type: Input }],
        icon: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        onTouched: [{ type: Output, args: ["touched",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }],
        onKeyPress: [{ type: HostListener, args: ["keypress", ["$event"],] }],
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return SuiSelectBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var SuiMultiSelectLabel = /** @class */ (function (_super) {
    __extends(SuiMultiSelectLabel, _super);
    function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.componentFactory = componentFactory;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false, "inline-block");
        _this.setTransitionController(_this._transitionController);
        _this.onDeselected = new EventEmitter();
        _this.hasClasses = true;
        _this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
        return _this;
    }
    Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.deselectOption = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, function () {
            return _this.onDeselected.emit(_this.value);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.eventHandled = true;
    };
    SuiMultiSelectLabel.decorators = [
        { type: Component, args: [{
                    selector: "sui-multi-select-label",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
                },] },
    ];
    SuiMultiSelectLabel.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: SuiComponentFactory }
    ]; };
    SuiMultiSelectLabel.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.label",] }],
        value: [{ type: Input }],
        query: [{ type: Input }],
        onDeselected: [{ type: Output, args: ["deselected",] }],
        formatter: [{ type: Input }],
        template: [{ type: Input }],
        templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiMultiSelectLabel;
}(SuiTransition));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
var SuiMultiSelect = /** @class */ (function (_super) {
    __extends(SuiMultiSelect, _super);
    function SuiMultiSelect(element, localizationService) {
        var _this = _super.call(this, element, localizationService) || this;
        _this.selectedOptions = [];
        _this.selectedOptionsChange = new EventEmitter();
        _this.hasLabels = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiMultiSelect.prototype, "filteredOptions", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.maxSelectedReached) {
                // If we have reached the maximum number of selections, then empty the results completely.
                return [];
            }
            /** @type {?} */
            var searchResults = this.searchService.results;
            if (!this.hasLabels) {
                return searchResults;
            }
            else {
                // Returns the search results \ selected options.
                return searchResults
                    .filter(function (r) { return _this.selectedOptions.find(function (o) { return r === o; }) == undefined; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filteredOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "hasLabels", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasLabels;
        },
        set: /**
         * @param {?} hasLabels
         * @return {?}
         */
        function (hasLabels) {
            this._hasLabels = hasLabels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder || this.localeValues.multi.placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.maxSelected == undefined) {
                // If there is no maximum then we can immediately return.
                return false;
            }
            return this.selectedOptions.length === this.maxSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "selectedMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiMultiSelect.prototype.optionsUpdateHook = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                .map(function (v) { return (/** @type {?} */ (_this.findOption(_this.searchService.options, v))); })
                .filter(function (v) { return v != undefined; });
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.initialiseRenderedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.selectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    /**
     * @param {?} values
     * @return {?}
     */
    SuiMultiSelect.prototype.writeValue = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        var _this = this;
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    .map(function (v) { return (/** @type {?} */ (_this.findOption(_this.searchService.options, v))); })
                    .filter(function (v) { return v != undefined; });
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(function (items) { return _this.selectedOptions = items; });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
        else {
            this.selectedOptions = [];
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.deselectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(function (so) { return so !== option; });
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiMultiSelect.prototype.onQueryInputKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    };
    SuiMultiSelect.decorators = [
        { type: Component, args: [{
                    selector: "sui-multi-select",
                    template: "\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n\n<ng-container *ngIf=\"hasLabels\">\n<!-- Multi-select labels -->\n    <sui-multi-select-label *ngFor=\"let selected of selectedOptions;\"\n                            [value]=\"selected\"\n                            [query]=\"query\"\n                            [formatter]=\"configuredFormatter\"\n                            [template]=\"optionTemplate\"\n                            (deselected)=\"deselectOption($event)\"></sui-multi-select-label>\n</ng-container>\n\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Helper text -->\n<div class=\"text\"\n     [class.default]=\"hasLabels\"\n     [class.filtered]=\"!!query && !isSearchExternal\">\n    \n    <!-- Placeholder text -->\n    <ng-container *ngIf=\"hasLabels; else selectedBlock\">{{ placeholder }}</ng-container>\n    \n    <!-- Summary shown when labels are hidden -->\n    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>\n</div>\n\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"true\">\n\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ localeValues.noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">{{ maxSelectedMessage }}</div>\n    </ng-container>\n</div>\n",
                    styles: ["\n:host input.search {\n    width: 12em !important;\n}\n"]
                },] },
    ];
    SuiMultiSelect.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SuiLocalizationService }
    ]; };
    SuiMultiSelect.propDecorators = {
        selectedOptionsChange: [{ type: Output }],
        hasLabels: [{ type: Input }],
        placeholder: [{ type: Input }],
        maxSelected: [{ type: Input }],
        hasClasses: [{ type: HostBinding, args: ["class.multiple",] }]
    };
    return SuiMultiSelect;
}(SuiSelectBase));
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
var SuiMultiSelectValueAccessor = /** @class */ (function (_super) {
    __extends(SuiMultiSelectValueAccessor, _super);
    function SuiMultiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiMultiSelectValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-multi-select",
                    host: {
                        "(selectedOptionsChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
                },] },
    ];
    SuiMultiSelectValueAccessor.ctorParameters = function () { return [
        { type: SuiMultiSelect }
    ]; };
    return SuiMultiSelectValueAccessor;
}(CustomValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
var SuiSelect = /** @class */ (function (_super) {
    __extends(SuiSelect, _super);
    function SuiSelect(element, localizationService) {
        var _this = _super.call(this, element, localizationService) || this;
        _this.selectedOptionChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SuiSelect.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder || this.localeValues.single.placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelect.prototype, "searchDelay", {
        set: /**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            this.searchService.searchDelay = delay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSelect.prototype.optionsUpdateHook = /**
     * @return {?}
     */
    function () {
        if (!this._writtenOption && this.selectedOption) {
            // We need to check the option still exists.
            this.writeValue(this.valueGetter(this.selectedOption));
        }
        if (this._writtenOption && this.searchService.options.length > 0) {
            // If there was an value written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOption = this.findOption(this.searchService.options, this._writtenOption);
            if (this.selectedOption) {
                this._writtenOption = undefined;
                this.drawSelectedOption();
            }
        }
    };
    /**
     * @return {?}
     */
    SuiSelect.prototype.queryUpdateHook = /**
     * @return {?}
     */
    function () {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = undefined;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelect.prototype.selectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        this.resetQuery();
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiSelect.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value != undefined) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel value to an option.
                this.selectedOption = this.findOption(this.searchService.options, value);
                this.drawSelectedOption();
            }
            if (this.selectedOption == undefined) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial value.
                    this.searchService
                        .initialLookup(value)
                        .then(function (i) {
                        _this.selectedOption = i;
                        _this.drawSelectedOption();
                    });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOption = value;
                }
            }
        }
        else {
            this.selectedOption = undefined;
            this.drawSelectedOption();
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelect.prototype.initialiseRenderedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value === this.selectedOption;
    };
    /**
     * @return {?}
     */
    SuiSelect.prototype.drawSelectedOption = /**
     * @return {?}
     */
    function () {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption != undefined && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    };
    SuiSelect.decorators = [
        { type: Component, args: [{
                    selector: "sui-select",
                    template: "\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Placeholder text -->\n<div *ngIf=\"selectedOption == undefined\" class=\"default text\" [class.filtered]=\"query\">{{ placeholder }}</div>\n<!-- Selected item -->\n<div class=\"text\" [class.filtered]=\"query || selectedOption == undefined\">\n    <span #optionTemplateSibling></span>\n    <span *ngIf=\"!optionTemplate && selectedOption != undefined\" [innerHTML]=\"configuredFormatter(selectedOption)\"></span>\n</div>\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"isSearchable\">\n\n    <ng-content></ng-content>\n    <div *ngIf=\"isSearchable && availableOptions.length === 0\" class=\"message\">\n        {{ localeValues.noResultsMessage }}\n    </div>\n</div>\n"
                },] },
    ];
    SuiSelect.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SuiLocalizationService }
    ]; };
    SuiSelect.propDecorators = {
        _optionTemplateSibling: [{ type: ViewChild, args: ["optionTemplateSibling", { read: ViewContainerRef },] }],
        selectedOptionChange: [{ type: Output }],
        placeholder: [{ type: Input }],
        searchDelay: [{ type: Input }]
    };
    return SuiSelect;
}(SuiSelectBase));
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
var SuiSelectValueAccessor = /** @class */ (function (_super) {
    __extends(SuiSelectValueAccessor, _super);
    function SuiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiSelectValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-select",
                    host: {
                        "(selectedOptionChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
                },] },
    ];
    SuiSelectValueAccessor.ctorParameters = function () { return [
        { type: SuiSelect }
    ]; };
    return SuiSelectValueAccessor;
}(CustomValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSelectModule = /** @class */ (function () {
    function SuiSelectModule() {
    }
    SuiSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        SuiDropdownModule,
                        SuiUtilityModule,
                        SuiLocalizationModule
                    ],
                    declarations: [
                        SuiSelect,
                        SuiSelectOption,
                        SuiSelectSearch,
                        SuiSelectValueAccessor,
                        SuiMultiSelect,
                        SuiMultiSelectLabel,
                        SuiMultiSelectValueAccessor
                    ],
                    exports: [
                        SuiSelect,
                        SuiSelectOption,
                        SuiSelectSearch,
                        SuiSelectValueAccessor,
                        SuiMultiSelect,
                        SuiMultiSelectValueAccessor
                    ]
                },] },
    ];
    return SuiSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SidebarTransition = {
    Overlay: (/** @type {?} */ ("overlay")),
    Push: (/** @type {?} */ ("push")),
    ScaleDown: (/** @type {?} */ ("scale down")),
    Uncover: (/** @type {?} */ ("uncover")),
    SlideAlong: (/** @type {?} */ ("slide along")),
    SlideOut: (/** @type {?} */ ("slide out"))
};
/** @type {?} */
var SidebarDirection = {
    Left: (/** @type {?} */ ("left")),
    Right: (/** @type {?} */ ("right")),
    Top: (/** @type {?} */ ("top")),
    Bottom: (/** @type {?} */ ("bottom"))
};
var SidebarService = /** @class */ (function () {
    function SidebarService(isVisible) {
        if (isVisible === void 0) { isVisible = false; }
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    Object.defineProperty(SidebarService.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.direction === SidebarDirection.Left) {
                return this._width;
            }
            if (this.direction === SidebarDirection.Right) {
                return -this._width;
            }
            return 0;
        },
        set: /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this._width = width;
            this.widthChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarService.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.direction === SidebarDirection.Top) {
                return this._height;
            }
            if (this.direction === SidebarDirection.Bottom) {
                return -this._height;
            }
            return 0;
        },
        set: /**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            this._height = height;
            this.heightChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isVisible
     * @return {?}
     */
    SidebarService.prototype.setVisibleState = /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        var _this = this;
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(function () { return _this.wasJustOpened = false; });
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
        }
    };
    /**
     * @return {?}
     */
    SidebarService.prototype.toggleVisibleState = /**
     * @return {?}
     */
    function () {
        this.setVisibleState(!this.isVisible);
    };
    return SidebarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSidebar = /** @class */ (function () {
    function SuiSidebar(_renderer, _element) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(function () { return _this.updateDimensions(); });
        this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebar.prototype, "transition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.transition;
        },
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            var _this = this;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
            this.service.transition = transition;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.direction;
        },
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            this.setClass(this.service.direction, false);
            this.service.direction = direction;
            this.setClass(this.service.direction, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isVisible;
        },
        set: /**
         * @param {?} isVisible
         * @return {?}
         */
        function (isVisible) {
            this.service.setVisibleState(isVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isVisibleChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSidebar.prototype.updateDimensions = /**
     * @return {?}
     */
    function () {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    };
    /**
     * @param {?} className
     * @param {?=} isAdd
     * @return {?}
     */
    SuiSidebar.prototype.setClass = /**
     * @param {?} className
     * @param {?=} isAdd
     * @return {?}
     */
    function (className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.open = /**
     * @return {?}
     */
    function () {
        this.service.setVisibleState(true);
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.close = /**
     * @return {?}
     */
    function () {
        this.service.setVisibleState(false);
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.service.toggleVisibleState();
    };
    SuiSidebar.decorators = [
        { type: Component, args: [{
                    selector: "sui-sidebar",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    SuiSidebar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiSidebar.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.sidebar",] }, { type: HostBinding, args: ["class.menu",] }],
        transition: [{ type: Input }],
        direction: [{ type: Input }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }, { type: Input }],
        isVisibleChange: [{ type: Output }],
        isAnimating: [{ type: HostBinding, args: ["class.animating",] }]
    };
    return SuiSidebar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSidebarSibling = /** @class */ (function () {
    function SuiSidebarSibling(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebarSibling.prototype, "service", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service;
        },
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            var _this = this;
            this._service = service;
            setTimeout(function () { return _this.updateTransform(); });
            this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible && this.isDimmedWhenVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSidebarSibling.prototype.updateTransform = /**
     * @return {?}
     */
    function () {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== SidebarTransition.Overlay &&
            this.service.transition !== SidebarTransition.ScaleDown) {
            /** @type {?} */
            var translate = "translate3d(" + this.service.width + "px, " + this.service.height + "px, 0)";
            this._renderer.setStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiSidebarSibling.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    };
    SuiSidebarSibling.decorators = [
        { type: Component, args: [{
                    selector: "sui-sidebar-sibling",
                    template: "<ng-content></ng-content>",
                    styles: ["\n:host {\n    display: block;\n}\n"]
                },] },
    ];
    SuiSidebarSibling.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiSidebarSibling.propDecorators = {
        isDimmedWhenVisible: [{ type: Input }],
        isVisible: [{ type: HostBinding, args: ["class.visible",] }],
        isDimmed: [{ type: HostBinding, args: ["class.dimmed",] }],
        hasClasses: [{ type: HostBinding, args: ["class.pusher",] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return SuiSidebarSibling;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSidebarContainer = /** @class */ (function () {
    function SuiSidebarContainer() {
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    SuiSidebarContainer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    };
    SuiSidebarContainer.decorators = [
        { type: Component, args: [{
                    selector: "sui-sidebar-container",
                    template: "<ng-content></ng-content>",
                    styles: ["\n:host {\n    display: block;\n}\n"]
                },] },
    ];
    SuiSidebarContainer.ctorParameters = function () { return []; };
    SuiSidebarContainer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.pushable",] }],
        sidebar: [{ type: ContentChild, args: [SuiSidebar,] }],
        sibling: [{ type: ContentChild, args: [SuiSidebarSibling,] }]
    };
    return SuiSidebarContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiSidebarModule = /** @class */ (function () {
    function SuiSidebarModule() {
    }
    SuiSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SuiSidebar,
                        SuiSidebarContainer,
                        SuiSidebarSibling
                    ],
                    exports: [
                        SuiSidebar,
                        SuiSidebarContainer,
                        SuiSidebarSibling
                    ]
                },] },
    ];
    return SuiSidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiTabContent = /** @class */ (function () {
    function SuiTabContent() {
        this.isActive = false;
        this.hasClasses = true;
    }
    SuiTabContent.decorators = [
        { type: Directive, args: [{
                    selector: "[suiTabContent]"
                },] },
    ];
    SuiTabContent.ctorParameters = function () { return []; };
    SuiTabContent.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.tab",] }],
        id: [{ type: Input, args: ["suiTabContent",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }]
    };
    return SuiTabContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiTabset = /** @class */ (function () {
    function SuiTabset() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    Object.defineProperty(SuiTabset.prototype, "activeTab", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeTab;
        },
        // When setting a tab as the currently active tab, it automatically gains
        // `isActive` status (saves littering `isActive = true` everywhere).
        set: 
        // When setting a tab as the currently active tab, it automatically gains
        // `isActive` status (saves littering `isActive = true` everywhere).
        /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this._activeTab = tab;
            tab.isActive = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiTabset.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        this._tabContents.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        // Initially load the tabs.
        this.loadTabs();
    };
    // Fires whenever either the tab headers or tab contents query lists update.
    // Fires whenever either the tab headers or tab contents query lists update.
    /**
     * @return {?}
     */
    SuiTabset.prototype.internalComponentsUpdated = 
    // Fires whenever either the tab headers or tab contents query lists update.
    /**
     * @return {?}
     */
    function () {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount === 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    };
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    /**
     * @return {?}
     */
    SuiTabset.prototype.loadTabs = 
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(function (t) { return !!_this._tabHeaders.find(function (tH) { return tH === t.header; }); });
        this._tabHeaders
            .filter(function (tH) { return !_this.tabs.find(function (t) { return t.header === tH; }); })
            .forEach(function (tH) {
            /** @type {?} */
            var content = _this._tabContents.find(function (tC) { return tC.id === tH.id; });
            if (!content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            // Create a new tab instance for this header & content combo.
            /** @type {?} */
            var tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
            // Add the new instance to the list of tabs.
            _this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach(function (tH, i) {
            /** @type {?} */
            var tab = _this.tabs.find(function (t) { return t.header === tH; });
            if (tab) {
                tab.index = i;
            }
        });
        // Sort the tabs by their index.
        this.tabs.sort(function (a, b) { return a.index - b.index; });
        if (!this.activeTab) {
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(function (t) { return t === _this.activeTab; })) {
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    };
    // Fires whenever a tab header's active state is externally changed.
    // Fires whenever a tab header's active state is externally changed.
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.onHeaderActiveChanged = 
    // Fires whenever a tab header's active state is externally changed.
    /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab !== tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(function (t) { return t !== tab; }).forEach(function (t) { return t.isActive = false; });
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab === tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    };
    // Activate the first tab in the set.
    // Activate the first tab in the set.
    /**
     * @return {?}
     */
    SuiTabset.prototype.activateFirstTab = 
    // Activate the first tab in the set.
    /**
     * @return {?}
     */
    function () {
        this.activeTab = this.tabs[0];
    };
    // Activates the closest available tab to a given one.
    // Activates the closest available tab to a given one.
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.activateClosestTab = 
    // Activates the closest available tab to a given one.
    /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            if (!this.tabs.find(function (t) { return t === tab; })) {
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else {
                // Go to the tab immediately to the left.
                nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
            }
        }
        // However, if the chosen tab is disabled,
        if (nextAvailable.isDisabled) {
            // Activate the closest available tab to it.
            return this.activateClosestTab(nextAvailable);
        }
        this.activeTab = nextAvailable;
    };
    SuiTabset.decorators = [
        { type: Component, args: [{
                    selector: "sui-tabset",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    SuiTabset.ctorParameters = function () { return []; };
    SuiTabset.propDecorators = {
        _tabHeaders: [{ type: ContentChildren, args: [SuiTabHeader,] }],
        _tabContents: [{ type: ContentChildren, args: [SuiTabContent,] }]
    };
    return SuiTabset;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiTabsModule = /** @class */ (function () {
    function SuiTabsModule() {
    }
    SuiTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SuiTabset,
                        SuiTabHeader,
                        SuiTabContent
                    ],
                    exports: [
                        SuiTabset,
                        SuiTabHeader,
                        SuiTabContent
                    ]
                },] },
    ];
    return SuiTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SuiModule = /** @class */ (function () {
    function SuiModule() {
    }
    SuiModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        // Collections
                        SuiMessageModule,
                        SuiPaginationModule,
                        // Modules
                        SuiAccordionModule,
                        SuiCheckboxModule,
                        SuiCollapseModule,
                        SuiDatepickerModule,
                        SuiDimmerModule,
                        SuiDropdownModule,
                        SuiModalModule,
                        SuiPopupModule,
                        SuiProgressModule,
                        SuiRatingModule,
                        SuiSearchModule,
                        SuiSelectModule,
                        SuiSidebarModule,
                        SuiTabsModule,
                        SuiTransitionModule,
                        // Behaviors
                        SuiLocalizationModule,
                        // Misc
                        SuiUtilityModule
                    ]
                },] },
    ];
    return SuiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SuiModule, SuiLocalizationModule, SuiLocalizationService, SuiMessageModule, SuiPaginationModule, SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, DatepickerMode, SuiDimmerModule, SuiDropdownModule, DropdownAutoCloseType, SuiModalModule, SuiModalService, Modal as SuiModal, ModalControls, ActiveModal as SuiActiveModal, ModalConfig, TemplateModalConfig, ComponentModalConfig, ModalTemplate, ModalSize, SuiPopupModule, SuiPopupConfig, PopupTrigger, PositioningPlacement as PopupPlacement, SuiProgressModule, SuiRatingModule, SuiSearchModule, SearchService, SuiSelectModule, SuiSidebarModule, SidebarDirection, SidebarTransition, SuiTabsModule, SuiTransitionModule, SuiTransition, Transition, TransitionDirection, TransitionController, SuiUtilityModule, SuiLocalizationModule as ɵb, SuiLocalizationService as ɵa, SuiMessage as ɵc, SuiMessageModule as ɵd, SuiPagination as ɵe, SuiPaginationModule as ɵf, CustomValidator as ɵbs, customValidatorFactory as ɵbt, CustomValueAccessor as ɵbu, customValueAccessorFactory as ɵbv, DatePrecision as ɵbw, SuiComponentFactory as ɵbx, SuiUtilityModule as ɵby, SuiAccordionModule as ɵi, SuiAccordion as ɵh, SuiAccordionPanel as ɵg, SuiCheckboxModule as ɵo, SuiCheckbox as ɵj, SuiCheckboxValueAccessor as ɵk, SuiRadio as ɵl, SuiRadioValueAccessor as ɵm, SuiRadioManager as ɵn, SuiCollapseModule as ɵq, SuiCollapse as ɵp, SuiCalendarViewTitle as ɵr, SuiDatepicker as ɵs, SuiDatepickerModule as ɵbf, SuiCalendarItem as ɵt, SuiDatepickerDirective as ɵu, SuiDatepickerDirectiveValidator as ɵw, SuiDatepickerDirectiveValueAccessor as ɵv, SuiDatepickerInputDirective as ɵx, CalendarRangeService as ɵy, CalendarView as ɵz, SuiCalendarDateView as ɵba, SuiCalendarHourView as ɵbb, SuiCalendarMinuteView as ɵbc, SuiCalendarMonthView as ɵbd, SuiCalendarYearView as ɵbe, SuiDimmer as ɵbg, SuiDimmerModule as ɵbh, SuiDropdown as ɵbk, SuiDropdownMenu as ɵbj, SuiDropdownMenuItem as ɵbi, SuiDropdownModule as ɵbl, ModalConfig as ɵbm, ModalControls as ɵbn, ModalTemplate as ɵbo, SuiModalDimmer as ɵdj, SuiModal as ɵbp, SuiModalModule as ɵbr, SuiModalService as ɵbq, SuiPopupComponentController as ɵbz, PopupConfig as ɵca, SuiPopupController as ɵcb, SuiPopupTemplateController as ɵcc, SuiPopup as ɵce, SuiPopupArrow as ɵcd, SuiPopupDirective as ɵcf, SuiPopupModule as ɵch, SuiPopupConfig as ɵcg, SuiProgress as ɵci, SuiProgressModule as ɵcj, SuiRating as ɵck, SuiRatingValueAccessor as ɵcl, SuiRatingModule as ɵcm, SuiSearch as ɵco, SuiSearchResult as ɵcn, SuiSearchModule as ɵcp, SuiSelectBase as ɵcq, SuiMultiSelect as ɵcs, SuiMultiSelectValueAccessor as ɵct, SuiMultiSelectLabel as ɵcr, SuiSelect as ɵcv, SuiSelectValueAccessor as ɵcw, SuiSelectOption as ɵcu, SuiSelectSearch as ɵcx, SuiSelectModule as ɵcy, SuiSidebar as ɵdb, SuiSidebarContainer as ɵcz, SuiSidebarSibling as ɵda, SuiSidebarModule as ɵdc, SuiTabset as ɵdd, SuiTabContent as ɵde, SuiTabHeader as ɵdf, SuiTabsModule as ɵdg, SuiTransition as ɵdh, SuiTransitionModule as ɵdi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3JhdGluZy9jb21wb25lbnRzL3JhdGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NsYXNzZXMvc2VsZWN0LWJhc2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL211bHRpLXNlbGVjdC1sYWJlbC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jbGFzc2VzL3RhYi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jb21wb25lbnRzL3RhYnNldC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy90YWIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvc3VpLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWx1ZXNcIjtcblxuY29uc3QgZW5HQjpJTG9jYWxlVmFsdWVzID0ge1xuICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXM6IFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbXG4gICAgICAgICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzTmFycm93OiBbXG4gICAgICAgICAgICBcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5OiBbXG4gICAgICAgICAgICBcImEubS5cIiwgXCJwLm0uXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheVVwcGVyY2FzZTogW1xuICAgICAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheUxvd2VyY2FzZTogW1xuICAgICAgICAgICAgXCJhbVwiLCBcInBtXCJcbiAgICAgICAgXSxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgdGltZTogXCJoOm1tIEFcIixcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIkQgTU1NTSBZWVlZIGg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgICAgbW9udGg6IFwiTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9LFxuICAgICAgICBmaXJzdERheU9mV2VlazogMVxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICBub1Jlc3VsdHM6IHtcbiAgICAgICAgICAgIGhlYWRlcjogXCJObyBSZXN1bHRzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2VhcmNoIHJldHVybmVkIG5vIHJlc3VsdHMuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIG5vUmVzdWx0c01lc3NhZ2U6IFwiTm8gcmVzdWx0c1wiLFxuICAgICAgICBzaW5nbGU6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBvbmVcIlxuICAgICAgICB9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0Li4uXCIsXG4gICAgICAgICAgICBtYXhTZWxlY3RlZE1lc3NhZ2U6IFwiTWF4ICN7bWF4fSBzZWxlY3Rpb25zXCIsXG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IFwiI3tjb3VudH0gc2VsZWN0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbkdCO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2NhbGVWYWx1ZXMsIElQYXJ0aWFsTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW50ZXJmYWNlcy92YWx1ZXNcIjtcbmltcG9ydCBlbkdCIGZyb20gXCIuLi9sb2NhbGVzL2VuLUdCXCI7XG5pbXBvcnQgKiBhcyAkZXh0ZW5kIGZyb20gXCJleHRlbmRcIjtcblxuZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajpUKTpUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZDxULCBVPih0YXJnZXQ6VCwgc291cmNlOlUpOlQgJiBVIHtcbiAgICAvLyBSb2xsdXAuLi5cbiAgICBjb25zdCBleHRlbmQgPSAoJGV4dGVuZCBhcyBhbnkpLmRlZmF1bHQgfHwgJGV4dGVuZDtcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIHRhcmdldCwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbGFuZyhsYW5ndWFnZTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIi1cIiwgXCJcIik7XG59XG5cbmludGVyZmFjZSBJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyIHtcbiAgICBbbmFtZTpzdHJpbmddOklQYXJ0aWFsTG9jYWxlVmFsdWVzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tWYWx1ZXM6SUxvY2FsZVZhbHVlcztcbiAgICBwcml2YXRlIF92YWx1ZXM6SUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lcjtcblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFuZ3VhZ2VVcGRhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLl9mYWxsYmFja1ZhbHVlcyA9IGVuR0I7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IFwiZW4tR0JcIjtcbiAgICAgICAgdGhpcy5sb2FkKFwiZW4tR0JcIiwgZW5HQik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGlmIChsYW5nKHRoaXMuX2xhbmd1YWdlKSAhPT0gbGFuZyhsYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChsYW5ndWFnZTpzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTpJTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGVlcENsb25lKHRoaXMuX2ZhbGxiYWNrVmFsdWVzKTtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvY2FsZSAke2xhbmd1YWdlfSBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVlcEV4dGVuZCh2YWx1ZXMsIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlPFQgZXh0ZW5kcyBrZXlvZiBJTG9jYWxlVmFsdWVzPihcbiAgICAgICAgdmFsdWVzOklMb2NhbGVWYWx1ZXNbVF0sXG4gICAgICAgIG92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElMb2NhbGVWYWx1ZXNbVF0+XG4gICAgKTpJTG9jYWxlVmFsdWVzW1RdIHtcbiAgICAgICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVlcENsb25lKHZhbHVlcyksIG92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldID0gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgZGVlcEV4dGVuZCh0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZSh2YWx1ZTpzdHJpbmcsIHZhcmlhYmxlczpbc3RyaW5nLCBzdHJpbmddW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXMucmVkdWNlKChzLCBbaywgdl0pID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKGAjeyR7a319YCwgXCJnXCIpLCB2KSwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbU3VpTG9jYWxpemF0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uTW9kdWxlIHt9XG4iLCIvLyBQb3NzaWJsZSBkaXJlY3Rpb25zIGZvciBhIHRyYW5zaXRpb24uXG5leHBvcnQgZW51bSBUcmFuc2l0aW9uRGlyZWN0aW9uIHtcbiAgICBJbixcbiAgICBPdXQsXG4gICAgRWl0aGVyLFxuICAgIFN0YXRpY1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246VHJhbnNpdGlvbkRpcmVjdGlvbjtcblxuICAgIC8vIENvbnZlcnRzIFRyYW5zaXRpb25EaXJlY3Rpb24gdG8gY2xhc3MgbmFtZS5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbkNsYXNzKCk6c3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluOiByZXR1cm4gXCJpblwiO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDogcmV0dXJuIFwib3V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGluZGl2aWR1YWwgY2xhc3NlcyBmb3IgdGhlIHRyYW5zaXRpb24sIGUuZy4gXCJmYWRlIG91dFwiIC0+IFtcImZhZGVcIiwgXCJvdXRcIl0uXG4gICAgcHVibGljIHJlYWRvbmx5IGNsYXNzZXM6c3RyaW5nW107XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246bnVtYmVyID0gMjUwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTooKCkgPT4gdm9pZCkgPSAoKSA9PiB7fSkge1xuXG4gICAgICAgIHRoaXMudHlwZSA9IG5hbWU7XG5cbiAgICAgICAgLy8gV2Ugc2V0IGEgbWluaW11bSBkdXJhdGlvbiBvZiAxbXMsIHRvIGdpdmUgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW1tZWRpYXRlIHRyYW5zaXRpb25cbiAgICAgICAgLy8gd2hpbHN0IGFsbG93aW5nIHBvc2l0aW9uaW5nIGNhbGN1bGF0aW9ucyB0byBoYXBwZW4gd2l0aG91dCBhIHZpc2libGUgZmxpY2tlci5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCAxKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy50eXBlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgICAvLyBVc2VkIHRvIGRlbGF5IGFuaW1hdGlvbnMgdW50aWwgd2UgaGF2ZSBhbiBlbGVtZW50IHRvIGFuaW1hdGUuXG4gICAgcHJpdmF0ZSBnZXQgX2lzUmVhZHkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9lbGVtZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jaGFuZ2VEZXRlY3RvciAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgJ2Rpc3BsYXknIHN0eWxlIHdoZW4gdmlzaWJsZS5cbiAgICBwcml2YXRlIF9kaXNwbGF5OnN0cmluZztcblxuICAgIC8vIFN0b3JlcyBxdWV1ZWQgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfcXVldWU6VHJhbnNpdGlvbltdO1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGFuZCB3aGlsZSBpdCBpcyB0cmFuc2l0aW9uaW5nIG91dC5cbiAgICBwcml2YXRlIF9pc1Zpc2libGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmQgbm90IHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBfaXNIaWRkZW46Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlkZGVuO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGZpcnN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUZpcnN0KCk6VHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZVswXTtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBsYXN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUxhc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlW3RoaXMuX3F1ZXVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgc2V0VGltZW91dCBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHRoZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uVGltZW91dDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luaXRpYWxseVZpc2libGU6Ym9vbGVhbiA9IHRydWUsIGRpc3BsYXk6c3RyaW5nID0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8vIGlzSW5pdGlhbGx5VmlzaWJsZSBzZXRzIHdoZXRoZXIgdGhlIGVsZW1lbnQgc3RhcnRzIG91dCB2aXNpYmxlLlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBpc0luaXRpYWxseVZpc2libGU7XG4gICAgICAgIHRoaXMuX2lzSGlkZGVuID0gIXRoaXMuX2lzVmlzaWJsZTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlbmRlcmVyIHRvIGJlIHVzZWQgZm9yIGFuaW1hdGluZy5cbiAgICBwdWJsaWMgcmVnaXN0ZXJSZW5kZXJlcihyZW5kZXJlcjpSZW5kZXJlcjIpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgZWxlbWVudCB0byBwZXJmb3JtIHRoZSBhbmltYXRpb25zIG9uLlxuICAgIHB1YmxpYyByZWdpc3RlckVsZW1lbnQoZWxlbWVudDpFbGVtZW50UmVmKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gZGV0ZWN0IGNoYW5nZXMgd2hlbiB1c2luZyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2guXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGUodHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVGVzdCBpZiB0cmFuc2l0aW9uIGlzIG9uZSBvZiB0aGUgbGlzdCB0aGF0IGRvZXNuJ3QgY2hhbmdlIHRoZSB2aXNpYmxlIHN0YXRlLlxuICAgICAgICAvLyBTaG91bGQgdGhlc2UgZXZlbnR1YWxseSBiZWNvbWUgY2xhc3Nlcz9cbiAgICAgICAgY29uc3QgaXNEaXJlY3Rpb25sZXNzID0gW1wiamlnZ2xlXCIsIFwiZmxhc2hcIiwgXCJzaGFrZVwiLCBcInB1bHNlXCIsIFwidGFkYVwiLCBcImJvdW5jZVwiXS5pbmRleE9mKHRyYW5zaXRpb24udHlwZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNEaXJlY3Rpb25sZXNzKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uU3RhdGljO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09IHVuZGVmaW5lZCB8fCB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgY3VycmVudCB2aXNpYmxlIHN0YXRlIGF1dG9tYXRpY2FsbHkgaWYgbm90IHNldCwgb3Igc2V0IHRvIGVpdGhlciBkaXJlY3Rpb24uXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMuX2lzVmlzaWJsZSA/IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0IDogVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZUxhc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBhbHJlYWR5LCBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3Bwb3NpdGUgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGF0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBpdC5cbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0cmFuc2l0aW9uKTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtVHJhbnNpdGlvbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkgfHwgdGhpcy5faXNBbmltYXRpbmcgfHwgIXRoaXMuX3F1ZXVlRmlyc3QpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHRyYW5zaXRpb24gdW50aWwgd2UgYXJlIHJlYWR5LCBvciBpZiB3ZSBhcmUgYW5pbWF0aW5nLCBvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRyYW5zaXRpb25zIGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdDtcblxuICAgICAgICAvLyBTZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgc3R5bGVzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW9uRHVyYXRpb25gLCBgJHt0cmFuc2l0aW9uLmR1cmF0aW9ufW1zYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCwgdGhpcy5fZGlzcGxheSk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBVbnNldCBoaWRkZW4gaWYgd2UgYXJlIHRyYW5zaXRpb25pbmcgaW4uXG4gICAgICAgICAgICB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGUgbGVuZ3RoIG9mIHRoZSBhbmltYXRpb24gYmVmb3JlIGNhbGxpbmcgdGhlIGNvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pLCB0cmFuc2l0aW9uLmR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhIHRyYW5zaXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICBwcml2YXRlIGZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgJiBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50LCBgZGlzcGxheWApO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBqdXN0IGFuaW1hdGVkIGluLCB3ZSBhcmUgbm93IHZpc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2l0aW9uZWQgb3V0LCB3ZSBzaG91bGQgYmUgaW52aXNpYmxlIGFuZCBoaWRkZW4uXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVzZXItZGVmaW5lZCB0cmFuc2l0aW9uIGNhbGxiYWNrLlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcXVldWUuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgLy8gSW1tZWRpYXRlbHkgYXR0ZW1wdCB0byBwZXJmb3JtIGFub3RoZXIgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGxlYXZlcyB0aGUgcmVzdCBvZiB0aGUgcXVldWUgaW50YWN0LlxuICAgIHB1YmxpYyBzdG9wKHRyYW5zaXRpb246VHJhbnNpdGlvbiA9IHRoaXMuX3F1ZXVlRmlyc3QpOnZvaWQge1xuICAgICAgICBpZiAoIXRyYW5zaXRpb24gfHwgIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgIHRoaXMuZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcyB0aGUgY3VycmVudCB0cmFuc2l0aW9uLCBhbmQgZW1wdGllcyB0aGUgcXVldWUuXG4gICAgcHVibGljIHN0b3BBbGwoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhclF1ZXVlKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIEVtcHRpZXMgdGhlIHRyYW5zaXRpb24gcXVldWUgYnV0IGNhcnJpZXMgb24gd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uLlxuICAgIHB1YmxpYyBjbGVhclF1ZXVlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFt0aGlzLl9xdWV1ZUZpcnN0XTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvdHJhbnNpdGlvbi1jb250cm9sbGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUcmFuc2l0aW9uXVwiLFxuICAgIGV4cG9ydEFzOiBcInRyYW5zaXRpb25cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBFYWNoIHRyYW5zaXRpb24gbXVzdCBoYXZlIGEgY29udHJvbGxlciBhc3NvY2lhdGVkIHRoYXQgZGlzcGF0Y2hlcyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzdWlUcmFuc2l0aW9uKHRDOlRyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIC8vIFNldCB0aGUgdHJhbnNpdGlvbiBjb250cm9sbGVyIChlLmcuICc8ZGl2IFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+PC9kaXY+JykuXG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodEMpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNsYXNzOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc1Zpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmhpZGRlblwiKVxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzSGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgLy8gSW5pdGlhbGlzZXMgdGhlIGNvbnRyb2xsZXIgd2l0aCB0aGUgaW5qZWN0ZWQgcmVuZGVyZXIgYW5kIGVsZW1lbnRSZWYuXG4gICAgcHVibGljIHNldFRyYW5zaXRpb25Db250cm9sbGVyKHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyUmVuZGVyZXIodGhpcy5fcmVuZGVyZXIpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyRWxlbWVudCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IodGhpcy5fY2hhbmdlRGV0ZWN0b3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RyYW5zaXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVHJhbnNpdGlvblxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcbiAgICBkaXNtaXNzKCk6dm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1lc3NhZ2VcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIG1lc3NhZ2Uge3sgY2xhc3MgfX1cIiAqbmdJZj1cIiFpc0Rpc21pc3NlZFwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Rpc21pc3NhYmxlXCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPjwvaT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBDU1MgQnVnICovXG4udWkuaWNvbi52aXNpYmxlLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2UgaW1wbGVtZW50cyBJTWVzc2FnZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNtaXNzYWJsZTpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImRpc21pc3NcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPjtcblxuICAgIHB1YmxpYyBpc0Rpc21pc3NlZDpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgY2xhc3M6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNtaXNzYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDMwMDtcblxuICAgICAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzbWlzcygpOnZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCh0aGlzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNZXNzYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZXNzYWdlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNZXNzYWdlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBhZ2luYXRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT0xXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZS0xKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzUHJldmlvdXMoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKDEpXCIgKm5nSWY9XCJwYWdlc1swXSAhPT0gMVwiPlxuICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzWzBdID4gMlwiPi4uLjwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiBjbGFzcz1cIml0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInA9PT1wYWdlXCIgKGNsaWNrKT1cInNldFBhZ2UocClcIj5cbiAgICB7eyBwIH19XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIDwgcGFnZUNvdW50IC0gMVwiPi4uLjwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSAhPT0gcGFnZUNvdW50XCI+XG4gICAgICAgIDxzcGFuPnt7IHBhZ2VDb3VudCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZSsxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT1wYWdlQ291bnRcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnaW5hdGlvblwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgLy8gUHVibGljIG1lbWJlcnNcbiAgICBwdWJsaWMgcGFnZUNvdW50Om51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgLy8gUHJpdmF0ZSBtZW1iZXJzXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZT86bnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TaXplOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlczpudW1iZXJbXTtcbiAgICBwcml2YXRlIF9oYXNOYXZpZ2F0aW9uTGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhTaXplKCk6bnVtYmVyfHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTpudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIDEpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VTaXplOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uU2l6ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uU2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbGxlY3Rpb25TaXplKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2l6ZSA9IE1hdGgubWF4KHZhbHVlLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc05hdmlnYXRpb25MaW5rcygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5fbWF4U2l6ZSB8fCB0aGlzLnBhZ2VDb3VudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyB8fCBtYXhTaXplIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNOYXZpZ2F0aW9uTGlua3ModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNCb3VuZGFyeUxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5Sb3RhdGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0VsbGlwc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhZ2VzKCk6bnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gMTtcbiAgICAgICAgdGhpcy5oYXNOYXZpZ2F0aW9uTGlua3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JvdW5kYXJ5TGlua3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNFbGxpcHNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgaGFzUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlKG5ld1BhZ2U6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWU6bnVtYmVyID0gKE51bWJlci5pc0ludGVnZXIobmV3UGFnZSkpID8gTWF0aC5taW4oTWF0aC5tYXgobmV3UGFnZSwgMSksIHRoaXMucGFnZUNvdW50KSA6IDE7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGUgaG9va3NcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgdXBkYXRlUGFnZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5hcHBseVBhZ2luYXRpb24oKTtcblxuICAgICAgICB0aGlzLl9wYWdlcyA9IEFycmF5PG51bWJlcj4oZW5kIC0gc3RhcnQpXG4gICAgICAgICAgICAuZmlsbChzdGFydCArIDEpXG4gICAgICAgICAgICAubWFwKChzLCBpKSA9PiBzICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2luYXRpb24oKTpbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9ICh0aGlzLm1heFNpemUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHRoaXMubWF4U2l6ZSwgdGhpcy5wYWdlQ291bnQpIDogdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguY2VpbCh0aGlzLnBhZ2UgLyBtYXhTaXplKSAtIDE7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0T2Zmc2V0ID0gbWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlQ291bnQgLSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnQgPSBwYWdlICogbWF4U2l6ZTtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbc3RhcnQsIE1hdGgubWluKGVuZCwgdGhpcy5wYWdlQ291bnQpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFN1aVBhZ2luYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvbi1wYW5lbFwiLFxuICAgIGV4cG9ydEFzOiBcInN1aUFjY29yZGlvblBhbmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gVGl0bGUgLS0+XG48ZGl2IGNsYXNzPVwidGl0bGVcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIChjbGljayk9XCJ0b2dnbGUoKVwiID5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48IS0tIENvbnRlbnQgLS0+XG48ZGl2IFtzdWlDb2xsYXBzZV09XCIhaXNPcGVuXCIgW2NvbGxhcHNlRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBNYW51YWwgc3R5bGUgYXMgU2VtYW50aWMgVUkgcmVsaWVzIG9uID4gc2VsZWN0b3IgKi9cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAuNWVtIDAgMWVtO1xufVxuXG4vKiBBbm90aGVyID4gc2VsZWN0b3IgZml4ICovXG46aG9zdDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25QYW5lbCB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gQ29udmVydCB0byBib29sZWFuIChmaXhlcyBmYWxzZSAhPSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT3BlbiAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiB0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhpcyBwYW5lbCwgd2UgbXVzdCBjbG9zZSB0aGUgb3RoZXIgb25lcy5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBjdXJyZW50IGFuaW1hdGlvbnMsIGFuZCBmYWRlIHRoZSBjb250ZW50cy4gVGhlIGRpcmVjdGlvbiBpcyBhdXRvbWF0aWMuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlcnZpY2UgZGVmaW5lZCB0cmFuc2l0aW9uIGR1cmF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldmVydCB0byBpbnN0YW50YW5lb3VzIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCB5ZXQgbG9hZGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBjbG9zZU90aGVyczpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIHBhbmVsczpTdWlBY2NvcmRpb25QYW5lbFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPdGhlcnMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDM1MDtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQYW5lbChwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIHBhbmVsLnNlcnZpY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHBhbmVsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VPdGhlclBhbmVscyhwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwICE9PSBwYW5lbCkge1xuICAgICAgICAgICAgICAgIHAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2FjY29yZGlvbi1wYW5lbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBnZW5lcmFsIHN0eWxpbmcgaXNzdWVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpeCBmb3Igc3R5bGVkIGJvcmRlciBpc3N1ZSAqL1xuOmhvc3Quc3R5bGVkIHN1aS1hY2NvcmRpb24tcGFuZWw6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjY29yZGlvblwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY2xvc2VPdGhlcnMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZU90aGVycyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aUFjY29yZGlvblBhbmVsKVxuICAgIHByb3RlY3RlZCBfcGFuZWxzOlF1ZXJ5TGlzdDxTdWlBY2NvcmRpb25QYW5lbD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWNjb3JkaW9uIHNlcnZpY2UgaXMgdW5pcXVlIHRvIGVhY2ggc2V0IG9mIHBhbmVscy5cbiAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBTdWlBY2NvcmRpb25TZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0IHBhbmVscyBhZnRlciB0aGV5IGhhdmUgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fcGFuZWxzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUGFuZWxzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQYW5lbHMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFuZWxzLmZvckVhY2gocCA9PiB0aGlzLl9zZXJ2aWNlLmFkZFBhbmVsKHApKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aUNvbGxhcHNlXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlIHtcbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgb3BlbiwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZXhwYW5kZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNFeHBhbmRlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGNsb3NlZCwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY29sbGFwc2VkXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0NvbGxhcHNpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzaW5nXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0NvbGxhcHNpbmc6Ym9vbGVhbjtcblxuICAgIC8vIEZsYWcgdGhhdCBpcyBpbml0aWFsbHkgdHJ1ZSwgdG8gbWFrZSB0aGUgMXN0IGFuaW1hdGlvbiBpbnN0YW50YW5lb3VzLlxuICAgIHByaXZhdGUgX3ByaXN0aW5lOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc3VpQ29sbGFwc2UoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNvbGxhcHNlLCBgdHJ1ZWAgaXMgY29sbGFwc2VkLlxuICAgIHB1YmxpYyBzZXQgc3VpQ29sbGFwc2UodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xsYXBzZUR1cmF0aW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgZ2V0IF9hbmltYXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlzdGluZSA/IDAgOiB0aGlzLmNvbGxhcHNlRHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbmltYXRpb24gZHVyYXRpb24gaXMgMzUwbXMgYnkgZGVmYXVsdC5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEZvcmNpYmx5IGhpZGUgdGhlIG92ZXJmbG93IHNvIHRoYXQgY29udGVudCBpcyBub3QgdmlzaWJsZSBwYXN0IHRoZSBib3VuZGFyaWVzIG9mIGl0cyBjb250YWluZXIuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBob3N0IGVsZW1lbnQgZnJvbSBpdHMgc2Nyb2xsIGhlaWdodCB0byAwLlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgMCwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBvZmZzZXQgaGVpZ2h0IHRvIGl0cyBzY3JvbGwgaGVpZ2h0LlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVyZmxvdyBvdmVycmlkZSB0byBlbmFibGUgdXNlciBzdHlsaW5nIG9uY2UgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwib3ZlcmZsb3dcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYW5pbWF0ZShzdGFydEhlaWdodDpudW1iZXIsIGVuZEhlaWdodDpudW1iZXIsIHJlbW92ZU9uQ29tcGxldGU6Ym9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICBjb25zdCBoZWlnaHRGcmFtZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c3RhcnRIZWlnaHR9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2VuZEhlaWdodH1weGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocmVtb3ZlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgaGVpZ2h0RnJhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGBhdXRvYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBjb2xsYXBzZSB1c2luZyB0aGUgd2ViIGFuaW1hdGlvbnMgQVBJLlxuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoXG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBhbmltYXRpb24gb24gMXN0IGNvbGxhcHNlIC8gZXhwYW5zaW9uLlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlXCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5fcHJpc3RpbmUpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmlzdGluZSBmbGFnIHdoZW4gZmlyc3QgaGl0LlxuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSwgdGhpcy5jb2xsYXBzZUR1cmF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY29sbGFwc2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDb2xsYXBzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29sbGFwc2VNb2R1bGUgfSBmcm9tIFwiLi4vY29sbGFwc2UvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYWxpZGF0b3JIb3N0IHtcbiAgICB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3I8VCBleHRlbmRzIElDdXN0b21WYWxpZGF0b3JIb3N0PiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QudmFsaWRhdGUoYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjwoRnVuY3Rpb24gfCBWYWxpZGF0b3IpW10+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFQgZXh0ZW5kcyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICB0aGlzLl9ob3N0LndyaXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiLy8gS2V5Ym9hcmQga2V5Y29kZXMuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBMZWZ0ID0gMzcsXG4gICAgVXAgPSAzOCxcbiAgICBSaWdodCA9IDM5LFxuICAgIERvd24gPSA0MCxcblxuICAgIEVzY2FwZSA9IDI3LFxuICAgIEVudGVyID0gMTMsXG5cbiAgICBTcGFjZSA9IDMyLFxuICAgIEJhY2tzcGFjZSA9IDhcbn1cblxuaW50ZXJmYWNlIElSZWN1cnNpdmVPYmplY3QgeyBbbmFtZTpzdHJpbmddOklSZWN1cnNpdmVPYmplY3Q7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHsgJGltcGxpY2l0OlQ7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJQXVnbWVudGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNsb3Nlc3Qoc2VsZWN0b3I6c3RyaW5nKTpJQXVnbWVudGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEhhbmRsZWRFdmVudCB7XG4gICAgcHVibGljIGV2ZW50SGFuZGxlZDpib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljQ2xhc3NlcyB7XG4gICAgW25hbWU6c3RyaW5nXTp0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgICBBcnJheToge1xuICAgICAgICByYW5nZShuOm51bWJlciwgb2Zmc2V0Om51bWJlciA9IDApOm51bWJlcltdIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheShuKS5maWxsKDApLm1hcCgoeiwgaSkgPT4gaSArIG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwPFQ+KGl0ZW1zOlRbXSwgZ3JvdXBMZW5ndGg6bnVtYmVyKTpUW11bXSB7XG4gICAgICAgICAgICBjb25zdCBtdXRhYmxlID0gaXRlbXMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczpUW11bXSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKG11dGFibGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG11dGFibGUuc3BsaWNlKDAsIGdyb3VwTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEJ5PFQ+KGl0ZW1zOlRbXSwgZmllbGQ6a2V5b2YgVCk6eyBbbmFtZTpzdHJpbmddOlRbXSB9IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2U8eyBbbmFtZTpzdHJpbmddOlRbXSB9PihcbiAgICAgICAgICAgICAgICAoZ3JvdXBzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBpW2ZpZWxkXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0gPSBncm91cHNbZmllbGRWYWx1ZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT2JqZWN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBmbGF0dGVuPFQ+KGl0ZW1zOlRbXVtdKTpUW10ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoaXMsIGkpID0+IGlzLmNvbmNhdChpKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFN0cmluZzoge1xuICAgICAgICBwYWRMZWZ0KHN0cjpzdHJpbmcsIGxlbmd0aDpudW1iZXIsIHBhZGRpbmc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAgICAgbGV0IHMgPSBzdHI7XG4gICAgICAgICAgICB3aGlsZSAocy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzID0gcGFkZGluZyArIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBET006IHtcbiAgICAgICAgcGFyc2VCb29sZWFuQXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlOmJvb2xlYW4pOmJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgT2JqZWN0OiB7XG4gICAgICAgIHJlYWRWYWx1ZTxULCBVPihvYmplY3Q6VCwgcGF0aD86c3RyaW5nKTpVIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QgYXMgYW55IGFzIFU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWN1cnNlZCA9IG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKHJlY3Vyc2VkIGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0KVtwW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2VkIGFzIGFueSBhcyBVO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE1hdGg6IHtcbiAgICAgICAgcm91bmQocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRVcChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kRG93bihyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICBtb2QocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgY29uc3QgcmVtID0gciAlIG47XG4gICAgICAgICAgICBpZiAocmVtIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW0gKyBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZW51bSBEYXRlUHJlY2lzaW9uIHtcbiAgICBEZWNhZGUgPSAwLFxuICAgIFllYXIgPSAxLFxuICAgIE1vbnRoID0gMixcbiAgICBEYXRlID0gMyxcbiAgICBIb3VyID0gNCxcbiAgICBNaW51dGUgPSA1XG59XG5cbmV4cG9ydCBjb25zdCBEYXRlVXRpbCA9IHtcbiAgICBzdGFydE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIHJlc2V0QWxsOmJvb2xlYW4gPSBmYWxzZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihkYXRlLmdldEZ1bGxZZWFyKCkgLyAxMCkgKiAxMCArIDE7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihzdGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVuZE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBzd2l0Y2ggKHByZWNpc2lvbikge1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgxMiwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDU5LCA1OSwgOTk5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVxdWFsKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBhOkRhdGUsIGI6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCBlcXVhbCA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNaW51dGVzKCkgPT09IGIuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRIb3VycygpID09PSBiLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXF1YWw7XG4gICAgfSxcblxuICAgIG5leHQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5hZGQocHJlY2lzaW9uLCBkYXRlLCAxKTtcbiAgICB9LFxuXG4gICAgYWRkKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIGk6bnVtYmVyKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5ZZWFyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChtb250aCArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IFV0aWwuTWF0aC5tb2QobW9udGggKyBpLCAxMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG5cbiAgICBwcmV2aW91cyhwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciAtIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCAtIDEsIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldEhvdXJzKCkgIT09IFV0aWwuTWF0aC5tb2QoaG91cnMgLSAxLCAyNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGNsb25lKGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZixcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBsaWNpdENvbnRleHQ8VD4ge1xuICAgICRpbXBsaWNpdD86VDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aUNvbXBvbmVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOkFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6SW5qZWN0b3IpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50PFQ+KHR5cGU6VHlwZTxUPiwgcHJvdmlkZXJzOlByb3ZpZGVyW10gPSBbXSk6Q29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgLy8gUmVzb2x2ZSBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGNvbXBvbmVudHMgb2YgdHlwZSBgdHlwZWAuXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSBhcyBUeXBlPFQ+KTtcblxuICAgICAgICAvLyBSZXNvbHZlIGFuZCBjcmVhdGUgYW4gaW5qZWN0b3Igd2l0aCB0aGUgc3BlY2lmaWVkIHByb3ZpZGVycy5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgICAgICAgIHByb3ZpZGVycyxcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHVzaW5nIHRoZSBwcmV2aW91c2x5IHJlc29sdmVkIGZhY3RvcnkgJiBpbmplY3Rvci5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVZpZXc8VCwgVSBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8VD4+KHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGU6VGVtcGxhdGVSZWY8VT4sIGNvbnRleHQ6VSk6dm9pZCB7XG4gICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3PFU+KHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW50byB0aGUgc3BlY2lmaWVkIHZpZXcgY29udGFpbmVyLlxuICAgIHB1YmxpYyBhdHRhY2hUb1ZpZXc8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgICBwdWJsaWMgYXR0YWNoVG9BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIERldGFjaGVzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBkZXRhY2hGcm9tQXBwbGljYXRpb248VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBzcGVjaWZpZWQgRE9NIGVsZW1lbnQuXG4gICAgcHVibGljIG1vdmVUb0VsZW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgZWxlbWVudDpFbGVtZW50KTp2b2lkIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTW92ZXMgdGhlIGNvbXBvbmVudCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICBwdWJsaWMgbW92ZVRvRG9jdW1lbnRCb2R5PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLm1vdmVUb0VsZW1lbnQoY29tcG9uZW50UmVmLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2hGcm9tRG9jdW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAvLyBXZSBjYW4ndCB1c2UgYGVsZW1lbnQucmVtb3ZlKClgIGR1ZSB0byBsYWNrIG9mIElFMTEgc3VwcG9ydC5cbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgUG9wcGVyLCB7IE1vZGlmaWVycywgUG9wcGVyT3B0aW9ucywgUGxhY2VtZW50LCBEYXRhIH0gZnJvbSBcInBvcHBlci5qc1wiO1xuXG50eXBlIFBvcHBlck1vZGlmaWVycyA9IE1vZGlmaWVycyAmIHtcbiAgICBjb21wdXRlU3R5bGU/OntcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOmJvb2xlYW47XG4gICAgfTtcbn07XG50eXBlIFBvcHBlckluc3RhbmNlID0gUG9wcGVyICYge1xuICAgIG9wdGlvbnM6UG9wcGVyT3B0aW9ucyAmIHtcbiAgICAgICAgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSBcImF1dG9cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wIGxlZnRcIiB8IFwidG9wXCIgfCBcInRvcCByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gbGVmdFwiIHwgXCJib3R0b21cIiB8IFwiYm90dG9tIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgdG9wXCIgfCBcImxlZnRcIiB8IFwibGVmdCBib3R0b21cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQgdG9wXCIgfCBcInJpZ2h0XCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSB7XG4gICAgQXV0bzogXCJhdXRvXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wTGVmdDogXCJ0b3AgbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcDogXCJ0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BSaWdodDogXCJ0b3AgcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0VG9wOiBcImxlZnQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdEJvdHRvbTogXCJsZWZ0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbUxlZnQ6IFwiYm90dG9tIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tUmlnaHQ6IFwiYm90dG9tIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRUb3A6IFwicmlnaHQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodEJvdHRvbTogXCJyaWdodCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zaXRpb25Cb3VuZGluZ0JveCB7XG4gICAgd2lkdGg6bnVtYmVyO1xuICAgIGhlaWdodDpudW1iZXI7XG4gICAgdG9wOm51bWJlcjtcbiAgICBsZWZ0Om51bWJlcjtcbiAgICBib3R0b206bnVtYmVyO1xuICAgIHJpZ2h0Om51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KTpQbGFjZW1lbnQge1xuICAgIGlmICghcGxhY2VtZW50IHx8IHBsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bykge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgLy8gQWxsIHBsYWNlbWVudHMgb2YgdGhlIGZvcm1hdDogYGRpcmVjdGlvbiBhbGlnbm1lbnRgLCBlLmcuIGB0b3AgbGVmdGAuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBsYWNlbWVudC5zcGxpdChcIiBcIik7XG5cbiAgICAvLyBEaXJlY3Rpb24gYWxvbmUgY292ZXJzIGNhc2Ugb2YganVzdCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCwgYHJpZ2h0YC5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIC8vIEFkZCBgc3RhcnRgIC8gYGVuZGAgdG8gcGxhY2VtZW50LCBkZXBlbmRpbmcgb24gYWxpZ25tZW50IGRpcmVjdGlvbi5cbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInN0YXJ0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImVuZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEpvaW4gd2l0aCBoeXBoZW4gdG8gY3JlYXRlIFBvcHBlciBjb21wYXRpYmxlIHBsYWNlbWVudC5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCItXCIpIGFzIFBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wcGVyVG9QbGFjZW1lbnQocG9wcGVyOnN0cmluZyk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgIGlmICghcG9wcGVyIHx8IHBvcHBlciA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwb3BwZXIuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIiBcIikgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6RWxlbWVudFJlZjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3ViamVjdDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfcG9wcGVyOlBvcHBlckluc3RhbmNlO1xuICAgIHByaXZhdGUgX3BvcHBlclN0YXRlOkRhdGE7XG4gICAgcHJpdmF0ZSBfcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHByaXZhdGUgX2hhc0Fycm93OmJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYXJyb3dTZWxlY3RvcjpzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNBcnJvdyhoYXNBcnJvdzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0Fycm93ID0gaGFzQXJyb3c7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3R1YWxQbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wcGVyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHBlclRvUGxhY2VtZW50KHRoaXMuX3BvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wcGVyU3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYW5jaG9yOkVsZW1lbnRSZWYsIHN1YmplY3Q6RWxlbWVudFJlZiwgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50LCBhcnJvd1NlbGVjdG9yPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgdGhpcy5fYXJyb3dTZWxlY3RvciA9IGFycm93U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnMgPSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBncHVBY2NlbGVyYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5fYXJyb3dTZWxlY3RvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIGZuOiAoZGF0YTpQb3BwZXIuRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIubGVmdCArPSBvZmZzZXRzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyLnRvcCArPSBvZmZzZXRzLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9hcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFRvUG9wcGVyKHRoaXMuX3BsYWNlbWVudCksXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiBpbml0aWFsID0+IHRoaXMuX3BvcHBlclN0YXRlID0gaW5pdGlhbCxcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogdXBkYXRlID0+IHRoaXMuX3BvcHBlclN0YXRlID0gdXBkYXRlXG4gICAgICAgICAgICB9KSBhcyBQb3BwZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0cygpOlBvcHBlci5PZmZzZXQge1xuICAgICAgICBsZXQgbGVmdCA9IDA7IGxldCB0b3AgPSAwO1xuXG4gICAgICAgIC8vIFRvIHN1cHBvcnQgY29ycmVjdCBwb3NpdGlvbmluZyBmb3IgYWxsIHBvcHVwIHNpemVzIHdlIHNob3VsZCBjYWxjdWxhdGUgb2Zmc2V0IHVzaW5nIGVtXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgIC8vIFRoZSBTZW1hbnRpYyBVSSBwb3B1cCBhcnJvdyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSAwLjcxNDI4NTcxZW0gYW5kIHRoZSBtYXJnaW4gZnJvbSB0aGUgcG9wdXAgZWRnZSBpcyAxZW1cbiAgICAgICAgY29uc3QgYXJyb3dDZW50ZXIgPSAoMC43MTQyODU3MSAvIDIgKyAxKSAqIGZvbnRTaXplO1xuXG4gICAgICAgIGlmICh0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDw9IGFycm93Q2VudGVyICogMikge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yQ2VudGVyV2lkdGggPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQgfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFuY2hvckNlbnRlcldpZHRoIC0gYXJyb3dDZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BSaWdodCB8fCB0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVyV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gYXJyb3dDZW50ZXIgKiAyKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3JDZW50ZXJIZWlnaHQgPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5MZWZ0VG9wIHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuUmlnaHRUb3ApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3JDZW50ZXJIZWlnaHQgLSBhcnJvd0NlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkxlZnRCb3R0b20gfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5SaWdodEJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5leHBvcnQgdHlwZSBQb3B1cFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJsYXJnZVwiIHwgXCJodWdlXCI7XG5leHBvcnQgdHlwZSBQb3B1cFdpZHRoID0gXCJ3aWRlXCIgfCBcInZlcnkgd2lkZVwiICB8IFwiZmxvd2luZ1wiO1xuXG5leHBvcnQgY29uc3QgUG9wdXBUcmlnZ2VyID0ge1xuICAgIEhvdmVyOiBcImhvdmVyXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIENsaWNrOiBcImNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgRm9jdXM6IFwiZm9jdXNcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgTWFudWFsOiBcIm1hbnVhbFwiIGFzIFBvcHVwVHJpZ2dlclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBDb25maWcge1xuICAgIGhlYWRlcj86c3RyaW5nO1xuICAgIHRleHQ/OnN0cmluZztcbiAgICBwbGFjZW1lbnQ/OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHRyaWdnZXI/OlBvcHVwVHJpZ2dlcjtcbiAgICBpc0ludmVydGVkPzpib29sZWFuO1xuICAgIGRlbGF5PzpudW1iZXI7XG4gICAgaXNCYXNpYz86Ym9vbGVhbjtcbiAgICB0cmFuc2l0aW9uPzpzdHJpbmc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzpudW1iZXI7XG4gICAgaXNGbG93aW5nPzpib29sZWFuO1xuICAgIGlzSW5saW5lPzpib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUG9wdXBDb25maWcgaW1wbGVtZW50cyBJUG9wdXBDb25maWcge1xuICAgIHB1YmxpYyBoZWFkZXI/OnN0cmluZztcbiAgICBwdWJsaWMgdGV4dD86c3RyaW5nO1xuICAgIHB1YmxpYyBwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG4gICAgcHVibGljIHRyaWdnZXI6UG9wdXBUcmlnZ2VyO1xuICAgIHB1YmxpYyBpc0ludmVydGVkOmJvb2xlYW47XG4gICAgcHVibGljIGRlbGF5Om51bWJlcjtcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICBwdWJsaWMgc2l6ZTpQb3B1cFNpemU7XG4gICAgcHVibGljIHdpZHRoOlBvcHVwV2lkdGg7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG4gICAgcHVibGljIGlzRmxvd2luZzpib29sZWFuO1xuICAgIHB1YmxpYyBpc0lubGluZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGVmYXVsdHM6SVBvcHVwQ29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BMZWZ0O1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSBQb3B1cFRyaWdnZXIuSG92ZXI7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgICAgIHRoaXMuaXNGbG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UsIElEeW5hbWljQ2xhc3NlcyB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgcG9wdXBcIlxuICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICNjb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbmZpZy50ZW1wbGF0ZSAmJiAoISFjb25maWcuaGVhZGVyIHx8ICEhY29uZmlnLnRleHQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiAqbmdJZj1cImNvbmZpZy5oZWFkZXJcIj57eyBjb25maWcuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgY29uZmlnLnRleHQgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG5cbiAgICA8c3VpLXBvcHVwLWFycm93ICpuZ0lmPVwiIWNvbmZpZy5pc0Jhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW52ZXJ0ZWRdPVwiY29uZmlnLmlzSW52ZXJ0ZWRcIj48L3N1aS1wb3B1cC1hcnJvdz5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkucG9wdXAge1xuICAgIC8qIEF1dG9maXQgcG9wdXAgdG8gdGhlIGNvbnRlbnRzLiAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnVpLmFuaW1hdGluZy5wb3B1cCB7XG4gICAgLyogV2hlbiB0aGUgcG9wdXAgaXMgYW5pbWF0aW5nLCBpdCBtYXkgbm90IGluaXRpYWxseSBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICBUaGlzIGZpcmVzIGEgbW91c2UgZXZlbnQsIGNhdXNpbmcgdGhlIGFuY2hvcidzIG1vdXNlbGVhdmUgdG8gZmlyZSAtIG1ha2luZyB0aGUgcG9wdXAgZmxpY2tlci5cbiAgICAgICBTZXR0aW5nIHBvaW50ZXItZXZlbnRzIHRvIG5vbmUgd2hpbGUgYW5pbWF0aW5nIGZpeGVzIHRoaXMgYnVnLiAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWkucG9wdXA6OmJlZm9yZSB7XG4gICAgLyogSGlkZSB0aGUgU2VtYW50aWMgVUkgQ1NTIGFycm93LiAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gYWJvdmUgYW5kIGJlbG93IHdoZW4gcGxhY2VkICd2ZXJ0aWNhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJ0b3BcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGVpdGhlciBzaWRlIHdoZW4gcGxhY2VkICdob3Jpem9udGFsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImxlZnRcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cCBpbXBsZW1lbnRzIElQb3B1cCB7XG4gICAgLy8gQ29uZmlnIHNldHRpbmdzIGZvciB0aGlzIHBvcHVwLlxuICAgIHB1YmxpYyBjb25maWc6VGVtcGxhdGVQb3B1cENvbmZpZzxhbnk+O1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgIHB1YmxpYyBwb3NpdGlvbmluZ1NlcnZpY2U6UG9zaXRpb25pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2FuY2hvcjpFbGVtZW50UmVmO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbiBpbnRlcm5hbGx5LlxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHBvcHVwIGNsb3NlLlxuICAgIHB1YmxpYyBjbG9zaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBvcGVucyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25PcGVuOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBjbG9zZXMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uQ2xvc2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBgRWxlbWVudFJlZmAgZm9yIHRoZSBwb3NpdGlvbmluZyBzdWJqZWN0LlxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwdWJsaWMgc2V0IGFuY2hvcihhbmNob3I6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZGlyZWN0aW9uIChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgZGlyZWN0aW9uIGF0dHJpYnV0ZSBiZWZvcmUgcG9wcGVyIGluaXQgdG8gYWxsb3cgY29ycmVjdCBwb3NpdGlvbmluZ1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5hbGlnbm1lbnRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNJbnZlcnRlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5pbnZlcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzQmFzaWMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuYmFzaWMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Zsb3dpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuZmxvd2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5jb25maWcuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy53aWR0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJpbmRleDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIG9wZW4gaWYgY3VycmVudGx5IGNsb3NlZC5cbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcG9zaXRpb25pbmcgc2VydmljZSBhZnRlciBhIGJyaWVmIGRlbGF5LlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmdTZXJ2aWNlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5lbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwiLmR5bmFtaWMuYXJyb3dcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UuaGFzQXJyb3cgPSAhdGhpcy5jb25maWcuaXNCYXNpYztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIG9wZW5pbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgb3Blbi5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBjbG9zZSBpZiBjdXJyZW50bHkgb3Blbi5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGNsb3NpbmcgdGltZXIsIHRoYXQgZmlyZXMgdGhlIGBvbkNsb3NlYCBldmVudCBhZnRlciB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgICAgICAgICAgdGhpcy5jbG9zaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZS5lbWl0KCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgY2xvc2VkLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgcG9wdXAgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IElQb3B1cExpZmVjeWNsZSB9IGZyb20gXCIuL3BvcHVwLWxpZmVjeWNsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cCB7XG4gICAgb3BlbigpOnZvaWQ7XG4gICAgY2xvc2UoKTp2b2lkO1xuICAgIHRvZ2dsZSgpOnZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlQb3B1cENvbnRyb2xsZXIgaW1wbGVtZW50cyBJUG9wdXAsIE9uRGVzdHJveSB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgcG9wdXAgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpUG9wdXA+O1xuXG4gICAgLy8gUmV0dXJucyBnZW5lcmF0ZWQgcG9wdXAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBwb3B1cCgpOlN1aVBvcHVwIHtcbiAgICAgICAgLy8gVXNlIG5vbi1udWxsIGFzc2VydGlvbiBhcyB3ZSBvbmx5IGFjY2VzcyB0aGlzIHdoZW4gYSBwb3B1cCBleGlzdHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGRlbGF5ZWQgcG9wdXAgb3Blbi5cbiAgICBwcml2YXRlIF9vcGVuaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIGRvY3VtZW50IGNsaWNrIGhhbmRsZXIuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRMaXN0ZW5lcjooKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBTdWlQb3B1cCBjb21wb25lbnQgYW5kIGF0dGFjaCBpdCB0byB0aGUgYXBwbGljYXRpb24gdmlldy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoU3VpUG9wdXApO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwb3B1cCB3aXRoIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgcG9wdXAgaXMgY2xvc2VkIChvbkNsb3NlIGZpcmVzIG9uIGFuaW1hdGlvbiBjb21wbGV0ZSksXG4gICAgICAgIHRoaXMucG9wdXAub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhbnVwKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJUG9wdXBDb25maWcpOnZvaWQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucG9wdXAuY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lci5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5IGludGVydmFsLlxuICAgICAgICB0aGlzLl9vcGVuaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbigpLCB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcuaXNJbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRWxlbWVudCh0aGlzLl9jb21wb25lbnRSZWYsIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGdlbmVyYXRlZCBlbGVtZW50IHRvIHRoZSBib2R5IHRvIGF2b2lkIGFueSBwb3NpdGlvbmluZyBpc3N1ZXMuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0RvY3VtZW50Qm9keSh0aGlzLl9jb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gV2UgZG8gaXQgaGVyZSBiZWNhdXNlIElFMTEgbG92ZXMgdG8gY29tcGxhaW4uXG4gICAgICAgIHRoaXMucG9wdXAuYW5jaG9yID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBoYW5kbGUgY2xvc2luZy5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZTpNb3VzZUV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGUpKTtcblxuICAgICAgICAvLyBTdGFydCBwb3B1cCBvcGVuIHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMucG9wdXAub3BlbigpO1xuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25PcGVuO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIgdG8gc3RvcCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciBjbG9zZSBoYXMgYmVlbiBjYWxsZWQuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgLy8gU3RhcnQgcG9wdXAgY2xvc2UgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25DbG9zZTtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxuICAgIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuQ2xpY2sgfHxcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcblxuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHJlcXVpcmUgYSB0b2dnbGUsIHJhdGhlciB0aGFuIGp1c3Qgb3BlbmluZyB0aGUgcG9wdXAgZWFjaCB0aW1lLlxuICAgICAgICAgICAgdGhpcy50b2dnbGVEZWxheWVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzICYmXG4gICAgICAgICAgICAgICAgICAgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSkge1xuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHdpdGggYSBmb2N1cyB0cmlnZ2VyIHJlcXVpcmVzIGFuIG9wZW4gKGFzIGZvY3VzIGlzbid0IGV2ZXIgbG9zdCBvbiByZXBlYXRlZCBjbGljaykuXG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgdHJpZ2dlciBpcyBvdXRzaWRlIGNsaWNrLFxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmICYmIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgcG9wdXAgaWYgdGhlIGNsaWNrIGlzIG91dHNpZGUgb2YgdGhlIHBvcHVwIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoISh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6YW55KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UgJiYgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBUeXBlLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlcjxUPiBleHRlbmRzIFN1aVBvcHVwQ29udHJvbGxlciB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgY29udGVudCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29udGVudENvbXBvbmVudFJlZj86Q29tcG9uZW50UmVmPFQ+O1xuXG4gICAgcHVibGljIGdldCBjb21wb25lbnRJbnN0YW5jZSgpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnQ6VHlwZTxUPixcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnQgYXMgVHlwZTxUPik7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLCB0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFudXAoKTp2b2lkIHtcbiAgICAgICAgc3VwZXIuY2xlYW51cCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciwgSVBvcHVwIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgSUltcGxpY2l0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4gZXh0ZW5kcyBJSW1wbGljaXRDb250ZXh0PElQb3B1cD4ge1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBJUG9wdXBDb25maWcge1xuICAgIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBwdWJsaWMgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVRlbXBsYXRlUG9wdXBDb25maWc8VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5jb25maWd1cmUoY29uZmlnKTtcblxuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRlbXBsYXRlLCBpbmplY3QgaXQgaW50byB0aGUgdmlldy5cbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5wb3B1cCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nUGxhY2VtZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcG9wdXAtYXJyb3dcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImR5bmFtaWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgKm5nSWY9XCJhbGlnbm1lbnQgPT0gJ2NlbnRlcidcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdGF0aWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgW2F0dHIuYWxpZ25tZW50XT1cImFsaWdubWVudFwiICpuZ0lmPVwiYWxpZ25tZW50ICE9ICdjZW50ZXInXCI+PC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwLjcxNDI4NTcxZW07XG4gICAgaGVpZ2h0OiAwLjcxNDI4NTcxZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG46aG9zdC5pbnZlcnRlZCAuYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICMxYjFjMWQ7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl0ge1xuICAgIGJvdHRvbTogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXSB7XG4gICAgcmlnaHQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cImxlZnRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdIHtcbiAgICBsZWZ0OiAxZW07XG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cInRvcFwiXSB7XG4gICAgdG9wOiAxZW07XG4gICAgYm90dG9tOiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxZW07XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBBcnJvdyB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaW52ZXJ0ZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbnZlcnRlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFsaWdubWVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29uZmlnIGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBXZSB1c2UgYW4gZW1wdHkgY29uc3RydWN0b3IgdG8gZW5zdXJlIEFuZ3VsYXIgREkgd29ya3MgY29ycmVjdGx5LlxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgVXRpbCwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBQb3B1cFNpemUsIFBvcHVwV2lkdGggfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW5saW5lKGlubGluZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGlubGluZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRmxvd2luZyhmbG93aW5nOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNGbG93aW5nID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZsb3dpbmcpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBQbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBXaWR0aCh3aWR0aDpQb3B1cFdpZHRoKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwU2l6ZShzaXplOlBvcHVwU2l6ZSkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcG9wdXBUcmlnZ2VyKCk6UG9wdXBUcmlnZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwb3B1cFRyaWdnZXIodHJpZ2dlcjpQb3B1cFRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGVDb250ZXh0KGNvbnRleHQ6VCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cENvbmZpZyhjb25maWc6SVRlbXBsYXRlUG9wdXBDb25maWc8VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwb3B1cERlZmF1bHRzOlN1aVBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIG5ldyBQb3B1cENvbmZpZyhwb3B1cERlZmF1bHRzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBBcnJvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXAtYXJyb3dcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlQb3B1cERpcmVjdGl2ZSxcbiAgICAgICAgU3VpUG9wdXBBcnJvdyxcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpUG9wdXBEaXJlY3RpdmUsXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpUG9wdXBDb25maWdcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlQb3B1cFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWlQb3B1cE1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LFxuICAgIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSwgQ3VzdG9tVmFsaWRhdG9yLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgS2V5Q29kZVxufSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXIsIFBvcHVwQWZ0ZXJPcGVuLCBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyLCBEYXRlcGlja2VyTW9kZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnLCBZZWFyQ29uZmlnLCBNb250aENvbmZpZywgRGF0ZXRpbWVDb25maWcsIFRpbWVDb25maWcsIERhdGVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVxuICAgICAgIGV4dGVuZHMgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFN1aURhdGVwaWNrZXI+XG4gICAgICAgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8RGF0ZT4sIElDdXN0b21WYWxpZGF0b3JIb3N0LCBPbkNoYW5nZXMsIFBvcHVwQWZ0ZXJPcGVuIHtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb2RlOkRhdGVwaWNrZXJNb2RlO1xuICAgIHB1YmxpYyBjb25maWc6Q2FsZW5kYXJDb25maWc7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNb2RlXCIpXG4gICAgcHVibGljIGdldCBtb2RlKCk6RGF0ZXBpY2tlck1vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1vZGUobW9kZTpEYXRlcGlja2VyTW9kZSkge1xuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZSB8fCBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlllYXI6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgWWVhckNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5Nb250aDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBNb250aENvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRlOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRlQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGV0aW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgVGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VySW5pdGlhbERhdGVcIilcbiAgICBwdWJsaWMgaW5pdGlhbERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNYXhEYXRlXCIpXG4gICAgcHVibGljIG1heERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNaW5EYXRlXCIpXG4gICAgcHVibGljIG1pbkRhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJGaXJzdERheU9mV2Vla1wiKVxuICAgIHB1YmxpYyBmaXJzdERheU9mV2Vlaz86bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzO1xuXG4gICAgQElucHV0KFwicGlja2VyTG9jYWxlT3ZlcnJpZGVzXCIpXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElEYXRlcGlja2VyTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwiZGF0ZXBpY2tlclwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJQbGFjZW1lbnRcIilcbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvbkR1cmF0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBPdXRwdXQoXCJwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25TZWxlY3RlZERhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPERhdGU+O1xuXG4gICAgQE91dHB1dChcInBpY2tlclZhbGlkYXRvckNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIFN1aURhdGVwaWNrZXIsIG5ldyBQb3B1cENvbmZpZyh7XG4gICAgICAgICAgICB0cmlnZ2VyOiBQb3B1cFRyaWdnZXIuRm9jdXMsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbUxlZnQsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDIwMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBwb3B1cCBpcyBkcmF3biBjb3JyZWN0bHkgKGkuZS4gbm8gYm9yZGVyKS5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwidWlcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImNhbGVuZGFyXCIpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLm1vZGUgPSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdXBPbk9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsZVZhbHVlcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jdXJyZW50RGF0ZSA9IHRoaXMuaW5pdGlhbERhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5maXJzdERheU9mV2VlayA9IHRoaXMuZmlyc3REYXlPZldlZWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uub25EYXRlQ2hhbmdlLnN1YnNjcmliZSgoZDpEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKHsgbWF4RGF0ZSwgbWluRGF0ZSwgbW9kZSB9OlNpbXBsZUNoYW5nZXMpOnZvaWQge1xuICAgICAgICBpZiAobWF4RGF0ZSB8fCBtaW5EYXRlIHx8IG1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIHBvc3QgcHJvY2VzcyB0aGUgbWluICYgbWF4IGRhdGUgYmVjYXVzZSBzb21ldGltZXMgdGhpcyBwdXRzIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGFsbG93ZWQgcmFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHZhbHVlIDwgdGhpcy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWluRGF0ZTogeyByZXF1aXJlZDogdGhpcy5taW5EYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4RGF0ZSAmJiB2YWx1ZSA+IHRoaXMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1heERhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWF4RGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmd1bGFyIGV4cGVjdHMgbnVsbFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbnVsbC1rZXl3b3JkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOkRhdGUgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxEYXRlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclZhbGlkYXRvckNoYW5nZSlcIjogXCJvblZhbGlkYXRvckNoYW5nZSgpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yIGV4dGVuZHMgQ3VzdG9tVmFsaWRhdG9yPFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2RhdGVwaWNrZXIuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBJbnRlcm5hbERhdGVQYXJzZXIsIERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuaW1wb3J0ICogYXMgYm93c2VyIGZyb20gXCJib3dzZXJcIjtcblxuaW1wb3J0IFwiLi4vaGVscGVycy9pcy13ZWJ2aWV3XCI7XG5pbXBvcnQgKiBhcyBpc1VBV2ViVmlldyBmcm9tIFwiaXMtdWEtd2Vidmlld1wiO1xuY29uc3QgaXNXZWJWaWV3ID0gaXNVQVdlYlZpZXdbXCJkZWZhdWx0XCJdIHx8IGlzVUFXZWJWaWV3O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlEYXRlcGlja2VyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfdXNlTmF0aXZlT25Nb2JpbGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInBpY2tlclVzZU5hdGl2ZU9uTW9iaWxlXCIpXG4gICAgcHVibGljIGdldCB1c2VOYXRpdmVPbk1vYmlsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB1c2VOYXRpdmVPbk1vYmlsZShmYWxsYmFjazpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlID0gZmFsbGJhY2s7XG4gICAgICAgIGNvbnN0IGlzT25Nb2JpbGUgPSBib3dzZXIubW9iaWxlIHx8IGJvd3Nlci50YWJsZXQgfHwgaXNXZWJWaWV3KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gdGhpcy51c2VOYXRpdmVPbk1vYmlsZSAmJiBpc09uTW9iaWxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGZhbGxiYWNrQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWxsYmFja0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZhbGxiYWNrQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBJZiB0aGUgZmFsbGJhY2sgaXMgYWN0aXZlLCB0aGVuIHRoZSB0cmlnZ2VyIG11c3QgYmUgbWFudWFsIHNvIHRoZSBkYXRlcGlja2VyIG5ldmVyIG9wZW5zLlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0aGlzLmZhbGxiYWNrQWN0aXZlID8gUG9wdXBUcmlnZ2VyLk1hbnVhbCA6IFBvcHVwVHJpZ2dlci5Gb2N1cztcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZSAodGhpcyB3aWxsIGluc2VydCB0aGUgYFRgIGFzIHJlcXVpcmVkKS5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXJzZXIoKTpEYXRlUGFyc2VyIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50ZXJuYWxEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5tb2RlLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcy5mb3JtYXRzW3RoaXMuZGF0ZXBpY2tlci5tb2RlXSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudElucHV0VmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUeXBlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGVTdHJpbmcoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdCh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudHlwZVwiKVxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLmNvbmZpZy5mYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5tYXhcIilcbiAgICBwdWJsaWMgZ2V0IG1heCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWF4IGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIE91ciBEYXRlcGlja2VyIHdpbGwgYWx3YXlzIGNob29zZSB0aGUgMXN0IGRhdGUgb24gdGhlIHByb3ZpZGVkIHByZWNpc2lvbixcbiAgICAgICAgICAgIC8vIG1lYW5pbmcgYW55dGhpbmcgYmVsb3cgdGhlIG1heERhdGUgd2lsbCB3b3JrLCBoZW5jZSBlbmRPZi5cbiAgICAgICAgICAgIGNvbnN0IG1heCA9IERhdGVVdGlsLmVuZE9mKHRoaXMuZGF0ZXBpY2tlci5jb25maWcucHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtYXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5taW5cIilcbiAgICBwdWJsaWMgZ2V0IG1pbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWluIGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIFdlIHVzZSAxIG1pbnV0ZSBiZWZvcmUgdGhlIG5leHQgZGF0ZSBhdCB0aGUgY29uZmlndXJlZCBwcmVjaXNpb24gc2luY2VcbiAgICAgICAgICAgIC8vIG91ciBEYXRlcGlja2VyIHBpY2tzIHRoZSBmaXJzdCBhdmFpbGFibGUgZGF0ZSBhdCB0aGF0IHByZWNpc2lvbi5cbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWluKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIGRhdGVwaWNrZXI6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgICBASG9zdCgpIHB1YmxpYyB2YWx1ZUFjY2Vzc29yOlN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy51c2VOYXRpdmVPbk1vYmlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVzLCB1cGRhdGUgdGhlIGlucHV0IHRleHQgYWxvbmdzaWRlIGl0LlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIub25TZWxlY3RlZERhdGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG5cbiAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgaWYgaXQgaXMgZGlmZmVyZW50IHRvIHdoYXQgaXQncyBiZWluZyB1cGRhdGVkIHRvLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgdGhlIGVkaXRpbmcgcG9zaXRpb24gaXNuJ3QgY2hhbmdlZCB3aGVuIG1hbnVhbGx5IHR5cGluZyB0aGUgZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLl9sYXN0VXBkYXRlVHlwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCB2YWx1ZSB8fCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB0eXBlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY3VycmVudElucHV0VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIHNlbGVjdGVkIGRhdGUgaWYgbm8gZGF0ZSB3YXMgZW50ZXJlZCBtYW51YWxseS5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZXIucGFyc2UodmFsdWUsIHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpICYmIHZhbHVlID09PSB0aGlzLnBhcnNlci5mb3JtYXQocGFyc2VkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLm9uVG91Y2hlZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlRGF0ZVNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNhbGNTdGFydChzdGFydDpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgbW9udGhTdGFydCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5Nb250aCwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpKTtcbiAgICAgICAgbW9udGhTdGFydC5zZXREYXRlKCgxIC0gbW9udGhTdGFydC5nZXREYXkoKSArIHRoaXMuc2VydmljZS5maXJzdERheU9mV2VlayAtIDcpICUgNyk7XG4gICAgICAgIHJldHVybiBtb250aFN0YXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gaXRlbS5kYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gaXRlbS5kYXRlLmdldE1vbnRoKCkgIT09IGJhc2VEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGl0ZW0uaXNTZWxlY3RhYmxlID0gaXRlbS5pc0Rpc2FibGVkO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWRhdGUtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgc2V2ZW4gY29sdW1uIGRheVwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI3XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzXCI+e3sgZGF5IH19PC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJEYXRlVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkYXlzKCk6c3RyaW5nW10ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy53ZWVrZGF5c05hcnJvdztcbiAgICAgICAgcmV0dXJuIGRheXMubWFwKChkLCBpKSA9PiBkYXlzWyhpICsgdGhpcy5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrKSAlIGRheXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5tb250aCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBuZXcgQ2FsZW5kYXJSYW5nZURhdGVTZXJ2aWNlKERhdGVQcmVjaXNpb24uTW9udGgsIDYsIDcpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgIGNvbnN0IGN1c3RvbUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIoY3VzdG9tRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWhvdXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgZm91ciBjb2x1bW4gaG91clwiPlxuPHRoZWFkICpuZ0lmPVwic2VydmljZS5jb25maWcubW9kZSAhPSAxXCI+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySG91clZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRlLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkhvdXIsIG5ldyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EYXRlLCA2LCA0KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1vZGUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkhvdXIsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGNEYXRlcyhzdGFydDpEYXRlKTpEYXRlW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5BcnJheVxuICAgICAgICAgICAgLnJhbmdlKHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcChpID0+IERhdGVVdGlsLmFkZChEYXRlUHJlY2lzaW9uLk1pbnV0ZSwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCBpICogNSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbWludXRlLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiBtaW51dGVcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmNvbmZpZy5tb2RlICE9PSBDYWxlbmRhck1vZGUuVGltZU9ubHkpIHtcbiAgICAgICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRldGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcihkYXRlVGltZUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgdGltZUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlLCBuZXcgQ2FsZW5kYXJSYW5nZU1pbnV0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Ib3VyLCA0LCAzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZU1vbnRoU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMubW9udGhzU2hvcnRbaXRlbS5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbW9udGgtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1vbnRoXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyTW9udGhWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IHllYXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnllYXIsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGgsIG5ldyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlKERhdGVQcmVjaXNpb24uWWVhciwgNCwgMykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gVXRpbC5TdHJpbmcucGFkTGVmdChpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKSA+PSB0aGlzLmNhbGNTdGFydChiYXNlRGF0ZSkuZ2V0RnVsbFllYXIoKSArIDEwO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLXllYXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIHllYXJcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgcGFkKGRlY2FkZVN0YXJ0KSB9fSAtIHt7IHBhZChkZWNhZGVTdGFydCArIDEwKSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJZZWFyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkZWNhZGVTdGFydCgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbFxuICAgICAgICAgICAgLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5EZWNhZGUsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpXG4gICAgICAgICAgICAuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuWWVhciwgbmV3IENhbGVuZGFyUmFuZ2VZZWFyU2VydmljZShEYXRlUHJlY2lzaW9uLkRlY2FkZSwgNCwgMykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWQoeWVhcjpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLlN0cmluZy5wYWRMZWZ0KHllYXIudG9TdHJpbmcoKSwgNCwgXCIwXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlQb3B1cE1vZHVsZSB9IGZyb20gXCIuLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclZpZXdUaXRsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FsZW5kYXItdmlldy10aXRsZVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJZZWFyVmlldyB9IGZyb20gXCIuL3ZpZXdzL3llYXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNb250aFZpZXcgfSBmcm9tIFwiLi92aWV3cy9tb250aC12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyRGF0ZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9kYXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySG91clZpZXcgfSBmcm9tIFwiLi92aWV3cy9ob3VyLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyTWludXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL21pbnV0ZS12aWV3XCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtcbiAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yXG59IGZyb20gXCIuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlci5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDYWxlbmRhckl0ZW0sXG5cbiAgICAgICAgU3VpQ2FsZW5kYXJWaWV3VGl0bGUsXG4gICAgICAgIFN1aUNhbGVuZGFyWWVhclZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTW9udGhWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhckRhdGVWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhckhvdXJWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhck1pbnV0ZVZpZXcsXG5cbiAgICAgICAgU3VpRGF0ZXBpY2tlcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU3VpRGF0ZXBpY2tlclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbY2xhc3MuY29udGVudF09XCJ3cmFwQ29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lciBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHJpdmF0ZSBfaXNEaW1tZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaW1tZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0RpbW1lZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGlzRGltbWVkID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eSB3aGVuIGZpcnN0IHNldHRpbmcgZGltbWVkLCB0byBlbnN1cmUgaW5pdGlhbCBzdGF0ZSBkb2Vzbid0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihpc0RpbW1lZCwgXCJibG9ja1wiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNEaW1tZWQgIT09IGlzRGltbWVkKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJmYWRlXCIsIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBpc0RpbW1lZCA/IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4gOiBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQ2xpY2thYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvKiBJbnRlcm5hbCBmb3Igbm93ICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd3JhcENvbnRlbnQ6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lzRGltbWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMud3JhcENvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UuZW1pdCh0aGlzLmlzRGltbWVkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGltbWVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaW1tZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURpbW1lclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlEaW1tZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gXCJpdGVtQ2xpY2tcIiB8IFwib3V0c2lkZUNsaWNrXCIgfCBcImRpc2FibGVkXCI7XG5cbi8vIENyZWF0ZXMgZXNzZW50aWFsbHkgYSAnc3RyaW5nJyBlbnVtLlxuZXhwb3J0IGNvbnN0IERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IHtcbiAgICBJdGVtQ2xpY2s6IFwiaXRlbUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGUsXG4gICAgRGlzYWJsZWQ6IFwiZGlzYWJsZWRcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGVcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuICAgIC8vIE9wZW4gc3RhdGUgb2YgdGhlIGRyb3Bkb3duXG4gICAgcHVibGljIGlzT3Blbjpib29sZWFuO1xuICAgIC8vIEFuaW1hdGluZyBzdGF0ZSBvZiB0aGUgZHJvcGRvd24uXG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgLy8gRW1pdHRlciBmb3Igd2hlbiBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0cyB0aGUgXCJhdXRvY2xvc2VcIiBtb2RlIG9mIHRoZSBkcm9wZG93biAtIGkuZS4gd2hhdCB1c2VyIGFjdGlvbiBjYXVzZXMgaXQgdG8gYXV0b2Nsb3NlLlxuICAgIHB1YmxpYyBhdXRvQ2xvc2VNb2RlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGNvbnRhaW5pbmcgZHJvcGRvd24gc28gd2UgY2FuIG9wZW4gaXQgYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBwYXJlbnQ/OkRyb3Bkb3duU2VydmljZTtcbiAgICAvLyBBbHNvIGtlZXAgdHJhY2sgb2YgZHJvcGRvd25zIG5lc3RlZCBpbiB0aGlzIG9uZSBzbyB3ZSBjYW4gY2xvc2UgdGhlbSBhcyBuZWNlc3NhcnkuXG4gICAgcHVibGljIGNoaWxkcmVuOkRyb3Bkb3duU2VydmljZVtdO1xuICAgIHB1YmxpYyBnZXQgaXNOZXN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXV0b0Nsb3NlTW9kZSA9IGF1dG9DbG9zZU1vZGU7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcGVuU3RhdGUoaXNPcGVuOmJvb2xlYW4sIHJlZmxlY3RJblBhcmVudDpib29sZWFuID0gZmFsc2UpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gIT09IGlzT3BlbiAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCB0aGUgZHJvcGRvd24gaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICEhaXNPcGVuO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBXZSBtdXN0IGRlbGF5IHRoZSBlbWl0dGluZyB0byBhdm9pZCB0aGUgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgQW5ndWxhciBlcnJvcnMuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjaGlsZCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBjbG9zZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHJlZmxlY3RJblBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIHBhcmVudCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBvcGVucy5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgZHJvcGRvd24gaXMgZGlzYWJsZWQsIHJlLWVtaXQgdGhlIG9yaWdpbmFsIGlzT3BlbiB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVsYXkoKCkgPT4gdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAhPT0gaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKCEhaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBkcm9wZG93biBhcyBpdCBpcyBub3cgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9ICEhaXNEaXNhYmxlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVPcGVuU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMuaXNPcGVuKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBkcm9wZG93biBzZXJ2aWNlIGFzIGEgY2hpbGQgb2YgdGhpcyBzZXJ2aWNlLlxuICAgIHB1YmxpYyByZWdpc3RlckNoaWxkKGNoaWxkOkRyb3Bkb3duU2VydmljZSk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0NoaWxkUmVnaXN0ZXJlZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlIG1ldGhvZCB0byBjaGVjayBpZiB0aGUgcHJvdmlkZWQgZHJvcGRvd24gaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFzIGEgY2hpbGQsIG9yIGlzIGEgZGVzY2VuZGFudCBvZiBhIGNoaWxkLlxuICAgIHB1YmxpYyBpc0NoaWxkUmVnaXN0ZXJlZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gY2hpbGQgfHwgISF0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAuZmluZChjID0+ICEhYy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maW5kKGNDaGlsZCA9PiBjQ2hpbGQuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSk7XG4gICAgfVxuXG4gICAgLy8gV2lwZXMgYW55IG5lc3RlZCBkYXRhLCBzbyBhbGwgc2VydmljZXMgY2FuIGJlIGNsZWFubHkgcmVhdHRhY2hlZC5cbiAgICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgZm9yIGRlbGF5aW5nIGFuIGV2ZW50IGludG8gdGhlIG5leHQgdGljaywgdG8gYXZvaWQgQW5ndWxhciBcImNoYW5nZWQgYWZ0ZXIgY2hlY2tlZFwiIGVycm9yLlxuICAgIHByaXZhdGUgZGVsYXkoY2FsbGJhY2s6KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIElBdWdtZW50ZWRFbGVtZW50LCBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuLy8gUG9seWZpbGwgZm9yIElFXG5pbXBvcnQgXCJlbGVtZW50LWNsb3Nlc3RcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gV2UgbXVzdCBhdHRhY2ggdG8gZXZlcnkgJy5pdGVtJyBhcyBBbmd1bGFyIGRvZXNuJ3Qgc3VwcG9ydCA+IHNlbGVjdG9ycy5cbiAgICBzZWxlY3RvcjogXCIuaXRlbVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBXZSBtdXN0IHVzZSBuYXRpdmVFbGVtZW50IGFzIEFuZ3VsYXIgZG9lc24ndCBoYXZlIGEgd2F5IG9mIHJlYWRpbmcgY2xhc3MgaW5mb3JtYXRpb24uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gUmVuZGVyZXIgaXMgdXNlZCB0byBlbmFibGUgYSBkeW5hbWljIGNsYXNzIG5hbWUuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY2xhc3MgbmFtZSB1c2VkIGZvciBhICdzZWxlY3RlZCcgaXRlbS5cbiAgICBwdWJsaWMgc2VsZWN0ZWRDbGFzczpzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gU3VpRHJvcGRvd25NZW51KSlcbiAgICBwdWJsaWMgY2hpbGREcm9wZG93bk1lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgcHVibGljIGdldCBoYXNDaGlsZERyb3Bkb3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybUNsaWNrKCk6dm9pZCB7XG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duTWVudV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnUgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6RHJvcGRvd25TZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHZhbHVlOkRyb3Bkb3duU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gdmFsdWU7XG5cbiAgICAgICAgbGV0IHByZXZpb3VzSXNPcGVuID0gdGhpcy5fc2VydmljZS5pc09wZW47XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoaXNPcGVuOmJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpc09wZW4gIT09IHByZXZpb3VzSXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBydW4gdHJhbnNpdGlvbnMgaWYgdGhlIG9wZW4gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25EaXJlY3Rpb24uRWl0aGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5fc2VydmljZS5pc0FuaW1hdGluZyA9IGZhbHNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGl0ZW0gc2VsZWN0aW9ucyB3aGVuIGEgbmVzdGVkIGl0ZW0gaXMgc2VsZWN0ZWQgdG8gYXZvaWQgaW5jb3Npc3RlbnQgb3BlbiBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZpb3VzSXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhcmVudEVsZW1lbnQodmFsdWU6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlclxuICAgICAgICAgICAgLmxpc3Rlbih2YWx1ZS5uYXRpdmVFbGVtZW50LCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFyZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93bk1lbnVJdGVtKVxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlJbnRlcm5hbDpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5T3ZlcnJpZGU6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHVibGljIHNldCBpdGVtcyhpdGVtczpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4pIHtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlID0gaXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zUXVlcnkoKTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlIHx8IHRoaXMuX2l0ZW1zUXVlcnlJbnRlcm5hbDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgaXRlbXMsIGlnbm9yaW5nIHRob3NlIHRoYXQgYXJlIGRpc2FibGVkLlxuICAgIHByaXZhdGUgZ2V0IF9pdGVtcygpOlN1aURyb3Bkb3duTWVudUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5LmZpbHRlcihpID0+ICFpLmlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIC8vIFN0YWNrIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIC8vIFNlbGVjdGVkIGl0ZW1zIGxvd2VyIGluIHRoZSBzdGFjayBhcmUgbmVjZXNzYXJpbHkgdGhlIHBhcmVudCBvZiB0aGUgaXRlbSBvbmUgaGlnaGVyLlxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zOlN1aURyb3Bkb3duTWVudUl0ZW1bXTtcblxuICAgIC8vIFNldHMgd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSBzZWxlY3QgdGhlIDFzdCBpdGVtIHdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW5lZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51QXV0b1NlbGVjdEZpcnN0OmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfcGFyZW50S2V5RG93bkxpc3RlbmVyOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uID0gXCJzbGlkZSBkb3duXCI7XG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgZHJvcGRvd24gbWVudSBpcyBkZXN0cm95ZWQgYmVmb3JlIGl0IGhhcyBhIGNoYW5jZSB0byBiZSBmdWxseSBpbml0aWFsaXNlZC5cbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gKCkgPT4ge307XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCAmIE1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBJQXVnbWVudGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldC5jbG9zZXN0KFwiLml0ZW1cIikpICYmICEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmNlIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIHdlIGNhbiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFyZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHRoZSByb290IGRyb3Bkb3duIChpLmUuIG5vdCBuZXN0ZWQgZHJvcGRvd25zKSBpcyByZXNwb25zaWJsZSBmb3Iga2VlcGluZyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlICYmIHRoaXMuX3NlcnZpY2UuaXNPcGVuICYmICF0aGlzLl9zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGRvY3VtZW50IGV2ZW50cyBsaWtlIHNjcm9sbGluZyB3aGlsZSBvcGVuLlxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghL2lucHV0L2kudGVzdCh0YXJnZXQudGFnTmFtZSkgJiZcbiAgICAgICAgICAgICAgICBbS2V5Q29kZS5Fc2NhcGUsIEtleUNvZGUuRW50ZXIsIEtleUNvZGUuVXAsIEtleUNvZGUuRG93biwgS2V5Q29kZS5MZWZ0LCBLZXlDb2RlLlJpZ2h0XS5maW5kKGtDID0+IGtDID09PSBlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXRzIHRoZSB0b3Agc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSBzdGFjay5cbiAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuICAgICAgICAgICAgLy8gS2VlcGluZyB0cmFjayBvZiB0aGUgbWVudSBjb250YWluaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudCBhbGxvd3MgdXMgdG8gZWFzaWx5IGRldGVybWluZSBpdHMgc2libGluZ3MuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRDb250YWluZXI6U3VpRHJvcGRvd25NZW51ID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIEVzY2FwZSA6IGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVzY2FwZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3duIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYmVsb3cgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgLy8gVXAgOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBhYm92ZSB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZENvbnRhaW5lci51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHdlIGFyZSBpbiBhbiBpbnB1dCwgdG8gc3RvcCBqdW1waW5nIHRvIHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRW50ZXIgOiBpZiB0aGUgaXRlbSBkb2Vzbid0IGNvbnRhaW4gYSBuZXN0ZWQgZHJvcGRvd24sICdjbGljaycgaXQuIE90aGVyd2lzZSwgZmFsbCB0aHJvdWdoIHRvICdSaWdodCcgYWN0aW9uLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIXNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnBlcmZvcm1DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyBSaWdodCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGNvbnRhaW5zIGEgbmVzdGVkIGRyb3Bkb3duLCBvcGVuIHRoZSBkcm9wZG93biAmIHNlbGVjdCB0aGUgMXN0IGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTGVmdCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGluIGEgbmVzdGVkIGRyb3Bkb3duLCBjbG9zZSBpdCBhbmQgc2VsZWN0IHRoZSBjb250YWluaW5nIGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFNlbGVjdGlvbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGkuc2VsZWN0ZWRDbGFzcyA9IHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzO1xuICAgICAgICAgICAgaS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgJiYgdGhpcy5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQXV0b3NlbGVjdCAxc3QgaXRlbSBpZiByZXF1aXJlZCAmIHBvc3NpYmxlLlxuICAgICAgICAgICAgdGhpcy5faXRlbXNbMF0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbSh0aGlzLl9pdGVtc1swXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9pdGVtc1F1ZXJ5LmZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgdGhlIGl0ZW0gdG8gbmV4dCBiZSBzZWxlY3RlZCwgYmFzZWQgb24gdGhlIGtleWJvYXJkIGlucHV0ICYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIHB1YmxpYyB1cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWRJdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0sIGtleUNvZGU6S2V5Q29kZSk6U3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9pdGVtc1xuICAgICAgICAgICAgLmZpbmRJbmRleChpID0+IGkgPT09IHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbjpTdWlEcm9wZG93bk1lbnVJdGVtO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGFyZSBzZWxlY3RlZCwgc2VsZWN0IHRoZSAxc3QgaXRlbS4gU2hvdWxkIHRoaXMgYmUgYHRoaXMuaXRlbXMubGFzdCAtIDFgP1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBpdGVtIGF0IHRoZSB1cGRhdGVkIGluZGV4LiBUaGUgfHwgaXMgdG8gc3RvcCB1cyBzZWxlY3RpbmcgcGFzdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBpdGVtIGxpc3QuXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuX2l0ZW1zW3NlbGVjdGVkSW5kZXhdIHx8IHNlbGVjdGVkSXRlbTtcblxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5pc1NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShuZXdTZWxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nyb2xsVG9JdGVtKGl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1lbnU6RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSZWN0OkNsaWVudFJlY3QgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBtZW51UmVjdCA9IG1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgbGV0IHNjcm9sbEFtb3VudCA9IDA7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC5ib3R0b20gLSBtZW51UmVjdC5ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LnRvcCAtIG1lbnVSZWN0LnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wICs9IE1hdGgucm91bmQoc2Nyb2xsQW1vdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeS5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSXRlbXNDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25JdGVtc0NoYW5nZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgdXNlIGBfaXRlbXNgIHJhdGhlciB0aGFuIGBpdGVtc2AgaW4gY2FzZSBvbmUgb3IgbW9yZSBoYXZlIGJlY29tZSBkaXNhYmxlZC5cbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW5cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9kcm9wZG93bi1tZW51XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93biBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93biwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX2NoaWxkcmVuOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bj47XG5cbiAgICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCk6U3VpRHJvcGRvd25bXSB7XG4gICAgICAgIC8vIEBDb250ZW50Q2hpbGRyZW4gaW5jbHVkZXMgdGhlIGN1cnJlbnQgZWxlbWVudCBieSBkZWZhdWx0LlxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKGMgPT4gYyAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW5DaGFuZ2UoKTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFRoaXMgaXMgdG8gZW5zdXJlIG5lc3RlZCBkcm9wZG93bnMgZG9uJ3QgZ2V0IG1hZGUgYm9sZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW4gJiYgIXRoaXMuc2VydmljZS5pc05lc3RlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhlIGRyb3Bkb3duLCB3ZSB3YW50IHRvIGFsd2F5cyBvcGVuIGl0cyBwYXJlbnRzLlxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlLCAhIXZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiSW5kZXgoKTpudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gSWYgZGlzYWJsZWQsIHJlbW92ZSBmcm9tIHRhYmluZGV4LlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBjdXN0b20gdGFiaW5kZXgsIGRlZmF1bHQgdG8gdGhhdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBhdXRvQ2xvc2UoKTpEcm9wZG93bkF1dG9DbG9zZVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhdXRvQ2xvc2UodmFsdWU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHNldCBbc3VpRHJvcGRvd25NZW51XSBvbiB0aGUgbWVudSBlbGVtZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLnNlcnZpY2U7XG4gICAgICAgIHRoaXMuX21lbnUucGFyZW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlblVwZGF0ZWQoKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoaWxkcmVuVXBkYXRlZCgpOnZvaWQge1xuICAgICAgICAvLyBSZXJlZ2lzdGVyIGNoaWxkIGRyb3Bkb3ducyBlYWNoIHRpbWUgdGhlIG1lbnUgY29udGVudCBjaGFuZ2VzLlxuICAgICAgICB0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAubWFwKGMgPT4gYy5zZXJ2aWNlKVxuICAgICAgICAgICAgLmZvckVhY2gocyA9PiB0aGlzLnNlcnZpY2UucmVnaXN0ZXJDaGlsZChzKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZU9wZW5TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbGx5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5cHJlc3MoZTpIYW5kbGVkRXZlbnQgJiBLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gQmxvY2sgdGhlIGtleWJvYXJkIGV2ZW50IGZyb20gYmVpbmcgZmlyZWQgb24gcGFyZW50IGRyb3Bkb3ducy5cbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXh0ZXJuYWxseUNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljayB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byByZWZsZWN0IGluIHBhcmVudCBzaW5jZSB0aGV5IGFyZSBhbHNvIGJvdW5kIHRvIGRvY3VtZW50LlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kcm9wZG93blwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51LCBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlEcm9wZG93bixcbiAgICAgICAgU3VpRHJvcGRvd25NZW51LFxuICAgICAgICBTdWlEcm9wZG93bk1lbnVJdGVtXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcgfSBmcm9tIFwiLi9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcblxuLy8gSGVscGVyIGNsYXNzIHRvIHN1cHBvcnQgbWV0aG9kIGNoYWluaW5nIHdoZW4gY2FsbGluZyBgU3VpTW9kYWxTZXJ2aWNlLm9wZW4oLi4uKWAuXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgIHByaXZhdGUgX2NvbmZpZzpNb2RhbENvbmZpZzxULCBVLCBWPjtcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+PjtcblxuICAgIC8vIFNob3J0aGFuZCBmb3IgZGlyZWN0IGFjY2VzcyB0byB0aGUgYFN1aU1vZGFsYCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpOlN1aU1vZGFsPFUsIFY+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZTpNb2RhbENvbmZpZzxULCBVLCBWPiwgY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlNb2RhbDxVLCBWPj4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IGRlc3Ryb3kgdGhlIG1vZGFsIGNvbXBvbmVudCB3aGVuIGl0IGhhcyBiZWVuIGRpc21pc3NlZC5cbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EaXNtaXNzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmb3Igd2hlbiBgb25BcHByb3ZlYCBpcyBmaXJlZC5cbiAgICBwdWJsaWMgb25BcHByb3ZlKGNhbGxiYWNrOihyZXN1bHQ6VSkgPT4gdm9pZCk6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkFwcHJvdmUuc3Vic2NyaWJlKChyZXM6VSkgPT4gY2FsbGJhY2socmVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkRlbnlgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkRlbnkoY2FsbGJhY2s6KHJlc3VsdDpWKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uRGVueS5zdWJzY3JpYmUoKHJlczpWKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGFwcHJvdmUgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpVKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwcm92ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHRoZSBkZW55IGV2ZW50IG9mIHRoZSBtb2RhbCBtYW51YWxseS5cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6Vik6dm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRlbnkocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoZSBtb2RhbCBjb21wb25lbnQgaW5zdGFudGx5LCB3aXRob3V0IHRyYW5zaXRpb25zIG9yIGZpcmluZyBhbnkgZXZlbnRzLlxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbFRlbXBsYXRlIH0gZnJvbSBcIi4vbW9kYWwtdGVtcGxhdGVcIjtcblxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibm9ybWFsXCIgfCBcImxhcmdlXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFNpemUgPSB7XG4gICAgTWluaTogXCJtaW5pXCIgYXMgTW9kYWxTaXplLFxuICAgIFRpbnk6IFwidGlueVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBTbWFsbDogXCJzbWFsbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBOb3JtYWw6IFwibm9ybWFsXCIgYXMgTW9kYWxTaXplLFxuICAgIExhcmdlOiBcImxhcmdlXCIgYXMgTW9kYWxTaXplXG59O1xuXG4vLyBTdG9yZXMgYSBiYXNpYyBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIG1vZGFsLlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IHtcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlY7XG5cbiAgICAvLyBEYXRhIHRvIHBhc3MgdG8gdGhlIG1vZGFsIGluc3RhbmNlIHdoZW4gb3BlbmVkLlxuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHB1YmxpYyBpc0Z1bGxTY3JlZW46Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwYWdlLlxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHB1YmxpYyBtdXN0U2Nyb2xsOmJvb2xlYW47XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICB0aGlzLnNpemUgPSBNb2RhbFNpemUuTm9ybWFsO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYSBgVGVtcGxhdGVSZWZgLlxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIHRlbXBsYXRlOk1vZGFsVGVtcGxhdGU8VCwgVSwgVj47XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cbn1cblxuLy8gVXNlZCB3aGVuIGNyZWF0aW5nIGEgbW9kYWwgZnJvbSBhbiBleGlzdGluZyBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIGNvbXBvbmVudDpUeXBlPGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6VHlwZTxhbnk+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwiLy8gU2hvcnRoYW5kIHRvIGF2b2lkIHdyaXRpbmcgYXJyb3cgdHlwZXMgZXZlcnl3aGVyZS5cbmV4cG9ydCB0eXBlIE1vZGFsUmVzdWx0PFQ+ID0gKHJlc3VsdDpUKSA9PiB2b2lkO1xuXG4vLyBVc2VkIHRvIHBhc3MgYWJpbGl0eSB0byBjb250cm9sIGEgbW9kYWwgdG8gYSBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250cm9sczxULCBVPiB7XG4gICAgY29uc3RydWN0b3IoYXBwcm92ZTpNb2RhbFJlc3VsdDxUPiwgZGVueTpNb2RhbFJlc3VsdDxVPikge1xuICAgICAgICB0aGlzLmFwcHJvdmUgPSBhcHByb3ZlO1xuICAgICAgICB0aGlzLmRlbnkgPSBkZW55O1xuICAgIH1cblxuICAgIC8vIFVzZSBtZXRob2QgaGVyZSByYXRoZXIgdGhhbiBhcnJvdyB2YXJpYWJsZXMgdG8gbWFrZSBpbnRlbGxpc2Vuc2Ugc2hvdyB0aGV5J3JlIG1ldGhvZHMuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlQpOnZvaWQge31cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6VSk6dm9pZCB7fVxufVxuXG4vLyBJbmplY3RlZCBpbnRvIGN1c3RvbSBtb2RhbCBjb21wb25lbnRzLCB0byBhbGxvdyBjb250cm9sIG9mIHRoZSBtb2RhbCwgYW5kIGFjY2VzcyB0byBhIGNvbnRleHQgb2JqZWN0LlxuZXhwb3J0IGNsYXNzIE1vZGFsPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb250cm9sczxVLCBWPiB7XG4gICAgcHVibGljIGNvbnRleHQ6VDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VSwgVj4sIGNvbnRleHQ6VCkge1xuICAgICAgICAvLyBJbnN0YW5jZXMgb2YgYE1vZGFsQ29udHJvbHNgIGFyZSBvbmx5IGNyZWF0ZWQgaW4gdGhlIGBTdWlNb2RhbGAgY29uc3RydWN0b3IsXG4gICAgICAgIC8vIHNvIHdlIHRha2UgYW4gaW5pdGlhbGlzZWQgaW5zdGFuY2UgcmF0aGVyIHRoYW4gcmVtYWtpbmcgb25lIGVhY2ggdGltZS5cbiAgICAgICAgc3VwZXIoY29udHJvbHMuYXBwcm92ZSwgY29udHJvbHMuZGVueSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzIH0gZnJvbSBcIi4vbW9kYWwtY29udHJvbHNcIjtcblxuLy8gU2hvcnRoYW5kIGZvciBhIG1vZGFsIHRlbXBsYXRlLiBTZXRzIHVwIGFiaWxpdHkgdG8gd3JpdGU6IGA8bmctdGVtcGxhdGUgbGV0LWNvbnRleHQgbGV0LW1vZGFsPVwibW9kYWxcIj4uLi48L25nLXRlbXBsYXRlPmBcbi8vIFdlIHVzZSBhbiBhYnN0cmFjdCBjbGFzcyBhcyBNb2RhbFRlbXBsYXRlIHRlbmRzIHRvIGJlIHVzZWQgd2l0aGluIGRlY29yYXRlZCBwcm9wZXJ0aWVzLCB3aGljaCBtZWFucyBpdCBuZWVkcyB0byBleGlzdCFcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNb2RhbFRlbXBsYXRlPFQsIFUsIFY+IGV4dGVuZHMgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6VDsgbW9kYWw6TW9kYWxDb250cm9sczxVLCBWPiB9PiB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElEeW5hbWljQ2xhc3NlcywgS2V5Q29kZSwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbHMsIE1vZGFsUmVzdWx0IH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBNb2RhbFNpemUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUGFnZSBkaW1tZXIgZm9yIG1vZGFsIGJhY2tncm91bmQuIC0tPlxuPHN1aS1tb2RhbC1kaW1tZXIgW25nQ2xhc3NdPVwieyd0b3AgYWxpZ25lZCc6ICFpc0NlbnRlcmVkfVwiIFxuICAgICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImlzSW52ZXJ0ZWRcIlxuICAgICAgICAgICAgWyhpc0RpbW1lZCldPVwiZGltQmFja2dyb3VuZFwiXG4gICAgICAgICAgICBbdHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiPlxuXG4gICAgPCEtLSBNb2RhbCBjb21wb25lbnQsIHdpdGggdHJhbnNpdGlvbiBjb21wb25lbnQgYXR0YWNoZWQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInVpIG1vZGFsXCJcbiAgICAgICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidHJhbnNpdGlvbkNvbnRyb2xsZXI/LmlzVmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuZnVsbHNjcmVlbl09XCJpc0Z1bGxTY3JlZW5cIlxuICAgICAgICAgW2NsYXNzLmJhc2ljXT1cImlzQmFzaWNcIlxuICAgICAgICAgW2NsYXNzLnNjcm9sbGluZ109XCJtdXN0U2Nyb2xsXCJcbiAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgI21vZGFsPlxuXG4gICAgICAgIDwhLS0gQ29uZmlndXJhYmxlIGNsb3NlIGljb24gLS0+XG4gICAgICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNDbG9zYWJsZSAmJiBpc0Z1bGxTY3JlZW5cIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvaT5cbiAgICAgICAgPCEtLSA8bmctY29udGVudD4gc28gdGhhdCA8c3VpLW1vZGFsPiBjYW4gYmUgdXNlZCBhcyBhIG5vcm1hbCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS0gQFZpZXdDaGlsZCByZWZlcmVuY2Ugc28gd2UgY2FuIGluc2VydCBlbGVtZW50cyBiZXNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG4gICAgPC9kaXY+XG48L3N1aS1tb2RhbC1kaW1tZXI+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbDxULCBVPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KClcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpVO1xuXG4gICAgLy8gU2VwYXJhdGUgY2xhc3MgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBtZXRob2RzIHRvIHN1cHBvcnQgcGFzc2luZyBpbnRvIGNvbXBvbmVudHMuXG4gICAgcHVibGljIGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VCwgVT47XG5cbiAgICBwdWJsaWMgZ2V0IGFwcHJvdmUoKTpNb2RhbFJlc3VsdDxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmFwcHJvdmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZW55KCk6TW9kYWxSZXN1bHQ8VT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5kZW55O1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGFwcHJvdmVgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiYXBwcm92ZWRcIilcbiAgICBwdWJsaWMgb25BcHByb3ZlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiZGVuaWVkXCIpXG4gICAgcHVibGljIG9uRGVueTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMuXG4gICAgQE91dHB1dChcImRpc21pc3NlZFwiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQFZpZXdDaGlsZChcIm1vZGFsXCIpXG4gICAgcHJpdmF0ZSBfbW9kYWxFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHByaXZhdGUgX2lzRnVsbFNjcmVlbjpib29sZWFuO1xuXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Z1bGxTY3JlZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnVsbFNjcmVlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRnVsbFNjcmVlbihmdWxsU2NyZWVuOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGdWxsU2NyZWVuID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZ1bGxTY3JlZW4pO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgY3VycmVudGx5IGlzIGRpc3BsYXlpbmcgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdFNjcm9sbDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdEFsd2F5c1Njcm9sbDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG11c3RTY3JvbGwoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c3RTY3JvbGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtdXN0U2Nyb2xsKG11c3RTY3JvbGw6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgLy8gJ0NhY2hlJyB2YWx1ZSBpbiBfbXVzdEFsd2F5c1Njcm9sbCBzbyB0aGF0IGlmIGB0cnVlYCwgX211c3RTY3JvbGwgaXNuJ3QgZXZlciBhdXRvLXVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX211c3RBbHdheXNTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHByaXZhdGUgX2lzSW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0ludmVydGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludmVydGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgYmFja3JvdW5kIGRpbW1lciBpcyBhY3RpdmUuXG4gICAgcHVibGljIGRpbUJhY2tncm91bmQ6Ym9vbGVhbjtcbiAgICAvLyBUcnVlIGFmdGVyIGBhcHByb3ZlYCBvciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIHByaXZhdGUgX2lzQ2xvc2luZzpib29sZWFuO1xuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICAvLyBQYXJlbnQgZWxlbWVudCBvZiBtb2RhbCBiZWZvcmUgcmVsb2NhdGlvbiB0byBkb2N1bWVudCBib2R5LlxuICAgIHByaXZhdGUgX29yaWdpbmFsQ29udGFpbmVyPzpFbGVtZW50O1xuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCBjb25maWd1cmF0aW9uIGZyb20gYE1vZGFsQ29uZmlnYCAodG8gYXZvaWQgd3JpdGluZyBkZWZhdWx0cyB0d2ljZSkuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBNb2RhbENvbmZpZzx1bmRlZmluZWQsIFQsIFU+KCk7XG4gICAgICAgIHRoaXMubG9hZENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIC8vIEV2ZW50IGVtaXR0ZXJzIGZvciBlYWNoIG9mIHRoZSBwb3NzaWJsZSBtb2RhbCBvdXRjb21lcy5cbiAgICAgICAgdGhpcy5vbkFwcHJvdmUgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gICAgICAgIHRoaXMub25EZW55ID0gbmV3IEV2ZW50RW1pdHRlcjxVPigpO1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIGNvbnRyb2xzIHdpdGggYWN0aW9ucyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIGNhc2VzLlxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE1vZGFsQ29udHJvbHM8VCwgVT4oXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25BcHByb3ZlLmVtaXQocmVzKSksXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25EZW55LmVtaXQocmVzKSkpO1xuXG4gICAgICAgIC8vIEludGVybmFsIHZhcmlhYmxlIGluaXRpYWxpc2F0aW9uLlxuICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSB2aXNpYmxlLlxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGltQmFja2dyb3VuZCA9IHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gTW92ZSB0aGUgbW9kYWwgdG8gdGhlIGRvY3VtZW50IGJvZHkgdG8gZW5zdXJlIGNvcnJlY3Qgc2Nyb2xsaW5nLlxuICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSAjdGVtcGxhdGVTaWJsaW5nIGVsZW1lbnQgZnJvbSB0aGUgRE9NIHRvIGZpeCBib3R0b20gYm9yZGVyIHN0eWxlcy5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gdGhpcy50ZW1wbGF0ZVNpYmxpbmcuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIGlmICh0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsKCkpO1xuXG4gICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBtb2RhbCB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICBwdWJsaWMgbG9hZENvbmZpZzxWPihjb25maWc6TW9kYWxDb25maWc8ViwgVCwgVT4pOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBjb25maWcuaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGNvbmZpZy5jbG9zZVJlc3VsdDtcblxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBjb25maWcuaXNGdWxsU2NyZWVuO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBjb25maWcuaXNCYXNpYztcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gY29uZmlnLmlzSW52ZXJ0ZWQ7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IGNvbmZpZy5pc0NlbnRlcmVkO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGNvbmZpZy5tdXN0U2Nyb2xsO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGEgdHJhbnNpdGlvbiwgZmlyaW5nIHRoZSBjYWxsYmFjayBhZnRlciB0aGUgbW9kYWwgaGFzIGZpbmlzaGVkIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBkaXNtaXNzKGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCBjdXJyZW50bHkgY2xvc2luZyxcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIGludmlzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkb25lLCBtb3ZlIHRoZSBtb2RhbCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiwgZW1pdCBhIGRpc21pc3MgZXZlbnQsIGFuZCBmaXJlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29yaWdpbmFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbG9zZXMgdGhlIG1vZGFsIHdpdGggYSAnZGVueScgb3V0Y29tZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBkZWZhdWx0IHJlYXNvbi5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zYWJsZSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFsbG93ZWQgdG8gY2xvc2UsIGZpcmUgdGhlIGRlbnkgcmVzdWx0IHdpdGggdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbnkodGhpcy5jbG9zZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNpZGVzIHdoZXRoZXIgdGhlIG1vZGFsIG5lZWRzIHRvIHJlcG9zaXRpb24gdG8gYWxsb3cgc2Nyb2xsaW5nLlxuICAgIHByaXZhdGUgdXBkYXRlU2Nyb2xsKCk6dm9pZCB7XG5cbiAgICAgICAgLy8gX211c3RBbHdheXNTY3JvbGwgd29ya3MgYnkgc3RvcHBpbmcgX211c3RTY3JvbGwgZnJvbSBiZWluZyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQsIHNvIGl0IHN0YXlzIGB0cnVlYC5cbiAgICAgICAgaWYgKCF0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsICYmIHRoaXMuX21vZGFsRWxlbWVudCkge1xuXG4gICAgICAgICAgICAvLyBTZW1hbnRpYyBVSSBtb2RhbCBtYXJnaW4gYW5kIGRpbW1lciBwYWRkaW5nIGFyZSAxcmVtLCB3aGljaCBpcyByZWxhdGl2ZSB0byB0aGUgZ2xvYmFsIGZvbnQgc2l6ZSwgc28gZm9yIGNvbXBhdGliaWxpdHk6XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBUaGUgbW9kYWwgbXVzdCBzY3JvbGwgaWYgdGhlIHdpbmRvdyBoZWlnaHQgaXMgc21hbGxlciB0aGFuIHRoZSBtb2RhbCBoZWlnaHQgKyBib3RoIG1hcmdpbnMuXG4gICAgICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gd2luZG93LmlubmVySGVpZ2h0IDwgZWxlbWVudC5jbGllbnRIZWlnaHQgKyBtYXJnaW4gKiAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIG1vZGFsIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRG9jdW1lbnQgbGlzdGVuZXIgaXMgZmluZSBoZXJlIGJlY2F1c2Ugbm9ib2R5IHdpbGwgaGF2ZSBlbm91Z2ggbW9kYWxzIG9wZW4uXG4gICAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmtleXVwXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Eb2N1bWVudEtleVVwKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICAvLyBDbG9zZSBhdXRvbWF0aWNhbGx5IGNvdmVycyBjYXNlIG9mIGAhaXNDbG9zYWJsZWAsIHNvIGNoZWNrIG5vdCBuZWVkZWQuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwid2luZG93OnJlc2l6ZVwiKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50UmVzaXplKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcsIFRlbXBsYXRlTW9kYWxDb25maWcsIENvbXBvbmVudE1vZGFsQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBBY3RpdmVNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL2FjdGl2ZS1tb2RhbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHt9XG5cbiAgICBwdWJsaWMgb3BlbjxULCBVLCBWPihtb2RhbDpNb2RhbENvbmZpZzxULCBVLCBWPik6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbW9kYWwgY29tcG9uZW50IHRvIGJlIHNob3duLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudDxTdWlNb2RhbDxVLCBWPj4oU3VpTW9kYWwpO1xuXG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgdGhlIGNyZWF0ZWQgbW9kYWwgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAgICBjb25zdCBtb2RhbENvbXBvbmVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAobW9kYWwgaW5zdGFuY2VvZiBUZW1wbGF0ZU1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIHRlbXBsYXRlIGludG8gdGhlIHZpZXcuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcobW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nLCBtb2RhbC50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgIC8vIGBsZXQtY29udGV4dGBcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IG1vZGFsLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgLy8gYGxldC1tb2RhbD1cIm1vZGFsXCJgXG4gICAgICAgICAgICAgICAgbW9kYWw6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kYWwgaW5zdGFuY2VvZiBDb21wb25lbnRNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGNvbXBvbmVudCB0byBiZSB1c2VkIGFzIHRoZSBtb2RhbCBjb250ZW50LFxuICAgICAgICAgICAgLy8gaW5qZWN0aW5nIGFuIGluc3RhbmNlIG9mIGBNb2RhbGAgdG8gYmUgdXNlZCBpbiB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgY29uc3QgY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IG5ldyBNb2RhbChtb2RhbENvbXBvbmVudC5jb250cm9scywgbW9kYWwuY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgbmV3IGNvbXBvbmVudCBpbnRvIHRoZSBjb250ZW50IG9mIHRoZSBtb2RhbC5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KGNvbnRlbnRDb21wb25lbnRSZWYsIG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZyk7XG5cbiAgICAgICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYWNjZXNzIHRvIHRoZSBjb250ZW50IGNvbXBvbmVudCdzIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50Q29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gTW92ZSBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0byB0aGUgbWFpbiBtb2RhbCBlbGVtZW50LlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkb25lIHNvIHRoYXQgQ1NTIGNsYXNzZXMgYXBwbHkgY29ycmVjdGx5LiBJdCBkb2VzIHN0b3AgYW55IGN1c3RvbSBzdHlsZXMgZnJvbSB3b3JraW5nIGhvd2V2ZXIsXG4gICAgICAgICAgICAvLyBzbyBvdGhlciB3YXlzIG1heSBoYXZlIHRvIGJlIGludmVzdGlnYXRlZC5cbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50RWxlbWVudC5oYXNDaGlsZE5vZGVzKCkgJiYgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGdlbmVyYXRlZCBjb21wb25lbnQncyAnZW1wdHkgc2hlbGwnIGZyb20gdGhlIERPTS5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbURvY3VtZW50KGNvbnRlbnRDb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIHRoZSBuZXcgbW9kYWwgY29tcG9uZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgLy8gVGhlIGNvbXBvbmVudCB3aWxsIG1vdmUgaXRzZWxmIHRvIHRoZSBkb2N1bWVudCBib2R5IGZvciBjb3JyZWN0bCBzdHlsaW5nLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24oY29tcG9uZW50UmVmKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBnZW5lcmF0ZWQgbW9kYWwgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICBtb2RhbENvbXBvbmVudC5sb2FkQ29uZmlnKG1vZGFsKTtcblxuICAgICAgICAvLyBSZXR1cm4gYW4gaW5zdGFuY2Ugb2YgYW4gYEFjdGl2ZU1vZGFsYCwgc28gdGhlIHVzZXIgY2FuIGNvbnRyb2wgdGhlIG5ldyBtb2RhbC5cbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVNb2RhbChtb2RhbCwgY29tcG9uZW50UmVmKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuLi8uLi9kaW1tZXIvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdC51aS5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsRGltbWVyIGV4dGVuZHMgU3VpRGltbWVyIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2VcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tb2RhbHNcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXJNb2R1bGUgfSBmcm9tIFwiLi4vZGltbWVyL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsRGltbWVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaW1tZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpRGltbWVyTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpTW9kYWwsXG4gICAgICAgIFN1aU1vZGFsRGltbWVyXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1vZGFsLFxuICAgICAgICBTdWlNb2RhbERpbW1lclxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcHJvZ3Jlc3NcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJhclwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiAqbmdJZj1cInNob3dQcm9ncmVzc1wiPnt7IHBlcmNlbnRhZ2UgfX0lPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsYWJlbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYmFyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcyAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzcyB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wcm9ncmVzc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF92YWx1ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWF4aW11bTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgX292ZXJyaWRlU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b1N1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNob3dQcm9ncmVzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWF4aW11bSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcHJlY2lzaW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWNpc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZWNpc2lvbih2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChjb252ZXJ0ZWQsIDApLCAyMCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc3VjY2Vzc1wiKVxuICAgIHB1YmxpYyBnZXQgcmVhY2hlZE1heGltdW0oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlU3VjY2VzcyB8fCAoKHRoaXMudmFsdWUgPj0gdGhpcy5tYXhpbXVtKSAmJiB0aGlzLmF1dG9TdWNjZXNzKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmRhdGEtcGVyY2VudFwiKVxuICAgIHB1YmxpYyBnZXQgcGVyY2VudGFnZSgpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJvdW5kZWRWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMudmFsdWUsIDApLCB0aGlzLm1heGltdW0pO1xuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoYm91bmRlZFZhbHVlIC8gdGhpcy5tYXhpbXVtKSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBzZXQgY2xhc3NWYWx1ZShjbGFzc2VzOnN0cmluZykge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImF0dGFjaGVkXCIpIHx8IGNsYXNzZXMuaW5jbHVkZXMoXCJ0aW55XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwic3VjY2Vzc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gMTAwO1xuICAgICAgICB0aGlzLnByZWNpc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlQcm9ncmVzcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpIGNsYXNzPVwiaWNvblwiXG4gICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBpY29uczsgbGV0IGkgPSBpbmRleFwiXG4gICAobW91c2VvdmVyKT1cIm9uTW91c2VvdmVyKGkpXCJcbiAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgIFtjbGFzcy5zZWxlY3RlZF09XCJob3ZlcmVkSW5kZXggPj0gaSAmJiAhaXNSZWFkb25seVwiXG4gICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlID4gaVwiPlxuPC9pPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5yZWFkLW9ubHkgLmljb24ge1xuICAgIGN1cnNvcjogYXV0b1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PG51bWJlcj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmF0aW5nXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB2YWx1ZTpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhpbXVtID0gK3ZhbHVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaWNvbnMoKTp1bmRlZmluZWRbXSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItbGl0ZXJhbFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4aW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhvdmVyZWRJbmRleDpudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMubWF4aW11bSA9IDU7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soaTpudW1iZXIpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2VvdmVyKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSBpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuICAgIHB1YmxpYyBvbk1vdXNlb3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIGhvc3Q6IHsgXCIodmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmF0aW5nVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPG51bWJlciwgU3VpUmF0aW5nPiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYXRpbmcpIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVJhdGluZywgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUmF0aW5nLFxuICAgICAgICBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVJhdGluZyxcbiAgICAgICAgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElSZXN1bHRDb250ZXh0IH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaC1yZXN1bHRcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlLCBxdWVyeSlcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaFJlc3VsdDxUPiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlc3VsdFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk6c3RyaW5nO1xuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFiZWwgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IGxhYmVsLlxuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IHZhbHVlID0+IFwiXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBMb29rdXBGblJlc3VsdCwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuaW50ZXJmYWNlIElDYWNoZWRBcnJheTxUPiB7IFtxdWVyeTpzdHJpbmddOlRbXTsgfVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZTxULCBVPiB7XG4gICAgLy8gU3RvcmVzIHRoZSBhdmFpbGFibGUgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9vcHRpb25zOlRbXTtcbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG9wdGlvbnMuIE11c3QgYmUgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBwcm9taXNlLlxuICAgIHByaXZhdGUgX29wdGlvbnNMb29rdXA/Okxvb2t1cEZuPFQsIFU+O1xuICAgIC8vIEZpZWxkIHRoYXQgb3B0aW9ucyBhcmUgc2VhcmNoZWQgJiBkaXNwbGF5ZWQgb24uXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0ZpZWxkPzpzdHJpbmc7XG4gICAgLy8gRmlsdGVycyBhIGxpc3Qgb2Ygb3B0aW9ucy5cbiAgICBwdWJsaWMgb3B0aW9uc0ZpbHRlcjpGaWx0ZXJGbjxUPjtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBbXTtcbiAgICAgICAgLy8gV2UgY2Fubm90IHVzZSBib3RoIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFJlc2V0IGVudGlyZSBzZXJ2aWNlIHdpdGggbmV3IG9wdGlvbnMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNMb29rdXAoKTpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zTG9va3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgICAgIC8vIEFzIGJlZm9yZSwgY2Fubm90IHVzZSBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1Mb29rdXAoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vcHRpb25zTG9va3VwICYmIHRoaXMub3B0aW9uc0xvb2t1cC5sZW5ndGggPT09IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXNldCBvdGhlcndpc2Ugd2Ugd291bGQgbm93IGJlIHNob3dpbmcgaW52YWxpZCBzZWFyY2ggcmVzdWx0cy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgcmVzdWx0cyBvZiB0aGUgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0czpUW107XG4gICAgLy8gQ2FjaGUgb2YgcmVzdWx0cywgaW5kZXhlZCBieSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzQ2FjaGU6SUNhY2hlZEFycmF5PFQ+O1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnk6c3RyaW5nO1xuICAgIC8vIEFsbG93cyB0aGUgZW1wdHkgcXVlcnkgdG8gcHJvZHVjZSByZXN1bHRzLlxuICAgIHB1YmxpYyBhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbjtcbiAgICAvLyBIb3cgbG9uZyB0byBkZWxheSB0aGUgc2VhcmNoIGZvciB3aGVuIHVzaW5nIHVwZGF0ZVF1ZXJ5RGVsYXllZC4gU3RvcmVkIGluIG1zLlxuICAgIHB1YmxpYyBzZWFyY2hEZWxheTpudW1iZXI7XG4gICAgLy8gU3RvcmVzIHRoZSBzZWFyY2ggdGltZW91dCBoYW5kbGUgc28gd2UgY2FuIGNhbmNlbCBpdC5cbiAgICBwcml2YXRlIF9zZWFyY2hEZWxheVRpbWVvdXQ6bnVtYmVyO1xuICAgIC8vIFByb3ZpZGVzICdsb2FkaW5nJyBmdW5jdGlvbmFsaXR5LlxuICAgIHByaXZhdGUgX2lzU2VhcmNoaW5nOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFsbG93RW1wdHlRdWVyeTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnNGaWx0ZXIgPSAob3MsIHEpID0+IHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhIFJlZ0V4cC5cbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHRoaXMuX3F1ZXJ5KTtcblxuICAgICAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHJlc3VsdHMgaWYgdGhlIHF1ZXJ5IHdhcyB2YWxpZCByZWdleC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyB0aGUgcmVzdWx0cyBzdWRkZW5seSBiZWNvbWluZyBlbXB0eSBpZiBhbiBpbnZhbGlkIHJlZ2V4IHN0cmluZyBpcyBpbnB1dHRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3NcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIG9uIHRoZSBvcHRpb25zIHdpdGggYSBzdHJpbmcgbWF0Y2ggb24gdGhlIGZpZWxkIHdlIGFyZSB0ZXN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG8gPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4obywgdGhpcy5fb3B0aW9uc0ZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaChyZWdleCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgc2luY2UgaXQgd2Fzbid0IGEgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIGFuZCByZXNldC5cbiAgICAgICAgdGhpcy5hbGxvd0VtcHR5UXVlcnkgPSBhbGxvd0VtcHR5UXVlcnk7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgcXVlcnkgYWZ0ZXIgdGhlIHNwZWNpZmllZCBzZWFyY2ggZGVsYXkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEZWxheVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc2VhcmNoIHF1ZXJ5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGlmICh0aGlzLl9xdWVyeSA9PT0gXCJcIiAmJiAhdGhpcy5hbGxvd0VtcHR5UXVlcnkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB0aGUgbmV3IHF1ZXJ5IGlzIGVtcHR5IChhbmQgd2UgZG9uJ3QgYWxsb3cgZW1wdHkgcXVlcmllcykuXG4gICAgICAgICAgICAvLyBEb24ndCByZXNldCBzbyB0aGF0IHdoZW4gYW5pbWF0aW5nIGNsb3NlZCB3ZSBkb24ndCBnZXQgYSBqdWRkZXIuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRzQ2FjaGUuaGFzT3duUHJvcGVydHkodGhpcy5fcXVlcnkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcXVlcnkgaXMgYWxyZWFkeSBjYWNoZWQsIG1ha2UgdXNlIG9mIGl0LlxuICAgICAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV07XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9ucyBsb29rdXAgd2l0aG91dCBhIHRoaXMgY29udGV4dC5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5TG9va3VwID0gdGhpcy5fb3B0aW9uc0xvb2t1cC5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fcXVlcnkpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG5cbiAgICAgICAgICAgIHF1ZXJ5TG9va3VwXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuc2V0ICdsb2FkaW5nJyBzdGF0ZSwgYW5kIHRocm93IHRoZSByZXR1cm5lZCBlcnJvciB3aXRob3V0IHVwZGF0aW5nIHRoZSByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMub3B0aW9uc0ZpbHRlci5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fb3B0aW9ucywgdGhpcy5fcXVlcnkpO1xuICAgICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhmaWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyAmIGNhY2hlcyB0aGUgbmV3IHNldCBvZiByZXN1bHRzLlxuICAgIHByaXZhdGUgdXBkYXRlUmVzdWx0cyhyZXN1bHRzOlRbXSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV0gPSByZXN1bHRzO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSk6TG9va3VwRm5SZXN1bHQ8VD47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlVbXSk6TG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSB8IFVbXSk6TG9va3VwRm5SZXN1bHQ8VD4gfCBMb29rdXBGblJlc3VsdDxUW10+IHtcbiAgICAgICAgaWYgKGluaXRpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFVbXT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VD47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgdG8gcmVnZXggd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICBwcml2YXRlIHRvUmVnZXgocXVlcnk6c3RyaW5nKTpSZWdFeHAgfCBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIEhUTUwgZm9yIGhpZ2hsaWdodGVkIG1hdGNoIHRleHQuXG4gICAgcHVibGljIGhpZ2hsaWdodE1hdGNoZXModGV4dDpzdHJpbmcsIHF1ZXJ5OnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgocXVlcnkpO1xuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IGA8Yj4ke21hdGNofTwvYj5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZXNldHMgdGhlIHNlYXJjaCBiYWNrIHRvIGEgcHJpc3RpbmUgc3RhdGUuXG4gICAgcHJpdmF0ZSByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElTZWFyY2hMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdENvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeTpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIGlucHV0XCIgW2NsYXNzLmljb25dPVwiaGFzSWNvblwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJwcm9tcHRcIiB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuICAgIDxpICpuZ0lmPVwiaGFzSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgbWVudVNlbGVjdGVkSXRlbUNsYXNzPVwiYWN0aXZlXCI+XG5cbiAgICA8c3VpLXNlYXJjaC1yZXN1bHQgKm5nRm9yPVwibGV0IHIgb2YgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJyZXN1bHRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwicmVzdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHIpXCI+PC9zdWktc2VhcmNoLXJlc3VsdD5cblxuICAgIDxkaXYgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJtZXNzYWdlIGVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBFbnN1cmVzIHJlc3VsdHMgZGl2IGhhcyBtYXJnaW4uICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLyogRml4ZXMgcG9zaXRpb25pbmcgd2hlbiByZXN1bHRzIGFyZSBwdXNoZWQgYWJvdmUgdGhlIHNlYXJjaC4gKi9cbi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoPFQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBUPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgdGhlIHNlYXJjaCBlbGVtZW50IGhhcyBhIHZpc2libGUgc2VhcmNoIGljb24uXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzSWNvbjpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgLy8gR2V0cyAmIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQgZGlzcGxheWVkIGluc2lkZSB0aGUgdGV4dCBpbnB1dC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlYXJjaExvY2FsZVZhbHVlcztcblxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VhcmNoTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlYXJjaExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VhcmNoXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgYSBkZWxheWVkIHNlYXJjaC5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVzdWx0cyBvcGVuIHN0YXRlIGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgcXVlcnkgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bHRGb3JtYXR0ZXI/OihyOlQsIHE6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdEZvcm1hdHRlcigpOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fcmVzdWx0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0Rm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0aGlzLnJlYWRWYWx1ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAociwgcSkgPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5yZWFkVmFsdWUociksIHEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlc3VsdEZvcm1hdHRlcihmb3JtYXR0ZXI6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRGb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdWx0VGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV0YWluU2VsZWN0ZWRSZXN1bHQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhSZXN1bHRzOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cy5zbGljZSgwLCB0aGlzLm1heFJlc3VsdHMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSZXN1bHQ/OlQ7XG5cbiAgICAvLyBFbWl0cyB3aGVuZXZlciBhIG5ldyByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAgQE91dHB1dChcInJlc3VsdFNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uUmVzdWx0U2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCByZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVD4oKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAyMDA7XG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyA9IDc7XG5cbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VhcmNoO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdHMgYSByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdChyZXN1bHQ6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZC5lbWl0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkodGhpcy5yZWFkVmFsdWUocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IG9wZW4gb24gY2xpY2sgd2hlbiB0aGVyZSBpcyBhIHF1ZXJ5IGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWRzIHRoZSBzcGVjaWZpZWQgZmllbGQgZnJvbSBhbiBpdGVtLlxuICAgIHB1YmxpYyByZWFkVmFsdWUob2JqZWN0OlQpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmplY3QsIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VhcmNoLFxuICAgICAgICBTdWlTZWFyY2hSZXN1bHRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VhcmNoXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gW2lubmVySFRNTF09XCJyZW5kZXJlZFRleHRcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE9wdGlvbjxUPiBleHRlbmRzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQsIHdoZXRoZXIgYnkgY2xpY2tpbmcgb3IgYnkga2V5Ym9hcmQuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVuZGVyZWRUZXh0PzpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IGZvcm1hdHRlcihmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBmb3JtYXR0ZXIodGhpcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlc1RlbXBsYXRlOmJvb2xlYW47XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gV2UgaW5oZXJpdCBTdWlEcm9wZG93bk1lbnVJdGVtIHRvIGF1dG9tYXRpY2FsbHkgZ2FpbiBhbGwga2V5Ym9hcmQgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBkb25lIHZpYSBhZGRpbmcgdGhlIC5pdGVtIGNsYXNzIGJlY2F1c2UgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50KTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhlIGRlZmF1bHQgdGV4dCBhbiBlbXB0eSBsYWJlbCwgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IG9uZS5cbiAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudXNlc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aVNlbGVjdFNlYXJjaF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RTZWFyY2gge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmF1dG9jb21wbGV0ZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBhdXRvQ29tcGxldGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeVVwZGF0ZWQ6RXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgcHVibGljIG9uUXVlcnlLZXlEb3duOkV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQuZW1pdChxdWVyeSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93bi5lbWl0KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cygpOnZvaWQge1xuICAgICAgICAvLyBTbGlnaHRseSBkZWxheSB0byBzdXBwb3J0IGluIG1lbnUgc2VhcmNoLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UsIExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi8uLi9zZWFyY2gvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VsZWN0TG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uQ29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5PzpzdHJpbmc7XG59XG5cbi8vIFdlIHVzZSBnZW5lcmljIHR5cGUgVCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBvcHRpb25zIHdlIGFyZSB3b3JraW5nIHdpdGgsXG4vLyBhbmQgVSB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgb3B0aW9uIHVzZWQgYXMgdGhlIHZhbHVlLlxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVT47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcm90ZWN0ZWQgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHJlbmRlcmVkIHNlbGVjdCBvcHRpb25zLiAoUmVuZGVyZWQgYnkgdGhlIHVzZXIgdXNpbmcgKm5nRm9yKS5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVNlbGVjdE9wdGlvbiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBfcmVuZGVyZWRPcHRpb25zOlF1ZXJ5TGlzdDxTdWlTZWxlY3RPcHRpb248VD4+O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50cyBvbiB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9yZW5kZXJlZFN1YnNjcmlwdGlvbnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kcm9wZG93blwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZW51LmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1NlYXJjaGFibGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBpc1NlYXJjaEV4dGVybmFsOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgZ2V0IGhhc1NlYXJjaENsYXNzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSAmJiAhdGhpcy5pc1NlYXJjaEV4dGVybmFsO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChTdWlTZWxlY3RTZWFyY2gpXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX21hbnVhbFNlYXJjaD86U3VpU2VsZWN0U2VhcmNoO1xuXG4gICAgcHVibGljIGdldCBzZWFyY2hJbnB1dCgpOlN1aVNlbGVjdFNlYXJjaCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTZWFyY2ggfHwgdGhpcy5faW50ZXJuYWxTZWFyY2g7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiaW5kZXgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwpIHtcbiAgICAgICAgICAgIC8vIElmIG9wZW4gJiBpbiBtZW51IHNlYXJjaCwgcmVtb3ZlIGZyb20gdGFiaW5kZXggKGFzIGlucHV0IGFsd2F5cyBhdXRvZm9jdXNzZXMpLlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1NlYXJjaENsYXNzKSB7XG4gICAgICAgICAgICAvLyBJZiBzZWFyY2ggaW5wdXQgZW5hYmxlZCwgdGFiIGdvZXMgdG8gaW5wdXQuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChsb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBEZXByZWNhdGVkXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVVwZGF0ZUhvb2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSByZW5kZXJlZCB0ZXh0IGFzIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWxGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbGFiZWxGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGFiZWxHZXR0ZXIoKToob2JqOlQpID0+IHN0cmluZyB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbGFiZWwgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iaiwgdGhpcy5sYWJlbEZpZWxkKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlRmllbGQ6c3RyaW5nO1xuXG4gICAgcHVibGljIGdldCB2YWx1ZUdldHRlcigpOihvYmo6VCkgPT4gVSB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgVT4ob2JqLCB0aGlzLnZhbHVlRmllbGQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG9wdGlvblRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIHByaXZhdGUgX29wdGlvbkZvcm1hdHRlcj86KG86VCwgcT86c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZ3VyZWRGb3JtYXR0ZXIoKToob3B0aW9uOlQpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25Gb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuX29wdGlvbkZvcm1hdHRlciEobywgdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnF1ZXJ5IDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5sYWJlbEdldHRlcihvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuc2VhcmNoU2VydmljZS5oaWdobGlnaHRNYXRjaGVzKHRoaXMubGFiZWxHZXR0ZXIobyksIHRoaXMucXVlcnkgfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uRm9ybWF0dGVyKGZvcm1hdHRlcjooKG9wdGlvbjpULCBxdWVyeT86c3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlbGVjdExvY2FsZVZhbHVlcztcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SVNlbGVjdExvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklTZWxlY3RMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcInNlbGVjdFwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByb3RlY3RlZCBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBkbyB3YW50IGFuIGVtcHR5IHF1ZXJ5IHRvIHJldHVybiBhbGwgcmVzdWx0cy5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVT4odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5pY29uID0gXCJkcm9wZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgICAgICAvLyBXZSBtYW51YWxseSBzcGVjaWZ5IHRoZSBtZW51IGl0ZW1zIHRvIHRoZSBtZW51IGJlY2F1c2UgdGhlIEBDb250ZW50Q2hpbGRyZW4gZG9lc24ndCBwaWNrIHVwIG91ciBkeW5hbWljYWxseSByZW5kZXJlZCBpdGVtcy5cbiAgICAgICAgdGhpcy5fbWVudS5pdGVtcyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5fbWFudWFsU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeVVwZGF0ZWQuc3Vic2NyaWJlKChxOnN0cmluZykgPT4gdGhpcy5xdWVyeSA9IHEpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5S2V5RG93bi5zdWJzY3JpYmUoKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vblF1ZXJ5SW5wdXRLZXlkb3duKGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG11c3QgY2FsbCB0aGlzIGltbWVkaWF0ZWx5IGFzIGNoYW5nZXMgZG9lc24ndCBmaXJlIHdoZW4geW91IHN1YnNjcmliZS5cbiAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VsZWN0O1xuICAgIH1cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBxdWVyeSB0aGVuIG9wZW4gdGhlIGRyb3Bkb3duLCBhcyBhZnRlciBrZXlib2FyZCBpbnB1dCBpdCBzaG91bGQgYWx3YXlzIGJlIG9wZW4uXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0UXVlcnkoZGVsYXllZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIC8vIFRoZSBzZWFyY2ggZGVsYXkgaXMgc2V0IHRvIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIHRvIGVuc3VyZSByZXN1bHRzXG4gICAgICAgIC8vIGFyZW4ndCByZW5kZXJlZCBhcyB0aGUgc2VsZWN0IGNsb3NlcyBhcyB0aGF0IGNhdXNlcyBhIHN1ZGRlbiBmbGFzaC5cbiAgICAgICAgaWYgKGRlbGF5ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IHRoaXMuX21lbnUubWVudVRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeURlbGF5ZWQoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBhbGwgcHJldmlvdXMgc3Vic2NyaXB0aW9ucyB0byBhdm9pZCBtZW1vcnkgbGVha3Mgb24gbGFyZ2Ugc2VsZWN0cy5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocnMgPT4gcnMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHtcbiAgICAgICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IGluaXRpYWxpc2F0aW9uIHRvIGF2b2lkIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9ycy4gVE9ETyAtIGxvb2sgaW50byBhdm9pZGluZyB0aGlzIVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMucHVzaChyby5vblNlbGVjdGVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNlbGVjdE9wdGlvbihyby52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgbm8gb3B0aW9ucyBoYXZlIGJlZW4gcHJvdmlkZWQsIGF1dG9nZW5lcmF0ZSB0aGVtIGZyb20gdGhlIHJlbmRlcmVkIG9uZXMuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnMubWFwKHJvID0+IHJvLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIG9wdGlvbi51c2VzVGVtcGxhdGUgPSAhIXRoaXMub3B0aW9uVGVtcGxhdGU7XG4gICAgICAgIG9wdGlvbi5mb3JtYXR0ZXIgPSB0aGlzLmNvbmZpZ3VyZWRGb3JtYXR0ZXI7XG5cbiAgICAgICAgaWYgKG9wdGlvbi51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKG9wdGlvbi50ZW1wbGF0ZVNpYmxpbmcsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24uY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZDtcblxuICAgIHByb3RlY3RlZCBmaW5kT3B0aW9uKG9wdGlvbnM6VFtdLCB2YWx1ZTpVKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gVHJpZXMgdG8gZmluZCBhbiBvcHRpb24gaW4gb3B0aW9ucyBhcnJheVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMudmFsdWVHZXR0ZXIobykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNhcmV0Q2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRyb3Bkb3duIGlzIHNlYXJjaGFibGUsIGNsaWNraW5nIHNob3VsZCBrZWVwIGl0IG9wZW4sIG90aGVyd2lzZSB3ZSB0b2dnbGUgdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5pc1NlYXJjaGFibGUgPyB0cnVlIDogIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IGZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgd2hlbmV2ZXIgY2xpY2tpbmcgb24gdGhlIHNlbGVjdC5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5UHJlc3MoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkRvd24pIHtcblxuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWFyY2hhYmxlICYmIHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEZvY3Vzc2VzIHRoZSBzZWFyY2ggaW5wdXQgb25seSB3aGVuIHNlYXJjaGFibGUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIHRoYXQgZHJhd3MgdGhlIHByb3ZpZGVkIHRlbXBsYXRlIGJlc2lkZSB0aGUgcHJvdmlkZWQgVmlld0NvbnRhaW5lclJlZi5cbiAgICBwcm90ZWN0ZWQgZHJhd1RlbXBsYXRlKHNpYmxpbmdSZWY6Vmlld0NvbnRhaW5lclJlZiwgdmFsdWU6VCk6dm9pZCB7XG4gICAgICAgIHNpYmxpbmdSZWYuY2xlYXIoKTtcbiAgICAgICAgLy8gVXNlIG9mIGAkaW1wbGljaXRgIG1lYW5zIHVzZSBvZiA8bmctdGVtcGxhdGUgbGV0LW9wdGlvbj4gc3ludGF4IGlzIHN1cHBvcnRlZC5cbiAgICAgICAgc2libGluZ1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5vcHRpb25UZW1wbGF0ZSwge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB2YWx1ZSxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJT3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdC1sYWJlbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUpXCI+PC9zcGFuPlxuPGkgY2xhc3M9XCJkZWxldGUgaWNvblwiIChjbGljayk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9pPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdExhYmVsPFQ+IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxhYmVsXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5PzpzdHJpbmc7XG5cbiAgICBAT3V0cHV0KFwiZGVzZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvbkRlc2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMub25EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgS2V5Q29kZSwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzXCI+XG48IS0tIE11bHRpLXNlbGVjdCBsYWJlbHMgLS0+XG4gICAgPHN1aS1tdWx0aS1zZWxlY3QtbGFiZWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkT3B0aW9ucztcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2VsZWN0ZWQpPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvc3VpLW11bHRpLXNlbGVjdC1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIEhlbHBlciB0ZXh0IC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIlxuICAgICBbY2xhc3MuZGVmYXVsdF09XCJoYXNMYWJlbHNcIlxuICAgICBbY2xhc3MuZmlsdGVyZWRdPVwiISFxdWVyeSAmJiAhaXNTZWFyY2hFeHRlcm5hbFwiPlxuICAgIFxuICAgIDwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzOyBlbHNlIHNlbGVjdGVkQmxvY2tcIj57eyBwbGFjZWhvbGRlciB9fTwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDwhLS0gU3VtbWFyeSBzaG93biB3aGVuIGxhYmVscyBhcmUgaGlkZGVuIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz4ge3sgc2VsZWN0ZWRNZXNzYWdlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJ0cnVlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09IDAgXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IG1heFNlbGVjdGVkTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IGlucHV0LnNlYXJjaCB7XG4gICAgd2lkdGg6IDEyZW0gIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVW10+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zOlRbXTtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9ucz86VVtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uc0NoYW5nZTpFdmVudEVtaXR0ZXI8VVtdPjtcblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWRSZWFjaGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGlvbnMsIHRoZW4gZW1wdHkgdGhlIHJlc3VsdHMgY29tcGxldGVseS5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6VFtdID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBzZWFyY2ggcmVzdWx0cyBcXCBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHIgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmluZChvID0+IHIgPT09IG8pID09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzTGFiZWxzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTGFiZWxzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNMYWJlbHMoaGFzTGFiZWxzOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTGFiZWxzID0gaGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFNlbGVjdGVkOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRSZWFjaGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWF4aW11bSB0aGVuIHdlIGNhbiBpbW1lZGlhdGVseSByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5tYXhTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkubWF4U2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcIm1heFwiLCB0aGlzLm1heFNlbGVjdGVkLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tdWx0aXBsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VVtdPigpO1xuXG4gICAgICAgIHRoaXMuaGFzTGFiZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb25zIHN0aWxsIGV4aXN0LlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fd3JpdHRlbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5fd3JpdHRlbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5oYXNMYWJlbHMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeShmYWxzZSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWVzOlVbXSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZXMgdG8gb3B0aW9ucy5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IGl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBvcHRpb25zIHRvIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbnMgXFwge29wdGlvbn0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKHNvID0+IHNvICE9PSBvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuQmFja3NwYWNlICYmIHRoaXMucXVlcnkgPT09IFwiXCIgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHJpZ2h0bW9zdCBvcHRpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGJhY2tzcGFjZSBpbiB0aGUgc2VhcmNoIGlucHV0LlxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbih0aGlzLnNlbGVjdGVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbnNDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VVtdLCBTdWlNdWx0aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpTXVsdGlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIiBjbGFzcz1cImRlZmF1bHQgdGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeVwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XG48IS0tIFNlbGVjdGVkIGl0ZW0gLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeSB8fCBzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIj5cbiAgICA8c3BhbiAjb3B0aW9uVGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb25UZW1wbGF0ZSAmJiBzZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWRcIiBbaW5uZXJIVE1MXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXIoc2VsZWN0ZWRPcHRpb24pXCI+PC9zcGFuPlxuPC9kaXY+XG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cImlzU2VhcmNoYWJsZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgKm5nSWY9XCJpc1NlYXJjaGFibGUgJiYgYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAge3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFU+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb24/OlQ7XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9uPzpVO1xuXG4gICAgQFZpZXdDaGlsZChcIm9wdGlvblRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9vcHRpb25UZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMuc2luZ2xlLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVPigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3dyaXR0ZW5PcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGUgb3B0aW9uIHN0aWxsIGV4aXN0cy5cbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnZhbHVlR2V0dGVyKHRoaXMuc2VsZWN0ZWRPcHRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBhbiB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHRoaXMuX3dyaXR0ZW5PcHRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcXVlcnlVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHF1ZXJ5IGlzIHVwZGF0ZWQsIHdlIGp1c3QgYWJhbmRvbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIENob29zZSBhbmQgZW1pdCB0aGUgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uQ2hhbmdlLmVtaXQodGhpcy52YWx1ZUdldHRlcihvcHRpb24pKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeSgpO1xuXG4gICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gbG9hZGVkLCB3ZSBjYW4gaW1tZWRpYXRlbHkgbWF0Y2ggdGhlIG5nTW9kZWwgdmFsdWUgdG8gYW4gb3B0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUZpZWxkICYmIHRoaXMuc2VhcmNoU2VydmljZS5oYXNJdGVtTG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWFyY2ggc2VydmljZSBoYXMgYSBzZWxlY3RlZCBsb29rdXAgZnVuY3Rpb24sIG1ha2UgdXNlIG9mIHRoYXQgdG8gbG9hZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbik7XG5cbiAgICAgICAgLy8gQm9sZGVucyB0aGUgaXRlbSBzbyBpdCBhcHBlYXJzIHNlbGVjdGVkIGluIHRoZSBkcm9wZG93bi5cbiAgICAgICAgb3B0aW9uLmlzQWN0aXZlID0gb3B0aW9uLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd1NlbGVjdGVkT3B0aW9uKCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZXMgdGhlIGFjdGl2ZSBjbGFzcyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICBpZiAodGhpcy5fcmVuZGVyZWRPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25UZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGVtcGxhdGUodGhpcy5fb3B0aW9uVGVtcGxhdGVTaWJsaW5nLCB0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVmFsdWUgYWNjZXNzb3IgZGlyZWN0aXZlIGZvciB0aGUgc2VsZWN0IHRvIHN1cHBvcnQgbmdNb2RlbC5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3RcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKHNlbGVjdGVkT3B0aW9uQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgU3VpU2VsZWN0PFQsIFU+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTW9kdWxlIH0gZnJvbSBcIi4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdCwgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0XCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3QsIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0XCI7XG5pbXBvcnQgeyBTdWlNdWx0aVNlbGVjdExhYmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aS1zZWxlY3QtbGFiZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlLFxuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RMYWJlbCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVNlbGVjdCxcbiAgICAgICAgU3VpU2VsZWN0T3B0aW9uLFxuICAgICAgICBTdWlTZWxlY3RTZWFyY2gsXG4gICAgICAgIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0LFxuICAgICAgICBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3JcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgU2lkZWJhclRyYW5zaXRpb24gPSBcIm92ZXJsYXlcIiB8IFwicHVzaFwiIHwgXCJzY2FsZSBkb3duXCIgfCBcInVuY292ZXJcIiB8IFwic2xpZGUgYWxvbmdcIiB8IFwic2xpZGUgb3V0XCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyVHJhbnNpdGlvbiA9IHtcbiAgICBPdmVybGF5OiBcIm92ZXJsYXlcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBQdXNoOiBcInB1c2hcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTY2FsZURvd246IFwic2NhbGUgZG93blwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFVuY292ZXI6IFwidW5jb3ZlclwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlQWxvbmc6IFwic2xpZGUgYWxvbmdcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZU91dDogXCJzbGlkZSBvdXRcIiBhcyBTaWRlYmFyVHJhbnNpdGlvblxufTtcblxuZXhwb3J0IHR5cGUgU2lkZWJhckRpcmVjdGlvbiA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRGlyZWN0aW9uID0ge1xuICAgIExlZnQ6IFwibGVmdFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFRvcDogXCJ0b3BcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBTaWRlYmFyRGlyZWN0aW9uXG59O1xuXG5leHBvcnQgY2xhc3MgU2lkZWJhclNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc1Zpc2libGU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBbmltYXRpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgd2FzSnVzdE9wZW5lZDpib29sZWFuO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpTaWRlYmFyRGlyZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSBfd2lkdGg6bnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uUmlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3aWR0aCh3aWR0aDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Cb3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGVpZ2h0KGhlaWdodDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmlzaWJsZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgcHVibGljIHdpZHRoQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBwdWJsaWMgaGVpZ2h0Q2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHByaXZhdGUgX2lzQW5pbWF0aW5nVGltZW91dDpudW1iZXI7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpTaWRlYmFyVHJhbnNpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzVmlzaWJsZTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAyNjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBTaWRlYmFyVHJhbnNpdGlvbi5VbmNvdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlLmVtaXQoaXNWaXNpYmxlKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZSk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faXNBbmltYXRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVWaXNpYmxlU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoIXRoaXMuaXNWaXNpYmxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSwgU2lkZWJhclRyYW5zaXRpb24sIFNpZGViYXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyIHtcbiAgICBwdWJsaWMgc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2lkZWJhclwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpTaWRlYmFyVHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpTaWRlYmFyVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbi5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuc2V0Q2xhc3MoYywgZmFsc2UpKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIHRydWUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6U2lkZWJhckRpcmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjpTaWRlYmFyRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyh0aGlzLnNlcnZpY2UuZGlyZWN0aW9uLCB0cnVlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzVmlzaWJsZShpc1Zpc2libGU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGVDaGFuZ2UoKTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hbmltYXRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzQW5pbWF0aW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNBbmltYXRpbmc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IFNpZGViYXJTZXJ2aWNlKCk7XG4gICAgICAgIC8vIFdlIHNldCB0aGUgZGVmYXVsdCBoZXJlIGFzIHdlbGwgdG8gZm9yY2UgdGhlIGNsYXNzZXMgdG8gdXBkYXRlLlxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBTaWRlYmFyVHJhbnNpdGlvbi5VbmNvdmVyO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFNpZGViYXJEaXJlY3Rpb24uTGVmdDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVEaW1lbnNpb25zKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEaW1lbnNpb25zKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS53aWR0aCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmhlaWdodCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDbGFzcyhjbGFzc05hbWU6c3RyaW5nLCBpc0FkZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlVmlzaWJsZVN0YXRlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItc2libGluZ1wiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhclNpYmxpbmcge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpTaWRlYmFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZFdoZW5WaXNpYmxlOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnB1c2hlclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzRGltbWVkV2hlblZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiKTtcblxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gIT09IFNpZGViYXJUcmFuc2l0aW9uLk92ZXJsYXkgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5TY2FsZURvd24pIHtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5zZXJ2aWNlLndpZHRofXB4LCAke3RoaXMuc2VydmljZS5oZWlnaHR9cHgsIDApYDtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgIXRoaXMuc2VydmljZS53YXNKdXN0T3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyU2libGluZyB9IGZyb20gXCIuL3NpZGViYXItc2libGluZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhci1jb250YWluZXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJDb250YWluZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnB1c2hhYmxlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhcilcbiAgICBwdWJsaWMgc2lkZWJhcjpTdWlTaWRlYmFyO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTaWRlYmFyU2libGluZylcbiAgICBwdWJsaWMgc2libGluZzpTdWlTaWRlYmFyU2libGluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpZGViYXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGluY2x1ZGUgYSA8c3VpLXNpZGViYXI+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHRoaXMuc2lkZWJhci5zZXJ2aWNlO1xuXG4gICAgICAgIGlmICghdGhpcy5zaWJsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyLXNpYmxpbmc+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2libGluZy5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVNpZGViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXItY29udGFpbmVyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyU2libGluZyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci1zaWJsaW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlTaWRlYmFyLFxuICAgICAgICBTdWlTaWRlYmFyQ29udGFpbmVyLFxuICAgICAgICBTdWlTaWRlYmFyU2libGluZ1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTaWRlYmFyLFxuICAgICAgICBTdWlTaWRlYmFyQ29udGFpbmVyLFxuICAgICAgICBTdWlTaWRlYmFyU2libGluZ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUYWIge1xuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG4gICAgcHVibGljIGhlYWRlcjpTdWlUYWJIZWFkZXI7XG4gICAgcHVibGljIGNvbnRlbnQ6U3VpVGFiQ29udGVudDtcbiAgICBwdWJsaWMgaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaGVhZGVyOlN1aVRhYkhlYWRlciwgY29udGVudDpTdWlUYWJDb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBoZWFkZXIuaWQ7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICAgIC8vIFNvIHRoYXQgdGhlIGhlYWRlciBhbmQgY29udGVudCBpc0FjdGl2ZSBwcm9wZXJ0aWVzIGFyZSBhbHdheXMgaW4gc3luYy5cbiAgICAgICAgdGhpcy5oZWFkZXIuaXNBY3RpdmVDaGFuZ2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb250ZW50LmlzQWN0aXZlID0gdGhpcy5pc0FjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNBY3RpdmUgZXZlcnkgdGltZS5cbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFVzZSBgc2V0QWN0aXZlU3RhdGVgIHNvIGFzIG5vdCB0byBmaXJlICdleHRlcm5hbCBjaGFuZ2VzJyBldmVudC5cbiAgICAgICAgdGhpcy5oZWFkZXIuc2V0QWN0aXZlU3RhdGUoYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlcyBhY2Nlc3NpbmcgLmhlYWRlci5pc0Rpc2FibGVkIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0Rpc2FibGVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBJbnB1dCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRhYkhlYWRlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJIZWFkZXIge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiSGVhZGVyXCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIC8vIEludGVybmFsbHkga2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgaGVhZGVyIGlzIGFjdGl2ZS5cbiAgICBwcml2YXRlIF9pc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgLy8gRW5hYmxlcyB1c2Ugb2YgWyhpc0FjdGl2ZSldIHNvIHN0YXRlIGNhbiBiZSBzZXQgdXNpbmcgYm9vbGVhbnMuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzQWN0aXZlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIG9ubHkgd2hlbiBgaXNBY3RpdmVgIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW5wdXQuXG4gICAgcHVibGljIGlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gZGVhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uQWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgZGVhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImRlYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25EZWFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIE9ubHkgdXNlZCBieSBASW5wdXQoKSwgcnVucyB3aGVuZXZlciB1c2VyIGlucHV0IGNoYW5nZXMgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gUnVuIGluIHRpbWVvdXQgYmVjYXVzZSBgaXNEaXNhYmxlZGAgY2FuIHByb2hpYml0IHVzZXIgZnJvbSBjaGFuZ2luZyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBzbyB1cGRhdGUgaXMgZGVsYXllZCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvci5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGFsbG93IGNoYW5nZSBpZiB0YWIgaGVhZGVyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICAgICAgICAgIGlzQWN0aXZlID0gIXRoaXMuaXNEaXNhYmxlZCA/IGFjdGl2ZSA6IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTdGF0ZShpc0FjdGl2ZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgJ2V4dGVybmFsIGNoYW5nZScgZXZlbnQgYXMgdXNlciBpbnB1dCBoYXMgb2NjdXJlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5lbWl0KGlzQWN0aXZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQoZGlzYWJsZWQ6Ym9vbGVhbikge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB2YWx1ZSBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdG8gY3VycmVudCBvbmUuXG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkICE9PSBkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgICAgICAgICAvLyBJZiBub3cgZGlzYWJsZWQsIHRoZW4gdGFiIGhlYWRlciBtdXN0IGJlIGRlYWN0aXZhdGVkLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsbHkgdXBkYXRlIGFjdGl2ZSBzdGF0ZS5cbiAgICBwdWJsaWMgc2V0QWN0aXZlU3RhdGUoYWN0aXZlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICAvLyBJZiAoY2FzdCkgYWN0aXZlIHZhbHVlIGhhcyBjaGFuZ2VkOlxuICAgICAgICBpZiAoISF0aGlzLl9pc0FjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlID0gYWN0aXZlO1xuXG4gICAgICAgICAgICAvLyBGaXJlIHRoZSBhcHByb3ByaWF0ZSBhY3RpdmF0aW9uIGV2ZW50LlxuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZWFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3MsIGVtaXQgYSBjaGFuZ2UgdG8gYGlzQWN0aXZlYCwgc28gWyhpc0FjdGl2ZSldIHdvcmtzIGNvcnJlY3RseS5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZS5lbWl0KGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSB0YWIgd2hlbiBjbGlja2VkLCBzbyBsb25nIGFzIGl0IGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJDb250ZW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkNvbnRlbnQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRhYlwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJDb250ZW50XCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90YWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXRhYnNldFwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlUYWJIZWFkZXIpXG4gICAgcHJpdmF0ZSBfdGFiSGVhZGVyczpRdWVyeUxpc3Q8U3VpVGFiSGVhZGVyPjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiQ29udGVudClcbiAgICBwcml2YXRlIF90YWJDb250ZW50czpRdWVyeUxpc3Q8U3VpVGFiQ29udGVudD47XG5cbiAgICAvLyBMaXN0IG9mIGFsbCB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgcHVibGljIHRhYnM6VGFiW107XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAgcHJpdmF0ZSBfYWN0aXZlVGFiOlRhYjtcblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlVGFiKCk6VGFiIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRhYjtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHNldHRpbmcgYSB0YWIgYXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLCBpdCBhdXRvbWF0aWNhbGx5IGdhaW5zXG4gICAgLy8gYGlzQWN0aXZlYCBzdGF0dXMgKHNhdmVzIGxpdHRlcmluZyBgaXNBY3RpdmUgPSB0cnVlYCBldmVyeXdoZXJlKS5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVRhYih0YWI6VGFiKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIHRpbWVzIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCBpcyBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfYmFycmllckNvdW50Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIEZpcmUgYGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWRgIHdoZW4gdGhlIHF1ZXJ5IGxpc3RzIGNoYW5nZS5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG4gICAgICAgIHRoaXMuX3RhYkNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpKTtcblxuICAgICAgICAvLyBJbml0aWFsbHkgbG9hZCB0aGUgdGFicy5cbiAgICAgICAgdGhpcy5sb2FkVGFicygpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGVpdGhlciB0aGUgdGFiIGhlYWRlcnMgb3IgdGFiIGNvbnRlbnRzIHF1ZXJ5IGxpc3RzIHVwZGF0ZS5cbiAgICBwcml2YXRlIGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgYXJlIHVzaW5nIGEgJ2NvdW50aW5nIGJhcnJpZXIgb2YgbiA9IDInLCBpLmUuIHRoZSBjb2RlIHdpdGhpbiBvbmx5IHJ1bnMgYWZ0ZXIgdGhlIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2UuXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCBib3RoIHRoZSBoZWFkZXJzIGFuZCBjb250ZW50cyBxdWVyeSBsaXN0cyBjYW4gdXBkYXRlIGJlZm9yZSB3ZSBydW4gY29kZSB0aGF0IG1hdGNoZXMgdGhlIHR3byB1cC5cbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50Kys7XG5cbiAgICAgICAgaWYgKHRoaXMuX2JhcnJpZXJDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJhcnJpZXIgc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFicy5cbiAgICAgICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3RzIHRhYiBoZWFkZXJzIHRvIHRhYiBjb250ZW50cywgYW5kIGNyZWF0ZXMgYSB0YWIgaW5zdGFuY2UgZm9yIGVhY2ggcGFpcmluZy5cbiAgICBwcml2YXRlIGxvYWRUYWJzKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgdGFicyB0aGF0IG5vIGxvbmdlciBoYXZlIGFuIGFzc29jaWF0ZWQgaGVhZGVyLlxuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gISF0aGlzLl90YWJIZWFkZXJzLmZpbmQodEggPT4gdEggPT09IHQuaGVhZGVyKSk7XG5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVyc1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgbG9hZGVkIGhlYWRlcnMgd2l0aCBhdHRhY2hlZCB0YWIgaW5zdGFuY2VzLlxuICAgICAgICAgICAgLmZpbHRlcih0SCA9PiAhdGhpcy50YWJzLmZpbmQodCA9PiB0LmhlYWRlciA9PT0gdEgpKVxuICAgICAgICAgICAgLmZvckVhY2godEggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl90YWJDb250ZW50cy5maW5kKHRDID0+IHRDLmlkID09PSB0SC5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3IgaWYgYW4gYXNzb2NpYXRlZCB0YWIgY29udGVudCBjYW5ub3QgYmUgZm91bmQgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgW3N1aVRhYkhlYWRlcl0gbXVzdCBoYXZlIGEgcmVsYXRlZCBbc3VpVGFiQ29udGVudF0uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YWIgaW5zdGFuY2UgZm9yIHRoaXMgaGVhZGVyICYgY29udGVudCBjb21iby5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKHRILCBjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBhbnkgZXh0ZXJuYWwgY2hhbmdlcyBpbiB0aGUgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZS4gRXh0ZXJuYWwgY2hhbmdlcyBhcmUgdHJpZ2dlcmVkIGJ5IHVzZXIgaW5wdXQuXG4gICAgICAgICAgICAgICAgdGFiLmhlYWRlci5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSGVhZGVyQWN0aXZlQ2hhbmdlZCh0YWIpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbmV3IGluc3RhbmNlIHRvIHRoZSBsaXN0IG9mIHRhYnMuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHRhYiBhbiBpbmRleCAod2hpY2ggZGVub3RlcyB0aGUgb3JkZXIgdGhleSBwaHlzaWNhbGx5IGFwcGVhciBpbikuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0SCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKTtcbiAgICAgICAgICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU29ydCB0aGUgdGFicyBieSB0aGVpciBpbmRleC5cbiAgICAgICAgdGhpcy50YWJzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVUYWIpIHsgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5vIGN1cnJlbnQgZXhpc3RpbmcgYWN0aXZlIHRhYnMuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBhY3RpdmF0ZSB0aGUgZmlyc3QgYXZhaWxhYmxlIHRhYi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVGaXJzdFRhYigpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRoaXMuYWN0aXZlVGFiKSkgeyAvLyBPJ3dpc2UgY2hlY2sgaWYgY3VycmVudCBhY3RpdmUgdGFiIGhhcyBiZWVuIGRlbGV0ZWQuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBmaW5kIHRoZSBjbG9zZXN0LlxuICAgICAgICAgICAgLy8gVXNlIGBzZXRUaW1lb3V0YCBhcyB0aGlzIGNhdXNlcyBhICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yIG8nd2lzZS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIodGhpcy5hY3RpdmVUYWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBFcnJvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRhYnMgaW4gdGhlIHRhYnNldC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgaGF2ZSBubyB0YWJzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZSBpcyBleHRlcm5hbGx5IGNoYW5nZWQuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBhY3RpdmF0ZWQsIGJ1dCB3YXMgbm90IHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICh0YWIuaXNBY3RpdmUgJiYgdGhpcy5hY3RpdmVUYWIgIT09IHRhYikge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb2YgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdCAhPT0gdGFiKS5mb3JFYWNoKHQgPT4gdC5pc0FjdGl2ZSA9IGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiB0byB0aGlzIG9uZS5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhYiBoYXMgYmVjb21lIGRlYWN0aXZhdGVkLCBidXQgd2FzIHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICghdGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiID09PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IHRhYiB0byBpdC5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgZmlyc3QgdGFiIGluIHRoZSBzZXQuXG4gICAgcHVibGljIGFjdGl2YXRlRmlyc3RUYWIoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGVzIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gYSBnaXZlbiBvbmUuXG4gICAgcHVibGljIGFjdGl2YXRlQ2xvc2VzdFRhYih0YWI6VGFiKTp2b2lkIHtcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGU6VGFiIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIGV4aXRlZCB0YWIncyBpbmRleCBpcyBoaWdoZXIgdGhhbiBhbGwgYXZhaWxhYmxlIHRhYnMsXG4gICAgICAgIGlmICh0YWIuaW5kZXggPj0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGxhc3QgdGFiLlxuICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1t0aGlzLnRhYnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGF0IGRpZG4ndCB3b3JrLCB0cnkgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgaWYgKCFuZXh0QXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFicy5maW5kKHQgPT4gdCA9PT0gdGFiKSkgeyAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiIG5vIGxvbmdlciBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpdCB3aXRoIGEgdGFiIGF0IHRoZSBzYW1lIGluZGV4LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGFiLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIE9yIGlmIHRoZSBleGl0ZWQgdGFiIHN0aWxsIGV4aXN0cyxcbiAgICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgdGFiIGltbWVkaWF0ZWx5IHRvIHRoZSBsZWZ0LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbTWF0aC5tYXgodGFiLmluZGV4IC0gMSwgMCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG93ZXZlciwgaWYgdGhlIGNob3NlbiB0YWIgaXMgZGlzYWJsZWQsXG4gICAgICAgIGlmIChuZXh0QXZhaWxhYmxlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gaXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIobmV4dEF2YWlsYWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IG5leHRBdmFpbGFibGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVGFic2V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJzZXRcIjtcbmltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVRhYnNldCxcbiAgICAgICAgU3VpVGFiSGVhZGVyLFxuICAgICAgICBTdWlUYWJDb250ZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVRhYnNldCxcbiAgICAgICAgU3VpVGFiSGVhZGVyLFxuICAgICAgICBTdWlUYWJDb250ZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vIENvbGxlY3Rpb25zXG5pbXBvcnQge1xuICAgIFN1aU1lc3NhZ2VNb2R1bGUsXG4gICAgU3VpUGFnaW5hdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9jb2xsZWN0aW9ucy9pbnRlcm5hbFwiO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQge1xuICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICBTdWlDaGVja2JveE1vZHVsZSxcbiAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICBTdWlQcm9ncmVzc01vZHVsZSxcbiAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgU3VpU2VhcmNoTW9kdWxlLFxuICAgIFN1aVNpZGViYXJNb2R1bGUsXG4gICAgU3VpVGFic01vZHVsZSxcbiAgICBTdWlTZWxlY3RNb2R1bGUsXG4gICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9tb2R1bGVzL2ludGVybmFsXCI7XG5cbi8vIEJlaGF2aW9yc1xuaW1wb3J0IHtcbiAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vYmVoYXZpb3JzL2ludGVybmFsXCI7XG5cbi8vIE1pc2NcbmltcG9ydCB7XG4gICAgU3VpVXRpbGl0eU1vZHVsZVxufSBmcm9tIFwiLi9taXNjL2ludGVybmFsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICAvLyBDb2xsZWN0aW9uc1xuICAgICAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgICAgICBTdWlQYWdpbmF0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIE1vZHVsZXNcbiAgICAgICAgU3VpQWNjb3JkaW9uTW9kdWxlLFxuICAgICAgICBTdWlDaGVja2JveE1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICAgICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFN1aU1vZGFsTW9kdWxlLFxuICAgICAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICAgICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgICAgIFN1aVJhdGluZ01vZHVsZSxcbiAgICAgICAgU3VpU2VhcmNoTW9kdWxlLFxuICAgICAgICBTdWlTZWxlY3RNb2R1bGUsXG4gICAgICAgIFN1aVNpZGViYXJNb2R1bGUsXG4gICAgICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gQmVoYXZpb3JzXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNaXNjXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIigoLyoqIEB0eXBlIHs/fSAqLyAoJGV4dGVuZCkpKS5kZWZhdWx0IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJmb3JtYXQiLCJpc1VBV2ViVmlld1tcImRlZmF1bHRcIl0iLCJib3dzZXIubW9iaWxlIiwiYm93c2VyLnRhYmxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sSUFBSSxHQUFpQjtJQUN2QixVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDM0g7UUFDRCxXQUFXLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7U0FDckY7UUFDRCxRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVO1NBQy9FO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztTQUNsRDtRQUNELGNBQWMsRUFBRTtZQUNaLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcs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