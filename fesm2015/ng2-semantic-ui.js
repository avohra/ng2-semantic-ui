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

export { SuiModule, SuiLocalizationModule, SuiLocalizationService, SuiMessageModule, SuiPaginationModule, SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, DatepickerMode, SuiDimmerModule, SuiDropdownModule, DropdownAutoCloseType, SuiModalModule, SuiModalService, Modal as SuiModal, ModalControls, ActiveModal as SuiActiveModal, ModalConfig, TemplateModalConfig, ComponentModalConfig, ModalTemplate, ModalSize, SuiPopupModule, SuiPopupConfig, PopupTrigger, PositioningPlacement as PopupPlacement, SuiProgressModule, SuiRatingModule, SuiSearchModule, SearchService, SuiSelectModule, SuiSidebarModule, SidebarDirection, SidebarTransition, SuiTabsModule, SuiTransitionModule, SuiTransition, Transition, TransitionDirection, TransitionController, SuiUtilityModule, SuiLocalizationModule as ɵb, SuiLocalizationService as ɵa, SuiMessage as ɵc, SuiMessageModule as ɵd, SuiPagination as ɵe, SuiPaginationModule as ɵf, CustomValidator as ɵbt, customValidatorFactory as ɵbu, CustomValueAccessor as ɵbv, customValueAccessorFactory as ɵbw, DatePrecision as ɵbx, SuiComponentFactory as ɵby, SuiUtilityModule as ɵbz, SuiAccordionModule as ɵi, SuiAccordion as ɵh, SuiAccordionPanel as ɵg, SuiCheckboxModule as ɵo, SuiCheckbox as ɵj, SuiCheckboxValueAccessor as ɵk, SuiRadio as ɵl, SuiRadioValueAccessor as ɵm, SuiRadioManager as ɵn, SuiCollapseModule as ɵq, SuiCollapse as ɵp, SuiCalendarViewTitle as ɵr, SuiDatepicker as ɵs, SuiDatepickerModule as ɵbf, SuiCalendarItem as ɵt, SuiDatepickerDirective as ɵu, SuiDatepickerDirectiveValidator as ɵw, SuiDatepickerDirectiveValueAccessor as ɵv, SuiDatepickerInputDirective as ɵx, CalendarRangeService as ɵy, CalendarView as ɵz, SuiCalendarDateView as ɵba, SuiCalendarHourView as ɵbb, SuiCalendarMinuteView as ɵbc, SuiCalendarMonthView as ɵbd, SuiCalendarYearView as ɵbe, SuiDimmer as ɵbg, SuiDimmerModule as ɵbh, SuiDropdown as ɵbk, SuiDropdownMenu as ɵbj, SuiDropdownMenuItem as ɵbi, SuiDropdownModule as ɵbl, ModalConfig as ɵbm, ModalControls as ɵbn, ModalTemplate as ɵbo, SuiModalDimmer as ɵbq, SuiModal as ɵbp, SuiModalModule as ɵbs, SuiModalService as ɵbr, SuiPopupComponentController as ɵca, PopupConfig as ɵcb, SuiPopupController as ɵcc, SuiPopupTemplateController as ɵcd, SuiPopup as ɵcf, SuiPopupArrow as ɵce, SuiPopupDirective as ɵcg, SuiPopupModule as ɵci, SuiPopupConfig as ɵch, SuiProgress as ɵcj, SuiProgressModule as ɵck, SuiRating as ɵcl, SuiRatingValueAccessor as ɵcm, SuiRatingModule as ɵcn, SuiSearch as ɵcp, SuiSearchResult as ɵco, SuiSearchModule as ɵcq, SuiSelectBase as ɵcr, SuiMultiSelect as ɵct, SuiMultiSelectValueAccessor as ɵcu, SuiMultiSelectLabel as ɵcs, SuiSelect as ɵcw, SuiSelectValueAccessor as ɵcx, SuiSelectOption as ɵcv, SuiSelectSearch as ɵcy, SuiSelectModule as ɵcz, SuiSidebar as ɵdc, SuiSidebarContainer as ɵda, SuiSidebarSibling as ɵdb, SuiSidebarModule as ɵdd, SuiTabset as ɵde, SuiTabContent as ɵdf, SuiTabHeader as ɵdg, SuiTabsModule as ɵdh, SuiTransition as ɵdi, SuiTransitionModule as ɵdj };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNlbWFudGljLXVpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9sb2NhbGVzL2VuLUdCLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vbG9jYWxpemF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RyYW5zaXRpb24vZGlyZWN0aXZlcy90cmFuc2l0aW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvbWVzc2FnZS9jb21wb25lbnRzL21lc3NhZ2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9tZXNzYWdlL21lc3NhZ2UubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvY29sbGVjdGlvbnMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9jb2xsZWN0aW9ucy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9kaXJlY3RpdmVzL2NvbGxhcHNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL2hlbHBlcnMvY3VzdG9tLXZhbGlkYXRvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvaGVscGVycy9kYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbWlzYy91dGlsL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9taXNjL3V0aWwvc2VydmljZXMvcG9zaXRpb25pbmcuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21pc2MvdXRpbC91dGlsLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9yYWRpby50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvY2FsZW5kYXItdmlldy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2NhbGVuZGFyLW1hcHBpbmdzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1jb21wYXJlci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9oZWxwZXJzL2RhdGUtZm5zLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2NsYXNzZXMvZGF0ZS1wYXJzZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvY29tcG9uZW50cy9kYXRlcGlja2VyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY29tcG9uZW50cy9wb3B1cC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbXBvbmVudC1jb250cm9sbGVyLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLXRlbXBsYXRlLWNvbnRyb2xsZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3BvcHVwL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9kYXRlLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvaG91ci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21pbnV0ZS12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL21vbnRoLXZpZXcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MveWVhci12aWV3LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2RpbW1lci9kaW1tZXIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9kcm9wZG93bi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvY2xhc3Nlcy9hY3RpdmUtbW9kYWwudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29uZmlnLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbnRyb2xzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLXRlbXBsYXRlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3JhdGluZy9jb21wb25lbnRzL3JhdGluZy50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvcmF0aW5nL3JhdGluZy5tb2R1bGUudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NsYXNzZXMvc2VsZWN0LWJhc2UudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9jb21wb25lbnRzL211bHRpLXNlbGVjdC1sYWJlbC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvbW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmcudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jbGFzc2VzL3RhYi50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiLCJuZzovL25nMi1zZW1hbnRpYy11aS9tb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy9jb21wb25lbnRzL3RhYnNldC50cyIsIm5nOi8vbmcyLXNlbWFudGljLXVpL21vZHVsZXMvdGFicy90YWIubW9kdWxlLnRzIiwibmc6Ly9uZzItc2VtYW50aWMtdWkvc3VpLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWx1ZXNcIjtcblxuY29uc3QgZW5HQjpJTG9jYWxlVmFsdWVzID0ge1xuICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFtcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJcbiAgICAgICAgXSxcbiAgICAgICAgd2Vla2RheXM6IFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIlxuICAgICAgICBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbXG4gICAgICAgICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXG4gICAgICAgIF0sXG4gICAgICAgIHdlZWtkYXlzTmFycm93OiBbXG4gICAgICAgICAgICBcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIlxuICAgICAgICBdLFxuICAgICAgICB0aW1lc09mRGF5OiBbXG4gICAgICAgICAgICBcImEubS5cIiwgXCJwLm0uXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheVVwcGVyY2FzZTogW1xuICAgICAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICAgICAgXSxcbiAgICAgICAgdGltZXNPZkRheUxvd2VyY2FzZTogW1xuICAgICAgICAgICAgXCJhbVwiLCBcInBtXCJcbiAgICAgICAgXSxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICAgdGltZTogXCJoOm1tIEFcIixcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIkQgTU1NTSBZWVlZIGg6bW0gQVwiLFxuICAgICAgICAgICAgZGF0ZTogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgICAgbW9udGg6IFwiTU1NTSBZWVlZXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIllZWVlcIlxuICAgICAgICB9LFxuICAgICAgICBmaXJzdERheU9mV2VlazogMVxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICBub1Jlc3VsdHM6IHtcbiAgICAgICAgICAgIGhlYWRlcjogXCJObyBSZXN1bHRzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2VhcmNoIHJldHVybmVkIG5vIHJlc3VsdHMuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIG5vUmVzdWx0c01lc3NhZ2U6IFwiTm8gcmVzdWx0c1wiLFxuICAgICAgICBzaW5nbGU6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBvbmVcIlxuICAgICAgICB9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0Li4uXCIsXG4gICAgICAgICAgICBtYXhTZWxlY3RlZE1lc3NhZ2U6IFwiTWF4ICN7bWF4fSBzZWxlY3Rpb25zXCIsXG4gICAgICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IFwiI3tjb3VudH0gc2VsZWN0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbkdCO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2NhbGVWYWx1ZXMsIElQYXJ0aWFsTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW50ZXJmYWNlcy92YWx1ZXNcIjtcbmltcG9ydCBlbkdCIGZyb20gXCIuLi9sb2NhbGVzL2VuLUdCXCI7XG5pbXBvcnQgKiBhcyAkZXh0ZW5kIGZyb20gXCJleHRlbmRcIjtcblxuZnVuY3Rpb24gZGVlcENsb25lPFQ+KG9iajpUKTpUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gZGVlcEV4dGVuZDxULCBVPih0YXJnZXQ6VCwgc291cmNlOlUpOlQgJiBVIHtcbiAgICAvLyBSb2xsdXAuLi5cbiAgICBjb25zdCBleHRlbmQgPSAoJGV4dGVuZCBhcyBhbnkpLmRlZmF1bHQgfHwgJGV4dGVuZDtcbiAgICByZXR1cm4gZXh0ZW5kKHRydWUsIHRhcmdldCwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbGFuZyhsYW5ndWFnZTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxhbmd1YWdlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIi1cIiwgXCJcIik7XG59XG5cbmludGVyZmFjZSBJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyIHtcbiAgICBbbmFtZTpzdHJpbmddOklQYXJ0aWFsTG9jYWxlVmFsdWVzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZmFsbGJhY2tWYWx1ZXM6SUxvY2FsZVZhbHVlcztcbiAgICBwcml2YXRlIF92YWx1ZXM6SUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lcjtcblxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFuZ3VhZ2VVcGRhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLl9mYWxsYmFja1ZhbHVlcyA9IGVuR0I7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IFwiZW4tR0JcIjtcbiAgICAgICAgdGhpcy5sb2FkKFwiZW4tR0JcIiwgZW5HQik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGlmIChsYW5nKHRoaXMuX2xhbmd1YWdlKSAhPT0gbGFuZyhsYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChsYW5ndWFnZTpzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTpJTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGVlcENsb25lKHRoaXMuX2ZhbGxiYWNrVmFsdWVzKTtcbiAgICAgICAgaWYgKCF0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExvY2FsZSAke2xhbmd1YWdlfSBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVlcEV4dGVuZCh2YWx1ZXMsIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pO1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlPFQgZXh0ZW5kcyBrZXlvZiBJTG9jYWxlVmFsdWVzPihcbiAgICAgICAgdmFsdWVzOklMb2NhbGVWYWx1ZXNbVF0sXG4gICAgICAgIG92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElMb2NhbGVWYWx1ZXNbVF0+XG4gICAgKTpJTG9jYWxlVmFsdWVzW1RdIHtcbiAgICAgICAgcmV0dXJuIGRlZXBFeHRlbmQoZGVlcENsb25lKHZhbHVlcyksIG92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldID0gZGVlcENsb25lKHZhbHVlcyk7XG4gICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgZGVlcEV4dGVuZCh0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZSh2YWx1ZTpzdHJpbmcsIHZhcmlhYmxlczpbc3RyaW5nLCBzdHJpbmddW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YXJpYWJsZXMucmVkdWNlKChzLCBbaywgdl0pID0+IHMucmVwbGFjZShuZXcgUmVnRXhwKGAjeyR7a319YCwgXCJnXCIpLCB2KSwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbU3VpTG9jYWxpemF0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTG9jYWxpemF0aW9uTW9kdWxlIHt9XG4iLCIvLyBQb3NzaWJsZSBkaXJlY3Rpb25zIGZvciBhIHRyYW5zaXRpb24uXG5leHBvcnQgZW51bSBUcmFuc2l0aW9uRGlyZWN0aW9uIHtcbiAgICBJbixcbiAgICBPdXQsXG4gICAgRWl0aGVyLFxuICAgIFN0YXRpY1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6c3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246VHJhbnNpdGlvbkRpcmVjdGlvbjtcblxuICAgIC8vIENvbnZlcnRzIFRyYW5zaXRpb25EaXJlY3Rpb24gdG8gY2xhc3MgbmFtZS5cbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbkNsYXNzKCk6c3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluOiByZXR1cm4gXCJpblwiO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDogcmV0dXJuIFwib3V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGluZGl2aWR1YWwgY2xhc3NlcyBmb3IgdGhlIHRyYW5zaXRpb24sIGUuZy4gXCJmYWRlIG91dFwiIC0+IFtcImZhZGVcIiwgXCJvdXRcIl0uXG4gICAgcHVibGljIHJlYWRvbmx5IGNsYXNzZXM6c3RyaW5nW107XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246bnVtYmVyID0gMjUwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTooKCkgPT4gdm9pZCkgPSAoKSA9PiB7fSkge1xuXG4gICAgICAgIHRoaXMudHlwZSA9IG5hbWU7XG5cbiAgICAgICAgLy8gV2Ugc2V0IGEgbWluaW11bSBkdXJhdGlvbiBvZiAxbXMsIHRvIGdpdmUgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW1tZWRpYXRlIHRyYW5zaXRpb25cbiAgICAgICAgLy8gd2hpbHN0IGFsbG93aW5nIHBvc2l0aW9uaW5nIGNhbGN1bGF0aW9ucyB0byBoYXBwZW4gd2l0aG91dCBhIHZpc2libGUgZmxpY2tlci5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCAxKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy50eXBlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgICAvLyBVc2VkIHRvIGRlbGF5IGFuaW1hdGlvbnMgdW50aWwgd2UgaGF2ZSBhbiBlbGVtZW50IHRvIGFuaW1hdGUuXG4gICAgcHJpdmF0ZSBnZXQgX2lzUmVhZHkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9lbGVtZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9jaGFuZ2VEZXRlY3RvciAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgJ2Rpc3BsYXknIHN0eWxlIHdoZW4gdmlzaWJsZS5cbiAgICBwcml2YXRlIF9kaXNwbGF5OnN0cmluZztcblxuICAgIC8vIFN0b3JlcyBxdWV1ZWQgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfcXVldWU6VHJhbnNpdGlvbltdO1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGFuZCB3aGlsZSBpdCBpcyB0cmFuc2l0aW9uaW5nIG91dC5cbiAgICBwcml2YXRlIF9pc1Zpc2libGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmQgbm90IHdoaWxlIGl0IGlzIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBfaXNIaWRkZW46Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlkZGVuO1xuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGZpcnN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUZpcnN0KCk6VHJhbnNpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZVswXTtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBsYXN0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlLlxuICAgIHByaXZhdGUgZ2V0IF9xdWV1ZUxhc3QoKTpUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlW3RoaXMuX3F1ZXVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgc2V0VGltZW91dCBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHRoZSBhbmltYXRpb24gY2FsbGJhY2suXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uVGltZW91dDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luaXRpYWxseVZpc2libGU6Ym9vbGVhbiA9IHRydWUsIGRpc3BsYXk6c3RyaW5nID0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8vIGlzSW5pdGlhbGx5VmlzaWJsZSBzZXRzIHdoZXRoZXIgdGhlIGVsZW1lbnQgc3RhcnRzIG91dCB2aXNpYmxlLlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBpc0luaXRpYWxseVZpc2libGU7XG4gICAgICAgIHRoaXMuX2lzSGlkZGVuID0gIXRoaXMuX2lzVmlzaWJsZTtcblxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgICAgICB0aGlzLl9pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHJlbmRlcmVyIHRvIGJlIHVzZWQgZm9yIGFuaW1hdGluZy5cbiAgICBwdWJsaWMgcmVnaXN0ZXJSZW5kZXJlcihyZW5kZXJlcjpSZW5kZXJlcjIpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgZWxlbWVudCB0byBwZXJmb3JtIHRoZSBhbmltYXRpb25zIG9uLlxuICAgIHB1YmxpYyByZWdpc3RlckVsZW1lbnQoZWxlbWVudDpFbGVtZW50UmVmKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gZGV0ZWN0IGNoYW5nZXMgd2hlbiB1c2luZyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2guXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpOnZvaWQge1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvciA9IGNoYW5nZURldGVjdG9yO1xuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGUodHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVGVzdCBpZiB0cmFuc2l0aW9uIGlzIG9uZSBvZiB0aGUgbGlzdCB0aGF0IGRvZXNuJ3QgY2hhbmdlIHRoZSB2aXNpYmxlIHN0YXRlLlxuICAgICAgICAvLyBTaG91bGQgdGhlc2UgZXZlbnR1YWxseSBiZWNvbWUgY2xhc3Nlcz9cbiAgICAgICAgY29uc3QgaXNEaXJlY3Rpb25sZXNzID0gW1wiamlnZ2xlXCIsIFwiZmxhc2hcIiwgXCJzaGFrZVwiLCBcInB1bHNlXCIsIFwidGFkYVwiLCBcImJvdW5jZVwiXS5pbmRleE9mKHRyYW5zaXRpb24udHlwZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNEaXJlY3Rpb25sZXNzKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uU3RhdGljO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09IHVuZGVmaW5lZCB8fCB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBvcHBvc2l0ZSBvZiB0aGUgY3VycmVudCB2aXNpYmxlIHN0YXRlIGF1dG9tYXRpY2FsbHkgaWYgbm90IHNldCwgb3Igc2V0IHRvIGVpdGhlciBkaXJlY3Rpb24uXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMuX2lzVmlzaWJsZSA/IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0IDogVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZUxhc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZSBhbHJlYWR5LCBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgb3Bwb3NpdGUgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGF0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi5kaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3F1ZXVlTGFzdC5kaXJlY3Rpb24gPT09IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24uZGlyZWN0aW9uID0gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBpdC5cbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0cmFuc2l0aW9uKTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtVHJhbnNpdGlvbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkgfHwgdGhpcy5faXNBbmltYXRpbmcgfHwgIXRoaXMuX3F1ZXVlRmlyc3QpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHRyYW5zaXRpb24gdW50aWwgd2UgYXJlIHJlYWR5LCBvciBpZiB3ZSBhcmUgYW5pbWF0aW5nLCBvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRyYW5zaXRpb25zIGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fcXVldWVGaXJzdDtcblxuICAgICAgICAvLyBTZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgU2VtYW50aWMgVUkgc3R5bGVzIGZvciB0cmFuc2l0aW9uaW5nLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW9uRHVyYXRpb25gLCBgJHt0cmFuc2l0aW9uLmR1cmF0aW9ufW1zYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQsIGBkaXNwbGF5YCwgdGhpcy5fZGlzcGxheSk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSB7XG4gICAgICAgICAgICAvLyBVbnNldCBoaWRkZW4gaWYgd2UgYXJlIHRyYW5zaXRpb25pbmcgaW4uXG4gICAgICAgICAgICB0aGlzLl9pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCB0aGUgbGVuZ3RoIG9mIHRoZSBhbmltYXRpb24gYmVmb3JlIGNhbGxpbmcgdGhlIGNvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5maW5pc2hUcmFuc2l0aW9uKHRyYW5zaXRpb24pLCB0cmFuc2l0aW9uLmR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhIHRyYW5zaXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICBwcml2YXRlIGZpbmlzaFRyYW5zaXRpb24odHJhbnNpdGlvbjpUcmFuc2l0aW9uKTp2b2lkIHtcbiAgICAgICAgLy8gVW5zZXQgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgJiBzdHlsZXMgZm9yIHRyYW5zaXRpb25pbmcuXG4gICAgICAgIHRyYW5zaXRpb24uY2xhc3Nlcy5mb3JFYWNoKGMgPT4gdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudCwgYykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50LCBgYW5pbWF0aW5nYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb24uZGlyZWN0aW9uQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQsIGBhbmltYXRpb25EdXJhdGlvbmApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50LCBgZGlzcGxheWApO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmRpcmVjdGlvbiA9PT0gVHJhbnNpdGlvbkRpcmVjdGlvbi5Jbikge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBqdXN0IGFuaW1hdGVkIGluLCB3ZSBhcmUgbm93IHZpc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uZGlyZWN0aW9uID09PSBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2l0aW9uZWQgb3V0LCB3ZSBzaG91bGQgYmUgaW52aXNpYmxlIGFuZCBoaWRkZW4uXG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVzZXItZGVmaW5lZCB0cmFuc2l0aW9uIGNhbGxiYWNrLlxuICAgICAgICAgICAgdHJhbnNpdGlvbi5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcXVldWUuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgLy8gSW1tZWRpYXRlbHkgYXR0ZW1wdCB0byBwZXJmb3JtIGFub3RoZXIgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFN0b3BzIHRoZSBjdXJyZW50IHRyYW5zaXRpb24sIGxlYXZlcyB0aGUgcmVzdCBvZiB0aGUgcXVldWUgaW50YWN0LlxuICAgIHB1YmxpYyBzdG9wKHRyYW5zaXRpb246VHJhbnNpdGlvbiA9IHRoaXMuX3F1ZXVlRmlyc3QpOnZvaWQge1xuICAgICAgICBpZiAoIXRyYW5zaXRpb24gfHwgIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgIHRoaXMuZmluaXNoVHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wcyB0aGUgY3VycmVudCB0cmFuc2l0aW9uLCBhbmQgZW1wdGllcyB0aGUgcXVldWUuXG4gICAgcHVibGljIHN0b3BBbGwoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhclF1ZXVlKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIEVtcHRpZXMgdGhlIHRyYW5zaXRpb24gcXVldWUgYnV0IGNhcnJpZXMgb24gd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uLlxuICAgIHB1YmxpYyBjbGVhclF1ZXVlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFt0aGlzLl9xdWV1ZUZpcnN0XTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvdHJhbnNpdGlvbi1jb250cm9sbGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlUcmFuc2l0aW9uXVwiLFxuICAgIGV4cG9ydEFzOiBcInRyYW5zaXRpb25cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBFYWNoIHRyYW5zaXRpb24gbXVzdCBoYXZlIGEgY29udHJvbGxlciBhc3NvY2lhdGVkIHRoYXQgZGlzcGF0Y2hlcyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzdWlUcmFuc2l0aW9uKHRDOlRyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIC8vIFNldCB0aGUgdHJhbnNpdGlvbiBjb250cm9sbGVyIChlLmcuICc8ZGl2IFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+PC9kaXY+JykuXG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodEMpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNsYXNzOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlci5pc1Zpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmhpZGRlblwiKVxuICAgIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzSGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJvdGVjdGVkIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgLy8gSW5pdGlhbGlzZXMgdGhlIGNvbnRyb2xsZXIgd2l0aCB0aGUgaW5qZWN0ZWQgcmVuZGVyZXIgYW5kIGVsZW1lbnRSZWYuXG4gICAgcHVibGljIHNldFRyYW5zaXRpb25Db250cm9sbGVyKHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyUmVuZGVyZXIodGhpcy5fcmVuZGVyZXIpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyRWxlbWVudCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IodGhpcy5fY2hhbmdlRGV0ZWN0b3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3RyYW5zaXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVHJhbnNpdGlvblxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlUcmFuc2l0aW9uXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb25Nb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcbiAgICBkaXNtaXNzKCk6dm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1lc3NhZ2VcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInVpIG1lc3NhZ2Uge3sgY2xhc3MgfX1cIiAqbmdJZj1cIiFpc0Rpc21pc3NlZFwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Rpc21pc3NhYmxlXCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPjwvaT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBDU1MgQnVnICovXG4udWkuaWNvbi52aXNpYmxlLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2UgaW1wbGVtZW50cyBJTWVzc2FnZSB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNtaXNzYWJsZTpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImRpc21pc3NcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPjtcblxuICAgIHB1YmxpYyBpc0Rpc21pc3NlZDpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgY2xhc3M6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNtaXNzYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxTdWlNZXNzYWdlPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDMwMDtcblxuICAgICAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzbWlzcygpOnZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNtaXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdCh0aGlzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNZXNzYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZXNzYWdlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNZXNzYWdlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1lc3NhZ2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1lc3NhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBhZ2luYXRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT0xXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZS0xKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzUHJldmlvdXMoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKDEpXCIgKm5nSWY9XCJwYWdlc1swXSAhPT0gMVwiPlxuICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzWzBdID4gMlwiPi4uLjwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiBjbGFzcz1cIml0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInA9PT1wYWdlXCIgKGNsaWNrKT1cInNldFBhZ2UocClcIj5cbiAgICB7eyBwIH19XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIDwgcGFnZUNvdW50IC0gMVwiPi4uLjwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSAhPT0gcGFnZUNvdW50XCI+XG4gICAgICAgIDxzcGFuPnt7IHBhZ2VDb3VudCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZSsxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT1wYWdlQ291bnRcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnaW5hdGlvblwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgLy8gUHVibGljIG1lbWJlcnNcbiAgICBwdWJsaWMgcGFnZUNvdW50Om51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgLy8gUHJpdmF0ZSBtZW1iZXJzXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZT86bnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TaXplOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlczpudW1iZXJbXTtcbiAgICBwcml2YXRlIF9oYXNOYXZpZ2F0aW9uTGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhTaXplKCk6bnVtYmVyfHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTpudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIDEpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VTaXplOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uU2l6ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uU2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbGxlY3Rpb25TaXplKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2l6ZSA9IE1hdGgubWF4KHZhbHVlLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc05hdmlnYXRpb25MaW5rcygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5fbWF4U2l6ZSB8fCB0aGlzLnBhZ2VDb3VudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyB8fCBtYXhTaXplIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNOYXZpZ2F0aW9uTGlua3ModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNCb3VuZGFyeUxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5Sb3RhdGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0VsbGlwc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhZ2VzKCk6bnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gMTtcbiAgICAgICAgdGhpcy5oYXNOYXZpZ2F0aW9uTGlua3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JvdW5kYXJ5TGlua3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNFbGxpcHNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgaGFzUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlKG5ld1BhZ2U6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWU6bnVtYmVyID0gKE51bWJlci5pc0ludGVnZXIobmV3UGFnZSkpID8gTWF0aC5taW4oTWF0aC5tYXgobmV3UGFnZSwgMSksIHRoaXMucGFnZUNvdW50KSA6IDE7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGUgaG9va3NcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgdXBkYXRlUGFnZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5hcHBseVBhZ2luYXRpb24oKTtcblxuICAgICAgICB0aGlzLl9wYWdlcyA9IEFycmF5PG51bWJlcj4oZW5kIC0gc3RhcnQpXG4gICAgICAgICAgICAuZmlsbChzdGFydCArIDEpXG4gICAgICAgICAgICAubWFwKChzLCBpKSA9PiBzICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2luYXRpb24oKTpbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9ICh0aGlzLm1heFNpemUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHRoaXMubWF4U2l6ZSwgdGhpcy5wYWdlQ291bnQpIDogdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguY2VpbCh0aGlzLnBhZ2UgLyBtYXhTaXplKSAtIDE7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0T2Zmc2V0ID0gbWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlQ291bnQgLSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnQgPSBwYWdlICogbWF4U2l6ZTtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbc3RhcnQsIE1hdGgubWluKGVuZCwgdGhpcy5wYWdlQ291bnQpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFN1aVBhZ2luYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU3VpUGFnaW5hdGlvbl0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvbi1wYW5lbFwiLFxuICAgIGV4cG9ydEFzOiBcInN1aUFjY29yZGlvblBhbmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gVGl0bGUgLS0+XG48ZGl2IGNsYXNzPVwidGl0bGVcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIChjbGljayk9XCJ0b2dnbGUoKVwiID5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48IS0tIENvbnRlbnQgLS0+XG48ZGl2IFtzdWlDb2xsYXBzZV09XCIhaXNPcGVuXCIgW2NvbGxhcHNlRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBbY2xhc3MuYWN0aXZlXT1cImlzT3BlblwiIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBNYW51YWwgc3R5bGUgYXMgU2VtYW50aWMgVUkgcmVsaWVzIG9uID4gc2VsZWN0b3IgKi9cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAuNWVtIDAgMWVtO1xufVxuXG4vKiBBbm90aGVyID4gc2VsZWN0b3IgZml4ICovXG46aG9zdDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb25QYW5lbCB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gQ29udmVydCB0byBib29sZWFuIChmaXhlcyBmYWxzZSAhPSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICEhdmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT3BlbiAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiB0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhpcyBwYW5lbCwgd2UgbXVzdCBjbG9zZSB0aGUgb3RoZXIgb25lcy5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBjdXJyZW50IGFuaW1hdGlvbnMsIGFuZCBmYWRlIHRoZSBjb250ZW50cy4gVGhlIGRpcmVjdGlvbiBpcyBhdXRvbWF0aWMuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcImZhZGVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlcnZpY2UgZGVmaW5lZCB0cmFuc2l0aW9uIGR1cmF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldmVydCB0byBpbnN0YW50YW5lb3VzIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCB5ZXQgbG9hZGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNPcGVuQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBjbG9zZU90aGVyczpib29sZWFuO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIHBhbmVsczpTdWlBY2NvcmRpb25QYW5lbFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPdGhlcnMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwiZmFkZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDM1MDtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQYW5lbChwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIHBhbmVsLnNlcnZpY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHBhbmVsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VPdGhlclBhbmVscyhwYW5lbDpTdWlBY2NvcmRpb25QYW5lbCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGlmIChwICE9PSBwYW5lbCkge1xuICAgICAgICAgICAgICAgIHAuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2FjY29yZGlvbi1wYW5lbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBnZW5lcmFsIHN0eWxpbmcgaXNzdWVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpeCBmb3Igc3R5bGVkIGJvcmRlciBpc3N1ZSAqL1xuOmhvc3Quc3R5bGVkIHN1aS1hY2NvcmRpb24tcGFuZWw6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjY29yZGlvblwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY2xvc2VPdGhlcnMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZU90aGVycyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aUFjY29yZGlvblBhbmVsKVxuICAgIHByb3RlY3RlZCBfcGFuZWxzOlF1ZXJ5TGlzdDxTdWlBY2NvcmRpb25QYW5lbD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWNjb3JkaW9uIHNlcnZpY2UgaXMgdW5pcXVlIHRvIGVhY2ggc2V0IG9mIHBhbmVscy5cbiAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBTdWlBY2NvcmRpb25TZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0IHBhbmVscyBhZnRlciB0aGV5IGhhdmUgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fcGFuZWxzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUGFuZWxzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQYW5lbHMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFuZWxzLmZvckVhY2gocCA9PiB0aGlzLl9zZXJ2aWNlLmFkZFBhbmVsKHApKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aUNvbGxhcHNlXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNvbGxhcHNlIHtcbiAgICAvLyBTZXQgd2hlbiB0aGUgY29sbGFwc2UgaXMgb3BlbiwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZXhwYW5kZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNFeHBhbmRlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGNsb3NlZCwgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY29sbGFwc2VkXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0NvbGxhcHNpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIGFuaW1hdGluZy5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jb2xsYXBzaW5nXCIpXG4gICAgcHVibGljIGdldCBpc0NvbGxhcHNpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29sbGFwc2luZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0NvbGxhcHNpbmc6Ym9vbGVhbjtcblxuICAgIC8vIEZsYWcgdGhhdCBpcyBpbml0aWFsbHkgdHJ1ZSwgdG8gbWFrZSB0aGUgMXN0IGFuaW1hdGlvbiBpbnN0YW50YW5lb3VzLlxuICAgIHByaXZhdGUgX3ByaXN0aW5lOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc3VpQ29sbGFwc2UoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNvbGxhcHNlLCBgdHJ1ZWAgaXMgY29sbGFwc2VkLlxuICAgIHB1YmxpYyBzZXQgc3VpQ29sbGFwc2UodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xsYXBzZUR1cmF0aW9uOm51bWJlcjtcblxuICAgIHByaXZhdGUgZ2V0IF9hbmltYXRpb25EdXJhdGlvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlzdGluZSA/IDAgOiB0aGlzLmNvbGxhcHNlRHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbmltYXRpb24gZHVyYXRpb24gaXMgMzUwbXMgYnkgZGVmYXVsdC5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUR1cmF0aW9uID0gMzUwO1xuXG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEZvcmNpYmx5IGhpZGUgdGhlIG92ZXJmbG93IHNvIHRoYXQgY29udGVudCBpcyBub3QgdmlzaWJsZSBwYXN0IHRoZSBib3VuZGFyaWVzIG9mIGl0cyBjb250YWluZXIuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBob3N0IGVsZW1lbnQgZnJvbSBpdHMgc2Nyb2xsIGhlaWdodCB0byAwLlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgMCwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOnZvaWQge1xuICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgdGhlIGhvc3QgZWxlbWVudCBmcm9tIGl0cyBvZmZzZXQgaGVpZ2h0IHRvIGl0cyBzY3JvbGwgaGVpZ2h0LlxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCwgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVyZmxvdyBvdmVycmlkZSB0byBlbmFibGUgdXNlciBzdHlsaW5nIG9uY2UgYWdhaW4uXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwib3ZlcmZsb3dcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYW5pbWF0ZShzdGFydEhlaWdodDpudW1iZXIsIGVuZEhlaWdodDpudW1iZXIsIHJlbW92ZU9uQ29tcGxldGU6Ym9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICBjb25zdCBoZWlnaHRGcmFtZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c3RhcnRIZWlnaHR9cHhgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2VuZEhlaWdodH1weGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocmVtb3ZlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgaGVpZ2h0RnJhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGBhdXRvYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBjb2xsYXBzZSB1c2luZyB0aGUgd2ViIGFuaW1hdGlvbnMgQVBJLlxuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoXG4gICAgICAgICAgICBoZWlnaHRGcmFtZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBhbmltYXRpb24gb24gMXN0IGNvbGxhcHNlIC8gZXhwYW5zaW9uLlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlXCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJib3RoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5fcHJpc3RpbmUpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmlzdGluZSBmbGFnIHdoZW4gZmlyc3QgaGl0LlxuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSwgdGhpcy5jb2xsYXBzZUR1cmF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlDb2xsYXBzZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY29sbGFwc2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUNvbGxhcHNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDb2xsYXBzZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29sbGFwc2VNb2R1bGUgfSBmcm9tIFwiLi4vY29sbGFwc2UvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYWxpZGF0b3JIb3N0IHtcbiAgICB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3I8VCBleHRlbmRzIElDdXN0b21WYWxpZGF0b3JIb3N0PiBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdDpUKSB7fVxuXG4gICAgcHVibGljIG9uVmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3QudmFsaWRhdGUoYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcHJvdmlkZTpJbmplY3Rpb25Ub2tlbjwoRnVuY3Rpb24gfCBWYWxpZGF0b3IpW10+O1xuICAgIHVzZUV4aXN0aW5nOlR5cGU8YW55PjtcbiAgICBtdWx0aTpib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSh0eXBlOkZ1bmN0aW9uKTpJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFQgZXh0ZW5kcyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICB0aGlzLl9ob3N0LndyaXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVBY2Nlc3NvclByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWx1ZUFjY2Vzc29yUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xufVxuIiwiLy8gS2V5Ym9hcmQga2V5Y29kZXMuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBMZWZ0ID0gMzcsXG4gICAgVXAgPSAzOCxcbiAgICBSaWdodCA9IDM5LFxuICAgIERvd24gPSA0MCxcblxuICAgIEVzY2FwZSA9IDI3LFxuICAgIEVudGVyID0gMTMsXG5cbiAgICBTcGFjZSA9IDMyLFxuICAgIEJhY2tzcGFjZSA9IDhcbn1cblxuaW50ZXJmYWNlIElSZWN1cnNpdmVPYmplY3QgeyBbbmFtZTpzdHJpbmddOklSZWN1cnNpdmVPYmplY3Q7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHsgJGltcGxpY2l0OlQ7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJQXVnbWVudGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNsb3Nlc3Qoc2VsZWN0b3I6c3RyaW5nKTpJQXVnbWVudGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEhhbmRsZWRFdmVudCB7XG4gICAgcHVibGljIGV2ZW50SGFuZGxlZDpib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljQ2xhc3NlcyB7XG4gICAgW25hbWU6c3RyaW5nXTp0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgICBBcnJheToge1xuICAgICAgICByYW5nZShuOm51bWJlciwgb2Zmc2V0Om51bWJlciA9IDApOm51bWJlcltdIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheShuKS5maWxsKDApLm1hcCgoeiwgaSkgPT4gaSArIG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwPFQ+KGl0ZW1zOlRbXSwgZ3JvdXBMZW5ndGg6bnVtYmVyKTpUW11bXSB7XG4gICAgICAgICAgICBjb25zdCBtdXRhYmxlID0gaXRlbXMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczpUW11bXSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKG11dGFibGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG11dGFibGUuc3BsaWNlKDAsIGdyb3VwTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEJ5PFQ+KGl0ZW1zOlRbXSwgZmllbGQ6a2V5b2YgVCk6eyBbbmFtZTpzdHJpbmddOlRbXSB9IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2U8eyBbbmFtZTpzdHJpbmddOlRbXSB9PihcbiAgICAgICAgICAgICAgICAoZ3JvdXBzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBpW2ZpZWxkXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0gPSBncm91cHNbZmllbGRWYWx1ZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT2JqZWN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBmbGF0dGVuPFQ+KGl0ZW1zOlRbXVtdKTpUW10ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoaXMsIGkpID0+IGlzLmNvbmNhdChpKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFN0cmluZzoge1xuICAgICAgICBwYWRMZWZ0KHN0cjpzdHJpbmcsIGxlbmd0aDpudW1iZXIsIHBhZGRpbmc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAgICAgbGV0IHMgPSBzdHI7XG4gICAgICAgICAgICB3aGlsZSAocy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzID0gcGFkZGluZyArIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBET006IHtcbiAgICAgICAgcGFyc2VCb29sZWFuQXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlOmJvb2xlYW4pOmJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgT2JqZWN0OiB7XG4gICAgICAgIHJlYWRWYWx1ZTxULCBVPihvYmplY3Q6VCwgcGF0aD86c3RyaW5nKTpVIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QgYXMgYW55IGFzIFU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWN1cnNlZCA9IG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKHJlY3Vyc2VkIGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0KVtwW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2VkIGFzIGFueSBhcyBVO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE1hdGg6IHtcbiAgICAgICAgcm91bmQocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRVcChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kRG93bihyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICBtb2QocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgY29uc3QgcmVtID0gciAlIG47XG4gICAgICAgICAgICBpZiAocmVtIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW0gKyBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgZW51bSBEYXRlUHJlY2lzaW9uIHtcbiAgICBEZWNhZGUgPSAwLFxuICAgIFllYXIgPSAxLFxuICAgIE1vbnRoID0gMixcbiAgICBEYXRlID0gMyxcbiAgICBIb3VyID0gNCxcbiAgICBNaW51dGUgPSA1XG59XG5cbmV4cG9ydCBjb25zdCBEYXRlVXRpbCA9IHtcbiAgICBzdGFydE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIHJlc2V0QWxsOmJvb2xlYW4gPSBmYWxzZSk6RGF0ZSB7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihkYXRlLmdldEZ1bGxZZWFyKCkgLyAxMCkgKiAxMCArIDE7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihzdGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNldEFsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzZXRBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVuZE9mKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUpOkRhdGUge1xuICAgICAgICBzd2l0Y2ggKHByZWNpc2lvbikge1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgxMiwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDU5LCA1OSwgOTk5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKDU5LCA5OTkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGVxdWFsKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBhOkRhdGUsIGI6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCBlcXVhbCA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNaW51dGVzKCkgPT09IGIuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRIb3VycygpID09PSBiLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLk1vbnRoOlxuICAgICAgICAgICAgICAgIGVxdWFsID0gZXF1YWwgJiYgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZXF1YWwgPSBlcXVhbCAmJiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXF1YWw7XG4gICAgfSxcblxuICAgIG5leHQocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5hZGQocHJlY2lzaW9uLCBkYXRlLCAxKTtcbiAgICB9LFxuXG4gICAgYWRkKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBkYXRlOkRhdGUsIGk6bnVtYmVyKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5ZZWFyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTW9udGg6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChtb250aCArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IFV0aWwuTWF0aC5tb2QobW9udGggKyBpLCAxMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5EYXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Ib3VyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgaSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uTWludXRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG5cbiAgICBwcmV2aW91cyhwcmVjaXNpb246RGF0ZVByZWNpc2lvbiwgZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVQcmVjaXNpb24uRGVjYWRlOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciAtIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLlllYXI6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5Nb250aDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gVXRpbC5NYXRoLm1vZChtb250aCAtIDEsIDEyKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkRhdGU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRheSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlUHJlY2lzaW9uLkhvdXI6XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmdldEhvdXJzKCkgIT09IFV0aWwuTWF0aC5tb2QoaG91cnMgLSAxLCAyNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VycyAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZVByZWNpc2lvbi5NaW51dGU6XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGNsb25lKGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZixcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBsaWNpdENvbnRleHQ8VD4ge1xuICAgICRpbXBsaWNpdD86VDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aUNvbXBvbmVudEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOkFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6SW5qZWN0b3IpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50PFQ+KHR5cGU6VHlwZTxUPiwgcHJvdmlkZXJzOlByb3ZpZGVyW10gPSBbXSk6Q29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgLy8gUmVzb2x2ZSBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGNvbXBvbmVudHMgb2YgdHlwZSBgdHlwZWAuXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSBhcyBUeXBlPFQ+KTtcblxuICAgICAgICAvLyBSZXNvbHZlIGFuZCBjcmVhdGUgYW4gaW5qZWN0b3Igd2l0aCB0aGUgc3BlY2lmaWVkIHByb3ZpZGVycy5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgICAgICAgIHByb3ZpZGVycyxcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHVzaW5nIHRoZSBwcmV2aW91c2x5IHJlc29sdmVkIGZhY3RvcnkgJiBpbmplY3Rvci5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVZpZXc8VCwgVSBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8VD4+KHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGU6VGVtcGxhdGVSZWY8VT4sIGNvbnRleHQ6VSk6dm9pZCB7XG4gICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3PFU+KHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW50byB0aGUgc3BlY2lmaWVkIHZpZXcgY29udGFpbmVyLlxuICAgIHB1YmxpYyBhdHRhY2hUb1ZpZXc8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgICBwdWJsaWMgYXR0YWNoVG9BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIERldGFjaGVzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBkZXRhY2hGcm9tQXBwbGljYXRpb248VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBzcGVjaWZpZWQgRE9NIGVsZW1lbnQuXG4gICAgcHVibGljIG1vdmVUb0VsZW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPiwgZWxlbWVudDpFbGVtZW50KTp2b2lkIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTW92ZXMgdGhlIGNvbXBvbmVudCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICBwdWJsaWMgbW92ZVRvRG9jdW1lbnRCb2R5PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLm1vdmVUb0VsZW1lbnQoY29tcG9uZW50UmVmLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2hGcm9tRG9jdW1lbnQ8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAvLyBXZSBjYW4ndCB1c2UgYGVsZW1lbnQucmVtb3ZlKClgIGR1ZSB0byBsYWNrIG9mIElFMTEgc3VwcG9ydC5cbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgUG9wcGVyLCB7IE1vZGlmaWVycywgUG9wcGVyT3B0aW9ucywgUGxhY2VtZW50LCBEYXRhIH0gZnJvbSBcInBvcHBlci5qc1wiO1xuXG50eXBlIFBvcHBlck1vZGlmaWVycyA9IE1vZGlmaWVycyAmIHtcbiAgICBjb21wdXRlU3R5bGU/OntcbiAgICAgICAgZ3B1QWNjZWxlcmF0aW9uOmJvb2xlYW47XG4gICAgfTtcbn07XG50eXBlIFBvcHBlckluc3RhbmNlID0gUG9wcGVyICYge1xuICAgIG9wdGlvbnM6UG9wcGVyT3B0aW9ucyAmIHtcbiAgICAgICAgbW9kaWZpZXJzOlBvcHBlck1vZGlmaWVycztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSBcImF1dG9cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wIGxlZnRcIiB8IFwidG9wXCIgfCBcInRvcCByaWdodFwiIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gbGVmdFwiIHwgXCJib3R0b21cIiB8IFwiYm90dG9tIHJpZ2h0XCIgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgdG9wXCIgfCBcImxlZnRcIiB8IFwibGVmdCBib3R0b21cIiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQgdG9wXCIgfCBcInJpZ2h0XCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgUG9zaXRpb25pbmdQbGFjZW1lbnQgPSB7XG4gICAgQXV0bzogXCJhdXRvXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgVG9wTGVmdDogXCJ0b3AgbGVmdFwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIFRvcDogXCJ0b3BcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBUb3BSaWdodDogXCJ0b3AgcmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBMZWZ0VG9wOiBcImxlZnQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgTGVmdEJvdHRvbTogXCJsZWZ0IGJvdHRvbVwiIGFzIFBvc2l0aW9uaW5nUGxhY2VtZW50LFxuICAgIEJvdHRvbUxlZnQ6IFwiYm90dG9tIGxlZnRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgQm90dG9tUmlnaHQ6IFwiYm90dG9tIHJpZ2h0XCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHRUb3A6IFwicmlnaHQgdG9wXCIgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQsXG4gICAgUmlnaHQ6IFwicmlnaHRcIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudCxcbiAgICBSaWdodEJvdHRvbTogXCJyaWdodCBib3R0b21cIiBhcyBQb3NpdGlvbmluZ1BsYWNlbWVudFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zaXRpb25Cb3VuZGluZ0JveCB7XG4gICAgd2lkdGg6bnVtYmVyO1xuICAgIGhlaWdodDpudW1iZXI7XG4gICAgdG9wOm51bWJlcjtcbiAgICBsZWZ0Om51bWJlcjtcbiAgICBib3R0b206bnVtYmVyO1xuICAgIHJpZ2h0Om51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGxhY2VtZW50VG9Qb3BwZXIocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KTpQbGFjZW1lbnQge1xuICAgIGlmICghcGxhY2VtZW50IHx8IHBsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuQXV0bykge1xuICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgLy8gQWxsIHBsYWNlbWVudHMgb2YgdGhlIGZvcm1hdDogYGRpcmVjdGlvbiBhbGlnbm1lbnRgLCBlLmcuIGB0b3AgbGVmdGAuXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgYWxpZ25tZW50XSA9IHBsYWNlbWVudC5zcGxpdChcIiBcIik7XG5cbiAgICAvLyBEaXJlY3Rpb24gYWxvbmUgY292ZXJzIGNhc2Ugb2YganVzdCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCwgYHJpZ2h0YC5cbiAgICBjb25zdCBjaG9zZW5QbGFjZW1lbnQgPSBbZGlyZWN0aW9uXTtcblxuICAgIC8vIEFkZCBgc3RhcnRgIC8gYGVuZGAgdG8gcGxhY2VtZW50LCBkZXBlbmRpbmcgb24gYWxpZ25tZW50IGRpcmVjdGlvbi5cbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInN0YXJ0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcImVuZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEpvaW4gd2l0aCBoeXBoZW4gdG8gY3JlYXRlIFBvcHBlciBjb21wYXRpYmxlIHBsYWNlbWVudC5cbiAgICByZXR1cm4gY2hvc2VuUGxhY2VtZW50LmpvaW4oXCItXCIpIGFzIFBsYWNlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wcGVyVG9QbGFjZW1lbnQocG9wcGVyOnN0cmluZyk6UG9zaXRpb25pbmdQbGFjZW1lbnQge1xuICAgIGlmICghcG9wcGVyIHx8IHBvcHBlciA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgIH1cblxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIGFsaWdubWVudF0gPSBwb3BwZXIuc3BsaXQoXCItXCIpO1xuXG4gICAgY29uc3QgY2hvc2VuUGxhY2VtZW50ID0gW2RpcmVjdGlvbl07XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5QbGFjZW1lbnQucHVzaChcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgIGNob3NlblBsYWNlbWVudC5wdXNoKFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9zZW5QbGFjZW1lbnQuam9pbihcIiBcIikgYXMgUG9zaXRpb25pbmdQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6RWxlbWVudFJlZjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3ViamVjdDpFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBfcG9wcGVyOlBvcHBlckluc3RhbmNlO1xuICAgIHByaXZhdGUgX3BvcHBlclN0YXRlOkRhdGE7XG4gICAgcHJpdmF0ZSBfcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHByaXZhdGUgX2hhc0Fycm93OmJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYXJyb3dTZWxlY3RvcjpzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpOlBvc2l0aW9uaW5nUGxhY2VtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3BwZXIub3B0aW9ucy5wbGFjZW1lbnQgPSBwbGFjZW1lbnRUb1BvcHBlcihwbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNBcnJvdyhoYXNBcnJvdzpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0Fycm93ID0gaGFzQXJyb3c7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhY3R1YWxQbGFjZW1lbnQoKTpQb3NpdGlvbmluZ1BsYWNlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wcGVyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQb3NpdGlvbmluZ1BsYWNlbWVudC5BdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHBlclRvUGxhY2VtZW50KHRoaXMuX3BvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wcGVyU3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYW5jaG9yOkVsZW1lbnRSZWYsIHN1YmplY3Q6RWxlbWVudFJlZiwgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50LCBhcnJvd1NlbGVjdG9yPzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgdGhpcy5fYXJyb3dTZWxlY3RvciA9IGFycm93U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyczpQb3BwZXJNb2RpZmllcnMgPSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBncHVBY2NlbGVyYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5fYXJyb3dTZWxlY3RvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIGZuOiAoZGF0YTpQb3BwZXIuRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSB0aGlzLmNhbGN1bGF0ZU9mZnNldHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIubGVmdCArPSBvZmZzZXRzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm9mZnNldHMucG9wcGVyLnRvcCArPSBvZmZzZXRzLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9hcnJvd1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBkZWxldGUgbW9kaWZpZXJzLmFycm93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFRvUG9wcGVyKHRoaXMuX3BsYWNlbWVudCksXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiBpbml0aWFsID0+IHRoaXMuX3BvcHBlclN0YXRlID0gaW5pdGlhbCxcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogdXBkYXRlID0+IHRoaXMuX3BvcHBlclN0YXRlID0gdXBkYXRlXG4gICAgICAgICAgICB9KSBhcyBQb3BwZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlT2Zmc2V0cygpOlBvcHBlci5PZmZzZXQge1xuICAgICAgICBsZXQgbGVmdCA9IDA7IGxldCB0b3AgPSAwO1xuXG4gICAgICAgIC8vIFRvIHN1cHBvcnQgY29ycmVjdCBwb3NpdGlvbmluZyBmb3IgYWxsIHBvcHVwIHNpemVzIHdlIHNob3VsZCBjYWxjdWxhdGUgb2Zmc2V0IHVzaW5nIGVtXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN1YmplY3QubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgIC8vIFRoZSBTZW1hbnRpYyBVSSBwb3B1cCBhcnJvdyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSAwLjcxNDI4NTcxZW0gYW5kIHRoZSBtYXJnaW4gZnJvbSB0aGUgcG9wdXAgZWRnZSBpcyAxZW1cbiAgICAgICAgY29uc3QgYXJyb3dDZW50ZXIgPSAoMC43MTQyODU3MSAvIDIgKyAxKSAqIGZvbnRTaXplO1xuXG4gICAgICAgIGlmICh0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDw9IGFycm93Q2VudGVyICogMikge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yQ2VudGVyV2lkdGggPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQgfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFuY2hvckNlbnRlcldpZHRoIC0gYXJyb3dDZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BSaWdodCB8fCB0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVyV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmNob3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gYXJyb3dDZW50ZXIgKiAyKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3JDZW50ZXJIZWlnaHQgPSB0aGlzLmFuY2hvci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5MZWZ0VG9wIHx8IHRoaXMuX3BsYWNlbWVudCA9PT0gUG9zaXRpb25pbmdQbGFjZW1lbnQuUmlnaHRUb3ApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBhbmNob3JDZW50ZXJIZWlnaHQgLSBhcnJvd0NlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQgPT09IFBvc2l0aW9uaW5nUGxhY2VtZW50LkxlZnRCb3R0b20gfHwgdGhpcy5fcGxhY2VtZW50ID09PSBQb3NpdGlvbmluZ1BsYWNlbWVudC5SaWdodEJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IGFycm93Q2VudGVyIC0gYW5jaG9yQ2VudGVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpQ29tcG9uZW50RmFjdG9yeVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpVXRpbGl0eU1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIpXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiKVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVJhZGlvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJmb3JtOm5vdChbbmdGb3JtXSk6bm90KFtbbmdGb3JtXV0pLG5nRm9ybSxbbmdGb3JtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvTWFuYWdlcjxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgcHVibGljIGlzTmVzdGVkOmJvb2xlYW47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvTWFuYWdlciwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3N1Yk1hbmFnZXJzOlF1ZXJ5TGlzdDxTdWlSYWRpb01hbmFnZXI8VD4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlSYWRpbywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFkaW9zOlF1ZXJ5TGlzdDxTdWlSYWRpbzxUPj47XG5cbiAgICBwcml2YXRlIF9yYWRpb1N1YnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZU5lc3RpbmcoKTtcbiAgICAgICAgdGhpcy5fc3ViTWFuYWdlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVOZXN0aW5nKCkpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW9zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTmVzdGluZygpOnZvaWQge1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vyc1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IG0gIT09IHRoaXMpXG4gICAgICAgICAgICAuZm9yRWFjaChtID0+IG0uaXNOZXN0ZWQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVJhZGlvcygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuX3JhZGlvU3VicyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFV0aWwuQXJyYXkuZ3JvdXBCeSh0aGlzLl9yZW5kZXJlZFJhZGlvcy50b0FycmF5KCksIFwibmFtZVwiKTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhncm91cHMpXG4gICAgICAgICAgICAubWFwKGsgPT4gZ3JvdXBzW2tdKVxuICAgICAgICAgICAgLmZvckVhY2goZyA9PiBnXG4gICAgICAgICAgICAgICAgLmZvckVhY2gociA9PiB0aGlzLl9yYWRpb1N1YnNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goci5vbkN1cnJlbnRWYWx1ZUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodjpUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZm9yRWFjaChyYWRpbyA9PiByYWRpby53cml0ZVZhbHVlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtLCBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhclZpZXdUeXBlIHtcbiAgICBZZWFyID0gMCxcbiAgICBNb250aCA9IDEsXG4gICAgRGF0ZSA9IDIsXG4gICAgSG91ciA9IDMsXG4gICAgTWludXRlID0gNFxufVxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJWaWV3UmVzdWx0ID0gW0RhdGUsIENhbGVuZGFyVmlld1R5cGVdO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJWaWV3IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90eXBlOkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBAVmlld0NoaWxkcmVuKFN1aUNhbGVuZGFySXRlbSlcbiAgICBwcml2YXRlIF9yZW5kZXJlZEl0ZW1zOlF1ZXJ5TGlzdDxTdWlDYWxlbmRhckl0ZW0+O1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkSXRlbT86Q2FsZW5kYXJJdGVtO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlcnZpY2Uoc2VydmljZTpDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZ2VzLmxvYWRTZXJ2aWNlKHNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5vbk1hbnVhbFVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hpZ2hsaWdodGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkNhbGVuZGFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByYW5nZXM6Q2FsZW5kYXJSYW5nZVNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnREYXRlKCk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3VycmVudERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgdmlld1R5cGU6Q2FsZW5kYXJWaWV3VHlwZSwgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2aWV3VHlwZTtcbiAgICAgICAgdGhpcy5yYW5nZXMgPSByYW5nZXM7XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRvY3VtZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUgTWV0aG9kc1xuXG4gICAgcHVibGljIHNldERhdGUoaXRlbTpDYWxlbmRhckl0ZW0pOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlRGF0ZShpdGVtLmRhdGUsIHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS56b29tT3V0KHRoaXMuX3R5cGUpO1xuICAgIH1cblxuICAgIC8vIEtleWJvYXJkIENvbnRyb2xcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZW5kZXJlZEl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PlxuICAgICAgICAgICAgaS5vbkZvY3Vzc2VkLnN1YnNjcmliZSgoaGFzRm9jdXM6Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0oaS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXV0b0hpZ2hsaWdodCgpOnZvaWQge1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlICYmIHRoaXMucmFuZ2VzLmN1cnJlbnQuY29udGFpbnNEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSA/IHRoaXMuc2VsZWN0ZWREYXRlIDogdGhpcy5jdXJyZW50RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLl9oaWdobGlnaHRlZEl0ZW0uZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxseUhpZ2hsaWdodGVkID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtcy5maW5kKGkgPT4gdGhpcy5yYW5nZXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgICAgICBpZiAoaW5pdGlhbGx5SGlnaGxpZ2h0ZWQgJiYgIWluaXRpYWxseUhpZ2hsaWdodGVkLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkSXRlbSA9IGluaXRpYWxseUhpZ2hsaWdodGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpID0+IGkuaGFzRm9jdXMgPSBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuX3JlbmRlcmVkSXRlbXMuZmluZChyaSA9PiByaS5pdGVtID09PSBpdGVtKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZCAmJiAhcmVuZGVyZWQuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZC5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ZWRJdGVtICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgIGxldCBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IDE7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBkZWx0YSArPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGRlbHRhIC09IHRoaXMucmFuZ2VzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaXNNb3ZpbmdGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGhlc2Uga2V5cHJlc3NlcyBiZWluZyBjYXB0dXJlZCBlbHNld2hlcmUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV4dEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50Lml0ZW1zW2luZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgIW5leHRJdGVtLmlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRJdGVtKG5leHRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SXRlbSAmJiBuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgZGVsdGEgPj0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRJbmRleCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuZmluZEluZGV4KHRoaXMuX2hpZ2hsaWdodGVkSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtcyA9IHRoaXMucmFuZ2VzLmNhbGMoaXNNb3ZpbmdGb3J3YXJkKS5pblJhbmdlO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3ZpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCAtPSB0aGlzLnJhbmdlcy5jdXJyZW50LmluUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RlZEluZGV4ICs9IG5leHRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRJdGVtID0gbmV4dEl0ZW1zW2FkanVzdGVkSW5kZXggKyBkZWx0YV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZXMubW92ZShpc01vdmluZ0ZvcndhcmQpO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmQobmV4dEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhck1hcHBpbmc8VCA9IENhbGVuZGFyVmlld1R5cGU+ID0gTWFwPENhbGVuZGFyVmlld1R5cGUsIFQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgcHVibGljIGluaXRpYWxWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGZpbmFsVmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBjaGFuZ2VkOkNhbGVuZGFyTWFwcGluZztcbiAgICBwdWJsaWMgem9vbTpDYWxlbmRhck1hcHBpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuRGF0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBDYWxlbmRhclZpZXdUeXBlLkRhdGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1vbnRoLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZU1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuSG91cjtcbiAgICAgICAgdGhpcy5maW5hbFZpZXcgPSBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkhvdXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGVdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTWludXRlLCBDYWxlbmRhclZpZXdUeXBlLkhvdXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGV0aW1lTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5EYXRlO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTWludXRlO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuSG91cl0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyLCBDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5NaW51dGUsIENhbGVuZGFyVmlld1R5cGUuTWludXRlXVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnpvb20gPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZV0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLkRhdGUsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuSG91ciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlXSxcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLk1pbnV0ZSwgQ2FsZW5kYXJWaWV3VHlwZS5Ib3VyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb250aE1hcHBpbmdzIGV4dGVuZHMgQ2FsZW5kYXJNYXBwaW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuTW9udGg7XG4gICAgICAgIHRoaXMuZmluYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5Nb250aDtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdLFxuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuTW9udGgsIENhbGVuZGFyVmlld1R5cGUuTW9udGhdXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuem9vbSA9IG5ldyBNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4oW1xuICAgICAgICAgICAgW0NhbGVuZGFyVmlld1R5cGUuWWVhciwgQ2FsZW5kYXJWaWV3VHlwZS5Nb250aF0sXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5Nb250aCwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyXVxuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyTWFwcGluZ3MgZXh0ZW5kcyBDYWxlbmRhck1hcHBpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3ID0gQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyO1xuICAgICAgICB0aGlzLmZpbmFsVmlldyA9IENhbGVuZGFyVmlld1R5cGUuWWVhcjtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWFwPENhbGVuZGFyVmlld1R5cGUsIENhbGVuZGFyVmlld1R5cGU+KFtcbiAgICAgICAgICAgIFtDYWxlbmRhclZpZXdUeXBlLlllYXIsIENhbGVuZGFyVmlld1R5cGUuWWVhcl1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy56b29tID0gbmV3IE1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPihbXG4gICAgICAgICAgICBbQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBDYWxlbmRhclZpZXdUeXBlLlllYXJdXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhbGVuZGFyTW9kZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1hcHBpbmdzLCBEYXRldGltZU1hcHBpbmdzLCBEYXRlTWFwcGluZ3MsIFRpbWVNYXBwaW5ncywgTW9udGhNYXBwaW5ncywgWWVhck1hcHBpbmdzIH0gZnJvbSBcIi4vY2FsZW5kYXItbWFwcGluZ3NcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJDb25maWcge1xuICAgIHB1YmxpYyBtb2RlOkNhbGVuZGFyTW9kZTtcbiAgICBwdWJsaWMgcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHVibGljIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3M7XG5cbiAgICBwdWJsaWMgZmFsbGJhY2s6c3RyaW5nO1xuXG4gICAgcHVibGljIGRhdGVNaW5Cb3VuZD86RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZU1heEJvdW5kPzpEYXRlO1xuXG4gICAgY29uc3RydWN0b3IobW9kZTpDYWxlbmRhck1vZGUsIHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBtYXBwaW5nczpDYWxlbmRhck1hcHBpbmdzLCBmYWxsYmFjazpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICAgICAgdGhpcy5mYWxsYmFjayA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCb3VuZHMocHJvdmlkZWREYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5ZZWFyLCBuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRlTWluQm91bmQuc2V0RnVsbFllYXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIG1hcHBpbmdzOkNhbGVuZGFyTWFwcGluZ3MsIGZhbGxiYWNrOnN0cmluZykge1xuICAgICAgICBzdXBlcihDYWxlbmRhck1vZGUuRGF0ZU9ubHksIHByZWNpc2lvbiwgbWFwcGluZ3MsIGZhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZZWFyQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uWWVhcixcbiAgICAgICAgICAgIG5ldyBZZWFyTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwibnVtYmVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTW9udGgsXG4gICAgICAgICAgICBuZXcgTW9udGhNYXBwaW5ncygpLFxuICAgICAgICAgICAgXCJtb250aFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29uZmlnIGV4dGVuZHMgRGF0ZUNvbmZpZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uRGF0ZSxcbiAgICAgICAgICAgIG5ldyBEYXRlTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRldGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuQm90aCxcbiAgICAgICAgICAgIERhdGVQcmVjaXNpb24uTWludXRlLFxuICAgICAgICAgICAgbmV3IERhdGV0aW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZUNvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBDYWxlbmRhck1vZGUuVGltZU9ubHksXG4gICAgICAgICAgICBEYXRlUHJlY2lzaW9uLk1pbnV0ZSxcbiAgICAgICAgICAgIG5ldyBUaW1lTWFwcGluZ3MoKSxcbiAgICAgICAgICAgIFwidGltZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm91bmRzKHByb3ZpZGVkRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlTWF4Qm91bmQgPSBEYXRlVXRpbC5lbmRPZihEYXRlUHJlY2lzaW9uLkRhdGUsIERhdGVVdGlsLmNsb25lKHByb3ZpZGVkRGF0ZSkpO1xuICAgICAgICB0aGlzLmRhdGVNaW5Cb3VuZCA9IERhdGVVdGlsLnByZXZpb3VzKERhdGVQcmVjaXNpb24uRGF0ZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlTWF4Qm91bmQpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRlUHJlY2lzaW9uLCBEYXRlVXRpbCwgVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVDb21wYXJlciB7XG4gICAgcHJpdmF0ZSBfcHJlY2lzaW9uOkRhdGVQcmVjaXNpb247XG4gICAgcHJpdmF0ZSBfaXNTbWFsbGVzdDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJlY2lzaW9uOkRhdGVQcmVjaXNpb24sIGlzU21hbGxlc3Q6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICAgIHRoaXMuX2lzU21hbGxlc3QgPSBpc1NtYWxsZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbChhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVjaXNpb24gPT09IERhdGVQcmVjaXNpb24uTWludXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gISFiICYmXG4gICAgICAgICAgICAgICBEYXRlVXRpbC5lcXVhbChEYXRlUHJlY2lzaW9uLkhvdXIsIGIsIGEpICYmXG4gICAgICAgICAgICAgICBVdGlsLk1hdGgucm91bmREb3duKGIuZ2V0TWludXRlcygpLCA1KSA9PT0gVXRpbC5NYXRoLnJvdW5kRG93bihhLmdldE1pbnV0ZXMoKSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFiICYmIERhdGVVdGlsLmVxdWFsKHRoaXMuX3ByZWNpc2lvbiwgYSwgYik7XG4gICAgfVxuXG4gICAgcHVibGljIGxlc3NUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA+PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuZW5kT2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPj0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKGE6RGF0ZSwgYjpEYXRlIHwgdW5kZWZpbmVkKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhYiB8fCAoYiA8PSBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhYiB8fCAoRGF0ZVV0aWwuc3RhcnRPZih0aGlzLl9wcmVjaXNpb24sIERhdGVVdGlsLmNsb25lKGIpKSA8PSBhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmV0d2VlbihkYXRlOkRhdGUsIGxlZnQ6RGF0ZSB8IHVuZGVmaW5lZCwgcmlnaHQ6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKGRhdGUsIGxlZnQpICYmIHRoaXMubGVzc1RoYW4oZGF0ZSwgcmlnaHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAqIGFzIGRlZmF1bHRMb2NhbGUgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuXG5pbnRlcmZhY2UgSURhdGVGbnNMb2NhbGVWYWx1ZXMgeyBbbmFtZTpzdHJpbmddOnN0cmluZ1tdOyB9XG5pbnRlcmZhY2UgSURhdGVGbnNIZWxwZXJPcHRpb25zIHsgdHlwZT86c3RyaW5nOyB9XG50eXBlIERhdGVGbnNIZWxwZXI8VSwgVD4gPSAodmFsdWU6VSwgb3B0aW9uczpJRGF0ZUZuc0hlbHBlck9wdGlvbnMpID0+IFQ7XG50eXBlIERhdGVGbnNXZWVrU3RhcnRzT24gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuXG5pbnRlcmZhY2UgSURhdGVGbnNDdXN0b21Mb2NhbGUge1xuICAgIGxvY2FsaXplOntcbiAgICAgICAgd2Vla2RheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgbW9udGg6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICB0aW1lT2ZEYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICB9O1xuICAgIG1hdGNoOntcbiAgICAgICAgd2Vla2RheXM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgd2Vla2RheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgbW9udGg/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB0aW1lT2ZEYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICB9O1xuICAgIG9wdGlvbnM/OntcbiAgICAgICAgd2Vla1N0YXJ0c09uPzpudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VHlwZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYWxsYmFjaz86KG9sZEluZGV4Om51bWJlcikgPT4gbnVtYmVyKTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPiB7XG5cbiAgICByZXR1cm4gKGRpcnR5SW5kZXg6bnVtYmVyLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1t0eXBlXVtpbmRleF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiAoeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHZhbHVlc1t0eXBlXTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD4ge1xuICAgIHJldHVybiAoZGlydHlTdHJpbmcsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICBkaXJ0eVN0cmluZy5tYXRjaChgXigke3BhdHRlcm5zW3R5cGVdLmpvaW4oXCJ8XCIpfSlgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYXJzZUZuKHBhdHRlcm5zOklEYXRlRm5zTG9jYWxlVmFsdWVzLCBkZWZhdWx0VHlwZTpzdHJpbmcpOkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPiB7XG4gICAgcmV0dXJuIChbLCByZXN1bHRdLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgKHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXSlcbiAgICAgICAgICAgIC5tYXAocCA9PiBuZXcgUmVnRXhwKGBeJHtwfWApKVxuICAgICAgICAgICAgLmZpbmRJbmRleChwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIERhdGVGbnNQYXJzZXIge1xuICAgIHByaXZhdGUgX3dlZWtTdGFydHNPbjpEYXRlRm5zV2Vla1N0YXJ0c09uO1xuICAgIHByaXZhdGUgX2xvY2FsZTpJRGF0ZUZuc0N1c3RvbUxvY2FsZTtcblxuICAgIHByaXZhdGUgZ2V0IF9jb25maWcoKTphbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLl93ZWVrU3RhcnRzT24sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl93ZWVrU3RhcnRzT24gPSBsb2NhbGUuZmlyc3REYXlPZldlZWsgYXMgRGF0ZUZuc1dlZWtTdGFydHNPbjtcblxuICAgICAgICBjb25zdCB3ZWVrZGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS53ZWVrZGF5c1Nob3J0LFxuICAgICAgICAgICAgbmFycm93OiBsb2NhbGUud2Vla2RheXNOYXJyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb250aFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS5tb250aHMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLm1vbnRoc1Nob3J0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5VmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICB1cHBlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLFxuICAgICAgICAgICAgbG93ZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheU1hdGNoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLnRpbWVzT2ZEYXksXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UuY29uY2F0KGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGRlZmF1bHRMb2NhbGUgYXMgYW55O1xuICAgICAgICB0aGlzLl9sb2NhbGUubG9jYWxpemUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubG9jYWxpemUsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZExvY2FsaXplRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIiwgKGhvdXJzOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG91cnMgLyAxMiA+PSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLm1hdGNoID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLm1hdGNoLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZE1hdGNoRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZE1hdGNoRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRQYXJzZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZXNPZkRheTpidWlsZE1hdGNoRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6YnVpbGRQYXJzZUZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGQ6RGF0ZSwgZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZCwgZiwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZFM6c3RyaW5nLCBmOnN0cmluZywgYkQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBwYXJzZShkUywgZiwgYkQsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlRm5zUGFyc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZS1mbnNcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzLCBJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciB7XG4gICAgcHJpdmF0ZSBfZm9ybWF0OnN0cmluZztcbiAgICBwcml2YXRlIF9wYXJzZXI6RGF0ZUZuc1BhcnNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1hdDpzdHJpbmcsIGxvY2FsZTpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG5ldyBEYXRlRm5zUGFyc2VyKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkYXRlOkRhdGUpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2Zvcm1hdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRhdGVTdHJpbmc6c3RyaW5nLCBiYXNlRGF0ZTpEYXRlID0gbmV3IERhdGUoKSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2UoZGF0ZVN0cmluZywgdGhpcy5fZm9ybWF0LCBiYXNlRGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxEYXRlUGFyc2VyIGV4dGVuZHMgRGF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobW9kZTpEYXRlcGlja2VyTW9kZSwgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0czpJRGF0ZXBpY2tlckZvcm1hdHNMb2NhbGVWYWx1ZXMgPSB7XG4gICAgICAgICAgICB0aW1lOiBcIkhIOm1tXCIsXG4gICAgICAgICAgICBkYXRldGltZTogXCJZWVlZLU1NLUREVEhIOm1tXCIsXG4gICAgICAgICAgICBkYXRlOiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgIG1vbnRoOiBcIllZWVktTU1cIixcbiAgICAgICAgICAgIHllYXI6IFwiWVlZWVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgc3VwZXIoaW50ZXJuYWxGb3JtYXRzW21vZGVdLCBsb2NhbGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGVQcmVjaXNpb24sIERhdGVVdGlsLCBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBhcmVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1jb21wYXJlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZSB7XG4gICAgcHVibGljIHN0YXJ0OkRhdGU7XG4gICAgcHVibGljIGRhdGVzOkRhdGVbXTtcbiAgICBwdWJsaWMgaXRlbXM6Q2FsZW5kYXJJdGVtW107XG4gICAgcHVibGljIGdldCBpblJhbmdlKCk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaSA9PiAhaS5pc091dHNpZGVSYW5nZSk7XG4gICAgfVxuICAgIHB1YmxpYyBncm91cGVkSXRlbXM6Q2FsZW5kYXJJdGVtW11bXTtcbiAgICBwcml2YXRlIF9jb21wYXJlcjpEYXRlQ29tcGFyZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDpEYXRlLCBkYXRlczpEYXRlW10sIGl0ZW1zOkNhbGVuZGFySXRlbVtdLCBncm91cGVkOkNhbGVuZGFySXRlbVtdW10sIGNvbXBhcmVyOkRhdGVDb21wYXJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZGF0ZXMgPSBkYXRlcztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLmdyb3VwZWRJdGVtcyA9IGdyb3VwZWQ7XG4gICAgICAgIHRoaXMuX2NvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaXRlbTpDYWxlbmRhckl0ZW0pOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaSA9PiB0aGlzLl9jb21wYXJlci5lcXVhbChpLmRhdGUsIGl0ZW0uZGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kSW5kZXgoaXRlbTpDYWxlbmRhckl0ZW0gfCB1bmRlZmluZWQpOm51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRGF0ZShkYXRlOkRhdGUpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmluUmFuZ2UuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgZGF0ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcHJldmlvdXM6Q2FsZW5kYXJSYW5nZTtcbiAgICBwdWJsaWMgY3VycmVudDpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBuZXh0OkNhbGVuZGFyUmFuZ2U7XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgbWFyZ2luYWw6RGF0ZVByZWNpc2lvbjtcbiAgICBwdWJsaWMgcm93czpudW1iZXI7XG4gICAgcHVibGljIGNvbHVtbnM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBkYXRlQ29tcGFyZXIoKTpEYXRlQ29tcGFyZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVDb21wYXJlcih0aGlzLm1hcmdpbmFsLCB0aGlzLnNlcnZpY2UuaW5GaW5hbFZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubmV4dC5pblJhbmdlWzBdO1xuICAgICAgICBpZiAoZmlyc3RJdGVtICYmIHRoaXMuc2VydmljZS5tYXhEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJdGVtLmRhdGUgPD0gdGhpcy5zZXJ2aWNlLm1heERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjYW5Nb3ZlUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLnByZXZpb3VzLmluUmFuZ2Uuc2xpY2UoLTEpLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbS5kYXRlID49IHRoaXMuc2VydmljZS5taW5EYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsOkRhdGVQcmVjaXNpb24sIHJvd3M6bnVtYmVyLCBjb2x1bW5zOm51bWJlcikge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubWFyZ2luYWwgPSBpbnRlcnZhbCBhcyBudW1iZXIgKyAxO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2VydmljZShzZXJ2aWNlOkNhbGVuZGFyU2VydmljZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYWxjUmFuZ2UodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShmb3J3YXJkczpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVQcmV2aW91cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dCgpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwubmV4dCh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91cygpOnZvaWQge1xuICAgICAgICBEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCB0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5wcmV2aW91cyh0aGlzLmludGVydmFsLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGMoZm9yd2FyZHM6Ym9vbGVhbik6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGlmIChmb3J3YXJkcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNSYW5nZShzdGFydERhdGU6RGF0ZSk6Q2FsZW5kYXJSYW5nZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jYWxjU3RhcnQoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pbkZpbmFsVmlldykge1xuICAgICAgICAgICAgRGF0ZVV0aWwuc3RhcnRPZih0aGlzLm1hcmdpbmFsLCBzdGFydCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmNhbGNEYXRlcyhzdGFydCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jYWxjSXRlbXMoZGF0ZXMsIHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhclJhbmdlKHN0YXJ0LCBkYXRlcywgaXRlbXMsIFV0aWwuQXJyYXkuZ3JvdXAoaXRlbXMsIHRoaXMuY29sdW1ucyksIHRoaXMuZGF0ZUNvbXBhcmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY1N0YXJ0KGRhdGU6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbC5zdGFydE9mKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKGRhdGUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY0RhdGVzKHJhbmdlU3RhcnQ6RGF0ZSk6RGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuQXJyYXlcbiAgICAgICAgICAgIC5yYW5nZSh0aGlzLmxlbmd0aClcbiAgICAgICAgICAgIC5tYXAoaSA9PiBEYXRlVXRpbC5hZGQodGhpcy5tYXJnaW5hbCwgRGF0ZVV0aWwuY2xvbmUocmFuZ2VTdGFydCksIGkpKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjSXRlbXMoZGF0ZVJhbmdlOkRhdGVbXSwgYmFzZURhdGU6RGF0ZSk6Q2FsZW5kYXJJdGVtW10ge1xuICAgICAgICByZXR1cm4gZGF0ZVJhbmdlLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2FsZW5kYXJJdGVtKGRhdGUpO1xuXG4gICAgICAgICAgICBpdGVtLmlzRGlzYWJsZWQgPSAhdGhpcy5kYXRlQ29tcGFyZXIuYmV0d2VlbihpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5taW5EYXRlLCB0aGlzLnNlcnZpY2UubWF4RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNUb2RheSA9IHRoaXMuZGF0ZUNvbXBhcmVyLmVxdWFsKGl0ZW0uZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVJdGVtKGl0ZW0sIGJhc2VEYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItdmlldy10aXRsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cInRpdGxlIGxpbmtcIiAoY2xpY2spPVwib25ab29tT3V0LmVtaXQoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwicHJldiBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVQcmV2aW91c1wiIChjbGljayk9XCJyYW5nZXM/Lm1vdmVQcmV2aW91cygpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIGxlZnQgaWNvblwiPjwvaT5cbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwibmV4dCBsaW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFyYW5nZXM/LmNhbk1vdmVOZXh0XCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZU5leHQoKVwiPlxuICAgIDxpIGNsYXNzPVwiY2hldnJvbiByaWdodCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udGl0bGUubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyVmlld1RpdGxlIHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZTtcblxuICAgIEBPdXRwdXQoXCJ6b29tT3V0XCIpXG4gICAgcHVibGljIG9uWm9vbU91dDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblpvb21PdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGV0aW1lQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IHR5cGUgRGF0ZXBpY2tlck1vZGUgPSBcInllYXJcIiB8IFwibW9udGhcIiB8IFwiZGF0ZVwiIHwgXCJkYXRldGltZVwiIHwgXCJ0aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlcGlja2VyTW9kZSA9IHtcbiAgICBZZWFyOiBcInllYXJcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBNb250aDogXCJtb250aFwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGU6IFwiZGF0ZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIERhdGV0aW1lOiBcImRhdGV0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgVGltZTogXCJ0aW1lXCIgYXMgRGF0ZXBpY2tlck1vZGVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kYXRlcGlja2VyXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlcnZpY2UuY3VycmVudFZpZXdcIj5cbiAgICA8c3VpLWNhbGVuZGFyLXllYXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjBcIj48L3N1aS1jYWxlbmRhci15ZWFyLXZpZXc+XG4gICAgPHN1aS1jYWxlbmRhci1tb250aC12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPjwvc3VpLWNhbGVuZGFyLW1vbnRoLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItZGF0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPjwvc3VpLWNhbGVuZGFyLWRhdGUtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1ob3VyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+PC9zdWktY2FsZW5kYXItaG91ci12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiNFwiPjwvc3VpLWNhbGVuZGFyLW1pbnV0ZS12aWV3PiAgICBcbjwvbmctY29udGFpbmVyPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNhbGVuZGFyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKG5ldyBEYXRldGltZUNvbmZpZygpLCBsb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXIpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuL3BvcHVwLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IHR5cGUgUG9wdXBUcmlnZ2VyID0gXCJob3ZlclwiIHwgXCJjbGlja1wiIHwgXCJvdXRzaWRlQ2xpY2tcIiB8IFwiZm9jdXNcIiB8IFwibWFudWFsXCI7XG5leHBvcnQgdHlwZSBQb3B1cFNpemUgPSBcIm1pbmlcIiB8IFwidGlueVwiIHwgXCJzbWFsbFwiIHwgXCJsYXJnZVwiIHwgXCJodWdlXCI7XG5leHBvcnQgdHlwZSBQb3B1cFdpZHRoID0gXCJ3aWRlXCIgfCBcInZlcnkgd2lkZVwiICB8IFwiZmxvd2luZ1wiO1xuXG5leHBvcnQgY29uc3QgUG9wdXBUcmlnZ2VyID0ge1xuICAgIEhvdmVyOiBcImhvdmVyXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIENsaWNrOiBcImNsaWNrXCIgYXMgUG9wdXBUcmlnZ2VyLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgRm9jdXM6IFwiZm9jdXNcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgTWFudWFsOiBcIm1hbnVhbFwiIGFzIFBvcHVwVHJpZ2dlclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBDb25maWcge1xuICAgIGhlYWRlcj86c3RyaW5nO1xuICAgIHRleHQ/OnN0cmluZztcbiAgICBwbGFjZW1lbnQ/OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuICAgIHRyaWdnZXI/OlBvcHVwVHJpZ2dlcjtcbiAgICBpc0ludmVydGVkPzpib29sZWFuO1xuICAgIGRlbGF5PzpudW1iZXI7XG4gICAgaXNCYXNpYz86Ym9vbGVhbjtcbiAgICB0cmFuc2l0aW9uPzpzdHJpbmc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzpudW1iZXI7XG4gICAgaXNGbG93aW5nPzpib29sZWFuO1xuICAgIGlzSW5saW5lPzpib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUG9wdXBDb25maWcgaW1wbGVtZW50cyBJUG9wdXBDb25maWcge1xuICAgIHB1YmxpYyBoZWFkZXI/OnN0cmluZztcbiAgICBwdWJsaWMgdGV4dD86c3RyaW5nO1xuICAgIHB1YmxpYyBwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG4gICAgcHVibGljIHRyaWdnZXI6UG9wdXBUcmlnZ2VyO1xuICAgIHB1YmxpYyBpc0ludmVydGVkOmJvb2xlYW47XG4gICAgcHVibGljIGRlbGF5Om51bWJlcjtcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcbiAgICBwdWJsaWMgc2l6ZTpQb3B1cFNpemU7XG4gICAgcHVibGljIHdpZHRoOlBvcHVwV2lkdGg7XG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG4gICAgcHVibGljIGlzRmxvd2luZzpib29sZWFuO1xuICAgIHB1YmxpYyBpc0lubGluZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGVmYXVsdHM6SVBvcHVwQ29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBQb3NpdGlvbmluZ1BsYWNlbWVudC5Ub3BMZWZ0O1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSBQb3B1cFRyaWdnZXIuSG92ZXI7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgICAgIHRoaXMuaXNGbG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UsIElEeW5hbWljQ2xhc3NlcyB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgcG9wdXBcIlxuICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICNjb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbmZpZy50ZW1wbGF0ZSAmJiAoISFjb25maWcuaGVhZGVyIHx8ICEhY29uZmlnLnRleHQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiAqbmdJZj1cImNvbmZpZy5oZWFkZXJcIj57eyBjb25maWcuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgY29uZmlnLnRleHQgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG5cbiAgICA8c3VpLXBvcHVwLWFycm93ICpuZ0lmPVwiIWNvbmZpZy5pc0Jhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW52ZXJ0ZWRdPVwiY29uZmlnLmlzSW52ZXJ0ZWRcIj48L3N1aS1wb3B1cC1hcnJvdz5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkucG9wdXAge1xuICAgIC8qIEF1dG9maXQgcG9wdXAgdG8gdGhlIGNvbnRlbnRzLiAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnVpLmFuaW1hdGluZy5wb3B1cCB7XG4gICAgLyogV2hlbiB0aGUgcG9wdXAgaXMgYW5pbWF0aW5nLCBpdCBtYXkgbm90IGluaXRpYWxseSBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICBUaGlzIGZpcmVzIGEgbW91c2UgZXZlbnQsIGNhdXNpbmcgdGhlIGFuY2hvcidzIG1vdXNlbGVhdmUgdG8gZmlyZSAtIG1ha2luZyB0aGUgcG9wdXAgZmxpY2tlci5cbiAgICAgICBTZXR0aW5nIHBvaW50ZXItZXZlbnRzIHRvIG5vbmUgd2hpbGUgYW5pbWF0aW5nIGZpeGVzIHRoaXMgYnVnLiAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWkucG9wdXA6OmJlZm9yZSB7XG4gICAgLyogSGlkZSB0aGUgU2VtYW50aWMgVUkgQ1NTIGFycm93LiAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gYWJvdmUgYW5kIGJlbG93IHdoZW4gcGxhY2VkICd2ZXJ0aWNhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJ0b3BcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGVpdGhlciBzaWRlIHdoZW4gcGxhY2VkICdob3Jpem9udGFsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImxlZnRcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cCBpbXBsZW1lbnRzIElQb3B1cCB7XG4gICAgLy8gQ29uZmlnIHNldHRpbmdzIGZvciB0aGlzIHBvcHVwLlxuICAgIHB1YmxpYyBjb25maWc6VGVtcGxhdGVQb3B1cENvbmZpZzxhbnk+O1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgIHB1YmxpYyBwb3NpdGlvbmluZ1NlcnZpY2U6UG9zaXRpb25pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2FuY2hvcjpFbGVtZW50UmVmO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbiBpbnRlcm5hbGx5LlxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHBvcHVwIGNsb3NlLlxuICAgIHB1YmxpYyBjbG9zaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBvcGVucyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25PcGVuOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBjbG9zZXMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uQ2xvc2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBgRWxlbWVudFJlZmAgZm9yIHRoZSBwb3NpdGlvbmluZyBzdWJqZWN0LlxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwdWJsaWMgc2V0IGFuY2hvcihhbmNob3I6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9hbmNob3IgPSBhbmNob3I7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZGlyZWN0aW9uIChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgZGlyZWN0aW9uIGF0dHJpYnV0ZSBiZWZvcmUgcG9wcGVyIGluaXQgdG8gYWxsb3cgY29ycmVjdCBwb3NpdGlvbmluZ1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50LnNwbGl0KFwiIFwiKS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGFsaWdubWVudCAoYHRvcGAsIGBsZWZ0YCwgYHJpZ2h0YCwgYGJvdHRvbWApIG9mIHRoZSBjdXJyZW50IHBsYWNlbWVudC5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5hbGlnbm1lbnRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNJbnZlcnRlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5pbnZlcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzQmFzaWMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuYmFzaWMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0Zsb3dpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMuZmxvd2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5jb25maWcuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy53aWR0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJpbmRleDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSBhdHRlbXB0IHRvIG9wZW4gaWYgY3VycmVudGx5IGNsb3NlZC5cbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcG9zaXRpb25pbmcgc2VydmljZSBhZnRlciBhIGJyaWVmIGRlbGF5LlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmdTZXJ2aWNlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5lbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwiLmR5bmFtaWMuYXJyb3dcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbmluZ1NlcnZpY2UuaGFzQXJyb3cgPSAhdGhpcy5jb25maWcuaXNCYXNpYztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIG9wZW5pbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0b2ZvY3VzIGFmdGVyIHRoZSBicm93c2VyIGhhcyBoYWQgdGltZSB0byBwcm9jZXNzIG90aGVyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGFnYWluIHdoZW4gdGhlIG1vZGFsIGhhcyBvcGVuZWQgc28gdGhhdCBhdXRvZm9jdXMgd29ya3MgaW4gSUUxMS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgb3Blbi5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uT3Blbi5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBjbG9zZSBpZiBjdXJyZW50bHkgb3Blbi5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgYWxsIG90aGVyIHRyYW5zaXRpb25zLCBhbmQgaW5pdGlhdGUgdGhlIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb24sIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQpKTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBjbG9zaW5nIHRpbWVyLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2luZ1RpbWVvdXQpO1xuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGNsb3NpbmcgdGltZXIsIHRoYXQgZmlyZXMgdGhlIGBvbkNsb3NlYCBldmVudCBhZnRlciB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgICAgICAgICAgdGhpcy5jbG9zaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZS5lbWl0KCksIHRoaXMuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHNldCB0aGUgcG9wdXAgdG8gYmUgY2xvc2VkLlxuICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBNYWtlcyBzZW5zZSBoZXJlLCBhcyB0aGUgcG9wdXAgc2hvdWxkbid0IGJlIGF0dGFjaGVkIHRvIGFueSBET00gZWxlbWVudC5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IElQb3B1cExpZmVjeWNsZSB9IGZyb20gXCIuL3BvcHVwLWxpZmVjeWNsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cCB7XG4gICAgb3BlbigpOnZvaWQ7XG4gICAgY2xvc2UoKTp2b2lkO1xuICAgIHRvZ2dsZSgpOnZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWlQb3B1cENvbnRyb2xsZXIgaW1wbGVtZW50cyBJUG9wdXAsIE9uRGVzdHJveSB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgcG9wdXAgY29tcG9uZW50LlxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8U3VpUG9wdXA+O1xuXG4gICAgLy8gUmV0dXJucyBnZW5lcmF0ZWQgcG9wdXAgaW5zdGFuY2UuXG4gICAgcHVibGljIGdldCBwb3B1cCgpOlN1aVBvcHVwIHtcbiAgICAgICAgLy8gVXNlIG5vbi1udWxsIGFzc2VydGlvbiBhcyB3ZSBvbmx5IGFjY2VzcyB0aGlzIHdoZW4gYSBwb3B1cCBleGlzdHMuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYHNldFRpbWVvdXRgIHRpbWVyIHBvaW50ZXIgZm9yIGRlbGF5ZWQgcG9wdXAgb3Blbi5cbiAgICBwcml2YXRlIF9vcGVuaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIGRvY3VtZW50IGNsaWNrIGhhbmRsZXIuXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRMaXN0ZW5lcjooKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBTdWlQb3B1cCBjb21wb25lbnQgYW5kIGF0dGFjaCBpdCB0byB0aGUgYXBwbGljYXRpb24gdmlldy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoU3VpUG9wdXApO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBwb3B1cCB3aXRoIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgcG9wdXAgaXMgY2xvc2VkIChvbkNsb3NlIGZpcmVzIG9uIGFuaW1hdGlvbiBjb21wbGV0ZSksXG4gICAgICAgIHRoaXMucG9wdXAub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhbnVwKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmUoY29uZmlnPzpJUG9wdXBDb25maWcpOnZvaWQge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucG9wdXAuY29uZmlnLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EZWxheWVkKCk6dm9pZCB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgb3BlbmluZyB0aW1lci5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX29wZW5pbmdUaW1lb3V0KTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5IGludGVydmFsLlxuICAgICAgICB0aGlzLl9vcGVuaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbigpLCB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50IHRvIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24odGhpcy5fY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcuaXNJbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkubW92ZVRvRWxlbWVudCh0aGlzLl9jb21wb25lbnRSZWYsIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGdlbmVyYXRlZCBlbGVtZW50IHRvIHRoZSBib2R5IHRvIGF2b2lkIGFueSBwb3NpdGlvbmluZyBpc3N1ZXMuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5Lm1vdmVUb0RvY3VtZW50Qm9keSh0aGlzLl9jb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmNob3IgZWxlbWVudC4gV2UgZG8gaXQgaGVyZSBiZWNhdXNlIElFMTEgbG92ZXMgdG8gY29tcGxhaW4uXG4gICAgICAgIHRoaXMucG9wdXAuYW5jaG9yID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQgYm9keSB0byBoYW5kbGUgY2xvc2luZy5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnRMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZTpNb3VzZUV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGUpKTtcblxuICAgICAgICAvLyBTdGFydCBwb3B1cCBvcGVuIHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMucG9wdXAub3BlbigpO1xuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25PcGVuO1xuICAgICAgICBpZiAobGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIG9wZW5pbmcgdGltZXIgdG8gc3RvcCB0aGUgcG9wdXAgb3BlbmluZyBhZnRlciBjbG9zZSBoYXMgYmVlbiBjYWxsZWQuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuaW5nVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgLy8gU3RhcnQgcG9wdXAgY2xvc2UgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgbGlmZWN5bGUgaG9va1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSAodGhpcyBhcyBJUG9wdXBMaWZlY3ljbGUpLnBvcHVwT25DbG9zZTtcbiAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRGVsYXllZCgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkRlbGF5ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE8nd2lzZSwgY2xvc2UgaXQuXG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzbid0IGJlZW4gY3JlYXRlZCwgb3IgaXQgaGFzIGJ1dCBpdCBpc24ndCBjdXJyZW50bHkgb3Blbiwgb3BlbiB0aGUgcG9wdXAuXG4gICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICh0aGlzLl9jb21wb25lbnRSZWYgJiYgIXRoaXMucG9wdXAuaXNPcGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTyd3aXNlLCBjbG9zZSBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxuICAgIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuRGVsYXllZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcbiAgICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID09PSBQb3B1cFRyaWdnZXIuQ2xpY2sgfHxcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcblxuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHJlcXVpcmUgYSB0b2dnbGUsIHJhdGhlciB0aGFuIGp1c3Qgb3BlbmluZyB0aGUgcG9wdXAgZWFjaCB0aW1lLlxuICAgICAgICAgICAgdGhpcy50b2dnbGVEZWxheWVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzICYmXG4gICAgICAgICAgICAgICAgICAgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgKHRoaXMuX2NvbXBvbmVudFJlZiAmJiAhdGhpcy5wb3B1cC5pc09wZW4pKSkge1xuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgY2xpY2tzIHdpdGggYSBmb2N1cyB0cmlnZ2VyIHJlcXVpcmVzIGFuIG9wZW4gKGFzIGZvY3VzIGlzbid0IGV2ZXIgbG9zdCBvbiByZXBlYXRlZCBjbGljaykuXG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgdHJpZ2dlciBpcyBvdXRzaWRlIGNsaWNrLFxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmICYmIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgcG9wdXAgaWYgdGhlIGNsaWNrIGlzIG91dHNpZGUgb2YgdGhlIHBvcHVwIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoISh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9PT0gUG9wdXBUcmlnZ2VyLkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5EZWxheWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6YW55KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkgJiZcbiAgICAgICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXIgPT09IFBvcHVwVHJpZ2dlci5Gb2N1cykge1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW51cCgpOnZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fb3BlbmluZ1RpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UgJiYgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLnBvc2l0aW9uaW5nU2VydmljZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21BcHBsaWNhdGlvbih0aGlzLl9jb21wb25lbnRSZWYpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBUeXBlLCBSZW5kZXJlcjIsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlcjxUPiBleHRlbmRzIFN1aVBvcHVwQ29udHJvbGxlciB7XG4gICAgLy8gU3RvcmVzIHJlZmVyZW5jZSB0byBnZW5lcmF0ZWQgY29udGVudCBjb21wb25lbnQuXG4gICAgcHJpdmF0ZSBfY29udGVudENvbXBvbmVudFJlZj86Q29tcG9uZW50UmVmPFQ+O1xuXG4gICAgcHVibGljIGdldCBjb21wb25lbnRJbnN0YW5jZSgpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnQ6VHlwZTxUPixcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnQgYXMgVHlwZTxUPik7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLCB0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFudXAoKTp2b2lkIHtcbiAgICAgICAgc3VwZXIuY2xlYW51cCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb21wb25lbnRSZWYgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciwgSVBvcHVwIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgSUltcGxpY2l0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBJUG9wdXBDb25maWcgfSBmcm9tIFwiLi9wb3B1cC1jb25maWdcIjtcblxuY29uc3QgdGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4gZXh0ZW5kcyBJSW1wbGljaXRDb250ZXh0PElQb3B1cD4ge1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBJUG9wdXBDb25maWcge1xuICAgIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIGNvbnRleHQ/OlQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+IGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PjtcbiAgICBwdWJsaWMgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IGV4dGVuZHMgU3VpUG9wdXBDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgcHVibGljIGNvbnRleHQ/OlQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBjb25maWc6UG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlKGNvbmZpZz86SVRlbXBsYXRlUG9wdXBDb25maWc8VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5jb25maWd1cmUoY29uZmlnKTtcblxuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRlbXBsYXRlLCBpbmplY3QgaXQgaW50byB0aGUgdmlldy5cbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAudGVtcGxhdGVTaWJsaW5nLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5wb3B1cCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvc2l0aW9uaW5nUGxhY2VtZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcG9wdXAtYXJyb3dcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImR5bmFtaWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgKm5nSWY9XCJhbGlnbm1lbnQgPT0gJ2NlbnRlcidcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdGF0aWMgYXJyb3dcIiBbYXR0ci5kaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgW2F0dHIuYWxpZ25tZW50XT1cImFsaWdubWVudFwiICpuZ0lmPVwiYWxpZ25tZW50ICE9ICdjZW50ZXInXCI+PC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwLjcxNDI4NTcxZW07XG4gICAgaGVpZ2h0OiAwLjcxNDI4NTcxZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG46aG9zdC5pbnZlcnRlZCAuYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICMxYjFjMWQ7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl0ge1xuICAgIGJvdHRvbTogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCAjYmFiYWJjO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXSB7XG4gICAgcmlnaHQ6IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwiYm90dG9tXCJdW2FsaWdubWVudD1cImxlZnRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdIHtcbiAgICBsZWZ0OiAxZW07XG4gICAgcmlnaHQ6IGF1dG87XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cInRvcFwiXSB7XG4gICAgdG9wOiAxZW07XG4gICAgYm90dG9tOiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSxcbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdW2FsaWdubWVudD1cInJpZ2h0XCJdIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxZW07XG59XG5cbi5zdGF0aWMuYXJyb3dbZGlyZWN0aW9uPVwibGVmdFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInJpZ2h0XCJdW2FsaWdubWVudD1cImJvdHRvbVwiXSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMWVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBBcnJvdyB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaW52ZXJ0ZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbnZlcnRlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSB0aGlzLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFsaWdubWVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQ29uZmlnIGV4dGVuZHMgUG9wdXBDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBXZSB1c2UgYW4gZW1wdHkgY29uc3RydWN0b3IgdG8gZW5zdXJlIEFuZ3VsYXIgREkgd29ya3MgY29ycmVjdGx5LlxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlUmVmQ29udGV4dCwgVXRpbCwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyLCBQb3B1cFNpemUsIFBvcHVwV2lkdGggfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC1jb25maWdcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyLCBJVGVtcGxhdGVQb3B1cENvbnRleHQsIElUZW1wbGF0ZVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtdGVtcGxhdGUtY29udHJvbGxlclwiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpUG9wdXBdXCIsXG4gICAgZXhwb3J0QXM6IFwic3VpUG9wdXBcIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cERpcmVjdGl2ZTxUPiBleHRlbmRzIFN1aVBvcHVwVGVtcGxhdGVDb250cm9sbGVyPFQ+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBIZWFkZXIoaGVhZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGV4dCh0ZXh0OnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEJhc2ljKGJhc2ljOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNCYXNpYyA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShiYXNpYyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwSW5saW5lKGlubGluZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmlzSW5saW5lID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGlubGluZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwRmxvd2luZyhmbG93aW5nOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNGbG93aW5nID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZsb3dpbmcpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBQbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBXaWR0aCh3aWR0aDpQb3B1cFdpZHRoKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwU2l6ZShzaXplOlBvcHVwU2l6ZSkge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBEZWxheShkZWxheTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuZGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcG9wdXBUcmlnZ2VyKCk6UG9wdXBUcmlnZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdXAuY29uZmlnLnRyaWdnZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwb3B1cFRyaWdnZXIodHJpZ2dlcjpQb3B1cFRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVRlbXBsYXRlUG9wdXBDb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVGVtcGxhdGVDb250ZXh0KGNvbnRleHQ6VCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cENvbmZpZyhjb25maWc6SVRlbXBsYXRlUG9wdXBDb25maWc8VD4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwb3B1cERlZmF1bHRzOlN1aVBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIG5ldyBQb3B1cENvbmZpZyhwb3B1cERlZmF1bHRzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBBcnJvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXAtYXJyb3dcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlQb3B1cERpcmVjdGl2ZSxcbiAgICAgICAgU3VpUG9wdXBBcnJvdyxcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpUG9wdXBEaXJlY3RpdmUsXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpUG9wdXBDb25maWdcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlQb3B1cFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWlQb3B1cE1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LFxuICAgIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gICAgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvcixcbiAgICBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgY3VzdG9tVmFsaWRhdG9yRmFjdG9yeSwgQ3VzdG9tVmFsaWRhdG9yLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSwgS2V5Q29kZVxufSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlQb3B1cENvbXBvbmVudENvbnRyb2xsZXIsIFBvcHVwQWZ0ZXJPcGVuLCBQb3B1cENvbmZpZywgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyLCBEYXRlcGlja2VyTW9kZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnLCBZZWFyQ29uZmlnLCBNb250aENvbmZpZywgRGF0ZXRpbWVDb25maWcsIFRpbWVDb25maWcsIERhdGVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVxuICAgICAgIGV4dGVuZHMgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyPFN1aURhdGVwaWNrZXI+XG4gICAgICAgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8RGF0ZT4sIElDdXN0b21WYWxpZGF0b3JIb3N0LCBPbkNoYW5nZXMsIFBvcHVwQWZ0ZXJPcGVuIHtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb2RlOkRhdGVwaWNrZXJNb2RlO1xuICAgIHB1YmxpYyBjb25maWc6Q2FsZW5kYXJDb25maWc7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNb2RlXCIpXG4gICAgcHVibGljIGdldCBtb2RlKCk6RGF0ZXBpY2tlck1vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1vZGUobW9kZTpEYXRlcGlja2VyTW9kZSkge1xuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZSB8fCBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlllYXI6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgWWVhckNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5Nb250aDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBNb250aENvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRlOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRlQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLkRhdGV0aW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IERhdGV0aW1lQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGVwaWNrZXJNb2RlLlRpbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgVGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VySW5pdGlhbERhdGVcIilcbiAgICBwdWJsaWMgaW5pdGlhbERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNYXhEYXRlXCIpXG4gICAgcHVibGljIG1heERhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJNaW5EYXRlXCIpXG4gICAgcHVibGljIG1pbkRhdGU/OkRhdGU7XG5cbiAgICBASW5wdXQoXCJwaWNrZXJGaXJzdERheU9mV2Vla1wiKVxuICAgIHB1YmxpYyBmaXJzdERheU9mV2Vlaz86bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfbG9jYWxlVmFsdWVzOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzO1xuXG4gICAgQElucHV0KFwicGlja2VyTG9jYWxlT3ZlcnJpZGVzXCIpXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElEYXRlcGlja2VyTG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwiZGF0ZXBpY2tlclwiPih0aGlzLl9sb2NhbGVWYWx1ZXMsIHRoaXMubG9jYWxlT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJQbGFjZW1lbnRcIilcbiAgICBwdWJsaWMgc2V0IHBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25cIilcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyVHJhbnNpdGlvbkR1cmF0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBPdXRwdXQoXCJwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25TZWxlY3RlZERhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPERhdGU+O1xuXG4gICAgQE91dHB1dChcInBpY2tlclZhbGlkYXRvckNoYW5nZVwiKVxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIFN1aURhdGVwaWNrZXIsIG5ldyBQb3B1cENvbmZpZyh7XG4gICAgICAgICAgICB0cmlnZ2VyOiBQb3B1cFRyaWdnZXIuRm9jdXMsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IFBvc2l0aW9uaW5nUGxhY2VtZW50LkJvdHRvbUxlZnQsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDIwMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBwb3B1cCBpcyBkcmF3biBjb3JyZWN0bHkgKGkuZS4gbm8gYm9yZGVyKS5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3B1cC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFwidWlcIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImNhbGVuZGFyXCIpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLm9uTGFuZ3VhZ2VVcGRhdGUuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Mb2NhbGVVcGRhdGUoKSk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGVkRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLm1vZGUgPSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdXBPbk9wZW4oKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsZVZhbHVlcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5jdXJyZW50RGF0ZSA9IHRoaXMuaW5pdGlhbERhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5zZWxlY3RlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5maXJzdERheU9mV2VlayA9IHRoaXMuZmlyc3REYXlPZldlZWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uub25EYXRlQ2hhbmdlLnN1YnNjcmliZSgoZDpEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKHsgbWF4RGF0ZSwgbWluRGF0ZSwgbW9kZSB9OlNpbXBsZUNoYW5nZXMpOnZvaWQge1xuICAgICAgICBpZiAobWF4RGF0ZSB8fCBtaW5EYXRlIHx8IG1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvY2FsZVVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbGVWYWx1ZXMgPSB0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIHBvc3QgcHJvY2VzcyB0aGUgbWluICYgbWF4IGRhdGUgYmVjYXVzZSBzb21ldGltZXMgdGhpcyBwdXRzIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGFsbG93ZWQgcmFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHZhbHVlIDwgdGhpcy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VpTWluRGF0ZTogeyByZXF1aXJlZDogdGhpcy5taW5EYXRlLCBhY3R1YWw6IHZhbHVlIH0gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4RGF0ZSAmJiB2YWx1ZSA+IHRoaXMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1heERhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWF4RGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmd1bGFyIGV4cGVjdHMgbnVsbFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbnVsbC1rZXl3b3JkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOkRhdGUgfCB1bmRlZmluZWQpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclNlbGVjdGVkRGF0ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxEYXRlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRGF0ZXBpY2tlcl1cIixcbiAgICBob3N0OiB7IFwiKHBpY2tlclZhbGlkYXRvckNoYW5nZSlcIjogXCJvblZhbGlkYXRvckNoYW5nZSgpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWxpZGF0b3JGYWN0b3J5KFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yIGV4dGVuZHMgQ3VzdG9tVmFsaWRhdG9yPFN1aURhdGVwaWNrZXJEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaG9zdDpTdWlEYXRlcGlja2VyRGlyZWN0aXZlKSB7IHN1cGVyKGhvc3QpOyB9XG59XG4iLCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2RhdGVwaWNrZXIuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBJbnRlcm5hbERhdGVQYXJzZXIsIERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuaW1wb3J0ICogYXMgYm93c2VyIGZyb20gXCJib3dzZXJcIjtcblxuaW1wb3J0IFwiLi4vaGVscGVycy9pcy13ZWJ2aWV3XCI7XG5pbXBvcnQgKiBhcyBpc1VBV2ViVmlldyBmcm9tIFwiaXMtdWEtd2Vidmlld1wiO1xuY29uc3QgaXNXZWJWaWV3ID0gaXNVQVdlYlZpZXdbXCJkZWZhdWx0XCJdIHx8IGlzVUFXZWJWaWV3O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlEYXRlcGlja2VyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfdXNlTmF0aXZlT25Nb2JpbGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInBpY2tlclVzZU5hdGl2ZU9uTW9iaWxlXCIpXG4gICAgcHVibGljIGdldCB1c2VOYXRpdmVPbk1vYmlsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB1c2VOYXRpdmVPbk1vYmlsZShmYWxsYmFjazpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlID0gZmFsbGJhY2s7XG4gICAgICAgIGNvbnN0IGlzT25Nb2JpbGUgPSBib3dzZXIubW9iaWxlIHx8IGJvd3Nlci50YWJsZXQgfHwgaXNXZWJWaWV3KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gdGhpcy51c2VOYXRpdmVPbk1vYmlsZSAmJiBpc09uTW9iaWxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGZhbGxiYWNrQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWxsYmFja0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZhbGxiYWNrQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBJZiB0aGUgZmFsbGJhY2sgaXMgYWN0aXZlLCB0aGVuIHRoZSB0cmlnZ2VyIG11c3QgYmUgbWFudWFsIHNvIHRoZSBkYXRlcGlja2VyIG5ldmVyIG9wZW5zLlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0aGlzLmZhbGxiYWNrQWN0aXZlID8gUG9wdXBUcmlnZ2VyLk1hbnVhbCA6IFBvcHVwVHJpZ2dlci5Gb2N1cztcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZSAodGhpcyB3aWxsIGluc2VydCB0aGUgYFRgIGFzIHJlcXVpcmVkKS5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXJzZXIoKTpEYXRlUGFyc2VyIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50ZXJuYWxEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5tb2RlLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcy5mb3JtYXRzW3RoaXMuZGF0ZXBpY2tlci5tb2RlXSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudElucHV0VmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUeXBlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGVTdHJpbmcoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdCh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudHlwZVwiKVxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLmNvbmZpZy5mYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5tYXhcIilcbiAgICBwdWJsaWMgZ2V0IG1heCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWF4IGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIE91ciBEYXRlcGlja2VyIHdpbGwgYWx3YXlzIGNob29zZSB0aGUgMXN0IGRhdGUgb24gdGhlIHByb3ZpZGVkIHByZWNpc2lvbixcbiAgICAgICAgICAgIC8vIG1lYW5pbmcgYW55dGhpbmcgYmVsb3cgdGhlIG1heERhdGUgd2lsbCB3b3JrLCBoZW5jZSBlbmRPZi5cbiAgICAgICAgICAgIGNvbnN0IG1heCA9IERhdGVVdGlsLmVuZE9mKHRoaXMuZGF0ZXBpY2tlci5jb25maWcucHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtYXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5taW5cIilcbiAgICBwdWJsaWMgZ2V0IG1pbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWluIGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIFdlIHVzZSAxIG1pbnV0ZSBiZWZvcmUgdGhlIG5leHQgZGF0ZSBhdCB0aGUgY29uZmlndXJlZCBwcmVjaXNpb24gc2luY2VcbiAgICAgICAgICAgIC8vIG91ciBEYXRlcGlja2VyIHBpY2tzIHRoZSBmaXJzdCBhdmFpbGFibGUgZGF0ZSBhdCB0aGF0IHByZWNpc2lvbi5cbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWluKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIGRhdGVwaWNrZXI6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgICBASG9zdCgpIHB1YmxpYyB2YWx1ZUFjY2Vzc29yOlN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy51c2VOYXRpdmVPbk1vYmlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVzLCB1cGRhdGUgdGhlIGlucHV0IHRleHQgYWxvbmdzaWRlIGl0LlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIub25TZWxlY3RlZERhdGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG5cbiAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgaWYgaXQgaXMgZGlmZmVyZW50IHRvIHdoYXQgaXQncyBiZWluZyB1cGRhdGVkIHRvLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgdGhlIGVkaXRpbmcgcG9zaXRpb24gaXNuJ3QgY2hhbmdlZCB3aGVuIG1hbnVhbGx5IHR5cGluZyB0aGUgZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLl9sYXN0VXBkYXRlVHlwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCB2YWx1ZSB8fCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB0eXBlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY3VycmVudElucHV0VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIHNlbGVjdGVkIGRhdGUgaWYgbm8gZGF0ZSB3YXMgZW50ZXJlZCBtYW51YWxseS5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZXIucGFyc2UodmFsdWUsIHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpICYmIHZhbHVlID09PSB0aGlzLnBhcnNlci5mb3JtYXQocGFyc2VkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLm9uVG91Y2hlZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlRGF0ZVNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNhbGNTdGFydChzdGFydDpEYXRlKTpEYXRlIHtcbiAgICAgICAgY29uc3QgbW9udGhTdGFydCA9IERhdGVVdGlsLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5Nb250aCwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpKTtcbiAgICAgICAgbW9udGhTdGFydC5zZXREYXRlKCgxIC0gbW9udGhTdGFydC5nZXREYXkoKSArIHRoaXMuc2VydmljZS5maXJzdERheU9mV2VlayAtIDcpICUgNyk7XG4gICAgICAgIHJldHVybiBtb250aFN0YXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gaXRlbS5kYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gaXRlbS5kYXRlLmdldE1vbnRoKCkgIT09IGJhc2VEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGl0ZW0uaXNTZWxlY3RhYmxlID0gaXRlbS5pc0Rpc2FibGVkO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWRhdGUtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgc2V2ZW4gY29sdW1uIGRheVwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCI3XCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRlIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzXCI+e3sgZGF5IH19PC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJEYXRlVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkYXlzKCk6c3RyaW5nW10ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy53ZWVrZGF5c05hcnJvdztcbiAgICAgICAgcmV0dXJuIGRheXMubWFwKChkLCBpKSA9PiBkYXlzWyhpICsgdGhpcy5zZXJ2aWNlLmZpcnN0RGF5T2ZXZWVrKSAlIGRheXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5tb250aCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5EYXRlLCBuZXcgQ2FsZW5kYXJSYW5nZURhdGVTZXJ2aWNlKERhdGVQcmVjaXNpb24uTW9udGgsIDYsIDcpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgIGNvbnN0IGN1c3RvbUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIoY3VzdG9tRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWhvdXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgZm91ciBjb2x1bW4gaG91clwiPlxuPHRoZWFkICpuZ0lmPVwic2VydmljZS5jb25maWcubW9kZSAhPSAxXCI+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySG91clZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRlLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkhvdXIsIG5ldyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EYXRlLCA2LCA0KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1vZGUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkhvdXIsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGNEYXRlcyhzdGFydDpEYXRlKTpEYXRlW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5BcnJheVxuICAgICAgICAgICAgLnJhbmdlKHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcChpID0+IERhdGVVdGlsLmFkZChEYXRlUHJlY2lzaW9uLk1pbnV0ZSwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCBpICogNSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbWludXRlLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiBtaW51dGVcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmNvbmZpZy5tb2RlICE9PSBDYWxlbmRhck1vZGUuVGltZU9ubHkpIHtcbiAgICAgICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRldGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcihkYXRlVGltZUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgdGltZUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlLCBuZXcgQ2FsZW5kYXJSYW5nZU1pbnV0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Ib3VyLCA0LCAzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZU1vbnRoU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMubW9udGhzU2hvcnRbaXRlbS5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbW9udGgtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1vbnRoXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyTW9udGhWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IHllYXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnllYXIsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGgsIG5ldyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlKERhdGVQcmVjaXNpb24uWWVhciwgNCwgMykpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIERhdGVVdGlsLCBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gVXRpbC5TdHJpbmcucGFkTGVmdChpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgICAgIGl0ZW0uaXNPdXRzaWRlUmFuZ2UgPSBpdGVtLmRhdGUuZ2V0RnVsbFllYXIoKSA+PSB0aGlzLmNhbGNTdGFydChiYXNlRGF0ZSkuZ2V0RnVsbFllYXIoKSArIDEwO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLXllYXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIHllYXJcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgcGFkKGRlY2FkZVN0YXJ0KSB9fSAtIHt7IHBhZChkZWNhZGVTdGFydCArIDEwKSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJZZWFyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG4gICAgcHVibGljIGdldCBkZWNhZGVTdGFydCgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBEYXRlVXRpbFxuICAgICAgICAgICAgLnN0YXJ0T2YoRGF0ZVByZWNpc2lvbi5EZWNhZGUsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpXG4gICAgICAgICAgICAuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuWWVhciwgbmV3IENhbGVuZGFyUmFuZ2VZZWFyU2VydmljZShEYXRlUHJlY2lzaW9uLkRlY2FkZSwgNCwgMykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWQoeWVhcjpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBVdGlsLlN0cmluZy5wYWRMZWZ0KHllYXIudG9TdHJpbmcoKSwgNCwgXCIwXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlQb3B1cE1vZHVsZSB9IGZyb20gXCIuLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclZpZXdUaXRsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FsZW5kYXItdmlldy10aXRsZVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJZZWFyVmlldyB9IGZyb20gXCIuL3ZpZXdzL3llYXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNb250aFZpZXcgfSBmcm9tIFwiLi92aWV3cy9tb250aC12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyRGF0ZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9kYXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySG91clZpZXcgfSBmcm9tIFwiLi92aWV3cy9ob3VyLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyTWludXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL21pbnV0ZS12aWV3XCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2lucHV0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtcbiAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yXG59IGZyb20gXCIuL2RpcmVjdGl2ZXMvZGF0ZXBpY2tlci5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDYWxlbmRhckl0ZW0sXG5cbiAgICAgICAgU3VpQ2FsZW5kYXJWaWV3VGl0bGUsXG4gICAgICAgIFN1aUNhbGVuZGFyWWVhclZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTW9udGhWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhckRhdGVWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhckhvdXJWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhck1pbnV0ZVZpZXcsXG5cbiAgICAgICAgU3VpRGF0ZXBpY2tlcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU3VpRGF0ZXBpY2tlclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBbY2xhc3MuY29udGVudF09XCJ3cmFwQ29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lciBleHRlbmRzIFN1aVRyYW5zaXRpb24ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGltbWVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgcHJpdmF0ZSBfaXNEaW1tZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0RpbW1lZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaW1tZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0RpbW1lZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGlzRGltbWVkID0gISF2YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eSB3aGVuIGZpcnN0IHNldHRpbmcgZGltbWVkLCB0byBlbnN1cmUgaW5pdGlhbCBzdGF0ZSBkb2Vzbid0IHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihpc0RpbW1lZCwgXCJibG9ja1wiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNEaW1tZWQgIT09IGlzRGltbWVkKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzRGltbWVkID0gaXNEaW1tZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXCJmYWRlXCIsIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBpc0RpbW1lZCA/IFRyYW5zaXRpb25EaXJlY3Rpb24uSW4gOiBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQ2xpY2thYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvKiBJbnRlcm5hbCBmb3Igbm93ICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd3JhcENvbnRlbnQ6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lzRGltbWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMud3JhcENvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaW1tZWRDaGFuZ2UuZW1pdCh0aGlzLmlzRGltbWVkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGltbWVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaW1tZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURpbW1lclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlEaW1tZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURpbW1lck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gXCJpdGVtQ2xpY2tcIiB8IFwib3V0c2lkZUNsaWNrXCIgfCBcImRpc2FibGVkXCI7XG5cbi8vIENyZWF0ZXMgZXNzZW50aWFsbHkgYSAnc3RyaW5nJyBlbnVtLlxuZXhwb3J0IGNvbnN0IERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IHtcbiAgICBJdGVtQ2xpY2s6IFwiaXRlbUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGUsXG4gICAgRGlzYWJsZWQ6IFwiZGlzYWJsZWRcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGVcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuICAgIC8vIE9wZW4gc3RhdGUgb2YgdGhlIGRyb3Bkb3duXG4gICAgcHVibGljIGlzT3Blbjpib29sZWFuO1xuICAgIC8vIEFuaW1hdGluZyBzdGF0ZSBvZiB0aGUgZHJvcGRvd24uXG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgLy8gRW1pdHRlciBmb3Igd2hlbiBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0cyB0aGUgXCJhdXRvY2xvc2VcIiBtb2RlIG9mIHRoZSBkcm9wZG93biAtIGkuZS4gd2hhdCB1c2VyIGFjdGlvbiBjYXVzZXMgaXQgdG8gYXV0b2Nsb3NlLlxuICAgIHB1YmxpYyBhdXRvQ2xvc2VNb2RlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGNvbnRhaW5pbmcgZHJvcGRvd24gc28gd2UgY2FuIG9wZW4gaXQgYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBwYXJlbnQ/OkRyb3Bkb3duU2VydmljZTtcbiAgICAvLyBBbHNvIGtlZXAgdHJhY2sgb2YgZHJvcGRvd25zIG5lc3RlZCBpbiB0aGlzIG9uZSBzbyB3ZSBjYW4gY2xvc2UgdGhlbSBhcyBuZWNlc3NhcnkuXG4gICAgcHVibGljIGNoaWxkcmVuOkRyb3Bkb3duU2VydmljZVtdO1xuICAgIHB1YmxpYyBnZXQgaXNOZXN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXV0b0Nsb3NlTW9kZSA9IGF1dG9DbG9zZU1vZGU7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcGVuU3RhdGUoaXNPcGVuOmJvb2xlYW4sIHJlZmxlY3RJblBhcmVudDpib29sZWFuID0gZmFsc2UpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gIT09IGlzT3BlbiAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCB0aGUgZHJvcGRvd24gaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICEhaXNPcGVuO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBXZSBtdXN0IGRlbGF5IHRoZSBlbWl0dGluZyB0byBhdm9pZCB0aGUgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgQW5ndWxhciBlcnJvcnMuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjaGlsZCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBjbG9zZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHJlZmxlY3RJblBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIHBhcmVudCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBvcGVucy5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgZHJvcGRvd24gaXMgZGlzYWJsZWQsIHJlLWVtaXQgdGhlIG9yaWdpbmFsIGlzT3BlbiB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVsYXkoKCkgPT4gdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAhPT0gaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKCEhaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBkcm9wZG93biBhcyBpdCBpcyBub3cgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9ICEhaXNEaXNhYmxlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVPcGVuU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMuaXNPcGVuKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBkcm9wZG93biBzZXJ2aWNlIGFzIGEgY2hpbGQgb2YgdGhpcyBzZXJ2aWNlLlxuICAgIHB1YmxpYyByZWdpc3RlckNoaWxkKGNoaWxkOkRyb3Bkb3duU2VydmljZSk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0NoaWxkUmVnaXN0ZXJlZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlIG1ldGhvZCB0byBjaGVjayBpZiB0aGUgcHJvdmlkZWQgZHJvcGRvd24gaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFzIGEgY2hpbGQsIG9yIGlzIGEgZGVzY2VuZGFudCBvZiBhIGNoaWxkLlxuICAgIHB1YmxpYyBpc0NoaWxkUmVnaXN0ZXJlZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gY2hpbGQgfHwgISF0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAuZmluZChjID0+ICEhYy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maW5kKGNDaGlsZCA9PiBjQ2hpbGQuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSk7XG4gICAgfVxuXG4gICAgLy8gV2lwZXMgYW55IG5lc3RlZCBkYXRhLCBzbyBhbGwgc2VydmljZXMgY2FuIGJlIGNsZWFubHkgcmVhdHRhY2hlZC5cbiAgICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgZm9yIGRlbGF5aW5nIGFuIGV2ZW50IGludG8gdGhlIG5leHQgdGljaywgdG8gYXZvaWQgQW5ndWxhciBcImNoYW5nZWQgYWZ0ZXIgY2hlY2tlZFwiIGVycm9yLlxuICAgIHByaXZhdGUgZGVsYXkoY2FsbGJhY2s6KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIElBdWdtZW50ZWRFbGVtZW50LCBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuLy8gUG9seWZpbGwgZm9yIElFXG5pbXBvcnQgXCJlbGVtZW50LWNsb3Nlc3RcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gV2UgbXVzdCBhdHRhY2ggdG8gZXZlcnkgJy5pdGVtJyBhcyBBbmd1bGFyIGRvZXNuJ3Qgc3VwcG9ydCA+IHNlbGVjdG9ycy5cbiAgICBzZWxlY3RvcjogXCIuaXRlbVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBXZSBtdXN0IHVzZSBuYXRpdmVFbGVtZW50IGFzIEFuZ3VsYXIgZG9lc24ndCBoYXZlIGEgd2F5IG9mIHJlYWRpbmcgY2xhc3MgaW5mb3JtYXRpb24uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gUmVuZGVyZXIgaXMgdXNlZCB0byBlbmFibGUgYSBkeW5hbWljIGNsYXNzIG5hbWUuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY2xhc3MgbmFtZSB1c2VkIGZvciBhICdzZWxlY3RlZCcgaXRlbS5cbiAgICBwdWJsaWMgc2VsZWN0ZWRDbGFzczpzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gU3VpRHJvcGRvd25NZW51KSlcbiAgICBwdWJsaWMgY2hpbGREcm9wZG93bk1lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgcHVibGljIGdldCBoYXNDaGlsZERyb3Bkb3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybUNsaWNrKCk6dm9pZCB7XG4gICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURyb3Bkb3duTWVudV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnUgZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVUcmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBzZXJ2aWNlKCk6RHJvcGRvd25TZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHZhbHVlOkRyb3Bkb3duU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gdmFsdWU7XG5cbiAgICAgICAgbGV0IHByZXZpb3VzSXNPcGVuID0gdGhpcy5fc2VydmljZS5pc09wZW47XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgoaXNPcGVuOmJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpc09wZW4gIT09IHByZXZpb3VzSXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBydW4gdHJhbnNpdGlvbnMgaWYgdGhlIG9wZW4gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25EaXJlY3Rpb24uRWl0aGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5fc2VydmljZS5pc0FuaW1hdGluZyA9IGZhbHNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGl0ZW0gc2VsZWN0aW9ucyB3aGVuIGEgbmVzdGVkIGl0ZW0gaXMgc2VsZWN0ZWQgdG8gYXZvaWQgaW5jb3Npc3RlbnQgb3BlbiBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZpb3VzSXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhcmVudEVsZW1lbnQodmFsdWU6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlclxuICAgICAgICAgICAgLmxpc3Rlbih2YWx1ZS5uYXRpdmVFbGVtZW50LCBcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFyZW50S2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93bk1lbnVJdGVtKVxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlJbnRlcm5hbDpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5T3ZlcnJpZGU6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHVibGljIHNldCBpdGVtcyhpdGVtczpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4pIHtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlID0gaXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zUXVlcnkoKTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeU92ZXJyaWRlIHx8IHRoaXMuX2l0ZW1zUXVlcnlJbnRlcm5hbDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgaXRlbXMsIGlnbm9yaW5nIHRob3NlIHRoYXQgYXJlIGRpc2FibGVkLlxuICAgIHByaXZhdGUgZ2V0IF9pdGVtcygpOlN1aURyb3Bkb3duTWVudUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5LmZpbHRlcihpID0+ICFpLmlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIC8vIFN0YWNrIHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIC8vIFNlbGVjdGVkIGl0ZW1zIGxvd2VyIGluIHRoZSBzdGFjayBhcmUgbmVjZXNzYXJpbHkgdGhlIHBhcmVudCBvZiB0aGUgaXRlbSBvbmUgaGlnaGVyLlxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zOlN1aURyb3Bkb3duTWVudUl0ZW1bXTtcblxuICAgIC8vIFNldHMgd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSBzZWxlY3QgdGhlIDFzdCBpdGVtIHdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW5lZC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51QXV0b1NlbGVjdEZpcnN0OmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M6c3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfcGFyZW50S2V5RG93bkxpc3RlbmVyOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uID0gXCJzbGlkZSBkb3duXCI7XG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgZHJvcGRvd24gbWVudSBpcyBkZXN0cm95ZWQgYmVmb3JlIGl0IGhhcyBhIGNoYW5jZSB0byBiZSBmdWxseSBpbml0aWFsaXNlZC5cbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gKCkgPT4ge307XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCAmIE1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBJQXVnbWVudGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldC5jbG9zZXN0KFwiLml0ZW1cIikpICYmICEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmNlIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIHdlIGNhbiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFyZW50S2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IHRoZSByb290IGRyb3Bkb3duIChpLmUuIG5vdCBuZXN0ZWQgZHJvcGRvd25zKSBpcyByZXNwb25zaWJsZSBmb3Iga2VlcGluZyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlICYmIHRoaXMuX3NlcnZpY2UuaXNPcGVuICYmICF0aGlzLl9zZXJ2aWNlLmlzTmVzdGVkKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGRvY3VtZW50IGV2ZW50cyBsaWtlIHNjcm9sbGluZyB3aGlsZSBvcGVuLlxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghL2lucHV0L2kudGVzdCh0YXJnZXQudGFnTmFtZSkgJiZcbiAgICAgICAgICAgICAgICBbS2V5Q29kZS5Fc2NhcGUsIEtleUNvZGUuRW50ZXIsIEtleUNvZGUuVXAsIEtleUNvZGUuRG93biwgS2V5Q29kZS5MZWZ0LCBLZXlDb2RlLlJpZ2h0XS5maW5kKGtDID0+IGtDID09PSBlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXRzIHRoZSB0b3Agc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSBzdGFjay5cbiAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuICAgICAgICAgICAgLy8gS2VlcGluZyB0cmFjayBvZiB0aGUgbWVudSBjb250YWluaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudCBhbGxvd3MgdXMgdG8gZWFzaWx5IGRldGVybWluZSBpdHMgc2libGluZ3MuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRDb250YWluZXI6U3VpRHJvcGRvd25NZW51ID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIC8vIEVzY2FwZSA6IGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVzY2FwZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3duIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYmVsb3cgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgLy8gVXAgOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBhYm92ZSB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZENvbnRhaW5lci51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHdlIGFyZSBpbiBhbiBpbnB1dCwgdG8gc3RvcCBqdW1waW5nIHRvIHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRW50ZXIgOiBpZiB0aGUgaXRlbSBkb2Vzbid0IGNvbnRhaW4gYSBuZXN0ZWQgZHJvcGRvd24sICdjbGljaycgaXQuIE90aGVyd2lzZSwgZmFsbCB0aHJvdWdoIHRvICdSaWdodCcgYWN0aW9uLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIXNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnBlcmZvcm1DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyBSaWdodCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGNvbnRhaW5zIGEgbmVzdGVkIGRyb3Bkb3duLCBvcGVuIHRoZSBkcm9wZG93biAmIHNlbGVjdCB0aGUgMXN0IGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTGVmdCA6IGlmIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGluIGEgbmVzdGVkIGRyb3Bkb3duLCBjbG9zZSBpdCBhbmQgc2VsZWN0IHRoZSBjb250YWluaW5nIGl0ZW0uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFyZW50LmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFNlbGVjdGlvbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGkuc2VsZWN0ZWRDbGFzcyA9IHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzO1xuICAgICAgICAgICAgaS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm1lbnVBdXRvU2VsZWN0Rmlyc3QgJiYgdGhpcy5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQXV0b3NlbGVjdCAxc3QgaXRlbSBpZiByZXF1aXJlZCAmIHBvc3NpYmxlLlxuICAgICAgICAgICAgdGhpcy5faXRlbXNbMF0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbSh0aGlzLl9pdGVtc1swXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9pdGVtc1F1ZXJ5LmZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERldGVybWluZXMgdGhlIGl0ZW0gdG8gbmV4dCBiZSBzZWxlY3RlZCwgYmFzZWQgb24gdGhlIGtleWJvYXJkIGlucHV0ICYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgIHB1YmxpYyB1cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWRJdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0sIGtleUNvZGU6S2V5Q29kZSk6U3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9pdGVtc1xuICAgICAgICAgICAgLmZpbmRJbmRleChpID0+IGkgPT09IHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbjpTdWlEcm9wZG93bk1lbnVJdGVtO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOlxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGFyZSBzZWxlY3RlZCwgc2VsZWN0IHRoZSAxc3QgaXRlbS4gU2hvdWxkIHRoaXMgYmUgYHRoaXMuaXRlbXMubGFzdCAtIDFgP1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBpdGVtIGF0IHRoZSB1cGRhdGVkIGluZGV4LiBUaGUgfHwgaXMgdG8gc3RvcCB1cyBzZWxlY3RpbmcgcGFzdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBpdGVtIGxpc3QuXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuX2l0ZW1zW3NlbGVjdGVkSW5kZXhdIHx8IHNlbGVjdGVkSXRlbTtcblxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5pc1NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShuZXdTZWxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1NlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nyb2xsVG9JdGVtKGl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1lbnU6RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSZWN0OkNsaWVudFJlY3QgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBtZW51UmVjdCA9IG1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgbGV0IHNjcm9sbEFtb3VudCA9IDA7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC5ib3R0b20gLSBtZW51UmVjdC5ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LnRvcCAtIG1lbnVSZWN0LnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wICs9IE1hdGgucm91bmQoc2Nyb2xsQW1vdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5faXRlbXNRdWVyeS5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSXRlbXNDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25JdGVtc0NoYW5nZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgdXNlIGBfaXRlbXNgIHJhdGhlciB0aGFuIGBpdGVtc2AgaW4gY2FzZSBvbmUgb3IgbW9yZSBoYXZlIGJlY29tZSBkaXNhYmxlZC5cbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW5cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgS2V5Q29kZSwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9kcm9wZG93bi1tZW51XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93biBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93biwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX2NoaWxkcmVuOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bj47XG5cbiAgICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCk6U3VpRHJvcGRvd25bXSB7XG4gICAgICAgIC8vIEBDb250ZW50Q2hpbGRyZW4gaW5jbHVkZXMgdGhlIGN1cnJlbnQgZWxlbWVudCBieSBkZWZhdWx0LlxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKGMgPT4gYyAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW5DaGFuZ2UoKTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFRoaXMgaXMgdG8gZW5zdXJlIG5lc3RlZCBkcm9wZG93bnMgZG9uJ3QgZ2V0IG1hZGUgYm9sZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW4gJiYgIXRoaXMuc2VydmljZS5pc05lc3RlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhlIGRyb3Bkb3duLCB3ZSB3YW50IHRvIGFsd2F5cyBvcGVuIGl0cyBwYXJlbnRzLlxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlLCAhIXZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiSW5kZXgoKTpudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gSWYgZGlzYWJsZWQsIHJlbW92ZSBmcm9tIHRhYmluZGV4LlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBjdXN0b20gdGFiaW5kZXgsIGRlZmF1bHQgdG8gdGhhdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBhdXRvQ2xvc2UoKTpEcm9wZG93bkF1dG9DbG9zZVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhdXRvQ2xvc2UodmFsdWU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHNldCBbc3VpRHJvcGRvd25NZW51XSBvbiB0aGUgbWVudSBlbGVtZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLnNlcnZpY2U7XG4gICAgICAgIHRoaXMuX21lbnUucGFyZW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlblVwZGF0ZWQoKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoaWxkcmVuVXBkYXRlZCgpOnZvaWQge1xuICAgICAgICAvLyBSZXJlZ2lzdGVyIGNoaWxkIGRyb3Bkb3ducyBlYWNoIHRpbWUgdGhlIG1lbnUgY29udGVudCBjaGFuZ2VzLlxuICAgICAgICB0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAubWFwKGMgPT4gYy5zZXJ2aWNlKVxuICAgICAgICAgICAgLmZvckVhY2gocyA9PiB0aGlzLnNlcnZpY2UucmVnaXN0ZXJDaGlsZChzKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZU9wZW5TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbGx5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5cHJlc3MoZTpIYW5kbGVkRXZlbnQgJiBLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gQmxvY2sgdGhlIGtleWJvYXJkIGV2ZW50IGZyb20gYmVpbmcgZmlyZWQgb24gcGFyZW50IGRyb3Bkb3ducy5cbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXh0ZXJuYWxseUNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljayB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byByZWZsZWN0IGluIHBhcmVudCBzaW5jZSB0aGV5IGFyZSBhbHNvIGJvdW5kIHRvIGRvY3VtZW50LlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kcm9wZG93blwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51LCBTdWlEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlEcm9wZG93bixcbiAgICAgICAgU3VpRHJvcGRvd25NZW51LFxuICAgICAgICBTdWlEcm9wZG93bk1lbnVJdGVtXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcgfSBmcm9tIFwiLi9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcblxuLy8gSGVscGVyIGNsYXNzIHRvIHN1cHBvcnQgbWV0aG9kIGNoYWluaW5nIHdoZW4gY2FsbGluZyBgU3VpTW9kYWxTZXJ2aWNlLm9wZW4oLi4uKWAuXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgIHByaXZhdGUgX2NvbmZpZzpNb2RhbENvbmZpZzxULCBVLCBWPjtcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+PjtcblxuICAgIC8vIFNob3J0aGFuZCBmb3IgZGlyZWN0IGFjY2VzcyB0byB0aGUgYFN1aU1vZGFsYCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpOlN1aU1vZGFsPFUsIFY+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZTpNb2RhbENvbmZpZzxULCBVLCBWPiwgY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlNb2RhbDxVLCBWPj4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IGRlc3Ryb3kgdGhlIG1vZGFsIGNvbXBvbmVudCB3aGVuIGl0IGhhcyBiZWVuIGRpc21pc3NlZC5cbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EaXNtaXNzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmb3Igd2hlbiBgb25BcHByb3ZlYCBpcyBmaXJlZC5cbiAgICBwdWJsaWMgb25BcHByb3ZlKGNhbGxiYWNrOihyZXN1bHQ6VSkgPT4gdm9pZCk6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkFwcHJvdmUuc3Vic2NyaWJlKChyZXM6VSkgPT4gY2FsbGJhY2socmVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkRlbnlgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkRlbnkoY2FsbGJhY2s6KHJlc3VsdDpWKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uRGVueS5zdWJzY3JpYmUoKHJlczpWKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGFwcHJvdmUgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpVKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwcm92ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHRoZSBkZW55IGV2ZW50IG9mIHRoZSBtb2RhbCBtYW51YWxseS5cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6Vik6dm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRlbnkocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoZSBtb2RhbCBjb21wb25lbnQgaW5zdGFudGx5LCB3aXRob3V0IHRyYW5zaXRpb25zIG9yIGZpcmluZyBhbnkgZXZlbnRzLlxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbFRlbXBsYXRlIH0gZnJvbSBcIi4vbW9kYWwtdGVtcGxhdGVcIjtcblxuZXhwb3J0IHR5cGUgTW9kYWxTaXplID0gXCJtaW5pXCIgfCBcInRpbnlcIiB8IFwic21hbGxcIiB8IFwibm9ybWFsXCIgfCBcImxhcmdlXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFNpemUgPSB7XG4gICAgTWluaTogXCJtaW5pXCIgYXMgTW9kYWxTaXplLFxuICAgIFRpbnk6IFwidGlueVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBTbWFsbDogXCJzbWFsbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBOb3JtYWw6IFwibm9ybWFsXCIgYXMgTW9kYWxTaXplLFxuICAgIExhcmdlOiBcImxhcmdlXCIgYXMgTW9kYWxTaXplXG59O1xuXG4vLyBTdG9yZXMgYSBiYXNpYyBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIG1vZGFsLlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IHtcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcbiAgICAvLyBWYWx1ZSB0byBkZW55IHdpdGggd2hlbiBjbG9zaW5nIHZpYSBgaXNDbG9zYWJsZWAuXG4gICAgcHVibGljIGNsb3NlUmVzdWx0OlY7XG5cbiAgICAvLyBEYXRhIHRvIHBhc3MgdG8gdGhlIG1vZGFsIGluc3RhbmNlIHdoZW4gb3BlbmVkLlxuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIHB1YmxpYyBzaXplOk1vZGFsU2l6ZTtcbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHB1YmxpYyBpc0Z1bGxTY3JlZW46Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgc2hvd3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmQuXG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwYWdlLlxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHB1YmxpYyBtdXN0U2Nyb2xsOmJvb2xlYW47XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICB0aGlzLnNpemUgPSBNb2RhbFNpemUuTm9ybWFsO1xuICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tdXN0U2Nyb2xsID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDUwMDtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYSBgVGVtcGxhdGVSZWZgLlxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIHRlbXBsYXRlOk1vZGFsVGVtcGxhdGU8VCwgVSwgVj47XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cbn1cblxuLy8gVXNlZCB3aGVuIGNyZWF0aW5nIGEgbW9kYWwgZnJvbSBhbiBleGlzdGluZyBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TW9kYWxDb25maWc8VCwgVSA9IHVuZGVmaW5lZCwgViA9IHVuZGVmaW5lZD4gZXh0ZW5kcyBNb2RhbENvbmZpZzxULCBVLCBWPiB7XG4gICAgcHVibGljIGNvbXBvbmVudDpUeXBlPGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6VHlwZTxhbnk+LCBjb250ZXh0OlQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQsIGlzQ2xvc2FibGU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCwgaXNDbG9zYWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwiLy8gU2hvcnRoYW5kIHRvIGF2b2lkIHdyaXRpbmcgYXJyb3cgdHlwZXMgZXZlcnl3aGVyZS5cbmV4cG9ydCB0eXBlIE1vZGFsUmVzdWx0PFQ+ID0gKHJlc3VsdDpUKSA9PiB2b2lkO1xuXG4vLyBVc2VkIHRvIHBhc3MgYWJpbGl0eSB0byBjb250cm9sIGEgbW9kYWwgdG8gYSBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250cm9sczxULCBVPiB7XG4gICAgY29uc3RydWN0b3IoYXBwcm92ZTpNb2RhbFJlc3VsdDxUPiwgZGVueTpNb2RhbFJlc3VsdDxVPikge1xuICAgICAgICB0aGlzLmFwcHJvdmUgPSBhcHByb3ZlO1xuICAgICAgICB0aGlzLmRlbnkgPSBkZW55O1xuICAgIH1cblxuICAgIC8vIFVzZSBtZXRob2QgaGVyZSByYXRoZXIgdGhhbiBhcnJvdyB2YXJpYWJsZXMgdG8gbWFrZSBpbnRlbGxpc2Vuc2Ugc2hvdyB0aGV5J3JlIG1ldGhvZHMuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlQpOnZvaWQge31cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6VSk6dm9pZCB7fVxufVxuXG4vLyBJbmplY3RlZCBpbnRvIGN1c3RvbSBtb2RhbCBjb21wb25lbnRzLCB0byBhbGxvdyBjb250cm9sIG9mIHRoZSBtb2RhbCwgYW5kIGFjY2VzcyB0byBhIGNvbnRleHQgb2JqZWN0LlxuZXhwb3J0IGNsYXNzIE1vZGFsPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb250cm9sczxVLCBWPiB7XG4gICAgcHVibGljIGNvbnRleHQ6VDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VSwgVj4sIGNvbnRleHQ6VCkge1xuICAgICAgICAvLyBJbnN0YW5jZXMgb2YgYE1vZGFsQ29udHJvbHNgIGFyZSBvbmx5IGNyZWF0ZWQgaW4gdGhlIGBTdWlNb2RhbGAgY29uc3RydWN0b3IsXG4gICAgICAgIC8vIHNvIHdlIHRha2UgYW4gaW5pdGlhbGlzZWQgaW5zdGFuY2UgcmF0aGVyIHRoYW4gcmVtYWtpbmcgb25lIGVhY2ggdGltZS5cbiAgICAgICAgc3VwZXIoY29udHJvbHMuYXBwcm92ZSwgY29udHJvbHMuZGVueSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xzIH0gZnJvbSBcIi4vbW9kYWwtY29udHJvbHNcIjtcblxuLy8gU2hvcnRoYW5kIGZvciBhIG1vZGFsIHRlbXBsYXRlLiBTZXRzIHVwIGFiaWxpdHkgdG8gd3JpdGU6IGA8bmctdGVtcGxhdGUgbGV0LWNvbnRleHQgbGV0LW1vZGFsPVwibW9kYWxcIj4uLi48L25nLXRlbXBsYXRlPmBcbi8vIFdlIHVzZSBhbiBhYnN0cmFjdCBjbGFzcyBhcyBNb2RhbFRlbXBsYXRlIHRlbmRzIHRvIGJlIHVzZWQgd2l0aGluIGRlY29yYXRlZCBwcm9wZXJ0aWVzLCB3aGljaCBtZWFucyBpdCBuZWVkcyB0byBleGlzdCFcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNb2RhbFRlbXBsYXRlPFQsIFUsIFY+IGV4dGVuZHMgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6VDsgbW9kYWw6TW9kYWxDb250cm9sczxVLCBWPiB9PiB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLFxuICAgIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIEFmdGVyVmlld0luaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFV0aWwsIElEeW5hbWljQ2xhc3NlcywgS2V5Q29kZSwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbHMsIE1vZGFsUmVzdWx0IH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBNb2RhbFNpemUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gUGFnZSBkaW1tZXIgZm9yIG1vZGFsIGJhY2tncm91bmQuIC0tPlxuPHN1aS1tb2RhbC1kaW1tZXIgW25nQ2xhc3NdPVwieyd0b3AgYWxpZ25lZCc6ICFpc0NlbnRlcmVkfVwiIFxuICAgICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImlzSW52ZXJ0ZWRcIlxuICAgICAgICAgICAgWyhpc0RpbW1lZCldPVwiZGltQmFja2dyb3VuZFwiXG4gICAgICAgICAgICBbdHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiPlxuXG4gICAgPCEtLSBNb2RhbCBjb21wb25lbnQsIHdpdGggdHJhbnNpdGlvbiBjb21wb25lbnQgYXR0YWNoZWQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInVpIG1vZGFsXCJcbiAgICAgICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidHJhbnNpdGlvbkNvbnRyb2xsZXI/LmlzVmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuZnVsbHNjcmVlbl09XCJpc0Z1bGxTY3JlZW5cIlxuICAgICAgICAgW2NsYXNzLmJhc2ljXT1cImlzQmFzaWNcIlxuICAgICAgICAgW2NsYXNzLnNjcm9sbGluZ109XCJtdXN0U2Nyb2xsXCJcbiAgICAgICAgIFtjbGFzcy5pbnZlcnRlZF09XCJpc0ludmVydGVkXCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cImR5bmFtaWNDbGFzc2VzXCJcbiAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgI21vZGFsPlxuXG4gICAgICAgIDwhLS0gQ29uZmlndXJhYmxlIGNsb3NlIGljb24gLS0+XG4gICAgICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNDbG9zYWJsZSAmJiBpc0Z1bGxTY3JlZW5cIiAoY2xpY2spPVwiY2xvc2UoKVwiPjwvaT5cbiAgICAgICAgPCEtLSA8bmctY29udGVudD4gc28gdGhhdCA8c3VpLW1vZGFsPiBjYW4gYmUgdXNlZCBhcyBhIG5vcm1hbCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS0gQFZpZXdDaGlsZCByZWZlcmVuY2Ugc28gd2UgY2FuIGluc2VydCBlbGVtZW50cyBiZXNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG4gICAgPC9kaXY+XG48L3N1aS1tb2RhbC1kaW1tZXI+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbDxULCBVPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KClcbiAgICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGFsIGNhbiBiZSBjbG9zZWQgd2l0aCBhIGNsb3NlIGJ1dHRvbiwgY2xpY2tpbmcgb3V0c2lkZSwgb3IgdGhlIGVzY2FwZSBrZXkuXG4gICAgcHVibGljIGlzQ2xvc2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpVO1xuXG4gICAgLy8gU2VwYXJhdGUgY2xhc3MgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBtZXRob2RzIHRvIHN1cHBvcnQgcGFzc2luZyBpbnRvIGNvbXBvbmVudHMuXG4gICAgcHVibGljIGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VCwgVT47XG5cbiAgICBwdWJsaWMgZ2V0IGFwcHJvdmUoKTpNb2RhbFJlc3VsdDxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmFwcHJvdmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZW55KCk6TW9kYWxSZXN1bHQ8VT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5kZW55O1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGFwcHJvdmVgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiYXBwcm92ZWRcIilcbiAgICBwdWJsaWMgb25BcHByb3ZlOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGNsb3NlcywgYWZ0ZXIgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBAT3V0cHV0KFwiZGVuaWVkXCIpXG4gICAgcHVibGljIG9uRGVueTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMuXG4gICAgQE91dHB1dChcImRpc21pc3NlZFwiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQFZpZXdDaGlsZChcIm1vZGFsXCIpXG4gICAgcHJpdmF0ZSBfbW9kYWxFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICAvLyBTaXplIHVzZWQgdG8gZGlzcGxheSB0aGUgbW9kYWwuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0NlbnRlcmVkOmJvb2xlYW47XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLlxuICAgIHByaXZhdGUgX2lzRnVsbFNjcmVlbjpib29sZWFuO1xuXG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Z1bGxTY3JlZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnVsbFNjcmVlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRnVsbFNjcmVlbihmdWxsU2NyZWVuOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGdWxsU2NyZWVuID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGZ1bGxTY3JlZW4pO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBoYXMgYmFzaWMgc3R5bGVzIGFwcGxpZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgY3VycmVudGx5IGlzIGRpc3BsYXlpbmcgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdFNjcm9sbDpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBtb2RhbCBzaG91bGQgYWx3YXlzIGRpc3BsYXkgYSBzY3JvbGxiYXIuXG4gICAgcHJpdmF0ZSBfbXVzdEFsd2F5c1Njcm9sbDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG11c3RTY3JvbGwoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c3RTY3JvbGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtdXN0U2Nyb2xsKG11c3RTY3JvbGw6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgLy8gJ0NhY2hlJyB2YWx1ZSBpbiBfbXVzdEFsd2F5c1Njcm9sbCBzbyB0aGF0IGlmIGB0cnVlYCwgX211c3RTY3JvbGwgaXNuJ3QgZXZlciBhdXRvLXVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX211c3RBbHdheXNTY3JvbGwgPSBtdXN0U2Nyb2xsO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHByaXZhdGUgX2lzSW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0ludmVydGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ludmVydGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNJbnZlcnRlZChpbnZlcnRlZDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSW52ZXJ0ZWQgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW52ZXJ0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gZGlzcGxheSBtb2RhbCB3aXRoLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgLy8gRHVyYXRpb24gb2YgdGhlIG1vZGFsICYgZGltbWVyIHRyYW5zaXRpb25zLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgYmFja3JvdW5kIGRpbW1lciBpcyBhY3RpdmUuXG4gICAgcHVibGljIGRpbUJhY2tncm91bmQ6Ym9vbGVhbjtcbiAgICAvLyBUcnVlIGFmdGVyIGBhcHByb3ZlYCBvciBgZGVueWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgIHByaXZhdGUgX2lzQ2xvc2luZzpib29sZWFuO1xuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICAvLyBQYXJlbnQgZWxlbWVudCBvZiBtb2RhbCBiZWZvcmUgcmVsb2NhdGlvbiB0byBkb2N1bWVudCBib2R5LlxuICAgIHByaXZhdGUgX29yaWdpbmFsQ29udGFpbmVyPzpFbGVtZW50O1xuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCBjb25maWd1cmF0aW9uIGZyb20gYE1vZGFsQ29uZmlnYCAodG8gYXZvaWQgd3JpdGluZyBkZWZhdWx0cyB0d2ljZSkuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBNb2RhbENvbmZpZzx1bmRlZmluZWQsIFQsIFU+KCk7XG4gICAgICAgIHRoaXMubG9hZENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIC8vIEV2ZW50IGVtaXR0ZXJzIGZvciBlYWNoIG9mIHRoZSBwb3NzaWJsZSBtb2RhbCBvdXRjb21lcy5cbiAgICAgICAgdGhpcy5vbkFwcHJvdmUgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gICAgICAgIHRoaXMub25EZW55ID0gbmV3IEV2ZW50RW1pdHRlcjxVPigpO1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIGNvbnRyb2xzIHdpdGggYWN0aW9ucyBmb3IgdGhlIGBhcHByb3ZlYCBhbmQgYGRlbnlgIGNhc2VzLlxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE1vZGFsQ29udHJvbHM8VCwgVT4oXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25BcHByb3ZlLmVtaXQocmVzKSksXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5kaXNtaXNzKCgpID0+IHRoaXMub25EZW55LmVtaXQocmVzKSkpO1xuXG4gICAgICAgIC8vIEludGVybmFsIHZhcmlhYmxlIGluaXRpYWxpc2F0aW9uLlxuICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSB2aXNpYmxlLlxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbikpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGltQmFja2dyb3VuZCA9IHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gTW92ZSB0aGUgbW9kYWwgdG8gdGhlIGRvY3VtZW50IGJvZHkgdG8gZW5zdXJlIGNvcnJlY3Qgc2Nyb2xsaW5nLlxuICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSEuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSAjdGVtcGxhdGVTaWJsaW5nIGVsZW1lbnQgZnJvbSB0aGUgRE9NIHRvIGZpeCBib3R0b20gYm9yZGVyIHN0eWxlcy5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gdGhpcy50ZW1wbGF0ZVNpYmxpbmcuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIGlmICh0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsKCkpO1xuXG4gICAgICAgIC8vIEZvY3VzIGFueSBlbGVtZW50IHdpdGggW2F1dG9mb2N1c10gYXR0cmlidXRlLlxuICAgICAgICBjb25zdCBhdXRvRm9jdXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBtb2RhbCB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICBwdWJsaWMgbG9hZENvbmZpZzxWPihjb25maWc6TW9kYWxDb25maWc8ViwgVCwgVT4pOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2xvc2FibGUgPSBjb25maWcuaXNDbG9zYWJsZTtcbiAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGNvbmZpZy5jbG9zZVJlc3VsdDtcblxuICAgICAgICB0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBjb25maWcuaXNGdWxsU2NyZWVuO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBjb25maWcuaXNCYXNpYztcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gY29uZmlnLmlzSW52ZXJ0ZWQ7XG4gICAgICAgIHRoaXMuaXNDZW50ZXJlZCA9IGNvbmZpZy5pc0NlbnRlcmVkO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGNvbmZpZy5tdXN0U2Nyb2xsO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IGNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGEgdHJhbnNpdGlvbiwgZmlyaW5nIHRoZSBjYWxsYmFjayBhZnRlciB0aGUgbW9kYWwgaGFzIGZpbmlzaGVkIHRyYW5zaXRpb25pbmcuXG4gICAgcHJpdmF0ZSBkaXNtaXNzKGNhbGxiYWNrOigpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCBjdXJyZW50bHkgY2xvc2luZyxcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGhlIG1vZGFsIHRvIGJlIGludmlzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuZGltQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkb25lLCBtb3ZlIHRoZSBtb2RhbCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiwgZW1pdCBhIGRpc21pc3MgZXZlbnQsIGFuZCBmaXJlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29yaWdpbmFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbG9zZXMgdGhlIG1vZGFsIHdpdGggYSAnZGVueScgb3V0Y29tZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBkZWZhdWx0IHJlYXNvbi5cbiAgICBwdWJsaWMgY2xvc2UoKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zYWJsZSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFsbG93ZWQgdG8gY2xvc2UsIGZpcmUgdGhlIGRlbnkgcmVzdWx0IHdpdGggdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmRlbnkodGhpcy5jbG9zZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNpZGVzIHdoZXRoZXIgdGhlIG1vZGFsIG5lZWRzIHRvIHJlcG9zaXRpb24gdG8gYWxsb3cgc2Nyb2xsaW5nLlxuICAgIHByaXZhdGUgdXBkYXRlU2Nyb2xsKCk6dm9pZCB7XG5cbiAgICAgICAgLy8gX211c3RBbHdheXNTY3JvbGwgd29ya3MgYnkgc3RvcHBpbmcgX211c3RTY3JvbGwgZnJvbSBiZWluZyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQsIHNvIGl0IHN0YXlzIGB0cnVlYC5cbiAgICAgICAgaWYgKCF0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsICYmIHRoaXMuX21vZGFsRWxlbWVudCkge1xuXG4gICAgICAgICAgICAvLyBTZW1hbnRpYyBVSSBtb2RhbCBtYXJnaW4gYW5kIGRpbW1lciBwYWRkaW5nIGFyZSAxcmVtLCB3aGljaCBpcyByZWxhdGl2ZSB0byB0aGUgZ2xvYmFsIGZvbnQgc2l6ZSwgc28gZm9yIGNvbXBhdGliaWxpdHk6XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9tb2RhbEVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBUaGUgbW9kYWwgbXVzdCBzY3JvbGwgaWYgdGhlIHdpbmRvdyBoZWlnaHQgaXMgc21hbGxlciB0aGFuIHRoZSBtb2RhbCBoZWlnaHQgKyBib3RoIG1hcmdpbnMuXG4gICAgICAgICAgICB0aGlzLl9tdXN0U2Nyb2xsID0gd2luZG93LmlubmVySGVpZ2h0IDwgZWxlbWVudC5jbGllbnRIZWlnaHQgKyBtYXJnaW4gKiAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIG1vZGFsIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRG9jdW1lbnQgbGlzdGVuZXIgaXMgZmluZSBoZXJlIGJlY2F1c2Ugbm9ib2R5IHdpbGwgaGF2ZSBlbm91Z2ggbW9kYWxzIG9wZW4uXG4gICAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmtleXVwXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Eb2N1bWVudEtleVVwKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRXNjYXBlKSB7XG4gICAgICAgICAgICAvLyBDbG9zZSBhdXRvbWF0aWNhbGx5IGNvdmVycyBjYXNlIG9mIGAhaXNDbG9zYWJsZWAsIHNvIGNoZWNrIG5vdCBuZWVkZWQuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwid2luZG93OnJlc2l6ZVwiKVxuICAgIHB1YmxpYyBvbkRvY3VtZW50UmVzaXplKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXIgfSBmcm9tIFwiLi4vLi4vZGltbWVyL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbC1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3QudWkuZGltbWVyOm5vdCguaGlkZGVuKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbERpbW1lciBleHRlbmRzIFN1aURpbW1lciB7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdlXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubW9kYWxzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcsIFRlbXBsYXRlTW9kYWxDb25maWcsIENvbXBvbmVudE1vZGFsQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBBY3RpdmVNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL2FjdGl2ZS1tb2RhbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHt9XG5cbiAgICBwdWJsaWMgb3BlbjxULCBVLCBWPihtb2RhbDpNb2RhbENvbmZpZzxULCBVLCBWPik6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbW9kYWwgY29tcG9uZW50IHRvIGJlIHNob3duLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudDxTdWlNb2RhbDxVLCBWPj4oU3VpTW9kYWwpO1xuXG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgdGhlIGNyZWF0ZWQgbW9kYWwgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAgICBjb25zdCBtb2RhbENvbXBvbmVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAobW9kYWwgaW5zdGFuY2VvZiBUZW1wbGF0ZU1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIHRlbXBsYXRlIGludG8gdGhlIHZpZXcuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcobW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nLCBtb2RhbC50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgIC8vIGBsZXQtY29udGV4dGBcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IG1vZGFsLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgLy8gYGxldC1tb2RhbD1cIm1vZGFsXCJgXG4gICAgICAgICAgICAgICAgbW9kYWw6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kYWwgaW5zdGFuY2VvZiBDb21wb25lbnRNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGNvbXBvbmVudCB0byBiZSB1c2VkIGFzIHRoZSBtb2RhbCBjb250ZW50LFxuICAgICAgICAgICAgLy8gaW5qZWN0aW5nIGFuIGluc3RhbmNlIG9mIGBNb2RhbGAgdG8gYmUgdXNlZCBpbiB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgY29uc3QgY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IG5ldyBNb2RhbChtb2RhbENvbXBvbmVudC5jb250cm9scywgbW9kYWwuY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgbmV3IGNvbXBvbmVudCBpbnRvIHRoZSBjb250ZW50IG9mIHRoZSBtb2RhbC5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KGNvbnRlbnRDb21wb25lbnRSZWYsIG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZyk7XG5cbiAgICAgICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYWNjZXNzIHRvIHRoZSBjb250ZW50IGNvbXBvbmVudCdzIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50Q29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gTW92ZSBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0byB0aGUgbWFpbiBtb2RhbCBlbGVtZW50LlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkb25lIHNvIHRoYXQgQ1NTIGNsYXNzZXMgYXBwbHkgY29ycmVjdGx5LiBJdCBkb2VzIHN0b3AgYW55IGN1c3RvbSBzdHlsZXMgZnJvbSB3b3JraW5nIGhvd2V2ZXIsXG4gICAgICAgICAgICAvLyBzbyBvdGhlciB3YXlzIG1heSBoYXZlIHRvIGJlIGludmVzdGlnYXRlZC5cbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50RWxlbWVudC5oYXNDaGlsZE5vZGVzKCkgJiYgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGdlbmVyYXRlZCBjb21wb25lbnQncyAnZW1wdHkgc2hlbGwnIGZyb20gdGhlIERPTS5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbURvY3VtZW50KGNvbnRlbnRDb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIHRoZSBuZXcgbW9kYWwgY29tcG9uZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgLy8gVGhlIGNvbXBvbmVudCB3aWxsIG1vdmUgaXRzZWxmIHRvIHRoZSBkb2N1bWVudCBib2R5IGZvciBjb3JyZWN0bCBzdHlsaW5nLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24oY29tcG9uZW50UmVmKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBnZW5lcmF0ZWQgbW9kYWwgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICBtb2RhbENvbXBvbmVudC5sb2FkQ29uZmlnKG1vZGFsKTtcblxuICAgICAgICAvLyBSZXR1cm4gYW4gaW5zdGFuY2Ugb2YgYW4gYEFjdGl2ZU1vZGFsYCwgc28gdGhlIHVzZXIgY2FuIGNvbnRyb2wgdGhlIG5ldyBtb2RhbC5cbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVNb2RhbChtb2RhbCwgY29tcG9uZW50UmVmKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXJNb2R1bGUgfSBmcm9tIFwiLi4vZGltbWVyL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsRGltbWVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaW1tZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpRGltbWVyTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpTW9kYWwsXG4gICAgICAgIFN1aU1vZGFsRGltbWVyXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VpTW9kYWxTZXJ2aWNlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU3VpTW9kYWxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wcm9ncmVzc1wiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmFyXCIgW3N0eWxlLndpZHRoLiVdPVwicGVyY2VudGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiICpuZ0lmPVwic2hvd1Byb2dyZXNzXCI+e3sgcGVyY2VudGFnZSB9fSU8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxhYmVsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi5iYXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVByb2dyZXNzIHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnByb2dyZXNzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHByaXZhdGUgX3ZhbHVlOm51bWJlcjtcbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcbiAgICBwcml2YXRlIF9wcmVjaXNpb246bnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfb3ZlcnJpZGVTdWNjZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhdXRvU3VjY2Vzczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92YWx1ZSA9IGNvbnZlcnRlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4aW11bSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhpbXVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4aW11bSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgLy8gQ29udmVydCB2YWx1ZSBmcm9tIHN0cmluZyB0byBudW1iZXIgd2hlcmUgbmVjZXNzYXJ5LlxuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSArdmFsdWU7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihjb252ZXJ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXhpbXVtID0gY29udmVydGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwcmVjaXNpb24oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlY2lzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlY2lzaW9uKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KGNvbnZlcnRlZCwgMCksIDIwKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zdWNjZXNzXCIpXG4gICAgcHVibGljIGdldCByZWFjaGVkTWF4aW11bSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGVTdWNjZXNzIHx8ICgodGhpcy52YWx1ZSA+PSB0aGlzLm1heGltdW0pICYmIHRoaXMuYXV0b1N1Y2Nlc3MpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIuZGF0YS1wZXJjZW50XCIpXG4gICAgcHVibGljIGdldCBwZXJjZW50YWdlKCk6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgYm91bmRlZFZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy52YWx1ZSwgMCksIHRoaXMubWF4aW11bSk7XG5cbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChib3VuZGVkVmFsdWUgLyB0aGlzLm1heGltdW0pICogMTAwO1xuXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlLnRvRml4ZWQodGhpcy5wcmVjaXNpb24pO1xuICAgIH1cblxuICAgIEBJbnB1dChcImNsYXNzXCIpXG4gICAgcHVibGljIHNldCBjbGFzc1ZhbHVlKGNsYXNzZXM6c3RyaW5nKSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiYXR0YWNoZWRcIikgfHwgY2xhc3Nlcy5pbmNsdWRlcyhcInRpbnlcIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJzdWNjZXNzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLm1heGltdW0gPSAxMDA7XG4gICAgICAgIHRoaXMucHJlY2lzaW9uID0gMDtcblxuICAgICAgICB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVByb2dyZXNzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9ncmVzc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUHJvZ3Jlc3NcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpUHJvZ3Jlc3NcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVByb2dyZXNzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYXRpbmdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGkgY2xhc3M9XCJpY29uXCJcbiAgICpuZ0Zvcj1cImxldCBpY29uIG9mIGljb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgIChtb3VzZW92ZXIpPVwib25Nb3VzZW92ZXIoaSlcIlxuICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgW2NsYXNzLnNlbGVjdGVkXT1cImhvdmVyZWRJbmRleCA+PSBpICYmICFpc1JlYWRvbmx5XCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwidmFsdWUgPiBpXCI+XG48L2k+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LnJlYWQtb25seSAuaWNvbiB7XG4gICAgY3Vyc29yOiBhdXRvXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmcgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8bnVtYmVyPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYXRpbmdcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHZhbHVlOm51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heGltdW0gPSArdmFsdWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVhZC1vbmx5XCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNSZWFkb25seTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpY29ucygpOnVuZGVmaW5lZFtdIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1saXRlcmFsXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkodGhpcy5tYXhpbXVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG92ZXJlZEluZGV4Om51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5tYXhpbXVtID0gNTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaSArIDE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3VzZW92ZXIoaTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLmhvdmVyZWRJbmRleCA9IGk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlb3V0XCIpXG4gICAgcHVibGljIG9uTW91c2VvdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgaG9zdDogeyBcIih2YWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8bnVtYmVyLCBTdWlSYXRpbmc+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVJhdGluZykge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpUmF0aW5nLCBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yYXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlSYXRpbmcsXG4gICAgICAgIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3JcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpUmF0aW5nLFxuICAgICAgICBTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVJlc3VsdENvbnRleHQgfSBmcm9tIFwiLi9zZWFyY2hcIjtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM0NDkuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoLXJlc3VsdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUsIHF1ZXJ5KVwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoUmVzdWx0PFQ+IHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVzdWx0XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBxdWVyeTpzdHJpbmc7XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBsYWJlbCBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF90ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhpcyBmdW5jdGlvbiByZXR1cm4gYW4gZW1wdHkgc3RyaW5nLCBmb3IgdGhlIGJyaWVmIG1vbWVudCB3aGVuIGl0IGlzbid0IGRpc3BsYXlpbmcgdGhlIGNvcnJlY3QgbGFiZWwuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVyID0gdmFsdWUgPT4gXCJcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTG9va3VwRm4sIExvb2t1cEZuUmVzdWx0LCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5pbnRlcmZhY2UgSUNhY2hlZEFycmF5PFQ+IHsgW3F1ZXJ5OnN0cmluZ106VFtdOyB9XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlPFQsIFU+IHtcbiAgICAvLyBTdG9yZXMgdGhlIGF2YWlsYWJsZSBvcHRpb25zLlxuICAgIHByaXZhdGUgX29wdGlvbnM6VFtdO1xuICAgIC8vIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygb3B0aW9ucy4gTXVzdCBiZSBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2UuXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0xvb2t1cD86TG9va3VwRm48VCwgVT47XG4gICAgLy8gRmllbGQgdGhhdCBvcHRpb25zIGFyZSBzZWFyY2hlZCAmIGRpc3BsYXllZCBvbi5cbiAgICBwcml2YXRlIF9vcHRpb25zRmllbGQ/OnN0cmluZztcbiAgICAvLyBGaWx0ZXJzIGEgbGlzdCBvZiBvcHRpb25zLlxuICAgIHB1YmxpYyBvcHRpb25zRmlsdGVyOkZpbHRlckZuPFQ+O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zKG9wdGlvbnM6VFtdKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IFtdO1xuICAgICAgICAvLyBXZSBjYW5ub3QgdXNlIGJvdGggbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gUmVzZXQgZW50aXJlIHNlcnZpY2Ugd2l0aCBuZXcgb3B0aW9ucy5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0xvb2t1cCgpOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNMb29rdXA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQsIFU+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNMb29rdXAgPSBsb29rdXBGbjtcbiAgICAgICAgLy8gQXMgYmVmb3JlLCBjYW5ub3QgdXNlIGxvY2FsICYgcmVtb3RlIG9wdGlvbnMgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzSXRlbUxvb2t1cCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLm9wdGlvbnNMb29rdXAgJiYgdGhpcy5vcHRpb25zTG9va3VwLmxlbmd0aCA9PT0gMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNGaWVsZCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcHRpb25zRmllbGQoZmllbGQ6c3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc2V0IG90aGVyd2lzZSB3ZSB3b3VsZCBub3cgYmUgc2hvd2luZyBpbnZhbGlkIHNlYXJjaCByZXN1bHRzLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeS5cbiAgICBwcml2YXRlIF9yZXN1bHRzOlRbXTtcbiAgICAvLyBDYWNoZSBvZiByZXN1bHRzLCBpbmRleGVkIGJ5IHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHNDYWNoZTpJQ2FjaGVkQXJyYXk8VD47XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3VsdHMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeTpzdHJpbmc7XG4gICAgLy8gQWxsb3dzIHRoZSBlbXB0eSBxdWVyeSB0byBwcm9kdWNlIHJlc3VsdHMuXG4gICAgcHVibGljIGFsbG93RW1wdHlRdWVyeTpib29sZWFuO1xuICAgIC8vIEhvdyBsb25nIHRvIGRlbGF5IHRoZSBzZWFyY2ggZm9yIHdoZW4gdXNpbmcgdXBkYXRlUXVlcnlEZWxheWVkLiBTdG9yZWQgaW4gbXMuXG4gICAgcHVibGljIHNlYXJjaERlbGF5Om51bWJlcjtcbiAgICAvLyBTdG9yZXMgdGhlIHNlYXJjaCB0aW1lb3V0IGhhbmRsZSBzbyB3ZSBjYW4gY2FuY2VsIGl0LlxuICAgIHByaXZhdGUgX3NlYXJjaERlbGF5VGltZW91dDpudW1iZXI7XG4gICAgLy8gUHJvdmlkZXMgJ2xvYWRpbmcnIGZ1bmN0aW9uYWxpdHkuXG4gICAgcHJpdmF0ZSBfaXNTZWFyY2hpbmc6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgcXVlcnkoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uc0ZpbHRlciA9IChvcywgcSkgPT4ge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcXVlcnkgc3RyaW5nIHRvIGEgUmVnRXhwLlxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnRvUmVnZXgodGhpcy5fcXVlcnkpO1xuXG4gICAgICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcmVzdWx0cyBpZiB0aGUgcXVlcnkgd2FzIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgYXZvaWRzIHRoZSByZXN1bHRzIHN1ZGRlbmx5IGJlY29taW5nIGVtcHR5IGlmIGFuIGludmFsaWQgcmVnZXggc3RyaW5nIGlzIGlucHV0dGVkLlxuICAgICAgICAgICAgICAgIHJldHVybiBvc1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgb24gdGhlIG9wdGlvbnMgd2l0aCBhIHN0cmluZyBtYXRjaCBvbiB0aGUgZmllbGQgd2UgYXJlIHRlc3RpbmcuXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobyA9PiBVdGlsLk9iamVjdC5yZWFkVmFsdWU8VCwgc3RyaW5nPihvLCB0aGlzLl9vcHRpb25zRmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGNoKHJlZ2V4KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IHVwZGF0ZSBzaW5jZSBpdCB3YXNuJ3QgYSB2YWxpZCByZWdleC5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIHJlc2V0LlxuICAgICAgICB0aGlzLmFsbG93RW1wdHlRdWVyeSA9IGFsbG93RW1wdHlRdWVyeTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBxdWVyeSBhZnRlciB0aGUgc3BlY2lmaWVkIHNlYXJjaCBkZWxheS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaERlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkocXVlcnksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERlbGF5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgY3VycmVudCBzZWFyY2ggcXVlcnkuXG4gICAgcHVibGljIHVwZGF0ZVF1ZXJ5KHF1ZXJ5OnN0cmluZywgY2FsbGJhY2s6KGVycj86RXJyb3IpID0+IHZvaWQgPSAoKSA9PiB7fSk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5ID09PSBcIlwiICYmICF0aGlzLmFsbG93RW1wdHlRdWVyeSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHRoZSBuZXcgcXVlcnkgaXMgZW1wdHkgKGFuZCB3ZSBkb24ndCBhbGxvdyBlbXB0eSBxdWVyaWVzKS5cbiAgICAgICAgICAgIC8vIERvbid0IHJlc2V0IHNvIHRoYXQgd2hlbiBhbmltYXRpbmcgY2xvc2VkIHdlIGRvbid0IGdldCBhIGp1ZGRlci5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VsdHNDYWNoZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLl9xdWVyeSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBxdWVyeSBpcyBhbHJlYWR5IGNhY2hlZCwgbWFrZSB1c2Ugb2YgaXQuXG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRzID0gdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XTtcblxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc0xvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25zIGxvb2t1cCB3aXRob3V0IGEgdGhpcyBjb250ZXh0LlxuICAgICAgICAgICAgY29uc3QgcXVlcnlMb29rdXAgPSB0aGlzLl9vcHRpb25zTG9va3VwLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9xdWVyeSkgYXMgTG9va3VwRm5SZXN1bHQ8VFtdPjtcblxuICAgICAgICAgICAgcXVlcnlMb29rdXBcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5zZXQgJ2xvYWRpbmcnIHN0YXRlLCBhbmQgdGhyb3cgdGhlIHJldHVybmVkIGVycm9yIHdpdGhvdXQgdXBkYXRpbmcgdGhlIHJlc3VsdHMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5vcHRpb25zRmlsdGVyLmNhbGwodW5kZWZpbmVkLCB0aGlzLl9vcHRpb25zLCB0aGlzLl9xdWVyeSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzICYgY2FjaGVzIHRoZSBuZXcgc2V0IG9mIHJlc3VsdHMuXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXN1bHRzKHJlc3VsdHM6VFtdKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlW3RoaXMuX3F1ZXJ5XSA9IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSByZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVKTpMb29rdXBGblJlc3VsdDxUPjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xuICAgIHB1YmxpYyBpbml0aWFsTG9va3VwKGluaXRpYWw6VVtdKTpMb29rdXBGblJlc3VsdDxUW10+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVIHwgVVtdKTpMb29rdXBGblJlc3VsdDxUPiB8IExvb2t1cEZuUmVzdWx0PFRbXT4ge1xuICAgICAgICBpZiAoaW5pdGlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX29wdGlvbnNMb29rdXAgYXMgTG9va3VwRm48VCwgVVtdPikodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCBhcyBMb29rdXBGbjxULCBVPikodW5kZWZpbmVkLCBpbml0aWFsKSBhcyBMb29rdXBGblJlc3VsdDxUPjtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyBhIHF1ZXJ5IHN0cmluZyB0byByZWdleCB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgIHByaXZhdGUgdG9SZWdleChxdWVyeTpzdHJpbmcpOlJlZ0V4cCB8IHN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChxdWVyeSwgXCJpXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZXMgSFRNTCBmb3IgaGlnaGxpZ2h0ZWQgbWF0Y2ggdGV4dC5cbiAgICBwdWJsaWMgaGlnaGxpZ2h0TWF0Y2hlcyh0ZXh0OnN0cmluZywgcXVlcnk6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleChxdWVyeSk7XG4gICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgbWF0Y2ggPT4gYDxiPiR7bWF0Y2h9PC9iPmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlc2V0cyB0aGUgc2VhcmNoIGJhY2sgdG8gYSBwcmlzdGluZSBzdGF0ZS5cbiAgICBwcml2YXRlIHJlc2V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NhY2hlID0ge307XG4gICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoXCJcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIElucHV0LCBBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgSVRlbXBsYXRlUmVmQ29udGV4dCwgSUZvY3VzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlYXJjaExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vaGVscGVycy9sb29rdXAtZm5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0Q29udGV4dDxUPiBleHRlbmRzIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4ge1xuICAgIHF1ZXJ5OnN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlYXJjaFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgaW5wdXRcIiBbY2xhc3MuaWNvbl09XCJoYXNJY29uXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cInByb21wdFwiIHR5cGU9XCJ0ZXh0XCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XG4gICAgPGkgKm5nSWY9XCJoYXNJY29uXCIgY2xhc3M9XCJzZWFyY2ggaWNvblwiPjwvaT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc3VsdHNcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBtZW51U2VsZWN0ZWRJdGVtQ2xhc3M9XCJhY3RpdmVcIj5cblxuICAgIDxzdWktc2VhcmNoLXJlc3VsdCAqbmdGb3I9XCJsZXQgciBvZiByZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cInJlc3VsdEZvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJyZXN1bHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QocilcIj48L3N1aS1zZWFyY2gtcmVzdWx0PlxuXG4gICAgPGRpdiAqbmdJZj1cInJlc3VsdHMubGVuZ3RoID09IDBcIiBjbGFzcz1cIm1lc3NhZ2UgZW1wdHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHMubWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEVuc3VyZXMgcmVzdWx0cyBkaXYgaGFzIG1hcmdpbi4gKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4vKiBGaXhlcyBwb3NpdGlvbmluZyB3aGVuIHJlc3VsdHMgYXJlIHB1c2hlZCBhYm92ZSB0aGUgc2VhcmNoLiAqL1xuLnJlc3VsdHMge1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2g8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFQ+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIC8vIFNldHMgd2hldGhlciB0aGUgc2VhcmNoIGVsZW1lbnQgaGFzIGEgdmlzaWJsZSBzZWFyY2ggaWNvbi5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNJY29uOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICAvLyBHZXRzICYgc2V0cyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0ZXh0IGlucHV0LlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VhcmNoTG9jYWxlVmFsdWVzO1xuXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWFyY2hMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VhcmNoTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWFyY2hcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBhIGRlbGF5ZWQgc2VhcmNoLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXN1bHRzIG9wZW4gc3RhdGUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBxdWVyeSBoYXMgYmVlbiBlbnRlcmVkLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3VsdEZvcm1hdHRlcj86KHI6VCwgcTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0Rm9ybWF0dGVyKCk6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRGb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiByID0+IHRoaXMucmVhZFZhbHVlKHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChyLCBxKSA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLnJlYWRWYWx1ZShyKSwgcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVzdWx0Rm9ybWF0dGVyKGZvcm1hdHRlcjoocmVzdWx0OlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdEZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXN1bHRUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXRhaW5TZWxlY3RlZFJlc3VsdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFJlc3VsdHM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzLnNsaWNlKDAsIHRoaXMubWF4UmVzdWx0cyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzdWx0LlxuICAgIHB1YmxpYyBzZWxlY3RlZFJlc3VsdD86VDtcblxuICAgIC8vIEVtaXRzIHdoZW5ldmVyIGEgbmV3IHJlc3VsdCBpcyBzZWxlY3RlZC5cbiAgICBAT3V0cHV0KFwicmVzdWx0U2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25SZXN1bHRTZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHJlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBUPigpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnJldGFpblNlbGVjdGVkUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDIwMDtcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzID0gNztcblxuICAgICAgICB0aGlzLm9uUmVzdWx0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWFyY2g7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0cyBhIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0KHJlc3VsdDpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkLmVtaXQocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeSh0aGlzLnJlYWRWYWx1ZShyZXN1bHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgb3BlbiBvbiBjbGljayB3aGVuIHRoZXJlIGlzIGEgcXVlcnkgZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVhZHMgdGhlIHNwZWNpZmllZCBmaWVsZCBmcm9tIGFuIGl0ZW0uXG4gICAgcHVibGljIHJlYWRWYWx1ZShvYmplY3Q6VCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iamVjdCwgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTW9kdWxlIH0gZnJvbSBcIi4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlYXJjaCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlTZWFyY2gsXG4gICAgICAgIFN1aVNlYXJjaFJlc3VsdFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTZWFyY2hcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlYXJjaE1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdC1vcHRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiBbaW5uZXJIVE1MXT1cInJlbmRlcmVkVGV4dFwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0T3B0aW9uPFQ+IGV4dGVuZHMgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCwgd2hldGhlciBieSBjbGlja2luZyBvciBieSBrZXlib2FyZC5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyByZW5kZXJlZFRleHQ/OnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgZm9ybWF0dGVyKGZvcm1hdHRlcjoob2JqOlQpID0+IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudXNlc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IGZvcm1hdHRlcih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1c2VzVGVtcGxhdGU6Ym9vbGVhbjtcblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAvLyBXZSBpbmhlcml0IFN1aURyb3Bkb3duTWVudUl0ZW0gdG8gYXV0b21hdGljYWxseSBnYWluIGFsbCBrZXlib2FyZCBuYXZpZ2F0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGRvbmUgdmlhIGFkZGluZyB0aGUgLml0ZW0gY2xhc3MgYmVjYXVzZSBpdCBpc24ndCBzdXBwb3J0ZWQgYnkgQW5ndWxhci5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQgd2UgbWFrZSB0aGUgZGVmYXVsdCB0ZXh0IGFuIGVtcHR5IGxhYmVsLCBmb3IgdGhlIGJyaWVmIG1vbWVudCB3aGVuIGl0IGlzbid0IGRpc3BsYXlpbmcgdGhlIGNvcnJlY3Qgb25lLlxuICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy51c2VzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vblNlbGVjdGVkLmVtaXQodGhpcy52YWx1ZSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbc3VpU2VsZWN0U2VhcmNoXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFNlYXJjaCB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIuYXV0b2NvbXBsZXRlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGF1dG9Db21wbGV0ZTpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidmFsdWVcIiwgcXVlcnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5VXBkYXRlZDpFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbiAgICBwdWJsaWMgb25RdWVyeUtleURvd246RXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgICAgICB0aGlzLm9uUXVlcnlLZXlEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlID0gXCJvZmZcIjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcbiAgICBwdWJsaWMgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5VXBkYXRlZC5lbWl0KHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUXVlcnlLZXlEb3duLmVtaXQoZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzKCk6dm9pZCB7XG4gICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IHRvIHN1cHBvcnQgaW4gbWVudSBzZWFyY2guXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LFxuICAgIEFmdGVyQ29udGVudEluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIFN1aURyb3Bkb3duTWVudSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSwgTG9va3VwRm4sIEZpbHRlckZuIH0gZnJvbSBcIi4uLy4uL3NlYXJjaC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVXRpbCwgSVRlbXBsYXRlUmVmQ29udGV4dCwgSGFuZGxlZEV2ZW50LCBLZXlDb2RlLCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElTZWxlY3RMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvblwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0U2VhcmNoIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25Db250ZXh0PFQ+IGV4dGVuZHMgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7XG4gICAgcXVlcnk/OnN0cmluZztcbn1cblxuLy8gV2UgdXNlIGdlbmVyaWMgdHlwZSBUIHRvIHNwZWNpZnkgdGhlIHR5cGUgb2YgdGhlIG9wdGlvbnMgd2UgYXJlIHdvcmtpbmcgd2l0aCxcbi8vIGFuZCBVIHRvIHNwZWNpZnkgdGhlIHR5cGUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBvcHRpb24gdXNlZCBhcyB0aGUgdmFsdWUuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHVibGljIHNlYXJjaFNlcnZpY2U6U2VhcmNoU2VydmljZTxULCBVPjtcblxuICAgIEBWaWV3Q2hpbGQoU3VpRHJvcGRvd25NZW51KVxuICAgIHByb3RlY3RlZCBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBvZiB0aGUgcmVuZGVyZWQgc2VsZWN0IG9wdGlvbnMuIChSZW5kZXJlZCBieSB0aGUgdXNlciB1c2luZyAqbmdGb3IpLlxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpU2VsZWN0T3B0aW9uLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlZE9wdGlvbnM6UXVlcnlMaXN0PFN1aVNlbGVjdE9wdGlvbjxUPj47XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBvZiB0aGUgc3Vic2NyaXB0aW9ucyB0byB0aGUgc2VsZWN0ZWQgZXZlbnRzIG9uIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgIHByaXZhdGUgX3JlbmRlcmVkU3Vic2NyaXB0aW9uczpTdWJzY3JpcHRpb25bXTtcblxuICAgIC8vIFNldHMgdGhlIFNlbWFudGljIFVJIGNsYXNzZXMgb24gdGhlIGhvc3QgZWxlbWVudC5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRyb3Bkb3duXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lbnUuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzU2VhcmNoYWJsZTpib29sZWFuO1xuXG4gICAgcHVibGljIGlzU2VhcmNoRXh0ZXJuYWw6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNlYXJjaFwiKVxuICAgIHB1YmxpYyBnZXQgaGFzU2VhcmNoQ2xhc3MoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWFyY2hhYmxlICYmICF0aGlzLmlzU2VhcmNoRXh0ZXJuYWw7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNTZWFyY2hpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFN1aVNlbGVjdFNlYXJjaClcbiAgICBwcml2YXRlIF9pbnRlcm5hbFNlYXJjaD86U3VpU2VsZWN0U2VhcmNoO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTZWxlY3RTZWFyY2gpXG4gICAgcHJpdmF0ZSBfbWFudWFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBwdWJsaWMgZ2V0IHNlYXJjaElucHV0KCk6U3VpU2VsZWN0U2VhcmNoIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbnVhbFNlYXJjaCB8fCB0aGlzLl9pbnRlcm5hbFNlYXJjaDtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJpbmRleCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCkge1xuICAgICAgICAgICAgLy8gSWYgb3BlbiAmIGluIG1lbnUgc2VhcmNoLCByZW1vdmUgZnJvbSB0YWJpbmRleCAoYXMgaW5wdXQgYWx3YXlzIGF1dG9mb2N1c3NlcykuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VhcmNoQ2xhc3MpIHtcbiAgICAgICAgICAgIC8vIElmIHNlYXJjaCBpbnB1dCBlbmFibGVkLCB0YWIgZ29lcyB0byBpbnB1dC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UuaXNEaXNhYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWx0ZXIoZmlsdGVyOkZpbHRlckZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmlsdGVyID0gZmlsdGVyO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXA6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGxvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXAgPSBsb29rdXA7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIERlcHJlY2F0ZWRcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocXVlcnkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VXBkYXRlSG9vaygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHJlbmRlcmVkIHRleHQgYXMgcXVlcnkgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuZm9yRWFjaChybyA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsYWJlbEZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsYWJlbEZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsYWJlbEdldHRlcigpOihvYmo6VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBsYWJlbCBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4ob2JqLCB0aGlzLmxhYmVsRmllbGQpO1xuICAgICAgICAgICAgaWYgKGxhYmVsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWVGaWVsZDpzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlR2V0dGVyKCk6KG9iajpUKSA9PiBVIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBVPihvYmosIHRoaXMudmFsdWVGaWVsZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3B0aW9uVGVtcGxhdGU6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+O1xuXG4gICAgcHJpdmF0ZSBfb3B0aW9uRm9ybWF0dGVyPzoobzpULCBxPzpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlndXJlZEZvcm1hdHRlcigpOihvcHRpb246VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbkZvcm1hdHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5fb3B0aW9uRm9ybWF0dGVyIShvLCB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMucXVlcnkgOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLmxhYmVsR2V0dGVyKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5sYWJlbEdldHRlcihvKSwgdGhpcy5xdWVyeSB8fCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25Gb3JtYXR0ZXIoZm9ybWF0dGVyOigob3B0aW9uOlQsIHF1ZXJ5PzpzdHJpbmcpID0+IHN0cmluZykgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uRm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VsZWN0TG9jYWxlVmFsdWVzO1xuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VsZWN0TG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlbGVjdExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VsZWN0XCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGljb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJvdGVjdGVkIF9sb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIC8vIFdlIGRvIHdhbnQgYW4gZW1wdHkgcXVlcnkgdG8gcmV0dXJuIGFsbCByZXN1bHRzLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBVPih0cnVlKTtcblxuICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLmljb24gPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5kcm9wZG93blNlcnZpY2U7XG4gICAgICAgIC8vIFdlIG1hbnVhbGx5IHNwZWNpZnkgdGhlIG1lbnUgaXRlbXMgdG8gdGhlIG1lbnUgYmVjYXVzZSB0aGUgQENvbnRlbnRDaGlsZHJlbiBkb2Vzbid0IHBpY2sgdXAgb3VyIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGl0ZW1zLlxuICAgICAgICB0aGlzLl9tZW51Lml0ZW1zID0gdGhpcy5fcmVuZGVyZWRPcHRpb25zO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLl9tYW51YWxTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5VXBkYXRlZC5zdWJzY3JpYmUoKHE6c3RyaW5nKSA9PiB0aGlzLnF1ZXJ5ID0gcSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uUXVlcnlLZXlEb3duLnN1YnNjcmliZSgoZTpLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uUXVlcnlJbnB1dEtleWRvd24oZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbXVzdCBjYWxsIHRoaXMgaW1tZWRpYXRlbHkgYXMgY2hhbmdlcyBkb2Vzbid0IGZpcmUgd2hlbiB5b3Ugc3Vic2NyaWJlLlxuICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWxlY3Q7XG4gICAgfVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7fVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHF1ZXJ5IHRoZW4gb3BlbiB0aGUgZHJvcGRvd24sIGFzIGFmdGVyIGtleWJvYXJkIGlucHV0IGl0IHNob3VsZCBhbHdheXMgYmUgb3Blbi5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRRdWVyeShkZWxheWVkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgLy8gVGhlIHNlYXJjaCBkZWxheSBpcyBzZXQgdG8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gdG8gZW5zdXJlIHJlc3VsdHNcbiAgICAgICAgLy8gYXJlbid0IHJlbmRlcmVkIGFzIHRoZSBzZWxlY3QgY2xvc2VzIGFzIHRoYXQgY2F1c2VzIGEgc3VkZGVuIGZsYXNoLlxuICAgICAgICBpZiAoZGVsYXllZCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gdGhpcy5fbWVudS5tZW51VHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpOnZvaWQge1xuICAgICAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGFsbCBwcmV2aW91cyBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBvbiBsYXJnZSBzZWxlY3RzLlxuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChycyA9PiBycy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4ge1xuICAgICAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgaW5pdGlhbGlzYXRpb24gdG8gYXZvaWQgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JzLiBUT0RPIC0gbG9vayBpbnRvIGF2b2lkaW5nIHRoaXMhXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKHJvKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5wdXNoKHJvLm9uU2VsZWN0ZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2VsZWN0T3B0aW9uKHJvLnZhbHVlKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiBubyBvcHRpb25zIGhhdmUgYmVlbiBwcm92aWRlZCwgYXV0b2dlbmVyYXRlIHRoZW0gZnJvbSB0aGUgcmVuZGVyZWQgb25lcy5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5tYXAocm8gPT4gcm8udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgb3B0aW9uLnVzZXNUZW1wbGF0ZSA9ICEhdGhpcy5vcHRpb25UZW1wbGF0ZTtcbiAgICAgICAgb3B0aW9uLmZvcm1hdHRlciA9IHRoaXMuY29uZmlndXJlZEZvcm1hdHRlcjtcblxuICAgICAgICBpZiAob3B0aW9uLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGVtcGxhdGUob3B0aW9uLnRlbXBsYXRlU2libGluZywgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbi5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGZpbmRPcHRpb24ob3B0aW9uczpUW10sIHZhbHVlOlUpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBUcmllcyB0byBmaW5kIGFuIG9wdGlvbiBpbiBvcHRpb25zIGFycmF5XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy52YWx1ZUdldHRlcihvKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2FyZXRDbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZHJvcGRvd24gaXMgc2VhcmNoYWJsZSwgY2xpY2tpbmcgc2hvdWxkIGtlZXAgaXQgb3Blbiwgb3RoZXJ3aXNlIHdlIHRvZ2dsZSB0aGUgb3BlbiBzdGF0ZS5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLmlzU2VhcmNoYWJsZSA/IHRydWUgOiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCB3aGVuZXZlciBjbGlja2luZyBvbiB0aGUgc2VsZWN0LlxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlQcmVzcyhlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRG93bikge1xuXG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCBmb2N1cygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1NlYXJjaGFibGUgJiYgdGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgLy8gRm9jdXNzZXMgdGhlIHNlYXJjaCBpbnB1dCBvbmx5IHdoZW4gc2VhcmNoYWJsZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgdGhhdCBkcmF3cyB0aGUgcHJvdmlkZWQgdGVtcGxhdGUgYmVzaWRlIHRoZSBwcm92aWRlZCBWaWV3Q29udGFpbmVyUmVmLlxuICAgIHByb3RlY3RlZCBkcmF3VGVtcGxhdGUoc2libGluZ1JlZjpWaWV3Q29udGFpbmVyUmVmLCB2YWx1ZTpUKTp2b2lkIHtcbiAgICAgICAgc2libGluZ1JlZi5jbGVhcigpO1xuICAgICAgICAvLyBVc2Ugb2YgYCRpbXBsaWNpdGAgbWVhbnMgdXNlIG9mIDxuZy10ZW1wbGF0ZSBsZXQtb3B0aW9uPiBzeW50YXggaXMgc3VwcG9ydGVkLlxuICAgICAgICBzaWJsaW5nUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLm9wdGlvblRlbXBsYXRlLCB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHZhbHVlLFxuICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElPcHRpb25Db250ZXh0IH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM0NDkuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0LWxhYmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIiBbaW5uZXJIVE1MXT1cImZvcm1hdHRlcih2YWx1ZSlcIj48L3NwYW4+XG48aSBjbGFzcz1cImRlbGV0ZSBpY29uXCIgKGNsaWNrKT1cImRlc2VsZWN0T3B0aW9uKCRldmVudClcIj48L2k+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0TGFiZWw8VD4gZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubGFiZWxcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk/OnN0cmluZztcblxuICAgIEBPdXRwdXQoXCJkZXNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uRGVzZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF90ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgcHVibGljIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlLCBcImlubGluZS1ibG9ja1wiKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5vbkRlc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKFwic2NhbGVcIiwgMTAwLCBUcmFuc2l0aW9uRGlyZWN0aW9uLkluKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VsZWN0T3B0aW9uKGU6SGFuZGxlZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUoXG4gICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcInNjYWxlXCIsIDEwMCwgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKSkpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBLZXlDb2RlLCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9zZWxlY3Qtb3B0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3RcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBEcm9wZG93biBpY29uIC0tPlxuPGkgY2xhc3M9XCJ7eyBpY29uIH19IGljb25cIiAoY2xpY2spPVwib25DYXJldENsaWNrKCRldmVudClcIj48L2k+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNMYWJlbHNcIj5cbjwhLS0gTXVsdGktc2VsZWN0IGxhYmVscyAtLT5cbiAgICA8c3VpLW11bHRpLXNlbGVjdC1sYWJlbCAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2Ygc2VsZWN0ZWRPcHRpb25zO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZXJdPVwiY29uZmlndXJlZEZvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIm9wdGlvblRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVzZWxlY3RlZCk9XCJkZXNlbGVjdE9wdGlvbigkZXZlbnQpXCI+PC9zdWktbXVsdGktc2VsZWN0LWxhYmVsPlxuPC9uZy1jb250YWluZXI+XG5cbjwhLS0gUXVlcnkgaW5wdXQgLS0+XG48aW5wdXQgc3VpU2VsZWN0U2VhcmNoXG4gICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIFtoaWRkZW5dPVwiIWlzU2VhcmNoYWJsZSB8fCBpc1NlYXJjaEV4dGVybmFsXCI+XG5cbjwhLS0gSGVscGVyIHRleHQgLS0+XG48ZGl2IGNsYXNzPVwidGV4dFwiXG4gICAgIFtjbGFzcy5kZWZhdWx0XT1cImhhc0xhYmVsc1wiXG4gICAgIFtjbGFzcy5maWx0ZXJlZF09XCIhIXF1ZXJ5ICYmICFpc1NlYXJjaEV4dGVybmFsXCI+XG4gICAgXG4gICAgPCEtLSBQbGFjZWhvbGRlciB0ZXh0IC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNMYWJlbHM7IGVsc2Ugc2VsZWN0ZWRCbG9ja1wiPnt7IHBsYWNlaG9sZGVyIH19PC9uZy1jb250YWluZXI+XG4gICAgXG4gICAgPCEtLSBTdW1tYXJ5IHNob3duIHdoZW4gbGFiZWxzIGFyZSBoaWRkZW4gLS0+XG4gICAgPG5nLXRlbXBsYXRlICNzZWxlY3RlZEJsb2NrPiB7eyBzZWxlY3RlZE1lc3NhZ2UgfX08L25nLXRlbXBsYXRlPlxuPC9kaXY+XG5cbjwhLS0gU2VsZWN0IGRyb3Bkb3duIG1lbnUgLS0+XG48ZGl2IGNsYXNzPVwibWVudVwiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIFttZW51QXV0b1NlbGVjdEZpcnN0XT1cInRydWVcIj5cblxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT0gMCBcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFtYXhTZWxlY3RlZFJlYWNoZWRcIiBjbGFzcz1cIm1lc3NhZ2VcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzTWVzc2FnZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbWF4U2VsZWN0ZWRNZXNzYWdlIH19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgaW5wdXQuc2VhcmNoIHtcbiAgICB3aWR0aDogMTJlbSAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3Q8VCwgVT4gZXh0ZW5kcyBTdWlTZWxlY3RCYXNlPFQsIFU+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFVbXT4ge1xuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbnM6VFtdO1xuICAgIC8vIFN0b3JlcyB0aGUgdmFsdWVzIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgaXQgY2FuIGJlIG1hdGNoZWQgdG8gYW4gb3B0aW9uIGZyb20gYG9wdGlvbnNgLlxuICAgIHByaXZhdGUgX3dyaXR0ZW5PcHRpb25zPzpVW107XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zQ2hhbmdlOkV2ZW50RW1pdHRlcjxVW10+O1xuXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZE9wdGlvbnMoKTpUW10ge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3RlZFJlYWNoZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc2VsZWN0aW9ucywgdGhlbiBlbXB0eSB0aGUgcmVzdWx0cyBjb21wbGV0ZWx5LlxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0czpUW10gPSB0aGlzLnNlYXJjaFNlcnZpY2UucmVzdWx0cztcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgdGhlIHNlYXJjaCByZXN1bHRzIFxcIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIociA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maW5kKG8gPT4gciA9PT0gbykgPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlT3B0aW9ucygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkT3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYXNMYWJlbHM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBoYXNMYWJlbHMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0xhYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc0xhYmVscyhoYXNMYWJlbHM6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNMYWJlbHMgPSBoYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyIHx8IHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4U2VsZWN0ZWQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBtYXhTZWxlY3RlZFJlYWNoZWQoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBtYXhpbXVtIHRoZW4gd2UgY2FuIGltbWVkaWF0ZWx5IHJldHVybi5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSB0aGlzLm1heFNlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRNZXNzYWdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5tYXhTZWxlY3RlZE1lc3NhZ2UsXG4gICAgICAgICAgICBbW1wibWF4XCIsIHRoaXMubWF4U2VsZWN0ZWQudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkuc2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcImNvdW50XCIsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aC50b1N0cmluZygpXV0pO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm11bHRpcGxlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZiwgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGxvY2FsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVW10+KCk7XG5cbiAgICAgICAgdGhpcy5oYXNMYWJlbHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvcHRpb25zVXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbnMgc3RpbGwgZXhpc3QuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dyaXR0ZW5PcHRpb25zICYmIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdlcmUgdmFsdWVzIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgdGhlIG9wdGlvbnMgaGFkIGJlZW4gbG9hZGVkLCB0aGlzIHJ1bnMgdG8gZml4IGl0LlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLl93cml0dGVuT3B0aW9uc1xuICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgIC5tYXAodiA9PiB0aGlzLmZpbmRPcHRpb24odGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMsIHYpISlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSB0aGlzLl93cml0dGVuT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9ICF0aGlzLmhhc0xhYmVscyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLnZhbHVlR2V0dGVyKG8pKSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFF1ZXJ5KGZhbHNlKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZXM6VVtdKTp2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlcyB0byBvcHRpb25zLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIGFzc2VydGlvbiBhZGRlZCBoZXJlIGJlY2F1c2UgVHlwZXNjcmlwdCBkb2Vzbid0IHJlY29nbmlzZSB0aGUgbm9uLW51bGwgZmlsdGVyLlxuICAgICAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0aWFsTG9va3VwKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gaXRlbXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2FjaGUgdGhlIHdyaXR0ZW4gdmFsdWUgZm9yIHdoZW4gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9ucyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIG9wdGlvbnMgdG8gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgb3B0aW9ucyBcXCB7b3B0aW9ufS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maWx0ZXIoc28gPT4gc28gIT09IG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNMYWJlbHMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5CYWNrc3BhY2UgJiYgdGhpcy5xdWVyeSA9PT0gXCJcIiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBEZXNlbGVjdCB0aGUgcmlnaHRtb3N0IG9wdGlvbiB3aGVuIHRoZSB1c2VyIHByZXNzZXMgYmFja3NwYWNlIGluIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKHRoaXMuc2VsZWN0ZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVmFsdWUgYWNjZXNzb3IgZGlyZWN0aXZlIGZvciB0aGUgc2VsZWN0IHRvIHN1cHBvcnQgbmdNb2RlbC5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tdWx0aS1zZWxlY3RcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKHNlbGVjdGVkT3B0aW9uc0NoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yPFQsIFU+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxVW10sIFN1aU11bHRpU2VsZWN0PFQsIFU+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlNdWx0aVNlbGVjdDxULCBVPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0QmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3NlbGVjdC1iYXNlXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi9zZWxlY3Qtb3B0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zZWxlY3RcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBRdWVyeSBpbnB1dCAtLT5cbjxpbnB1dCBzdWlTZWxlY3RTZWFyY2hcbiAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgW2hpZGRlbl09XCIhaXNTZWFyY2hhYmxlIHx8IGlzU2VhcmNoRXh0ZXJuYWxcIj5cblxuPCEtLSBQbGFjZWhvbGRlciB0ZXh0IC0tPlxuPGRpdiAqbmdJZj1cInNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZFwiIGNsYXNzPVwiZGVmYXVsdCB0ZXh0XCIgW2NsYXNzLmZpbHRlcmVkXT1cInF1ZXJ5XCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cbjwhLS0gU2VsZWN0ZWQgaXRlbSAtLT5cbjxkaXYgY2xhc3M9XCJ0ZXh0XCIgW2NsYXNzLmZpbHRlcmVkXT1cInF1ZXJ5IHx8IHNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZFwiPlxuICAgIDxzcGFuICNvcHRpb25UZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiIW9wdGlvblRlbXBsYXRlICYmIHNlbGVjdGVkT3B0aW9uICE9IHVuZGVmaW5lZFwiIFtpbm5lckhUTUxdPVwiY29uZmlndXJlZEZvcm1hdHRlcihzZWxlY3RlZE9wdGlvbilcIj48L3NwYW4+XG48L2Rpdj5cbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuPCEtLSBTZWxlY3QgZHJvcGRvd24gbWVudSAtLT5cbjxkaXYgY2xhc3M9XCJtZW51XCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgW21lbnVBdXRvU2VsZWN0Rmlyc3RdPVwiaXNTZWFyY2hhYmxlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiAqbmdJZj1cImlzU2VhcmNoYWJsZSAmJiBhdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICB7eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzTWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdDxULCBVPiBleHRlbmRzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VT4ge1xuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbj86VDtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgaXQgY2FuIGJlIG1hdGNoZWQgdG8gYW4gb3B0aW9uIGZyb20gYG9wdGlvbnNgLlxuICAgIHByaXZhdGUgX3dyaXR0ZW5PcHRpb24/OlU7XG5cbiAgICBAVmlld0NoaWxkKFwib3B0aW9uVGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIHByaXZhdGUgX29wdGlvblRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uQ2hhbmdlOkV2ZW50RW1pdHRlcjxVPjtcblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5zaW5nbGUucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6RWxlbWVudFJlZiwgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIGxvY2FsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFU+KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb24gc3RpbGwgZXhpc3RzLlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMudmFsdWVHZXR0ZXIodGhpcy5zZWxlY3RlZE9wdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dyaXR0ZW5PcHRpb24gJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFuIHZhbHVlIHdyaXR0ZW4gYnkgbmdNb2RlbCBiZWZvcmUgdGhlIG9wdGlvbnMgaGFkIGJlZW4gbG9hZGVkLCB0aGlzIHJ1bnMgdG8gZml4IGl0LlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdGhpcy5fd3JpdHRlbk9wdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBxdWVyeVVwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgcXVlcnkgaXMgdXBkYXRlZCwgd2UganVzdCBhYmFuZG9uIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgLy8gQ2hvb3NlIGFuZCBlbWl0IHRoZSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLnZhbHVlR2V0dGVyKG9wdGlvbikpO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFF1ZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpVKTp2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZSB0byBhbiBvcHRpb24uXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0aWFsTG9va3VwKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2FjaGUgdGhlIHdyaXR0ZW4gdmFsdWUgZm9yIHdoZW4gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cml0dGVuT3B0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGVkT3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSBvcHRpb24udmFsdWUgPT09IHRoaXMuc2VsZWN0ZWRPcHRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3U2VsZWN0ZWRPcHRpb24oKTp2b2lkIHtcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgIGlmICh0aGlzLl9yZW5kZXJlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub25BdmFpbGFibGVPcHRpb25zUmVuZGVyZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvblRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZW1wbGF0ZSh0aGlzLl9vcHRpb25UZW1wbGF0ZVNpYmxpbmcsIHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBWYWx1ZSBhY2Nlc3NvciBkaXJlY3RpdmUgZm9yIHRoZSBzZWxlY3QgdG8gc3VwcG9ydCBuZ01vZGVsLlxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoc2VsZWN0ZWRPcHRpb25DaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yPFQsIFU+IGV4dGVuZHMgQ3VzdG9tVmFsdWVBY2Nlc3NvcjxVLCBTdWlTZWxlY3Q8VCwgVT4+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVNlbGVjdDxULCBVPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25Nb2R1bGUgfSBmcm9tIFwiLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0LCBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3RcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvblwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0U2VhcmNoIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoXCI7XG5pbXBvcnQgeyBTdWlNdWx0aVNlbGVjdCwgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aS1zZWxlY3RcIjtcbmltcG9ydCB7IFN1aU11bHRpU2VsZWN0TGFiZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpLXNlbGVjdC1sYWJlbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVNlbGVjdCxcbiAgICAgICAgU3VpU2VsZWN0T3B0aW9uLFxuICAgICAgICBTdWlTZWxlY3RTZWFyY2gsXG4gICAgICAgIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0LFxuICAgICAgICBTdWlNdWx0aVNlbGVjdExhYmVsLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3JcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VsZWN0LFxuICAgICAgICBTdWlTZWxlY3RPcHRpb24sXG4gICAgICAgIFN1aVNlbGVjdFNlYXJjaCxcbiAgICAgICAgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpTXVsdGlTZWxlY3QsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyVHJhbnNpdGlvbiA9IFwib3ZlcmxheVwiIHwgXCJwdXNoXCIgfCBcInNjYWxlIGRvd25cIiB8IFwidW5jb3ZlclwiIHwgXCJzbGlkZSBhbG9uZ1wiIHwgXCJzbGlkZSBvdXRcIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJUcmFuc2l0aW9uID0ge1xuICAgIE92ZXJsYXk6IFwib3ZlcmxheVwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFB1c2g6IFwicHVzaFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNjYWxlRG93bjogXCJzY2FsZSBkb3duXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgVW5jb3ZlcjogXCJ1bmNvdmVyXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVBbG9uZzogXCJzbGlkZSBhbG9uZ1wiIGFzIFNpZGViYXJUcmFuc2l0aW9uLFxuICAgIFNsaWRlT3V0OiBcInNsaWRlIG91dFwiIGFzIFNpZGViYXJUcmFuc2l0aW9uXG59O1xuXG5leHBvcnQgdHlwZSBTaWRlYmFyRGlyZWN0aW9uID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInRvcFwiIHwgXCJib3R0b21cIjtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJEaXJlY3Rpb24gPSB7XG4gICAgTGVmdDogXCJsZWZ0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBSaWdodDogXCJyaWdodFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgVG9wOiBcInRvcFwiIGFzIFNpZGViYXJEaXJlY3Rpb24sXG4gICAgQm90dG9tOiBcImJvdHRvbVwiIGFzIFNpZGViYXJEaXJlY3Rpb25cbn07XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyU2VydmljZSB7XG4gICAgcHVibGljIGlzVmlzaWJsZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FuaW1hdGluZzpib29sZWFuO1xuICAgIHB1YmxpYyB3YXNKdXN0T3BlbmVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb247XG5cbiAgICBwcml2YXRlIF93aWR0aDpudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0Om51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl93aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHdpZHRoKHdpZHRoOm51bWJlcikge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5Ub3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIC10aGlzLl9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoZWlnaHQoaGVpZ2h0Om51bWJlcikge1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBwdWJsaWMgd2lkdGhDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHB1YmxpYyBoZWlnaHRDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHJpdmF0ZSBfaXNBbmltYXRpbmdUaW1lb3V0Om51bWJlcjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaXNWaXNpYmxlOmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy53aWR0aENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDI2MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpc2libGVTdGF0ZShpc1Zpc2libGU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAhPT0gaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53YXNKdXN0T3BlbmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGVDaGFuZ2UuZW1pdChpc1Zpc2libGUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5faXNBbmltYXRpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlLCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVZpc2libGVTdGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNldFZpc2libGVTdGF0ZSghdGhpcy5pc1Zpc2libGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiwgU2lkZWJhckRpcmVjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNpZGViYXIge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zaWRlYmFyXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbigpOlNpZGViYXJUcmFuc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS50cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOlNpZGViYXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCBmYWxzZSkpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbi5zcGxpdChcIiBcIikuZm9yRWFjaChjID0+IHRoaXMuc2V0Q2xhc3MoYywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpTaWRlYmFyRGlyZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOlNpZGViYXJEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyh0aGlzLnNlcnZpY2UuZGlyZWN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIHRydWUpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNWaXNpYmxlKGlzVmlzaWJsZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoaXNWaXNpYmxlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZUNoYW5nZSgpOkV2ZW50RW1pdHRlcjxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFuaW1hdGluZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNBbmltYXRpbmcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc0FuaW1hdGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU2lkZWJhclNlcnZpY2UoKTtcbiAgICAgICAgLy8gV2Ugc2V0IHRoZSBkZWZhdWx0IGhlcmUgYXMgd2VsbCB0byBmb3JjZSB0aGUgY2xhc3NlcyB0byB1cGRhdGUuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFNpZGViYXJUcmFuc2l0aW9uLlVuY292ZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1lbnNpb25zKCkpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpbWVuc2lvbnMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLndpZHRoID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLnNlcnZpY2UuaGVpZ2h0ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldENsYXNzKGNsYXNzTmFtZTpzdHJpbmcsIGlzQWRkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVWaXNpYmxlU3RhdGUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhci1zaWJsaW5nXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyU2libGluZyB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpTaWRlYmFyU2VydmljZTtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOlNpZGViYXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6U2lkZWJhclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpKTtcbiAgICAgICAgdGhpcy5fc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtKCkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGltbWVkV2hlblZpc2libGU6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnZpc2libGVcIilcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpbW1lZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNEaW1tZWQoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJiB0aGlzLmlzRGltbWVkV2hlblZpc2libGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHVzaGVyXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaXNEaW1tZWRXaGVuVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm0oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIi13ZWJraXQtdHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNWaXNpYmxlICYmXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudHJhbnNpdGlvbiAhPT0gU2lkZWJhclRyYW5zaXRpb24uT3ZlcmxheSAmJlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gIT09IFNpZGViYXJUcmFuc2l0aW9uLlNjYWxlRG93bikge1xuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlM2QoJHt0aGlzLnNlcnZpY2Uud2lkdGh9cHgsICR7dGhpcy5zZXJ2aWNlLmhlaWdodH1weCwgMClgO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIi13ZWJraXQtdHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJiAhdGhpcy5zZXJ2aWNlLndhc0p1c3RPcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJTaWJsaW5nIH0gZnJvbSBcIi4vc2lkZWJhci1zaWJsaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLWNvbnRhaW5lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhckNvbnRhaW5lciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHVzaGFibGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTaWRlYmFyKVxuICAgIHB1YmxpYyBzaWRlYmFyOlN1aVNpZGViYXI7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aVNpZGViYXJTaWJsaW5nKVxuICAgIHB1YmxpYyBzaWJsaW5nOlN1aVNpZGViYXJTaWJsaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc2lkZWJhcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIDxzdWktc2lkZWJhcj4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gdGhpcy5zaWRlYmFyLnNlcnZpY2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNpYmxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGluY2x1ZGUgYSA8c3VpLXNpZGViYXItc2libGluZz4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaWJsaW5nLnNlcnZpY2UgPSB0aGlzLnNlcnZpY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhckNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci1jb250YWluZXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJTaWJsaW5nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVNpZGViYXIsXG4gICAgICAgIFN1aVNpZGViYXJDb250YWluZXIsXG4gICAgICAgIFN1aVNpZGViYXJTaWJsaW5nXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVNpZGViYXIsXG4gICAgICAgIFN1aVNpZGViYXJDb250YWluZXIsXG4gICAgICAgIFN1aVNpZGViYXJTaWJsaW5nXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRhYiB7XG4gICAgcHVibGljIGlkOnN0cmluZztcbiAgICBwdWJsaWMgaGVhZGVyOlN1aVRhYkhlYWRlcjtcbiAgICBwdWJsaWMgY29udGVudDpTdWlUYWJDb250ZW50O1xuICAgIHB1YmxpYyBpbmRleDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihoZWFkZXI6U3VpVGFiSGVhZGVyLCBjb250ZW50OlN1aVRhYkNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGhlYWRlci5pZDtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgLy8gU28gdGhhdCB0aGUgaGVhZGVyIGFuZCBjb250ZW50IGlzQWN0aXZlIHByb3BlcnRpZXMgYXJlIGFsd2F5cyBpbiBzeW5jLlxuICAgICAgICB0aGlzLmhlYWRlci5pc0FjdGl2ZUNoYW5nZVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNvbnRlbnQuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlcyBhY2Nlc3NpbmcgLmhlYWRlci5pc0FjdGl2ZSBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyLmlzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoYWN0aXZlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gVXNlIGBzZXRBY3RpdmVTdGF0ZWAgc28gYXMgbm90IHRvIGZpcmUgJ2V4dGVybmFsIGNoYW5nZXMnIGV2ZW50LlxuICAgICAgICB0aGlzLmhlYWRlci5zZXRBY3RpdmVTdGF0ZShhY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzRGlzYWJsZWQgZXZlcnkgdGltZS5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyLmlzRGlzYWJsZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIElucHV0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiSGVhZGVyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkhlYWRlciB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJIZWFkZXJcIilcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuXG4gICAgLy8gSW50ZXJuYWxseSBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBoZWFkZXIgaXMgYWN0aXZlLlxuICAgIHByaXZhdGUgX2lzQWN0aXZlOmJvb2xlYW47XG5cbiAgICAvLyBFbmFibGVzIHVzZSBvZiBbKGlzQWN0aXZlKV0gc28gc3RhdGUgY2FuIGJlIHNldCB1c2luZyBib29sZWFucy5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNBY3RpdmVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgb25seSB3aGVuIGBpc0FjdGl2ZWAgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnB1dC5cbiAgICBwdWJsaWMgaXNBY3RpdmVFeHRlcm5hbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBkZWFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25BY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBkZWFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiZGVhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkRlYWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gT25seSB1c2VkIGJ5IEBJbnB1dCgpLCBydW5zIHdoZW5ldmVyIHVzZXIgaW5wdXQgY2hhbmdlcyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBSdW4gaW4gdGltZW91dCBiZWNhdXNlIGBpc0Rpc2FibGVkYCBjYW4gcHJvaGliaXQgdXNlciBmcm9tIGNoYW5naW5nIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIHNvIHVwZGF0ZSBpcyBkZWxheWVkIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgY2hhbmdlIGlmIHRhYiBoZWFkZXIgaXMgbm90IGRpc2FibGVkLlxuICAgICAgICAgICAgaXNBY3RpdmUgPSAhdGhpcy5pc0Rpc2FibGVkID8gYWN0aXZlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVN0YXRlKGlzQWN0aXZlKTtcblxuICAgICAgICAgICAgLy8gRmlyZSAnZXh0ZXJuYWwgY2hhbmdlJyBldmVudCBhcyB1c2VyIGlucHV0IGhhcyBvY2N1cmVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLmVtaXQoaXNBY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZChkaXNhYmxlZDpib29sZWFuKSB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHZhbHVlIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0byBjdXJyZW50IG9uZS5cbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIC8vIElmIG5vdyBkaXNhYmxlZCwgdGhlbiB0YWIgaGVhZGVyIG11c3QgYmUgZGVhY3RpdmF0ZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxseSB1cGRhdGUgYWN0aXZlIHN0YXRlLlxuICAgIHB1YmxpYyBzZXRBY3RpdmVTdGF0ZShhY3RpdmU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIC8vIElmIChjYXN0KSBhY3RpdmUgdmFsdWUgaGFzIGNoYW5nZWQ6XG4gICAgICAgIGlmICghIXRoaXMuX2lzQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBhY3RpdmU7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGFwcHJvcHJpYXRlIGFjdGl2YXRpb24gZXZlbnQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcywgZW1pdCBhIGNoYW5nZSB0byBgaXNBY3RpdmVgLCBzbyBbKGlzQWN0aXZlKV0gd29ya3MgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlLmVtaXQoYWN0aXZlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIHRhYiB3aGVuIGNsaWNrZWQsIHNvIGxvbmcgYXMgaXQgaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRhYkNvbnRlbnRdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFiQ29udGVudCB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudGFiXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInN1aVRhYkNvbnRlbnRcIilcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlUYWJIZWFkZXIgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWNvbnRlbnRcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCIuLi9jbGFzc2VzL3RhYlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktdGFic2V0XCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJzZXQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVRhYkhlYWRlcilcbiAgICBwcml2YXRlIF90YWJIZWFkZXJzOlF1ZXJ5TGlzdDxTdWlUYWJIZWFkZXI+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlUYWJDb250ZW50KVxuICAgIHByaXZhdGUgX3RhYkNvbnRlbnRzOlF1ZXJ5TGlzdDxTdWlUYWJDb250ZW50PjtcblxuICAgIC8vIExpc3Qgb2YgYWxsIHRhYnMgaW4gdGhlIHRhYnNldC5cbiAgICBwdWJsaWMgdGFiczpUYWJbXTtcblxuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYi5cbiAgICBwcml2YXRlIF9hY3RpdmVUYWI6VGFiO1xuXG4gICAgcHVibGljIGdldCBhY3RpdmVUYWIoKTpUYWIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFiO1xuICAgIH1cblxuICAgIC8vIFdoZW4gc2V0dGluZyBhIHRhYiBhcyB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIsIGl0IGF1dG9tYXRpY2FsbHkgZ2FpbnNcbiAgICAvLyBgaXNBY3RpdmVgIHN0YXR1cyAoc2F2ZXMgbGl0dGVyaW5nIGBpc0FjdGl2ZSA9IHRydWVgIGV2ZXJ5d2hlcmUpLlxuICAgIHB1YmxpYyBzZXQgYWN0aXZlVGFiKHRhYjpUYWIpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICB0YWIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgdGltZXMgYGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWRgIGlzIGNhbGxlZC5cbiAgICBwcml2YXRlIF9iYXJyaWVyQ291bnQ6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFicyA9IFtdO1xuICAgICAgICB0aGlzLl9iYXJyaWVyQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gRmlyZSBgaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZGAgd2hlbiB0aGUgcXVlcnkgbGlzdHMgY2hhbmdlLlxuICAgICAgICB0aGlzLl90YWJIZWFkZXJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpKTtcbiAgICAgICAgdGhpcy5fdGFiQ29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkKCkpO1xuXG4gICAgICAgIC8vIEluaXRpYWxseSBsb2FkIHRoZSB0YWJzLlxuICAgICAgICB0aGlzLmxvYWRUYWJzKCk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgZWl0aGVyIHRoZSB0YWIgaGVhZGVycyBvciB0YWIgY29udGVudHMgcXVlcnkgbGlzdHMgdXBkYXRlLlxuICAgIHByaXZhdGUgaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSBhcmUgdXNpbmcgYSAnY291bnRpbmcgYmFycmllciBvZiBuID0gMicsIGkuZS4gdGhlIGNvZGUgd2l0aGluIG9ubHkgcnVucyBhZnRlciB0aGUgbWV0aG9kIGlzIGNhbGxlZCB0d2ljZS5cbiAgICAgICAgLy8gVGhpcyBpcyBzbyB0aGF0IGJvdGggdGhlIGhlYWRlcnMgYW5kIGNvbnRlbnRzIHF1ZXJ5IGxpc3RzIGNhbiB1cGRhdGUgYmVmb3JlIHdlIHJ1biBjb2RlIHRoYXQgbWF0Y2hlcyB0aGUgdHdvIHVwLlxuICAgICAgICB0aGlzLl9iYXJyaWVyQ291bnQrKztcblxuICAgICAgICBpZiAodGhpcy5fYmFycmllckNvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgYmFycmllciBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICAgICAgICAgICAgdGhpcy5fYmFycmllckNvdW50ID0gMDtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0YWJzLlxuICAgICAgICAgICAgdGhpcy5sb2FkVGFicygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29ubmVjdHMgdGFiIGhlYWRlcnMgdG8gdGFiIGNvbnRlbnRzLCBhbmQgY3JlYXRlcyBhIHRhYiBpbnN0YW5jZSBmb3IgZWFjaCBwYWlyaW5nLlxuICAgIHByaXZhdGUgbG9hZFRhYnMoKTp2b2lkIHtcbiAgICAgICAgLy8gUmVtb3ZlIGFueSB0YWJzIHRoYXQgbm8gbG9uZ2VyIGhhdmUgYW4gYXNzb2NpYXRlZCBoZWFkZXIuXG4gICAgICAgIHRoaXMudGFicyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiAhIXRoaXMuX3RhYkhlYWRlcnMuZmluZCh0SCA9PiB0SCA9PT0gdC5oZWFkZXIpKTtcblxuICAgICAgICB0aGlzLl90YWJIZWFkZXJzXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHRoZSBsb2FkZWQgaGVhZGVycyB3aXRoIGF0dGFjaGVkIHRhYiBpbnN0YW5jZXMuXG4gICAgICAgICAgICAuZmlsdGVyKHRIID0+ICF0aGlzLnRhYnMuZmluZCh0ID0+IHQuaGVhZGVyID09PSB0SCkpXG4gICAgICAgICAgICAuZm9yRWFjaCh0SCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuX3RhYkNvbnRlbnRzLmZpbmQodEMgPT4gdEMuaWQgPT09IHRILmlkKTtcblxuICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciBpZiBhbiBhc3NvY2lhdGVkIHRhYiBjb250ZW50IGNhbm5vdCBiZSBmb3VuZCBmb3IgdGhlIGdpdmVuIGhlYWRlci5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBbc3VpVGFiSGVhZGVyXSBtdXN0IGhhdmUgYSByZWxhdGVkIFtzdWlUYWJDb250ZW50XS5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRhYiBpbnN0YW5jZSBmb3IgdGhpcyBoZWFkZXIgJiBjb250ZW50IGNvbWJvLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IG5ldyBUYWIodEgsIGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGFueSBleHRlcm5hbCBjaGFuZ2VzIGluIHRoZSB0YWIgaGVhZGVyJ3MgYWN0aXZlIHN0YXRlLiBFeHRlcm5hbCBjaGFuZ2VzIGFyZSB0cmlnZ2VyZWQgYnkgdXNlciBpbnB1dC5cbiAgICAgICAgICAgICAgICB0YWIuaGVhZGVyLmlzQWN0aXZlRXh0ZXJuYWxDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMub25IZWFkZXJBY3RpdmVDaGFuZ2VkKHRhYikpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgaW5zdGFuY2UgdG8gdGhlIGxpc3Qgb2YgdGFicy5cbiAgICAgICAgICAgICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXNzaWduIGVhY2ggdGFiIGFuIGluZGV4ICh3aGljaCBkZW5vdGVzIHRoZSBvcmRlciB0aGV5IHBoeXNpY2FsbHkgYXBwZWFyIGluKS5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVyc1xuICAgICAgICAgICAgLmZvckVhY2goKHRILCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gdGhpcy50YWJzLmZpbmQodCA9PiB0LmhlYWRlciA9PT0gdEgpO1xuICAgICAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBTb3J0IHRoZSB0YWJzIGJ5IHRoZWlyIGluZGV4LlxuICAgICAgICB0aGlzLnRhYnMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuXG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZVRhYikgeyAvLyBDaGVjayBpZiB0aGVyZSBhcmUgbm8gY3VycmVudCBleGlzdGluZyBhY3RpdmUgdGFicy5cbiAgICAgICAgICAgIC8vIElmIHNvLCB3ZSBtdXN0IGFjdGl2YXRlIHRoZSBmaXJzdCBhdmFpbGFibGUgdGFiLlxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUZpcnN0VGFiKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudGFicy5maW5kKHQgPT4gdCA9PT0gdGhpcy5hY3RpdmVUYWIpKSB7IC8vIE8nd2lzZSBjaGVjayBpZiBjdXJyZW50IGFjdGl2ZSB0YWIgaGFzIGJlZW4gZGVsZXRlZC5cbiAgICAgICAgICAgIC8vIElmIHNvLCB3ZSBtdXN0IGZpbmQgdGhlIGNsb3Nlc3QuXG4gICAgICAgICAgICAvLyBVc2UgYHNldFRpbWVvdXRgIGFzIHRoaXMgY2F1c2VzIGEgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3Igbyd3aXNlLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRlQ2xvc2VzdFRhYih0aGlzLmFjdGl2ZVRhYikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEVycm9yIGlmIHRoZXJlIGFyZW4ndCBhbnkgdGFicyBpbiB0aGUgdGFic2V0LlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBoYXZlIG5vIHRhYnMhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbmV2ZXIgYSB0YWIgaGVhZGVyJ3MgYWN0aXZlIHN0YXRlIGlzIGV4dGVybmFsbHkgY2hhbmdlZC5cbiAgICBwcml2YXRlIG9uSGVhZGVyQWN0aXZlQ2hhbmdlZCh0YWI6VGFiKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHRhYiBoYXMgYmVjb21lIGFjdGl2YXRlZCwgYnV0IHdhcyBub3QgcHJldmlvdXNseSB0aGUgYWN0aXZlIHRhYjpcbiAgICAgICAgaWYgKHRhYi5pc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZVRhYiAhPT0gdGFiKSB7XG4gICAgICAgICAgICAvLyBEZWFjdGl2YXRlIGFsbCBvZiB0aGUgdGFicy5cbiAgICAgICAgICAgIHRoaXMudGFicy5maWx0ZXIodCA9PiB0ICE9PSB0YWIpLmZvckVhY2godCA9PiB0LmlzQWN0aXZlID0gZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIHRvIHRoaXMgb25lLlxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdGFiIGhhcyBiZWNvbWUgZGVhY3RpdmF0ZWQsIGJ1dCB3YXMgcHJldmlvdXNseSB0aGUgYWN0aXZlIHRhYjpcbiAgICAgICAgaWYgKCF0YWIuaXNBY3RpdmUgJiYgdGhpcy5hY3RpdmVUYWIgPT09IHRhYikge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGNsb3Nlc3QgdGFiIHRvIGl0LlxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIodGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlIHRoZSBmaXJzdCB0YWIgaW4gdGhlIHNldC5cbiAgICBwdWJsaWMgYWN0aXZhdGVGaXJzdFRhYigpOnZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMudGFic1swXTtcbiAgICB9XG5cbiAgICAvLyBBY3RpdmF0ZXMgdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIHRhYiB0byBhIGdpdmVuIG9uZS5cbiAgICBwdWJsaWMgYWN0aXZhdGVDbG9zZXN0VGFiKHRhYjpUYWIpOnZvaWQge1xuICAgICAgICBsZXQgbmV4dEF2YWlsYWJsZTpUYWIgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgZXhpdGVkIHRhYidzIGluZGV4IGlzIGhpZ2hlciB0aGFuIGFsbCBhdmFpbGFibGUgdGFicyxcbiAgICAgICAgaWYgKHRhYi5pbmRleCA+PSB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgbGFzdCB0YWIuXG4gICAgICAgICAgICBuZXh0QXZhaWxhYmxlID0gdGhpcy50YWJzW3RoaXMudGFicy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoYXQgZGlkbid0IHdvcmssIHRyeSB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICBpZiAoIW5leHRBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJzLmZpbmQodCA9PiB0ID09PSB0YWIpKSB7IC8vIFdoZW4gdGhlIGV4aXRlZCB0YWIgbm8gbG9uZ2VyIGV4aXN0cyxcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGl0IHdpdGggYSB0YWIgYXQgdGhlIHNhbWUgaW5kZXguXG4gICAgICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1t0YWIuaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gT3IgaWYgdGhlIGV4aXRlZCB0YWIgc3RpbGwgZXhpc3RzLFxuICAgICAgICAgICAgICAgIC8vIEdvIHRvIHRoZSB0YWIgaW1tZWRpYXRlbHkgdG8gdGhlIGxlZnQuXG4gICAgICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1tNYXRoLm1heCh0YWIuaW5kZXggLSAxLCAwKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIb3dldmVyLCBpZiB0aGUgY2hvc2VuIHRhYiBpcyBkaXNhYmxlZCxcbiAgICAgICAgaWYgKG5leHRBdmFpbGFibGUuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIHRhYiB0byBpdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2YXRlQ2xvc2VzdFRhYihuZXh0QXZhaWxhYmxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiID0gbmV4dEF2YWlsYWJsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUYWJzZXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnNldFwiO1xuaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVGFic2V0LFxuICAgICAgICBTdWlUYWJIZWFkZXIsXG4gICAgICAgIFN1aVRhYkNvbnRlbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpVGFic2V0LFxuICAgICAgICBTdWlUYWJIZWFkZXIsXG4gICAgICAgIFN1aVRhYkNvbnRlbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYnNNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy8gQ29sbGVjdGlvbnNcbmltcG9ydCB7XG4gICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICBTdWlQYWdpbmF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2NvbGxlY3Rpb25zL2ludGVybmFsXCI7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7XG4gICAgU3VpQWNjb3JkaW9uTW9kdWxlLFxuICAgIFN1aUNoZWNrYm94TW9kdWxlLFxuICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgIFN1aURhdGVwaWNrZXJNb2R1bGUsXG4gICAgU3VpRGltbWVyTW9kdWxlLFxuICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgIFN1aU1vZGFsTW9kdWxlLFxuICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgIFN1aVJhdGluZ01vZHVsZSxcbiAgICBTdWlTZWFyY2hNb2R1bGUsXG4gICAgU3VpU2lkZWJhck1vZHVsZSxcbiAgICBTdWlUYWJzTW9kdWxlLFxuICAgIFN1aVNlbGVjdE1vZHVsZSxcbiAgICBTdWlUcmFuc2l0aW9uTW9kdWxlXG59IGZyb20gXCIuL21vZHVsZXMvaW50ZXJuYWxcIjtcblxuLy8gQmVoYXZpb3JzXG5pbXBvcnQge1xuICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZVxufSBmcm9tIFwiLi9iZWhhdmlvcnMvaW50ZXJuYWxcIjtcblxuLy8gTWlzY1xuaW1wb3J0IHtcbiAgICBTdWlVdGlsaXR5TW9kdWxlXG59IGZyb20gXCIuL21pc2MvaW50ZXJuYWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC8vIENvbGxlY3Rpb25zXG4gICAgICAgIFN1aU1lc3NhZ2VNb2R1bGUsXG4gICAgICAgIFN1aVBhZ2luYXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTW9kdWxlc1xuICAgICAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFN1aUNoZWNrYm94TW9kdWxlLFxuICAgICAgICBTdWlDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgU3VpRGltbWVyTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgICAgIFN1aVBvcHVwTW9kdWxlLFxuICAgICAgICBTdWlQcm9ncmVzc01vZHVsZSxcbiAgICAgICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgICAgICBTdWlTZWFyY2hNb2R1bGUsXG4gICAgICAgIFN1aVNlbGVjdE1vZHVsZSxcbiAgICAgICAgU3VpU2lkZWJhck1vZHVsZSxcbiAgICAgICAgU3VpVGFic01vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBCZWhhdmlvcnNcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIE1pc2NcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKCRleHRlbmQpKS5kZWZhdWx0IiwiZm9ybWF0IiwiaXNVQVdlYlZpZXdbXCJkZWZhdWx0XCJdIiwiYm93c2VyLm1vYmlsZSIsImJvd3Nlci50YWJsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU0sSUFBSSxHQUFpQjtJQUN2QixVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDM0g7UUFDRCxXQUFXLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7U0FDckY7UUFDRCxRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVO1NBQy9FO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztTQUNsRDtRQUNELGNBQWMsRUFBRTtZQUNaLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7U0FDcEM7UUFDRCxVQUFVLEVB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