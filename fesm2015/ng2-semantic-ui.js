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
            let recursed = /** @type {?} */ ((object));
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = (/** @type {?} */ ((recursed)))[p[i]];
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
        this._popper = /** @type {?} */ (new Popper(this.anchor.nativeElement, this.subject.nativeElement, {
            placement: placementToPopper(this._placement),
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
    /**
     * @return {?}
     */
    calculateOffsets() {
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        const fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
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
    /**
     * @return {?}
     */
    get direction() {
        // We need to set direction attribute before popper init to allow correct positioning
        return this.config.placement.split(" ").shift();
    }
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
            classes["inverted"] = true;
        }
        if (this.config.isBasic) {
            classes["basic"] = true;
        }
        if (this.config.isFlowing) {
            classes["flowing"] = true;
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
                /** @type {?} */
                const autoFocus = /** @type {?} */ (this.elementRef.nativeElement.querySelector("[autofocus]"));
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
                     [placement]="positioningService ? positioningService.actualPlacement : config.placement"
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
        if (this._service && this._service.isOpen && !this._service.isNested) {
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
        this.isCentered = true;
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
        setTimeout(() => this.updateScroll());
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
        this.isCentered = config.isCentered;
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
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            /** @type {?} */
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            const margin = fontSize * 2;
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
        if (modal.modalParent !== null) {
            this._componentFactory.moveToElement(componentRef, modal.modalParent);
        }
        else {
            this._componentFactory.attachToApplication(componentRef);
        }
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
/** @nocollapse */
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
/** @nocollapse */
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

export { SuiModule, SuiLocalizationModule, SuiLocalizationService, SuiMessageModule, SuiPaginationModule, SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, DatepickerMode, SuiDimmerModule, SuiDropdownModule, DropdownAutoCloseType, SuiModalModule, SuiModalService, Modal as SuiModal, ModalControls, ActiveModal as SuiActiveModal, ModalConfig, TemplateModalConfig, ComponentModalConfig, ModalTemplate, ModalSize, SuiPopupModule, SuiPopupConfig, PopupTrigger, PositioningPlacement as PopupPlacement, SuiProgressModule, SuiRatingModule, SuiSearchModule, SearchService, SuiSelectModule, SuiSidebarModule, SidebarDirection, SidebarTransition, SuiTabsModule, SuiTransitionModule, SuiTransition, Transition, TransitionDirection, TransitionController, SuiUtilityModule, SuiLocalizationModule as ɵb, SuiLocalizationService as ɵa, SuiMessage as ɵc, SuiMessageModule as ɵd, SuiPagination as ɵe, SuiPaginationModule as ɵf, CustomValidator as ɵbs, customValidatorFactory as ɵbt, CustomValueAccessor as ɵbu, customValueAccessorFactory as ɵbv, DatePrecision as ɵbw, SuiComponentFactory as ɵbx, SuiUtilityModule as ɵby, SuiAccordionModule as ɵi, SuiAccordion as ɵh, SuiAccordionPanel as ɵg, SuiCheckboxModule as ɵo, SuiCheckbox as ɵj, SuiCheckboxValueAccessor as ɵk, SuiRadio as ɵl, SuiRadioValueAccessor as ɵm, SuiRadioManager as ɵn, SuiCollapseModule as ɵq, SuiCollapse as ɵp, SuiCalendarViewTitle as ɵr, SuiDatepicker as ɵs, SuiDatepickerModule as ɵbf, SuiCalendarItem as ɵt, SuiDatepickerDirective as ɵu, SuiDatepickerDirectiveValidator as ɵw, SuiDatepickerDirectiveValueAccessor as ɵv, SuiDatepickerInputDirective as ɵx, CalendarRangeService as ɵy, CalendarView as ɵz, SuiCalendarDateView as ɵba, SuiCalendarHourView as ɵbb, SuiCalendarMinuteView as ɵbc, SuiCalendarMonthView as ɵbd, SuiCalendarYearView as ɵbe, SuiDimmer as ɵbg, SuiDimmerModule as ɵbh, SuiDropdown as ɵbk, SuiDropdownMenu as ɵbj, SuiDropdownMenuItem as ɵbi, SuiDropdownModule as ɵbl, ModalConfig as ɵbm, ModalControls as ɵbn, ModalTemplate as ɵbo, SuiModalDimmer as ɵdj, SuiModal as ɵbp, SuiModalModule as ɵbr, SuiModalService as ɵbq, SuiPopupComponentController as ɵbz, PopupConfig as ɵca, SuiPopupController as ɵcb, SuiPopupTemplateController as ɵcc, SuiPopup as ɵce, SuiPopupArrow as ɵcd, SuiPopupDirective as ɵcf, SuiPopupModule as ɵch, SuiPopupConfig as ɵcg, SuiProgress as ɵci, SuiProgressModule as ɵcj, SuiRating as ɵck, SuiRatingValueAccessor as ɵcl, SuiRatingModule as ɵcm, SuiSearch as ɵco, SuiSearchResult as ɵcn, SuiSearchModule as ɵcp, SuiSelectBase as ɵcq, SuiMultiSelect as ɵcs, SuiMultiSelectValueAccessor as ɵct, SuiMultiSelectLabel as ɵcr, SuiSelect as ɵcv, SuiSelectValueAccessor as ɵcw, SuiSelectOption as ɵcu, SuiSelectSearch as ɵcx, SuiSelectModule as ɵcy, SuiSidebar as ɵdb, SuiSidebarContainer as ɵcz, SuiSidebarSibling as ɵda, SuiSidebarModule as ɵdc, SuiTabset as ɵdd, SuiTabContent as ɵde, SuiTabHeader as ɵdf, SuiTabsModule as ɵdg, SuiTransition as ɵdh, SuiTransitionModule as ɵdi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3JhdGluZy9jb21wb25lbnRzL3JhdGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NsYXNzZXMvc2VsZWN0LWJhc2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL211bHRpLXNlbGVjdC1sYWJlbC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jbGFzc2VzL3RhYi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jb21wb25lbnRzL3RhYnNldC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy90YWIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvc3VpLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWx1ZXNcIjtcblxuY29uc3QgZW5HQjpJTG9jYWxlVmFsdWVzID0ge1xuICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXM6IFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbXG4gICAgICAgICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzTmFycm93OiBbXG4gICAgICAgICAgICBcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5OiBbXG4gICAgICAgICAgICBcImEubS5cIiwgXCJwLm0uXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheVVwcGVyY2FzZTogW1xuICAgICAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheUxvd2VyY2FzZTogW1xuICAgICAgICAgICAgXCJhbVwiLCBcInBtXCJcbiAgICAgICAgXSxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgdGltZTogXCJoOm1tIEFcIixcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIkQgTU1NTSBZWVlZIGg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgICAgbW9udGg6IFwiTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9LFxuICAgICAgICBmaXJzdERheU9mV2VlazogMVxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICBub1Jlc3VsdHM6IHtcbiAgICAgICAgICAgIGhlYWRlcjogXCJObyBSZXN1bHRzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2VhcmNoIHJldHVybmVkIG5vIHJlc3VsdHMuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIG5vUmVzdWx0c01lc3NhZ2U6IFwiTm8gcmVzdWx0c1wiLFxuICAgICAgICBzaW5nbGU6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBvbmVcIlxuICAgICAgICB9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0Li4uXCIsXG4gICAgICAgICAgICBtYXhTZWxlY3RlZE1lc3NhZ2U6IFwiTWF4ICN7bWF4fSBzZWxlY3Rpb25zXCIsXG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IFwiI3tjb3VudH0gc2VsZWN0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbkdCO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2NhbGVWYWx1ZXMsIElQYXJ0aWFsTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW50ZXJmYWNlcy92YWx1ZXNcIjtcbmltcG9ydCBlbkdCIGZyb20gXCIuLi9sb2NhbGVzL2VuLUdCXCI7XG5pbXBvcnQgKiBhcyAkZXh0ZW5kIGZyb20gXCJleHRlbmRcIjtcblxuZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajpUKTpUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZDxULCBVPih0YXJnZXQ6VCwgc291cmNlOlUpOlQgJiBVIHtcbiAgICAvLyBSb2xsdXAuLi5cbiAgICBjb25zdCBleHRlbmQgPSAoJGV4dGVuZCBhcyBhbnkpLmRlZmF1bHQgfHwgJGV4dGVuZDtcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIHRhcmdldCwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbGFuZyhsYW5ndWFnZTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIi1cIiwgXCJcIik7XG59XG5cbmludGVyZmFjZSBJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyIHtcbiAgICBbbmFtZTpzdHJpbmddOklQYXJ0aWFsTG9jYWxlVmFsdWVzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tWYWx1ZXM6SUxvY2FsZVZhbHVlcztcbiAgICBwcml2YXRlIF92YWx1ZXM6SUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lcjtcblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFuZ3VhZ2VVcGRhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLl9mYWxsYmFja1ZhbHVlcyA9IGVuR0I7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IFwiZW4tR0JcIjtcbiAgICAgICAgdGhpcy5sb2FkKFwiZW4tR0JcIiwgZW5HQik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGlmIChsYW5nKHRoaXMuX2xhbmd1YWdlKSAhPT0gbGFuZyhsYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChsYW5ndWFnZTpzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTpJTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGVlcENsb25lKHRoaXMuX2ZhbGxiYWNrVmFsdWVzKTtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvY2FsZSAke2xhbmd1YWdlfSBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVlcEV4dGVuZCh2YWx1ZXMsIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlPFQgZXh0ZW5kcyBrZXlvZiBJTG9jYWxlVmFsdWVzPihcbiAgICAgICAgdmFsdWVzOklMb2NhbGVWYWx1ZXNbVF0sXG4gICAgICAgIG92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElMb2NhbGVWYWx1ZXNbVF0+XG4gICAgKTpJTG9jYWxlVmFsdWVzW1RdIHtcbiAgICAgICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVlcENsb25lKHZhbHVlcyksIG92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldID0gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgZGVlcEV4dGVuZCh0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZSh2YWx1ZTpzdHJpbmcsIHZhcmlhYmxlczpbc3RyaW5nLCBzdHJpbmddW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXMucmVkdWNlKChzLCBbaywgdl0pID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKGAjeyR7a319YCwgXCJnXCIpLCB2KSwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbU3VpTG9jYWxpemF0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uTW9kdWxlIHt9XG4iLCIvLyBQb3NzaWJsZSBkaXJlY3Rpb25zIGZvciBhIHRyYW5zaXRpb24uXG5leHBvcnQgZW51bSBUcmFuc2l0aW9uRGlyZWN0aW9uIHtcbiAgICBJbixcbiAgICBPdXQsXG4gICAgRWl0aGVyLFxuICAgIFN0YXRpY1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246VHJhbnNpdGlvbkRpcmVjdGlvbjtcblxuICAgIC8vIENvbnZlcnRzIFRyYW5zaXRpb25EaXJlY3Rpb24gdG8gY2xhc3MgbmFtZS5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbkNsYXNzKCk6c3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluOiByZXR1cm4gXCJpblwiO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDogcmV0dXJuIFwib3V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGluZGl2aWR1YWwgY2xhc3NlcyBmb3IgdGhlIHRyYW5zaXRpb24sIGUuZy4gXCJmYWRlIG91dFwiIC0+IFtcImZhZGVcIiwgXCJvdXRcIl0uXG4gICAgcHVibGljIHJlYWRvbmx5IGNsYXNzZXM6c3RyaW5nW107XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246bnVtYmVyID0gMjUwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTooKCkgPT4gdm9pZCkgPSAoKSA9PiB7fSkge1xuXG4gICAgICAgIHRoaXMudHlwZSA9IG5hbWU7XG5cbiAgICAgICAgLy8gV2Ugc2V0IGEgbWluaW11bSBkdXJhdGlvbiBvZiAxbXMsIHRvIGdpdmUgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW1tZWRpYXRlIHRyYW5zaXRpb25cbiAgICAgICAgLy8gd2hpbHN0IGFsbG93aW5nIHBvc2l0aW9uaW5nIGNhbGN1bGF0aW9ucyB0byBoYXBwZW4gd2l0aG91dCBhIHZpc2libGUgZmxpY2tlci5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCAxKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy50eXBlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgICAvLyBVc2VkIHRvIGRlbGF5IGFuaW1hdGlvbnMgdW50aWwgd2UgaGF2ZSBhbiBlbGVtZW50IHRvIGFuaW1hdGUuXG4gICAgcHJpdmF0ZSBnZXQgX2lzUmVhZHkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9lbGVtZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jaGFuZ2VEZXRlY3RvciAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgJ2Rpc3BsYXknIHN0eWxlIHdoZW4gdmlzaWJsZS5cbiAgICBwcml2YXRlIF9kaXNwbGF5OnN0cmluZztcblxuICAgIC8vIFN0b3JlcyBxdWV1ZWQgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfcXVldWU6VHJhbnNpdGlvbltdO1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGFuZCB3aGlsZSBpdCBpcyB0cmFuc2l0aW9uaW5nIG91dC5cbiAgICBwcml2YXRlIF9pc1Zpc2libGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmQgbm90IHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBfaXNIaWRkZW46Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlkZGVuO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGZpcnN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUZpcnN0KCk6VHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZVswXTtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBsYXN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUxhc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlW3RoaXMuX3F1ZXVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgc2V0VGltZW91dCBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHRoZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uVGltZW91dDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luaXRpYWxseVZpc2libGU6Ym9vbGVhbiA9IHRydWUsIGRpc3BsYXk6c3RyaW5nID0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8vIGlzSW5pdGlhbGx5VmlzaWJsZSBzZXRzIHdoZXRoZXIgdGhlIGVsZW1lbnQgc3RhcnRzIG91dCB2aXNpYmxlLlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBpc0luaXRpYWxseVZpc2libGU7XG4gICAgICAgIHRoaXMuX2lzSGlkZGVuID0gIXRoaXMuX2lzVmlzaWJsZTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlbmRlcmVyIHRvIGJlIHVzZWQgZm9yIGFuaW1hdGluZy5cbiAgICBwdWJsaWMgcmVnaXN0ZXJSZW5kZXJlcihyZW5kZXJlcjpSZW5kZXJlcjIpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgZWxlbWVudCB0byBwZXJmb3JtIHRoZSBhbmltYXRpb25zIG9uLlxuICAgIHB1YmxpYyByZWdpc3RlckVsZW1lbnQoZWxlbWVudDpFbGVtZW50UmVmKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gZGV0ZWN0IGNoYW5nZXMgd2hlbiB1c2luZyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2guXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGUodHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVGVzdCBpZiB0cmFuc2l0aW9uIGlzIG9uZSBvZiB0aGUgbGlzdCB0aGF0IGRvZXNuJ3QgY2hhbmdlIHRoZSB2aXNpYmxlIHN0YXRlLlxuICAgICAgICAvLyBTaG91bGQgdGhlc2UgZXZlbnR1YWxseSBiZWNvbWUgY2xhc3Nlcz9cbiAgICAgICAgY29uc3QgaXNEaXJlY3Rpb25sZXNzID0gW1wiamlnZ2xlXCIsIFwiZmxhc2hcIiwgXCJzaGFrZVwiLCBcInB1bHNlXCIsIFwidGFkYVwiLCBcImJvdW5jZVwiXS5pbmRleE9mKHRyYW5zaXRpb24udHlwZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNEaXJlY3Rpb25sZXNzKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uU3RhdGljO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09IHVuZGVmaW5lZCB8fCB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgY3VycmVudCB2aXNpYmxlIHN0YXRlIGF1dG9tYXRpY2FsbHkgaWYgbm90IHNldCwgb3Igc2V0IHRvIGVpdGhlciBkaXJlY3Rpb24uXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMuX2lzVmlzaWJsZSA/IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0IDogVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZUxhc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBhbHJlYWR5LCBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3Bwb3NpdGUgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGF0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBpdC5cbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0cmFuc2l0aW9uKTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtVHJhbnNpdGlvbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkgfHwgdGhpcy5faXNBbmltYXRpbmcgfHwgIXRoaXMuX3F1ZXVlRmlyc3QpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHRyYW5zaXRpb24gdW50aWwgd2UgYXJlIHJlYWR5LCBvciBpZiB3ZSBhcmUgYW5pbWF0aW5nLCBvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRyYW5zaXRpb25zIGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdDtcblxuICAgICAgICAvLyBTZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgc3R5bGVzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW9uRHVyYXRpb25gLCBgJHt0cmFuc2l0aW9uLmR1cmF0aW9ufW1zYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCwgdGhpcy5fZGlzcGxheSk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBVbnNldCBoaWRkZW4gaWYgd2UgYXJlIHRyYW5zaXRpb25pbmcgaW4uXG4gICAgICAgICAgICB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGUgbGVuZ3RoIG9mIHRoZSBhbmltYXRpb24gYmVmb3JlIGNhbGxpbmcgdGhlIGNvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pLCB0cmFuc2l0aW9uLmR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhIHRyYW5zaXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICBwcml2YXRlIGZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgJiBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50LCBgZGlzcGxheWApO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBqdXN0IGFuaW1hdGVkIGluLCB3ZSBhcmUgbm93IHZpc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2l0aW9uZWQgb3V0LCB3ZSBzaG91bGQgYmUgaW52aXNpYmxlIGFuZCBoaWRkZW4uXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVzZXItZGVmaW5lZCB0cmFuc2l0aW9uIGNhbGxiYWNrLlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcXVldWUuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgLy8gSW1tZWRpYXRlbHkgYXR0ZW1wdCB0byBwZXJmb3JtIGFub3RoZXIgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGxlYXZlcyB0aGUgcmVzdCBvZiB0aGUgcXVldWUgaW50YWN0LlxuICAgIHB1YmxpYyBzdG9wKHRyYW5zaXRpb246VHJhbnNpdGlvbiA9IHRoaXMuX3F1ZXVlRmlyc3QpOnZvaWQge1xuICAgICAgICBpZiAoIXRyYW5zaXRpb24gfHwgIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgIHRoaXMuZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcyB0aGUgY3VycmVudCB0cmFuc2l0aW9uLCBhbmQgZW1wdGllcyB0aGUgcXVldWUuXG4gICAgcHVibGljIHN0b3BBbGwoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhclF1ZXVlKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIEVtcHRpZXMgdGhlIHRyYW5zaXRpb24gcXVldWUgYnV0IGNhcnJpZXMgb24gd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uLlxuICAgIHB1YmxpYyBjbGVhclF1ZXVlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFt0aGlzLl9xdWV1ZUZpcnN0XTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvdHJhbnNpdGlvbi1jb250cm9sbGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUcmFuc2l0aW9uXVwiLFxuICAgIGV4cG9ydEFzOiBcInRyYW5zaXRpb25cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBFYWNoIHRyYW5zaXRpb24gbXVzdCBoYXZlIGEgY29udHJvbGxlciBhc3NvY2lhdGVkIHRoYXQgZGlzcGF0Y2hlcyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzdWlUcmFuc2l0aW9uKHRDOlRyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIC8vIFNldCB0aGUgdHJhbnNpdGlvbiBjb250cm9sbGVyIChlLmcuICc8ZGl2IFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+PC9kaXY+JykuXG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodEMpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNsYXNzOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc1Zpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmhpZGRlblwiKVxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzSGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgLy8gSW5pdGlhbGlzZXMgdGhlIGNvbnRyb2xsZXIgd2l0aCB0aGUgaW5qZWN0ZWQgcmVuZGVyZXIgYW5kIGVsZW1lbnRSZWYuXG4gICAgcHVibGljIHNldFRyYW5zaXRpb25Db250cm9sbGVyKHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyUmVuZGVyZXIodGhpcy5fcmVuZGVyZXIpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyRWxlbWVudCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IodGhpcy5fY2hhbmdlRGV0ZWN0b3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RyYW5zaXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVHJhbnNpdGlvblxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcbiAgICBkaXNtaXNzKCk6dm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1lc3NhZ2VcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIG1lc3NhZ2Uge3sgY2xhc3MgfX1cIiAqbmdJZj1cIiFpc0Rpc21pc3NlZFwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Rpc21pc3NhYmxlXCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPjwvaT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBDU1MgQnVnICovXG4udWkuaWNvbi52aXNpYmxlLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2UgaW1wbGVtZW50cyBJTWVzc2FnZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNtaXNzYWJsZTpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImRpc21pc3NcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPjtcblxuICAgIHB1YmxpYyBpc0Rpc21pc3NlZDpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgY2xhc3M6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNtaXNzYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDMwMDtcblxuICAgICAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzbWlzcygpOnZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCh0aGlzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNZXNzYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZXNzYWdlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNZXNzYWdlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBhZ2luYXRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT0xXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZS0xKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzUHJldmlvdXMoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKDEpXCIgKm5nSWY9XCJwYWdlc1swXSAhPT0gMVwiPlxuICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzWzBdID4gMlwiPi4uLjwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiBjbGFzcz1cIml0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInA9PT1wYWdlXCIgKGNsaWNrKT1cInNldFBhZ2UocClcIj5cbiAgICB7eyBwIH19XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIDwgcGFnZUNvdW50IC0gMVwiPi4uLjwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSAhPT0gcGFnZUNvdW50XCI+XG4gICAgICAgIDxzcGFuPnt7IHBhZ2VDb3VudCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZSsxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT1wYWdlQ291bnRcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnaW5hdGlvblwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgLy8gUHVibGljIG1lbWJlcnNcbiAgICBwdWJsaWMgcGFnZUNvdW50Om51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgLy8gUHJpdmF0ZSBtZW1iZXJzXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZT86bnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TaXplOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlczpudW1iZXJbXTtcbiAgICBwcml2YXRlIF9oYXNOYXZpZ2F0aW9uTGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhTaXplKCk6bnVtYmVyfHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTpudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIDEpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VTaXplOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uU2l6ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uU2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbGxlY3Rpb25TaXplKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2l6ZSA9IE1hdGgubWF4KHZhbHVlLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc05hdmlnYXRpb25MaW5rcygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5fbWF4U2l6ZSB8fCB0aGlzLnBhZ2VDb3VudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyB8fCBtYXhTaXplIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNOYXZpZ2F0aW9uTGlua3ModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNCb3VuZGFyeUxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5Sb3RhdGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0VsbGlwc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhZ2VzKCk6bnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gMTtcbiAgICAgICAgdGhpcy5oYXNOYXZpZ2F0aW9uTGlua3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JvdW5kYXJ5TGlua3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNFbGxpcHNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgaGFzUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlKG5ld1BhZ2U6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWU6bnVtYmVyID0gKE51bWJlci5pc0ludGVnZXIobmV3UGFnZSkpID8gTWF0aC5taW4oTWF0aC5tYXgobmV3UGFnZSwgMSksIHRoaXMucGFnZUNvdW50KSA6IDE7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGUgaG9va3NcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgdXBkYXRlUGFnZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5hcHBseVBhZ2luYXRpb24oKTtcblxuICAgICAgICB0aGlzLl9wYWdlcyA9IEFycmF5PG51bWJlcj4oZW5kIC0gc3RhcnQpXG4gICAgICAgICAgICAuZmlsbChzdGFydCArIDEpXG4gICAgICAgICAgICAubWFwKChzLCBpKSA9PiBzICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2luYXRpb24oKTpbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9ICh0aGlzLm1heFNpemUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHRoaXMubWF4U2l6ZSwgdGhpcy5wYWdlQ291bnQpIDogdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguY2VpbCh0aGlzLnBhZ2UgLyBtYXhTaXplKSAtIDE7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0T2Zmc2V0ID0gbWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlQ291bnQgLSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnQgPSBwYWdlICogbWF4U2l6ZTtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbc3RhcnQsIE1hdGgubWluKGVuZCwgdGhpcy5wYWdlQ291bnQpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFN1aVBhZ2luYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvbi1wYW5lbFwiLFxuICAgIGV4cG9ydEFzOiBcInN1aUFjY29yZGlvblBhbmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gVGl0bGUgLS0+XG48ZGl2IGNsYXNzPVwidGl0bGVcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIChjbGljayk9XCJ0b2dnbGUoKVwiID5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48IS0tIENvbnRlbnQgLS0+XG48ZGl2IFtzdWlDb2xsYXBzZV09XCIhaXNPcGVuXCIgW2NvbGxhcHNlRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBNYW51YWwgc3R5bGUgYXMgU2VtYW50aWMgVUkgcmVsaWVzIG9uID4gc2VsZWN0b3IgKi9cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAuNWVtIDAgMWVtO1xufVxuXG4vKiBBbm90aGVyID4gc2VsZWN0b3IgZml4ICovXG46aG9zdDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25QYW5lbCB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gQ29udmVydCB0byBib29sZWFuIChmaXhlcyBmYWxzZSAhPSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT3BlbiAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiB0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhpcyBwYW5lbCwgd2UgbXVzdCBjbG9zZSB0aGUgb3RoZXIgb25lcy5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBjdXJyZW50IGFuaW1hdGlvbnMsIGFuZCBmYWRlIHRoZSBjb250ZW50cy4gVGhlIGRpcmVjdGlvbiBpcyBhdXRvbWF0aWMuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlcnZpY2UgZGVmaW5lZCB0cmFuc2l0aW9uIGR1cmF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldmVydCB0byBpbnN0YW50YW5lb3VzIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCB5ZXQgbG9hZGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBjbG9zZU90aGVyczpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIHBhbmVsczpTdWlBY2NvcmRpb25QYW5lbFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPdGhlcnMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDM1MDtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQYW5lbChwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIHBhbmVsLnNlcnZpY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHBhbmVsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VPdGhlclBhbmVscyhwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwICE9PSBwYW5lbCkge1xuICAgICAgICAgICAgICAgIHAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2FjY29yZGlvbi1wYW5lbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBnZW5lcmFsIHN0eWxpbmcgaXNzdWVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpeCBmb3Igc3R5bGVkIGJvcmRlciBpc3N1ZSAqL1xuOmhvc3Quc3R5bGVkIHN1aS1hY2NvcmRpb24tcGFuZWw6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjY29yZGlvblwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY2xvc2VPdGhlcnMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZU90aGVycyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aUFjY29yZGlvblBhbmVsKVxuICAgIHByb3RlY3RlZCBfcGFuZWxzOlF1ZXJ5TGlzdDxTdWlBY2NvcmRpb25QYW5lbD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWNjb3JkaW9uIHNlcnZpY2UgaXMgdW5pcXVlIHRvIGVhY2ggc2V0IG9mIHBhbmVscy5cbiAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBTdWlBY2NvcmRpb25TZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0IHBhbmVscyBhZnRlciB0aGV5IGhhdmUgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fcGFuZWxzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUGFuZWxzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQYW5lbHMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFuZWxzLmZvckVhY2gocCA9PiB0aGlzLl9zZXJ2aWNlLmFkZFBhbmVsKHApKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aUNvbGxhcHNlXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlIHtcbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgb3BlbiwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZXhwYW5kZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNFeHBhbmRlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGNsb3NlZCwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY29sbGFwc2VkXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0NvbGxhcHNpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzaW5nXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0NvbGxhcHNpbmc6Ym9vbGVhbjtcblxuICAgIC8vIEZsYWcgdGhhdCBpcyBpbml0aWFsbHkgdHJ1ZSwgdG8gbWFrZSB0aGUgMXN0IGFuaW1hdGlvbiBpbnN0YW50YW5lb3VzLlxuICAgIHByaXZhdGUgX3ByaXN0aW5lOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc3VpQ29sbGFwc2UoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNvbGxhcHNlLCBgdHJ1ZWAgaXMgY29sbGFwc2VkLlxuICAgIHB1YmxpYyBzZXQgc3VpQ29sbGFwc2UodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xsYXBzZUR1cmF0aW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgZ2V0IF9hbmltYXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlzdGluZSA/IDAgOiB0aGlzLmNvbGxhcHNlRHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbmltYXRpb24gZHVyYXRpb24gaXMgMzUwbXMgYnkgZGVmYXVsdC5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEZvcmNpYmx5IGhpZGUgdGhlIG92ZXJmbG93IHNvIHRoYXQgY29udGVudCBpcyBub3QgdmlzaWJsZSBwYXN0IHRoZSBib3VuZGFyaWVzIG9mIGl0cyBjb250YWluZXIuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBob3N0IGVsZW1lbnQgZnJvbSBpdHMgc2Nyb2xsIGhlaWdodCB0byAwLlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgMCwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBvZmZzZXQgaGVpZ2h0IHRvIGl0cyBzY3JvbGwgaGVpZ2h0LlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVyZmxvdyBvdmVycmlkZSB0byBlbmFibGUgdXNlciBzdHlsaW5nIG9uY2UgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwib3ZlcmZsb3dcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYW5pbWF0ZShzdGFydEhlaWdodDpudW1iZXIsIGVuZEhlaWdodDpudW1iZXIsIHJlbW92ZU9uQ29tcGxldGU6Ym9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICBjb25zdCBoZWlnaHRGcmFtZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c3RhcnRIZWlnaHR9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2VuZEhlaWdodH1weGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocmVtb3ZlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgaGVpZ2h0RnJhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGBhdXRvYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBjb2xsYXBzZSB1c2luZyB0aGUgd2ViIGFuaW1hdGlvbnMgQVBJLlxuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoXG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBhbmltYXRpb24gb24gMXN0IGNvbGxhcHNlIC8gZXhwYW5zaW9uLlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlXCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5fcHJpc3RpbmUpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmlzdGluZSBmbGFnIHdoZW4gZmlyc3QgaGl0LlxuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSwgdGhpcy5jb2xsYXBzZUR1cmF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY29sbGFwc2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDb2xsYXBzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29sbGFwc2VNb2R1bGUgfSBmcm9tIFwiLi4vY29sbGFwc2UvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYWxpZGF0b3JIb3N0IHtcbiAgICB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3I8VCBleHRlbmRzIElDdXN0b21WYWxpZGF0b3JIb3N0PiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QudmFsaWRhdGUoYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjwoRnVuY3Rpb24gfCBWYWxpZGF0b3IpW10+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFQgZXh0ZW5kcyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICB0aGlzLl9ob3N0LndyaXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiLy8gS2V5Ym9hcmQga2V5Y29kZXMuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBMZWZ0ID0gMzcsXG4gICAgVXAgPSAzOCxcbiAgICBSaWdodCA9IDM5LFxuICAgIERvd24gPSA0MCxcblxuICAgIEVzY2FwZSA9IDI3LFxuICAgIEVudGVyID0gMTMsXG5cbiAgICBTcGFjZSA9IDMyLFxuICAgIEJhY2tzcGFjZSA9IDhcbn1cblxuaW50ZXJmYWNlIElSZWN1cnNpdmVPYmplY3QgeyBbbmFtZTpzdHJpbmddOklSZWN1cnNpdmVPYmplY3Q7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHsgJGltcGxpY2l0OlQ7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJQXVnbWVudGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNsb3Nlc3Qoc2VsZWN0b3I6c3RyaW5nKTpJQXVnbWVudGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEhhbmRsZWRFdmVudCB7XG4gICAgcHVibGljIGV2ZW50SGFuZGxlZDpib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljQ2xhc3NlcyB7XG4gICAgW25hbWU6c3RyaW5nXTp0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgICBBcnJheToge1xuICAgICAgICByYW5nZShuOm51bWJlciwgb2Zmc2V0Om51bWJlciA9IDApOm51bWJlcltdIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheShuKS5maWxsKDApLm1hcCgoeiwgaSkgPT4gaSArIG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwPFQ+KGl0ZW1zOlRbXSwgZ3JvdXBMZW5ndGg6bnVtYmVyKTpUW11bXSB7XG4gICAgICAgICAgICBjb25zdCBtdXRhYmxlID0gaXRlbXMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczpUW11bXSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKG11dGFibGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG11dGFibGUuc3BsaWNlKDAsIGdyb3VwTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEJ5PFQ+KGl0ZW1zOlRbXSwgZmllbGQ6a2V5b2YgVCk6eyBbbmFtZTpzdHJpbmddOlRbXSB9IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2U8eyBbbmFtZTpzdHJpbmddOlRbXSB9PihcbiAgICAgICAgICAgICAgICAoZ3JvdXBzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBpW2ZpZWxkXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0gPSBncm91cHNbZmllbGRWYWx1ZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT2JqZWN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBmbGF0dGVuPFQ+KGl0ZW1zOlRbXVtdKTpUW10ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoaXMsIGkpID0+IGlzLmNvbmNhdChpKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFN0cmluZzoge1xuICAgICAgICBwYWRMZWZ0KHN0cjpzdHJpbmcsIGxlbmd0aDpudW1iZXIsIHBhZGRpbmc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAgICAgbGV0IHMgPSBzdHI7XG4gICAgICAgICAgICB3aGlsZSAocy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzID0gcGFkZGluZyArIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBET006IHtcbiAgICAgICAgcGFyc2VCb29sZWFuQXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlOmJvb2xlYW4pOmJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgT2JqZWN0OiB7XG4gICAgICAgIHJlYWRWYWx1ZTxULCBVPihvYmplY3Q6VCwgcGF0aD86c3RyaW5nKTpVIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QgYXMgYW55IGFzIFU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWN1cnNlZCA9IG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKHJlY3Vyc2VkIGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0KVtwW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2VkIGFzIGFueSBhcyBVO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE1hdGg6IHtcbiAgICAgICAgcm91bmQocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRVcChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kRG93bihyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICBtb2QocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgY29uc3QgcmVtID0gciAlIG47XG4gICAgICAgICAgICBpZiAocmVtIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW0gKyBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZW51bSBEYXRlUHJlY2lzaW9uIHtcbiAgICBEZWNhZGUgPSAwLFxuICAgIFllYXIgPSAxLFxuICAgIE1vbnRoID0gMixcbiAgICBEYXRlID0gMyxcbiAgICBIb3VyID0gNCxcbiAgICBNaW51dGUgPSA1XG59XG5cbmV4cG9ydCBjb25zdCBEYXRlVXRpbCA9IHtcbiAgICBzdGFydE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIHJlc2V0QWxsOmJvb2xlYW4gPSBmYWxzZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihkYXRlLmdldEZ1bGxZZWFyKCkgLyAxMCkgKiAxMCArIDE7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihzdGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVuZE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBzd2l0Y2ggKHByZWNpc2lvbikge1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgxMiwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDU5LCA1OSwgOTk5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVxdWFsKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBhOkRhdGUsIGI6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCBlcXVhbCA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNaW51dGVzKCkgPT09IGIuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRIb3VycygpID09PSBiLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXF1YWw7XG4gICAgfSxcblxuICAgIG5leHQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5hZGQocHJlY2lzaW9uLCBkYXRlLCAxKTtcbiAgICB9LFxuXG4gICAgYWRkKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIGk6bnVtYmVyKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5ZZWFyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChtb250aCArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IFV0aWwuTWF0aC5tb2QobW9udGggKyBpLCAxMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG5cbiAgICBwcmV2aW91cyhwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciAtIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCAtIDEsIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldEhvdXJzKCkgIT09IFV0aWwuTWF0aC5tb2QoaG91cnMgLSAxLCAyNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGNsb25lKGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZixcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBsaWNpdENvbnRleHQ8VD4ge1xuICAgICRpbXBsaWNpdD86VDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aUNvbXBvbmVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOkFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6SW5qZWN0b3IpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50PFQ+KHR5cGU6VHlwZTxUPiwgcHJvdmlkZXJzOlByb3ZpZGVyW10gPSBbXSk6Q29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgLy8gUmVzb2x2ZSBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGNvbXBvbmVudHMgb2YgdHlwZSBgdHlwZWAuXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSBhcyBUeXBlPFQ+KTtcblxuICAgICAgICAvLyBSZXNvbHZlIGFuZCBjcmVhdGUgYW4gaW5qZWN0b3Igd2l0aCB0aGUgc3BlY2lmaWVkIHByb3ZpZGVycy5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgICAgICAgIHByb3ZpZGVycyxcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHVzaW5nIHRoZSBwcmV2aW91c2x5IHJlc29sdmVkIGZhY3RvcnkgJiBpbmplY3Rvci5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVZpZXc8VCwgVSBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8VD4+KHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGU6VGVtcGxhdGVSZWY8VT4sIGNvbnRleHQ6VSk6dm9pZCB7XG4gICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3PFU+KHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW50byB0aGUgc3BlY2lmaWVkIHZpZXcgY29udGFpbmVyLlxuICAgIHB1YmxpYyBhdHRhY2hUb1ZpZXc8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgICBwdWJsaWMgYXR0YWNoVG9BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIERldGFjaGVzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBkZXRhY2hGcm9tQXBwbGljYXRpb248VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBzcGVjaWZpZWQgRE9NIGVsZW1lbnQuXG4gICAgcHVibGljIG1vdmVUb0VsZW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgZWxlbWVudDpFbGVtZW50KTp2b2lkIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTW92ZXMgdGhlIGNvbXBvbmVudCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICBwdWJsaWMgbW92ZVRvRG9jdW1lbnRCb2R5PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLm1vdmVUb0VsZW1lbnQoY29tcG9uZW50UmVmLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2hGcm9tRG9jdW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAvLyBXZSBjYW4ndCB1c2UgYGVsZW1lbnQucmVtb3ZlKClgIGR1ZSB0byBsYWNrIG9mIElFMTEgc3VwcG9ydC5cbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgUG9wcGVyLCB7IE1vZGlmaWVycywgUG9wcGVyT3B0aW9ucywgUGxhY2VtZW50LCBEYXRhIH0gZnJvbSBcInBvcHBlci5qc1wiO1xuXG50eXBlIFBvcHBlck1vZGlmaWVycyA9IE1vZGlmaWVycyAmIHtcbiAgICBjb21wdXRlU3R5bGU/OntcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOmJvb2xlYW47XG4gICAgfTtcbn07XG50eXBlIFBvcHBlckluc3RhbmNlID0gUG9wcGVyICYge1xuICAgIG9wdGlvbnM6UG9wcGVyT3B0aW9ucyAmIHtcbiAgICAgICAgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSBcImF1dG9cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wIGxlZnRcIiB8IFwidG9wXCIgfCBcInRvcCByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gbGVmdFwiIHwgXCJib3R0b21cIiB8IFwiYm90dG9tIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgdG9wXCIgfCBcImxlZnRcIiB8IFwibGVmdCBib3R0b21cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQgdG9wXCIgfCBcInJpZ2h0XCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSB7XG4gICAgQXV0bzogXCJhdXRvXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wTGVmdDogXCJ0b3AgbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcDogXCJ0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BSaWdodDogXCJ0b3AgcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0VG9wOiBcImxlZnQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdEJvdHRvbTogXCJsZWZ0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbUxlZnQ6IFwiYm90dG9tIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tUmlnaHQ6IFwiYm90dG9tIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRUb3A6IFwicmlnaHQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodEJvdHRvbTogXCJyaWdodCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zaXRpb25Cb3VuZGluZ0JveCB7XG4gICAgd2lkdGg6bnVtYmVyO1xuICAgIGhlaWdodDpudW1iZXI7XG4gICAgdG9wOm51bWJlcjtcbiAgICBsZWZ0Om51bWJlcjtcbiAgICBib3R0b206bnVtYmVyO1xuICAgIHJpZ2h0Om51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KTpQbGFjZW1lbnQge1xuICAgIGlmICghcGxhY2VtZW50IHx8IHBsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bykge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgLy8gQWxsIHBsYWNlbWVudHMgb2YgdGhlIGZvcm1hdDogYGRpcmVjdGlvbiBhbGlnbm1lbnRgLCBlLmcuIGB0b3AgbGVmdGAuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBsYWNlbWVudC5zcGxpdChcIiBcIik7XG5cbiAgICAvLyBEaXJlY3Rpb24gYWxvbmUgY292ZXJzIGNhc2Ugb2YganVzdCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCwgYHJpZ2h0YC5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIC8vIEFkZCBgc3RhcnRgIC8gYGVuZGAgdG8gcGxhY2VtZW50LCBkZXBlbmRpbmcgb24gYWxpZ25tZW50IGRpcmVjdGlvbi5cbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInN0YXJ0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImVuZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEpvaW4gd2l0aCBoeXBoZW4gdG8gY3JlYXRlIFBvcHBlciBjb21wYXRpYmxlIHBsYWNlbWVudC5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCItXCIpIGFzIFBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wcGVyVG9QbGFjZW1lbnQocG9wcGVyOnN0cmluZyk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgIGlmICghcG9wcGVyIHx8IHBvcHBlciA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwb3BwZXIuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIiBcIikgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6RWxlbWVudFJlZjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3ViamVjdDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfcG9wcGVyOlBvcHBlckluc3RhbmNlO1xuICAgIHByaXZhdGUgX3BvcHBlclN0YXRlOkRhdGE7XG4gICAgcHJpdmF0ZSBfcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHByaXZhdGUgX2hhc0Fycm93OmJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYXJyb3dTZWxlY3RvcjpzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNBcnJvdyhoYXNBcnJvdzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0Fycm93ID0gaGFzQXJyb3c7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3R1YWxQbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wcGVyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHBlclRvUGxhY2VtZW50KHRoaXMuX3BvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wcGVyU3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYW5jaG9yOkVsZW1lbnRSZWYsIHN1YmplY3Q6RWxlbWVudFJlZiwgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50LCBhcnJvd1NlbGVjdG9yPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgdGhpcy5fYXJyb3dTZWxlY3RvciA9IGFycm93U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnMgPSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBncHVBY2NlbGVyYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5fYXJyb3dTZWxlY3RvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIGZuOiAoZGF0YTpQb3BwZXIuRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIubGVmdCArPSBvZmZzZXRzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyLnRvcCArPSBvZmZzZXRzLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9hcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFRvUG9wcGVyKHRoaXMuX3BsYWNlbWVudCksXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiBpbml0aWFsID0+IHRoaXMuX3BvcHBlclN0YXRlID0gaW5pdGlhbCxcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogdXBkYXRlID0+IHRoaXMuX3BvcHBlclN0YXRlID0gdXBkYXRlXG4gICAgICAgICAgICB9KSBhcyBQb3BwZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0cygpOlBvcHBlci5PZmZzZXQge1xuICAgICAgICBsZXQgbGVmdCA9IDA7IGxldCB0b3AgPSAwO1xuXG4gICAgICAgIC8vIFRvIHN1cHBvcnQgY29ycmVjdCBwb3NpdGlvbmluZyBmb3IgYWxsIHBvcHVwIHNpemVzIHdlIHNob3VsZCBjYWxjdWxhdGUgb2Zmc2V0IHVzaW5nIGVtXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgIC8vIFRoZSBTZW1hbnRpYyBVSSBwb3B1cCBhcnJvdyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSAwLjcxNDI4NTcxZW0gYW5kIHRoZSBtYXJnaW4gZnJvbSB0aGUgcG9wdXAgZWRnZSBpcyAxZW1cbiAgICAgICAgY29uc3QgYXJyb3dDZW50ZXIgPSAoMC43MTQyODU3MSAvIDIgKyAxKSAqIGZvbnRTaXplO1xuXG4gICAgICAgIGlmICh0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDw9IGFycm93Q2VudGVyICogMikge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yQ2VudGVyV2lkdGggPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQgfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFuY2hvckNlbnRlcldpZHRoIC0gYXJyb3dDZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BSaWdodCB8fCB0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVyV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gYXJyb3dDZW50ZXIgKiAyKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3JDZW50ZXJIZWlnaHQgPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5MZWZ0VG9wIHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuUmlnaHRUb3ApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3JDZW50ZXJIZWlnaHQgLSBhcnJvd0NlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkxlZnRCb3R0b20gfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5SaWdodEJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5leHBvcnQgdHlwZSBQb3B1cFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJsYXJnZVwiIHwgXCJodWdlXCI7XG5leHBvcnQgdHlwZSBQb3B1cFdpZHRoID0gXCJ3aWRlXCIgfCBcInZlcnkgd2lkZVwiICB8IFwiZmxvd2luZ1wiO1xuXG5leHBvcnQgY29uc3QgUG9wdXBUcmlnZ2VyID0ge1xuICAgIEhvdmVyOiBcImhvdmVyXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIENsaWNrOiBcImNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgRm9jdXM6IFwiZm9jdXNcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgTWFudWFsOiBcIm1hbnVhbFwiIGFzIFBvcHVwVHJpZ2dlclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBDb25maWcge1xuICAgIGhlYWRlcj86c3RyaW5nO1xuICAgIHRleHQ/OnN0cmluZztcbiAgICBwbGFjZW1lbnQ/OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHRyaWdnZXI/OlBvcHVwVHJpZ2dlcjtcbiAgICBpc0ludmVydGVkPzpib29sZWFuO1xuICAgIGRlbGF5PzpudW1iZXI7XG4gICAgaXNCYXNpYz86Ym9vbGVhbjtcbiAgICB0cmFuc2l0aW9uPzpzdHJpbmc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzpudW1iZXI7XG4gICAgaXNGbG93aW5nPzpib29sZWFuO1xuICAgIGlzSW5saW5lPzpib29sZWFuO1xuICAgIHBhcmVudD86RWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29uZmlnIGltcGxlbWVudHMgSVBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgaGVhZGVyPzpzdHJpbmc7XG4gICAgcHVibGljIHRleHQ/OnN0cmluZztcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHB1YmxpYyB0cmlnZ2VyOlBvcHVwVHJpZ2dlcjtcbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXI7XG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgcHVibGljIHNpemU6UG9wdXBTaXplO1xuICAgIHB1YmxpYyB3aWR0aDpQb3B1cFdpZHRoO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Zsb3dpbmc6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbmxpbmU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgcGFyZW50OkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5pc0Zsb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0lubGluZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSwgSUR5bmFtaWNDbGFzc2VzIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBwb3B1cFwiXG4gICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgI2NvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLnRlbXBsYXRlICYmICghIWNvbmZpZy5oZWFkZXIgfHwgISFjb25maWcudGV4dClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiICpuZ0lmPVwiY29uZmlnLmhlYWRlclwiPnt7IGNvbmZpZy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBjb25maWcudGV4dCB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgI3RlbXBsYXRlU2libGluZz48L2Rpdj5cblxuICAgIDxzdWktcG9wdXAtYXJyb3cgKm5nSWY9XCIhY29uZmlnLmlzQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJwb3NpdGlvbmluZ1NlcnZpY2UgPyBwb3NpdGlvbmluZ1NlcnZpY2UuYWN0dWFsUGxhY2VtZW50IDogY29uZmlnLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW52ZXJ0ZWRdPVwiY29uZmlnLmlzSW52ZXJ0ZWRcIj48L3N1aS1wb3B1cC1hcnJvdz5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkucG9wdXAge1xuICAgIC8qIEF1dG9maXQgcG9wdXAgdG8gdGhlIGNvbnRlbnRzLiAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnVpLmFuaW1hdGluZy5wb3B1cCB7XG4gICAgLyogV2hlbiB0aGUgcG9wdXAgaXMgYW5pbWF0aW5nLCBpdCBtYXkgbm90IGluaXRpYWxseSBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICBUaGlzIGZpcmVzIGEgbW91c2UgZXZlbnQsIGNhdXNpbmcgdGhlIGFuY2hvcidzIG1vdXNlbGVhdmUgdG8gZmlyZSAtIG1ha2luZyB0aGUgcG9wdXAgZmxpY2tlci5cbiAgICAgICBTZXR0aW5nIHBvaW50ZXItZXZlbnRzIHRvIG5vbmUgd2hpbGUgYW5pbWF0aW5nIGZpeGVzIHRoaXMgYnVnLiAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWkucG9wdXA6OmJlZm9yZSB7XG4gICAgLyogSGlkZSB0aGUgU2VtYW50aWMgVUkgQ1NTIGFycm93LiAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gYWJvdmUgYW5kIGJlbG93IHdoZW4gcGxhY2VkICd2ZXJ0aWNhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJ0b3BcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGVpdGhlciBzaWRlIHdoZW4gcGxhY2VkICdob3Jpem9udGFsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImxlZnRcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cCBpbXBsZW1lbnRzIElQb3B1cCB7XG4gICAgLy8gQ29uZmlnIHNldHRpbmdzIGZvciB0aGlzIHBvcHVwLlxuICAgIHB1YmxpYyBjb25maWc6VGVtcGxhdGVQb3B1cENvbmZpZzxhbnk+O1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgIHB1YmxpYyBwb3NpdGlvbmluZ1NlcnZpY2U6UG9zaXRpb25pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2FuY2hvcjpFbGVtZW50UmVmO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbiBpbnRlcm5hbGx5LlxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHBvcHVwIGNsb3NlLlxuICAgIHB1YmxpYyBjbG9zaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBvcGVucyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25PcGVuOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBjbG9zZXMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uQ2xvc2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBgRWxlbWVudFJlZmAgZm9yIHRoZSBwb3NpdGlvbmluZyBzdWJqZWN0LlxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwdWJsaWMgc2V0IGFuY2hvcihhbmNob3I6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZGlyZWN0aW9uIChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgZGlyZWN0aW9uIGF0dHJpYnV0ZSBiZWZvcmUgcG9wcGVyIGluaXQgdG8gYWxsb3cgY29ycmVjdCBwb3NpdGlvbmluZ1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5hbGlnbm1lbnRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNJbnZlcnRlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5pbnZlcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzQmFzaWMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuYmFzaWMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Zsb3dpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuZmxvd2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5jb25maWcuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy53aWR0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJpbmRleDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIG9wZW4gaWYgY3VycmVudGx5IGNsb3NlZC5cbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcG9zaXRpb25pbmcgc2VydmljZSBhZnRlciBhIGJyaWVmIGRlbGF5LlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmdTZXJ2aWNlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5lbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwiLmR5bmFtaWMuYXJyb3dcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UuaGFzQXJyb3cgPSAhdGhpcy5jb25maWcuaXNCYXNpYztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIG9wZW5pbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgb3Blbi5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBjbG9zZSBpZiBjdXJyZW50bHkgb3Blbi5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGNsb3NpbmcgdGltZXIsIHRoYXQgZmlyZXMgdGhlIGBvbkNsb3NlYCBldmVudCBhZnRlciB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgICAgICAgICAgdGhpcy5jbG9zaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZS5lbWl0KCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgY2xvc2VkLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgcG9wdXAgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IElQb3B1cExpZmVjeWNsZSB9IGZyb20gXCIuL3BvcHVwLWxpZmVjeWNsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cCB7XG4gICAgb3BlbigpOnZvaWQ7XG4gICAgY2xvc2UoKTp2b2lkO1xuICAgIHRvZ2dsZSgpOnZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlQb3B1cENvbnRyb2xsZXIgaW1wbGVtZW50cyBJUG9wdXAsIE9uRGVzdHJveSB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgcG9wdXAgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpUG9wdXA+O1xuXG4gICAgLy8gUmV0dXJucyBnZW5lcmF0ZWQgcG9wdXAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBwb3B1cCgpOlN1aVBvcHVwIHtcbiAgICAgICAgLy8gVXNlIG5vbi1udWxsIGFzc2VydGlvbiBhcyB3ZSBvbmx5IGFjY2VzcyB0aGlzIHdoZW4gYSBwb3B1cCBleGlzdHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGRlbGF5ZWQgcG9wdXAgb3Blbi5cbiAgICBwcml2YXRlIF9vcGVuaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIGRvY3VtZW50IGNsaWNrIGhhbmRsZXIuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRMaXN0ZW5lcjooKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBTdWlQb3B1cCBjb21wb25lbnQgYW5kIGF0dGFjaCBpdCB0byB0aGUgYXBwbGljYXRpb24gdmlldy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoU3VpUG9wdXApO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwb3B1cCB3aXRoIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgcG9wdXAgaXMgY2xvc2VkIChvbkNsb3NlIGZpcmVzIG9uIGFuaW1hdGlvbiBjb21wbGV0ZSksXG4gICAgICAgIHRoaXMucG9wdXAub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhbnVwKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJUG9wdXBDb25maWcpOnZvaWQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucG9wdXAuY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lci5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5IGludGVydmFsLlxuICAgICAgICB0aGlzLl9vcGVuaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbigpLCB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcuaXNJbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRWxlbWVudCh0aGlzLl9jb21wb25lbnRSZWYsIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwLmNvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRWxlbWVudCh0aGlzLl9jb21wb25lbnRSZWYsIHRoaXMucG9wdXAuY29uZmlnLnBhcmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudCB0byB0aGUgYm9keSB0byBhdm9pZCBhbnkgcG9zaXRpb25pbmcgaXNzdWVzLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5tb3ZlVG9Eb2N1bWVudEJvZHkodGhpcy5fY29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCBhIHJlZmVyZW5jZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuIFdlIGRvIGl0IGhlcmUgYmVjYXVzZSBJRTExIGxvdmVzIHRvIGNvbXBsYWluLlxuICAgICAgICB0aGlzLnBvcHVwLmFuY2hvciA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50IGJvZHkgdG8gaGFuZGxlIGNsb3NpbmcuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlclxuICAgICAgICAgICAgLmxpc3RlbihcImRvY3VtZW50XCIsIFwiY2xpY2tcIiwgKGU6TW91c2VFdmVudCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRG9jdW1lbnRDbGljayhlKSk7XG5cbiAgICAgICAgLy8gU3RhcnQgcG9wdXAgb3BlbiB0cmFuc2l0aW9uLlxuICAgICAgICB0aGlzLnBvcHVwLm9wZW4oKTtcblxuICAgICAgICAvLyBDYWxsIGxpZmVjeWxlIGhvb2tcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gKHRoaXMgYXMgSVBvcHVwTGlmZWN5Y2xlKS5wb3B1cE9uT3BlbjtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBvcGVuaW5nIHRpbWVyIHRvIHN0b3AgdGhlIHBvcHVwIG9wZW5pbmcgYWZ0ZXIgY2xvc2UgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHBvcHVwIGNsb3NlIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGxpZmVjeWxlIGhvb2tcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gKHRoaXMgYXMgSVBvcHVwTGlmZWN5Y2xlKS5wb3B1cE9uQ2xvc2U7XG4gICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZURlbGF5ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIGhhc24ndCBiZWVuIGNyZWF0ZWQsIG9yIGl0IGhhcyBidXQgaXQgaXNuJ3QgY3VycmVudGx5IG9wZW4sIG9wZW4gdGhlIHBvcHVwLlxuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPJ3dpc2UsIGNsb3NlIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIGhhc24ndCBiZWVuIGNyZWF0ZWQsIG9yIGl0IGhhcyBidXQgaXQgaXNuJ3QgY3VycmVudGx5IG9wZW4sIG9wZW4gdGhlIHBvcHVwLlxuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAodGhpcy5fY29tcG9uZW50UmVmICYmICF0aGlzLnBvcHVwLmlzT3BlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcbiAgICBwdWJsaWMgb25Nb3VzZUVudGVyKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkNsaWNrIHx8XG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuT3V0c2lkZUNsaWNrKSB7XG5cbiAgICAgICAgICAgIC8vIFJlcGVhdGVkIGNsaWNrcyByZXF1aXJlIGEgdG9nZ2xlLCByYXRoZXIgdGhhbiBqdXN0IG9wZW5pbmcgdGhlIHBvcHVwIGVhY2ggdGltZS5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGVsYXllZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cyAmJlxuICAgICAgICAgICAgICAgICAgICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkpIHtcbiAgICAgICAgICAgIC8vIFJlcGVhdGVkIGNsaWNrcyB3aXRoIGEgZm9jdXMgdHJpZ2dlciByZXF1aXJlcyBhbiBvcGVuIChhcyBmb2N1cyBpc24ndCBldmVyIGxvc3Qgb24gcmVwZWF0ZWQgY2xpY2spLlxuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHBvcHVwIHRyaWdnZXIgaXMgb3V0c2lkZSBjbGljayxcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIHBvcHVwIGlmIHRoZSBjbGljayBpcyBvdXRzaWRlIG9mIHRoZSBwb3B1cCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCEodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOmFueSk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgICF0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICYmXG4gICAgICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuRm9jdXMpIHtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFudXAoKTp2b2lkIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlICYmIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbmluZ1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbmluZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5kZXRhY2hGcm9tQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5fZG9jdW1lbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgVHlwZSwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vcG9wdXAtY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXI8VD4gZXh0ZW5kcyBTdWlQb3B1cENvbnRyb2xsZXIge1xuICAgIC8vIFN0b3JlcyByZWZlcmVuY2UgdG8gZ2VuZXJhdGVkIGNvbnRlbnQgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbnRlbnRDb21wb25lbnRSZWY/OkNvbXBvbmVudFJlZjxUPjtcblxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50SW5zdGFuY2UoKTpUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50OlR5cGU8VD4sXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50IGFzIFR5cGU8VD4pO1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb1ZpZXcodGhpcy5fY29udGVudENvbXBvbmVudFJlZiwgdGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbnVwKCk6dm9pZCB7XG4gICAgICAgIHN1cGVyLmNsZWFudXAoKTtcblxuICAgICAgICBpZiAodGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29udGVudENvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIsIElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFN1aUNvbXBvbmVudEZhY3RvcnksIElJbXBsaWNpdENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgSVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vcG9wdXAtY29uZmlnXCI7XG5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+IGV4dGVuZHMgSUltcGxpY2l0Q29udGV4dDxJUG9wdXA+IHtcbiAgICBjb250ZXh0PzpUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IGV4dGVuZHMgSVBvcHVwQ29uZmlnIHtcbiAgICB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBjb250ZXh0PzpUO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQb3B1cENvbmZpZzxUPiBleHRlbmRzIFBvcHVwQ29uZmlnIHtcbiAgICBwdWJsaWMgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlcjxUPiBleHRlbmRzIFN1aVBvcHVwQ29udHJvbGxlciB7XG4gICAgcHVibGljIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc/OklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuY29uZmlndXJlKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbmZpZy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0ZW1wbGF0ZSwgaW5qZWN0IGl0IGludG8gdGhlIHZpZXcuXG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZy5jbGVhcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMucG9wdXAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwLWFycm93XCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJkeW5hbWljIGFycm93XCIgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiICpuZ0lmPVwiYWxpZ25tZW50ID09ICdjZW50ZXInXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwic3RhdGljIGFycm93XCIgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiIFthdHRyLmFsaWdubWVudF09XCJhbGlnbm1lbnRcIiAqbmdJZj1cImFsaWdubWVudCAhPSAnY2VudGVyJ1wiPjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMC43MTQyODU3MWVtO1xuICAgIGhlaWdodDogMC43MTQyODU3MWVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgei1pbmRleDogMjtcbn1cblxuOmhvc3QuaW52ZXJ0ZWQgLmFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWIxYzFkO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdIHtcbiAgICBib3R0b206IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl0ge1xuICAgIHJpZ2h0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl0ge1xuICAgIHRvcDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXSB7XG4gICAgbGVmdDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMCAjYmFiYWJjO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl1bYWxpZ25tZW50PVwibGVmdFwiXSB7XG4gICAgbGVmdDogMWVtO1xuICAgIHJpZ2h0OiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl1bYWxpZ25tZW50PVwidG9wXCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0ge1xuICAgIHRvcDogMWVtO1xuICAgIGJvdHRvbTogYXV0bztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl1bYWxpZ25tZW50PVwicmlnaHRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMWVtO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl1bYWxpZ25tZW50PVwiYm90dG9tXCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDFlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQXJyb3cge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmludmVydGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gdGhpcy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbGlnbm1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cENvbmZpZyBleHRlbmRzIFBvcHVwQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gV2UgdXNlIGFuIGVtcHR5IGNvbnN0cnVjdG9yIHRvIGVuc3VyZSBBbmd1bGFyIERJIHdvcmtzIGNvcnJlY3RseS5cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFV0aWwsIFBvc2l0aW9uaW5nUGxhY2VtZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciwgUG9wdXBTaXplLCBQb3B1cFdpZHRoIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlciwgSVRlbXBsYXRlUG9wdXBDb250ZXh0LCBJVGVtcGxhdGVQb3B1cENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVBvcHVwXVwiLFxuICAgIGV4cG9ydEFzOiBcInN1aVBvcHVwXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBEaXJlY3RpdmU8VD4gZXh0ZW5kcyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlcjxUPiB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSGVhZGVyKGhlYWRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRleHQodGV4dDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBCYXNpYyhiYXNpYzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzQmFzaWMgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYmFzaWMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cElubGluZShpbmxpbmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0lubGluZSA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbmxpbmUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEZsb3dpbmcoZmxvd2luZzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzRmxvd2luZyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmbG93aW5nKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwUGxhY2VtZW50KHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwV2lkdGgod2lkdGg6UG9wdXBXaWR0aCkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFNpemUoc2l6ZTpQb3B1cFNpemUpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBvcHVwVHJpZ2dlcigpOlBvcHVwVHJpZ2dlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmlnZ2VyKHRyaWdnZXI6UG9wdXBUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlKHRlbXBsYXRlOlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRlbXBsYXRlQ29udGV4dChjb250ZXh0OlQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBDb25maWcoY29uZmlnOklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcG9wdXBEZWZhdWx0czpTdWlQb3B1cENvbmZpZykge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBuZXcgUG9wdXBDb25maWcocG9wdXBEZWZhdWx0cykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9wb3B1cC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFN1aVBvcHVwQXJyb3cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BvcHVwLWFycm93XCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vc2VydmljZXMvcG9wdXAuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUG9wdXBEaXJlY3RpdmUsXG4gICAgICAgIFN1aVBvcHVwQXJyb3csXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVBvcHVwRGlyZWN0aXZlLFxuICAgICAgICBTdWlQb3B1cFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aVBvcHVwQ29uZmlnXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCxcbiAgICBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1xuICAgIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IsXG4gICAgSUN1c3RvbVZhbGlkYXRvckhvc3QsIGN1c3RvbVZhbGlkYXRvckZhY3RvcnksIEN1c3RvbVZhbGlkYXRvciwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnksIEtleUNvZGVcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyLCBQb3B1cEFmdGVyT3BlbiwgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi8uLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciwgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZywgWWVhckNvbmZpZywgTW9udGhDb25maWcsIERhdGV0aW1lQ29uZmlnLCBUaW1lQ29uZmlnLCBEYXRlQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbGlkYXRvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSldXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVcbiAgICAgICBleHRlbmRzIFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlcjxTdWlEYXRlcGlja2VyPlxuICAgICAgIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PERhdGU+LCBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgT25DaGFuZ2VzLCBQb3B1cEFmdGVyT3BlbiB7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RlZERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWREYXRlKGRhdGU6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW9kZTpEYXRlcGlja2VyTW9kZTtcbiAgICBwdWJsaWMgY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgQElucHV0KFwicGlja2VyTW9kZVwiKVxuICAgIHB1YmxpYyBnZXQgbW9kZSgpOkRhdGVwaWNrZXJNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtb2RlKG1vZGU6RGF0ZXBpY2tlck1vZGUpIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGUgfHwgRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5ZZWFyOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IFllYXJDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuTW9udGg6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgTW9udGhDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuRGF0ZTpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgRGF0ZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRldGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5UaW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IFRpbWVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlckluaXRpYWxEYXRlXCIpXG4gICAgcHVibGljIGluaXRpYWxEYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyTWF4RGF0ZVwiKVxuICAgIHB1YmxpYyBtYXhEYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyTWluRGF0ZVwiKVxuICAgIHB1YmxpYyBtaW5EYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyRmlyc3REYXlPZldlZWtcIilcbiAgICBwdWJsaWMgZmlyc3REYXlPZldlZWs/Om51bWJlcjtcblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcztcblxuICAgIEBJbnB1dChcInBpY2tlckxvY2FsZU92ZXJyaWRlc1wiKVxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcImRhdGVwaWNrZXJcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyUGxhY2VtZW50XCIpXG4gICAgcHVibGljIHNldCBwbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJUcmFuc2l0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25EdXJhdGlvblwiKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJQb3B1cFBhcmVudFwiKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBQYXJlbnQoZWxlbWVudDpFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBhcmVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQE91dHB1dChcInBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkRGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8RGF0ZT47XG5cbiAgICBAT3V0cHV0KFwicGlja2VyVmFsaWRhdG9yQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgU3VpRGF0ZXBpY2tlciwgbmV3IFBvcHVwQ29uZmlnKHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFBvcHVwVHJpZ2dlci5Gb2N1cyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogUG9zaXRpb25pbmdQbGFjZW1lbnQuQm90dG9tTGVmdCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGVcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMjAwXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHBvcHVwIGlzIGRyYXduIGNvcnJlY3RseSAoaS5lLiBubyBib3JkZXIpLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJ1aVwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwiY2FsZW5kYXJcIik7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkxvY2FsZVVwZGF0ZSgpKTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMubW9kZSA9IERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1cE9uT3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmxvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxlVmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmN1cnJlbnREYXRlID0gdGhpcy5pbml0aWFsRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5maXJzdERheU9mV2VlaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5vbkRhdGVDaGFuZ2Uuc3Vic2NyaWJlKChkOkRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoeyBtYXhEYXRlLCBtaW5EYXRlLCBtb2RlIH06U2ltcGxlQ2hhbmdlcyk6dm9pZCB7XG4gICAgICAgIGlmIChtYXhEYXRlIHx8IG1pbkRhdGUgfHwgbW9kZSkge1xuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9jYWxlVXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsZVZhbHVlcyA9IHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5kYXRlcGlja2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGMudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gV2UgcG9zdCBwcm9jZXNzIHRoZSBtaW4gJiBtYXggZGF0ZSBiZWNhdXNlIHNvbWV0aW1lcyB0aGlzIHB1dHMgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgYWxsb3dlZCByYW5nZS5cbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgdmFsdWUgPCB0aGlzLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWlNaW5EYXRlOiB7IHJlcXVpcmVkOiB0aGlzLm1pbkRhdGUsIGFjdHVhbDogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHZhbHVlID4gdGhpcy5tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWF4RGF0ZTogeyByZXF1aXJlZDogdGhpcy5tYXhEYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZ3VsYXIgZXhwZWN0cyBudWxsXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1udWxsLWtleXdvcmRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6RGF0ZSB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyU2VsZWN0ZWREYXRlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPERhdGUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIGhvc3Q6IHsgXCIocGlja2VyVmFsaWRhdG9yQ2hhbmdlKVwiOiBcIm9uVmFsaWRhdG9yQ2hhbmdlKClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbGlkYXRvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IgZXh0ZW5kcyBDdXN0b21WYWxpZGF0b3I8U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBob3N0OlN1aURhdGVwaWNrZXJEaXJlY3RpdmUpIHsgc3VwZXIoaG9zdCk7IH1cbn1cbiIsIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cFRyaWdnZXIgfSBmcm9tIFwiLi4vLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vZGF0ZXBpY2tlci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEludGVybmFsRGF0ZVBhcnNlciwgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBib3dzZXIgZnJvbSBcImJvd3NlclwiO1xuXG5pbXBvcnQgXCIuLi9oZWxwZXJzL2lzLXdlYnZpZXdcIjtcbmltcG9ydCAqIGFzIGlzVUFXZWJWaWV3IGZyb20gXCJpcy11YS13ZWJ2aWV3XCI7XG5jb25zdCBpc1dlYlZpZXcgPSBpc1VBV2ViVmlld1tcImRlZmF1bHRcIl0gfHwgaXNVQVdlYlZpZXc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImlucHV0W3N1aURhdGVwaWNrZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF91c2VOYXRpdmVPbk1vYmlsZTpib29sZWFuO1xuXG4gICAgQElucHV0KFwicGlja2VyVXNlTmF0aXZlT25Nb2JpbGVcIilcbiAgICBwdWJsaWMgZ2V0IHVzZU5hdGl2ZU9uTW9iaWxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHVzZU5hdGl2ZU9uTW9iaWxlKGZhbGxiYWNrOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGUgPSBmYWxsYmFjaztcbiAgICAgICAgY29uc3QgaXNPbk1vYmlsZSA9IGJvd3Nlci5tb2JpbGUgfHwgYm93c2VyLnRhYmxldCB8fCBpc1dlYlZpZXcobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlICYmIGlzT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgZmFsbGJhY2tBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmFsbGJhY2tBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZmFsbGJhY2tBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIC8vIElmIHRoZSBmYWxsYmFjayBpcyBhY3RpdmUsIHRoZW4gdGhlIHRyaWdnZXIgbXVzdCBiZSBtYW51YWwgc28gdGhlIGRhdGVwaWNrZXIgbmV2ZXIgb3BlbnMuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRoaXMuZmFsbGJhY2tBY3RpdmUgPyBQb3B1cFRyaWdnZXIuTWFudWFsIDogUG9wdXBUcmlnZ2VyLkZvY3VzO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlICh0aGlzIHdpbGwgaW5zZXJ0IHRoZSBgVGAgYXMgcmVxdWlyZWQpLlxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhcnNlcigpOkRhdGVQYXJzZXIge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRlcm5hbERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLm1vZGUsIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzLmZvcm1hdHNbdGhpcy5kYXRlcGlja2VyLm1vZGVdLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jdXJyZW50SW5wdXRWYWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVR5cGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZVN0cmluZygpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50eXBlXCIpXG4gICAgcHVibGljIGdldCB0eXBlKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIuY29uZmlnLmZhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInRleHRcIjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1heFwiKVxuICAgIHB1YmxpYyBnZXQgbWF4KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1heERhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtYXggaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gT3VyIERhdGVwaWNrZXIgd2lsbCBhbHdheXMgY2hvb3NlIHRoZSAxc3QgZGF0ZSBvbiB0aGUgcHJvdmlkZWQgcHJlY2lzaW9uLFxuICAgICAgICAgICAgLy8gbWVhbmluZyBhbnl0aGluZyBiZWxvdyB0aGUgbWF4RGF0ZSB3aWxsIHdvcmssIGhlbmNlIGVuZE9mLlxuICAgICAgICAgICAgY29uc3QgbWF4ID0gRGF0ZVV0aWwuZW5kT2YodGhpcy5kYXRlcGlja2VyLmNvbmZpZy5wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1heCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLm1pblwiKVxuICAgIHB1YmxpYyBnZXQgbWluKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUgJiYgdGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIEhUTUwgZG9lc24ndCB1c2UgYSBkYXRlIG9iamVjdCBtaW4gaXMgc29tZXdoYXQgdHJpY2t5LlxuICAgICAgICAgICAgLy8gV2UgdXNlIDEgbWludXRlIGJlZm9yZSB0aGUgbmV4dCBkYXRlIGF0IHRoZSBjb25maWd1cmVkIHByZWNpc2lvbiBzaW5jZVxuICAgICAgICAgICAgLy8gb3VyIERhdGVwaWNrZXIgcGlja3MgdGhlIGZpcnN0IGF2YWlsYWJsZSBkYXRlIGF0IHRoYXQgcHJlY2lzaW9uLlxuICAgICAgICAgICAgY29uc3QgbWluID0gRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1pbkRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtaW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgZGF0ZXBpY2tlcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgIEBIb3N0KCkgcHVibGljIHZhbHVlQWNjZXNzb3I6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnVzZU5hdGl2ZU9uTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZXMsIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dCBhbG9uZ3NpZGUgaXQuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5vblNlbGVjdGVkRGF0ZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcblxuICAgICAgICBsb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSBpZiBpdCBpcyBkaWZmZXJlbnQgdG8gd2hhdCBpdCdzIGJlaW5nIHVwZGF0ZWQgdG8uXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCB0aGUgZWRpdGluZyBwb3NpdGlvbiBpc24ndCBjaGFuZ2VkIHdoZW4gbWFudWFsbHkgdHlwaW5nIHRoZSBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuX2xhc3RVcGRhdGVUeXBlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHZhbHVlIHx8IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXG4gICAgcHVibGljIHR5cGVWYWx1ZSh2YWx1ZTpzdHJpbmcgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyZW50SW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgc2VsZWN0ZWQgZGF0ZSBpZiBubyBkYXRlIHdhcyBlbnRlcmVkIG1hbnVhbGx5LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlci5wYXJzZSh2YWx1ZSwgdGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VkLmdldFRpbWUoKSkgJiYgdmFsdWUgPT09IHRoaXMucGFyc2VyLmZvcm1hdChwYXJzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUocGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iub25Ub3VjaGVkKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VEYXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICBjb25zdCBtb250aFN0YXJ0ID0gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLk1vbnRoLCBEYXRlVXRpbC5jbG9uZShzdGFydCkpO1xuICAgICAgICBtb250aFN0YXJ0LnNldERhdGUoKDEgLSBtb250aFN0YXJ0LmdldERheSgpICsgdGhpcy5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrIC0gNykgJSA3KTtcbiAgICAgICAgcmV0dXJuIG1vbnRoU3RhcnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBpdGVtLmRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0TW9udGgoKSAhPT0gYmFzZURhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgaXRlbS5pc1NlbGVjdGFibGUgPSBpdGVtLmlzRGlzYWJsZWQ7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItZGF0ZS12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBzZXZlbiBjb2x1bW4gZGF5XCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjdcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIj57eyBkYXkgfX08L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckRhdGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRheXMoKTpzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLndlZWtkYXlzTmFycm93O1xuICAgICAgICByZXR1cm4gZGF5cy5tYXAoKGQsIGkpID0+IGRheXNbKGkgKyB0aGlzLnNlcnZpY2UuZmlyc3REYXlPZldlZWspICUgZGF5cy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLm1vbnRoLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkRhdGUsIG5ldyBDYWxlbmRhclJhbmdlRGF0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Nb250aCwgNiwgNykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgY29uc3QgY3VzdG9tRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcihjdXN0b21Gb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItaG91ci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBmb3VyIGNvbHVtbiBob3VyXCI+XG48dGhlYWQgKm5nSWY9XCJzZXJ2aWNlLmNvbmZpZy5tb2RlICE9IDFcIj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJIb3VyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuSG91ciwgbmV3IENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZShEYXRlUHJlY2lzaW9uLkRhdGUsIDYsIDQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VNaW51dGVTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjYWxjU3RhcnQoc3RhcnQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uSG91ciwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY0RhdGVzKHN0YXJ0OkRhdGUpOkRhdGVbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLkFycmF5XG4gICAgICAgICAgICAucmFuZ2UodGhpcy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKGkgPT4gRGF0ZVV0aWwuYWRkKERhdGVQcmVjaXNpb24uTWludXRlLCBEYXRlVXRpbC5jbG9uZShzdGFydCksIGkgKiA1KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZSwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KGl0ZW0uZGF0ZSk7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1taW51dGUtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1pbnV0ZVwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI0XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhck1pbnV0ZVZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29uZmlnLm1vZGUgIT09IENhbGVuZGFyTW9kZS5UaW1lT25seSkge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWVGb3JtYXQ6c3RyaW5nID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGV0aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKGRhdGVUaW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgICAgICBjb25zdCB0aW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRpbWVGb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIG5ldyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZShEYXRlUHJlY2lzaW9uLkhvdXIsIDQsIDMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5tb250aHNTaG9ydFtpdGVtLmRhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1tb250aC12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4gbW9udGhcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNb250aFZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgeWVhcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMueWVhciwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgbmV3IENhbGVuZGFyUmFuZ2VNb250aFNlcnZpY2UoRGF0ZVByZWNpc2lvbi5ZZWFyLCA0LCAzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBVdGlsLlN0cmluZy5wYWRMZWZ0KGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpID49IHRoaXMuY2FsY1N0YXJ0KGJhc2VEYXRlKS5nZXRGdWxsWWVhcigpICsgMTA7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXIteWVhci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4geWVhclwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYWQoZGVjYWRlU3RhcnQpIH19IC0ge3sgcGFkKGRlY2FkZVN0YXJ0ICsgMTApIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclllYXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRlY2FkZVN0YXJ0KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsXG4gICAgICAgICAgICAuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkRlY2FkZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSlcbiAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBuZXcgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGVjYWRlLCA0LCAzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZCh5ZWFyOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuU3RyaW5nLnBhZExlZnQoeWVhci50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVBvcHVwTW9kdWxlIH0gZnJvbSBcIi4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyVmlld1RpdGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWxlbmRhci12aWV3LXRpdGxlXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclllYXJWaWV3IH0gZnJvbSBcIi4vdmlld3MveWVhci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1vbnRoVmlldyB9IGZyb20gXCIuL3ZpZXdzL21vbnRoLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJEYXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL2RhdGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJIb3VyVmlldyB9IGZyb20gXCIuL3ZpZXdzL2hvdXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvbWludXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1xuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3Jcbn0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNhbGVuZGFySXRlbSxcblxuICAgICAgICBTdWlDYWxlbmRhclZpZXdUaXRsZSxcbiAgICAgICAgU3VpQ2FsZW5kYXJZZWFyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNb250aFZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyRGF0ZVZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFySG91clZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTWludXRlVmlldyxcblxuICAgICAgICBTdWlEYXRlcGlja2VyLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtjbGFzcy5jb250ZW50XT1cIndyYXBDb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LmRpbW1lcjpub3QoLmhpZGRlbikge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGltbWVyIGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBwcml2YXRlIF9pc0RpbW1lZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpbW1lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGltbWVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXNEaW1tZWQgPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5IHdoZW4gZmlyc3Qgc2V0dGluZyBkaW1tZWQsIHRvIGVuc3VyZSBpbml0aWFsIHN0YXRlIGRvZXNuJ3QgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGlzRGltbWVkLCBcImJsb2NrXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0RpbW1lZCAhPT0gaXNEaW1tZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcImZhZGVcIiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIGlzRGltbWVkID8gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiA6IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDbGlja2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8qIEludGVybmFsIGZvciBub3cgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3cmFwQ29udGVudDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy53cmFwQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZS5lbWl0KHRoaXMuaXNEaW1tZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpbW1lclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpRGltbWVyXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURpbW1lclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGltbWVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSBcIml0ZW1DbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZGlzYWJsZWRcIjtcblxuLy8gQ3JlYXRlcyBlc3NlbnRpYWxseSBhICdzdHJpbmcnIGVudW0uXG5leHBvcnQgY29uc3QgRHJvcGRvd25BdXRvQ2xvc2VUeXBlID0ge1xuICAgIEl0ZW1DbGljazogXCJpdGVtQ2xpY2tcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGUsXG4gICAgT3V0c2lkZUNsaWNrOiBcIm91dHNpZGVDbGlja1wiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSxcbiAgICBEaXNhYmxlZDogXCJkaXNhYmxlZFwiIGFzIERyb3Bkb3duQXV0b0Nsb3NlVHlwZVxufTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZSB7XG4gICAgLy8gT3BlbiBzdGF0ZSBvZiB0aGUgZHJvcGRvd25cbiAgICBwdWJsaWMgaXNPcGVuOmJvb2xlYW47XG4gICAgLy8gQW5pbWF0aW5nIHN0YXRlIG9mIHRoZSBkcm9wZG93bi5cbiAgICBwdWJsaWMgaXNBbmltYXRpbmc6Ym9vbGVhbjtcbiAgICAvLyBFbWl0dGVyIGZvciB3aGVuIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlcy5cbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICAvLyBTZXRzIHRoZSBcImF1dG9jbG9zZVwiIG1vZGUgb2YgdGhlIGRyb3Bkb3duIC0gaS5lLiB3aGF0IHVzZXIgYWN0aW9uIGNhdXNlcyBpdCB0byBhdXRvY2xvc2UuXG4gICAgcHVibGljIGF1dG9DbG9zZU1vZGU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlO1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY29udGFpbmluZyBkcm9wZG93biBzbyB3ZSBjYW4gb3BlbiBpdCBhcyBuZWNlc3NhcnkuXG4gICAgcHVibGljIHBhcmVudD86RHJvcGRvd25TZXJ2aWNlO1xuICAgIC8vIEFsc28ga2VlcCB0cmFjayBvZiBkcm9wZG93bnMgbmVzdGVkIGluIHRoaXMgb25lIHNvIHdlIGNhbiBjbG9zZSB0aGVtIGFzIG5lY2Vzc2FyeS5cbiAgICBwdWJsaWMgY2hpbGRyZW46RHJvcGRvd25TZXJ2aWNlW107XG4gICAgcHVibGljIGdldCBpc05lc3RlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLnBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRvQ2xvc2VNb2RlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2spIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hdXRvQ2xvc2VNb2RlID0gYXV0b0Nsb3NlTW9kZTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9wZW5TdGF0ZShpc09wZW46Ym9vbGVhbiwgcmVmbGVjdEluUGFyZW50OmJvb2xlYW4gPSBmYWxzZSk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAhPT0gaXNPcGVuICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBzdGF0ZSBpZiBpdCBoYXMgY2hhbmdlZCwgYW5kIHRoZSBkcm9wZG93biBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gISFpc09wZW47XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFdlIG11c3QgZGVsYXkgdGhlIGVtaXR0aW5nIHRvIGF2b2lkIHRoZSAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBBbmd1bGFyIGVycm9ycy5cbiAgICAgICAgICAgIHRoaXMuZGVsYXkoKCkgPT4gdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbikpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGNoaWxkIGRyb3Bkb3ducyB3aGVuIHRoaXMgb25lIGNsb3Nlcy5cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiBjLnNldE9wZW5TdGF0ZSh0aGlzLmlzT3BlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgcmVmbGVjdEluUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgcGFyZW50IGRyb3Bkb3ducyB3aGVuIHRoaXMgb25lIG9wZW5zLlxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnNldE9wZW5TdGF0ZSh0aGlzLmlzT3BlbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4gIT09IGlzT3BlbiAmJiB0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdGF0ZSBoYXMgY2hhbmdlZCwgYnV0IHRoZSBkcm9wZG93biBpcyBkaXNhYmxlZCwgcmUtZW1pdCB0aGUgb3JpZ2luYWwgaXNPcGVuIHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZWxheSgoKSA9PiB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkICE9PSBpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAoISFpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIGFzIGl0IGlzIG5vdyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gISFpc0Rpc2FibGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZU9wZW5TdGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSghdGhpcy5pc09wZW4pO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGRyb3Bkb3duIHNlcnZpY2UgYXMgYSBjaGlsZCBvZiB0aGlzIHNlcnZpY2UuXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hpbGQoY2hpbGQ6RHJvcGRvd25TZXJ2aWNlKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkKSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmUgbWV0aG9kIHRvIGNoZWNrIGlmIHRoZSBwcm92aWRlZCBkcm9wZG93biBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYXMgYSBjaGlsZCwgb3IgaXMgYSBkZXNjZW5kYW50IG9mIGEgY2hpbGQuXG4gICAgcHVibGljIGlzQ2hpbGRSZWdpc3RlcmVkKGNoaWxkOkRyb3Bkb3duU2VydmljZSk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBjaGlsZCB8fCAhIXRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgIC5maW5kKGMgPT4gISFjLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgLmZpbmQoY0NoaWxkID0+IGNDaGlsZC5pc0NoaWxkUmVnaXN0ZXJlZChjaGlsZCkpKTtcbiAgICB9XG5cbiAgICAvLyBXaXBlcyBhbnkgbmVzdGVkIGRhdGEsIHNvIGFsbCBzZXJ2aWNlcyBjYW4gYmUgY2xlYW5seSByZWF0dGFjaGVkLlxuICAgIHB1YmxpYyBjbGVhckNoaWxkcmVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGMucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCBmb3IgZGVsYXlpbmcgYW4gZXZlbnQgaW50byB0aGUgbmV4dCB0aWNrLCB0byBhdm9pZCBBbmd1bGFyIFwiY2hhbmdlZCBhZnRlciBjaGVja2VkXCIgZXJyb3IuXG4gICAgcHJpdmF0ZSBkZWxheShjYWxsYmFjazooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgQ29udGVudENoaWxkLCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIElucHV0LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgSUF1Z21lbnRlZEVsZW1lbnQsIEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG4vLyBQb2x5ZmlsbCBmb3IgSUVcbmltcG9ydCBcImVsZW1lbnQtY2xvc2VzdFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICAvLyBXZSBtdXN0IGF0dGFjaCB0byBldmVyeSAnLml0ZW0nIGFzIEFuZ3VsYXIgZG9lc24ndCBzdXBwb3J0ID4gc2VsZWN0b3JzLlxuICAgIHNlbGVjdG9yOiBcIi5pdGVtXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFdlIG11c3QgdXNlIG5hdGl2ZUVsZW1lbnQgYXMgQW5ndWxhciBkb2Vzbid0IGhhdmUgYSB3YXkgb2YgcmVhZGluZyBjbGFzcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU2VsZWN0ZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2VsZWN0ZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBSZW5kZXJlciBpcyB1c2VkIHRvIGVuYWJsZSBhIGR5bmFtaWMgY2xhc3MgbmFtZS5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjbGFzcyBuYW1lIHVzZWQgZm9yIGEgJ3NlbGVjdGVkJyBpdGVtLlxuICAgIHB1YmxpYyBzZWxlY3RlZENsYXNzOnN0cmluZztcblxuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBTdWlEcm9wZG93bk1lbnUpKVxuICAgIHB1YmxpYyBjaGlsZERyb3Bkb3duTWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0NoaWxkRHJvcGRvd24oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jaGlsZERyb3Bkb3duTWVudTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZFwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25NZW51XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudSBleHRlbmRzIFN1aVRyYW5zaXRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpEcm9wZG93blNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2UodmFsdWU6RHJvcGRvd25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSB2YWx1ZTtcblxuICAgICAgICBsZXQgcHJldmlvdXNJc09wZW4gPSB0aGlzLl9zZXJ2aWNlLmlzT3BlbjtcbiAgICAgICAgdGhpcy5fc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKChpc09wZW46Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAhPT0gcHJldmlvdXNJc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJ1biB0cmFuc2l0aW9ucyBpZiB0aGUgb3BlbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLl9zZXJ2aWNlLmlzQW5pbWF0aW5nID0gZmFsc2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgaXRlbSBzZWxlY3Rpb25zIHdoZW4gYSBuZXN0ZWQgaXRlbSBpcyBzZWxlY3RlZCB0byBhdm9pZCBpbmNvc2lzdGVudCBvcGVuIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldmlvdXNJc09wZW4gPSBpc09wZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFyZW50RWxlbWVudCh2YWx1ZTpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKHZhbHVlLm5hdGl2ZUVsZW1lbnQsIFwia2V5ZG93blwiLCAoZTpLZXlib2FyZEV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25QYXJlbnRLZXlEb3duKGUpKTtcbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duTWVudUl0ZW0pXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeUludGVybmFsOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlPdmVycmlkZTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPikge1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgPSBpdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXRlbXNRdWVyeSgpOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgfHwgdGhpcy5faXRlbXNRdWVyeUludGVybmFsO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBpdGVtcywgaWdub3JpbmcgdGhvc2UgdGhhdCBhcmUgZGlzYWJsZWQuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zKCk6U3VpRHJvcGRvd25NZW51SXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnkuZmlsdGVyKGkgPT4gIWkuaXNEaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgLy8gU3RhY2sgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgLy8gU2VsZWN0ZWQgaXRlbXMgbG93ZXIgaW4gdGhlIHN0YWNrIGFyZSBuZWNlc3NhcmlseSB0aGUgcGFyZW50IG9mIHRoZSBpdGVtIG9uZSBoaWdoZXIuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXM6U3VpRHJvcGRvd25NZW51SXRlbVtdO1xuXG4gICAgLy8gU2V0cyB3aGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IHNlbGVjdCB0aGUgMXN0IGl0ZW0gd2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbmVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVBdXRvU2VsZWN0Rmlyc3Q6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVTZWxlY3RlZEl0ZW1DbGFzczpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9wYXJlbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuXG4gICAgICAgIHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcyA9IFwic2VsZWN0ZWRcIjtcblxuICAgICAgICAvLyBJbiBjYXNlIHRoZSBkcm9wZG93biBtZW51IGlzIGRlc3Ryb3llZCBiZWZvcmUgaXQgaGFzIGEgY2hhbmNlIHRvIGJlIGZ1bGx5IGluaXRpYWxpc2VkLlxuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50ICYgTW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIElBdWdtZW50ZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKSkgJiYgIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uY2UgYW4gaXRlbSBpcyBzZWxlY3RlZCwgd2UgY2FuIGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRLZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdGhlIHJvb3QgZHJvcGRvd24gKGkuZS4gbm90IG5lc3RlZCBkcm9wZG93bnMpIGlzIHJlc3BvbnNpYmxlIGZvciBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgJiYgdGhpcy5fc2VydmljZS5pc09wZW4gJiYgIXRoaXMuX3NlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZG9jdW1lbnQgZXZlbnRzIGxpa2Ugc2Nyb2xsaW5nIHdoaWxlIG9wZW4uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCEvaW5wdXQvaS50ZXN0KHRhcmdldC50YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgIFtLZXlDb2RlLkVzY2FwZSwgS2V5Q29kZS5FbnRlciwgS2V5Q29kZS5VcCwgS2V5Q29kZS5Eb3duLCBLZXlDb2RlLkxlZnQsIEtleUNvZGUuUmlnaHRdLmZpbmQoa0MgPT4ga0MgPT09IGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldHMgdGhlIHRvcCBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHN0YWNrLlxuICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBtZW51IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IGFsbG93cyB1cyB0byBlYXNpbHkgZGV0ZXJtaW5lIGl0cyBzaWJsaW5ncy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbnRhaW5lcjpTdWlEcm9wZG93bk1lbnUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29udGFpbmVyID0gc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIDogY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvd24gOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBiZWxvdyB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICAvLyBVcCA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGFib3ZlIHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkQ29udGFpbmVyLnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGluIGFuIGlucHV0LCB0byBzdG9wIGp1bXBpbmcgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbnRlciA6IGlmIHRoZSBpdGVtIGRvZXNuJ3QgY29udGFpbiBhIG5lc3RlZCBkcm9wZG93biwgJ2NsaWNrJyBpdC4gT3RoZXJ3aXNlLCBmYWxsIHRocm91Z2ggdG8gJ1JpZ2h0JyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucGVyZm9ybUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gY29udGFpbnMgYSBuZXN0ZWQgZHJvcGRvd24sIG9wZW4gdGhlIGRyb3Bkb3duICYgc2VsZWN0IHRoZSAxc3QgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gYSBuZXN0ZWQgZHJvcGRvd24sIGNsb3NlIGl0IGFuZCBzZWxlY3QgdGhlIGNvbnRhaW5pbmcgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2VsZWN0aW9uKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5zZWxlY3RlZENsYXNzID0gdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3M7XG4gICAgICAgICAgICBpLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBdXRvc2VsZWN0IDFzdCBpdGVtIGlmIHJlcXVpcmVkICYgcG9zc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1swXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2l0ZW1zUXVlcnkuZmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaXRlbSB0byBuZXh0IGJlIHNlbGVjdGVkLCBiYXNlZCBvbiB0aGUga2V5Ym9hcmQgaW5wdXQgJiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZEl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSwga2V5Q29kZTpLZXlDb2RlKTpTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2l0ZW1zXG4gICAgICAgICAgICAuZmluZEluZGV4KGkgPT4gaSA9PT0gc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOlN1aURyb3Bkb3duTWVudUl0ZW07XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vbmUgYXJlIHNlbGVjdGVkLCBzZWxlY3QgdGhlIDFzdCBpdGVtLiBTaG91bGQgdGhpcyBiZSBgdGhpcy5pdGVtcy5sYXN0IC0gMWA/XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHVwZGF0ZWQgaW5kZXguIFRoZSB8fCBpcyB0byBzdG9wIHVzIHNlbGVjdGluZyBwYXN0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGl0ZW0gbGlzdC5cbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5faXRlbXNbc2VsZWN0ZWRJbmRleF0gfHwgc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudTpFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlY3Q6Q2xpZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID0gMDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LmJvdHRvbSAtIG1lbnVSZWN0LmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QudG9wIC0gbWVudVJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zY3JvbGxUb3AgKz0gTWF0aC5yb3VuZChzY3JvbGxBbW91bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25JdGVtc0NoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSB1c2UgYF9pdGVtc2AgcmF0aGVyIHRoYW4gYGl0ZW1zYCBpbiBjYXNlIG9uZSBvciBtb3JlIGhhdmUgYmVjb21lIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsXG4gICAgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBLZXlDb2RlLCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuL2Ryb3Bkb3duLW1lbnVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46UXVlcnlMaXN0PFN1aURyb3Bkb3duPjtcblxuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTpTdWlEcm9wZG93bltdIHtcbiAgICAgICAgLy8gQENvbnRlbnRDaGlsZHJlbiBpbmNsdWRlcyB0aGUgY3VycmVudCBlbGVtZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoYyA9PiBjICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbkNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0byBlbnN1cmUgbmVzdGVkIGRyb3Bkb3ducyBkb24ndCBnZXQgbWFkZSBib2xkLlxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5zZXJ2aWNlLmlzTmVzdGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc09wZW4odmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgb3BlbmluZyB0aGUgZHJvcGRvd24sIHdlIHdhbnQgdG8gYWx3YXlzIG9wZW4gaXRzIHBhcmVudHMuXG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodmFsdWUsICEhdmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXREaXNhYmxlZFN0YXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJJbmRleCgpOm51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy5zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBJZiBkaXNhYmxlZCwgcmVtb3ZlIGZyb20gdGFiaW5kZXguXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGN1c3RvbSB0YWJpbmRleCwgZGVmYXVsdCB0byB0aGF0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGRlZmF1bHQgb2YgMC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGF1dG9DbG9zZSgpOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dG9DbG9zZSh2YWx1ZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3Qgc2V0IFtzdWlEcm9wZG93bk1lbnVdIG9uIHRoZSBtZW51IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICAgICAgdGhpcy5fbWVudS5wYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5jaGFuZ2VzXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hpbGRyZW5VcGRhdGVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hpbGRyZW5VcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlcmVnaXN0ZXIgY2hpbGQgZHJvcGRvd25zIGVhY2ggdGltZSB0aGUgbWVudSBjb250ZW50IGNoYW5nZXMuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnNlcnZpY2UpXG4gICAgICAgICAgICAuZm9yRWFjaChzID0+IHRoaXMuc2VydmljZS5yZWdpc3RlckNoaWxkKHMpKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlT3BlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsbHlDbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlwcmVzcyhlOkhhbmRsZWRFdmVudCAmIEtleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBCbG9jayB0aGUga2V5Ym9hcmQgZXZlbnQgZnJvbSBiZWluZyBmaXJlZCBvbiBwYXJlbnQgZHJvcGRvd25zLlxuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRlcm5hbGx5Q2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHJlZmxlY3QgaW4gcGFyZW50IHNpbmNlIHRoZXkgYXJlIGFsc28gYm91bmQgdG8gZG9jdW1lbnQuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUsIFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRHJvcGRvd24sXG4gICAgICAgIFN1aURyb3Bkb3duTWVudSxcbiAgICAgICAgU3VpRHJvcGRvd25NZW51SXRlbVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZyB9IGZyb20gXCIuL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuXG4vLyBIZWxwZXIgY2xhc3MgdG8gc3VwcG9ydCBtZXRob2QgY2hhaW5pbmcgd2hlbiBjYWxsaW5nIGBTdWlNb2RhbFNlcnZpY2Uub3BlbiguLi4pYC5cbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOk1vZGFsQ29uZmlnPFQsIFUsIFY+O1xuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpTW9kYWw8VSwgVj4+O1xuXG4gICAgLy8gU2hvcnRoYW5kIGZvciBkaXJlY3QgYWNjZXNzIHRvIHRoZSBgU3VpTW9kYWxgIGluc3RhbmNlLlxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50KCk6U3VpTW9kYWw8VSwgVj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlOk1vZGFsQ29uZmlnPFQsIFUsIFY+LCBjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+Pikge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgZGVzdHJveSB0aGUgbW9kYWwgY29tcG9uZW50IHdoZW4gaXQgaGFzIGJlZW4gZGlzbWlzc2VkLlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkRpc21pc3Muc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkFwcHJvdmVgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkFwcHJvdmUoY2FsbGJhY2s6KHJlc3VsdDpVKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uQXBwcm92ZS5zdWJzY3JpYmUoKHJlczpVKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZm9yIHdoZW4gYG9uRGVueWAgaXMgZmlyZWQuXG4gICAgcHVibGljIG9uRGVueShjYWxsYmFjazoocmVzdWx0OlYpID0+IHZvaWQpOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EZW55LnN1YnNjcmliZSgocmVzOlYpID0+IGNhbGxiYWNrKHJlcykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB0aGUgYXBwcm92ZSBldmVudCBvZiB0aGUgbW9kYWwgbWFudWFsbHkuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlUpOnZvaWQge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHByb3ZlKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGRlbnkgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBkZW55KHJlc3VsdDpWKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGVueShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG1vZGFsIGNvbXBvbmVudCBpbnN0YW50bHksIHdpdGhvdXQgdHJhbnNpdGlvbnMgb3IgZmlyaW5nIGFueSBldmVudHMuXG4gICAgcHVibGljIGRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsVGVtcGxhdGUgfSBmcm9tIFwiLi9tb2RhbC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgdHlwZSBNb2RhbFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJub3JtYWxcIiB8IFwibGFyZ2VcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsU2l6ZSA9IHtcbiAgICBNaW5pOiBcIm1pbmlcIiBhcyBNb2RhbFNpemUsXG4gICAgVGlueTogXCJ0aW55XCIgYXMgTW9kYWxTaXplLFxuICAgIFNtYWxsOiBcInNtYWxsXCIgYXMgTW9kYWxTaXplLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIiBhcyBNb2RhbFNpemUsXG4gICAgTGFyZ2U6IFwibGFyZ2VcIiBhcyBNb2RhbFNpemVcbn07XG5cbi8vIFN0b3JlcyBhIGJhc2ljIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgbW9kYWwuXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4ge1xuICAgIC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kYWwgY2FuIGJlIGNsb3NlZCB3aXRoIGEgY2xvc2UgYnV0dG9uLCBjbGlja2luZyBvdXRzaWRlLCBvciB0aGUgZXNjYXBlIGtleS5cbiAgICBwdWJsaWMgaXNDbG9zYWJsZTpib29sZWFuO1xuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VjtcblxuICAgIC8vIERhdGEgdG8gcGFzcyB0byB0aGUgbW9kYWwgaW5zdGFuY2Ugd2hlbiBvcGVuZWQuXG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uXG4gICAgcHVibGljIGlzRnVsbFNjcmVlbjpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwdWJsaWMgaXNJbnZlcnRlZDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSBjZW50ZXIgb2YgdGhlIHBhZ2UuXG4gICAgcHVibGljIGlzQ2VudGVyZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHVibGljIG11c3RTY3JvbGw6Ym9vbGVhbjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICAvLyBEdXJhdGlvbiBvZiB0aGUgbW9kYWwgJiBkaW1tZXIgdHJhbnNpdGlvbnMuXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgbW9kYWxQYXJlbnQ6RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsIi8vIFNob3J0aGFuZCB0byBhdm9pZCB3cml0aW5nIGFycm93IHR5cGVzIGV2ZXJ5d2hlcmUuXG5leHBvcnQgdHlwZSBNb2RhbFJlc3VsdDxUPiA9IChyZXN1bHQ6VCkgPT4gdm9pZDtcblxuLy8gVXNlZCB0byBwYXNzIGFiaWxpdHkgdG8gY29udHJvbCBhIG1vZGFsIHRvIGEgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbHM8VCwgVT4ge1xuICAgIGNvbnN0cnVjdG9yKGFwcHJvdmU6TW9kYWxSZXN1bHQ8VD4sIGRlbnk6TW9kYWxSZXN1bHQ8VT4pIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlID0gYXBwcm92ZTtcbiAgICAgICAgdGhpcy5kZW55ID0gZGVueTtcbiAgICB9XG5cbiAgICAvLyBVc2UgbWV0aG9kIGhlcmUgcmF0aGVyIHRoYW4gYXJyb3cgdmFyaWFibGVzIHRvIG1ha2UgaW50ZWxsaXNlbnNlIHNob3cgdGhleSdyZSBtZXRob2RzLlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpUKTp2b2lkIHt9XG4gICAgcHVibGljIGRlbnkocmVzdWx0OlUpOnZvaWQge31cbn1cblxuLy8gSW5qZWN0ZWQgaW50byBjdXN0b20gbW9kYWwgY29tcG9uZW50cywgdG8gYWxsb3cgY29udHJvbCBvZiB0aGUgbW9kYWwsIGFuZCBhY2Nlc3MgdG8gYSBjb250ZXh0IG9iamVjdC5cbmV4cG9ydCBjbGFzcyBNb2RhbDxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29udHJvbHM8VSwgVj4ge1xuICAgIHB1YmxpYyBjb250ZXh0OlQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczpNb2RhbENvbnRyb2xzPFUsIFY+LCBjb250ZXh0OlQpIHtcbiAgICAgICAgLy8gSW5zdGFuY2VzIG9mIGBNb2RhbENvbnRyb2xzYCBhcmUgb25seSBjcmVhdGVkIGluIHRoZSBgU3VpTW9kYWxgIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyBzbyB3ZSB0YWtlIGFuIGluaXRpYWxpc2VkIGluc3RhbmNlIHJhdGhlciB0aGFuIHJlbWFraW5nIG9uZSBlYWNoIHRpbWUuXG4gICAgICAgIHN1cGVyKGNvbnRyb2xzLmFwcHJvdmUsIGNvbnRyb2xzLmRlbnkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scyB9IGZyb20gXCIuL21vZGFsLWNvbnRyb2xzXCI7XG5cbi8vIFNob3J0aGFuZCBmb3IgYSBtb2RhbCB0ZW1wbGF0ZS4gU2V0cyB1cCBhYmlsaXR5IHRvIHdyaXRlOiBgPG5nLXRlbXBsYXRlIGxldC1jb250ZXh0IGxldC1tb2RhbD1cIm1vZGFsXCI+Li4uPC9uZy10ZW1wbGF0ZT5gXG4vLyBXZSB1c2UgYW4gYWJzdHJhY3QgY2xhc3MgYXMgTW9kYWxUZW1wbGF0ZSB0ZW5kcyB0byBiZSB1c2VkIHdpdGhpbiBkZWNvcmF0ZWQgcHJvcGVydGllcywgd2hpY2ggbWVhbnMgaXQgbmVlZHMgdG8gZXhpc3QhXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kYWxUZW1wbGF0ZTxULCBVLCBWPiBleHRlbmRzIFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OlQ7IG1vZGFsOk1vZGFsQ29udHJvbHM8VSwgVj4gfT4ge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBBZnRlclZpZXdJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJRHluYW1pY0NsYXNzZXMsIEtleUNvZGUsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzLCBNb2RhbFJlc3VsdCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxTaXplIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFBhZ2UgZGltbWVyIGZvciBtb2RhbCBiYWNrZ3JvdW5kLiAtLT5cbjxzdWktbW9kYWwtZGltbWVyIFtuZ0NsYXNzXT1cInsndG9wIGFsaWduZWQnOiAhaXNDZW50ZXJlZH1cIiBcbiAgICAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgICAgIFsoaXNEaW1tZWQpXT1cImRpbUJhY2tncm91bmRcIlxuICAgICAgICAgICAgW3RyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIj5cblxuICAgIDwhLS0gTW9kYWwgY29tcG9uZW50LCB3aXRoIHRyYW5zaXRpb24gY29tcG9uZW50IGF0dGFjaGVkIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtb2RhbFwiXG4gICAgICAgICBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiXG4gICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRyYW5zaXRpb25Db250cm9sbGVyPy5pc1Zpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsU2NyZWVuXCJcbiAgICAgICAgIFtjbGFzcy5iYXNpY109XCJpc0Jhc2ljXCJcbiAgICAgICAgIFtjbGFzcy5zY3JvbGxpbmddPVwibXVzdFNjcm9sbFwiXG4gICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICNtb2RhbD5cblxuICAgICAgICA8IS0tIENvbmZpZ3VyYWJsZSBjbG9zZSBpY29uIC0tPlxuICAgICAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzQ2xvc2FibGUgJiYgaXNGdWxsU2NyZWVuXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2k+XG4gICAgICAgIDwhLS0gPG5nLWNvbnRlbnQ+IHNvIHRoYXQgPHN1aS1tb2RhbD4gY2FuIGJlIHVzZWQgYXMgYSBub3JtYWwgY29tcG9uZW50LiAtLT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tIEBWaWV3Q2hpbGQgcmVmZXJlbmNlIHNvIHdlIGNhbiBpbnNlcnQgZWxlbWVudHMgYmVzaWRlIHRoaXMgZGl2LiAtLT5cbiAgICAgICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zdWktbW9kYWwtZGltbWVyPlxuYCxcbiAgICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWw8VCwgVT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VTtcblxuICAgIC8vIFNlcGFyYXRlIGNsYXNzIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgbWV0aG9kcyB0byBzdXBwb3J0IHBhc3NpbmcgaW50byBjb21wb25lbnRzLlxuICAgIHB1YmxpYyBjb250cm9sczpNb2RhbENvbnRyb2xzPFQsIFU+O1xuXG4gICAgcHVibGljIGdldCBhcHByb3ZlKCk6TW9kYWxSZXN1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5hcHByb3ZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVueSgpOk1vZGFsUmVzdWx0PFU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZGVueTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBhcHByb3ZlYCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImFwcHJvdmVkXCIpXG4gICAgcHVibGljIG9uQXBwcm92ZTpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImRlbmllZFwiKVxuICAgIHB1YmxpYyBvbkRlbnk6RXZlbnRFbWl0dGVyPFU+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLlxuICAgIEBPdXRwdXQoXCJkaXNtaXNzZWRcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBWaWV3Q2hpbGQoXCJtb2RhbFwiKVxuICAgIHByaXZhdGUgX21vZGFsRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDZW50ZXJlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwcml2YXRlIF9pc0Z1bGxTY3JlZW46Ym9vbGVhbjtcblxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNGdWxsU2NyZWVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Z1bGxTY3JlZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Z1bGxTY3JlZW4oZnVsbFNjcmVlbjpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRnVsbFNjcmVlbiA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmdWxsU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIGN1cnJlbnRseSBpcyBkaXNwbGF5aW5nIGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RTY3JvbGw6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RBbHdheXNTY3JvbGw6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtdXN0U2Nyb2xsKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXN0U2Nyb2xsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbXVzdFNjcm9sbChtdXN0U2Nyb2xsOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIC8vICdDYWNoZScgdmFsdWUgaW4gX211c3RBbHdheXNTY3JvbGwgc28gdGhhdCBpZiBgdHJ1ZWAsIF9tdXN0U2Nyb2xsIGlzbid0IGV2ZXIgYXV0by11cGRhdGVkLlxuICAgICAgICB0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwcml2YXRlIF9pc0ludmVydGVkOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNJbnZlcnRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZlcnRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIGJhY2tyb3VuZCBkaW1tZXIgaXMgYWN0aXZlLlxuICAgIHB1YmxpYyBkaW1CYWNrZ3JvdW5kOmJvb2xlYW47XG4gICAgLy8gVHJ1ZSBhZnRlciBgYXBwcm92ZWAgb3IgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBwcml2YXRlIF9pc0Nsb3Npbmc6Ym9vbGVhbjtcblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgLy8gUGFyZW50IGVsZW1lbnQgb2YgbW9kYWwgYmVmb3JlIHJlbG9jYXRpb24gdG8gZG9jdW1lbnQgYm9keS5cbiAgICBwcml2YXRlIF9vcmlnaW5hbENvbnRhaW5lcj86RWxlbWVudDtcblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tIGBNb2RhbENvbmZpZ2AgKHRvIGF2b2lkIHdyaXRpbmcgZGVmYXVsdHMgdHdpY2UpLlxuICAgICAgICBjb25zdCBjb25maWcgPSBuZXcgTW9kYWxDb25maWc8dW5kZWZpbmVkLCBULCBVPigpO1xuICAgICAgICB0aGlzLmxvYWRDb25maWcoY29uZmlnKTtcblxuICAgICAgICAvLyBFdmVudCBlbWl0dGVycyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgbW9kYWwgb3V0Y29tZXMuXG4gICAgICAgIHRoaXMub25BcHByb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uRGVueSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBjb250cm9scyB3aXRoIGFjdGlvbnMgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBjYXNlcy5cbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBNb2RhbENvbnRyb2xzPFQsIFU+KFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uQXBwcm92ZS5lbWl0KHJlcykpLFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uRGVueS5lbWl0KHJlcykpKTtcblxuICAgICAgICAvLyBJbnRlcm5hbCB2YXJpYWJsZSBpbml0aWFsaXNhdGlvbi5cbiAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgdmlzaWJsZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpbUJhY2tncm91bmQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIE1vdmUgdGhlIG1vZGFsIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGVuc3VyZSBjb3JyZWN0IHNjcm9sbGluZy5cbiAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgI3RlbXBsYXRlU2libGluZyBlbGVtZW50IGZyb20gdGhlIERPTSB0byBmaXggYm90dG9tIGJvcmRlciBzdHlsZXMuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMudGVtcGxhdGVTaWJsaW5nLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBpZiAodGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNjcm9sbCgpKTtcblxuICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgbW9kYWwgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb24uXG4gICAgcHVibGljIGxvYWRDb25maWc8Vj4oY29uZmlnOk1vZGFsQ29uZmlnPFYsIFQsIFU+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gY29uZmlnLmlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBjb25maWcuY2xvc2VSZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gY29uZmlnLmlzRnVsbFNjcmVlbjtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gY29uZmlnLmlzQmFzaWM7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGNvbmZpZy5pc0ludmVydGVkO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSBjb25maWcuaXNDZW50ZXJlZDtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBjb25maWcubXVzdFNjcm9sbDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBjb25maWcudHJhbnNpdGlvbjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSBjb25maWcudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhIHRyYW5zaXRpb24sIGZpcmluZyB0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nLlxuICAgIHByaXZhdGUgZGlzbWlzcyhjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgY3VycmVudGx5IGNsb3NpbmcsXG4gICAgICAgIGlmICghdGhpcy5faXNDbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSBpbnZpc2libGUuXG4gICAgICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZG9uZSwgbW92ZSB0aGUgbW9kYWwgYmFjayB0byBpdHMgb3JpZ2luYWwgbG9jYXRpb24sIGVtaXQgYSBkaXNtaXNzIGV2ZW50LCBhbmQgZmlyZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbCB3aXRoIGEgJ2RlbnknIG91dGNvbWUsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCByZWFzb24uXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbGxvd2VkIHRvIGNsb3NlLCBmaXJlIHRoZSBkZW55IHJlc3VsdCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZW55KHRoaXMuY2xvc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjaWRlcyB3aGV0aGVyIHRoZSBtb2RhbCBuZWVkcyB0byByZXBvc2l0aW9uIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICBwcml2YXRlIHVwZGF0ZVNjcm9sbCgpOnZvaWQge1xuXG4gICAgICAgIC8vIF9tdXN0QWx3YXlzU2Nyb2xsIHdvcmtzIGJ5IHN0b3BwaW5nIF9tdXN0U2Nyb2xsIGZyb20gYmVpbmcgYXV0b21hdGljYWxseSB1cGRhdGVkLCBzbyBpdCBzdGF5cyBgdHJ1ZWAuXG4gICAgICAgIGlmICghdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCAmJiB0aGlzLl9tb2RhbEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgLy8gU2VtYW50aWMgVUkgbW9kYWwgbWFyZ2luIGFuZCBkaW1tZXIgcGFkZGluZyBhcmUgMXJlbSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBmb250IHNpemUsIHNvIGZvciBjb21wYXRpYmlsaXR5OlxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAqIDI7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gVGhlIG1vZGFsIG11c3Qgc2Nyb2xsIGlmIHRoZSB3aW5kb3cgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiB0aGUgbW9kYWwgaGVpZ2h0ICsgYm90aCBtYXJnaW5zLlxuICAgICAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IHdpbmRvdy5pbm5lckhlaWdodCA8IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICogMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBtb2RhbCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIERvY3VtZW50IGxpc3RlbmVyIGlzIGZpbmUgaGVyZSBiZWNhdXNlIG5vYm9keSB3aWxsIGhhdmUgZW5vdWdoIG1vZGFscyBvcGVuLlxuICAgIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRG9jdW1lbnRLZXlVcChlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgLy8gQ2xvc2UgYXV0b21hdGljYWxseSBjb3ZlcnMgY2FzZSBvZiBgIWlzQ2xvc2FibGVgLCBzbyBjaGVjayBub3QgbmVlZGVkLlxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpyZXNpemVcIilcbiAgICBwdWJsaWMgb25Eb2N1bWVudFJlc2l6ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBUZW1wbGF0ZU1vZGFsQ29uZmlnLCBDb21wb25lbnRNb2RhbENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgQWN0aXZlTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hY3RpdmUtbW9kYWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7fVxuXG4gICAgcHVibGljIG9wZW48VCwgVSwgVj4obW9kYWw6TW9kYWxDb25maWc8VCwgVSwgVj4pOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG1vZGFsIGNvbXBvbmVudCB0byBiZSBzaG93bi5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQ8U3VpTW9kYWw8VSwgVj4+KFN1aU1vZGFsKTtcblxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIHRoZSBjcmVhdGVkIG1vZGFsIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbW9kYWxDb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKG1vZGFsIGluc3RhbmNlb2YgVGVtcGxhdGVNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3LlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZywgbW9kYWwudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAvLyBgbGV0LWNvbnRleHRgXG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiBtb2RhbC5jb250ZXh0LFxuICAgICAgICAgICAgICAgIC8vIGBsZXQtbW9kYWw9XCJtb2RhbFwiYFxuICAgICAgICAgICAgICAgIG1vZGFsOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGFsIGluc3RhbmNlb2YgQ29tcG9uZW50TW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHRoZSBjb21wb25lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbW9kYWwgY29udGVudCxcbiAgICAgICAgICAgIC8vIGluamVjdGluZyBhbiBpbnN0YW5jZSBvZiBgTW9kYWxgIHRvIGJlIHVzZWQgaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBuZXcgTW9kYWwobW9kYWxDb21wb25lbnQuY29udHJvbHMsIG1vZGFsLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBjb21wb25lbnQgaW50byB0aGUgY29udGVudCBvZiB0aGUgbW9kYWwuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyhjb250ZW50Q29tcG9uZW50UmVmLCBtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcpO1xuXG4gICAgICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGFjY2VzcyB0byB0aGUgY29udGVudCBjb21wb25lbnQncyBET00gZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudENvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgaW5zaWRlIHRoZSBjb21wb25lbnQgdG8gdGhlIG1haW4gbW9kYWwgZWxlbWVudC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZG9uZSBzbyB0aGF0IENTUyBjbGFzc2VzIGFwcGx5IGNvcnJlY3RseS4gSXQgZG9lcyBzdG9wIGFueSBjdXN0b20gc3R5bGVzIGZyb20gd29ya2luZyBob3dldmVyLFxuICAgICAgICAgICAgLy8gc28gb3RoZXIgd2F5cyBtYXkgaGF2ZSB0byBiZSBpbnZlc3RpZ2F0ZWQuXG4gICAgICAgICAgICB3aGlsZSAoY29udGVudEVsZW1lbnQuaGFzQ2hpbGROb2RlcygpICYmIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50J3MgJ2VtcHR5IHNoZWxsJyBmcm9tIHRoZSBET00uXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21Eb2N1bWVudChjb250ZW50Q29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbmV3IG1vZGFsIGNvbXBvbmVudCB0byB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgIC8vIFRoZSBjb21wb25lbnQgd2lsbCBtb3ZlIGl0c2VsZiB0byB0aGUgZG9jdW1lbnQgYm9keSBmb3IgY29ycmVjdGwgc3R5bGluZy5cbiAgICAgICAgaWYgKG1vZGFsLm1vZGFsUGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0VsZW1lbnQoY29tcG9uZW50UmVmLCBtb2RhbC5tb2RhbFBhcmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24oY29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGdlbmVyYXRlZCBtb2RhbCB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIG1vZGFsQ29tcG9uZW50LmxvYWRDb25maWcobW9kYWwpO1xuXG4gICAgICAgIC8vIFJldHVybiBhbiBpbnN0YW5jZSBvZiBhbiBgQWN0aXZlTW9kYWxgLCBzbyB0aGUgdXNlciBjYW4gY29udHJvbCB0aGUgbmV3IG1vZGFsLlxuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZU1vZGFsKG1vZGFsLCBjb21wb25lbnRSZWYpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpRGltbWVyIH0gZnJvbSBcIi4uLy4uL2RpbW1lci9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbW9kYWwtZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0LnVpLmRpbW1lcjpub3QoLmhpZGRlbikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxEaW1tZXIgZXh0ZW5kcyBTdWlEaW1tZXIge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1vZGFsc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aURpbW1lck1vZHVsZSB9IGZyb20gXCIuLi9kaW1tZXIvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgU3VpTW9kYWxEaW1tZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpbW1lclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNb2RhbCxcbiAgICAgICAgU3VpTW9kYWxEaW1tZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpTW9kYWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdWlNb2RhbFNlcnZpY2VcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXByb2dyZXNzXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiYXJcIiBbc3R5bGUud2lkdGguJV09XCJwZXJjZW50YWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgKm5nSWY9XCJzaG93UHJvZ3Jlc3NcIj57eyBwZXJjZW50YWdlIH19JTwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLmJhciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXMgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUHJvZ3Jlc3Mge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHJvZ3Jlc3NcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6bnVtYmVyO1xuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuICAgIHByaXZhdGUgX3ByZWNpc2lvbjpudW1iZXI7XG5cbiAgICBwcml2YXRlIF9vdmVycmlkZVN1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF1dG9TdWNjZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaG93UHJvZ3Jlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gY29udmVydGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21heGltdW0gPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHByZWNpc2lvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVjaXNpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwcmVjaXNpb24odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJlY2lzaW9uID0gTWF0aC5taW4oTWF0aC5tYXgoY29udmVydGVkLCAwKSwgMjApO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnN1Y2Nlc3NcIilcbiAgICBwdWJsaWMgZ2V0IHJlYWNoZWRNYXhpbXVtKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgfHwgKCh0aGlzLnZhbHVlID49IHRoaXMubWF4aW11bSkgJiYgdGhpcy5hdXRvU3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5kYXRhLXBlcmNlbnRcIilcbiAgICBwdWJsaWMgZ2V0IHBlcmNlbnRhZ2UoKTpzdHJpbmcge1xuICAgICAgICBjb25zdCBib3VuZGVkVmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLnZhbHVlLCAwKSwgdGhpcy5tYXhpbXVtKTtcblxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKGJvdW5kZWRWYWx1ZSAvIHRoaXMubWF4aW11bSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2UudG9GaXhlZCh0aGlzLnByZWNpc2lvbik7XG4gICAgfVxuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgc2V0IGNsYXNzVmFsdWUoY2xhc3NlczpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJhdHRhY2hlZFwiKSB8fCBjbGFzc2VzLmluY2x1ZGVzKFwidGlueVwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcInN1Y2Nlc3NcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJyaWRlU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IDEwMDtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuX292ZXJyaWRlU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpUHJvZ3Jlc3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2dyZXNzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlQcm9ncmVzc1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlQcm9ncmVzc1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUHJvZ3Jlc3NNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIHRlbXBsYXRlOiBgXG48aSBjbGFzcz1cImljb25cIlxuICAgKm5nRm9yPVwibGV0IGljb24gb2YgaWNvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgKG1vdXNlb3Zlcik9XCJvbk1vdXNlb3ZlcihpKVwiXG4gICAoY2xpY2spPVwib25DbGljayhpKVwiXG4gICBbY2xhc3Muc2VsZWN0ZWRdPVwiaG92ZXJlZEluZGV4ID49IGkgJiYgIWlzUmVhZG9ubHlcIlxuICAgW2NsYXNzLmFjdGl2ZV09XCJ2YWx1ZSA+IGlcIj5cbjwvaT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QucmVhZC1vbmx5IC5pY29uIHtcbiAgICBjdXJzb3I6IGF1dG9cbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZyBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxudW1iZXI+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhdGluZ1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdmFsdWU6bnVtYmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgcHJpdmF0ZSBfbWF4aW11bTpudW1iZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4aW11bSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhpbXVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4aW11bSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4aW11bSA9ICt2YWx1ZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGljb25zKCk6dW5kZWZpbmVkW10ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWxpdGVyYWxcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSh0aGlzLm1heGltdW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBob3ZlcmVkSW5kZXg6bnVtYmVyID0gLTE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgICAgICB0aGlzLm1heGltdW0gPSA1O1xuICAgICAgICB0aGlzLmlzUmVhZG9ubHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpICsgMTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdXNlb3ZlcihpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VvdXRcIilcbiAgICBwdWJsaWMgb25Nb3VzZW91dCgpOnZvaWQge1xuICAgICAgICB0aGlzLmhvdmVyZWRJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOm51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYXRpbmdcIixcbiAgICBob3N0OiB7IFwiKHZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIiB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxudW1iZXIsIFN1aVJhdGluZz4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpUmF0aW5nKSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlSYXRpbmcsIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhdGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVJhdGluZyxcbiAgICAgICAgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlSYXRpbmcsXG4gICAgICAgIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3JcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZyxcbiAgICBJbnB1dCwgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJUmVzdWx0Q29udGV4dCB9IGZyb20gXCIuL3NlYXJjaFwiO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzQ0OS5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWFyY2gtcmVzdWx0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIiBbaW5uZXJIVE1MXT1cImZvcm1hdHRlcih2YWx1ZSwgcXVlcnkpXCI+PC9zcGFuPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hSZXN1bHQ8VD4ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZXN1bHRcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHF1ZXJ5OnN0cmluZztcblxuICAgIC8vIFJldHVybnMgdGhlIGxhYmVsIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb3JtYXR0ZXI6KG9iajpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHByaXZhdGUgX3RlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQgd2UgbWFrZSB0aGlzIGZ1bmN0aW9uIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBsYWJlbC5cbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBcIlwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgTG9va3VwRm5SZXN1bHQsIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmludGVyZmFjZSBJQ2FjaGVkQXJyYXk8VD4geyBbcXVlcnk6c3RyaW5nXTpUW107IH1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2U8VCwgVT4ge1xuICAgIC8vIFN0b3JlcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfb3B0aW9uczpUW107XG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBvcHRpb25zLiBNdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgcHJvbWlzZS5cbiAgICBwcml2YXRlIF9vcHRpb25zTG9va3VwPzpMb29rdXBGbjxULCBVPjtcbiAgICAvLyBGaWVsZCB0aGF0IG9wdGlvbnMgYXJlIHNlYXJjaGVkICYgZGlzcGxheWVkIG9uLlxuICAgIHByaXZhdGUgX29wdGlvbnNGaWVsZD86c3RyaW5nO1xuICAgIC8vIEZpbHRlcnMgYSBsaXN0IG9mIG9wdGlvbnMuXG4gICAgcHVibGljIG9wdGlvbnNGaWx0ZXI6RmlsdGVyRm48VD47XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwgW107XG4gICAgICAgIC8vIFdlIGNhbm5vdCB1c2UgYm90aCBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBSZXNldCBlbnRpcmUgc2VydmljZSB3aXRoIG5ldyBvcHRpb25zLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zTG9va3VwKCk6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0xvb2t1cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwRm46TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgICAgICAvLyBBcyBiZWZvcmUsIGNhbm5vdCB1c2UgbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNJdGVtTG9va3VwKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMub3B0aW9uc0xvb2t1cCAmJiB0aGlzLm9wdGlvbnNMb29rdXAubGVuZ3RoID09PSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0ZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNGaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVzZXQgb3RoZXJ3aXNlIHdlIHdvdWxkIG5vdyBiZSBzaG93aW5nIGludmFsaWQgc2VhcmNoIHJlc3VsdHMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHM6VFtdO1xuICAgIC8vIENhY2hlIG9mIHJlc3VsdHMsIGluZGV4ZWQgYnkgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0c0NhY2hlOklDYWNoZWRBcnJheTxUPjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXJ5OnN0cmluZztcbiAgICAvLyBBbGxvd3MgdGhlIGVtcHR5IHF1ZXJ5IHRvIHByb2R1Y2UgcmVzdWx0cy5cbiAgICBwdWJsaWMgYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW47XG4gICAgLy8gSG93IGxvbmcgdG8gZGVsYXkgdGhlIHNlYXJjaCBmb3Igd2hlbiB1c2luZyB1cGRhdGVRdWVyeURlbGF5ZWQuIFN0b3JlZCBpbiBtcy5cbiAgICBwdWJsaWMgc2VhcmNoRGVsYXk6bnVtYmVyO1xuICAgIC8vIFN0b3JlcyB0aGUgc2VhcmNoIHRpbWVvdXQgaGFuZGxlIHNvIHdlIGNhbiBjYW5jZWwgaXQuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGVsYXlUaW1lb3V0Om51bWJlcjtcbiAgICAvLyBQcm92aWRlcyAnbG9hZGluZycgZnVuY3Rpb25hbGl0eS5cbiAgICBwcml2YXRlIF9pc1NlYXJjaGluZzpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zRmlsdGVyID0gKG9zLCBxKSA9PiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBxdWVyeSBzdHJpbmcgdG8gYSBSZWdFeHAuXG4gICAgICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleCh0aGlzLl9xdWVyeSk7XG5cbiAgICAgICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSByZXN1bHRzIGlmIHRoZSBxdWVyeSB3YXMgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdm9pZHMgdGhlIHJlc3VsdHMgc3VkZGVubHkgYmVjb21pbmcgZW1wdHkgaWYgYW4gaW52YWxpZCByZWdleCBzdHJpbmcgaXMgaW5wdXR0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9zXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvbiB0aGUgb3B0aW9ucyB3aXRoIGEgc3RyaW5nIG1hdGNoIG9uIHRoZSBmaWVsZCB3ZSBhcmUgdGVzdGluZy5cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihvID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG8sIHRoaXMuX29wdGlvbnNGaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2gocmVnZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIHNpbmNlIGl0IHdhc24ndCBhIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyBhbmQgcmVzZXQuXG4gICAgICAgIHRoaXMuYWxsb3dFbXB0eVF1ZXJ5ID0gYWxsb3dFbXB0eVF1ZXJ5O1xuICAgICAgICB0aGlzLnNlYXJjaERlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIHF1ZXJ5IGFmdGVyIHRoZSBzcGVjaWZpZWQgc2VhcmNoIGRlbGF5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeURlbGF5ZWQocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGVsYXlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBjdXJyZW50IHNlYXJjaCBxdWVyeS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBpZiAodGhpcy5fcXVlcnkgPT09IFwiXCIgJiYgIXRoaXMuYWxsb3dFbXB0eVF1ZXJ5KSB7XG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIG5ldyBxdWVyeSBpcyBlbXB0eSAoYW5kIHdlIGRvbid0IGFsbG93IGVtcHR5IHF1ZXJpZXMpLlxuICAgICAgICAgICAgLy8gRG9uJ3QgcmVzZXQgc28gdGhhdCB3aGVuIGFuaW1hdGluZyBjbG9zZWQgd2UgZG9uJ3QgZ2V0IGEganVkZGVyLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVzdWx0c0NhY2hlLmhhc093blByb3BlcnR5KHRoaXMuX3F1ZXJ5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXJ5IGlzIGFscmVhZHkgY2FjaGVkLCBtYWtlIHVzZSBvZiBpdC5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMgPSB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldO1xuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9wdGlvbnMgbG9va3VwIHdpdGhvdXQgYSB0aGlzIGNvbnRleHQuXG4gICAgICAgICAgICBjb25zdCBxdWVyeUxvb2t1cCA9IHRoaXMuX29wdGlvbnNMb29rdXAuY2FsbCh1bmRlZmluZWQsIHRoaXMuX3F1ZXJ5KSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuXG4gICAgICAgICAgICBxdWVyeUxvb2t1cFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbnNldCAnbG9hZGluZycgc3RhdGUsIGFuZCB0aHJvdyB0aGUgcmV0dXJuZWQgZXJyb3Igd2l0aG91dCB1cGRhdGluZyB0aGUgcmVzdWx0cy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLm9wdGlvbnNGaWx0ZXIuY2FsbCh1bmRlZmluZWQsIHRoaXMuX29wdGlvbnMsIHRoaXMuX3F1ZXJ5KTtcbiAgICAgICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgJiBjYWNoZXMgdGhlIG5ldyBzZXQgb2YgcmVzdWx0cy5cbiAgICBwcml2YXRlIHVwZGF0ZVJlc3VsdHMocmVzdWx0czpUW10pOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldID0gcmVzdWx0cztcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUpOkxvb2t1cEZuUmVzdWx0PFQ+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVW10pOkxvb2t1cEZuUmVzdWx0PFRbXT47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUgfCBVW10pOkxvb2t1cEZuUmVzdWx0PFQ+IHwgTG9va3VwRm5SZXN1bHQ8VFtdPiB7XG4gICAgICAgIGlmIChpbml0aWFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCBhcyBMb29rdXBGbjxULCBVW10+KSh1bmRlZmluZWQsIGluaXRpYWwpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFU+KSh1bmRlZmluZWQsIGluaXRpYWwpIGFzIExvb2t1cEZuUmVzdWx0PFQ+O1xuICAgIH1cblxuICAgIC8vIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIHRvIHJlZ2V4IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgcHJpdmF0ZSB0b1JlZ2V4KHF1ZXJ5OnN0cmluZyk6UmVnRXhwIHwgc3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHF1ZXJ5LCBcImlcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlcyBIVE1MIGZvciBoaWdobGlnaHRlZCBtYXRjaCB0ZXh0LlxuICAgIHB1YmxpYyBoaWdobGlnaHRNYXRjaGVzKHRleHQ6c3RyaW5nLCBxdWVyeTpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHF1ZXJ5KTtcbiAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBtYXRjaCA9PiBgPGI+JHttYXRjaH08L2I+YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgLy8gUmVzZXRzIHRoZSBzZWFyY2ggYmFjayB0byBhIHByaXN0aW5lIHN0YXRlLlxuICAgIHByaXZhdGUgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeShcIlwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgSW5wdXQsIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lcixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VhcmNoTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRDb250ZXh0PFQ+IGV4dGVuZHMgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7XG4gICAgcXVlcnk6c3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBpbnB1dFwiIFtjbGFzcy5pY29uXT1cImhhc0ljb25cIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPGlucHV0IGNsYXNzPVwicHJvbXB0XCIgdHlwZT1cInRleHRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFsobmdNb2RlbCldPVwicXVlcnlcIj5cbiAgICA8aSAqbmdJZj1cImhhc0ljb25cIiBjbGFzcz1cInNlYXJjaCBpY29uXCI+PC9pPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzdWx0c1wiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIG1lbnVTZWxlY3RlZEl0ZW1DbGFzcz1cImFjdGl2ZVwiPlxuXG4gICAgPHN1aS1zZWFyY2gtcmVzdWx0ICpuZ0Zvcj1cImxldCByIG9mIHJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZXJdPVwicmVzdWx0Rm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInJlc3VsdFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChyKVwiPjwvc3VpLXNlYXJjaC1yZXN1bHQ+XG5cbiAgICA8ZGl2ICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPT0gMFwiIGNsYXNzPVwibWVzc2FnZSBlbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5tZXNzYWdlIH19PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRW5zdXJlcyByZXN1bHRzIGRpdiBoYXMgbWFyZ2luLiAqL1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi8qIEZpeGVzIHBvc2l0aW9uaW5nIHdoZW4gcmVzdWx0cyBhcmUgcHVzaGVkIGFib3ZlIHRoZSBzZWFyY2guICovXG4ucmVzdWx0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaDxUPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVD47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcml2YXRlIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAvLyBEb2luZyBpdCBvbiB0aGUgaG9zdCBlbmFibGVzIHVzZSBpbiBtZW51cyBldGMuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJpbmRleDpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgLy8gU2V0cyB3aGV0aGVyIHRoZSBzZWFyY2ggZWxlbWVudCBoYXMgYSB2aXNpYmxlIHNlYXJjaCBpY29uLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0ljb246Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIC8vIEdldHMgJiBzZXRzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IGRpc3BsYXllZCBpbnNpZGUgdGhlIHRleHQgaW5wdXQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyIHx8IHRoaXMubG9jYWxlVmFsdWVzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklTZWFyY2hMb2NhbGVWYWx1ZXM7XG5cbiAgICBwdWJsaWMgbG9jYWxlT3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SVNlYXJjaExvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklTZWFyY2hMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcInNlYXJjaFwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBJbml0aWFsaXNlIGEgZGVsYXllZCBzZWFyY2guXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeURlbGF5ZWQocXVlcnksICgpID0+XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHJlc3VsdHMgb3BlbiBzdGF0ZSBkZXBlbmRpbmcgb24gd2hldGhlciBhIHF1ZXJ5IGhhcyBiZWVuIGVudGVyZWQuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5Lmxlbmd0aCA+IDApKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWx0ZXIoZmlsdGVyOkZpbHRlckZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmlsdGVyID0gZmlsdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwRm46TG9va3VwRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXAgPSBsb29rdXBGbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzdWx0Rm9ybWF0dGVyPzoocjpULCBxOnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCByZXN1bHRGb3JtYXR0ZXIoKToocmVzdWx0OlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VsdEZvcm1hdHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEZvcm1hdHRlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgcmV0dXJuIHIgPT4gdGhpcy5yZWFkVmFsdWUocik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHIsIHEpID0+IHRoaXMuc2VhcmNoU2VydmljZS5oaWdobGlnaHRNYXRjaGVzKHRoaXMucmVhZFZhbHVlKHIpLCBxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCByZXN1bHRGb3JtYXR0ZXIoZm9ybWF0dGVyOihyZXN1bHQ6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0Rm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlc3VsdFRlbXBsYXRlOlRlbXBsYXRlUmVmPElSZXN1bHRDb250ZXh0PFQ+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJldGFpblNlbGVjdGVkUmVzdWx0OmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc2VhcmNoRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IGRlbGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4UmVzdWx0czpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdHMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHMuc2xpY2UoMCwgdGhpcy5tYXhSZXN1bHRzKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCByZXN1bHQuXG4gICAgcHVibGljIHNlbGVjdGVkUmVzdWx0PzpUO1xuXG4gICAgLy8gRW1pdHMgd2hlbmV2ZXIgYSBuZXcgcmVzdWx0IGlzIHNlbGVjdGVkLlxuICAgIEBPdXRwdXQoXCJyZXN1bHRTZWxlY3RlZFwiKVxuICAgIHB1YmxpYyBvblJlc3VsdFNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9sb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IG5ldyBTZWFyY2hTZXJ2aWNlPFQsIFQ+KCk7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XG4gICAgICAgIHRoaXMucmV0YWluU2VsZWN0ZWRSZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlYXJjaERlbGF5ID0gMjAwO1xuICAgICAgICB0aGlzLm1heFJlc3VsdHMgPSA3O1xuXG4gICAgICAgIHRoaXMub25SZXN1bHRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcInNjYWxlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5kcm9wZG93blNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLnNlYXJjaDtcbiAgICB9XG5cbiAgICAvLyBTZWxlY3RzIGEgcmVzdWx0LlxuICAgIHB1YmxpYyBzZWxlY3QocmVzdWx0OlQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUmVzdWx0U2VsZWN0ZWQuZW1pdChyZXN1bHQpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuXG4gICAgICAgIGlmICh0aGlzLnJldGFpblNlbGVjdGVkUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KHRoaXMucmVhZFZhbHVlKHJlc3VsdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gT25seSBvcGVuIG9uIGNsaWNrIHdoZW4gdGhlcmUgaXMgYSBxdWVyeSBlbnRlcmVkLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWFkcyB0aGUgc3BlY2lmaWVkIGZpZWxkIGZyb20gYW4gaXRlbS5cbiAgICBwdWJsaWMgcmVhZFZhbHVlKG9iamVjdDpUKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4ob2JqZWN0LCB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25Nb2R1bGUgfSBmcm9tIFwiLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCB7IFN1aVNlYXJjaFJlc3VsdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVNlYXJjaCxcbiAgICAgICAgU3VpU2VhcmNoUmVzdWx0XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVNlYXJjaFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51SXRlbSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0LW9wdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuIFtpbm5lckhUTUxdPVwicmVuZGVyZWRUZXh0XCI+PC9zcGFuPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RPcHRpb248VD4gZXh0ZW5kcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLCB3aGV0aGVyIGJ5IGNsaWNraW5nIG9yIGJ5IGtleWJvYXJkLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIHJlbmRlcmVkVGV4dD86c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBmb3JtYXR0ZXIoZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gZm9ybWF0dGVyKHRoaXMudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXNUZW1wbGF0ZTpib29sZWFuO1xuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgcHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIC8vIFdlIGluaGVyaXQgU3VpRHJvcGRvd25NZW51SXRlbSB0byBhdXRvbWF0aWNhbGx5IGdhaW4gYWxsIGtleWJvYXJkIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgZG9uZSB2aWEgYWRkaW5nIHRoZSAuaXRlbSBjbGFzcyBiZWNhdXNlIGl0IGlzbid0IHN1cHBvcnRlZCBieSBBbmd1bGFyLlxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoZSBkZWZhdWx0IHRleHQgYW4gZW1wdHkgbGFiZWwsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBvbmUuXG4gICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnVzZXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlTZWxlY3RTZWFyY2hdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0U2VhcmNoIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5hdXRvY29tcGxldGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgYXV0b0NvbXBsZXRlOnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCBxdWVyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlVcGRhdGVkOkV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIHB1YmxpYyBvblF1ZXJ5S2V5RG93bjpFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUgPSBcIm9mZlwiO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUXVlcnlVcGRhdGVkLmVtaXQocXVlcnkpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25RdWVyeUtleURvd24uZW1pdChlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoKTp2b2lkIHtcbiAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgdG8gc3VwcG9ydCBpbiBtZW51IHNlYXJjaC5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlLCBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vLi4vc2VhcmNoL2ludGVybmFsXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlbGVjdExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbkNvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeT86c3RyaW5nO1xufVxuXG4vLyBXZSB1c2UgZ2VuZXJpYyB0eXBlIFQgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgb3B0aW9ucyB3ZSBhcmUgd29ya2luZyB3aXRoLFxuLy8gYW5kIFUgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIG9wdGlvbiB1c2VkIGFzIHRoZSB2YWx1ZS5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFU+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJvdGVjdGVkIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSByZW5kZXJlZCBzZWxlY3Qgb3B0aW9ucy4gKFJlbmRlcmVkIGJ5IHRoZSB1c2VyIHVzaW5nICpuZ0ZvcikuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlTZWxlY3RPcHRpb24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVkT3B0aW9uczpRdWVyeUxpc3Q8U3VpU2VsZWN0T3B0aW9uPFQ+PjtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIG9mIHRoZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzZWxlY3RlZCBldmVudHMgb24gdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRTdWJzY3JpcHRpb25zOlN1YnNjcmlwdGlvbltdO1xuXG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZHJvcGRvd25cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVudS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNTZWFyY2hhYmxlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXNTZWFyY2hFeHRlcm5hbDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIGdldCBoYXNTZWFyY2hDbGFzcygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlYXJjaGFibGUgJiYgIXRoaXMuaXNTZWFyY2hFeHRlcm5hbDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoU3VpU2VsZWN0U2VhcmNoKVxuICAgIHByaXZhdGUgX2ludGVybmFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNlbGVjdFNlYXJjaClcbiAgICBwcml2YXRlIF9tYW51YWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIHB1YmxpYyBnZXQgc2VhcmNoSW5wdXQoKTpTdWlTZWxlY3RTZWFyY2ggfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFudWFsU2VhcmNoIHx8IHRoaXMuX2ludGVybmFsU2VhcmNoO1xuICAgIH1cblxuICAgIEBJbnB1dChcInRhYmluZGV4XCIpXG4gICAgcHJpdmF0ZSBfdGFiSW5kZXg/Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgZ2V0IHRhYmluZGV4KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gSWYgZGlzYWJsZWQsIHJlbW92ZSBmcm9tIHRhYmluZGV4LlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgdGhpcy5pc1NlYXJjaEV4dGVybmFsKSB7XG4gICAgICAgICAgICAvLyBJZiBvcGVuICYgaW4gbWVudSBzZWFyY2gsIHJlbW92ZSBmcm9tIHRhYmluZGV4IChhcyBpbnB1dCBhbHdheXMgYXV0b2ZvY3Vzc2VzKS5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBjdXN0b20gdGFiaW5kZXgsIGRlZmF1bHQgdG8gdGhhdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNTZWFyY2hDbGFzcykge1xuICAgICAgICAgICAgLy8gSWYgc2VhcmNoIGlucHV0IGVuYWJsZWQsIHRhYiBnb2VzIHRvIGlucHV0LlxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGRlZmF1bHQgb2YgMC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5pc0Rpc2FibGVkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9ucyhvcHRpb25zOlRbXSkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0ZpbHRlcihmaWx0ZXI6RmlsdGVyRm48VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cDpMb29rdXBGbjxULCBVPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCA9IGxvb2t1cDtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZE9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gRGVwcmVjYXRlZFxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkT3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWFyY2hhYmxlID8gdGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5IDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcXVlcnkocXVlcnk6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChxdWVyeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlVcGRhdGVIb29rKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcmVuZGVyZWQgdGV4dCBhcyBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5mb3JFYWNoKHJvID0+IHRoaXMuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKHJvKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGxhYmVsRmllbGQoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxhYmVsRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxhYmVsR2V0dGVyKCk6KG9iajpUKSA9PiBzdHJpbmcge1xuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGxhYmVsIGZyb20gYW4gaXRlbS5cbiAgICAgICAgcmV0dXJuIChvYmo6VCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvYmosIHRoaXMubGFiZWxGaWVsZCk7XG4gICAgICAgICAgICBpZiAobGFiZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUZpZWxkOnN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgdmFsdWVHZXR0ZXIoKToob2JqOlQpID0+IFUge1xuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gYW4gaXRlbS5cbiAgICAgICAgcmV0dXJuIChvYmo6VCkgPT4gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIFU+KG9iaiwgdGhpcy52YWx1ZUZpZWxkKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBvcHRpb25UZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj47XG5cbiAgICBwcml2YXRlIF9vcHRpb25Gb3JtYXR0ZXI/OihvOlQsIHE/OnN0cmluZykgPT4gc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCBjb25maWd1cmVkRm9ybWF0dGVyKCk6KG9wdGlvbjpUKSA9PiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9uRm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLl9vcHRpb25Gb3JtYXR0ZXIhKG8sIHRoaXMuaXNTZWFyY2hhYmxlID8gdGhpcy5xdWVyeSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiBvID0+IHRoaXMubGFiZWxHZXR0ZXIobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLmxhYmVsR2V0dGVyKG8pLCB0aGlzLnF1ZXJ5IHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbkZvcm1hdHRlcihmb3JtYXR0ZXI6KChvcHRpb246VCwgcXVlcnk/OnN0cmluZykgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklTZWxlY3RMb2NhbGVWYWx1ZXM7XG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWxlY3RMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VsZWN0TG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWxlY3RcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBAT3V0cHV0KFwidG91Y2hlZFwiKVxuICAgIHB1YmxpYyBvblRvdWNoZWQ6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX2xvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgLy8gV2UgZG8gd2FudCBhbiBlbXB0eSBxdWVyeSB0byByZXR1cm4gYWxsIHJlc3VsdHMuXG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IG5ldyBTZWFyY2hTZXJ2aWNlPFQsIFU+KHRydWUpO1xuXG4gICAgICAgIHRoaXMuaXNTZWFyY2hhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkxvY2FsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaWNvbiA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzbGlkZSBkb3duXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duU2VydmljZTtcbiAgICAgICAgLy8gV2UgbWFudWFsbHkgc3BlY2lmeSB0aGUgbWVudSBpdGVtcyB0byB0aGUgbWVudSBiZWNhdXNlIHRoZSBAQ29udGVudENoaWxkcmVuIGRvZXNuJ3QgcGljayB1cCBvdXIgZHluYW1pY2FsbHkgcmVuZGVyZWQgaXRlbXMuXG4gICAgICAgIHRoaXMuX21lbnUuaXRlbXMgPSB0aGlzLl9yZW5kZXJlZE9wdGlvbnM7XG4gICAgICAgIHRoaXMuX21lbnUucGFyZW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX21hbnVhbFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1NlYXJjaEV4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uUXVlcnlVcGRhdGVkLnN1YnNjcmliZSgocTpzdHJpbmcpID0+IHRoaXMucXVlcnkgPSBxKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub25RdWVyeUtleURvd24uc3Vic2NyaWJlKChlOktleWJvYXJkRXZlbnQpID0+IHRoaXMub25RdWVyeUlucHV0S2V5ZG93bihlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBtdXN0IGNhbGwgdGhpcyBpbW1lZGlhdGVseSBhcyBjaGFuZ2VzIGRvZXNuJ3QgZmlyZSB3aGVuIHlvdSBzdWJzY3JpYmUuXG4gICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLnNlbGVjdDtcbiAgICB9XG5cbiAgICAvLyBIb29rIGlzIGhlcmUgc2luY2UgVHlwZXNjcmlwdCBkb2Vzbid0IHlldCBzdXBwb3J0IG92ZXJyaWRpbmcgZ2V0dGVycyAmIHNldHRlcnMgd2hpbGUgc3RpbGwgY2FsbGluZyB0aGUgc3VwZXJjbGFzcy5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHt9XG5cbiAgICAvLyBIb29rIGlzIGhlcmUgc2luY2UgVHlwZXNjcmlwdCBkb2Vzbid0IHlldCBzdXBwb3J0IG92ZXJyaWRpbmcgZ2V0dGVycyAmIHNldHRlcnMgd2hpbGUgc3RpbGwgY2FsbGluZyB0aGUgc3VwZXJjbGFzcy5cbiAgICBwcm90ZWN0ZWQgcXVlcnlVcGRhdGVIb29rKCk6dm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZyk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcXVlcnkgdGhlbiBvcGVuIHRoZSBkcm9wZG93biwgYXMgYWZ0ZXIga2V5Ym9hcmQgaW5wdXQgaXQgc2hvdWxkIGFsd2F5cyBiZSBvcGVuLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnkocXVlcnksICgpID0+XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNldFF1ZXJ5KGRlbGF5ZWQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICAvLyBUaGUgc2VhcmNoIGRlbGF5IGlzIHNldCB0byB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbiB0byBlbnN1cmUgcmVzdWx0c1xuICAgICAgICAvLyBhcmVuJ3QgcmVuZGVyZWQgYXMgdGhlIHNlbGVjdCBjbG9zZXMgYXMgdGhhdCBjYXVzZXMgYSBzdWRkZW4gZmxhc2guXG4gICAgICAgIGlmIChkZWxheWVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSB0aGlzLl9tZW51Lm1lbnVUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQucXVlcnkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gYWxsIHByZXZpb3VzIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzIG9uIGxhcmdlIHNlbGVjdHMuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHJzID0+IHJzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuZm9yRWFjaChybyA9PiB7XG4gICAgICAgICAgICAvLyBTbGlnaHRseSBkZWxheSBpbml0aWFsaXNhdGlvbiB0byBhdm9pZCBjaGFuZ2UgYWZ0ZXIgY2hlY2tlZCBlcnJvcnMuIFRPRE8gLSBsb29rIGludG8gYXZvaWRpbmcgdGhpcyFcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ocm8pKTtcblxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLnB1c2gocm8ub25TZWxlY3RlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZWxlY3RPcHRpb24ocm8udmFsdWUpKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIG5vIG9wdGlvbnMgaGF2ZSBiZWVuIHByb3ZpZGVkLCBhdXRvZ2VuZXJhdGUgdGhlbSBmcm9tIHRoZSByZW5kZXJlZCBvbmVzLlxuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID09PSAwICYmICF0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5fcmVuZGVyZWRPcHRpb25zLm1hcChybyA9PiByby52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBvcHRpb24udXNlc1RlbXBsYXRlID0gISF0aGlzLm9wdGlvblRlbXBsYXRlO1xuICAgICAgICBvcHRpb24uZm9ybWF0dGVyID0gdGhpcy5jb25maWd1cmVkRm9ybWF0dGVyO1xuXG4gICAgICAgIGlmIChvcHRpb24udXNlc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZW1wbGF0ZShvcHRpb24udGVtcGxhdGVTaWJsaW5nLCBvcHRpb24udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgZmluZE9wdGlvbihvcHRpb25zOlRbXSwgdmFsdWU6VSk6VCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIC8vIFRyaWVzIHRvIGZpbmQgYW4gb3B0aW9uIGluIG9wdGlvbnMgYXJyYXlcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZChvID0+IHZhbHVlID09PSB0aGlzLnZhbHVlR2V0dGVyKG8pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DYXJldENsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQgJiYgIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkcm9wZG93biBpcyBzZWFyY2hhYmxlLCBjbGlja2luZyBzaG91bGQga2VlcCBpdCBvcGVuLCBvdGhlcndpc2Ugd2UgdG9nZ2xlIHRoZSBvcGVuIHN0YXRlLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuaXNTZWFyY2hhYmxlID8gdHJ1ZSA6ICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4pO1xuXG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSBmb2N1cyB0aGUgc2VhcmNoIGlucHV0IHdoZW5ldmVyIGNsaWNraW5nIG9uIHRoZSBzZWxlY3QuXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNpblwiKVxuICAgIHB1YmxpYyBvbkZvY3VzSW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW4gJiYgIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5cHJlc3NcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleVByZXNzKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgIC8vIEVuYWJsZXMgc3VwcG9ydCBmb3IgZm9jdXNzaW5nIGFuZCBvcGVuaW5nIHdpdGggdGhlIGtleWJvYXJkIGFsb25lLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Eb3duKSB7XG5cbiAgICAgICAgICAgIC8vIEVuYWJsZXMgc3VwcG9ydCBmb3IgZm9jdXNzaW5nIGFuZCBvcGVuaW5nIHdpdGggdGhlIGtleWJvYXJkIGFsb25lLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlJbnB1dEtleWRvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGZvY3VzKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VhcmNoYWJsZSAmJiB0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICAvLyBGb2N1c3NlcyB0aGUgc2VhcmNoIGlucHV0IG9ubHkgd2hlbiBzZWFyY2hhYmxlLlxuICAgICAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciB0aGF0IGRyYXdzIHRoZSBwcm92aWRlZCB0ZW1wbGF0ZSBiZXNpZGUgdGhlIHByb3ZpZGVkIFZpZXdDb250YWluZXJSZWYuXG4gICAgcHJvdGVjdGVkIGRyYXdUZW1wbGF0ZShzaWJsaW5nUmVmOlZpZXdDb250YWluZXJSZWYsIHZhbHVlOlQpOnZvaWQge1xuICAgICAgICBzaWJsaW5nUmVmLmNsZWFyKCk7XG4gICAgICAgIC8vIFVzZSBvZiBgJGltcGxpY2l0YCBtZWFucyB1c2Ugb2YgPG5nLXRlbXBsYXRlIGxldC1vcHRpb24+IHN5bnRheCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgIHNpYmxpbmdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMub3B0aW9uVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdmFsdWUsXG4gICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSU9wdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzQ0OS5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3QtbGFiZWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0dGVyKHZhbHVlKVwiPjwvc3Bhbj5cbjxpIGNsYXNzPVwiZGVsZXRlIGljb25cIiAoY2xpY2spPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvaT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3RMYWJlbDxUPiBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAvLyBEb2luZyBpdCBvbiB0aGUgaG9zdCBlbmFibGVzIHVzZSBpbiBtZW51cyBldGMuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sYWJlbFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBxdWVyeT86c3RyaW5nO1xuXG4gICAgQE91dHB1dChcImRlc2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25EZXNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcm1hdHRlcjoob2JqOlQpID0+IHN0cmluZztcblxuICAgIHByaXZhdGUgX3RlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0ZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJT3B0aW9uQ29udGV4dDxUPj4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KHRoaXMudGVtcGxhdGVTaWJsaW5nLCB0aGlzLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICBwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzZWxlY3RPcHRpb24oZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwic2NhbGVcIiwgMTAwLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIEtleUNvZGUsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL3NlbGVjdC1vcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIERyb3Bkb3duIGljb24gLS0+XG48aSBjbGFzcz1cInt7IGljb24gfX0gaWNvblwiIChjbGljayk9XCJvbkNhcmV0Q2xpY2soJGV2ZW50KVwiPjwvaT5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsc1wiPlxuPCEtLSBNdWx0aS1zZWxlY3QgbGFiZWxzIC0tPlxuICAgIDxzdWktbXVsdGktc2VsZWN0LWxhYmVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBzZWxlY3RlZE9wdGlvbnM7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJjb25maWd1cmVkRm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwib3B0aW9uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXNlbGVjdGVkKT1cImRlc2VsZWN0T3B0aW9uKCRldmVudClcIj48L3N1aS1tdWx0aS1zZWxlY3QtbGFiZWw+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBRdWVyeSBpbnB1dCAtLT5cbjxpbnB1dCBzdWlTZWxlY3RTZWFyY2hcbiAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgW2hpZGRlbl09XCIhaXNTZWFyY2hhYmxlIHx8IGlzU2VhcmNoRXh0ZXJuYWxcIj5cblxuPCEtLSBIZWxwZXIgdGV4dCAtLT5cbjxkaXYgY2xhc3M9XCJ0ZXh0XCJcbiAgICAgW2NsYXNzLmRlZmF1bHRdPVwiaGFzTGFiZWxzXCJcbiAgICAgW2NsYXNzLmZpbHRlcmVkXT1cIiEhcXVlcnkgJiYgIWlzU2VhcmNoRXh0ZXJuYWxcIj5cbiAgICBcbiAgICA8IS0tIFBsYWNlaG9sZGVyIHRleHQgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsczsgZWxzZSBzZWxlY3RlZEJsb2NrXCI+e3sgcGxhY2Vob2xkZXIgfX08L25nLWNvbnRhaW5lcj5cbiAgICBcbiAgICA8IS0tIFN1bW1hcnkgc2hvd24gd2hlbiBsYWJlbHMgYXJlIGhpZGRlbiAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+IHt7IHNlbGVjdGVkTWVzc2FnZSB9fTwvbmctdGVtcGxhdGU+XG48L2Rpdj5cblxuPCEtLSBTZWxlY3QgZHJvcGRvd24gbWVudSAtLT5cbjxkaXYgY2xhc3M9XCJtZW51XCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgW21lbnVBdXRvU2VsZWN0Rmlyc3RdPVwidHJ1ZVwiPlxuXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PSAwIFwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIW1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHNNZXNzYWdlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJtYXhTZWxlY3RlZFJlYWNoZWRcIiBjbGFzcz1cIm1lc3NhZ2VcIj57eyBtYXhTZWxlY3RlZE1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCBpbnB1dC5zZWFyY2gge1xuICAgIHdpZHRoOiAxMmVtICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdDxULCBVPiBleHRlbmRzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VVtdPiB7XG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uczpUW107XG4gICAgLy8gU3RvcmVzIHRoZSB2YWx1ZXMgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSBpdCBjYW4gYmUgbWF0Y2hlZCB0byBhbiBvcHRpb24gZnJvbSBgb3B0aW9uc2AuXG4gICAgcHJpdmF0ZSBfd3JpdHRlbk9wdGlvbnM/OlVbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnNDaGFuZ2U6RXZlbnRFbWl0dGVyPFVbXT47XG5cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkUmVhY2hlZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWxlY3Rpb25zLCB0aGVuIGVtcHR5IHRoZSByZXN1bHRzIGNvbXBsZXRlbHkuXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzOlRbXSA9IHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJucyB0aGUgc2VhcmNoIHJlc3VsdHMgXFwgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihyID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbmQobyA9PiByID09PSBvKSA9PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0xhYmVsczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc0xhYmVscygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzTGFiZWxzKGhhc0xhYmVsczpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0xhYmVscyA9IGhhc0xhYmVscztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhTZWxlY3RlZDpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkUmVhY2hlZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3RlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG1heGltdW0gdGhlbiB3ZSBjYW4gaW1tZWRpYXRlbHkgcmV0dXJuLlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IHRoaXMubWF4U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtYXhTZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLm1heFNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJtYXhcIiwgdGhpcy5tYXhTZWxlY3RlZC50b1N0cmluZygpXV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRNZXNzYWdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5zZWxlY3RlZE1lc3NhZ2UsXG4gICAgICAgICAgICBbW1wiY291bnRcIiwgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubXVsdGlwbGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFVbXT4oKTtcblxuICAgICAgICB0aGlzLmhhc0xhYmVscyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fd3JpdHRlbk9wdGlvbnMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGUgb3B0aW9ucyBzdGlsbCBleGlzdC5cbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbnMgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSB2YWx1ZXMgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuX3dyaXR0ZW5PcHRpb25zXG4gICAgICAgICAgICAgICAgLy8gbm9uLW51bGwgYXNzZXJ0aW9uIGFkZGVkIGhlcmUgYmVjYXVzZSBUeXBlc2NyaXB0IGRvZXNuJ3QgcmVjb2duaXNlIHRoZSBub24tbnVsbCBmaWx0ZXIuXG4gICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IHRoaXMuX3dyaXR0ZW5PcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbik7XG5cbiAgICAgICAgLy8gQm9sZGVucyB0aGUgaXRlbSBzbyBpdCBhcHBlYXJzIHNlbGVjdGVkIGluIHRoZSBkcm9wZG93bi5cbiAgICAgICAgb3B0aW9uLmlzQWN0aXZlID0gIXRoaXMuaGFzTGFiZWxzICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoZmFsc2UpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlczpVW10pOnZvaWQge1xuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gbG9hZGVkLCB3ZSBjYW4gaW1tZWRpYXRlbHkgbWF0Y2ggdGhlIG5nTW9kZWwgdmFsdWVzIHRvIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9uLW51bGwgYXNzZXJ0aW9uIGFkZGVkIGhlcmUgYmVjYXVzZSBUeXBlc2NyaXB0IGRvZXNuJ3QgcmVjb2duaXNlIHRoZSBub24tbnVsbCBmaWx0ZXIuXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodiA9PiB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHYpISlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUZpZWxkICYmIHRoaXMuc2VhcmNoU2VydmljZS5oYXNJdGVtTG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWFyY2ggc2VydmljZSBoYXMgYSBzZWxlY3RlZCBsb29rdXAgZnVuY3Rpb24sIG1ha2UgdXNlIG9mIHRoYXQgdG8gbG9hZCB0aGUgaW5pdGlhbCB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaXRlbXMgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBpdGVtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb25zID0gdmFsdWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgb3B0aW9ucyB0byB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBvcHRpb25zIFxcIHtvcHRpb259LlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZpbHRlcihzbyA9PiBzbyAhPT0gb3B0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUXVlcnlJbnB1dEtleWRvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkJhY2tzcGFjZSAmJiB0aGlzLnF1ZXJ5ID09PSBcIlwiICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIERlc2VsZWN0IHRoZSByaWdodG1vc3Qgb3B0aW9uIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBiYWNrc3BhY2UgaW4gdGhlIHNlYXJjaCBpbnB1dC5cbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24odGhpcy5zZWxlY3RlZE9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBWYWx1ZSBhY2Nlc3NvciBkaXJlY3RpdmUgZm9yIHRoZSBzZWxlY3QgdG8gc3VwcG9ydCBuZ01vZGVsLlxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW11bHRpLXNlbGVjdFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoc2VsZWN0ZWRPcHRpb25zQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFVbXSwgU3VpTXVsdGlTZWxlY3Q8VCwgVT4+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aU11bHRpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL3NlbGVjdC1vcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIFBsYWNlaG9sZGVyIHRleHQgLS0+XG48ZGl2ICpuZ0lmPVwic2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkXCIgY2xhc3M9XCJkZWZhdWx0IHRleHRcIiBbY2xhc3MuZmlsdGVyZWRdPVwicXVlcnlcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxuPCEtLSBTZWxlY3RlZCBpdGVtIC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIiBbY2xhc3MuZmlsdGVyZWRdPVwicXVlcnkgfHwgc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkXCI+XG4gICAgPHNwYW4gI29wdGlvblRlbXBsYXRlU2libGluZz48L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCIhb3B0aW9uVGVtcGxhdGUgJiYgc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkXCIgW2lubmVySFRNTF09XCJjb25maWd1cmVkRm9ybWF0dGVyKHNlbGVjdGVkT3B0aW9uKVwiPjwvc3Bhbj5cbjwvZGl2PlxuPCEtLSBEcm9wZG93biBpY29uIC0tPlxuPGkgY2xhc3M9XCJ7eyBpY29uIH19IGljb25cIiAoY2xpY2spPVwib25DYXJldENsaWNrKCRldmVudClcIj48L2k+XG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJpc1NlYXJjaGFibGVcIj5cblxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNTZWFyY2hhYmxlICYmIGF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgIHt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHNNZXNzYWdlIH19XG4gICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPiB7XG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uPzpUO1xuICAgIC8vIFN0b3JlcyB0aGUgdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSBpdCBjYW4gYmUgbWF0Y2hlZCB0byBhbiBvcHRpb24gZnJvbSBgb3B0aW9uc2AuXG4gICAgcHJpdmF0ZSBfd3JpdHRlbk9wdGlvbj86VTtcblxuICAgIEBWaWV3Q2hpbGQoXCJvcHRpb25UZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHJpdmF0ZSBfb3B0aW9uVGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25DaGFuZ2U6RXZlbnRFbWl0dGVyPFU+O1xuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyIHx8IHRoaXMubG9jYWxlVmFsdWVzLnNpbmdsZS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgc2VhcmNoRGVsYXkoZGVsYXk6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2hEZWxheSA9IGRlbGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZUdldHRlcih0aGlzLnNlbGVjdGVkT3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB0aGlzLl93cml0dGVuT3B0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICAvLyBXaGVuIHRoZSBxdWVyeSBpcyB1cGRhdGVkLCB3ZSBqdXN0IGFiYW5kb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBDaG9vc2UgYW5kIGVtaXQgdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZS5lbWl0KHRoaXMudmFsdWVHZXR0ZXIob3B0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoKTtcblxuICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlIHRvIGFuIG9wdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdTZWxlY3RlZE9wdGlvbigpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIG5ld2x5IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9uVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKHRoaXMuX29wdGlvblRlbXBsYXRlU2libGluZywgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbkNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFN1aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3QsIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcbmltcG9ydCB7IFN1aU11bHRpU2VsZWN0LCBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpLXNlbGVjdFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3RMYWJlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VsZWN0LFxuICAgICAgICBTdWlTZWxlY3RPcHRpb24sXG4gICAgICAgIFN1aVNlbGVjdFNlYXJjaCxcbiAgICAgICAgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpTXVsdGlTZWxlY3QsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0TGFiZWwsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RNb2R1bGUge31cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJUcmFuc2l0aW9uID0gXCJvdmVybGF5XCIgfCBcInB1c2hcIiB8IFwic2NhbGUgZG93blwiIHwgXCJ1bmNvdmVyXCIgfCBcInNsaWRlIGFsb25nXCIgfCBcInNsaWRlIG91dFwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclRyYW5zaXRpb24gPSB7XG4gICAgT3ZlcmxheTogXCJvdmVybGF5XCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgUHVzaDogXCJwdXNoXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2NhbGVEb3duOiBcInNjYWxlIGRvd25cIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBVbmNvdmVyOiBcInVuY292ZXJcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZUFsb25nOiBcInNsaWRlIGFsb25nXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVPdXQ6IFwic2xpZGUgb3V0XCIgYXMgU2lkZWJhclRyYW5zaXRpb25cbn07XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJEaXJlY3Rpb24gPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckRpcmVjdGlvbiA9IHtcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBUb3A6IFwidG9wXCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgU2lkZWJhckRpcmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaXNWaXNpYmxlOmJvb2xlYW47XG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgcHVibGljIHdhc0p1c3RPcGVuZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbjtcblxuICAgIHByaXZhdGUgX3dpZHRoOm51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgd2lkdGgod2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodChoZWlnaHQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1Zpc2libGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIHB1YmxpYyB3aWR0aENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgcHVibGljIGhlaWdodENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc1Zpc2libGU6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLndpZHRoID0gMjYwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZS5lbWl0KGlzVmlzaWJsZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UsIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlVmlzaWJsZVN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKCF0aGlzLmlzVmlzaWJsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uLCBTaWRlYmFyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhciB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNpZGViYXJcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6U2lkZWJhclRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIGZhbHNlKSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOlNpZGViYXJEaXJlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoaXNWaXNpYmxlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYW5pbWF0aW5nXCIpXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTaWRlYmFyU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBzZXQgdGhlIGRlZmF1bHQgaGVyZSBhcyB3ZWxsIHRvIGZvcmNlIHRoZSBjbGFzc2VzIHRvIHVwZGF0ZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGltZW5zaW9ucygpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uud2lkdGggPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc2VydmljZS5oZWlnaHQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q2xhc3MoY2xhc3NOYW1lOnN0cmluZywgaXNBZGQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZVZpc2libGVTdGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSwgU2lkZWJhclRyYW5zaXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLXNpYmxpbmdcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJTaWJsaW5nIHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6U2lkZWJhclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpTaWRlYmFyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtKCkpO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzVmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRXaGVuVmlzaWJsZTpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVkXCIpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmIHRoaXMuaXNEaW1tZWRXaGVuVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIik7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5PdmVybGF5ICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiAhPT0gU2lkZWJhclRyYW5zaXRpb24uU2NhbGVEb3duKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuc2VydmljZS53aWR0aH1weCwgJHt0aGlzLnNlcnZpY2UuaGVpZ2h0fXB4LCAwKWA7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwiLXdlYmtpdC10cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmICF0aGlzLnNlcnZpY2Uud2FzSnVzdE9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItY29udGFpbmVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wdXNoYWJsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXIpXG4gICAgcHVibGljIHNpZGViYXI6U3VpU2lkZWJhcjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhclNpYmxpbmcpXG4gICAgcHVibGljIHNpYmxpbmc6U3VpU2lkZWJhclNpYmxpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zaWRlYmFyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcnZpY2UgPSB0aGlzLnNpZGViYXIuc2VydmljZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2libGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhci1zaWJsaW5nPiBlbGVtZW50IHdpdGhpbiB0aGUgY29udGFpbmVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpYmxpbmcuc2VydmljZSA9IHRoaXMuc2VydmljZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTdWlTaWRlYmFyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhclNpYmxpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXItc2libGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2lkZWJhcixcbiAgICAgICAgU3VpU2lkZWJhckNvbnRhaW5lcixcbiAgICAgICAgU3VpU2lkZWJhclNpYmxpbmdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXJNb2R1bGUge31cbiIsImltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBoZWFkZXI6U3VpVGFiSGVhZGVyO1xuICAgIHB1YmxpYyBjb250ZW50OlN1aVRhYkNvbnRlbnQ7XG4gICAgcHVibGljIGluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGhlYWRlcjpTdWlUYWJIZWFkZXIsIGNvbnRlbnQ6U3VpVGFiQ29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gaGVhZGVyLmlkO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBoZWFkZXIgYW5kIGNvbnRlbnQgaXNBY3RpdmUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGluIHN5bmMuXG4gICAgICAgIHRoaXMuaGVhZGVyLmlzQWN0aXZlQ2hhbmdlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29udGVudC5pc0FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzQWN0aXZlIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICAvLyBVc2UgYHNldEFjdGl2ZVN0YXRlYCBzbyBhcyBub3QgdG8gZmlyZSAnZXh0ZXJuYWwgY2hhbmdlcycgZXZlbnQuXG4gICAgICAgIHRoaXMuaGVhZGVyLnNldEFjdGl2ZVN0YXRlKGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNEaXNhYmxlZCBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNEaXNhYmxlZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgSW5wdXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUYWJIZWFkZXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFiSGVhZGVyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pdGVtXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInN1aVRhYkhlYWRlclwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICAvLyBJbnRlcm5hbGx5IGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGhlYWRlciBpcyBhY3RpdmUuXG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIC8vIEVuYWJsZXMgdXNlIG9mIFsoaXNBY3RpdmUpXSBzbyBzdGF0ZSBjYW4gYmUgc2V0IHVzaW5nIGJvb2xlYW5zLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBpc0FjdGl2ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyBvbmx5IHdoZW4gYGlzQWN0aXZlYCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGlucHV0LlxuICAgIHB1YmxpYyBpc0FjdGl2ZUV4dGVybmFsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGRlYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkFjdGl2YXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGlzIGRlYWN0aXZhdGVkIGhhdmluZyBwcmV2aW91c2x5IGJlZW4gYWN0aXZhdGVkLlxuICAgIEBPdXRwdXQoXCJkZWFjdGl2YXRlXCIpXG4gICAgcHVibGljIG9uRGVhY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBPbmx5IHVzZWQgYnkgQElucHV0KCksIHJ1bnMgd2hlbmV2ZXIgdXNlciBpbnB1dCBjaGFuZ2VzIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIFJ1biBpbiB0aW1lb3V0IGJlY2F1c2UgYGlzRGlzYWJsZWRgIGNhbiBwcm9oaWJpdCB1c2VyIGZyb20gY2hhbmdpbmcgYGlzQWN0aXZlYC5cbiAgICAgICAgLy8gc28gdXBkYXRlIGlzIGRlbGF5ZWQgdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3IuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhbGxvdyBjaGFuZ2UgaWYgdGFiIGhlYWRlciBpcyBub3QgZGlzYWJsZWQuXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICF0aGlzLmlzRGlzYWJsZWQgPyBhY3RpdmUgOiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlU3RhdGUoaXNBY3RpdmUpO1xuXG4gICAgICAgICAgICAvLyBGaXJlICdleHRlcm5hbCBjaGFuZ2UnIGV2ZW50IGFzIHVzZXIgaW5wdXQgaGFzIG9jY3VyZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2UuZW1pdChpc0FjdGl2ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKGRpc2FibGVkOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdmFsdWUgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRvIGN1cnJlbnQgb25lLlxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCAhPT0gZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICAgICAgLy8gSWYgbm93IGRpc2FibGVkLCB0aGVuIHRhYiBoZWFkZXIgbXVzdCBiZSBkZWFjdGl2YXRlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbGx5IHVwZGF0ZSBhY3RpdmUgc3RhdGUuXG4gICAgcHVibGljIHNldEFjdGl2ZVN0YXRlKGFjdGl2ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgKGNhc3QpIGFjdGl2ZSB2YWx1ZSBoYXMgY2hhbmdlZDpcbiAgICAgICAgaWYgKCEhdGhpcy5faXNBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRvIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IGFjdGl2ZTtcblxuICAgICAgICAgICAgLy8gRmlyZSB0aGUgYXBwcm9wcmlhdGUgYWN0aXZhdGlvbiBldmVudC5cbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdhcmRsZXNzLCBlbWl0IGEgY2hhbmdlIHRvIGBpc0FjdGl2ZWAsIHNvIFsoaXNBY3RpdmUpXSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UuZW1pdChhY3RpdmUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgdGFiIHdoZW4gY2xpY2tlZCwgc28gbG9uZyBhcyBpdCBpc24ndCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiQ29udGVudF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJDb250ZW50IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50YWJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiQ29udGVudFwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIi4uL2NsYXNzZXMvdGFiXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS10YWJzZXRcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYnNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiSGVhZGVyKVxuICAgIHByaXZhdGUgX3RhYkhlYWRlcnM6UXVlcnlMaXN0PFN1aVRhYkhlYWRlcj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkNvbnRlbnQpXG4gICAgcHJpdmF0ZSBfdGFiQ29udGVudHM6UXVlcnlMaXN0PFN1aVRhYkNvbnRlbnQ+O1xuXG4gICAgLy8gTGlzdCBvZiBhbGwgdGFicyBpbiB0aGUgdGFic2V0LlxuICAgIHB1YmxpYyB0YWJzOlRhYltdO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgIHByaXZhdGUgX2FjdGl2ZVRhYjpUYWI7XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZVRhYigpOlRhYiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWI7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBzZXR0aW5nIGEgdGFiIGFzIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiwgaXQgYXV0b21hdGljYWxseSBnYWluc1xuICAgIC8vIGBpc0FjdGl2ZWAgc3RhdHVzIChzYXZlcyBsaXR0ZXJpbmcgYGlzQWN0aXZlID0gdHJ1ZWAgZXZlcnl3aGVyZSkuXG4gICAgcHVibGljIHNldCBhY3RpdmVUYWIodGFiOlRhYikge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIG51bWJlciBvZiB0aW1lcyBgaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZGAgaXMgY2FsbGVkLlxuICAgIHByaXZhdGUgX2JhcnJpZXJDb3VudDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gW107XG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBGaXJlIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCB3aGVuIHRoZSBxdWVyeSBsaXN0cyBjaGFuZ2UuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCkpO1xuICAgICAgICB0aGlzLl90YWJDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGx5IGxvYWQgdGhlIHRhYnMuXG4gICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBlaXRoZXIgdGhlIHRhYiBoZWFkZXJzIG9yIHRhYiBjb250ZW50cyBxdWVyeSBsaXN0cyB1cGRhdGUuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIGFyZSB1c2luZyBhICdjb3VudGluZyBiYXJyaWVyIG9mIG4gPSAyJywgaS5lLiB0aGUgY29kZSB3aXRoaW4gb25seSBydW5zIGFmdGVyIHRoZSBtZXRob2QgaXMgY2FsbGVkIHR3aWNlLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgYm90aCB0aGUgaGVhZGVycyBhbmQgY29udGVudHMgcXVlcnkgbGlzdHMgY2FuIHVwZGF0ZSBiZWZvcmUgd2UgcnVuIGNvZGUgdGhhdCBtYXRjaGVzIHRoZSB0d28gdXAuXG4gICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCsrO1xuXG4gICAgICAgIGlmICh0aGlzLl9iYXJyaWVyQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBiYXJyaWVyIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9iYXJyaWVyQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLmxvYWRUYWJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25uZWN0cyB0YWIgaGVhZGVycyB0byB0YWIgY29udGVudHMsIGFuZCBjcmVhdGVzIGEgdGFiIGluc3RhbmNlIGZvciBlYWNoIHBhaXJpbmcuXG4gICAgcHJpdmF0ZSBsb2FkVGFicygpOnZvaWQge1xuICAgICAgICAvLyBSZW1vdmUgYW55IHRhYnMgdGhhdCBubyBsb25nZXIgaGF2ZSBhbiBhc3NvY2lhdGVkIGhlYWRlci5cbiAgICAgICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+ICEhdGhpcy5fdGFiSGVhZGVycy5maW5kKHRIID0+IHRIID09PSB0LmhlYWRlcikpO1xuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIGxvYWRlZCBoZWFkZXJzIHdpdGggYXR0YWNoZWQgdGFiIGluc3RhbmNlcy5cbiAgICAgICAgICAgIC5maWx0ZXIodEggPT4gIXRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHRIID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fdGFiQ29udGVudHMuZmluZCh0QyA9PiB0Qy5pZCA9PT0gdEguaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGlmIGFuIGFzc29jaWF0ZWQgdGFiIGNvbnRlbnQgY2Fubm90IGJlIGZvdW5kIGZvciB0aGUgZ2l2ZW4gaGVhZGVyLlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFtzdWlUYWJIZWFkZXJdIG11c3QgaGF2ZSBhIHJlbGF0ZWQgW3N1aVRhYkNvbnRlbnRdLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFiIGluc3RhbmNlIGZvciB0aGlzIGhlYWRlciAmIGNvbnRlbnQgY29tYm8uXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gbmV3IFRhYih0SCwgY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gYW55IGV4dGVybmFsIGNoYW5nZXMgaW4gdGhlIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUuIEV4dGVybmFsIGNoYW5nZXMgYXJlIHRyaWdnZXJlZCBieSB1c2VyIGlucHV0LlxuICAgICAgICAgICAgICAgIHRhYi5oZWFkZXIuaXNBY3RpdmVFeHRlcm5hbENoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBpbnN0YW5jZSB0byB0aGUgbGlzdCBvZiB0YWJzLlxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBBc3NpZ24gZWFjaCB0YWIgYW4gaW5kZXggKHdoaWNoIGRlbm90ZXMgdGhlIG9yZGVyIHRoZXkgcGh5c2ljYWxseSBhcHBlYXIgaW4pLlxuICAgICAgICB0aGlzLl90YWJIZWFkZXJzXG4gICAgICAgICAgICAuZm9yRWFjaCgodEgsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnMuZmluZCh0ID0+IHQuaGVhZGVyID09PSB0SCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgICAgICB0YWIuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNvcnQgdGhlIHRhYnMgYnkgdGhlaXIgaW5kZXguXG4gICAgICAgIHRoaXMudGFicy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlVGFiKSB7IC8vIENoZWNrIGlmIHRoZXJlIGFyZSBubyBjdXJyZW50IGV4aXN0aW5nIGFjdGl2ZSB0YWJzLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgYWN0aXZhdGUgdGhlIGZpcnN0IGF2YWlsYWJsZSB0YWIuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRmlyc3RUYWIoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50YWJzLmZpbmQodCA9PiB0ID09PSB0aGlzLmFjdGl2ZVRhYikpIHsgLy8gTyd3aXNlIGNoZWNrIGlmIGN1cnJlbnQgYWN0aXZlIHRhYiBoYXMgYmVlbiBkZWxldGVkLlxuICAgICAgICAgICAgLy8gSWYgc28sIHdlIG11c3QgZmluZCB0aGUgY2xvc2VzdC5cbiAgICAgICAgICAgIC8vIFVzZSBgc2V0VGltZW91dGAgYXMgdGhpcyBjYXVzZXMgYSAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvciBvJ3dpc2UuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRoaXMuYWN0aXZlVGFiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRXJyb3IgaWYgdGhlcmUgYXJlbid0IGFueSB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGhhdmUgbm8gdGFicyFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBoZWFkZXIncyBhY3RpdmUgc3RhdGUgaXMgZXh0ZXJuYWxseSBjaGFuZ2VkLlxuICAgIHByaXZhdGUgb25IZWFkZXJBY3RpdmVDaGFuZ2VkKHRhYjpUYWIpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGhhcyBiZWNvbWUgYWN0aXZhdGVkLCBidXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAodGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiICE9PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIG9mIHRoZSB0YWJzLlxuICAgICAgICAgICAgdGhpcy50YWJzLmZpbHRlcih0ID0+IHQgIT09IHRhYikuZm9yRWFjaCh0ID0+IHQuaXNBY3RpdmUgPSBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgdG8gdGhpcyBvbmUuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBkZWFjdGl2YXRlZCwgYnV0IHdhcyBwcmV2aW91c2x5IHRoZSBhY3RpdmUgdGFiOlxuICAgICAgICBpZiAoIXRhYi5pc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGFiKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCB0YWIgdG8gaXQuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ2xvc2VzdFRhYih0YWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBpbiB0aGUgc2V0LlxuICAgIHB1YmxpYyBhY3RpdmF0ZUZpcnN0VGFiKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy50YWJzWzBdO1xuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlcyB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGEgZ2l2ZW4gb25lLlxuICAgIHB1YmxpYyBhY3RpdmF0ZUNsb3Nlc3RUYWIodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIGxldCBuZXh0QXZhaWxhYmxlOlRhYiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiJ3MgaW5kZXggaXMgaGlnaGVyIHRoYW4gYWxsIGF2YWlsYWJsZSB0YWJzLFxuICAgICAgICBpZiAodGFiLmluZGV4ID49IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBsYXN0IHRhYi5cbiAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGhpcy50YWJzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhhdCBkaWRuJ3Qgd29yaywgdHJ5IHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgIGlmICghbmV4dEF2YWlsYWJsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRhYikpIHsgLy8gV2hlbiB0aGUgZXhpdGVkIHRhYiBubyBsb25nZXIgZXhpc3RzLFxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBhIHRhYiBhdCB0aGUgc2FtZSBpbmRleC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW3RhYi5pbmRleF07XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBPciBpZiB0aGUgZXhpdGVkIHRhYiBzdGlsbCBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gR28gdG8gdGhlIHRhYiBpbW1lZGlhdGVseSB0byB0aGUgbGVmdC5cbiAgICAgICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW01hdGgubWF4KHRhYi5pbmRleCAtIDEsIDApXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSBjaG9zZW4gdGFiIGlzIGRpc2FibGVkLFxuICAgICAgICBpZiAobmV4dEF2YWlsYWJsZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgY2xvc2VzdCBhdmFpbGFibGUgdGFiIHRvIGl0LlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKG5leHRBdmFpbGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSBuZXh0QXZhaWxhYmxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRhYnNldCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFic2V0XCI7XG5pbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUYWJzZXQsXG4gICAgICAgIFN1aVRhYkhlYWRlcixcbiAgICAgICAgU3VpVGFiQ29udGVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vLyBDb2xsZWN0aW9uc1xuaW1wb3J0IHtcbiAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgIFN1aVBhZ2luYXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vY29sbGVjdGlvbnMvaW50ZXJuYWxcIjtcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHtcbiAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vbW9kdWxlcy9pbnRlcm5hbFwiO1xuXG4vLyBCZWhhdmlvcnNcbmltcG9ydCB7XG4gICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2JlaGF2aW9ycy9pbnRlcm5hbFwiO1xuXG4vLyBNaXNjXG5pbXBvcnQge1xuICAgIFN1aVV0aWxpdHlNb2R1bGVcbn0gZnJvbSBcIi4vbWlzYy9pbnRlcm5hbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy8gQ29sbGVjdGlvbnNcbiAgICAgICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICAgICAgU3VpUGFnaW5hdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNb2R1bGVzXG4gICAgICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgICAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgICAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICAgICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgICAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgICAgICBTdWlUYWJzTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIEJlaGF2aW9yc1xuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTWlzY1xuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2R1bGUge31cbiJdLCJuYW1lcyI6WyIoLyoqIEB0eXBlIHs/fSAqLyAoJGV4dGVuZCkpLmRlZmF1bHQiLCJmb3JtYXQiLCJpc1VBV2ViVmlld1tcImRlZmF1bHRcIl0iLCJib3dzZXIubW9iaWxlIiwiYm93c2VyLnRhYmxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxJQUFJLEdBQWlC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