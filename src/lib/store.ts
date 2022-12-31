import { derived, readable, writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';

export const toReadable = (writable: Writable<any>): Readable<any> => derived(writable, w => w);

export const fromEvent = (element: HTMLElement|Document, eventName: string): Readable<Event> =>
    readable<Event>(undefined, (set) => {
      element.addEventListener(eventName, event => set(event));
      return element.removeEventListener(eventName, event => set(event));
    });
