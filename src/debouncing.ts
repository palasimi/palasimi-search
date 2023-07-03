// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2023 Levi Gruspe

type EventListener = (event: Event) => void;

// Debounces event listener.
export function debounce(fn: EventListener, delay = 500): EventListener {
  let timeout: number | null = null;
  return (event: Event) => {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      fn(event);
      timeout = null;
    }, delay);
  };
}
