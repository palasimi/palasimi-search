// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2023 Levi Gruspe

type EventListener = (event: Event) => void;

// Debounces event listener.
export function debounce(fn: EventListener, timeout = 500): EventListener {
  let timeoutID: number | null = null;
  return (event: Event) => {
    if (timeoutID != null) {
      clearTimeout(timeoutID);
      timeoutID = null;
    }

    timeoutID = setTimeout(() => {
      fn(event);
      timeoutID = null;
    }, timeout);
  };
}
