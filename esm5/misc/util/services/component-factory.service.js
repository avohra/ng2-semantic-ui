/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ReflectiveInjector } from "@angular/core";
/**
 * @record
 * @template T
 */
export function IImplicitContext() { }
if (false) {
    /** @type {?|undefined} */
    IImplicitContext.prototype.$implicit;
}
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
export { SuiComponentFactory };
if (false) {
    /** @type {?} */
    SuiComponentFactory.prototype._applicationRef;
    /** @type {?} */
    SuiComponentFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    SuiComponentFactory.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9zZXJ2aWNlcy9jb21wb25lbnQtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsVUFBVSxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQzlELGtCQUFrQixFQUNyQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkIsc0NBRUM7OztJQURHLHFDQUFhOztBQUdqQjtJQUVJLDZCQUFvQixlQUE4QixFQUM5Qix5QkFBa0QsRUFDbEQsU0FBa0I7UUFGbEIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFDOUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUNsRCxjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUcsQ0FBQzs7Ozs7OztJQUVuQyw2Q0FBZTs7Ozs7O0lBQXRCLFVBQTBCLElBQVksRUFBRSxTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGNBQXlCOzs7WUFFdkQsT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBQSxJQUFJLEVBQVcsQ0FBQzs7O1lBR2pGLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDaEQsU0FBUyxFQUNULElBQUksQ0FBQyxTQUFTLENBQ2pCOzs7WUFHSyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFN0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDOzs7Ozs7OztJQUVNLHdDQUFVOzs7Ozs7O0lBQWpCLFVBQW9ELGFBQThCLEVBQUUsUUFBdUIsRUFBRSxPQUFTO1FBQ2xILGFBQWEsQ0FBQyxrQkFBa0IsQ0FBSSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDJEQUEyRDs7Ozs7Ozs7SUFDcEQsMENBQVk7Ozs7Ozs7O0lBQW5CLFVBQXVCLFlBQTRCLEVBQUUsYUFBOEI7UUFDL0UsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzREFBc0Q7Ozs7Ozs7SUFDL0MsaURBQW1COzs7Ozs7O0lBQTFCLFVBQThCLFlBQTRCO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseURBQXlEOzs7Ozs7O0lBQ2xELG1EQUFxQjs7Ozs7OztJQUE1QixVQUFnQyxZQUE0QjtRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG9EQUFvRDs7Ozs7Ozs7SUFDN0MsMkNBQWE7Ozs7Ozs7O0lBQXBCLFVBQXdCLFlBQTRCLEVBQUUsT0FBZTtRQUNqRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDRDQUE0Qzs7Ozs7OztJQUNyQyxnREFBa0I7Ozs7Ozs7SUFBekIsVUFBNkIsWUFBNEI7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRU0sZ0RBQWtCOzs7OztJQUF6QixVQUE2QixZQUE0Qjs7WUFDL0MsT0FBTyxHQUFHLG1CQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFXO1FBQzlELCtEQUErRDtRQUMvRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekRKLFVBQVU7OztnQkFSSyxjQUFjO2dCQUFFLHdCQUF3QjtnQkFBRSxRQUFROztJQWtFbEUsMEJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQXpEWSxtQkFBbUI7OztJQUNoQiw4Q0FBc0M7O0lBQ3RDLHdEQUEwRDs7SUFDMUQsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLFxuICAgIFJlZmxlY3RpdmVJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltcGxpY2l0Q29udGV4dDxUPiB7XG4gICAgJGltcGxpY2l0PzpUO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpQ29tcG9uZW50RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6QXBwbGljYXRpb25SZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjpJbmplY3Rvcikge31cblxuICAgIHB1YmxpYyBjcmVhdGVDb21wb25lbnQ8VD4odHlwZTpUeXBlPFQ+LCBwcm92aWRlcnM6UHJvdmlkZXJbXSA9IFtdKTpDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICAvLyBSZXNvbHZlIGEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgY29tcG9uZW50cyBvZiB0eXBlIGB0eXBlYC5cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlIGFzIFR5cGU8VD4pO1xuXG4gICAgICAgIC8vIFJlc29sdmUgYW5kIGNyZWF0ZSBhbiBpbmplY3RvciB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvdmlkZXJzLlxuICAgICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFxuICAgICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgdXNpbmcgdGhlIHByZXZpb3VzbHkgcmVzb2x2ZWQgZmFjdG9yeSAmIGluamVjdG9yLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVmlldzxULCBVIGV4dGVuZHMgSUltcGxpY2l0Q29udGV4dDxUPj4odmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxVPiwgY29udGV4dDpVKTp2b2lkIHtcbiAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXc8VT4odGVtcGxhdGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbnRvIHRoZSBzcGVjaWZpZWQgdmlldyBjb250YWluZXIuXG4gICAgcHVibGljIGF0dGFjaFRvVmlldzxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpOnZvaWQge1xuICAgICAgICB2aWV3Q29udGFpbmVyLmluc2VydChjb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgdGhlIGNvbXBvbmVudCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICAgIHB1YmxpYyBhdHRhY2hUb0FwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgLy8gRGV0YWNoZXMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gICAgcHVibGljIGRldGFjaEZyb21BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIC8vIE1vdmVzIHRoZSBjb21wb25lbnQgdG8gdGhlIHNwZWNpZmllZCBET00gZWxlbWVudC5cbiAgICBwdWJsaWMgbW92ZVRvRWxlbWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+LCBlbGVtZW50OkVsZW1lbnQpOnZvaWQge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlcyB0aGUgY29tcG9uZW50IHRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgIHB1YmxpYyBtb3ZlVG9Eb2N1bWVudEJvZHk8VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMubW92ZVRvRWxlbWVudChjb21wb25lbnRSZWYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpISk7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaEZyb21Eb2N1bWVudDxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIC8vIFdlIGNhbid0IHVzZSBgZWxlbWVudC5yZW1vdmUoKWAgZHVlIHRvIGxhY2sgb2YgSUUxMSBzdXBwb3J0LlxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=