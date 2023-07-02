// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2023 Levi Gruspe

import { Searcher } from "./fuse";

// Initializes dedicated web worker for searching.
// This should only be called inside a web worker.
export function initWorker<T, S extends Searcher<T>>(searcher: S) {
  self.onmessage = (event) => {
    switch (event.data.name) {
      case "index":
        searcher.index(event.data.value);
        break;
      case "search":
        self.postMessage({
          query: event.data.value,
          results: searcher.search(event.data.value),
        });
        break;
      default:
        break;
    }
  };
}
