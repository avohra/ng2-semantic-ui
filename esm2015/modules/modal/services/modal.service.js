/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { TemplateModalConfig, ComponentModalConfig } from "../classes/modal-config";
import { SuiModal } from "../components/modal";
import { Modal } from "../classes/modal-controls";
import { ActiveModal } from "../classes/active-modal";
export class SuiModalService {
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
if (false) {
    /** @type {?} */
    SuiModalService.prototype._componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbW9kYWwvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd0RCxNQUFNOzs7O0lBQ0YsWUFBb0IsaUJBQXFDO1FBQXJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7SUFFdEQsSUFBSSxDQUFVLEtBQTBCOzs7Y0FFckMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQWlCLFFBQVEsQ0FBQzs7O2NBRy9FLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUU1QyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTs7Z0JBRTlFLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTzs7Z0JBRXhCLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDeEMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksb0JBQW9CLENBQUMsQ0FBQyxDQUFDOzs7O2tCQUd6QyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUM5RCxLQUFLLENBQUMsU0FBUyxFQUNmO2dCQUNJO29CQUNJLE9BQU8sRUFBRSxLQUFLO29CQUNkLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQzlEO2FBQ0osQ0FDSjtZQUVELDBEQUEwRDtZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7O2tCQUduRixjQUFjLEdBQUcsbUJBQUEsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBVztZQUU1RSwrRUFBK0U7WUFDL0UseUdBQXlHO1lBQ3pHLDZDQUE2QztZQUM3QyxPQUFPLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxjQUFjLENBQUMsYUFBYSxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwRyxDQUFDO1lBQ0QsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFRCxxREFBcUQ7UUFDckQsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6RCwyREFBMkQ7UUFDM0QsY0FBYyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxpRkFBaUY7UUFDakYsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUF6REosVUFBVTs7O1lBTkYsbUJBQW1COzs7O0lBUVosNENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcsIFRlbXBsYXRlTW9kYWxDb25maWcsIENvbXBvbmVudE1vZGFsQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29uZmlnXCI7XG5pbXBvcnQgeyBTdWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbnRyb2xzXCI7XG5pbXBvcnQgeyBBY3RpdmVNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzL2FjdGl2ZS1tb2RhbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHt9XG5cbiAgICBwdWJsaWMgb3BlbjxULCBVLCBWPihtb2RhbDpNb2RhbENvbmZpZzxULCBVLCBWPik6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbW9kYWwgY29tcG9uZW50IHRvIGJlIHNob3duLlxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudDxTdWlNb2RhbDxVLCBWPj4oU3VpTW9kYWwpO1xuXG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgdGhlIGNyZWF0ZWQgbW9kYWwgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAgICBjb25zdCBtb2RhbENvbXBvbmVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAobW9kYWwgaW5zdGFuY2VvZiBUZW1wbGF0ZU1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIHRlbXBsYXRlIGludG8gdGhlIHZpZXcuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcobW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nLCBtb2RhbC50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgIC8vIGBsZXQtY29udGV4dGBcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IG1vZGFsLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgLy8gYGxldC1tb2RhbD1cIm1vZGFsXCJgXG4gICAgICAgICAgICAgICAgbW9kYWw6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kYWwgaW5zdGFuY2VvZiBDb21wb25lbnRNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGNvbXBvbmVudCB0byBiZSB1c2VkIGFzIHRoZSBtb2RhbCBjb250ZW50LFxuICAgICAgICAgICAgLy8gaW5qZWN0aW5nIGFuIGluc3RhbmNlIG9mIGBNb2RhbGAgdG8gYmUgdXNlZCBpbiB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgY29uc3QgY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IG5ldyBNb2RhbChtb2RhbENvbXBvbmVudC5jb250cm9scywgbW9kYWwuY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgbmV3IGNvbXBvbmVudCBpbnRvIHRoZSBjb250ZW50IG9mIHRoZSBtb2RhbC5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9WaWV3KGNvbnRlbnRDb21wb25lbnRSZWYsIG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZyk7XG5cbiAgICAgICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYWNjZXNzIHRvIHRoZSBjb250ZW50IGNvbXBvbmVudCdzIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50Q29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gTW92ZSBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0byB0aGUgbWFpbiBtb2RhbCBlbGVtZW50LlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkb25lIHNvIHRoYXQgQ1NTIGNsYXNzZXMgYXBwbHkgY29ycmVjdGx5LiBJdCBkb2VzIHN0b3AgYW55IGN1c3RvbSBzdHlsZXMgZnJvbSB3b3JraW5nIGhvd2V2ZXIsXG4gICAgICAgICAgICAvLyBzbyBvdGhlciB3YXlzIG1heSBoYXZlIHRvIGJlIGludmVzdGlnYXRlZC5cbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50RWxlbWVudC5oYXNDaGlsZE5vZGVzKCkgJiYgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250ZW50RWxlbWVudC5maXJzdENoaWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGdlbmVyYXRlZCBjb21wb25lbnQncyAnZW1wdHkgc2hlbGwnIGZyb20gdGhlIERPTS5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuZGV0YWNoRnJvbURvY3VtZW50KGNvbnRlbnRDb21wb25lbnRSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIHRoZSBuZXcgbW9kYWwgY29tcG9uZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgLy8gVGhlIGNvbXBvbmVudCB3aWxsIG1vdmUgaXRzZWxmIHRvIHRoZSBkb2N1bWVudCBib2R5IGZvciBjb3JyZWN0bCBzdHlsaW5nLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvQXBwbGljYXRpb24oY29tcG9uZW50UmVmKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBnZW5lcmF0ZWQgbW9kYWwgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgICAgICBtb2RhbENvbXBvbmVudC5sb2FkQ29uZmlnKG1vZGFsKTtcblxuICAgICAgICAvLyBSZXR1cm4gYW4gaW5zdGFuY2Ugb2YgYW4gYEFjdGl2ZU1vZGFsYCwgc28gdGhlIHVzZXIgY2FuIGNvbnRyb2wgdGhlIG5ldyBtb2RhbC5cbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVNb2RhbChtb2RhbCwgY29tcG9uZW50UmVmKTtcbiAgICB9XG59XG4iXX0=