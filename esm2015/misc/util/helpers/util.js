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
if (false) {
    /** @type {?} */
    ITemplateRefContext.prototype.$implicit;
}
/**
 * @record
 */
export function IAugmentedElement() { }
if (false) {
    /**
     * @param {?} selector
     * @return {?}
     */
    IAugmentedElement.prototype.closest = function (selector) { };
}
export class HandledEvent {
}
if (false) {
    /** @type {?} */
    HandledEvent.prototype.eventHandled;
}
/**
 * @record
 */
export function IDynamicClasses() { }
/** @type {?} */
export const Util = {
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
                return (/** @type {?} */ ((/** @type {?} */ (object))));
            }
            /** @type {?} */
            let recursed = (/** @type {?} */ ((/** @type {?} */ (object))));
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = ((/** @type {?} */ ((/** @type {?} */ (recursed)))))[p[i]];
            }
            return (/** @type {?} */ ((/** @type {?} */ (recursed))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRUksUUFBUztJQUNULE1BQU87SUFDUCxTQUFVO0lBQ1YsUUFBUztJQUVULFVBQVc7SUFDWCxTQUFVO0lBRVYsU0FBVTtJQUNWLFlBQWE7Ozs7Ozs7Ozs7Ozs7O0FBR2pCLCtCQUE4RDs7Ozs7QUFFOUQseUNBQXdEOzs7SUFBZCx3Q0FBWTs7Ozs7QUFFdEQsdUNBRUM7Ozs7OztJQURHLDhEQUEyQzs7QUFHL0MsTUFBTTtDQUVMOzs7SUFERyxvQ0FBNEI7Ozs7O0FBR2hDLHFDQUVDOztBQUVELE1BQU0sT0FBTyxJQUFJLEdBQUc7SUFDaEIsS0FBSyxFQUFFOzs7Ozs7UUFDSCxLQUFLLENBQUMsQ0FBUSxFQUFFLFNBQWdCLENBQUM7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7Ozs7Ozs7UUFDRCxLQUFLLENBQUksS0FBUyxFQUFFLFdBQWtCOztrQkFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztrQkFFeEIsTUFBTSxHQUFTLEVBQUU7WUFDdkIsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7Ozs7OztRQUNELE9BQU8sQ0FBSSxLQUFTLEVBQUUsS0FBYTtZQUMv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QUMsQ0FBUSxFQUFFLENBQVE7O2tCQUNaLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FDSjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gS2V5Ym9hcmQga2V5Y29kZXMuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBMZWZ0ID0gMzcsXG4gICAgVXAgPSAzOCxcbiAgICBSaWdodCA9IDM5LFxuICAgIERvd24gPSA0MCxcblxuICAgIEVzY2FwZSA9IDI3LFxuICAgIEVudGVyID0gMTMsXG5cbiAgICBTcGFjZSA9IDMyLFxuICAgIEJhY2tzcGFjZSA9IDhcbn1cblxuaW50ZXJmYWNlIElSZWN1cnNpdmVPYmplY3QgeyBbbmFtZTpzdHJpbmddOklSZWN1cnNpdmVPYmplY3Q7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHsgJGltcGxpY2l0OlQ7IH1cblxuZXhwb3J0IGludGVyZmFjZSBJQXVnbWVudGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNsb3Nlc3Qoc2VsZWN0b3I6c3RyaW5nKTpJQXVnbWVudGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEhhbmRsZWRFdmVudCB7XG4gICAgcHVibGljIGV2ZW50SGFuZGxlZDpib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljQ2xhc3NlcyB7XG4gICAgW25hbWU6c3RyaW5nXTp0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgICBBcnJheToge1xuICAgICAgICByYW5nZShuOm51bWJlciwgb2Zmc2V0Om51bWJlciA9IDApOm51bWJlcltdIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheShuKS5maWxsKDApLm1hcCgoeiwgaSkgPT4gaSArIG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwPFQ+KGl0ZW1zOlRbXSwgZ3JvdXBMZW5ndGg6bnVtYmVyKTpUW11bXSB7XG4gICAgICAgICAgICBjb25zdCBtdXRhYmxlID0gaXRlbXMuc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczpUW11bXSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKG11dGFibGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG11dGFibGUuc3BsaWNlKDAsIGdyb3VwTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9LFxuICAgICAgICBncm91cEJ5PFQ+KGl0ZW1zOlRbXSwgZmllbGQ6a2V5b2YgVCk6eyBbbmFtZTpzdHJpbmddOlRbXSB9IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2U8eyBbbmFtZTpzdHJpbmddOlRbXSB9PihcbiAgICAgICAgICAgICAgICAoZ3JvdXBzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBpW2ZpZWxkXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBncm91cHNbZmllbGRWYWx1ZV0gPSBncm91cHNbZmllbGRWYWx1ZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgT2JqZWN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBmbGF0dGVuPFQ+KGl0ZW1zOlRbXVtdKTpUW10ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoaXMsIGkpID0+IGlzLmNvbmNhdChpKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFN0cmluZzoge1xuICAgICAgICBwYWRMZWZ0KHN0cjpzdHJpbmcsIGxlbmd0aDpudW1iZXIsIHBhZGRpbmc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAgICAgbGV0IHMgPSBzdHI7XG4gICAgICAgICAgICB3aGlsZSAocy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzID0gcGFkZGluZyArIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBET006IHtcbiAgICAgICAgcGFyc2VCb29sZWFuQXR0cmlidXRlKGF0dHJpYnV0ZVZhbHVlOmJvb2xlYW4pOmJvb2xlYW4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgT2JqZWN0OiB7XG4gICAgICAgIHJlYWRWYWx1ZTxULCBVPihvYmplY3Q6VCwgcGF0aD86c3RyaW5nKTpVIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QgYXMgYW55IGFzIFU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWN1cnNlZCA9IG9iamVjdCBhcyBhbnkgYXMgSVJlY3Vyc2l2ZU9iamVjdDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHAgPSBwYXRoLnNwbGl0KFwiLlwiKSwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VkID0gKHJlY3Vyc2VkIGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0KVtwW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2VkIGFzIGFueSBhcyBVO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIE1hdGg6IHtcbiAgICAgICAgcm91bmQocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmRVcChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kRG93bihyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICBtb2QocjpudW1iZXIsIG46bnVtYmVyKTpudW1iZXIge1xuICAgICAgICAgICAgY29uc3QgcmVtID0gciAlIG47XG4gICAgICAgICAgICBpZiAocmVtIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW0gKyBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iXX0=