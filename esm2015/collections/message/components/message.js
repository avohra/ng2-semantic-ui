/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TransitionController, Transition, TransitionDirection } from "../../../modules/transition/internal";
/**
 * @record
 */
export function IMessage() { }
if (false) {
    /**
     * @return {?}
     */
    IMessage.prototype.dismiss = function () { };
}
export class SuiMessage {
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
if (false) {
    /** @type {?} */
    SuiMessage.prototype.isDismissable;
    /** @type {?} */
    SuiMessage.prototype.onDismiss;
    /** @type {?} */
    SuiMessage.prototype.isDismissed;
    /** @type {?} */
    SuiMessage.prototype.transitionController;
    /** @type {?} */
    SuiMessage.prototype.transition;
    /** @type {?} */
    SuiMessage.prototype.transitionDuration;
    /** @type {?} */
    SuiMessage.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL21lc3NhZ2UvY29tcG9uZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU3Ryw4QkFFQzs7Ozs7SUFERyw2Q0FBZTs7QUFrQm5CLE1BQU07SUFvQkY7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ3JILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUFyREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7O0NBS2I7Z0JBQ0csTUFBTSxFQUFFLENBQUM7Ozs7O0NBS1osQ0FBQzthQUNEOzs7OzRCQUVJLEtBQUs7d0JBR0wsTUFBTSxTQUFDLFNBQVM7eUJBT2hCLEtBQUs7aUNBR0wsS0FBSztvQkFHTCxLQUFLLFNBQUMsT0FBTzs7OztJQWhCZCxtQ0FDNkI7O0lBRTdCLCtCQUMwQzs7SUFFMUMsaUNBQTJCOztJQUUzQiwwQ0FBaUQ7O0lBRWpELGdDQUN5Qjs7SUFFekIsd0NBQ2lDOztJQUVqQywyQkFDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZSB7XG4gICAgZGlzbWlzcygpOnZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tZXNzYWdlXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7IGNsYXNzIH19XCIgKm5nSWY9XCIhaXNEaXNtaXNzZWRcIiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPlxuICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNEaXNtaXNzYWJsZVwiIChjbGljayk9XCJkaXNtaXNzKClcIj48L2k+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEZpeCBmb3IgQ1NTIEJ1ZyAqL1xuLnVpLmljb24udmlzaWJsZS5tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNZXNzYWdlIGltcGxlbWVudHMgSU1lc3NhZ2Uge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzbWlzc2FibGU6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJkaXNtaXNzXCIpXG4gICAgcHVibGljIG9uRGlzbWlzczpFdmVudEVtaXR0ZXI8U3VpTWVzc2FnZT47XG5cbiAgICBwdWJsaWMgaXNEaXNtaXNzZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBJbnB1dChcImNsYXNzXCIpXG4gICAgcHVibGljIGNsYXNzOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzRGlzbWlzc2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8U3VpTWVzc2FnZT4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzbWlzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcImZhZGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAzMDA7XG5cbiAgICAgICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc21pc3MoKTp2b2lkIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzbWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQodGhpcyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=