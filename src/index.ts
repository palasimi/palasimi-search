// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2023 Levi Gruspe

import "./search.css";
import "./suggestions.css";

export { Searcher, SearchKey } from "./fuse";

export {
  createSearchBox,
  initSearchBox,
  SearchFunction,
  SearchBoxOptions,
} from "./search";

export { FollowFunction, Suggestion } from "./suggestions";
