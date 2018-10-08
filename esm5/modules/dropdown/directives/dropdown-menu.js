/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ContentChild, forwardRef, Renderer2, ElementRef, ContentChildren, QueryList, Input, HostListener, ChangeDetectorRef } from "@angular/core";
import { Transition, SuiTransition, TransitionController, TransitionDirection } from "../../transition/internal";
import { KeyCode } from "../../../misc/util/internal";
import { DropdownAutoCloseType } from "../services/dropdown.service";
// Polyfill for IE
import "element-closest";
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
export { SuiDropdownMenuItem };
if (false) {
    /** @type {?} */
    SuiDropdownMenuItem.prototype._isSelected;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.selectedClass;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.childDropdownMenu;
    /** @type {?} */
    SuiDropdownMenuItem.prototype._renderer;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.element;
}
var SuiDropdownMenu = /** @class */ (function (_super) {
    tslib_1.__extends(SuiDropdownMenu, _super);
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
            var _a = tslib_1.__read(this.selectedItems.slice(-1), 1), selected = _a[0];
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            /** @type {?} */
            var selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                var _b = tslib_1.__read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
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
                        var _c = tslib_1.__read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
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
export { SuiDropdownMenu };
if (false) {
    /** @type {?} */
    SuiDropdownMenu.prototype._service;
    /** @type {?} */
    SuiDropdownMenu.prototype._transitionController;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuTransition;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuTransitionDuration;
    /** @type {?} */
    SuiDropdownMenu.prototype._itemsQueryInternal;
    /** @type {?} */
    SuiDropdownMenu.prototype._itemsQueryOverride;
    /** @type {?} */
    SuiDropdownMenu.prototype.selectedItems;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuAutoSelectFirst;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuSelectedItemClass;
    /** @type {?} */
    SuiDropdownMenu.prototype._parentKeyDownListener;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzFELGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFDckUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqSCxPQUFPLEVBQW1DLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZGLE9BQU8sRUFBbUIscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFdEYsT0FBTyxpQkFBaUIsQ0FBQztBQUV6QjtJQW9DSSw2QkFBb0IsU0FBbUIsRUFBUyxPQUFrQjtRQUE5QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBbkNELHNCQUFXLDJDQUFVOzs7O1FBQXJCOzs7Z0JBRVUsT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFXO1lBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUlELHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFFRCxV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RCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFTSw0Q0FBa0I7OztJQUF6QjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVPLHdDQUFjOzs7SUFBdEI7UUFDSSxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxxQ0FBVzs7O0lBQWxCO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBN1FKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs7O2dCQTNEd0MsU0FBUztnQkFBRSxVQUFVO2dCQUNULGlCQUFpQjs7O2lDQStEakUsS0FBSzt5Q0FHTCxLQUFLO3NDQXdDTCxlQUFlLFNBQUMsbUJBQW1CO3NDQXVCbkMsS0FBSzt3Q0FHTCxLQUFLOzBCQXNCTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTRLckMsc0JBQUM7Q0FBQSxBQTlRRCxDQUdxQyxhQUFhLEdBMlFqRDtTQTNRWSxlQUFlOzs7SUFDeEIsbUNBQWlDOztJQUNqQyxnREFBbUQ7O0lBRW5ELHlDQUM2Qjs7SUFFN0IsaURBQ3FDOztJQXVDckMsOENBQzJEOztJQUUzRCw4Q0FBMkQ7O0lBaUIzRCx3Q0FBMkM7O0lBRzNDLDhDQUNtQzs7SUFFbkMsZ0RBQ29DOztJQUVwQyxpREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgQ29udGVudENoaWxkLCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIElucHV0LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgSUF1Z21lbnRlZEVsZW1lbnQsIEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG4vLyBQb2x5ZmlsbCBmb3IgSUVcbmltcG9ydCBcImVsZW1lbnQtY2xvc2VzdFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICAvLyBXZSBtdXN0IGF0dGFjaCB0byBldmVyeSAnLml0ZW0nIGFzIEFuZ3VsYXIgZG9lc24ndCBzdXBwb3J0ID4gc2VsZWN0b3JzLlxuICAgIHNlbGVjdG9yOiBcIi5pdGVtXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFdlIG11c3QgdXNlIG5hdGl2ZUVsZW1lbnQgYXMgQW5ndWxhciBkb2Vzbid0IGhhdmUgYSB3YXkgb2YgcmVhZGluZyBjbGFzcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU2VsZWN0ZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2VsZWN0ZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBSZW5kZXJlciBpcyB1c2VkIHRvIGVuYWJsZSBhIGR5bmFtaWMgY2xhc3MgbmFtZS5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjbGFzcyBuYW1lIHVzZWQgZm9yIGEgJ3NlbGVjdGVkJyBpdGVtLlxuICAgIHB1YmxpYyBzZWxlY3RlZENsYXNzOnN0cmluZztcblxuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBTdWlEcm9wZG93bk1lbnUpKVxuICAgIHB1YmxpYyBjaGlsZERyb3Bkb3duTWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0NoaWxkRHJvcGRvd24oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jaGlsZERyb3Bkb3duTWVudTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZFwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25NZW51XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudSBleHRlbmRzIFN1aVRyYW5zaXRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpEcm9wZG93blNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2UodmFsdWU6RHJvcGRvd25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSB2YWx1ZTtcblxuICAgICAgICBsZXQgcHJldmlvdXNJc09wZW4gPSB0aGlzLl9zZXJ2aWNlLmlzT3BlbjtcbiAgICAgICAgdGhpcy5fc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKChpc09wZW46Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAhPT0gcHJldmlvdXNJc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJ1biB0cmFuc2l0aW9ucyBpZiB0aGUgb3BlbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLl9zZXJ2aWNlLmlzQW5pbWF0aW5nID0gZmFsc2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgaXRlbSBzZWxlY3Rpb25zIHdoZW4gYSBuZXN0ZWQgaXRlbSBpcyBzZWxlY3RlZCB0byBhdm9pZCBpbmNvc2lzdGVudCBvcGVuIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldmlvdXNJc09wZW4gPSBpc09wZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFyZW50RWxlbWVudCh2YWx1ZTpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKHZhbHVlLm5hdGl2ZUVsZW1lbnQsIFwia2V5ZG93blwiLCAoZTpLZXlib2FyZEV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25QYXJlbnRLZXlEb3duKGUpKTtcbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duTWVudUl0ZW0pXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeUludGVybmFsOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlPdmVycmlkZTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPikge1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgPSBpdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXRlbXNRdWVyeSgpOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgfHwgdGhpcy5faXRlbXNRdWVyeUludGVybmFsO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBpdGVtcywgaWdub3JpbmcgdGhvc2UgdGhhdCBhcmUgZGlzYWJsZWQuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zKCk6U3VpRHJvcGRvd25NZW51SXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnkuZmlsdGVyKGkgPT4gIWkuaXNEaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgLy8gU3RhY2sgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgLy8gU2VsZWN0ZWQgaXRlbXMgbG93ZXIgaW4gdGhlIHN0YWNrIGFyZSBuZWNlc3NhcmlseSB0aGUgcGFyZW50IG9mIHRoZSBpdGVtIG9uZSBoaWdoZXIuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXM6U3VpRHJvcGRvd25NZW51SXRlbVtdO1xuXG4gICAgLy8gU2V0cyB3aGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IHNlbGVjdCB0aGUgMXN0IGl0ZW0gd2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbmVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVBdXRvU2VsZWN0Rmlyc3Q6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVTZWxlY3RlZEl0ZW1DbGFzczpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9wYXJlbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuXG4gICAgICAgIHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcyA9IFwic2VsZWN0ZWRcIjtcblxuICAgICAgICAvLyBJbiBjYXNlIHRoZSBkcm9wZG93biBtZW51IGlzIGRlc3Ryb3llZCBiZWZvcmUgaXQgaGFzIGEgY2hhbmNlIHRvIGJlIGZ1bGx5IGluaXRpYWxpc2VkLlxuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50ICYgTW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIElBdWdtZW50ZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKSkgJiYgIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uY2UgYW4gaXRlbSBpcyBzZWxlY3RlZCwgd2UgY2FuIGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRLZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdGhlIHJvb3QgZHJvcGRvd24gKGkuZS4gbm90IG5lc3RlZCBkcm9wZG93bnMpIGlzIHJlc3BvbnNpYmxlIGZvciBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgJiYgdGhpcy5fc2VydmljZS5pc09wZW4gJiYgIXRoaXMuX3NlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZG9jdW1lbnQgZXZlbnRzIGxpa2Ugc2Nyb2xsaW5nIHdoaWxlIG9wZW4uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCEvaW5wdXQvaS50ZXN0KHRhcmdldC50YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgIFtLZXlDb2RlLkVzY2FwZSwgS2V5Q29kZS5FbnRlciwgS2V5Q29kZS5VcCwgS2V5Q29kZS5Eb3duLCBLZXlDb2RlLkxlZnQsIEtleUNvZGUuUmlnaHRdLmZpbmQoa0MgPT4ga0MgPT09IGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldHMgdGhlIHRvcCBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHN0YWNrLlxuICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBtZW51IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IGFsbG93cyB1cyB0byBlYXNpbHkgZGV0ZXJtaW5lIGl0cyBzaWJsaW5ncy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbnRhaW5lcjpTdWlEcm9wZG93bk1lbnUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29udGFpbmVyID0gc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIDogY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvd24gOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBiZWxvdyB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICAvLyBVcCA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGFib3ZlIHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkQ29udGFpbmVyLnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGluIGFuIGlucHV0LCB0byBzdG9wIGp1bXBpbmcgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbnRlciA6IGlmIHRoZSBpdGVtIGRvZXNuJ3QgY29udGFpbiBhIG5lc3RlZCBkcm9wZG93biwgJ2NsaWNrJyBpdC4gT3RoZXJ3aXNlLCBmYWxsIHRocm91Z2ggdG8gJ1JpZ2h0JyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucGVyZm9ybUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gY29udGFpbnMgYSBuZXN0ZWQgZHJvcGRvd24sIG9wZW4gdGhlIGRyb3Bkb3duICYgc2VsZWN0IHRoZSAxc3QgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gYSBuZXN0ZWQgZHJvcGRvd24sIGNsb3NlIGl0IGFuZCBzZWxlY3QgdGhlIGNvbnRhaW5pbmcgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2VsZWN0aW9uKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5zZWxlY3RlZENsYXNzID0gdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3M7XG4gICAgICAgICAgICBpLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBdXRvc2VsZWN0IDFzdCBpdGVtIGlmIHJlcXVpcmVkICYgcG9zc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1swXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2l0ZW1zUXVlcnkuZmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaXRlbSB0byBuZXh0IGJlIHNlbGVjdGVkLCBiYXNlZCBvbiB0aGUga2V5Ym9hcmQgaW5wdXQgJiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZEl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSwga2V5Q29kZTpLZXlDb2RlKTpTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2l0ZW1zXG4gICAgICAgICAgICAuZmluZEluZGV4KGkgPT4gaSA9PT0gc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOlN1aURyb3Bkb3duTWVudUl0ZW07XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vbmUgYXJlIHNlbGVjdGVkLCBzZWxlY3QgdGhlIDFzdCBpdGVtLiBTaG91bGQgdGhpcyBiZSBgdGhpcy5pdGVtcy5sYXN0IC0gMWA/XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHVwZGF0ZWQgaW5kZXguIFRoZSB8fCBpcyB0byBzdG9wIHVzIHNlbGVjdGluZyBwYXN0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGl0ZW0gbGlzdC5cbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5faXRlbXNbc2VsZWN0ZWRJbmRleF0gfHwgc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudTpFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlY3Q6Q2xpZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID0gMDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LmJvdHRvbSAtIG1lbnVSZWN0LmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QudG9wIC0gbWVudVJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zY3JvbGxUb3AgKz0gTWF0aC5yb3VuZChzY3JvbGxBbW91bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25JdGVtc0NoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSB1c2UgYF9pdGVtc2AgcmF0aGVyIHRoYW4gYGl0ZW1zYCBpbiBjYXNlIG9uZSBvciBtb3JlIGhhdmUgYmVjb21lIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiJdfQ==