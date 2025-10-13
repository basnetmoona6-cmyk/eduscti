/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as announcements from "../announcements.js";
import type * as getStduent from "../getStduent.js";
import type * as images from "../images.js";
import type * as news from "../news.js";
import type * as popup from "../popup.js";
import type * as registrationStatus from "../registrationStatus.js";
import type * as students from "../students.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  announcements: typeof announcements;
  getStduent: typeof getStduent;
  images: typeof images;
  news: typeof news;
  popup: typeof popup;
  registrationStatus: typeof registrationStatus;
  students: typeof students;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
