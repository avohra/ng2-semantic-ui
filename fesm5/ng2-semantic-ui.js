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
    /** @nocollapse */
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
        get: /**
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
        get: /**
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
        get: /**
         * @return {?}
         */
        function () {
            return this._queue[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "_queueLast", {
        get: /**
         * @return {?}
         */
        function () {
            return this._queue[this._queue.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} renderer
     * @return {?}
     */
    TransitionController.prototype.registerRenderer = /**
     * @param {?} renderer
     * @return {?}
     */
    function (renderer) {
        this._renderer = renderer;
        this.performTransition();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    TransitionController.prototype.registerElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this._element = element;
        this.performTransition();
    };
    /**
     * @param {?} changeDetector
     * @return {?}
     */
    TransitionController.prototype.registerChangeDetector = /**
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
    /**
     * @param {?} transition
     * @return {?}
     */
    TransitionController.prototype.finishTransition = /**
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
    /**
     * @param {?=} transition
     * @return {?}
     */
    TransitionController.prototype.stop = /**
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
    /**
     * @return {?}
     */
    TransitionController.prototype.stopAll = /**
     * @return {?}
     */
    function () {
        this.clearQueue();
        this.stop();
    };
    /**
     * @return {?}
     */
    TransitionController.prototype.clearQueue = /**
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
    /**
     * @param {?} transitionController
     * @return {?}
     */
    SuiTransition.prototype.setTransitionController = /**
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /**
     * @return {?}
     */
    SuiPagination.prototype.hasPrevious = /**
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
    /**
     * @return {?}
     */
    SuiPagination.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updatePages();
    };
    /**
     * @return {?}
     */
    SuiPagination.prototype.updatePages = /**
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
        get: /**
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
        get: /**
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
        get: /**
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
        set: /**
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
    /** @nocollapse */
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
// unsupported: template constraints.
/**
 * @template T
 */
var  
// unsupported: template constraints.
/**
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
// unsupported: template constraints.
/**
 * @template U, T
 */
var  
// unsupported: template constraints.
/**
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
                return /** @type {?} */ ((object));
            }
            /** @type {?} */
            var recursed;
            for (var i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = (/** @type {?} */ ((object)))[p[i]];
            }
            return /** @type {?} */ ((recursed));
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
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory(/** @type {?} */ (type));
        /** @type {?} */
        var injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
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
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    SuiComponentFactory.prototype.attachToView = /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    function (componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    };
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.attachToApplication = /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    };
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.detachFromApplication = /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    };
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    SuiComponentFactory.prototype.moveToElement = /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    function (componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    };
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    SuiComponentFactory.prototype.moveToDocumentBody = /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this.moveToElement(componentRef, /** @type {?} */ ((document.querySelector("body"))));
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
        var element = /** @type {?} */ (componentRef.location.nativeElement);
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
    SuiComponentFactory.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
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
 * @param {?} placement
 * @return {?}
 */
function placementToPopper(placement) {
    if (!placement || placement === PositioningPlacement.Auto) {
        return "auto";
    }
    var _a = __read(placement.split(" "), 2), direction = _a[0], alignment = _a[1];
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarView.prototype.setDate = /**
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
    /**
     * @return {?}
     */
    CalendarView.prototype.ngAfterViewInit = /**
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
        this._weekStartsOn = /** @type {?} */ (locale.firstDayOfWeek);
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
        this._locale = /** @type {?} */ (defaultLocale);
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
        this.marginal = /** @type {?} */ (interval) + 1;
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
    /** @nocollapse */
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
    Year: /** @type {?} */ ("year"),
    Month: /** @type {?} */ ("month"),
    Date: /** @type {?} */ ("date"),
    Datetime: /** @type {?} */ ("datetime"),
    Time: /** @type {?} */ ("time")
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
    /** @nocollapse */
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
    Hover: /** @type {?} */ ("hover"),
    Click: /** @type {?} */ ("click"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Focus: /** @type {?} */ ("focus"),
    Manual: /** @type {?} */ ("manual")
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
            // Whenever the anchor is set (which is when the popup is created), recreate the positioning service with the appropriate options.
            this.positioningService = new PositioningService(anchor, this._container.element, this.config.placement, ".dynamic.arrow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.positioningService) {
                return this.positioningService.actualPlacement.split(" ").shift();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "alignment", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.positioningService) {
                return this.positioningService.actualPlacement.split(" ").pop();
            }
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
                classes["inverted"] = true;
            }
            if (this.config.isBasic) {
                classes["basic"] = true;
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
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                /** @type {?} */
                var autoFocus = /** @type {?} */ (_this.elementRef.nativeElement.querySelector("[autofocus]"));
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(function () { return autoFocus.focus(); }, 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                }
            }));
            // Refresh the popup position after a brief delay to allow for browser processing time.
            this.positioningService.placement = this.config.placement;
            setTimeout(function () { return _this.positioningService.update(); });
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
                    template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"positioningService.actualPlacement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                    styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
                },] },
    ];
    /** @nocollapse */
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
        get: /**
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
        // Move the generated element to the body to avoid any positioning issues.
        this._componentFactory.moveToDocumentBody(this._componentRef);
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", function (e) {
            return _this.onDocumentClick(e);
        });
        // Start popup open transition.
        this.popup.open();
        /** @type {?} */
        var lifecycle = (/** @type {?} */ (this)).popupOnOpen;
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
        /** @type {?} */
        var lifecycle = (/** @type {?} */ (this)).popupOnClose;
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
            var target = /** @type {?} */ (e.target);
            // Close the popup if the click is outside of the popup element.
            if (!(/** @type {?} */ (this._element.nativeElement)).contains(target)) {
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
            this._contentComponentRef = this._componentFactory.createComponent(/** @type {?} */ (this._component));
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
                /** @type {?} */
                var dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
            }
            else {
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
                    template: "\n<div [class.content]=\"wrapContent\">\n    <div [class.center]=\"wrapContent\">\n        <ng-content></ng-content>\n    </div>\n</div>\n",
                    styles: ["\n:host.dimmer {\n    transition: none;\n}\n"]
                },] },
    ];
    /** @nocollapse */
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
/** @type {?} */
var DropdownAutoCloseType = {
    ItemClick: /** @type {?} */ ("itemClick"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Disabled: /** @type {?} */ ("disabled")
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
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.registerChild = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.isChildRegistered = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        return this === child || !!this.children
            .find(function (c) { return !!c.children
            .find(function (cChild) { return cChild.isChildRegistered(child); }); });
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        this.children.forEach(function (c) {
            c.parent = undefined;
        });
        this.children = [];
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    DropdownService.prototype.delay = /**
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
            /** @type {?} */
            var element = /** @type {?} */ (this.element.nativeElement);
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
    /** @nocollapse */
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
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false);
        _this.setTransitionController(_this._transitionController);
        _this.menuTransition = "slide down";
        _this.menuTransitionDuration = 200;
        _this.menuAutoSelectFirst = false;
        _this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
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
        get: /**
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
                var target = /** @type {?} */ (e.target);
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
        if (this._service.isOpen && !this._service.isNested) {
            /** @type {?} */
            var target = /** @type {?} */ (e.target);
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                e.preventDefault();
            }
            var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
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
    /**
     * @param {?} selectedItem
     * @param {?} keyCode
     * @return {?}
     */
    SuiDropdownMenu.prototype.updateSelection = /**
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
    /** @nocollapse */
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
    /** @nocollapse */
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
/**
 * @template T, U, V
 */
var  /**
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
        get: /**
         * @return {?}
         */
        function () {
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onApprove = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onApprove.subscribe(function (res) { return callback(res); });
        return this;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onDeny = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onDeny.subscribe(function (res) { return callback(res); });
        return this;
    };
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.approve = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.approve(result);
    };
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.deny = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.deny(result);
    };
    /**
     * @return {?}
     */
    ActiveModal.prototype.destroy = /**
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
    Mini: /** @type {?} */ ("mini"),
    Tiny: /** @type {?} */ ("tiny"),
    Small: /** @type {?} */ ("small"),
    Normal: /** @type {?} */ ("normal"),
    Large: /** @type {?} */ ("large")
};
/**
 * @template T, U, V
 */
var  /**
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
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
    return ModalConfig;
}());
/**
 * @template T, U, V
 */
var  /**
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
/**
 * @template T, U, V
 */
var  /**
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
/**
 * @template T, U
 */
var  /**
 * @template T, U
 */
ModalControls = /** @class */ (function () {
    function ModalControls(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.approve = /**
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
/**
 * @template T, U, V
 */
var  /**
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
/**
 * @abstract
 * @template T, U, V
 */
var  /**
 * @abstract
 * @template T, U, V
 */
ModalTemplate = /** @class */ (function (_super) {
    __extends(ModalTemplate, _super);
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
        get: /**
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
        this._originalContainer = this._element.nativeElement.parentNode; /** @type {?} */
        ((document.querySelector("body"))).appendChild(this._element.nativeElement);
        /** @type {?} */
        var templateElement = /** @type {?} */ (this.templateSibling.element.nativeElement);
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        var element = /** @type {?} */ (this._modalElement.nativeElement);
        setTimeout(function () {
            _this.updateScroll();
        });
        /** @type {?} */
        var autoFocus = /** @type {?} */ (element.querySelector("[autofocus]"));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(function () { return autoFocus.focus(); }, 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
        }
    };
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    SuiModal.prototype.loadConfig = /**
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
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    SuiModal.prototype.dismiss = /**
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
    /**
     * @return {?}
     */
    SuiModal.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    };
    /**
     * @return {?}
     */
    SuiModal.prototype.updateScroll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
        /** @type {?} */
        var margin = fontSize * 3.5;
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            /** @type {?} */
            var element = /** @type {?} */ (this._modalElement.nativeElement);
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
    /**
     * @param {?} e
     * @return {?}
     */
    SuiModal.prototype.onDocumentKeyUp = /**
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
                    template: "\n<!-- Page dimmer for modal background. -->\n<sui-dimmer class=\"page\"\n            [class.inverted]=\"isInverted\"\n            [(isDimmed)]=\"dimBackground\"\n            [isClickable]=\"false\"\n            [transitionDuration]=\"transitionDuration\"\n            [wrapContent]=\"false\"\n            (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scroll]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable && isFullScreen\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-dimmer>\n",
                    styles: ["\n.ui.dimmer {\n    overflow-y: auto;\n    display: flex !important;\n}\n\n/* avoid .scrolling as Semantic UI adds unwanted styles. */\n.scroll {\n    margin-top: 3.5rem !important;\n    margin-bottom: 3.5rem !important;\n    top: 0;\n}\n"]
                },] },
    ];
    /** @nocollapse */
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
        /** @type {?} */
        var componentRef = this._componentFactory.createComponent(SuiModal);
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
            /** @type {?} */
            var contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            /** @type {?} */
            var contentElement = /** @type {?} */ (contentComponentRef.location.nativeElement);
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
    /** @nocollapse */
    SuiModalService.ctorParameters = function () { return [
        { type: SuiComponentFactory }
    ]; };
    return SuiModalService;
}());

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
                        SuiModal
                    ],
                    exports: [
                        SuiModal
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQueryDelayed = /**
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
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQuery = /**
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
            /** @type {?} */
            var queryLookup = /** @type {?} */ (this._optionsLookup.call(undefined, this._query));
            queryLookup
                .then(function (results) {
                _this._isSearching = false;
                _this.updateResults(results);
                return callback();
            })
                .catch(function (error) {
                // Unset 'loading' state, and throw the returned error without updating the results.
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
    /**
     * @param {?} results
     * @return {?}
     */
    SearchService.prototype.updateResults = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    };
    /**
     * @param {?} initial
     * @return {?}
     */
    SearchService.prototype.initialLookup = /**
     * @param {?} initial
     * @return {?}
     */
    function (initial) {
        if (initial instanceof Array) {
            return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
        }
        return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
    };
    /**
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.toRegex = /**
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
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.highlightMatches = /**
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
    /**
     * @return {?}
     */
    SearchService.prototype.reset = /**
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
        get: /**
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
    /**
     * @param {?} result
     * @return {?}
     */
    SuiSearch.prototype.select = /**
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
    /**
     * @param {?} object
     * @return {?}
     */
    SuiSearch.prototype.readValue = /**
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
        get: /**
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
                return function (o) { return ((_this._optionFormatter))(o, _this.isSearchable ? _this.query : undefined); };
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
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.optionsUpdateHook = /**
     * @return {?}
     */
    function () { };
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.queryUpdateHook = /**
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
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.drawTemplate = /**
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
    /** @nocollapse */
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
                .map(function (v) { return ((_this.findOption(_this.searchService.options, v))); })
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
                    .map(function (v) { return ((_this.findOption(_this.searchService.options, v))); })
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
    SuiSelect.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SuiLocalizationService }
    ]; };
    SuiSelect.propDecorators = {
        _optionTemplateSibling: [{ type: ViewChild, args: ["optionTemplateSibling", { read: ViewContainerRef },] }],
        selectedOptionChange: [{ type: Output }],
        placeholder: [{ type: Input }]
    };
    return SuiSelect;
}(SuiSelectBase));
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
    /** @nocollapse */
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
    Overlay: /** @type {?} */ ("overlay"),
    Push: /** @type {?} */ ("push"),
    ScaleDown: /** @type {?} */ ("scale down"),
    Uncover: /** @type {?} */ ("uncover"),
    SlideAlong: /** @type {?} */ ("slide along"),
    SlideOut: /** @type {?} */ ("slide out")
};
/** @type {?} */
var SidebarDirection = {
    Left: /** @type {?} */ ("left"),
    Right: /** @type {?} */ ("right"),
    Top: /** @type {?} */ ("top"),
    Bottom: /** @type {?} */ ("bottom")
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
        get: /**
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
        get: /**
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
    /**
     * @param {?} active
     * @return {?}
     */
    SuiTabHeader.prototype.setActiveState = /**
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
    /** @nocollapse */
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
    /** @nocollapse */
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
        set: /**
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
    /**
     * @return {?}
     */
    SuiTabset.prototype.internalComponentsUpdated = /**
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
    /**
     * @return {?}
     */
    SuiTabset.prototype.loadTabs = /**
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
            /** @type {?} */
            var tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
            // Add the new instance to the list of tabs.
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
            // Check if there are no current existing active tabs.
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(function (t) { return t === _this.activeTab; })) {
            // O'wise check if current active tab has been deleted.
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.onHeaderActiveChanged = /**
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
    /**
     * @return {?}
     */
    SuiTabset.prototype.activateFirstTab = /**
     * @return {?}
     */
    function () {
        this.activeTab = this.tabs[0];
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.activateClosestTab = /**
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
                // When the exited tab no longer exists,
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else {
                // Or if the exited tab still exists,
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
    /** @nocollapse */
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
                        SuiMessageModule,
                        SuiPaginationModule,
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
                        SuiLocalizationModule,
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

export { SuiModule, SuiLocalizationModule, SuiLocalizationService, SuiMessageModule, SuiPaginationModule, SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, DatepickerMode, SuiDimmerModule, SuiDropdownModule, DropdownAutoCloseType, SuiModalModule, SuiModalService, Modal as SuiModal, ModalControls, ActiveModal as SuiActiveModal, ModalConfig, TemplateModalConfig, ComponentModalConfig, ModalTemplate, ModalSize, SuiPopupModule, SuiPopupConfig, PopupTrigger, PositioningPlacement as PopupPlacement, SuiProgressModule, SuiRatingModule, SuiSearchModule, SearchService, SuiSelectModule, SuiSidebarModule, SidebarDirection, SidebarTransition, SuiTabsModule, SuiTransitionModule, SuiTransition, Transition, TransitionDirection, TransitionController, SuiUtilityModule, SuiLocalizationModule as ɵb, SuiLocalizationService as ɵa, SuiMessage as ɵc, SuiMessageModule as ɵd, SuiPagination as ɵe, SuiPaginationModule as ɵf, CustomValidator as ɵbs, customValidatorFactory as ɵbt, CustomValueAccessor as ɵbu, customValueAccessorFactory as ɵbv, DatePrecision as ɵbw, SuiComponentFactory as ɵbx, SuiUtilityModule as ɵby, SuiAccordionModule as ɵi, SuiAccordion as ɵh, SuiAccordionPanel as ɵg, SuiCheckboxModule as ɵo, SuiCheckbox as ɵj, SuiCheckboxValueAccessor as ɵk, SuiRadio as ɵl, SuiRadioValueAccessor as ɵm, SuiRadioManager as ɵn, SuiCollapseModule as ɵq, SuiCollapse as ɵp, SuiCalendarViewTitle as ɵr, SuiDatepicker as ɵs, SuiDatepickerModule as ɵbf, SuiCalendarItem as ɵt, SuiDatepickerDirective as ɵu, SuiDatepickerDirectiveValidator as ɵw, SuiDatepickerDirectiveValueAccessor as ɵv, SuiDatepickerInputDirective as ɵx, CalendarRangeService as ɵy, CalendarView as ɵz, SuiCalendarDateView as ɵba, SuiCalendarHourView as ɵbb, SuiCalendarMinuteView as ɵbc, SuiCalendarMonthView as ɵbd, SuiCalendarYearView as ɵbe, SuiDimmer as ɵbg, SuiDimmerModule as ɵbh, SuiDropdown as ɵbk, SuiDropdownMenu as ɵbj, SuiDropdownMenuItem as ɵbi, SuiDropdownModule as ɵbl, ModalConfig as ɵbm, ModalControls as ɵbn, ModalTemplate as ɵbo, SuiModal as ɵbp, SuiModalModule as ɵbr, SuiModalService as ɵbq, SuiPopupComponentController as ɵbz, PopupConfig as ɵca, SuiPopupController as ɵcb, SuiPopupTemplateController as ɵcc, SuiPopup as ɵce, SuiPopupArrow as ɵcd, SuiPopupDirective as ɵcf, SuiPopupModule as ɵch, SuiPopupConfig as ɵcg, SuiProgress as ɵci, SuiProgressModule as ɵcj, SuiRating as ɵck, SuiRatingValueAccessor as ɵcl, SuiRatingModule as ɵcm, SuiSearch as ɵco, SuiSearchResult as ɵcn, SuiSearchModule as ɵcp, SuiSelectBase as ɵcq, SuiMultiSelect as ɵcs, SuiMultiSelectValueAccessor as ɵct, SuiMultiSelectLabel as ɵcr, SuiSelect as ɵcv, SuiSelectValueAccessor as ɵcw, SuiSelectOption as ɵcu, SuiSelectSearch as ɵcx, SuiSelectModule as ɵcy, SuiSidebar as ɵdb, SuiSidebarContainer as ɵcz, SuiSidebarSibling as ɵda, SuiSidebarModule as ɵdc, SuiTabset as ɵdd, SuiTabContent as ɵde, SuiTabHeader as ɵdf, SuiTabsModule as ɵdg, SuiTransition as ɵdh, SuiTransitionModule as ɵdi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3MudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3Byb2dyZXNzL3Byb2dyZXNzLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL2NvbXBvbmVudHMvcmF0aW5nLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9yYXRpbmcvcmF0aW5nLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY2xhc3Nlcy9zZWxlY3QtYmFzZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL3NlbGVjdC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItc2libGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItY29udGFpbmVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NpZGViYXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2NsYXNzZXMvdGFiLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2RpcmVjdGl2ZXMvdGFiLWhlYWRlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1jb250ZW50LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2NvbXBvbmVudHMvdGFic2V0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL3RhYi5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9zdWkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbHVlc1wiO1xuXG5jb25zdCBlbkdCOklMb2NhbGVWYWx1ZXMgPSB7XG4gICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBtb250aHM6IFtcbiAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuICAgICAgICBdLFxuICAgICAgICBtb250aHNTaG9ydDogW1xuICAgICAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5czogW1xuICAgICAgICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXNOYXJyb3c6IFtcbiAgICAgICAgICAgIFwiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXG4gICAgICAgIF0sXG4gICAgICAgIHRpbWVzT2ZEYXk6IFtcbiAgICAgICAgICAgIFwiYS5tLlwiLCBcInAubS5cIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5VXBwZXJjYXNlOiBbXG4gICAgICAgICAgICBcIkFNXCIsIFwiUE1cIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5TG93ZXJjYXNlOiBbXG4gICAgICAgICAgICBcImFtXCIsIFwicG1cIlxuICAgICAgICBdLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICB0aW1lOiBcImg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZXRpbWU6IFwiRCBNTU1NIFlZWVkgaDptbSBBXCIsXG4gICAgICAgICAgICBkYXRlOiBcIkQgTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICBtb250aDogXCJNTU1NIFlZWVlcIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgIG5vUmVzdWx0czoge1xuICAgICAgICAgICAgaGVhZGVyOiBcIk5vIFJlc3VsdHNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzZWFyY2ggcmV0dXJuZWQgbm8gcmVzdWx0cy5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgbm9SZXN1bHRzTWVzc2FnZTogXCJObyByZXN1bHRzXCIsXG4gICAgICAgIHNpbmdsZToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IG9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIG11bHRpOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QuLi5cIixcbiAgICAgICAgICAgIG1heFNlbGVjdGVkTWVzc2FnZTogXCJNYXggI3ttYXh9IHNlbGVjdGlvbnNcIixcbiAgICAgICAgICAgIHNlbGVjdGVkTWVzc2FnZTogXCIje2NvdW50fSBzZWxlY3Rpb25zXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuR0I7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUxvY2FsZVZhbHVlcywgSVBhcnRpYWxMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tIFwiLi4vbG9jYWxlcy9pbnRlcmZhY2VzL3ZhbHVlc1wiO1xuaW1wb3J0IGVuR0IgZnJvbSBcIi4uL2xvY2FsZXMvZW4tR0JcIjtcbmltcG9ydCAqIGFzICRleHRlbmQgZnJvbSBcImV4dGVuZFwiO1xuXG5mdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOlQpOlQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiBkZWVwRXh0ZW5kPFQsIFU+KHRhcmdldDpULCBzb3VyY2U6VSk6VCAmIFUge1xuICAgIC8vIFJvbGx1cC4uLlxuICAgIGNvbnN0IGV4dGVuZCA9ICgkZXh0ZW5kIGFzIGFueSkuZGVmYXVsdCB8fCAkZXh0ZW5kO1xuICAgIHJldHVybiBleHRlbmQodHJ1ZSwgdGFyZ2V0LCBzb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBsYW5nKGxhbmd1YWdlOnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiLVwiLCBcIlwiKTtcbn1cblxuaW50ZXJmYWNlIElMb2NhbGl6YXRpb25WYWx1ZXNDb250YWluZXIge1xuICAgIFtuYW1lOnN0cmluZ106SVBhcnRpYWxMb2NhbGVWYWx1ZXM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9sYW5ndWFnZTpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja1ZhbHVlczpJTG9jYWxlVmFsdWVzO1xuICAgIHByaXZhdGUgX3ZhbHVlczpJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyO1xuXG4gICAgcHVibGljIGdldCBsYW5ndWFnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYW5ndWFnZVVwZGF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVmFsdWVzID0gZW5HQjtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gXCJlbi1HQlwiO1xuICAgICAgICB0aGlzLmxvYWQoXCJlbi1HQlwiLCBlbkdCKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgaWYgKGxhbmcodGhpcy5fbGFuZ3VhZ2UpICE9PSBsYW5nKGxhbmd1YWdlKSkge1xuICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGxhbmd1YWdlOnN0cmluZyA9IHRoaXMubGFuZ3VhZ2UpOklMb2NhbGVWYWx1ZXMge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkZWVwQ2xvbmUodGhpcy5fZmFsbGJhY2tWYWx1ZXMpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTG9jYWxlICR7bGFuZ3VhZ2V9IGlzIG5vdCBsb2FkZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBkZWVwRXh0ZW5kKHZhbHVlcywgdGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSk7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGU8VCBleHRlbmRzIGtleW9mIElMb2NhbGVWYWx1ZXM+KFxuICAgICAgICB2YWx1ZXM6SUxvY2FsZVZhbHVlc1tUXSxcbiAgICAgICAgb3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SUxvY2FsZVZhbHVlc1tUXT5cbiAgICApOklMb2NhbGVWYWx1ZXNbVF0ge1xuICAgICAgICByZXR1cm4gZGVlcEV4dGVuZChkZWVwQ2xvbmUodmFsdWVzKSwgb3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChsYW5ndWFnZTpzdHJpbmcsIHZhbHVlczpJUGFydGlhbExvY2FsZVZhbHVlcyk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0gPSBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGF0Y2gobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICBkZWVwRXh0ZW5kKHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0sIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVycG9sYXRlKHZhbHVlOnN0cmluZywgdmFyaWFibGVzOltzdHJpbmcsIHN0cmluZ11bXSk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcy5yZWR1Y2UoKHMsIFtrLCB2XSkgPT4gcy5yZXBsYWNlKG5ldyBSZWdFeHAoYCN7JHtrfX1gLCBcImdcIiksIHYpLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtTdWlMb2NhbGl6YXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUge31cbiIsIi8vIFBvc3NpYmxlIGRpcmVjdGlvbnMgZm9yIGEgdHJhbnNpdGlvbi5cbmV4cG9ydCBlbnVtIFRyYW5zaXRpb25EaXJlY3Rpb24ge1xuICAgIEluLFxuICAgIE91dCxcbiAgICBFaXRoZXIsXG4gICAgU3RhdGljXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTpzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uO1xuXG4gICAgLy8gQ29udmVydHMgVHJhbnNpdGlvbkRpcmVjdGlvbiB0byBjbGFzcyBuYW1lLlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uQ2xhc3MoKTpzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uSW46IHJldHVybiBcImluXCI7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0OiByZXR1cm4gXCJvdXRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgaW5kaXZpZHVhbCBjbGFzc2VzIGZvciB0aGUgdHJhbnNpdGlvbiwgZS5nLiBcImZhZGUgb3V0XCIgLT4gW1wiZmFkZVwiLCBcIm91dFwiXS5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY2xhc3NlczpzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBvbkNvbXBsZXRlOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjpudW1iZXIgPSAyNTAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOlRyYW5zaXRpb25EaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOigoKSA9PiB2b2lkKSA9ICgpID0+IHt9KSB7XG5cbiAgICAgICAgdGhpcy50eXBlID0gbmFtZTtcblxuICAgICAgICAvLyBXZSBzZXQgYSBtaW5pbXVtIGR1cmF0aW9uIG9mIDFtcywgdG8gZ2l2ZSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbW1lZGlhdGUgdHJhbnNpdGlvblxuICAgICAgICAvLyB3aGlsc3QgYWxsb3dpbmcgcG9zaXRpb25pbmcgY2FsY3VsYXRpb25zIHRvIGhhcHBlbiB3aXRob3V0IGEgdmlzaWJsZSBmbGlja2VyLlxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIDEpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnR5cGUuc3BsaXQoXCIgXCIpO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25Db250cm9sbGVyIHtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjI7XG5cbiAgICBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZjtcblxuICAgIC8vIFVzZWQgdG8gZGVsYXkgYW5pbWF0aW9ucyB1bnRpbCB3ZSBoYXZlIGFuIGVsZW1lbnQgdG8gYW5pbWF0ZS5cbiAgICBwcml2YXRlIGdldCBfaXNSZWFkeSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2VsZW1lbnQgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NoYW5nZURldGVjdG9yICE9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSAnZGlzcGxheScgc3R5bGUgd2hlbiB2aXNpYmxlLlxuICAgIHByaXZhdGUgX2Rpc3BsYXk6c3RyaW5nO1xuXG4gICAgLy8gU3RvcmVzIHF1ZXVlZCB0cmFuc2l0aW9ucy5cbiAgICBwcml2YXRlIF9xdWV1ZTpUcmFuc2l0aW9uW107XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZzpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBbmltYXRpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSwgYW5kIHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcgb3V0LlxuICAgIHByaXZhdGUgX2lzVmlzaWJsZTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBoaWRkZW4sIGFuZCBub3Qgd2hpbGUgaXQgaXMgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIF9pc0hpZGRlbjpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc0hpZGRlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIaWRkZW47XG4gICAgfVxuXG4gICAgLy8gR2V0cyB0aGUgZmlyc3QgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUuXG4gICAgcHJpdmF0ZSBnZXQgX3F1ZXVlRmlyc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlWzBdO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGxhc3QgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUuXG4gICAgcHJpdmF0ZSBnZXQgX3F1ZXVlTGFzdCgpOlRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fcXVldWUubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBzZXRUaW1lb3V0IHBvaW50ZXIgZm9yIGNhbmNlbGxpbmcgdGhlIGFuaW1hdGlvbiBjYWxsYmFjay5cbiAgICBwcml2YXRlIF9hbmltYXRpb25UaW1lb3V0Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGlzSW5pdGlhbGx5VmlzaWJsZTpib29sZWFuID0gdHJ1ZSwgZGlzcGxheTpzdHJpbmcgPSBcImJsb2NrXCIpIHtcbiAgICAgICAgLy8gaXNJbml0aWFsbHlWaXNpYmxlIHNldHMgd2hldGhlciB0aGUgZWxlbWVudCBzdGFydHMgb3V0IHZpc2libGUuXG4gICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGlzSW5pdGlhbGx5VmlzaWJsZTtcbiAgICAgICAgdGhpcy5faXNIaWRkZW4gPSAhdGhpcy5faXNWaXNpYmxlO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgcmVuZGVyZXIgdG8gYmUgdXNlZCBmb3IgYW5pbWF0aW5nLlxuICAgIHB1YmxpYyByZWdpc3RlclJlbmRlcmVyKHJlbmRlcmVyOlJlbmRlcmVyMik6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBlbGVtZW50IHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbnMgb24uXG4gICAgcHVibGljIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50OkVsZW1lbnRSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIGNoYW5nZSBkZXRlY3RvciB0byBkZXRlY3QgY2hhbmdlcyB3aGVuIHVzaW5nIENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaC5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGFuZ2VEZXRlY3RvcihjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yID0gY2hhbmdlRGV0ZWN0b3I7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5pbWF0ZSh0cmFuc2l0aW9uOlRyYW5zaXRpb24pOnZvaWQge1xuICAgICAgICAvLyBUZXN0IGlmIHRyYW5zaXRpb24gaXMgb25lIG9mIHRoZSBsaXN0IHRoYXQgZG9lc24ndCBjaGFuZ2UgdGhlIHZpc2libGUgc3RhdGUuXG4gICAgICAgIC8vIFNob3VsZCB0aGVzZSBldmVudHVhbGx5IGJlY29tZSBjbGFzc2VzP1xuICAgICAgICBjb25zdCBpc0RpcmVjdGlvbmxlc3MgPSBbXCJqaWdnbGVcIiwgXCJmbGFzaFwiLCBcInNoYWtlXCIsIFwicHVsc2VcIiwgXCJ0YWRhXCIsIFwiYm91bmNlXCJdLmluZGV4T2YodHJhbnNpdGlvbi50eXBlKSAhPT0gLTE7XG4gICAgICAgIGlmIChpc0RpcmVjdGlvbmxlc3MpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5TdGF0aWM7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT0gdW5kZWZpbmVkIHx8IHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcikge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIG9wcG9zaXRlIG9mIHRoZSBjdXJyZW50IHZpc2libGUgc3RhdGUgYXV0b21hdGljYWxseSBpZiBub3Qgc2V0LCBvciBzZXQgdG8gZWl0aGVyIGRpcmVjdGlvbi5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gdGhpcy5faXNWaXNpYmxlID8gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQgOiBUcmFuc2l0aW9uRGlyZWN0aW9uLkluO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlIGFscmVhZHksIHNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoYXQgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcXVldWVMYXN0LmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcXVldWVMYXN0LmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIHRoZSB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBiZWZvcmUgYXR0ZW1wdGluZyB0byBwZXJmb3JtIGl0LlxuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHRyYW5zaXRpb24pO1xuXG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1UcmFuc2l0aW9uKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faXNSZWFkeSB8fCB0aGlzLl9pc0FuaW1hdGluZyB8fCAhdGhpcy5fcXVldWVGaXJzdCkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdHJhbnNpdGlvbiB1bnRpbCB3ZSBhcmUgcmVhZHksIG9yIGlmIHdlIGFyZSBhbmltYXRpbmcsIG9yIGlmIHRoZXJlIGFyZW4ndCBhbnkgdHJhbnNpdGlvbnMgaW4gdGhlIHF1ZXVlLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLl9xdWV1ZUZpcnN0O1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBmb3IgdHJhbnNpdGlvbmluZy5cbiAgICAgICAgdHJhbnNpdGlvbi5jbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBjKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpbmdgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbi5kaXJlY3Rpb25DbGFzcyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBTZW1hbnRpYyBVSSBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmAsIGAke3RyYW5zaXRpb24uZHVyYXRpb259bXNgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudCwgYGRpc3BsYXlgLCB0aGlzLl9kaXNwbGF5KTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgIC8vIFVuc2V0IGhpZGRlbiBpZiB3ZSBhcmUgdHJhbnNpdGlvbmluZyBpbi5cbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IHRoZSBsZW5ndGggb2YgdGhlIGFuaW1hdGlvbiBiZWZvcmUgY2FsbGluZyB0aGUgY29tcGxldGUgY2FsbGJhY2suXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbiksIHRyYW5zaXRpb24uZHVyYXRpb24pO1xuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuIGEgdHJhbnNpdGlvbiBoYXMgY29tcGxldGVkLlxuICAgIHByaXZhdGUgZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uOlRyYW5zaXRpb24pOnZvaWQge1xuICAgICAgICAvLyBVbnNldCB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyAmIHN0eWxlcyBmb3IgdHJhbnNpdGlvbmluZy5cbiAgICAgICAgdHJhbnNpdGlvbi5jbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBjKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpbmdgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbi5kaXJlY3Rpb25DbGFzcyk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudCwgYGFuaW1hdGlvbkR1cmF0aW9uYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGp1c3QgYW5pbWF0ZWQgaW4sIHdlIGFyZSBub3cgdmlzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRyYW5zaXRpb25lZCBvdXQsIHdlIHNob3VsZCBiZSBpbnZpc2libGUgYW5kIGhpZGRlbi5cbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24ub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgdXNlci1kZWZpbmVkIHRyYW5zaXRpb24gY2FsbGJhY2suXG4gICAgICAgICAgICB0cmFuc2l0aW9uLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBxdWV1ZS5cbiAgICAgICAgdGhpcy5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICAvLyBJbW1lZGlhdGVseSBhdHRlbXB0IHRvIHBlcmZvcm0gYW5vdGhlciB0cmFuc2l0aW9uLlxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcHMgdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiwgbGVhdmVzIHRoZSByZXN0IG9mIHRoZSBxdWV1ZSBpbnRhY3QuXG4gICAgcHVibGljIHN0b3AodHJhbnNpdGlvbjpUcmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdCk6dm9pZCB7XG4gICAgICAgIGlmICghdHJhbnNpdGlvbiB8fCAhdGhpcy5faXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGFuZCBlbXB0aWVzIHRoZSBxdWV1ZS5cbiAgICBwdWJsaWMgc3RvcEFsbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyUXVldWUoKTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gRW1wdGllcyB0aGUgdHJhbnNpdGlvbiBxdWV1ZSBidXQgY2FycmllcyBvbiB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24uXG4gICAgcHVibGljIGNsZWFyUXVldWUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlID0gW3RoaXMuX3F1ZXVlRmlyc3RdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRyYW5zaXRpb25dXCIsXG4gICAgZXhwb3J0QXM6IFwidHJhbnNpdGlvblwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb24ge1xuICAgIC8vIEVhY2ggdHJhbnNpdGlvbiBtdXN0IGhhdmUgYSBjb250cm9sbGVyIGFzc29jaWF0ZWQgdGhhdCBkaXNwYXRjaGVzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN1aVRyYW5zaXRpb24odEM6VHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0cmFuc2l0aW9uIGNvbnRyb2xsZXIgKGUuZy4gJzxkaXYgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj48L2Rpdj4nKS5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0Qyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzVmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGlkZGVuXCIpXG4gICAgcHVibGljIGdldCBpc0hpZGRlbigpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXIuaXNIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICAvLyBJbml0aWFsaXNlcyB0aGUgY29udHJvbGxlciB3aXRoIHRoZSBpbmplY3RlZCByZW5kZXJlciBhbmQgZWxlbWVudFJlZi5cbiAgICBwdWJsaWMgc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXIpOnZvaWQge1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gdHJhbnNpdGlvbkNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJSZW5kZXJlcih0aGlzLl9yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJFbGVtZW50KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJDaGFuZ2VEZXRlY3Rvcih0aGlzLl9jaGFuZ2VEZXRlY3Rvcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdHJhbnNpdGlvblwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVRyYW5zaXRpb25cbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpVHJhbnNpdGlvbk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2Uge1xuICAgIGRpc21pc3MoKTp2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbWVzc2FnZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgbWVzc2FnZSB7eyBjbGFzcyB9fVwiICpuZ0lmPVwiIWlzRGlzbWlzc2VkXCIgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzRGlzbWlzc2FibGVcIiAoY2xpY2spPVwiZGlzbWlzcygpXCI+PC9pPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIENTUyBCdWcgKi9cbi51aS5pY29uLnZpc2libGUubWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTWVzc2FnZSBpbXBsZW1lbnRzIElNZXNzYWdlIHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc21pc3NhYmxlOmJvb2xlYW47XG5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc1wiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+O1xuXG4gICAgcHVibGljIGlzRGlzbWlzc2VkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBjbGFzczpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Rpc21pc3NhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJmYWRlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMzAwO1xuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNtaXNzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KHRoaXMpO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1lc3NhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lc3NhZ2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpTWVzc2FnZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTWVzc2FnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcGFnaW5hdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PTFcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlLTEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNQcmV2aW91cygpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiAqbmdJZj1cInBhZ2VzWzBdICE9PSAxXCI+XG4gICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbMF0gPiAyXCI+Li4uPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIGNsYXNzPVwiaXRlbVwiIFtjbGFzcy5hY3RpdmVdPVwicD09PXBhZ2VcIiAoY2xpY2spPVwic2V0UGFnZShwKVwiPlxuICAgIHt7IHAgfX1cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gPCBwYWdlQ291bnQgLSAxXCI+Li4uPC9hPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdICE9PSBwYWdlQ291bnRcIj5cbiAgICAgICAgPHNwYW4+e3sgcGFnZUNvdW50IH19PC9zcGFuPlxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlKzEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNOZXh0KClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PXBhZ2VDb3VudFwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCAuaXRlbSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdpbmF0aW9uXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICAvLyBQdWJsaWMgbWVtYmVyc1xuICAgIHB1YmxpYyBwYWdlQ291bnQ6bnVtYmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICAvLyBQcml2YXRlIG1lbWJlcnNcbiAgICBwcml2YXRlIF9tYXhTaXplPzpudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvblNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2U6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2VzOm51bWJlcltdO1xuICAgIHByaXZhdGUgX2hhc05hdmlnYXRpb25MaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heFNpemUoKTpudW1iZXJ8dW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhTaXplKHZhbHVlOm51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhTaXplID0gKHZhbHVlICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgMSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGFnZVNpemU6bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb25TaXplKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25TaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sbGVjdGlvblNpemUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TaXplID0gTWF0aC5tYXgodmFsdWUsIDApO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTmF2aWdhdGlvbkxpbmtzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLl9tYXhTaXplIHx8IHRoaXMucGFnZUNvdW50O1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzIHx8IG1heFNpemUgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc05hdmlnYXRpb25MaW5rcyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0JvdW5kYXJ5TGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNhblJvdGF0ZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzRWxsaXBzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYWdlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLnNldFBhZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFnZXMoKTpudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xuICAgICAgICB0aGlzLl9wYWdlID0gMTtcbiAgICAgICAgdGhpcy5fcGFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAxO1xuICAgICAgICB0aGlzLmhhc05hdmlnYXRpb25MaW5rcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQm91bmRhcnlMaW5rcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhblJvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0VsbGlwc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBoYXNQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlID4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2UobmV3UGFnZTpudW1iZXIpOnZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZTpudW1iZXIgPSAoTnVtYmVyLmlzSW50ZWdlcihuZXdQYWdlKSkgPyBNYXRoLm1pbihNYXRoLm1heChuZXdQYWdlLCAxKSwgdGhpcy5wYWdlQ291bnQpIDogMTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpZmVjeWNsZSBob29rc1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcblxuICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLmFwcGx5UGFnaW5hdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX3BhZ2VzID0gQXJyYXk8bnVtYmVyPihlbmQgLSBzdGFydClcbiAgICAgICAgICAgIC5maWxsKHN0YXJ0ICsgMSlcbiAgICAgICAgICAgIC5tYXAoKHMsIGkpID0+IHMgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5UGFnaW5hdGlvbigpOltudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gKHRoaXMubWF4U2l6ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5taW4odGhpcy5tYXhTaXplLCB0aGlzLnBhZ2VDb3VudCkgOiB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5jZWlsKHRoaXMucGFnZSAvIG1heFNpemUpIC0gMTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGlmICh0aGlzLmNhblJvdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE9mZnNldCA9IE1hdGguZmxvb3IobWF4U2l6ZSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRPZmZzZXQgPSBtYXhTaXplICUgMiA9PT0gMCA/IGxlZnRPZmZzZXQgLSAxIDogbGVmdE9mZnNldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8PSBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgZW5kID0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlQ291bnQgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2VDb3VudCAtIG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IHBhZ2UgKiBtYXhTaXplO1xuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBtYXhTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtzdGFydCwgTWF0aC5taW4oZW5kLCB0aGlzLnBhZ2VDb3VudCldO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU3VpUGFnaW5hdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTdWlQYWdpbmF0aW9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTdWlQYWdpbmF0aW9uXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uLXBhbmVsXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQWNjb3JkaW9uUGFuZWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBUaXRsZSAtLT5cbjxkaXYgY2xhc3M9XCJ0aXRsZVwiIFtjbGFzcy5hY3RpdmVdPVwiaXNPcGVuXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCIgPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjwhLS0gQ29udGVudCAtLT5cbjxkaXYgW3N1aUNvbGxhcHNlXT1cIiFpc09wZW5cIiBbY29sbGFwc2VEdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtjbGFzcy5hY3RpdmVdPVwiaXNPcGVuXCIgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIE1hbnVhbCBzdHlsZSBhcyBTZW1hbnRpYyBVSSByZWxpZXMgb24gPiBzZWxlY3RvciAqL1xuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IC41ZW0gMCAxZW07XG59XG5cbi8qIEFub3RoZXIgPiBzZWxlY3RvciBmaXggKi9cbjpob3N0OmZpcnN0LWNoaWxkIC50aXRsZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblBhbmVsIHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfaXNPcGVuOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIGJvb2xlYW4gKGZpeGVzIGZhbHNlICE9IHVuZGVmaW5lZClcbiAgICAgICAgY29uc3QgaXNPcGVuID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoaXNPcGVuICE9PSB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gaXNPcGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmIHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgb3BlbmluZyB0aGlzIHBhbmVsLCB3ZSBtdXN0IGNsb3NlIHRoZSBvdGhlciBvbmVzLlxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIGN1cnJlbnQgYW5pbWF0aW9ucywgYW5kIGZhZGUgdGhlIGNvbnRlbnRzLiBUaGUgZGlyZWN0aW9uIGlzIGF1dG9tYXRpYy5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbigpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS50cmFuc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiZmFkZVwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkR1cmF0aW9uKCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc2VydmljZSBkZWZpbmVkIHRyYW5zaXRpb24gZHVyYXRpb24uXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV2ZXJ0IHRvIGluc3RhbnRhbmVvdXMgaWYgdGhlIHNlcnZpY2UgaXMgbm90IHlldCBsb2FkZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc09wZW5DaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi1wYW5lbFwiO1xuXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uU2VydmljZSB7XG4gICAgcHVibGljIGNsb3NlT3RoZXJzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgcGFuZWxzOlN1aUFjY29yZGlvblBhbmVsW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbG9zZU90aGVycyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJmYWRlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMucGFuZWxzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBhbmVsKHBhbmVsOlN1aUFjY29yZGlvblBhbmVsKTp2b2lkIHtcbiAgICAgICAgcGFuZWwuc2VydmljZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucGFuZWxzLnB1c2gocGFuZWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZU90aGVyUGFuZWxzKHBhbmVsOlN1aUFjY29yZGlvblBhbmVsKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlT3RoZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAgIT09IHBhbmVsKSB7XG4gICAgICAgICAgICAgICAgcC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vYWNjb3JkaW9uLXBhbmVsXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1hY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIGdlbmVyYWwgc3R5bGluZyBpc3N1ZXMgKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRml4IGZvciBzdHlsZWQgYm9yZGVyIGlzc3VlICovXG46aG9zdC5zdHlsZWQgc3VpLWFjY29yZGlvbi1wYW5lbDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmVcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWNjb3JkaW9uXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjbG9zZU90aGVycygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS5jbG9zZU90aGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNsb3NlT3RoZXJzKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS5jbG9zZU90aGVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3NlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpQWNjb3JkaW9uUGFuZWwpXG4gICAgcHJvdGVjdGVkIF9wYW5lbHM6UXVlcnlMaXN0PFN1aUFjY29yZGlvblBhbmVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBBY2NvcmRpb24gc2VydmljZSBpcyB1bmlxdWUgdG8gZWFjaCBzZXQgb2YgcGFuZWxzLlxuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gbmV3IFN1aUFjY29yZGlvblNlcnZpY2UoKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbHMoKTtcblxuICAgICAgICAvLyBSZWNvbm5lY3QgcGFuZWxzIGFmdGVyIHRoZXkgaGF2ZSB1cGRhdGVkLlxuICAgICAgICB0aGlzLl9wYW5lbHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVQYW5lbHMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhbmVscygpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYW5lbHMuZm9yRWFjaChwID0+IHRoaXMuX3NlcnZpY2UuYWRkUGFuZWwocCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpQ29sbGFwc2VdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ29sbGFwc2Uge1xuICAgIC8vIFNldCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBvcGVuLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5leHBhbmRlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0V4cGFuZGVkOmJvb2xlYW47XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgY2xvc2VkLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2VkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgYW5pbWF0aW5nLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNvbGxhcHNpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2luZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDb2xsYXBzaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzQ29sbGFwc2luZzpib29sZWFuO1xuXG4gICAgLy8gRmxhZyB0aGF0IGlzIGluaXRpYWxseSB0cnVlLCB0byBtYWtlIHRoZSAxc3QgYW5pbWF0aW9uIGluc3RhbnRhbmVvdXMuXG4gICAgcHJpdmF0ZSBfcHJpc3RpbmU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzdWlDb2xsYXBzZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgY29sbGFwc2UsIGB0cnVlYCBpcyBjb2xsYXBzZWQuXG4gICAgcHVibGljIHNldCBzdWlDb2xsYXBzZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbGxhcHNlRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgX2FuaW1hdGlvbkR1cmF0aW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaXN0aW5lID8gMCA6IHRoaXMuY29sbGFwc2VEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFuaW1hdGlvbiBkdXJhdGlvbiBpcyAzNTBtcyBieSBkZWZhdWx0LlxuICAgICAgICB0aGlzLmNvbGxhcHNlRHVyYXRpb24gPSAzNTA7XG5cbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRm9yY2libHkgaGlkZSB0aGUgb3ZlcmZsb3cgc28gdGhhdCBjb250ZW50IGlzIG5vdCB2aXNpYmxlIHBhc3QgdGhlIGJvdW5kYXJpZXMgb2YgaXRzIGNvbnRhaW5lci5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBzY3JvbGwgaGVpZ2h0IHRvIDAuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCAwLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgaG9zdCBlbGVtZW50IGZyb20gaXRzIG9mZnNldCBoZWlnaHQgdG8gaXRzIHNjcm9sbCBoZWlnaHQuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCB0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG92ZXJmbG93IG92ZXJyaWRlIHRvIGVuYWJsZSB1c2VyIHN0eWxpbmcgb25jZSBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiKTtcblxuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbmltYXRlKHN0YXJ0SGVpZ2h0Om51bWJlciwgZW5kSGVpZ2h0Om51bWJlciwgcmVtb3ZlT25Db21wbGV0ZTpib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodEZyYW1lcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtzdGFydEhlaWdodH1weGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZW5kSGVpZ2h0fXB4YFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChyZW1vdmVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYGF1dG9gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGNvbGxhcHNlIHVzaW5nIHRoZSB3ZWIgYW5pbWF0aW9ucyBBUEkuXG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgICAgIGhlaWdodEZyYW1lcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGFuaW1hdGlvbiBvbiAxc3QgY29sbGFwc2UgLyBleHBhbnNpb24uXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJvdGhcIlxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLl9wcmlzdGluZSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHByaXN0aW5lIGZsYWcgd2hlbiBmaXJzdCBoaXQuXG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygpLCB0aGlzLmNvbGxhcHNlRHVyYXRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aUNvbGxhcHNlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9jb2xsYXBzZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpQ29sbGFwc2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ29sbGFwc2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZU1vZHVsZSB9IGZyb20gXCIuLi9jb2xsYXBzZS9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvbi1wYW5lbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQWNjb3JkaW9uLFxuICAgICAgICBTdWlBY2NvcmRpb25QYW5lbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbGlkYXRvckhvc3Qge1xuICAgIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcjxUIGV4dGVuZHMgSUN1c3RvbVZhbGlkYXRvckhvc3Q+IGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3N0OlQpIHt9XG5cbiAgICBwdWJsaWMgb25WYWxpZGF0b3JDaGFuZ2UgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5faG9zdC52YWxpZGF0ZShjKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPChGdW5jdGlvbiB8IFZhbGlkYXRvcilbXT47XG4gICAgdXNlRXhpc3Rpbmc6VHlwZTxhbnk+O1xuICAgIG11bHRpOmJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21WYWxpZGF0b3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWxpZGF0aW9uUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VD4ge1xuICAgIHdyaXRlVmFsdWUodmFsdWU6VCk6dm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgVCBleHRlbmRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uQ2hhbmdlID0gKCkgPT4ge307XG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2hvc3Qud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHByb3ZpZGU6SW5qZWN0aW9uVG9rZW48Q29udHJvbFZhbHVlQWNjZXNzb3I+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkodHlwZTpGdW5jdGlvbik6SVZhbHVlQWNjZXNzb3JQcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iLCIvLyBLZXlib2FyZCBrZXljb2Rlcy5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIExlZnQgPSAzNyxcbiAgICBVcCA9IDM4LFxuICAgIFJpZ2h0ID0gMzksXG4gICAgRG93biA9IDQwLFxuXG4gICAgRXNjYXBlID0gMjcsXG4gICAgRW50ZXIgPSAxMyxcblxuICAgIFNwYWNlID0gMzIsXG4gICAgQmFja3NwYWNlID0gOFxufVxuXG5pbnRlcmZhY2UgSVJlY3Vyc2l2ZU9iamVjdCB7IFtuYW1lOnN0cmluZ106SVJlY3Vyc2l2ZU9iamVjdDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4geyAkaW1wbGljaXQ6VDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElBdWdtZW50ZWRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgY2xvc2VzdChzZWxlY3RvcjpzdHJpbmcpOklBdWdtZW50ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgSGFuZGxlZEV2ZW50IHtcbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVkOmJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUR5bmFtaWNDbGFzc2VzIHtcbiAgICBbbmFtZTpzdHJpbmddOnRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgIEFycmF5OiB7XG4gICAgICAgIHJhbmdlKG46bnVtYmVyLCBvZmZzZXQ6bnVtYmVyID0gMCk6bnVtYmVyW10ge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoMCkubWFwKCh6LCBpKSA9PiBpICsgb2Zmc2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXA8VD4oaXRlbXM6VFtdLCBncm91cExlbmd0aDpudW1iZXIpOlRbXVtdIHtcbiAgICAgICAgICAgIGNvbnN0IG11dGFibGUgPSBpdGVtcy5zbGljZSgwKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzOlRbXVtdID0gW107XG4gICAgICAgICAgICB3aGlsZSAobXV0YWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2gobXV0YWJsZS5zcGxpY2UoMCwgZ3JvdXBMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQnk8VD4oaXRlbXM6VFtdLCBmaWVsZDprZXlvZiBUKTp7IFtuYW1lOnN0cmluZ106VFtdIH0ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZTx7IFtuYW1lOnN0cmluZ106VFtdIH0+KFxuICAgICAgICAgICAgICAgIChncm91cHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGlbZmllbGRdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXSA9IGdyb3Vwc1tmaWVsZFZhbHVlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ZpZWxkVmFsdWVdLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZsYXR0ZW48VD4oaXRlbXM6VFtdW10pOlRbXSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKChpcywgaSkgPT4gaXMuY29uY2F0KGkpLCBbXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgU3RyaW5nOiB7XG4gICAgICAgIHBhZExlZnQoc3RyOnN0cmluZywgbGVuZ3RoOm51bWJlciwgcGFkZGluZzpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cjtcbiAgICAgICAgICAgIHdoaWxlIChzLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMgPSBwYWRkaW5nICsgcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIERPTToge1xuICAgICAgICBwYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYXR0cmlidXRlVmFsdWU6Ym9vbGVhbik6Ym9vbGVhbiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBPYmplY3Q6IHtcbiAgICAgICAgcmVhZFZhbHVlPFQsIFU+KG9iamVjdDpULCBwYXRoPzpzdHJpbmcpOlUge1xuICAgICAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdCBhcyBhbnkgYXMgVTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlY3Vyc2VkOklSZWN1cnNpdmVPYmplY3QgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBwID0gcGF0aC5zcGxpdChcIi5cIiksIGxlbiA9IHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWN1cnNlZCA9IChvYmplY3QgYXMgYW55IGFzIElSZWN1cnNpdmVPYmplY3QpW3BbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzZWQgYXMgYW55IGFzIFU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgTWF0aDoge1xuICAgICAgICByb3VuZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICByb3VuZFVwKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmREb3duKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIG1vZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICBjb25zdCByZW0gPSByICUgbjtcbiAgICAgICAgICAgIGlmIChyZW0gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbSArIG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVtO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBlbnVtIERhdGVQcmVjaXNpb24ge1xuICAgIERlY2FkZSA9IDAsXG4gICAgWWVhciA9IDEsXG4gICAgTW9udGggPSAyLFxuICAgIERhdGUgPSAzLFxuICAgIEhvdXIgPSA0LFxuICAgIE1pbnV0ZSA9IDVcbn1cblxuZXhwb3J0IGNvbnN0IERhdGVVdGlsID0ge1xuICAgIHN0YXJ0T2YocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSwgcmVzZXRBbGw6Ym9vbGVhbiA9IGZhbHNlKTpEYXRlIHtcbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKGRhdGUuZ2V0RnVsbFllYXIoKSAvIDEwKSAqIDEwICsgMTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldFNlY29uZHMoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgZW5kT2YocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDEyLCAwKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldFNlY29uZHMoNTksIDk5OSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgZXF1YWwocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGE6RGF0ZSwgYjpEYXRlKTpib29sZWFuIHtcbiAgICAgICAgbGV0IGVxdWFsID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldE1pbnV0ZXMoKSA9PT0gYi5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEhvdXJzKCkgPT09IGIuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBlcXVhbCA9IGVxdWFsICYmIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBlcXVhbCA9IGVxdWFsICYmIGEuZ2V0RnVsbFllYXIoKSA9PT0gYi5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcXVhbDtcbiAgICB9LFxuXG4gICAgbmV4dChwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLmFkZChwcmVjaXNpb24sIGRhdGUsIDEpO1xuICAgIH0sXG5cbiAgICBhZGQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSwgaTpudW1iZXIpOkRhdGUge1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyICsgaSAqIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCArIGksIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIHByZXZpb3VzKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMTApO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIgLSAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBVdGlsLk1hdGgubW9kKG1vbnRoIC0gMSwgMTIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF5IC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGhvdXJzIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0SG91cnMoKSAhPT0gVXRpbC5NYXRoLm1vZChob3VycyAtIDEsIDI0KSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGhvdXJzIC0gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgY2xvbmUoZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLFxuICAgIFJlZmxlY3RpdmVJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltcGxpY2l0Q29udGV4dDxUPiB7XG4gICAgJGltcGxpY2l0PzpUO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpQ29tcG9uZW50RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6QXBwbGljYXRpb25SZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjpJbmplY3Rvcikge31cblxuICAgIHB1YmxpYyBjcmVhdGVDb21wb25lbnQ8VD4odHlwZTpUeXBlPFQ+LCBwcm92aWRlcnM6UHJvdmlkZXJbXSA9IFtdKTpDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICAvLyBSZXNvbHZlIGEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgY29tcG9uZW50cyBvZiB0eXBlIGB0eXBlYC5cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlIGFzIFR5cGU8VD4pO1xuXG4gICAgICAgIC8vIFJlc29sdmUgYW5kIGNyZWF0ZSBhbiBpbmplY3RvciB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvdmlkZXJzLlxuICAgICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFxuICAgICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgdXNpbmcgdGhlIHByZXZpb3VzbHkgcmVzb2x2ZWQgZmFjdG9yeSAmIGluamVjdG9yLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVmlldzxULCBVIGV4dGVuZHMgSUltcGxpY2l0Q29udGV4dDxUPj4odmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxVPiwgY29udGV4dDpVKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXc8VT4odGVtcGxhdGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbnRvIHRoZSBzcGVjaWZpZWQgdmlldyBjb250YWluZXIuXG4gICAgcHVibGljIGF0dGFjaFRvVmlldzxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpOnZvaWQge1xuICAgICAgICB2aWV3Q29udGFpbmVyLmluc2VydChjb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBhdHRhY2hUb0FwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgLy8gRGV0YWNoZXMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gICAgcHVibGljIGRldGFjaEZyb21BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIE1vdmVzIHRoZSBjb21wb25lbnQgdG8gdGhlIHNwZWNpZmllZCBET00gZWxlbWVudC5cbiAgICBwdWJsaWMgbW92ZVRvRWxlbWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCBlbGVtZW50OkVsZW1lbnQpOnZvaWQge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgIHB1YmxpYyBtb3ZlVG9Eb2N1bWVudEJvZHk8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMubW92ZVRvRWxlbWVudChjb21wb25lbnRSZWYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpISk7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaEZyb21Eb2N1bWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIC8vIFdlIGNhbid0IHVzZSBgZWxlbWVudC5yZW1vdmUoKWAgZHVlIHRvIGxhY2sgb2YgSUUxMSBzdXBwb3J0LlxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBQb3BwZXIsIHsgTW9kaWZpZXJzLCBQb3BwZXJPcHRpb25zLCBQbGFjZW1lbnQsIERhdGEgfSBmcm9tIFwicG9wcGVyLmpzXCI7XG5cbnR5cGUgUG9wcGVyTW9kaWZpZXJzID0gTW9kaWZpZXJzICYge1xuICAgIGNvbXB1dGVTdHlsZT86e1xuICAgICAgICBncHVBY2NlbGVyYXRpb246Ym9vbGVhbjtcbiAgICB9O1xufTtcbnR5cGUgUG9wcGVySW5zdGFuY2UgPSBQb3BwZXIgJiB7XG4gICAgb3B0aW9uczpQb3BwZXJPcHRpb25zICYge1xuICAgICAgICBtb2RpZmllcnM6UG9wcGVyTW9kaWZpZXJzO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IFwiYXV0b1wiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3AgbGVmdFwiIHwgXCJ0b3BcIiB8IFwidG9wIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbSBsZWZ0XCIgfCBcImJvdHRvbVwiIHwgXCJib3R0b20gcmlnaHRcIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCB0b3BcIiB8IFwibGVmdFwiIHwgXCJsZWZ0IGJvdHRvbVwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodCB0b3BcIiB8IFwicmlnaHRcIiB8IFwicmlnaHQgYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IHtcbiAgICBBdXRvOiBcImF1dG9cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BMZWZ0OiBcInRvcCBsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wOiBcInRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcFJpZ2h0OiBcInRvcCByaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnRUb3A6IFwibGVmdCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0Qm90dG9tOiBcImxlZnQgYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tTGVmdDogXCJib3R0b20gbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b21SaWdodDogXCJib3R0b20gcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodFRvcDogXCJyaWdodCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0Qm90dG9tOiBcInJpZ2h0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3NpdGlvbkJvdW5kaW5nQm94IHtcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0Om51bWJlcjtcbiAgICB0b3A6bnVtYmVyO1xuICAgIGxlZnQ6bnVtYmVyO1xuICAgIGJvdHRvbTpudW1iZXI7XG4gICAgcmlnaHQ6bnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpOlBsYWNlbWVudCB7XG4gICAgaWYgKCFwbGFjZW1lbnQgfHwgcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvKSB7XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICB9XG5cbiAgICAvLyBBbGwgcGxhY2VtZW50cyBvZiB0aGUgZm9ybWF0OiBgZGlyZWN0aW9uIGFsaWdubWVudGAsIGUuZy4gYHRvcCBsZWZ0YC5cbiAgICBjb25zdCBbZGlyZWN0aW9uLCBhbGlnbm1lbnRdID0gcGxhY2VtZW50LnNwbGl0KFwiIFwiKTtcblxuICAgIC8vIERpcmVjdGlvbiBhbG9uZSBjb3ZlcnMgY2FzZSBvZiBqdXN0IGB0b3BgLCBgbGVmdGAsIGBib3R0b21gLCBgcmlnaHRgLlxuICAgIGNvbnN0IGNob3NlblBsYWNlbWVudCA9IFtkaXJlY3Rpb25dO1xuXG4gICAgLy8gQWRkIGBzdGFydGAgLyBgZW5kYCB0byBwbGFjZW1lbnQsIGRlcGVuZGluZyBvbiBhbGlnbm1lbnQgZGlyZWN0aW9uLlxuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwic3RhcnRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiZW5kXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSm9pbiB3aXRoIGh5cGhlbiB0byBjcmVhdGUgUG9wcGVyIGNvbXBhdGlibGUgcGxhY2VtZW50LlxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIi1cIikgYXMgUGxhY2VtZW50O1xufVxuXG5mdW5jdGlvbiBwb3BwZXJUb1BsYWNlbWVudChwb3BwZXI6c3RyaW5nKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgaWYgKCFwb3BwZXIgfHwgcG9wcGVyID09PSBcImF1dG9cIikge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBvcHBlci5zcGxpdChcIi1cIik7XG5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJ0b3BcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3NlblBsYWNlbWVudC5qb2luKFwiIFwiKSBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGFuY2hvcjpFbGVtZW50UmVmO1xuICAgIHB1YmxpYyByZWFkb25seSBzdWJqZWN0OkVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9wb3BwZXI6UG9wcGVySW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBfcG9wcGVyU3RhdGU6RGF0YTtcbiAgICBwcml2YXRlIF9wbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0dWFsUGxhY2VtZW50KCk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuX3BvcHBlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3BwZXJUb1BsYWNlbWVudCh0aGlzLl9wb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTpEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHBlclN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFuY2hvcjpFbGVtZW50UmVmLCBzdWJqZWN0OkVsZW1lbnRSZWYsIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCwgYXJyb3dTZWxlY3Rvcj86c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycyA9IHtcbiAgICAgICAgICAgIGNvbXB1dGVTdHlsZToge1xuICAgICAgICAgICAgICAgIGdwdUFjY2VsZXJhdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICBlc2NhcGVXaXRoUmVmZXJlbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBhcnJvd1NlbGVjdG9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFhcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIGFuY2hvci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgc3ViamVjdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50KSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgb25DcmVhdGU6IGluaXRpYWwgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSBpbml0aWFsLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSB1cGRhdGVcbiAgICAgICAgICAgIH0pIGFzIFBvcHBlckluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5cbmV4cG9ydCBjb25zdCBQb3B1cFRyaWdnZXIgPSB7XG4gICAgSG92ZXI6IFwiaG92ZXJcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgQ2xpY2s6IFwiY2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgT3V0c2lkZUNsaWNrOiBcIm91dHNpZGVDbGlja1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBGb2N1czogXCJmb2N1c1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBNYW51YWw6IFwibWFudWFsXCIgYXMgUG9wdXBUcmlnZ2VyXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cENvbmZpZyB7XG4gICAgaGVhZGVyPzpzdHJpbmc7XG4gICAgdGV4dD86c3RyaW5nO1xuICAgIHBsYWNlbWVudD86UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG4gICAgdHJpZ2dlcj86UG9wdXBUcmlnZ2VyO1xuICAgIGlzSW52ZXJ0ZWQ/OmJvb2xlYW47XG4gICAgZGVsYXk/Om51bWJlcjtcbiAgICBpc0Jhc2ljPzpib29sZWFuO1xuICAgIHRyYW5zaXRpb24/OnN0cmluZztcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/Om51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSwgSUR5bmFtaWNDbGFzc2VzIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBwb3B1cFwiXG4gICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgI2NvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLnRlbXBsYXRlICYmICghIWNvbmZpZy5oZWFkZXIgfHwgISFjb25maWcudGV4dClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiICpuZ0lmPVwiY29uZmlnLmhlYWRlclwiPnt7IGNvbmZpZy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBjb25maWcudGV4dCB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cblxuICAgIDxzdWktcG9wdXAtYXJyb3cgKm5nSWY9XCIhY29uZmlnLmlzQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJwb3NpdGlvbmluZ1NlcnZpY2UuYWN0dWFsUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgIFtpbnZlcnRlZF09XCJjb25maWcuaXNJbnZlcnRlZFwiPjwvc3VpLXBvcHVwLWFycm93PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi51aS5wb3B1cCB7XG4gICAgLyogQXV0b2ZpdCBwb3B1cCB0byB0aGUgY29udGVudHMuICovXG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi51aS5hbmltYXRpbmcucG9wdXAge1xuICAgIC8qIFdoZW4gdGhlIHBvcHVwIGlzIGFuaW1hdGluZywgaXQgbWF5IG5vdCBpbml0aWFsbHkgYmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICAgVGhpcyBmaXJlcyBhIG1vdXNlIGV2ZW50LCBjYXVzaW5nIHRoZSBhbmNob3IncyBtb3VzZWxlYXZlIHRvIGZpcmUgLSBtYWtpbmcgdGhlIHBvcHVwIGZsaWNrZXIuXG4gICAgICAgU2V0dGluZyBwb2ludGVyLWV2ZW50cyB0byBub25lIHdoaWxlIGFuaW1hdGluZyBmaXhlcyB0aGlzIGJ1Zy4gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLnBvcHVwOjpiZWZvcmUge1xuICAgIC8qIEhpZGUgdGhlIFNlbWFudGljIFVJIENTUyBhcnJvdy4gKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGFib3ZlIGFuZCBiZWxvdyB3aGVuIHBsYWNlZCAndmVydGljYWxseScuICovXG4udWkucG9wdXBbZGlyZWN0aW9uPVwidG9wXCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgbWFyZ2luLXRvcDogMC43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbn1cblxuLyogT2Zmc2V0IHBvcHVwIGJ5IDAuNzVlbSBlaXRoZXIgc2lkZSB3aGVuIHBsYWNlZCAnaG9yaXpvbnRhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJsZWZ0XCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXAgaW1wbGVtZW50cyBJUG9wdXAge1xuICAgIC8vIENvbmZpZyBzZXR0aW5ncyBmb3IgdGhpcyBwb3B1cC5cbiAgICBwdWJsaWMgY29uZmlnOlRlbXBsYXRlUG9wdXBDb25maWc8YW55PjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcbiAgICBwdWJsaWMgcG9zaXRpb25pbmdTZXJ2aWNlOlBvc2l0aW9uaW5nU2VydmljZTtcblxuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIHBvcHVwIGlzIG9wZW4gaW50ZXJuYWxseS5cbiAgICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgY2FuY2VsbGluZyBwb3B1cCBjbG9zZS5cbiAgICBwdWJsaWMgY2xvc2luZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgb3BlbnMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uT3BlbjpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgY2xvc2VzIChhbmQgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQpLlxuICAgIHB1YmxpYyBvbkNsb3NlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgLy8gYEVsZW1lbnRSZWZgIGZvciB0aGUgcG9zaXRpb25pbmcgc3ViamVjdC5cbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGFuY2hvciBpcyBzZXQgKHdoaWNoIGlzIHdoZW4gdGhlIHBvcHVwIGlzIGNyZWF0ZWQpLCByZWNyZWF0ZSB0aGUgcG9zaXRpb25pbmcgc2VydmljZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBvcHRpb25zLlxuICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZ1NlcnZpY2UoYW5jaG9yLCB0aGlzLl9jb250YWluZXIuZWxlbWVudCwgdGhpcy5jb25maWcucGxhY2VtZW50LCBcIi5keW5hbWljLmFycm93XCIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGRpcmVjdGlvbiAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmFjdHVhbFBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmFjdHVhbFBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYWxpZ25tZW50XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzSW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuaW52ZXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Jhc2ljKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmJhc2ljID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICAvLyBgVmlld0NvbnRhaW5lclJlZmAgZm9yIHRoZSBlbGVtZW50IHRoZSB0ZW1wbGF0ZSBnZXRzIGluamVjdGVkIGFzIGEgc2libGluZyBvZi5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBvcGVuIGlmIGN1cnJlbnRseSBjbG9zZWQuXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBvcGVuaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHRoZSBwb3B1cCBwb3NpdGlvbiBhZnRlciBhIGJyaWVmIGRlbGF5IHRvIGFsbG93IGZvciBicm93c2VyIHByb2Nlc3NpbmcgdGltZS5cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLnBsYWNlbWVudCA9IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UudXBkYXRlKCkpO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIG9wZW4uXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gY2xvc2UgaWYgY3VycmVudGx5IG9wZW4uXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBjbG9zaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBjbG9zaW5nIHRpbWVyLCB0aGF0IGZpcmVzIHRoZSBgb25DbG9zZWAgZXZlbnQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uQ2xvc2UuZW1pdCgpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIGNsb3NlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIHBvcHVwIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgSVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBJUG9wdXBMaWZlY3ljbGUgfSBmcm9tIFwiLi9wb3B1cC1saWZlY3ljbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXAge1xuICAgIG9wZW4oKTp2b2lkO1xuICAgIGNsb3NlKCk6dm9pZDtcbiAgICB0b2dnbGUoKTp2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VpUG9wdXBDb250cm9sbGVyIGltcGxlbWVudHMgSVBvcHVwLCBPbkRlc3Ryb3kge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIHBvcHVwIGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aVBvcHVwPjtcblxuICAgIC8vIFJldHVybnMgZ2VuZXJhdGVkIHBvcHVwIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgcG9wdXAoKTpTdWlQb3B1cCB7XG4gICAgICAgIC8vIFVzZSBub24tbnVsbCBhc3NlcnRpb24gYXMgd2Ugb25seSBhY2Nlc3MgdGhpcyB3aGVuIGEgcG9wdXAgZXhpc3RzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBkZWxheWVkIHBvcHVwIG9wZW4uXG4gICAgcHJpdmF0ZSBfb3BlbmluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBkb2N1bWVudCBjbGljayBoYW5kbGVyLlxuICAgIHByaXZhdGUgX2RvY3VtZW50TGlzdGVuZXI6KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3VpUG9wdXAgY29tcG9uZW50IGFuZCBhdHRhY2ggaXQgdG8gdGhlIGFwcGxpY2F0aW9uIHZpZXcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFN1aVBvcHVwKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgcG9wdXAgd2l0aCBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHBvcHVwIGlzIGNsb3NlZCAob25DbG9zZSBmaXJlcyBvbiBhbmltYXRpb24gY29tcGxldGUpLFxuICAgICAgICB0aGlzLnBvcHVwLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYW51cCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVBvcHVwQ29uZmlnKTp2b2lkIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBvcHVwLmNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheSBpbnRlcnZhbC5cbiAgICAgICAgdGhpcy5fb3BlbmluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW4oKSwgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbi5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgLy8gTW92ZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgdG8gdGhlIGJvZHkgdG8gYXZvaWQgYW55IHBvc2l0aW9uaW5nIGlzc3Vlcy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9Eb2N1bWVudEJvZHkodGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICAvLyBBdHRhY2ggYSByZWZlcmVuY2UgdG8gdGhlIGFuY2hvciBlbGVtZW50LiBXZSBkbyBpdCBoZXJlIGJlY2F1c2UgSUUxMSBsb3ZlcyB0byBjb21wbGFpbi5cbiAgICAgICAgdGhpcy5wb3B1cC5hbmNob3IgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGhhbmRsZSBjbG9zaW5nLlxuICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChlOk1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZSkpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBvcHVwIG9wZW4gdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wb3B1cC5vcGVuKCk7XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbk9wZW47XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lciB0byBzdG9wIHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIGNsb3NlIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBwb3B1cCBjbG9zZSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbkNsb3NlO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5DbGljayB8fFxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuXG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3MgcmVxdWlyZSBhIHRvZ2dsZSwgcmF0aGVyIHRoYW4ganVzdCBvcGVuaW5nIHRoZSBwb3B1cCBlYWNoIHRpbWUuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURlbGF5ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpKSB7XG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3Mgd2l0aCBhIGZvY3VzIHRyaWdnZXIgcmVxdWlyZXMgYW4gb3BlbiAoYXMgZm9jdXMgaXNuJ3QgZXZlciBsb3N0IG9uIHJlcGVhdGVkIGNsaWNrKS5cbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCB0cmlnZ2VyIGlzIG91dHNpZGUgY2xpY2ssXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYgJiYgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCBpZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSBvZiB0aGUgcG9wdXAgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTphbnkpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICAhdGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbUFwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFR5cGUsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBjb250ZW50IGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb250ZW50Q29tcG9uZW50UmVmPzpDb21wb25lbnRSZWY8VD47XG5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudEluc3RhbmNlKCk6VCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudDpUeXBlPFQ+LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudCBhcyBUeXBlPFQ+KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYsIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBzdXBlci5jbGVhbnVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyLCBJUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5LCBJSW1wbGljaXRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPiBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8SVBvcHVwPiB7XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiBleHRlbmRzIElQb3B1cENvbmZpZyB7XG4gICAgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBQb3B1cENvbmZpZyB7XG4gICAgcHVibGljIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xufVxuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXI8VD4gZXh0ZW5kcyBTdWlQb3B1cENvbnRyb2xsZXIge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBwdWJsaWMgY29udGV4dD86VDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJVGVtcGxhdGVQb3B1cENvbmZpZzxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmNvbmZpZ3VyZShjb25maWcpO1xuXG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb25maWcuY29udGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGVtcGxhdGUsIGluamVjdCBpdCBpbnRvIHRoZSB2aWV3LlxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcuY2xlYXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnBvcHVwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdQbGFjZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cC1hcnJvd1wiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiZHluYW1pYyBhcnJvd1wiIFthdHRyLmRpcmVjdGlvbl09XCJkaXJlY3Rpb25cIiAqbmdJZj1cImFsaWdubWVudCA9PSAnY2VudGVyJ1wiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInN0YXRpYyBhcnJvd1wiIFthdHRyLmRpcmVjdGlvbl09XCJkaXJlY3Rpb25cIiBbYXR0ci5hbGlnbm1lbnRdPVwiYWxpZ25tZW50XCIgKm5nSWY9XCJhbGlnbm1lbnQgIT0gJ2NlbnRlcidcIj48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDAuNzE0Mjg1NzFlbTtcbiAgICBoZWlnaHQ6IDAuNzE0Mjg1NzFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbjpob3N0LmludmVydGVkIC5hcnJvdyB7XG4gICAgYmFja2dyb3VuZDogIzFiMWMxZDtcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXSB7XG4gICAgYm90dG9tOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdIHtcbiAgICByaWdodDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICB0b3A6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIGxlZnQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl1bYWxpZ25tZW50PVwibGVmdFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cImxlZnRcIl0ge1xuICAgIGxlZnQ6IDFlbTtcbiAgICByaWdodDogYXV0bztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdW2FsaWdubWVudD1cInRvcFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl1bYWxpZ25tZW50PVwidG9wXCJdIHtcbiAgICB0b3A6IDFlbTtcbiAgICBib3R0b206IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl1bYWxpZ25tZW50PVwicmlnaHRcIl0ge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDFlbTtcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl1bYWxpZ25tZW50PVwiYm90dG9tXCJdIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cEFycm93IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pbnZlcnRlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGludmVydGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGlnbm1lbnQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWdubWVudCA9IHRoaXMucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5wb3AoKTtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWxpZ25tZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBDb25maWcgZXh0ZW5kcyBQb3B1cENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFdlIHVzZSBhbiBlbXB0eSBjb25zdHJ1Y3RvciB0byBlbnN1cmUgQW5ndWxhciBESSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBVdGlsLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSA9IGRlbGF5O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwb3B1cFRyaWdnZXIoKTpQb3B1cFRyaWdnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJpZ2dlcih0cmlnZ2VyOlBvcHVwVHJpZ2dlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZUNvbnRleHQoY29udGV4dDpUIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQ29uZmlnKGNvbmZpZzpJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZShjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHBvcHVwRGVmYXVsdHM6U3VpUG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgbmV3IFBvcHVwQ29uZmlnKHBvcHVwRGVmYXVsdHMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cEFycm93IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cC1hcnJvd1wiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbmZpZyB9IGZyb20gXCIuL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVBvcHVwRGlyZWN0aXZlLFxuICAgICAgICBTdWlQb3B1cEFycm93LFxuICAgICAgICBTdWlQb3B1cFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlQb3B1cERpcmVjdGl2ZSxcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdWlQb3B1cENvbmZpZ1xuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsXG4gICAgSG9zdExpc3RlbmVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIElDdXN0b21WYWxpZGF0b3JIb3N0LCBjdXN0b21WYWxpZGF0b3JGYWN0b3J5LCBDdXN0b21WYWxpZGF0b3IsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5LCBLZXlDb2RlXG59IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlciwgUG9wdXBBZnRlck9wZW4sIFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXIsIERhdGVwaWNrZXJNb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcsIFllYXJDb25maWcsIE1vbnRoQ29uZmlnLCBEYXRldGltZUNvbmZpZywgVGltZUNvbmZpZywgRGF0ZUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmUpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlXG4gICAgICAgZXh0ZW5kcyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXI8U3VpRGF0ZXBpY2tlcj5cbiAgICAgICBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxEYXRlPiwgSUN1c3RvbVZhbGlkYXRvckhvc3QsIE9uQ2hhbmdlcywgUG9wdXBBZnRlck9wZW4ge1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRGF0ZShkYXRlOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vZGU6RGF0ZXBpY2tlck1vZGU7XG4gICAgcHVibGljIGNvbmZpZzpDYWxlbmRhckNvbmZpZztcblxuICAgIEBJbnB1dChcInBpY2tlck1vZGVcIilcbiAgICBwdWJsaWMgZ2V0IG1vZGUoKTpEYXRlcGlja2VyTW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbW9kZShtb2RlOkRhdGVwaWNrZXJNb2RlKSB7XG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlIHx8IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuWWVhcjpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLk1vbnRoOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IE1vbnRoQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGU6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgRGF0ZXRpbWVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuVGltZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBUaW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJJbml0aWFsRGF0ZVwiKVxuICAgIHB1YmxpYyBpbml0aWFsRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1heERhdGVcIilcbiAgICBwdWJsaWMgbWF4RGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1pbkRhdGVcIilcbiAgICBwdWJsaWMgbWluRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlckZpcnN0RGF5T2ZXZWVrXCIpXG4gICAgcHVibGljIGZpcnN0RGF5T2ZXZWVrPzpudW1iZXI7XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJMb2NhbGVPdmVycmlkZXNcIilcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJkYXRlcGlja2VyXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclBsYWNlbWVudFwiKVxuICAgIHB1YmxpYyBzZXQgcGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJUcmFuc2l0aW9uRHVyYXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQE91dHB1dChcInBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkRGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8RGF0ZT47XG5cbiAgICBAT3V0cHV0KFwicGlja2VyVmFsaWRhdG9yQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgU3VpRGF0ZXBpY2tlciwgbmV3IFBvcHVwQ29uZmlnKHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFBvcHVwVHJpZ2dlci5Gb2N1cyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogUG9zaXRpb25pbmdQbGFjZW1lbnQuQm90dG9tTGVmdCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGVcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMjAwXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHBvcHVwIGlzIGRyYXduIGNvcnJlY3RseSAoaS5lLiBubyBib3JkZXIpLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJ1aVwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwiY2FsZW5kYXJcIik7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMubW9kZSA9IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1cE9uT3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmxvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxlVmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmN1cnJlbnREYXRlID0gdGhpcy5pbml0aWFsRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5maXJzdERheU9mV2VlaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5vbkRhdGVDaGFuZ2Uuc3Vic2NyaWJlKChkOkRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoeyBtYXhEYXRlLCBtaW5EYXRlLCBtb2RlIH06U2ltcGxlQ2hhbmdlcyk6dm9pZCB7XG4gICAgICAgIGlmIChtYXhEYXRlIHx8IG1pbkRhdGUgfHwgbW9kZSkge1xuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5kYXRlcGlja2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGMudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gV2UgcG9zdCBwcm9jZXNzIHRoZSBtaW4gJiBtYXggZGF0ZSBiZWNhdXNlIHNvbWV0aW1lcyB0aGlzIHB1dHMgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgYWxsb3dlZCByYW5nZS5cbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgdmFsdWUgPCB0aGlzLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWlNaW5EYXRlOiB7IHJlcXVpcmVkOiB0aGlzLm1pbkRhdGUsIGFjdHVhbDogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHZhbHVlID4gdGhpcy5tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWF4RGF0ZTogeyByZXF1aXJlZDogdGhpcy5tYXhEYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZ3VsYXIgZXhwZWN0cyBudWxsXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1udWxsLWtleXdvcmRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6RGF0ZSB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyU2VsZWN0ZWREYXRlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPERhdGUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyVmFsaWRhdG9yQ2hhbmdlKVwiOiBcIm9uVmFsaWRhdG9yQ2hhbmdlKClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbGlkYXRvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IgZXh0ZW5kcyBDdXN0b21WYWxpZGF0b3I8U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBob3N0OlN1aURhdGVwaWNrZXJEaXJlY3RpdmUpIHsgc3VwZXIoaG9zdCk7IH1cbn1cbiIsIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vZGF0ZXBpY2tlci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEludGVybmFsRGF0ZVBhcnNlciwgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBib3dzZXIgZnJvbSBcImJvd3NlclwiO1xuXG5pbXBvcnQgXCIuLi9oZWxwZXJzL2lzLXdlYnZpZXdcIjtcbmltcG9ydCAqIGFzIGlzVUFXZWJWaWV3IGZyb20gXCJpcy11YS13ZWJ2aWV3XCI7XG5jb25zdCBpc1dlYlZpZXcgPSBpc1VBV2ViVmlld1tcImRlZmF1bHRcIl0gfHwgaXNVQVdlYlZpZXc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aURhdGVwaWNrZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF91c2VOYXRpdmVPbk1vYmlsZTpib29sZWFuO1xuXG4gICAgQElucHV0KFwicGlja2VyVXNlTmF0aXZlT25Nb2JpbGVcIilcbiAgICBwdWJsaWMgZ2V0IHVzZU5hdGl2ZU9uTW9iaWxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHVzZU5hdGl2ZU9uTW9iaWxlKGZhbGxiYWNrOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGUgPSBmYWxsYmFjaztcbiAgICAgICAgY29uc3QgaXNPbk1vYmlsZSA9IGJvd3Nlci5tb2JpbGUgfHwgYm93c2VyLnRhYmxldCB8fCBpc1dlYlZpZXcobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlICYmIGlzT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgZmFsbGJhY2tBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmFsbGJhY2tBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZmFsbGJhY2tBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIElmIHRoZSBmYWxsYmFjayBpcyBhY3RpdmUsIHRoZW4gdGhlIHRyaWdnZXIgbXVzdCBiZSBtYW51YWwgc28gdGhlIGRhdGVwaWNrZXIgbmV2ZXIgb3BlbnMuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRoaXMuZmFsbGJhY2tBY3RpdmUgPyBQb3B1cFRyaWdnZXIuTWFudWFsIDogUG9wdXBUcmlnZ2VyLkZvY3VzO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlICh0aGlzIHdpbGwgaW5zZXJ0IHRoZSBgVGAgYXMgcmVxdWlyZWQpLlxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhcnNlcigpOkRhdGVQYXJzZXIge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRlcm5hbERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLm1vZGUsIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzLmZvcm1hdHNbdGhpcy5kYXRlcGlja2VyLm1vZGVdLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jdXJyZW50SW5wdXRWYWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVR5cGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZVN0cmluZygpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50eXBlXCIpXG4gICAgcHVibGljIGdldCB0eXBlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIuY29uZmlnLmZhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInRleHRcIjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1heFwiKVxuICAgIHB1YmxpYyBnZXQgbWF4KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1heERhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtYXggaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gT3VyIERhdGVwaWNrZXIgd2lsbCBhbHdheXMgY2hvb3NlIHRoZSAxc3QgZGF0ZSBvbiB0aGUgcHJvdmlkZWQgcHJlY2lzaW9uLFxuICAgICAgICAgICAgLy8gbWVhbmluZyBhbnl0aGluZyBiZWxvdyB0aGUgbWF4RGF0ZSB3aWxsIHdvcmssIGhlbmNlIGVuZE9mLlxuICAgICAgICAgICAgY29uc3QgbWF4ID0gRGF0ZVV0aWwuZW5kT2YodGhpcy5kYXRlcGlja2VyLmNvbmZpZy5wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1heCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1pblwiKVxuICAgIHB1YmxpYyBnZXQgbWluKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtaW4gaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gV2UgdXNlIDEgbWludXRlIGJlZm9yZSB0aGUgbmV4dCBkYXRlIGF0IHRoZSBjb25maWd1cmVkIHByZWNpc2lvbiBzaW5jZVxuICAgICAgICAgICAgLy8gb3VyIERhdGVwaWNrZXIgcGlja3MgdGhlIGZpcnN0IGF2YWlsYWJsZSBkYXRlIGF0IHRoYXQgcHJlY2lzaW9uLlxuICAgICAgICAgICAgY29uc3QgbWluID0gRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtaW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgZGF0ZXBpY2tlcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIHZhbHVlQWNjZXNzb3I6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZXMsIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dCBhbG9uZ3NpZGUgaXQuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5vblNlbGVjdGVkRGF0ZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcblxuICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSBpZiBpdCBpcyBkaWZmZXJlbnQgdG8gd2hhdCBpdCdzIGJlaW5nIHVwZGF0ZWQgdG8uXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCB0aGUgZWRpdGluZyBwb3NpdGlvbiBpc24ndCBjaGFuZ2VkIHdoZW4gbWFudWFsbHkgdHlwaW5nIHRoZSBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuX2xhc3RVcGRhdGVUeXBlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHZhbHVlIHx8IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHR5cGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyZW50SW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZGF0ZSBpZiBubyBkYXRlIHdhcyBlbnRlcmVkIG1hbnVhbGx5LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlci5wYXJzZSh2YWx1ZSwgdGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgJiYgdmFsdWUgPT09IHRoaXMucGFyc2VyLmZvcm1hdChwYXJzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUocGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iub25Ub3VjaGVkKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VEYXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICBjb25zdCBtb250aFN0YXJ0ID0gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLk1vbnRoLCBEYXRlVXRpbC5jbG9uZShzdGFydCkpO1xuICAgICAgICBtb250aFN0YXJ0LnNldERhdGUoKDEgLSBtb250aFN0YXJ0LmdldERheSgpICsgdGhpcy5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrIC0gNykgJSA3KTtcbiAgICAgICAgcmV0dXJuIG1vbnRoU3RhcnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBpdGVtLmRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0TW9udGgoKSAhPT0gYmFzZURhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgaXRlbS5pc1NlbGVjdGFibGUgPSBpdGVtLmlzRGlzYWJsZWQ7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItZGF0ZS12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBzZXZlbiBjb2x1bW4gZGF5XCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjdcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIj57eyBkYXkgfX08L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckRhdGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRheXMoKTpzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLndlZWtkYXlzTmFycm93O1xuICAgICAgICByZXR1cm4gZGF5cy5tYXAoKGQsIGkpID0+IGRheXNbKGkgKyB0aGlzLnNlcnZpY2UuZmlyc3REYXlPZldlZWspICUgZGF5cy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLm1vbnRoLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkRhdGUsIG5ldyBDYWxlbmRhclJhbmdlRGF0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Nb250aCwgNiwgNykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgY29uc3QgY3VzdG9tRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcihjdXN0b21Gb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItaG91ci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBmb3VyIGNvbHVtbiBob3VyXCI+XG48dGhlYWQgKm5nSWY9XCJzZXJ2aWNlLmNvbmZpZy5tb2RlICE9IDFcIj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJIb3VyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuSG91ciwgbmV3IENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZShEYXRlUHJlY2lzaW9uLkRhdGUsIDYsIDQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VNaW51dGVTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjYWxjU3RhcnQoc3RhcnQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uSG91ciwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY0RhdGVzKHN0YXJ0OkRhdGUpOkRhdGVbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLkFycmF5XG4gICAgICAgICAgICAucmFuZ2UodGhpcy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKGkgPT4gRGF0ZVV0aWwuYWRkKERhdGVQcmVjaXNpb24uTWludXRlLCBEYXRlVXRpbC5jbG9uZShzdGFydCksIGkgKiA1KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZSwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KGl0ZW0uZGF0ZSk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1taW51dGUtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1pbnV0ZVwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI0XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhck1pbnV0ZVZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29uZmlnLm1vZGUgIT09IENhbGVuZGFyTW9kZS5UaW1lT25seSkge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWVGb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGV0aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKGRhdGVUaW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgICAgICBjb25zdCB0aW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRpbWVGb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIG5ldyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZShEYXRlUHJlY2lzaW9uLkhvdXIsIDQsIDMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5tb250aHNTaG9ydFtpdGVtLmRhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1tb250aC12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4gbW9udGhcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNb250aFZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgeWVhcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMueWVhciwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgbmV3IENhbGVuZGFyUmFuZ2VNb250aFNlcnZpY2UoRGF0ZVByZWNpc2lvbi5ZZWFyLCA0LCAzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBVdGlsLlN0cmluZy5wYWRMZWZ0KGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpID49IHRoaXMuY2FsY1N0YXJ0KGJhc2VEYXRlKS5nZXRGdWxsWWVhcigpICsgMTA7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXIteWVhci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4geWVhclwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYWQoZGVjYWRlU3RhcnQpIH19IC0ge3sgcGFkKGRlY2FkZVN0YXJ0ICsgMTApIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclllYXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRlY2FkZVN0YXJ0KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsXG4gICAgICAgICAgICAuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkRlY2FkZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSlcbiAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBuZXcgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGVjYWRlLCA0LCAzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZCh5ZWFyOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuU3RyaW5nLnBhZExlZnQoeWVhci50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVBvcHVwTW9kdWxlIH0gZnJvbSBcIi4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyVmlld1RpdGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWxlbmRhci12aWV3LXRpdGxlXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclllYXJWaWV3IH0gZnJvbSBcIi4vdmlld3MveWVhci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1vbnRoVmlldyB9IGZyb20gXCIuL3ZpZXdzL21vbnRoLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJEYXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL2RhdGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJIb3VyVmlldyB9IGZyb20gXCIuL3ZpZXdzL2hvdXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvbWludXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1xuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3Jcbn0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNhbGVuZGFySXRlbSxcblxuICAgICAgICBTdWlDYWxlbmRhclZpZXdUaXRsZSxcbiAgICAgICAgU3VpQ2FsZW5kYXJZZWFyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNb250aFZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyRGF0ZVZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFySG91clZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTWludXRlVmlldyxcblxuICAgICAgICBTdWlEYXRlcGlja2VyLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtjbGFzcy5jb250ZW50XT1cIndyYXBDb250ZW50XCI+XG4gICAgPGRpdiBbY2xhc3MuY2VudGVyXT1cIndyYXBDb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5kaW1tZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXIgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHByaXZhdGUgX2lzRGltbWVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGltbWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaW1tZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBjb25zdCBpc0RpbW1lZCA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkgd2hlbiBmaXJzdCBzZXR0aW5nIGRpbW1lZCwgdG8gZW5zdXJlIGluaXRpYWwgc3RhdGUgZG9lc24ndCB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoaXNEaW1tZWQsIFwiYmxvY2tcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRGltbWVkICE9PSBpc0RpbW1lZCkge1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwiZmFkZVwiLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgaXNEaW1tZWQgPyBUcmFuc2l0aW9uRGlyZWN0aW9uLkluIDogVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NsaWNrYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLyogSW50ZXJuYWwgZm9yIG5vdyAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdyYXBDb250ZW50OmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndyYXBDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlLmVtaXQodGhpcy5pc0RpbW1lZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlEaW1tZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRGltbWVyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXJNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IFwiaXRlbUNsaWNrXCIgfCBcIm91dHNpZGVDbGlja1wiIHwgXCJkaXNhYmxlZFwiO1xuXG4vLyBDcmVhdGVzIGVzc2VudGlhbGx5IGEgJ3N0cmluZycgZW51bS5cbmV4cG9ydCBjb25zdCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSB7XG4gICAgSXRlbUNsaWNrOiBcIml0ZW1DbGlja1wiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSxcbiAgICBPdXRzaWRlQ2xpY2s6IFwib3V0c2lkZUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIERpc2FibGVkOiBcImRpc2FibGVkXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlXG59O1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZXJ2aWNlIHtcbiAgICAvLyBPcGVuIHN0YXRlIG9mIHRoZSBkcm9wZG93blxuICAgIHB1YmxpYyBpc09wZW46Ym9vbGVhbjtcbiAgICAvLyBBbmltYXRpbmcgc3RhdGUgb2YgdGhlIGRyb3Bkb3duLlxuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIC8vIEVtaXR0ZXIgZm9yIHdoZW4gZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgIHB1YmxpYyBpc09wZW5DaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFNldHMgdGhlIFwiYXV0b2Nsb3NlXCIgbW9kZSBvZiB0aGUgZHJvcGRvd24gLSBpLmUuIHdoYXQgdXNlciBhY3Rpb24gY2F1c2VzIGl0IHRvIGF1dG9jbG9zZS5cbiAgICBwdWJsaWMgYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGU7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjb250YWluaW5nIGRyb3Bkb3duIHNvIHdlIGNhbiBvcGVuIGl0IGFzIG5lY2Vzc2FyeS5cbiAgICBwdWJsaWMgcGFyZW50PzpEcm9wZG93blNlcnZpY2U7XG4gICAgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGRyb3Bkb3ducyBuZXN0ZWQgaW4gdGhpcyBvbmUgc28gd2UgY2FuIGNsb3NlIHRoZW0gYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBjaGlsZHJlbjpEcm9wZG93blNlcnZpY2VbXTtcbiAgICBwdWJsaWMgZ2V0IGlzTmVzdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGF1dG9DbG9zZU1vZGU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmF1dG9DbG9zZU1vZGUgPSBhdXRvQ2xvc2VNb2RlO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3BlblN0YXRlKGlzT3Blbjpib29sZWFuLCByZWZsZWN0SW5QYXJlbnQ6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHN0YXRlIGlmIGl0IGhhcyBjaGFuZ2VkLCBhbmQgdGhlIGRyb3Bkb3duIGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhIWlzT3BlbjtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gV2UgbXVzdCBkZWxheSB0aGUgZW1pdHRpbmcgdG8gYXZvaWQgdGhlICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIEFuZ3VsYXIgZXJyb3JzLlxuICAgICAgICAgICAgdGhpcy5kZWxheSgoKSA9PiB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgY2hpbGQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgY2xvc2VzLlxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjID0+IGMuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiByZWZsZWN0SW5QYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBwYXJlbnQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgb3BlbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT3BlbiAhPT0gaXNPcGVuICYmIHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGhhcyBjaGFuZ2VkLCBidXQgdGhlIGRyb3Bkb3duIGlzIGRpc2FibGVkLCByZS1lbWl0IHRoZSBvcmlnaW5hbCBpc09wZW4gdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgIT09IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICghIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd24gYXMgaXQgaXMgbm93IGRpc2FibGVkXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSAhIWlzRGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlT3BlblN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLmlzT3Blbik7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgZHJvcGRvd24gc2VydmljZSBhcyBhIGNoaWxkIG9mIHRoaXMgc2VydmljZS5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGlsZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIHByb3ZpZGVkIGRyb3Bkb3duIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhcyBhIGNoaWxkLCBvciBpcyBhIGRlc2NlbmRhbnQgb2YgYSBjaGlsZC5cbiAgICBwdWJsaWMgaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQ6RHJvcGRvd25TZXJ2aWNlKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IGNoaWxkIHx8ICEhdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLmZpbmQoYyA9PiAhIWMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAuZmluZChjQ2hpbGQgPT4gY0NoaWxkLmlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkKSkpO1xuICAgIH1cblxuICAgIC8vIFdpcGVzIGFueSBuZXN0ZWQgZGF0YSwgc28gYWxsIHNlcnZpY2VzIGNhbiBiZSBjbGVhbmx5IHJlYXR0YWNoZWQuXG4gICAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgYy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kIGZvciBkZWxheWluZyBhbiBldmVudCBpbnRvIHRoZSBuZXh0IHRpY2ssIHRvIGF2b2lkIEFuZ3VsYXIgXCJjaGFuZ2VkIGFmdGVyIGNoZWNrZWRcIiBlcnJvci5cbiAgICBwcml2YXRlIGRlbGF5KGNhbGxiYWNrOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBJQXVnbWVudGVkRWxlbWVudCwgS2V5Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbi8vIFBvbHlmaWxsIGZvciBJRVxuaW1wb3J0IFwiZWxlbWVudC1jbG9zZXN0XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIFdlIG11c3QgYXR0YWNoIHRvIGV2ZXJ5ICcuaXRlbScgYXMgQW5ndWxhciBkb2Vzbid0IHN1cHBvcnQgPiBzZWxlY3RvcnMuXG4gICAgc2VsZWN0b3I6IFwiLml0ZW1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgLy8gV2UgbXVzdCB1c2UgbmF0aXZlRWxlbWVudCBhcyBBbmd1bGFyIGRvZXNuJ3QgaGF2ZSBhIHdheSBvZiByZWFkaW5nIGNsYXNzIGluZm9ybWF0aW9uLlxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNTZWxlY3RlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFJlbmRlcmVyIGlzIHVzZWQgdG8gZW5hYmxlIGEgZHluYW1pYyBjbGFzcyBuYW1lLlxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGNsYXNzIG5hbWUgdXNlZCBmb3IgYSAnc2VsZWN0ZWQnIGl0ZW0uXG4gICAgcHVibGljIHNlbGVjdGVkQ2xhc3M6c3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IFN1aURyb3Bkb3duTWVudSkpXG4gICAgcHVibGljIGNoaWxkRHJvcGRvd25NZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGREcm9wZG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNoaWxkRHJvcGRvd25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1DbGljaygpOnZvaWQge1xuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bk1lbnVdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkRyb3Bkb3duU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZSh2YWx1ZTpEcm9wZG93blNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0lzT3BlbiA9IHRoaXMuX3NlcnZpY2UuaXNPcGVuO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKGlzT3Blbjpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICE9PSBwcmV2aW91c0lzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIHRyYW5zaXRpb25zIGlmIHRoZSBvcGVuIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuX3NlcnZpY2UuaXNBbmltYXRpbmcgPSBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpdGVtIHNlbGVjdGlvbnMgd2hlbiBhIG5lc3RlZCBpdGVtIGlzIHNlbGVjdGVkIHRvIGF2b2lkIGluY29zaXN0ZW50IG9wZW4gc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c0lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnRFbGVtZW50KHZhbHVlOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4odmFsdWUubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhcmVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd25NZW51SXRlbSlcbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5SW50ZXJuYWw6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeU92ZXJyaWRlOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHB1YmxpYyBzZXQgaXRlbXMoaXRlbXM6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pdGVtc1F1ZXJ5KCk6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSB8fCB0aGlzLl9pdGVtc1F1ZXJ5SW50ZXJuYWw7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsaXN0IG9mIGl0ZW1zLCBpZ25vcmluZyB0aG9zZSB0aGF0IGFyZSBkaXNhYmxlZC5cbiAgICBwcml2YXRlIGdldCBfaXRlbXMoKTpTdWlEcm9wZG93bk1lbnVJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeS5maWx0ZXIoaSA9PiAhaS5pc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICAvLyBTdGFjayB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAvLyBTZWxlY3RlZCBpdGVtcyBsb3dlciBpbiB0aGUgc3RhY2sgYXJlIG5lY2Vzc2FyaWx5IHRoZSBwYXJlbnQgb2YgdGhlIGl0ZW0gb25lIGhpZ2hlci5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtczpTdWlEcm9wZG93bk1lbnVJdGVtW107XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSAxc3QgaXRlbSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudUF1dG9TZWxlY3RGaXJzdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVNlbGVjdGVkSXRlbUNsYXNzOnN0cmluZztcblxuICAgIHByaXZhdGUgX3BhcmVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGVzdHJveWVkIGJlZm9yZSBpdCBoYXMgYSBjaGFuY2UgdG8gYmUgZnVsbHkgaW5pdGlhbGlzZWQuXG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQgJiBNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSUF1Z21lbnRlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSBhbiBpdGVtIGlzIHNlbGVjdGVkLCB3ZSBjYW4gY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB0aGUgcm9vdCBkcm9wZG93biAoaS5lLiBub3QgbmVzdGVkIGRyb3Bkb3ducykgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5fc2VydmljZS5pc09wZW4gJiYgIXRoaXMuX3NlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZG9jdW1lbnQgZXZlbnRzIGxpa2Ugc2Nyb2xsaW5nIHdoaWxlIG9wZW4uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCEvaW5wdXQvaS50ZXN0KHRhcmdldC50YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgIFtLZXlDb2RlLkVzY2FwZSwgS2V5Q29kZS5FbnRlciwgS2V5Q29kZS5VcCwgS2V5Q29kZS5Eb3duLCBLZXlDb2RlLkxlZnQsIEtleUNvZGUuUmlnaHRdLmZpbmQoa0MgPT4ga0MgPT09IGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldHMgdGhlIHRvcCBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHN0YWNrLlxuICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBtZW51IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IGFsbG93cyB1cyB0byBlYXNpbHkgZGV0ZXJtaW5lIGl0cyBzaWJsaW5ncy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbnRhaW5lcjpTdWlEcm9wZG93bk1lbnUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29udGFpbmVyID0gc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIDogY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvd24gOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBiZWxvdyB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICAvLyBVcCA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGFib3ZlIHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkQ29udGFpbmVyLnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGluIGFuIGlucHV0LCB0byBzdG9wIGp1bXBpbmcgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbnRlciA6IGlmIHRoZSBpdGVtIGRvZXNuJ3QgY29udGFpbiBhIG5lc3RlZCBkcm9wZG93biwgJ2NsaWNrJyBpdC4gT3RoZXJ3aXNlLCBmYWxsIHRocm91Z2ggdG8gJ1JpZ2h0JyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucGVyZm9ybUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gY29udGFpbnMgYSBuZXN0ZWQgZHJvcGRvd24sIG9wZW4gdGhlIGRyb3Bkb3duICYgc2VsZWN0IHRoZSAxc3QgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gYSBuZXN0ZWQgZHJvcGRvd24sIGNsb3NlIGl0IGFuZCBzZWxlY3QgdGhlIGNvbnRhaW5pbmcgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2VsZWN0aW9uKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5zZWxlY3RlZENsYXNzID0gdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3M7XG4gICAgICAgICAgICBpLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBdXRvc2VsZWN0IDFzdCBpdGVtIGlmIHJlcXVpcmVkICYgcG9zc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1swXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2l0ZW1zUXVlcnkuZmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaXRlbSB0byBuZXh0IGJlIHNlbGVjdGVkLCBiYXNlZCBvbiB0aGUga2V5Ym9hcmQgaW5wdXQgJiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZEl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSwga2V5Q29kZTpLZXlDb2RlKTpTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2l0ZW1zXG4gICAgICAgICAgICAuZmluZEluZGV4KGkgPT4gaSA9PT0gc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOlN1aURyb3Bkb3duTWVudUl0ZW07XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vbmUgYXJlIHNlbGVjdGVkLCBzZWxlY3QgdGhlIDFzdCBpdGVtLiBTaG91bGQgdGhpcyBiZSBgdGhpcy5pdGVtcy5sYXN0IC0gMWA/XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHVwZGF0ZWQgaW5kZXguIFRoZSB8fCBpcyB0byBzdG9wIHVzIHNlbGVjdGluZyBwYXN0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGl0ZW0gbGlzdC5cbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5faXRlbXNbc2VsZWN0ZWRJbmRleF0gfHwgc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudTpFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlY3Q6Q2xpZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID0gMDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LmJvdHRvbSAtIG1lbnVSZWN0LmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QudG9wIC0gbWVudVJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zY3JvbGxUb3AgKz0gTWF0aC5yb3VuZChzY3JvbGxBbW91bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25JdGVtc0NoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSB1c2UgYF9pdGVtc2AgcmF0aGVyIHRoYW4gYGl0ZW1zYCBpbiBjYXNlIG9uZSBvciBtb3JlIGhhdmUgYmVjb21lIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsXG4gICAgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBLZXlDb2RlLCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuL2Ryb3Bkb3duLW1lbnVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46UXVlcnlMaXN0PFN1aURyb3Bkb3duPjtcblxuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTpTdWlEcm9wZG93bltdIHtcbiAgICAgICAgLy8gQENvbnRlbnRDaGlsZHJlbiBpbmNsdWRlcyB0aGUgY3VycmVudCBlbGVtZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoYyA9PiBjICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbkNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0byBlbnN1cmUgbmVzdGVkIGRyb3Bkb3ducyBkb24ndCBnZXQgbWFkZSBib2xkLlxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5zZXJ2aWNlLmlzTmVzdGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgb3BlbmluZyB0aGUgZHJvcGRvd24sIHdlIHdhbnQgdG8gYWx3YXlzIG9wZW4gaXRzIHBhcmVudHMuXG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodmFsdWUsICEhdmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXREaXNhYmxlZFN0YXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJJbmRleCgpOm51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy5zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGRlZmF1bHQgb2YgMC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGF1dG9DbG9zZSgpOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dG9DbG9zZSh2YWx1ZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3Qgc2V0IFtzdWlEcm9wZG93bk1lbnVdIG9uIHRoZSBtZW51IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5jaGFuZ2VzXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hpbGRyZW5VcGRhdGVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hpbGRyZW5VcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlcmVnaXN0ZXIgY2hpbGQgZHJvcGRvd25zIGVhY2ggdGltZSB0aGUgbWVudSBjb250ZW50IGNoYW5nZXMuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnNlcnZpY2UpXG4gICAgICAgICAgICAuZm9yRWFjaChzID0+IHRoaXMuc2VydmljZS5yZWdpc3RlckNoaWxkKHMpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlT3BlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsbHlDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlwcmVzcyhlOkhhbmRsZWRFdmVudCAmIEtleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBCbG9jayB0aGUga2V5Ym9hcmQgZXZlbnQgZnJvbSBiZWluZyBmaXJlZCBvbiBwYXJlbnQgZHJvcGRvd25zLlxuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRlcm5hbGx5Q2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHJlZmxlY3QgaW4gcGFyZW50IHNpbmNlIHRoZXkgYXJlIGFsc28gYm91bmQgdG8gZG9jdW1lbnQuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUsIFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRHJvcGRvd24sXG4gICAgICAgIFN1aURyb3Bkb3duTWVudSxcbiAgICAgICAgU3VpRHJvcGRvd25NZW51SXRlbVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZyB9IGZyb20gXCIuL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG4vLyBIZWxwZXIgY2xhc3MgdG8gc3VwcG9ydCBtZXRob2QgY2hhaW5pbmcgd2hlbiBjYWxsaW5nIGBTdWlNb2RhbFNlcnZpY2Uub3BlbiguLi4pYC5cbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOk1vZGFsQ29uZmlnPFQsIFUsIFY+O1xuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpTW9kYWw8VSwgVj4+O1xuXG4gICAgLy8gU2hvcnRoYW5kIGZvciBkaXJlY3QgYWNjZXNzIHRvIHRoZSBgU3VpTW9kYWxgIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50KCk6U3VpTW9kYWw8VSwgVj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlOk1vZGFsQ29uZmlnPFQsIFUsIFY+LCBjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgZGVzdHJveSB0aGUgbW9kYWwgY29tcG9uZW50IHdoZW4gaXQgaGFzIGJlZW4gZGlzbWlzc2VkLlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkRpc21pc3Muc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkFwcHJvdmVgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkFwcHJvdmUoY2FsbGJhY2s6KHJlc3VsdDpVKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uQXBwcm92ZS5zdWJzY3JpYmUoKHJlczpVKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZm9yIHdoZW4gYG9uRGVueWAgaXMgZmlyZWQuXG4gICAgcHVibGljIG9uRGVueShjYWxsYmFjazoocmVzdWx0OlYpID0+IHZvaWQpOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EZW55LnN1YnNjcmliZSgocmVzOlYpID0+IGNhbGxiYWNrKHJlcykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB0aGUgYXBwcm92ZSBldmVudCBvZiB0aGUgbW9kYWwgbWFudWFsbHkuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlUpOnZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHByb3ZlKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGRlbnkgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBkZW55KHJlc3VsdDpWKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGVueShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG1vZGFsIGNvbXBvbmVudCBpbnN0YW50bHksIHdpdGhvdXQgdHJhbnNpdGlvbnMgb3IgZmlyaW5nIGFueSBldmVudHMuXG4gICAgcHVibGljIGRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsVGVtcGxhdGUgfSBmcm9tIFwiLi9tb2RhbC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJub3JtYWxcIiB8IFwibGFyZ2VcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsU2l6ZSA9IHtcbiAgICBNaW5pOiBcIm1pbmlcIiBhcyBNb2RhbFNpemUsXG4gICAgVGlueTogXCJ0aW55XCIgYXMgTW9kYWxTaXplLFxuICAgIFNtYWxsOiBcInNtYWxsXCIgYXMgTW9kYWxTaXplLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIiBhcyBNb2RhbFNpemUsXG4gICAgTGFyZ2U6IFwibGFyZ2VcIiBhcyBNb2RhbFNpemVcbn07XG5cbi8vIFN0b3JlcyBhIGJhc2ljIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgbW9kYWwuXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4ge1xuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VjtcblxuICAgIC8vIERhdGEgdG8gcGFzcyB0byB0aGUgbW9kYWwgaW5zdGFuY2Ugd2hlbiBvcGVuZWQuXG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHVibGljIGlzRnVsbFNjcmVlbjpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwdWJsaWMgbXVzdFNjcm9sbDpib29sZWFuO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsIi8vIFNob3J0aGFuZCB0byBhdm9pZCB3cml0aW5nIGFycm93IHR5cGVzIGV2ZXJ5d2hlcmUuXG5leHBvcnQgdHlwZSBNb2RhbFJlc3VsdDxUPiA9IChyZXN1bHQ6VCkgPT4gdm9pZDtcblxuLy8gVXNlZCB0byBwYXNzIGFiaWxpdHkgdG8gY29udHJvbCBhIG1vZGFsIHRvIGEgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbHM8VCwgVT4ge1xuICAgIGNvbnN0cnVjdG9yKGFwcHJvdmU6TW9kYWxSZXN1bHQ8VD4sIGRlbnk6TW9kYWxSZXN1bHQ8VT4pIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlID0gYXBwcm92ZTtcbiAgICAgICAgdGhpcy5kZW55ID0gZGVueTtcbiAgICB9XG5cbiAgICAvLyBVc2UgbWV0aG9kIGhlcmUgcmF0aGVyIHRoYW4gYXJyb3cgdmFyaWFibGVzIHRvIG1ha2UgaW50ZWxsaXNlbnNlIHNob3cgdGhleSdyZSBtZXRob2RzLlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpUKTp2b2lkIHt9XG4gICAgcHVibGljIGRlbnkocmVzdWx0OlUpOnZvaWQge31cbn1cblxuLy8gSW5qZWN0ZWQgaW50byBjdXN0b20gbW9kYWwgY29tcG9uZW50cywgdG8gYWxsb3cgY29udHJvbCBvZiB0aGUgbW9kYWwsIGFuZCBhY2Nlc3MgdG8gYSBjb250ZXh0IG9iamVjdC5cbmV4cG9ydCBjbGFzcyBNb2RhbDxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29udHJvbHM8VSwgVj4ge1xuICAgIHB1YmxpYyBjb250ZXh0OlQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczpNb2RhbENvbnRyb2xzPFUsIFY+LCBjb250ZXh0OlQpIHtcbiAgICAgICAgLy8gSW5zdGFuY2VzIG9mIGBNb2RhbENvbnRyb2xzYCBhcmUgb25seSBjcmVhdGVkIGluIHRoZSBgU3VpTW9kYWxgIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyBzbyB3ZSB0YWtlIGFuIGluaXRpYWxpc2VkIGluc3RhbmNlIHJhdGhlciB0aGFuIHJlbWFraW5nIG9uZSBlYWNoIHRpbWUuXG4gICAgICAgIHN1cGVyKGNvbnRyb2xzLmFwcHJvdmUsIGNvbnRyb2xzLmRlbnkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scyB9IGZyb20gXCIuL21vZGFsLWNvbnRyb2xzXCI7XG5cbi8vIFNob3J0aGFuZCBmb3IgYSBtb2RhbCB0ZW1wbGF0ZS4gU2V0cyB1cCBhYmlsaXR5IHRvIHdyaXRlOiBgPG5nLXRlbXBsYXRlIGxldC1jb250ZXh0IGxldC1tb2RhbD1cIm1vZGFsXCI+Li4uPC9uZy10ZW1wbGF0ZT5gXG4vLyBXZSB1c2UgYW4gYWJzdHJhY3QgY2xhc3MgYXMgTW9kYWxUZW1wbGF0ZSB0ZW5kcyB0byBiZSB1c2VkIHdpdGhpbiBkZWNvcmF0ZWQgcHJvcGVydGllcywgd2hpY2ggbWVhbnMgaXQgbmVlZHMgdG8gZXhpc3QhXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kYWxUZW1wbGF0ZTxULCBVLCBWPiBleHRlbmRzIFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OlQ7IG1vZGFsOk1vZGFsQ29udHJvbHM8VSwgVj4gfT4ge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJRHluYW1pY0NsYXNzZXMsIEtleUNvZGUsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzLCBNb2RhbFJlc3VsdCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxTaXplIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFBhZ2UgZGltbWVyIGZvciBtb2RhbCBiYWNrZ3JvdW5kLiAtLT5cbjxzdWktZGltbWVyIGNsYXNzPVwicGFnZVwiXG4gICAgICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICAgICBbKGlzRGltbWVkKV09XCJkaW1CYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgIFtpc0NsaWNrYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICBbdHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgICAgICAgICBbd3JhcENvbnRlbnRdPVwiZmFsc2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIj5cblxuICAgIDwhLS0gTW9kYWwgY29tcG9uZW50LCB3aXRoIHRyYW5zaXRpb24gY29tcG9uZW50IGF0dGFjaGVkIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtb2RhbFwiXG4gICAgICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRyYW5zaXRpb25Db250cm9sbGVyPy5pc1Zpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsU2NyZWVuXCJcbiAgICAgICAgIFtjbGFzcy5iYXNpY109XCJpc0Jhc2ljXCJcbiAgICAgICAgIFtjbGFzcy5zY3JvbGxdPVwibXVzdFNjcm9sbFwiXG4gICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICNtb2RhbD5cblxuICAgICAgICA8IS0tIENvbmZpZ3VyYWJsZSBjbG9zZSBpY29uIC0tPlxuICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzQ2xvc2FibGUgJiYgaXNGdWxsU2NyZWVuXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2k+XG4gICAgICAgIDwhLS0gPG5nLWNvbnRlbnQ+IHNvIHRoYXQgPHN1aS1tb2RhbD4gY2FuIGJlIHVzZWQgYXMgYSBub3JtYWwgY29tcG9uZW50LiAtLT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tIEBWaWV3Q2hpbGQgcmVmZXJlbmNlIHNvIHdlIGNhbiBpbnNlcnQgZWxlbWVudHMgYmVzaWRlIHRoaXMgZGl2LiAtLT5cbiAgICAgICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zdWktZGltbWVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkuZGltbWVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLyogYXZvaWQgLnNjcm9sbGluZyBhcyBTZW1hbnRpYyBVSSBhZGRzIHVud2FudGVkIHN0eWxlcy4gKi9cbi5zY3JvbGwge1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsPFQsIFU+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKVxuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlU7XG5cbiAgICAvLyBTZXBhcmF0ZSBjbGFzcyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIG1ldGhvZHMgdG8gc3VwcG9ydCBwYXNzaW5nIGludG8gY29tcG9uZW50cy5cbiAgICBwdWJsaWMgY29udHJvbHM6TW9kYWxDb250cm9sczxULCBVPjtcblxuICAgIHB1YmxpYyBnZXQgYXBwcm92ZSgpOk1vZGFsUmVzdWx0PFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuYXBwcm92ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlbnkoKTpNb2RhbFJlc3VsdDxVPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmRlbnk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgYXBwcm92ZWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJhcHByb3ZlZFwiKVxuICAgIHB1YmxpYyBvbkFwcHJvdmU6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJkZW5pZWRcIilcbiAgICBwdWJsaWMgb25EZW55OkV2ZW50RW1pdHRlcjxVPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3Nlcy5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc2VkXCIpXG4gICAgcHVibGljIG9uRGlzbWlzczpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAVmlld0NoaWxkKFwibW9kYWxcIilcbiAgICBwcml2YXRlIF9tb2RhbEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIC8vIFNpemUgdXNlZCB0byBkaXNwbGF5IHRoZSBtb2RhbC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHJpdmF0ZSBfaXNGdWxsU2NyZWVuOmJvb2xlYW47XG5cbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRnVsbFNjcmVlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGdWxsU2NyZWVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNGdWxsU2NyZWVuKGZ1bGxTY3JlZW46Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0Z1bGxTY3JlZW4gPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoZnVsbFNjcmVlbik7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIGhhcyBiYXNpYyBzdHlsZXMgYXBwbGllZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBjdXJyZW50bHkgaXMgZGlzcGxheWluZyBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0U2Nyb2xsOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0QWx3YXlzU2Nyb2xsOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbXVzdFNjcm9sbCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVzdFNjcm9sbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG11c3RTY3JvbGwobXVzdFNjcm9sbDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICAvLyAnQ2FjaGUnIHZhbHVlIGluIF9tdXN0QWx3YXlzU2Nyb2xsIHNvIHRoYXQgaWYgYHRydWVgLCBfbXVzdFNjcm9sbCBpc24ndCBldmVyIGF1dG8tdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHJpdmF0ZSBfaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzSW52ZXJ0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW52ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0ludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBiYWNrcm91bmQgZGltbWVyIGlzIGFjdGl2ZS5cbiAgICBwdWJsaWMgZGltQmFja2dyb3VuZDpib29sZWFuO1xuICAgIC8vIFRydWUgYWZ0ZXIgYGFwcHJvdmVgIG9yIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfaXNDbG9zaW5nOmJvb2xlYW47XG5cbiAgICAvLyBgVmlld0NvbnRhaW5lclJlZmAgZm9yIHRoZSBlbGVtZW50IHRoZSB0ZW1wbGF0ZSBnZXRzIGluamVjdGVkIGFzIGEgc2libGluZyBvZi5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIC8vIFBhcmVudCBlbGVtZW50IG9mIG1vZGFsIGJlZm9yZSByZWxvY2F0aW9uIHRvIGRvY3VtZW50IGJvZHkuXG4gICAgcHJpdmF0ZSBfb3JpZ2luYWxDb250YWluZXI/OkVsZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZnJvbSBgTW9kYWxDb25maWdgICh0byBhdm9pZCB3cml0aW5nIGRlZmF1bHRzIHR3aWNlKS5cbiAgICAgICAgY29uc3QgY29uZmlnID0gbmV3IE1vZGFsQ29uZmlnPHVuZGVmaW5lZCwgVCwgVT4oKTtcbiAgICAgICAgdGhpcy5sb2FkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gRXZlbnQgZW1pdHRlcnMgZm9yIGVhY2ggb2YgdGhlIHBvc3NpYmxlIG1vZGFsIG91dGNvbWVzLlxuICAgICAgICB0aGlzLm9uQXBwcm92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgY29udHJvbHMgd2l0aCBhY3Rpb25zIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgY2FzZXMuXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgTW9kYWxDb250cm9sczxULCBVPihcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkFwcHJvdmUuZW1pdChyZXMpKSxcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkRlbnkuZW1pdChyZXMpKSk7XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgdmFyaWFibGUgaW5pdGlhbGlzYXRpb24uXG4gICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIHZpc2libGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaW1CYWNrZ3JvdW5kID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBNb3ZlIHRoZSBtb2RhbCB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBlbnN1cmUgY29ycmVjdCBzY3JvbGxpbmcuXG4gICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlICN0ZW1wbGF0ZVNpYmxpbmcgZWxlbWVudCBmcm9tIHRoZSBET00gdG8gZml4IGJvdHRvbSBib3JkZXIgc3R5bGVzLlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlU2libGluZy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgaWYgKHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1hcmdpbiBvZmZzZXQgdG8gY2VudGVyIG1vZGFsIGNvcnJlY3RseSBvbi1zY3JlZW4uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBtb2RhbCB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICBwdWJsaWMgbG9hZENvbmZpZzxWPihjb25maWc6TW9kYWxDb25maWc8ViwgVCwgVT4pOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBjb25maWcuaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGNvbmZpZy5jbG9zZVJlc3VsdDtcblxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBjb25maWcuaXNGdWxsU2NyZWVuO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBjb25maWcuaXNCYXNpYztcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gY29uZmlnLmlzSW52ZXJ0ZWQ7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gY29uZmlnLm11c3RTY3JvbGw7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gY29uZmlnLnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzZXMgdGhlIG1vZGFsIHdpdGggYSB0cmFuc2l0aW9uLCBmaXJpbmcgdGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIGRpc21pc3MoY2FsbGJhY2s6KCkgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IGN1cnJlbnRseSBjbG9zaW5nLFxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgaW52aXNpYmxlLlxuICAgICAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRvbmUsIG1vdmUgdGhlIG1vZGFsIGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uLCBlbWl0IGEgZGlzbWlzcyBldmVudCwgYW5kIGZpcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3JpZ2luYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhICdkZW55JyBvdXRjb21lLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgcmVhc29uLlxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYWxsb3dlZCB0byBjbG9zZSwgZmlyZSB0aGUgZGVueSByZXN1bHQgd2l0aCB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVueSh0aGlzLmNsb3NlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY2lkZXMgd2hldGhlciB0aGUgbW9kYWwgbmVlZHMgdG8gcmVwb3NpdGlvbiB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgcHJpdmF0ZSB1cGRhdGVTY3JvbGwoKTp2b2lkIHtcbiAgICAgICAgLy8gU2VtYW50aWMgVUkgbW9kYWwgbWFyZ2luIGlzIDMuNXJlbSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBmb250IHNpemUsIHNvIGZvciBjb21wYXRpYmlsaXR5OlxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgKiAzLjU7XG5cbiAgICAgICAgLy8gX211c3RBbHdheXNTY3JvbGwgd29ya3MgYnkgc3RvcHBpbmcgX211c3RTY3JvbGwgZnJvbSBiZWluZyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQsIHNvIGl0IHN0YXlzIGB0cnVlYC5cbiAgICAgICAgaWYgKCF0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsICYmIHRoaXMuX21vZGFsRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIFRoZSBtb2RhbCBtdXN0IHNjcm9sbCBpZiB0aGUgd2luZG93IGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gdGhlIG1vZGFsIGhlaWdodCArIGJvdGggbWFyZ2lucy5cbiAgICAgICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPCBlbGVtZW50LmNsaWVudEhlaWdodCArIG1hcmdpbiAqIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgbW9kYWwgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBEb2N1bWVudCBsaXN0ZW5lciBpcyBmaW5lIGhlcmUgYmVjYXVzZSBub2JvZHkgd2lsbCBoYXZlIGVub3VnaCBtb2RhbHMgb3Blbi5cbiAgICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5dXBcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50S2V5VXAoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGF1dG9tYXRpY2FsbHkgY292ZXJzIGNhc2Ugb2YgYCFpc0Nsb3NhYmxlYCwgc28gY2hlY2sgbm90IG5lZWRlZC5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6cmVzaXplXCIpXG4gICAgcHVibGljIG9uRG9jdW1lbnRSZXNpemUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgVGVtcGxhdGVNb2RhbENvbmZpZywgQ29tcG9uZW50TW9kYWxDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IEFjdGl2ZU1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvYWN0aXZlLW1vZGFsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge31cblxuICAgIHB1YmxpYyBvcGVuPFQsIFUsIFY+KG1vZGFsOk1vZGFsQ29uZmlnPFQsIFUsIFY+KTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBtb2RhbCBjb21wb25lbnQgdG8gYmUgc2hvd24uXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50PFN1aU1vZGFsPFUsIFY+PihTdWlNb2RhbCk7XG5cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciB0aGUgY3JlYXRlZCBtb2RhbCBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgICAgIGlmIChtb2RhbCBpbnN0YW5jZW9mIFRlbXBsYXRlTW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEluamVjdCB0aGUgdGVtcGxhdGUgaW50byB0aGUgdmlldy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyhtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcsIG1vZGFsLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgLy8gYGxldC1jb250ZXh0YFxuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogbW9kYWwuY29udGV4dCxcbiAgICAgICAgICAgICAgICAvLyBgbGV0LW1vZGFsPVwibW9kYWxcImBcbiAgICAgICAgICAgICAgICBtb2RhbDogY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2xzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RhbCBpbnN0YW5jZW9mIENvbXBvbmVudE1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgY29tcG9uZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1vZGFsIGNvbnRlbnQsXG4gICAgICAgICAgICAvLyBpbmplY3RpbmcgYW4gaW5zdGFuY2Ugb2YgYE1vZGFsYCB0byBiZSB1c2VkIGluIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogbmV3IE1vZGFsKG1vZGFsQ29tcG9uZW50LmNvbnRyb2xzLCBtb2RhbC5jb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSBuZXcgY29tcG9uZW50IGludG8gdGhlIGNvbnRlbnQgb2YgdGhlIG1vZGFsLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb1ZpZXcoY29udGVudENvbXBvbmVudFJlZiwgbW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nKTtcblxuICAgICAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBhY2Nlc3MgdG8gdGhlIGNvbnRlbnQgY29tcG9uZW50J3MgRE9NIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnRDb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIGluc2lkZSB0aGUgY29tcG9uZW50IHRvIHRoZSBtYWluIG1vZGFsIGVsZW1lbnQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGRvbmUgc28gdGhhdCBDU1MgY2xhc3NlcyBhcHBseSBjb3JyZWN0bHkuIEl0IGRvZXMgc3RvcCBhbnkgY3VzdG9tIHN0eWxlcyBmcm9tIHdvcmtpbmcgaG93ZXZlcixcbiAgICAgICAgICAgIC8vIHNvIG90aGVyIHdheXMgbWF5IGhhdmUgdG8gYmUgaW52ZXN0aWdhdGVkLlxuICAgICAgICAgICAgd2hpbGUgKGNvbnRlbnRFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSAmJiBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCdzICdlbXB0eSBzaGVsbCcgZnJvbSB0aGUgRE9NLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5kZXRhY2hGcm9tRG9jdW1lbnQoY29udGVudENvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggdGhlIG5ldyBtb2RhbCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAvLyBUaGUgY29tcG9uZW50IHdpbGwgbW92ZSBpdHNlbGYgdG8gdGhlIGRvY3VtZW50IGJvZHkgZm9yIGNvcnJlY3RsIHN0eWxpbmcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbihjb21wb25lbnRSZWYpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGdlbmVyYXRlZCBtb2RhbCB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIG1vZGFsQ29tcG9uZW50LmxvYWRDb25maWcobW9kYWwpO1xuXG4gICAgICAgIC8vIFJldHVybiBhbiBpbnN0YW5jZSBvZiBhbiBgQWN0aXZlTW9kYWxgLCBzbyB0aGUgdXNlciBjYW4gY29udHJvbCB0aGUgbmV3IG1vZGFsLlxuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZU1vZGFsKG1vZGFsLCBjb21wb25lbnRSZWYpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aURpbW1lck1vZHVsZSB9IGZyb20gXCIuLi9kaW1tZXIvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcHJvZ3Jlc3NcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJhclwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiAqbmdJZj1cInNob3dQcm9ncmVzc1wiPnt7IHBlcmNlbnRhZ2UgfX0lPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsYWJlbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYmFyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcyAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzcyB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wcm9ncmVzc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF92YWx1ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWF4aW11bTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgX292ZXJyaWRlU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b1N1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNob3dQcm9ncmVzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWF4aW11bSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcHJlY2lzaW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWNpc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZWNpc2lvbih2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChjb252ZXJ0ZWQsIDApLCAyMCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc3VjY2Vzc1wiKVxuICAgIHB1YmxpYyBnZXQgcmVhY2hlZE1heGltdW0oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlU3VjY2VzcyB8fCAoKHRoaXMudmFsdWUgPj0gdGhpcy5tYXhpbXVtKSAmJiB0aGlzLmF1dG9TdWNjZXNzKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmRhdGEtcGVyY2VudFwiKVxuICAgIHB1YmxpYyBnZXQgcGVyY2VudGFnZSgpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJvdW5kZWRWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMudmFsdWUsIDApLCB0aGlzLm1heGltdW0pO1xuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoYm91bmRlZFZhbHVlIC8gdGhpcy5tYXhpbXVtKSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBzZXQgY2xhc3NWYWx1ZShjbGFzc2VzOnN0cmluZykge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImF0dGFjaGVkXCIpIHx8IGNsYXNzZXMuaW5jbHVkZXMoXCJ0aW55XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwic3VjY2Vzc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gMTAwO1xuICAgICAgICB0aGlzLnByZWNpc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlQcm9ncmVzcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpIGNsYXNzPVwiaWNvblwiXG4gICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBpY29uczsgbGV0IGkgPSBpbmRleFwiXG4gICAobW91c2VvdmVyKT1cIm9uTW91c2VvdmVyKGkpXCJcbiAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgIFtjbGFzcy5zZWxlY3RlZF09XCJob3ZlcmVkSW5kZXggPj0gaSAmJiAhaXNSZWFkb25seVwiXG4gICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlID4gaVwiPlxuPC9pPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5yZWFkLW9ubHkgLmljb24ge1xuICAgIGN1cnNvcjogYXV0b1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PG51bWJlcj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmF0aW5nXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB2YWx1ZTpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhpbXVtID0gK3ZhbHVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaWNvbnMoKTp1bmRlZmluZWRbXSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItbGl0ZXJhbFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4aW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhvdmVyZWRJbmRleDpudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMubWF4aW11bSA9IDU7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soaTpudW1iZXIpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2VvdmVyKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSBpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuICAgIHB1YmxpYyBvbk1vdXNlb3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIGhvc3Q6IHsgXCIodmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmF0aW5nVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPG51bWJlciwgU3VpUmF0aW5nPiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYXRpbmcpIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVJhdGluZywgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUmF0aW5nLFxuICAgICAgICBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVJhdGluZyxcbiAgICAgICAgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElSZXN1bHRDb250ZXh0IH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaC1yZXN1bHRcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlLCBxdWVyeSlcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaFJlc3VsdDxUPiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlc3VsdFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk6c3RyaW5nO1xuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFiZWwgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IGxhYmVsLlxuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IHZhbHVlID0+IFwiXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBMb29rdXBGblJlc3VsdCwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuaW50ZXJmYWNlIElDYWNoZWRBcnJheTxUPiB7IFtxdWVyeTpzdHJpbmddOlRbXTsgfVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZTxULCBVPiB7XG4gICAgLy8gU3RvcmVzIHRoZSBhdmFpbGFibGUgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9vcHRpb25zOlRbXTtcbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG9wdGlvbnMuIE11c3QgYmUgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBwcm9taXNlLlxuICAgIHByaXZhdGUgX29wdGlvbnNMb29rdXA/Okxvb2t1cEZuPFQsIFU+O1xuICAgIC8vIEZpZWxkIHRoYXQgb3B0aW9ucyBhcmUgc2VhcmNoZWQgJiBkaXNwbGF5ZWQgb24uXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0ZpZWxkPzpzdHJpbmc7XG4gICAgLy8gRmlsdGVycyBhIGxpc3Qgb2Ygb3B0aW9ucy5cbiAgICBwdWJsaWMgb3B0aW9uc0ZpbHRlcjpGaWx0ZXJGbjxUPjtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBbXTtcbiAgICAgICAgLy8gV2UgY2Fubm90IHVzZSBib3RoIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFJlc2V0IGVudGlyZSBzZXJ2aWNlIHdpdGggbmV3IG9wdGlvbnMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNMb29rdXAoKTpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zTG9va3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgICAgIC8vIEFzIGJlZm9yZSwgY2Fubm90IHVzZSBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1Mb29rdXAoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vcHRpb25zTG9va3VwICYmIHRoaXMub3B0aW9uc0xvb2t1cC5sZW5ndGggPT09IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXNldCBvdGhlcndpc2Ugd2Ugd291bGQgbm93IGJlIHNob3dpbmcgaW52YWxpZCBzZWFyY2ggcmVzdWx0cy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgcmVzdWx0cyBvZiB0aGUgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0czpUW107XG4gICAgLy8gQ2FjaGUgb2YgcmVzdWx0cywgaW5kZXhlZCBieSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzQ2FjaGU6SUNhY2hlZEFycmF5PFQ+O1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnk6c3RyaW5nO1xuICAgIC8vIEFsbG93cyB0aGUgZW1wdHkgcXVlcnkgdG8gcHJvZHVjZSByZXN1bHRzLlxuICAgIHB1YmxpYyBhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbjtcbiAgICAvLyBIb3cgbG9uZyB0byBkZWxheSB0aGUgc2VhcmNoIGZvciB3aGVuIHVzaW5nIHVwZGF0ZVF1ZXJ5RGVsYXllZC4gU3RvcmVkIGluIG1zLlxuICAgIHB1YmxpYyBzZWFyY2hEZWxheTpudW1iZXI7XG4gICAgLy8gU3RvcmVzIHRoZSBzZWFyY2ggdGltZW91dCBoYW5kbGUgc28gd2UgY2FuIGNhbmNlbCBpdC5cbiAgICBwcml2YXRlIF9zZWFyY2hEZWxheVRpbWVvdXQ6bnVtYmVyO1xuICAgIC8vIFByb3ZpZGVzICdsb2FkaW5nJyBmdW5jdGlvbmFsaXR5LlxuICAgIHByaXZhdGUgX2lzU2VhcmNoaW5nOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFsbG93RW1wdHlRdWVyeTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnNGaWx0ZXIgPSAob3MsIHEpID0+IHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhIFJlZ0V4cC5cbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHRoaXMuX3F1ZXJ5KTtcblxuICAgICAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHJlc3VsdHMgaWYgdGhlIHF1ZXJ5IHdhcyB2YWxpZCByZWdleC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyB0aGUgcmVzdWx0cyBzdWRkZW5seSBiZWNvbWluZyBlbXB0eSBpZiBhbiBpbnZhbGlkIHJlZ2V4IHN0cmluZyBpcyBpbnB1dHRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3NcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIG9uIHRoZSBvcHRpb25zIHdpdGggYSBzdHJpbmcgbWF0Y2ggb24gdGhlIGZpZWxkIHdlIGFyZSB0ZXN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG8gPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4obywgdGhpcy5fb3B0aW9uc0ZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaChyZWdleCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgc2luY2UgaXQgd2Fzbid0IGEgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIGFuZCByZXNldC5cbiAgICAgICAgdGhpcy5hbGxvd0VtcHR5UXVlcnkgPSBhbGxvd0VtcHR5UXVlcnk7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgcXVlcnkgYWZ0ZXIgdGhlIHNwZWNpZmllZCBzZWFyY2ggZGVsYXkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEZWxheVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc2VhcmNoIHF1ZXJ5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGlmICh0aGlzLl9xdWVyeSA9PT0gXCJcIiAmJiAhdGhpcy5hbGxvd0VtcHR5UXVlcnkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB0aGUgbmV3IHF1ZXJ5IGlzIGVtcHR5IChhbmQgd2UgZG9uJ3QgYWxsb3cgZW1wdHkgcXVlcmllcykuXG4gICAgICAgICAgICAvLyBEb24ndCByZXNldCBzbyB0aGF0IHdoZW4gYW5pbWF0aW5nIGNsb3NlZCB3ZSBkb24ndCBnZXQgYSBqdWRkZXIuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRzQ2FjaGUuaGFzT3duUHJvcGVydHkodGhpcy5fcXVlcnkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcXVlcnkgaXMgYWxyZWFkeSBjYWNoZWQsIG1ha2UgdXNlIG9mIGl0LlxuICAgICAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV07XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9ucyBsb29rdXAgd2l0aG91dCBhIHRoaXMgY29udGV4dC5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5TG9va3VwID0gdGhpcy5fb3B0aW9uc0xvb2t1cC5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fcXVlcnkpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG5cbiAgICAgICAgICAgIHF1ZXJ5TG9va3VwXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuc2V0ICdsb2FkaW5nJyBzdGF0ZSwgYW5kIHRocm93IHRoZSByZXR1cm5lZCBlcnJvciB3aXRob3V0IHVwZGF0aW5nIHRoZSByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMub3B0aW9uc0ZpbHRlci5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fb3B0aW9ucywgdGhpcy5fcXVlcnkpO1xuICAgICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhmaWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyAmIGNhY2hlcyB0aGUgbmV3IHNldCBvZiByZXN1bHRzLlxuICAgIHByaXZhdGUgdXBkYXRlUmVzdWx0cyhyZXN1bHRzOlRbXSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV0gPSByZXN1bHRzO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSk6TG9va3VwRm5SZXN1bHQ8VD47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlVbXSk6TG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSB8IFVbXSk6TG9va3VwRm5SZXN1bHQ8VD4gfCBMb29rdXBGblJlc3VsdDxUW10+IHtcbiAgICAgICAgaWYgKGluaXRpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFVbXT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VD47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgdG8gcmVnZXggd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICBwcml2YXRlIHRvUmVnZXgocXVlcnk6c3RyaW5nKTpSZWdFeHAgfCBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIEhUTUwgZm9yIGhpZ2hsaWdodGVkIG1hdGNoIHRleHQuXG4gICAgcHVibGljIGhpZ2hsaWdodE1hdGNoZXModGV4dDpzdHJpbmcsIHF1ZXJ5OnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgocXVlcnkpO1xuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IGA8Yj4ke21hdGNofTwvYj5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZXNldHMgdGhlIHNlYXJjaCBiYWNrIHRvIGEgcHJpc3RpbmUgc3RhdGUuXG4gICAgcHJpdmF0ZSByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElTZWFyY2hMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdENvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeTpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIGlucHV0XCIgW2NsYXNzLmljb25dPVwiaGFzSWNvblwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJwcm9tcHRcIiB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuICAgIDxpICpuZ0lmPVwiaGFzSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgbWVudVNlbGVjdGVkSXRlbUNsYXNzPVwiYWN0aXZlXCI+XG5cbiAgICA8c3VpLXNlYXJjaC1yZXN1bHQgKm5nRm9yPVwibGV0IHIgb2YgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJyZXN1bHRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwicmVzdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHIpXCI+PC9zdWktc2VhcmNoLXJlc3VsdD5cblxuICAgIDxkaXYgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJtZXNzYWdlIGVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBFbnN1cmVzIHJlc3VsdHMgZGl2IGhhcyBtYXJnaW4uICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLyogRml4ZXMgcG9zaXRpb25pbmcgd2hlbiByZXN1bHRzIGFyZSBwdXNoZWQgYWJvdmUgdGhlIHNlYXJjaC4gKi9cbi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoPFQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBUPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgdGhlIHNlYXJjaCBlbGVtZW50IGhhcyBhIHZpc2libGUgc2VhcmNoIGljb24uXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzSWNvbjpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgLy8gR2V0cyAmIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQgZGlzcGxheWVkIGluc2lkZSB0aGUgdGV4dCBpbnB1dC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlYXJjaExvY2FsZVZhbHVlcztcblxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VhcmNoTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlYXJjaExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VhcmNoXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgYSBkZWxheWVkIHNlYXJjaC5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVzdWx0cyBvcGVuIHN0YXRlIGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgcXVlcnkgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bHRGb3JtYXR0ZXI/OihyOlQsIHE6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdEZvcm1hdHRlcigpOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fcmVzdWx0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0Rm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0aGlzLnJlYWRWYWx1ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAociwgcSkgPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5yZWFkVmFsdWUociksIHEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlc3VsdEZvcm1hdHRlcihmb3JtYXR0ZXI6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRGb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdWx0VGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV0YWluU2VsZWN0ZWRSZXN1bHQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhSZXN1bHRzOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cy5zbGljZSgwLCB0aGlzLm1heFJlc3VsdHMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSZXN1bHQ/OlQ7XG5cbiAgICAvLyBFbWl0cyB3aGVuZXZlciBhIG5ldyByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAgQE91dHB1dChcInJlc3VsdFNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uUmVzdWx0U2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCByZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVD4oKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAyMDA7XG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyA9IDc7XG5cbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VhcmNoO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdHMgYSByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdChyZXN1bHQ6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZC5lbWl0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkodGhpcy5yZWFkVmFsdWUocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IG9wZW4gb24gY2xpY2sgd2hlbiB0aGVyZSBpcyBhIHF1ZXJ5IGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWRzIHRoZSBzcGVjaWZpZWQgZmllbGQgZnJvbSBhbiBpdGVtLlxuICAgIHB1YmxpYyByZWFkVmFsdWUob2JqZWN0OlQpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmplY3QsIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VhcmNoLFxuICAgICAgICBTdWlTZWFyY2hSZXN1bHRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VhcmNoXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gW2lubmVySFRNTF09XCJyZW5kZXJlZFRleHRcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE9wdGlvbjxUPiBleHRlbmRzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQsIHdoZXRoZXIgYnkgY2xpY2tpbmcgb3IgYnkga2V5Ym9hcmQuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVuZGVyZWRUZXh0PzpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IGZvcm1hdHRlcihmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBmb3JtYXR0ZXIodGhpcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlc1RlbXBsYXRlOmJvb2xlYW47XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gV2UgaW5oZXJpdCBTdWlEcm9wZG93bk1lbnVJdGVtIHRvIGF1dG9tYXRpY2FsbHkgZ2FpbiBhbGwga2V5Ym9hcmQgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBkb25lIHZpYSBhZGRpbmcgdGhlIC5pdGVtIGNsYXNzIGJlY2F1c2UgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50KTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhlIGRlZmF1bHQgdGV4dCBhbiBlbXB0eSBsYWJlbCwgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IG9uZS5cbiAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudXNlc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aVNlbGVjdFNlYXJjaF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RTZWFyY2gge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmF1dG9jb21wbGV0ZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBhdXRvQ29tcGxldGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeVVwZGF0ZWQ6RXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgcHVibGljIG9uUXVlcnlLZXlEb3duOkV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQuZW1pdChxdWVyeSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93bi5lbWl0KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cygpOnZvaWQge1xuICAgICAgICAvLyBTbGlnaHRseSBkZWxheSB0byBzdXBwb3J0IGluIG1lbnUgc2VhcmNoLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UsIExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi8uLi9zZWFyY2gvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VsZWN0TG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uQ29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5PzpzdHJpbmc7XG59XG5cbi8vIFdlIHVzZSBnZW5lcmljIHR5cGUgVCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBvcHRpb25zIHdlIGFyZSB3b3JraW5nIHdpdGgsXG4vLyBhbmQgVSB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgb3B0aW9uIHVzZWQgYXMgdGhlIHZhbHVlLlxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVT47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcm90ZWN0ZWQgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHJlbmRlcmVkIHNlbGVjdCBvcHRpb25zLiAoUmVuZGVyZWQgYnkgdGhlIHVzZXIgdXNpbmcgKm5nRm9yKS5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVNlbGVjdE9wdGlvbiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBfcmVuZGVyZWRPcHRpb25zOlF1ZXJ5TGlzdDxTdWlTZWxlY3RPcHRpb248VD4+O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50cyBvbiB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9yZW5kZXJlZFN1YnNjcmlwdGlvbnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kcm9wZG93blwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZW51LmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1NlYXJjaGFibGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBpc1NlYXJjaEV4dGVybmFsOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgZ2V0IGhhc1NlYXJjaENsYXNzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSAmJiAhdGhpcy5pc1NlYXJjaEV4dGVybmFsO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChTdWlTZWxlY3RTZWFyY2gpXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX21hbnVhbFNlYXJjaD86U3VpU2VsZWN0U2VhcmNoO1xuXG4gICAgcHVibGljIGdldCBzZWFyY2hJbnB1dCgpOlN1aVNlbGVjdFNlYXJjaCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTZWFyY2ggfHwgdGhpcy5faW50ZXJuYWxTZWFyY2g7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiaW5kZXgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwpIHtcbiAgICAgICAgICAgIC8vIElmIG9wZW4gJiBpbiBtZW51IHNlYXJjaCwgcmVtb3ZlIGZyb20gdGFiaW5kZXggKGFzIGlucHV0IGFsd2F5cyBhdXRvZm9jdXNzZXMpLlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1NlYXJjaENsYXNzKSB7XG4gICAgICAgICAgICAvLyBJZiBzZWFyY2ggaW5wdXQgZW5hYmxlZCwgdGFiIGdvZXMgdG8gaW5wdXQuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChsb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBEZXByZWNhdGVkXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVVwZGF0ZUhvb2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSByZW5kZXJlZCB0ZXh0IGFzIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWxGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbGFiZWxGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGFiZWxHZXR0ZXIoKToob2JqOlQpID0+IHN0cmluZyB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbGFiZWwgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iaiwgdGhpcy5sYWJlbEZpZWxkKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlRmllbGQ6c3RyaW5nO1xuXG4gICAgcHVibGljIGdldCB2YWx1ZUdldHRlcigpOihvYmo6VCkgPT4gVSB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgVT4ob2JqLCB0aGlzLnZhbHVlRmllbGQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG9wdGlvblRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIHByaXZhdGUgX29wdGlvbkZvcm1hdHRlcj86KG86VCwgcT86c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZ3VyZWRGb3JtYXR0ZXIoKToob3B0aW9uOlQpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25Gb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuX29wdGlvbkZvcm1hdHRlciEobywgdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnF1ZXJ5IDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5sYWJlbEdldHRlcihvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuc2VhcmNoU2VydmljZS5oaWdobGlnaHRNYXRjaGVzKHRoaXMubGFiZWxHZXR0ZXIobyksIHRoaXMucXVlcnkgfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uRm9ybWF0dGVyKGZvcm1hdHRlcjooKG9wdGlvbjpULCBxdWVyeT86c3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlbGVjdExvY2FsZVZhbHVlcztcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SVNlbGVjdExvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklTZWxlY3RMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcInNlbGVjdFwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByb3RlY3RlZCBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBkbyB3YW50IGFuIGVtcHR5IHF1ZXJ5IHRvIHJldHVybiBhbGwgcmVzdWx0cy5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVT4odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5pY29uID0gXCJkcm9wZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgICAgICAvLyBXZSBtYW51YWxseSBzcGVjaWZ5IHRoZSBtZW51IGl0ZW1zIHRvIHRoZSBtZW51IGJlY2F1c2UgdGhlIEBDb250ZW50Q2hpbGRyZW4gZG9lc24ndCBwaWNrIHVwIG91ciBkeW5hbWljYWxseSByZW5kZXJlZCBpdGVtcy5cbiAgICAgICAgdGhpcy5fbWVudS5pdGVtcyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5fbWFudWFsU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeVVwZGF0ZWQuc3Vic2NyaWJlKChxOnN0cmluZykgPT4gdGhpcy5xdWVyeSA9IHEpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5S2V5RG93bi5zdWJzY3JpYmUoKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vblF1ZXJ5SW5wdXRLZXlkb3duKGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG11c3QgY2FsbCB0aGlzIGltbWVkaWF0ZWx5IGFzIGNoYW5nZXMgZG9lc24ndCBmaXJlIHdoZW4geW91IHN1YnNjcmliZS5cbiAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VsZWN0O1xuICAgIH1cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBxdWVyeSB0aGVuIG9wZW4gdGhlIGRyb3Bkb3duLCBhcyBhZnRlciBrZXlib2FyZCBpbnB1dCBpdCBzaG91bGQgYWx3YXlzIGJlIG9wZW4uXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0UXVlcnkoZGVsYXllZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIC8vIFRoZSBzZWFyY2ggZGVsYXkgaXMgc2V0IHRvIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIHRvIGVuc3VyZSByZXN1bHRzXG4gICAgICAgIC8vIGFyZW4ndCByZW5kZXJlZCBhcyB0aGUgc2VsZWN0IGNsb3NlcyBhcyB0aGF0IGNhdXNlcyBhIHN1ZGRlbiBmbGFzaC5cbiAgICAgICAgaWYgKGRlbGF5ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IHRoaXMuX21lbnUubWVudVRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeURlbGF5ZWQoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBhbGwgcHJldmlvdXMgc3Vic2NyaXB0aW9ucyB0byBhdm9pZCBtZW1vcnkgbGVha3Mgb24gbGFyZ2Ugc2VsZWN0cy5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocnMgPT4gcnMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHtcbiAgICAgICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IGluaXRpYWxpc2F0aW9uIHRvIGF2b2lkIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9ycy4gVE9ETyAtIGxvb2sgaW50byBhdm9pZGluZyB0aGlzIVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMucHVzaChyby5vblNlbGVjdGVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNlbGVjdE9wdGlvbihyby52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgbm8gb3B0aW9ucyBoYXZlIGJlZW4gcHJvdmlkZWQsIGF1dG9nZW5lcmF0ZSB0aGVtIGZyb20gdGhlIHJlbmRlcmVkIG9uZXMuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnMubWFwKHJvID0+IHJvLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIG9wdGlvbi51c2VzVGVtcGxhdGUgPSAhIXRoaXMub3B0aW9uVGVtcGxhdGU7XG4gICAgICAgIG9wdGlvbi5mb3JtYXR0ZXIgPSB0aGlzLmNvbmZpZ3VyZWRGb3JtYXR0ZXI7XG5cbiAgICAgICAgaWYgKG9wdGlvbi51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKG9wdGlvbi50ZW1wbGF0ZVNpYmxpbmcsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24uY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZDtcblxuICAgIHByb3RlY3RlZCBmaW5kT3B0aW9uKG9wdGlvbnM6VFtdLCB2YWx1ZTpVKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gVHJpZXMgdG8gZmluZCBhbiBvcHRpb24gaW4gb3B0aW9ucyBhcnJheVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMudmFsdWVHZXR0ZXIobykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNhcmV0Q2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRyb3Bkb3duIGlzIHNlYXJjaGFibGUsIGNsaWNraW5nIHNob3VsZCBrZWVwIGl0IG9wZW4sIG90aGVyd2lzZSB3ZSB0b2dnbGUgdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5pc1NlYXJjaGFibGUgPyB0cnVlIDogIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IGZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgd2hlbmV2ZXIgY2xpY2tpbmcgb24gdGhlIHNlbGVjdC5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5UHJlc3MoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkRvd24pIHtcblxuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWFyY2hhYmxlICYmIHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEZvY3Vzc2VzIHRoZSBzZWFyY2ggaW5wdXQgb25seSB3aGVuIHNlYXJjaGFibGUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIHRoYXQgZHJhd3MgdGhlIHByb3ZpZGVkIHRlbXBsYXRlIGJlc2lkZSB0aGUgcHJvdmlkZWQgVmlld0NvbnRhaW5lclJlZi5cbiAgICBwcm90ZWN0ZWQgZHJhd1RlbXBsYXRlKHNpYmxpbmdSZWY6Vmlld0NvbnRhaW5lclJlZiwgdmFsdWU6VCk6dm9pZCB7XG4gICAgICAgIHNpYmxpbmdSZWYuY2xlYXIoKTtcbiAgICAgICAgLy8gVXNlIG9mIGAkaW1wbGljaXRgIG1lYW5zIHVzZSBvZiA8bmctdGVtcGxhdGUgbGV0LW9wdGlvbj4gc3ludGF4IGlzIHN1cHBvcnRlZC5cbiAgICAgICAgc2libGluZ1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5vcHRpb25UZW1wbGF0ZSwge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB2YWx1ZSxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJT3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdC1sYWJlbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUpXCI+PC9zcGFuPlxuPGkgY2xhc3M9XCJkZWxldGUgaWNvblwiIChjbGljayk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9pPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdExhYmVsPFQ+IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxhYmVsXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5PzpzdHJpbmc7XG5cbiAgICBAT3V0cHV0KFwiZGVzZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvbkRlc2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMub25EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgS2V5Q29kZSwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzXCI+XG48IS0tIE11bHRpLXNlbGVjdCBsYWJlbHMgLS0+XG4gICAgPHN1aS1tdWx0aS1zZWxlY3QtbGFiZWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkT3B0aW9ucztcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2VsZWN0ZWQpPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvc3VpLW11bHRpLXNlbGVjdC1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIEhlbHBlciB0ZXh0IC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIlxuICAgICBbY2xhc3MuZGVmYXVsdF09XCJoYXNMYWJlbHNcIlxuICAgICBbY2xhc3MuZmlsdGVyZWRdPVwiISFxdWVyeSAmJiAhaXNTZWFyY2hFeHRlcm5hbFwiPlxuICAgIFxuICAgIDwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzOyBlbHNlIHNlbGVjdGVkQmxvY2tcIj57eyBwbGFjZWhvbGRlciB9fTwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDwhLS0gU3VtbWFyeSBzaG93biB3aGVuIGxhYmVscyBhcmUgaGlkZGVuIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz4ge3sgc2VsZWN0ZWRNZXNzYWdlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJ0cnVlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09IDAgXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IG1heFNlbGVjdGVkTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IGlucHV0LnNlYXJjaCB7XG4gICAgd2lkdGg6IDEyZW0gIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVW10+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zOlRbXTtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9ucz86VVtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uc0NoYW5nZTpFdmVudEVtaXR0ZXI8VVtdPjtcblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWRSZWFjaGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGlvbnMsIHRoZW4gZW1wdHkgdGhlIHJlc3VsdHMgY29tcGxldGVseS5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6VFtdID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBzZWFyY2ggcmVzdWx0cyBcXCBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHIgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmluZChvID0+IHIgPT09IG8pID09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzTGFiZWxzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTGFiZWxzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNMYWJlbHMoaGFzTGFiZWxzOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTGFiZWxzID0gaGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFNlbGVjdGVkOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRSZWFjaGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWF4aW11bSB0aGVuIHdlIGNhbiBpbW1lZGlhdGVseSByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5tYXhTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkubWF4U2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcIm1heFwiLCB0aGlzLm1heFNlbGVjdGVkLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tdWx0aXBsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VVtdPigpO1xuXG4gICAgICAgIHRoaXMuaGFzTGFiZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb25zIHN0aWxsIGV4aXN0LlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fd3JpdHRlbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5fd3JpdHRlbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5oYXNMYWJlbHMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeShmYWxzZSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWVzOlVbXSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZXMgdG8gb3B0aW9ucy5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IGl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBvcHRpb25zIHRvIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbnMgXFwge29wdGlvbn0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKHNvID0+IHNvICE9PSBvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuQmFja3NwYWNlICYmIHRoaXMucXVlcnkgPT09IFwiXCIgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHJpZ2h0bW9zdCBvcHRpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGJhY2tzcGFjZSBpbiB0aGUgc2VhcmNoIGlucHV0LlxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbih0aGlzLnNlbGVjdGVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbnNDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VVtdLCBTdWlNdWx0aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpTXVsdGlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIiBjbGFzcz1cImRlZmF1bHQgdGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeVwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XG48IS0tIFNlbGVjdGVkIGl0ZW0gLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeSB8fCBzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIj5cbiAgICA8c3BhbiAjb3B0aW9uVGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb25UZW1wbGF0ZSAmJiBzZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWRcIiBbaW5uZXJIVE1MXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXIoc2VsZWN0ZWRPcHRpb24pXCI+PC9zcGFuPlxuPC9kaXY+XG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cImlzU2VhcmNoYWJsZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgKm5nSWY9XCJpc1NlYXJjaGFibGUgJiYgYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAge3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFU+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb24/OlQ7XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9uPzpVO1xuXG4gICAgQFZpZXdDaGlsZChcIm9wdGlvblRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9vcHRpb25UZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMuc2luZ2xlLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZUdldHRlcih0aGlzLnNlbGVjdGVkT3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB0aGlzLl93cml0dGVuT3B0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICAvLyBXaGVuIHRoZSBxdWVyeSBpcyB1cGRhdGVkLCB3ZSBqdXN0IGFiYW5kb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBDaG9vc2UgYW5kIGVtaXQgdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZS5lbWl0KHRoaXMudmFsdWVHZXR0ZXIob3B0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoKTtcblxuICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlIHRvIGFuIG9wdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdTZWxlY3RlZE9wdGlvbigpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIG5ld2x5IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9uVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKHRoaXMuX29wdGlvblRlbXBsYXRlU2libGluZywgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbkNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFN1aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3QsIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcbmltcG9ydCB7IFN1aU11bHRpU2VsZWN0LCBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpLXNlbGVjdFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3RMYWJlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VsZWN0LFxuICAgICAgICBTdWlTZWxlY3RPcHRpb24sXG4gICAgICAgIFN1aVNlbGVjdFNlYXJjaCxcbiAgICAgICAgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpTXVsdGlTZWxlY3QsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0TGFiZWwsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJUcmFuc2l0aW9uID0gXCJvdmVybGF5XCIgfCBcInB1c2hcIiB8IFwic2NhbGUgZG93blwiIHwgXCJ1bmNvdmVyXCIgfCBcInNsaWRlIGFsb25nXCIgfCBcInNsaWRlIG91dFwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclRyYW5zaXRpb24gPSB7XG4gICAgT3ZlcmxheTogXCJvdmVybGF5XCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgUHVzaDogXCJwdXNoXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2NhbGVEb3duOiBcInNjYWxlIGRvd25cIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBVbmNvdmVyOiBcInVuY292ZXJcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZUFsb25nOiBcInNsaWRlIGFsb25nXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVPdXQ6IFwic2xpZGUgb3V0XCIgYXMgU2lkZWJhclRyYW5zaXRpb25cbn07XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJEaXJlY3Rpb24gPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckRpcmVjdGlvbiA9IHtcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBUb3A6IFwidG9wXCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgU2lkZWJhckRpcmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaXNWaXNpYmxlOmJvb2xlYW47XG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgcHVibGljIHdhc0p1c3RPcGVuZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbjtcblxuICAgIHByaXZhdGUgX3dpZHRoOm51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgd2lkdGgod2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodChoZWlnaHQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1Zpc2libGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIHB1YmxpYyB3aWR0aENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgcHVibGljIGhlaWdodENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc1Zpc2libGU6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLndpZHRoID0gMjYwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZS5lbWl0KGlzVmlzaWJsZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UsIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlVmlzaWJsZVN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKCF0aGlzLmlzVmlzaWJsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uLCBTaWRlYmFyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhciB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNpZGViYXJcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6U2lkZWJhclRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIGZhbHNlKSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOlNpZGViYXJEaXJlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoaXNWaXNpYmxlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYW5pbWF0aW5nXCIpXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTaWRlYmFyU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBzZXQgdGhlIGRlZmF1bHQgaGVyZSBhcyB3ZWxsIHRvIGZvcmNlIHRoZSBjbGFzc2VzIHRvIHVwZGF0ZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGltZW5zaW9ucygpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uud2lkdGggPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc2VydmljZS5oZWlnaHQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q2xhc3MoY2xhc3NOYW1lOnN0cmluZywgaXNBZGQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZVZpc2libGVTdGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSwgU2lkZWJhclRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLXNpYmxpbmdcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJTaWJsaW5nIHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6U2lkZWJhclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpTaWRlYmFyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtKCkpO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRXaGVuVmlzaWJsZTpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVkXCIpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmIHRoaXMuaXNEaW1tZWRXaGVuVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIik7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5PdmVybGF5ICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiAhPT0gU2lkZWJhclRyYW5zaXRpb24uU2NhbGVEb3duKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuc2VydmljZS53aWR0aH1weCwgJHt0aGlzLnNlcnZpY2UuaGVpZ2h0fXB4LCAwKWA7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmICF0aGlzLnNlcnZpY2Uud2FzSnVzdE9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItY29udGFpbmVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoYWJsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXIpXG4gICAgcHVibGljIHNpZGViYXI6U3VpU2lkZWJhcjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhclNpYmxpbmcpXG4gICAgcHVibGljIHNpYmxpbmc6U3VpU2lkZWJhclNpYmxpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaWRlYmFyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcnZpY2UgPSB0aGlzLnNpZGViYXIuc2VydmljZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2libGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhci1zaWJsaW5nPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpYmxpbmcuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXItc2libGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJNb2R1bGUge31cbiIsImltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBoZWFkZXI6U3VpVGFiSGVhZGVyO1xuICAgIHB1YmxpYyBjb250ZW50OlN1aVRhYkNvbnRlbnQ7XG4gICAgcHVibGljIGluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGhlYWRlcjpTdWlUYWJIZWFkZXIsIGNvbnRlbnQ6U3VpVGFiQ29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gaGVhZGVyLmlkO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBoZWFkZXIgYW5kIGNvbnRlbnQgaXNBY3RpdmUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGluIHN5bmMuXG4gICAgICAgIHRoaXMuaGVhZGVyLmlzQWN0aXZlQ2hhbmdlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29udGVudC5pc0FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzQWN0aXZlIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICAvLyBVc2UgYHNldEFjdGl2ZVN0YXRlYCBzbyBhcyBub3QgdG8gZmlyZSAnZXh0ZXJuYWwgY2hhbmdlcycgZXZlbnQuXG4gICAgICAgIHRoaXMuaGVhZGVyLnNldEFjdGl2ZVN0YXRlKGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNEaXNhYmxlZCBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNEaXNhYmxlZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgSW5wdXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJIZWFkZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFiSGVhZGVyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInN1aVRhYkhlYWRlclwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICAvLyBJbnRlcm5hbGx5IGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGhlYWRlciBpcyBhY3RpdmUuXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIC8vIEVuYWJsZXMgdXNlIG9mIFsoaXNBY3RpdmUpXSBzbyBzdGF0ZSBjYW4gYmUgc2V0IHVzaW5nIGJvb2xlYW5zLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0FjdGl2ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyBvbmx5IHdoZW4gYGlzQWN0aXZlYCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGlucHV0LlxuICAgIHB1YmxpYyBpc0FjdGl2ZUV4dGVybmFsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGRlYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGRlYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJkZWFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uRGVhY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBPbmx5IHVzZWQgYnkgQElucHV0KCksIHJ1bnMgd2hlbmV2ZXIgdXNlciBpbnB1dCBjaGFuZ2VzIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIFJ1biBpbiB0aW1lb3V0IGJlY2F1c2UgYGlzRGlzYWJsZWRgIGNhbiBwcm9oaWJpdCB1c2VyIGZyb20gY2hhbmdpbmcgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gc28gdXBkYXRlIGlzIGRlbGF5ZWQgdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3IuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhbGxvdyBjaGFuZ2UgaWYgdGFiIGhlYWRlciBpcyBub3QgZGlzYWJsZWQuXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICF0aGlzLmlzRGlzYWJsZWQgPyBhY3RpdmUgOiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU3RhdGUoaXNBY3RpdmUpO1xuXG4gICAgICAgICAgICAvLyBGaXJlICdleHRlcm5hbCBjaGFuZ2UnIGV2ZW50IGFzIHVzZXIgaW5wdXQgaGFzIG9jY3VyZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UuZW1pdChpc0FjdGl2ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKGRpc2FibGVkOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdmFsdWUgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRvIGN1cnJlbnQgb25lLlxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCAhPT0gZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICAgICAgLy8gSWYgbm93IGRpc2FibGVkLCB0aGVuIHRhYiBoZWFkZXIgbXVzdCBiZSBkZWFjdGl2YXRlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbGx5IHVwZGF0ZSBhY3RpdmUgc3RhdGUuXG4gICAgcHVibGljIHNldEFjdGl2ZVN0YXRlKGFjdGl2ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgKGNhc3QpIGFjdGl2ZSB2YWx1ZSBoYXMgY2hhbmdlZDpcbiAgICAgICAgaWYgKCEhdGhpcy5faXNBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGFjdGl2ZTtcblxuICAgICAgICAgICAgLy8gRmlyZSB0aGUgYXBwcm9wcmlhdGUgYWN0aXZhdGlvbiBldmVudC5cbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdhcmRsZXNzLCBlbWl0IGEgY2hhbmdlIHRvIGBpc0FjdGl2ZWAsIHNvIFsoaXNBY3RpdmUpXSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UuZW1pdChhY3RpdmUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgdGFiIHdoZW4gY2xpY2tlZCwgc28gbG9uZyBhcyBpdCBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiQ29udGVudF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJDb250ZW50IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50YWJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiQ29udGVudFwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIi4uL2NsYXNzZXMvdGFiXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS10YWJzZXRcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYnNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiSGVhZGVyKVxuICAgIHByaXZhdGUgX3RhYkhlYWRlcnM6UXVlcnlMaXN0PFN1aVRhYkhlYWRlcj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkNvbnRlbnQpXG4gICAgcHJpdmF0ZSBfdGFiQ29udGVudHM6UXVlcnlMaXN0PFN1aVRhYkNvbnRlbnQ+O1xuXG4gICAgLy8gTGlzdCBvZiBhbGwgdGFicyBpbiB0aGUgdGFic2V0LlxuICAgIHB1YmxpYyB0YWJzOlRhYltdO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgIHByaXZhdGUgX2FjdGl2ZVRhYjpUYWI7XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZVRhYigpOlRhYiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWI7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBzZXR0aW5nIGEgdGFiIGFzIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiwgaXQgYXV0b21hdGljYWxseSBnYWluc1xuICAgIC8vIGBpc0FjdGl2ZWAgc3RhdHVzIChzYXZlcyBsaXR0ZXJpbmcgYGlzQWN0aXZlID0gdHJ1ZWAgZXZlcnl3aGVyZSkuXG4gICAgcHVibGljIHNldCBhY3RpdmVUYWIodGFiOlRhYikge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIG51bWJlciBvZiB0aW1lcyBgaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZGAgaXMgY2FsbGVkLlxuICAgIHByaXZhdGUgX2JhcnJpZXJDb3VudDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gW107XG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBGaXJlIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCB3aGVuIHRoZSBxdWVyeSBsaXN0cyBjaGFuZ2UuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCkpO1xuICAgICAgICB0aGlzLl90YWJDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGx5IGxvYWQgdGhlIHRhYnMuXG4gICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBlaXRoZXIgdGhlIHRhYiBoZWFkZXJzIG9yIHRhYiBjb250ZW50cyBxdWVyeSBsaXN0cyB1cGRhdGUuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIGFyZSB1c2luZyBhICdjb3VudGluZyBiYXJyaWVyIG9mIG4gPSAyJywgaS5lLiB0aGUgY29kZSB3aXRoaW4gb25seSBydW5zIGFmdGVyIHRoZSBtZXRob2QgaXMgY2FsbGVkIHR3aWNlLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgYm90aCB0aGUgaGVhZGVycyBhbmQgY29udGVudHMgcXVlcnkgbGlzdHMgY2FuIHVwZGF0ZSBiZWZvcmUgd2UgcnVuIGNvZGUgdGhhdCBtYXRjaGVzIHRoZSB0d28gdXAuXG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCsrO1xuXG4gICAgICAgIGlmICh0aGlzLl9iYXJyaWVyQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBiYXJyaWVyIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9iYXJyaWVyQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLmxvYWRUYWJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25uZWN0cyB0YWIgaGVhZGVycyB0byB0YWIgY29udGVudHMsIGFuZCBjcmVhdGVzIGEgdGFiIGluc3RhbmNlIGZvciBlYWNoIHBhaXJpbmcuXG4gICAgcHJpdmF0ZSBsb2FkVGFicygpOnZvaWQge1xuICAgICAgICAvLyBSZW1vdmUgYW55IHRhYnMgdGhhdCBubyBsb25nZXIgaGF2ZSBhbiBhc3NvY2lhdGVkIGhlYWRlci5cbiAgICAgICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+ICEhdGhpcy5fdGFiSGVhZGVycy5maW5kKHRIID0+IHRIID09PSB0LmhlYWRlcikpO1xuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIGxvYWRlZCBoZWFkZXJzIHdpdGggYXR0YWNoZWQgdGFiIGluc3RhbmNlcy5cbiAgICAgICAgICAgIC5maWx0ZXIodEggPT4gIXRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHRIID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fdGFiQ29udGVudHMuZmluZCh0QyA9PiB0Qy5pZCA9PT0gdEguaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGlmIGFuIGFzc29jaWF0ZWQgdGFiIGNvbnRlbnQgY2Fubm90IGJlIGZvdW5kIGZvciB0aGUgZ2l2ZW4gaGVhZGVyLlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFtzdWlUYWJIZWFkZXJdIG11c3QgaGF2ZSBhIHJlbGF0ZWQgW3N1aVRhYkNvbnRlbnRdLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFiIGluc3RhbmNlIGZvciB0aGlzIGhlYWRlciAmIGNvbnRlbnQgY29tYm8uXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYih0SCwgY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gYW55IGV4dGVybmFsIGNoYW5nZXMgaW4gdGhlIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUuIEV4dGVybmFsIGNoYW5nZXMgYXJlIHRyaWdnZXJlZCBieSB1c2VyIGlucHV0LlxuICAgICAgICAgICAgICAgIHRhYi5oZWFkZXIuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBpbnN0YW5jZSB0byB0aGUgbGlzdCBvZiB0YWJzLlxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBBc3NpZ24gZWFjaCB0YWIgYW4gaW5kZXggKHdoaWNoIGRlbm90ZXMgdGhlIG9yZGVyIHRoZXkgcGh5c2ljYWxseSBhcHBlYXIgaW4pLlxuICAgICAgICB0aGlzLl90YWJIZWFkZXJzXG4gICAgICAgICAgICAuZm9yRWFjaCgodEgsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnMuZmluZCh0ID0+IHQuaGVhZGVyID09PSB0SCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgICAgICB0YWIuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIHRhYnMgYnkgdGhlaXIgaW5kZXguXG4gICAgICAgIHRoaXMudGFicy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlVGFiKSB7IC8vIENoZWNrIGlmIHRoZXJlIGFyZSBubyBjdXJyZW50IGV4aXN0aW5nIGFjdGl2ZSB0YWJzLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgYWN0aXZhdGUgdGhlIGZpcnN0IGF2YWlsYWJsZSB0YWIuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlyc3RUYWIoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50YWJzLmZpbmQodCA9PiB0ID09PSB0aGlzLmFjdGl2ZVRhYikpIHsgLy8gTyd3aXNlIGNoZWNrIGlmIGN1cnJlbnQgYWN0aXZlIHRhYiBoYXMgYmVlbiBkZWxldGVkLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgZmluZCB0aGUgY2xvc2VzdC5cbiAgICAgICAgICAgIC8vIFVzZSBgc2V0VGltZW91dGAgYXMgdGhpcyBjYXVzZXMgYSAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvciBvJ3dpc2UuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRoaXMuYWN0aXZlVGFiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRXJyb3IgaWYgdGhlcmUgYXJlbid0IGFueSB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGhhdmUgbm8gdGFicyFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUgaXMgZXh0ZXJuYWxseSBjaGFuZ2VkLlxuICAgIHByaXZhdGUgb25IZWFkZXJBY3RpdmVDaGFuZ2VkKHRhYjpUYWIpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGhhcyBiZWNvbWUgYWN0aXZhdGVkLCBidXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAodGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiICE9PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIG9mIHRoZSB0YWJzLlxuICAgICAgICAgICAgdGhpcy50YWJzLmZpbHRlcih0ID0+IHQgIT09IHRhYikuZm9yRWFjaCh0ID0+IHQuaXNBY3RpdmUgPSBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgdG8gdGhpcyBvbmUuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBkZWFjdGl2YXRlZCwgYnV0IHdhcyBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAoIXRhYi5pc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGFiKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCB0YWIgdG8gaXQuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ2xvc2VzdFRhYih0YWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBpbiB0aGUgc2V0LlxuICAgIHB1YmxpYyBhY3RpdmF0ZUZpcnN0VGFiKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy50YWJzWzBdO1xuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlcyB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGEgZ2l2ZW4gb25lLlxuICAgIHB1YmxpYyBhY3RpdmF0ZUNsb3Nlc3RUYWIodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIGxldCBuZXh0QXZhaWxhYmxlOlRhYiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiJ3MgaW5kZXggaXMgaGlnaGVyIHRoYW4gYWxsIGF2YWlsYWJsZSB0YWJzLFxuICAgICAgICBpZiAodGFiLmluZGV4ID49IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBsYXN0IHRhYi5cbiAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGhpcy50YWJzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhhdCBkaWRuJ3Qgd29yaywgdHJ5IHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgIGlmICghbmV4dEF2YWlsYWJsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRhYikpIHsgLy8gV2hlbiB0aGUgZXhpdGVkIHRhYiBubyBsb25nZXIgZXhpc3RzLFxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBhIHRhYiBhdCB0aGUgc2FtZSBpbmRleC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW3RhYi5pbmRleF07XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBPciBpZiB0aGUgZXhpdGVkIHRhYiBzdGlsbCBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gR28gdG8gdGhlIHRhYiBpbW1lZGlhdGVseSB0byB0aGUgbGVmdC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW01hdGgubWF4KHRhYi5pbmRleCAtIDEsIDApXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSBjaG9zZW4gdGFiIGlzIGRpc2FibGVkLFxuICAgICAgICBpZiAobmV4dEF2YWlsYWJsZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGl0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKG5leHRBdmFpbGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBuZXh0QXZhaWxhYmxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRhYnNldCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFic2V0XCI7XG5pbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vLyBDb2xsZWN0aW9uc1xuaW1wb3J0IHtcbiAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgIFN1aVBhZ2luYXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vY29sbGVjdGlvbnMvaW50ZXJuYWxcIjtcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHtcbiAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vbW9kdWxlcy9pbnRlcm5hbFwiO1xuXG4vLyBCZWhhdmlvcnNcbmltcG9ydCB7XG4gICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2JlaGF2aW9ycy9pbnRlcm5hbFwiO1xuXG4vLyBNaXNjXG5pbXBvcnQge1xuICAgIFN1aVV0aWxpdHlNb2R1bGVcbn0gZnJvbSBcIi4vbWlzYy9pbnRlcm5hbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy8gQ29sbGVjdGlvbnNcbiAgICAgICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICAgICAgU3VpUGFnaW5hdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNb2R1bGVzXG4gICAgICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgICAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgICAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICAgICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgICAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgICAgICBTdWlUYWJzTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIEJlaGF2aW9yc1xuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTWlzY1xuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2R1bGUge31cbiJdLCJuYW1lcyI6WyIoLyoqIEB0eXBlIHs/fSAqLyAoJGV4dGVuZCkpLmRlZmF1bHQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsImZvcm1hdCIsImlzVUFXZWJWaWV3W1wiZGVmYXVsdFwiXSIsImJvd3Nlci5tb2JpbGUiLCJib3dzZXIudGFibGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxJQUFJLEdBQWlCO0lBQ3ZCLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTtTQUMzSDtRQUNELFdBQVcsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztTQUNyRjtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVU7U0FDL0U7UUFDRCxhQUFhLEVBQUU7WUFDWCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO1NBQ2xEO1FBQ0QsY0FBYyxFQUFFO1lBQ1osR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztTQUNwQztRQUNELFVBQVUsRUFBRTtZQUNSLE1BQU0sRUFBRSxNQUFNO1NBQ2pCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDakIsSUFBSSxFQUFFLElBQUk7U0FDYjtRQUNELG1CQUFtQixFQUFFO1lBQ2pCLElBQUksRUFBRSxJQUFJO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLE1BQU07U0FDZjtRQUNELGNBQWMsRUFBRSxDQUFDO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFO1lBQ1AsTUFBTSxFQUFFLFlBQVk7WUFDcEIsT0FBTyxFQUFFLGtDQUFrQztTQUM5QztLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osZ0JBQWdCLEVBQUUsWUFBWTtRQUM5QixNQUFNLEVBQUU7WUFDSixXQUFXLEVBQUUsWUFBWTtTQUM1QjtRQUNELEtBQUssRUFBRTtZQUNILFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGtCQUFrQixFQUFFLHVCQUF1QjtZQUMzQyxlQUFlLEVBQUUscUJBQXFCO1NBQ3pDO0tBQ0o7Q0FDSixDQUFDOzs7Ozs7Ozs7OztBQ2xERixtQkFBc0IsR0FBSztJQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7O0FBRUQsb0JBQTBCLE1BQVEsRUFBRSxNQUFROztJQUV4QyxJQUFNLE1BQU0sR0FBR0EsZ0JBQXdCLElBQUksT0FBTyxDQUFDO0lBQ25ELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDdkM7Ozs7O0FBRUQsY0FBYyxRQUFlO0lBQ3pCLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDbEQ7O0lBbUJHO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUI7MEJBYlUsNENBQVE7Ozs7O1lBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7Ozs7Ozs7SUFjbkIsNENBQVc7Ozs7Y0FBQyxRQUFlO1FBQzlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2hDOzs7Ozs7SUFHRSxvQ0FBRzs7OztjQUFDLFFBQStCO1FBQS9CLHlCQUFBLEVBQUEsV0FBa0IsSUFBSSxDQUFDLFFBQVE7O1FBQ3RDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFVLFFBQVEsbUJBQWdCLENBQUMsQ0FBQztTQUN2RDtRQUNELFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7OztJQUd0Qix5Q0FBUTs7Ozs7O2NBQ1gsTUFBdUIsRUFDdkIsU0FBNEM7UUFFNUMsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7O0lBRzdDLHFDQUFJOzs7OztjQUFDLFFBQWUsRUFBRSxNQUEyQjtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7SUFHMUIsc0NBQUs7Ozs7O2NBQUMsUUFBZSxFQUFFLE1BQTJCO1FBQ3JELFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBRzlDLDRDQUFXOzs7OztjQUFDLEtBQVksRUFBRSxTQUE0QjtRQUN6RCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsRUFBTTtnQkFBTixrQkFBTSxFQUFMLFNBQUMsRUFBRSxTQUFDO1lBQU0sT0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQUssQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQUEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7O2dCQXZEL0YsVUFBVTs7OztpQ0F2Qlg7Ozs7Ozs7QUNDQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDdEM7O2dDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFSSxLQUFFO0lBQ0YsTUFBRztJQUNILFNBQU07SUFDTixTQUFNOzt3Q0FITixFQUFFO3dDQUNGLEdBQUc7d0NBQ0gsTUFBTTt3Q0FDTixNQUFNO0FBR1YsSUFBQTtJQXNCSSxvQkFBWSxJQUFXLEVBQ1gsUUFBcUIsRUFDckIsU0FBMEQsRUFDMUQsVUFBa0M7UUFGbEMseUJBQUEsRUFBQSxjQUFxQjtRQUNyQiwwQkFBQSxFQUFBLFlBQWdDLG1CQUFtQixDQUFDLE1BQU07UUFDMUQsMkJBQUEsRUFBQSw0QkFBa0M7UUFFMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7OztRQUlqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDaEM7MEJBNUJVLHNDQUFjOzs7OztZQUNyQixRQUFRLElBQUksQ0FBQyxTQUFTO2dCQUNsQixLQUFLLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQztnQkFDekMsS0FBSyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUM7YUFDOUM7WUFFRCxPQUFPLEVBQUUsQ0FBQzs7Ozs7cUJBdEJsQjtJQTZDQzs7Ozs7O0FDNUNELElBRUE7SUFtREksOEJBQVksa0JBQWlDLEVBQUUsT0FBd0I7UUFBM0QsbUNBQUEsRUFBQSx5QkFBaUM7UUFBRSx3QkFBQSxFQUFBLGlCQUF3Qjs7UUFFbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUM3QjswQkFwRFcsMENBQVE7Ozs7O1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUM7Ozs7OzBCQVcvRiw2Q0FBVzs7Ozs7WUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7OzswQkFNbEIsMkNBQVM7Ozs7O1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7MEJBTWhCLDBDQUFROzs7OztZQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7MEJBSWQsNkNBQVc7Ozs7O1lBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7MEJBSWQsNENBQVU7Ozs7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBa0J4QywrQ0FBZ0I7Ozs7Y0FBQyxRQUFrQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Ozs7O0lBSXRCLDhDQUFlOzs7O2NBQUMsT0FBa0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Ozs7OztJQUl0QixxREFBc0I7Ozs7Y0FBQyxjQUFnQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Ozs7O0lBR3RCLHNDQUFPOzs7O2NBQUMsVUFBcUI7O1FBR2hDLElBQU0sZUFBZSxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hILElBQUksZUFBZSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLE1BQU0sRUFBRTs7WUFFakcsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7WUFDMUYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOztnQkFFakIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RELFVBQVUsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDO2lCQUNsRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLEdBQUcsRUFBRTtvQkFDOUQsVUFBVSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7aUJBQ2pEO2FBQ0o7U0FDSjs7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Ozs7SUFHckIsZ0RBQWlCOzs7OztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7WUFFMUQsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O1FBRXpCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBR3BDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7UUFHbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBSyxVQUFVLENBQUMsUUFBUSxPQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakUsSUFBSSxVQUFVLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLEVBQUUsRUFBRTs7WUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7O1FBR0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBQSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7O0lBSXJHLCtDQUFnQjs7OztjQUFDLFVBQXFCOzs7UUFFMUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXJELElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7O1lBRWpELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxVQUFVLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLEdBQUcsRUFBRTs7WUFFekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O1lBRXZCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQjs7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOzs7Ozs7SUFJdEIsbUNBQUk7Ozs7Y0FBQyxVQUF3QztRQUF4QywyQkFBQSxFQUFBLGFBQXdCLElBQUksQ0FBQyxXQUFXO1FBQ2hELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25DLE9BQU87U0FDVjtRQUVELFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O0lBSS9CLHNDQUFPOzs7O1FBQ1YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFJVCx5Q0FBVTs7OztRQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOzsrQkFoTXpCO0lBa01DOzs7Ozs7QUNsTUQ7SUFvQ0ksdUJBQXNCLFNBQW1CLEVBQVksUUFBbUIsRUFBVSxlQUFpQztRQUE3RixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjsrQkFsQmxGLElBQUk7S0FrQmtGO0lBekJ2SCxzQkFDVyx3Q0FBYTs7Ozs7UUFEeEIsVUFDeUIsRUFBdUI7O1lBRTVDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7SUFLRCxzQkFDVyxvQ0FBUzs7OztRQURwQjtZQUVJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQzthQUNyQztZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCOzs7T0FBQTtJQUVELHNCQUNXLG1DQUFROzs7O1FBRG5CO1lBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDaEI7OztPQUFBOzs7OztJQUtNLCtDQUF1Qjs7OztjQUFDLG9CQUF5QztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7OztnQkF4Q3JFLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsWUFBWTtpQkFDekI7Ozs7Z0JBTlEsU0FBUztnQkFBRSxVQUFVO2dCQUFpQyxpQkFBaUI7OztnQ0FXM0UsS0FBSztrQ0FNTCxXQUFXLFNBQUMsa0JBQWtCOzRCQUc5QixXQUFXLFNBQUMsZUFBZTsyQkFRM0IsV0FBVyxTQUFDLGNBQWM7O3dCQTVCL0I7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNoQjs7OEJBYkQ7Ozs7Ozs7Ozs7OztBQ0FBO0lBMENJO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVNLDRCQUFPOzs7OztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFO1lBQ2hILEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDOzs7Z0JBcERYLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG1PQUtiO29CQUNHLE1BQU0sRUFBRSxDQUFDLHlGQUtaLENBQUM7aUJBQ0Q7Ozs7O2dDQUVJLEtBQUs7NEJBR0wsTUFBTSxTQUFDLFNBQVM7NkJBT2hCLEtBQUs7cUNBR0wsS0FBSzt3QkFHTCxLQUFLLFNBQUMsT0FBTzs7cUJBdkNsQjs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDVixVQUFVO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDTCxVQUFVO3FCQUNiO2lCQUNKOzsyQkFoQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2lISTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzQjtJQWxFRCxzQkFDVyxrQ0FBTzs7OztRQURsQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4Qjs7Ozs7a0JBRWtCLEtBQXdCO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7OztPQUh6RTtJQVNELHNCQUNXLHlDQUFjOzs7O1FBRHpCO1lBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQy9COzs7OztrQkFFeUIsS0FBWTtZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7O09BSmpGO0lBT0Qsc0JBQ1csNkNBQWtCOzs7O1FBRDdCOztZQUVJLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvRDs7Ozs7a0JBRTZCLEtBQWE7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7OztPQUhwQztJQWVELHNCQUNXLCtCQUFJOzs7O1FBRGY7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDckI7Ozs7O2tCQUVlLEtBQVk7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztPQUh2QjswQkFNVSxnQ0FBSzs7Ozs7WUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7O0lBa0JoQixtQ0FBVzs7OztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Ozs7O0lBR2xCLCtCQUFPOzs7O1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUcvQiwrQkFBTzs7OztjQUFDLE9BQWM7O1FBQ3pCLElBQU0sS0FBSyxHQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7Ozs7O0lBSUUsbUNBQVc7Ozs7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7O0lBSWYsbUNBQVc7Ozs7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU5RSw0Q0FBTyxhQUFLLEVBQUUsV0FBRyxDQUEyQjtRQUU1QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2YsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7OztJQUd0Qix1Q0FBZTs7Ozs7UUFDbkIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBRXRHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ2hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFDZCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFDaEIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQzNDLElBQU0sV0FBVyxHQUFHLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBRXBFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQ3pCLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFO2dCQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2FBQ2pDO1NBQ0o7YUFBTTtZQUNILEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O2dCQXRMckQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxnekNBNEJiO29CQUNHLE1BQU0sRUFBRSxDQUFDLDZDQUlaLENBQUM7aUJBQ0Q7Ozs7OzZCQUdJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxrQkFBa0IsY0FDOUIsV0FBVyxTQUFDLFlBQVk7NkJBTXhCLE1BQU07MEJBVU4sS0FBSzsyQkFTTCxLQUFLO2lDQUdMLEtBQUs7cUNBVUwsS0FBSzttQ0FVTCxLQUFLOzRCQUdMLEtBQUs7OEJBR0wsS0FBSzt1QkFHTCxLQUFLOzt3QkFwR1Y7Ozs7Ozs7QUNBQTs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDN0IsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCOzs4QkFWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0lBMkZJLDJCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztLQUN4RDswQkE1RFUsc0NBQU87Ozs7O2tCQUFDLE9BQTJCO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0lBUXpDLHNCQUNXLHFDQUFNOzs7O1FBRGpCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCOzs7OztrQkFFaUIsS0FBYTs7WUFFM0IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUV2QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFOztnQkFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBRXRCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O29CQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUdwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2FBQy9GOzs7O09BbkJKOzBCQXNCVSx5Q0FBVTs7Ozs7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDbkM7WUFFRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7MEJBR1AsaURBQWtCOzs7OztZQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O2dCQUVmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQzs7WUFFRCxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7SUFhTixrQ0FBTTs7OztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCOzs7Z0JBakdSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsOFpBV2I7b0JBQ0csTUFBTSxFQUFFLENBQUMsMkxBVVosQ0FBQztpQkFDRDs7OztnQkE5QmdELGlCQUFpQjs7OzZCQXlDN0QsS0FBSzt5QkFLTCxLQUFLOytCQTBDTCxNQUFNOzs0QkF4Rlg7Ozs7Ozs7QUNFQSxJQUFBO0lBUUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVNLHNDQUFROzs7O2NBQUMsS0FBdUI7UUFDbkMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUdyQiw4Q0FBZ0I7Ozs7Y0FBQyxLQUF1QjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNiLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1NBQ0osQ0FBQyxDQUFDOzs4QkFqQ1g7SUFtQ0MsQ0FBQTs7Ozs7O0FDbkNEO0lBa0RJOztRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBN0JELHNCQUNXLHFDQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNwQzs7Ozs7a0JBRXNCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzs7O09BSHJDO0lBTUQsc0JBQ1csb0NBQVU7Ozs7O1FBRHJCLFVBQ3NCLFVBQWlCO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUN6Qzs7O09BQUE7SUFFRCxzQkFDVyw0Q0FBa0I7Ozs7O1FBRDdCLFVBQzhCLFFBQWU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7U0FDL0M7OztPQUFBOzs7O0lBY00seUNBQWtCOzs7OztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxHQUFBLENBQUMsQ0FBQzs7Ozs7SUFHdkQsbUNBQVk7Ozs7O1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7OztnQkE3RDVELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLCtCQUViO29CQUNHLE1BQU0sRUFBRSxDQUFDLGdNQVVaLENBQUM7aUJBQ0Q7Ozs7OzZCQUVJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxpQkFBaUI7OEJBRzdCLEtBQUs7NkJBU0wsS0FBSztxQ0FLTCxLQUFLOzBCQU9MLGVBQWUsU0FBQyxpQkFBaUI7O3VCQS9DdEM7Ozs7Ozs7QUNBQTt5QkFvRCtCLFFBQW1CLEVBQVUsU0FBbUI7UUFBaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O1FBR3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O0lBcEQvQixzQkFDVyxtQ0FBVTs7Ozs7UUFEckI7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0I7OztPQUFBO0lBS0Qsc0JBQ1csb0NBQVc7Ozs7O1FBRHRCO1lBRUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2pEOzs7T0FBQTtJQUdELHNCQUNXLHFDQUFZOzs7OztRQUR2QjtZQUVJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3Qjs7O09BQUE7SUFPRCxzQkFDVyxvQ0FBVzs7OztRQUR0QjtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7Ozs7a0JBR3NCLEtBQWE7WUFDaEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7Ozs7T0FSSjswQkFjVywyQ0FBa0I7Ozs7O1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7OztJQWEvQywwQkFBSTs7Ozs7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7UUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztRQUczRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO1lBQzdELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzlCLENBQUMsQ0FBQzs7Ozs7SUFHQSwwQkFBSTs7Ozs7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7UUFHMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRTs7O1lBRW5HLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXBFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR0MsNkJBQU87Ozs7Ozs7Y0FBQyxXQUFrQixFQUFFLFNBQWdCLEVBQUUsZ0JBQWdDLEVBQUUsUUFBOEI7UUFBaEUsaUNBQUEsRUFBQSx3QkFBZ0M7UUFBRSx5QkFBQSxFQUFBLDBCQUE4Qjs7UUFDbEgsSUFBTSxZQUFZLEdBQUc7WUFDakI7Z0JBQ0ksTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFLLFdBQVcsT0FBSTthQUM3QjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFBSyxTQUFTLE9BQUk7YUFDM0I7U0FDSixDQUFDO1FBRUYsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztTQUNOOzs7UUFJRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQy9CLFlBQVksRUFDWjtZQUNJLEtBQUssRUFBRSxDQUFDOztZQUVSLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQ2pDLFVBQVUsRUFBRSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNmLENBQ0osQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFFaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFFRCxVQUFVLENBQUMsY0FBTSxPQUFBLFFBQVEsRUFBRSxHQUFBLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7OztnQkE1SDNELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozs7Z0JBSm1CLFVBQVU7Z0JBQXNCLFNBQVM7Ozs2QkFPeEQsV0FBVyxTQUFDLGdCQUFnQjs4QkFRNUIsV0FBVyxTQUFDLGlCQUFpQjsrQkFNN0IsV0FBVyxTQUFDLGtCQUFrQjs4QkFVOUIsS0FBSzttQ0FjTCxLQUFLOztzQkE3Q1Y7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLFdBQVc7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFdBQVc7cUJBQ2Q7aUJBQ0o7OzRCQWREOzs7Ozs7Ozs7Ozs7QUNBQTs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDVixZQUFZO3dCQUNaLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osaUJBQWlCO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDaEI7OzZCQXRCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQU9BOzs7OztBQUFBO0lBQ0kseUJBQW9CLEtBQU87UUFBUCxVQUFLLEdBQUwsS0FBSyxDQUFFO2lDQUVBLGVBQVE7S0FGSjs7Ozs7SUFJeEIsa0NBQVE7Ozs7Y0FBQyxDQUFpQjtRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHM0IsbURBQXlCOzs7O2NBQUMsRUFBYTtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDOzswQkFqQnBDO0lBbUJDLENBQUE7Ozs7O0FBUUQsZ0NBQXVDLElBQWE7SUFDaEQsT0FBTztRQUNILE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLElBQUksR0FBQSxDQUFDO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztDQUNMOzs7Ozs7QUNqQ0Q7Ozs7QUFPQTs7Ozs7QUFBQTtJQUNJLDZCQUFvQixLQUFPO1FBQVAsVUFBSyxHQUFMLEtBQUssQ0FBRTt3QkFFVCxlQUFRO3lCQUNQLGVBQVE7S0FISTs7Ozs7SUFLeEIsd0NBQVU7Ozs7Y0FBQyxLQUFPO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHMUIsOENBQWdCOzs7O2NBQUMsRUFBYTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBR2hCLCtDQUFpQjs7OztjQUFDLEVBQWE7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7OzhCQXRCNUI7SUF3QkMsQ0FBQTs7Ozs7QUFRRCxvQ0FBMkMsSUFBYTtJQUNwRCxPQUFPO1FBQ0gsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEdBQUEsQ0FBQztRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUM7Q0FDTDs7Ozs7Ozs7SUNwQ0csUUFBUztJQUNULE1BQU87SUFDUCxTQUFVO0lBQ1YsUUFBUztJQUVULFVBQVc7SUFDWCxTQUFVO0lBRVYsU0FBVTtJQUNWLFlBQWE7O2dCQVRiLElBQUk7Z0JBQ0osRUFBRTtnQkFDRixLQUFLO2dCQUNMLElBQUk7Z0JBRUosTUFBTTtnQkFDTixLQUFLO2dCQUVMLEtBQUs7Z0JBQ0wsU0FBUzs7QUFtQmIsSUFBYSxJQUFJLEdBQUc7SUFDaEIsS0FBSyxFQUFFO1FBQ0gsS0FBSzs7Ozs7UUFBTCxVQUFNLENBQVEsRUFBRSxNQUFpQjtZQUFqQix1QkFBQSxFQUFBLFVBQWlCO1lBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLE1BQU0sR0FBQSxDQUFDLENBQUM7U0FDckQ7UUFDRCxLQUFLOzs7Ozs7UUFBTCxVQUFTLEtBQVMsRUFBRSxXQUFrQjs7WUFDbEMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFL0IsSUFBTSxNQUFNLEdBQVMsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTzs7Ozs7O1FBQVAsVUFBVyxLQUFTLEVBQUUsS0FBYTtZQUMvQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2YsVUFBQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ04sSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxNQUFNLENBQUM7YUFDakIsRUFDRCxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTzs7Ozs7UUFBUCxVQUFXLEtBQVc7WUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSyxPQUFBLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUEsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBRUQsTUFBTSxFQUFFO1FBQ0osT0FBTzs7Ozs7O1FBQVAsVUFBUSxHQUFVLEVBQUUsTUFBYSxFQUFFLE9BQWM7O1lBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7Z0JBQ3RCLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0QscUJBQXFCOzs7O1FBQXJCLFVBQXNCLGNBQXNCOztZQUN4QyxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDM0IsSUFBSSxPQUFPLGNBQWMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7WUFFRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsTUFBTSxFQUFFO1FBQ0osU0FBUzs7Ozs7O1FBQVQsVUFBZ0IsTUFBUSxFQUFFLElBQVk7WUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCwwQkFBTyxNQUFhLEdBQU07YUFDN0I7O1lBRUQsSUFBSSxRQUFRLENBQThCO1lBRTFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9ELFFBQVEsR0FBRyxvQkFBQyxNQUFhLElBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsMEJBQU8sUUFBZSxHQUFNO1NBQy9CO0tBQ0o7SUFFRCxJQUFJLEVBQUU7UUFDRixLQUFLOzs7OztRQUFMLFVBQU0sQ0FBUSxFQUFFLENBQVE7WUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPOzs7OztRQUFQLFVBQVEsQ0FBUSxFQUFFLENBQVE7WUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxTQUFTOzs7OztRQUFULFVBQVUsQ0FBUSxFQUFFLENBQVE7WUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxHQUFHOzs7OztRQUFILFVBQUksQ0FBUSxFQUFFLENBQVE7O1lBQ2xCLElBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7S0FDSjtDQUNKLENBQUM7Ozs7OztBQ2xIRjs7SUFHSSxTQUFVO0lBQ1YsT0FBUTtJQUNSLFFBQVM7SUFDVCxPQUFRO0lBQ1IsT0FBUTtJQUNSLFNBQVU7OzRCQUxWLE1BQU07NEJBQ04sSUFBSTs0QkFDSixLQUFLOzRCQUNMLElBQUk7NEJBQ0osSUFBSTs0QkFDSixNQUFNOztBQUdWLElBQWEsUUFBUSxHQUFHO0lBQ3BCLE9BQU87Ozs7OztJQUFQLFVBQVEsU0FBdUIsRUFBRSxJQUFTLEVBQUUsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxnQkFBd0I7UUFDaEUsUUFBUSxTQUFTO1lBQ2IsS0FBSyxhQUFhLENBQUMsTUFBTTs7Z0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ1gsTUFBTTtpQkFDVDs7WUFFTCxLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNYLE1BQU07aUJBQ1Q7O1lBRUwsS0FBSyxhQUFhLENBQUMsS0FBSztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDWCxNQUFNO2lCQUNUOztZQUVMLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ1gsTUFBTTtpQkFDVDs7WUFFTCxLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNYLE1BQU07aUJBQ1Q7O1lBRUwsS0FBSyxhQUFhLENBQUMsTUFBTTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsS0FBSzs7Ozs7SUFBTCxVQUFNLFNBQXVCLEVBQUUsSUFBUztRQUNwQyxRQUFRLFNBQVM7WUFDYixLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFFekIsS0FBSyxhQUFhLENBQUMsS0FBSztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUUxQyxLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxhQUFhLENBQUMsTUFBTTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxLQUFLOzs7Ozs7SUFBTCxVQUFNLFNBQXVCLEVBQUUsQ0FBTSxFQUFFLENBQU07O1FBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixRQUFRLFNBQVM7WUFDYixLQUFLLGFBQWEsQ0FBQyxNQUFNO2dCQUNyQixLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7O1lBRXZELEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7WUFFbkQsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFDbkIsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUVqRCxLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUNwQixLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O1lBRW5ELEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1RDtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBSTs7Ozs7SUFBSixVQUFLLFNBQXVCLEVBQUUsSUFBUztRQUNuQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUVELEdBQUc7Ozs7OztJQUFILFVBQUksU0FBdUIsRUFBRSxJQUFTLEVBQUUsQ0FBUTs7UUFDNUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUNoQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUzQixRQUFRLFNBQVM7WUFDYixLQUFLLGFBQWEsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO2dCQUNELE1BQU07WUFDVixLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU07WUFDVixLQUFLLGFBQWEsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELFFBQVE7Ozs7O0lBQVIsVUFBUyxTQUF1QixFQUFFLElBQVM7O1FBQ3ZDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUM5QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0IsUUFBUSxTQUFTO1lBQ2IsS0FBSyxhQUFhLENBQUMsTUFBTTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO2dCQUNELE1BQU07WUFDVixLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxhQUFhLENBQUMsSUFBSTs7Z0JBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxhQUFhLENBQUMsTUFBTTs7Z0JBQ3JCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsS0FBSzs7OztJQUFMLFVBQU0sSUFBUztRQUNYLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDbkM7Q0FDSixDQUFDOzs7Ozs7QUNwTEY7SUFXSSw2QkFBb0IsZUFBOEIsRUFDOUIsMkJBQ0E7UUFGQSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUM5Qiw4QkFBeUIsR0FBekIseUJBQXlCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTO0tBQWE7Ozs7Ozs7SUFFbkMsNkNBQWU7Ozs7OztjQUFJLElBQVksRUFBRSxTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGNBQXlCOztRQUU3RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLG1CQUFDLElBQWUsRUFBQyxDQUFDOztRQUd4RixJQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDaEQsU0FBUyxFQUNULElBQUksQ0FBQyxTQUFTLENBQ2pCLENBQUM7O1FBR0YsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QyxPQUFPLFlBQVksQ0FBQzs7Ozs7Ozs7O0lBR2pCLHdDQUFVOzs7Ozs7O2NBQW1DLGFBQThCLEVBQUUsUUFBdUIsRUFBRSxPQUFTO1FBQ2xILGFBQWEsQ0FBQyxrQkFBa0IsQ0FBSSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBSXBELDBDQUFZOzs7Ozs7Y0FBSSxZQUE0QixFQUFFLGFBQThCO1FBQy9FLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQUk1QyxpREFBbUI7Ozs7O2NBQUksWUFBNEI7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBSXBELG1EQUFxQjs7Ozs7Y0FBSSxZQUE0QjtRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7O0lBSXBELDJDQUFhOzs7Ozs7Y0FBSSxZQUE0QixFQUFFLE9BQWU7UUFDakUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7O0lBSXRELGdEQUFrQjs7Ozs7Y0FBSSxZQUE0QjtRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVkscUJBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRSxDQUFDOzs7Ozs7O0lBRy9ELGdEQUFrQjs7Ozs7Y0FBSSxZQUE0Qjs7UUFDckQsSUFBTSxPQUFPLHFCQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBd0IsRUFBQzs7UUFFL0QsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDOzs7Z0JBeERSLFVBQVU7Ozs7Z0JBUkssY0FBYztnQkFBRSx3QkFBd0I7Z0JBQUUsUUFBUTs7OEJBRGxFOzs7Ozs7OztBQ29CQSxJQUFhLG9CQUFvQixHQUFHO0lBQ2hDLElBQUksb0JBQUUsTUFBOEIsQ0FBQTtJQUNwQyxPQUFPLG9CQUFFLFVBQWtDLENBQUE7SUFDM0MsR0FBRyxvQkFBRSxLQUE2QixDQUFBO0lBQ2xDLFFBQVEsb0JBQUUsV0FBbUMsQ0FBQTtJQUM3QyxPQUFPLG9CQUFFLFVBQWtDLENBQUE7SUFDM0MsSUFBSSxvQkFBRSxNQUE4QixDQUFBO0lBQ3BDLFVBQVUsb0JBQUUsYUFBcUMsQ0FBQTtJQUNqRCxVQUFVLG9CQUFFLGFBQXFDLENBQUE7SUFDakQsTUFBTSxvQkFBRSxRQUFnQyxDQUFBO0lBQ3hDLFdBQVcsb0JBQUUsY0FBc0MsQ0FBQTtJQUNuRCxRQUFRLG9CQUFFLFdBQW1DLENBQUE7SUFDN0MsS0FBSyxvQkFBRSxPQUErQixDQUFBO0lBQ3RDLFdBQVcsb0JBQUUsY0FBc0MsQ0FBQTtDQUN0RCxDQUFDOzs7OztBQVdGLDJCQUEyQixTQUE4QjtJQUNyRCxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7UUFDdkQsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFHRCwwQ0FBTyxpQkFBUyxFQUFFLGlCQUFTLENBQXlCOztJQUdwRCxJQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUdwQyxRQUFRLFNBQVM7UUFDYixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssTUFBTTtZQUNQLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNWLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxPQUFPO1lBQ1IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixNQUFNO0tBQ2I7O0lBR0QseUJBQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsRUFBQztDQUNqRDs7Ozs7QUFFRCwyQkFBMkIsTUFBYTtJQUNwQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDOUIsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCx1Q0FBTyxpQkFBUyxFQUFFLGlCQUFTLENBQXNCOztJQUVqRCxJQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXBDLFFBQVEsU0FBUztRQUNiLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxRQUFRO1lBQ1QsUUFBUSxTQUFTO2dCQUNiLEtBQUssT0FBTztvQkFDUixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QixNQUFNO2dCQUNWLEtBQUssS0FBSztvQkFDTixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5QixNQUFNO2FBQ2I7WUFDRCxNQUFNO1FBQ1YsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLE9BQU87WUFDUixRQUFRLFNBQVM7Z0JBQ2IsS0FBSyxPQUFPO29CQUNSLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1YsS0FBSyxLQUFLO29CQUNOLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9CLE1BQU07YUFDYjtZQUNELE1BQU07S0FDYjtJQUVELHlCQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixFQUFDO0NBQzVEO0FBRUQsSUFBQTtJQThCSSw0QkFBWSxNQUFpQixFQUFFLE9BQWtCLEVBQUUsU0FBOEIsRUFBRSxhQUFxQjtRQUF4RyxpQkErQkM7UUE5QkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7O1FBRTVCLElBQU0sU0FBUyxHQUFtQjtZQUM5QixZQUFZLEVBQUU7Z0JBQ1YsZUFBZSxFQUFFLEtBQUs7YUFDekI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDbkM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLGFBQWE7YUFDekI7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsT0FBTyxxQkFBRyxJQUFJLE1BQU0sQ0FDckIsTUFBTSxDQUFDLGFBQWEsRUFDcEIsT0FBTyxDQUFDLGFBQWEsRUFDckI7WUFDSSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLFNBQVMsV0FBQTtZQUNULFFBQVEsRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxHQUFBO1lBQ2hELFFBQVEsRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFBO1NBQ2pELENBQW1CLENBQUEsQ0FBQztLQUM1QjswQkFyRFUseUNBQVM7Ozs7O1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7O2tCQUdOLFNBQThCO1lBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7OzBCQUdQLCtDQUFlOzs7OztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7YUFDcEM7WUFFRCxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7OzBCQUcvQyxxQ0FBSzs7Ozs7WUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7O0lBb0N0QixtQ0FBTTs7OztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O0lBR25CLG9DQUFPOzs7O1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7NkJBakwvQjtJQW1MQyxDQUFBOzs7Ozs7QUNuTEQ7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDdEI7aUJBQ0o7OzJCQVREOzs7Ozs7Ozs7Ozs7O0lDeURJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjswQkFwQlUseUNBQWdCOzs7OztZQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQzs7Ozs7MEJBR2hDLDRDQUFtQjs7Ozs7WUFDMUIsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUM7Ozs7Ozs7OztJQWtCN0MsaUNBQVc7Ozs7SUFEbEIsVUFDbUIsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFHTSw2QkFBTzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7Ozs7SUFHTSxnQ0FBVTs7O0lBRGpCO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVNLDRCQUFNOzs7O1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7SUFHckMsZ0NBQVU7Ozs7Y0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7OztJQUduQixtQ0FBYTs7OztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Z0JBMUZuRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsdVJBV2I7aUJBQ0E7Ozs7OzZCQUVJLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxnQkFBZ0I7dUJBRzVCLEtBQUs7NEJBR0wsV0FBVyxTQUFDLGVBQWU7Z0NBRzNCLE1BQU0sU0FBQyxhQUFhOzRCQUdwQixNQUFNLFNBQUMsU0FBUzs2QkFHaEIsS0FBSzs2QkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7bUNBV0wsU0FBUyxTQUFDLFVBQVU7OEJBY3BCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBS3BDLFlBQVksU0FBQyxPQUFPOzZCQVFwQixZQUFZLFNBQUMsVUFBVTs7c0JBakY1Qjs7O0lBNEc4Q0MsNENBQXlDO0lBQ25GLGtDQUFZLElBQWdCO2VBQ3hCLGtCQUFNLElBQUksQ0FBQztLQUNkOztnQkFYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDRixlQUFlLEVBQUUsa0JBQWtCO3dCQUNuQyxXQUFXLEVBQUUsYUFBYTtxQkFDN0I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztpQkFDcEU7Ozs7Z0JBRW9CLFdBQVc7O21DQTdHaEM7RUE0RzhDLG1CQUFtQjs7Ozs7Ozs7OztJQzFDN0Q7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7MEJBakJVLHNDQUFnQjs7Ozs7WUFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7Ozs7OzBCQUdoQyx5Q0FBbUI7Ozs7O1lBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7SUFlN0MsOEJBQVc7Ozs7SUFEbEIsVUFDbUIsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFHTSwwQkFBTzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtLQUNKOzs7O0lBR00sNkJBQVU7OztJQURqQjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFTSx5QkFBTTs7OztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7Ozs7SUFHL0MsNkJBQVU7Ozs7Y0FBQyxLQUFPO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7SUFHViw2QkFBVTs7OztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Z0JBbEdoRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDZUQVliO2lCQUNBOzs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsYUFBYSxjQUN6QixXQUFXLFNBQUMsZ0JBQWdCO3VCQUc1QixLQUFLO3dCQUdMLEtBQUs7NEJBR0wsV0FBVyxTQUFDLGVBQWU7dUNBSzNCLE1BQU0sU0FBQyxvQkFBb0I7NEJBRzNCLE1BQU0sU0FBQyxTQUFTOzZCQUdoQixLQUFLOzZCQUdMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSztnQ0FHTCxTQUFTLFNBQUMsT0FBTzs4QkFzQmpCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBS3BDLFlBQVksU0FBQyxPQUFPOzZCQVVwQixZQUFZLFNBQUMsVUFBVTs7bUJBNUY1Qjs7Ozs7O0lBdUg4Q0EseUNBQW1DO0lBQzdFLCtCQUFZLElBQWdCO2VBQ3hCLGtCQUFNLElBQUksQ0FBQztLQUNkOztnQkFYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNGLHNCQUFzQixFQUFFLGtCQUFrQjt3QkFDMUMsV0FBVyxFQUFFLGFBQWE7cUJBQzdCO29CQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ2pFOzs7O2dCQUVvQixRQUFROztnQ0F4SDdCO0VBdUg4QyxtQkFBbUI7Ozs7OztBQ3ZIakU7Ozs7SUFvQkkseUJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFTSw0Q0FBa0I7Ozs7O1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxHQUFBLENBQUMsQ0FBQzs7Ozs7SUFHOUQsdUNBQWE7Ozs7O1FBQ2pCLElBQUksQ0FBQyxZQUFZO2FBQ1osTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEtBQUksR0FBQSxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFBLENBQUMsQ0FBQzs7Ozs7SUFHakMsc0NBQVk7Ozs7O1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFBLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFFckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRSxNQUFNO2FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUM7YUFDVixPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVTthQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2QixTQUFTLENBQUMsVUFBQyxDQUFHO1lBQ1gsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUMzQztTQUNKLENBQUMsQ0FBQyxHQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7OztnQkFqRDdCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0RBQW9EO2lCQUNqRTs7OztnQkFQaUUsVUFBVTs7OytCQVl2RSxlQUFlLFNBQUMsZUFBZSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtrQ0FHdEQsZUFBZSxTQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7OzBCQWZwRDs7Ozs7OztBQ0FBOzs7O2dCQU9DLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3FCQUNkO29CQUNELFlBQVksRUFBRTt3QkFDVixXQUFXO3dCQUNYLHdCQUF3Qjt3QkFDeEIsUUFBUTt3QkFDUixxQkFBcUI7d0JBQ3JCLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxXQUFXO3dCQUNYLHdCQUF3Qjt3QkFDeEIsUUFBUTt3QkFDUixxQkFBcUI7d0JBQ3JCLGVBQWU7cUJBQ2xCO2lCQUNKOzs0QkExQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFPSSxXQUFZO0lBQ1osV0FBWTtJQUNaLE9BQVE7OzBCQUZSLFFBQVE7MEJBQ1IsUUFBUTswQkFDUixJQUFJO0FBR1IsSUFBQTtJQTJFSSx5QkFBWSxNQUFxQixFQUFTLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3Qjs4QkFZM0MsZUFBUTtRQVh2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUV2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzBCQWxGVSxtQ0FBTTs7Ozs7WUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztrQkFHTixNQUFxQjtZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7OzswQkFJckQsd0NBQVc7Ozs7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Ozs7OzBCQU1wRCx5Q0FBWTs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7a0JBR04sSUFBcUI7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDbEM7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OzBCQU1mLG9DQUFPOzs7OztZQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDOUY7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Ozs7OztrQkFHbEMsR0FBb0I7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Ozs7OzBCQUdiLG9DQUFPOzs7OztZQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDOUY7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Ozs7OztrQkFHbEMsR0FBb0I7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Ozs7OzBCQUtiLDJDQUFjOzs7OztZQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7Ozs7OztrQkFHTixjQUFxQjtZQUMzQyxJQUFJLGNBQWMsSUFBSSxTQUFTLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUNuRTs7Ozs7Ozs7SUFtQkUsK0JBQUs7Ozs7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTs7WUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN4RDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDdkQ7Ozs7Ozs7SUFHRSxvQ0FBVTs7Ozs7Y0FBQyxJQUFTLEVBQUUsUUFBeUI7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7O0lBR3JELGlDQUFPOzs7O2NBQUMsUUFBeUI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7SUFHakQsb0NBQVU7Ozs7O2NBQUMsUUFBZ0QsRUFBRSxRQUF5Qjs7UUFDMUYsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7OzBCQTdJbkM7SUErSUMsQ0FBQTs7Ozs7O0FDOUlELEFBRUEsSUFBQTtJQVNJLHNCQUFZLElBQVM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7dUJBZEw7SUFlQyxDQUFBO0FBWkQ7SUF5Q0kseUJBQW1CLGNBQWdDO1FBQWhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FDakQ7SUF4QkQsc0JBQ1cseUNBQVk7Ozs7UUFEdkI7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2pDOzs7T0FBQTtJQUVELHNCQUNXLHFDQUFROzs7O1FBRG5CO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3Qjs7O09BQUE7SUFFRCxzQkFDVyxvQ0FBTzs7OztRQURsQjtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUI7OztPQUFBOzs7O0lBY00scUNBQVc7OztJQURsQjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztLQUNKOzs7O0lBR00sc0NBQVk7OztJQURuQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2Qzs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs7OztnQkFsQm1FLGlCQUFpQjs7O3VCQW9CaEYsS0FBSyxTQUFDLGNBQWM7K0JBR3BCLFdBQVcsU0FBQyxnQkFBZ0I7MkJBSzVCLFdBQVcsU0FBQyxjQUFjOzBCQUsxQixXQUFXLFNBQUMsYUFBYTsyQkFLekIsV0FBVyxTQUFDLGFBQWE7OEJBV3pCLFlBQVksU0FBQyxXQUFXOytCQVF4QixZQUFZLFNBQUMsWUFBWTs7MEJBMUQ5Qjs7Ozs7OztBQ0FBOztJQU9JLE9BQVE7SUFDUixRQUFTO0lBQ1QsT0FBUTtJQUNSLE9BQVE7SUFDUixTQUFVOztrQ0FKVixJQUFJO2tDQUNKLEtBQUs7a0NBQ0wsSUFBSTtrQ0FDSixJQUFJO2tDQUNKLE1BQU07Ozs7O0lBeUNOLHNCQUFZLFFBQWtCLEVBQUUsUUFBeUIsRUFBRSxNQUEyQjtRQUF0RixpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQzFIO0lBbENELHNCQUNXLGlDQUFPOzs7OztZQWFkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O1FBZHpCLFVBQ21CLE9BQXVCO1lBRDFDLGlCQVdDO1lBVEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUc7Z0JBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXRCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUM3QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEIsQ0FBQztTQUNMOzs7T0FBQTswQkFRVSxxQ0FBVzs7Ozs7WUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Ozs7MEJBR3pCLHNDQUFZOzs7OztZQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7Ozs7Ozs7SUFjOUIsOEJBQU87Ozs7Y0FBQyxJQUFpQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHNUMsOEJBQU87Ozs7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBSzlCLHNDQUFlOzs7OztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFBLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7Ozs7SUFHMUIsNkNBQXNCOzs7OztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDekIsT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQWdCO2dCQUNwQyxJQUFJLFFBQVEsRUFBRTtvQkFDVixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUI7YUFDSixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Ozs7O0lBR3RDLG9DQUFhOzs7Ozs7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZGLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ3JDOztRQUVELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUMvRyxJQUFJLG9CQUFvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFO1lBQzFELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztTQUNoRDs7Ozs7O0lBR0csb0NBQWE7Ozs7Y0FBQyxJQUE2QjtRQUMvQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUEsQ0FBQyxDQUFDOztZQUNyRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQztZQUNsRSxJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQzs7Ozs7O0lBR0csd0NBQWlCOzs7O2NBQUMsQ0FBZTtRQUNyQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4Qjs7UUFFRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1FBQ25FLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQzs7UUFDM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsUUFBUSxDQUFDLENBQUMsT0FBTztZQUNiLEtBQUssT0FBTyxDQUFDLEtBQUs7Z0JBQ2QsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDWCxNQUFNO1lBQ1YsS0FBSyxPQUFPLENBQUMsSUFBSTtnQkFDYixLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNYLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLE9BQU8sQ0FBQyxJQUFJO2dCQUNiLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3QixlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTztTQUNkOztRQUdELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ2pDLE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ3JDLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNyRCxlQUFlLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0o7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFOztZQUNYLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFFekUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBRTVELElBQUksZUFBZSxFQUFFO2dCQUNqQixhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUN2RDtpQkFBTTtnQkFDSCxhQUFhLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNyQztZQUVELFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRTVDLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDckIsT0FBTzthQUNWO1NBQ0o7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztJQUd4RCxrQ0FBVzs7OztRQUNkLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOzs7aUNBektuQyxZQUFZLFNBQUMsZUFBZTswQkFJNUIsS0FBSzs7dUJBdkJWOzs7Ozs7Ozs7O0FDSUE7OztBQUFBOzs7MkJBSkE7SUFTQyxDQUFBO0FBRUQsSUFBQTtJQUFrQ0EsZ0NBQWdCO0lBQzlDO1FBQUEsWUFDSSxpQkFBTyxTQWdCVjtRQWRHLEtBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3ZELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUMvQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3BELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1NBQ2xELENBQUMsQ0FBQzs7S0FDTjt1QkE3Qkw7RUFXa0MsZ0JBQWdCLEVBbUJqRCxDQUFBO0FBbkJELEFBcUJBLElBQUE7SUFBa0NBLGdDQUFnQjtJQUM5QztRQUFBLFlBQ0ksaUJBQU8sU0FjVjtRQVpHLEtBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBRXpDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3ZELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztZQUNoRCxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7U0FDckQsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBcUM7WUFDcEQsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1lBQ2hELENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztTQUNuRCxDQUFDLENBQUM7O0tBQ047dUJBaERMO0VBZ0NrQyxnQkFBZ0IsRUFpQmpELENBQUE7QUFqQkQsQUFtQkEsSUFBQTtJQUFzQ0Esb0NBQWdCO0lBQ2xEO1FBQUEsWUFDSSxpQkFBTyxTQW9CVjtRQWxCRyxLQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUV6QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFxQztZQUN2RCxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQy9DLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDaEQsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1NBQ3JELENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3BELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0MsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQy9DLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FDbkQsQ0FBQyxDQUFDOztLQUNOOzJCQXpFTDtFQW1Ec0MsZ0JBQWdCLEVBdUJyRCxDQUFBO0FBdkJELEFBeUJBLElBQUE7SUFBbUNBLGlDQUFnQjtJQUMvQztRQUFBLFlBQ0ksaUJBQU8sU0FjVjtRQVpHLEtBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBRXhDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3ZELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUMvQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7U0FDbkQsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBcUM7WUFDcEQsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQy9DLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztTQUNsRCxDQUFDLENBQUM7O0tBQ047d0JBNUZMO0VBNEVtQyxnQkFBZ0IsRUFpQmxELENBQUE7QUFqQkQsQUFtQkEsSUFBQTtJQUFrQ0EsZ0NBQWdCO0lBQzlDO1FBQUEsWUFDSSxpQkFBTyxTQVlWO1FBVkcsS0FBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBcUM7WUFDdkQsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQXFDO1lBQ3BELENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztTQUNqRCxDQUFDLENBQUM7O0tBQ047dUJBN0dMO0VBK0ZrQyxnQkFBZ0IsRUFlakQsQ0FBQTs7Ozs7Ozs7O0FDMUdEOzs7QUFBQTtJQVVJLHdCQUFZLElBQWlCLEVBQUUsU0FBdUIsRUFBRSxRQUF5QixFQUFFLFFBQWU7UUFDOUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDNUI7Ozs7O0lBRU0scUNBQVk7Ozs7Y0FBQyxZQUFpQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOzt5QkF2QnpDO0lBeUJDLENBQUE7QUFFRCxJQUFBO0lBQW9DQSxrQ0FBYztJQUM5Qyx3QkFBWSxTQUF1QixFQUFFLFFBQXlCLEVBQUUsUUFBZTtlQUMzRSxrQkFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQzlEO3lCQTlCTDtFQTJCb0MsY0FBYyxFQUlqRCxDQUFBO0FBSkQsQUFNQSxJQUFBO0lBQWdDQSw4QkFBYztJQUMxQztlQUNJLGtCQUNJLGFBQWEsQ0FBQyxJQUFJLEVBQ2xCLElBQUksWUFBWSxFQUFFLEVBQ2xCLFFBQVEsQ0FBQztLQUNoQjtxQkF2Q0w7RUFpQ2dDLGNBQWMsRUFPN0MsQ0FBQTtBQVBELEFBU0EsSUFBQTtJQUFpQ0EsK0JBQWM7SUFDM0M7ZUFDSSxrQkFDSSxhQUFhLENBQUMsS0FBSyxFQUNuQixJQUFJLGFBQWEsRUFBRSxFQUNuQixPQUFPLENBQUM7S0FDZjtzQkFoREw7RUEwQ2lDLGNBQWMsRUFPOUMsQ0FBQTtBQVBELEFBU0EsSUFBQTtJQUFnQ0EsOEJBQWM7SUFDMUM7ZUFDSSxrQkFDSSxhQUFhLENBQUMsSUFBSSxFQUNsQixJQUFJLFlBQVksRUFBRSxFQUNsQixNQUFNLENBQUM7S0FDZDtxQkF6REw7RUFtRGdDLGNBQWMsRUFPN0MsQ0FBQTtBQVBELEFBU0EsSUFBQTtJQUFvQ0Esa0NBQWM7SUFDOUM7ZUFDSSxrQkFDSSxZQUFZLENBQUMsSUFBSSxFQUNqQixhQUFhLENBQUMsTUFBTSxFQUNwQixJQUFJLGdCQUFnQixFQUFFLEVBQ3RCLGdCQUFnQixDQUFDO0tBQ3hCO3lCQW5FTDtFQTREb0MsY0FBYyxFQVFqRCxDQUFBO0FBUkQsQUFVQSxJQUFBO0lBQWdDQSw4QkFBYztJQUMxQztlQUNJLGtCQUNJLFlBQVksQ0FBQyxRQUFRLEVBQ3JCLGFBQWEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksWUFBWSxFQUFFLEVBQ2xCLE1BQU0sQ0FBQztLQUNkOzs7OztJQUVNLGlDQUFZOzs7O2NBQUMsWUFBaUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O3FCQWpGckc7RUFzRWdDLGNBQWMsRUFhN0MsQ0FBQTs7Ozs7O0FDbkZELEFBRUEsSUFBQTtJQUlJLHNCQUFZLFNBQXVCLEVBQUUsVUFBa0I7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7S0FDakM7Ozs7OztJQUVNLDRCQUFLOzs7OztjQUFDLENBQU0sRUFBRSxDQUFrQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNQLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO1FBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFHakQsK0JBQVE7Ozs7O2NBQUMsQ0FBTSxFQUFFLENBQWtCO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU8sQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQUdwRSxrQ0FBVzs7Ozs7Y0FBQyxDQUFNLEVBQUUsQ0FBa0I7UUFDekMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQUd0RSw4QkFBTzs7Ozs7O2NBQUMsSUFBUyxFQUFFLElBQXFCLEVBQUUsS0FBc0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7dUJBdEMxRTtJQXdDQyxDQUFBOzs7Ozs7Ozs7Ozs7QUNURCx5QkFBeUIsTUFBMkIsRUFDM0IsV0FBa0IsRUFDbEIsYUFBMEM7SUFFL0QsT0FBTyxVQUFDLFVBQWlCLEVBQUUsRUFBZ0M7WUFBOUIsd0RBQUk7O1FBQzdCLElBQU0sS0FBSyxHQUFHLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3JFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlCLENBQUM7Q0FDTDs7Ozs7O0FBRUQsOEJBQThCLE1BQTJCLEVBQUUsV0FBa0I7SUFDekUsT0FBTyxVQUFDLEVBQWdDO1lBQTlCLHdEQUFJO1FBQStCLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQztLQUFBLENBQUM7Q0FDN0Q7Ozs7OztBQUVELHNCQUFzQixRQUE2QixFQUFFLFdBQWtCO0lBQ25FLE9BQU8sVUFBQyxXQUFXLEVBQUUsRUFBZ0M7WUFBOUIsd0RBQUk7UUFDdkIsT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDO0tBQUEsQ0FBQztDQUMzRDs7Ozs7O0FBRUQsc0JBQXNCLFFBQTZCLEVBQUUsV0FBa0I7SUFDbkUsT0FBTyxVQUFDLEVBQVUsRUFBRSxFQUFnQztZQUE1QyxrQkFBVSxFQUFQLGNBQU07WUFBSyx3REFBSTtRQUN0QixPQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxNQUFNLENBQUMsTUFBSSxDQUFHLENBQUMsR0FBQSxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQztLQUFBLENBQUM7Q0FDdkQ7QUFFRCxJQUFBO0lBV0ksdUJBQVksTUFBOEI7UUFDdEMsSUFBSSxDQUFDLGFBQWEscUJBQUcsTUFBTSxDQUFDLGNBQXFDLENBQUEsQ0FBQzs7UUFFbEUsSUFBTSxhQUFhLEdBQUc7WUFDbEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYTtZQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWM7U0FDaEMsQ0FBQzs7UUFFRixJQUFNLFdBQVcsR0FBRztZQUNoQixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1NBQzVCLENBQUM7O1FBRUYsSUFBTSxlQUFlLEdBQUc7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3ZCLFNBQVMsRUFBRSxNQUFNLENBQUMsbUJBQW1CO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMsbUJBQW1CO1NBQ3hDLENBQUM7O1FBRUYsSUFBTSxvQkFBb0IsR0FBRztZQUN6QixJQUFJLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDdkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQ3ZFLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxxQkFBRyxhQUFvQixDQUFBLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLGdCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUNyQjtZQUNDLE9BQU8sRUFBRSxlQUFlLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztZQUMvQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztZQUNyRCxLQUFLLEVBQUUsZUFBZSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7WUFDM0MsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7WUFDakQsU0FBUyxFQUFFLGVBQWUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQUMsS0FBWTtnQkFDN0QsT0FBTyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDLENBQUM7WUFDRixVQUFVLEVBQUUsb0JBQW9CLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztTQUM1RCxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssZ0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ2xCO1lBQ0MsUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO1lBQzdDLE9BQU8sRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztZQUM1QyxNQUFNLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7WUFDekMsS0FBSyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLFVBQVUsRUFBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDO1lBQ3JELFNBQVMsRUFBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDO1NBQ3ZELENBQ0osQ0FBQztLQUNMOzBCQXpEVyxrQ0FBTzs7Ozs7WUFDZixPQUFPO2dCQUNILFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7SUF1REMsOEJBQU07Ozs7O2NBQUMsQ0FBTSxFQUFFLENBQVE7UUFDMUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBRy9CLDZCQUFLOzs7Ozs7Y0FBQyxFQUFTLEVBQUUsQ0FBUSxFQUFFLEVBQU87UUFDckMsT0FBTyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzt3QkE3SDlDO0lBK0hDLENBQUE7Ozs7OztBQzNIRCxJQUFBO0lBSUksb0JBQVlDLFNBQWEsRUFBRSxNQUE4QjtRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHQSxTQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1Qzs7Ozs7SUFFTSwyQkFBTTs7OztjQUFDLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7O0lBRzVDLDBCQUFLOzs7OztjQUFDLFVBQWlCLEVBQUUsUUFBMEI7UUFBMUIseUJBQUEsRUFBQSxlQUFvQixJQUFJLEVBQUU7UUFDdEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7cUJBbEJ0RTtJQW9CQyxDQUFBO0FBaEJELEFBa0JBLElBQUE7SUFBd0NELHNDQUFVO0lBQzlDLDRCQUFZLElBQW1CLEVBQUUsTUFBOEI7UUFBL0QsaUJBVUM7O1FBVEcsSUFBTSxlQUFlLEdBQWtDO1lBQ25ELElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFRixRQUFBLGtCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBQzs7S0FDeEM7NkJBakNMO0VBc0J3QyxVQUFVLEVBWWpELENBQUE7Ozs7OztBQ2xDRCxBQUtBLElBQUE7SUFVSSx1QkFBWSxLQUFVLEVBQUUsS0FBWSxFQUFFLEtBQW9CLEVBQUUsT0FBd0IsRUFBRSxRQUFxQjtRQUN2RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM3QjswQkFaVSxrQ0FBTzs7Ozs7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFBLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBYTlDLDRCQUFJOzs7O2NBQUMsSUFBaUI7O1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7Ozs7OztJQUdsRSxpQ0FBUzs7OztjQUFDLElBQTZCOztRQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQzs7Ozs7O0lBR3ZFLG9DQUFZOzs7O2NBQUMsSUFBUzs7UUFDekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQzs7d0JBbkM1RTtJQXFDQyxDQUFBO0FBaENEOzs7QUFrQ0E7OztBQUFBO0lBb0NJLDhCQUFZLFFBQXNCLEVBQUUsSUFBVyxFQUFFLE9BQWM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEscUJBQUcsUUFBa0IsSUFBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDMUI7MEJBN0JVLDhDQUFZOzs7OztZQUNuQixPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7MEJBRzFELHdDQUFNOzs7OztZQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7OzswQkFHekIsNkNBQVc7Ozs7OztZQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkMsT0FBTyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxJQUFJLENBQUM7Ozs7OzBCQUdMLGlEQUFlOzs7Ozs7WUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkQsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLE9BQU8sUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUNoRDtZQUNELE9BQU8sSUFBSSxDQUFDOzs7Ozs7Ozs7SUFVVCwwQ0FBVzs7OztjQUFDLE9BQXVCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7SUFHWixzQ0FBTzs7OztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd4RyxtQ0FBSTs7OztjQUFDLFFBQWdCO1FBQ3hCLElBQUksUUFBUSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7SUFHeEIsdUNBQVE7Ozs7UUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHaEcsMkNBQVk7Ozs7UUFDZixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3hHLG1DQUFJOzs7O2NBQUMsUUFBZ0I7UUFDeEIsSUFBSSxRQUFRLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztJQUdqQix3Q0FBUzs7OztjQUFDLFNBQWM7O1FBQzVCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEOztRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7OztJQUdsRyx3Q0FBUzs7OztJQUFuQixVQUFvQixJQUFTO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNoRTs7Ozs7SUFFUyx3Q0FBUzs7OztJQUFuQixVQUFvQixVQUFlO1FBQW5DLGlCQUtDO1FBSkcsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUU3RTs7Ozs7O0lBRVMsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLFNBQWdCLEVBQUUsUUFBYTtRQUFuRCxpQkFhQztRQVpHLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7O1lBQ3JCLElBQU0sSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFFcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbkMsT0FBTyxJQUFJLENBQUM7U0FDZixDQUFDLENBQUM7S0FDTjsrQkE5Skw7SUFpS0M7Ozs7OztBQ2pLRDtJQWdDSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQUM3Qzs7Z0JBL0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsNlpBVWI7b0JBQ0csTUFBTSxFQUFFLENBQUMsbUdBTVosQ0FBQztpQkFDRDs7Ozs7eUJBR0ksS0FBSzs0QkFHTCxNQUFNLFNBQUMsU0FBUzs7K0JBN0JyQjs7Ozs7OztBQ0FBO0FBT0EsSUFBYSxjQUFjLEdBQUc7SUFDMUIsSUFBSSxvQkFBRSxNQUF3QixDQUFBO0lBQzlCLEtBQUssb0JBQUUsT0FBeUIsQ0FBQTtJQUNoQyxJQUFJLG9CQUFFLE1BQXdCLENBQUE7SUFDOUIsUUFBUSxvQkFBRSxVQUE0QixDQUFBO0lBQ3RDLElBQUksb0JBQUUsTUFBd0IsQ0FBQTtDQUNqQyxDQUFDOztJQTJCRSx1QkFBWSxtQkFBMEM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCOzs7OztJQUdNLG1DQUFXOzs7O0lBRGxCLFVBQ21CLENBQVk7UUFDM0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOztnQkFsQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxta0JBUWI7b0JBQ0csTUFBTSxFQUFFLENBQUMsd0NBSVosQ0FBQztpQkFDRDs7OztnQkE1QlEsc0JBQXNCOzs7NkJBOEIxQixXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsY0FBYyxjQUMxQixXQUFXLFNBQUMsZ0JBQWdCOzhCQVc1QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzt3QkE5Q3pDOzs7Ozs7O0FDQ0E7QUFLQSxJQUFhLFlBQVksR0FBRztJQUN4QixLQUFLLG9CQUFFLE9BQXVCLENBQUE7SUFDOUIsS0FBSyxvQkFBRSxPQUF1QixDQUFBO0lBQzlCLFlBQVksb0JBQUUsY0FBOEIsQ0FBQTtJQUM1QyxLQUFLLG9CQUFFLE9BQXVCLENBQUE7SUFDOUIsTUFBTSxvQkFBRSxRQUF3QixDQUFBO0NBQ25DLENBQUM7SUFjRjtJQVdJLHFCQUFZLFFBQTBCO1FBQTFCLHlCQUFBLEVBQUEsYUFBMEI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNqQztzQkEvQ0w7SUFnREM7Ozs7OztBQ2hERDtJQStISSxrQkFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzBCQTVEVSw0QkFBTTs7Ozs7WUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OzBCQU9iLDRCQUFNOzs7OztrQkFBQyxNQUFpQjs7WUFFL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Ozs7OzBCQUlwSCwrQkFBUzs7Ozs7WUFDaEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDckU7Ozs7OzBCQUlNLCtCQUFTOzs7OztZQUNoQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNuRTs7Ozs7MEJBR00sb0NBQWM7Ozs7OztZQUNyQixJQUFNLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDbEM7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDeEIsT0FBTyxlQUFZLElBQUksQ0FBQzthQUMzQjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLE9BQU8sWUFBUyxJQUFJLENBQUM7YUFDeEI7WUFDRCxPQUFPLE9BQU8sQ0FBQzs7Ozs7Ozs7SUFxQlosdUJBQUk7Ozs7OztRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUVkLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBR2xDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUM3QixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsRUFBRTs7Z0JBRTNGLElBQU0sU0FBUyxxQkFBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUF1QixFQUFDO2dCQUNuRyxJQUFJLFNBQVMsRUFBRTs7b0JBRVgsVUFBVSxDQUFDLGNBQU0sT0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7b0JBRXhDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUN2RTthQUNKLENBQUMsQ0FBQyxDQUFDOztZQUdSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDMUQsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEdBQUEsQ0FBQyxDQUFDOztZQUduRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCOzs7OztJQUdFLHlCQUFNOzs7O1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUdqQix3QkFBSzs7Ozs7O1FBRVIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUViLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUM3QixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBR3JHLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBRWxDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBQSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7WUFHbkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDeEI7Ozs7OztJQUlFLDBCQUFPOzs7O0lBRGQsVUFDZSxLQUFnQjs7UUFFM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzNCOztnQkFoTUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsMG9CQWlCYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyw0MkJBK0JaLENBQUM7aUJBQ0Q7Ozs7Z0JBMURnRCxVQUFVOzs7NkJBaUZ0RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO2tDQXdDakQsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzJCQUd2RCxXQUFXLFNBQUMsZUFBZTswQkFzRTNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O21CQWxNckM7Ozs7Ozs7QUNBQTs7OztJQTRCSSw0QkFBc0IsU0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsaUJBQXFDLEVBQy9DLE1BQWtCO1FBSDlCLGlCQWFDO1FBYnFCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9COztRQUl2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR3RFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7UUFHM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQ3REOzBCQXhCVSxxQ0FBSzs7Ozs7O1lBRVosT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0lBd0JoQyxzQ0FBUzs7OztjQUFDLE1BQW9CO1FBQ2pDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1Qzs7Ozs7SUFHRSx3Q0FBVzs7Ozs7O1FBRWQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7UUFHbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHbEYsaUNBQUk7Ozs7OztRQUVQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBRy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBRzlELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O1FBR2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUzthQUNsQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQVk7WUFDdEMsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUFBLENBQUMsQ0FBQzs7UUFHakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7UUFHbEIsSUFBTSxTQUFTLEdBQUcsbUJBQUMsSUFBdUIsR0FBRSxXQUFXLENBQUM7UUFDeEQsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCOzs7OztJQUdFLGtDQUFLOzs7OztRQUVSLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOztZQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCOztRQUdELElBQU0sU0FBUyxHQUFHLG1CQUFDLElBQXVCLEdBQUUsWUFBWSxDQUFDO1FBQ3pELElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qjs7Ozs7SUFHRSwwQ0FBYTs7Ozs7UUFFaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkUsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7O1FBR0QsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR2pCLG1DQUFNOzs7OztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCOztRQUdELE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUlqQix5Q0FBWTs7O0lBRG5CO1FBRUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBRTtZQUNsRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7S0FDSjs7OztJQUdNLHlDQUFZOzs7SUFEbkI7UUFFSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7O0lBR00sb0NBQU87OztJQURkO1FBRUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLEtBQUs7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxZQUFZLEVBQUU7O1lBR3pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxLQUFLO2FBQy9DLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFOztZQUU1RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7S0FDSjs7Ozs7SUFFTyw0Q0FBZTs7OztjQUFDLENBQVk7O1FBRWhDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLFlBQVksRUFBRTs7WUFDL0UsSUFBTSxNQUFNLHFCQUFHLENBQUMsQ0FBQyxNQUFpQixFQUFDOztZQUVuQyxJQUFJLENBQUMsbUJBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUF3QixHQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hCO1NBQ0o7Ozs7O0lBSUUsc0NBQVM7OztJQURoQjtRQUVJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0tBQ0o7Ozs7O0lBR00sdUNBQVU7Ozs7SUFEakIsVUFDa0IsQ0FBSztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdEQsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFFbEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0tBQ0o7Ozs7SUFFUyxvQ0FBTzs7O0lBQWpCO1FBQ0ksWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVqRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7O0lBRU0sd0NBQVc7Ozs7UUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7OzsrQkF2RWxCLFlBQVksU0FBQyxZQUFZOytCQU96QixZQUFZLFNBQUMsWUFBWTswQkFPekIsWUFBWSxTQUFDLE9BQU87NEJBeUJwQixZQUFZLFNBQUMsU0FBUzs2QkFPdEIsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7NkJBcEt4Qzs7Ozs7Ozs7OztBQ0tBOzs7QUFBQTtJQUFvREEsK0NBQWtCO0lBVWxFLHFDQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUM1QixZQUNSLE1BQWtCO1FBSjlCLFlBTUksa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsU0FDckQ7UUFKbUIsZ0JBQVUsR0FBVixVQUFVOztLQUk3QjswQkFiVSwwREFBaUI7Ozs7O1lBQ3hCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7YUFDN0M7Ozs7Ozs7O0lBWUUsMENBQUk7Ozs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxtQkFBQyxJQUFJLENBQUMsVUFBcUIsRUFBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUY7UUFFRCxpQkFBTSxJQUFJLFdBQUUsQ0FBQzs7Ozs7SUFHUCw2Q0FBTzs7O0lBQWpCO1FBQ0ksaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7U0FDekM7S0FDSjtzQ0F4Q0w7RUFLb0Qsa0JBQWtCLEVBb0NyRTs7Ozs7Ozs7O0FDekJEOzs7QUFBQTtJQUE0Q0EsdUNBQVc7Ozs7OEJBaEJ2RDtFQWdCNEMsV0FBVyxFQUd0RCxDQUFBOzs7O0FBRUQ7OztBQUFBO0lBQW1EQSw4Q0FBa0I7SUFJakUsb0NBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsZ0JBQW9DLEVBQ3BDLE1BQWtCO2VBRTFCLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO0tBQ3JEOzs7OztJQUVNLDhDQUFTOzs7O2NBQUMsTUFBK0I7UUFDNUMsaUJBQU0sU0FBUyxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhCLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNqQzs7Ozs7SUFHRSx5Q0FBSTs7Ozs7UUFFUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUMsQ0FBQztTQUNOO1FBRUQsaUJBQU0sSUFBSSxXQUFFLENBQUM7O3FDQXJEckI7RUFxQm1ELGtCQUFrQixFQWtDcEU7Ozs7OztBQ3ZERDs7OzBCQThFZSxvQ0FBUzs7Ozs7WUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzVDOzs7OzswQkFHTSxvQ0FBUzs7Ozs7WUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzlCLE9BQU8sUUFBUSxDQUFDO2lCQUNuQjtnQkFDRCxPQUFPLFNBQVMsQ0FBQzthQUNwQjs7Ozs7O2dCQXhGUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDBPQUdiO29CQUNHLE1BQU0sRUFBRSxDQUFDLDJ5Q0EyRFosQ0FBQztpQkFDRDs7OzRCQUVJLEtBQUs7MkJBR0wsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzt3QkEzRVY7Ozs7Ozs7O0lDSW9DQSxrQ0FBVztJQUMzQzs7ZUFFSSxpQkFBTztLQUNWOztnQkFMSixVQUFVOzs7O3lCQUhYO0VBSW9DLFdBQVc7Ozs7Ozs7Ozs7SUNVTEEscUNBQTZCO0lBaUVuRSwyQkFBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixnQkFBb0MsRUFDcEMsYUFBNEI7ZUFFcEMsa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM3RTtJQXRFRCxzQkFDVywwQ0FBVzs7Ozs7UUFEdEIsVUFDdUIsTUFBYTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUNXLHdDQUFTOzs7OztRQURwQixVQUNxQixJQUFXO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakM7OztPQUFBO0lBRUQsc0JBQ1csNENBQWE7Ozs7O1FBRHhCLFVBQ3lCLFFBQWdCO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNFOzs7T0FBQTtJQUVELHNCQUNXLHlDQUFVOzs7OztRQURyQixVQUNzQixLQUFhO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JFOzs7T0FBQTtJQUVELHNCQUNXLDhDQUFlOzs7OztRQUQxQixVQUMyQixVQUFpQjtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdDOzs7T0FBQTtJQUVELHNCQUNXLHNEQUF1Qjs7Ozs7UUFEbEMsVUFDbUMsUUFBZTtZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7U0FDbkQ7OztPQUFBO0lBRUQsc0JBQ1csNkNBQWM7Ozs7O1FBRHpCLFVBQzBCLFNBQThCO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDM0M7OztPQUFBO0lBRUQsc0JBQ1cseUNBQVU7Ozs7O1FBRHJCLFVBQ3NCLEtBQVk7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQzs7O09BQUE7SUFFRCxzQkFDVywyQ0FBWTs7OztRQUR2QjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3BDOzs7OztrQkFFdUIsT0FBb0I7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7OztPQUh2QztJQU1ELHNCQUNXLDRDQUFhOzs7OztRQUR4QixVQUN5QixRQUEwRDtZQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFDVyxtREFBb0I7Ozs7O1FBRC9CLFVBQ2dDLE9BQXFCO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs7T0FBQTtJQUVELHNCQUNXLDBDQUFXOzs7OztRQUR0QixVQUN1QixNQUEwQztZQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCOzs7T0FBQTs7Z0JBbkVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCOzs7O2dCQWJtRCxTQUFTO2dCQUFsQyxVQUFVO2dCQUNxQixtQkFBbUI7Z0JBR3BFLGNBQWM7Ozs4QkFXbEIsS0FBSzs0QkFLTCxLQUFLO2dDQUtMLEtBQUs7NkJBS0wsS0FBSztrQ0FLTCxLQUFLOzBDQUtMLEtBQUs7aUNBS0wsS0FBSzs2QkFLTCxLQUFLOytCQUtMLEtBQUs7Z0NBU0wsS0FBSzt1Q0FLTCxLQUFLOzhCQUtMLEtBQUs7OzRCQTFFVjtFQWMwQywwQkFBMEI7Ozs7OztBQ2RwRTs7OztnQkFTQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDVixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsUUFBUTtxQkFDWDtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3dCQUNqQixRQUFRO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDUCxjQUFjO3FCQUNqQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2IsUUFBUTtxQkFDWDtpQkFDSjs7eUJBOUJEOzs7Ozs7Ozs7Ozs7O0lDbUJlQSwwQ0FBMEM7SUF1RnJELGdDQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUM3QjtRQUhuQixZQUtJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLElBQUksV0FBVyxDQUFDO1lBQ3RFLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSztZQUMzQixTQUFTLEVBQUUsb0JBQW9CLENBQUMsVUFBVTtZQUMxQyxVQUFVLEVBQUUsT0FBTztZQUNuQixrQkFBa0IsRUFBRSxHQUFHO1NBQzFCLENBQUMsQ0FBQyxTQWFOO1FBcEJrQix5QkFBbUIsR0FBbkIsbUJBQW1COzs7UUFVbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV6RSxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFBLENBQUMsQ0FBQztRQUVqRixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyRCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVsRCxLQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7O0tBQ3ZDOzBCQXpHVSxnREFBWTs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7a0JBR04sSUFBcUI7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFNekMsc0JBQ1csd0NBQUk7Ozs7UUFEZjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjs7Ozs7a0JBRWUsSUFBbUI7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUM3QyxRQUFRLElBQUksQ0FBQyxLQUFLO2dCQUNkLEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFDVixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1YsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN6QjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1YsS0FBSyxjQUFjLENBQUMsUUFBUTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUNuQyxNQUFNO2dCQUNWLEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTthQUNiO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7T0F0QnRDOzBCQTBDVSxnREFBWTs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFlLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7OztJQUdyRyxzQkFDVyw2Q0FBUzs7Ozs7UUFEcEIsVUFDcUIsU0FBOEI7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMzQzs7O09BQUE7SUFFRCxzQkFDVyw4Q0FBVTs7Ozs7UUFEckIsVUFDc0IsVUFBaUI7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3Qzs7O09BQUE7SUFFRCxzQkFDVyxzREFBa0I7Ozs7O1FBRDdCLFVBQzhCLFFBQWU7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO1NBQ25EOzs7T0FBQTs7OztJQWlDTSw0Q0FBVzs7Ozs7UUFDZCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRXRELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDdkU7WUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3pELEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1NBQ047Ozs7OztJQUdFLDRDQUFXOzs7O2NBQUMsRUFBd0M7WUFBdEMsb0JBQU8sRUFBRSxvQkFBTyxFQUFFLGNBQUk7UUFDdkMsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7Ozs7O0lBR0csK0NBQWM7Ozs7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDOzs7Ozs7SUFHNUQseUNBQVE7Ozs7Y0FBQyxDQUFpQjs7UUFDN0IsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUV0QixJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7O1lBRXBCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7YUFDcEU7U0FDSjs7O1FBSUQsT0FBTyxJQUFJLENBQUM7Ozs7OztJQUdULDJDQUFVOzs7O2NBQUMsS0FBc0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3ZEOzs7Ozs7SUFJRSwwQ0FBUzs7OztJQURoQixVQUNpQixDQUFlO1FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOztnQkFyTEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQzlEOzs7O2dCQWhCMEIsU0FBUztnQkFBckIsVUFBVTtnQkFNZ0UsbUJBQW1CO2dCQUV4RCxzQkFBc0I7Ozt1QkEyQnJFLEtBQUssU0FBQyxZQUFZOzhCQTRCbEIsS0FBSyxTQUFDLG1CQUFtQjswQkFHekIsS0FBSyxTQUFDLGVBQWU7MEJBR3JCLEtBQUssU0FBQyxlQUFlO2lDQUdyQixLQUFLLFNBQUMsc0JBQXNCO2tDQUs1QixLQUFLLFNBQUMsdUJBQXVCOzRCQU83QixLQUFLLFNBQUMsaUJBQWlCOzZCQUt2QixLQUFLLFNBQUMsa0JBQWtCO3FDQUt4QixLQUFLLFNBQUMsMEJBQTBCO3VDQUtoQyxNQUFNLFNBQUMsMEJBQTBCO29DQUdqQyxNQUFNLFNBQUMsdUJBQXVCOzRCQXVGOUIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7aUNBOUx2QztFQW1CZSwyQkFBMkI7O0lBd0xlQSx1REFBaUQ7SUFDdEcsNkNBQW1CLElBQTJCO1FBQTlDLFlBQWtELGtCQUFNLElBQUksQ0FBQyxTQUFHO1FBQTdDLFVBQUksR0FBSixJQUFJLENBQXVCOztLQUFrQjs7Z0JBTm5FLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRTtvQkFDMUQsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUMsQ0FBQztpQkFDL0U7Ozs7Z0JBRTJCLHNCQUFzQjs7OENBNU1sRDtFQTJNeUQsbUJBQW1COztJQVN2QkEsbURBQXVDO0lBQ3hGLHlDQUFtQixJQUEyQjtRQUE5QyxZQUFrRCxrQkFBTSxJQUFJLENBQUMsU0FBRztRQUE3QyxVQUFJLEdBQUosSUFBSSxDQUF1Qjs7S0FBa0I7O2dCQU5uRSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUU7b0JBQzFELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixDQUFDLENBQUM7aUJBQ3ZFOzs7O2dCQUUyQixzQkFBc0I7OzBDQXJObEQ7RUFvTnFELGVBQWU7Ozs7Ozs7Ozs7O0FDbk5wRTtBQVVBLElBQU0sU0FBUyxHQUFHRSxvQkFBc0IsSUFBSSxXQUFXLENBQUM7O0lBK0VwRCxxQ0FBMkIsVUFBaUMsRUFDakMsYUFBaUQsRUFDeEQsV0FDQSxVQUNSLG1CQUEwQztRQUp0RCxpQkFlQztRQWYwQixlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0M7UUFDeEQsY0FBUyxHQUFULFNBQVM7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUd4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDOztRQUc1QixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztZQUMzQyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRS9DLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUMzQyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ2xEO0lBdEZELHNCQUNXLDBEQUFpQjs7OztRQUQ1QjtZQUVJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2xDOzs7OztrQkFFNEIsUUFBZ0I7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQzs7WUFDbkMsSUFBTSxVQUFVLEdBQUdDLE1BQWEsSUFBSUMsTUFBYSxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksVUFBVSxDQUFDOzs7O09BTDlEOzBCQVVVLHVEQUFjOzs7OztZQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7Ozs7OztrQkFHTixNQUFjO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDOztZQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDOztZQUV0RyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzs7OzswQkFHbkMsK0NBQU07Ozs7O1lBQ2IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNyQixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyRjtZQUNELE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7MEJBTXpHLDJEQUFrQjs7Ozs7WUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNEOzs7OztJQUdMLHNCQUNXLDZDQUFJOzs7O1FBRGY7WUFFSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7OztPQUFBO0lBRUQsc0JBQ1csNENBQUc7Ozs7UUFEZDtZQUVJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTs7Z0JBSWhELElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7OztPQUFBO0lBRUQsc0JBQ1csNENBQUc7Ozs7UUFEZDtZQUVJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTs7Z0JBSWhELElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQztTQUNKOzs7T0FBQTs7Ozs7SUFtQk8saURBQVc7Ozs7Y0FBQyxLQUF3Qjs7O1FBR3hDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNqRjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Ozs7OztJQUkzQiwrQ0FBUzs7OztJQURoQixVQUNpQixLQUF3QjtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFaEMsSUFBSSxDQUFDLEtBQUssRUFBRTs7WUFFUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEOztRQUVELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2hEOzs7O0lBR00sZ0RBQVU7OztJQURqQjtRQUVJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEM7O2dCQTVISixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtpQkFDbkM7Ozs7Z0JBVlEsc0JBQXNCLHVCQXFGZCxJQUFJO2dCQXJGWSxtQ0FBbUMsdUJBc0ZuRCxJQUFJO2dCQTFGbUQsU0FBUztnQkFBaEQsVUFBVTtnQkFFbEMsc0JBQXNCOzs7b0NBZ0IxQixLQUFLLFNBQUMseUJBQXlCO3VCQXlDL0IsV0FBVyxTQUFDLFdBQVc7c0JBUXZCLFdBQVcsU0FBQyxVQUFVO3NCQVd0QixXQUFXLFNBQUMsVUFBVTs0QkFzQ3RCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs2QkFpQjdDLFlBQVksU0FBQyxVQUFVOztzQ0F0STVCOzs7Ozs7O0FDT0EsSUFBQTtJQUE4Q0osNENBQW9COzs7Ozs7OztJQUN2RCw0Q0FBUzs7OztjQUFDLEtBQVU7O1FBQ3ZCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sVUFBVSxDQUFDOzs7Ozs7O0lBR2YsZ0RBQWE7Ozs7O2NBQUMsSUFBaUIsRUFBRSxRQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7bUNBakI1QztFQU84QyxvQkFBb0IsRUFZakUsQ0FBQTtBQVpEO0lBMEN5Q0EsdUNBQVk7SUFVakQsNkJBQVksUUFBa0I7ZUFDMUIsa0JBQU0sUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2xHOzBCQVhVLHFDQUFJOzs7Ozs7O1lBQ1gsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQzs7Ozs7MEJBRzFFLHFDQUFJOzs7OztZQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7OztnQkFuQzFILFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUseXFCQXdCYjtpQkFDQTs7OztnQkFoRG1CLFNBQVM7OzhCQUE3QjtFQWlEeUMsWUFBWTs7Ozs7O0FDMUNyRCxJQUFBO0lBQThDQSw0Q0FBb0I7Ozs7Ozs7OztJQUN2RCxnREFBYTs7Ozs7Y0FBQyxJQUFpQixFQUFFLFFBQWE7O1FBRWpELElBQU0sWUFBWSxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7O21DQVpwQztFQU84QyxvQkFBb0IsRUFPakUsQ0FBQTtBQVBEO0lBa0N5Q0EsdUNBQVk7SUFNakQsNkJBQVksUUFBa0I7ZUFDMUIsa0JBQU0sUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2pHOzBCQU5VLHFDQUFJOzs7OztZQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7OztnQkE1QnpILFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsZ29CQXFCYjtpQkFDQTs7OztnQkF4Q21CLFNBQVM7OzhCQUE3QjtFQXlDeUMsWUFBWTs7Ozs7O0FDakNyRCxJQUFBO0lBQWdEQSw4Q0FBb0I7Ozs7Ozs7O0lBQ3pELDhDQUFTOzs7O2NBQUMsS0FBVTtRQUN2QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHdEUsOENBQVM7Ozs7Y0FBQyxLQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDWixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7Ozs7O0lBRzdFLGtEQUFhOzs7OztjQUFDLElBQWlCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pILElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDOztxQ0FyQnBDO0VBUWdELG9CQUFvQixFQWVuRSxDQUFBO0FBZkQ7SUEwQzJDQSx5Q0FBWTtJQWFuRCwrQkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksMEJBQTBCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckc7MEJBZFUsdUNBQUk7Ozs7O1lBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLFFBQVEsRUFBRTs7Z0JBRXBELElBQU0sY0FBYyxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzdGO2lCQUFNOztnQkFFSCxJQUFNLFVBQVUsR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZGLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6Rjs7Ozs7O2dCQW5DUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLGdtQkFxQmI7aUJBQ0E7Ozs7Z0JBakRtQixTQUFTOztnQ0FBN0I7RUFrRDJDLFlBQVk7Ozs7OztBQzNDdkQsSUFBQTtJQUErQ0EsNkNBQW9COzs7Ozs7Ozs7SUFDeEQsaURBQWE7Ozs7O2NBQUMsSUFBaUIsRUFBRSxRQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7b0NBVnBDO0VBTytDLG9CQUFvQixFQUtsRSxDQUFBO0FBTEQ7SUFnQzBDQSx3Q0FBWTtJQUtsRCw4QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUkseUJBQXlCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkc7MEJBTlUsc0NBQUk7Ozs7O1lBQ1gsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7O2dCQTNCekgsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSwrbEJBcUJiO2lCQUNBOzs7O2dCQXRDbUIsU0FBUzs7K0JBQTdCO0VBdUMwQyxZQUFZOzs7Ozs7QUNqQ3RELElBQUE7SUFBOENBLDRDQUFvQjs7Ozs7Ozs7O0lBQ3ZELGdEQUFhOzs7OztjQUFDLElBQWlCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7bUNBVHJHO0VBTThDLG9CQUFvQixFQUtqRSxDQUFBO0FBTEQ7SUFnQ3lDQSx1Q0FBWTtJQU9qRCw2QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkc7MEJBUlUsNENBQVc7Ozs7O1lBQ2xCLE9BQU8sUUFBUTtpQkFDVixPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3ZFLFdBQVcsRUFBRSxDQUFDOzs7Ozs7Ozs7SUFPaEIsaUNBQUc7Ozs7Y0FBQyxJQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7O2dCQXJDM0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSx3b0JBcUJiO2lCQUNBOzs7O2dCQXJDbUIsU0FBUzs7OEJBQTdCO0VBc0N5QyxZQUFZOzs7Ozs7QUN0Q3JEOzs7O2dCQW9CQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsZUFBZTt3QkFFZixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUVyQixhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7d0JBQy9CLDJCQUEyQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLHNCQUFzQjt3QkFDdEIsbUNBQW1DO3dCQUNuQywrQkFBK0I7d0JBQy9CLDJCQUEyQjtxQkFDOUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNiLGFBQWE7cUJBQ2hCO2lCQUNKOzs4QkFyREQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3FCK0JBLDZCQUFhO0lBbUR4QyxtQkFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQUUsY0FBZ0M7UUFBcEYsWUFDSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxTQVMzQztRQVBHLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7S0FDMUI7SUFwREQsc0JBRVcsK0JBQVE7Ozs7UUFGbkI7WUFHSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7Ozs7O2tCQUVtQixLQUFhOztZQUM3QixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2dCQUU3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXpFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUIsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckg7Ozs7T0FuQko7Ozs7SUFtRE0sMkJBQU87OztJQURkO1FBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztLQUNKOztnQkFwRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsNElBTWI7b0JBQ0csTUFBTSxFQUFFLENBQUMsOENBSVosQ0FBQztpQkFDRDs7OztnQkFuQnNFLFNBQVM7Z0JBQzVFLFVBQVU7Z0JBQUUsaUJBQWlCOzs7NkJBb0I1QixXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsY0FBYzsyQkFPMUIsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSztpQ0F5QkwsTUFBTTs4QkFHTixLQUFLOzZCQUdMLEtBQUs7cUNBR0wsS0FBSzs4QkFJTCxLQUFLOzBCQWVMLFlBQVksU0FBQyxPQUFPOztvQkFwRnpCO0VBcUIrQixhQUFhOzs7Ozs7QUNyQjVDOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDVixTQUFTO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDTCxTQUFTO3FCQUNaO2lCQUNKOzswQkFoQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFLQSxJQUFhLHFCQUFxQixHQUFHO0lBQ2pDLFNBQVMsb0JBQUUsV0FBb0MsQ0FBQTtJQUMvQyxZQUFZLG9CQUFFLGNBQXVDLENBQUE7SUFDckQsUUFBUSxvQkFBRSxVQUFtQyxDQUFBO0NBQ2hELENBQUM7QUFFRixJQUFBO0lBcUJJLHlCQUFZLGFBQXFFO1FBQXJFLDhCQUFBLEVBQUEsZ0JBQXNDLHFCQUFxQixDQUFDLFNBQVM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWhELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzBCQWJVLHFDQUFROzs7OztZQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUFjbEIsc0NBQVk7Ozs7O2NBQUMsTUFBYyxFQUFFLGVBQStCOztRQUEvQixnQ0FBQSxFQUFBLHVCQUErQjtRQUMvRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFFNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztZQUV4QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOztnQkFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUMzRDtZQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxlQUFlLEVBQUU7O2dCQUVoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9DO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRWxELElBQUksQ0FBQyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDekQ7Ozs7OztJQUdFLDBDQUFnQjs7OztjQUFDLFVBQWtCO1FBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFOztnQkFFZCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQ2xDOzs7OztJQUdFLHlDQUFlOzs7O1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OztJQUk3Qix1Q0FBYTs7OztjQUFDLEtBQXFCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkI7Ozs7OztJQUlFLDJDQUFpQjs7OztjQUFDLEtBQXFCO1FBQzFDLE9BQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDbkMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2xCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7OztJQUl2RCx1Q0FBYTs7OztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDbkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7OztJQUlmLCtCQUFLOzs7O2NBQUMsUUFBbUI7UUFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxRQUFRLEVBQUUsR0FBQSxDQUFDLENBQUM7OzBCQTFHckM7SUE0R0MsQ0FBQTs7Ozs7OztJQzlERyw2QkFBb0IsU0FBbUIsRUFBUyxPQUFrQjtRQUE5QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztLQUNuQzswQkFuQ1UsMkNBQVU7Ozs7OztZQUVqQixJQUFNLE9BQU8scUJBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUF3QixFQUFDO1lBQ3RELE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7OzBCQUt2QywyQ0FBVTs7Ozs7WUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7a0JBR04sS0FBYTs7WUFFL0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM5RTs7Ozs7MEJBU00saURBQWdCOzs7OztZQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Ozs7Ozs7O0lBUzdCLDBDQUFZOzs7OztRQUVmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Z0JBNUMxQyxTQUFTLFNBQUM7O29CQUVQLFFBQVEsRUFBRSxPQUFPO2lCQUNwQjs7OztnQkFad0MsU0FBUztnQkFBRSxVQUFVOzs7b0NBc0N6RCxZQUFZLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEdBQUEsQ0FBQzs7OEJBdkNuRDs7O0lBNkRxQ0EsbUNBQWE7SUE4RTlDLHlCQUFZLFFBQWtCLEVBQUUsT0FBa0IsRUFBRSxjQUFnQztRQUFwRixZQUNJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFNBYzNDOzs7UUFYRyxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFekQsS0FBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7UUFDbkMsS0FBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztRQUVsQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUM7OztRQUd4QyxLQUFJLENBQUMsc0JBQXNCLEdBQUcsZUFBUSxDQUFDOztLQUMxQzswQkFuRlUsb0NBQU87Ozs7O1lBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7a0JBR04sS0FBcUI7O1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOztZQUV0QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO2dCQUNoRCxJQUFJLE1BQU0sS0FBSyxjQUFjLEVBQUU7OztvQkFFM0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQyxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUM5QixJQUFJLFVBQVUsQ0FDVixLQUFJLENBQUMsY0FBYyxFQUNuQixLQUFJLENBQUMsc0JBQXNCLEVBQzNCLG1CQUFtQixDQUFDLE1BQU0sRUFDMUIsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBQSxDQUFDLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRTs7b0JBRVQsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDekI7aUJBQ0o7Z0JBRUQsY0FBYyxHQUFHLE1BQU0sQ0FBQzthQUMzQixDQUFDLENBQUM7Ozs7OzBCQUdJLDBDQUFhOzs7OztrQkFBQyxLQUFnQjs7WUFDckMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxTQUFTO2lCQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBQyxDQUFlO2dCQUNwRCxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDOzs7OzswQkFRMUIsa0NBQUs7Ozs7O2tCQUFDLEtBQW9DO1lBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7Ozs7OzBCQUd6Qix3Q0FBVzs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDOzs7OzswQkFJcEQsbUNBQU07Ozs7O1lBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQSxDQUFDLENBQUM7Ozs7Ozs7OztJQWtDaEQsaUNBQU87Ozs7SUFEZCxVQUNlLENBQTJCO1FBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXRCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUsscUJBQXFCLENBQUMsU0FBUyxFQUFFOztnQkFDakUsSUFBTSxNQUFNLHFCQUFHLENBQUMsQ0FBQyxNQUEyQixFQUFDO2dCQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztvQkFFMUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMzQzthQUNKO1NBQ0o7S0FDSjs7Ozs7SUFFTSx5Q0FBZTs7OztjQUFDLENBQWU7O1FBRWxDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTs7WUFFakQsSUFBTSxNQUFNLHFCQUFHLENBQUMsQ0FBQyxNQUFpQixFQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUU7Z0JBQ3JILENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QjtZQUdELGtEQUFPLGdCQUFRLENBQWlDOztZQUVoRCxJQUFJLGlCQUFpQixHQUFtQixJQUFJLENBQUM7WUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLGtEQUFPLHNCQUFjLENBQWlDO2dCQUN0RCxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7YUFDeEQ7WUFFRCxRQUFRLENBQUMsQ0FBQyxPQUFPOztnQkFFYixLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2lCQUNUOztnQkFFRCxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUM7O2dCQUVsQixLQUFLLE9BQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7b0JBRWhGLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtpQkFDVDs7Z0JBRUQsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO29CQUNoQixJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDeEMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUN4QixNQUFNO3FCQUNUO2lCQUNKOzs7Z0JBR0QsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO29CQUNoQixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3ZDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDNUY7b0JBQ0QsTUFBTTtpQkFDVDs7Z0JBRUQsS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUN6QixrREFBTyxzQkFBYyxDQUFpQzt3QkFFdEQsY0FBYyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2lCQUNUO2FBQ0o7U0FDSjs7Ozs7SUFHRSx3Q0FBYzs7Ozs7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzdDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7WUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7Ozs7Ozs7SUFJRSx5Q0FBZTs7Ozs7Y0FBQyxZQUFnQyxFQUFFLE9BQWU7UUFDcEUsSUFBSSxZQUFZLEVBQUU7O1lBRWQsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDbkM7O1FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDMUIsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFlBQVksR0FBQSxDQUFDLENBQUM7O1FBRXhDLElBQUksWUFBWSxDQUFxQjtRQUVyQyxRQUFRLE9BQU87WUFDWCxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkIsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssT0FBTyxDQUFDLElBQUk7Z0JBQ2IsYUFBYSxJQUFJLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUV0QixhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixNQUFNO2lCQUNUO2dCQUVELGFBQWEsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE1BQU07U0FDYjs7UUFHRCxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZLENBQUM7UUFFMUQsSUFBSSxZQUFZLEVBQUU7O1lBRWQsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1lBRy9CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLFlBQVksQ0FBQzs7Ozs7O0lBR2pCLHNDQUFZOzs7O2NBQUMsSUFBd0I7O1FBQ3hDLElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDOztRQUNqRCxJQUFNLFlBQVksR0FBYyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUVuRixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFFOUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDeEQ7UUFFRCxJQUFJLFlBQVksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNqQyxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztJQUd4Qyw0Q0FBa0I7Ozs7O1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsR0FBQSxDQUFDLENBQUM7Ozs7O0lBRzVELHdDQUFjOzs7OztRQUVsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7O0lBR25CLHFDQUFXOzs7O1FBQ2QsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7OztnQkE1UXJDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs7OztnQkEzRHdDLFNBQVM7Z0JBQUUsVUFBVTtnQkFDVCxpQkFBaUI7OztpQ0ErRGpFLEtBQUs7eUNBR0wsS0FBSztzQ0F3Q0wsZUFBZSxTQUFDLG1CQUFtQjtzQ0F1Qm5DLEtBQUs7d0NBR0wsS0FBSzswQkFzQkwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7MEJBNUpyQztFQTZEcUMsYUFBYTs7Ozs7O0FDN0RsRDtJQWtGSSxxQkFBb0IsUUFBbUI7UUFBdkMsaUJBT0M7UUFQbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZDO1NBQ0osQ0FBQyxDQUFDO0tBQ047MEJBckVVLGlDQUFROzs7Ozs7O1lBRWYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLEdBQUEsQ0FBQyxDQUFDOzs7OztJQUdsRCxzQkFDVyxxQ0FBWTs7OztRQUR2QjtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDcEM7OztPQUFBO0lBRUQsc0JBQ1csaUNBQVE7Ozs7UUFEbkI7O1lBR0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3hEOzs7T0FBQTtJQUVELHNCQUNXLCtCQUFNOzs7O1FBRGpCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM5Qjs7Ozs7a0JBRWlCLEtBQWE7O1lBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7T0FKN0M7SUFPRCxzQkFFVyxtQ0FBVTs7OztRQUZyQjtZQUdJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDbEM7Ozs7O2tCQUVxQixLQUFhO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7T0FIeEM7SUFTRCxzQkFDVyxpQ0FBUTs7OztRQURuQjtZQUVJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTs7Z0JBRTFDLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTs7Z0JBRTdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6Qjs7WUFFRCxPQUFPLENBQUMsQ0FBQztTQUNaOzs7T0FBQTtJQUVELHNCQUNXLGtDQUFTOzs7O1FBRHBCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUNyQzs7Ozs7a0JBRW9CLEtBQTJCO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7OztPQUh0Qzs7OztJQWVNLHdDQUFrQjs7Ozs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFekMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzthQUNqQixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxDQUFDLENBQUM7Ozs7O0lBR3pDLHFDQUFlOzs7Ozs7UUFFbkIsSUFBSSxDQUFDLFFBQVE7YUFDUixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxHQUFBLENBQUM7YUFDbkIsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7Ozs7SUFJOUMsNkJBQU87Ozs7SUFEZCxVQUNlLENBQWM7UUFDekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDakIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNsQztLQUNKOzs7OztJQUdNLGdDQUFVOzs7O0lBRGpCLFVBQ2tCLENBQWE7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0tBQ0o7Ozs7O0lBR00sZ0NBQVU7Ozs7SUFEakIsVUFDa0IsQ0FBOEI7O1FBRTVDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBRWpCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUM3QixDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7U0FDSjtLQUNKOzs7O0lBRU8scUNBQWU7Ozs7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxTQUFTO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLHFCQUFxQixDQUFDLFlBQVksRUFBRTs7WUFFdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7OztnQkF4SVIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs7OztnQkFSRyxVQUFVOzs7d0JBWVQsWUFBWSxTQUFDLGVBQWU7NEJBRzVCLGVBQWUsU0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOytCQVFsRCxNQUFNOzJCQUtOLFdBQVcsU0FBQyxjQUFjO3lCQU0xQixLQUFLOzZCQVVMLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSzs0QkFTTCxLQUFLLFNBQUMsVUFBVTsyQkFHaEIsV0FBVyxTQUFDLGVBQWU7NEJBYzNCLEtBQUs7MEJBcUNMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBU2hDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBT25DLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NCQTlIeEM7Ozs7Ozs7QUNBQTs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3RCO2lCQUNKOzs0QkFyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0E7OztBQUFBO0lBU0kscUJBQVksUUFBNkIsRUFBRSxZQUF5QztRQUFwRixpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDOztRQUdsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUEsQ0FBQyxDQUFDO0tBQzFFOzBCQVZVLGtDQUFTOzs7OztZQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7SUFZaEMsK0JBQVM7Ozs7Y0FBQyxRQUEyQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFLLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDOzs7Ozs7SUFJVCw0QkFBTTs7OztjQUFDLFFBQTJCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7Ozs7OztJQUlULDZCQUFPOzs7O2NBQUMsTUFBUTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O0lBSTVCLDBCQUFJOzs7O2NBQUMsTUFBUTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7SUFJekIsNkJBQU87Ozs7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDOztzQkE5Q3JDO0lBZ0RDOzs7Ozs7O0FDM0NELElBQWEsU0FBUyxHQUFHO0lBQ3JCLElBQUksb0JBQUUsTUFBbUIsQ0FBQTtJQUN6QixJQUFJLG9CQUFFLE1BQW1CLENBQUE7SUFDekIsS0FBSyxvQkFBRSxPQUFvQixDQUFBO0lBQzNCLE1BQU0sb0JBQUUsUUFBcUIsQ0FBQTtJQUM3QixLQUFLLG9CQUFFLE9BQW9CLENBQUE7Q0FDOUIsQ0FBQzs7OztBQUdGOzs7QUFBQTtJQTBCSSxxQkFBWSxPQUFpQyxFQUFFLFVBQXlCO1FBQTVELHdCQUFBLEVBQUEsbUJBQWlDO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7O1FBRXBFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO3NCQXRETDtJQXVEQyxDQUFBOzs7O0FBR0Q7OztBQUFBO0lBQTBFQSx1Q0FBb0I7SUFHMUYsNkJBQVksUUFBK0IsRUFBRSxPQUFpQyxFQUFFLFVBQXlCO1FBQTVELHdCQUFBLEVBQUEsbUJBQWlDO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7UUFBekcsWUFDSSxrQkFBTSxPQUFPLEVBQUUsVUFBVSxDQUFDLFNBRzdCO1FBREcsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0tBQzVCOzhCQWpFTDtFQTBEMEUsV0FBVyxFQVFwRixDQUFBOzs7O0FBR0Q7OztBQUFBO0lBQTJFQSx3Q0FBb0I7SUFHM0YsOEJBQVksU0FBbUIsRUFBRSxPQUFpQyxFQUFFLFVBQXlCO1FBQTVELHdCQUFBLEVBQUEsbUJBQWlDO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7UUFBN0YsWUFDSSxrQkFBTSxPQUFPLEVBQUUsVUFBVSxDQUFDLFNBRzdCO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0tBQzlCOytCQTVFTDtFQXFFMkUsV0FBVyxFQVFyRjs7Ozs7Ozs7O0FDekVEOzs7QUFBQTtJQUNJLHVCQUFZLE9BQXNCLEVBQUUsSUFBbUI7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7Ozs7O0lBR00sK0JBQU87Ozs7Y0FBQyxNQUFROzs7OztJQUNoQiw0QkFBSTs7OztjQUFDLE1BQVE7d0JBWnhCO0lBYUMsQ0FBQTs7OztBQUdEOzs7QUFBQTtJQUE0REEseUJBQW1CO0lBRzNFLGVBQVksUUFBNEIsRUFBRSxPQUFTO1FBQW5EOzs7UUFHSSxrQkFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FHekM7UUFERyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7S0FDMUI7Z0JBekJMO0VBZ0I0RCxhQUFhLEVBVXhFOzs7Ozs7Ozs7O0FDckJEOzs7O0FBQUE7SUFBcURBLGlDQUF1RDs7Ozt3QkFMNUc7RUFLcUQsV0FBVyxFQUErQzs7Ozs7O0FDTC9HOzs7O0lBMktJLGtCQUFvQixTQUFtQixFQUFVLFFBQW1CLEVBQVUsaUJBQXFDO1FBQW5ILGlCQW1CQztRQW5CbUIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9COztRQUUvRyxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBbUIsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUd4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7UUFHMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FDN0IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEdBQUEsRUFDbkQsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUFDOztRQUd0RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvRDswQkExSFUsNkJBQU87Ozs7O1lBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7Ozs7MEJBR3RCLDBCQUFJOzs7OztZQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Ozs7O0lBMEI5QixzQkFDVyxrQ0FBWTs7Ozs7UUFEdkI7WUFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7Ozs7O2tCQUV1QixVQUFrQjtZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7T0FIbkU7SUFlRCxzQkFDVyxnQ0FBVTs7OztRQURyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7Ozs7a0JBRXFCLFVBQWtCO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDOztZQUU5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztPQU52QjtJQVlELHNCQUNXLGdDQUFVOzs7O1FBRHJCO1lBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCOzs7OztrQkFFcUIsUUFBZ0I7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O09BSC9EOzBCQTRCVSxvQ0FBYzs7Ozs7O1lBQ3JCLElBQU0sT0FBTyxHQUFtQixFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxPQUFPLENBQUM7Ozs7Ozs7O0lBd0JaLDJCQUFROzs7Ozs7UUFFWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEgsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBQSxDQUFDLENBQUM7Ozs7O0lBR3pDLGtDQUFlOzs7Ozs7UUFFbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztVQUNqRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7O1FBRXZFLElBQU0sZUFBZSxxQkFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUF3QixFQUFDO1FBQzlFLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRTtZQUM1QixlQUFlLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzRDs7UUFHRCxJQUFNLE9BQU8scUJBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUF3QixFQUFDO1FBQzVELFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QixDQUFDLENBQUM7O1FBR0gsSUFBTSxTQUFTLHFCQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUF1QixFQUFDO1FBQzdFLElBQUksU0FBUyxFQUFFOztZQUVYLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBRXhDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDaEU7Ozs7Ozs7SUFJRSw2QkFBVTs7Ozs7Y0FBSSxNQUEyQjtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7Ozs7OztJQUloRCwwQkFBTzs7OztjQUFDLFFBQThCOztRQUE5Qix5QkFBQSxFQUFBLDBCQUE4Qjs7UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1lBR3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUM3QixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7O2dCQUU5RSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDekIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUNwRTtnQkFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsQ0FBQzthQUNkLENBQUMsQ0FBQyxDQUFDO1NBQ1g7Ozs7O0lBSUUsd0JBQUs7Ozs7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9COzs7OztJQUlHLCtCQUFZOzs7OztRQUVoQixJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztRQUM3RyxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDOztRQUc5QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7O1lBQy9DLElBQU0sT0FBTyxxQkFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQXdCLEVBQUM7O1lBRzVELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDN0U7Ozs7OztJQUdFLDBCQUFPOzs7O2NBQUMsQ0FBWTs7UUFFdkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOzs7Ozs7O0lBS2pCLGtDQUFlOzs7O0lBRHRCLFVBQ3VCLENBQWU7UUFDbEMsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7O1lBRTlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7O0lBR00sbUNBQWdCOzs7SUFEdkI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkI7O2dCQXBTSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxxckNBOEJiO29CQUNHLE1BQU0sRUFBRSxDQUFDLGdQQVlaLENBQUM7aUJBQ0Q7Ozs7Z0JBdERvRCxTQUFTO2dCQUFyQixVQUFVO2dCQUdWLG1CQUFtQjs7OzZCQXFEdkQsS0FBSzs4QkFJTCxLQUFLOzRCQWdCTCxNQUFNLFNBQUMsVUFBVTt5QkFJakIsTUFBTSxTQUFDLFFBQVE7NEJBSWYsTUFBTSxTQUFDLFdBQVc7Z0NBR2xCLFNBQVMsU0FBQyxPQUFPO3VCQUlqQixLQUFLOytCQU9MLEtBQUs7MEJBVUwsS0FBSzs2QkFRTCxLQUFLOzZCQWVMLEtBQUs7NkJBWUwsS0FBSztxQ0FJTCxLQUFLO2tDQVNMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtrQ0FxSXZELFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzttQ0FRekMsWUFBWSxTQUFDLGVBQWU7O21CQTFTakM7Ozs7Ozs7QUNBQTtJQVNJLHlCQUFvQixpQkFBcUM7UUFBckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtLQUFJOzs7Ozs7SUFFdEQsOEJBQUk7Ozs7O2NBQVUsS0FBMEI7O1FBRTNDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQWlCLFFBQVEsQ0FBQyxDQUFDOztRQUd0RixJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBRTdDLElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFOztZQUV0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTs7Z0JBRTlFLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTzs7Z0JBRXhCLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDeEMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLEtBQUssWUFBWSxvQkFBb0IsRUFBRTs7WUFHOUMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUM5RCxLQUFLLENBQUMsU0FBUyxFQUNmO2dCQUNJO29CQUNJLE9BQU8sRUFBRSxLQUFLO29CQUNkLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQzlEO2FBQ0osQ0FDSixDQUFDOztZQUdGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztZQUd6RixJQUFNLGNBQWMscUJBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQXdCLEVBQUM7Ozs7WUFLN0UsT0FBTyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksY0FBYyxDQUFDLGFBQWEsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFFO2dCQUNoRyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25HOztZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2xFOzs7UUFJRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7O1FBR3pELGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR2pDLE9BQU8sSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDOzs7Z0JBeERuRCxVQUFVOzs7O2dCQU5GLG1CQUFtQjs7MEJBRDVCOzs7Ozs7O0FDQUE7Ozs7Z0JBUUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDVixRQUFRO3FCQUNYO29CQUNELE9BQU8sRUFBRTt3QkFDTCxRQUFRO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDUCxlQUFlO3FCQUNsQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2IsUUFBUTtxQkFDWDtpQkFDSjs7eUJBM0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7SUE0R0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUFsRkQsc0JBQ1csOEJBQUs7Ozs7UUFEaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7Ozs7O2tCQUVnQixLQUFZOztZQUV6QixJQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzs7O09BVjNCO0lBYUQsc0JBQ1csZ0NBQU87Ozs7UUFEbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7Ozs7O2tCQUVrQixLQUFZOztZQUUzQixJQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDOzs7O09BVjdCO0lBYUQsc0JBQ1csa0NBQVM7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7Ozs7O2tCQUVvQixLQUFZOztZQUU3QixJQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7OztPQVYxRDtJQWFELHNCQUNXLHVDQUFjOzs7O1FBRHpCO1lBRUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RGOzs7T0FBQTtJQUVELHNCQUNXLG1DQUFVOzs7O1FBRHJCOztZQUVJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFckUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUM7WUFFdkQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3Qzs7O09BQUE7SUFFRCxzQkFDVyxtQ0FBVTs7Ozs7UUFEckIsVUFDc0IsT0FBYztZQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0I7WUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7YUFDaEM7U0FDSjs7O09BQUE7O2dCQXhHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwwTUFPYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyw0RUFLWixDQUFDO2lCQUNEOzs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsZ0JBQWdCOzhCQVM1QixLQUFLOytCQUdMLEtBQUs7d0JBR0wsS0FBSzswQkFnQkwsS0FBSzs0QkFnQkwsS0FBSztpQ0FnQkwsV0FBVyxTQUFDLGVBQWU7NkJBSzNCLFdBQVcsU0FBQyxtQkFBbUI7NkJBUy9CLEtBQUssU0FBQyxPQUFPOztzQkFsR2xCOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDVixXQUFXO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDTCxXQUFXO3FCQUNkO2lCQUNKOzs0QkFkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDb0RJOzRCQUY2QixDQUFDLENBQUM7UUFHM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUE1QkQsc0JBQ1csOEJBQU87Ozs7UUFEbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7Ozs7O2tCQUVrQixLQUFZO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7Ozs7T0FIMUI7MEJBVVUsNEJBQUs7Ozs7OztZQUVaLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFlNUIsMkJBQU87Ozs7Y0FBQyxDQUFRO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7Ozs7OztJQUdFLCtCQUFXOzs7O2NBQUMsQ0FBUTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFJbkIsOEJBQVU7OztJQURqQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRU0sOEJBQVU7Ozs7Y0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7Z0JBNUUxQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx1T0FRYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyxrREFJWixDQUFDO2lCQUNEOzs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsY0FBYzs4QkFLMUIsTUFBTTswQkFLTixLQUFLOzZCQVNMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzs2QkErQkwsWUFBWSxTQUFDLFVBQVU7O29CQXpFNUI7OztJQXdGNENBLDBDQUFzQztJQUM5RSxnQ0FBWSxJQUFjO2VBQ3RCLGtCQUFNLElBQUksQ0FBQztLQUNkOztnQkFSSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTtvQkFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDbEU7Ozs7Z0JBRW9CLFNBQVM7O2lDQXpGOUI7RUF3RjRDLG1CQUFtQjs7Ozs7O0FDeEYvRDs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFdBQVc7d0JBQ1gsWUFBWTtxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsU0FBUzt3QkFDVCxzQkFBc0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxTQUFTO3dCQUNULHNCQUFzQjtxQkFDekI7aUJBQ0o7OzBCQWxCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztJQXFESSx5QkFBbUIsZ0JBQW9DO1FBQXBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1FBR3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLEdBQUEsQ0FBQztLQUNoQztJQXhCRCxzQkFDVyxxQ0FBUTs7OztRQURuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7Ozs7a0JBRW1CLFFBQW1EO1lBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbEUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQzthQUNOOzs7O09BVEo7O2dCQTNCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLCtHQUdiO2lCQUNBOzs7O2dCQVo2QixtQkFBbUI7Ozs2QkFlNUMsV0FBVyxTQUFDLGNBQWM7d0JBRzFCLEtBQUs7d0JBR0wsS0FBSzs0QkFJTCxLQUFLOzJCQUtMLEtBQUs7a0NBZ0JMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7MEJBbEQ1RDs7Ozs7OztBQ0FBOzs7QUFLQTs7O0FBQUE7SUEwRUksdUJBQVksZUFBK0I7UUFBL0IsZ0NBQUEsRUFBQSx1QkFBK0I7UUFBM0MsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBQyxFQUFFLEVBQUUsQ0FBQzs7WUFFdkIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEMsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFOzs7Z0JBR3pCLE9BQU8sRUFBRTtxQkFFSixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBWSxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQztxQkFDL0QsUUFBUSxFQUFFO3FCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDMUI7O1lBR0QsT0FBTyxLQUFLLENBQUM7U0FDaEIsQ0FBQzs7UUFHRixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7MEJBeEZVLGtDQUFPOzs7OztZQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O2tCQUdOLE9BQVc7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztZQUU5QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzs7WUFFaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OzswQkFHTix3Q0FBYTs7Ozs7WUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7Ozs7a0JBR04sUUFBbUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7O1lBRS9CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7MEJBR04sd0NBQWE7Ozs7O1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDOzs7OzswQkFHeEQsdUNBQVk7Ozs7O1lBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7O2tCQUdOLEtBQXdCO1lBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztZQUUzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7OzBCQVFOLGtDQUFPOzs7OztZQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7MEJBYWQsZ0NBQUs7Ozs7O1lBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OzswQkFHWixzQ0FBVzs7Ozs7WUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7Ozs7Ozs7O0lBOEJ0QiwwQ0FBa0I7Ozs7O2NBQUMsS0FBWSxFQUFFLFFBQXdDOztRQUF4Qyx5QkFBQSxFQUFBLDBCQUF3QztRQUM1RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQ3hDO1lBQ0ksS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckMsRUFDRCxJQUFJLENBQUMsV0FBVyxDQUNuQixDQUFDOzs7Ozs7O0lBSUMsbUNBQVc7Ozs7O2NBQUMsS0FBWSxFQUFFLFFBQXdDOztRQUF4Qyx5QkFBQSxFQUFBLDBCQUF3QztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTs7O1lBRzdDLE9BQU8sUUFBUSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTs7WUFFaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVoRCxPQUFPLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztZQUd6QixJQUFNLFdBQVcscUJBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQXdCLEVBQUM7WUFFNUYsV0FBVztpQkFDTixJQUFJLENBQUMsVUFBQSxPQUFPO2dCQUNULEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUUxQixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixPQUFPLFFBQVEsRUFBRSxDQUFDO2FBQ3JCLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSzs7O2dCQUVSLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQixDQUFDLENBQUM7WUFFUCxPQUFPO1NBQ1Y7O1FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sUUFBUSxFQUFFLENBQUM7Ozs7OztJQUlkLHFDQUFhOzs7O2NBQUMsT0FBVztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Ozs7OztJQVFyQixxQ0FBYTs7OztjQUFDLE9BQWU7UUFDaEMsSUFBSSxPQUFPLFlBQVksS0FBSyxFQUFFO1lBQzFCLHlCQUFPLG1CQUFDLElBQUksQ0FBQyxjQUFrQyxHQUFFLFNBQVMsRUFBRSxPQUFPLENBQXdCLEVBQUM7U0FDL0Y7UUFDRCx5QkFBTyxtQkFBQyxJQUFJLENBQUMsY0FBZ0MsR0FBRSxTQUFTLEVBQUUsT0FBTyxDQUFzQixFQUFDOzs7Ozs7SUFJcEYsK0JBQU87Ozs7Y0FBQyxLQUFZO1FBQ3hCLElBQUk7WUFDQSxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDaEI7Ozs7Ozs7SUFJRSx3Q0FBZ0I7Ozs7O2NBQUMsSUFBVyxFQUFFLEtBQVk7O1FBQzdDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxRQUFNLEtBQUssU0FBTSxHQUFBLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDOzs7OztJQUlSLDZCQUFLOzs7O1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBN003QjtJQStNQzs7Ozs7O0FDL01EOzs7O0lBNExJLG1CQUFvQixRQUFtQixFQUFFLFFBQWtCLEVBQVUsb0JBQTJDO1FBQWhILGlCQWtCQztRQWxCbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzVHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO0lBeElELHNCQUNXLCtCQUFROzs7O1FBRG5CO1lBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUN0Qzs7O09BQUE7SUFTRCxzQkFDVyxrQ0FBVzs7Ozs7UUFEdEI7WUFFSSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7U0FDN0Q7Ozs7O2tCQUVzQixXQUFrQjtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQzs7OztPQUhuQzswQkFVVSxtQ0FBWTs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFXLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7OzswQkFHdkYsNEJBQUs7Ozs7O1lBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Ozs7O2tCQUduQixLQUFZOztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzs7WUFFaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7O2dCQUV6QyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7Ozs7O0lBR2hGLHNCQUNXLDhCQUFPOzs7OztRQURsQixVQUNtQixPQUF1QjtZQUN0QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDeEM7U0FDSjs7O09BQUE7SUFFRCxzQkFDVyxvQ0FBYTs7Ozs7UUFEeEIsVUFDeUIsTUFBOEI7WUFDbkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2FBQzdDO1NBQ0o7OztPQUFBO0lBRUQsc0JBQ1csb0NBQWE7Ozs7O1FBRHhCLFVBQ3lCLFFBQWdDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztTQUMvQzs7O09BQUE7SUFFRCxzQkFDVyxtQ0FBWTs7Ozs7UUFEdkIsVUFDd0IsS0FBd0I7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNDOzs7T0FBQTswQkFJVSxzQ0FBZTs7Ozs7O1lBQ3RCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUNoQztpQkFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO2dCQUN6QyxPQUFPLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILE9BQU8sVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUM7YUFDOUU7Ozs7OztRQUdMLFVBQzJCLFNBQTRDO1lBQ25FLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDckM7Ozs7SUFRRCxzQkFDVyxrQ0FBVzs7Ozs7UUFEdEIsVUFDdUIsS0FBWTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDMUM7OztPQUFBO0lBRUQsc0JBQ1csa0NBQVc7Ozs7UUFEdEI7WUFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3pDOzs7T0FBQTswQkFLVSw4QkFBTzs7Ozs7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztJQW9DekQsbUNBQWU7Ozs7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7Ozs7SUFHdEMsa0NBQWM7Ozs7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFJekQsMEJBQU07Ozs7Y0FBQyxNQUFRO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0Qzs7Ozs7O0lBR0UsMkJBQU87Ozs7Y0FBQyxDQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFJVCw2QkFBUzs7O0lBRGhCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0tBQ0o7Ozs7SUFFTyx3QkFBSTs7OztRQUNSLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7WUFFckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7Ozs7OztJQUlFLDhCQUFVOzs7O0lBRGpCLFVBQ2tCLENBQWE7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0tBQ0o7Ozs7O0lBR00sNkJBQVM7Ozs7Y0FBQyxNQUFRO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQVksTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7OztnQkFuUHhGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHlnQ0F3QmI7b0JBQ0csTUFBTSxFQUFFLENBQUMsMk1BV1osQ0FBQztpQkFDRDs7OztnQkFuRG9DLFVBQVU7Z0JBQWUsU0FBUztnQkFJdkIsc0JBQXNCOzs7d0JBb0RqRSxTQUFTLFNBQUMsZUFBZTs2QkFLekIsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGNBQWM7MkJBRzFCLFdBQVcsU0FBQyxlQUFlOzJCQUczQixXQUFXLFNBQUMsY0FBYzswQkFNMUIsS0FBSzs4QkFNTCxLQUFLOzBCQTZCTCxLQUFLO2dDQU9MLEtBQUs7Z0NBT0wsS0FBSzsrQkFLTCxLQUFLO2tDQWlCTCxLQUFLO2lDQUtMLEtBQUs7dUNBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUtMLFdBQVcsU0FBQyxlQUFlOzZCQUszQixLQUFLO21DQVdMLE1BQU0sU0FBQyxnQkFBZ0I7NkJBR3ZCLEtBQUs7cUNBR0wsS0FBSzs0QkFnREwsWUFBWSxTQUFDLFNBQVM7NkJBY3RCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O29CQXZQeEM7Ozs7Ozs7QUNBQTs7OztnQkFTQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsU0FBUzt3QkFDVCxlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsU0FBUztxQkFDWjtpQkFDSjs7MEJBeEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNjd0NBLG1DQUFtQjtJQStCdkQseUJBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFTLGNBQWdDO1FBQTNGOzs7UUFHSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBVTNCO1FBYjBELG9CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUt2RixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7OztRQUd4QyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzs7S0FDN0I7MEJBM0JVLHNDQUFTOzs7OztrQkFBQyxTQUEyQjtZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQzFCOzs7Ozs7Ozs7SUF5QkUsaUNBQU87Ozs7SUFEZCxVQUNlLENBQWM7UUFEN0IsaUJBS0M7UUFIRyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV0QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDdEQ7O2dCQTFESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGdGQUdiO2lCQUNBOzs7O2dCQVhjLFNBQVM7Z0JBQUUsVUFBVTtnQkFBVSxpQkFBaUI7Ozs2QkFjMUQsV0FBVyxTQUFDLFlBQVk7d0JBR3hCLEtBQUs7NkJBSUwsTUFBTTsyQkFHTixXQUFXLFNBQUMsY0FBYztrQ0FnQjFCLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTswQkFrQnZELFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzBCQTVEckM7RUFjd0MsbUJBQW1COzs7Ozs7QUNkM0Q7SUFtQkkseUJBQW9CLFNBQW1CLEVBQVUsUUFBbUI7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDN0I7MEJBYlUsa0NBQUs7Ozs7O2tCQUFDLEtBQVk7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFlckUscUNBQVc7Ozs7SUFEbEIsVUFDbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFHTSxtQ0FBUzs7OztJQURoQixVQUNpQixDQUFlO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9COzs7O0lBRU0sK0JBQUs7Ozs7OztRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUEsQ0FBQyxDQUFDOzs7Z0JBdEM3RCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtpQkFDckM7Ozs7Z0JBSndDLFNBQVM7Z0JBQUUsVUFBVTs7OzZCQU16RCxXQUFXLFNBQUMsY0FBYzsrQkFHMUIsV0FBVyxTQUFDLG1CQUFtQjs4QkFrQi9CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs0QkFLN0MsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7MEJBaEN2Qzs7Ozs7OztBQ0FBOzs7OztJQW1PSSx1QkFBb0IsUUFBbUIsRUFBWSxvQkFBMkM7UUFBOUYsaUJBa0JDO1FBbEJtQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVkseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUMxRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7O1FBRTdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQU8sSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjtJQWhORCxzQkFDVyxtQ0FBUTs7OztRQURuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7U0FDdEM7OztPQUFBO0lBRUQsc0JBQ1csb0NBQVM7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQy9COzs7T0FBQTtJQU9ELHNCQUNXLHlDQUFjOzs7O1FBRHpCO1lBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQ3REOzs7T0FBQTtJQUVELHNCQUNXLHNDQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUN6Qzs7O09BQUE7MEJBUVUsc0NBQVc7Ozs7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDOzs7OztJQU10RCxzQkFDVyxtQ0FBUTs7OztRQURuQjtZQUVJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBRWpCLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDYjtZQUNELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFOztnQkFFdEQsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTs7Z0JBRTdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QjtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTs7Z0JBRXJCLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDYjs7WUFFRCxPQUFPLENBQUMsQ0FBQztTQUNaOzs7T0FBQTtJQUVELHNCQUVXLHFDQUFVOzs7O1FBRnJCO1lBR0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztTQUMxQzs7Ozs7a0JBRXFCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7OztPQUg3QztJQU1ELHNCQUNXLGtDQUFPOzs7OztRQURsQixVQUNtQixPQUFXO1lBQzFCLElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFFckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUI7U0FDSjs7O09BQUE7SUFFRCxzQkFDVyx3Q0FBYTs7Ozs7UUFEeEIsVUFDeUIsTUFBOEI7WUFDbkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUUxQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM1QjtTQUNKOzs7T0FBQTtJQUVELHNCQUNXLHdDQUFhOzs7OztRQUR4QixVQUN5QixNQUFpQztZQUN0RCxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzVCO1NBQ0o7OztPQUFBOzBCQUVVLDBDQUFlOzs7OztZQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOzs7OzswQkFJM0IsMkNBQWdCOzs7OztZQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7Ozs7OzBCQUdyQixnQ0FBSzs7Ozs7WUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDOzs7Ozs7a0JBR25ELEtBQXdCOztZQUNyQyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Z0JBRXhCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dCQUV2RSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDbEM7YUFDSjs7Ozs7SUFHTCxzQkFDVyxxQ0FBVTs7OztRQURyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7U0FDMUM7Ozs7O2tCQUVxQixLQUF3QjtZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Ozs7T0FIM0M7MEJBTVUsc0NBQVc7Ozs7Ozs7WUFFbEIsT0FBTyxVQUFDLEdBQUs7O2dCQUNULElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFZLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JFLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtvQkFDcEIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxDQUFDO2FBQ2IsQ0FBQzs7Ozs7MEJBTUssc0NBQVc7Ozs7Ozs7WUFFbEIsT0FBTyxVQUFDLEdBQUssSUFBSyxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFPLEdBQUcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUEsQ0FBQzs7Ozs7MEJBUTdELDhDQUFtQjs7Ozs7O1lBQzFCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QixPQUFPLFVBQUEsQ0FBQyxhQUFJLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBQyxDQUFDO2FBQ3JGO2lCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pDLE9BQU8sVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsT0FBTyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFBLENBQUM7YUFDMUY7Ozs7O0lBR0wsc0JBQ1csMENBQWU7Ozs7O1FBRDFCLFVBQzJCLFNBQTJEO1lBQ2xGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDckM7OztPQUFBOzBCQUtVLHVDQUFZOzs7OztZQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQVcsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7O0lBbUMzRiwwQ0FBa0I7Ozs7O1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7O1FBRTFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQy9GOztRQUdELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBQSxDQUFDLENBQUM7Ozs7O0lBRzdFLHNDQUFjOzs7O1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0lBSXRELHlDQUFpQjs7O0lBQTNCLGVBQXFDOzs7OztJQUczQix1Q0FBZTs7O0lBQXpCLGVBQW1DOzs7OztJQUV6QixtQ0FBVzs7OztJQUFyQixVQUFzQixLQUFZO1FBQWxDLGlCQUlDOztRQUZHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNsQyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNoRDs7Ozs7SUFFUyxrQ0FBVTs7OztJQUFwQixVQUFxQixPQUFzQjtRQUF0Qix3QkFBQSxFQUFBLGNBQXNCOzs7UUFHdkMsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUMvQjtLQUNKOzs7O0lBRVMsa0RBQTBCOzs7SUFBcEM7UUFBQSxpQkFnQkM7O1FBZEcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTs7WUFFNUIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBRXBELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1NBQ2hHLENBQUMsQ0FBQzs7UUFHSCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsS0FBSyxHQUFBLENBQUMsQ0FBQztTQUM1RDtLQUNKOzs7OztJQUVTLGdEQUF3Qjs7OztJQUFsQyxVQUFtQyxNQUF5QjtRQUN4RCxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRTVDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNEO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7Ozs7O0lBSVMsa0NBQVU7Ozs7O0lBQXBCLFVBQXFCLE9BQVcsRUFBRSxLQUFPO1FBQXpDLGlCQUdDOztRQURHLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssS0FBSyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUMzRDs7Ozs7SUFFTSxvQ0FBWTs7OztjQUFDLENBQWM7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDakIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRWhFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtTQUNKOzs7Ozs7SUFJRSwrQkFBTzs7OztJQURkLFVBQ2UsQ0FBYztRQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO1lBQ3RELENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztZQUd0QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRzNGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7O0lBR00saUNBQVM7OztJQURoQjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO1lBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7OztJQUdNLGtDQUFVOzs7O0lBRGpCLFVBQ2tCLENBQWE7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7OztJQUdNLGtDQUFVOzs7O0lBRGpCLFVBQ2tCLENBQWU7UUFDN0IsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7OztZQUc3QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QztLQUNKOzs7OztJQUdNLGlDQUFTOzs7O0lBRGhCLFVBQ2lCLENBQWU7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLElBQUksRUFBRTs7O1lBSTVELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXBDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN0QjtLQUNKOzs7OztJQUVNLDJDQUFtQjs7OztjQUFDLEtBQW1COzs7O0lBRXBDLDZCQUFLOzs7SUFBZjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFOzs7WUFHdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkM7S0FDSjs7Ozs7OztJQUdTLG9DQUFZOzs7OztJQUF0QixVQUF1QixVQUEyQixFQUFFLEtBQU87UUFDdkQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDOztRQUVuQixVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMvQyxTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTSxtQ0FBVzs7OztRQUNkLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUEsQ0FBQyxDQUFDOzs7d0JBL1k3RCxTQUFTLFNBQUMsZUFBZTttQ0FJekIsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7NkJBT3RELFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxnQkFBZ0I7MkJBRzVCLFdBQVcsU0FBQyxjQUFjOzRCQUsxQixXQUFXLFNBQUMsZUFBZTsrQkFLM0IsS0FBSztpQ0FLTCxXQUFXLFNBQUMsY0FBYzs4QkFLMUIsV0FBVyxTQUFDLGVBQWU7a0NBSzNCLFNBQVMsU0FBQyxlQUFlO2dDQUd6QixZQUFZLFNBQUMsZUFBZTs0QkFPNUIsS0FBSyxTQUFDLFVBQVU7MkJBR2hCLFdBQVcsU0FBQyxlQUFlOzZCQXNCM0IsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzBCQVNMLEtBQUs7Z0NBU0wsS0FBSztnQ0FTTCxLQUFLOzZCQW1DTCxLQUFLOzZCQW9CTCxLQUFLO2lDQVFMLEtBQUs7a0NBZUwsS0FBSzt1QkFZTCxLQUFLOzZCQUdMLEtBQUs7cUNBR0wsS0FBSzs0QkFHTCxNQUFNLFNBQUMsU0FBUzswQkEySGhCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBYWhDLFlBQVksU0FBQyxTQUFTOzZCQVN0QixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQVFuQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVNuQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzt3QkFsWXZDOzs7Ozs7Ozs7OztJQ21CNENBLHVDQUFhO0lBMENyRCw2QkFBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixjQUFnQyxFQUN6QjtRQUhuQixZQUtJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFNBVzNDO1FBYmtCLHNCQUFnQixHQUFoQixnQkFBZ0I7OztRQUsvQixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0UsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXpELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUUxQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7S0FDNUY7SUFuQ0Qsc0JBQ1cseUNBQVE7Ozs7UUFEbkI7WUFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7Ozs7O2tCQUVtQixRQUFtRDtZQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUM7YUFDTjs7OztPQVRKOzs7OztJQWtDTSw0Q0FBYzs7OztjQUFDLENBQWM7O1FBQ2hDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQzlCLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFO1lBQ2xELE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztTQUFBLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFJMUMscUNBQU87Ozs7SUFEZCxVQUNlLENBQWM7UUFDekIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7S0FDekI7O2dCQS9FSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDBLQUliO2lCQUNBOzs7O2dCQWhCYyxTQUFTO2dCQUFFLFVBQVU7Z0JBQVUsaUJBQWlCO2dCQUd4QyxtQkFBbUI7Ozs2QkFpQnJDLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxhQUFhO3dCQUt6QixLQUFLO3dCQUdMLEtBQUs7K0JBR0wsTUFBTSxTQUFDLFlBQVk7NEJBR25CLEtBQUs7MkJBS0wsS0FBSztrQ0FnQkwsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzBCQTZCdkQsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OEJBdkZyQztFQW1CNEMsYUFBYTs7Ozs7Ozs7OztJQ3dDZkEsa0NBQW1CO0lBNkV6RCx3QkFBWSxPQUFrQixFQUFFLG1CQUEwQztRQUExRSxZQUNJLGtCQUFNLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxTQU90QztRQUxHLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztLQUMxQjswQkE3RVUsMkNBQWU7Ozs7OztZQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBRXpCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7O1lBRUQsSUFBTSxhQUFhLEdBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO2lCQUFNOztnQkFFSCxPQUFPLGFBQWE7cUJBQ2YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUMsSUFBSSxTQUFTLEdBQUEsQ0FBQyxDQUFDO2FBQzFFOzs7OzswQkFHTSw0Q0FBZ0I7Ozs7O1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQzs7Ozs7SUFLaEMsc0JBQ1cscUNBQVM7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7Ozs7O2tCQUVvQixTQUFpQjtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzs7OztPQUgvQjtJQVFELHNCQUNXLHVDQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUNuRTs7Ozs7a0JBRXNCLFdBQWtCO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDOzs7O09BSG5DOzBCQVNVLDhDQUFrQjs7Ozs7WUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsRUFBRTs7Z0JBRS9CLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7OzswQkFHakQsOENBQWtCOzs7OztZQUN6QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUMxQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OzBCQUdyQywyQ0FBZTs7Ozs7WUFDdEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ3ZDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0lBZ0JuRCwwQ0FBaUI7OztJQUEzQjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O1lBRTFELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O1lBRS9ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWU7aUJBRXRDLEdBQUcsQ0FBQyxVQUFBLENBQUMsYUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFDLENBQUM7aUJBQ3pELE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxTQUFTLEdBQUEsQ0FBQyxDQUFDO1lBRWpDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2FBQ3BDO1NBQ0o7S0FDSjs7Ozs7SUFFUyxpREFBd0I7Ozs7SUFBbEMsVUFBbUMsTUFBeUI7UUFDeEQsaUJBQU0sd0JBQXdCLFlBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3ZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMxRjs7Ozs7SUFFTSxxQ0FBWTs7OztjQUFDLE1BQVE7O1FBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUd2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNyQzs7Ozs7O0lBR0UsbUNBQVU7Ozs7Y0FBQyxNQUFVOztRQUN4QixJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNO3FCQUV4QixHQUFHLENBQUMsVUFBQSxDQUFDLGFBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBQyxDQUFDO3FCQUN6RCxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksU0FBUyxHQUFBLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7O29CQUVyRCxJQUFJLENBQUMsYUFBYTt5QkFDYixhQUFhLENBQUMsTUFBTSxDQUFDO3lCQUNyQixJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssR0FBQSxDQUFDLENBQUM7aUJBQ3BEO3FCQUFNOztvQkFFSCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztpQkFDakM7YUFDSjtZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2FBQzdCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzdCOzs7Ozs7SUFHRSx1Q0FBYzs7OztjQUFDLE1BQVE7OztRQUUxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLE1BQU0sR0FBQSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDLENBQUM7O1FBR3BGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ3JDOzs7Ozs7SUFHRSw0Q0FBbUI7Ozs7Y0FBQyxLQUFtQjtRQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O1lBRTdGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlFOzs7Z0JBck9SLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsc2xEQTRDYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQywwREFJWixDQUFDO2lCQUNEOzs7O2dCQTFEZ0MsVUFBVTtnQkFFbEMsc0JBQXNCOzs7d0NBOEQxQixNQUFNOzRCQTBCTixLQUFLOzhCQVdMLEtBQUs7OEJBU0wsS0FBSzs2QkF1QkwsV0FBVyxTQUFDLGdCQUFnQjs7eUJBcklqQztFQTJEMEMsYUFBYTs7Ozs7SUE2TEFBLCtDQUE4QztJQUNqRyxxQ0FBWSxJQUF5QjtlQUNqQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLElBQUksRUFBRTt3QkFDRix5QkFBeUIsRUFBRSxrQkFBa0I7d0JBQzdDLFdBQVcsRUFBRSxhQUFhO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2lCQUN2RTs7OztnQkFFb0IsY0FBYzs7c0NBelBuQztFQXdQdUQsbUJBQW1COzs7Ozs7Ozs7O0lDbk5yQ0EsNkJBQW1CO0lBc0JwRCxtQkFBWSxPQUFrQixFQUFFLG1CQUEwQztRQUExRSxZQUNJLGtCQUFNLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxTQUd0QztRQURHLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDOztLQUNyRDtJQWJELHNCQUNXLGtDQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUNwRTs7Ozs7a0JBRXNCLFdBQWtCO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDOzs7O09BSG5DOzs7O0lBWVMscUNBQWlCOzs7SUFBM0I7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFOztZQUU3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7WUFFOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0tBQ0o7Ozs7SUFFUyxtQ0FBZTs7O0lBQXpCOztRQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0tBQ25DOzs7OztJQUVNLGdDQUFZOzs7O2NBQUMsTUFBUTs7UUFFeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztRQUcxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7OztJQUdWLDhCQUFVOzs7O2NBQUMsS0FBTzs7UUFDckIsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBRXZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFekUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDN0I7WUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7O29CQUVyRCxJQUFJLENBQUMsYUFBYTt5QkFDYixhQUFhLENBQUMsS0FBSyxDQUFDO3lCQUNwQixJQUFJLENBQUMsVUFBQSxDQUFDO3dCQUNILEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztxQkFDN0IsQ0FBQyxDQUFDO2lCQUNWO3FCQUFNOztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztpQkFDL0I7YUFDSjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3Qjs7Ozs7O0lBR0ssNENBQXdCOzs7O0lBQWxDLFVBQW1DLE1BQXlCO1FBQ3hELGlCQUFNLHdCQUF3QixZQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUd2QyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUMxRDs7OztJQUVPLHNDQUFrQjs7Ozs7UUFFdEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZFOzs7Z0JBMUlSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLG9oQ0EyQmI7aUJBQ0E7Ozs7Z0JBcENzRSxVQUFVO2dCQUV4RSxzQkFBc0I7Ozt5Q0F3QzFCLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt1Q0FHN0QsTUFBTTs4QkFLTixLQUFLOztvQkFsRFY7RUFxQ3FDLGFBQWE7Ozs7O0lBd0hBQSwwQ0FBdUM7SUFDckYsZ0NBQVksSUFBb0I7ZUFDNUIsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7O2dCQVhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNGLHdCQUF3QixFQUFFLGtCQUFrQjt3QkFDNUMsV0FBVyxFQUFFLGFBQWE7cUJBQzdCO29CQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ2xFOzs7O2dCQUVvQixTQUFTOztpQ0E5SjlCO0VBNkprRCxtQkFBbUI7Ozs7OztBQzdKckU7Ozs7Z0JBWUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLDJCQUEyQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCwyQkFBMkI7cUJBQzlCO2lCQUNKOzswQkFyQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFJQSxJQUFhLGlCQUFpQixHQUFHO0lBQzdCLE9BQU8sb0JBQUUsU0FBOEIsQ0FBQTtJQUN2QyxJQUFJLG9CQUFFLE1BQTJCLENBQUE7SUFDakMsU0FBUyxvQkFBRSxZQUFpQyxDQUFBO0lBQzVDLE9BQU8sb0JBQUUsU0FBOEIsQ0FBQTtJQUN2QyxVQUFVLG9CQUFFLGFBQWtDLENBQUE7SUFDOUMsUUFBUSxvQkFBRSxXQUFnQyxDQUFBO0NBQzdDLENBQUM7O0FBSUYsSUFBYSxnQkFBZ0IsR0FBRztJQUM1QixJQUFJLG9CQUFFLE1BQTBCLENBQUE7SUFDaEMsS0FBSyxvQkFBRSxPQUEyQixDQUFBO0lBQ2xDLEdBQUcsb0JBQUUsS0FBeUIsQ0FBQTtJQUM5QixNQUFNLG9CQUFFLFFBQTRCLENBQUE7Q0FDdkMsQ0FBQztBQUVGLElBQUE7SUFnREksd0JBQVksU0FBeUI7UUFBekIsMEJBQUEsRUFBQSxpQkFBeUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7S0FDL0M7MEJBbkRVLGlDQUFLOzs7OztZQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Ozs7OztrQkFHSSxLQUFZO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OzBCQUdqQixrQ0FBTTs7Ozs7WUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxFQUFFO2dCQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxDQUFDOzs7Ozs7a0JBR0ssTUFBYTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7SUEwQnRCLHdDQUFlOzs7O2NBQUMsU0FBaUI7O1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssR0FBQSxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JGOzs7OztJQUdFLDJDQUFrQjs7OztRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzt5QkFwRzlDO0lBc0dDLENBQUE7Ozs7OztBQ3RHRDtJQTZESSxvQkFBb0IsU0FBbUIsRUFBVSxRQUFtQjtRQUFwRSxpQkFVQztRQVZtQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7O1FBRXBDLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXZDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUEsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBeERELHNCQUNXLGtDQUFVOzs7O1FBRHJCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUNsQzs7Ozs7a0JBRXFCLFVBQTRCOztZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1lBRXpFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUVyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7O09BUDNFO0lBVUQsc0JBQ1csaUNBQVM7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ2pDOzs7OztrQkFFb0IsU0FBMEI7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztPQVAvQztJQVVELHNCQUVXLGlDQUFTOzs7O1FBRnBCO1lBR0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUNqQzs7Ozs7a0JBRW9CLFNBQWlCO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O09BSDNDO0lBTUQsc0JBQ1csdUNBQWU7Ozs7UUFEMUI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1NBQ3ZDOzs7T0FBQTtJQUVELHNCQUNXLG1DQUFXOzs7O1FBRHRCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUNuQzs7O09BQUE7Ozs7SUFjTyxxQ0FBZ0I7Ozs7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7Ozs7OztJQUczRCw2QkFBUTs7Ozs7Y0FBQyxTQUFnQixFQUFFLEtBQW9CO1FBQXBCLHNCQUFBLEVBQUEsWUFBb0I7UUFDbkQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdEU7Ozs7O0lBR0UseUJBQUk7Ozs7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHaEMsMEJBQUs7Ozs7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHakMsMkJBQU07Ozs7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7OztnQkE1RnpDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7Ozs7Z0JBTitDLFNBQVM7Z0JBQUUsVUFBVTs7OzZCQVVoRSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsZUFBZSxjQUMzQixXQUFXLFNBQUMsWUFBWTs2QkFHeEIsS0FBSzs0QkFhTCxLQUFLOzRCQWFMLFdBQVcsU0FBQyxlQUFlLGNBQzNCLEtBQUs7a0NBU0wsTUFBTTs4QkFLTixXQUFXLFNBQUMsaUJBQWlCOztxQkF4RGxDOzs7Ozs7O0FDQUE7SUFnREksMkJBQW9CLFNBQW1CLEVBQVUsUUFBbUI7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjswQkFyQ1Usc0NBQU87Ozs7O1lBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7a0JBR04sT0FBc0I7O1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBRXhCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxHQUFBLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxDQUFDLENBQUM7Ozs7O0lBTTFFLHNCQUNXLHdDQUFTOzs7O1FBRHBCO1lBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ2pDOzs7T0FBQTtJQUVELHNCQUNXLHVDQUFROzs7O1FBRG5CO1lBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUM3RDs7O09BQUE7Ozs7SUFXTywyQ0FBZTs7OztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRTdFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLGlCQUFpQixDQUFDLE9BQU87WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssaUJBQWlCLENBQUMsU0FBUyxFQUFFOztZQUV6RCxJQUFNLFNBQVMsR0FBRyxpQkFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssWUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sV0FBUSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4Rjs7Ozs7O0lBSUUsbUNBQU87Ozs7SUFEZCxVQUNlLEtBQWdCO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztLQUNKOztnQkF0RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLHFDQUlaLENBQUM7aUJBQ0Q7Ozs7Z0JBWGlFLFNBQVM7Z0JBQXJCLFVBQVU7OztzQ0EwQjNELEtBQUs7NEJBR0wsV0FBVyxTQUFDLGVBQWU7MkJBUTNCLFdBQVcsU0FBQyxjQUFjOzZCQVExQixXQUFXLFNBQUMsY0FBYzswQkF1QjFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzRCQXBFckM7Ozs7Ozs7QUNBQTtJQTBCSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCOzs7O0lBRU0sZ0RBQWtCOzs7O1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztTQUM3RjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7OztnQkFsQzNDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxxQ0FJWixDQUFDO2lCQUNEOzs7Ozs2QkFJSSxXQUFXLFNBQUMsZ0JBQWdCOzBCQUc1QixZQUFZLFNBQUMsVUFBVTswQkFHdkIsWUFBWSxTQUFDLGlCQUFpQjs7OEJBdkJuQzs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFVBQVU7d0JBQ1YsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ3BCO2lCQUNKOzsyQkFwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR0EsSUFBQTtJQU1JLGFBQVksTUFBbUIsRUFBRSxPQUFxQjtRQUF0RCxpQkFRQztRQVBHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7UUFHdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO2FBQ3JCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBQSxDQUFDLENBQUM7S0FDL0Q7MEJBR1UseUJBQVE7Ozs7O1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O2tCQUdaLE1BQWM7O1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OzswQkFJNUIsMkJBQVU7Ozs7O1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Ozs7O2NBL0J0QztJQWlDQyxDQUFBOzs7Ozs7QUNqQ0Q7SUF1RUk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUU3QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjtJQXBERCxzQkFFVyxrQ0FBUTs7OztRQUZuQjtZQUdJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7Ozs7a0JBRW1CLE1BQWM7OztZQUM5QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7Ozs7WUFJdEIsVUFBVSxDQUFDOztnQkFFUCxRQUFRLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7OztnQkFHOUIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QyxDQUFDLENBQUM7Ozs7T0FkTjtJQW1CRCxzQkFFVyxvQ0FBVTs7OztRQUZyQjtZQUdJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7Ozs7a0JBRXFCLFFBQWdCOztZQUVsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO2dCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzs7Z0JBRzVCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3pCO2FBQ0o7Ozs7T0FYSjs7Ozs7SUE0Qk0scUNBQWM7Ozs7Y0FBQyxNQUFjOztRQUVoQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTs7WUFFN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7O1lBR3hCLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtTQUNKOztRQUdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztJQUk5Qiw4QkFBTzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFFbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7S0FDSjs7Z0JBM0dKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs7Ozs7NkJBRUksV0FBVyxTQUFDLFlBQVk7cUJBR3hCLEtBQUssU0FBQyxjQUFjO2lDQU9wQixNQUFNOzZCQU9OLE1BQU0sU0FBQyxVQUFVOytCQUlqQixNQUFNLFNBQUMsWUFBWTsyQkFHbkIsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzs2QkFzQkwsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLOzBCQWlETCxZQUFZLFNBQUMsT0FBTzs7dUJBdkd6Qjs7Ozs7OztBQ0FBO0lBZUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUMxQjs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM5Qjs7Ozs7NkJBRUksV0FBVyxTQUFDLFdBQVc7cUJBR3ZCLEtBQUssU0FBQyxlQUFlOzJCQUdyQixXQUFXLFNBQUMsY0FBYzs7d0JBWi9COzs7Ozs7O0FDQUE7SUFvQ0k7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzBCQWpCVSxnQ0FBUzs7Ozs7WUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7Ozs7a0JBS04sR0FBTztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7SUFXakIsc0NBQWtCOzs7Ozs7UUFFckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMseUJBQXlCLEVBQUUsR0FBQSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMseUJBQXlCLEVBQUUsR0FBQSxDQUFDLENBQUM7O1FBRzVFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7SUFJWiw2Q0FBeUI7Ozs7OztRQUc3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsRUFBRTs7WUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O1lBR3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjs7Ozs7SUFJRyw0QkFBUTs7Ozs7O1FBRVosSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFdBQVc7YUFFWCxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLEdBQUEsQ0FBQyxHQUFBLENBQUM7YUFDbkQsT0FBTyxDQUFDLFVBQUEsRUFBRTs7WUFDUCxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7WUFFOUQsSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVYsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2FBQzVFOztZQUdELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7WUFHakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7OztZQUduRixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7O1FBR1AsSUFBSSxDQUFDLFdBQVc7YUFDWCxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDWCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNqQjtTQUNKLENBQUMsQ0FBQzs7UUFHUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUEsQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOzs7WUFFakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSSxDQUFDLFNBQVMsR0FBQSxDQUFDLEVBQUU7Ozs7WUFHbkQsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztZQUV4QixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDL0M7Ozs7OztJQUlHLHlDQUFxQjs7OztjQUFDLEdBQU87O1FBRWpDLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRTs7WUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssR0FBRyxHQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBQSxDQUFDLENBQUM7O1lBR2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ3hCOztRQUdELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFOztZQUV6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7Ozs7O0lBSUUsb0NBQWdCOzs7O1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBSTNCLHNDQUFrQjs7OztjQUFDLEdBQU87O1FBQzdCLElBQUksYUFBYSxDQUFpQjs7UUFHbEMsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUUvQixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDs7UUFHRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxHQUFHLEdBQUEsQ0FBQyxFQUFFOzs7Z0JBRWpDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QztpQkFBTTs7O2dCQUVILGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RDtTQUNKOztRQUdELElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRTs7WUFFMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQzs7O2dCQXBLdEMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7Ozs7OEJBRUksZUFBZSxTQUFDLFlBQVk7K0JBRzVCLGVBQWUsU0FBQyxhQUFhOztvQkFibEM7Ozs7Ozs7QUNBQTs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLGFBQWE7cUJBQ2hCO2lCQUNKOzt3QkFwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O2dCQXFDQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUVMLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUduQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUduQixxQkFBcUI7d0JBR3JCLGdCQUFnQjtxQkFDbkI7aUJBQ0o7O29CQWxFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=