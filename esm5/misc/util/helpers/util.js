/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var KeyCode = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Escape: 27,
    Enter: 13,
    Space: 32,
    Backspace: 8,
};
export { KeyCode };
KeyCode[KeyCode.Left] = 'Left';
KeyCode[KeyCode.Up] = 'Up';
KeyCode[KeyCode.Right] = 'Right';
KeyCode[KeyCode.Down] = 'Down';
KeyCode[KeyCode.Escape] = 'Escape';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.Backspace] = 'Backspace';
/**
 * @record
 */
function IRecursiveObject() { }
/**
 * @record
 * @template T
 */
export function ITemplateRefContext() { }
/** @type {?} */
ITemplateRefContext.prototype.$implicit;
/**
 * @record
 */
export function IAugmentedElement() { }
/** @type {?} */
IAugmentedElement.prototype.closest;
var HandledEvent = /** @class */ (function () {
    function HandledEvent() {
    }
    return HandledEvent;
}());
export { HandledEvent };
if (false) {
    /** @type {?} */
    HandledEvent.prototype.eventHandled;
}
/**
 * @record
 */
export function IDynamicClasses() { }
/** @type {?} */
export var Util = {
    Array: {
        range: /**
         * @param {?} n
         * @param {?=} offset
         * @return {?}
         */
        function (n, offset) {
            if (offset === void 0) { offset = 0; }
            return Array(n).fill(0).map(function (z, i) { return i + offset; });
        },
        group: /**
         * @template T
         * @param {?} items
         * @param {?} groupLength
         * @return {?}
         */
        function (items, groupLength) {
            /** @type {?} */
            var mutable = items.slice(0);
            /** @type {?} */
            var groups = [];
            while (mutable.length > 0) {
                groups.push(mutable.splice(0, groupLength));
            }
            return groups;
        },
        groupBy: /**
         * @template T
         * @param {?} items
         * @param {?} field
         * @return {?}
         */
        function (items, field) {
            return items.reduce(function (groups, i) {
                /** @type {?} */
                var fieldValue = i[field].toString();
                groups[fieldValue] = groups[fieldValue] || [];
                groups[fieldValue].push(i);
                return groups;
            }, Object());
        },
        flatten: /**
         * @template T
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return items.reduce(function (is, i) { return is.concat(i); }, []);
        }
    },
    String: {
        padLeft: /**
         * @param {?} str
         * @param {?} length
         * @param {?} padding
         * @return {?}
         */
        function (str, length, padding) {
            /** @type {?} */
            var s = str;
            while (s.length < length) {
                s = padding + s;
            }
            return s;
        }
    },
    DOM: {
        parseBooleanAttribute: /**
         * @param {?} attributeValue
         * @return {?}
         */
        function (attributeValue) {
            /** @type {?} */
            var value = attributeValue;
            if (typeof attributeValue === "string") {
                value = true;
            }
            return value;
        }
    },
    Object: {
        readValue: /**
         * @template T, U
         * @param {?} object
         * @param {?=} path
         * @return {?}
         */
        function (object, path) {
            if (!path) {
                return /** @type {?} */ ((object));
            }
            /** @type {?} */
            var recursed;
            for (var i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = (/** @type {?} */ ((object)))[p[i]];
            }
            return /** @type {?} */ ((recursed));
        }
    },
    Math: {
        round: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.round(r / n) * n;
        },
        roundUp: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.ceil(r / n) * n;
        },
        roundDown: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            return Math.floor(r / n) * n;
        },
        mod: /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        function (r, n) {
            /** @type {?} */
            var rem = r % n;
            if (rem < 0) {
                return rem + n;
            }
            return rem;
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRUksUUFBUztJQUNULE1BQU87SUFDUCxTQUFVO0lBQ1YsUUFBUztJQUVULFVBQVc7SUFDWCxTQUFVO0lBRVYsU0FBVTtJQUNWLFlBQWE7OztnQkFUYixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsS0FBSztnQkFDTCxJQUFJO2dCQUVKLE1BQU07Z0JBQ04sS0FBSztnQkFFTCxLQUFLO2dCQUNMLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLElBQUE7Ozt1QkF0QkE7SUF3QkMsQ0FBQTtBQUZELHdCQUVDOzs7Ozs7Ozs7O0FBTUQsV0FBYSxJQUFJLEdBQUc7SUFDaEIsS0FBSyxFQUFFO1FBQ0gsS0FBSzs7Ozs7UUFBTCxVQUFNLENBQVEsRUFBRSxNQUFpQjtZQUFqQix1QkFBQSxFQUFBLFVBQWlCO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsTUFBTSxFQUFWLENBQVUsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsS0FBSzs7Ozs7O1FBQUwsVUFBUyxLQUFTLEVBQUUsV0FBa0I7O1lBQ2xDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRS9CLElBQU0sTUFBTSxHQUFTLEVBQUUsQ0FBQztZQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakI7UUFDRCxPQUFPOzs7Ozs7UUFBUCxVQUFXLEtBQVMsRUFBRSxLQUFhO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNmLFVBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUNOLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakIsRUFDRCxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTzs7Ozs7UUFBUCxVQUFXLEtBQVc7WUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQyxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDcEQ7S0FDSjtJQUVELE1BQU0sRUFBRTtRQUNKLE9BQU87Ozs7OztRQUFQLFVBQVEsR0FBVSxFQUFFLE1BQWEsRUFBRSxPQUFjOztZQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNaO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDRCxxQkFBcUI7Ozs7UUFBckIsVUFBc0IsY0FBc0I7O1lBQ3hDLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQWMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsTUFBTSxFQUFFO1FBQ0osU0FBUzs7Ozs7O1FBQVQsVUFBZ0IsTUFBUSxFQUFFLElBQVk7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sb0JBQUMsTUFBYSxHQUFNO2FBQzdCOztZQUVELElBQUksUUFBUSxDQUE4QjtZQUUxQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNoRSxRQUFRLEdBQUcsb0JBQUMsTUFBYSxHQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsTUFBTSxvQkFBQyxRQUFlLEdBQU07U0FDL0I7S0FDSjtJQUVELElBQUksRUFBRTtRQUNGLEtBQUs7Ozs7O1FBQUwsVUFBTSxDQUFRLEVBQUUsQ0FBUTtZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTzs7Ozs7UUFBUCxVQUFRLENBQVEsRUFBRSxDQUFRO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxTQUFTOzs7OztRQUFULFVBQVUsQ0FBUSxFQUFFLENBQVE7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUNELEdBQUc7Ozs7O1FBQUgsVUFBSSxDQUFRLEVBQUUsQ0FBUTs7WUFDbEIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDZDtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEtleWJvYXJkIGtleWNvZGVzLlxuZXhwb3J0IGVudW0gS2V5Q29kZSB7XG4gICAgTGVmdCA9IDM3LFxuICAgIFVwID0gMzgsXG4gICAgUmlnaHQgPSAzOSxcbiAgICBEb3duID0gNDAsXG5cbiAgICBFc2NhcGUgPSAyNyxcbiAgICBFbnRlciA9IDEzLFxuXG4gICAgU3BhY2UgPSAzMixcbiAgICBCYWNrc3BhY2UgPSA4XG59XG5cbmludGVyZmFjZSBJUmVjdXJzaXZlT2JqZWN0IHsgW25hbWU6c3RyaW5nXTpJUmVjdXJzaXZlT2JqZWN0OyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7ICRpbXBsaWNpdDpUOyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1Z21lbnRlZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgICBjbG9zZXN0KHNlbGVjdG9yOnN0cmluZyk6SUF1Z21lbnRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBIYW5kbGVkRXZlbnQge1xuICAgIHB1YmxpYyBldmVudEhhbmRsZWQ6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHluYW1pY0NsYXNzZXMge1xuICAgIFtuYW1lOnN0cmluZ106dHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAgQXJyYXk6IHtcbiAgICAgICAgcmFuZ2UobjpudW1iZXIsIG9mZnNldDpudW1iZXIgPSAwKTpudW1iZXJbXSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkobikuZmlsbCgwKS5tYXAoKHosIGkpID0+IGkgKyBvZmZzZXQpO1xuICAgICAgICB9LFxuICAgICAgICBncm91cDxUPihpdGVtczpUW10sIGdyb3VwTGVuZ3RoOm51bWJlcik6VFtdW10ge1xuICAgICAgICAgICAgY29uc3QgbXV0YWJsZSA9IGl0ZW1zLnNsaWNlKDApO1xuXG4gICAgICAgICAgICBjb25zdCBncm91cHM6VFtdW10gPSBbXTtcbiAgICAgICAgICAgIHdoaWxlIChtdXRhYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChtdXRhYmxlLnNwbGljZSgwLCBncm91cExlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXBCeTxUPihpdGVtczpUW10sIGZpZWxkOmtleW9mIFQpOnsgW25hbWU6c3RyaW5nXTpUW10gfSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlPHsgW25hbWU6c3RyaW5nXTpUW10gfT4oXG4gICAgICAgICAgICAgICAgKGdyb3VwcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gaVtmaWVsZF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ZpZWxkVmFsdWVdID0gZ3JvdXBzW2ZpZWxkVmFsdWVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0ucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9iamVjdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmxhdHRlbjxUPihpdGVtczpUW11bXSk6VFtdIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKGlzLCBpKSA9PiBpcy5jb25jYXQoaSksIFtdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBTdHJpbmc6IHtcbiAgICAgICAgcGFkTGVmdChzdHI6c3RyaW5nLCBsZW5ndGg6bnVtYmVyLCBwYWRkaW5nOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgICAgIGxldCBzID0gc3RyO1xuICAgICAgICAgICAgd2hpbGUgKHMubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcyA9IHBhZGRpbmcgKyBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgRE9NOiB7XG4gICAgICAgIHBhcnNlQm9vbGVhbkF0dHJpYnV0ZShhdHRyaWJ1dGVWYWx1ZTpib29sZWFuKTpib29sZWFuIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE9iamVjdDoge1xuICAgICAgICByZWFkVmFsdWU8VCwgVT4ob2JqZWN0OlQsIHBhdGg/OnN0cmluZyk6VSB7XG4gICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0IGFzIGFueSBhcyBVO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVjdXJzZWQ6SVJlY3Vyc2l2ZU9iamVjdCB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdClbcFtpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWN1cnNlZCBhcyBhbnkgYXMgVTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBNYXRoOiB7XG4gICAgICAgIHJvdW5kKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kVXAocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICByb3VuZERvd24ocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgbW9kKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbSA9IHIgJSBuO1xuICAgICAgICAgICAgaWYgKHJlbSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVtICsgbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZW07XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19