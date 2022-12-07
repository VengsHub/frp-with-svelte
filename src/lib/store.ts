import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// pass store in instead of initializing it here?
export const fromEvent = (element: HTMLElement | Document, eventName: string): Writable<Event> => {
  const store = writable<Event>();
  element.addEventListener(eventName, event => store.set(event));
  // unsubscribe?

  return store;
}
