/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ContentChild, forwardRef, Renderer2, ElementRef, ContentChildren, QueryList, Input, HostListener, ChangeDetectorRef } from "@angular/core";
import { Transition, SuiTransition, TransitionController, TransitionDirection } from "../../transition/internal";
import { KeyCode } from "../../../misc/util/internal";
import { DropdownAutoCloseType } from "../services/dropdown.service";
// Polyfill for IE
import "element-closest";
export class SuiDropdownMenuItem {
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
export class SuiDropdownMenu extends SuiTransition {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDMUQsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUNyRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pILE9BQU8sRUFBbUMsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkYsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUV0RixPQUFPLGlCQUFpQixDQUFDO0FBTXpCLE1BQU07Ozs7O0lBZ0NGLFlBQW9CLFNBQW1CLEVBQVMsT0FBa0I7UUFBOUMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQzs7OztJQW5DRCxJQUFXLFVBQVU7OztjQUVYLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBVztRQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUlELElBQVcsVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQVcsVUFBVSxDQUFDLEtB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QUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVPLGNBQWM7UUFDbEIsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTdRSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjthQUNoQzs7O1lBM0R3QyxTQUFTO1lBQUUsVUFBVTtZQUNULGlCQUFpQjs7OzZCQStEakUsS0FBSztxQ0FHTCxLQUFLO2tDQXdDTCxlQUFlLFNBQUMsbUJBQW1CO2tDQXVCbkMsS0FBSztvQ0FHTCxLQUFLO3NCQXNCTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBOUZqQyxtQ0FBaUM7O0lBQ2pDLGdEQUFtRDs7SUFFbkQseUNBQzZCOztJQUU3QixpREFDcUM7O0lBdUNyQyw4Q0FDMkQ7O0lBRTNELDhDQUEyRDs7SUFpQjNELHdDQUEyQzs7SUFHM0MsOENBQ21DOztJQUVuQyxnREFDb0M7O0lBRXBDLGlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgU3VpVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50LCBJQXVnbWVudGVkRWxlbWVudCwgS2V5Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgRHJvcGRvd25BdXRvQ2xvc2VUeXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbi8vIFBvbHlmaWxsIGZvciBJRVxuaW1wb3J0IFwiZWxlbWVudC1jbG9zZXN0XCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIFdlIG11c3QgYXR0YWNoIHRvIGV2ZXJ5ICcuaXRlbScgYXMgQW5ndWxhciBkb2Vzbid0IHN1cHBvcnQgPiBzZWxlY3RvcnMuXG4gICAgc2VsZWN0b3I6IFwiLml0ZW1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgLy8gV2UgbXVzdCB1c2UgbmF0aXZlRWxlbWVudCBhcyBBbmd1bGFyIGRvZXNuJ3QgaGF2ZSBhIHdheSBvZiByZWFkaW5nIGNsYXNzIGluZm9ybWF0aW9uLlxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNTZWxlY3RlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIFJlbmRlcmVyIGlzIHVzZWQgdG8gZW5hYmxlIGEgZHluYW1pYyBjbGFzcyBuYW1lLlxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIGNsYXNzIG5hbWUgdXNlZCBmb3IgYSAnc2VsZWN0ZWQnIGl0ZW0uXG4gICAgcHVibGljIHNlbGVjdGVkQ2xhc3M6c3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IFN1aURyb3Bkb3duTWVudSkpXG4gICAgcHVibGljIGNoaWxkRHJvcGRvd25NZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGREcm9wZG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNoaWxkRHJvcGRvd25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1DbGljaygpOnZvaWQge1xuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bk1lbnVdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkRyb3Bkb3duU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZSh2YWx1ZTpEcm9wZG93blNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0lzT3BlbiA9IHRoaXMuX3NlcnZpY2UuaXNPcGVuO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKGlzT3Blbjpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICE9PSBwcmV2aW91c0lzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIHRyYW5zaXRpb25zIGlmIHRoZSBvcGVuIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuX3NlcnZpY2UuaXNBbmltYXRpbmcgPSBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpdGVtIHNlbGVjdGlvbnMgd2hlbiBhIG5lc3RlZCBpdGVtIGlzIHNlbGVjdGVkIHRvIGF2b2lkIGluY29zaXN0ZW50IG9wZW4gc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c0lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnRFbGVtZW50KHZhbHVlOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4odmFsdWUubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhcmVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd25NZW51SXRlbSlcbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5SW50ZXJuYWw6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeU92ZXJyaWRlOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHB1YmxpYyBzZXQgaXRlbXMoaXRlbXM6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pdGVtc1F1ZXJ5KCk6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSB8fCB0aGlzLl9pdGVtc1F1ZXJ5SW50ZXJuYWw7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsaXN0IG9mIGl0ZW1zLCBpZ25vcmluZyB0aG9zZSB0aGF0IGFyZSBkaXNhYmxlZC5cbiAgICBwcml2YXRlIGdldCBfaXRlbXMoKTpTdWlEcm9wZG93bk1lbnVJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeS5maWx0ZXIoaSA9PiAhaS5pc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICAvLyBTdGFjayB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAvLyBTZWxlY3RlZCBpdGVtcyBsb3dlciBpbiB0aGUgc3RhY2sgYXJlIG5lY2Vzc2FyaWx5IHRoZSBwYXJlbnQgb2YgdGhlIGl0ZW0gb25lIGhpZ2hlci5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtczpTdWlEcm9wZG93bk1lbnVJdGVtW107XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSAxc3QgaXRlbSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudUF1dG9TZWxlY3RGaXJzdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVNlbGVjdGVkSXRlbUNsYXNzOnN0cmluZztcblxuICAgIHByaXZhdGUgX3BhcmVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGVzdHJveWVkIGJlZm9yZSBpdCBoYXMgYSBjaGFuY2UgdG8gYmUgZnVsbHkgaW5pdGlhbGlzZWQuXG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQgJiBNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSUF1Z21lbnRlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSBhbiBpdGVtIGlzIHNlbGVjdGVkLCB3ZSBjYW4gY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB0aGUgcm9vdCBkcm9wZG93biAoaS5lLiBub3QgbmVzdGVkIGRyb3Bkb3ducykgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5fc2VydmljZSAmJiB0aGlzLl9zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5fc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gU3RvcCBkb2N1bWVudCBldmVudHMgbGlrZSBzY3JvbGxpbmcgd2hpbGUgb3Blbi5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIS9pbnB1dC9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpICYmXG4gICAgICAgICAgICAgICAgW0tleUNvZGUuRXNjYXBlLCBLZXlDb2RlLkVudGVyLCBLZXlDb2RlLlVwLCBLZXlDb2RlLkRvd24sIEtleUNvZGUuTGVmdCwgS2V5Q29kZS5SaWdodF0uZmluZChrQyA9PiBrQyA9PT0gZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0cyB0aGUgdG9wIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgc3RhY2suXG4gICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIC8vIEtlZXBpbmcgdHJhY2sgb2YgdGhlIG1lbnUgY29udGFpbmluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQgYWxsb3dzIHVzIHRvIGVhc2lseSBkZXRlcm1pbmUgaXRzIHNpYmxpbmdzLlxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ29udGFpbmVyOlN1aURyb3Bkb3duTWVudSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb250YWluZXIgPSBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUgOiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2NhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG93biA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGJlbG93IHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIC8vIFVwIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYWJvdmUgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWRDb250YWluZXIudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB3ZSBhcmUgaW4gYW4gaW5wdXQsIHRvIHN0b3AganVtcGluZyB0byB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEVudGVyIDogaWYgdGhlIGl0ZW0gZG9lc24ndCBjb250YWluIGEgbmVzdGVkIGRyb3Bkb3duLCAnY2xpY2snIGl0LiBPdGhlcndpc2UsIGZhbGwgdGhyb3VnaCB0byAnUmlnaHQnIGFjdGlvbi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmICFzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wZXJmb3JtQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBjb250YWlucyBhIG5lc3RlZCBkcm9wZG93biwgb3BlbiB0aGUgZHJvcGRvd24gJiBzZWxlY3QgdGhlIDFzdCBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIExlZnQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiBhIG5lc3RlZCBkcm9wZG93biwgY2xvc2UgaXQgYW5kIHNlbGVjdCB0aGUgY29udGFpbmluZyBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTZWxlY3Rpb24oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBpLnNlbGVjdGVkQ2xhc3MgPSB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcztcbiAgICAgICAgICAgIGkuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEF1dG9zZWxlY3QgMXN0IGl0ZW0gaWYgcmVxdWlyZWQgJiBwb3NzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zWzBdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0odGhpcy5faXRlbXNbMF0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5faXRlbXNRdWVyeS5maXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBpdGVtIHRvIG5leHQgYmUgc2VsZWN0ZWQsIGJhc2VkIG9uIHRoZSBrZXlib2FyZCBpbnB1dCAmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkSXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtLCBrZXlDb2RlOktleUNvZGUpOlN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5faXRlbXNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoaSA9PiBpID09PSBzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb246U3VpRHJvcGRvd25NZW51SXRlbTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDpcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm9uZSBhcmUgc2VsZWN0ZWQsIHNlbGVjdCB0aGUgMXN0IGl0ZW0uIFNob3VsZCB0aGlzIGJlIGB0aGlzLml0ZW1zLmxhc3QgLSAxYD9cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSBhdCB0aGUgdXBkYXRlZCBpbmRleC4gVGhlIHx8IGlzIHRvIHN0b3AgdXMgc2VsZWN0aW5nIHBhc3QgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgaXRlbSBsaXN0LlxuICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLl9pdGVtc1tzZWxlY3RlZEluZGV4XSB8fCBzZWxlY3RlZEl0ZW07XG5cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24uaXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0obmV3U2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTZWxlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvSXRlbShpdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0pOnZvaWQge1xuICAgICAgICBjb25zdCBtZW51OkVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUmVjdDpDbGllbnRSZWN0ID0gaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWVudVJlY3QgPSBtZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBzY3JvbGxBbW91bnQgPSAwO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QuYm90dG9tIC0gbWVudVJlY3QuYm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC50b3AgPCBtZW51UmVjdC50b3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC50b3AgLSBtZW51UmVjdC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51LnNjcm9sbFRvcCArPSBNYXRoLnJvdW5kKHNjcm9sbEFtb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnkuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSXRlbXNDaGFuZ2VkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIHVzZSBgX2l0ZW1zYCByYXRoZXIgdGhhbiBgaXRlbXNgIGluIGNhc2Ugb25lIG9yIG1vcmUgaGF2ZSBiZWNvbWUgZGlzYWJsZWQuXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxufVxuIl19