'use client';

import { useEffect } from 'react';

import type { RefObject } from 'react';

/**
 * Subscribes to a DOM event and performs cleanup on unmount.
 * By default the event listener will be attached to the `window`
 * object but you may provide a ref to a more specific element.
 */
export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: EventListenerOrEventListenerObject,
  elementRef?: RefObject<HTMLElement>,
): void {
  useEffect(() => {
    const ref = elementRef?.current;

    if (ref != null) {
      ref.addEventListener(type, listener);
    }
    if (typeof window !== 'undefined' && ref == null) {
      window.addEventListener(type, listener);
    }

    return () => {
      if (ref != null) {
        ref.removeEventListener(type, listener);
      } else {
        window.removeEventListener(type, listener);
      }
    };
  }, [elementRef, listener, type]);
}
