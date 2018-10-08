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
export class SuiComponentFactory {
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
if (false) {
    /** @type {?} */
    SuiComponentFactory.prototype._applicationRef;
    /** @type {?} */
    SuiComponentFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    SuiComponentFactory.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9zZXJ2aWNlcy9jb21wb25lbnQtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsVUFBVSxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQzlELGtCQUFrQixFQUNyQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkIsc0NBRUM7OztJQURHLHFDQUFhOztBQUlqQixNQUFNOzs7Ozs7SUFDRixZQUFvQixlQUE4QixFQUM5Qix5QkFBa0QsRUFDbEQsU0FBa0I7UUFGbEIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFDOUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtRQUNsRCxjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUcsQ0FBQzs7Ozs7OztJQUVuQyxlQUFlLENBQUksSUFBWSxFQUFFLFlBQXVCLEVBQUU7OztjQUV2RCxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLG1CQUFBLElBQUksRUFBVyxDQUFDOzs7Y0FHakYsUUFBUSxHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixDQUNoRCxTQUFTLEVBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FDakI7OztjQUdLLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUU3QyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7O0lBRU0sVUFBVSxDQUFtQyxhQUE4QixFQUFFLFFBQXVCLEVBQUUsT0FBUztRQUNsSCxhQUFhLENBQUMsa0JBQWtCLENBQUksUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0lBR00sWUFBWSxDQUFJLFlBQTRCLEVBQUUsYUFBOEI7UUFDL0UsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7SUFHTSxtQkFBbUIsQ0FBSSxZQUE0QjtRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7OztJQUdNLHFCQUFxQixDQUFJLFlBQTRCO1FBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7OztJQUdNLGFBQWEsQ0FBSSxZQUE0QixFQUFFLE9BQWU7UUFDakUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFHTSxrQkFBa0IsQ0FBSSxZQUE0QjtRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFTSxrQkFBa0IsQ0FBSSxZQUE0Qjs7Y0FDL0MsT0FBTyxHQUFHLG1CQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFXO1FBQzlELCtEQUErRDtRQUMvRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekRKLFVBQVU7OztZQVJLLGNBQWM7WUFBRSx3QkFBd0I7WUFBRSxRQUFROzs7O0lBVWxELDhDQUFzQzs7SUFDdEMsd0RBQTBEOztJQUMxRCx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBDb21wb25lbnRSZWYsXG4gICAgUmVmbGVjdGl2ZUluamVjdG9yLCBQcm92aWRlciwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJSW1wbGljaXRDb250ZXh0PFQ+IHtcbiAgICAkaW1wbGljaXQ/OlQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlDb21wb25lbnRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcHBsaWNhdGlvblJlZjpBcHBsaWNhdGlvblJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOkluamVjdG9yKSB7fVxuXG4gICAgcHVibGljIGNyZWF0ZUNvbXBvbmVudDxUPih0eXBlOlR5cGU8VD4sIHByb3ZpZGVyczpQcm92aWRlcltdID0gW10pOkNvbXBvbmVudFJlZjxUPiB7XG4gICAgICAgIC8vIFJlc29sdmUgYSBmYWN0b3J5IGZvciBjcmVhdGluZyBjb21wb25lbnRzIG9mIHR5cGUgYHR5cGVgLlxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUgYXMgVHlwZTxUPik7XG5cbiAgICAgICAgLy8gUmVzb2x2ZSBhbmQgY3JlYXRlIGFuIGluamVjdG9yIHdpdGggdGhlIHNwZWNpZmllZCBwcm92aWRlcnMuXG4gICAgICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoXG4gICAgICAgICAgICBwcm92aWRlcnMsXG4gICAgICAgICAgICB0aGlzLl9pbmplY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCB1c2luZyB0aGUgcHJldmlvdXNseSByZXNvbHZlZCBmYWN0b3J5ICYgaW5qZWN0b3IuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVWaWV3PFQsIFUgZXh0ZW5kcyBJSW1wbGljaXRDb250ZXh0PFQ+Pih2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlOlRlbXBsYXRlUmVmPFU+LCBjb250ZXh0OlUpOnZvaWQge1xuICAgICAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldzxVPih0ZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0cyB0aGUgY29tcG9uZW50IGludG8gdGhlIHNwZWNpZmllZCB2aWV3IGNvbnRhaW5lci5cbiAgICBwdWJsaWMgYXR0YWNoVG9WaWV3PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4sIHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZik6dm9pZCB7XG4gICAgICAgIHZpZXdDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudFJlZi5ob3N0VmlldywgMCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0cyB0aGUgY29tcG9uZW50IGluIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gICAgcHVibGljIGF0dGFjaFRvQXBwbGljYXRpb248VD4oY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxUPik6dm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICAvLyBEZXRhY2hlcyB0aGUgY29tcG9uZW50IGZyb20gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgICBwdWJsaWMgZGV0YWNoRnJvbUFwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgLy8gTW92ZXMgdGhlIGNvbXBvbmVudCB0byB0aGUgc3BlY2lmaWVkIERPTSBlbGVtZW50LlxuICAgIHB1YmxpYyBtb3ZlVG9FbGVtZW50PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4sIGVsZW1lbnQ6RWxlbWVudCk6dm9pZCB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIE1vdmVzIHRoZSBjb21wb25lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHkuXG4gICAgcHVibGljIG1vdmVUb0RvY3VtZW50Qm9keTxUPihjb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFQ+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9FbGVtZW50KGNvbXBvbmVudFJlZiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0YWNoRnJvbURvY3VtZW50PFQ+KGNvbXBvbmVudFJlZjpDb21wb25lbnRSZWY8VD4pOnZvaWQge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGBlbGVtZW50LnJlbW92ZSgpYCBkdWUgdG8gbGFjayBvZiBJRTExIHN1cHBvcnQuXG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==