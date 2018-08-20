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
/** @nocollapse */
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
    /**
     * @return {?}
     */
    get _queueFirst() {
        return this._queue[0];
    }
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
    /**
     * @param {?} renderer
     * @return {?}
     */
    registerRenderer(renderer) {
        this._renderer = renderer;
        this.performTransition();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    registerElement(element) {
        this._element = element;
        this.performTransition();
    }
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
    /**
     * @return {?}
     */
    stopAll() {
        this.clearQueue();
        this.stop();
    }
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
/** @nocollapse */
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
/** @nocollapse */
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
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updatePages();
    }
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._isExpanded;
    }
    /**
     * @return {?}
     */
    get isCollapsed() {
        return !this.isExpanded && !this.isCollapsing;
    }
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
/** @nocollapse */
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
// unsupported: template constraints.
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
// unsupported: template constraints.
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
                return /** @type {?} */ ((object));
            }
            /** @type {?} */
            let recursed;
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = (/** @type {?} */ ((object)))[p[i]];
            }
            return /** @type {?} */ ((recursed));
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
        /** @type {?} */
        const factory = this._componentFactoryResolver.resolveComponentFactory(/** @type {?} */ (type));
        /** @type {?} */
        const injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
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
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} viewContainer
     * @return {?}
     */
    attachToView(componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    }
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    attachToApplication(componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    }
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    detachFromApplication(componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    }
    /**
     * @template T
     * @param {?} componentRef
     * @param {?} element
     * @return {?}
     */
    moveToElement(componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    }
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    moveToDocumentBody(componentRef) {
        this.moveToElement(componentRef, /** @type {?} */ ((document.querySelector("body"))));
    }
    /**
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    detachFromDocument(componentRef) {
        /** @type {?} */
        const element = /** @type {?} */ (componentRef.location.nativeElement);
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}
SuiComponentFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
        this._weekStartsOn = /** @type {?} */ (locale.firstDayOfWeek);
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
        this._locale = /** @type {?} */ (defaultLocale);
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
        this.marginal = /** @type {?} */ (interval) + 1;
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
/** @nocollapse */
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
    Year: /** @type {?} */ ("year"),
    Month: /** @type {?} */ ("month"),
    Date: /** @type {?} */ ("date"),
    Datetime: /** @type {?} */ ("datetime"),
    Time: /** @type {?} */ ("time")
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
/** @nocollapse */
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
    Hover: /** @type {?} */ ("hover"),
    Click: /** @type {?} */ ("click"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Focus: /** @type {?} */ ("focus"),
    Manual: /** @type {?} */ ("manual")
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
        // Whenever the anchor is set (which is when the popup is created), recreate the positioning service with the appropriate options.
        this.positioningService = new PositioningService(anchor, this._container.element, this.config.placement, ".dynamic.arrow");
    }
    /**
     * @return {?}
     */
    get direction() {
        if (this.positioningService) {
            return this.positioningService.actualPlacement.split(" ").shift();
        }
    }
    /**
     * @return {?}
     */
    get alignment() {
        if (this.positioningService) {
            return this.positioningService.actualPlacement.split(" ").pop();
        }
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
            classes["inverted"] = true;
        }
        if (this.config.isBasic) {
            classes["basic"] = true;
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
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, () => {
                /** @type {?} */
                const autoFocus = /** @type {?} */ (this.elementRef.nativeElement.querySelector("[autofocus]"));
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(() => autoFocus.focus(), 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(() => autoFocus.focus(), this.config.transitionDuration);
                }
            }));
            // Refresh the popup position after a brief delay to allow for browser processing time.
            this.positioningService.placement = this.config.placement;
            setTimeout(() => this.positioningService.update());
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
                     [placement]="positioningService.actualPlacement"
                     [inverted]="config.isInverted"></sui-popup-arrow>
</div>
`,
                styles: [`
.ui.popup {
    /* Autofit popup to the contents. */
    right: auto;
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
/** @nocollapse */
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
        // Move the generated element to the body to avoid any positioning issues.
        this._componentFactory.moveToDocumentBody(this._componentRef);
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", (e) => this.onDocumentClick(e));
        // Start popup open transition.
        this.popup.open();
        /** @type {?} */
        const lifecycle = (/** @type {?} */ (this)).popupOnOpen;
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
        /** @type {?} */
        const lifecycle = (/** @type {?} */ (this)).popupOnClose;
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
            const target = /** @type {?} */ (e.target);
            // Close the popup if the click is outside of the popup element.
            if (!(/** @type {?} */ (this._element.nativeElement)).contains(target)) {
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
            this._contentComponentRef = this._componentFactory.createComponent(/** @type {?} */ (this._component));
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
            /** @type {?} */
            const dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
            return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
        }
        else {
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
    <div [class.center]="wrapContent">
        <ng-content></ng-content>
    </div>
</div>
`,
                styles: [`
:host.dimmer {
    transition: none;
}
`]
            },] },
];
/** @nocollapse */
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
/** @type {?} */
const DropdownAutoCloseType = {
    ItemClick: /** @type {?} */ ("itemClick"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Disabled: /** @type {?} */ ("disabled")
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
    /**
     * @param {?} child
     * @return {?}
     */
    isChildRegistered(child) {
        return this === child || !!this.children
            .find(c => !!c.children
            .find(cChild => cChild.isChildRegistered(child)));
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children.forEach(c => {
            c.parent = undefined;
        });
        this.children = [];
    }
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
        /** @type {?} */
        const element = /** @type {?} */ (this.element.nativeElement);
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
/** @nocollapse */
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
                const target = /** @type {?} */ (e.target);
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
        if (this._service.isOpen && !this._service.isNested) {
            /** @type {?} */
            const target = /** @type {?} */ (e.target);
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(kC => kC === e.keyCode)) {
                e.preventDefault();
            }
            const [selected] = this.selectedItems.slice(-1);
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
/** @nocollapse */
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
/** @nocollapse */
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
    /**
     * @return {?}
     */
    get component() {
        return this._componentRef.instance;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onApprove(callback) {
        this.component.onApprove.subscribe((res) => callback(res));
        return this;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onDeny(callback) {
        this.component.onDeny.subscribe((res) => callback(res));
        return this;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) {
        this.component.approve(result);
    }
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) {
        this.component.deny(result);
    }
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
    Mini: /** @type {?} */ ("mini"),
    Tiny: /** @type {?} */ ("tiny"),
    Small: /** @type {?} */ ("small"),
    Normal: /** @type {?} */ ("normal"),
    Large: /** @type {?} */ ("large")
};
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
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
}
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
        this._originalContainer = this._element.nativeElement.parentNode; /** @type {?} */
        ((document.querySelector("body"))).appendChild(this._element.nativeElement);
        /** @type {?} */
        const templateElement = /** @type {?} */ (this.templateSibling.element.nativeElement);
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        const element = /** @type {?} */ (this._modalElement.nativeElement);
        setTimeout(() => {
            this.updateScroll();
        });
        /** @type {?} */
        const autoFocus = /** @type {?} */ (element.querySelector("[autofocus]"));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
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
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    }
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
    /**
     * @return {?}
     */
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    /**
     * @return {?}
     */
    updateScroll() {
        /** @type {?} */
        const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
        /** @type {?} */
        const margin = fontSize * 3.5;
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            /** @type {?} */
            const element = /** @type {?} */ (this._modalElement.nativeElement);
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
<sui-dimmer class="page"
            [class.inverted]="isInverted"
            [(isDimmed)]="dimBackground"
            [isClickable]="false"
            [transitionDuration]="transitionDuration"
            [wrapContent]="false"
            (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scroll]="mustScroll"
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
</sui-dimmer>
`,
                styles: [`
.ui.dimmer {
    overflow-y: auto;
    display: flex !important;
}

/* avoid .scrolling as Semantic UI adds unwanted styles. */
.scroll {
    margin-top: 3.5rem !important;
    margin-bottom: 3.5rem !important;
    top: 0;
}
`]
            },] },
];
/** @nocollapse */
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
        /** @type {?} */
        const componentRef = this._componentFactory.createComponent(SuiModal);
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
            /** @type {?} */
            const contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            /** @type {?} */
            const contentElement = /** @type {?} */ (contentComponentRef.location.nativeElement);
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
/** @nocollapse */
SuiModalService.ctorParameters = () => [
    { type: SuiComponentFactory }
];

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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
            /** @type {?} */
            const queryLookup = /** @type {?} */ (this._optionsLookup.call(undefined, this._query));
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
    /**
     * @param {?} results
     * @return {?}
     */
    updateResults(results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    }
    /**
     * @param {?} initial
     * @return {?}
     */
    initialLookup(initial) {
        if (initial instanceof Array) {
            return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
        }
        return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
    }
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
            return o => /** @type {?} */ ((this._optionFormatter))(o, this.isSearchable ? this.query : undefined);
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
    /**
     * @return {?}
     */
    optionsUpdateHook() { }
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
/** @nocollapse */
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
                .map(v => /** @type {?} */ ((this.findOption(this.searchService.options, v))))
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
                    .map(v => /** @type {?} */ ((this.findOption(this.searchService.options, v))))
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
SuiSelect.ctorParameters = () => [
    { type: ElementRef },
    { type: SuiLocalizationService }
];
SuiSelect.propDecorators = {
    _optionTemplateSibling: [{ type: ViewChild, args: ["optionTemplateSibling", { read: ViewContainerRef },] }],
    selectedOptionChange: [{ type: Output }],
    placeholder: [{ type: Input }]
};
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
/** @nocollapse */
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
    Overlay: /** @type {?} */ ("overlay"),
    Push: /** @type {?} */ ("push"),
    ScaleDown: /** @type {?} */ ("scale down"),
    Uncover: /** @type {?} */ ("uncover"),
    SlideAlong: /** @type {?} */ ("slide along"),
    SlideOut: /** @type {?} */ ("slide out")
};
/** @type {?} */
const SidebarDirection = {
    Left: /** @type {?} */ ("left"),
    Right: /** @type {?} */ ("right"),
    Top: /** @type {?} */ ("top"),
    Bottom: /** @type {?} */ ("bottom")
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
/** @nocollapse */
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
            // Check if there are no current existing active tabs.
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(t => t === this.activeTab)) {
            // O'wise check if current active tab has been deleted.
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(() => this.activateClosestTab(this.activeTab));
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    }
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
    /**
     * @return {?}
     */
    activateFirstTab() {
        this.activeTab = this.tabs[0];
    }
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
    }
}
SuiTabset.decorators = [
    { type: Component, args: [{
                selector: "sui-tabset",
                template: `<ng-content></ng-content>`
            },] },
];
/** @nocollapse */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3MudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3Byb2dyZXNzL3Byb2dyZXNzLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL2NvbXBvbmVudHMvcmF0aW5nLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9yYXRpbmcvcmF0aW5nLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY2xhc3Nlcy9zZWxlY3QtYmFzZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL3NlbGVjdC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItc2libGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItY29udGFpbmVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NpZGViYXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2NsYXNzZXMvdGFiLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2RpcmVjdGl2ZXMvdGFiLWhlYWRlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1jb250ZW50LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL2NvbXBvbmVudHMvdGFic2V0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90YWJzL3RhYi5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9zdWkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbHVlc1wiO1xuXG5jb25zdCBlbkdCOklMb2NhbGVWYWx1ZXMgPSB7XG4gICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBtb250aHM6IFtcbiAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuICAgICAgICBdLFxuICAgICAgICBtb250aHNTaG9ydDogW1xuICAgICAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5czogW1xuICAgICAgICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXNOYXJyb3c6IFtcbiAgICAgICAgICAgIFwiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXG4gICAgICAgIF0sXG4gICAgICAgIHRpbWVzT2ZEYXk6IFtcbiAgICAgICAgICAgIFwiYS5tLlwiLCBcInAubS5cIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5VXBwZXJjYXNlOiBbXG4gICAgICAgICAgICBcIkFNXCIsIFwiUE1cIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5TG93ZXJjYXNlOiBbXG4gICAgICAgICAgICBcImFtXCIsIFwicG1cIlxuICAgICAgICBdLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICB0aW1lOiBcImg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZXRpbWU6IFwiRCBNTU1NIFlZWVkgaDptbSBBXCIsXG4gICAgICAgICAgICBkYXRlOiBcIkQgTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICBtb250aDogXCJNTU1NIFlZWVlcIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgIG5vUmVzdWx0czoge1xuICAgICAgICAgICAgaGVhZGVyOiBcIk5vIFJlc3VsdHNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBzZWFyY2ggcmV0dXJuZWQgbm8gcmVzdWx0cy5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgbm9SZXN1bHRzTWVzc2FnZTogXCJObyByZXN1bHRzXCIsXG4gICAgICAgIHNpbmdsZToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IG9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIG11bHRpOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QuLi5cIixcbiAgICAgICAgICAgIG1heFNlbGVjdGVkTWVzc2FnZTogXCJNYXggI3ttYXh9IHNlbGVjdGlvbnNcIixcbiAgICAgICAgICAgIHNlbGVjdGVkTWVzc2FnZTogXCIje2NvdW50fSBzZWxlY3Rpb25zXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuR0I7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUxvY2FsZVZhbHVlcywgSVBhcnRpYWxMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tIFwiLi4vbG9jYWxlcy9pbnRlcmZhY2VzL3ZhbHVlc1wiO1xuaW1wb3J0IGVuR0IgZnJvbSBcIi4uL2xvY2FsZXMvZW4tR0JcIjtcbmltcG9ydCAqIGFzICRleHRlbmQgZnJvbSBcImV4dGVuZFwiO1xuXG5mdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOlQpOlQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiBkZWVwRXh0ZW5kPFQsIFU+KHRhcmdldDpULCBzb3VyY2U6VSk6VCAmIFUge1xuICAgIC8vIFJvbGx1cC4uLlxuICAgIGNvbnN0IGV4dGVuZCA9ICgkZXh0ZW5kIGFzIGFueSkuZGVmYXVsdCB8fCAkZXh0ZW5kO1xuICAgIHJldHVybiBleHRlbmQodHJ1ZSwgdGFyZ2V0LCBzb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBsYW5nKGxhbmd1YWdlOnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiLVwiLCBcIlwiKTtcbn1cblxuaW50ZXJmYWNlIElMb2NhbGl6YXRpb25WYWx1ZXNDb250YWluZXIge1xuICAgIFtuYW1lOnN0cmluZ106SVBhcnRpYWxMb2NhbGVWYWx1ZXM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9sYW5ndWFnZTpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja1ZhbHVlczpJTG9jYWxlVmFsdWVzO1xuICAgIHByaXZhdGUgX3ZhbHVlczpJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyO1xuXG4gICAgcHVibGljIGdldCBsYW5ndWFnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYW5ndWFnZVVwZGF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVmFsdWVzID0gZW5HQjtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gXCJlbi1HQlwiO1xuICAgICAgICB0aGlzLmxvYWQoXCJlbi1HQlwiLCBlbkdCKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgaWYgKGxhbmcodGhpcy5fbGFuZ3VhZ2UpICE9PSBsYW5nKGxhbmd1YWdlKSkge1xuICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGxhbmd1YWdlOnN0cmluZyA9IHRoaXMubGFuZ3VhZ2UpOklMb2NhbGVWYWx1ZXMge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkZWVwQ2xvbmUodGhpcy5fZmFsbGJhY2tWYWx1ZXMpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTG9jYWxlICR7bGFuZ3VhZ2V9IGlzIG5vdCBsb2FkZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBkZWVwRXh0ZW5kKHZhbHVlcywgdGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSk7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGU8VCBleHRlbmRzIGtleW9mIElMb2NhbGVWYWx1ZXM+KFxuICAgICAgICB2YWx1ZXM6SUxvY2FsZVZhbHVlc1tUXSxcbiAgICAgICAgb3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SUxvY2FsZVZhbHVlc1tUXT5cbiAgICApOklMb2NhbGVWYWx1ZXNbVF0ge1xuICAgICAgICByZXR1cm4gZGVlcEV4dGVuZChkZWVwQ2xvbmUodmFsdWVzKSwgb3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChsYW5ndWFnZTpzdHJpbmcsIHZhbHVlczpJUGFydGlhbExvY2FsZVZhbHVlcyk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0gPSBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGF0Y2gobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICBkZWVwRXh0ZW5kKHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0sIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVycG9sYXRlKHZhbHVlOnN0cmluZywgdmFyaWFibGVzOltzdHJpbmcsIHN0cmluZ11bXSk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcy5yZWR1Y2UoKHMsIFtrLCB2XSkgPT4gcy5yZXBsYWNlKG5ldyBSZWdFeHAoYCN7JHtrfX1gLCBcImdcIiksIHYpLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtTdWlMb2NhbGl6YXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUge31cbiIsIi8vIFBvc3NpYmxlIGRpcmVjdGlvbnMgZm9yIGEgdHJhbnNpdGlvbi5cbmV4cG9ydCBlbnVtIFRyYW5zaXRpb25EaXJlY3Rpb24ge1xuICAgIEluLFxuICAgIE91dCxcbiAgICBFaXRoZXIsXG4gICAgU3RhdGljXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTpzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uO1xuXG4gICAgLy8gQ29udmVydHMgVHJhbnNpdGlvbkRpcmVjdGlvbiB0byBjbGFzcyBuYW1lLlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uQ2xhc3MoKTpzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uSW46IHJldHVybiBcImluXCI7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0OiByZXR1cm4gXCJvdXRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgaW5kaXZpZHVhbCBjbGFzc2VzIGZvciB0aGUgdHJhbnNpdGlvbiwgZS5nLiBcImZhZGUgb3V0XCIgLT4gW1wiZmFkZVwiLCBcIm91dFwiXS5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY2xhc3NlczpzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBvbkNvbXBsZXRlOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjpudW1iZXIgPSAyNTAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOlRyYW5zaXRpb25EaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOigoKSA9PiB2b2lkKSA9ICgpID0+IHt9KSB7XG5cbiAgICAgICAgdGhpcy50eXBlID0gbmFtZTtcblxuICAgICAgICAvLyBXZSBzZXQgYSBtaW5pbXVtIGR1cmF0aW9uIG9mIDFtcywgdG8gZ2l2ZSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbW1lZGlhdGUgdHJhbnNpdGlvblxuICAgICAgICAvLyB3aGlsc3QgYWxsb3dpbmcgcG9zaXRpb25pbmcgY2FsY3VsYXRpb25zIHRvIGhhcHBlbiB3aXRob3V0IGEgdmlzaWJsZSBmbGlja2VyLlxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIDEpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnR5cGUuc3BsaXQoXCIgXCIpO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25Db250cm9sbGVyIHtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjI7XG5cbiAgICBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZjtcblxuICAgIC8vIFVzZWQgdG8gZGVsYXkgYW5pbWF0aW9ucyB1bnRpbCB3ZSBoYXZlIGFuIGVsZW1lbnQgdG8gYW5pbWF0ZS5cbiAgICBwcml2YXRlIGdldCBfaXNSZWFkeSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2VsZW1lbnQgIT0gdW5kZWZpbmVkICYmIHRoaXMuX2NoYW5nZURldGVjdG9yICE9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSAnZGlzcGxheScgc3R5bGUgd2hlbiB2aXNpYmxlLlxuICAgIHByaXZhdGUgX2Rpc3BsYXk6c3RyaW5nO1xuXG4gICAgLy8gU3RvcmVzIHF1ZXVlZCB0cmFuc2l0aW9ucy5cbiAgICBwcml2YXRlIF9xdWV1ZTpUcmFuc2l0aW9uW107XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZzpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBbmltYXRpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSwgYW5kIHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcgb3V0LlxuICAgIHByaXZhdGUgX2lzVmlzaWJsZTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBoaWRkZW4sIGFuZCBub3Qgd2hpbGUgaXQgaXMgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIF9pc0hpZGRlbjpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc0hpZGRlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIaWRkZW47XG4gICAgfVxuXG4gICAgLy8gR2V0cyB0aGUgZmlyc3QgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUuXG4gICAgcHJpdmF0ZSBnZXQgX3F1ZXVlRmlyc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlWzBdO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGxhc3QgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUuXG4gICAgcHJpdmF0ZSBnZXQgX3F1ZXVlTGFzdCgpOlRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fcXVldWUubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBzZXRUaW1lb3V0IHBvaW50ZXIgZm9yIGNhbmNlbGxpbmcgdGhlIGFuaW1hdGlvbiBjYWxsYmFjay5cbiAgICBwcml2YXRlIF9hbmltYXRpb25UaW1lb3V0Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGlzSW5pdGlhbGx5VmlzaWJsZTpib29sZWFuID0gdHJ1ZSwgZGlzcGxheTpzdHJpbmcgPSBcImJsb2NrXCIpIHtcbiAgICAgICAgLy8gaXNJbml0aWFsbHlWaXNpYmxlIHNldHMgd2hldGhlciB0aGUgZWxlbWVudCBzdGFydHMgb3V0IHZpc2libGUuXG4gICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGlzSW5pdGlhbGx5VmlzaWJsZTtcbiAgICAgICAgdGhpcy5faXNIaWRkZW4gPSAhdGhpcy5faXNWaXNpYmxlO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgcmVuZGVyZXIgdG8gYmUgdXNlZCBmb3IgYW5pbWF0aW5nLlxuICAgIHB1YmxpYyByZWdpc3RlclJlbmRlcmVyKHJlbmRlcmVyOlJlbmRlcmVyMik6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBlbGVtZW50IHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbnMgb24uXG4gICAgcHVibGljIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50OkVsZW1lbnRSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIGNoYW5nZSBkZXRlY3RvciB0byBkZXRlY3QgY2hhbmdlcyB3aGVuIHVzaW5nIENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaC5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGFuZ2VEZXRlY3RvcihjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yID0gY2hhbmdlRGV0ZWN0b3I7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5pbWF0ZSh0cmFuc2l0aW9uOlRyYW5zaXRpb24pOnZvaWQge1xuICAgICAgICAvLyBUZXN0IGlmIHRyYW5zaXRpb24gaXMgb25lIG9mIHRoZSBsaXN0IHRoYXQgZG9lc24ndCBjaGFuZ2UgdGhlIHZpc2libGUgc3RhdGUuXG4gICAgICAgIC8vIFNob3VsZCB0aGVzZSBldmVudHVhbGx5IGJlY29tZSBjbGFzc2VzP1xuICAgICAgICBjb25zdCBpc0RpcmVjdGlvbmxlc3MgPSBbXCJqaWdnbGVcIiwgXCJmbGFzaFwiLCBcInNoYWtlXCIsIFwicHVsc2VcIiwgXCJ0YWRhXCIsIFwiYm91bmNlXCJdLmluZGV4T2YodHJhbnNpdGlvbi50eXBlKSAhPT0gLTE7XG4gICAgICAgIGlmIChpc0RpcmVjdGlvbmxlc3MpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5TdGF0aWM7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT0gdW5kZWZpbmVkIHx8IHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcikge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIG9wcG9zaXRlIG9mIHRoZSBjdXJyZW50IHZpc2libGUgc3RhdGUgYXV0b21hdGljYWxseSBpZiBub3Qgc2V0LCBvciBzZXQgdG8gZWl0aGVyIGRpcmVjdGlvbi5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gdGhpcy5faXNWaXNpYmxlID8gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQgOiBUcmFuc2l0aW9uRGlyZWN0aW9uLkluO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlIGFscmVhZHksIHNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoYXQgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcXVldWVMYXN0LmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcXVldWVMYXN0LmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIHRoZSB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBiZWZvcmUgYXR0ZW1wdGluZyB0byBwZXJmb3JtIGl0LlxuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHRyYW5zaXRpb24pO1xuXG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1UcmFuc2l0aW9uKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faXNSZWFkeSB8fCB0aGlzLl9pc0FuaW1hdGluZyB8fCAhdGhpcy5fcXVldWVGaXJzdCkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdHJhbnNpdGlvbiB1bnRpbCB3ZSBhcmUgcmVhZHksIG9yIGlmIHdlIGFyZSBhbmltYXRpbmcsIG9yIGlmIHRoZXJlIGFyZW4ndCBhbnkgdHJhbnNpdGlvbnMgaW4gdGhlIHF1ZXVlLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLl9xdWV1ZUZpcnN0O1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBmb3IgdHJhbnNpdGlvbmluZy5cbiAgICAgICAgdHJhbnNpdGlvbi5jbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBjKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpbmdgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbi5kaXJlY3Rpb25DbGFzcyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBTZW1hbnRpYyBVSSBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmAsIGAke3RyYW5zaXRpb24uZHVyYXRpb259bXNgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudCwgYGRpc3BsYXlgLCB0aGlzLl9kaXNwbGF5KTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgIC8vIFVuc2V0IGhpZGRlbiBpZiB3ZSBhcmUgdHJhbnNpdGlvbmluZyBpbi5cbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IHRoZSBsZW5ndGggb2YgdGhlIGFuaW1hdGlvbiBiZWZvcmUgY2FsbGluZyB0aGUgY29tcGxldGUgY2FsbGJhY2suXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbiksIHRyYW5zaXRpb24uZHVyYXRpb24pO1xuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuIGEgdHJhbnNpdGlvbiBoYXMgY29tcGxldGVkLlxuICAgIHByaXZhdGUgZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uOlRyYW5zaXRpb24pOnZvaWQge1xuICAgICAgICAvLyBVbnNldCB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyAmIHN0eWxlcyBmb3IgdHJhbnNpdGlvbmluZy5cbiAgICAgICAgdHJhbnNpdGlvbi5jbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBjKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpbmdgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbi5kaXJlY3Rpb25DbGFzcyk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudCwgYGFuaW1hdGlvbkR1cmF0aW9uYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGp1c3QgYW5pbWF0ZWQgaW4sIHdlIGFyZSBub3cgdmlzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNpdGlvbi5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRyYW5zaXRpb25lZCBvdXQsIHdlIHNob3VsZCBiZSBpbnZpc2libGUgYW5kIGhpZGRlbi5cbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24ub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgdXNlci1kZWZpbmVkIHRyYW5zaXRpb24gY2FsbGJhY2suXG4gICAgICAgICAgICB0cmFuc2l0aW9uLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBxdWV1ZS5cbiAgICAgICAgdGhpcy5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5faXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICAvLyBJbW1lZGlhdGVseSBhdHRlbXB0IHRvIHBlcmZvcm0gYW5vdGhlciB0cmFuc2l0aW9uLlxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcHMgdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiwgbGVhdmVzIHRoZSByZXN0IG9mIHRoZSBxdWV1ZSBpbnRhY3QuXG4gICAgcHVibGljIHN0b3AodHJhbnNpdGlvbjpUcmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdCk6dm9pZCB7XG4gICAgICAgIGlmICghdHJhbnNpdGlvbiB8fCAhdGhpcy5faXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGFuZCBlbXB0aWVzIHRoZSBxdWV1ZS5cbiAgICBwdWJsaWMgc3RvcEFsbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyUXVldWUoKTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gRW1wdGllcyB0aGUgdHJhbnNpdGlvbiBxdWV1ZSBidXQgY2FycmllcyBvbiB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24uXG4gICAgcHVibGljIGNsZWFyUXVldWUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlID0gW3RoaXMuX3F1ZXVlRmlyc3RdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRyYW5zaXRpb25dXCIsXG4gICAgZXhwb3J0QXM6IFwidHJhbnNpdGlvblwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb24ge1xuICAgIC8vIEVhY2ggdHJhbnNpdGlvbiBtdXN0IGhhdmUgYSBjb250cm9sbGVyIGFzc29jaWF0ZWQgdGhhdCBkaXNwYXRjaGVzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN1aVRyYW5zaXRpb24odEM6VHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0cmFuc2l0aW9uIGNvbnRyb2xsZXIgKGUuZy4gJzxkaXYgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj48L2Rpdj4nKS5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0Qyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzVmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGlkZGVuXCIpXG4gICAgcHVibGljIGdldCBpc0hpZGRlbigpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXIuaXNIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICAvLyBJbml0aWFsaXNlcyB0aGUgY29udHJvbGxlciB3aXRoIHRoZSBpbmplY3RlZCByZW5kZXJlciBhbmQgZWxlbWVudFJlZi5cbiAgICBwdWJsaWMgc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXIpOnZvaWQge1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gdHJhbnNpdGlvbkNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJSZW5kZXJlcih0aGlzLl9yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJFbGVtZW50KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJDaGFuZ2VEZXRlY3Rvcih0aGlzLl9jaGFuZ2VEZXRlY3Rvcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvdHJhbnNpdGlvblwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVRyYW5zaXRpb25cbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpVHJhbnNpdGlvbk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2Uge1xuICAgIGRpc21pc3MoKTp2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbWVzc2FnZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgbWVzc2FnZSB7eyBjbGFzcyB9fVwiICpuZ0lmPVwiIWlzRGlzbWlzc2VkXCIgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzRGlzbWlzc2FibGVcIiAoY2xpY2spPVwiZGlzbWlzcygpXCI+PC9pPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIENTUyBCdWcgKi9cbi51aS5pY29uLnZpc2libGUubWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTWVzc2FnZSBpbXBsZW1lbnRzIElNZXNzYWdlIHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc21pc3NhYmxlOmJvb2xlYW47XG5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc1wiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+O1xuXG4gICAgcHVibGljIGlzRGlzbWlzc2VkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBjbGFzczpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Rpc21pc3NhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJmYWRlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMzAwO1xuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNtaXNzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KHRoaXMpO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1lc3NhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lc3NhZ2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpTWVzc2FnZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTWVzc2FnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcGFnaW5hdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PTFcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlLTEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNQcmV2aW91cygpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiAqbmdJZj1cInBhZ2VzWzBdICE9PSAxXCI+XG4gICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbMF0gPiAyXCI+Li4uPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIGNsYXNzPVwiaXRlbVwiIFtjbGFzcy5hY3RpdmVdPVwicD09PXBhZ2VcIiAoY2xpY2spPVwic2V0UGFnZShwKVwiPlxuICAgIHt7IHAgfX1cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gPCBwYWdlQ291bnQgLSAxXCI+Li4uPC9hPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdICE9PSBwYWdlQ291bnRcIj5cbiAgICAgICAgPHNwYW4+e3sgcGFnZUNvdW50IH19PC9zcGFuPlxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlKzEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNOZXh0KClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PXBhZ2VDb3VudFwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCAuaXRlbSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdpbmF0aW9uXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICAvLyBQdWJsaWMgbWVtYmVyc1xuICAgIHB1YmxpYyBwYWdlQ291bnQ6bnVtYmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICAvLyBQcml2YXRlIG1lbWJlcnNcbiAgICBwcml2YXRlIF9tYXhTaXplPzpudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvblNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2U6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2VzOm51bWJlcltdO1xuICAgIHByaXZhdGUgX2hhc05hdmlnYXRpb25MaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heFNpemUoKTpudW1iZXJ8dW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhTaXplKHZhbHVlOm51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhTaXplID0gKHZhbHVlICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgMSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGFnZVNpemU6bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb25TaXplKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25TaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sbGVjdGlvblNpemUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TaXplID0gTWF0aC5tYXgodmFsdWUsIDApO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTmF2aWdhdGlvbkxpbmtzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLl9tYXhTaXplIHx8IHRoaXMucGFnZUNvdW50O1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzIHx8IG1heFNpemUgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc05hdmlnYXRpb25MaW5rcyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0JvdW5kYXJ5TGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNhblJvdGF0ZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzRWxsaXBzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYWdlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLnNldFBhZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFnZXMoKTpudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xuICAgICAgICB0aGlzLl9wYWdlID0gMTtcbiAgICAgICAgdGhpcy5fcGFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAxO1xuICAgICAgICB0aGlzLmhhc05hdmlnYXRpb25MaW5rcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQm91bmRhcnlMaW5rcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhblJvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0VsbGlwc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBoYXNQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlID4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2UobmV3UGFnZTpudW1iZXIpOnZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZTpudW1iZXIgPSAoTnVtYmVyLmlzSW50ZWdlcihuZXdQYWdlKSkgPyBNYXRoLm1pbihNYXRoLm1heChuZXdQYWdlLCAxKSwgdGhpcy5wYWdlQ291bnQpIDogMTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpZmVjeWNsZSBob29rc1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcblxuICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLmFwcGx5UGFnaW5hdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX3BhZ2VzID0gQXJyYXk8bnVtYmVyPihlbmQgLSBzdGFydClcbiAgICAgICAgICAgIC5maWxsKHN0YXJ0ICsgMSlcbiAgICAgICAgICAgIC5tYXAoKHMsIGkpID0+IHMgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5UGFnaW5hdGlvbigpOltudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gKHRoaXMubWF4U2l6ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5taW4odGhpcy5tYXhTaXplLCB0aGlzLnBhZ2VDb3VudCkgOiB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5jZWlsKHRoaXMucGFnZSAvIG1heFNpemUpIC0gMTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGlmICh0aGlzLmNhblJvdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE9mZnNldCA9IE1hdGguZmxvb3IobWF4U2l6ZSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRPZmZzZXQgPSBtYXhTaXplICUgMiA9PT0gMCA/IGxlZnRPZmZzZXQgLSAxIDogbGVmdE9mZnNldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8PSBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgZW5kID0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlQ291bnQgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2VDb3VudCAtIG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IHBhZ2UgKiBtYXhTaXplO1xuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBtYXhTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtzdGFydCwgTWF0aC5taW4oZW5kLCB0aGlzLnBhZ2VDb3VudCldO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU3VpUGFnaW5hdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTdWlQYWdpbmF0aW9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTdWlQYWdpbmF0aW9uXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uLXBhbmVsXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQWNjb3JkaW9uUGFuZWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBUaXRsZSAtLT5cbjxkaXYgY2xhc3M9XCJ0aXRsZVwiIFtjbGFzcy5hY3RpdmVdPVwiaXNPcGVuXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCIgPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjwhLS0gQ29udGVudCAtLT5cbjxkaXYgW3N1aUNvbGxhcHNlXT1cIiFpc09wZW5cIiBbY29sbGFwc2VEdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtjbGFzcy5hY3RpdmVdPVwiaXNPcGVuXCIgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIE1hbnVhbCBzdHlsZSBhcyBTZW1hbnRpYyBVSSByZWxpZXMgb24gPiBzZWxlY3RvciAqL1xuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IC41ZW0gMCAxZW07XG59XG5cbi8qIEFub3RoZXIgPiBzZWxlY3RvciBmaXggKi9cbjpob3N0OmZpcnN0LWNoaWxkIC50aXRsZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblBhbmVsIHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfaXNPcGVuOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIGJvb2xlYW4gKGZpeGVzIGZhbHNlICE9IHVuZGVmaW5lZClcbiAgICAgICAgY29uc3QgaXNPcGVuID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoaXNPcGVuICE9PSB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gaXNPcGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmIHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgb3BlbmluZyB0aGlzIHBhbmVsLCB3ZSBtdXN0IGNsb3NlIHRoZSBvdGhlciBvbmVzLlxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIGN1cnJlbnQgYW5pbWF0aW9ucywgYW5kIGZhZGUgdGhlIGNvbnRlbnRzLiBUaGUgZGlyZWN0aW9uIGlzIGF1dG9tYXRpYy5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbigpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS50cmFuc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiZmFkZVwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkR1cmF0aW9uKCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc2VydmljZSBkZWZpbmVkIHRyYW5zaXRpb24gZHVyYXRpb24uXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV2ZXJ0IHRvIGluc3RhbnRhbmVvdXMgaWYgdGhlIHNlcnZpY2UgaXMgbm90IHlldCBsb2FkZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc09wZW5DaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi1wYW5lbFwiO1xuXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uU2VydmljZSB7XG4gICAgcHVibGljIGNsb3NlT3RoZXJzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgcGFuZWxzOlN1aUFjY29yZGlvblBhbmVsW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbG9zZU90aGVycyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJmYWRlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMucGFuZWxzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBhbmVsKHBhbmVsOlN1aUFjY29yZGlvblBhbmVsKTp2b2lkIHtcbiAgICAgICAgcGFuZWwuc2VydmljZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucGFuZWxzLnB1c2gocGFuZWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZU90aGVyUGFuZWxzKHBhbmVsOlN1aUFjY29yZGlvblBhbmVsKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlT3RoZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAgIT09IHBhbmVsKSB7XG4gICAgICAgICAgICAgICAgcC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vYWNjb3JkaW9uLXBhbmVsXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1hY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIGdlbmVyYWwgc3R5bGluZyBpc3N1ZXMgKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRml4IGZvciBzdHlsZWQgYm9yZGVyIGlzc3VlICovXG46aG9zdC5zdHlsZWQgc3VpLWFjY29yZGlvbi1wYW5lbDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmVcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWNjb3JkaW9uXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjbG9zZU90aGVycygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS5jbG9zZU90aGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNsb3NlT3RoZXJzKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS5jbG9zZU90aGVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3NlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpQWNjb3JkaW9uUGFuZWwpXG4gICAgcHJvdGVjdGVkIF9wYW5lbHM6UXVlcnlMaXN0PFN1aUFjY29yZGlvblBhbmVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBBY2NvcmRpb24gc2VydmljZSBpcyB1bmlxdWUgdG8gZWFjaCBzZXQgb2YgcGFuZWxzLlxuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gbmV3IFN1aUFjY29yZGlvblNlcnZpY2UoKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbHMoKTtcblxuICAgICAgICAvLyBSZWNvbm5lY3QgcGFuZWxzIGFmdGVyIHRoZXkgaGF2ZSB1cGRhdGVkLlxuICAgICAgICB0aGlzLl9wYW5lbHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVQYW5lbHMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhbmVscygpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYW5lbHMuZm9yRWFjaChwID0+IHRoaXMuX3NlcnZpY2UuYWRkUGFuZWwocCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpQ29sbGFwc2VdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ29sbGFwc2Uge1xuICAgIC8vIFNldCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBvcGVuLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5leHBhbmRlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0V4cGFuZGVkOmJvb2xlYW47XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgY2xvc2VkLCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2VkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgYW5pbWF0aW5nLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNvbGxhcHNpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzQ29sbGFwc2luZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDb2xsYXBzaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzQ29sbGFwc2luZzpib29sZWFuO1xuXG4gICAgLy8gRmxhZyB0aGF0IGlzIGluaXRpYWxseSB0cnVlLCB0byBtYWtlIHRoZSAxc3QgYW5pbWF0aW9uIGluc3RhbnRhbmVvdXMuXG4gICAgcHJpdmF0ZSBfcHJpc3RpbmU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzdWlDb2xsYXBzZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgY29sbGFwc2UsIGB0cnVlYCBpcyBjb2xsYXBzZWQuXG4gICAgcHVibGljIHNldCBzdWlDb2xsYXBzZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbGxhcHNlRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgX2FuaW1hdGlvbkR1cmF0aW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaXN0aW5lID8gMCA6IHRoaXMuY29sbGFwc2VEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFuaW1hdGlvbiBkdXJhdGlvbiBpcyAzNTBtcyBieSBkZWZhdWx0LlxuICAgICAgICB0aGlzLmNvbGxhcHNlRHVyYXRpb24gPSAzNTA7XG5cbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRm9yY2libHkgaGlkZSB0aGUgb3ZlcmZsb3cgc28gdGhhdCBjb250ZW50IGlzIG5vdCB2aXNpYmxlIHBhc3QgdGhlIGJvdW5kYXJpZXMgb2YgaXRzIGNvbnRhaW5lci5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBzY3JvbGwgaGVpZ2h0IHRvIDAuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCAwLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgaG9zdCBlbGVtZW50IGZyb20gaXRzIG9mZnNldCBoZWlnaHQgdG8gaXRzIHNjcm9sbCBoZWlnaHQuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCB0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG92ZXJmbG93IG92ZXJyaWRlIHRvIGVuYWJsZSB1c2VyIHN0eWxpbmcgb25jZSBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiKTtcblxuICAgICAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbmltYXRlKHN0YXJ0SGVpZ2h0Om51bWJlciwgZW5kSGVpZ2h0Om51bWJlciwgcmVtb3ZlT25Db21wbGV0ZTpib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodEZyYW1lcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtzdGFydEhlaWdodH1weGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZW5kSGVpZ2h0fXB4YFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChyZW1vdmVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYGF1dG9gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGNvbGxhcHNlIHVzaW5nIHRoZSB3ZWIgYW5pbWF0aW9ucyBBUEkuXG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgICAgIGhlaWdodEZyYW1lcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGFuaW1hdGlvbiBvbiAxc3QgY29sbGFwc2UgLyBleHBhbnNpb24uXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJvdGhcIlxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLl9wcmlzdGluZSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHByaXN0aW5lIGZsYWcgd2hlbiBmaXJzdCBoaXQuXG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygpLCB0aGlzLmNvbGxhcHNlRHVyYXRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aUNvbGxhcHNlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9jb2xsYXBzZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpQ29sbGFwc2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ29sbGFwc2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZU1vZHVsZSB9IGZyb20gXCIuLi9jb2xsYXBzZS9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvbi1wYW5lbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQWNjb3JkaW9uLFxuICAgICAgICBTdWlBY2NvcmRpb25QYW5lbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbGlkYXRvckhvc3Qge1xuICAgIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcjxUIGV4dGVuZHMgSUN1c3RvbVZhbGlkYXRvckhvc3Q+IGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3N0OlQpIHt9XG5cbiAgICBwdWJsaWMgb25WYWxpZGF0b3JDaGFuZ2UgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5faG9zdC52YWxpZGF0ZShjKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPChGdW5jdGlvbiB8IFZhbGlkYXRvcilbXT47XG4gICAgdXNlRXhpc3Rpbmc6VHlwZTxhbnk+O1xuICAgIG11bHRpOmJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21WYWxpZGF0b3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWxpZGF0aW9uUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VD4ge1xuICAgIHdyaXRlVmFsdWUodmFsdWU6VCk6dm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VSwgVCBleHRlbmRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPj4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uQ2hhbmdlID0gKCkgPT4ge307XG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2hvc3Qud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHByb3ZpZGU6SW5qZWN0aW9uVG9rZW48Q29udHJvbFZhbHVlQWNjZXNzb3I+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkodHlwZTpGdW5jdGlvbik6SVZhbHVlQWNjZXNzb3JQcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iLCIvLyBLZXlib2FyZCBrZXljb2Rlcy5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIExlZnQgPSAzNyxcbiAgICBVcCA9IDM4LFxuICAgIFJpZ2h0ID0gMzksXG4gICAgRG93biA9IDQwLFxuXG4gICAgRXNjYXBlID0gMjcsXG4gICAgRW50ZXIgPSAxMyxcblxuICAgIFNwYWNlID0gMzIsXG4gICAgQmFja3NwYWNlID0gOFxufVxuXG5pbnRlcmZhY2UgSVJlY3Vyc2l2ZU9iamVjdCB7IFtuYW1lOnN0cmluZ106SVJlY3Vyc2l2ZU9iamVjdDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4geyAkaW1wbGljaXQ6VDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElBdWdtZW50ZWRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgY2xvc2VzdChzZWxlY3RvcjpzdHJpbmcpOklBdWdtZW50ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgSGFuZGxlZEV2ZW50IHtcbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVkOmJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUR5bmFtaWNDbGFzc2VzIHtcbiAgICBbbmFtZTpzdHJpbmddOnRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgIEFycmF5OiB7XG4gICAgICAgIHJhbmdlKG46bnVtYmVyLCBvZmZzZXQ6bnVtYmVyID0gMCk6bnVtYmVyW10ge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoMCkubWFwKCh6LCBpKSA9PiBpICsgb2Zmc2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXA8VD4oaXRlbXM6VFtdLCBncm91cExlbmd0aDpudW1iZXIpOlRbXVtdIHtcbiAgICAgICAgICAgIGNvbnN0IG11dGFibGUgPSBpdGVtcy5zbGljZSgwKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzOlRbXVtdID0gW107XG4gICAgICAgICAgICB3aGlsZSAobXV0YWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2gobXV0YWJsZS5zcGxpY2UoMCwgZ3JvdXBMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQnk8VD4oaXRlbXM6VFtdLCBmaWVsZDprZXlvZiBUKTp7IFtuYW1lOnN0cmluZ106VFtdIH0ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZTx7IFtuYW1lOnN0cmluZ106VFtdIH0+KFxuICAgICAgICAgICAgICAgIChncm91cHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGlbZmllbGRdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXSA9IGdyb3Vwc1tmaWVsZFZhbHVlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ZpZWxkVmFsdWVdLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZsYXR0ZW48VD4oaXRlbXM6VFtdW10pOlRbXSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKChpcywgaSkgPT4gaXMuY29uY2F0KGkpLCBbXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgU3RyaW5nOiB7XG4gICAgICAgIHBhZExlZnQoc3RyOnN0cmluZywgbGVuZ3RoOm51bWJlciwgcGFkZGluZzpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cjtcbiAgICAgICAgICAgIHdoaWxlIChzLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMgPSBwYWRkaW5nICsgcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIERPTToge1xuICAgICAgICBwYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYXR0cmlidXRlVmFsdWU6Ym9vbGVhbik6Ym9vbGVhbiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBPYmplY3Q6IHtcbiAgICAgICAgcmVhZFZhbHVlPFQsIFU+KG9iamVjdDpULCBwYXRoPzpzdHJpbmcpOlUge1xuICAgICAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdCBhcyBhbnkgYXMgVTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlY3Vyc2VkOklSZWN1cnNpdmVPYmplY3QgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBwID0gcGF0aC5zcGxpdChcIi5cIiksIGxlbiA9IHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWN1cnNlZCA9IChvYmplY3QgYXMgYW55IGFzIElSZWN1cnNpdmVPYmplY3QpW3BbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzZWQgYXMgYW55IGFzIFU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgTWF0aDoge1xuICAgICAgICByb3VuZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICByb3VuZFVwKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmREb3duKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIG1vZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICBjb25zdCByZW0gPSByICUgbjtcbiAgICAgICAgICAgIGlmIChyZW0gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbSArIG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVtO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBlbnVtIERhdGVQcmVjaXNpb24ge1xuICAgIERlY2FkZSA9IDAsXG4gICAgWWVhciA9IDEsXG4gICAgTW9udGggPSAyLFxuICAgIERhdGUgPSAzLFxuICAgIEhvdXIgPSA0LFxuICAgIE1pbnV0ZSA9IDVcbn1cblxuZXhwb3J0IGNvbnN0IERhdGVVdGlsID0ge1xuICAgIHN0YXJ0T2YocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSwgcmVzZXRBbGw6Ym9vbGVhbiA9IGZhbHNlKTpEYXRlIHtcbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKGRhdGUuZ2V0RnVsbFllYXIoKSAvIDEwKSAqIDEwICsgMTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldFNlY29uZHMoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgZW5kT2YocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKDEyLCAwKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldFNlY29uZHMoNTksIDk5OSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgZXF1YWwocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGE6RGF0ZSwgYjpEYXRlKTpib29sZWFuIHtcbiAgICAgICAgbGV0IGVxdWFsID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldE1pbnV0ZXMoKSA9PT0gYi5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEhvdXJzKCkgPT09IGIuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBlcXVhbCA9IGVxdWFsICYmIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBlcXVhbCA9IGVxdWFsICYmIGEuZ2V0RnVsbFllYXIoKSA9PT0gYi5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcXVhbDtcbiAgICB9LFxuXG4gICAgbmV4dChwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLmFkZChwcmVjaXNpb24sIGRhdGUsIDEpO1xuICAgIH0sXG5cbiAgICBhZGQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSwgaTpudW1iZXIpOkRhdGUge1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyICsgaSAqIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCArIGksIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIHByZXZpb3VzKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EZWNhZGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMTApO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uWWVhcjpcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIgLSAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBVdGlsLk1hdGgubW9kKG1vbnRoIC0gMSwgMTIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGF0ZTpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF5IC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uSG91cjpcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGhvdXJzIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0SG91cnMoKSAhPT0gVXRpbC5NYXRoLm1vZChob3VycyAtIDEsIDI0KSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldEhvdXJzKGhvdXJzIC0gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1pbnV0ZTpcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuXG4gICAgY2xvbmUoZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLFxuICAgIFJlZmxlY3RpdmVJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltcGxpY2l0Q29udGV4dDxUPiB7XG4gICAgJGltcGxpY2l0PzpUO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpQ29tcG9uZW50RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6QXBwbGljYXRpb25SZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjpJbmplY3Rvcikge31cblxuICAgIHB1YmxpYyBjcmVhdGVDb21wb25lbnQ8VD4odHlwZTpUeXBlPFQ+LCBwcm92aWRlcnM6UHJvdmlkZXJbXSA9IFtdKTpDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICAvLyBSZXNvbHZlIGEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgY29tcG9uZW50cyBvZiB0eXBlIGB0eXBlYC5cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlIGFzIFR5cGU8VD4pO1xuXG4gICAgICAgIC8vIFJlc29sdmUgYW5kIGNyZWF0ZSBhbiBpbmplY3RvciB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvdmlkZXJzLlxuICAgICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFxuICAgICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgdXNpbmcgdGhlIHByZXZpb3VzbHkgcmVzb2x2ZWQgZmFjdG9yeSAmIGluamVjdG9yLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVmlldzxULCBVIGV4dGVuZHMgSUltcGxpY2l0Q29udGV4dDxUPj4odmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxVPiwgY29udGV4dDpVKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXc8VT4odGVtcGxhdGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbnRvIHRoZSBzcGVjaWZpZWQgdmlldyBjb250YWluZXIuXG4gICAgcHVibGljIGF0dGFjaFRvVmlldzxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpOnZvaWQge1xuICAgICAgICB2aWV3Q29udGFpbmVyLmluc2VydChjb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBhdHRhY2hUb0FwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgLy8gRGV0YWNoZXMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gICAgcHVibGljIGRldGFjaEZyb21BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIE1vdmVzIHRoZSBjb21wb25lbnQgdG8gdGhlIHNwZWNpZmllZCBET00gZWxlbWVudC5cbiAgICBwdWJsaWMgbW92ZVRvRWxlbWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCBlbGVtZW50OkVsZW1lbnQpOnZvaWQge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgIHB1YmxpYyBtb3ZlVG9Eb2N1bWVudEJvZHk8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMubW92ZVRvRWxlbWVudChjb21wb25lbnRSZWYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpISk7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaEZyb21Eb2N1bWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIC8vIFdlIGNhbid0IHVzZSBgZWxlbWVudC5yZW1vdmUoKWAgZHVlIHRvIGxhY2sgb2YgSUUxMSBzdXBwb3J0LlxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBQb3BwZXIsIHsgTW9kaWZpZXJzLCBQb3BwZXJPcHRpb25zLCBQbGFjZW1lbnQsIERhdGEgfSBmcm9tIFwicG9wcGVyLmpzXCI7XG5cbnR5cGUgUG9wcGVyTW9kaWZpZXJzID0gTW9kaWZpZXJzICYge1xuICAgIGNvbXB1dGVTdHlsZT86e1xuICAgICAgICBncHVBY2NlbGVyYXRpb246Ym9vbGVhbjtcbiAgICB9O1xufTtcbnR5cGUgUG9wcGVySW5zdGFuY2UgPSBQb3BwZXIgJiB7XG4gICAgb3B0aW9uczpQb3BwZXJPcHRpb25zICYge1xuICAgICAgICBtb2RpZmllcnM6UG9wcGVyTW9kaWZpZXJzO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IFwiYXV0b1wiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3AgbGVmdFwiIHwgXCJ0b3BcIiB8IFwidG9wIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbSBsZWZ0XCIgfCBcImJvdHRvbVwiIHwgXCJib3R0b20gcmlnaHRcIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCB0b3BcIiB8IFwibGVmdFwiIHwgXCJsZWZ0IGJvdHRvbVwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodCB0b3BcIiB8IFwicmlnaHRcIiB8IFwicmlnaHQgYm90dG9tXCI7XG5cbmV4cG9ydCBjb25zdCBQb3NpdGlvbmluZ1BsYWNlbWVudCA9IHtcbiAgICBBdXRvOiBcImF1dG9cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BMZWZ0OiBcInRvcCBsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wOiBcInRvcFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcFJpZ2h0OiBcInRvcCByaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIExlZnRUb3A6IFwibGVmdCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0Qm90dG9tOiBcImxlZnQgYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tTGVmdDogXCJib3R0b20gbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbTogXCJib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b21SaWdodDogXCJib3R0b20gcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodFRvcDogXCJyaWdodCB0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFJpZ2h0Qm90dG9tOiBcInJpZ2h0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3NpdGlvbkJvdW5kaW5nQm94IHtcbiAgICB3aWR0aDpudW1iZXI7XG4gICAgaGVpZ2h0Om51bWJlcjtcbiAgICB0b3A6bnVtYmVyO1xuICAgIGxlZnQ6bnVtYmVyO1xuICAgIGJvdHRvbTpudW1iZXI7XG4gICAgcmlnaHQ6bnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpOlBsYWNlbWVudCB7XG4gICAgaWYgKCFwbGFjZW1lbnQgfHwgcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvKSB7XG4gICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICB9XG5cbiAgICAvLyBBbGwgcGxhY2VtZW50cyBvZiB0aGUgZm9ybWF0OiBgZGlyZWN0aW9uIGFsaWdubWVudGAsIGUuZy4gYHRvcCBsZWZ0YC5cbiAgICBjb25zdCBbZGlyZWN0aW9uLCBhbGlnbm1lbnRdID0gcGxhY2VtZW50LnNwbGl0KFwiIFwiKTtcblxuICAgIC8vIERpcmVjdGlvbiBhbG9uZSBjb3ZlcnMgY2FzZSBvZiBqdXN0IGB0b3BgLCBgbGVmdGAsIGBib3R0b21gLCBgcmlnaHRgLlxuICAgIGNvbnN0IGNob3NlblBsYWNlbWVudCA9IFtkaXJlY3Rpb25dO1xuXG4gICAgLy8gQWRkIGBzdGFydGAgLyBgZW5kYCB0byBwbGFjZW1lbnQsIGRlcGVuZGluZyBvbiBhbGlnbm1lbnQgZGlyZWN0aW9uLlxuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwic3RhcnRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiZW5kXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSm9pbiB3aXRoIGh5cGhlbiB0byBjcmVhdGUgUG9wcGVyIGNvbXBhdGlibGUgcGxhY2VtZW50LlxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIi1cIikgYXMgUGxhY2VtZW50O1xufVxuXG5mdW5jdGlvbiBwb3BwZXJUb1BsYWNlbWVudChwb3BwZXI6c3RyaW5nKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgaWYgKCFwb3BwZXIgfHwgcG9wcGVyID09PSBcImF1dG9cIikge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBvcHBlci5zcGxpdChcIi1cIik7XG5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJ0b3BcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuUGxhY2VtZW50LnB1c2goXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3NlblBsYWNlbWVudC5qb2luKFwiIFwiKSBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGFuY2hvcjpFbGVtZW50UmVmO1xuICAgIHB1YmxpYyByZWFkb25seSBzdWJqZWN0OkVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIF9wb3BwZXI6UG9wcGVySW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBfcG9wcGVyU3RhdGU6RGF0YTtcbiAgICBwcml2YXRlIF9wbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWN0dWFsUGxhY2VtZW50KCk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuX3BvcHBlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3BwZXJUb1BsYWNlbWVudCh0aGlzLl9wb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTpEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHBlclN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFuY2hvcjpFbGVtZW50UmVmLCBzdWJqZWN0OkVsZW1lbnRSZWYsIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCwgYXJyb3dTZWxlY3Rvcj86c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycyA9IHtcbiAgICAgICAgICAgIGNvbXB1dGVTdHlsZToge1xuICAgICAgICAgICAgICAgIGdwdUFjY2VsZXJhdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICBlc2NhcGVXaXRoUmVmZXJlbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBhcnJvd1NlbGVjdG9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFhcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIGFuY2hvci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgc3ViamVjdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50KSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgb25DcmVhdGU6IGluaXRpYWwgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSBpbml0aWFsLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUgPT4gdGhpcy5fcG9wcGVyU3RhdGUgPSB1cGRhdGVcbiAgICAgICAgICAgIH0pIGFzIFBvcHBlckluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5cbmV4cG9ydCBjb25zdCBQb3B1cFRyaWdnZXIgPSB7XG4gICAgSG92ZXI6IFwiaG92ZXJcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgQ2xpY2s6IFwiY2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgT3V0c2lkZUNsaWNrOiBcIm91dHNpZGVDbGlja1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBGb2N1czogXCJmb2N1c1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBNYW51YWw6IFwibWFudWFsXCIgYXMgUG9wdXBUcmlnZ2VyXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cENvbmZpZyB7XG4gICAgaGVhZGVyPzpzdHJpbmc7XG4gICAgdGV4dD86c3RyaW5nO1xuICAgIHBsYWNlbWVudD86UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG4gICAgdHJpZ2dlcj86UG9wdXBUcmlnZ2VyO1xuICAgIGlzSW52ZXJ0ZWQ/OmJvb2xlYW47XG4gICAgZGVsYXk/Om51bWJlcjtcbiAgICBpc0Jhc2ljPzpib29sZWFuO1xuICAgIHRyYW5zaXRpb24/OnN0cmluZztcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/Om51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSwgSUR5bmFtaWNDbGFzc2VzIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBwb3B1cFwiXG4gICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgI2NvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLnRlbXBsYXRlICYmICghIWNvbmZpZy5oZWFkZXIgfHwgISFjb25maWcudGV4dClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiICpuZ0lmPVwiY29uZmlnLmhlYWRlclwiPnt7IGNvbmZpZy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBjb25maWcudGV4dCB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cblxuICAgIDxzdWktcG9wdXAtYXJyb3cgKm5nSWY9XCIhY29uZmlnLmlzQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJwb3NpdGlvbmluZ1NlcnZpY2UuYWN0dWFsUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgIFtpbnZlcnRlZF09XCJjb25maWcuaXNJbnZlcnRlZFwiPjwvc3VpLXBvcHVwLWFycm93PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi51aS5wb3B1cCB7XG4gICAgLyogQXV0b2ZpdCBwb3B1cCB0byB0aGUgY29udGVudHMuICovXG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi51aS5hbmltYXRpbmcucG9wdXAge1xuICAgIC8qIFdoZW4gdGhlIHBvcHVwIGlzIGFuaW1hdGluZywgaXQgbWF5IG5vdCBpbml0aWFsbHkgYmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgICAgVGhpcyBmaXJlcyBhIG1vdXNlIGV2ZW50LCBjYXVzaW5nIHRoZSBhbmNob3IncyBtb3VzZWxlYXZlIHRvIGZpcmUgLSBtYWtpbmcgdGhlIHBvcHVwIGZsaWNrZXIuXG4gICAgICAgU2V0dGluZyBwb2ludGVyLWV2ZW50cyB0byBub25lIHdoaWxlIGFuaW1hdGluZyBmaXhlcyB0aGlzIGJ1Zy4gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLnBvcHVwOjpiZWZvcmUge1xuICAgIC8qIEhpZGUgdGhlIFNlbWFudGljIFVJIENTUyBhcnJvdy4gKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGFib3ZlIGFuZCBiZWxvdyB3aGVuIHBsYWNlZCAndmVydGljYWxseScuICovXG4udWkucG9wdXBbZGlyZWN0aW9uPVwidG9wXCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgbWFyZ2luLXRvcDogMC43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbn1cblxuLyogT2Zmc2V0IHBvcHVwIGJ5IDAuNzVlbSBlaXRoZXIgc2lkZSB3aGVuIHBsYWNlZCAnaG9yaXpvbnRhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJsZWZ0XCJdLFxuLnVpLnBvcHVwW2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXAgaW1wbGVtZW50cyBJUG9wdXAge1xuICAgIC8vIENvbmZpZyBzZXR0aW5ncyBmb3IgdGhpcyBwb3B1cC5cbiAgICBwdWJsaWMgY29uZmlnOlRlbXBsYXRlUG9wdXBDb25maWc8YW55PjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcbiAgICBwdWJsaWMgcG9zaXRpb25pbmdTZXJ2aWNlOlBvc2l0aW9uaW5nU2VydmljZTtcblxuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIHBvcHVwIGlzIG9wZW4gaW50ZXJuYWxseS5cbiAgICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcbiAgICAvLyBgc2V0VGltZW91dGAgdGltZXIgcG9pbnRlciBmb3IgY2FuY2VsbGluZyBwb3B1cCBjbG9zZS5cbiAgICBwdWJsaWMgY2xvc2luZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgb3BlbnMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uT3BlbjpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgcG9wdXAgY2xvc2VzIChhbmQgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZWQpLlxuICAgIHB1YmxpYyBvbkNsb3NlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgLy8gYEVsZW1lbnRSZWZgIGZvciB0aGUgcG9zaXRpb25pbmcgc3ViamVjdC5cbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGFuY2hvciBpcyBzZXQgKHdoaWNoIGlzIHdoZW4gdGhlIHBvcHVwIGlzIGNyZWF0ZWQpLCByZWNyZWF0ZSB0aGUgcG9zaXRpb25pbmcgc2VydmljZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBvcHRpb25zLlxuICAgICAgICB0aGlzLnBvc2l0aW9uaW5nU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZ1NlcnZpY2UoYW5jaG9yLCB0aGlzLl9jb250YWluZXIuZWxlbWVudCwgdGhpcy5jb25maWcucGxhY2VtZW50LCBcIi5keW5hbWljLmFycm93XCIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGRpcmVjdGlvbiAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmFjdHVhbFBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmFjdHVhbFBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYWxpZ25tZW50XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzSW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuaW52ZXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Jhc2ljKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmJhc2ljID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICAvLyBgVmlld0NvbnRhaW5lclJlZmAgZm9yIHRoZSBlbGVtZW50IHRoZSB0ZW1wbGF0ZSBnZXRzIGluamVjdGVkIGFzIGEgc2libGluZyBvZi5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBvcGVuIGlmIGN1cnJlbnRseSBjbG9zZWQuXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBvcGVuaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHRoZSBwb3B1cCBwb3NpdGlvbiBhZnRlciBhIGJyaWVmIGRlbGF5IHRvIGFsbG93IGZvciBicm93c2VyIHByb2Nlc3NpbmcgdGltZS5cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLnBsYWNlbWVudCA9IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UudXBkYXRlKCkpO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIG9wZW4uXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gY2xvc2UgaWYgY3VycmVudGx5IG9wZW4uXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBjbG9zaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBjbG9zaW5nIHRpbWVyLCB0aGF0IGZpcmVzIHRoZSBgb25DbG9zZWAgZXZlbnQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uQ2xvc2UuZW1pdCgpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIGNsb3NlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIHBvcHVwIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgSVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBJUG9wdXBMaWZlY3ljbGUgfSBmcm9tIFwiLi9wb3B1cC1saWZlY3ljbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXAge1xuICAgIG9wZW4oKTp2b2lkO1xuICAgIGNsb3NlKCk6dm9pZDtcbiAgICB0b2dnbGUoKTp2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VpUG9wdXBDb250cm9sbGVyIGltcGxlbWVudHMgSVBvcHVwLCBPbkRlc3Ryb3kge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIHBvcHVwIGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aVBvcHVwPjtcblxuICAgIC8vIFJldHVybnMgZ2VuZXJhdGVkIHBvcHVwIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgcG9wdXAoKTpTdWlQb3B1cCB7XG4gICAgICAgIC8vIFVzZSBub24tbnVsbCBhc3NlcnRpb24gYXMgd2Ugb25seSBhY2Nlc3MgdGhpcyB3aGVuIGEgcG9wdXAgZXhpc3RzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBkZWxheWVkIHBvcHVwIG9wZW4uXG4gICAgcHJpdmF0ZSBfb3BlbmluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBkb2N1bWVudCBjbGljayBoYW5kbGVyLlxuICAgIHByaXZhdGUgX2RvY3VtZW50TGlzdGVuZXI6KCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3VpUG9wdXAgY29tcG9uZW50IGFuZCBhdHRhY2ggaXQgdG8gdGhlIGFwcGxpY2F0aW9uIHZpZXcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFN1aVBvcHVwKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgcG9wdXAgd2l0aCBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHBvcHVwIGlzIGNsb3NlZCAob25DbG9zZSBmaXJlcyBvbiBhbmltYXRpb24gY29tcGxldGUpLFxuICAgICAgICB0aGlzLnBvcHVwLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYW51cCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVBvcHVwQ29uZmlnKTp2b2lkIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBvcHVwLmNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheSBpbnRlcnZhbC5cbiAgICAgICAgdGhpcy5fb3BlbmluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW4oKSwgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCB0byB0aGUgY3VycmVudCBhcHBsaWNhdGlvbi5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgLy8gTW92ZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgdG8gdGhlIGJvZHkgdG8gYXZvaWQgYW55IHBvc2l0aW9uaW5nIGlzc3Vlcy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9Eb2N1bWVudEJvZHkodGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICAvLyBBdHRhY2ggYSByZWZlcmVuY2UgdG8gdGhlIGFuY2hvciBlbGVtZW50LiBXZSBkbyBpdCBoZXJlIGJlY2F1c2UgSUUxMSBsb3ZlcyB0byBjb21wbGFpbi5cbiAgICAgICAgdGhpcy5wb3B1cC5hbmNob3IgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGhhbmRsZSBjbG9zaW5nLlxuICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChlOk1vdXNlRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZSkpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHBvcHVwIG9wZW4gdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wb3B1cC5vcGVuKCk7XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbk9wZW47XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lciB0byBzdG9wIHRoZSBwb3B1cCBvcGVuaW5nIGFmdGVyIGNsb3NlIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAvLyBTdGFydCBwb3B1cCBjbG9zZSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBsaWZlY3lsZSBob29rXG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9ICh0aGlzIGFzIElQb3B1cExpZmVjeWNsZSkucG9wdXBPbkNsb3NlO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBvciBpdCBoYXMgYnV0IGl0IGlzbid0IGN1cnJlbnRseSBvcGVuLCBvcGVuIHRoZSBwb3B1cC5cbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG4gICAgcHVibGljIG9uTW91c2VFbnRlcigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5DbGljayB8fFxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuXG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3MgcmVxdWlyZSBhIHRvZ2dsZSwgcmF0aGVyIHRoYW4ganVzdCBvcGVuaW5nIHRoZSBwb3B1cCBlYWNoIHRpbWUuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURlbGF5ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpKSB7XG4gICAgICAgICAgICAvLyBSZXBlYXRlZCBjbGlja3Mgd2l0aCBhIGZvY3VzIHRyaWdnZXIgcmVxdWlyZXMgYW4gb3BlbiAoYXMgZm9jdXMgaXNuJ3QgZXZlciBsb3N0IG9uIHJlcGVhdGVkIGNsaWNrKS5cbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCB0cmlnZ2VyIGlzIG91dHNpZGUgY2xpY2ssXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYgJiYgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCBpZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSBvZiB0aGUgcG9wdXAgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTphbnkpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICAhdGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSAmJiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb25pbmdTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbUFwcGxpY2F0aW9uKHRoaXMuX2NvbXBvbmVudFJlZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFR5cGUsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICAvLyBTdG9yZXMgcmVmZXJlbmNlIHRvIGdlbmVyYXRlZCBjb250ZW50IGNvbXBvbmVudC5cbiAgICBwcml2YXRlIF9jb250ZW50Q29tcG9uZW50UmVmPzpDb21wb25lbnRSZWY8VD47XG5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudEluc3RhbmNlKCk6VCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudDpUeXBlPFQ+LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudCBhcyBUeXBlPFQ+KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYsIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBzdXBlci5jbGVhbnVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyLCBJUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5LCBJSW1wbGljaXRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPiBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8SVBvcHVwPiB7XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiBleHRlbmRzIElQb3B1cENvbmZpZyB7XG4gICAgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBQb3B1cENvbmZpZyB7XG4gICAgcHVibGljIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xufVxuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXI8VD4gZXh0ZW5kcyBTdWlQb3B1cENvbnRyb2xsZXIge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBwdWJsaWMgY29udGV4dD86VDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIGNvbmZpZzpQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJVGVtcGxhdGVQb3B1cENvbmZpZzxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmNvbmZpZ3VyZShjb25maWcpO1xuXG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb25maWcuY29udGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGVtcGxhdGUsIGluamVjdCBpdCBpbnRvIHRoZSB2aWV3LlxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcuY2xlYXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnBvcHVwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdQbGFjZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cC1hcnJvd1wiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiZHluYW1pYyBhcnJvd1wiIFthdHRyLmRpcmVjdGlvbl09XCJkaXJlY3Rpb25cIiAqbmdJZj1cImFsaWdubWVudCA9PSAnY2VudGVyJ1wiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInN0YXRpYyBhcnJvd1wiIFthdHRyLmRpcmVjdGlvbl09XCJkaXJlY3Rpb25cIiBbYXR0ci5hbGlnbm1lbnRdPVwiYWxpZ25tZW50XCIgKm5nSWY9XCJhbGlnbm1lbnQgIT0gJ2NlbnRlcidcIj48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDAuNzE0Mjg1NzFlbTtcbiAgICBoZWlnaHQ6IDAuNzE0Mjg1NzFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbjpob3N0LmludmVydGVkIC5hcnJvdyB7XG4gICAgYmFja2dyb3VuZDogIzFiMWMxZDtcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXSB7XG4gICAgYm90dG9tOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdIHtcbiAgICByaWdodDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICB0b3A6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIGxlZnQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl1bYWxpZ25tZW50PVwibGVmdFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cImxlZnRcIl0ge1xuICAgIGxlZnQ6IDFlbTtcbiAgICByaWdodDogYXV0bztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdW2FsaWdubWVudD1cInRvcFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl1bYWxpZ25tZW50PVwidG9wXCJdIHtcbiAgICB0b3A6IDFlbTtcbiAgICBib3R0b206IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl1bYWxpZ25tZW50PVwicmlnaHRcIl0ge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDFlbTtcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJsZWZ0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwicmlnaHRcIl1bYWxpZ25tZW50PVwiYm90dG9tXCJdIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cEFycm93IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pbnZlcnRlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGludmVydGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbGlnbm1lbnQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWdubWVudCA9IHRoaXMucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5wb3AoKTtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWxpZ25tZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBDb25maWcgZXh0ZW5kcyBQb3B1cENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFdlIHVzZSBhbiBlbXB0eSBjb25zdHJ1Y3RvciB0byBlbnN1cmUgQW5ndWxhciBESSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBVdGlsLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSA9IGRlbGF5O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwb3B1cFRyaWdnZXIoKTpQb3B1cFRyaWdnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJpZ2dlcih0cmlnZ2VyOlBvcHVwVHJpZ2dlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZUNvbnRleHQoY29udGV4dDpUIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQ29uZmlnKGNvbmZpZzpJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZShjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHBvcHVwRGVmYXVsdHM6U3VpUG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgbmV3IFBvcHVwQ29uZmlnKHBvcHVwRGVmYXVsdHMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cEFycm93IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cC1hcnJvd1wiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbmZpZyB9IGZyb20gXCIuL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVBvcHVwRGlyZWN0aXZlLFxuICAgICAgICBTdWlQb3B1cEFycm93LFxuICAgICAgICBTdWlQb3B1cFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlQb3B1cERpcmVjdGl2ZSxcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdWlQb3B1cENvbmZpZ1xuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsXG4gICAgSG9zdExpc3RlbmVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIElDdXN0b21WYWxpZGF0b3JIb3N0LCBjdXN0b21WYWxpZGF0b3JGYWN0b3J5LCBDdXN0b21WYWxpZGF0b3IsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5LCBLZXlDb2RlXG59IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlciwgUG9wdXBBZnRlck9wZW4sIFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXIsIERhdGVwaWNrZXJNb2RlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcsIFllYXJDb25maWcsIE1vbnRoQ29uZmlnLCBEYXRldGltZUNvbmZpZywgVGltZUNvbmZpZywgRGF0ZUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmUpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlXG4gICAgICAgZXh0ZW5kcyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXI8U3VpRGF0ZXBpY2tlcj5cbiAgICAgICBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxEYXRlPiwgSUN1c3RvbVZhbGlkYXRvckhvc3QsIE9uQ2hhbmdlcywgUG9wdXBBZnRlck9wZW4ge1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkRGF0ZShkYXRlOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vZGU6RGF0ZXBpY2tlck1vZGU7XG4gICAgcHVibGljIGNvbmZpZzpDYWxlbmRhckNvbmZpZztcblxuICAgIEBJbnB1dChcInBpY2tlck1vZGVcIilcbiAgICBwdWJsaWMgZ2V0IG1vZGUoKTpEYXRlcGlja2VyTW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbW9kZShtb2RlOkRhdGVwaWNrZXJNb2RlKSB7XG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlIHx8IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuWWVhcjpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLk1vbnRoOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IE1vbnRoQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGU6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgRGF0ZXRpbWVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuVGltZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBUaW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJJbml0aWFsRGF0ZVwiKVxuICAgIHB1YmxpYyBpbml0aWFsRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1heERhdGVcIilcbiAgICBwdWJsaWMgbWF4RGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlck1pbkRhdGVcIilcbiAgICBwdWJsaWMgbWluRGF0ZT86RGF0ZTtcblxuICAgIEBJbnB1dChcInBpY2tlckZpcnN0RGF5T2ZXZWVrXCIpXG4gICAgcHVibGljIGZpcnN0RGF5T2ZXZWVrPzpudW1iZXI7XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJMb2NhbGVPdmVycmlkZXNcIilcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJkYXRlcGlja2VyXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclBsYWNlbWVudFwiKVxuICAgIHB1YmxpYyBzZXQgcGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJUcmFuc2l0aW9uRHVyYXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQE91dHB1dChcInBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkRGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8RGF0ZT47XG5cbiAgICBAT3V0cHV0KFwicGlja2VyVmFsaWRhdG9yQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgU3VpRGF0ZXBpY2tlciwgbmV3IFBvcHVwQ29uZmlnKHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFBvcHVwVHJpZ2dlci5Gb2N1cyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogUG9zaXRpb25pbmdQbGFjZW1lbnQuQm90dG9tTGVmdCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGVcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMjAwXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHBvcHVwIGlzIGRyYXduIGNvcnJlY3RseSAoaS5lLiBubyBib3JkZXIpLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJ1aVwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwiY2FsZW5kYXJcIik7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMubW9kZSA9IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1cE9uT3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmxvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxlVmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmN1cnJlbnREYXRlID0gdGhpcy5pbml0aWFsRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5maXJzdERheU9mV2VlaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5vbkRhdGVDaGFuZ2Uuc3Vic2NyaWJlKChkOkRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoeyBtYXhEYXRlLCBtaW5EYXRlLCBtb2RlIH06U2ltcGxlQ2hhbmdlcyk6dm9pZCB7XG4gICAgICAgIGlmIChtYXhEYXRlIHx8IG1pbkRhdGUgfHwgbW9kZSkge1xuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5kYXRlcGlja2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGMudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gV2UgcG9zdCBwcm9jZXNzIHRoZSBtaW4gJiBtYXggZGF0ZSBiZWNhdXNlIHNvbWV0aW1lcyB0aGlzIHB1dHMgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgYWxsb3dlZCByYW5nZS5cbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgdmFsdWUgPCB0aGlzLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWlNaW5EYXRlOiB7IHJlcXVpcmVkOiB0aGlzLm1pbkRhdGUsIGFjdHVhbDogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHZhbHVlID4gdGhpcy5tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWF4RGF0ZTogeyByZXF1aXJlZDogdGhpcy5tYXhEYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZ3VsYXIgZXhwZWN0cyBudWxsXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1udWxsLWtleXdvcmRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6RGF0ZSB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyU2VsZWN0ZWREYXRlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPERhdGUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyVmFsaWRhdG9yQ2hhbmdlKVwiOiBcIm9uVmFsaWRhdG9yQ2hhbmdlKClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbGlkYXRvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IgZXh0ZW5kcyBDdXN0b21WYWxpZGF0b3I8U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBob3N0OlN1aURhdGVwaWNrZXJEaXJlY3RpdmUpIHsgc3VwZXIoaG9zdCk7IH1cbn1cbiIsIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vZGF0ZXBpY2tlci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEludGVybmFsRGF0ZVBhcnNlciwgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBib3dzZXIgZnJvbSBcImJvd3NlclwiO1xuXG5pbXBvcnQgXCIuLi9oZWxwZXJzL2lzLXdlYnZpZXdcIjtcbmltcG9ydCAqIGFzIGlzVUFXZWJWaWV3IGZyb20gXCJpcy11YS13ZWJ2aWV3XCI7XG5jb25zdCBpc1dlYlZpZXcgPSBpc1VBV2ViVmlld1tcImRlZmF1bHRcIl0gfHwgaXNVQVdlYlZpZXc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aURhdGVwaWNrZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF91c2VOYXRpdmVPbk1vYmlsZTpib29sZWFuO1xuXG4gICAgQElucHV0KFwicGlja2VyVXNlTmF0aXZlT25Nb2JpbGVcIilcbiAgICBwdWJsaWMgZ2V0IHVzZU5hdGl2ZU9uTW9iaWxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHVzZU5hdGl2ZU9uTW9iaWxlKGZhbGxiYWNrOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGUgPSBmYWxsYmFjaztcbiAgICAgICAgY29uc3QgaXNPbk1vYmlsZSA9IGJvd3Nlci5tb2JpbGUgfHwgYm93c2VyLnRhYmxldCB8fCBpc1dlYlZpZXcobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlICYmIGlzT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgZmFsbGJhY2tBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmFsbGJhY2tBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZmFsbGJhY2tBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIElmIHRoZSBmYWxsYmFjayBpcyBhY3RpdmUsIHRoZW4gdGhlIHRyaWdnZXIgbXVzdCBiZSBtYW51YWwgc28gdGhlIGRhdGVwaWNrZXIgbmV2ZXIgb3BlbnMuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRoaXMuZmFsbGJhY2tBY3RpdmUgPyBQb3B1cFRyaWdnZXIuTWFudWFsIDogUG9wdXBUcmlnZ2VyLkZvY3VzO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlICh0aGlzIHdpbGwgaW5zZXJ0IHRoZSBgVGAgYXMgcmVxdWlyZWQpLlxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhcnNlcigpOkRhdGVQYXJzZXIge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRlcm5hbERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLm1vZGUsIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzLmZvcm1hdHNbdGhpcy5kYXRlcGlja2VyLm1vZGVdLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jdXJyZW50SW5wdXRWYWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVR5cGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZVN0cmluZygpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50eXBlXCIpXG4gICAgcHVibGljIGdldCB0eXBlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIuY29uZmlnLmZhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInRleHRcIjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1heFwiKVxuICAgIHB1YmxpYyBnZXQgbWF4KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1heERhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtYXggaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gT3VyIERhdGVwaWNrZXIgd2lsbCBhbHdheXMgY2hvb3NlIHRoZSAxc3QgZGF0ZSBvbiB0aGUgcHJvdmlkZWQgcHJlY2lzaW9uLFxuICAgICAgICAgICAgLy8gbWVhbmluZyBhbnl0aGluZyBiZWxvdyB0aGUgbWF4RGF0ZSB3aWxsIHdvcmssIGhlbmNlIGVuZE9mLlxuICAgICAgICAgICAgY29uc3QgbWF4ID0gRGF0ZVV0aWwuZW5kT2YodGhpcy5kYXRlcGlja2VyLmNvbmZpZy5wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1heCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1pblwiKVxuICAgIHB1YmxpYyBnZXQgbWluKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtaW4gaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gV2UgdXNlIDEgbWludXRlIGJlZm9yZSB0aGUgbmV4dCBkYXRlIGF0IHRoZSBjb25maWd1cmVkIHByZWNpc2lvbiBzaW5jZVxuICAgICAgICAgICAgLy8gb3VyIERhdGVwaWNrZXIgcGlja3MgdGhlIGZpcnN0IGF2YWlsYWJsZSBkYXRlIGF0IHRoYXQgcHJlY2lzaW9uLlxuICAgICAgICAgICAgY29uc3QgbWluID0gRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtaW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgZGF0ZXBpY2tlcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIHZhbHVlQWNjZXNzb3I6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZXMsIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dCBhbG9uZ3NpZGUgaXQuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5vblNlbGVjdGVkRGF0ZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcblxuICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSBpZiBpdCBpcyBkaWZmZXJlbnQgdG8gd2hhdCBpdCdzIGJlaW5nIHVwZGF0ZWQgdG8uXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCB0aGUgZWRpdGluZyBwb3NpdGlvbiBpc24ndCBjaGFuZ2VkIHdoZW4gbWFudWFsbHkgdHlwaW5nIHRoZSBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuX2xhc3RVcGRhdGVUeXBlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHZhbHVlIHx8IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHR5cGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyZW50SW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZGF0ZSBpZiBubyBkYXRlIHdhcyBlbnRlcmVkIG1hbnVhbGx5LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlci5wYXJzZSh2YWx1ZSwgdGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgJiYgdmFsdWUgPT09IHRoaXMucGFyc2VyLmZvcm1hdChwYXJzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUocGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iub25Ub3VjaGVkKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VEYXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICBjb25zdCBtb250aFN0YXJ0ID0gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLk1vbnRoLCBEYXRlVXRpbC5jbG9uZShzdGFydCkpO1xuICAgICAgICBtb250aFN0YXJ0LnNldERhdGUoKDEgLSBtb250aFN0YXJ0LmdldERheSgpICsgdGhpcy5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrIC0gNykgJSA3KTtcbiAgICAgICAgcmV0dXJuIG1vbnRoU3RhcnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBpdGVtLmRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0TW9udGgoKSAhPT0gYmFzZURhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgaXRlbS5pc1NlbGVjdGFibGUgPSBpdGVtLmlzRGlzYWJsZWQ7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItZGF0ZS12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBzZXZlbiBjb2x1bW4gZGF5XCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjdcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIj57eyBkYXkgfX08L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckRhdGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRheXMoKTpzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLndlZWtkYXlzTmFycm93O1xuICAgICAgICByZXR1cm4gZGF5cy5tYXAoKGQsIGkpID0+IGRheXNbKGkgKyB0aGlzLnNlcnZpY2UuZmlyc3REYXlPZldlZWspICUgZGF5cy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLm1vbnRoLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkRhdGUsIG5ldyBDYWxlbmRhclJhbmdlRGF0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Nb250aCwgNiwgNykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgY29uc3QgY3VzdG9tRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcihjdXN0b21Gb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItaG91ci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBmb3VyIGNvbHVtbiBob3VyXCI+XG48dGhlYWQgKm5nSWY9XCJzZXJ2aWNlLmNvbmZpZy5tb2RlICE9IDFcIj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJIb3VyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuSG91ciwgbmV3IENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZShEYXRlUHJlY2lzaW9uLkRhdGUsIDYsIDQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VNaW51dGVTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjYWxjU3RhcnQoc3RhcnQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uSG91ciwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY0RhdGVzKHN0YXJ0OkRhdGUpOkRhdGVbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLkFycmF5XG4gICAgICAgICAgICAucmFuZ2UodGhpcy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKGkgPT4gRGF0ZVV0aWwuYWRkKERhdGVQcmVjaXNpb24uTWludXRlLCBEYXRlVXRpbC5jbG9uZShzdGFydCksIGkgKiA1KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZSwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KGl0ZW0uZGF0ZSk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1taW51dGUtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1pbnV0ZVwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI0XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhck1pbnV0ZVZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29uZmlnLm1vZGUgIT09IENhbGVuZGFyTW9kZS5UaW1lT25seSkge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWVGb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGV0aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKGRhdGVUaW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgICAgICBjb25zdCB0aW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRpbWVGb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIG5ldyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZShEYXRlUHJlY2lzaW9uLkhvdXIsIDQsIDMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5tb250aHNTaG9ydFtpdGVtLmRhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1tb250aC12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4gbW9udGhcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNb250aFZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgeWVhcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMueWVhciwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgbmV3IENhbGVuZGFyUmFuZ2VNb250aFNlcnZpY2UoRGF0ZVByZWNpc2lvbi5ZZWFyLCA0LCAzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBVdGlsLlN0cmluZy5wYWRMZWZ0KGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpID49IHRoaXMuY2FsY1N0YXJ0KGJhc2VEYXRlKS5nZXRGdWxsWWVhcigpICsgMTA7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXIteWVhci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4geWVhclwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYWQoZGVjYWRlU3RhcnQpIH19IC0ge3sgcGFkKGRlY2FkZVN0YXJ0ICsgMTApIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclllYXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRlY2FkZVN0YXJ0KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsXG4gICAgICAgICAgICAuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkRlY2FkZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSlcbiAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBuZXcgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGVjYWRlLCA0LCAzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZCh5ZWFyOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuU3RyaW5nLnBhZExlZnQoeWVhci50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVBvcHVwTW9kdWxlIH0gZnJvbSBcIi4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyVmlld1RpdGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWxlbmRhci12aWV3LXRpdGxlXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclllYXJWaWV3IH0gZnJvbSBcIi4vdmlld3MveWVhci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1vbnRoVmlldyB9IGZyb20gXCIuL3ZpZXdzL21vbnRoLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJEYXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL2RhdGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJIb3VyVmlldyB9IGZyb20gXCIuL3ZpZXdzL2hvdXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvbWludXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1xuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3Jcbn0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNhbGVuZGFySXRlbSxcblxuICAgICAgICBTdWlDYWxlbmRhclZpZXdUaXRsZSxcbiAgICAgICAgU3VpQ2FsZW5kYXJZZWFyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNb250aFZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyRGF0ZVZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFySG91clZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTWludXRlVmlldyxcblxuICAgICAgICBTdWlEYXRlcGlja2VyLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtjbGFzcy5jb250ZW50XT1cIndyYXBDb250ZW50XCI+XG4gICAgPGRpdiBbY2xhc3MuY2VudGVyXT1cIndyYXBDb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5kaW1tZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXIgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHByaXZhdGUgX2lzRGltbWVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGltbWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaW1tZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBjb25zdCBpc0RpbW1lZCA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkgd2hlbiBmaXJzdCBzZXR0aW5nIGRpbW1lZCwgdG8gZW5zdXJlIGluaXRpYWwgc3RhdGUgZG9lc24ndCB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoaXNEaW1tZWQsIFwiYmxvY2tcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRGltbWVkICE9PSBpc0RpbW1lZCkge1xuXG4gICAgICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGlzRGltbWVkO1xuXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwiZmFkZVwiLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgaXNEaW1tZWQgPyBUcmFuc2l0aW9uRGlyZWN0aW9uLkluIDogVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NsaWNrYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLyogSW50ZXJuYWwgZm9yIG5vdyAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdyYXBDb250ZW50OmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICB0aGlzLl9pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndyYXBDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGltbWVkQ2hhbmdlLmVtaXQodGhpcy5pc0RpbW1lZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlEaW1tZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRGltbWVyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEaW1tZXJNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IFwiaXRlbUNsaWNrXCIgfCBcIm91dHNpZGVDbGlja1wiIHwgXCJkaXNhYmxlZFwiO1xuXG4vLyBDcmVhdGVzIGVzc2VudGlhbGx5IGEgJ3N0cmluZycgZW51bS5cbmV4cG9ydCBjb25zdCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSB7XG4gICAgSXRlbUNsaWNrOiBcIml0ZW1DbGlja1wiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSxcbiAgICBPdXRzaWRlQ2xpY2s6IFwib3V0c2lkZUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIERpc2FibGVkOiBcImRpc2FibGVkXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlXG59O1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZXJ2aWNlIHtcbiAgICAvLyBPcGVuIHN0YXRlIG9mIHRoZSBkcm9wZG93blxuICAgIHB1YmxpYyBpc09wZW46Ym9vbGVhbjtcbiAgICAvLyBBbmltYXRpbmcgc3RhdGUgb2YgdGhlIGRyb3Bkb3duLlxuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIC8vIEVtaXR0ZXIgZm9yIHdoZW4gZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgIHB1YmxpYyBpc09wZW5DaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFNldHMgdGhlIFwiYXV0b2Nsb3NlXCIgbW9kZSBvZiB0aGUgZHJvcGRvd24gLSBpLmUuIHdoYXQgdXNlciBhY3Rpb24gY2F1c2VzIGl0IHRvIGF1dG9jbG9zZS5cbiAgICBwdWJsaWMgYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGU7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjb250YWluaW5nIGRyb3Bkb3duIHNvIHdlIGNhbiBvcGVuIGl0IGFzIG5lY2Vzc2FyeS5cbiAgICBwdWJsaWMgcGFyZW50PzpEcm9wZG93blNlcnZpY2U7XG4gICAgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGRyb3Bkb3ducyBuZXN0ZWQgaW4gdGhpcyBvbmUgc28gd2UgY2FuIGNsb3NlIHRoZW0gYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBjaGlsZHJlbjpEcm9wZG93blNlcnZpY2VbXTtcbiAgICBwdWJsaWMgZ2V0IGlzTmVzdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGF1dG9DbG9zZU1vZGU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmF1dG9DbG9zZU1vZGUgPSBhdXRvQ2xvc2VNb2RlO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3BlblN0YXRlKGlzT3Blbjpib29sZWFuLCByZWZsZWN0SW5QYXJlbnQ6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHN0YXRlIGlmIGl0IGhhcyBjaGFuZ2VkLCBhbmQgdGhlIGRyb3Bkb3duIGlzbid0IGRpc2FibGVkLlxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhIWlzT3BlbjtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gV2UgbXVzdCBkZWxheSB0aGUgZW1pdHRpbmcgdG8gYXZvaWQgdGhlICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIEFuZ3VsYXIgZXJyb3JzLlxuICAgICAgICAgICAgdGhpcy5kZWxheSgoKSA9PiB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgY2hpbGQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgY2xvc2VzLlxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjID0+IGMuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiByZWZsZWN0SW5QYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBwYXJlbnQgZHJvcGRvd25zIHdoZW4gdGhpcyBvbmUgb3BlbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc2V0T3BlblN0YXRlKHRoaXMuaXNPcGVuLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT3BlbiAhPT0gaXNPcGVuICYmIHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGhhcyBjaGFuZ2VkLCBidXQgdGhlIGRyb3Bkb3duIGlzIGRpc2FibGVkLCByZS1lbWl0IHRoZSBvcmlnaW5hbCBpc09wZW4gdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgIT09IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICghIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd24gYXMgaXQgaXMgbm93IGRpc2FibGVkXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSAhIWlzRGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlT3BlblN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLmlzT3Blbik7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgZHJvcGRvd24gc2VydmljZSBhcyBhIGNoaWxkIG9mIHRoaXMgc2VydmljZS5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGlsZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIHByb3ZpZGVkIGRyb3Bkb3duIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhcyBhIGNoaWxkLCBvciBpcyBhIGRlc2NlbmRhbnQgb2YgYSBjaGlsZC5cbiAgICBwdWJsaWMgaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQ6RHJvcGRvd25TZXJ2aWNlKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IGNoaWxkIHx8ICEhdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLmZpbmQoYyA9PiAhIWMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAuZmluZChjQ2hpbGQgPT4gY0NoaWxkLmlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkKSkpO1xuICAgIH1cblxuICAgIC8vIFdpcGVzIGFueSBuZXN0ZWQgZGF0YSwgc28gYWxsIHNlcnZpY2VzIGNhbiBiZSBjbGVhbmx5IHJlYXR0YWNoZWQuXG4gICAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgYy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kIGZvciBkZWxheWluZyBhbiBldmVudCBpbnRvIHRoZSBuZXh0IHRpY2ssIHRvIGF2b2lkIEFuZ3VsYXIgXCJjaGFuZ2VkIGFmdGVyIGNoZWNrZWRcIiBlcnJvci5cbiAgICBwcml2YXRlIGRlbGF5KGNhbGxiYWNrOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBJQXVnbWVudGVkRWxlbWVudCwgS2V5Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbi8vIFBvbHlmaWxsIGZvciBJRVxuaW1wb3J0IFwiZWxlbWVudC1jbG9zZXN0XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIFdlIG11c3QgYXR0YWNoIHRvIGV2ZXJ5ICcuaXRlbScgYXMgQW5ndWxhciBkb2Vzbid0IHN1cHBvcnQgPiBzZWxlY3RvcnMuXG4gICAgc2VsZWN0b3I6IFwiLml0ZW1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgLy8gV2UgbXVzdCB1c2UgbmF0aXZlRWxlbWVudCBhcyBBbmd1bGFyIGRvZXNuJ3QgaGF2ZSBhIHdheSBvZiByZWFkaW5nIGNsYXNzIGluZm9ybWF0aW9uLlxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNTZWxlY3RlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFJlbmRlcmVyIGlzIHVzZWQgdG8gZW5hYmxlIGEgZHluYW1pYyBjbGFzcyBuYW1lLlxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGNsYXNzIG5hbWUgdXNlZCBmb3IgYSAnc2VsZWN0ZWQnIGl0ZW0uXG4gICAgcHVibGljIHNlbGVjdGVkQ2xhc3M6c3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IFN1aURyb3Bkb3duTWVudSkpXG4gICAgcHVibGljIGNoaWxkRHJvcGRvd25NZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGREcm9wZG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNoaWxkRHJvcGRvd25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1DbGljaygpOnZvaWQge1xuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bk1lbnVdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkRyb3Bkb3duU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZSh2YWx1ZTpEcm9wZG93blNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0lzT3BlbiA9IHRoaXMuX3NlcnZpY2UuaXNPcGVuO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKGlzT3Blbjpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICE9PSBwcmV2aW91c0lzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIHRyYW5zaXRpb25zIGlmIHRoZSBvcGVuIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuX3NlcnZpY2UuaXNBbmltYXRpbmcgPSBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpdGVtIHNlbGVjdGlvbnMgd2hlbiBhIG5lc3RlZCBpdGVtIGlzIHNlbGVjdGVkIHRvIGF2b2lkIGluY29zaXN0ZW50IG9wZW4gc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c0lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnRFbGVtZW50KHZhbHVlOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4odmFsdWUubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhcmVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd25NZW51SXRlbSlcbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5SW50ZXJuYWw6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeU92ZXJyaWRlOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHB1YmxpYyBzZXQgaXRlbXMoaXRlbXM6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pdGVtc1F1ZXJ5KCk6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSB8fCB0aGlzLl9pdGVtc1F1ZXJ5SW50ZXJuYWw7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsaXN0IG9mIGl0ZW1zLCBpZ25vcmluZyB0aG9zZSB0aGF0IGFyZSBkaXNhYmxlZC5cbiAgICBwcml2YXRlIGdldCBfaXRlbXMoKTpTdWlEcm9wZG93bk1lbnVJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeS5maWx0ZXIoaSA9PiAhaS5pc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICAvLyBTdGFjayB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAvLyBTZWxlY3RlZCBpdGVtcyBsb3dlciBpbiB0aGUgc3RhY2sgYXJlIG5lY2Vzc2FyaWx5IHRoZSBwYXJlbnQgb2YgdGhlIGl0ZW0gb25lIGhpZ2hlci5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtczpTdWlEcm9wZG93bk1lbnVJdGVtW107XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSAxc3QgaXRlbSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudUF1dG9TZWxlY3RGaXJzdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVNlbGVjdGVkSXRlbUNsYXNzOnN0cmluZztcblxuICAgIHByaXZhdGUgX3BhcmVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGVzdHJveWVkIGJlZm9yZSBpdCBoYXMgYSBjaGFuY2UgdG8gYmUgZnVsbHkgaW5pdGlhbGlzZWQuXG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQgJiBNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSUF1Z21lbnRlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSBhbiBpdGVtIGlzIHNlbGVjdGVkLCB3ZSBjYW4gY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB0aGUgcm9vdCBkcm9wZG93biAoaS5lLiBub3QgbmVzdGVkIGRyb3Bkb3ducykgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5fc2VydmljZS5pc09wZW4gJiYgIXRoaXMuX3NlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZG9jdW1lbnQgZXZlbnRzIGxpa2Ugc2Nyb2xsaW5nIHdoaWxlIG9wZW4uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCEvaW5wdXQvaS50ZXN0KHRhcmdldC50YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgIFtLZXlDb2RlLkVzY2FwZSwgS2V5Q29kZS5FbnRlciwgS2V5Q29kZS5VcCwgS2V5Q29kZS5Eb3duLCBLZXlDb2RlLkxlZnQsIEtleUNvZGUuUmlnaHRdLmZpbmQoa0MgPT4ga0MgPT09IGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldHMgdGhlIHRvcCBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHN0YWNrLlxuICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBtZW51IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IGFsbG93cyB1cyB0byBlYXNpbHkgZGV0ZXJtaW5lIGl0cyBzaWJsaW5ncy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbnRhaW5lcjpTdWlEcm9wZG93bk1lbnUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29udGFpbmVyID0gc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIDogY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvd24gOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBiZWxvdyB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICAvLyBVcCA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGFib3ZlIHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkQ29udGFpbmVyLnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGluIGFuIGlucHV0LCB0byBzdG9wIGp1bXBpbmcgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbnRlciA6IGlmIHRoZSBpdGVtIGRvZXNuJ3QgY29udGFpbiBhIG5lc3RlZCBkcm9wZG93biwgJ2NsaWNrJyBpdC4gT3RoZXJ3aXNlLCBmYWxsIHRocm91Z2ggdG8gJ1JpZ2h0JyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucGVyZm9ybUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gY29udGFpbnMgYSBuZXN0ZWQgZHJvcGRvd24sIG9wZW4gdGhlIGRyb3Bkb3duICYgc2VsZWN0IHRoZSAxc3QgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gYSBuZXN0ZWQgZHJvcGRvd24sIGNsb3NlIGl0IGFuZCBzZWxlY3QgdGhlIGNvbnRhaW5pbmcgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2VsZWN0aW9uKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5zZWxlY3RlZENsYXNzID0gdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3M7XG4gICAgICAgICAgICBpLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBdXRvc2VsZWN0IDFzdCBpdGVtIGlmIHJlcXVpcmVkICYgcG9zc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1swXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2l0ZW1zUXVlcnkuZmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaXRlbSB0byBuZXh0IGJlIHNlbGVjdGVkLCBiYXNlZCBvbiB0aGUga2V5Ym9hcmQgaW5wdXQgJiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZEl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSwga2V5Q29kZTpLZXlDb2RlKTpTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2l0ZW1zXG4gICAgICAgICAgICAuZmluZEluZGV4KGkgPT4gaSA9PT0gc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOlN1aURyb3Bkb3duTWVudUl0ZW07XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vbmUgYXJlIHNlbGVjdGVkLCBzZWxlY3QgdGhlIDFzdCBpdGVtLiBTaG91bGQgdGhpcyBiZSBgdGhpcy5pdGVtcy5sYXN0IC0gMWA/XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHVwZGF0ZWQgaW5kZXguIFRoZSB8fCBpcyB0byBzdG9wIHVzIHNlbGVjdGluZyBwYXN0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGl0ZW0gbGlzdC5cbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5faXRlbXNbc2VsZWN0ZWRJbmRleF0gfHwgc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudTpFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlY3Q6Q2xpZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID0gMDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LmJvdHRvbSAtIG1lbnVSZWN0LmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QudG9wIC0gbWVudVJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zY3JvbGxUb3AgKz0gTWF0aC5yb3VuZChzY3JvbGxBbW91bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25JdGVtc0NoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSB1c2UgYF9pdGVtc2AgcmF0aGVyIHRoYW4gYGl0ZW1zYCBpbiBjYXNlIG9uZSBvciBtb3JlIGhhdmUgYmVjb21lIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsXG4gICAgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBLZXlDb2RlLCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuL2Ryb3Bkb3duLW1lbnVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46UXVlcnlMaXN0PFN1aURyb3Bkb3duPjtcblxuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTpTdWlEcm9wZG93bltdIHtcbiAgICAgICAgLy8gQENvbnRlbnRDaGlsZHJlbiBpbmNsdWRlcyB0aGUgY3VycmVudCBlbGVtZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoYyA9PiBjICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbkNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0byBlbnN1cmUgbmVzdGVkIGRyb3Bkb3ducyBkb24ndCBnZXQgbWFkZSBib2xkLlxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5zZXJ2aWNlLmlzTmVzdGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgb3BlbmluZyB0aGUgZHJvcGRvd24sIHdlIHdhbnQgdG8gYWx3YXlzIG9wZW4gaXRzIHBhcmVudHMuXG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodmFsdWUsICEhdmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXREaXNhYmxlZFN0YXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJJbmRleCgpOm51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy5zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGRlZmF1bHQgb2YgMC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGF1dG9DbG9zZSgpOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dG9DbG9zZSh2YWx1ZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3Qgc2V0IFtzdWlEcm9wZG93bk1lbnVdIG9uIHRoZSBtZW51IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5jaGFuZ2VzXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hpbGRyZW5VcGRhdGVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hpbGRyZW5VcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlcmVnaXN0ZXIgY2hpbGQgZHJvcGRvd25zIGVhY2ggdGltZSB0aGUgbWVudSBjb250ZW50IGNoYW5nZXMuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnNlcnZpY2UpXG4gICAgICAgICAgICAuZm9yRWFjaChzID0+IHRoaXMuc2VydmljZS5yZWdpc3RlckNoaWxkKHMpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlT3BlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsbHlDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlwcmVzcyhlOkhhbmRsZWRFdmVudCAmIEtleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBCbG9jayB0aGUga2V5Ym9hcmQgZXZlbnQgZnJvbSBiZWluZyBmaXJlZCBvbiBwYXJlbnQgZHJvcGRvd25zLlxuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRlcm5hbGx5Q2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHJlZmxlY3QgaW4gcGFyZW50IHNpbmNlIHRoZXkgYXJlIGFsc28gYm91bmQgdG8gZG9jdW1lbnQuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUsIFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRHJvcGRvd24sXG4gICAgICAgIFN1aURyb3Bkb3duTWVudSxcbiAgICAgICAgU3VpRHJvcGRvd25NZW51SXRlbVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZyB9IGZyb20gXCIuL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG4vLyBIZWxwZXIgY2xhc3MgdG8gc3VwcG9ydCBtZXRob2QgY2hhaW5pbmcgd2hlbiBjYWxsaW5nIGBTdWlNb2RhbFNlcnZpY2Uub3BlbiguLi4pYC5cbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOk1vZGFsQ29uZmlnPFQsIFUsIFY+O1xuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpTW9kYWw8VSwgVj4+O1xuXG4gICAgLy8gU2hvcnRoYW5kIGZvciBkaXJlY3QgYWNjZXNzIHRvIHRoZSBgU3VpTW9kYWxgIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50KCk6U3VpTW9kYWw8VSwgVj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlOk1vZGFsQ29uZmlnPFQsIFUsIFY+LCBjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgZGVzdHJveSB0aGUgbW9kYWwgY29tcG9uZW50IHdoZW4gaXQgaGFzIGJlZW4gZGlzbWlzc2VkLlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkRpc21pc3Muc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkFwcHJvdmVgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkFwcHJvdmUoY2FsbGJhY2s6KHJlc3VsdDpVKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uQXBwcm92ZS5zdWJzY3JpYmUoKHJlczpVKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZm9yIHdoZW4gYG9uRGVueWAgaXMgZmlyZWQuXG4gICAgcHVibGljIG9uRGVueShjYWxsYmFjazoocmVzdWx0OlYpID0+IHZvaWQpOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EZW55LnN1YnNjcmliZSgocmVzOlYpID0+IGNhbGxiYWNrKHJlcykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB0aGUgYXBwcm92ZSBldmVudCBvZiB0aGUgbW9kYWwgbWFudWFsbHkuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlUpOnZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHByb3ZlKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGRlbnkgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBkZW55KHJlc3VsdDpWKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGVueShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG1vZGFsIGNvbXBvbmVudCBpbnN0YW50bHksIHdpdGhvdXQgdHJhbnNpdGlvbnMgb3IgZmlyaW5nIGFueSBldmVudHMuXG4gICAgcHVibGljIGRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsVGVtcGxhdGUgfSBmcm9tIFwiLi9tb2RhbC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJub3JtYWxcIiB8IFwibGFyZ2VcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsU2l6ZSA9IHtcbiAgICBNaW5pOiBcIm1pbmlcIiBhcyBNb2RhbFNpemUsXG4gICAgVGlueTogXCJ0aW55XCIgYXMgTW9kYWxTaXplLFxuICAgIFNtYWxsOiBcInNtYWxsXCIgYXMgTW9kYWxTaXplLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIiBhcyBNb2RhbFNpemUsXG4gICAgTGFyZ2U6IFwibGFyZ2VcIiBhcyBNb2RhbFNpemVcbn07XG5cbi8vIFN0b3JlcyBhIGJhc2ljIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgbW9kYWwuXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4ge1xuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VjtcblxuICAgIC8vIERhdGEgdG8gcGFzcyB0byB0aGUgbW9kYWwgaW5zdGFuY2Ugd2hlbiBvcGVuZWQuXG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHVibGljIGlzRnVsbFNjcmVlbjpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwdWJsaWMgbXVzdFNjcm9sbDpib29sZWFuO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsIi8vIFNob3J0aGFuZCB0byBhdm9pZCB3cml0aW5nIGFycm93IHR5cGVzIGV2ZXJ5d2hlcmUuXG5leHBvcnQgdHlwZSBNb2RhbFJlc3VsdDxUPiA9IChyZXN1bHQ6VCkgPT4gdm9pZDtcblxuLy8gVXNlZCB0byBwYXNzIGFiaWxpdHkgdG8gY29udHJvbCBhIG1vZGFsIHRvIGEgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbHM8VCwgVT4ge1xuICAgIGNvbnN0cnVjdG9yKGFwcHJvdmU6TW9kYWxSZXN1bHQ8VD4sIGRlbnk6TW9kYWxSZXN1bHQ8VT4pIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlID0gYXBwcm92ZTtcbiAgICAgICAgdGhpcy5kZW55ID0gZGVueTtcbiAgICB9XG5cbiAgICAvLyBVc2UgbWV0aG9kIGhlcmUgcmF0aGVyIHRoYW4gYXJyb3cgdmFyaWFibGVzIHRvIG1ha2UgaW50ZWxsaXNlbnNlIHNob3cgdGhleSdyZSBtZXRob2RzLlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpUKTp2b2lkIHt9XG4gICAgcHVibGljIGRlbnkocmVzdWx0OlUpOnZvaWQge31cbn1cblxuLy8gSW5qZWN0ZWQgaW50byBjdXN0b20gbW9kYWwgY29tcG9uZW50cywgdG8gYWxsb3cgY29udHJvbCBvZiB0aGUgbW9kYWwsIGFuZCBhY2Nlc3MgdG8gYSBjb250ZXh0IG9iamVjdC5cbmV4cG9ydCBjbGFzcyBNb2RhbDxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29udHJvbHM8VSwgVj4ge1xuICAgIHB1YmxpYyBjb250ZXh0OlQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczpNb2RhbENvbnRyb2xzPFUsIFY+LCBjb250ZXh0OlQpIHtcbiAgICAgICAgLy8gSW5zdGFuY2VzIG9mIGBNb2RhbENvbnRyb2xzYCBhcmUgb25seSBjcmVhdGVkIGluIHRoZSBgU3VpTW9kYWxgIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyBzbyB3ZSB0YWtlIGFuIGluaXRpYWxpc2VkIGluc3RhbmNlIHJhdGhlciB0aGFuIHJlbWFraW5nIG9uZSBlYWNoIHRpbWUuXG4gICAgICAgIHN1cGVyKGNvbnRyb2xzLmFwcHJvdmUsIGNvbnRyb2xzLmRlbnkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scyB9IGZyb20gXCIuL21vZGFsLWNvbnRyb2xzXCI7XG5cbi8vIFNob3J0aGFuZCBmb3IgYSBtb2RhbCB0ZW1wbGF0ZS4gU2V0cyB1cCBhYmlsaXR5IHRvIHdyaXRlOiBgPG5nLXRlbXBsYXRlIGxldC1jb250ZXh0IGxldC1tb2RhbD1cIm1vZGFsXCI+Li4uPC9uZy10ZW1wbGF0ZT5gXG4vLyBXZSB1c2UgYW4gYWJzdHJhY3QgY2xhc3MgYXMgTW9kYWxUZW1wbGF0ZSB0ZW5kcyB0byBiZSB1c2VkIHdpdGhpbiBkZWNvcmF0ZWQgcHJvcGVydGllcywgd2hpY2ggbWVhbnMgaXQgbmVlZHMgdG8gZXhpc3QhXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kYWxUZW1wbGF0ZTxULCBVLCBWPiBleHRlbmRzIFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OlQ7IG1vZGFsOk1vZGFsQ29udHJvbHM8VSwgVj4gfT4ge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJRHluYW1pY0NsYXNzZXMsIEtleUNvZGUsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzLCBNb2RhbFJlc3VsdCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxTaXplIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFBhZ2UgZGltbWVyIGZvciBtb2RhbCBiYWNrZ3JvdW5kLiAtLT5cbjxzdWktZGltbWVyIGNsYXNzPVwicGFnZVwiXG4gICAgICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICAgICBbKGlzRGltbWVkKV09XCJkaW1CYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgIFtpc0NsaWNrYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICBbdHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgICAgICAgICBbd3JhcENvbnRlbnRdPVwiZmFsc2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIj5cblxuICAgIDwhLS0gTW9kYWwgY29tcG9uZW50LCB3aXRoIHRyYW5zaXRpb24gY29tcG9uZW50IGF0dGFjaGVkIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtb2RhbFwiXG4gICAgICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRyYW5zaXRpb25Db250cm9sbGVyPy5pc1Zpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsU2NyZWVuXCJcbiAgICAgICAgIFtjbGFzcy5iYXNpY109XCJpc0Jhc2ljXCJcbiAgICAgICAgIFtjbGFzcy5zY3JvbGxdPVwibXVzdFNjcm9sbFwiXG4gICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICNtb2RhbD5cblxuICAgICAgICA8IS0tIENvbmZpZ3VyYWJsZSBjbG9zZSBpY29uIC0tPlxuICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzQ2xvc2FibGUgJiYgaXNGdWxsU2NyZWVuXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2k+XG4gICAgICAgIDwhLS0gPG5nLWNvbnRlbnQ+IHNvIHRoYXQgPHN1aS1tb2RhbD4gY2FuIGJlIHVzZWQgYXMgYSBub3JtYWwgY29tcG9uZW50LiAtLT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tIEBWaWV3Q2hpbGQgcmVmZXJlbmNlIHNvIHdlIGNhbiBpbnNlcnQgZWxlbWVudHMgYmVzaWRlIHRoaXMgZGl2LiAtLT5cbiAgICAgICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zdWktZGltbWVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkuZGltbWVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLyogYXZvaWQgLnNjcm9sbGluZyBhcyBTZW1hbnRpYyBVSSBhZGRzIHVud2FudGVkIHN0eWxlcy4gKi9cbi5zY3JvbGwge1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsPFQsIFU+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKVxuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlU7XG5cbiAgICAvLyBTZXBhcmF0ZSBjbGFzcyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIG1ldGhvZHMgdG8gc3VwcG9ydCBwYXNzaW5nIGludG8gY29tcG9uZW50cy5cbiAgICBwdWJsaWMgY29udHJvbHM6TW9kYWxDb250cm9sczxULCBVPjtcblxuICAgIHB1YmxpYyBnZXQgYXBwcm92ZSgpOk1vZGFsUmVzdWx0PFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuYXBwcm92ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlbnkoKTpNb2RhbFJlc3VsdDxVPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmRlbnk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgYXBwcm92ZWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJhcHByb3ZlZFwiKVxuICAgIHB1YmxpYyBvbkFwcHJvdmU6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLCBhZnRlciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIEBPdXRwdXQoXCJkZW5pZWRcIilcbiAgICBwdWJsaWMgb25EZW55OkV2ZW50RW1pdHRlcjxVPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3Nlcy5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc2VkXCIpXG4gICAgcHVibGljIG9uRGlzbWlzczpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAVmlld0NoaWxkKFwibW9kYWxcIilcbiAgICBwcml2YXRlIF9tb2RhbEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIC8vIFNpemUgdXNlZCB0byBkaXNwbGF5IHRoZSBtb2RhbC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHJpdmF0ZSBfaXNGdWxsU2NyZWVuOmJvb2xlYW47XG5cbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRnVsbFNjcmVlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGdWxsU2NyZWVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNGdWxsU2NyZWVuKGZ1bGxTY3JlZW46Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0Z1bGxTY3JlZW4gPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoZnVsbFNjcmVlbik7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIGhhcyBiYXNpYyBzdHlsZXMgYXBwbGllZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBjdXJyZW50bHkgaXMgZGlzcGxheWluZyBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0U2Nyb2xsOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwcml2YXRlIF9tdXN0QWx3YXlzU2Nyb2xsOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbXVzdFNjcm9sbCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVzdFNjcm9sbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG11c3RTY3JvbGwobXVzdFNjcm9sbDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICAvLyAnQ2FjaGUnIHZhbHVlIGluIF9tdXN0QWx3YXlzU2Nyb2xsIHNvIHRoYXQgaWYgYHRydWVgLCBfbXVzdFNjcm9sbCBpc24ndCBldmVyIGF1dG8tdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHJpdmF0ZSBfaXNJbnZlcnRlZDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzSW52ZXJ0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW52ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0ludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBiYWNrcm91bmQgZGltbWVyIGlzIGFjdGl2ZS5cbiAgICBwdWJsaWMgZGltQmFja2dyb3VuZDpib29sZWFuO1xuICAgIC8vIFRydWUgYWZ0ZXIgYGFwcHJvdmVgIG9yIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfaXNDbG9zaW5nOmJvb2xlYW47XG5cbiAgICAvLyBgVmlld0NvbnRhaW5lclJlZmAgZm9yIHRoZSBlbGVtZW50IHRoZSB0ZW1wbGF0ZSBnZXRzIGluamVjdGVkIGFzIGEgc2libGluZyBvZi5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIC8vIFBhcmVudCBlbGVtZW50IG9mIG1vZGFsIGJlZm9yZSByZWxvY2F0aW9uIHRvIGRvY3VtZW50IGJvZHkuXG4gICAgcHJpdmF0ZSBfb3JpZ2luYWxDb250YWluZXI/OkVsZW1lbnQ7XG5cbiAgICBwdWJsaWMgZ2V0IGR5bmFtaWNDbGFzc2VzKCk6SUR5bmFtaWNDbGFzc2VzIHtcbiAgICAgICAgY29uc3QgY2xhc3NlczpJRHluYW1pY0NsYXNzZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZnJvbSBgTW9kYWxDb25maWdgICh0byBhdm9pZCB3cml0aW5nIGRlZmF1bHRzIHR3aWNlKS5cbiAgICAgICAgY29uc3QgY29uZmlnID0gbmV3IE1vZGFsQ29uZmlnPHVuZGVmaW5lZCwgVCwgVT4oKTtcbiAgICAgICAgdGhpcy5sb2FkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gRXZlbnQgZW1pdHRlcnMgZm9yIGVhY2ggb2YgdGhlIHBvc3NpYmxlIG1vZGFsIG91dGNvbWVzLlxuICAgICAgICB0aGlzLm9uQXBwcm92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgY29udHJvbHMgd2l0aCBhY3Rpb25zIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgY2FzZXMuXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgTW9kYWxDb250cm9sczxULCBVPihcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkFwcHJvdmUuZW1pdChyZXMpKSxcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmRpc21pc3MoKCkgPT4gdGhpcy5vbkRlbnkuZW1pdChyZXMpKSk7XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgdmFyaWFibGUgaW5pdGlhbGlzYXRpb24uXG4gICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIHZpc2libGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaW1CYWNrZ3JvdW5kID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBNb3ZlIHRoZSBtb2RhbCB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBlbnN1cmUgY29ycmVjdCBzY3JvbGxpbmcuXG4gICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlICN0ZW1wbGF0ZVNpYmxpbmcgZWxlbWVudCBmcm9tIHRoZSBET00gdG8gZml4IGJvdHRvbSBib3JkZXIgc3R5bGVzLlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSB0aGlzLnRlbXBsYXRlU2libGluZy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgaWYgKHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1hcmdpbiBvZmZzZXQgdG8gY2VudGVyIG1vZGFsIGNvcnJlY3RseSBvbi1zY3JlZW4uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBtb2RhbCB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICBwdWJsaWMgbG9hZENvbmZpZzxWPihjb25maWc6TW9kYWxDb25maWc8ViwgVCwgVT4pOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBjb25maWcuaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGNvbmZpZy5jbG9zZVJlc3VsdDtcblxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBjb25maWcuaXNGdWxsU2NyZWVuO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBjb25maWcuaXNCYXNpYztcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gY29uZmlnLmlzSW52ZXJ0ZWQ7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gY29uZmlnLm11c3RTY3JvbGw7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gY29uZmlnLnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzZXMgdGhlIG1vZGFsIHdpdGggYSB0cmFuc2l0aW9uLCBmaXJpbmcgdGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgdHJhbnNpdGlvbmluZy5cbiAgICBwcml2YXRlIGRpc21pc3MoY2FsbGJhY2s6KCkgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IGN1cnJlbnRseSBjbG9zaW5nLFxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgaW52aXNpYmxlLlxuICAgICAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRvbmUsIG1vdmUgdGhlIG1vZGFsIGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uLCBlbWl0IGEgZGlzbWlzcyBldmVudCwgYW5kIGZpcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3JpZ2luYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhICdkZW55JyBvdXRjb21lLCB1c2luZyB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgcmVhc29uLlxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgYWxsb3dlZCB0byBjbG9zZSwgZmlyZSB0aGUgZGVueSByZXN1bHQgd2l0aCB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVueSh0aGlzLmNsb3NlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY2lkZXMgd2hldGhlciB0aGUgbW9kYWwgbmVlZHMgdG8gcmVwb3NpdGlvbiB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgcHJpdmF0ZSB1cGRhdGVTY3JvbGwoKTp2b2lkIHtcbiAgICAgICAgLy8gU2VtYW50aWMgVUkgbW9kYWwgbWFyZ2luIGlzIDMuNXJlbSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBmb250IHNpemUsIHNvIGZvciBjb21wYXRpYmlsaXR5OlxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgKiAzLjU7XG5cbiAgICAgICAgLy8gX211c3RBbHdheXNTY3JvbGwgd29ya3MgYnkgc3RvcHBpbmcgX211c3RTY3JvbGwgZnJvbSBiZWluZyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQsIHNvIGl0IHN0YXlzIGB0cnVlYC5cbiAgICAgICAgaWYgKCF0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsICYmIHRoaXMuX21vZGFsRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX21vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIFRoZSBtb2RhbCBtdXN0IHNjcm9sbCBpZiB0aGUgd2luZG93IGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gdGhlIG1vZGFsIGhlaWdodCArIGJvdGggbWFyZ2lucy5cbiAgICAgICAgICAgIHRoaXMuX211c3RTY3JvbGwgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPCBlbGVtZW50LmNsaWVudEhlaWdodCArIG1hcmdpbiAqIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgbW9kYWwgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBEb2N1bWVudCBsaXN0ZW5lciBpcyBmaW5lIGhlcmUgYmVjYXVzZSBub2JvZHkgd2lsbCBoYXZlIGVub3VnaCBtb2RhbHMgb3Blbi5cbiAgICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6a2V5dXBcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50S2V5VXAoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGF1dG9tYXRpY2FsbHkgY292ZXJzIGNhc2Ugb2YgYCFpc0Nsb3NhYmxlYCwgc28gY2hlY2sgbm90IG5lZWRlZC5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6cmVzaXplXCIpXG4gICAgcHVibGljIG9uRG9jdW1lbnRSZXNpemUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgVGVtcGxhdGVNb2RhbENvbmZpZywgQ29tcG9uZW50TW9kYWxDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IEFjdGl2ZU1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvYWN0aXZlLW1vZGFsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge31cblxuICAgIHB1YmxpYyBvcGVuPFQsIFUsIFY+KG1vZGFsOk1vZGFsQ29uZmlnPFQsIFUsIFY+KTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBtb2RhbCBjb21wb25lbnQgdG8gYmUgc2hvd24uXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50PFN1aU1vZGFsPFUsIFY+PihTdWlNb2RhbCk7XG5cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciB0aGUgY3JlYXRlZCBtb2RhbCBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgICAgIGlmIChtb2RhbCBpbnN0YW5jZW9mIFRlbXBsYXRlTW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEluamVjdCB0aGUgdGVtcGxhdGUgaW50byB0aGUgdmlldy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyhtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcsIG1vZGFsLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgLy8gYGxldC1jb250ZXh0YFxuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogbW9kYWwuY29udGV4dCxcbiAgICAgICAgICAgICAgICAvLyBgbGV0LW1vZGFsPVwibW9kYWxcImBcbiAgICAgICAgICAgICAgICBtb2RhbDogY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2xzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RhbCBpbnN0YW5jZW9mIENvbXBvbmVudE1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgY29tcG9uZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1vZGFsIGNvbnRlbnQsXG4gICAgICAgICAgICAvLyBpbmplY3RpbmcgYW4gaW5zdGFuY2Ugb2YgYE1vZGFsYCB0byBiZSB1c2VkIGluIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogbmV3IE1vZGFsKG1vZGFsQ29tcG9uZW50LmNvbnRyb2xzLCBtb2RhbC5jb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSBuZXcgY29tcG9uZW50IGludG8gdGhlIGNvbnRlbnQgb2YgdGhlIG1vZGFsLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb1ZpZXcoY29udGVudENvbXBvbmVudFJlZiwgbW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nKTtcblxuICAgICAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBhY2Nlc3MgdG8gdGhlIGNvbnRlbnQgY29tcG9uZW50J3MgRE9NIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnRDb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIGluc2lkZSB0aGUgY29tcG9uZW50IHRvIHRoZSBtYWluIG1vZGFsIGVsZW1lbnQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGRvbmUgc28gdGhhdCBDU1MgY2xhc3NlcyBhcHBseSBjb3JyZWN0bHkuIEl0IGRvZXMgc3RvcCBhbnkgY3VzdG9tIHN0eWxlcyBmcm9tIHdvcmtpbmcgaG93ZXZlcixcbiAgICAgICAgICAgIC8vIHNvIG90aGVyIHdheXMgbWF5IGhhdmUgdG8gYmUgaW52ZXN0aWdhdGVkLlxuICAgICAgICAgICAgd2hpbGUgKGNvbnRlbnRFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSAmJiBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCdzICdlbXB0eSBzaGVsbCcgZnJvbSB0aGUgRE9NLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5kZXRhY2hGcm9tRG9jdW1lbnQoY29udGVudENvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggdGhlIG5ldyBtb2RhbCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAvLyBUaGUgY29tcG9uZW50IHdpbGwgbW92ZSBpdHNlbGYgdG8gdGhlIGRvY3VtZW50IGJvZHkgZm9yIGNvcnJlY3RsIHN0eWxpbmcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbihjb21wb25lbnRSZWYpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGdlbmVyYXRlZCBtb2RhbCB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIG1vZGFsQ29tcG9uZW50LmxvYWRDb25maWcobW9kYWwpO1xuXG4gICAgICAgIC8vIFJldHVybiBhbiBpbnN0YW5jZSBvZiBhbiBgQWN0aXZlTW9kYWxgLCBzbyB0aGUgdXNlciBjYW4gY29udHJvbCB0aGUgbmV3IG1vZGFsLlxuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZU1vZGFsKG1vZGFsLCBjb21wb25lbnRSZWYpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aURpbW1lck1vZHVsZSB9IGZyb20gXCIuLi9kaW1tZXIvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcHJvZ3Jlc3NcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJhclwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiAqbmdJZj1cInNob3dQcm9ncmVzc1wiPnt7IHBlcmNlbnRhZ2UgfX0lPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJsYWJlbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYmFyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcyAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzcyB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wcm9ncmVzc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF92YWx1ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWF4aW11bTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgX292ZXJyaWRlU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXV0b1N1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNob3dQcm9ncmVzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWF4aW11bSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcHJlY2lzaW9uKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWNpc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZWNpc2lvbih2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChjb252ZXJ0ZWQsIDApLCAyMCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc3VjY2Vzc1wiKVxuICAgIHB1YmxpYyBnZXQgcmVhY2hlZE1heGltdW0oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlU3VjY2VzcyB8fCAoKHRoaXMudmFsdWUgPj0gdGhpcy5tYXhpbXVtKSAmJiB0aGlzLmF1dG9TdWNjZXNzKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmRhdGEtcGVyY2VudFwiKVxuICAgIHB1YmxpYyBnZXQgcGVyY2VudGFnZSgpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJvdW5kZWRWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMudmFsdWUsIDApLCB0aGlzLm1heGltdW0pO1xuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoYm91bmRlZFZhbHVlIC8gdGhpcy5tYXhpbXVtKSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBzZXQgY2xhc3NWYWx1ZShjbGFzc2VzOnN0cmluZykge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImF0dGFjaGVkXCIpIHx8IGNsYXNzZXMuaW5jbHVkZXMoXCJ0aW55XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwic3VjY2Vzc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gMTAwO1xuICAgICAgICB0aGlzLnByZWNpc2lvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5fb3ZlcnJpZGVTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlQcm9ncmVzcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVByb2dyZXNzXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQcm9ncmVzc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpIGNsYXNzPVwiaWNvblwiXG4gICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBpY29uczsgbGV0IGkgPSBpbmRleFwiXG4gICAobW91c2VvdmVyKT1cIm9uTW91c2VvdmVyKGkpXCJcbiAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgIFtjbGFzcy5zZWxlY3RlZF09XCJob3ZlcmVkSW5kZXggPj0gaSAmJiAhaXNSZWFkb25seVwiXG4gICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlID4gaVwiPlxuPC9pPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5yZWFkLW9ubHkgLmljb24ge1xuICAgIGN1cnNvcjogYXV0b1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PG51bWJlcj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmF0aW5nXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB2YWx1ZTpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhpbXVtID0gK3ZhbHVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaWNvbnMoKTp1bmRlZmluZWRbXSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItbGl0ZXJhbFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4aW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhvdmVyZWRJbmRleDpudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMubWF4aW11bSA9IDU7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soaTpudW1iZXIpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2VvdmVyKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSBpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuICAgIHB1YmxpYyBvbk1vdXNlb3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIGhvc3Q6IHsgXCIodmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmF0aW5nVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPG51bWJlciwgU3VpUmF0aW5nPiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYXRpbmcpIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVJhdGluZywgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUmF0aW5nLFxuICAgICAgICBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVJhdGluZyxcbiAgICAgICAgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElSZXN1bHRDb250ZXh0IH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaC1yZXN1bHRcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlLCBxdWVyeSlcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaFJlc3VsdDxUPiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlc3VsdFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk6c3RyaW5nO1xuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFiZWwgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoaXMgZnVuY3Rpb24gcmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IGxhYmVsLlxuICAgICAgICB0aGlzLmZvcm1hdHRlciA9IHZhbHVlID0+IFwiXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBMb29rdXBGblJlc3VsdCwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuaW50ZXJmYWNlIElDYWNoZWRBcnJheTxUPiB7IFtxdWVyeTpzdHJpbmddOlRbXTsgfVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZTxULCBVPiB7XG4gICAgLy8gU3RvcmVzIHRoZSBhdmFpbGFibGUgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9vcHRpb25zOlRbXTtcbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIG9wdGlvbnMuIE11c3QgYmUgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBwcm9taXNlLlxuICAgIHByaXZhdGUgX29wdGlvbnNMb29rdXA/Okxvb2t1cEZuPFQsIFU+O1xuICAgIC8vIEZpZWxkIHRoYXQgb3B0aW9ucyBhcmUgc2VhcmNoZWQgJiBkaXNwbGF5ZWQgb24uXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0ZpZWxkPzpzdHJpbmc7XG4gICAgLy8gRmlsdGVycyBhIGxpc3Qgb2Ygb3B0aW9ucy5cbiAgICBwdWJsaWMgb3B0aW9uc0ZpbHRlcjpGaWx0ZXJGbjxUPjtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBbXTtcbiAgICAgICAgLy8gV2UgY2Fubm90IHVzZSBib3RoIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFJlc2V0IGVudGlyZSBzZXJ2aWNlIHdpdGggbmV3IG9wdGlvbnMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNMb29rdXAoKTpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zTG9va3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgICAgIC8vIEFzIGJlZm9yZSwgY2Fubm90IHVzZSBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1Mb29rdXAoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vcHRpb25zTG9va3VwICYmIHRoaXMub3B0aW9uc0xvb2t1cC5sZW5ndGggPT09IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXNldCBvdGhlcndpc2Ugd2Ugd291bGQgbm93IGJlIHNob3dpbmcgaW52YWxpZCBzZWFyY2ggcmVzdWx0cy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgcmVzdWx0cyBvZiB0aGUgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0czpUW107XG4gICAgLy8gQ2FjaGUgb2YgcmVzdWx0cywgaW5kZXhlZCBieSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzQ2FjaGU6SUNhY2hlZEFycmF5PFQ+O1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnk6c3RyaW5nO1xuICAgIC8vIEFsbG93cyB0aGUgZW1wdHkgcXVlcnkgdG8gcHJvZHVjZSByZXN1bHRzLlxuICAgIHB1YmxpYyBhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbjtcbiAgICAvLyBIb3cgbG9uZyB0byBkZWxheSB0aGUgc2VhcmNoIGZvciB3aGVuIHVzaW5nIHVwZGF0ZVF1ZXJ5RGVsYXllZC4gU3RvcmVkIGluIG1zLlxuICAgIHB1YmxpYyBzZWFyY2hEZWxheTpudW1iZXI7XG4gICAgLy8gU3RvcmVzIHRoZSBzZWFyY2ggdGltZW91dCBoYW5kbGUgc28gd2UgY2FuIGNhbmNlbCBpdC5cbiAgICBwcml2YXRlIF9zZWFyY2hEZWxheVRpbWVvdXQ6bnVtYmVyO1xuICAgIC8vIFByb3ZpZGVzICdsb2FkaW5nJyBmdW5jdGlvbmFsaXR5LlxuICAgIHByaXZhdGUgX2lzU2VhcmNoaW5nOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFsbG93RW1wdHlRdWVyeTpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnNGaWx0ZXIgPSAob3MsIHEpID0+IHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhIFJlZ0V4cC5cbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHRoaXMuX3F1ZXJ5KTtcblxuICAgICAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHJlc3VsdHMgaWYgdGhlIHF1ZXJ5IHdhcyB2YWxpZCByZWdleC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyB0aGUgcmVzdWx0cyBzdWRkZW5seSBiZWNvbWluZyBlbXB0eSBpZiBhbiBpbnZhbGlkIHJlZ2V4IHN0cmluZyBpcyBpbnB1dHRlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3NcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIG9uIHRoZSBvcHRpb25zIHdpdGggYSBzdHJpbmcgbWF0Y2ggb24gdGhlIGZpZWxkIHdlIGFyZSB0ZXN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG8gPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4obywgdGhpcy5fb3B0aW9uc0ZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaChyZWdleCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgc2luY2UgaXQgd2Fzbid0IGEgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIGFuZCByZXNldC5cbiAgICAgICAgdGhpcy5hbGxvd0VtcHR5UXVlcnkgPSBhbGxvd0VtcHR5UXVlcnk7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgcXVlcnkgYWZ0ZXIgdGhlIHNwZWNpZmllZCBzZWFyY2ggZGVsYXkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9zZWFyY2hEZWxheVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEZWxheVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc2VhcmNoIHF1ZXJ5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcsIGNhbGxiYWNrOihlcnI/OkVycm9yKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgICAgIGlmICh0aGlzLl9xdWVyeSA9PT0gXCJcIiAmJiAhdGhpcy5hbGxvd0VtcHR5UXVlcnkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB0aGUgbmV3IHF1ZXJ5IGlzIGVtcHR5IChhbmQgd2UgZG9uJ3QgYWxsb3cgZW1wdHkgcXVlcmllcykuXG4gICAgICAgICAgICAvLyBEb24ndCByZXNldCBzbyB0aGF0IHdoZW4gYW5pbWF0aW5nIGNsb3NlZCB3ZSBkb24ndCBnZXQgYSBqdWRkZXIuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRzQ2FjaGUuaGFzT3duUHJvcGVydHkodGhpcy5fcXVlcnkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcXVlcnkgaXMgYWxyZWFkeSBjYWNoZWQsIG1ha2UgdXNlIG9mIGl0LlxuICAgICAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV07XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9ucyBsb29rdXAgd2l0aG91dCBhIHRoaXMgY29udGV4dC5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5TG9va3VwID0gdGhpcy5fb3B0aW9uc0xvb2t1cC5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fcXVlcnkpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG5cbiAgICAgICAgICAgIHF1ZXJ5TG9va3VwXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuc2V0ICdsb2FkaW5nJyBzdGF0ZSwgYW5kIHRocm93IHRoZSByZXR1cm5lZCBlcnJvciB3aXRob3V0IHVwZGF0aW5nIHRoZSByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMub3B0aW9uc0ZpbHRlci5jYWxsKHVuZGVmaW5lZCwgdGhpcy5fb3B0aW9ucywgdGhpcy5fcXVlcnkpO1xuICAgICAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhmaWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyAmIGNhY2hlcyB0aGUgbmV3IHNldCBvZiByZXN1bHRzLlxuICAgIHByaXZhdGUgdXBkYXRlUmVzdWx0cyhyZXN1bHRzOlRbXSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZVt0aGlzLl9xdWVyeV0gPSByZXN1bHRzO1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSk6TG9va3VwRm5SZXN1bHQ8VD47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlVbXSk6TG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VSB8IFVbXSk6TG9va3VwRm5SZXN1bHQ8VD4gfCBMb29rdXBGblJlc3VsdDxUW10+IHtcbiAgICAgICAgaWYgKGluaXRpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFVbXT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVT4pKHVuZGVmaW5lZCwgaW5pdGlhbCkgYXMgTG9va3VwRm5SZXN1bHQ8VD47XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgdG8gcmVnZXggd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICBwcml2YXRlIHRvUmVnZXgocXVlcnk6c3RyaW5nKTpSZWdFeHAgfCBzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGVzIEhUTUwgZm9yIGhpZ2hsaWdodGVkIG1hdGNoIHRleHQuXG4gICAgcHVibGljIGhpZ2hsaWdodE1hdGNoZXModGV4dDpzdHJpbmcsIHF1ZXJ5OnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgocXVlcnkpO1xuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIG1hdGNoID0+IGA8Yj4ke21hdGNofTwvYj5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZXNldHMgdGhlIHNlYXJjaCBiYWNrIHRvIGEgcHJpc3RpbmUgc3RhdGUuXG4gICAgcHJpdmF0ZSByZXNldCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc3VsdHNDYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElTZWFyY2hMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdENvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeTpzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIGlucHV0XCIgW2NsYXNzLmljb25dPVwiaGFzSWNvblwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJwcm9tcHRcIiB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuICAgIDxpICpuZ0lmPVwiaGFzSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgbWVudVNlbGVjdGVkSXRlbUNsYXNzPVwiYWN0aXZlXCI+XG5cbiAgICA8c3VpLXNlYXJjaC1yZXN1bHQgKm5nRm9yPVwibGV0IHIgb2YgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJyZXN1bHRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwicmVzdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHIpXCI+PC9zdWktc2VhcmNoLXJlc3VsdD5cblxuICAgIDxkaXYgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJtZXNzYWdlIGVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBFbnN1cmVzIHJlc3VsdHMgZGl2IGhhcyBtYXJnaW4uICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLyogRml4ZXMgcG9zaXRpb25pbmcgd2hlbiByZXN1bHRzIGFyZSBwdXNoZWQgYWJvdmUgdGhlIHNlYXJjaC4gKi9cbi5yZXN1bHRzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoPFQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBUPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IHRhYmluZGV4Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgdGhlIHNlYXJjaCBlbGVtZW50IGhhcyBhIHZpc2libGUgc2VhcmNoIGljb24uXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzSWNvbjpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgLy8gR2V0cyAmIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQgZGlzcGxheWVkIGluc2lkZSB0aGUgdGV4dCBpbnB1dC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlYXJjaExvY2FsZVZhbHVlcztcblxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VhcmNoTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlYXJjaExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VhcmNoXCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgYSBkZWxheWVkIHNlYXJjaC5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVzdWx0cyBvcGVuIHN0YXRlIGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgcXVlcnkgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXBGbjpMb29rdXBGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bHRGb3JtYXR0ZXI/OihyOlQsIHE6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdEZvcm1hdHRlcigpOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fcmVzdWx0Rm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0Rm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gciA9PiB0aGlzLnJlYWRWYWx1ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAociwgcSkgPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5yZWFkVmFsdWUociksIHEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHJlc3VsdEZvcm1hdHRlcihmb3JtYXR0ZXI6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yZXN1bHRGb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzdWx0VGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmV0YWluU2VsZWN0ZWRSZXN1bHQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWFyY2hEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhSZXN1bHRzOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cy5zbGljZSgwLCB0aGlzLm1heFJlc3VsdHMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSZXN1bHQ/OlQ7XG5cbiAgICAvLyBFbWl0cyB3aGVuZXZlciBhIG5ldyByZXN1bHQgaXMgc2VsZWN0ZWQuXG4gICAgQE91dHB1dChcInJlc3VsdFNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uUmVzdWx0U2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCByZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVD4oKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoRGVsYXkgPSAyMDA7XG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyA9IDc7XG5cbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VhcmNoO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdHMgYSByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdChyZXN1bHQ6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZC5lbWl0KHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkodGhpcy5yZWFkVmFsdWUocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IG9wZW4gb24gY2xpY2sgd2hlbiB0aGVyZSBpcyBhIHF1ZXJ5IGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWRzIHRoZSBzcGVjaWZpZWQgZmllbGQgZnJvbSBhbiBpdGVtLlxuICAgIHB1YmxpYyByZWFkVmFsdWUob2JqZWN0OlQpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmplY3QsIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VhcmNoLFxuICAgICAgICBTdWlTZWFyY2hSZXN1bHRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VhcmNoXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gW2lubmVySFRNTF09XCJyZW5kZXJlZFRleHRcIj48L3NwYW4+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdE9wdGlvbjxUPiBleHRlbmRzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQsIHdoZXRoZXIgYnkgY2xpY2tpbmcgb3IgYnkga2V5Ym9hcmQuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgcmVuZGVyZWRUZXh0PzpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IGZvcm1hdHRlcihmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBmb3JtYXR0ZXIodGhpcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlc1RlbXBsYXRlOmJvb2xlYW47XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gV2UgaW5oZXJpdCBTdWlEcm9wZG93bk1lbnVJdGVtIHRvIGF1dG9tYXRpY2FsbHkgZ2FpbiBhbGwga2V5Ym9hcmQgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBkb25lIHZpYSBhZGRpbmcgdGhlIC5pdGVtIGNsYXNzIGJlY2F1c2UgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50KTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhlIGRlZmF1bHQgdGV4dCBhbiBlbXB0eSBsYWJlbCwgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IG9uZS5cbiAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudXNlc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aVNlbGVjdFNlYXJjaF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RTZWFyY2gge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLmF1dG9jb21wbGV0ZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBhdXRvQ29tcGxldGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeVVwZGF0ZWQ6RXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgcHVibGljIG9uUXVlcnlLZXlEb3duOkV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeVVwZGF0ZWQuZW1pdChxdWVyeSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5S2V5RG93bi5lbWl0KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cygpOnZvaWQge1xuICAgICAgICAvLyBTbGlnaHRseSBkZWxheSB0byBzdXBwb3J0IGluIG1lbnUgc2VhcmNoLlxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UsIExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi8uLi9zZWFyY2gvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFV0aWwsIElUZW1wbGF0ZVJlZkNvbnRleHQsIEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VsZWN0TG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlbGVjdC1vcHRpb25cIjtcbmltcG9ydCB7IFN1aVNlbGVjdFNlYXJjaCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uQ29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5PzpzdHJpbmc7XG59XG5cbi8vIFdlIHVzZSBnZW5lcmljIHR5cGUgVCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBvcHRpb25zIHdlIGFyZSB3b3JraW5nIHdpdGgsXG4vLyBhbmQgVSB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgb3B0aW9uIHVzZWQgYXMgdGhlIHZhbHVlLlxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVT47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcm90ZWN0ZWQgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHJlbmRlcmVkIHNlbGVjdCBvcHRpb25zLiAoUmVuZGVyZWQgYnkgdGhlIHVzZXIgdXNpbmcgKm5nRm9yKS5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVNlbGVjdE9wdGlvbiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBfcmVuZGVyZWRPcHRpb25zOlF1ZXJ5TGlzdDxTdWlTZWxlY3RPcHRpb248VD4+O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50cyBvbiB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9yZW5kZXJlZFN1YnNjcmlwdGlvbnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kcm9wZG93blwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZW51LmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1NlYXJjaGFibGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBpc1NlYXJjaEV4dGVybmFsOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgZ2V0IGhhc1NlYXJjaENsYXNzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSAmJiAhdGhpcy5pc1NlYXJjaEV4dGVybmFsO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChTdWlTZWxlY3RTZWFyY2gpXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX21hbnVhbFNlYXJjaD86U3VpU2VsZWN0U2VhcmNoO1xuXG4gICAgcHVibGljIGdldCBzZWFyY2hJbnB1dCgpOlN1aVNlbGVjdFNlYXJjaCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTZWFyY2ggfHwgdGhpcy5faW50ZXJuYWxTZWFyY2g7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiaW5kZXgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwpIHtcbiAgICAgICAgICAgIC8vIElmIG9wZW4gJiBpbiBtZW51IHNlYXJjaCwgcmVtb3ZlIGZyb20gdGFiaW5kZXggKGFzIGlucHV0IGFsd2F5cyBhdXRvZm9jdXNzZXMpLlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1NlYXJjaENsYXNzKSB7XG4gICAgICAgICAgICAvLyBJZiBzZWFyY2ggaW5wdXQgZW5hYmxlZCwgdGFiIGdvZXMgdG8gaW5wdXQuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChsb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBEZXByZWNhdGVkXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHF1ZXJ5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVVwZGF0ZUhvb2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSByZW5kZXJlZCB0ZXh0IGFzIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWxGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbGFiZWxGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGFiZWxHZXR0ZXIoKToob2JqOlQpID0+IHN0cmluZyB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbGFiZWwgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iaiwgdGhpcy5sYWJlbEZpZWxkKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlRmllbGQ6c3RyaW5nO1xuXG4gICAgcHVibGljIGdldCB2YWx1ZUdldHRlcigpOihvYmo6VCkgPT4gVSB7XG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSBhbiBpdGVtLlxuICAgICAgICByZXR1cm4gKG9iajpUKSA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgVT4ob2JqLCB0aGlzLnZhbHVlRmllbGQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG9wdGlvblRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIHByaXZhdGUgX29wdGlvbkZvcm1hdHRlcj86KG86VCwgcT86c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbmZpZ3VyZWRGb3JtYXR0ZXIoKToob3B0aW9uOlQpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25Gb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuX29wdGlvbkZvcm1hdHRlciEobywgdGhpcy5pc1NlYXJjaGFibGUgPyB0aGlzLnF1ZXJ5IDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5sYWJlbEdldHRlcihvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMuc2VhcmNoU2VydmljZS5oaWdobGlnaHRNYXRjaGVzKHRoaXMubGFiZWxHZXR0ZXIobyksIHRoaXMucXVlcnkgfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uRm9ybWF0dGVyKGZvcm1hdHRlcjooKG9wdGlvbjpULCBxdWVyeT86c3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbkZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2NhbGVWYWx1ZXM6SVNlbGVjdExvY2FsZVZhbHVlcztcbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SVNlbGVjdExvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklTZWxlY3RMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcInNlbGVjdFwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByb3RlY3RlZCBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBkbyB3YW50IGFuIGVtcHR5IHF1ZXJ5IHRvIHJldHVybiBhbGwgcmVzdWx0cy5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gbmV3IFNlYXJjaFNlcnZpY2U8VCwgVT4odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5pY29uID0gXCJkcm9wZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgICAgICAvLyBXZSBtYW51YWxseSBzcGVjaWZ5IHRoZSBtZW51IGl0ZW1zIHRvIHRoZSBtZW51IGJlY2F1c2UgdGhlIEBDb250ZW50Q2hpbGRyZW4gZG9lc24ndCBwaWNrIHVwIG91ciBkeW5hbWljYWxseSByZW5kZXJlZCBpdGVtcy5cbiAgICAgICAgdGhpcy5fbWVudS5pdGVtcyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucztcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5fbWFudWFsU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeVVwZGF0ZWQuc3Vic2NyaWJlKChxOnN0cmluZykgPT4gdGhpcy5xdWVyeSA9IHEpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5S2V5RG93bi5zdWJzY3JpYmUoKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vblF1ZXJ5SW5wdXRLZXlkb3duKGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG11c3QgY2FsbCB0aGlzIGltbWVkaWF0ZWx5IGFzIGNoYW5nZXMgZG9lc24ndCBmaXJlIHdoZW4geW91IHN1YnNjcmliZS5cbiAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuc2VsZWN0O1xuICAgIH1cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIC8vIEhvb2sgaXMgaGVyZSBzaW5jZSBUeXBlc2NyaXB0IGRvZXNuJ3QgeWV0IHN1cHBvcnQgb3ZlcnJpZGluZyBnZXR0ZXJzICYgc2V0dGVycyB3aGlsZSBzdGlsbCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzLlxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBxdWVyeSB0aGVuIG9wZW4gdGhlIGRyb3Bkb3duLCBhcyBhZnRlciBrZXlib2FyZCBpbnB1dCBpdCBzaG91bGQgYWx3YXlzIGJlIG9wZW4uXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShxdWVyeSwgKCkgPT5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0UXVlcnkoZGVsYXllZDpib29sZWFuID0gdHJ1ZSk6dm9pZCB7XG4gICAgICAgIC8vIFRoZSBzZWFyY2ggZGVsYXkgaXMgc2V0IHRvIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIHRvIGVuc3VyZSByZXN1bHRzXG4gICAgICAgIC8vIGFyZW4ndCByZW5kZXJlZCBhcyB0aGUgc2VsZWN0IGNsb3NlcyBhcyB0aGF0IGNhdXNlcyBhIHN1ZGRlbiBmbGFzaC5cbiAgICAgICAgaWYgKGRlbGF5ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IHRoaXMuX21lbnUubWVudVRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeURlbGF5ZWQoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBhbGwgcHJldmlvdXMgc3Vic2NyaXB0aW9ucyB0byBhdm9pZCBtZW1vcnkgbGVha3Mgb24gbGFyZ2Ugc2VsZWN0cy5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocnMgPT4gcnMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHtcbiAgICAgICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IGluaXRpYWxpc2F0aW9uIHRvIGF2b2lkIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9ycy4gVE9ETyAtIGxvb2sgaW50byBhdm9pZGluZyB0aGlzIVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMucHVzaChyby5vblNlbGVjdGVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNlbGVjdE9wdGlvbihyby52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgbm8gb3B0aW9ucyBoYXZlIGJlZW4gcHJvdmlkZWQsIGF1dG9nZW5lcmF0ZSB0aGVtIGZyb20gdGhlIHJlbmRlcmVkIG9uZXMuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnMubWFwKHJvID0+IHJvLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIG9wdGlvbi51c2VzVGVtcGxhdGUgPSAhIXRoaXMub3B0aW9uVGVtcGxhdGU7XG4gICAgICAgIG9wdGlvbi5mb3JtYXR0ZXIgPSB0aGlzLmNvbmZpZ3VyZWRGb3JtYXR0ZXI7XG5cbiAgICAgICAgaWYgKG9wdGlvbi51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKG9wdGlvbi50ZW1wbGF0ZVNpYmxpbmcsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24uY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZDtcblxuICAgIHByb3RlY3RlZCBmaW5kT3B0aW9uKG9wdGlvbnM6VFtdLCB2YWx1ZTpVKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gVHJpZXMgdG8gZmluZCBhbiBvcHRpb24gaW4gb3B0aW9ucyBhcnJheVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMudmFsdWVHZXR0ZXIobykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNhcmV0Q2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRyb3Bkb3duIGlzIHNlYXJjaGFibGUsIGNsaWNraW5nIHNob3VsZCBrZWVwIGl0IG9wZW4sIG90aGVyd2lzZSB3ZSB0b2dnbGUgdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5pc1NlYXJjaGFibGUgPyB0cnVlIDogIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IGZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgd2hlbmV2ZXIgY2xpY2tpbmcgb24gdGhlIHNlbGVjdC5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5UHJlc3MoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkRvd24pIHtcblxuICAgICAgICAgICAgLy8gRW5hYmxlcyBzdXBwb3J0IGZvciBmb2N1c3NpbmcgYW5kIG9wZW5pbmcgd2l0aCB0aGUga2V5Ym9hcmQgYWxvbmUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWFyY2hhYmxlICYmIHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEZvY3Vzc2VzIHRoZSBzZWFyY2ggaW5wdXQgb25seSB3aGVuIHNlYXJjaGFibGUuXG4gICAgICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIHRoYXQgZHJhd3MgdGhlIHByb3ZpZGVkIHRlbXBsYXRlIGJlc2lkZSB0aGUgcHJvdmlkZWQgVmlld0NvbnRhaW5lclJlZi5cbiAgICBwcm90ZWN0ZWQgZHJhd1RlbXBsYXRlKHNpYmxpbmdSZWY6Vmlld0NvbnRhaW5lclJlZiwgdmFsdWU6VCk6dm9pZCB7XG4gICAgICAgIHNpYmxpbmdSZWYuY2xlYXIoKTtcbiAgICAgICAgLy8gVXNlIG9mIGAkaW1wbGljaXRgIG1lYW5zIHVzZSBvZiA8bmctdGVtcGxhdGUgbGV0LW9wdGlvbj4gc3ludGF4IGlzIHN1cHBvcnRlZC5cbiAgICAgICAgc2libGluZ1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5vcHRpb25UZW1wbGF0ZSwge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB2YWx1ZSxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJT3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEzNDQ5LlxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdC1sYWJlbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUpXCI+PC9zcGFuPlxuPGkgY2xhc3M9XCJkZWxldGUgaWNvblwiIChjbGljayk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9pPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdExhYmVsPFQ+IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIC8vIERvaW5nIGl0IG9uIHRoZSBob3N0IGVuYWJsZXMgdXNlIGluIG1lbnVzIGV0Yy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxhYmVsXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5PzpzdHJpbmc7XG5cbiAgICBAT3V0cHV0KFwiZGVzZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvbkRlc2VsZWN0ZWQ6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElPcHRpb25Db250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSwgXCJpbmxpbmUtYmxvY2tcIik7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMub25EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgS2V5Q29kZSwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzXCI+XG48IS0tIE11bHRpLXNlbGVjdCBsYWJlbHMgLS0+XG4gICAgPHN1aS1tdWx0aS1zZWxlY3QtbGFiZWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkT3B0aW9ucztcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2VsZWN0ZWQpPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvc3VpLW11bHRpLXNlbGVjdC1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIEhlbHBlciB0ZXh0IC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIlxuICAgICBbY2xhc3MuZGVmYXVsdF09XCJoYXNMYWJlbHNcIlxuICAgICBbY2xhc3MuZmlsdGVyZWRdPVwiISFxdWVyeSAmJiAhaXNTZWFyY2hFeHRlcm5hbFwiPlxuICAgIFxuICAgIDwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzOyBlbHNlIHNlbGVjdGVkQmxvY2tcIj57eyBwbGFjZWhvbGRlciB9fTwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDwhLS0gU3VtbWFyeSBzaG93biB3aGVuIGxhYmVscyBhcmUgaGlkZGVuIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz4ge3sgc2VsZWN0ZWRNZXNzYWdlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJ0cnVlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09IDAgXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IG1heFNlbGVjdGVkTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IGlucHV0LnNlYXJjaCB7XG4gICAgd2lkdGg6IDEyZW0gIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVW10+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zOlRbXTtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9ucz86VVtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uc0NoYW5nZTpFdmVudEVtaXR0ZXI8VVtdPjtcblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWRSZWFjaGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGlvbnMsIHRoZW4gZW1wdHkgdGhlIHJlc3VsdHMgY29tcGxldGVseS5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6VFtdID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBzZWFyY2ggcmVzdWx0cyBcXCBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHIgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmluZChvID0+IHIgPT09IG8pID09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzTGFiZWxzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTGFiZWxzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNMYWJlbHMoaGFzTGFiZWxzOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTGFiZWxzID0gaGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFNlbGVjdGVkOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRSZWFjaGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWF4aW11bSB0aGVuIHdlIGNhbiBpbW1lZGlhdGVseSByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5tYXhTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkubWF4U2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcIm1heFwiLCB0aGlzLm1heFNlbGVjdGVkLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tdWx0aXBsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VVtdPigpO1xuXG4gICAgICAgIHRoaXMuaGFzTGFiZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb25zIHN0aWxsIGV4aXN0LlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fd3JpdHRlbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5fd3JpdHRlbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5oYXNMYWJlbHMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeShmYWxzZSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWVzOlVbXSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZXMgdG8gb3B0aW9ucy5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IGl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBvcHRpb25zIHRvIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbnMgXFwge29wdGlvbn0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKHNvID0+IHNvICE9PSBvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuQmFja3NwYWNlICYmIHRoaXMucXVlcnkgPT09IFwiXCIgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHJpZ2h0bW9zdCBvcHRpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGJhY2tzcGFjZSBpbiB0aGUgc2VhcmNoIGlucHV0LlxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbih0aGlzLnNlbGVjdGVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbnNDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VVtdLCBTdWlNdWx0aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpTXVsdGlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIiBjbGFzcz1cImRlZmF1bHQgdGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeVwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XG48IS0tIFNlbGVjdGVkIGl0ZW0gLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiIFtjbGFzcy5maWx0ZXJlZF09XCJxdWVyeSB8fCBzZWxlY3RlZE9wdGlvbiA9PSB1bmRlZmluZWRcIj5cbiAgICA8c3BhbiAjb3B0aW9uVGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb25UZW1wbGF0ZSAmJiBzZWxlY3RlZE9wdGlvbiAhPSB1bmRlZmluZWRcIiBbaW5uZXJIVE1MXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXIoc2VsZWN0ZWRPcHRpb24pXCI+PC9zcGFuPlxuPC9kaXY+XG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cImlzU2VhcmNoYWJsZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgKm5nSWY9XCJpc1NlYXJjaGFibGUgJiYgYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAge3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFU+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb24/OlQ7XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZSB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9uPzpVO1xuXG4gICAgQFZpZXdDaGlsZChcIm9wdGlvblRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwcml2YXRlIF9vcHRpb25UZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMuc2luZ2xlLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZUdldHRlcih0aGlzLnNlbGVjdGVkT3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB0aGlzLl93cml0dGVuT3B0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICAvLyBXaGVuIHRoZSBxdWVyeSBpcyB1cGRhdGVkLCB3ZSBqdXN0IGFiYW5kb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBDaG9vc2UgYW5kIGVtaXQgdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZS5lbWl0KHRoaXMudmFsdWVHZXR0ZXIob3B0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoKTtcblxuICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlIHRvIGFuIG9wdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdTZWxlY3RlZE9wdGlvbigpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIG5ld2x5IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9uVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKHRoaXMuX29wdGlvblRlbXBsYXRlU2libGluZywgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbkNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFN1aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3QsIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcbmltcG9ydCB7IFN1aU11bHRpU2VsZWN0LCBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpLXNlbGVjdFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3RMYWJlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VsZWN0LFxuICAgICAgICBTdWlTZWxlY3RPcHRpb24sXG4gICAgICAgIFN1aVNlbGVjdFNlYXJjaCxcbiAgICAgICAgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpTXVsdGlTZWxlY3QsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0TGFiZWwsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJUcmFuc2l0aW9uID0gXCJvdmVybGF5XCIgfCBcInB1c2hcIiB8IFwic2NhbGUgZG93blwiIHwgXCJ1bmNvdmVyXCIgfCBcInNsaWRlIGFsb25nXCIgfCBcInNsaWRlIG91dFwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclRyYW5zaXRpb24gPSB7XG4gICAgT3ZlcmxheTogXCJvdmVybGF5XCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgUHVzaDogXCJwdXNoXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2NhbGVEb3duOiBcInNjYWxlIGRvd25cIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBVbmNvdmVyOiBcInVuY292ZXJcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZUFsb25nOiBcInNsaWRlIGFsb25nXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVPdXQ6IFwic2xpZGUgb3V0XCIgYXMgU2lkZWJhclRyYW5zaXRpb25cbn07XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJEaXJlY3Rpb24gPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckRpcmVjdGlvbiA9IHtcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBUb3A6IFwidG9wXCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgU2lkZWJhckRpcmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaXNWaXNpYmxlOmJvb2xlYW47XG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgcHVibGljIHdhc0p1c3RPcGVuZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbjtcblxuICAgIHByaXZhdGUgX3dpZHRoOm51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgd2lkdGgod2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodChoZWlnaHQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1Zpc2libGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIHB1YmxpYyB3aWR0aENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgcHVibGljIGhlaWdodENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc1Zpc2libGU6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLndpZHRoID0gMjYwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZS5lbWl0KGlzVmlzaWJsZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UsIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlVmlzaWJsZVN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKCF0aGlzLmlzVmlzaWJsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uLCBTaWRlYmFyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhciB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNpZGViYXJcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6U2lkZWJhclRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIGZhbHNlKSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOlNpZGViYXJEaXJlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoaXNWaXNpYmxlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYW5pbWF0aW5nXCIpXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTaWRlYmFyU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBzZXQgdGhlIGRlZmF1bHQgaGVyZSBhcyB3ZWxsIHRvIGZvcmNlIHRoZSBjbGFzc2VzIHRvIHVwZGF0ZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGltZW5zaW9ucygpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uud2lkdGggPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc2VydmljZS5oZWlnaHQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q2xhc3MoY2xhc3NOYW1lOnN0cmluZywgaXNBZGQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZVZpc2libGVTdGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSwgU2lkZWJhclRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLXNpYmxpbmdcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJTaWJsaW5nIHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6U2lkZWJhclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpTaWRlYmFyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtKCkpO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRXaGVuVmlzaWJsZTpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVkXCIpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmIHRoaXMuaXNEaW1tZWRXaGVuVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIik7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5PdmVybGF5ICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiAhPT0gU2lkZWJhclRyYW5zaXRpb24uU2NhbGVEb3duKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuc2VydmljZS53aWR0aH1weCwgJHt0aGlzLnNlcnZpY2UuaGVpZ2h0fXB4LCAwKWA7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmICF0aGlzLnNlcnZpY2Uud2FzSnVzdE9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItY29udGFpbmVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoYWJsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXIpXG4gICAgcHVibGljIHNpZGViYXI6U3VpU2lkZWJhcjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhclNpYmxpbmcpXG4gICAgcHVibGljIHNpYmxpbmc6U3VpU2lkZWJhclNpYmxpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaWRlYmFyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcnZpY2UgPSB0aGlzLnNpZGViYXIuc2VydmljZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2libGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhci1zaWJsaW5nPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpYmxpbmcuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXItc2libGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJNb2R1bGUge31cbiIsImltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBoZWFkZXI6U3VpVGFiSGVhZGVyO1xuICAgIHB1YmxpYyBjb250ZW50OlN1aVRhYkNvbnRlbnQ7XG4gICAgcHVibGljIGluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGhlYWRlcjpTdWlUYWJIZWFkZXIsIGNvbnRlbnQ6U3VpVGFiQ29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gaGVhZGVyLmlkO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBoZWFkZXIgYW5kIGNvbnRlbnQgaXNBY3RpdmUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGluIHN5bmMuXG4gICAgICAgIHRoaXMuaGVhZGVyLmlzQWN0aXZlQ2hhbmdlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29udGVudC5pc0FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzQWN0aXZlIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICAvLyBVc2UgYHNldEFjdGl2ZVN0YXRlYCBzbyBhcyBub3QgdG8gZmlyZSAnZXh0ZXJuYWwgY2hhbmdlcycgZXZlbnQuXG4gICAgICAgIHRoaXMuaGVhZGVyLnNldEFjdGl2ZVN0YXRlKGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNEaXNhYmxlZCBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNEaXNhYmxlZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgSW5wdXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJIZWFkZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFiSGVhZGVyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInN1aVRhYkhlYWRlclwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICAvLyBJbnRlcm5hbGx5IGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGhlYWRlciBpcyBhY3RpdmUuXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIC8vIEVuYWJsZXMgdXNlIG9mIFsoaXNBY3RpdmUpXSBzbyBzdGF0ZSBjYW4gYmUgc2V0IHVzaW5nIGJvb2xlYW5zLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0FjdGl2ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyBvbmx5IHdoZW4gYGlzQWN0aXZlYCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGlucHV0LlxuICAgIHB1YmxpYyBpc0FjdGl2ZUV4dGVybmFsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGRlYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGRlYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJkZWFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uRGVhY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBPbmx5IHVzZWQgYnkgQElucHV0KCksIHJ1bnMgd2hlbmV2ZXIgdXNlciBpbnB1dCBjaGFuZ2VzIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIFJ1biBpbiB0aW1lb3V0IGJlY2F1c2UgYGlzRGlzYWJsZWRgIGNhbiBwcm9oaWJpdCB1c2VyIGZyb20gY2hhbmdpbmcgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gc28gdXBkYXRlIGlzIGRlbGF5ZWQgdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3IuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhbGxvdyBjaGFuZ2UgaWYgdGFiIGhlYWRlciBpcyBub3QgZGlzYWJsZWQuXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICF0aGlzLmlzRGlzYWJsZWQgPyBhY3RpdmUgOiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU3RhdGUoaXNBY3RpdmUpO1xuXG4gICAgICAgICAgICAvLyBGaXJlICdleHRlcm5hbCBjaGFuZ2UnIGV2ZW50IGFzIHVzZXIgaW5wdXQgaGFzIG9jY3VyZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UuZW1pdChpc0FjdGl2ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKGRpc2FibGVkOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdmFsdWUgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRvIGN1cnJlbnQgb25lLlxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCAhPT0gZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICAgICAgLy8gSWYgbm93IGRpc2FibGVkLCB0aGVuIHRhYiBoZWFkZXIgbXVzdCBiZSBkZWFjdGl2YXRlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbGx5IHVwZGF0ZSBhY3RpdmUgc3RhdGUuXG4gICAgcHVibGljIHNldEFjdGl2ZVN0YXRlKGFjdGl2ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgKGNhc3QpIGFjdGl2ZSB2YWx1ZSBoYXMgY2hhbmdlZDpcbiAgICAgICAgaWYgKCEhdGhpcy5faXNBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGFjdGl2ZTtcblxuICAgICAgICAgICAgLy8gRmlyZSB0aGUgYXBwcm9wcmlhdGUgYWN0aXZhdGlvbiBldmVudC5cbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdhcmRsZXNzLCBlbWl0IGEgY2hhbmdlIHRvIGBpc0FjdGl2ZWAsIHNvIFsoaXNBY3RpdmUpXSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UuZW1pdChhY3RpdmUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgdGFiIHdoZW4gY2xpY2tlZCwgc28gbG9uZyBhcyBpdCBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiQ29udGVudF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJDb250ZW50IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50YWJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiQ29udGVudFwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIi4uL2NsYXNzZXMvdGFiXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS10YWJzZXRcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYnNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiSGVhZGVyKVxuICAgIHByaXZhdGUgX3RhYkhlYWRlcnM6UXVlcnlMaXN0PFN1aVRhYkhlYWRlcj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkNvbnRlbnQpXG4gICAgcHJpdmF0ZSBfdGFiQ29udGVudHM6UXVlcnlMaXN0PFN1aVRhYkNvbnRlbnQ+O1xuXG4gICAgLy8gTGlzdCBvZiBhbGwgdGFicyBpbiB0aGUgdGFic2V0LlxuICAgIHB1YmxpYyB0YWJzOlRhYltdO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgIHByaXZhdGUgX2FjdGl2ZVRhYjpUYWI7XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZVRhYigpOlRhYiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWI7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBzZXR0aW5nIGEgdGFiIGFzIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiwgaXQgYXV0b21hdGljYWxseSBnYWluc1xuICAgIC8vIGBpc0FjdGl2ZWAgc3RhdHVzIChzYXZlcyBsaXR0ZXJpbmcgYGlzQWN0aXZlID0gdHJ1ZWAgZXZlcnl3aGVyZSkuXG4gICAgcHVibGljIHNldCBhY3RpdmVUYWIodGFiOlRhYikge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIG51bWJlciBvZiB0aW1lcyBgaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZGAgaXMgY2FsbGVkLlxuICAgIHByaXZhdGUgX2JhcnJpZXJDb3VudDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gW107XG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBGaXJlIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCB3aGVuIHRoZSBxdWVyeSBsaXN0cyBjaGFuZ2UuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCkpO1xuICAgICAgICB0aGlzLl90YWJDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGx5IGxvYWQgdGhlIHRhYnMuXG4gICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBlaXRoZXIgdGhlIHRhYiBoZWFkZXJzIG9yIHRhYiBjb250ZW50cyBxdWVyeSBsaXN0cyB1cGRhdGUuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIGFyZSB1c2luZyBhICdjb3VudGluZyBiYXJyaWVyIG9mIG4gPSAyJywgaS5lLiB0aGUgY29kZSB3aXRoaW4gb25seSBydW5zIGFmdGVyIHRoZSBtZXRob2QgaXMgY2FsbGVkIHR3aWNlLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgYm90aCB0aGUgaGVhZGVycyBhbmQgY29udGVudHMgcXVlcnkgbGlzdHMgY2FuIHVwZGF0ZSBiZWZvcmUgd2UgcnVuIGNvZGUgdGhhdCBtYXRjaGVzIHRoZSB0d28gdXAuXG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCsrO1xuXG4gICAgICAgIGlmICh0aGlzLl9iYXJyaWVyQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBiYXJyaWVyIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9iYXJyaWVyQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLmxvYWRUYWJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25uZWN0cyB0YWIgaGVhZGVycyB0byB0YWIgY29udGVudHMsIGFuZCBjcmVhdGVzIGEgdGFiIGluc3RhbmNlIGZvciBlYWNoIHBhaXJpbmcuXG4gICAgcHJpdmF0ZSBsb2FkVGFicygpOnZvaWQge1xuICAgICAgICAvLyBSZW1vdmUgYW55IHRhYnMgdGhhdCBubyBsb25nZXIgaGF2ZSBhbiBhc3NvY2lhdGVkIGhlYWRlci5cbiAgICAgICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+ICEhdGhpcy5fdGFiSGVhZGVycy5maW5kKHRIID0+IHRIID09PSB0LmhlYWRlcikpO1xuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIGxvYWRlZCBoZWFkZXJzIHdpdGggYXR0YWNoZWQgdGFiIGluc3RhbmNlcy5cbiAgICAgICAgICAgIC5maWx0ZXIodEggPT4gIXRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHRIID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fdGFiQ29udGVudHMuZmluZCh0QyA9PiB0Qy5pZCA9PT0gdEguaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGlmIGFuIGFzc29jaWF0ZWQgdGFiIGNvbnRlbnQgY2Fubm90IGJlIGZvdW5kIGZvciB0aGUgZ2l2ZW4gaGVhZGVyLlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFtzdWlUYWJIZWFkZXJdIG11c3QgaGF2ZSBhIHJlbGF0ZWQgW3N1aVRhYkNvbnRlbnRdLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFiIGluc3RhbmNlIGZvciB0aGlzIGhlYWRlciAmIGNvbnRlbnQgY29tYm8uXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYih0SCwgY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gYW55IGV4dGVybmFsIGNoYW5nZXMgaW4gdGhlIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUuIEV4dGVybmFsIGNoYW5nZXMgYXJlIHRyaWdnZXJlZCBieSB1c2VyIGlucHV0LlxuICAgICAgICAgICAgICAgIHRhYi5oZWFkZXIuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBpbnN0YW5jZSB0byB0aGUgbGlzdCBvZiB0YWJzLlxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBBc3NpZ24gZWFjaCB0YWIgYW4gaW5kZXggKHdoaWNoIGRlbm90ZXMgdGhlIG9yZGVyIHRoZXkgcGh5c2ljYWxseSBhcHBlYXIgaW4pLlxuICAgICAgICB0aGlzLl90YWJIZWFkZXJzXG4gICAgICAgICAgICAuZm9yRWFjaCgodEgsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnMuZmluZCh0ID0+IHQuaGVhZGVyID09PSB0SCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgICAgICB0YWIuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIHRhYnMgYnkgdGhlaXIgaW5kZXguXG4gICAgICAgIHRoaXMudGFicy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlVGFiKSB7IC8vIENoZWNrIGlmIHRoZXJlIGFyZSBubyBjdXJyZW50IGV4aXN0aW5nIGFjdGl2ZSB0YWJzLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgYWN0aXZhdGUgdGhlIGZpcnN0IGF2YWlsYWJsZSB0YWIuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlyc3RUYWIoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50YWJzLmZpbmQodCA9PiB0ID09PSB0aGlzLmFjdGl2ZVRhYikpIHsgLy8gTyd3aXNlIGNoZWNrIGlmIGN1cnJlbnQgYWN0aXZlIHRhYiBoYXMgYmVlbiBkZWxldGVkLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgZmluZCB0aGUgY2xvc2VzdC5cbiAgICAgICAgICAgIC8vIFVzZSBgc2V0VGltZW91dGAgYXMgdGhpcyBjYXVzZXMgYSAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvciBvJ3dpc2UuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRoaXMuYWN0aXZlVGFiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRXJyb3IgaWYgdGhlcmUgYXJlbid0IGFueSB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGhhdmUgbm8gdGFicyFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUgaXMgZXh0ZXJuYWxseSBjaGFuZ2VkLlxuICAgIHByaXZhdGUgb25IZWFkZXJBY3RpdmVDaGFuZ2VkKHRhYjpUYWIpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGhhcyBiZWNvbWUgYWN0aXZhdGVkLCBidXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAodGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiICE9PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIG9mIHRoZSB0YWJzLlxuICAgICAgICAgICAgdGhpcy50YWJzLmZpbHRlcih0ID0+IHQgIT09IHRhYikuZm9yRWFjaCh0ID0+IHQuaXNBY3RpdmUgPSBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgdG8gdGhpcyBvbmUuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBkZWFjdGl2YXRlZCwgYnV0IHdhcyBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAoIXRhYi5pc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGFiKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCB0YWIgdG8gaXQuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ2xvc2VzdFRhYih0YWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBpbiB0aGUgc2V0LlxuICAgIHB1YmxpYyBhY3RpdmF0ZUZpcnN0VGFiKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy50YWJzWzBdO1xuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlcyB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGEgZ2l2ZW4gb25lLlxuICAgIHB1YmxpYyBhY3RpdmF0ZUNsb3Nlc3RUYWIodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIGxldCBuZXh0QXZhaWxhYmxlOlRhYiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiJ3MgaW5kZXggaXMgaGlnaGVyIHRoYW4gYWxsIGF2YWlsYWJsZSB0YWJzLFxuICAgICAgICBpZiAodGFiLmluZGV4ID49IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBsYXN0IHRhYi5cbiAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGhpcy50YWJzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhhdCBkaWRuJ3Qgd29yaywgdHJ5IHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgIGlmICghbmV4dEF2YWlsYWJsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRhYikpIHsgLy8gV2hlbiB0aGUgZXhpdGVkIHRhYiBubyBsb25nZXIgZXhpc3RzLFxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBhIHRhYiBhdCB0aGUgc2FtZSBpbmRleC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW3RhYi5pbmRleF07XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBPciBpZiB0aGUgZXhpdGVkIHRhYiBzdGlsbCBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gR28gdG8gdGhlIHRhYiBpbW1lZGlhdGVseSB0byB0aGUgbGVmdC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW01hdGgubWF4KHRhYi5pbmRleCAtIDEsIDApXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSBjaG9zZW4gdGFiIGlzIGRpc2FibGVkLFxuICAgICAgICBpZiAobmV4dEF2YWlsYWJsZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGl0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKG5leHRBdmFpbGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBuZXh0QXZhaWxhYmxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRhYnNldCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFic2V0XCI7XG5pbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vLyBDb2xsZWN0aW9uc1xuaW1wb3J0IHtcbiAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgIFN1aVBhZ2luYXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vY29sbGVjdGlvbnMvaW50ZXJuYWxcIjtcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHtcbiAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vbW9kdWxlcy9pbnRlcm5hbFwiO1xuXG4vLyBCZWhhdmlvcnNcbmltcG9ydCB7XG4gICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2JlaGF2aW9ycy9pbnRlcm5hbFwiO1xuXG4vLyBNaXNjXG5pbXBvcnQge1xuICAgIFN1aVV0aWxpdHlNb2R1bGVcbn0gZnJvbSBcIi4vbWlzYy9pbnRlcm5hbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy8gQ29sbGVjdGlvbnNcbiAgICAgICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICAgICAgU3VpUGFnaW5hdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNb2R1bGVzXG4gICAgICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgICAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgICAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICAgICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgICAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgICAgICBTdWlUYWJzTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIEJlaGF2aW9yc1xuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTWlzY1xuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2R1bGUge31cbiJdLCJuYW1lcyI6WyIoLyoqIEB0eXBlIHs/fSAqLyAoJGV4dGVuZCkpLmRlZmF1bHQiLCJmb3JtYXQiLCJp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