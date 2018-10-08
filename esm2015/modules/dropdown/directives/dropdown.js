/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding, EventEmitter, Output, ContentChild, ElementRef, HostListener, QueryList, ContentChildren } from "@angular/core";
import { HandledEvent, KeyCode } from "../../../misc/util/internal";
import { DropdownService, DropdownAutoCloseType } from "../services/dropdown.service";
import { SuiDropdownMenu } from "./dropdown-menu";
export class SuiDropdown {
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
if (false) {
    /** @type {?} */
    SuiDropdown.prototype.service;
    /** @type {?} */
    SuiDropdown.prototype._menu;
    /** @type {?} */
    SuiDropdown.prototype._children;
    /** @type {?} */
    SuiDropdown.prototype._tabIndex;
    /** @type {?} */
    SuiDropdown.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFvQixZQUFZLEVBQ25GLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQWUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS2xELE1BQU07Ozs7SUF1RUYsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFyRUQsSUFBVyxRQUFRO1FBQ2YsNERBQTREO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFDVyxZQUFZ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QUdoQixXQUFXLFNBQUMsZUFBZTt3QkFjM0IsS0FBSztzQkFxQ0wsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFTaEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFPbkMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWxIcEMsOEJBQStCOztJQUUvQiw0QkFDOEI7O0lBRTlCLGdDQUN5Qzs7SUFzQ3pDLGdDQUMwQjs7SUF5QmQsK0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4vZHJvcGRvd24tbWVudVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aURyb3Bkb3duTWVudSlcbiAgICBwcml2YXRlIF9tZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jaGlsZHJlbjpRdWVyeUxpc3Q8U3VpRHJvcGRvd24+O1xuXG4gICAgcHVibGljIGdldCBjaGlsZHJlbigpOlN1aURyb3Bkb3duW10ge1xuICAgICAgICAvLyBAQ29udGVudENoaWxkcmVuIGluY2x1ZGVzIHRoZSBjdXJyZW50IGVsZW1lbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmZpbHRlcihjID0+IGMgIT09IHRoaXMpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBUaGlzIGlzIHRvIGVuc3VyZSBuZXN0ZWQgZHJvcGRvd25zIGRvbid0IGdldCBtYWRlIGJvbGQuXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuICYmICF0aGlzLnNlcnZpY2UuaXNOZXN0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvcGVuaW5nIHRoZSBkcm9wZG93biwgd2Ugd2FudCB0byBhbHdheXMgb3BlbiBpdHMgcGFyZW50cy5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldERpc2FibGVkU3RhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInRhYmluZGV4XCIpXG4gICAgcHJpdmF0ZSBfdGFiSW5kZXg/Om51bWJlcjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgZ2V0IHRhYkluZGV4KCk6bnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLnNlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gZGVmYXVsdCBvZiAwLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYXV0b0Nsb3NlKCk6RHJvcGRvd25BdXRvQ2xvc2VUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYXV0b0Nsb3NlKHZhbHVlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBzZXQgW3N1aURyb3Bkb3duTWVudV0gb24gdGhlIG1lbnUgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW5VcGRhdGVkKCk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmNoYW5nZXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGlsZHJlblVwZGF0ZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGlsZHJlblVwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gUmVyZWdpc3RlciBjaGlsZCBkcm9wZG93bnMgZWFjaCB0aW1lIHRoZSBtZW51IGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5jaGlsZHJlblxuICAgICAgICAgICAgLm1hcChjID0+IGMuc2VydmljZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKHMgPT4gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyQ2hpbGQocykpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkKSB7XG4gICAgICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxseUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5cHJlc3NcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleXByZXNzKGU6SGFuZGxlZEV2ZW50ICYgS2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIEJsb2NrIHRoZSBrZXlib2FyZCBldmVudCBmcm9tIGJlaW5nIGZpcmVkIG9uIHBhcmVudCBkcm9wZG93bnMuXG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FbnRlcikge1xuICAgICAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dGVybmFsbHlDbG9zZSgpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGUgPT09IERyb3Bkb3duQXV0b0Nsb3NlVHlwZS5JdGVtQ2xpY2sgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gcmVmbGVjdCBpbiBwYXJlbnQgc2luY2UgdGhleSBhcmUgYWxzbyBib3VuZCB0byBkb2N1bWVudC5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19