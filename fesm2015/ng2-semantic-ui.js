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
const enGB = {
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
    const extend = $extend__default || $extend;
    return extend(true, target, source);
}
/**
 * @param {?} language
 * @return {?}
 */
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
class SuiLocalizationService {
    constructor() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    /**
     * @return {?}
     */
    get language() {
        return this._language;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    setLanguage(language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    }
    /**
     * @param {?=} language
     * @return {?}
     */
    get(language = this.language) {
        /** @type {?} */
        const values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error(`Locale ${language} is not loaded`);
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    }
    /**
     * @template T
     * @param {?} values
     * @param {?} overrides
     * @return {?}
     */
    override(values, overrides) {
        return deepExtend(deepClone(values), overrides);
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    load(language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    patch(language, values) {
        deepExtend(this._values[lang(language)], values);
    }
    /**
     * @param {?} value
     * @param {?} variables
     * @return {?}
     */
    interpolate(value, variables) {
        return variables.reduce((s, [k, v]) => s.replace(new RegExp(`#{${k}}`, "g"), v), value);
    }
}
SuiLocalizationService.decorators = [
    { type: Injectable },
];
SuiLocalizationService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiLocalizationModule {
}
SuiLocalizationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [SuiLocalizationService]
            },] },
];

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
const TransitionDirection = {
    In: 0,
    Out: 1,
    Either: 2,
    Static: 3,
};
TransitionDirection[TransitionDirection.In] = 'In';
TransitionDirection[TransitionDirection.Out] = 'Out';
TransitionDirection[TransitionDirection.Either] = 'Either';
TransitionDirection[TransitionDirection.Static] = 'Static';
class Transition {
    // Converts TransitionDirection to class name.
    /**
     * @return {?}
     */
    get directionClass() {
        switch (this.direction) {
            case TransitionDirection.In: return "in";
            case TransitionDirection.Out: return "out";
        }
        return "";
    }
    /**
     * @param {?} name
     * @param {?=} duration
     * @param {?=} direction
     * @param {?=} onComplete
     */
    constructor(name, duration = 250, direction = TransitionDirection.Either, onComplete = () => { }) {
        this.type = name;
        // We set a minimum duration of 1ms, to give the appearance of an immediate transition
        // whilst allowing positioning calculations to happen without a visible flicker.
        this.duration = Math.max(duration, 1);
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TransitionController {
    // Used to delay animations until we have an element to animate.
    /**
     * @return {?}
     */
    get _isReady() {
        return this._renderer != undefined && this._element != undefined && this._changeDetector != undefined;
    }
    /**
     * @return {?}
     */
    get isAnimating() {
        return this._isAnimating;
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this._isVisible;
    }
    /**
     * @return {?}
     */
    get isHidden() {
        return this._isHidden;
    }
    // Gets the first transition in the queue.
    /**
     * @return {?}
     */
    get _queueFirst() {
        return this._queue[0];
    }
    // Gets the last transition in the queue.
    /**
     * @return {?}
     */
    get _queueLast() {
        return this._queue[this._queue.length - 1];
    }
    /**
     * @param {?=} isInitiallyVisible
     * @param {?=} display
     */
    constructor(isInitiallyVisible = true, display = "block") {
        // isInitiallyVisible sets whether the element starts out visible.
        this._isVisible = isInitiallyVisible;
        this._isHidden = !this._isVisible;
        this._display = display;
        this._queue = [];
        this._isAnimating = false;
    }
    // Sets the renderer to be used for animating.
    /**
     * @param {?} renderer
     * @return {?}
     */
    registerRenderer(renderer) {
        this._renderer = renderer;
        this.performTransition();
    }
    // Sets the element to perform the animations on.
    /**
     * @param {?} element
     * @return {?}
     */
    registerElement(element) {
        this._element = element;
        this.performTransition();
    }
    // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
    /**
     * @param {?} changeDetector
     * @return {?}
     */
    registerChangeDetector(changeDetector) {
        this._changeDetector = changeDetector;
        this.performTransition();
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    animate(transition) {
        // Test if transition is one of the list that doesn't change the visible state.
        // Should these eventually become classes?
        /** @type {?} */
        const isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) !== -1;
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
    }
    /**
     * @return {?}
     */
    performTransition() {
        if (!this._isReady || this._isAnimating || !this._queueFirst) {
            // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
            return;
        }
        this._isAnimating = true;
        /** @type {?} */
        const transition = this._queueFirst;
        // Set the Semantic UI classes for transitioning.
        transition.classes.forEach(c => this._renderer.addClass(this._element, c));
        this._renderer.addClass(this._element, `animating`);
        this._renderer.addClass(this._element, transition.directionClass);
        // Set the Semantic UI styles for transitioning.
        this._renderer.setStyle(this._element, `animationDuration`, `${transition.duration}ms`);
        this._renderer.setStyle(this._element, `display`, this._display);
        if (transition.direction === TransitionDirection.In) {
            // Unset hidden if we are transitioning in.
            this._isHidden = false;
        }
        // Wait the length of the animation before calling the complete callback.
        this._animationTimeout = window.setTimeout(() => this.finishTransition(transition), transition.duration);
    }
    // Called when a transition has completed.
    /**
     * @param {?} transition
     * @return {?}
     */
    finishTransition(transition) {
        // Unset the Semantic UI classes & styles for transitioning.
        transition.classes.forEach(c => this._renderer.removeClass(this._element, c));
        this._renderer.removeClass(this._element, `animating`);
        this._renderer.removeClass(this._element, transition.directionClass);
        this._renderer.removeStyle(this._element, `animationDuration`);
        this._renderer.removeStyle(this._element, `display`);
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
    }
    // Stops the current transition, leaves the rest of the queue intact.
    /**
     * @param {?=} transition
     * @return {?}
     */
    stop(transition = this._queueFirst) {
        if (!transition || !this._isAnimating) {
            return;
        }
        clearTimeout(this._animationTimeout);
        this.finishTransition(transition);
    }
    // Stops the current transition, and empties the queue.
    /**
     * @return {?}
     */
    stopAll() {
        this.clearQueue();
        this.stop();
    }
    // Empties the transition queue but carries on with the current transition.
    /**
     * @return {?}
     */
    clearQueue() {
        if (this.isAnimating) {
            this._queue = [this._queueFirst];
            return;
        }
        this._queue = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTransition {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetector
     */
    constructor(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    /**
     * @param {?} tC
     * @return {?}
     */
    set suiTransition(tC) {
        // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
        this.setTransitionController(tC);
    }
    /**
     * @return {?}
     */
    get isVisible() {
        if (this._controller) {
            return this._controller.isVisible;
        }
        return false;
    }
    /**
     * @return {?}
     */
    get isHidden() {
        if (this._controller) {
            return this._controller.isHidden;
        }
        return false;
    }
    // Initialises the controller with the injected renderer and elementRef.
    /**
     * @param {?} transitionController
     * @return {?}
     */
    setTransitionController(transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    }
}
SuiTransition.decorators = [
    { type: Directive, args: [{
                selector: "[suiTransition]",
                exportAs: "transition"
            },] },
];
SuiTransition.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SuiTransition.propDecorators = {
    suiTransition: [{ type: Input }],
    transitionClass: [{ type: HostBinding, args: ["class.transition",] }],
    isVisible: [{ type: HostBinding, args: ["class.visible",] }],
    isHidden: [{ type: HostBinding, args: ["class.hidden",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTransitionModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiMessage {
    constructor() {
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
    dismiss() {
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
            this.isDismissed = true;
            this.onDismiss.emit(this);
        }));
    }
}
SuiMessage.decorators = [
    { type: Component, args: [{
                selector: "sui-message",
                template: `
<div class="ui message {{ class }}" *ngIf="!isDismissed" [suiTransition]="transitionController">
    <i class="close icon" *ngIf="isDismissable" (click)="dismiss()"></i>
    <ng-content></ng-content>
</div>
`,
                styles: [`
/* Fix for CSS Bug */
.ui.icon.visible.message {
    display: flex !important;
}
`]
            },] },
];
SuiMessage.ctorParameters = () => [];
SuiMessage.propDecorators = {
    isDismissable: [{ type: Input }],
    onDismiss: [{ type: Output, args: ["dismiss",] }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    class: [{ type: Input, args: ["class",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiMessageModule {
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
class SuiPagination {
    constructor() {
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
    /**
     * @return {?}
     */
    get maxSize() {
        return this._maxSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxSize(value) {
        this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
    }
    /**
     * @return {?}
     */
    get collectionSize() {
        return this._collectionSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collectionSize(value) {
        this._collectionSize = Math.max(value, 0);
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
    }
    /**
     * @return {?}
     */
    get hasNavigationLinks() {
        /** @type {?} */
        const maxSize = this._maxSize || this.pageCount;
        return this._hasNavigationLinks || maxSize < this.pageCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasNavigationLinks(value) {
        this._hasNavigationLinks = value;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.setPage(value);
    }
    /**
     * @return {?}
     */
    get pages() {
        return this._pages;
    }
    // Public methods
    /**
     * @return {?}
     */
    hasPrevious() {
        return this.page > 1;
    }
    /**
     * @return {?}
     */
    hasNext() {
        return this.page < this.pageCount;
    }
    /**
     * @param {?} newPage
     * @return {?}
     */
    setPage(newPage) {
        /** @type {?} */
        const value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    }
    // Lifecycle hooks
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updatePages();
    }
    // Private methods
    /**
     * @return {?}
     */
    updatePages() {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        const [start, end] = this.applyPagination();
        this._pages = Array(end - start)
            .fill(start + 1)
            .map((s, i) => s + i);
    }
    /**
     * @return {?}
     */
    applyPagination() {
        /** @type {?} */
        const maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        /** @type {?} */
        const page = Math.ceil(this.page / maxSize) - 1;
        /** @type {?} */
        let start = 0;
        /** @type {?} */
        let end = this.pageCount;
        if (this.canRotate) {
            /** @type {?} */
            const leftOffset = Math.floor(maxSize / 2);
            /** @type {?} */
            const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
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
    }
}
SuiPagination.decorators = [
    { type: Component, args: [{
                selector: "sui-pagination",
                template: `
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(1)" [class.disabled]="page===1">
    <span><i class="angle double left icon"></i></span>
</a>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page-1)" [class.disabled]="!hasPrevious()">
    <span><i class="angle left icon"></i></span>
</a>
<ng-container *ngIf="hasEllipses">
    <a class="item" (click)="setPage(1)" *ngIf="pages[0] !== 1">
        <span>1</span>
    </a>
    <a class="disabled item" *ngIf="pages[0] > 2">...</a>
</ng-container>
<a *ngFor="let p of pages" class="item" [class.active]="p===page" (click)="setPage(p)">
    {{ p }}
</a>
<ng-container *ngIf="hasEllipses">
    <a class="disabled item" *ngIf="pages[pages.length - 1] < pageCount - 1">...</a>
    <a class="item" (click)="setPage(pageCount)" *ngIf="pages[pages.length - 1] !== pageCount">
        <span>{{ pageCount }}</span>
    </a>
</ng-container>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page+1)" [class.disabled]="!hasNext()">
    <span><i class="angle right icon"></i></span>
</a>
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(pageCount)" [class.disabled]="page===pageCount">
    <span><i class="angle double right icon"></i></span>
</a>
`,
                styles: [`
:host .item {
    transition: none;
}
`]
            },] },
];
SuiPagination.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiPaginationModule {
}
SuiPaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [SuiPagination],
                declarations: [SuiPagination],
                providers: []
            },] },
];

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
class SuiAccordionPanel {
    /**
     * @param {?} _changeDetector
     */
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.isOpenChange = new EventEmitter(false);
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set service(service) {
        this._service = service;
        this._changeDetector.detectChanges();
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        // Convert to boolean (fixes false != undefined)
        /** @type {?} */
        const isOpen = !!value;
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
    }
    /**
     * @return {?}
     */
    get transition() {
        if (this._service) {
            return this._service.transition;
        }
        return "fade";
    }
    /**
     * @return {?}
     */
    get transitionDuration() {
        if (this._service) {
            // Return the service defined transition duration.
            return this._service.transitionDuration;
        }
        // Revert to instantaneous if the service is not yet loaded.
        return 0;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
SuiAccordionPanel.decorators = [
    { type: Component, args: [{
                selector: "sui-accordion-panel",
                exportAs: "suiAccordionPanel",
                template: `
<!-- Title -->
<div class="title" [class.active]="isOpen" (click)="toggle()" >
    <ng-content select="[title]"></ng-content>
</div>
<!-- Content -->
<div [suiCollapse]="!isOpen" [collapseDuration]="transitionDuration">
    <div class="content" [class.active]="isOpen" [suiTransition]="transitionController">
        <ng-content select="[content]"></ng-content>
    </div>
</div>
`,
                styles: [`
/* Manual style as Semantic UI relies on > selector */
.content {
    padding: .5em 0 1em;
}

/* Another > selector fix */
:host:first-child .title {
    border-top: none;
}
`]
            },] },
];
SuiAccordionPanel.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SuiAccordionPanel.propDecorators = {
    isDisabled: [{ type: Input }],
    isOpen: [{ type: Input }],
    isOpenChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiAccordionService {
    constructor() {
        this.closeOthers = true;
        this.transition = "fade";
        this.transitionDuration = 350;
        this.panels = [];
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    addPanel(panel) {
        panel.service = this;
        this.panels.push(panel);
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    closeOtherPanels(panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(p => {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiAccordion {
    constructor() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get closeOthers() {
        return this._service.closeOthers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closeOthers(value) {
        this._service.closeOthers = value;
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    set transition(transition) {
        this._service.transition = transition;
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    set transitionDuration(duration) {
        this._service.transitionDuration = duration;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(() => this.updatePanels());
    }
    /**
     * @return {?}
     */
    updatePanels() {
        this._panels.forEach(p => this._service.addPanel(p));
    }
}
SuiAccordion.decorators = [
    { type: Component, args: [{
                selector: "sui-accordion",
                template: `
<ng-content></ng-content>
`,
                styles: [`
/* Fix for general styling issues */
:host {
    display: block;
}

/* Fix for styled border issue */
:host.styled sui-accordion-panel:first-child .title {
    border-top: none
}
`]
            },] },
];
SuiAccordion.ctorParameters = () => [];
SuiAccordion.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.accordion",] }],
    closeOthers: [{ type: Input }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    _panels: [{ type: ContentChildren, args: [SuiAccordionPanel,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiCollapse {
    /**
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    // Set when the collapse is open, and not animating.
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._isExpanded;
    }
    // Set when the collapse is closed, and not animating.
    /**
     * @return {?}
     */
    get isCollapsed() {
        return !this.isExpanded && !this.isCollapsing;
    }
    // Set when the collapse is animating.
    /**
     * @return {?}
     */
    get isCollapsing() {
        return this._isCollapsing;
    }
    /**
     * @return {?}
     */
    get suiCollapse() {
        return this._isExpanded;
    }
    // Sets the state of the collapse, `true` is collapsed.
    /**
     * @param {?} value
     * @return {?}
     */
    set suiCollapse(value) {
        if (value) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    get _animationDuration() {
        return this._pristine ? 0 : this.collapseDuration;
    }
    /**
     * @return {?}
     */
    hide() {
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, false, () => {
            this._isCollapsing = false;
        });
    }
    /**
     * @return {?}
     */
    show() {
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, () => {
            // Remove the overflow override to enable user styling once again.
            this._renderer.removeStyle(this._element.nativeElement, "overflow");
            this._isCollapsing = false;
            this._isExpanded = true;
        });
    }
    /**
     * @param {?} startHeight
     * @param {?} endHeight
     * @param {?=} removeOnComplete
     * @param {?=} callback
     * @return {?}
     */
    animate(startHeight, endHeight, removeOnComplete = false, callback = () => { }) {
        /** @type {?} */
        const heightFrames = [
            {
                offset: 0,
                height: `${startHeight}px`
            },
            {
                offset: 1,
                height: `${endHeight}px`
            }
        ];
        if (removeOnComplete) {
            heightFrames.push({
                offset: 1,
                height: `auto`
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
        setTimeout(() => callback(), this.collapseDuration);
    }
}
SuiCollapse.decorators = [
    { type: Directive, args: [{
                selector: "[suiCollapse]"
            },] },
];
SuiCollapse.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SuiCollapse.propDecorators = {
    isExpanded: [{ type: HostBinding, args: ["class.expanded",] }],
    isCollapsed: [{ type: HostBinding, args: ["class.collapsed",] }],
    isCollapsing: [{ type: HostBinding, args: ["class.collapsing",] }],
    suiCollapse: [{ type: Input }],
    collapseDuration: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiCollapseModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiAccordionModule {
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
class CustomValidator {
    /**
     * @param {?} _host
     */
    constructor(_host) {
        this._host = _host;
        this.onValidatorChange = () => { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this._host.validate(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onValidatorChange = fn;
    }
}
/**
 * @param {?} type
 * @return {?}
 */
function customValidatorFactory(type) {
    return {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => type),
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
class CustomValueAccessor {
    /**
     * @param {?} _host
     */
    constructor(_host) {
        this._host = _host;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._host.writeValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
/**
 * @param {?} type
 * @return {?}
 */
function customValueAccessorFactory(type) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => type),
        multi: true
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCode = {
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
const Util = {
    Array: {
        /**
         * @param {?} n
         * @param {?=} offset
         * @return {?}
         */
        range(n, offset = 0) {
            return Array(n).fill(0).map((z, i) => i + offset);
        },
        /**
         * @template T
         * @param {?} items
         * @param {?} groupLength
         * @return {?}
         */
        group(items, groupLength) {
            /** @type {?} */
            const mutable = items.slice(0);
            /** @type {?} */
            const groups = [];
            while (mutable.length > 0) {
                groups.push(mutable.splice(0, groupLength));
            }
            return groups;
        },
        /**
         * @template T
         * @param {?} items
         * @param {?} field
         * @return {?}
         */
        groupBy(items, field) {
            return items.reduce((groups, i) => {
                /** @type {?} */
                const fieldValue = i[field].toString();
                groups[fieldValue] = groups[fieldValue] || [];
                groups[fieldValue].push(i);
                return groups;
            }, Object());
        },
        /**
         * @template T
         * @param {?} items
         * @return {?}
         */
        flatten(items) {
            return items.reduce((is, i) => is.concat(i), []);
        }
    },
    String: {
        /**
         * @param {?} str
         * @param {?} length
         * @param {?} padding
         * @return {?}
         */
        padLeft(str, length, padding) {
            /** @type {?} */
            let s = str;
            while (s.length < length) {
                s = padding + s;
            }
            return s;
        }
    },
    DOM: {
        /**
         * @param {?} attributeValue
         * @return {?}
         */
        parseBooleanAttribute(attributeValue) {
            /** @type {?} */
            let value = attributeValue;
            if (typeof attributeValue === "string") {
                value = true;
            }
            return value;
        }
    },
    Object: {
        /**
         * @template T, U
         * @param {?} object
         * @param {?=} path
         * @return {?}
         */
        readValue(object, path) {
            if (!path) {
                return (/** @type {?} */ ((/** @type {?} */ (object))));
            }
            /** @type {?} */
            let recursed = (/** @type {?} */ ((/** @type {?} */ (object))));
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = ((/** @type {?} */ ((/** @type {?} */ (recursed)))))[p[i]];
            }
            return (/** @type {?} */ ((/** @type {?} */ (recursed))));
        }
    },
    Math: {
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        round(r, n) {
            return Math.round(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        roundUp(r, n) {
            return Math.ceil(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        roundDown(r, n) {
            return Math.floor(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        mod(r, n) {
            /** @type {?} */
            const rem = r % n;
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
const DatePrecision = {
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
const DateUtil = {
    /**
     * @param {?} precision
     * @param {?} date
     * @param {?=} resetAll
     * @return {?}
     */
    startOf(precision, date, resetAll = false) {
        switch (precision) {
            case DatePrecision.Decade:
                /** @type {?} */
                const start = Math.floor(date.getFullYear() / 10) * 10 + 1;
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
    /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    endOf(precision, date) {
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
    /**
     * @param {?} precision
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    equal(precision, a, b) {
        /** @type {?} */
        let equal = true;
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
    /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    next(precision, date) {
        return DateUtil.add(precision, date, 1);
    },
    /**
     * @param {?} precision
     * @param {?} date
     * @param {?} i
     * @return {?}
     */
    add(precision, date, i) {
        /** @type {?} */
        const year = date.getFullYear();
        /** @type {?} */
        const month = date.getMonth();
        /** @type {?} */
        const day = date.getDate();
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
    /**
     * @param {?} precision
     * @param {?} date
     * @return {?}
     */
    previous(precision, date) {
        /** @type {?} */
        const year = date.getFullYear();
        /** @type {?} */
        const month = date.getMonth();
        /** @type {?} */
        const day = date.getDate();
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
                const hours = date.getHours();
                date.setHours(hours - 1);
                if (date.getHours() !== Util.Math.mod(hours - 1, 24)) {
                    date.setHours(hours - 2);
                }
                break;
            case DatePrecision.Minute:
                /** @type {?} */
                const minutes = date.getMinutes();
                date.setMinutes(minutes - 1);
        }
        return date;
    },
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
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
class SuiComponentFactory {
    /**
     * @param {?} _applicationRef
     * @param {?} _componentFactoryResolver
     * @param {?} _injector
     */
    constructor(_applicationRef, _componentFactoryResolver, _injector) {
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
    createComponent(type, providers = []) {
        // Resolve a factory for creating components of type `type`.
        /** @type {?} */
        const factory = this._componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (type)));
        // Resolve and create an injector with the specified providers.
        /** @type {?} */
        const injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
        // Create a component using the previously resolved factory & injector.
        /** @type {?} */
        const componentRef = factory.create(injector);
        return componentRef;
    }
    /**
     * @template T, U
     * @param {?} viewContainer
     * @param {?} template
     * @param {?} context
     * @return {?}
     */
    createView(viewContainer, template, context) {
        viewContainer.createEmbeddedView(template, context);
    }
    // Inserts the component into the specified view container.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    attachToView(componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    }
    // Inserts the component in the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    attachToApplication(componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    }
    // Detaches the component from the root application node.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    detachFromApplication(componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    }
    // Moves the component to the specified DOM element.
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    moveToElement(componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    }
    // Moves the component to the document body.
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    moveToDocumentBody(componentRef) {
        this.moveToElement(componentRef, (/** @type {?} */ (document.querySelector("body"))));
    }
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    detachFromDocument(componentRef) {
        /** @type {?} */
        const element = (/** @type {?} */ (componentRef.location.nativeElement));
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}
SuiComponentFactory.decorators = [
    { type: Injectable },
];
SuiComponentFactory.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const PositioningPlacement = {
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
    const [direction, alignment] = placement.split(" ");
    // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
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
    return (/** @type {?} */ (chosenPlacement.join(" ")));
}
class PositioningService {
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
        if (this._popper) {
            this._popper.options.placement = placementToPopper(placement);
        }
    }
    /**
     * @param {?} hasArrow
     * @return {?}
     */
    set hasArrow(hasArrow) {
        this._hasArrow = hasArrow;
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
        this._arrowSelector = arrowSelector;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
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
                element: this._arrowSelector
            },
            offset: {
                fn: (data) => {
                    if (this._hasArrow) {
                        /** @type {?} */
                        const offsets = this.calculateOffsets();
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
            modifiers,
            onCreate: initial => this._popperState = initial,
            onUpdate: update => this._popperState = update
        })));
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
    /**
     * @return {?}
     */
    calculateOffsets() {
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        // To support correct positioning for all popup sizes we should calculate offset using em
        /** @type {?} */
        const fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
        // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
        /** @type {?} */
        const arrowCenter = (0.71428571 / 2 + 1) * fontSize;
        if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
            /** @type {?} */
            const anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
            if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                left = anchorCenterWidth - arrowCenter;
            }
            if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                left = arrowCenter - anchorCenterWidth;
            }
        }
        if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
            /** @type {?} */
            const anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
            if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                top = anchorCenterHeight - arrowCenter;
            }
            if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                top = arrowCenter - anchorCenterHeight;
            }
        }
        return { top, left, width: 0, height: 0 };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiUtilityModule {
}
SuiUtilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    SuiComponentFactory
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiCheckbox {
    constructor() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    /**
     * @return {?}
     */
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown(e) {
        e.preventDefault();
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        this.onTouched.emit();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.isChecked = value;
    }
    /**
     * @return {?}
     */
    focusCheckbox() {
        this._checkboxElement.nativeElement.focus();
    }
}
SuiCheckbox.decorators = [
    { type: Component, args: [{
                selector: "sui-checkbox",
                exportAs: "suiCheckbox",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [(ngModel)]="isChecked"
       #checkbox>
<label>
    <ng-content></ng-content>
</label>
`
            },] },
];
SuiCheckbox.ctorParameters = () => [];
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
class SuiCheckboxValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
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
SuiCheckboxValueAccessor.ctorParameters = () => [
    { type: SuiCheckbox }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiRadio {
    constructor() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    /**
     * @return {?}
     */
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown(e) {
        e.preventDefault();
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        this.onTouched.emit();
    }
    /**
     * @return {?}
     */
    update() {
        this.isChecked = this.currentValue === this.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.currentValue = value;
        this.update();
    }
    /**
     * @return {?}
     */
    focusRadio() {
        this._radioElement.nativeElement.focus();
    }
}
SuiRadio.decorators = [
    { type: Component, args: [{
                selector: "sui-radio-button",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [ngModel]="isChecked"
       (ngModel)="currentValue = value"
       #radio>
<label>
    <ng-content></ng-content>
</label>
`
            },] },
];
SuiRadio.ctorParameters = () => [];
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
/**
 * @template T
 */
class SuiRadioValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
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
SuiRadioValueAccessor.ctorParameters = () => [
    { type: SuiRadio }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiRadioManager {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateNesting();
        this._subManagers.changes.subscribe(() => this.updateNesting());
        this.updateRadios();
        this._renderedRadios.changes.subscribe(() => this.updateRadios());
    }
    /**
     * @return {?}
     */
    updateNesting() {
        this._subManagers
            .filter(m => m !== this)
            .forEach(m => m.isNested = true);
    }
    /**
     * @return {?}
     */
    updateRadios() {
        this._radioSubs.forEach(s => s.unsubscribe());
        this._radioSubs = [];
        /** @type {?} */
        const groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(k => groups[k])
            .forEach(g => g
            .forEach(r => this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe((v) => {
            if (!this.isNested) {
                g.forEach(radio => radio.writeValue(v));
            }
        }))));
    }
}
SuiRadioManager.decorators = [
    { type: Directive, args: [{
                selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
            },] },
];
SuiRadioManager.ctorParameters = () => [
    { type: ElementRef }
];
SuiRadioManager.propDecorators = {
    _subManagers: [{ type: ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
    _renderedRadios: [{ type: ContentChildren, args: [SuiRadio, { descendants: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiCheckboxModule {
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
const CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
CalendarMode[CalendarMode.DateOnly] = 'DateOnly';
CalendarMode[CalendarMode.TimeOnly] = 'TimeOnly';
CalendarMode[CalendarMode.Both] = 'Both';
class CalendarService {
    /**
     * @param {?} config
     * @param {?} localeValues
     */
    constructor(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = () => { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
        config.updateBounds(this._selectedDate || this.currentDate);
    }
    /**
     * @return {?}
     */
    get inFinalView() {
        return this.currentView === this.config.mappings.finalView;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this._selectedDate;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set selectedDate(date) {
        if (date) {
            this._selectedDate = DateUtil.clone(date);
            this.currentDate = DateUtil.clone(date);
        }
        else {
            this._selectedDate = undefined;
        }
        this.config.updateBounds(this._selectedDate || this.currentDate);
        this.onManualUpdate();
    }
    /**
     * @return {?}
     */
    get minDate() {
        if (this._minDate && this.config.dateMinBound) {
            return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
        }
        return this._minDate || this.config.dateMinBound;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    set minDate(min) {
        this._minDate = min;
    }
    /**
     * @return {?}
     */
    get maxDate() {
        if (this._maxDate && this.config.dateMaxBound) {
            return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
        }
        return this._maxDate || this.config.dateMaxBound;
    }
    /**
     * @param {?} max
     * @return {?}
     */
    set maxDate(max) {
        this._maxDate = max;
    }
    /**
     * @return {?}
     */
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    set firstDayOfWeek(firstDayOfWeek) {
        if (firstDayOfWeek != undefined) {
            this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            /** @type {?} */
            let current = this.currentDate.getTime();
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
    }
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    changeDate(date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    }
    /**
     * @param {?} fromView
     * @return {?}
     */
    zoomOut(fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    }
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    updateView(mappings, fromView) {
        /** @type {?} */
        const mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarItem {
    /**
     * @param {?} date
     */
    constructor(date) {
        this.date = date;
    }
}
class SuiCalendarItem {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isSelectable() {
        return this.item.isSelectable;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.item.isActive;
    }
    /**
     * @return {?}
     */
    get isToday() {
        return this.item.isToday;
    }
    /**
     * @return {?}
     */
    onMouseMove() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    }
}
SuiCalendarItem.decorators = [
    { type: Directive, args: [{
                selector: "[calendarItem]"
            },] },
];
SuiCalendarItem.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SuiCalendarItem.propDecorators = {
    item: [{ type: Input, args: ["calendarItem",] }],
    isSelectable: [{ type: HostBinding, args: ["class.disabled",] }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    isToday: [{ type: HostBinding, args: ["class.today",] }],
    hasFocus: [{ type: HostBinding, args: ["class.focus",] }],
    onMouseMove: [{ type: HostListener, args: ["mousemove",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const CalendarViewType = {
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
class CalendarView {
    /**
     * @param {?} renderer
     * @param {?} viewType
     * @param {?} ranges
     */
    constructor(renderer, viewType, ranges) {
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", (e) => this.onDocumentKeyDown(e));
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set service(service) {
        this._service = service;
        this.ranges.loadService(service);
        this.service.onManualUpdate = () => {
            this.ranges.refresh();
            delete this._highlightedItem;
            this.autoHighlight();
        };
    }
    /**
     * @return {?}
     */
    get service() {
        return this._service;
    }
    /**
     * @return {?}
     */
    get currentDate() {
        return this.service.currentDate;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this.service.selectedDate;
    }
    // Template Methods
    /**
     * @param {?} item
     * @return {?}
     */
    setDate(item) {
        this.service.changeDate(item.date, this._type);
    }
    /**
     * @return {?}
     */
    zoomOut() {
        this.service.zoomOut(this._type);
    }
    // Keyboard Control
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderedItems.changes.subscribe(() => this.onRenderedItemsChanged());
        this.onRenderedItemsChanged();
    }
    /**
     * @return {?}
     */
    onRenderedItemsChanged() {
        this._renderedItems.forEach(i => i.onFocussed.subscribe((hasFocus) => {
            if (hasFocus) {
                this.highlightItem(i.item);
            }
        }));
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    }
    /**
     * @return {?}
     */
    autoHighlight() {
        /** @type {?} */
        let date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        /** @type {?} */
        const initiallyHighlighted = this.ranges.current.items.find(i => this.ranges.dateComparer.equal(i.date, date));
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    highlightItem(item) {
        if (item) {
            this._renderedItems.forEach(i => i.hasFocus = false);
            /** @type {?} */
            const rendered = this._renderedItems.find(ri => ri.item === item);
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyDown(e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        /** @type {?} */
        const index = this.ranges.current.findIndex(this._highlightedItem);
        /** @type {?} */
        let isMovingForward = true;
        /** @type {?} */
        let delta = 0;
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
        let nextItem = this.ranges.current.items[index + delta];
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
            let adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            /** @type {?} */
            const nextItems = this.ranges.calc(isMovingForward).inRange;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._documentKeyDownListener();
    }
}
CalendarView.propDecorators = {
    _renderedItems: [{ type: ViewChildren, args: [SuiCalendarItem,] }],
    service: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CalendarMappings {
}
class DateMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Date;
        this.finalView = CalendarViewType.Date;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Date]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month]
        ]);
    }
}
class TimeMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Hour;
        this.finalView = CalendarViewType.Minute;
        this.changed = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
    }
}
class DatetimeMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Date;
        this.finalView = CalendarViewType.Minute;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Hour],
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month],
            [CalendarViewType.Hour, CalendarViewType.Date],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
    }
}
class MonthMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Month;
        this.finalView = CalendarViewType.Month;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Month]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Year]
        ]);
    }
}
class YearMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Year;
        this.finalView = CalendarViewType.Year;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class CalendarConfig {
    /**
     * @param {?} mode
     * @param {?} precision
     * @param {?} mappings
     * @param {?} fallback
     */
    constructor(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    updateBounds(providedDate) {
        this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    }
}
class DateConfigBase extends CalendarConfig {
    /**
     * @param {?} precision
     * @param {?} mappings
     * @param {?} fallback
     */
    constructor(precision, mappings, fallback) {
        super(CalendarMode.DateOnly, precision, mappings, fallback);
    }
}
class YearConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Year, new YearMappings(), "number");
    }
}
class MonthConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Month, new MonthMappings(), "month");
    }
}
class DateConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Date, new DateMappings(), "date");
    }
}
class DatetimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local");
    }
}
class TimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time");
    }
    /**
     * @param {?} providedDate
     * @return {?}
     */
    updateBounds(providedDate) {
        this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
        this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateComparer {
    /**
     * @param {?} precision
     * @param {?} isSmallest
     */
    constructor(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    equal(a, b) {
        if (this._precision === DatePrecision.Minute) {
            return !!b &&
                DateUtil.equal(DatePrecision.Hour, b, a) &&
                Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && DateUtil.equal(this._precision, a, b);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    lessThan(a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    greaterThan(a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
    }
    /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    between(date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    }
}

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
    return (dirtyIndex, { type } = { type: defaultType }) => {
        /** @type {?} */
        const index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
        return values[type][index];
    };
}
/**
 * @param {?} values
 * @param {?} defaultType
 * @return {?}
 */
function buildLocalizeArrayFn(values, defaultType) {
    return ({ type } = { type: defaultType }) => values[type];
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildMatchFn(patterns, defaultType) {
    return (dirtyString, { type } = { type: defaultType }) => dirtyString.match(`^(${patterns[type].join("|")})`);
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildParseFn(patterns, defaultType) {
    return ([, result], { type } = { type: defaultType }) => (patterns[type] || patterns[defaultType])
        .map(p => new RegExp(`^${p}`))
        .findIndex(pattern => pattern.test(result));
}
class DateFnsParser {
    /**
     * @return {?}
     */
    get _config() {
        return {
            weekStartsOn: this._weekStartsOn,
            locale: this._locale
        };
    }
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this._weekStartsOn = (/** @type {?} */ (locale.firstDayOfWeek));
        /** @type {?} */
        const weekdayValues = {
            long: locale.weekdays,
            short: locale.weekdaysShort,
            narrow: locale.weekdaysNarrow
        };
        /** @type {?} */
        const monthValues = {
            long: locale.months,
            short: locale.monthsShort
        };
        /** @type {?} */
        const timeOfDayValues = {
            long: locale.timesOfDay,
            uppercase: locale.timesOfDayUppercase,
            lowercase: locale.timesOfDayLowercase
        };
        /** @type {?} */
        const timeOfDayMatchValues = {
            long: locale.timesOfDay,
            short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
        };
        this._locale = (/** @type {?} */ (defaultLocale));
        this._locale.localize = Object.assign({}, this._locale.localize, {
            weekday: buildLocalizeFn(weekdayValues, "long"),
            weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
            month: buildLocalizeFn(monthValues, "long"),
            months: buildLocalizeArrayFn(monthValues, "long"),
            timeOfDay: buildLocalizeFn(timeOfDayValues, "long", (hours) => {
                return hours / 12 >= 1 ? 1 : 0;
            }),
            timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
        });
        this._locale.match = Object.assign({}, this._locale.match, {
            weekdays: buildMatchFn(weekdayValues, "long"),
            weekday: buildParseFn(weekdayValues, "long"),
            months: buildMatchFn(monthValues, "long"),
            month: buildParseFn(monthValues, "long"),
            timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
            timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
        });
    }
    /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    format(d, f) {
        return format(d, f, this._config);
    }
    /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    parse(dS, f, bD) {
        return parse(dS, f, bD, this._config);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateParser {
    /**
     * @param {?} format
     * @param {?} locale
     */
    constructor(format$$1, locale) {
        this._format = format$$1;
        this._parser = new DateFnsParser(locale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        return this._parser.format(date, this._format);
    }
    /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    parse(dateString, baseDate = new Date()) {
        return this._parser.parse(dateString, this._format, baseDate);
    }
}
class InternalDateParser extends DateParser {
    /**
     * @param {?} mode
     * @param {?} locale
     */
    constructor(mode, locale) {
        /** @type {?} */
        const internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        super(internalFormats[mode], locale);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRange {
    /**
     * @return {?}
     */
    get inRange() {
        return this.items.filter(i => !i.isOutsideRange);
    }
    /**
     * @param {?} start
     * @param {?} dates
     * @param {?} items
     * @param {?} grouped
     * @param {?} comparer
     */
    constructor(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    find(item) {
        return this.items.find(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    findIndex(item) {
        if (!item) {
            return -1;
        }
        return this.items.findIndex(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    containsDate(date) {
        return !!this.inRange.find(i => this._comparer.equal(i.date, date));
    }
}
/**
 * @abstract
 */
class CalendarRangeService {
    /**
     * @return {?}
     */
    get dateComparer() {
        return new DateComparer(this.marginal, this.service.inFinalView);
    }
    /**
     * @return {?}
     */
    get length() {
        return this.rows * this.columns;
    }
    /**
     * @return {?}
     */
    get canMoveNext() {
        /** @type {?} */
        const firstItem = this.next.inRange[0];
        if (firstItem && this.service.maxDate) {
            return firstItem.date <= this.service.maxDate;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get canMovePrevious() {
        /** @type {?} */
        const lastItem = this.previous.inRange.slice(-1).pop();
        if (lastItem && this.service.minDate) {
            return lastItem.date >= this.service.minDate;
        }
        return true;
    }
    /**
     * @param {?} interval
     * @param {?} rows
     * @param {?} columns
     */
    constructor(interval, rows, columns) {
        this.interval = interval;
        this.marginal = (/** @type {?} */ (interval)) + 1;
        this.rows = rows;
        this.columns = columns;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    loadService(service) {
        this.service = service;
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    move(forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    }
    /**
     * @return {?}
     */
    moveNext() {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @return {?}
     */
    movePrevious() {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    calc(forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    }
    /**
     * @param {?} startDate
     * @return {?}
     */
    calcRange(startDate) {
        /** @type {?} */
        const start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        /** @type {?} */
        const dates = this.calcDates(start);
        /** @type {?} */
        const items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    calcStart(date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    }
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    calcDates(rangeStart) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(this.marginal, DateUtil.clone(rangeStart), i));
    }
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    calcItems(dateRange, baseDate) {
        return dateRange.map(date => {
            /** @type {?} */
            const item = new CalendarItem(date);
            item.isDisabled = !this.dateComparer.between(item.date, this.service.minDate, this.service.maxDate);
            item.isActive = this.dateComparer.equal(item.date, this.service.selectedDate);
            item.isToday = this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            this.configureItem(item, baseDate);
            return item;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiCalendarViewTitle {
    constructor() {
        this.onZoomOut = new EventEmitter();
    }
}
SuiCalendarViewTitle.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-view-title",
                template: `
<span class="title link" (click)="onZoomOut.emit()">
    <ng-content></ng-content>
</span>
<span class="prev link" [class.disabled]="!ranges?.canMovePrevious" (click)="ranges?.movePrevious()">
    <i class="chevron left icon"></i>
</span>
<span class="next link" [class.disabled]="!ranges?.canMoveNext" (click)="ranges?.moveNext()">
    <i class="chevron right icon"></i>
</span>
`,
                styles: [`
.title.link {
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
}
`]
            },] },
];
SuiCalendarViewTitle.ctorParameters = () => [];
SuiCalendarViewTitle.propDecorators = {
    ranges: [{ type: Input }],
    onZoomOut: [{ type: Output, args: ["zoomOut",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DatepickerMode = {
    Year: (/** @type {?} */ ("year")),
    Month: (/** @type {?} */ ("month")),
    Date: (/** @type {?} */ ("date")),
    Datetime: (/** @type {?} */ ("datetime")),
    Time: (/** @type {?} */ ("time"))
};
class SuiDatepicker {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const PopupTrigger = {
    Hover: (/** @type {?} */ ("hover")),
    Click: (/** @type {?} */ ("click")),
    OutsideClick: (/** @type {?} */ ("outsideClick")),
    Focus: (/** @type {?} */ ("focus")),
    Manual: (/** @type {?} */ ("manual"))
};
class PopupConfig {
    /**
     * @param {?=} defaults
     */
    constructor(defaults = {}) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiPopup {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} anchor
     * @return {?}
     */
    set anchor(anchor) {
        this._anchor = anchor;
    }
    // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
    /**
     * @return {?}
     */
    get direction() {
        // We need to set direction attribute before popper init to allow correct positioning
        return this.config.placement.split(" ").shift();
    }
    // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
    /**
     * @return {?}
     */
    get alignment() {
        return this.config.placement.split(" ").pop();
    }
    /**
     * @return {?}
     */
    get dynamicClasses() {
        /** @type {?} */
        const classes = {};
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
    }
    /**
     * @return {?}
     */
    open() {
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(() => {
                this.positioningService = new PositioningService(this._anchor, this._container.element, this.config.placement, ".dynamic.arrow");
                this.positioningService.hasArrow = !this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, () => {
                // Focus any element with [autofocus] attribute.
                /** @type {?} */
                const autoFocus = (/** @type {?} */ (this.elementRef.nativeElement.querySelector("[autofocus]")));
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(() => autoFocus.focus(), 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(() => autoFocus.focus(), this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    }
    /**
     * @return {?}
     */
    close() {
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(() => this.onClose.emit(), this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    }
}
SuiPopup.decorators = [
    { type: Component, args: [{
                selector: "sui-popup",
                template: `
<div class="ui popup"
     [ngClass]="dynamicClasses"
     [suiTransition]="transitionController"
     [attr.direction]="direction"
     #container>

    <ng-container *ngIf="!config.template && (!!config.header || !!config.text)">
        <div class="header" *ngIf="config.header">{{ config.header }}</div>
        <div class="content">{{ config.text }}</div>
    </ng-container>
    <div #templateSibling></div>

    <sui-popup-arrow *ngIf="!config.isBasic"
                     [placement]="config.placement"
                     [inverted]="config.isInverted"></sui-popup-arrow>
</div>
`,
                styles: [`
.ui.popup {
    /* Autofit popup to the contents. */
    right: auto;
    margin: 0;
}

.ui.animating.popup {
    /* When the popup is animating, it may not initially be in the correct position.
       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.
       Setting pointer-events to none while animating fixes this bug. */
    pointer-events: none;
}

.ui.popup::before {
    /* Hide the Semantic UI CSS arrow. */
    display: none;
}

/* Offset popup by 0.75em above and below when placed 'vertically'. */
.ui.popup[direction="top"],
.ui.popup[direction="bottom"] {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

/* Offset popup by 0.75em either side when placed 'horizontally'. */
.ui.popup[direction="left"],
.ui.popup[direction="right"] {
    margin-left: 0.75em;
    margin-right: 0.75em;
}
`]
            },] },
];
SuiPopup.ctorParameters = () => [
    { type: ElementRef }
];
SuiPopup.propDecorators = {
    _container: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SuiPopupController {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _componentFactory
     * @param {?} config
     */
    constructor(_renderer, _element, _componentFactory, config) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(() => this.cleanup());
    }
    // Returns generated popup instance.
    /**
     * @return {?}
     */
    get popup() {
        // Use non-null assertion as we only access this when a popup exists.
        return this._componentRef.instance;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    configure(config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    }
    /**
     * @return {?}
     */
    openDelayed() {
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(() => this.open(), this.popup.config.delay);
    }
    /**
     * @return {?}
     */
    open() {
        // Attach the generated component to the current application.
        this._componentFactory.attachToApplication(this._componentRef);
        if (this.popup.config.isInline) {
            this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
        }
        else if (this.popup.config.parent) {
            this._componentFactory.moveToElement(this._componentRef, this.popup.config.parent);
        }
        else {
            // Move the generated element to the body to avoid any positioning issues.
            this._componentFactory.moveToDocumentBody(this._componentRef);
        }
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", (e) => this.onDocumentClick(e));
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        /** @type {?} */
        const lifecycle = ((/** @type {?} */ (this))).popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    /**
     * @return {?}
     */
    close() {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        /** @type {?} */
        const lifecycle = ((/** @type {?} */ (this))).popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    /**
     * @return {?}
     */
    toggleDelayed() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    }
    /**
     * @return {?}
     */
    toggle() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    onClick() {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentClick(e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            /** @type {?} */
            const target = (/** @type {?} */ (e.target));
            // Close the popup if the click is outside of the popup element.
            if (!((/** @type {?} */ (this._element.nativeElement))).contains(target)) {
                this.close();
            }
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    cleanup() {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanup();
    }
}
SuiPopupController.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }],
    onClick: [{ type: HostListener, args: ["click",] }],
    onFocusIn: [{ type: HostListener, args: ["focusin",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiPopupComponentController extends SuiPopupController {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} componentFactory
     * @param {?} _component
     * @param {?} config
     */
    constructor(renderer, element, componentFactory, _component, config) {
        super(renderer, element, componentFactory, config);
        this._component = _component;
    }
    /**
     * @return {?}
     */
    get componentInstance() {
        if (this._contentComponentRef) {
            return this._contentComponentRef.instance;
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._contentComponentRef) {
            this._contentComponentRef = this._componentFactory.createComponent((/** @type {?} */ (this._component)));
            this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
        }
        super.open();
    }
    /**
     * @return {?}
     */
    cleanup() {
        super.cleanup();
        if (this._contentComponentRef) {
            this._contentComponentRef.destroy();
            this._contentComponentRef = undefined;
        }
    }
}

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
class SuiPopupTemplateController extends SuiPopupController {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} componentFactory
     * @param {?} config
     */
    constructor(renderer, element, componentFactory, config) {
        super(renderer, element, componentFactory, config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    configure(config) {
        super.configure(config);
        if (config) {
            this.template = config.template;
            this.context = config.context;
        }
    }
    /**
     * @return {?}
     */
    open() {
        // If there is a template, inject it into the view.
        if (this.template) {
            this.popup.templateSibling.clear();
            this._componentFactory.createView(this.popup.templateSibling, this.template, {
                $implicit: this.popup,
                context: this.context
            });
        }
        super.open();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiPopupArrow {
    /**
     * @return {?}
     */
    get direction() {
        if (this.placement) {
            return this.placement.split(" ").shift();
        }
    }
    /**
     * @return {?}
     */
    get alignment() {
        if (this.placement) {
            /** @type {?} */
            const alignment = this.placement.split(" ").pop();
            if (alignment === this.direction) {
                return "center";
            }
            return alignment;
        }
    }
}
SuiPopupArrow.decorators = [
    { type: Component, args: [{
                selector: "sui-popup-arrow",
                template: `
<div class="dynamic arrow" [attr.direction]="direction" *ngIf="alignment == 'center'"></div>
<div class="static arrow" [attr.direction]="direction" [attr.alignment]="alignment" *ngIf="alignment != 'center'"></div>
`,
                styles: [`
.arrow {
    position: absolute;
    width: 0.71428571em;
    height: 0.71428571em;
    background: #ffffff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 2;
}

:host.inverted .arrow {
    background: #1b1c1d;
}

.arrow[direction="top"] {
    bottom: -0.30714286em;
    box-shadow: 1px 1px 0 0 #bababc;
}

.arrow[direction="left"] {
    right: -0.30714286em;
    box-shadow: 1px -1px 1px 0 #bababc;
}

.arrow[direction="bottom"] {
    top: -0.30714286em;
    box-shadow: -1px -1px 0 0 #bababc;
}

.arrow[direction="right"] {
    left: -0.30714286em;
    box-shadow: -1px 1px 1px 0 #bababc;
}

.static.arrow[direction="bottom"][alignment="left"],
.static.arrow[direction="top"][alignment="left"] {
    left: 1em;
    right: auto;
}

.static.arrow[direction="left"][alignment="top"],
.static.arrow[direction="right"][alignment="top"] {
    top: 1em;
    bottom: auto;
}

.static.arrow[direction="bottom"][alignment="right"],
.static.arrow[direction="top"][alignment="right"] {
    left: auto;
    right: 1em;
}

.static.arrow[direction="left"][alignment="bottom"],
.static.arrow[direction="right"][alignment="bottom"] {
    top: auto;
    bottom: 1em;
}
`]
            },] },
];
SuiPopupArrow.propDecorators = {
    placement: [{ type: Input }],
    inverted: [{ type: HostBinding, args: ["class.inverted",] }, { type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiPopupConfig extends PopupConfig {
    constructor() {
        // We use an empty constructor to ensure Angular DI works correctly.
        super();
    }
}
SuiPopupConfig.decorators = [
    { type: Injectable },
];
SuiPopupConfig.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiPopupDirective extends SuiPopupTemplateController {
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
     * @param {?} inline
     * @return {?}
     */
    set popupInline(inline) {
        this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
    }
    /**
     * @param {?} flowing
     * @return {?}
     */
    set popupFlowing(flowing) {
        this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
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
     * @param {?} width
     * @return {?}
     */
    set popupWidth(width) {
        this.popup.config.width = width;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set popupSize(size) {
        this.popup.config.size = size;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiPopupModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDatepickerDirective extends SuiPopupComponentController {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} componentFactory
     * @param {?} localizationService
     */
    constructor(renderer, element, componentFactory, localizationService) {
        super(renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        }));
        this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        this._renderer.addClass(this.popup.elementRef.nativeElement, "ui");
        this._renderer.addClass(this.popup.elementRef.nativeElement, "calendar");
        this.onLocaleUpdate();
        this.localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this.onSelectedDateChange = new EventEmitter();
        this.onValidatorChange = new EventEmitter();
        this.mode = DatepickerMode.Datetime;
    }
    /**
     * @return {?}
     */
    get selectedDate() {
        return this._selectedDate;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set selectedDate(date) {
        this._selectedDate = date;
        this.onSelectedDateChange.emit(date);
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
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
    }
    /**
     * @return {?}
     */
    get localeValues() {
        return this.localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @param {?} placement
     * @return {?}
     */
    set placement(placement) {
        this.popup.config.placement = placement;
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    set transition(transition) {
        this.popup.config.transition = transition;
    }
    /**
     * @param {?} duration
     * @return {?}
     */
    set transitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set popupParent(element) {
        this.popup.config.parent = element;
    }
    /**
     * @return {?}
     */
    popupOnOpen() {
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
            this.componentInstance.service.onDateChange.subscribe((d) => {
                this.selectedDate = d;
                this.close();
            });
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ maxDate, minDate, mode }) {
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this.localizationService.get().datepicker;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const value = c.value;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    }
}
SuiDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                providers: [customValidatorFactory(SuiDatepickerDirective)]
            },] },
];
SuiDatepickerDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory },
    { type: SuiLocalizationService }
];
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
    popupParent: [{ type: Input, args: ["pickerPopupParent",] }],
    onSelectedDateChange: [{ type: Output, args: ["pickerSelectedDateChange",] }],
    onValidatorChange: [{ type: Output, args: ["pickerValidatorChange",] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
class SuiDatepickerDirectiveValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerSelectedDateChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
            },] },
];
SuiDatepickerDirectiveValueAccessor.ctorParameters = () => [
    { type: SuiDatepickerDirective }
];
class SuiDatepickerDirectiveValidator extends CustomValidator {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValidator.decorators = [
    { type: Directive, args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerValidatorChange)": "onValidatorChange()" },
                providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
            },] },
];
SuiDatepickerDirectiveValidator.ctorParameters = () => [
    { type: SuiDatepickerDirective }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const isWebView = isUAWebView__default || isUAWebView;
class SuiDatepickerInputDirective {
    /**
     * @param {?} datepicker
     * @param {?} valueAccessor
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} localizationService
     */
    constructor(datepicker, valueAccessor, _renderer, _element, localizationService) {
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(() => this.updateValue(this.selectedDateString));
        localizationService.onLanguageUpdate.subscribe(() => this.updateValue(this.selectedDateString));
    }
    /**
     * @return {?}
     */
    get useNativeOnMobile() {
        return this._useNativeOnMobile;
    }
    /**
     * @param {?} fallback
     * @return {?}
     */
    set useNativeOnMobile(fallback) {
        this._useNativeOnMobile = fallback;
        /** @type {?} */
        const isOnMobile = mobile || tablet || isWebView(navigator.userAgent);
        this.fallbackActive = this.useNativeOnMobile && isOnMobile;
    }
    /**
     * @return {?}
     */
    get fallbackActive() {
        return this._fallbackActive;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set fallbackActive(active) {
        this._fallbackActive = active;
        // If the fallback is active, then the trigger must be manual so the datepicker never opens.
        this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
        // Update the input value (this will insert the `T` as required).
        this.updateValue(this.selectedDateString);
    }
    /**
     * @return {?}
     */
    get parser() {
        if (this.fallbackActive) {
            return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
        }
        return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
    }
    /**
     * @return {?}
     */
    get selectedDateString() {
        if (this.datepicker.selectedDate) {
            return this.parser.format(this.datepicker.selectedDate);
        }
    }
    /**
     * @return {?}
     */
    get type() {
        if (this.fallbackActive) {
            return this.datepicker.config.fallback;
        }
        return "text";
    }
    /**
     * @return {?}
     */
    get max() {
        if (this.fallbackActive && this.datepicker.maxDate) {
            // Since HTML doesn't use a date object max is somewhat tricky.
            // Our Datepicker will always choose the 1st date on the provided precision,
            // meaning anything below the maxDate will work, hence endOf.
            /** @type {?} */
            const max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
            return this.parser.format(max);
        }
    }
    /**
     * @return {?}
     */
    get min() {
        if (this.fallbackActive && this.datepicker.minDate) {
            // Since HTML doesn't use a date object min is somewhat tricky.
            // We use 1 minute before the next date at the configured precision since
            // our Datepicker picks the first available date at that precision.
            /** @type {?} */
            const min = DateUtil.clone(this.datepicker.minDate);
            return this.parser.format(min);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    typeValue(value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        /** @type {?} */
        const parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        this.valueAccessor.onTouched();
    }
}
SuiDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: "input[suiDatepicker]"
            },] },
];
SuiDatepickerInputDirective.ctorParameters = () => [
    { type: SuiDatepickerDirective, decorators: [{ type: Host }] },
    { type: SuiDatepickerDirectiveValueAccessor, decorators: [{ type: Host }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiDatepickerInputDirective.propDecorators = {
    useNativeOnMobile: [{ type: Input, args: ["pickerUseNativeOnMobile",] }],
    type: [{ type: HostBinding, args: ["attr.type",] }],
    max: [{ type: HostBinding, args: ["attr.max",] }],
    min: [{ type: HostBinding, args: ["attr.min",] }],
    typeValue: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
    onFocusOut: [{ type: HostListener, args: ["focusout",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRangeDateService extends CalendarRangeService {
    /**
     * @param {?} start
     * @return {?}
     */
    calcStart(start) {
        /** @type {?} */
        const monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
        monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
        return monthStart;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    configureItem(item, baseDate) {
        item.humanReadable = item.date.getDate().toString();
        item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
        item.isSelectable = item.isDisabled;
    }
}
class SuiCalendarDateView extends CalendarView {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7));
    }
    /**
     * @return {?}
     */
    get days() {
        /** @type {?} */
        const days = this.service.localeValues.weekdaysNarrow;
        return days.map((d, i) => days[(i + this.service.firstDayOfWeek) % days.length]);
    }
    /**
     * @return {?}
     */
    get date() {
        return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarDateView.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-date-view",
                template: `
<table class="ui celled center aligned unstackable table seven column day">
<thead>
    <tr>
        <th colspan="7">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
    <tr>
        <th *ngFor="let day of days">{{ day }}</th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            },] },
];
SuiCalendarDateView.ctorParameters = () => [
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRangeHourService extends CalendarRangeService {
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    configureItem(item, baseDate) {
        // Set minutes and seconds to 0
        /** @type {?} */
        const customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
class SuiCalendarHourView extends CalendarView {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4));
    }
    /**
     * @return {?}
     */
    get date() {
        return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarHourView.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-hour-view",
                template: `
<table class="ui celled center aligned unstackable table four column hour">
<thead *ngIf="service.config.mode != 1">
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            },] },
];
SuiCalendarHourView.ctorParameters = () => [
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRangeMinuteService extends CalendarRangeService {
    /**
     * @param {?} start
     * @return {?}
     */
    calcStart(start) {
        return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    calcDates(start) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5));
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    configureItem(item, baseDate) {
        item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
class SuiCalendarMinuteView extends CalendarView {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3));
    }
    /**
     * @return {?}
     */
    get date() {
        if (this.service.config.mode !== CalendarMode.TimeOnly) {
            // Set minutes and seconds to 0
            /** @type {?} */
            const dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
            return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
        }
        else {
            // Set minutes and seconds to 0
            /** @type {?} */
            const timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
            return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
        }
    }
}
SuiCalendarMinuteView.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-minute-view",
                template: `
<table class="ui celled center aligned unstackable table three column minute">
<thead>
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            },] },
];
SuiCalendarMinuteView.ctorParameters = () => [
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRangeMonthService extends CalendarRangeService {
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    configureItem(item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    }
}
class SuiCalendarMonthView extends CalendarView {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3));
    }
    /**
     * @return {?}
     */
    get year() {
        return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarMonthView.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-month-view",
                template: `
<table class="ui celled center aligned unstackable table three column month">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ year }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            },] },
];
SuiCalendarMonthView.ctorParameters = () => [
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarRangeYearService extends CalendarRangeService {
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    configureItem(item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    }
}
class SuiCalendarYearView extends CalendarView {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super(renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3));
    }
    /**
     * @return {?}
     */
    get decadeStart() {
        return DateUtil
            .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
            .getFullYear();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    pad(year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    }
}
SuiCalendarYearView.decorators = [
    { type: Component, args: [{
                selector: "sui-calendar-year-view",
                template: `
<table class="ui celled center aligned unstackable table three column year">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            },] },
];
SuiCalendarYearView.ctorParameters = () => [
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDatepickerModule {
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
class SuiDimmer extends SuiTransition {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this._isDimmed = false;
        this.isDimmedChange = new EventEmitter();
        this.isClickable = true;
        this.wrapContent = true;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get isDimmed() {
        return this._isDimmed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDimmed(value) {
        /** @type {?} */
        const isDimmed = !!value;
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
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    }
}
SuiDimmer.decorators = [
    { type: Component, args: [{
                selector: "sui-dimmer",
                template: `
<div [class.content]="wrapContent">
    <ng-content></ng-content>
</div>
`,
                styles: [`
:host.dimmer:not(.hidden) {
    transition: none;
    display: flex !important;
}
`]
            },] },
];
SuiDimmer.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDimmerModule {
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
const DropdownAutoCloseType = {
    ItemClick: (/** @type {?} */ ("itemClick")),
    OutsideClick: (/** @type {?} */ ("outsideClick")),
    Disabled: (/** @type {?} */ ("disabled"))
};
class DropdownService {
    /**
     * @return {?}
     */
    get isNested() {
        return !!this.parent;
    }
    /**
     * @param {?=} autoCloseMode
     */
    constructor(autoCloseMode = DropdownAutoCloseType.ItemClick) {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    setOpenState(isOpen, reflectInParent = false) {
        if (this.isOpen !== isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            this.isAnimating = true;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(c => c.setOpenState(this.isOpen));
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen !== isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.isDisabled !== isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    }
    /**
     * @return {?}
     */
    toggleOpenState() {
        this.setOpenState(!this.isOpen);
    }
    // Registers a dropdown service as a child of this service.
    /**
     * @param {?} child
     * @return {?}
     */
    registerChild(child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    }
    // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
    /**
     * @param {?} child
     * @return {?}
     */
    isChildRegistered(child) {
        return this === child || !!this.children
            .find(c => !!c.children
            .find(cChild => cChild.isChildRegistered(child)));
    }
    // Wipes any nested data, so all services can be cleanly reattached.
    /**
     * @return {?}
     */
    clearChildren() {
        this.children.forEach(c => {
            c.parent = undefined;
        });
        this.children = [];
    }
    // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
    /**
     * @param {?} callback
     * @return {?}
     */
    delay(callback) {
        setTimeout(() => callback());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDropdownMenuItem {
    /**
     * @param {?} _renderer
     * @param {?} element
     */
    constructor(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        // We must use nativeElement as Angular doesn't have a way of reading class information.
        /** @type {?} */
        const element = (/** @type {?} */ (this.element.nativeElement));
        return element.classList.contains("disabled");
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSelected(value) {
        // Renderer is used to enable a dynamic class name.
        if (value) {
            this._renderer.addClass(this.element.nativeElement, this.selectedClass);
        }
        else {
            this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
        }
    }
    /**
     * @return {?}
     */
    get hasChildDropdown() {
        return !!this.childDropdownMenu;
    }
    /**
     * @return {?}
     */
    performClick() {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    }
}
SuiDropdownMenuItem.decorators = [
    { type: Directive, args: [{
                // We must attach to every '.item' as Angular doesn't support > selectors.
                selector: ".item"
            },] },
];
SuiDropdownMenuItem.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SuiDropdownMenuItem.propDecorators = {
    childDropdownMenu: [{ type: ContentChild, args: [forwardRef(() => SuiDropdownMenu),] }]
};
class SuiDropdownMenu extends SuiTransition {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false);
        this.setTransitionController(this._transitionController);
        this.menuTransition = "slide down";
        this.menuTransitionDuration = 200;
        this.menuAutoSelectFirst = false;
        this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        this._parentKeyDownListener = () => { };
    }
    /**
     * @return {?}
     */
    get service() {
        return this._service;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set service(value) {
        this._service = value;
        /** @type {?} */
        let previousIsOpen = this._service.isOpen;
        this._service.isOpenChange.subscribe((isOpen) => {
            if (isOpen !== previousIsOpen) {
                // Only run transitions if the open state has changed.
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition(this.menuTransition, this.menuTransitionDuration, TransitionDirection.Either, () => this._service.isAnimating = false));
            }
            if (!isOpen) {
                // Reset the item selections when a nested item is selected to avoid incosistent open states.
                if (this.selectedItems.length > 1) {
                    this.resetSelection();
                }
            }
            previousIsOpen = isOpen;
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set parentElement(value) {
        this._parentKeyDownListener = this._renderer
            .listen(value.nativeElement, "keydown", (e) => this.onParentKeyDown(e));
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._itemsQueryOverride = items;
    }
    /**
     * @return {?}
     */
    get _itemsQuery() {
        return this._itemsQueryOverride || this._itemsQueryInternal;
    }
    // Get the list of items, ignoring those that are disabled.
    /**
     * @return {?}
     */
    get _items() {
        return this._itemsQuery.filter(i => !i.isDisabled);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                /** @type {?} */
                const target = (/** @type {?} */ (e.target));
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onParentKeyDown(e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            /** @type {?} */
            const target = (/** @type {?} */ (e.target));
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(kC => kC === e.keyCode)) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            const [selected] = this.selectedItems.slice(-1);
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            /** @type {?} */
            let selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                const [selectedParent] = this.selectedItems.slice(-2);
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
                        const [selectedParent] = this.selectedItems.slice(-1);
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    }
    /**
     * @return {?}
     */
    resetSelection() {
        this.selectedItems = [];
        this._items.forEach(i => {
            i.selectedClass = this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    }
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    /**
     * @param {?} selectedItem
     * @param {?} keyCode
     * @return {?}
     */
    updateSelection(selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        /** @type {?} */
        let selectedIndex = this._items
            .findIndex(i => i === selectedItem);
        /** @type {?} */
        let newSelection;
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    scrollToItem(item) {
        /** @type {?} */
        const menu = this._element.nativeElement;
        /** @type {?} */
        const selectedRect = item.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const menuRect = menu.getBoundingClientRect();
        /** @type {?} */
        let scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(() => this.onItemsChanged());
    }
    /**
     * @return {?}
     */
    onItemsChanged() {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._parentKeyDownListener();
    }
}
SuiDropdownMenu.decorators = [
    { type: Directive, args: [{
                selector: "[suiDropdownMenu]"
            },] },
];
SuiDropdownMenu.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SuiDropdownMenu.propDecorators = {
    menuTransition: [{ type: Input }],
    menuTransitionDuration: [{ type: Input }],
    _itemsQueryInternal: [{ type: ContentChildren, args: [SuiDropdownMenuItem,] }],
    menuAutoSelectFirst: [{ type: Input }],
    menuSelectedItemClass: [{ type: Input }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDropdown {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
        this.service = new DropdownService();
        this.service.isOpenChange.subscribe(() => {
            if (this.service.isOpen) {
                this._element.nativeElement.focus();
            }
        });
    }
    /**
     * @return {?}
     */
    get children() {
        // @ContentChildren includes the current element by default.
        return this._children.filter(c => c !== this);
    }
    /**
     * @return {?}
     */
    get isOpenChange() {
        return this.service.isOpenChange;
    }
    /**
     * @return {?}
     */
    get isActive() {
        // This is to ensure nested dropdowns don't get made bold.
        return this.service.isOpen && !this.service.isNested;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.service.isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        // If we are opening the dropdown, we want to always open its parents.
        this.service.setOpenState(value, !!value);
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.service.isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this.service.setDisabledState(value);
    }
    /**
     * @return {?}
     */
    get tabIndex() {
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
    }
    /**
     * @return {?}
     */
    get autoClose() {
        return this.service.autoCloseMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        this.service.autoCloseMode = value;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this._menu.parentElement = this._element;
        this.childrenUpdated();
        this._children.changes
            .subscribe(() => this.childrenUpdated());
    }
    /**
     * @return {?}
     */
    childrenUpdated() {
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(c => c.service)
            .forEach(s => this.service.registerChild(s));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.externallyClose();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeypress(e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode === KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    }
    /**
     * @return {?}
     */
    externallyClose() {
        if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
            this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
            // No need to reflect in parent since they are also bound to document.
            this.service.setOpenState(false);
        }
    }
}
SuiDropdown.decorators = [
    { type: Directive, args: [{
                selector: "[suiDropdown]"
            },] },
];
SuiDropdown.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiDropdownModule {
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
class ActiveModal {
    /**
     * @param {?} instance
     * @param {?} componentRef
     */
    constructor(instance, componentRef) {
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(() => this._componentRef.destroy());
    }
    // Shorthand for direct access to the `SuiModal` instance.
    /**
     * @return {?}
     */
    get component() {
        return this._componentRef.instance;
    }
    // Registers a callback for when `onApprove` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    onApprove(callback) {
        this.component.onApprove.subscribe((res) => callback(res));
        return this;
    }
    // Registers a callback for when `onDeny` is fired.
    /**
     * @param {?} callback
     * @return {?}
     */
    onDeny(callback) {
        this.component.onDeny.subscribe((res) => callback(res));
        return this;
    }
    // Fires the approve event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) {
        this.component.approve(result);
    }
    // Fires the deny event of the modal manually.
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) {
        this.component.deny(result);
    }
    // Removes the modal component instantly, without transitions or firing any events.
    /**
     * @return {?}
     */
    destroy() {
        this._componentRef.destroy();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ModalSize = {
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
class ModalConfig {
    /**
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(context = undefined, isClosable = true) {
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
}
// Used when creating a modal from a `TemplateRef`.
/**
 * @template T, U, V
 */
class TemplateModalConfig extends ModalConfig {
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(template, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.template = template;
    }
}
// Used when creating a modal from an existing component.
/**
 * @template T, U, V
 */
class ComponentModalConfig extends ModalConfig {
    /**
     * @param {?} component
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(component, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.component = component;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Used to pass ability to control a modal to a component.
/**
 * @template T, U
 */
class ModalControls {
    /**
     * @param {?} approve
     * @param {?} deny
     */
    constructor(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    // Use method here rather than arrow variables to make intellisense show they're methods.
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) { }
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) { }
}
// Injected into custom modal components, to allow control of the modal, and access to a context object.
/**
 * @template T, U, V
 */
class Modal extends ModalControls {
    /**
     * @param {?} controls
     * @param {?} context
     */
    constructor(controls, context) {
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        super(controls.approve, controls.deny);
        this.context = context;
    }
}

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
class ModalTemplate extends TemplateRef {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
class SuiModal {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _componentFactory
     */
    constructor(_renderer, _element, _componentFactory) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        /** @type {?} */
        const config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(res => this.dismiss(() => this.onApprove.emit(res)), res => this.dismiss(() => this.onDeny.emit(res)));
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    /**
     * @return {?}
     */
    get approve() {
        return this.controls.approve;
    }
    /**
     * @return {?}
     */
    get deny() {
        return this.controls.deny;
    }
    // Value to deny with when closing via `isClosable`.
    /**
     * @return {?}
     */
    get isFullScreen() {
        return this._isFullScreen;
    }
    /**
     * @param {?} fullScreen
     * @return {?}
     */
    set isFullScreen(fullScreen) {
        this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
    }
    /**
     * @return {?}
     */
    get mustScroll() {
        return this._mustScroll;
    }
    /**
     * @param {?} mustScroll
     * @return {?}
     */
    set mustScroll(mustScroll) {
        this._mustScroll = mustScroll;
        // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
        this._mustAlwaysScroll = mustScroll;
        this.updateScroll();
    }
    /**
     * @return {?}
     */
    get isInverted() {
        return this._isInverted;
    }
    /**
     * @param {?} inverted
     * @return {?}
     */
    set isInverted(inverted) {
        this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    /**
     * @return {?}
     */
    get dynamicClasses() {
        /** @type {?} */
        const classes = {};
        if (this.size) {
            classes[this.size] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(() => this.dimBackground = true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        (/** @type {?} */ (document.querySelector("body"))).appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        /** @type {?} */
        const templateElement = (/** @type {?} */ (this.templateSibling.element.nativeElement));
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        const element = (/** @type {?} */ (this._modalElement.nativeElement));
        setTimeout(() => this.updateScroll());
        // Focus any element with [autofocus] attribute.
        /** @type {?} */
        const autoFocus = (/** @type {?} */ (element.querySelector("[autofocus]")));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
    // Updates the modal with the specified configuration.
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    loadConfig(config) {
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
    }
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    /**
     * @param {?=} callback
     * @return {?}
     */
    dismiss(callback = () => { }) {
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (this._originalContainer) {
                    this._originalContainer.appendChild(this._element.nativeElement);
                }
                this.onDismiss.emit();
                callback();
            }));
        }
    }
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    /**
     * @return {?}
     */
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    // Decides whether the modal needs to reposition to allow scrolling.
    /**
     * @return {?}
     */
    updateScroll() {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            /** @type {?} */
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            const margin = fontSize * 2;
            /** @type {?} */
            const element = (/** @type {?} */ (this._modalElement.nativeElement));
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    }
    // Document listener is fine here because nobody will have enough modals open.
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyUp(e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    }
    /**
     * @return {?}
     */
    onDocumentResize() {
        this.updateScroll();
    }
}
SuiModal.decorators = [
    { type: Component, args: [{
                selector: "sui-modal",
                template: `
<!-- Page dimmer for modal background. -->
<sui-modal-dimmer [ngClass]="{'top aligned': !isCentered}" 
            [class.inverted]="isInverted"
            [(isDimmed)]="dimBackground"
            [transitionDuration]="transitionDuration"
            (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scrolling]="mustScroll"
         [class.inverted]="isInverted"
         [ngClass]="dynamicClasses"
         (click)="onClick($event)"
         #modal>

        <!-- Configurable close icon -->
        <i class="close icon" *ngIf="isClosable && isFullScreen" (click)="close()"></i>
        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->
        <ng-content></ng-content>
        <!-- @ViewChild reference so we can insert elements beside this div. -->
        <div #templateSibling></div>
    </div>
</sui-modal-dimmer>
`,
                styles: [``]
            },] },
];
SuiModal.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiModalService {
    /**
     * @param {?} _componentFactory
     */
    constructor(_componentFactory) {
        this._componentFactory = _componentFactory;
    }
    /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    open(modal) {
        // Generate the modal component to be shown.
        /** @type {?} */
        const componentRef = this._componentFactory.createComponent(SuiModal);
        // Shorthand for the created modal component instance.
        /** @type {?} */
        const modalComponent = componentRef.instance;
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
            const contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            // Shorthand for access to the content component's DOM element.
            /** @type {?} */
            const contentElement = (/** @type {?} */ (contentComponentRef.location.nativeElement));
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
    }
}
SuiModalService.decorators = [
    { type: Injectable },
];
SuiModalService.ctorParameters = () => [
    { type: SuiComponentFactory }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiModalDimmer extends SuiDimmer {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this.hasClasses = true;
        this.isClickable = false;
    }
}
SuiModalDimmer.decorators = [
    { type: Component, args: [{
                selector: "sui-modal-dimmer",
                template: `<ng-content></ng-content>`,
                styles: [`
        :host.ui.dimmer:not(.hidden) {
            transition: none;
            overflow-y: auto;
            display: flex !important; 
        }
    `]
            },] },
];
SuiModalDimmer.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SuiModalDimmer.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.page",] }, { type: HostBinding, args: ["class.modals",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiModalModule {
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
class SuiProgress {
    constructor() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        // Convert value from string to number where necessary.
        /** @type {?} */
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._value = converted;
    }
    /**
     * @return {?}
     */
    get maximum() {
        return this._maximum;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maximum(value) {
        // Convert value from string to number where necessary.
        /** @type {?} */
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._maximum = converted;
    }
    /**
     * @return {?}
     */
    get precision() {
        return this._precision;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set precision(value) {
        // Convert value from string to number where necessary.
        /** @type {?} */
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._precision = Math.min(Math.max(converted, 0), 20);
    }
    /**
     * @return {?}
     */
    get reachedMaximum() {
        return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
    }
    /**
     * @return {?}
     */
    get percentage() {
        /** @type {?} */
        const boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
        /** @type {?} */
        const percentage = (boundedValue / this.maximum) * 100;
        return percentage.toFixed(this.precision);
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    set classValue(classes) {
        if (classes.includes("attached") || classes.includes("tiny")) {
            this.showProgress = false;
        }
        if (classes.includes("success")) {
            this._overrideSuccess = true;
        }
    }
}
SuiProgress.decorators = [
    { type: Component, args: [{
                selector: "sui-progress",
                template: `
<div class="bar" [style.width.%]="percentage">
    <div class="progress" *ngIf="showProgress">{{ percentage }}%</div>
</div>
<div class="label">
    <ng-content></ng-content>
</div>
`,
                styles: [`
.bar {
    transition-duration: 300ms !important;
    z-index: 1;
}
`]
            },] },
];
SuiProgress.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiProgressModule {
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
class SuiRating {
    constructor() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get maximum() {
        return this._maximum;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maximum(value) {
        this._maximum = +value;
    }
    /**
     * @return {?}
     */
    get icons() {
        // tslint:disable-next-line:prefer-literal
        return new Array(this.maximum);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onClick(i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onMouseover(i) {
        this.hoveredIndex = i;
    }
    /**
     * @return {?}
     */
    onMouseout() {
        this.hoveredIndex = -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
}
SuiRating.decorators = [
    { type: Component, args: [{
                selector: "sui-rating",
                template: `
<i class="icon"
   *ngFor="let icon of icons; let i = index"
   (mouseover)="onMouseover(i)"
   (click)="onClick(i)"
   [class.selected]="hoveredIndex >= i && !isReadonly"
   [class.active]="value > i">
</i>
`,
                styles: [`
:host.read-only .icon {
    cursor: auto
}
`]
            },] },
];
SuiRating.ctorParameters = () => [];
SuiRating.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.rating",] }],
    valueChange: [{ type: Output }],
    maximum: [{ type: Input }],
    isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
    onMouseout: [{ type: HostListener, args: ["mouseout",] }]
};
class SuiRatingValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
}
SuiRatingValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: "sui-rating",
                host: { "(valueChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            },] },
];
SuiRatingValueAccessor.ctorParameters = () => [
    { type: SuiRating }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiRatingModule {
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
class SuiSearchResult {
    /**
     * @param {?} componentFactory
     */
    constructor(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = value => "";
    }
    /**
     * @return {?}
     */
    get template() {
        return this._template;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
}
SuiSearchResult.decorators = [
    { type: Component, args: [{
                selector: "sui-search-result",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value, query)"></span>
`
            },] },
];
SuiSearchResult.ctorParameters = () => [
    { type: SuiComponentFactory }
];
SuiSearchResult.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.result",] }],
    value: [{ type: Input }],
    query: [{ type: Input }],
    formatter: [{ type: Input }],
    template: [{ type: Input }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
class SearchService {
    /**
     * @param {?=} allowEmptyQuery
     */
    constructor(allowEmptyQuery = false) {
        this._options = [];
        this.optionsFilter = (os, q) => {
            // Convert the query string to a RegExp.
            /** @type {?} */
            const regex = this.toRegex(this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    .filter(o => Util.Object.readValue(o, this._optionsField)
                    .toString()
                    .match(regex));
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = options || [];
        // We cannot use both local & remote options simultaneously.
        this._optionsLookup = undefined;
        // Reset entire service with new options.
        this.reset();
    }
    /**
     * @return {?}
     */
    get optionsLookup() {
        return this._optionsLookup;
    }
    /**
     * @param {?} lookupFn
     * @return {?}
     */
    set optionsLookup(lookupFn) {
        this._optionsLookup = lookupFn;
        // As before, cannot use local & remote options simultaneously.
        this._options = [];
        this.reset();
    }
    /**
     * @return {?}
     */
    get hasItemLookup() {
        return !!this.optionsLookup && this.optionsLookup.length === 2;
    }
    /**
     * @return {?}
     */
    get optionsField() {
        return this._optionsField;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set optionsField(field) {
        this._optionsField = field;
        // We need to reset otherwise we would now be showing invalid search results.
        this.reset();
    }
    /**
     * @return {?}
     */
    get results() {
        return this._results;
    }
    /**
     * @return {?}
     */
    get query() {
        return this._query;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    // Updates the query after the specified search delay.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQueryDelayed(query, callback = () => { }) {
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(() => {
            this.updateQuery(query, callback);
        }, this.searchDelay);
    }
    // Updates the current search query.
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    updateQuery(query, callback = () => { }) {
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
            const queryLookup = (/** @type {?} */ (this._optionsLookup.call(undefined, this._query)));
            queryLookup
                .then(results => {
                this._isSearching = false;
                this.updateResults(results);
                return callback();
            })
                .catch(error => {
                // Unset 'loading' state, and throw the returned error without updating the results.
                this._isSearching = false;
                return callback(error);
            });
            return;
        }
        /** @type {?} */
        const filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    }
    // Updates & caches the new set of results.
    /**
     * @param {?} results
     * @return {?}
     */
    updateResults(results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    }
    // tslint:disable-next-line:promise-function-async
    /**
     * @param {?} initial
     * @return {?}
     */
    initialLookup(initial) {
        if (initial instanceof Array) {
            return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
        }
        return (/** @type {?} */ (((/** @type {?} */ (this._optionsLookup)))(undefined, initial)));
    }
    // Converts a query string to regex without throwing an error.
    /**
     * @param {?} query
     * @return {?}
     */
    toRegex(query) {
        try {
            return new RegExp(query, "i");
        }
        catch (e) {
            return query;
        }
    }
    // Generates HTML for highlighted match text.
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    highlightMatches(text, query) {
        /** @type {?} */
        const regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, match => `<b>${match}</b>`);
        }
        return text;
    }
    // Resets the search back to a pristine state.
    /**
     * @return {?}
     */
    reset() {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiSearch {
    /**
     * @param {?} _element
     * @param {?} renderer
     * @param {?} _localizationService
     */
    constructor(_element, renderer, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
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
    /**
     * @return {?}
     */
    get isActive() {
        return this.dropdownService.isOpen;
    }
    // Gets & sets the placeholder text displayed inside the text input.
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.placeholder;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    /**
     * @return {?}
     */
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @return {?}
     */
    get query() {
        return this.searchService.query;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        this.selectedResult = undefined;
        // Initialise a delayed search.
        this.searchService.updateQueryDelayed(query, () => 
        // Set the results open state depending on whether a query has been entered.
        this.dropdownService.setOpenState(this.searchService.query.length > 0));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        if (options) {
            this.searchService.options = options;
        }
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
        }
    }
    /**
     * @param {?} lookupFn
     * @return {?}
     */
    set optionsLookup(lookupFn) {
        this.searchService.optionsLookup = lookupFn;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set optionsField(field) {
        this.searchService.optionsField = field;
    }
    /**
     * @return {?}
     */
    get resultFormatter() {
        if (this._resultFormatter) {
            return this._resultFormatter;
        }
        else if (this.searchService.optionsLookup) {
            return r => this.readValue(r);
        }
        else {
            return (r, q) => this.searchService.highlightMatches(this.readValue(r), q);
        }
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set resultFormatter(formatter) {
        this._resultFormatter = formatter;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this.searchService.isSearching;
    }
    /**
     * @return {?}
     */
    get results() {
        return this.searchService.results.slice(0, this.maxResults);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._menu.service = this.dropdownService;
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().search;
    }
    // Selects a result.
    /**
     * @param {?} result
     * @return {?}
     */
    select(result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.open();
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    }
    // Reads the specified field from an item.
    /**
     * @param {?} object
     * @return {?}
     */
    readValue(object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    }
}
SuiSearch.decorators = [
    { type: Component, args: [{
                selector: "sui-search",
                template: `
<div class="ui input" [class.icon]="hasIcon" (click)="onClick($event)">
    <input class="prompt" type="text" [attr.placeholder]="placeholder" autocomplete="off" [(ngModel)]="query">
    <i *ngIf="hasIcon" class="search icon"></i>
</div>
<div class="results"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     menuSelectedItemClass="active">

    <sui-search-result *ngFor="let r of results"
                       class="item"
                       [value]="r"
                       [query]="query"
                       [formatter]="resultFormatter"
                       [template]="resultTemplate"
                       (click)="select(r)"></sui-search-result>

    <div *ngIf="results.length == 0" class="message empty">
        <div class="header">{{ localeValues.noResults.header }}</div>
        <div class="description">{{ localeValues.noResults.message }}</div>
    </div>
</div>
`,
                styles: [`
/* Ensures results div has margin. */
:host {
    display: block;
    outline: 0;
}

/* Fixes positioning when results are pushed above the search. */
.results {
    margin-bottom: .5em;
}
`]
            },] },
];
SuiSearch.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SuiLocalizationService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSearchModule {
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
class SuiSelectOption extends SuiDropdownMenuItem {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    constructor(renderer, element, changeDetector) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);
        this.changeDetector = changeDetector;
        this.hasClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        this.renderedText = "";
        this.usesTemplate = false;
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set formatter(formatter) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        }
        else {
            this.renderedText = "";
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.eventHandled = true;
        setTimeout(() => this.onSelected.emit(this.value));
    }
}
SuiSelectOption.decorators = [
    { type: Component, args: [{
                selector: "sui-select-option",
                template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
            },] },
];
SuiSelectOption.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SuiSelectOption.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.item",] }],
    value: [{ type: Input }],
    onSelected: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ["class.active",] }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSelectSearch {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        this._renderer.setProperty(this._element.nativeElement, "value", query);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    updateQuery(query) {
        this.onQueryUpdated.emit(query);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        this.onQueryKeyDown.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(() => this._element.nativeElement.focus());
    }
}
SuiSelectSearch.decorators = [
    { type: Directive, args: [{
                selector: "input[suiSelectSearch]"
            },] },
];
SuiSelectSearch.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SuiSelectSearch.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.search",] }],
    autoComplete: [{ type: HostBinding, args: ["attr.autocomplete",] }],
    updateQuery: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};

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
class SuiSelectBase {
    /**
     * @param {?} _element
     * @param {?} _localizationService
     */
    constructor(_element, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new EventEmitter();
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.dropdownService.isOpen;
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this._menu.isVisible;
    }
    /**
     * @return {?}
     */
    get hasSearchClass() {
        return this.isSearchable && !this.isSearchExternal;
    }
    /**
     * @return {?}
     */
    get isSearching() {
        return this.searchService.isSearching;
    }
    /**
     * @return {?}
     */
    get searchInput() {
        return this._manualSearch || this._internalSearch;
    }
    /**
     * @return {?}
     */
    get tabindex() {
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
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.dropdownService.isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this.dropdownService.isDisabled = !!value;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        if (options) {
            this.searchService.options = options;
            this.optionsUpdateHook();
        }
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
            this.optionsUpdateHook();
        }
    }
    /**
     * @param {?} lookup
     * @return {?}
     */
    set optionsLookup(lookup) {
        if (lookup) {
            this.searchService.optionsLookup = lookup;
            this.optionsUpdateHook();
        }
    }
    /**
     * @return {?}
     */
    get filteredOptions() {
        return this.searchService.results;
    }
    // Deprecated
    /**
     * @return {?}
     */
    get availableOptions() {
        return this.filteredOptions;
    }
    /**
     * @return {?}
     */
    get query() {
        return this.isSearchable ? this.searchService.query : undefined;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (query != undefined) {
            this.queryUpdateHook();
            this.updateQuery(query);
            // Update the rendered text as query has changed.
            this._renderedOptions.forEach(ro => this.initialiseRenderedOption(ro));
            if (this.searchInput) {
                this.searchInput.query = query;
            }
        }
    }
    /**
     * @return {?}
     */
    get labelField() {
        return this.searchService.optionsField;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    set labelField(field) {
        this.searchService.optionsField = field;
    }
    /**
     * @return {?}
     */
    get labelGetter() {
        // Helper function to retrieve the label from an item.
        return (obj) => {
            /** @type {?} */
            const label = Util.Object.readValue(obj, this.labelField);
            if (label != undefined) {
                return label.toString();
            }
            return "";
        };
    }
    /**
     * @return {?}
     */
    get valueGetter() {
        // Helper function to retrieve the value from an item.
        return (obj) => Util.Object.readValue(obj, this.valueField);
    }
    /**
     * @return {?}
     */
    get configuredFormatter() {
        if (this._optionFormatter) {
            return o => (/** @type {?} */ (this._optionFormatter))(o, this.isSearchable ? this.query : undefined);
        }
        else if (this.searchService.optionsLookup) {
            return o => this.labelGetter(o);
        }
        else {
            return o => this.searchService.highlightMatches(this.labelGetter(o), this.query || "");
        }
    }
    /**
     * @param {?} formatter
     * @return {?}
     */
    set optionFormatter(formatter) {
        this._optionFormatter = formatter;
    }
    /**
     * @return {?}
     */
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe((q) => this.query = q);
            this.searchInput.onQueryKeyDown.subscribe((e) => this.onQueryInputKeydown(e));
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(() => this.onAvailableOptionsRendered());
    }
    /**
     * @return {?}
     */
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().select;
    }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    optionsUpdateHook() { }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    /**
     * @return {?}
     */
    queryUpdateHook() { }
    /**
     * @param {?} query
     * @return {?}
     */
    updateQuery(query) {
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, () => this.dropdownService.setOpenState(true));
    }
    /**
     * @param {?=} delayed
     * @return {?}
     */
    resetQuery(delayed = true) {
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
    }
    /**
     * @return {?}
     */
    onAvailableOptionsRendered() {
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(rs => rs.unsubscribe());
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(ro => {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(() => this.initialiseRenderedOption(ro));
            this._renderedSubscriptions.push(ro.onSelected.subscribe(() => this.selectOption(ro.value)));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(ro => ro.value);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    }
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    findOption(options, value) {
        // Tries to find an option in options array
        return options.find(o => value === this.valueGetter(o));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onCaretClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyPress(e) {
        if (e.keyCode === KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onQueryInputKeydown(event) { }
    /**
     * @return {?}
     */
    focus() {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    }
    // Helper that draws the provided template beside the provided ViewContainerRef.
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    drawTemplate(siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._renderedSubscriptions.forEach(s => s.unsubscribe());
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class SuiMultiSelectLabel extends SuiTransition {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     * @param {?} componentFactory
     */
    constructor(renderer, element, changeDetector, componentFactory) {
        super(renderer, element, changeDetector);
        this.componentFactory = componentFactory;
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false, "inline-block");
        this.setTransitionController(this._transitionController);
        this.onDeselected = new EventEmitter();
        this.hasClasses = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
    }
    /**
     * @return {?}
     */
    get template() {
        return this._template;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    deselectOption(e) {
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, () => this.onDeselected.emit(this.value)));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.eventHandled = true;
    }
}
SuiMultiSelectLabel.decorators = [
    { type: Component, args: [{
                selector: "sui-multi-select-label",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value)"></span>
<i class="delete icon" (click)="deselectOption($event)"></i>
`
            },] },
];
SuiMultiSelectLabel.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: SuiComponentFactory }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
class SuiMultiSelect extends SuiSelectBase {
    /**
     * @param {?} element
     * @param {?} localizationService
     */
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptions = [];
        this.selectedOptionsChange = new EventEmitter();
        this.hasLabels = true;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get filteredOptions() {
        if (this.maxSelectedReached) {
            // If we have reached the maximum number of selections, then empty the results completely.
            return [];
        }
        /** @type {?} */
        const searchResults = this.searchService.results;
        if (!this.hasLabels) {
            return searchResults;
        }
        else {
            // Returns the search results \ selected options.
            return searchResults
                .filter(r => this.selectedOptions.find(o => r === o) == undefined);
        }
    }
    /**
     * @return {?}
     */
    get availableOptions() {
        return this.filteredOptions;
    }
    /**
     * @return {?}
     */
    get hasLabels() {
        return this._hasLabels;
    }
    /**
     * @param {?} hasLabels
     * @return {?}
     */
    set hasLabels(hasLabels) {
        this._hasLabels = hasLabels;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.multi.placeholder;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    /**
     * @return {?}
     */
    get maxSelectedReached() {
        if (this.maxSelected == undefined) {
            // If there is no maximum then we can immediately return.
            return false;
        }
        return this.selectedOptions.length === this.maxSelected;
    }
    /**
     * @return {?}
     */
    get maxSelectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
    }
    /**
     * @return {?}
     */
    get selectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
    }
    /**
     * @return {?}
     */
    optionsUpdateHook() {
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(o => this.valueGetter(o)));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                .map(v => (/** @type {?} */ (this.findOption(this.searchService.options, v))))
                .filter(v => v != undefined);
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    /**
     * @param {?} values
     * @return {?}
     */
    writeValue(values) {
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    .map(v => (/** @type {?} */ (this.findOption(this.searchService.options, v))))
                    .filter(v => v != undefined);
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(items => this.selectedOptions = items);
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
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(so => so !== option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onQueryInputKeydown(event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    }
}
SuiMultiSelect.decorators = [
    { type: Component, args: [{
                selector: "sui-multi-select",
                template: `
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>

<ng-container *ngIf="hasLabels">
<!-- Multi-select labels -->
    <sui-multi-select-label *ngFor="let selected of selectedOptions;"
                            [value]="selected"
                            [query]="query"
                            [formatter]="configuredFormatter"
                            [template]="optionTemplate"
                            (deselected)="deselectOption($event)"></sui-multi-select-label>
</ng-container>

<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Helper text -->
<div class="text"
     [class.default]="hasLabels"
     [class.filtered]="!!query && !isSearchExternal">
    
    <!-- Placeholder text -->
    <ng-container *ngIf="hasLabels; else selectedBlock">{{ placeholder }}</ng-container>
    
    <!-- Summary shown when labels are hidden -->
    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>
</div>

<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="true">

    <ng-content></ng-content>
    <ng-container *ngIf="availableOptions.length == 0 ">
        <div *ngIf="!maxSelectedReached" class="message">{{ localeValues.noResultsMessage }}</div>
        <div *ngIf="maxSelectedReached" class="message">{{ maxSelectedMessage }}</div>
    </ng-container>
</div>
`,
                styles: [`
:host input.search {
    width: 12em !important;
}
`]
            },] },
];
SuiMultiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiMultiSelect.propDecorators = {
    selectedOptionsChange: [{ type: Output }],
    hasLabels: [{ type: Input }],
    placeholder: [{ type: Input }],
    maxSelected: [{ type: Input }],
    hasClasses: [{ type: HostBinding, args: ["class.multiple",] }]
};
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
class SuiMultiSelectValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
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
SuiMultiSelectValueAccessor.ctorParameters = () => [
    { type: SuiMultiSelect }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U
 */
class SuiSelect extends SuiSelectBase {
    /**
     * @param {?} element
     * @param {?} localizationService
     */
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder || this.localeValues.single.placeholder;
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    /**
     * @return {?}
     */
    optionsUpdateHook() {
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
    }
    /**
     * @return {?}
     */
    queryUpdateHook() {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = undefined;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        this.resetQuery();
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
                        .then(i => {
                        this.selectedOption = i;
                        this.drawSelectedOption();
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
    }
    /**
     * @param {?} option
     * @return {?}
     */
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value === this.selectedOption;
    }
    /**
     * @return {?}
     */
    drawSelectedOption() {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption != undefined && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    }
}
SuiSelect.decorators = [
    { type: Component, args: [{
                selector: "sui-select",
                template: `
<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Placeholder text -->
<div *ngIf="selectedOption == undefined" class="default text" [class.filtered]="query">{{ placeholder }}</div>
<!-- Selected item -->
<div class="text" [class.filtered]="query || selectedOption == undefined">
    <span #optionTemplateSibling></span>
    <span *ngIf="!optionTemplate && selectedOption != undefined" [innerHTML]="configuredFormatter(selectedOption)"></span>
</div>
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>
<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="isSearchable">

    <ng-content></ng-content>
    <div *ngIf="isSearchable && availableOptions.length === 0" class="message">
        {{ localeValues.noResultsMessage }}
    </div>
</div>
`
            },] },
];
SuiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiSelect.propDecorators = {
    _optionTemplateSibling: [{ type: ViewChild, args: ["optionTemplateSibling", { read: ViewContainerRef },] }],
    selectedOptionChange: [{ type: Output }],
    placeholder: [{ type: Input }],
    searchDelay: [{ type: Input }]
};
// Value accessor directive for the select to support ngModel.
/**
 * @template T, U
 */
class SuiSelectValueAccessor extends CustomValueAccessor {
    /**
     * @param {?} host
     */
    constructor(host) {
        super(host);
    }
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
SuiSelectValueAccessor.ctorParameters = () => [
    { type: SuiSelect }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSelectModule {
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
const SidebarTransition = {
    Overlay: (/** @type {?} */ ("overlay")),
    Push: (/** @type {?} */ ("push")),
    ScaleDown: (/** @type {?} */ ("scale down")),
    Uncover: (/** @type {?} */ ("uncover")),
    SlideAlong: (/** @type {?} */ ("slide along")),
    SlideOut: (/** @type {?} */ ("slide out"))
};
/** @type {?} */
const SidebarDirection = {
    Left: (/** @type {?} */ ("left")),
    Right: (/** @type {?} */ ("right")),
    Top: (/** @type {?} */ ("top")),
    Bottom: (/** @type {?} */ ("bottom"))
};
class SidebarService {
    /**
     * @return {?}
     */
    get width() {
        if (this.direction === SidebarDirection.Left) {
            return this._width;
        }
        if (this.direction === SidebarDirection.Right) {
            return -this._width;
        }
        return 0;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    set width(width) {
        this._width = width;
        this.widthChange.emit();
    }
    /**
     * @return {?}
     */
    get height() {
        if (this.direction === SidebarDirection.Top) {
            return this._height;
        }
        if (this.direction === SidebarDirection.Bottom) {
            return -this._height;
        }
        return 0;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    set height(height) {
        this._height = height;
        this.heightChange.emit();
    }
    /**
     * @param {?=} isVisible
     */
    constructor(isVisible = false) {
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
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisibleState(isVisible) {
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(() => this.wasJustOpened = false);
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(() => this.isAnimating = false, 500);
        }
    }
    /**
     * @return {?}
     */
    toggleVisibleState() {
        this.setVisibleState(!this.isVisible);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSidebar {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(() => this.updateDimensions());
        this.service.isVisibleChange.subscribe(() => this.updateDimensions());
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get transition() {
        return this.service.transition;
    }
    /**
     * @param {?} transition
     * @return {?}
     */
    set transition(transition) {
        this.service.transition.split(" ").forEach(c => this.setClass(c, false));
        this.service.transition = transition;
        this.service.transition.split(" ").forEach(c => this.setClass(c, true));
    }
    /**
     * @return {?}
     */
    get direction() {
        return this.service.direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        this.setClass(this.service.direction, false);
        this.service.direction = direction;
        this.setClass(this.service.direction, true);
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this.service.isVisible;
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    set isVisible(isVisible) {
        this.service.setVisibleState(isVisible);
    }
    /**
     * @return {?}
     */
    get isVisibleChange() {
        return this.service.isVisibleChange;
    }
    /**
     * @return {?}
     */
    get isAnimating() {
        return this.service.isAnimating;
    }
    /**
     * @return {?}
     */
    updateDimensions() {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    }
    /**
     * @param {?} className
     * @param {?=} isAdd
     * @return {?}
     */
    setClass(className, isAdd = true) {
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    }
    /**
     * @return {?}
     */
    open() {
        this.service.setVisibleState(true);
    }
    /**
     * @return {?}
     */
    close() {
        this.service.setVisibleState(false);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.service.toggleVisibleState();
    }
}
SuiSidebar.decorators = [
    { type: Component, args: [{
                selector: "sui-sidebar",
                template: `<ng-content></ng-content>`
            },] },
];
SuiSidebar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SuiSidebar.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.sidebar",] }, { type: HostBinding, args: ["class.menu",] }],
    transition: [{ type: Input }],
    direction: [{ type: Input }],
    isVisible: [{ type: HostBinding, args: ["class.visible",] }, { type: Input }],
    isVisibleChange: [{ type: Output }],
    isAnimating: [{ type: HostBinding, args: ["class.animating",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSidebarSibling {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get service() {
        return this._service;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set service(service) {
        this._service = service;
        setTimeout(() => this.updateTransform());
        this._service.isVisibleChange.subscribe(() => this.updateTransform());
    }
    /**
     * @return {?}
     */
    get isVisible() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible;
    }
    /**
     * @return {?}
     */
    get isDimmed() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible && this.isDimmedWhenVisible;
    }
    /**
     * @return {?}
     */
    updateTransform() {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== SidebarTransition.Overlay &&
            this.service.transition !== SidebarTransition.ScaleDown) {
            /** @type {?} */
            const translate = `translate3d(${this.service.width}px, ${this.service.height}px, 0)`;
            this._renderer.setStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    }
}
SuiSidebarSibling.decorators = [
    { type: Component, args: [{
                selector: "sui-sidebar-sibling",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            },] },
];
SuiSidebarSibling.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SuiSidebarSibling.propDecorators = {
    isDimmedWhenVisible: [{ type: Input }],
    isVisible: [{ type: HostBinding, args: ["class.visible",] }],
    isDimmed: [{ type: HostBinding, args: ["class.dimmed",] }],
    hasClasses: [{ type: HostBinding, args: ["class.pusher",] }],
    onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSidebarContainer {
    constructor() {
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    }
}
SuiSidebarContainer.decorators = [
    { type: Component, args: [{
                selector: "sui-sidebar-container",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            },] },
];
SuiSidebarContainer.ctorParameters = () => [];
SuiSidebarContainer.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.pushable",] }],
    sidebar: [{ type: ContentChild, args: [SuiSidebar,] }],
    sibling: [{ type: ContentChild, args: [SuiSidebarSibling,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiSidebarModule {
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
class Tab {
    /**
     * @param {?} header
     * @param {?} content
     */
    constructor(header, content) {
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(() => this.content.isActive = this.isActive);
    }
    // Saves accessing .header.isActive every time.
    /**
     * @return {?}
     */
    get isActive() {
        return this.header.isActive;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set isActive(active) {
        // Use `setActiveState` so as not to fire 'external changes' event.
        this.header.setActiveState(active);
    }
    // Saves accessing .header.isDisabled every time.
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.header.isDisabled;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTabHeader {
    constructor() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._isActive;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set isActive(active) {
        /** @type {?} */
        let isActive = active;
        // Only used by @Input(), runs whenever user input changes `isActive`.
        // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
        // so update is delayed to avoid 'changed after checked' error.
        setTimeout(() => {
            // Only allow change if tab header is not disabled.
            isActive = !this.isDisabled ? active : false;
            this.setActiveState(isActive);
            // Fire 'external change' event as user input has occured.
            this.isActiveExternalChange.emit(isActive);
        });
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set isDisabled(disabled) {
        // Only update if value provided is different to current one.
        if (this._isDisabled !== disabled) {
            this._isDisabled = disabled;
            // If now disabled, then tab header must be deactivated.
            if (this.isDisabled) {
                this.isActive = false;
            }
        }
    }
    // Internally update active state.
    /**
     * @param {?} active
     * @return {?}
     */
    setActiveState(active) {
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
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    }
}
SuiTabHeader.decorators = [
    { type: Directive, args: [{
                selector: "[suiTabHeader]"
            },] },
];
SuiTabHeader.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTabContent {
    constructor() {
        this.isActive = false;
        this.hasClasses = true;
    }
}
SuiTabContent.decorators = [
    { type: Directive, args: [{
                selector: "[suiTabContent]"
            },] },
];
SuiTabContent.ctorParameters = () => [];
SuiTabContent.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.tab",] }],
    id: [{ type: Input, args: ["suiTabContent",] }],
    isActive: [{ type: HostBinding, args: ["class.active",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTabset {
    constructor() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    /**
     * @return {?}
     */
    get activeTab() {
        return this._activeTab;
    }
    // When setting a tab as the currently active tab, it automatically gains
    // `isActive` status (saves littering `isActive = true` everywhere).
    /**
     * @param {?} tab
     * @return {?}
     */
    set activeTab(tab) {
        this._activeTab = tab;
        tab.isActive = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(() => this.internalComponentsUpdated());
        this._tabContents.changes.subscribe(() => this.internalComponentsUpdated());
        // Initially load the tabs.
        this.loadTabs();
    }
    // Fires whenever either the tab headers or tab contents query lists update.
    /**
     * @return {?}
     */
    internalComponentsUpdated() {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount === 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    }
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    /**
     * @return {?}
     */
    loadTabs() {
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(t => !!this._tabHeaders.find(tH => tH === t.header));
        this._tabHeaders
            .filter(tH => !this.tabs.find(t => t.header === tH))
            .forEach(tH => {
            /** @type {?} */
            const content = this._tabContents.find(tC => tC.id === tH.id);
            if (!content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            // Create a new tab instance for this header & content combo.
            /** @type {?} */
            const tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(() => this.onHeaderActiveChanged(tab));
            // Add the new instance to the list of tabs.
            this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach((tH, i) => {
            /** @type {?} */
            const tab = this.tabs.find(t => t.header === tH);
            if (tab) {
                tab.index = i;
            }
        });
        // Sort the tabs by their index.
        this.tabs.sort((a, b) => a.index - b.index);
        if (!this.activeTab) {
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(t => t === this.activeTab)) {
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(() => this.activateClosestTab(this.activeTab));
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    }
    // Fires whenever a tab header's active state is externally changed.
    /**
     * @param {?} tab
     * @return {?}
     */
    onHeaderActiveChanged(tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab !== tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(t => t !== tab).forEach(t => t.isActive = false);
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab === tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    }
    // Activate the first tab in the set.
    /**
     * @return {?}
     */
    activateFirstTab() {
        this.activeTab = this.tabs[0];
    }
    // Activates the closest available tab to a given one.
    /**
     * @param {?} tab
     * @return {?}
     */
    activateClosestTab(tab) {
        /** @type {?} */
        let nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            if (!this.tabs.find(t => t === tab)) {
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
    }
}
SuiTabset.decorators = [
    { type: Component, args: [{
                selector: "sui-tabset",
                template: `<ng-content></ng-content>`
            },] },
];
SuiTabset.ctorParameters = () => [];
SuiTabset.propDecorators = {
    _tabHeaders: [{ type: ContentChildren, args: [SuiTabHeader,] }],
    _tabContents: [{ type: ContentChildren, args: [SuiTabContent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SuiTabsModule {
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
class SuiModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3JhdGluZy9jb21wb25lbnRzL3JhdGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NsYXNzZXMvc2VsZWN0LWJhc2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL211bHRpLXNlbGVjdC1sYWJlbC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jbGFzc2VzL3RhYi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jb21wb25lbnRzL3RhYnNldC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy90YWIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvc3VpLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWx1ZXNcIjtcblxuY29uc3QgZW5HQjpJTG9jYWxlVmFsdWVzID0ge1xuICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXM6IFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbXG4gICAgICAgICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzTmFycm93OiBbXG4gICAgICAgICAgICBcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5OiBbXG4gICAgICAgICAgICBcImEubS5cIiwgXCJwLm0uXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheVVwcGVyY2FzZTogW1xuICAgICAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheUxvd2VyY2FzZTogW1xuICAgICAgICAgICAgXCJhbVwiLCBcInBtXCJcbiAgICAgICAgXSxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgdGltZTogXCJoOm1tIEFcIixcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIkQgTU1NTSBZWVlZIGg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgICAgbW9udGg6IFwiTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9LFxuICAgICAgICBmaXJzdERheU9mV2VlazogMVxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICBub1Jlc3VsdHM6IHtcbiAgICAgICAgICAgIGhlYWRlcjogXCJObyBSZXN1bHRzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2VhcmNoIHJldHVybmVkIG5vIHJlc3VsdHMuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIG5vUmVzdWx0c01lc3NhZ2U6IFwiTm8gcmVzdWx0c1wiLFxuICAgICAgICBzaW5nbGU6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBvbmVcIlxuICAgICAgICB9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0Li4uXCIsXG4gICAgICAgICAgICBtYXhTZWxlY3RlZE1lc3NhZ2U6IFwiTWF4ICN7bWF4fSBzZWxlY3Rpb25zXCIsXG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IFwiI3tjb3VudH0gc2VsZWN0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbkdCO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2NhbGVWYWx1ZXMsIElQYXJ0aWFsTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW50ZXJmYWNlcy92YWx1ZXNcIjtcbmltcG9ydCBlbkdCIGZyb20gXCIuLi9sb2NhbGVzL2VuLUdCXCI7XG5pbXBvcnQgKiBhcyAkZXh0ZW5kIGZyb20gXCJleHRlbmRcIjtcblxuZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajpUKTpUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZDxULCBVPih0YXJnZXQ6VCwgc291cmNlOlUpOlQgJiBVIHtcbiAgICAvLyBSb2xsdXAuLi5cbiAgICBjb25zdCBleHRlbmQgPSAoJGV4dGVuZCBhcyBhbnkpLmRlZmF1bHQgfHwgJGV4dGVuZDtcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIHRhcmdldCwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbGFuZyhsYW5ndWFnZTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIi1cIiwgXCJcIik7XG59XG5cbmludGVyZmFjZSBJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyIHtcbiAgICBbbmFtZTpzdHJpbmddOklQYXJ0aWFsTG9jYWxlVmFsdWVzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tWYWx1ZXM6SUxvY2FsZVZhbHVlcztcbiAgICBwcml2YXRlIF92YWx1ZXM6SUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lcjtcblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFuZ3VhZ2VVcGRhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLl9mYWxsYmFja1ZhbHVlcyA9IGVuR0I7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IFwiZW4tR0JcIjtcbiAgICAgICAgdGhpcy5sb2FkKFwiZW4tR0JcIiwgZW5HQik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGlmIChsYW5nKHRoaXMuX2xhbmd1YWdlKSAhPT0gbGFuZyhsYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChsYW5ndWFnZTpzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTpJTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGVlcENsb25lKHRoaXMuX2ZhbGxiYWNrVmFsdWVzKTtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvY2FsZSAke2xhbmd1YWdlfSBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVlcEV4dGVuZCh2YWx1ZXMsIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlPFQgZXh0ZW5kcyBrZXlvZiBJTG9jYWxlVmFsdWVzPihcbiAgICAgICAgdmFsdWVzOklMb2NhbGVWYWx1ZXNbVF0sXG4gICAgICAgIG92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElMb2NhbGVWYWx1ZXNbVF0+XG4gICAgKTpJTG9jYWxlVmFsdWVzW1RdIHtcbiAgICAgICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVlcENsb25lKHZhbHVlcyksIG92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldID0gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgZGVlcEV4dGVuZCh0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZSh2YWx1ZTpzdHJpbmcsIHZhcmlhYmxlczpbc3RyaW5nLCBzdHJpbmddW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXMucmVkdWNlKChzLCBbaywgdl0pID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKGAjeyR7a319YCwgXCJnXCIpLCB2KSwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbU3VpTG9jYWxpemF0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uTW9kdWxlIHt9XG4iLCIvLyBQb3NzaWJsZSBkaXJlY3Rpb25zIGZvciBhIHRyYW5zaXRpb24uXG5leHBvcnQgZW51bSBUcmFuc2l0aW9uRGlyZWN0aW9uIHtcbiAgICBJbixcbiAgICBPdXQsXG4gICAgRWl0aGVyLFxuICAgIFN0YXRpY1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246VHJhbnNpdGlvbkRpcmVjdGlvbjtcblxuICAgIC8vIENvbnZlcnRzIFRyYW5zaXRpb25EaXJlY3Rpb24gdG8gY2xhc3MgbmFtZS5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbkNsYXNzKCk6c3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluOiByZXR1cm4gXCJpblwiO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDogcmV0dXJuIFwib3V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGluZGl2aWR1YWwgY2xhc3NlcyBmb3IgdGhlIHRyYW5zaXRpb24sIGUuZy4gXCJmYWRlIG91dFwiIC0+IFtcImZhZGVcIiwgXCJvdXRcIl0uXG4gICAgcHVibGljIHJlYWRvbmx5IGNsYXNzZXM6c3RyaW5nW107XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246bnVtYmVyID0gMjUwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTooKCkgPT4gdm9pZCkgPSAoKSA9PiB7fSkge1xuXG4gICAgICAgIHRoaXMudHlwZSA9IG5hbWU7XG5cbiAgICAgICAgLy8gV2Ugc2V0IGEgbWluaW11bSBkdXJhdGlvbiBvZiAxbXMsIHRvIGdpdmUgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW1tZWRpYXRlIHRyYW5zaXRpb25cbiAgICAgICAgLy8gd2hpbHN0IGFsbG93aW5nIHBvc2l0aW9uaW5nIGNhbGN1bGF0aW9ucyB0byBoYXBwZW4gd2l0aG91dCBhIHZpc2libGUgZmxpY2tlci5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCAxKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy50eXBlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgICAvLyBVc2VkIHRvIGRlbGF5IGFuaW1hdGlvbnMgdW50aWwgd2UgaGF2ZSBhbiBlbGVtZW50IHRvIGFuaW1hdGUuXG4gICAgcHJpdmF0ZSBnZXQgX2lzUmVhZHkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9lbGVtZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jaGFuZ2VEZXRlY3RvciAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgJ2Rpc3BsYXknIHN0eWxlIHdoZW4gdmlzaWJsZS5cbiAgICBwcml2YXRlIF9kaXNwbGF5OnN0cmluZztcblxuICAgIC8vIFN0b3JlcyBxdWV1ZWQgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfcXVldWU6VHJhbnNpdGlvbltdO1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGFuZCB3aGlsZSBpdCBpcyB0cmFuc2l0aW9uaW5nIG91dC5cbiAgICBwcml2YXRlIF9pc1Zpc2libGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmQgbm90IHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBfaXNIaWRkZW46Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlkZGVuO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGZpcnN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUZpcnN0KCk6VHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZVswXTtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBsYXN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUxhc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlW3RoaXMuX3F1ZXVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgc2V0VGltZW91dCBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHRoZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uVGltZW91dDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luaXRpYWxseVZpc2libGU6Ym9vbGVhbiA9IHRydWUsIGRpc3BsYXk6c3RyaW5nID0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8vIGlzSW5pdGlhbGx5VmlzaWJsZSBzZXRzIHdoZXRoZXIgdGhlIGVsZW1lbnQgc3RhcnRzIG91dCB2aXNpYmxlLlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBpc0luaXRpYWxseVZpc2libGU7XG4gICAgICAgIHRoaXMuX2lzSGlkZGVuID0gIXRoaXMuX2lzVmlzaWJsZTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlbmRlcmVyIHRvIGJlIHVzZWQgZm9yIGFuaW1hdGluZy5cbiAgICBwdWJsaWMgcmVnaXN0ZXJSZW5kZXJlcihyZW5kZXJlcjpSZW5kZXJlcjIpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgZWxlbWVudCB0byBwZXJmb3JtIHRoZSBhbmltYXRpb25zIG9uLlxuICAgIHB1YmxpYyByZWdpc3RlckVsZW1lbnQoZWxlbWVudDpFbGVtZW50UmVmKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gZGV0ZWN0IGNoYW5nZXMgd2hlbiB1c2luZyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2guXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGUodHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVGVzdCBpZiB0cmFuc2l0aW9uIGlzIG9uZSBvZiB0aGUgbGlzdCB0aGF0IGRvZXNuJ3QgY2hhbmdlIHRoZSB2aXNpYmxlIHN0YXRlLlxuICAgICAgICAvLyBTaG91bGQgdGhlc2UgZXZlbnR1YWxseSBiZWNvbWUgY2xhc3Nlcz9cbiAgICAgICAgY29uc3QgaXNEaXJlY3Rpb25sZXNzID0gW1wiamlnZ2xlXCIsIFwiZmxhc2hcIiwgXCJzaGFrZVwiLCBcInB1bHNlXCIsIFwidGFkYVwiLCBcImJvdW5jZVwiXS5pbmRleE9mKHRyYW5zaXRpb24udHlwZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNEaXJlY3Rpb25sZXNzKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uU3RhdGljO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09IHVuZGVmaW5lZCB8fCB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgY3VycmVudCB2aXNpYmxlIHN0YXRlIGF1dG9tYXRpY2FsbHkgaWYgbm90IHNldCwgb3Igc2V0IHRvIGVpdGhlciBkaXJlY3Rpb24uXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMuX2lzVmlzaWJsZSA/IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0IDogVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZUxhc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBhbHJlYWR5LCBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3Bwb3NpdGUgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGF0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBpdC5cbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0cmFuc2l0aW9uKTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtVHJhbnNpdGlvbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkgfHwgdGhpcy5faXNBbmltYXRpbmcgfHwgIXRoaXMuX3F1ZXVlRmlyc3QpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHRyYW5zaXRpb24gdW50aWwgd2UgYXJlIHJlYWR5LCBvciBpZiB3ZSBhcmUgYW5pbWF0aW5nLCBvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRyYW5zaXRpb25zIGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdDtcblxuICAgICAgICAvLyBTZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgc3R5bGVzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW9uRHVyYXRpb25gLCBgJHt0cmFuc2l0aW9uLmR1cmF0aW9ufW1zYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCwgdGhpcy5fZGlzcGxheSk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBVbnNldCBoaWRkZW4gaWYgd2UgYXJlIHRyYW5zaXRpb25pbmcgaW4uXG4gICAgICAgICAgICB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGUgbGVuZ3RoIG9mIHRoZSBhbmltYXRpb24gYmVmb3JlIGNhbGxpbmcgdGhlIGNvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pLCB0cmFuc2l0aW9uLmR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhIHRyYW5zaXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICBwcml2YXRlIGZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgJiBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50LCBgZGlzcGxheWApO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBqdXN0IGFuaW1hdGVkIGluLCB3ZSBhcmUgbm93IHZpc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2l0aW9uZWQgb3V0LCB3ZSBzaG91bGQgYmUgaW52aXNpYmxlIGFuZCBoaWRkZW4uXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVzZXItZGVmaW5lZCB0cmFuc2l0aW9uIGNhbGxiYWNrLlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcXVldWUuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgLy8gSW1tZWRpYXRlbHkgYXR0ZW1wdCB0byBwZXJmb3JtIGFub3RoZXIgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGxlYXZlcyB0aGUgcmVzdCBvZiB0aGUgcXVldWUgaW50YWN0LlxuICAgIHB1YmxpYyBzdG9wKHRyYW5zaXRpb246VHJhbnNpdGlvbiA9IHRoaXMuX3F1ZXVlRmlyc3QpOnZvaWQge1xuICAgICAgICBpZiAoIXRyYW5zaXRpb24gfHwgIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgIHRoaXMuZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcyB0aGUgY3VycmVudCB0cmFuc2l0aW9uLCBhbmQgZW1wdGllcyB0aGUgcXVldWUuXG4gICAgcHVibGljIHN0b3BBbGwoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhclF1ZXVlKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIEVtcHRpZXMgdGhlIHRyYW5zaXRpb24gcXVldWUgYnV0IGNhcnJpZXMgb24gd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uLlxuICAgIHB1YmxpYyBjbGVhclF1ZXVlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFt0aGlzLl9xdWV1ZUZpcnN0XTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvdHJhbnNpdGlvbi1jb250cm9sbGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUcmFuc2l0aW9uXVwiLFxuICAgIGV4cG9ydEFzOiBcInRyYW5zaXRpb25cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBFYWNoIHRyYW5zaXRpb24gbXVzdCBoYXZlIGEgY29udHJvbGxlciBhc3NvY2lhdGVkIHRoYXQgZGlzcGF0Y2hlcyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzdWlUcmFuc2l0aW9uKHRDOlRyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIC8vIFNldCB0aGUgdHJhbnNpdGlvbiBjb250cm9sbGVyIChlLmcuICc8ZGl2IFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+PC9kaXY+JykuXG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodEMpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNsYXNzOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc1Zpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmhpZGRlblwiKVxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzSGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgLy8gSW5pdGlhbGlzZXMgdGhlIGNvbnRyb2xsZXIgd2l0aCB0aGUgaW5qZWN0ZWQgcmVuZGVyZXIgYW5kIGVsZW1lbnRSZWYuXG4gICAgcHVibGljIHNldFRyYW5zaXRpb25Db250cm9sbGVyKHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyUmVuZGVyZXIodGhpcy5fcmVuZGVyZXIpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyRWxlbWVudCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IodGhpcy5fY2hhbmdlRGV0ZWN0b3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RyYW5zaXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVHJhbnNpdGlvblxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcbiAgICBkaXNtaXNzKCk6dm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1lc3NhZ2VcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIG1lc3NhZ2Uge3sgY2xhc3MgfX1cIiAqbmdJZj1cIiFpc0Rpc21pc3NlZFwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Rpc21pc3NhYmxlXCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPjwvaT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBDU1MgQnVnICovXG4udWkuaWNvbi52aXNpYmxlLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2UgaW1wbGVtZW50cyBJTWVzc2FnZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNtaXNzYWJsZTpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImRpc21pc3NcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPjtcblxuICAgIHB1YmxpYyBpc0Rpc21pc3NlZDpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgY2xhc3M6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNtaXNzYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDMwMDtcblxuICAgICAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzbWlzcygpOnZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCh0aGlzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNZXNzYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZXNzYWdlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNZXNzYWdlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBhZ2luYXRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT0xXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZS0xKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzUHJldmlvdXMoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKDEpXCIgKm5nSWY9XCJwYWdlc1swXSAhPT0gMVwiPlxuICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzWzBdID4gMlwiPi4uLjwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiBjbGFzcz1cIml0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInA9PT1wYWdlXCIgKGNsaWNrKT1cInNldFBhZ2UocClcIj5cbiAgICB7eyBwIH19XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIDwgcGFnZUNvdW50IC0gMVwiPi4uLjwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSAhPT0gcGFnZUNvdW50XCI+XG4gICAgICAgIDxzcGFuPnt7IHBhZ2VDb3VudCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZSsxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT1wYWdlQ291bnRcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnaW5hdGlvblwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgLy8gUHVibGljIG1lbWJlcnNcbiAgICBwdWJsaWMgcGFnZUNvdW50Om51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgLy8gUHJpdmF0ZSBtZW1iZXJzXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZT86bnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TaXplOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlczpudW1iZXJbXTtcbiAgICBwcml2YXRlIF9oYXNOYXZpZ2F0aW9uTGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhTaXplKCk6bnVtYmVyfHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTpudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIDEpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VTaXplOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uU2l6ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uU2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbGxlY3Rpb25TaXplKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2l6ZSA9IE1hdGgubWF4KHZhbHVlLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc05hdmlnYXRpb25MaW5rcygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5fbWF4U2l6ZSB8fCB0aGlzLnBhZ2VDb3VudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyB8fCBtYXhTaXplIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNOYXZpZ2F0aW9uTGlua3ModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNCb3VuZGFyeUxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5Sb3RhdGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0VsbGlwc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhZ2VzKCk6bnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gMTtcbiAgICAgICAgdGhpcy5oYXNOYXZpZ2F0aW9uTGlua3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JvdW5kYXJ5TGlua3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNFbGxpcHNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgaGFzUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlKG5ld1BhZ2U6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWU6bnVtYmVyID0gKE51bWJlci5pc0ludGVnZXIobmV3UGFnZSkpID8gTWF0aC5taW4oTWF0aC5tYXgobmV3UGFnZSwgMSksIHRoaXMucGFnZUNvdW50KSA6IDE7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGUgaG9va3NcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgdXBkYXRlUGFnZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5hcHBseVBhZ2luYXRpb24oKTtcblxuICAgICAgICB0aGlzLl9wYWdlcyA9IEFycmF5PG51bWJlcj4oZW5kIC0gc3RhcnQpXG4gICAgICAgICAgICAuZmlsbChzdGFydCArIDEpXG4gICAgICAgICAgICAubWFwKChzLCBpKSA9PiBzICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2luYXRpb24oKTpbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9ICh0aGlzLm1heFNpemUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHRoaXMubWF4U2l6ZSwgdGhpcy5wYWdlQ291bnQpIDogdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguY2VpbCh0aGlzLnBhZ2UgLyBtYXhTaXplKSAtIDE7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0T2Zmc2V0ID0gbWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlQ291bnQgLSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnQgPSBwYWdlICogbWF4U2l6ZTtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbc3RhcnQsIE1hdGgubWluKGVuZCwgdGhpcy5wYWdlQ291bnQpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFN1aVBhZ2luYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvbi1wYW5lbFwiLFxuICAgIGV4cG9ydEFzOiBcInN1aUFjY29yZGlvblBhbmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gVGl0bGUgLS0+XG48ZGl2IGNsYXNzPVwidGl0bGVcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIChjbGljayk9XCJ0b2dnbGUoKVwiID5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48IS0tIENvbnRlbnQgLS0+XG48ZGl2IFtzdWlDb2xsYXBzZV09XCIhaXNPcGVuXCIgW2NvbGxhcHNlRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBNYW51YWwgc3R5bGUgYXMgU2VtYW50aWMgVUkgcmVsaWVzIG9uID4gc2VsZWN0b3IgKi9cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAuNWVtIDAgMWVtO1xufVxuXG4vKiBBbm90aGVyID4gc2VsZWN0b3IgZml4ICovXG46aG9zdDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25QYW5lbCB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gQ29udmVydCB0byBib29sZWFuIChmaXhlcyBmYWxzZSAhPSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT3BlbiAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiB0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhpcyBwYW5lbCwgd2UgbXVzdCBjbG9zZSB0aGUgb3RoZXIgb25lcy5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBjdXJyZW50IGFuaW1hdGlvbnMsIGFuZCBmYWRlIHRoZSBjb250ZW50cy4gVGhlIGRpcmVjdGlvbiBpcyBhdXRvbWF0aWMuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlcnZpY2UgZGVmaW5lZCB0cmFuc2l0aW9uIGR1cmF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldmVydCB0byBpbnN0YW50YW5lb3VzIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCB5ZXQgbG9hZGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBjbG9zZU90aGVyczpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIHBhbmVsczpTdWlBY2NvcmRpb25QYW5lbFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPdGhlcnMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDM1MDtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQYW5lbChwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIHBhbmVsLnNlcnZpY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHBhbmVsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VPdGhlclBhbmVscyhwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwICE9PSBwYW5lbCkge1xuICAgICAgICAgICAgICAgIHAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2FjY29yZGlvbi1wYW5lbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBnZW5lcmFsIHN0eWxpbmcgaXNzdWVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpeCBmb3Igc3R5bGVkIGJvcmRlciBpc3N1ZSAqL1xuOmhvc3Quc3R5bGVkIHN1aS1hY2NvcmRpb24tcGFuZWw6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjY29yZGlvblwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY2xvc2VPdGhlcnMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZU90aGVycyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aUFjY29yZGlvblBhbmVsKVxuICAgIHByb3RlY3RlZCBfcGFuZWxzOlF1ZXJ5TGlzdDxTdWlBY2NvcmRpb25QYW5lbD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWNjb3JkaW9uIHNlcnZpY2UgaXMgdW5pcXVlIHRvIGVhY2ggc2V0IG9mIHBhbmVscy5cbiAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBTdWlBY2NvcmRpb25TZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0IHBhbmVscyBhZnRlciB0aGV5IGhhdmUgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fcGFuZWxzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUGFuZWxzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQYW5lbHMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFuZWxzLmZvckVhY2gocCA9PiB0aGlzLl9zZXJ2aWNlLmFkZFBhbmVsKHApKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aUNvbGxhcHNlXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlIHtcbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgb3BlbiwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZXhwYW5kZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNFeHBhbmRlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGNsb3NlZCwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY29sbGFwc2VkXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0NvbGxhcHNpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzaW5nXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0NvbGxhcHNpbmc6Ym9vbGVhbjtcblxuICAgIC8vIEZsYWcgdGhhdCBpcyBpbml0aWFsbHkgdHJ1ZSwgdG8gbWFrZSB0aGUgMXN0IGFuaW1hdGlvbiBpbnN0YW50YW5lb3VzLlxuICAgIHByaXZhdGUgX3ByaXN0aW5lOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc3VpQ29sbGFwc2UoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNvbGxhcHNlLCBgdHJ1ZWAgaXMgY29sbGFwc2VkLlxuICAgIHB1YmxpYyBzZXQgc3VpQ29sbGFwc2UodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xsYXBzZUR1cmF0aW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgZ2V0IF9hbmltYXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlzdGluZSA/IDAgOiB0aGlzLmNvbGxhcHNlRHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbmltYXRpb24gZHVyYXRpb24gaXMgMzUwbXMgYnkgZGVmYXVsdC5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEZvcmNpYmx5IGhpZGUgdGhlIG92ZXJmbG93IHNvIHRoYXQgY29udGVudCBpcyBub3QgdmlzaWJsZSBwYXN0IHRoZSBib3VuZGFyaWVzIG9mIGl0cyBjb250YWluZXIuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBob3N0IGVsZW1lbnQgZnJvbSBpdHMgc2Nyb2xsIGhlaWdodCB0byAwLlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgMCwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBvZmZzZXQgaGVpZ2h0IHRvIGl0cyBzY3JvbGwgaGVpZ2h0LlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVyZmxvdyBvdmVycmlkZSB0byBlbmFibGUgdXNlciBzdHlsaW5nIG9uY2UgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwib3ZlcmZsb3dcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYW5pbWF0ZShzdGFydEhlaWdodDpudW1iZXIsIGVuZEhlaWdodDpudW1iZXIsIHJlbW92ZU9uQ29tcGxldGU6Ym9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICBjb25zdCBoZWlnaHRGcmFtZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c3RhcnRIZWlnaHR9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2VuZEhlaWdodH1weGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocmVtb3ZlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgaGVpZ2h0RnJhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGBhdXRvYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBjb2xsYXBzZSB1c2luZyB0aGUgd2ViIGFuaW1hdGlvbnMgQVBJLlxuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoXG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBhbmltYXRpb24gb24gMXN0IGNvbGxhcHNlIC8gZXhwYW5zaW9uLlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlXCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5fcHJpc3RpbmUpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmlzdGluZSBmbGFnIHdoZW4gZmlyc3QgaGl0LlxuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSwgdGhpcy5jb2xsYXBzZUR1cmF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY29sbGFwc2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDb2xsYXBzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29sbGFwc2VNb2R1bGUgfSBmcm9tIFwiLi4vY29sbGFwc2UvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYWxpZGF0b3JIb3N0IHtcbiAgICB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3I8VCBleHRlbmRzIElDdXN0b21WYWxpZGF0b3JIb3N0PiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QudmFsaWRhdGUoYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjwoRnVuY3Rpb24gfCBWYWxpZGF0b3IpW10+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFQgZXh0ZW5kcyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICB0aGlzLl9ob3N0LndyaXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiLy8gS2V5Ym9hcmQga2V5Y29kZXMuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBMZWZ0ID0gMzcsXG4gICAgVXAgPSAzOCxcbiAgICBSaWdodCA9IDM5LFxuICAgIERvd24gPSA0MCxcblxuICAgIEVzY2FwZSA9IDI3LFxuICAgIEVudGVyID0gMTMsXG5cbiAgICBTcGFjZSA9IDMyLFxuICAgIEJhY2tzcGFjZSA9IDhcbn1cblxuaW50ZXJmYWNlIElSZWN1cnNpdmVPYmplY3QgeyBbbmFtZTpzdHJpbmddOklSZWN1cnNpdmVPYmplY3Q7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHsgJGltcGxpY2l0OlQ7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJQXVnbWVudGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNsb3Nlc3Qoc2VsZWN0b3I6c3RyaW5nKTpJQXVnbWVudGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEhhbmRsZWRFdmVudCB7XG4gICAgcHVibGljIGV2ZW50SGFuZGxlZDpib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljQ2xhc3NlcyB7XG4gICAgW25hbWU6c3RyaW5nXTp0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgICBBcnJheToge1xuICAgICAgICByYW5nZShuOm51bWJlciwgb2Zmc2V0Om51bWJlciA9IDApOm51bWJlcltdIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheShuKS5maWxsKDApLm1hcCgoeiwgaSkgPT4gaSArIG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwPFQ+KGl0ZW1zOlRbXSwgZ3JvdXBMZW5ndGg6bnVtYmVyKTpUW11bXSB7XG4gICAgICAgICAgICBjb25zdCBtdXRhYmxlID0gaXRlbXMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczpUW11bXSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKG11dGFibGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG11dGFibGUuc3BsaWNlKDAsIGdyb3VwTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEJ5PFQ+KGl0ZW1zOlRbXSwgZmllbGQ6a2V5b2YgVCk6eyBbbmFtZTpzdHJpbmddOlRbXSB9IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2U8eyBbbmFtZTpzdHJpbmddOlRbXSB9PihcbiAgICAgICAgICAgICAgICAoZ3JvdXBzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBpW2ZpZWxkXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0gPSBncm91cHNbZmllbGRWYWx1ZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT2JqZWN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBmbGF0dGVuPFQ+KGl0ZW1zOlRbXVtdKTpUW10ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoaXMsIGkpID0+IGlzLmNvbmNhdChpKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFN0cmluZzoge1xuICAgICAgICBwYWRMZWZ0KHN0cjpzdHJpbmcsIGxlbmd0aDpudW1iZXIsIHBhZGRpbmc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAgICAgbGV0IHMgPSBzdHI7XG4gICAgICAgICAgICB3aGlsZSAocy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzID0gcGFkZGluZyArIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBET006IHtcbiAgICAgICAgcGFyc2VCb29sZWFuQXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlOmJvb2xlYW4pOmJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgT2JqZWN0OiB7XG4gICAgICAgIHJlYWRWYWx1ZTxULCBVPihvYmplY3Q6VCwgcGF0aD86c3RyaW5nKTpVIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QgYXMgYW55IGFzIFU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWN1cnNlZCA9IG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKHJlY3Vyc2VkIGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0KVtwW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2VkIGFzIGFueSBhcyBVO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE1hdGg6IHtcbiAgICAgICAgcm91bmQocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRVcChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kRG93bihyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICBtb2QocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgY29uc3QgcmVtID0gciAlIG47XG4gICAgICAgICAgICBpZiAocmVtIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW0gKyBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZW51bSBEYXRlUHJlY2lzaW9uIHtcbiAgICBEZWNhZGUgPSAwLFxuICAgIFllYXIgPSAxLFxuICAgIE1vbnRoID0gMixcbiAgICBEYXRlID0gMyxcbiAgICBIb3VyID0gNCxcbiAgICBNaW51dGUgPSA1XG59XG5cbmV4cG9ydCBjb25zdCBEYXRlVXRpbCA9IHtcbiAgICBzdGFydE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIHJlc2V0QWxsOmJvb2xlYW4gPSBmYWxzZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihkYXRlLmdldEZ1bGxZZWFyKCkgLyAxMCkgKiAxMCArIDE7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihzdGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVuZE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBzd2l0Y2ggKHByZWNpc2lvbikge1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgxMiwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDU5LCA1OSwgOTk5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVxdWFsKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBhOkRhdGUsIGI6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCBlcXVhbCA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNaW51dGVzKCkgPT09IGIuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRIb3VycygpID09PSBiLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXF1YWw7XG4gICAgfSxcblxuICAgIG5leHQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5hZGQocHJlY2lzaW9uLCBkYXRlLCAxKTtcbiAgICB9LFxuXG4gICAgYWRkKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIGk6bnVtYmVyKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5ZZWFyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChtb250aCArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IFV0aWwuTWF0aC5tb2QobW9udGggKyBpLCAxMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG5cbiAgICBwcmV2aW91cyhwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciAtIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCAtIDEsIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldEhvdXJzKCkgIT09IFV0aWwuTWF0aC5tb2QoaG91cnMgLSAxLCAyNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGNsb25lKGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZixcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBsaWNpdENvbnRleHQ8VD4ge1xuICAgICRpbXBsaWNpdD86VDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aUNvbXBvbmVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOkFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6SW5qZWN0b3IpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50PFQ+KHR5cGU6VHlwZTxUPiwgcHJvdmlkZXJzOlByb3ZpZGVyW10gPSBbXSk6Q29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgLy8gUmVzb2x2ZSBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGNvbXBvbmVudHMgb2YgdHlwZSBgdHlwZWAuXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSBhcyBUeXBlPFQ+KTtcblxuICAgICAgICAvLyBSZXNvbHZlIGFuZCBjcmVhdGUgYW4gaW5qZWN0b3Igd2l0aCB0aGUgc3BlY2lmaWVkIHByb3ZpZGVycy5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgICAgICAgIHByb3ZpZGVycyxcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHVzaW5nIHRoZSBwcmV2aW91c2x5IHJlc29sdmVkIGZhY3RvcnkgJiBpbmplY3Rvci5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVZpZXc8VCwgVSBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8VD4+KHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGU6VGVtcGxhdGVSZWY8VT4sIGNvbnRleHQ6VSk6dm9pZCB7XG4gICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3PFU+KHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW50byB0aGUgc3BlY2lmaWVkIHZpZXcgY29udGFpbmVyLlxuICAgIHB1YmxpYyBhdHRhY2hUb1ZpZXc8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgICBwdWJsaWMgYXR0YWNoVG9BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIERldGFjaGVzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBkZXRhY2hGcm9tQXBwbGljYXRpb248VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBzcGVjaWZpZWQgRE9NIGVsZW1lbnQuXG4gICAgcHVibGljIG1vdmVUb0VsZW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgZWxlbWVudDpFbGVtZW50KTp2b2lkIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTW92ZXMgdGhlIGNvbXBvbmVudCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICBwdWJsaWMgbW92ZVRvRG9jdW1lbnRCb2R5PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLm1vdmVUb0VsZW1lbnQoY29tcG9uZW50UmVmLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2hGcm9tRG9jdW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAvLyBXZSBjYW4ndCB1c2UgYGVsZW1lbnQucmVtb3ZlKClgIGR1ZSB0byBsYWNrIG9mIElFMTEgc3VwcG9ydC5cbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgUG9wcGVyLCB7IE1vZGlmaWVycywgUG9wcGVyT3B0aW9ucywgUGxhY2VtZW50LCBEYXRhIH0gZnJvbSBcInBvcHBlci5qc1wiO1xuXG50eXBlIFBvcHBlck1vZGlmaWVycyA9IE1vZGlmaWVycyAmIHtcbiAgICBjb21wdXRlU3R5bGU/OntcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOmJvb2xlYW47XG4gICAgfTtcbn07XG50eXBlIFBvcHBlckluc3RhbmNlID0gUG9wcGVyICYge1xuICAgIG9wdGlvbnM6UG9wcGVyT3B0aW9ucyAmIHtcbiAgICAgICAgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSBcImF1dG9cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wIGxlZnRcIiB8IFwidG9wXCIgfCBcInRvcCByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gbGVmdFwiIHwgXCJib3R0b21cIiB8IFwiYm90dG9tIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgdG9wXCIgfCBcImxlZnRcIiB8IFwibGVmdCBib3R0b21cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQgdG9wXCIgfCBcInJpZ2h0XCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSB7XG4gICAgQXV0bzogXCJhdXRvXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wTGVmdDogXCJ0b3AgbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcDogXCJ0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BSaWdodDogXCJ0b3AgcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0VG9wOiBcImxlZnQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdEJvdHRvbTogXCJsZWZ0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbUxlZnQ6IFwiYm90dG9tIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tUmlnaHQ6IFwiYm90dG9tIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRUb3A6IFwicmlnaHQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodEJvdHRvbTogXCJyaWdodCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zaXRpb25Cb3VuZGluZ0JveCB7XG4gICAgd2lkdGg6bnVtYmVyO1xuICAgIGhlaWdodDpudW1iZXI7XG4gICAgdG9wOm51bWJlcjtcbiAgICBsZWZ0Om51bWJlcjtcbiAgICBib3R0b206bnVtYmVyO1xuICAgIHJpZ2h0Om51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KTpQbGFjZW1lbnQge1xuICAgIGlmICghcGxhY2VtZW50IHx8IHBsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bykge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgLy8gQWxsIHBsYWNlbWVudHMgb2YgdGhlIGZvcm1hdDogYGRpcmVjdGlvbiBhbGlnbm1lbnRgLCBlLmcuIGB0b3AgbGVmdGAuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBsYWNlbWVudC5zcGxpdChcIiBcIik7XG5cbiAgICAvLyBEaXJlY3Rpb24gYWxvbmUgY292ZXJzIGNhc2Ugb2YganVzdCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCwgYHJpZ2h0YC5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIC8vIEFkZCBgc3RhcnRgIC8gYGVuZGAgdG8gcGxhY2VtZW50LCBkZXBlbmRpbmcgb24gYWxpZ25tZW50IGRpcmVjdGlvbi5cbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInN0YXJ0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImVuZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEpvaW4gd2l0aCBoeXBoZW4gdG8gY3JlYXRlIFBvcHBlciBjb21wYXRpYmxlIHBsYWNlbWVudC5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCItXCIpIGFzIFBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wcGVyVG9QbGFjZW1lbnQocG9wcGVyOnN0cmluZyk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgIGlmICghcG9wcGVyIHx8IHBvcHBlciA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwb3BwZXIuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIiBcIikgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6RWxlbWVudFJlZjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3ViamVjdDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfcG9wcGVyOlBvcHBlckluc3RhbmNlO1xuICAgIHByaXZhdGUgX3BvcHBlclN0YXRlOkRhdGE7XG4gICAgcHJpdmF0ZSBfcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHByaXZhdGUgX2hhc0Fycm93OmJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYXJyb3dTZWxlY3RvcjpzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNBcnJvdyhoYXNBcnJvdzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0Fycm93ID0gaGFzQXJyb3c7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3R1YWxQbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wcGVyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHBlclRvUGxhY2VtZW50KHRoaXMuX3BvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wcGVyU3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYW5jaG9yOkVsZW1lbnRSZWYsIHN1YmplY3Q6RWxlbWVudFJlZiwgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50LCBhcnJvd1NlbGVjdG9yPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgdGhpcy5fYXJyb3dTZWxlY3RvciA9IGFycm93U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnMgPSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBncHVBY2NlbGVyYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5fYXJyb3dTZWxlY3RvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIGZuOiAoZGF0YTpQb3BwZXIuRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIubGVmdCArPSBvZmZzZXRzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyLnRvcCArPSBvZmZzZXRzLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9hcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFRvUG9wcGVyKHRoaXMuX3BsYWNlbWVudCksXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiBpbml0aWFsID0+IHRoaXMuX3BvcHBlclN0YXRlID0gaW5pdGlhbCxcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogdXBkYXRlID0+IHRoaXMuX3BvcHBlclN0YXRlID0gdXBkYXRlXG4gICAgICAgICAgICB9KSBhcyBQb3BwZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0cygpOlBvcHBlci5PZmZzZXQge1xuICAgICAgICBsZXQgbGVmdCA9IDA7IGxldCB0b3AgPSAwO1xuXG4gICAgICAgIC8vIFRvIHN1cHBvcnQgY29ycmVjdCBwb3NpdGlvbmluZyBmb3IgYWxsIHBvcHVwIHNpemVzIHdlIHNob3VsZCBjYWxjdWxhdGUgb2Zmc2V0IHVzaW5nIGVtXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgIC8vIFRoZSBTZW1hbnRpYyBVSSBwb3B1cCBhcnJvdyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSAwLjcxNDI4NTcxZW0gYW5kIHRoZSBtYXJnaW4gZnJvbSB0aGUgcG9wdXAgZWRnZSBpcyAxZW1cbiAgICAgICAgY29uc3QgYXJyb3dDZW50ZXIgPSAoMC43MTQyODU3MSAvIDIgKyAxKSAqIGZvbnRTaXplO1xuXG4gICAgICAgIGlmICh0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDw9IGFycm93Q2VudGVyICogMikge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yQ2VudGVyV2lkdGggPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQgfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFuY2hvckNlbnRlcldpZHRoIC0gYXJyb3dDZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BSaWdodCB8fCB0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVyV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gYXJyb3dDZW50ZXIgKiAyKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3JDZW50ZXJIZWlnaHQgPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5MZWZ0VG9wIHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuUmlnaHRUb3ApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3JDZW50ZXJIZWlnaHQgLSBhcnJvd0NlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkxlZnRCb3R0b20gfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5SaWdodEJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5leHBvcnQgdHlwZSBQb3B1cFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJsYXJnZVwiIHwgXCJodWdlXCI7XG5leHBvcnQgdHlwZSBQb3B1cFdpZHRoID0gXCJ3aWRlXCIgfCBcInZlcnkgd2lkZVwiICB8IFwiZmxvd2luZ1wiO1xuXG5leHBvcnQgY29uc3QgUG9wdXBUcmlnZ2VyID0ge1xuICAgIEhvdmVyOiBcImhvdmVyXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIENsaWNrOiBcImNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgRm9jdXM6IFwiZm9jdXNcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgTWFudWFsOiBcIm1hbnVhbFwiIGFzIFBvcHVwVHJpZ2dlclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBDb25maWcge1xuICAgIGhlYWRlcj86c3RyaW5nO1xuICAgIHRleHQ/OnN0cmluZztcbiAgICBwbGFjZW1lbnQ/OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHRyaWdnZXI/OlBvcHVwVHJpZ2dlcjtcbiAgICBpc0ludmVydGVkPzpib29sZWFuO1xuICAgIGRlbGF5PzpudW1iZXI7XG4gICAgaXNCYXNpYz86Ym9vbGVhbjtcbiAgICB0cmFuc2l0aW9uPzpzdHJpbmc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzpudW1iZXI7XG4gICAgaXNGbG93aW5nPzpib29sZWFuO1xuICAgIGlzSW5saW5lPzpib29sZWFuO1xuICAgIHBhcmVudD86RWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHNpemU6UG9wdXBTaXplO1xuICAgIHB1YmxpYyB3aWR0aDpQb3B1cFdpZHRoO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Zsb3dpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbmxpbmU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgcGFyZW50OkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5pc0Zsb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0lubGluZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSwgSUR5bmFtaWNDbGFzc2VzIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBwb3B1cFwiXG4gICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgI2NvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLnRlbXBsYXRlICYmICghIWNvbmZpZy5oZWFkZXIgfHwgISFjb25maWcudGV4dClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiICpuZ0lmPVwiY29uZmlnLmhlYWRlclwiPnt7IGNvbmZpZy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBjb25maWcudGV4dCB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cblxuICAgIDxzdWktcG9wdXAtYXJyb3cgKm5nSWY9XCIhY29uZmlnLmlzQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgIFtpbnZlcnRlZF09XCJjb25maWcuaXNJbnZlcnRlZFwiPjwvc3VpLXBvcHVwLWFycm93PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi51aS5wb3B1cCB7XG4gICAgLyogQXV0b2ZpdCBwb3B1cCB0byB0aGUgY29udGVudHMuICovXG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udWkuYW5pbWF0aW5nLnBvcHVwIHtcbiAgICAvKiBXaGVuIHRoZSBwb3B1cCBpcyBhbmltYXRpbmcsIGl0IG1heSBub3QgaW5pdGlhbGx5IGJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLlxuICAgICAgIFRoaXMgZmlyZXMgYSBtb3VzZSBldmVudCwgY2F1c2luZyB0aGUgYW5jaG9yJ3MgbW91c2VsZWF2ZSB0byBmaXJlIC0gbWFraW5nIHRoZSBwb3B1cCBmbGlja2VyLlxuICAgICAgIFNldHRpbmcgcG9pbnRlci1ldmVudHMgdG8gbm9uZSB3aGlsZSBhbmltYXRpbmcgZml4ZXMgdGhpcyBidWcuICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS5wb3B1cDo6YmVmb3JlIHtcbiAgICAvKiBIaWRlIHRoZSBTZW1hbnRpYyBVSSBDU1MgYXJyb3cuICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogT2Zmc2V0IHBvcHVwIGJ5IDAuNzVlbSBhYm92ZSBhbmQgYmVsb3cgd2hlbiBwbGFjZWQgJ3ZlcnRpY2FsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cInRvcFwiXSxcbi51aS5wb3B1cFtkaXJlY3Rpb249XCJib3R0b21cIl0ge1xuICAgIG1hcmdpbi10b3A6IDAuNzVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gZWl0aGVyIHNpZGUgd2hlbiBwbGFjZWQgJ2hvcml6b250YWxseScuICovXG4udWkucG9wdXBbZGlyZWN0aW9uPVwibGVmdFwiXSxcbi51aS5wb3B1cFtkaXJlY3Rpb249XCJyaWdodFwiXSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwIGltcGxlbWVudHMgSVBvcHVwIHtcbiAgICAvLyBDb25maWcgc2V0dGluZ3MgZm9yIHRoaXMgcG9wdXAuXG4gICAgcHVibGljIGNvbmZpZzpUZW1wbGF0ZVBvcHVwQ29uZmlnPGFueT47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG4gICAgcHVibGljIHBvc2l0aW9uaW5nU2VydmljZTpQb3NpdGlvbmluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfYW5jaG9yOkVsZW1lbnRSZWY7XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBwb3B1cCBpcyBvcGVuIGludGVybmFsbHkuXG4gICAgcHJpdmF0ZSBfaXNPcGVuOmJvb2xlYW47XG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGNhbmNlbGxpbmcgcG9wdXAgY2xvc2UuXG4gICAgcHVibGljIGNsb3NpbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIHBvcHVwIG9wZW5zIChhbmQgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQpLlxuICAgIHB1YmxpYyBvbk9wZW46RXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIC8vIEZpcmVzIHdoZW4gdGhlIHBvcHVwIGNsb3NlcyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25DbG9zZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIC8vIGBFbGVtZW50UmVmYCBmb3IgdGhlIHBvc2l0aW9uaW5nIHN1YmplY3QuXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9jb250YWluZXI6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuY2hvciA9IGFuY2hvcjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gKGB0b3BgLCBgbGVmdGAsIGByaWdodGAsIGBib3R0b21gKSBvZiB0aGUgY3VycmVudCBwbGFjZW1lbnQuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCBkaXJlY3Rpb24gYXR0cmlidXRlIGJlZm9yZSBwb3BwZXIgaW5pdCB0byBhbGxvdyBjb3JyZWN0IHBvc2l0aW9uaW5nXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgYWxpZ25tZW50IChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmFsaWdubWVudF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0ludmVydGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmludmVydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNCYXNpYykge1xuICAgICAgICAgICAgY2xhc3Nlcy5iYXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzRmxvd2luZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5mbG93aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuY29uZmlnLndpZHRoXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gb3BlbiBpZiBjdXJyZW50bHkgY2xvc2VkLlxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwb3NpdGlvbmluZyBzZXJ2aWNlIGFmdGVyIGEgYnJpZWYgZGVsYXkuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZ1NlcnZpY2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCIuZHluYW1pYy5hcnJvd1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZS5oYXNBcnJvdyA9ICF0aGlzLmNvbmZpZy5pc0Jhc2ljO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgb3BlbmluZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBvcGVuLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25PcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGNsb3NlIGlmIGN1cnJlbnRseSBvcGVuLlxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgb3RoZXIgdHJhbnNpdGlvbnMsIGFuZCBpbml0aWF0ZSB0aGUgY2xvc2luZyB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy5jb25maWcudHJhbnNpdGlvbiwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGNsb3NpbmcgdGltZXIuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zaW5nVGltZW91dCk7XG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgY2xvc2luZyB0aW1lciwgdGhhdCBmaXJlcyB0aGUgYG9uQ2xvc2VgIGV2ZW50IGFmdGVyIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAgICAgICAgICB0aGlzLmNsb3NpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkNsb3NlLmVtaXQoKSwgdGhpcy5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gRmluYWxseSwgc2V0IHRoZSBwb3B1cCB0byBiZSBjbG9zZWQuXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBwb3B1cCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgSVBvcHVwTGlmZWN5Y2xlIH0gZnJvbSBcIi4vcG9wdXAtbGlmZWN5Y2xlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwIHtcbiAgICBvcGVuKCk6dm9pZDtcbiAgICBjbG9zZSgpOnZvaWQ7XG4gICAgdG9nZ2xlKCk6dm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVBvcHVwQ29udHJvbGxlciBpbXBsZW1lbnRzIElQb3B1cCwgT25EZXN0cm95IHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBwb3B1cCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlQb3B1cD47XG5cbiAgICAvLyBSZXR1cm5zIGdlbmVyYXRlZCBwb3B1cCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IHBvcHVwKCk6U3VpUG9wdXAge1xuICAgICAgICAvLyBVc2Ugbm9uLW51bGwgYXNzZXJ0aW9uIGFzIHdlIG9ubHkgYWNjZXNzIHRoaXMgd2hlbiBhIHBvcHVwIGV4aXN0cy5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgZGVsYXllZCBwb3B1cCBvcGVuLlxuICAgIHByaXZhdGUgX29wZW5pbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZG9jdW1lbnQgY2xpY2sgaGFuZGxlci5cbiAgICBwcml2YXRlIF9kb2N1bWVudExpc3RlbmVyOigoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFN1aVBvcHVwIGNvbXBvbmVudCBhbmQgYXR0YWNoIGl0IHRvIHRoZSBhcHBsaWNhdGlvbiB2aWV3LlxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChTdWlQb3B1cCk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIHBvcHVwIHdpdGggcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICAvLyBXaGVuIHRoZSBwb3B1cCBpcyBjbG9zZWQgKG9uQ2xvc2UgZmlyZXMgb24gYW5pbWF0aW9uIGNvbXBsZXRlKSxcbiAgICAgICAgdGhpcy5wb3B1cC5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFudXAoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc/OklQb3B1cENvbmZpZyk6dm9pZCB7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wb3B1cC5jb25maWcsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRlbGF5ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBvcGVuaW5nIHRpbWVyLlxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkgaW50ZXJ2YWwuXG4gICAgICAgIHRoaXMuX29wZW5pbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuKCksIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGdlbmVyYXRlZCBjb21wb25lbnQgdG8gdGhlIGN1cnJlbnQgYXBwbGljYXRpb24uXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZiwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9wdXAuY29uZmlnLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZiwgdGhpcy5wb3B1cC5jb25maWcucGFyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGdlbmVyYXRlZCBlbGVtZW50IHRvIHRoZSBib2R5IHRvIGF2b2lkIGFueSBwb3NpdGlvbmluZyBpc3N1ZXMuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0RvY3VtZW50Qm9keSh0aGlzLl9jb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gV2UgZG8gaXQgaGVyZSBiZWNhdXNlIElFMTEgbG92ZXMgdG8gY29tcGxhaW4uXG4gICAgICAgIHRoaXMucG9wdXAuYW5jaG9yID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBoYW5kbGUgY2xvc2luZy5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZTpNb3VzZUV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGUpKTtcblxuICAgICAgICAvLyBTdGFydCBwb3B1cCBvcGVuIHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMucG9wdXAub3BlbigpO1xuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25PcGVuO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIgdG8gc3RvcCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciBjbG9zZSBoYXMgYmVlbiBjYWxsZWQuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgLy8gU3RhcnQgcG9wdXAgY2xvc2UgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25DbG9zZTtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxuICAgIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuQ2xpY2sgfHxcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcblxuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHJlcXVpcmUgYSB0b2dnbGUsIHJhdGhlciB0aGFuIGp1c3Qgb3BlbmluZyB0aGUgcG9wdXAgZWFjaCB0aW1lLlxuICAgICAgICAgICAgdGhpcy50b2dnbGVEZWxheWVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzICYmXG4gICAgICAgICAgICAgICAgICAgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSkge1xuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHdpdGggYSBmb2N1cyB0cmlnZ2VyIHJlcXVpcmVzIGFuIG9wZW4gKGFzIGZvY3VzIGlzbid0IGV2ZXIgbG9zdCBvbiByZXBlYXRlZCBjbGljaykuXG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgdHJpZ2dlciBpcyBvdXRzaWRlIGNsaWNrLFxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmICYmIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgcG9wdXAgaWYgdGhlIGNsaWNrIGlzIG91dHNpZGUgb2YgdGhlIHBvcHVwIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoISh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6YW55KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UgJiYgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBUeXBlLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlcjxUPiBleHRlbmRzIFN1aVBvcHVwQ29udHJvbGxlciB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgY29udGVudCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29udGVudENvbXBvbmVudFJlZj86Q29tcG9uZW50UmVmPFQ+O1xuXG4gICAgcHVibGljIGdldCBjb21wb25lbnRJbnN0YW5jZSgpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnQ6VHlwZTxUPixcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnQgYXMgVHlwZTxUPik7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLCB0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFudXAoKTp2b2lkIHtcbiAgICAgICAgc3VwZXIuY2xlYW51cCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciwgSVBvcHVwIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgSUltcGxpY2l0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4gZXh0ZW5kcyBJSW1wbGljaXRDb250ZXh0PElQb3B1cD4ge1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBJUG9wdXBDb25maWcge1xuICAgIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBwdWJsaWMgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVRlbXBsYXRlUG9wdXBDb25maWc8VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5jb25maWd1cmUoY29uZmlnKTtcblxuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRlbXBsYXRlLCBpbmplY3QgaXQgaW50byB0aGUgdmlldy5cbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5wb3B1cCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nUGxhY2VtZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcG9wdXAtYXJyb3dcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImR5bmFtaWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgKm5nSWY9XCJhbGlnbm1lbnQgPT0gJ2NlbnRlcidcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdGF0aWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgW2F0dHIuYWxpZ25tZW50XT1cImFsaWdubWVudFwiICpuZ0lmPVwiYWxpZ25tZW50ICE9ICdjZW50ZXInXCI+PC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwLjcxNDI4NTcxZW07XG4gICAgaGVpZ2h0OiAwLjcxNDI4NTcxZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG46aG9zdC5pbnZlcnRlZCAuYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICMxYjFjMWQ7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl0ge1xuICAgIGJvdHRvbTogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXSB7XG4gICAgcmlnaHQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cImxlZnRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdIHtcbiAgICBsZWZ0OiAxZW07XG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cInRvcFwiXSB7XG4gICAgdG9wOiAxZW07XG4gICAgYm90dG9tOiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxZW07XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBBcnJvdyB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaW52ZXJ0ZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbnZlcnRlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFsaWdubWVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29uZmlnIGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBXZSB1c2UgYW4gZW1wdHkgY29uc3RydWN0b3IgdG8gZW5zdXJlIEFuZ3VsYXIgREkgd29ya3MgY29ycmVjdGx5LlxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgVXRpbCwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBQb3B1cFNpemUsIFBvcHVwV2lkdGggfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW5saW5lKGlubGluZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGlubGluZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRmxvd2luZyhmbG93aW5nOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNGbG93aW5nID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZsb3dpbmcpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBQbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBXaWR0aCh3aWR0aDpQb3B1cFdpZHRoKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwU2l6ZShzaXplOlBvcHVwU2l6ZSkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcG9wdXBUcmlnZ2VyKCk6UG9wdXBUcmlnZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwb3B1cFRyaWdnZXIodHJpZ2dlcjpQb3B1cFRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGVDb250ZXh0KGNvbnRleHQ6VCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cENvbmZpZyhjb25maWc6SVRlbXBsYXRlUG9wdXBDb25maWc8VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwb3B1cERlZmF1bHRzOlN1aVBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIG5ldyBQb3B1cENvbmZpZyhwb3B1cERlZmF1bHRzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBBcnJvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXAtYXJyb3dcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlQb3B1cERpcmVjdGl2ZSxcbiAgICAgICAgU3VpUG9wdXBBcnJvdyxcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpUG9wdXBEaXJlY3RpdmUsXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpUG9wdXBDb25maWdcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlQb3B1cFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWlQb3B1cE1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LFxuICAgIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSwgQ3VzdG9tVmFsaWRhdG9yLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgS2V5Q29kZVxufSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXIsIFBvcHVwQWZ0ZXJPcGVuLCBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyLCBEYXRlcGlja2VyTW9kZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnLCBZZWFyQ29uZmlnLCBNb250aENvbmZpZywgRGF0ZXRpbWVDb25maWcsIFRpbWVDb25maWcsIERhdGVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVxuICAgICAgIGV4dGVuZHMgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFN1aURhdGVwaWNrZXI+XG4gICAgICAgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8RGF0ZT4sIElDdXN0b21WYWxpZGF0b3JIb3N0LCBPbkNoYW5nZXMsIFBvcHVwQWZ0ZXJPcGVuIHtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb2RlOkRhdGVwaWNrZXJNb2RlO1xuICAgIHB1YmxpYyBjb25maWc6Q2FsZW5kYXJDb25maWc7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNb2RlXCIpXG4gICAgcHVibGljIGdldCBtb2RlKCk6RGF0ZXBpY2tlck1vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1vZGUobW9kZTpEYXRlcGlja2VyTW9kZSkge1xuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZSB8fCBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlllYXI6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgWWVhckNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5Nb250aDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBNb250aENvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRlOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRlQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGV0aW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgVGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VySW5pdGlhbERhdGVcIilcbiAgICBwdWJsaWMgaW5pdGlhbERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNYXhEYXRlXCIpXG4gICAgcHVibGljIG1heERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNaW5EYXRlXCIpXG4gICAgcHVibGljIG1pbkRhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJGaXJzdERheU9mV2Vla1wiKVxuICAgIHB1YmxpYyBmaXJzdERheU9mV2Vlaz86bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzO1xuXG4gICAgQElucHV0KFwicGlja2VyTG9jYWxlT3ZlcnJpZGVzXCIpXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElEYXRlcGlja2VyTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwiZGF0ZXBpY2tlclwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJQbGFjZW1lbnRcIilcbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvbkR1cmF0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclBvcHVwUGFyZW50XCIpXG4gICAgcHVibGljIHNldCBwb3B1cFBhcmVudChlbGVtZW50OkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KFwicGlja2VyU2VsZWN0ZWREYXRlQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uU2VsZWN0ZWREYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIEBPdXRwdXQoXCJwaWNrZXJWYWxpZGF0b3JDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25WYWxpZGF0b3JDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcHVibGljIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBTdWlEYXRlcGlja2VyLCBuZXcgUG9wdXBDb25maWcoe1xuICAgICAgICAgICAgdHJpZ2dlcjogUG9wdXBUcmlnZ2VyLkZvY3VzLFxuICAgICAgICAgICAgcGxhY2VtZW50OiBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGUgcG9wdXAgaXMgZHJhd24gY29ycmVjdGx5IChpLmUuIG5vIGJvcmRlcikuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcInVpXCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJjYWxlbmRhclwiKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5tb2RlID0gRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVwT25PcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubG9jYWxlVmFsdWVzID0gdGhpcy5sb2NhbGVWYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuY3VycmVudERhdGUgPSB0aGlzLmluaXRpYWxEYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdERheU9mV2VlayAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuZmlyc3REYXlPZldlZWsgPSB0aGlzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UucmVzZXQoKTtcblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm9uRGF0ZUNoYW5nZS5zdWJzY3JpYmUoKGQ6RGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyh7IG1heERhdGUsIG1pbkRhdGUsIG1vZGUgfTpTaW1wbGVDaGFuZ2VzKTp2b2lkIHtcbiAgICAgICAgaWYgKG1heERhdGUgfHwgbWluRGF0ZSB8fCBtb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBXZSBwb3N0IHByb2Nlc3MgdGhlIG1pbiAmIG1heCBkYXRlIGJlY2F1c2Ugc29tZXRpbWVzIHRoaXMgcHV0cyB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBhbGxvd2VkIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHRoaXMubWluRGF0ZSAmJiB2YWx1ZSA8IHRoaXMubWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1pbkRhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWluRGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1heERhdGUgJiYgdmFsdWUgPiB0aGlzLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWlNYXhEYXRlOiB7IHJlcXVpcmVkOiB0aGlzLm1heERhdGUsIGFjdHVhbDogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5ndWxhciBleHBlY3RzIG51bGxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW51bGwta2V5d29yZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpEYXRlIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgaG9zdDogeyBcIihwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8RGF0ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBob3N0OlN1aURhdGVwaWNrZXJEaXJlY3RpdmUpIHsgc3VwZXIoaG9zdCk7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgaG9zdDogeyBcIihwaWNrZXJWYWxpZGF0b3JDaGFuZ2UpXCI6IFwib25WYWxpZGF0b3JDaGFuZ2UoKVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvciBleHRlbmRzIEN1c3RvbVZhbGlkYXRvcjxTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuIiwiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi8uLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgSW50ZXJuYWxEYXRlUGFyc2VyLCBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIGJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmltcG9ydCBcIi4uL2hlbHBlcnMvaXMtd2Vidmlld1wiO1xuaW1wb3J0ICogYXMgaXNVQVdlYlZpZXcgZnJvbSBcImlzLXVhLXdlYnZpZXdcIjtcbmNvbnN0IGlzV2ViVmlldyA9IGlzVUFXZWJWaWV3W1wiZGVmYXVsdFwiXSB8fCBpc1VBV2ViVmlldztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbc3VpRGF0ZXBpY2tlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX3VzZU5hdGl2ZU9uTW9iaWxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJwaWNrZXJVc2VOYXRpdmVPbk1vYmlsZVwiKVxuICAgIHB1YmxpYyBnZXQgdXNlTmF0aXZlT25Nb2JpbGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdXNlTmF0aXZlT25Nb2JpbGUoZmFsbGJhY2s6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZSA9IGZhbGxiYWNrO1xuICAgICAgICBjb25zdCBpc09uTW9iaWxlID0gYm93c2VyLm1vYmlsZSB8fCBib3dzZXIudGFibGV0IHx8IGlzV2ViVmlldyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgJiYgaXNPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBmYWxsYmFja0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2tBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmYWxsYmFja0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9mYWxsYmFja0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gSWYgdGhlIGZhbGxiYWNrIGlzIGFjdGl2ZSwgdGhlbiB0aGUgdHJpZ2dlciBtdXN0IGJlIG1hbnVhbCBzbyB0aGUgZGF0ZXBpY2tlciBuZXZlciBvcGVucy5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdGhpcy5mYWxsYmFja0FjdGl2ZSA/IFBvcHVwVHJpZ2dlci5NYW51YWwgOiBQb3B1cFRyaWdnZXIuRm9jdXM7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUgKHRoaXMgd2lsbCBpbnNlcnQgdGhlIGBUYCBhcyByZXF1aXJlZCkuXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFyc2VyKCk6RGF0ZVBhcnNlciB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludGVybmFsRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubW9kZSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMuZm9ybWF0c1t0aGlzLmRhdGVwaWNrZXIubW9kZV0sIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2N1cnJlbnRJbnB1dFZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9sYXN0VXBkYXRlVHlwZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlU3RyaW5nKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnR5cGVcIilcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci5jb25maWcuZmFsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidGV4dFwiO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWF4XCIpXG4gICAgcHVibGljIGdldCBtYXgoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1heCBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBPdXIgRGF0ZXBpY2tlciB3aWxsIGFsd2F5cyBjaG9vc2UgdGhlIDFzdCBkYXRlIG9uIHRoZSBwcm92aWRlZCBwcmVjaXNpb24sXG4gICAgICAgICAgICAvLyBtZWFuaW5nIGFueXRoaW5nIGJlbG93IHRoZSBtYXhEYXRlIHdpbGwgd29yaywgaGVuY2UgZW5kT2YuXG4gICAgICAgICAgICBjb25zdCBtYXggPSBEYXRlVXRpbC5lbmRPZih0aGlzLmRhdGVwaWNrZXIuY29uZmlnLnByZWNpc2lvbiwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1heERhdGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWF4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWluXCIpXG4gICAgcHVibGljIGdldCBtaW4oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1pbiBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBXZSB1c2UgMSBtaW51dGUgYmVmb3JlIHRoZSBuZXh0IGRhdGUgYXQgdGhlIGNvbmZpZ3VyZWQgcHJlY2lzaW9uIHNpbmNlXG4gICAgICAgICAgICAvLyBvdXIgRGF0ZXBpY2tlciBwaWNrcyB0aGUgZmlyc3QgYXZhaWxhYmxlIGRhdGUgYXQgdGhhdCBwcmVjaXNpb24uXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1pbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyBkYXRlcGlja2VyOlN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgICAgQEhvc3QoKSBwdWJsaWMgdmFsdWVBY2Nlc3NvcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGRhdGVwaWNrZXIgdmFsdWUgdXBkYXRlcywgdXBkYXRlIHRoZSBpbnB1dCB0ZXh0IGFsb25nc2lkZSBpdC5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uU2VsZWN0ZWREYXRlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuXG4gICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIGlmIGl0IGlzIGRpZmZlcmVudCB0byB3aGF0IGl0J3MgYmVpbmcgdXBkYXRlZCB0by5cbiAgICAgICAgLy8gVGhpcyBpcyBzbyB0aGF0IHRoZSBlZGl0aW5nIHBvc2l0aW9uIGlzbid0IGNoYW5nZWQgd2hlbiBtYW51YWxseSB0eXBpbmcgdGhlIGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5fbGFzdFVwZGF0ZVR5cGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidmFsdWVcIiwgdmFsdWUgfHwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcbiAgICBwdWJsaWMgdHlwZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbnB1dFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBzZWxlY3RlZCBkYXRlIGlmIG5vIGRhdGUgd2FzIGVudGVyZWQgbWFudWFsbHkuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VyLnBhcnNlKHZhbHVlLCB0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZWQuZ2V0VGltZSgpKSAmJiB2YWx1ZSA9PT0gdGhpcy5wYXJzZXIuZm9ybWF0KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZShwYXJzZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5vblRvdWNoZWQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZURhdGVTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjYWxjU3RhcnQoc3RhcnQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uTW9udGgsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSk7XG4gICAgICAgIG1vbnRoU3RhcnQuc2V0RGF0ZSgoMSAtIG1vbnRoU3RhcnQuZ2V0RGF5KCkgKyB0aGlzLnNlcnZpY2UuZmlyc3REYXlPZldlZWsgLSA3KSAlIDcpO1xuICAgICAgICByZXR1cm4gbW9udGhTdGFydDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IGl0ZW0uZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRNb250aCgpICE9PSBiYXNlRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1kYXRlLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHNldmVuIGNvbHVtbiBkYXlcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiN1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c1wiPnt7IGRheSB9fTwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyRGF0ZVZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGF5cygpOnN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMud2Vla2RheXNOYXJyb3c7XG4gICAgICAgIHJldHVybiBkYXlzLm1hcCgoZCwgaSkgPT4gZGF5c1soaSArIHRoaXMuc2VydmljZS5maXJzdERheU9mV2VlaykgJSBkYXlzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMubW9udGgsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZSwgbmV3IENhbGVuZGFyUmFuZ2VEYXRlU2VydmljZShEYXRlUHJlY2lzaW9uLk1vbnRoLCA2LCA3KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZUhvdXJTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICBjb25zdCBjdXN0b21Gb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IG5ldyBEYXRlUGFyc2VyKGN1c3RvbUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KGl0ZW0uZGF0ZSk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1ob3VyLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIGZvdXIgY29sdW1uIGhvdXJcIj5cbjx0aGVhZCAqbmdJZj1cInNlcnZpY2UuY29uZmlnLm1vZGUgIT0gMVwiPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI0XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckhvdXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcblxuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMuZGF0ZSwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBuZXcgQ2FsZW5kYXJSYW5nZUhvdXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGF0ZSwgNiwgNCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2RlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZU1pbnV0ZVNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNhbGNTdGFydChzdGFydDpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5Ib3VyLCBEYXRlVXRpbC5jbG9uZShzdGFydCksIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjRGF0ZXMoc3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQoRGF0ZVByZWNpc2lvbi5NaW51dGUsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSwgaSAqIDUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4gbWludXRlXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyTWludXRlVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5jb25maWcubW9kZSAhPT0gQ2FsZW5kYXJNb2RlLlRpbWVPbmx5KSB7XG4gICAgICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMuZGF0ZXRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIoZGF0ZVRpbWVGb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgICAgIGNvbnN0IHRpbWVGb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUucmVwbGFjZSgvW21zXS9nLCBcIjBcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGltZUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgbmV3IENhbGVuZGFyUmFuZ2VNaW51dGVTZXJ2aWNlKERhdGVQcmVjaXNpb24uSG91ciwgNCwgMykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VNb250aFNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLm1vbnRoc1Nob3J0W2l0ZW0uZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLW1vbnRoLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiBtb250aFwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyB5ZWFyIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhck1vbnRoVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCB5ZWFyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy55ZWFyLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBuZXcgQ2FsZW5kYXJSYW5nZU1vbnRoU2VydmljZShEYXRlUHJlY2lzaW9uLlllYXIsIDQsIDMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VZZWFyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IFV0aWwuU3RyaW5nLnBhZExlZnQoaXRlbS5kYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSwgNCwgXCIwXCIpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gaXRlbS5kYXRlLmdldEZ1bGxZZWFyKCkgPj0gdGhpcy5jYWxjU3RhcnQoYmFzZURhdGUpLmdldEZ1bGxZZWFyKCkgKyAxMDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci15ZWFyLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiB5ZWFyXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHBhZChkZWNhZGVTdGFydCkgfX0gLSB7eyBwYWQoZGVjYWRlU3RhcnQgKyAxMCkgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyWWVhclZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGVjYWRlU3RhcnQoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWxcbiAgICAgICAgICAgIC5zdGFydE9mKERhdGVQcmVjaXNpb24uRGVjYWRlLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKVxuICAgICAgICAgICAgLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLlllYXIsIG5ldyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EZWNhZGUsIDQsIDMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFkKHllYXI6bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gVXRpbC5TdHJpbmcucGFkTGVmdCh5ZWFyLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpUG9wdXBNb2R1bGUgfSBmcm9tIFwiLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJWaWV3VGl0bGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGVcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyWWVhclZpZXcgfSBmcm9tIFwiLi92aWV3cy95ZWFyLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyTW9udGhWaWV3IH0gZnJvbSBcIi4vdmlld3MvbW9udGgtdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckRhdGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvZGF0ZS12aWV3XCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckhvdXJWaWV3IH0gZnJvbSBcIi4vdmlld3MvaG91ci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1pbnV0ZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9taW51dGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9pbnB1dC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7XG4gICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvclxufSBmcm9tIFwiLi9kaXJlY3RpdmVzL2RhdGVwaWNrZXIuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpQ2FsZW5kYXJJdGVtLFxuXG4gICAgICAgIFN1aUNhbGVuZGFyVmlld1RpdGxlLFxuICAgICAgICBTdWlDYWxlbmRhclllYXJWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhck1vbnRoVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJEYXRlVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJIb3VyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNaW51dGVWaWV3LFxuXG4gICAgICAgIFN1aURhdGVwaWNrZXIsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgW2NsYXNzLmNvbnRlbnRdPVwid3JhcENvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QuZGltbWVyOm5vdCguaGlkZGVuKSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXIgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHByaXZhdGUgX2lzRGltbWVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGltbWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaW1tZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBjb25zdCBpc0RpbW1lZCA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkgd2hlbiBmaXJzdCBzZXR0aW5nIGRpbW1lZCwgdG8gZW5zdXJlIGluaXRpYWwgc3RhdGUgZG9lc24ndCB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoaXNEaW1tZWQsIFwiYmxvY2tcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRGltbWVkICE9PSBpc0RpbW1lZCkge1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwiZmFkZVwiLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgaXNEaW1tZWQgPyBUcmFuc2l0aW9uRGlyZWN0aW9uLkluIDogVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NsaWNrYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLyogSW50ZXJuYWwgZm9yIG5vdyAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdyYXBDb250ZW50OmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndyYXBDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlLmVtaXQodGhpcy5pc0RpbW1lZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlEaW1tZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRGltbWVyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXJNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IFwiaXRlbUNsaWNrXCIgfCBcIm91dHNpZGVDbGlja1wiIHwgXCJkaXNhYmxlZFwiO1xuXG4vLyBDcmVhdGVzIGVzc2VudGlhbGx5IGEgJ3N0cmluZycgZW51bS5cbmV4cG9ydCBjb25zdCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSB7XG4gICAgSXRlbUNsaWNrOiBcIml0ZW1DbGlja1wiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSxcbiAgICBPdXRzaWRlQ2xpY2s6IFwib3V0c2lkZUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIERpc2FibGVkOiBcImRpc2FibGVkXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlXG59O1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZXJ2aWNlIHtcbiAgICAvLyBPcGVuIHN0YXRlIG9mIHRoZSBkcm9wZG93blxuICAgIHB1YmxpYyBpc09wZW46Ym9vbGVhbjtcbiAgICAvLyBBbmltYXRpbmcgc3RhdGUgb2YgdGhlIGRyb3Bkb3duLlxuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIC8vIEVtaXR0ZXIgZm9yIHdoZW4gZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgIHB1YmxpYyBpc09wZW5DaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFNldHMgdGhlIFwiYXV0b2Nsb3NlXCIgbW9kZSBvZiB0aGUgZHJvcGRvd24gLSBpLmUuIHdoYXQgdXNlciBhY3Rpb24gY2F1c2VzIGl0IHRvIGF1dG9jbG9zZS5cbiAgICBwdWJsaWMgYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGU7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjb250YWluaW5nIGRyb3Bkb3duIHNvIHdlIGNhbiBvcGVuIGl0IGFzIG5lY2Vzc2FyeS5cbiAgICBwdWJsaWMgcGFyZW50PzpEcm9wZG93blNlcnZpY2U7XG4gICAgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGRyb3Bkb3ducyBuZXN0ZWQgaW4gdGhpcyBvbmUgc28gd2UgY2FuIGNsb3NlIHRoZW0gYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBjaGlsZHJlbjpEcm9wZG93blNlcnZpY2VbXTtcbiAgICBwdWJsaWMgZ2V0IGlzTmVzdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGF1dG9DbG9zZU1vZGU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmF1dG9DbG9zZU1vZGUgPSBhdXRvQ2xvc2VNb2RlO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3BlblN0YXRlKGlzT3Blbjpib29sZWFuLCByZWZsZWN0SW5QYXJlbnQ6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHN0YXRlIGlmIGl0IGhhcyBjaGFuZ2VkLCBhbmQgdGhlIGRyb3Bkb3duIGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhIWlzT3BlbjtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gV2UgbXVzdCBkZWxheSB0aGUgZW1pdHRpbmcgdG8gYXZvaWQgdGhlICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIEFuZ3VsYXIgZXJyb3JzLlxuICAgICAgICAgICAgdGhpcy5kZWxheSgoKSA9PiB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgY2hpbGQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgY2xvc2VzLlxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjID0+IGMuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiByZWZsZWN0SW5QYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBwYXJlbnQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgb3BlbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT3BlbiAhPT0gaXNPcGVuICYmIHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGhhcyBjaGFuZ2VkLCBidXQgdGhlIGRyb3Bkb3duIGlzIGRpc2FibGVkLCByZS1lbWl0IHRoZSBvcmlnaW5hbCBpc09wZW4gdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgIT09IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICghIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd24gYXMgaXQgaXMgbm93IGRpc2FibGVkXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSAhIWlzRGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlT3BlblN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLmlzT3Blbik7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgZHJvcGRvd24gc2VydmljZSBhcyBhIGNoaWxkIG9mIHRoaXMgc2VydmljZS5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGlsZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIHByb3ZpZGVkIGRyb3Bkb3duIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhcyBhIGNoaWxkLCBvciBpcyBhIGRlc2NlbmRhbnQgb2YgYSBjaGlsZC5cbiAgICBwdWJsaWMgaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQ6RHJvcGRvd25TZXJ2aWNlKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IGNoaWxkIHx8ICEhdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLmZpbmQoYyA9PiAhIWMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAuZmluZChjQ2hpbGQgPT4gY0NoaWxkLmlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkKSkpO1xuICAgIH1cblxuICAgIC8vIFdpcGVzIGFueSBuZXN0ZWQgZGF0YSwgc28gYWxsIHNlcnZpY2VzIGNhbiBiZSBjbGVhbmx5IHJlYXR0YWNoZWQuXG4gICAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgYy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kIGZvciBkZWxheWluZyBhbiBldmVudCBpbnRvIHRoZSBuZXh0IHRpY2ssIHRvIGF2b2lkIEFuZ3VsYXIgXCJjaGFuZ2VkIGFmdGVyIGNoZWNrZWRcIiBlcnJvci5cbiAgICBwcml2YXRlIGRlbGF5KGNhbGxiYWNrOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBJQXVnbWVudGVkRWxlbWVudCwgS2V5Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbi8vIFBvbHlmaWxsIGZvciBJRVxuaW1wb3J0IFwiZWxlbWVudC1jbG9zZXN0XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIFdlIG11c3QgYXR0YWNoIHRvIGV2ZXJ5ICcuaXRlbScgYXMgQW5ndWxhciBkb2Vzbid0IHN1cHBvcnQgPiBzZWxlY3RvcnMuXG4gICAgc2VsZWN0b3I6IFwiLml0ZW1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgLy8gV2UgbXVzdCB1c2UgbmF0aXZlRWxlbWVudCBhcyBBbmd1bGFyIGRvZXNuJ3QgaGF2ZSBhIHdheSBvZiByZWFkaW5nIGNsYXNzIGluZm9ybWF0aW9uLlxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNTZWxlY3RlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFJlbmRlcmVyIGlzIHVzZWQgdG8gZW5hYmxlIGEgZHluYW1pYyBjbGFzcyBuYW1lLlxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGNsYXNzIG5hbWUgdXNlZCBmb3IgYSAnc2VsZWN0ZWQnIGl0ZW0uXG4gICAgcHVibGljIHNlbGVjdGVkQ2xhc3M6c3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IFN1aURyb3Bkb3duTWVudSkpXG4gICAgcHVibGljIGNoaWxkRHJvcGRvd25NZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGREcm9wZG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNoaWxkRHJvcGRvd25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1DbGljaygpOnZvaWQge1xuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bk1lbnVdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkRyb3Bkb3duU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZSh2YWx1ZTpEcm9wZG93blNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0lzT3BlbiA9IHRoaXMuX3NlcnZpY2UuaXNPcGVuO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKGlzT3Blbjpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICE9PSBwcmV2aW91c0lzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIHRyYW5zaXRpb25zIGlmIHRoZSBvcGVuIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuX3NlcnZpY2UuaXNBbmltYXRpbmcgPSBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpdGVtIHNlbGVjdGlvbnMgd2hlbiBhIG5lc3RlZCBpdGVtIGlzIHNlbGVjdGVkIHRvIGF2b2lkIGluY29zaXN0ZW50IG9wZW4gc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c0lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnRFbGVtZW50KHZhbHVlOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4odmFsdWUubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhcmVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd25NZW51SXRlbSlcbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5SW50ZXJuYWw6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeU92ZXJyaWRlOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHB1YmxpYyBzZXQgaXRlbXMoaXRlbXM6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pdGVtc1F1ZXJ5KCk6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSB8fCB0aGlzLl9pdGVtc1F1ZXJ5SW50ZXJuYWw7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsaXN0IG9mIGl0ZW1zLCBpZ25vcmluZyB0aG9zZSB0aGF0IGFyZSBkaXNhYmxlZC5cbiAgICBwcml2YXRlIGdldCBfaXRlbXMoKTpTdWlEcm9wZG93bk1lbnVJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeS5maWx0ZXIoaSA9PiAhaS5pc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICAvLyBTdGFjayB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAvLyBTZWxlY3RlZCBpdGVtcyBsb3dlciBpbiB0aGUgc3RhY2sgYXJlIG5lY2Vzc2FyaWx5IHRoZSBwYXJlbnQgb2YgdGhlIGl0ZW0gb25lIGhpZ2hlci5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtczpTdWlEcm9wZG93bk1lbnVJdGVtW107XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSAxc3QgaXRlbSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudUF1dG9TZWxlY3RGaXJzdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVNlbGVjdGVkSXRlbUNsYXNzOnN0cmluZztcblxuICAgIHByaXZhdGUgX3BhcmVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGVzdHJveWVkIGJlZm9yZSBpdCBoYXMgYSBjaGFuY2UgdG8gYmUgZnVsbHkgaW5pdGlhbGlzZWQuXG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQgJiBNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSUF1Z21lbnRlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSBhbiBpdGVtIGlzIHNlbGVjdGVkLCB3ZSBjYW4gY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB0aGUgcm9vdCBkcm9wZG93biAoaS5lLiBub3QgbmVzdGVkIGRyb3Bkb3ducykgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5fc2VydmljZSAmJiB0aGlzLl9zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5fc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gU3RvcCBkb2N1bWVudCBldmVudHMgbGlrZSBzY3JvbGxpbmcgd2hpbGUgb3Blbi5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIS9pbnB1dC9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpICYmXG4gICAgICAgICAgICAgICAgW0tleUNvZGUuRXNjYXBlLCBLZXlDb2RlLkVudGVyLCBLZXlDb2RlLlVwLCBLZXlDb2RlLkRvd24sIEtleUNvZGUuTGVmdCwgS2V5Q29kZS5SaWdodF0uZmluZChrQyA9PiBrQyA9PT0gZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0cyB0aGUgdG9wIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgc3RhY2suXG4gICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIC8vIEtlZXBpbmcgdHJhY2sgb2YgdGhlIG1lbnUgY29udGFpbmluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQgYWxsb3dzIHVzIHRvIGVhc2lseSBkZXRlcm1pbmUgaXRzIHNpYmxpbmdzLlxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ29udGFpbmVyOlN1aURyb3Bkb3duTWVudSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb250YWluZXIgPSBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUgOiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2NhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG93biA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGJlbG93IHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIC8vIFVwIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYWJvdmUgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWRDb250YWluZXIudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB3ZSBhcmUgaW4gYW4gaW5wdXQsIHRvIHN0b3AganVtcGluZyB0byB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEVudGVyIDogaWYgdGhlIGl0ZW0gZG9lc24ndCBjb250YWluIGEgbmVzdGVkIGRyb3Bkb3duLCAnY2xpY2snIGl0LiBPdGhlcndpc2UsIGZhbGwgdGhyb3VnaCB0byAnUmlnaHQnIGFjdGlvbi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmICFzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wZXJmb3JtQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBjb250YWlucyBhIG5lc3RlZCBkcm9wZG93biwgb3BlbiB0aGUgZHJvcGRvd24gJiBzZWxlY3QgdGhlIDFzdCBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIExlZnQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiBhIG5lc3RlZCBkcm9wZG93biwgY2xvc2UgaXQgYW5kIHNlbGVjdCB0aGUgY29udGFpbmluZyBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTZWxlY3Rpb24oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBpLnNlbGVjdGVkQ2xhc3MgPSB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcztcbiAgICAgICAgICAgIGkuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEF1dG9zZWxlY3QgMXN0IGl0ZW0gaWYgcmVxdWlyZWQgJiBwb3NzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zWzBdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0odGhpcy5faXRlbXNbMF0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5faXRlbXNRdWVyeS5maXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBpdGVtIHRvIG5leHQgYmUgc2VsZWN0ZWQsIGJhc2VkIG9uIHRoZSBrZXlib2FyZCBpbnB1dCAmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkSXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtLCBrZXlDb2RlOktleUNvZGUpOlN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5faXRlbXNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoaSA9PiBpID09PSBzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb246U3VpRHJvcGRvd25NZW51SXRlbTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDpcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm9uZSBhcmUgc2VsZWN0ZWQsIHNlbGVjdCB0aGUgMXN0IGl0ZW0uIFNob3VsZCB0aGlzIGJlIGB0aGlzLml0ZW1zLmxhc3QgLSAxYD9cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSBhdCB0aGUgdXBkYXRlZCBpbmRleC4gVGhlIHx8IGlzIHRvIHN0b3AgdXMgc2VsZWN0aW5nIHBhc3QgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgaXRlbSBsaXN0LlxuICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLl9pdGVtc1tzZWxlY3RlZEluZGV4XSB8fCBzZWxlY3RlZEl0ZW07XG5cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24uaXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0obmV3U2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTZWxlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvSXRlbShpdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0pOnZvaWQge1xuICAgICAgICBjb25zdCBtZW51OkVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUmVjdDpDbGllbnRSZWN0ID0gaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWVudVJlY3QgPSBtZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBzY3JvbGxBbW91bnQgPSAwO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QuYm90dG9tIC0gbWVudVJlY3QuYm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC50b3AgPCBtZW51UmVjdC50b3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC50b3AgLSBtZW51UmVjdC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51LnNjcm9sbFRvcCArPSBNYXRoLnJvdW5kKHNjcm9sbEFtb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnkuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSXRlbXNDaGFuZ2VkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIHVzZSBgX2l0ZW1zYCByYXRoZXIgdGhhbiBgaXRlbXNgIGluIGNhc2Ugb25lIG9yIG1vcmUgaGF2ZSBiZWNvbWUgZGlzYWJsZWQuXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4vZHJvcGRvd24tbWVudVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcml2YXRlIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jaGlsZHJlbjpRdWVyeUxpc3Q8U3VpRHJvcGRvd24+O1xuXG4gICAgcHVibGljIGdldCBjaGlsZHJlbigpOlN1aURyb3Bkb3duW10ge1xuICAgICAgICAvLyBAQ29udGVudENoaWxkcmVuIGluY2x1ZGVzIHRoZSBjdXJyZW50IGVsZW1lbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmZpbHRlcihjID0+IGMgIT09IHRoaXMpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBUaGlzIGlzIHRvIGVuc3VyZSBuZXN0ZWQgZHJvcGRvd25zIGRvbid0IGdldCBtYWRlIGJvbGQuXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuICYmICF0aGlzLnNlcnZpY2UuaXNOZXN0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvcGVuaW5nIHRoZSBkcm9wZG93biwgd2Ugd2FudCB0byBhbHdheXMgb3BlbiBpdHMgcGFyZW50cy5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldERpc2FibGVkU3RhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInRhYmluZGV4XCIpXG4gICAgcHJpdmF0ZSBfdGFiSW5kZXg/Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgZ2V0IHRhYkluZGV4KCk6bnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLnNlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYXV0b0Nsb3NlKCk6RHJvcGRvd25BdXRvQ2xvc2VUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXV0b0Nsb3NlKHZhbHVlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBzZXQgW3N1aURyb3Bkb3duTWVudV0gb24gdGhlIG1lbnUgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5VcGRhdGVkKCk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmNoYW5nZXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGlsZHJlblVwZGF0ZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGlsZHJlblVwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gUmVyZWdpc3RlciBjaGlsZCBkcm9wZG93bnMgZWFjaCB0aW1lIHRoZSBtZW51IGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLm1hcChjID0+IGMuc2VydmljZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHMgPT4gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyQ2hpbGQocykpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxseUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5cHJlc3NcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleXByZXNzKGU6SGFuZGxlZEV2ZW50ICYgS2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIEJsb2NrIHRoZSBrZXlib2FyZCBldmVudCBmcm9tIGJlaW5nIGZpcmVkIG9uIHBhcmVudCBkcm9wZG93bnMuXG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dGVybmFsbHlDbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2sgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gcmVmbGVjdCBpbiBwYXJlbnQgc2luY2UgdGhleSBhcmUgYWxzbyBib3VuZCB0byBkb2N1bWVudC5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93biB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvZHJvcGRvd25cIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudSwgU3VpRHJvcGRvd25NZW51SXRlbSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvZHJvcGRvd24tbWVudVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpRHJvcGRvd24sXG4gICAgICAgIFN1aURyb3Bkb3duTWVudSxcbiAgICAgICAgU3VpRHJvcGRvd25NZW51SXRlbVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlEcm9wZG93bixcbiAgICAgICAgU3VpRHJvcGRvd25NZW51LFxuICAgICAgICBTdWlEcm9wZG93bk1lbnVJdGVtXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnIH0gZnJvbSBcIi4vbW9kYWwtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XG5cbi8vIEhlbHBlciBjbGFzcyB0byBzdXBwb3J0IG1ldGhvZCBjaGFpbmluZyB3aGVuIGNhbGxpbmcgYFN1aU1vZGFsU2VydmljZS5vcGVuKC4uLilgLlxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICBwcml2YXRlIF9jb25maWc6TW9kYWxDb25maWc8VCwgVSwgVj47XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlNb2RhbDxVLCBWPj47XG5cbiAgICAvLyBTaG9ydGhhbmQgZm9yIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIGBTdWlNb2RhbGAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBjb21wb25lbnQoKTpTdWlNb2RhbDxVLCBWPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2U6TW9kYWxDb25maWc8VCwgVSwgVj4sIGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpTW9kYWw8VSwgVj4+KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBkZXN0cm95IHRoZSBtb2RhbCBjb21wb25lbnQgd2hlbiBpdCBoYXMgYmVlbiBkaXNtaXNzZWQuXG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uRGlzbWlzcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZm9yIHdoZW4gYG9uQXBwcm92ZWAgaXMgZmlyZWQuXG4gICAgcHVibGljIG9uQXBwcm92ZShjYWxsYmFjazoocmVzdWx0OlUpID0+IHZvaWQpOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25BcHByb3ZlLnN1YnNjcmliZSgocmVzOlUpID0+IGNhbGxiYWNrKHJlcykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmb3Igd2hlbiBgb25EZW55YCBpcyBmaXJlZC5cbiAgICBwdWJsaWMgb25EZW55KGNhbGxiYWNrOihyZXN1bHQ6VikgPT4gdm9pZCk6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkRlbnkuc3Vic2NyaWJlKChyZXM6VikgPT4gY2FsbGJhY2socmVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHRoZSBhcHByb3ZlIGV2ZW50IG9mIHRoZSBtb2RhbCBtYW51YWxseS5cbiAgICBwdWJsaWMgYXBwcm92ZShyZXN1bHQ6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFwcHJvdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB0aGUgZGVueSBldmVudCBvZiB0aGUgbW9kYWwgbWFudWFsbHkuXG4gICAgcHVibGljIGRlbnkocmVzdWx0OlYpOnZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kZW55KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGUgbW9kYWwgY29tcG9uZW50IGluc3RhbnRseSwgd2l0aG91dCB0cmFuc2l0aW9ucyBvciBmaXJpbmcgYW55IGV2ZW50cy5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxUZW1wbGF0ZSB9IGZyb20gXCIuL21vZGFsLXRlbXBsYXRlXCI7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU2l6ZSA9IFwibWluaVwiIHwgXCJ0aW55XCIgfCBcInNtYWxsXCIgfCBcIm5vcm1hbFwiIHwgXCJsYXJnZVwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxTaXplID0ge1xuICAgIE1pbmk6IFwibWluaVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBUaW55OiBcInRpbnlcIiBhcyBNb2RhbFNpemUsXG4gICAgU21hbGw6IFwic21hbGxcIiBhcyBNb2RhbFNpemUsXG4gICAgTm9ybWFsOiBcIm5vcm1hbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBMYXJnZTogXCJsYXJnZVwiIGFzIE1vZGFsU2l6ZVxufTtcblxuLy8gU3RvcmVzIGEgYmFzaWMgc2V0IG9mIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgYSBtb2RhbC5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiB7XG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpWO1xuXG4gICAgLy8gRGF0YSB0byBwYXNzIHRvIHRoZSBtb2RhbCBpbnN0YW5jZSB3aGVuIG9wZW5lZC5cbiAgICBwdWJsaWMgY29udGV4dD86VDtcblxuICAgIC8vIFNpemUgdXNlZCB0byBkaXNwbGF5IHRoZSBtb2RhbC5cbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwdWJsaWMgaXNGdWxsU2NyZWVuOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIGhhcyBiYXNpYyBzdHlsZXMgYXBwbGllZC5cbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHB1YmxpYyBpc0ludmVydGVkOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIGNlbnRlciBvZiB0aGUgcGFnZS5cbiAgICBwdWJsaWMgaXNDZW50ZXJlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwdWJsaWMgbXVzdFNjcm9sbDpib29sZWFuO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsIi8vIFNob3J0aGFuZCB0byBhdm9pZCB3cml0aW5nIGFycm93IHR5cGVzIGV2ZXJ5d2hlcmUuXG5leHBvcnQgdHlwZSBNb2RhbFJlc3VsdDxUPiA9IChyZXN1bHQ6VCkgPT4gdm9pZDtcblxuLy8gVXNlZCB0byBwYXNzIGFiaWxpdHkgdG8gY29udHJvbCBhIG1vZGFsIHRvIGEgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbHM8VCwgVT4ge1xuICAgIGNvbnN0cnVjdG9yKGFwcHJvdmU6TW9kYWxSZXN1bHQ8VD4sIGRlbnk6TW9kYWxSZXN1bHQ8VT4pIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlID0gYXBwcm92ZTtcbiAgICAgICAgdGhpcy5kZW55ID0gZGVueTtcbiAgICB9XG5cbiAgICAvLyBVc2UgbWV0aG9kIGhlcmUgcmF0aGVyIHRoYW4gYXJyb3cgdmFyaWFibGVzIHRvIG1ha2UgaW50ZWxsaXNlbnNlIHNob3cgdGhleSdyZSBtZXRob2RzLlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpUKTp2b2lkIHt9XG4gICAgcHVibGljIGRlbnkocmVzdWx0OlUpOnZvaWQge31cbn1cblxuLy8gSW5qZWN0ZWQgaW50byBjdXN0b20gbW9kYWwgY29tcG9uZW50cywgdG8gYWxsb3cgY29udHJvbCBvZiB0aGUgbW9kYWwsIGFuZCBhY2Nlc3MgdG8gYSBjb250ZXh0IG9iamVjdC5cbmV4cG9ydCBjbGFzcyBNb2RhbDxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29udHJvbHM8VSwgVj4ge1xuICAgIHB1YmxpYyBjb250ZXh0OlQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczpNb2RhbENvbnRyb2xzPFUsIFY+LCBjb250ZXh0OlQpIHtcbiAgICAgICAgLy8gSW5zdGFuY2VzIG9mIGBNb2RhbENvbnRyb2xzYCBhcmUgb25seSBjcmVhdGVkIGluIHRoZSBgU3VpTW9kYWxgIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyBzbyB3ZSB0YWtlIGFuIGluaXRpYWxpc2VkIGluc3RhbmNlIHJhdGhlciB0aGFuIHJlbWFraW5nIG9uZSBlYWNoIHRpbWUuXG4gICAgICAgIHN1cGVyKGNvbnRyb2xzLmFwcHJvdmUsIGNvbnRyb2xzLmRlbnkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scyB9IGZyb20gXCIuL21vZGFsLWNvbnRyb2xzXCI7XG5cbi8vIFNob3J0aGFuZCBmb3IgYSBtb2RhbCB0ZW1wbGF0ZS4gU2V0cyB1cCBhYmlsaXR5IHRvIHdyaXRlOiBgPG5nLXRlbXBsYXRlIGxldC1jb250ZXh0IGxldC1tb2RhbD1cIm1vZGFsXCI+Li4uPC9uZy10ZW1wbGF0ZT5gXG4vLyBXZSB1c2UgYW4gYWJzdHJhY3QgY2xhc3MgYXMgTW9kYWxUZW1wbGF0ZSB0ZW5kcyB0byBiZSB1c2VkIHdpdGhpbiBkZWNvcmF0ZWQgcHJvcGVydGllcywgd2hpY2ggbWVhbnMgaXQgbmVlZHMgdG8gZXhpc3QhXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kYWxUZW1wbGF0ZTxULCBVLCBWPiBleHRlbmRzIFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OlQ7IG1vZGFsOk1vZGFsQ29udHJvbHM8VSwgVj4gfT4ge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJRHluYW1pY0NsYXNzZXMsIEtleUNvZGUsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzLCBNb2RhbFJlc3VsdCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxTaXplIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFBhZ2UgZGltbWVyIGZvciBtb2RhbCBiYWNrZ3JvdW5kLiAtLT5cbjxzdWktbW9kYWwtZGltbWVyIFtuZ0NsYXNzXT1cInsndG9wIGFsaWduZWQnOiAhaXNDZW50ZXJlZH1cIiBcbiAgICAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgICAgIFsoaXNEaW1tZWQpXT1cImRpbUJhY2tncm91bmRcIlxuICAgICAgICAgICAgW3RyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIj5cblxuICAgIDwhLS0gTW9kYWwgY29tcG9uZW50LCB3aXRoIHRyYW5zaXRpb24gY29tcG9uZW50IGF0dGFjaGVkIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtb2RhbFwiXG4gICAgICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRyYW5zaXRpb25Db250cm9sbGVyPy5pc1Zpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsU2NyZWVuXCJcbiAgICAgICAgIFtjbGFzcy5iYXNpY109XCJpc0Jhc2ljXCJcbiAgICAgICAgIFtjbGFzcy5zY3JvbGxpbmddPVwibXVzdFNjcm9sbFwiXG4gICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICNtb2RhbD5cblxuICAgICAgICA8IS0tIENvbmZpZ3VyYWJsZSBjbG9zZSBpY29uIC0tPlxuICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzQ2xvc2FibGUgJiYgaXNGdWxsU2NyZWVuXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2k+XG4gICAgICAgIDwhLS0gPG5nLWNvbnRlbnQ+IHNvIHRoYXQgPHN1aS1tb2RhbD4gY2FuIGJlIHVzZWQgYXMgYSBub3JtYWwgY29tcG9uZW50LiAtLT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tIEBWaWV3Q2hpbGQgcmVmZXJlbmNlIHNvIHdlIGNhbiBpbnNlcnQgZWxlbWVudHMgYmVzaWRlIHRoaXMgZGl2LiAtLT5cbiAgICAgICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zdWktbW9kYWwtZGltbWVyPlxuYCxcbiAgICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWw8VCwgVT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VTtcblxuICAgIC8vIFNlcGFyYXRlIGNsYXNzIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgbWV0aG9kcyB0byBzdXBwb3J0IHBhc3NpbmcgaW50byBjb21wb25lbnRzLlxuICAgIHB1YmxpYyBjb250cm9sczpNb2RhbENvbnRyb2xzPFQsIFU+O1xuXG4gICAgcHVibGljIGdldCBhcHByb3ZlKCk6TW9kYWxSZXN1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5hcHByb3ZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVueSgpOk1vZGFsUmVzdWx0PFU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZGVueTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBhcHByb3ZlYCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImFwcHJvdmVkXCIpXG4gICAgcHVibGljIG9uQXBwcm92ZTpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImRlbmllZFwiKVxuICAgIHB1YmxpYyBvbkRlbnk6RXZlbnRFbWl0dGVyPFU+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLlxuICAgIEBPdXRwdXQoXCJkaXNtaXNzZWRcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBWaWV3Q2hpbGQoXCJtb2RhbFwiKVxuICAgIHByaXZhdGUgX21vZGFsRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDZW50ZXJlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwcml2YXRlIF9pc0Z1bGxTY3JlZW46Ym9vbGVhbjtcblxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNGdWxsU2NyZWVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Z1bGxTY3JlZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Z1bGxTY3JlZW4oZnVsbFNjcmVlbjpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRnVsbFNjcmVlbiA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmdWxsU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIGN1cnJlbnRseSBpcyBkaXNwbGF5aW5nIGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RTY3JvbGw6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RBbHdheXNTY3JvbGw6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtdXN0U2Nyb2xsKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXN0U2Nyb2xsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbXVzdFNjcm9sbChtdXN0U2Nyb2xsOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIC8vICdDYWNoZScgdmFsdWUgaW4gX211c3RBbHdheXNTY3JvbGwgc28gdGhhdCBpZiBgdHJ1ZWAsIF9tdXN0U2Nyb2xsIGlzbid0IGV2ZXIgYXV0by11cGRhdGVkLlxuICAgICAgICB0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwcml2YXRlIF9pc0ludmVydGVkOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNJbnZlcnRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZlcnRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIGJhY2tyb3VuZCBkaW1tZXIgaXMgYWN0aXZlLlxuICAgIHB1YmxpYyBkaW1CYWNrZ3JvdW5kOmJvb2xlYW47XG4gICAgLy8gVHJ1ZSBhZnRlciBgYXBwcm92ZWAgb3IgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBwcml2YXRlIF9pc0Nsb3Npbmc6Ym9vbGVhbjtcblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgLy8gUGFyZW50IGVsZW1lbnQgb2YgbW9kYWwgYmVmb3JlIHJlbG9jYXRpb24gdG8gZG9jdW1lbnQgYm9keS5cbiAgICBwcml2YXRlIF9vcmlnaW5hbENvbnRhaW5lcj86RWxlbWVudDtcblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tIGBNb2RhbENvbmZpZ2AgKHRvIGF2b2lkIHdyaXRpbmcgZGVmYXVsdHMgdHdpY2UpLlxuICAgICAgICBjb25zdCBjb25maWcgPSBuZXcgTW9kYWxDb25maWc8dW5kZWZpbmVkLCBULCBVPigpO1xuICAgICAgICB0aGlzLmxvYWRDb25maWcoY29uZmlnKTtcblxuICAgICAgICAvLyBFdmVudCBlbWl0dGVycyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgbW9kYWwgb3V0Y29tZXMuXG4gICAgICAgIHRoaXMub25BcHByb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uRGVueSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBjb250cm9scyB3aXRoIGFjdGlvbnMgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBjYXNlcy5cbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBNb2RhbENvbnRyb2xzPFQsIFU+KFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uQXBwcm92ZS5lbWl0KHJlcykpLFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uRGVueS5lbWl0KHJlcykpKTtcblxuICAgICAgICAvLyBJbnRlcm5hbCB2YXJpYWJsZSBpbml0aWFsaXNhdGlvbi5cbiAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgdmlzaWJsZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpbUJhY2tncm91bmQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIE1vdmUgdGhlIG1vZGFsIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGVuc3VyZSBjb3JyZWN0IHNjcm9sbGluZy5cbiAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgI3RlbXBsYXRlU2libGluZyBlbGVtZW50IGZyb20gdGhlIERPTSB0byBmaXggYm90dG9tIGJvcmRlciBzdHlsZXMuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMudGVtcGxhdGVTaWJsaW5nLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBpZiAodGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNjcm9sbCgpKTtcblxuICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgbW9kYWwgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb24uXG4gICAgcHVibGljIGxvYWRDb25maWc8Vj4oY29uZmlnOk1vZGFsQ29uZmlnPFYsIFQsIFU+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gY29uZmlnLmlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBjb25maWcuY2xvc2VSZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gY29uZmlnLmlzRnVsbFNjcmVlbjtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gY29uZmlnLmlzQmFzaWM7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGNvbmZpZy5pc0ludmVydGVkO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSBjb25maWcuaXNDZW50ZXJlZDtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBjb25maWcubXVzdFNjcm9sbDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBjb25maWcudHJhbnNpdGlvbjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSBjb25maWcudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhIHRyYW5zaXRpb24sIGZpcmluZyB0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nLlxuICAgIHByaXZhdGUgZGlzbWlzcyhjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgY3VycmVudGx5IGNsb3NpbmcsXG4gICAgICAgIGlmICghdGhpcy5faXNDbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSBpbnZpc2libGUuXG4gICAgICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZG9uZSwgbW92ZSB0aGUgbW9kYWwgYmFjayB0byBpdHMgb3JpZ2luYWwgbG9jYXRpb24sIGVtaXQgYSBkaXNtaXNzIGV2ZW50LCBhbmQgZmlyZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbCB3aXRoIGEgJ2RlbnknIG91dGNvbWUsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCByZWFzb24uXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbGxvd2VkIHRvIGNsb3NlLCBmaXJlIHRoZSBkZW55IHJlc3VsdCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZW55KHRoaXMuY2xvc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjaWRlcyB3aGV0aGVyIHRoZSBtb2RhbCBuZWVkcyB0byByZXBvc2l0aW9uIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICBwcml2YXRlIHVwZGF0ZVNjcm9sbCgpOnZvaWQge1xuXG4gICAgICAgIC8vIF9tdXN0QWx3YXlzU2Nyb2xsIHdvcmtzIGJ5IHN0b3BwaW5nIF9tdXN0U2Nyb2xsIGZyb20gYmVpbmcgYXV0b21hdGljYWxseSB1cGRhdGVkLCBzbyBpdCBzdGF5cyBgdHJ1ZWAuXG4gICAgICAgIGlmICghdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCAmJiB0aGlzLl9tb2RhbEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgLy8gU2VtYW50aWMgVUkgbW9kYWwgbWFyZ2luIGFuZCBkaW1tZXIgcGFkZGluZyBhcmUgMXJlbSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBmb250IHNpemUsIHNvIGZvciBjb21wYXRpYmlsaXR5OlxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAqIDI7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gVGhlIG1vZGFsIG11c3Qgc2Nyb2xsIGlmIHRoZSB3aW5kb3cgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiB0aGUgbW9kYWwgaGVpZ2h0ICsgYm90aCBtYXJnaW5zLlxuICAgICAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IHdpbmRvdy5pbm5lckhlaWdodCA8IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICogMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBtb2RhbCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIERvY3VtZW50IGxpc3RlbmVyIGlzIGZpbmUgaGVyZSBiZWNhdXNlIG5vYm9keSB3aWxsIGhhdmUgZW5vdWdoIG1vZGFscyBvcGVuLlxuICAgIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRG9jdW1lbnRLZXlVcChlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgLy8gQ2xvc2UgYXV0b21hdGljYWxseSBjb3ZlcnMgY2FzZSBvZiBgIWlzQ2xvc2FibGVgLCBzbyBjaGVjayBub3QgbmVlZGVkLlxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpyZXNpemVcIilcbiAgICBwdWJsaWMgb25Eb2N1bWVudFJlc2l6ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBUZW1wbGF0ZU1vZGFsQ29uZmlnLCBDb21wb25lbnRNb2RhbENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgQWN0aXZlTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hY3RpdmUtbW9kYWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7fVxuXG4gICAgcHVibGljIG9wZW48VCwgVSwgVj4obW9kYWw6TW9kYWxDb25maWc8VCwgVSwgVj4pOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG1vZGFsIGNvbXBvbmVudCB0byBiZSBzaG93bi5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQ8U3VpTW9kYWw8VSwgVj4+KFN1aU1vZGFsKTtcblxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIHRoZSBjcmVhdGVkIG1vZGFsIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbW9kYWxDb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKG1vZGFsIGluc3RhbmNlb2YgVGVtcGxhdGVNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3LlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZywgbW9kYWwudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAvLyBgbGV0LWNvbnRleHRgXG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiBtb2RhbC5jb250ZXh0LFxuICAgICAgICAgICAgICAgIC8vIGBsZXQtbW9kYWw9XCJtb2RhbFwiYFxuICAgICAgICAgICAgICAgIG1vZGFsOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGFsIGluc3RhbmNlb2YgQ29tcG9uZW50TW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHRoZSBjb21wb25lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbW9kYWwgY29udGVudCxcbiAgICAgICAgICAgIC8vIGluamVjdGluZyBhbiBpbnN0YW5jZSBvZiBgTW9kYWxgIHRvIGJlIHVzZWQgaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBuZXcgTW9kYWwobW9kYWxDb21wb25lbnQuY29udHJvbHMsIG1vZGFsLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBjb21wb25lbnQgaW50byB0aGUgY29udGVudCBvZiB0aGUgbW9kYWwuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyhjb250ZW50Q29tcG9uZW50UmVmLCBtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcpO1xuXG4gICAgICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGFjY2VzcyB0byB0aGUgY29udGVudCBjb21wb25lbnQncyBET00gZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudENvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgaW5zaWRlIHRoZSBjb21wb25lbnQgdG8gdGhlIG1haW4gbW9kYWwgZWxlbWVudC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZG9uZSBzbyB0aGF0IENTUyBjbGFzc2VzIGFwcGx5IGNvcnJlY3RseS4gSXQgZG9lcyBzdG9wIGFueSBjdXN0b20gc3R5bGVzIGZyb20gd29ya2luZyBob3dldmVyLFxuICAgICAgICAgICAgLy8gc28gb3RoZXIgd2F5cyBtYXkgaGF2ZSB0byBiZSBpbnZlc3RpZ2F0ZWQuXG4gICAgICAgICAgICB3aGlsZSAoY29udGVudEVsZW1lbnQuaGFzQ2hpbGROb2RlcygpICYmIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50J3MgJ2VtcHR5IHNoZWxsJyBmcm9tIHRoZSBET00uXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21Eb2N1bWVudChjb250ZW50Q29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbmV3IG1vZGFsIGNvbXBvbmVudCB0byB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgIC8vIFRoZSBjb21wb25lbnQgd2lsbCBtb3ZlIGl0c2VsZiB0byB0aGUgZG9jdW1lbnQgYm9keSBmb3IgY29ycmVjdGwgc3R5bGluZy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKGNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgZ2VuZXJhdGVkIG1vZGFsIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgbW9kYWxDb21wb25lbnQubG9hZENvbmZpZyhtb2RhbCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGFuIGluc3RhbmNlIG9mIGFuIGBBY3RpdmVNb2RhbGAsIHNvIHRoZSB1c2VyIGNhbiBjb250cm9sIHRoZSBuZXcgbW9kYWwuXG4gICAgICAgIHJldHVybiBuZXcgQWN0aXZlTW9kYWwobW9kYWwsIGNvbXBvbmVudFJlZik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXIgfSBmcm9tIFwiLi4vLi4vZGltbWVyL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbC1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3QudWkuZGltbWVyOm5vdCguaGlkZGVuKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbERpbW1lciBleHRlbmRzIFN1aURpbW1lciB7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdlXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubW9kYWxzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpRGltbWVyTW9kdWxlIH0gZnJvbSBcIi4uL2RpbW1lci9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBTdWlNb2RhbERpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aU1vZGFsLFxuICAgICAgICBTdWlNb2RhbERpbW1lclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcHJvZ3Jlc3NcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJhclwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiAqbmdJZj1cInNob3dQcm9ncmVzc1wiPnt7IHBlcmNlbnRhZ2UgfX0lPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsYWJlbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYmFyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcyAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzcyB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wcm9ncmVzc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF92YWx1ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWF4aW11bTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgX292ZXJyaWRlU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b1N1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNob3dQcm9ncmVzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWF4aW11bSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcHJlY2lzaW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWNpc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZWNpc2lvbih2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChjb252ZXJ0ZWQsIDApLCAyMCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc3VjY2Vzc1wiKVxuICAgIHB1YmxpYyBnZXQgcmVhY2hlZE1heGltdW0oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlU3VjY2VzcyB8fCAoKHRoaXMudmFsdWUgPj0gdGhpcy5tYXhpbXVtKSAmJiB0aGlzLmF1dG9TdWNjZXNzKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmRhdGEtcGVyY2VudFwiKVxuICAgIHB1YmxpYyBnZXQgcGVyY2VudGFnZSgpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJvdW5kZWRWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMudmFsdWUsIDApLCB0aGlzLm1heGltdW0pO1xuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoYm91bmRlZFZhbHVlIC8gdGhpcy5tYXhpbXVtKSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBzZXQgY2xhc3NWYWx1ZShjbGFzc2VzOnN0cmluZykge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImF0dGFjaGVkXCIpIHx8IGNsYXNzZXMuaW5jbHVkZXMoXCJ0aW55XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwic3VjY2Vzc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gMTAwO1xuICAgICAgICB0aGlzLnByZWNpc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlQcm9ncmVzcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpIGNsYXNzPVwiaWNvblwiXG4gICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBpY29uczsgbGV0IGkgPSBpbmRleFwiXG4gICAobW91c2VvdmVyKT1cIm9uTW91c2VvdmVyKGkpXCJcbiAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgIFtjbGFzcy5zZWxlY3RlZF09XCJob3ZlcmVkSW5kZXggPj0gaSAmJiAhaXNSZWFkb25seVwiXG4gICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlID4gaVwiPlxuPC9pPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5yZWFkLW9ubHkgLmljb24ge1xuICAgIGN1cnNvcjogYXV0b1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PG51bWJlcj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmF0aW5nXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB2YWx1ZTpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhpbXVtID0gK3ZhbHVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaWNvbnMoKTp1bmRlZmluZWRbXSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItbGl0ZXJhbFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4aW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhvdmVyZWRJbmRleDpudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMubWF4aW11bSA9IDU7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soaTpudW1iZXIpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2VvdmVyKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSBpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuICAgIHB1YmxpYyBvbk1vdXNlb3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIGhvc3Q6IHsgXCIodmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmF0aW5nVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPG51bWJlciwgU3VpUmF0aW5nPiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYXRpbmcpIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVJhdGluZywgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUmF0aW5nLFxuICAgICAgICBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVJhdGluZyxcbiAgICAgICAgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElSZXN1bHRDb250ZXh0IH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaC1yZXN1bHRcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlLCBxdWVyeSlcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaFJlc3VsdDxUPiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlc3VsdFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk6c3RyaW5nO1xuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFiZWwgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IGxhYmVsLlxuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IHZhbHVlID0+IFwiXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBMb29rdXBGblJlc3VsdCwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuaW50ZXJmYWNlIElDYWNoZWRBcnJheTxUPiB7IFtxdWVyeTpzdHJpbmddOlRbXTsgfVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZTxULCBVPiB7XG4gICAgLy8gU3RvcmVzIHRoZSBhdmFpbGFibGUgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9vcHRpb25zOlRbXTtcbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG9wdGlvbnMuIE11c3QgYmUgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBwcm9taXNlLlxuICAgIHByaXZhdGUgX29wdGlvbnNMb29rdXA/Okxvb2t1cEZuPFQsIFU+O1xuICAgIC8vIEZpZWxkIHRoYXQgb3B0aW9ucyBhcmUgc2VhcmNoZWQgJiBkaXNwbGF5ZWQgb24uXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0ZpZWxkPzpzdHJpbmc7XG4gICAgLy8gRmlsdGVycyBhIGxpc3Qgb2Ygb3B0aW9ucy5cbiAgICBwdWJsaWMgb3B0aW9uc0ZpbHRlcjpGaWx0ZXJGbjxUPjtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBbXTtcbiAgICAgICAgLy8gV2UgY2Fubm90IHVzZSBib3RoIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFJlc2V0IGVudGlyZSBzZXJ2aWNlIHdpdGggbmV3IG9wdGlvbnMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNMb29rdXAoKTpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zTG9va3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgICAgIC8vIEFzIGJlZm9yZSwgY2Fubm90IHVzZSBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1Mb29rdXAoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vcHRpb25zTG9va3VwICYmIHRoaXMub3B0aW9uc0xvb2t1cC5sZW5ndGggPT09IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXNldCBvdGhlcndpc2Ugd2Ugd291bGQgbm93IGJlIHNob3dpbmcgaW52YWxpZCBzZWFyY2ggcmVzdWx0cy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgcmVzdWx0cyBvZiB0aGUgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0czpUW107XG4gICAgLy8gQ2FjaGUgb2YgcmVzdWx0cywgaW5kZXhlZCBieSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzQ2FjaGU6SUNhY2hlZEFycmF5PFQ+O1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnk6c3RyaW5nO1xuICAgIC8vIEFsbG93cyB0aGUgZW1wdHkgcXVlcnkgdG8gcHJvZHVjZSByZXN1bHRzLlxuICAgIHB1YmxpYyBhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbjtcbiAgICAvLyBIb3cgbG9uZyB0byBkZWxheSB0aGUgc2VhcmNoIGZvciB3aGVuIHVzaW5nIHVwZGF0ZVF1ZXJ5RGVsYXllZC4gU3RvcmVkIGluIG1zLlxuICAgIHB1YmxpYyBzZWFyY2hEZWxheTpudW1iZXI7XG4gICAgLy8gU3RvcmVzIHRoZSBzZWFyY2ggdGltZW91dCBoYW5kbGUgc28gd2UgY2FuIGNhbmNlbCBpdC5cbiAgICBwcml2YXRlIF9zZWFyY2hEZWxheVRpbWVvdXQ6bnVtYmVyO1xuICAgIC8vIFByb3ZpZGVzICdsb2FkaW5nJyBmdW5jdGlvbmFsaXR5LlxuICAgIHByaXZhdGUgX2lzU2VhcmNoaW5nOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFsbG93RW1wdHlRdWVyeTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnNGaWx0ZXIgPSAob3MsIHEpID0+IHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhIFJlZ0V4cC5cbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHRoaXMuX3F1ZXJ5KTtcblxuICAgICAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHJlc3VsdHMgaWYgdGhlIHF1ZXJ5IHdhcyB2YWxpZCByZWdleC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyB0aGUgcmVzdWx0cyBzdWRkZW5seSBiZWNvbWluZyBlbXB0eSBpZiBhbiBpbnZhbGlkIHJlZ2V4IHN0cmluZyBpcyBpbnB1dHRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3NcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIG9uIHRoZSBvcHRpb25zIHdpdGggYSBzdHJpbmcgbWF0Y2ggb24gdGhlIGZpZWxkIHdlIGFyZSB0ZXN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG8gPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4obywgdGhpcy5fb3B0aW9uc0ZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaChyZWdleCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgc2luY2UgaXQgd2Fzbid0IGEgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIGFuZCByZXNldC5cbiAgICAgICAgdGhpcy5hbGxvd0VtcHR5UXVlcnkgPSBhbGxvd0VtcHR5UXVlcnk7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgcXVlcnkgYWZ0ZXIgdGhlIHNwZWNpZmllZCBzZWFyY2ggZGVsYXkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEZWxheVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc2VhcmNoIHF1ZXJ5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGlmICh0aGlzLl9xdWVyeSA9PT0gXCJcIiAmJiAhdGhpcy5hbGxvd0VtcHR5UXVlcnkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB0aGUgbmV3IHF1ZXJ5IGlzIGVtcHR5IChhbmQgd2UgZG9uJ3QgYWxsb3cgZW1wdHkgcXVlcmllcykuXG4gICAgICAgICAgICAvLyBEb24ndCByZXNldCBzbyB0aGF0IHdoZW4gYW5pbWF0aW5nIGNsb3NlZCB3ZSBkb24ndCBnZXQgYSBqdWRkZXIuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRzQ2FjaGUuaGFzT3duUHJvcGVydHkodGhpcy5fcXVlcnkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcXVlcnkgaXMgYWxyZWFkeSBjYWNoZWQsIG1ha2UgdXNlIG9mIGl0LlxuICAgICAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV07XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9ucyBsb29rdXAgd2l0aG91dCBhIHRoaXMgY29udGV4dC5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5TG9va3VwID0gdGhpcy5fb3B0aW9uc0xvb2t1cC5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fcXVlcnkpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG5cbiAgICAgICAgICAgIHF1ZXJ5TG9va3VwXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuc2V0ICdsb2FkaW5nJyBzdGF0ZSwgYW5kIHRocm93IHRoZSByZXR1cm5lZCBlcnJvciB3aXRob3V0IHVwZGF0aW5nIHRoZSByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMub3B0aW9uc0ZpbHRlci5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fb3B0aW9ucywgdGhpcy5fcXVlcnkpO1xuICAgICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhmaWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyAmIGNhY2hlcyB0aGUgbmV3IHNldCBvZiByZXN1bHRzLlxuICAgIHByaXZhdGUgdXBkYXRlUmVzdWx0cyhyZXN1bHRzOlRbXSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV0gPSByZXN1bHRzO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSk6TG9va3VwRm5SZXN1bHQ8VD47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlVbXSk6TG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSB8IFVbXSk6TG9va3VwRm5SZXN1bHQ8VD4gfCBMb29rdXBGblJlc3VsdDxUW10+IHtcbiAgICAgICAgaWYgKGluaXRpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFVbXT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VD47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgdG8gcmVnZXggd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICBwcml2YXRlIHRvUmVnZXgocXVlcnk6c3RyaW5nKTpSZWdFeHAgfCBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIEhUTUwgZm9yIGhpZ2hsaWdodGVkIG1hdGNoIHRleHQuXG4gICAgcHVibGljIGhpZ2hsaWdodE1hdGNoZXModGV4dDpzdHJpbmcsIHF1ZXJ5OnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgocXVlcnkpO1xuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IGA8Yj4ke21hdGNofTwvYj5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZXNldHMgdGhlIHNlYXJjaCBiYWNrIHRvIGEgcHJpc3RpbmUgc3RhdGUuXG4gICAgcHJpdmF0ZSByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElTZWFyY2hMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdENvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeTpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIGlucHV0XCIgW2NsYXNzLmljb25dPVwiaGFzSWNvblwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJwcm9tcHRcIiB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuICAgIDxpICpuZ0lmPVwiaGFzSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgbWVudVNlbGVjdGVkSXRlbUNsYXNzPVwiYWN0aXZlXCI+XG5cbiAgICA8c3VpLXNlYXJjaC1yZXN1bHQgKm5nRm9yPVwibGV0IHIgb2YgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJyZXN1bHRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwicmVzdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHIpXCI+PC9zdWktc2VhcmNoLXJlc3VsdD5cblxuICAgIDxkaXYgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJtZXNzYWdlIGVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBFbnN1cmVzIHJlc3VsdHMgZGl2IGhhcyBtYXJnaW4uICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLyogRml4ZXMgcG9zaXRpb25pbmcgd2hlbiByZXN1bHRzIGFyZSBwdXNoZWQgYWJvdmUgdGhlIHNlYXJjaC4gKi9cbi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoPFQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBUPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgdGhlIHNlYXJjaCBlbGVtZW50IGhhcyBhIHZpc2libGUgc2VhcmNoIGljb24uXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzSWNvbjpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgLy8gR2V0cyAmIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQgZGlzcGxheWVkIGluc2lkZSB0aGUgdGV4dCBpbnB1dC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlYXJjaExvY2FsZVZhbHVlcztcblxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VhcmNoTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlYXJjaExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VhcmNoXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgYSBkZWxheWVkIHNlYXJjaC5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVzdWx0cyBvcGVuIHN0YXRlIGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgcXVlcnkgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bHRGb3JtYXR0ZXI/OihyOlQsIHE6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdEZvcm1hdHRlcigpOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fcmVzdWx0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0Rm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0aGlzLnJlYWRWYWx1ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAociwgcSkgPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5yZWFkVmFsdWUociksIHEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlc3VsdEZvcm1hdHRlcihmb3JtYXR0ZXI6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRGb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdWx0VGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV0YWluU2VsZWN0ZWRSZXN1bHQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhSZXN1bHRzOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cy5zbGljZSgwLCB0aGlzLm1heFJlc3VsdHMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSZXN1bHQ/OlQ7XG5cbiAgICAvLyBFbWl0cyB3aGVuZXZlciBhIG5ldyByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAgQE91dHB1dChcInJlc3VsdFNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uUmVzdWx0U2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCByZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVD4oKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAyMDA7XG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyA9IDc7XG5cbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VhcmNoO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdHMgYSByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdChyZXN1bHQ6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZC5lbWl0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkodGhpcy5yZWFkVmFsdWUocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IG9wZW4gb24gY2xpY2sgd2hlbiB0aGVyZSBpcyBhIHF1ZXJ5IGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWRzIHRoZSBzcGVjaWZpZWQgZmllbGQgZnJvbSBhbiBpdGVtLlxuICAgIHB1YmxpYyByZWFkVmFsdWUob2JqZWN0OlQpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmplY3QsIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VhcmNoLFxuICAgICAgICBTdWlTZWFyY2hSZXN1bHRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VhcmNoXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gW2lubmVySFRNTF09XCJyZW5kZXJlZFRleHRcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE9wdGlvbjxUPiBleHRlbmRzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQsIHdoZXRoZXIgYnkgY2xpY2tpbmcgb3IgYnkga2V5Ym9hcmQuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVuZGVyZWRUZXh0PzpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IGZvcm1hdHRlcihmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBmb3JtYXR0ZXIodGhpcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlc1RlbXBsYXRlOmJvb2xlYW47XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gV2UgaW5oZXJpdCBTdWlEcm9wZG93bk1lbnVJdGVtIHRvIGF1dG9tYXRpY2FsbHkgZ2FpbiBhbGwga2V5Ym9hcmQgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBkb25lIHZpYSBhZGRpbmcgdGhlIC5pdGVtIGNsYXNzIGJlY2F1c2UgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50KTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhlIGRlZmF1bHQgdGV4dCBhbiBlbXB0eSBsYWJlbCwgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IG9uZS5cbiAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudXNlc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aVNlbGVjdFNlYXJjaF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RTZWFyY2gge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmF1dG9jb21wbGV0ZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBhdXRvQ29tcGxldGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeVVwZGF0ZWQ6RXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgcHVibGljIG9uUXVlcnlLZXlEb3duOkV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQuZW1pdChxdWVyeSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93bi5lbWl0KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cygpOnZvaWQge1xuICAgICAgICAvLyBTbGlnaHRseSBkZWxheSB0byBzdXBwb3J0IGluIG1lbnUgc2VhcmNoLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UsIExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi8uLi9zZWFyY2gvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VsZWN0TG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uQ29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5PzpzdHJpbmc7XG59XG5cbi8vIFdlIHVzZSBnZW5lcmljIHR5cGUgVCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBvcHRpb25zIHdlIGFyZSB3b3JraW5nIHdpdGgsXG4vLyBhbmQgVSB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgb3B0aW9uIHVzZWQgYXMgdGhlIHZhbHVlLlxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVT47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcm90ZWN0ZWQgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHJlbmRlcmVkIHNlbGVjdCBvcHRpb25zLiAoUmVuZGVyZWQgYnkgdGhlIHVzZXIgdXNpbmcgKm5nRm9yKS5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVNlbGVjdE9wdGlvbiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBfcmVuZGVyZWRPcHRpb25zOlF1ZXJ5TGlzdDxTdWlTZWxlY3RPcHRpb248VD4+O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50cyBvbiB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9yZW5kZXJlZFN1YnNjcmlwdGlvbnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kcm9wZG93blwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZW51LmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1NlYXJjaGFibGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBpc1NlYXJjaEV4dGVybmFsOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgZ2V0IGhhc1NlYXJjaENsYXNzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSAmJiAhdGhpcy5pc1NlYXJjaEV4dGVybmFsO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChTdWlTZWxlY3RTZWFyY2gpXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX21hbnVhbFNlYXJjaD86U3VpU2VsZWN0U2VhcmNoO1xuXG4gICAgcHVibGljIGdldCBzZWFyY2hJbnB1dCgpOlN1aVNlbGVjdFNlYXJjaCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTZWFyY2ggfHwgdGhpcy5faW50ZXJuYWxTZWFyY2g7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiaW5kZXgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwpIHtcbiAgICAgICAgICAgIC8vIElmIG9wZW4gJiBpbiBtZW51IHNlYXJjaCwgcmVtb3ZlIGZyb20gdGFiaW5kZXggKGFzIGlucHV0IGFsd2F5cyBhdXRvZm9jdXNzZXMpLlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1NlYXJjaENsYXNzKSB7XG4gICAgICAgICAgICAvLyBJZiBzZWFyY2ggaW5wdXQgZW5hYmxlZCwgdGFiIGdvZXMgdG8gaW5wdXQuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChsb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBEZXByZWNhdGVkXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVVwZGF0ZUhvb2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSByZW5kZXJlZCB0ZXh0IGFzIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWxGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbGFiZWxGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGFiZWxHZXR0ZXIoKToob2JqOlQpID0+IHN0cmluZyB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbGFiZWwgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iaiwgdGhpcy5sYWJlbEZpZWxkKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlRmllbGQ6c3RyaW5nO1xuXG4gICAgcHVibGljIGdldCB2YWx1ZUdldHRlcigpOihvYmo6VCkgPT4gVSB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgVT4ob2JqLCB0aGlzLnZhbHVlRmllbGQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG9wdGlvblRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIHByaXZhdGUgX29wdGlvbkZvcm1hdHRlcj86KG86VCwgcT86c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZ3VyZWRGb3JtYXR0ZXIoKToob3B0aW9uOlQpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25Gb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuX29wdGlvbkZvcm1hdHRlciEobywgdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnF1ZXJ5IDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5sYWJlbEdldHRlcihvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuc2VhcmNoU2VydmljZS5oaWdobGlnaHRNYXRjaGVzKHRoaXMubGFiZWxHZXR0ZXIobyksIHRoaXMucXVlcnkgfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uRm9ybWF0dGVyKGZvcm1hdHRlcjooKG9wdGlvbjpULCBxdWVyeT86c3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlbGVjdExvY2FsZVZhbHVlcztcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SVNlbGVjdExvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklTZWxlY3RMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcInNlbGVjdFwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByb3RlY3RlZCBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBkbyB3YW50IGFuIGVtcHR5IHF1ZXJ5IHRvIHJldHVybiBhbGwgcmVzdWx0cy5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVT4odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5pY29uID0gXCJkcm9wZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgICAgICAvLyBXZSBtYW51YWxseSBzcGVjaWZ5IHRoZSBtZW51IGl0ZW1zIHRvIHRoZSBtZW51IGJlY2F1c2UgdGhlIEBDb250ZW50Q2hpbGRyZW4gZG9lc24ndCBwaWNrIHVwIG91ciBkeW5hbWljYWxseSByZW5kZXJlZCBpdGVtcy5cbiAgICAgICAgdGhpcy5fbWVudS5pdGVtcyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5fbWFudWFsU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeVVwZGF0ZWQuc3Vic2NyaWJlKChxOnN0cmluZykgPT4gdGhpcy5xdWVyeSA9IHEpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5S2V5RG93bi5zdWJzY3JpYmUoKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vblF1ZXJ5SW5wdXRLZXlkb3duKGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG11c3QgY2FsbCB0aGlzIGltbWVkaWF0ZWx5IGFzIGNoYW5nZXMgZG9lc24ndCBmaXJlIHdoZW4geW91IHN1YnNjcmliZS5cbiAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VsZWN0O1xuICAgIH1cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBxdWVyeSB0aGVuIG9wZW4gdGhlIGRyb3Bkb3duLCBhcyBhZnRlciBrZXlib2FyZCBpbnB1dCBpdCBzaG91bGQgYWx3YXlzIGJlIG9wZW4uXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0UXVlcnkoZGVsYXllZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIC8vIFRoZSBzZWFyY2ggZGVsYXkgaXMgc2V0IHRvIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIHRvIGVuc3VyZSByZXN1bHRzXG4gICAgICAgIC8vIGFyZW4ndCByZW5kZXJlZCBhcyB0aGUgc2VsZWN0IGNsb3NlcyBhcyB0aGF0IGNhdXNlcyBhIHN1ZGRlbiBmbGFzaC5cbiAgICAgICAgaWYgKGRlbGF5ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IHRoaXMuX21lbnUubWVudVRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeURlbGF5ZWQoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBhbGwgcHJldmlvdXMgc3Vic2NyaXB0aW9ucyB0byBhdm9pZCBtZW1vcnkgbGVha3Mgb24gbGFyZ2Ugc2VsZWN0cy5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocnMgPT4gcnMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHtcbiAgICAgICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IGluaXRpYWxpc2F0aW9uIHRvIGF2b2lkIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9ycy4gVE9ETyAtIGxvb2sgaW50byBhdm9pZGluZyB0aGlzIVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMucHVzaChyby5vblNlbGVjdGVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNlbGVjdE9wdGlvbihyby52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgbm8gb3B0aW9ucyBoYXZlIGJlZW4gcHJvdmlkZWQsIGF1dG9nZW5lcmF0ZSB0aGVtIGZyb20gdGhlIHJlbmRlcmVkIG9uZXMuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnMubWFwKHJvID0+IHJvLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIG9wdGlvbi51c2VzVGVtcGxhdGUgPSAhIXRoaXMub3B0aW9uVGVtcGxhdGU7XG4gICAgICAgIG9wdGlvbi5mb3JtYXR0ZXIgPSB0aGlzLmNvbmZpZ3VyZWRGb3JtYXR0ZXI7XG5cbiAgICAgICAgaWYgKG9wdGlvbi51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKG9wdGlvbi50ZW1wbGF0ZVNpYmxpbmcsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24uY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZDtcblxuICAgIHByb3RlY3RlZCBmaW5kT3B0aW9uKG9wdGlvbnM6VFtdLCB2YWx1ZTpVKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gVHJpZXMgdG8gZmluZCBhbiBvcHRpb24gaW4gb3B0aW9ucyBhcnJheVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMudmFsdWVHZXR0ZXIobykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNhcmV0Q2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRyb3Bkb3duIGlzIHNlYXJjaGFibGUsIGNsaWNraW5nIHNob3VsZCBrZWVwIGl0IG9wZW4sIG90aGVyd2lzZSB3ZSB0b2dnbGUgdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5pc1NlYXJjaGFibGUgPyB0cnVlIDogIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IGZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgd2hlbmV2ZXIgY2xpY2tpbmcgb24gdGhlIHNlbGVjdC5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5UHJlc3MoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkRvd24pIHtcblxuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWFyY2hhYmxlICYmIHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEZvY3Vzc2VzIHRoZSBzZWFyY2ggaW5wdXQgb25seSB3aGVuIHNlYXJjaGFibGUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIHRoYXQgZHJhd3MgdGhlIHByb3ZpZGVkIHRlbXBsYXRlIGJlc2lkZSB0aGUgcHJvdmlkZWQgVmlld0NvbnRhaW5lclJlZi5cbiAgICBwcm90ZWN0ZWQgZHJhd1RlbXBsYXRlKHNpYmxpbmdSZWY6Vmlld0NvbnRhaW5lclJlZiwgdmFsdWU6VCk6dm9pZCB7XG4gICAgICAgIHNpYmxpbmdSZWYuY2xlYXIoKTtcbiAgICAgICAgLy8gVXNlIG9mIGAkaW1wbGljaXRgIG1lYW5zIHVzZSBvZiA8bmctdGVtcGxhdGUgbGV0LW9wdGlvbj4gc3ludGF4IGlzIHN1cHBvcnRlZC5cbiAgICAgICAgc2libGluZ1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5vcHRpb25UZW1wbGF0ZSwge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB2YWx1ZSxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJT3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdC1sYWJlbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUpXCI+PC9zcGFuPlxuPGkgY2xhc3M9XCJkZWxldGUgaWNvblwiIChjbGljayk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9pPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdExhYmVsPFQ+IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxhYmVsXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5PzpzdHJpbmc7XG5cbiAgICBAT3V0cHV0KFwiZGVzZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvbkRlc2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMub25EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgS2V5Q29kZSwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzXCI+XG48IS0tIE11bHRpLXNlbGVjdCBsYWJlbHMgLS0+XG4gICAgPHN1aS1tdWx0aS1zZWxlY3QtbGFiZWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkT3B0aW9ucztcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2VsZWN0ZWQpPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvc3VpLW11bHRpLXNlbGVjdC1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIEhlbHBlciB0ZXh0IC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIlxuICAgICBbY2xhc3MuZGVmYXVsdF09XCJoYXNMYWJlbHNcIlxuICAgICBbY2xhc3MuZmlsdGVyZWRdPVwiISFxdWVyeSAmJiAhaXNTZWFyY2hFeHRlcm5hbFwiPlxuICAgIFxuICAgIDwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzOyBlbHNlIHNlbGVjdGVkQmxvY2tcIj57eyBwbGFjZWhvbGRlciB9fTwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDwhLS0gU3VtbWFyeSBzaG93biB3aGVuIGxhYmVscyBhcmUgaGlkZGVuIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz4ge3sgc2VsZWN0ZWRNZXNzYWdlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJ0cnVlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09IDAgXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IG1heFNlbGVjdGVkTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IGlucHV0LnNlYXJjaCB7XG4gICAgd2lkdGg6IDEyZW0gIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVW10+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zOlRbXTtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9ucz86VVtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uc0NoYW5nZTpFdmVudEVtaXR0ZXI8VVtdPjtcblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWRSZWFjaGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGlvbnMsIHRoZW4gZW1wdHkgdGhlIHJlc3VsdHMgY29tcGxldGVseS5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6VFtdID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBzZWFyY2ggcmVzdWx0cyBcXCBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHIgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmluZChvID0+IHIgPT09IG8pID09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzTGFiZWxzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTGFiZWxzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNMYWJlbHMoaGFzTGFiZWxzOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTGFiZWxzID0gaGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFNlbGVjdGVkOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRSZWFjaGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWF4aW11bSB0aGVuIHdlIGNhbiBpbW1lZGlhdGVseSByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5tYXhTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkubWF4U2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcIm1heFwiLCB0aGlzLm1heFNlbGVjdGVkLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tdWx0aXBsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VVtdPigpO1xuXG4gICAgICAgIHRoaXMuaGFzTGFiZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb25zIHN0aWxsIGV4aXN0LlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fd3JpdHRlbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5fd3JpdHRlbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5oYXNMYWJlbHMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeShmYWxzZSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWVzOlVbXSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZXMgdG8gb3B0aW9ucy5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IGl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBvcHRpb25zIHRvIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbnMgXFwge29wdGlvbn0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKHNvID0+IHNvICE9PSBvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuQmFja3NwYWNlICYmIHRoaXMucXVlcnkgPT09IFwiXCIgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHJpZ2h0bW9zdCBvcHRpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGJhY2tzcGFjZSBpbiB0aGUgc2VhcmNoIGlucHV0LlxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbih0aGlzLnNlbGVjdGVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbnNDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VVtdLCBTdWlNdWx0aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpTXVsdGlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIiBjbGFzcz1cImRlZmF1bHQgdGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeVwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XG48IS0tIFNlbGVjdGVkIGl0ZW0gLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeSB8fCBzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIj5cbiAgICA8c3BhbiAjb3B0aW9uVGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb25UZW1wbGF0ZSAmJiBzZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWRcIiBbaW5uZXJIVE1MXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXIoc2VsZWN0ZWRPcHRpb24pXCI+PC9zcGFuPlxuPC9kaXY+XG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cImlzU2VhcmNoYWJsZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgKm5nSWY9XCJpc1NlYXJjaGFibGUgJiYgYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAge3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFU+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb24/OlQ7XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9uPzpVO1xuXG4gICAgQFZpZXdDaGlsZChcIm9wdGlvblRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9vcHRpb25UZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMuc2luZ2xlLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVPigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3dyaXR0ZW5PcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGUgb3B0aW9uIHN0aWxsIGV4aXN0cy5cbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnZhbHVlR2V0dGVyKHRoaXMuc2VsZWN0ZWRPcHRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBhbiB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHRoaXMuX3dyaXR0ZW5PcHRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcXVlcnlVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHF1ZXJ5IGlzIHVwZGF0ZWQsIHdlIGp1c3QgYWJhbmRvbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIENob29zZSBhbmQgZW1pdCB0aGUgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uQ2hhbmdlLmVtaXQodGhpcy52YWx1ZUdldHRlcihvcHRpb24pKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeSgpO1xuXG4gICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gbG9hZGVkLCB3ZSBjYW4gaW1tZWRpYXRlbHkgbWF0Y2ggdGhlIG5nTW9kZWwgdmFsdWUgdG8gYW4gb3B0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUZpZWxkICYmIHRoaXMuc2VhcmNoU2VydmljZS5oYXNJdGVtTG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWFyY2ggc2VydmljZSBoYXMgYSBzZWxlY3RlZCBsb29rdXAgZnVuY3Rpb24sIG1ha2UgdXNlIG9mIHRoYXQgdG8gbG9hZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbik7XG5cbiAgICAgICAgLy8gQm9sZGVucyB0aGUgaXRlbSBzbyBpdCBhcHBlYXJzIHNlbGVjdGVkIGluIHRoZSBkcm9wZG93bi5cbiAgICAgICAgb3B0aW9uLmlzQWN0aXZlID0gb3B0aW9uLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkT3B0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd1NlbGVjdGVkT3B0aW9uKCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZXMgdGhlIGFjdGl2ZSBjbGFzcyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICBpZiAodGhpcy5fcmVuZGVyZWRPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25UZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGVtcGxhdGUodGhpcy5fb3B0aW9uVGVtcGxhdGVTaWJsaW5nLCB0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVmFsdWUgYWNjZXNzb3IgZGlyZWN0aXZlIGZvciB0aGUgc2VsZWN0IHRvIHN1cHBvcnQgbmdNb2RlbC5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3RcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKHNlbGVjdGVkT3B0aW9uQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgU3VpU2VsZWN0PFQsIFU+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTW9kdWxlIH0gZnJvbSBcIi4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdCwgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0XCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3QsIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0XCI7XG5pbXBvcnQgeyBTdWlNdWx0aVNlbGVjdExhYmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aS1zZWxlY3QtbGFiZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlLFxuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RMYWJlbCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVNlbGVjdCxcbiAgICAgICAgU3VpU2VsZWN0T3B0aW9uLFxuICAgICAgICBTdWlTZWxlY3RTZWFyY2gsXG4gICAgICAgIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0LFxuICAgICAgICBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3JcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgU2lkZWJhclRyYW5zaXRpb24gPSBcIm92ZXJsYXlcIiB8IFwicHVzaFwiIHwgXCJzY2FsZSBkb3duXCIgfCBcInVuY292ZXJcIiB8IFwic2xpZGUgYWxvbmdcIiB8IFwic2xpZGUgb3V0XCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyVHJhbnNpdGlvbiA9IHtcbiAgICBPdmVybGF5OiBcIm92ZXJsYXlcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBQdXNoOiBcInB1c2hcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTY2FsZURvd246IFwic2NhbGUgZG93blwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFVuY292ZXI6IFwidW5jb3ZlclwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlQWxvbmc6IFwic2xpZGUgYWxvbmdcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZU91dDogXCJzbGlkZSBvdXRcIiBhcyBTaWRlYmFyVHJhbnNpdGlvblxufTtcblxuZXhwb3J0IHR5cGUgU2lkZWJhckRpcmVjdGlvbiA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRGlyZWN0aW9uID0ge1xuICAgIExlZnQ6IFwibGVmdFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFRvcDogXCJ0b3BcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBTaWRlYmFyRGlyZWN0aW9uXG59O1xuXG5leHBvcnQgY2xhc3MgU2lkZWJhclNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc1Zpc2libGU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBbmltYXRpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgd2FzSnVzdE9wZW5lZDpib29sZWFuO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpTaWRlYmFyRGlyZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSBfd2lkdGg6bnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uUmlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3aWR0aCh3aWR0aDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Cb3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5faGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGVpZ2h0KGhlaWdodDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmlzaWJsZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgcHVibGljIHdpZHRoQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBwdWJsaWMgaGVpZ2h0Q2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHByaXZhdGUgX2lzQW5pbWF0aW5nVGltZW91dDpudW1iZXI7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpTaWRlYmFyVHJhbnNpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzVmlzaWJsZTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAyNjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBTaWRlYmFyVHJhbnNpdGlvbi5VbmNvdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlLmVtaXQoaXNWaXNpYmxlKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZSk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faXNBbmltYXRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVWaXNpYmxlU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoIXRoaXMuaXNWaXNpYmxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSwgU2lkZWJhclRyYW5zaXRpb24sIFNpZGViYXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyIHtcbiAgICBwdWJsaWMgc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2lkZWJhclwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpTaWRlYmFyVHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpTaWRlYmFyVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbi5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuc2V0Q2xhc3MoYywgZmFsc2UpKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIHRydWUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6U2lkZWJhckRpcmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjpTaWRlYmFyRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyh0aGlzLnNlcnZpY2UuZGlyZWN0aW9uLCB0cnVlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzVmlzaWJsZShpc1Zpc2libGU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGVDaGFuZ2UoKTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hbmltYXRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzQW5pbWF0aW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNBbmltYXRpbmc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IFNpZGViYXJTZXJ2aWNlKCk7XG4gICAgICAgIC8vIFdlIHNldCB0aGUgZGVmYXVsdCBoZXJlIGFzIHdlbGwgdG8gZm9yY2UgdGhlIGNsYXNzZXMgdG8gdXBkYXRlLlxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBTaWRlYmFyVHJhbnNpdGlvbi5VbmNvdmVyO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFNpZGViYXJEaXJlY3Rpb24uTGVmdDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVEaW1lbnNpb25zKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEaW1lbnNpb25zKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS53aWR0aCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmhlaWdodCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDbGFzcyhjbGFzc05hbWU6c3RyaW5nLCBpc0FkZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlVmlzaWJsZVN0YXRlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItc2libGluZ1wiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhclNpYmxpbmcge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpTaWRlYmFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZFdoZW5WaXNpYmxlOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnB1c2hlclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzRGltbWVkV2hlblZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiKTtcblxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gIT09IFNpZGViYXJUcmFuc2l0aW9uLk92ZXJsYXkgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5TY2FsZURvd24pIHtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5zZXJ2aWNlLndpZHRofXB4LCAke3RoaXMuc2VydmljZS5oZWlnaHR9cHgsIDApYDtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgIXRoaXMuc2VydmljZS53YXNKdXN0T3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyU2libGluZyB9IGZyb20gXCIuL3NpZGViYXItc2libGluZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhci1jb250YWluZXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJDb250YWluZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnB1c2hhYmxlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhcilcbiAgICBwdWJsaWMgc2lkZWJhcjpTdWlTaWRlYmFyO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTaWRlYmFyU2libGluZylcbiAgICBwdWJsaWMgc2libGluZzpTdWlTaWRlYmFyU2libGluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpZGViYXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGluY2x1ZGUgYSA8c3VpLXNpZGViYXI+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHRoaXMuc2lkZWJhci5zZXJ2aWNlO1xuXG4gICAgICAgIGlmICghdGhpcy5zaWJsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyLXNpYmxpbmc+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2libGluZy5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVNpZGViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXItY29udGFpbmVyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyU2libGluZyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci1zaWJsaW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlTaWRlYmFyLFxuICAgICAgICBTdWlTaWRlYmFyQ29udGFpbmVyLFxuICAgICAgICBTdWlTaWRlYmFyU2libGluZ1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTaWRlYmFyLFxuICAgICAgICBTdWlTaWRlYmFyQ29udGFpbmVyLFxuICAgICAgICBTdWlTaWRlYmFyU2libGluZ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUYWIge1xuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG4gICAgcHVibGljIGhlYWRlcjpTdWlUYWJIZWFkZXI7XG4gICAgcHVibGljIGNvbnRlbnQ6U3VpVGFiQ29udGVudDtcbiAgICBwdWJsaWMgaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaGVhZGVyOlN1aVRhYkhlYWRlciwgY29udGVudDpTdWlUYWJDb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBoZWFkZXIuaWQ7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICAgIC8vIFNvIHRoYXQgdGhlIGhlYWRlciBhbmQgY29udGVudCBpc0FjdGl2ZSBwcm9wZXJ0aWVzIGFyZSBhbHdheXMgaW4gc3luYy5cbiAgICAgICAgdGhpcy5oZWFkZXIuaXNBY3RpdmVDaGFuZ2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb250ZW50LmlzQWN0aXZlID0gdGhpcy5pc0FjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNBY3RpdmUgZXZlcnkgdGltZS5cbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFVzZSBgc2V0QWN0aXZlU3RhdGVgIHNvIGFzIG5vdCB0byBmaXJlICdleHRlcm5hbCBjaGFuZ2VzJyBldmVudC5cbiAgICAgICAgdGhpcy5oZWFkZXIuc2V0QWN0aXZlU3RhdGUoYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlcyBhY2Nlc3NpbmcgLmhlYWRlci5pc0Rpc2FibGVkIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5pc0Rpc2FibGVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBJbnB1dCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRhYkhlYWRlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJIZWFkZXIge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiSGVhZGVyXCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIC8vIEludGVybmFsbHkga2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgaGVhZGVyIGlzIGFjdGl2ZS5cbiAgICBwcml2YXRlIF9pc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgLy8gRW5hYmxlcyB1c2Ugb2YgWyhpc0FjdGl2ZSldIHNvIHN0YXRlIGNhbiBiZSBzZXQgdXNpbmcgYm9vbGVhbnMuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzQWN0aXZlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIG9ubHkgd2hlbiBgaXNBY3RpdmVgIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW5wdXQuXG4gICAgcHVibGljIGlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gZGVhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uQWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaXMgZGVhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBhY3RpdmF0ZWQuXG4gICAgQE91dHB1dChcImRlYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25EZWFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIE9ubHkgdXNlZCBieSBASW5wdXQoKSwgcnVucyB3aGVuZXZlciB1c2VyIGlucHV0IGNoYW5nZXMgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gUnVuIGluIHRpbWVvdXQgYmVjYXVzZSBgaXNEaXNhYmxlZGAgY2FuIHByb2hpYml0IHVzZXIgZnJvbSBjaGFuZ2luZyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBzbyB1cGRhdGUgaXMgZGVsYXllZCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvci5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGFsbG93IGNoYW5nZSBpZiB0YWIgaGVhZGVyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICAgICAgICAgIGlzQWN0aXZlID0gIXRoaXMuaXNEaXNhYmxlZCA/IGFjdGl2ZSA6IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTdGF0ZShpc0FjdGl2ZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgJ2V4dGVybmFsIGNoYW5nZScgZXZlbnQgYXMgdXNlciBpbnB1dCBoYXMgb2NjdXJlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5lbWl0KGlzQWN0aXZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQoZGlzYWJsZWQ6Ym9vbGVhbikge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB2YWx1ZSBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdG8gY3VycmVudCBvbmUuXG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkICE9PSBkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgICAgICAgICAvLyBJZiBub3cgZGlzYWJsZWQsIHRoZW4gdGFiIGhlYWRlciBtdXN0IGJlIGRlYWN0aXZhdGVkLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsbHkgdXBkYXRlIGFjdGl2ZSBzdGF0ZS5cbiAgICBwdWJsaWMgc2V0QWN0aXZlU3RhdGUoYWN0aXZlOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICAvLyBJZiAoY2FzdCkgYWN0aXZlIHZhbHVlIGhhcyBjaGFuZ2VkOlxuICAgICAgICBpZiAoISF0aGlzLl9pc0FjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlID0gYWN0aXZlO1xuXG4gICAgICAgICAgICAvLyBGaXJlIHRoZSBhcHByb3ByaWF0ZSBhY3RpdmF0aW9uIGV2ZW50LlxuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZWFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3MsIGVtaXQgYSBjaGFuZ2UgdG8gYGlzQWN0aXZlYCwgc28gWyhpc0FjdGl2ZSldIHdvcmtzIGNvcnJlY3RseS5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZS5lbWl0KGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSB0YWIgd2hlbiBjbGlja2VkLCBzbyBsb25nIGFzIGl0IGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJDb250ZW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkNvbnRlbnQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRhYlwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJDb250ZW50XCIpXG4gICAgcHVibGljIGlkOnN0cmluZztcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90YWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXRhYnNldFwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlUYWJIZWFkZXIpXG4gICAgcHJpdmF0ZSBfdGFiSGVhZGVyczpRdWVyeUxpc3Q8U3VpVGFiSGVhZGVyPjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiQ29udGVudClcbiAgICBwcml2YXRlIF90YWJDb250ZW50czpRdWVyeUxpc3Q8U3VpVGFiQ29udGVudD47XG5cbiAgICAvLyBMaXN0IG9mIGFsbCB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgcHVibGljIHRhYnM6VGFiW107XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAgcHJpdmF0ZSBfYWN0aXZlVGFiOlRhYjtcblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlVGFiKCk6VGFiIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRhYjtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHNldHRpbmcgYSB0YWIgYXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLCBpdCBhdXRvbWF0aWNhbGx5IGdhaW5zXG4gICAgLy8gYGlzQWN0aXZlYCBzdGF0dXMgKHNhdmVzIGxpdHRlcmluZyBgaXNBY3RpdmUgPSB0cnVlYCBldmVyeXdoZXJlKS5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVRhYih0YWI6VGFiKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIHRpbWVzIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCBpcyBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfYmFycmllckNvdW50Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIEZpcmUgYGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWRgIHdoZW4gdGhlIHF1ZXJ5IGxpc3RzIGNoYW5nZS5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG4gICAgICAgIHRoaXMuX3RhYkNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpKTtcblxuICAgICAgICAvLyBJbml0aWFsbHkgbG9hZCB0aGUgdGFicy5cbiAgICAgICAgdGhpcy5sb2FkVGFicygpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGVpdGhlciB0aGUgdGFiIGhlYWRlcnMgb3IgdGFiIGNvbnRlbnRzIHF1ZXJ5IGxpc3RzIHVwZGF0ZS5cbiAgICBwcml2YXRlIGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgYXJlIHVzaW5nIGEgJ2NvdW50aW5nIGJhcnJpZXIgb2YgbiA9IDInLCBpLmUuIHRoZSBjb2RlIHdpdGhpbiBvbmx5IHJ1bnMgYWZ0ZXIgdGhlIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2UuXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCBib3RoIHRoZSBoZWFkZXJzIGFuZCBjb250ZW50cyBxdWVyeSBsaXN0cyBjYW4gdXBkYXRlIGJlZm9yZSB3ZSBydW4gY29kZSB0aGF0IG1hdGNoZXMgdGhlIHR3byB1cC5cbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50Kys7XG5cbiAgICAgICAgaWYgKHRoaXMuX2JhcnJpZXJDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJhcnJpZXIgc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFicy5cbiAgICAgICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3RzIHRhYiBoZWFkZXJzIHRvIHRhYiBjb250ZW50cywgYW5kIGNyZWF0ZXMgYSB0YWIgaW5zdGFuY2UgZm9yIGVhY2ggcGFpcmluZy5cbiAgICBwcml2YXRlIGxvYWRUYWJzKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgdGFicyB0aGF0IG5vIGxvbmdlciBoYXZlIGFuIGFzc29jaWF0ZWQgaGVhZGVyLlxuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gISF0aGlzLl90YWJIZWFkZXJzLmZpbmQodEggPT4gdEggPT09IHQuaGVhZGVyKSk7XG5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVyc1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgbG9hZGVkIGhlYWRlcnMgd2l0aCBhdHRhY2hlZCB0YWIgaW5zdGFuY2VzLlxuICAgICAgICAgICAgLmZpbHRlcih0SCA9PiAhdGhpcy50YWJzLmZpbmQodCA9PiB0LmhlYWRlciA9PT0gdEgpKVxuICAgICAgICAgICAgLmZvckVhY2godEggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl90YWJDb250ZW50cy5maW5kKHRDID0+IHRDLmlkID09PSB0SC5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3IgaWYgYW4gYXNzb2NpYXRlZCB0YWIgY29udGVudCBjYW5ub3QgYmUgZm91bmQgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgW3N1aVRhYkhlYWRlcl0gbXVzdCBoYXZlIGEgcmVsYXRlZCBbc3VpVGFiQ29udGVudF0uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YWIgaW5zdGFuY2UgZm9yIHRoaXMgaGVhZGVyICYgY29udGVudCBjb21iby5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKHRILCBjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBhbnkgZXh0ZXJuYWwgY2hhbmdlcyBpbiB0aGUgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZS4gRXh0ZXJuYWwgY2hhbmdlcyBhcmUgdHJpZ2dlcmVkIGJ5IHVzZXIgaW5wdXQuXG4gICAgICAgICAgICAgICAgdGFiLmhlYWRlci5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSGVhZGVyQWN0aXZlQ2hhbmdlZCh0YWIpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbmV3IGluc3RhbmNlIHRvIHRoZSBsaXN0IG9mIHRhYnMuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHRhYiBhbiBpbmRleCAod2hpY2ggZGVub3RlcyB0aGUgb3JkZXIgdGhleSBwaHlzaWNhbGx5IGFwcGVhciBpbikuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0SCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKTtcbiAgICAgICAgICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU29ydCB0aGUgdGFicyBieSB0aGVpciBpbmRleC5cbiAgICAgICAgdGhpcy50YWJzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVUYWIpIHsgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5vIGN1cnJlbnQgZXhpc3RpbmcgYWN0aXZlIHRhYnMuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBhY3RpdmF0ZSB0aGUgZmlyc3QgYXZhaWxhYmxlIHRhYi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVGaXJzdFRhYigpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRoaXMuYWN0aXZlVGFiKSkgeyAvLyBPJ3dpc2UgY2hlY2sgaWYgY3VycmVudCBhY3RpdmUgdGFiIGhhcyBiZWVuIGRlbGV0ZWQuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBmaW5kIHRoZSBjbG9zZXN0LlxuICAgICAgICAgICAgLy8gVXNlIGBzZXRUaW1lb3V0YCBhcyB0aGlzIGNhdXNlcyBhICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yIG8nd2lzZS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIodGhpcy5hY3RpdmVUYWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBFcnJvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRhYnMgaW4gdGhlIHRhYnNldC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgaGF2ZSBubyB0YWJzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZSBpcyBleHRlcm5hbGx5IGNoYW5nZWQuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBhY3RpdmF0ZWQsIGJ1dCB3YXMgbm90IHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICh0YWIuaXNBY3RpdmUgJiYgdGhpcy5hY3RpdmVUYWIgIT09IHRhYikge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb2YgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdCAhPT0gdGFiKS5mb3JFYWNoKHQgPT4gdC5pc0FjdGl2ZSA9IGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiB0byB0aGlzIG9uZS5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhYiBoYXMgYmVjb21lIGRlYWN0aXZhdGVkLCBidXQgd2FzIHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICghdGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiID09PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IHRhYiB0byBpdC5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgZmlyc3QgdGFiIGluIHRoZSBzZXQuXG4gICAgcHVibGljIGFjdGl2YXRlRmlyc3RUYWIoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGVzIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gYSBnaXZlbiBvbmUuXG4gICAgcHVibGljIGFjdGl2YXRlQ2xvc2VzdFRhYih0YWI6VGFiKTp2b2lkIHtcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGU6VGFiIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIGV4aXRlZCB0YWIncyBpbmRleCBpcyBoaWdoZXIgdGhhbiBhbGwgYXZhaWxhYmxlIHRhYnMsXG4gICAgICAgIGlmICh0YWIuaW5kZXggPj0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGxhc3QgdGFiLlxuICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1t0aGlzLnRhYnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGF0IGRpZG4ndCB3b3JrLCB0cnkgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgaWYgKCFuZXh0QXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFicy5maW5kKHQgPT4gdCA9PT0gdGFiKSkgeyAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiIG5vIGxvbmdlciBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpdCB3aXRoIGEgdGFiIGF0IHRoZSBzYW1lIGluZGV4LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGFiLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIE9yIGlmIHRoZSBleGl0ZWQgdGFiIHN0aWxsIGV4aXN0cyxcbiAgICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgdGFiIGltbWVkaWF0ZWx5IHRvIHRoZSBsZWZ0LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbTWF0aC5tYXgodGFiLmluZGV4IC0gMSwgMCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG93ZXZlciwgaWYgdGhlIGNob3NlbiB0YWIgaXMgZGlzYWJsZWQsXG4gICAgICAgIGlmIChuZXh0QXZhaWxhYmxlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gaXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIobmV4dEF2YWlsYWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IG5leHRBdmFpbGFibGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVGFic2V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJzZXRcIjtcbmltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVRhYnNldCxcbiAgICAgICAgU3VpVGFiSGVhZGVyLFxuICAgICAgICBTdWlUYWJDb250ZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVRhYnNldCxcbiAgICAgICAgU3VpVGFiSGVhZGVyLFxuICAgICAgICBTdWlUYWJDb250ZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vIENvbGxlY3Rpb25zXG5pbXBvcnQge1xuICAgIFN1aU1lc3NhZ2VNb2R1bGUsXG4gICAgU3VpUGFnaW5hdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9jb2xsZWN0aW9ucy9pbnRlcm5hbFwiO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQge1xuICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICBTdWlDaGVja2JveE1vZHVsZSxcbiAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICBTdWlQcm9ncmVzc01vZHVsZSxcbiAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgU3VpU2VhcmNoTW9kdWxlLFxuICAgIFN1aVNpZGViYXJNb2R1bGUsXG4gICAgU3VpVGFic01vZHVsZSxcbiAgICBTdWlTZWxlY3RNb2R1bGUsXG4gICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9tb2R1bGVzL2ludGVybmFsXCI7XG5cbi8vIEJlaGF2aW9yc1xuaW1wb3J0IHtcbiAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vYmVoYXZpb3JzL2ludGVybmFsXCI7XG5cbi8vIE1pc2NcbmltcG9ydCB7XG4gICAgU3VpVXRpbGl0eU1vZHVsZVxufSBmcm9tIFwiLi9taXNjL2ludGVybmFsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICAvLyBDb2xsZWN0aW9uc1xuICAgICAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgICAgICBTdWlQYWdpbmF0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIE1vZHVsZXNcbiAgICAgICAgU3VpQWNjb3JkaW9uTW9kdWxlLFxuICAgICAgICBTdWlDaGVja2JveE1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICAgICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFN1aU1vZGFsTW9kdWxlLFxuICAgICAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICAgICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgICAgIFN1aVJhdGluZ01vZHVsZSxcbiAgICAgICAgU3VpU2VhcmNoTW9kdWxlLFxuICAgICAgICBTdWlTZWxlY3RNb2R1bGUsXG4gICAgICAgIFN1aVNpZGViYXJNb2R1bGUsXG4gICAgICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gQmVoYXZpb3JzXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNaXNjXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIigoLyoqIEB0eXBlIHs/fSAqLyAoJGV4dGVuZCkpKS5kZWZhdWx0IiwiZm9ybWF0IiwiaXNVQVdlYlZpZXdbXCJkZWZhdWx0XCJdIiwiYm93c2VyLm1vYmlsZSIsImJvd3Nlci50YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRU0sSUFBSSxHQUFpQjtJQUN2QixVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDM0g7UUFDRCxXQUFXLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FB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