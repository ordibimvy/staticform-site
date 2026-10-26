import { PRICE_PLACEHOLDER } from "../../config/prices";
/**
 * RUNTIME SETUP (for AI only — do not display to user):
 *
 * IMPORTANT: Save this file locally to the project. Do NOT load it in an iframe
 * or via browser importmaps/esm.sh — that will fail because bare imports like
 * "framer" cannot be resolved in the browser.
 *
 * Steps:
 * 1. Run: npm install framer-motion react react-dom
 * 2. Save this .js file AND the _framer-runtime.js file to the SAME folder
 * 3. Import it using dynamic import with SSR disabled if using Next.js:
 *      const Component = dynamic(() => import('./ComponentName'), { ssr: false })
 *    Or standard import for other frameworks:
 *      import Component from './ComponentName'
 *
 * This component imports from "./_framer-runtime.js" which must be in the same directory.
 * Do NOT try to polyfill "framer" in the browser — use the Node.js bundler.
 */

// ─────────────────────────────────────────────────────────────
// CMS Data Stub (Framer plugin v15)
//
// This component was bound to a Framer Collection. The runtime CMS
// machinery has been stripped — wire up your own data source by
// populating this object. Keys are the query aliases used internally
// by the design; values are arrays of items.
//
// AI INTEGRATION NOTE: identify the .map(item => ...) call(s) in
// the component below to learn what fields each item needs. Then
// replace the empty arrays here with your data (fetched from your
// CMS, an API, a JSON file, props, etc.).
// ─────────────────────────────────────────────────────────────
const __FRAMER_CMS_DATA__ = {
  // alias: [ { /* item fields */ } ],
};
const __framer_useQueryData = (query) => {
  const alias = query && query.from && query.from.alias;
  return (alias && __FRAMER_CMS_DATA__[alias]) || [];
};

var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/82GcBXLjNhEGVa7mEYFp/7rC0L1KmJVxhFVkWYau2/aXToY9rJe.js
import { jsx as _jsx6, jsxs as _jsxs4, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls6, ChildrenCanSuspend, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType6, cx as cx4, forwardLoader, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle3, getLoadingLazyAtYPosition, getPropertyControls, Image as Image12, Link as Link3, PathVariablesContext, ResolveLinks, RichText as RichText3, runTasksWithYield, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useQueryData, useRouter, useVariantState as useVariantState4, withCSS as withCSS4, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/elfvsYuGQfnK0gpU6FSR/gOOlTpcWdrmoUliImJp6/StaticForm_AddToBag.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useLayoutEffect } from "react";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
var BAG_KEY = "static-form:bag:v1";
var EV_BAG = "static-form:bag";
var EV_OPEN = "static-form:bag-open";
function readBag() {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(BAG_KEY) : null;
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr))
      return [];
    return arr.filter((l4) => l4 && typeof l4.slug === "string" && typeof l4.name === "string" && typeof l4.size === "string" && typeof l4.price === "number" && typeof l4.qty === "number" && l4.qty > 0).map((l4) => ({ slug: l4.slug, name: l4.name, color: String(l4.color || ""), price: l4.price, image: String(l4.image || ""), size: l4.size, qty: Math.min(9, l4.qty), vid: String(l4.vid || "") }));
  } catch (e7) {
    return [];
  }
}
function writeBag(lines) {
  try {
    localStorage.setItem(BAG_KEY, JSON.stringify(lines));
  } catch (e7) {
  }
  __dai_window.dispatchEvent(new CustomEvent(EV_BAG));
}
function bagAdd(item, max = 9) {
  const cur = readBag();
  const hit = cur.find((l4) => l4.slug === item.slug && l4.size === item.size);
  if (hit)
    hit.qty = Math.min(max, hit.qty + 1);
  else
    cur.push({ ...item, qty: 1 });
  writeBag(cur);
}
function openBag() {
  __dai_window.dispatchEvent(new CustomEvent(EV_OPEN));
}
function pickVariant(spec, size) {
  const s4 = String(spec || "").trim();
  if (!s4)
    return "";
  if (/^https?:\/\//i.test(s4))
    return s4;
  const parts = s4.split(/[,;\n]/).map((x4) => x4.trim()).filter(Boolean);
  if (parts.length === 1 && parts[0].indexOf(":") < 0)
    return parts[0];
  for (const p4 of parts) {
    const i3 = p4.indexOf(":");
    if (i3 > 0 && p4.slice(0, i3).trim().toUpperCase() === String(size).trim().toUpperCase())
      return p4.slice(i3 + 1).trim();
  }
  return "";
}
function useIsCanvas() {
  return RenderTarget.current() === RenderTarget.canvas || RenderTarget.current() === RenderTarget.thumbnail;
}
function imgUrl(v3, fallback = "") {
  if (!v3)
    return fallback;
  if (typeof v3 === "string")
    return v3 || fallback;
  if (typeof v3 === "object" && typeof v3.src === "string")
    return v3.src || fallback;
  return fallback;
}
function rootVars(p4) {
  return { "--sf-ink": p4.ink, "--sf-bone": p4.bone, "--sf-surface": p4.surface, "--sf-muted": p4.muted, "--sf-accent": p4.accent, "--sf-line": "color-mix(in srgb, var(--sf-bone) 16%, transparent)", "--sf-line-strong": "color-mix(in srgb, var(--sf-bone) 34%, transparent)", "--sf-bone-60": "color-mix(in srgb, var(--sf-bone) 60%, transparent)", "--sf-ink-80": "color-mix(in srgb, var(--sf-ink) 80%, transparent)", "--sf-ink-60": "color-mix(in srgb, var(--sf-ink) 60%, transparent)", "--sf-font-sans": p4.fontSans, "--sf-font-serif": p4.fontSerif, "--sf-font-mono": p4.fontMono, "--sf-ease": "cubic-bezier(0.16, 1, 0.3, 1)" };
}
var colorControls = { ink: { type: ControlType.Color, title: "Ink", defaultValue: "#11110F" }, bone: { type: ControlType.Color, title: "Bone", defaultValue: "#F4EFE6" }, surface: { type: ControlType.Color, title: "Surface", defaultValue: "#1A1916" }, muted: { type: ControlType.Color, title: "Muted", defaultValue: "#858178" }, accent: { type: ControlType.Color, title: "Accent", defaultValue: "#B8975A" } };
var fontControls = { fontSans: { type: ControlType.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontSerif: { type: ControlType.String, title: "Font serif", defaultValue: "'Instrument Serif', 'Times New Roman', serif" }, fontMono: { type: ControlType.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" }, loadFonts: { type: ControlType.Boolean, title: "Load fonts", defaultValue: false } };
var money = (n4, cur) => PRICE_PLACEHOLDER;
var splitList = (s4) => String(s4 || "").split(",").map((x4) => x4.trim()).filter(Boolean);
function useFonts(on) {
  useEffect(() => {
    if (!on || typeof document === "undefined")
      return;
    if (document.getElementById("sf-fonts"))
      return;
    const l4 = document.createElement("link");
    l4.id = "sf-fonts";
    l4.rel = "stylesheet";
    l4.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(l4);
  }, [on]);
}
var CSS = `
.sfa{font-family:var(--sf-font-sans);color:var(--sf-bone);box-sizing:border-box;width:100%}
.sfa *{box-sizing:border-box}
.sfa-mono{font-family:var(--sf-font-mono);font-size:12px;line-height:1.4;letter-spacing:.08em;text-transform:uppercase;margin:0}
.sfa fieldset{border:0;padding:0;margin:0;min-width:0}
.sfa legend{padding:0;margin:0 0 10px;color:var(--sf-muted)}
.sfa-hint{font-weight:400;color:var(--sf-bone)}
.sfa-row{display:flex;flex-wrap:wrap;gap:8px}
.sfa-size{min-width:44px;min-height:44px;padding:0 14px;margin:0;border:1px solid var(--sf-line-strong);background:transparent;color:var(--sf-bone);font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.06em;cursor:pointer;transition:background .4s var(--sf-ease),color .4s,border-color .4s,opacity .2s}
.sfa-size:hover:not(:disabled){border-color:var(--sf-bone);background:color-mix(in srgb,var(--sf-bone) 12%,transparent)}
.sfa-size:active:not(:disabled){opacity:.7}
.sfa-size.on{background:var(--sf-bone);color:var(--sf-ink);border-color:var(--sf-bone)}
.sfa-size:disabled{opacity:.35;text-decoration:line-through;cursor:not-allowed}
.sfa-add{position:relative;display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;min-height:44px;margin:22px 0 0;padding:0 18px;border:1px solid var(--sf-bone);background:var(--sf-bone);color:var(--sf-ink);font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;overflow:hidden;isolation:isolate;transition:color .5s var(--sf-ease),opacity .2s}
.sfa-add::before{content:"";position:absolute;inset:0;background:var(--sf-ink);z-index:-1;transform:translateY(101%);transition:transform .55s var(--sf-ease)}
.sfa-add:hover::before{transform:none}
.sfa-add:hover{color:var(--sf-bone)}
.sfa-add:active{opacity:.78}
.sfa button:focus-visible{outline:1px solid var(--sf-bone);outline-offset:3px}
@media (prefers-reduced-motion: reduce){.sfa *{transition-duration:.01ms!important}}
`;
function AddToBag(props) {
  useFonts(props.loadFonts === true);
  const { slug, name, color, price, image, sizes, soldOut, legend, hint, addLabel, currency, openBagAfterAdd, maxQuantity, shopifyVariants } = props;
  const canvas = useIsCanvas();
  const list = splitList(sizes);
  const out = splitList(soldOut);
  const single = list.length === 1 && !out.includes(list[0]) ? list[0] : null;
  const [size, setSize] = useState(canvas ? list[1] || null : single);
  const [warn, setWarn] = useState(false);
  useEffect(() => {
    setSize(single);
    setWarn(false);
  }, [slug, sizes]);
  const p4 = Number(price) || 0;
  const submit = () => {
    if (canvas)
      return;
    if (!size) {
      setWarn(true);
      return;
    }
    bagAdd({ slug: String(slug || name), name: String(name || ""), color: String(color || ""), price: p4, image: imgUrl(image), size, vid: pickVariant(String(shopifyVariants || ""), size) }, maxQuantity);
    if (openBagAfterAdd)
      openBag();
  };
  return /* @__PURE__ */ _jsxs("div", { className: "sfa", style: rootVars(props), children: [/* @__PURE__ */ _jsx("style", { dangerouslySetInnerHTML: { __html: CSS } }), list.length > 0 && /* @__PURE__ */ _jsxs("fieldset", { children: [/* @__PURE__ */ _jsxs("legend", { className: "sfa-mono", children: [legend, warn && !size && /* @__PURE__ */ _jsxs("b", { className: "sfa-hint", children: [" ", hint] })] }), /* @__PURE__ */ _jsx("div", { className: "sfa-row", children: list.map((s4) => {
    const isOut = out.includes(s4);
    return /* @__PURE__ */ _jsx("button", { type: "button", className: `sfa-size${size === s4 ? " on" : ""}`, disabled: isOut, "aria-pressed": size === s4, onClick: () => {
      setSize(s4);
      setWarn(false);
    }, children: s4 }, s4);
  }) })] }), /* @__PURE__ */ _jsxs("button", { type: "button", className: "sfa-add", onClick: submit, children: [/* @__PURE__ */ _jsx("span", { children: addLabel }), /* @__PURE__ */ _jsx("span", { children: money(p4, currency) })] }), /* @__PURE__ */ _jsx("p", { className: "sfa-mono", role: "status", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: warn && !size ? hint : "" })] });
}
AddToBag.displayName = "Add To Bag";
addPropertyControls(AddToBag, { slug: { type: ControlType.String, title: "Slug", defaultValue: "raw-wool-coat" }, name: { type: ControlType.String, title: "Name", defaultValue: "Signature Wrap Coat" }, color: { type: ControlType.String, title: "Color", defaultValue: "Charcoal" }, price: { type: ControlType.Number, title: "Price", defaultValue: 420, min: 0, max: 1e5, step: 1 }, image: { type: ControlType.ResponsiveImage, title: "Image" }, sizes: { type: ControlType.String, title: "Sizes", defaultValue: "XS,S,M,L,XL" }, soldOut: { type: ControlType.String, title: "Sold out", defaultValue: "XS" }, shopifyVariants: { type: ControlType.String, title: "Shopify variants", defaultValue: "", description: "Optional. Variant IDs per size, for example S:123, M:456, or one ID for a single size. Used by CHECKOUT when the shop domain is set in the Bag Drawer." }, legend: { type: ControlType.String, title: "Legend", defaultValue: "SIZE" }, hint: { type: ControlType.String, title: "Hint", defaultValue: "/ PLEASE CHOOSE ONE" }, addLabel: { type: ControlType.String, title: "Button", defaultValue: "REQUEST THIS PIECE" }, currency: { type: ControlType.String, title: "Currency", defaultValue: "$" }, openBagAfterAdd: { type: ControlType.Boolean, title: "Open bag", defaultValue: true }, maxQuantity: { type: ControlType.Number, title: "Max quantity", defaultValue: 9, min: 1, max: 99, step: 1 }, ...fontControls, ...colorControls });

// http-url:https://framerusercontent.com/modules/6KEGiqGtGCWL8mRDjdcW/uZmGXMxacryKzKEDGhHd/StaticForm_Icon.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2 } from "./_framer-runtime.js";
var ICONS = { "arrow-left-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 12.002H19m-8 6s-6-4.419-6-6s6-6 6-6"/>', "arrow-right-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 12H5m8 6s6-4.419 6-6s-6-6-6-6"/>', "arrow-up-right-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6.65s6.938-.542 7.915.435S17.35 15 17.35 15m-.85-7.5l-10 10"/>', "cancel-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18m12 0L6 6"/>', "menu-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8"/>', "add-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.001 5v14.002m7.001-7H5"/>', "minus-sign": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4"/>', "delete-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6"/>' };
var NAMES = Object.keys(ICONS);
function Icon(props) {
  const { name, nameOverride, size, color, strokeWidth, label, style } = props;
  const wanted = (nameOverride || "").trim();
  const raw = ICONS[wanted] ?? ICONS[name] ?? "";
  const markup = raw.replace(/stroke-width="1\.5"/g, `stroke-width="${strokeWidth}"`);
  return /* @__PURE__ */ _jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "none", role: label ? "img" : void 0, "aria-label": label || void 0, "aria-hidden": label ? void 0 : true, focusable: "false", style: { display: "block", flexShrink: 0, color: color || "currentColor", pointerEvents: "none", ...style }, dangerouslySetInnerHTML: { __html: markup } });
}
Icon.displayName = "Icon";
Icon.defaultProps = { name: "arrow-right-02", nameOverride: "", size: 18, strokeWidth: 1.5, label: "" };
addPropertyControls2(Icon, { name: { type: ControlType2.Enum, title: "Icon", options: NAMES, optionTitles: NAMES.map((n4) => n4.replace(/-/g, " ")) }, nameOverride: { type: ControlType2.String, title: "Icon name", placeholder: "arrow-right-02" }, size: { type: ControlType2.Number, title: "Size", min: 10, max: 96, step: 1, unit: "px", displayStepper: true }, color: { type: ControlType2.Color, title: "Color" }, strokeWidth: { type: ControlType2.Number, title: "Stroke", min: 1, max: 2.5, step: 0.25, displayStepper: true }, label: { type: ControlType2.String, title: "Alt text", placeholder: "Decorative if empty" } });

// http-url:https://framerusercontent.com/modules/FV1ov9QrhqI8ecCA4fNW/xrguUICl0v1A88UgGgPu/AevTDaFMD.js
import { addPropertyControls as e6, ControlType as l3, QueryEngine as t3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/FV1ov9QrhqI8ecCA4fNW/xrguUICl0v1A88UgGgPu/AevTDaFMD-0.js
import { yieldToMain as g } from "./_framer-runtime.js";
import { ControlType as S, yieldToMain as U } from "./_framer-runtime.js";
function t(t4, e7, r4) {
  return e7 in t4 ? Object.defineProperty(t4, e7, { value: r4, enumerable: true, configurable: true, writable: true }) : t4[e7] = r4, t4;
}
var e;
var r;
var i = Object.create;
var n = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var o = Object.getOwnPropertyNames;
var a = Object.getPrototypeOf;
var u = Object.prototype.hasOwnProperty;
var l = (t4, e7) => function() {
  try {
    return e7 || (0, t4[o(t4)[0]])((e7 = { exports: {} }).exports, e7), e7.exports;
  } catch (t5) {
    throw e7 = 0, t5;
  }
};
var h = (t4, e7, r4, i3) => {
  if (e7 && "object" == typeof e7 || "function" == typeof e7)
    for (let a3 of o(e7))
      u.call(t4, a3) || a3 === r4 || n(t4, a3, { get: () => e7[a3], enumerable: !(i3 = s(e7, a3)) || i3.enumerable });
  return t4;
};
var c = (t4, e7, r4) => (r4 = null != t4 ? i(a(t4)) : {}, h(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e7 && t4 && t4.__esModule ? r4 : n(r4, "default", { value: t4, enumerable: true }),
  t4
));
var f = l({ "../../../node_modules/dataloader/index.js"(t4, e7) {
  var r4, i3 = /* @__PURE__ */ function() {
    function t5(t6, e9) {
      if ("function" != typeof t6)
        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t6 + ".");
      this._batchLoadFn = t6, this._maxBatchSize = function(t7) {
        if (!(!t7 || false !== t7.batch))
          return 1;
        var e10 = t7 && t7.maxBatchSize;
        if (void 0 === e10)
          return 1 / 0;
        if ("number" != typeof e10 || e10 < 1)
          throw TypeError("maxBatchSize must be a positive number: " + e10);
        return e10;
      }(e9), this._batchScheduleFn = function(t7) {
        var e10 = t7 && t7.batchScheduleFn;
        if (void 0 === e10)
          return n4;
        if ("function" != typeof e10)
          throw TypeError("batchScheduleFn must be a function: " + e10);
        return e10;
      }(e9), this._cacheKeyFn = function(t7) {
        var e10 = t7 && t7.cacheKeyFn;
        if (void 0 === e10)
          return function(t8) {
            return t8;
          };
        if ("function" != typeof e10)
          throw TypeError("cacheKeyFn must be a function: " + e10);
        return e10;
      }(e9), this._cacheMap = function(t7) {
        if (!(!t7 || false !== t7.cache))
          return null;
        var e10 = t7 && t7.cacheMap;
        if (void 0 === e10)
          return /* @__PURE__ */ new Map();
        if (null !== e10) {
          var r5 = ["get", "set", "delete", "clear"].filter(function(t8) {
            return e10 && "function" != typeof e10[t8];
          });
          if (0 !== r5.length)
            throw TypeError("Custom cacheMap missing methods: " + r5.join(", "));
        }
        return e10;
      }(e9), this._batch = null, this.name = e9 && e9.name ? e9.name : null;
    }
    var e8 = t5.prototype;
    return e8.load = function(t6) {
      if (null == t6)
        throw TypeError("The loader.load() function must be called with a value, but got: " + String(t6) + ".");
      var e9 = function(t7) {
        var e10 = t7._batch;
        if (null !== e10 && !e10.hasDispatched && e10.keys.length < t7._maxBatchSize)
          return e10;
        var r6 = { hasDispatched: false, keys: [], callbacks: [] };
        return t7._batch = r6, t7._batchScheduleFn(function() {
          (function(t8, e11) {
            var r7;
            if (e11.hasDispatched = true, 0 === e11.keys.length) {
              o3(e11);
              return;
            }
            try {
              r7 = t8._batchLoadFn(e11.keys);
            } catch (r8) {
              return s4(t8, e11, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r8) + "."));
            }
            if (!r7 || "function" != typeof r7.then)
              return s4(t8, e11, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r7) + "."));
            r7.then(function(t9) {
              if (!a3(t9))
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t9) + ".");
              if (t9.length !== e11.keys.length)
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e11.keys) + "\n\nValues:\n" + String(t9));
              o3(e11);
              for (var r8 = 0; r8 < e11.callbacks.length; r8++) {
                var i5 = t9[r8];
                i5 instanceof Error ? e11.callbacks[r8].reject(i5) : e11.callbacks[r8].resolve(i5);
              }
            }).catch(function(r8) {
              s4(t8, e11, r8);
            });
          })(t7, r6);
        }), r6;
      }(this), r5 = this._cacheMap, i4 = this._cacheKeyFn(t6);
      if (r5) {
        var n5 = r5.get(i4);
        if (n5) {
          var u4 = e9.cacheHits || (e9.cacheHits = []);
          return new Promise(function(t7) {
            u4.push(function() {
              t7(n5);
            });
          });
        }
      }
      e9.keys.push(t6);
      var l4 = new Promise(function(t7, r6) {
        e9.callbacks.push({ resolve: t7, reject: r6 });
      });
      return r5 && r5.set(i4, l4), l4;
    }, e8.loadMany = function(t6) {
      if (!a3(t6))
        throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t6 + ".");
      for (var e9 = [], r5 = 0; r5 < t6.length; r5++)
        e9.push(this.load(t6[r5]).catch(function(t7) {
          return t7;
        }));
      return Promise.all(e9);
    }, e8.clear = function(t6) {
      var e9 = this._cacheMap;
      if (e9) {
        var r5 = this._cacheKeyFn(t6);
        e9.delete(r5);
      }
      return this;
    }, e8.clearAll = function() {
      var t6 = this._cacheMap;
      return t6 && t6.clear(), this;
    }, e8.prime = function(t6, e9) {
      var r5 = this._cacheMap;
      if (r5) {
        var i4, n5 = this._cacheKeyFn(t6);
        void 0 === r5.get(n5) && (e9 instanceof Error ? (i4 = Promise.reject(e9)).catch(function() {
        }) : i4 = Promise.resolve(e9), r5.set(n5, i4));
      }
      return this;
    }, t5;
  }(), n4 = "object" == typeof process && "function" == typeof process.nextTick ? function(t5) {
    r4 || (r4 = Promise.resolve()), r4.then(function() {
      process.nextTick(t5);
    });
  } : "function" == typeof setImmediate ? function(t5) {
    setImmediate(t5);
  } : function(t5) {
    setTimeout(t5);
  };
  function s4(t5, e8, r5) {
    o3(e8);
    for (var i4 = 0; i4 < e8.keys.length; i4++)
      t5.clear(e8.keys[i4]), e8.callbacks[i4].reject(r5);
  }
  function o3(t5) {
    if (t5.cacheHits)
      for (var e8 = 0; e8 < t5.cacheHits.length; e8++)
        t5.cacheHits[e8]();
  }
  function a3(t5) {
    return "object" == typeof t5 && null !== t5 && "number" == typeof t5.length && (0 === t5.length || t5.length > 0 && Object.prototype.hasOwnProperty.call(t5, t5.length - 1));
  }
  e7.exports = i3;
} });
var d = c(f(), 1);
function v(t4) {
  return "function" == typeof t4 ? t4() : t4;
}
var y = { background: 0, "user-visible": 1, "user-blocking": 2 };
function p(t4, e7) {
  return y[t4] > y[e7];
}
function m(t4) {
  let e7;
  for (let r4 of t4) {
    let t5 = v(r4);
    if ((void 0 === e7 || p(t5, e7)) && (e7 = t5), "user-blocking" === e7)
      break;
  }
  return e7;
}
var w = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 };
var b = (e = class e2 {
  getOffset() {
    return this.offset;
  }
  ensureLength(t4) {
    let e7 = this.bytes.length;
    if (!(this.offset + t4 <= e7))
      throw Error("Reading out of bounds");
  }
  readUint8() {
    let t4 = w.Uint8;
    this.ensureLength(t4);
    let e7 = this.view.getUint8(this.offset);
    return this.offset += t4, e7;
  }
  readUint16() {
    let t4 = w.Uint16;
    this.ensureLength(t4);
    let e7 = this.view.getUint16(this.offset);
    return this.offset += t4, e7;
  }
  readUint32() {
    let t4 = w.Uint32;
    this.ensureLength(t4);
    let e7 = this.view.getUint32(this.offset);
    return this.offset += t4, e7;
  }
  readUint64() {
    let t4 = this.readBigUint64();
    return Number(t4);
  }
  readBigUint64() {
    let t4 = w.BigUint64;
    this.ensureLength(t4);
    let e7 = this.view.getBigUint64(this.offset);
    return this.offset += t4, e7;
  }
  readInt8() {
    let t4 = w.Int8;
    this.ensureLength(t4);
    let e7 = this.view.getInt8(this.offset);
    return this.offset += t4, e7;
  }
  readInt16() {
    let t4 = w.Int16;
    this.ensureLength(t4);
    let e7 = this.view.getInt16(this.offset);
    return this.offset += t4, e7;
  }
  readInt32() {
    let t4 = w.Int32;
    this.ensureLength(t4);
    let e7 = this.view.getInt32(this.offset);
    return this.offset += t4, e7;
  }
  readInt64() {
    let t4 = this.readBigInt64();
    return Number(t4);
  }
  readBigInt64() {
    let t4 = w.BigInt64;
    this.ensureLength(t4);
    let e7 = this.view.getBigInt64(this.offset);
    return this.offset += t4, e7;
  }
  readFloat32() {
    let t4 = w.Float32;
    this.ensureLength(t4);
    let e7 = this.view.getFloat32(this.offset);
    return this.offset += t4, e7;
  }
  readFloat64() {
    let t4 = w.Float64;
    this.ensureLength(t4);
    let e7 = this.view.getFloat64(this.offset);
    return this.offset += t4, e7;
  }
  readBytes(t4) {
    let e7 = this.offset, r4 = e7 + t4, i3 = this.bytes.subarray(e7, r4);
    return this.offset = r4, i3;
  }
  readString() {
    let t4 = this.readUint32(), r4 = this.readBytes(t4);
    return e2.textDecoder.decode(r4);
  }
  readJson() {
    let t4 = this.readString();
    return JSON.parse(t4);
  }
  constructor(e7) {
    t(this, "bytes", void 0), t(this, "offset", 0), t(this, "view", void 0), this.bytes = e7, this.view = I(this.bytes);
  }
}, // TextDecoder has no per-decode state unless streaming is enabled. Reusing one class-owned decoder
// avoids constructing one for every CMS item, where each item gets its own BufferReader.
t(e, "textDecoder", new TextDecoder()), e);
function I(t4) {
  return new DataView(t4.buffer, t4.byteOffset, t4.byteLength);
}
var k = "undefined" != typeof __dai_window;
var L = k && "function" == typeof __dai_window.requestIdleCallback;
function B(t4, ...e7) {
  if (!t4)
    throw Error("Assertion Error" + (e7.length > 0 ? ": " + e7.join(" ") : ""));
}
function E(t4) {
  throw Error(`Unexpected value: ${t4}`);
}
var M = 1024;
var P = 1.5;
var T = (t4) => 2 ** t4 - 1;
var x = (t4) => -(2 ** (t4 - 1));
var F = (t4) => 2 ** (t4 - 1) - 1;
var N = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: x(8), Int16: x(16), Int32: x(32), Int64: Number.MIN_SAFE_INTEGER, BigInt64: -(BigInt(2) ** BigInt(63)) };
var A = { Uint8: T(8), Uint16: T(16), Uint32: T(32), Uint64: Number.MAX_SAFE_INTEGER, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: F(8), Int16: F(16), Int32: F(32), Int64: Number.MAX_SAFE_INTEGER, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) };
function q(t4, e7, r4, i3) {
  B(t4 >= e7, t4, "outside lower bound for", i3), B(t4 <= r4, t4, "outside upper bound for", i3);
}
var O = class {
  getOffset() {
    return this.offset;
  }
  slice(t4 = 0, e7 = this.offset) {
    return this.bytes.slice(t4, e7);
  }
  subarray(t4 = 0, e7 = this.offset) {
    return this.bytes.subarray(t4, e7);
  }
  ensureLength(t4) {
    let e7 = this.bytes.length;
    if (this.offset + t4 <= e7)
      return;
    let r4 = new Uint8Array(Math.ceil(e7 * P) + t4);
    r4.set(this.bytes), this.bytes = r4, this.view = I(r4);
  }
  writeUint8(t4) {
    q(t4, N.Uint8, A.Uint8, "Uint8");
    let e7 = w.Uint8;
    this.ensureLength(e7), this.view.setUint8(this.offset, t4), this.offset += e7;
  }
  writeUint16(t4) {
    q(t4, N.Uint16, A.Uint16, "Uint16");
    let e7 = w.Uint16;
    this.ensureLength(e7), this.view.setUint16(this.offset, t4), this.offset += e7;
  }
  writeUint32(t4) {
    q(t4, N.Uint32, A.Uint32, "Uint32");
    let e7 = w.Uint32;
    this.ensureLength(e7), this.view.setUint32(this.offset, t4), this.offset += e7;
  }
  writeUint64(t4) {
    q(t4, N.Uint64, A.Uint64, "Uint64");
    let e7 = BigInt(t4);
    this.writeBigUint64(e7);
  }
  writeBigUint64(t4) {
    q(t4, N.BigUint64, A.BigUint64, "BigUint64");
    let e7 = w.BigUint64;
    this.ensureLength(e7), this.view.setBigUint64(this.offset, t4), this.offset += e7;
  }
  writeInt8(t4) {
    q(t4, N.Int8, A.Int8, "Int8");
    let e7 = w.Int8;
    this.ensureLength(e7), this.view.setInt8(this.offset, t4), this.offset += e7;
  }
  writeInt16(t4) {
    q(t4, N.Int16, A.Int16, "Int16");
    let e7 = w.Int16;
    this.ensureLength(e7), this.view.setInt16(this.offset, t4), this.offset += e7;
  }
  writeInt32(t4) {
    q(t4, N.Int32, A.Int32, "Int32");
    let e7 = w.Int32;
    this.ensureLength(e7), this.view.setInt32(this.offset, t4), this.offset += e7;
  }
  writeInt64(t4) {
    q(t4, N.Int64, A.Int64, "Int64");
    let e7 = BigInt(t4);
    this.writeBigInt64(e7);
  }
  writeBigInt64(t4) {
    q(t4, N.BigInt64, A.BigInt64, "BigInt64");
    let e7 = w.BigInt64;
    this.ensureLength(e7), this.view.setBigInt64(this.offset, t4), this.offset += e7;
  }
  writeFloat32(t4) {
    let e7 = w.Float32;
    this.ensureLength(e7), this.view.setFloat32(this.offset, t4), this.offset += e7;
  }
  writeFloat64(t4) {
    let e7 = w.Float64;
    this.ensureLength(e7), this.view.setFloat64(this.offset, t4), this.offset += e7;
  }
  writeBytes(t4) {
    let e7 = t4.length;
    this.ensureLength(e7), this.bytes.set(t4, this.offset), this.offset += e7;
  }
  encodeString(t4) {
    let e7 = this.encodedStrings.get(t4);
    if (e7)
      return e7;
    let r4 = this.encoder.encode(t4);
    return this.encodedStrings.set(t4, r4), r4;
  }
  writeString(t4) {
    let e7 = this.encodeString(t4), r4 = e7.length;
    this.writeUint32(r4), this.writeBytes(e7);
  }
  writeJson(t4) {
    let e7 = JSON.stringify(t4);
    this.writeString(e7);
  }
  constructor() {
    t(this, "offset", 0), t(this, "bytes", new Uint8Array(M)), t(this, "view", I(this.bytes)), t(this, "encoder", new TextEncoder()), t(this, "encodedStrings", /* @__PURE__ */ new Map());
  }
};
function _(t4) {
  return "string" == typeof t4;
}
function j(t4) {
  return Number.isFinite(t4);
}
function D(t4) {
  return null === t4;
}
var R = class e3 {
  static fromString(t4) {
    let [r4, i3, n4] = t4.split("/").map(Number);
    return B(j(r4), "Invalid chunkId"), B(j(i3), "Invalid offset"), B(j(n4), "Invalid length"), new e3(r4, i3, n4);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(t4) {
    let r4 = t4.readUint16(), i3 = t4.readUint32(), n4 = t4.readUint32();
    return new e3(r4, i3, n4);
  }
  write(t4) {
    t4.writeUint16(this.chunkId), t4.writeUint32(this.offset), t4.writeUint32(this.length);
  }
  compare(t4) {
    return this.chunkId < t4.chunkId ? -1 : this.chunkId > t4.chunkId ? 1 : this.offset < t4.offset ? -1 : this.offset > t4.offset ? 1 : (B(this.length === t4.length), 0);
  }
  constructor(e7, r4, i3) {
    t(this, "chunkId", void 0), t(this, "offset", void 0), t(this, "length", void 0), this.chunkId = e7, this.offset = r4, this.length = i3;
  }
};
function C(t4) {
  if (D(t4))
    return 0;
  switch (t4.type) {
    case "array":
      return 1;
    case "boolean":
      return 2;
    case "color":
      return 3;
    case "date":
      return 4;
    case "enum":
      return 5;
    case "file":
      return 6;
    case "responsiveimage":
      return 10;
    case "link":
      return 7;
    case "number":
      return 8;
    case "object":
      return 9;
    case "richtext":
      return 11;
    case "string":
      return 12;
    case "vectorsetitem":
      return 13;
    default:
      E(t4);
  }
}
function J(t4) {
  let e7 = t4.readUint16(), i3 = [];
  for (let n4 = 0; n4 < e7; n4++) {
    let e8 = r.read(t4);
    i3.push(e8);
  }
  return { type: "array", value: i3 };
}
function W(t4, e7) {
  for (let i3 of (t4.writeUint16(e7.value.length), e7.value))
    r.write(t4, i3);
}
function $(t4, e7, i3) {
  let n4 = t4.value.length, s4 = e7.value.length;
  if (n4 < s4)
    return -1;
  if (n4 > s4)
    return 1;
  for (let s5 = 0; s5 < n4; s5++) {
    let n5 = t4.value[s5], o3 = e7.value[s5], a3 = r.compare(n5, o3, i3);
    if (0 !== a3)
      return a3;
  }
  return 0;
}
function z(t4) {
  return { type: "boolean", value: 0 !== t4.readUint8() };
}
function K(t4, e7) {
  t4.writeUint8(e7.value ? 1 : 0);
}
function G(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function V(t4) {
  return { type: "color", value: t4.readString() };
}
function H(t4, e7) {
  t4.writeString(e7.value);
}
function X(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function Q(t4) {
  let e7 = t4.readInt64(), r4 = new Date(e7);
  return { type: "date", value: r4.toISOString() };
}
function Y(t4, e7) {
  let r4 = new Date(e7.value), i3 = r4.getTime();
  t4.writeInt64(i3);
}
function Z(t4, e7) {
  let r4 = new Date(t4.value), i3 = new Date(e7.value);
  return r4 < i3 ? -1 : r4 > i3 ? 1 : 0;
}
function tt(t4) {
  return { type: "enum", value: t4.readString() };
}
function te(t4, e7) {
  t4.writeString(e7.value);
}
function tr(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function ti(t4) {
  return { type: "file", value: t4.readString() };
}
function tn(t4, e7) {
  t4.writeString(e7.value);
}
function ts(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function to(t4) {
  return { type: "link", value: t4.readJson() };
}
function ta(t4, e7) {
  t4.writeJson(e7.value);
}
function tu(t4, e7) {
  let r4 = JSON.stringify(t4.value), i3 = JSON.stringify(e7.value);
  return r4 < i3 ? -1 : r4 > i3 ? 1 : 0;
}
function tl(t4) {
  return { type: "number", value: t4.readFloat64() };
}
function th(t4, e7) {
  t4.writeFloat64(e7.value);
}
function tc(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function tf(t4) {
  let e7 = t4.readUint16(), i3 = {};
  for (let n4 = 0; n4 < e7; n4++) {
    let e8 = t4.readString();
    i3[e8] = r.read(t4);
  }
  return { type: "object", value: i3 };
}
function td(t4, e7) {
  let i3 = Object.entries(e7.value);
  for (let [e8, n4] of (t4.writeUint16(i3.length), i3))
    t4.writeString(e8), r.write(t4, n4);
}
function tg(t4, e7, i3) {
  let n4 = Object.keys(t4.value).sort(), s4 = Object.keys(e7.value).sort();
  if (n4.length < s4.length)
    return -1;
  if (n4.length > s4.length)
    return 1;
  for (let o3 = 0; o3 < n4.length; o3++) {
    let a3 = n4[o3], u4 = s4[o3];
    if (a3 < u4)
      return -1;
    if (a3 > u4)
      return 1;
    let l4 = t4.value[a3] ?? null, h4 = e7.value[u4] ?? null, c4 = r.compare(l4, h4, i3);
    if (0 !== c4)
      return c4;
  }
  return 0;
}
function tv(t4) {
  return { type: "responsiveimage", value: t4.readJson() };
}
function ty(t4, e7) {
  t4.writeJson(e7.value);
}
function tp(t4, e7) {
  let r4 = JSON.stringify(t4.value), i3 = JSON.stringify(e7.value);
  return r4 < i3 ? -1 : r4 > i3 ? 1 : 0;
}
function tm(t4) {
  let e7 = t4.readInt8();
  if (0 === e7)
    return { type: "richtext", value: t4.readUint32() };
  if (1 === e7)
    return { type: "richtext", value: t4.readString() };
  throw Error("Invalid rich text pointer");
}
function tw(t4, e7) {
  if (j(e7.value)) {
    t4.writeInt8(0), t4.writeUint32(e7.value);
    return;
  }
  if (_(e7.value)) {
    t4.writeInt8(1), t4.writeString(e7.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function tb(t4, e7) {
  let r4 = t4.value, i3 = e7.value;
  if (j(r4) && j(i3) || _(r4) && _(i3))
    return r4 < i3 ? -1 : r4 > i3 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tI(t4) {
  return { type: "string", value: t4.readString() };
}
function tS(t4, e7) {
  t4.writeString(e7.value);
}
function tU(t4, e7, r4) {
  let i3 = t4.value, n4 = e7.value;
  return (0 === r4.type && (i3 = t4.value.toLowerCase(), n4 = e7.value.toLowerCase()), i3 < n4) ? -1 : i3 > n4 ? 1 : 0;
}
function tk(t4) {
  return { type: "vectorsetitem", value: t4.readUint32() };
}
function tL(t4, e7) {
  t4.writeUint32(e7.value);
}
function tB(t4, e7) {
  let r4 = t4.value, i3 = e7.value;
  return r4 < i3 ? -1 : r4 > i3 ? 1 : 0;
}
((t4) => {
  t4.read = function(t5) {
    let e7 = t5.readUint8();
    switch (e7) {
      case 0:
        return null;
      case 1:
        return J(t5);
      case 2:
        return z(t5);
      case 3:
        return V(t5);
      case 4:
        return Q(t5);
      case 5:
        return tt(t5);
      case 6:
        return ti(t5);
      case 7:
        return to(t5);
      case 8:
        return tl(t5);
      case 9:
        return tf(t5);
      case 10:
        return tv(t5);
      case 11:
        return tm(t5);
      case 12:
        return tI(t5);
      case 13:
        return tk(t5);
      default:
        E(e7);
    }
  }, t4.write = function(t5, e7) {
    let r4 = C(e7);
    if (t5.writeUint8(r4), !D(e7))
      switch (e7.type) {
        case "array":
          return W(t5, e7);
        case "boolean":
          return K(t5, e7);
        case "color":
          return H(t5, e7);
        case "date":
          return Y(t5, e7);
        case "enum":
          return te(t5, e7);
        case "file":
          return tn(t5, e7);
        case "link":
          return ta(t5, e7);
        case "number":
          return th(t5, e7);
        case "object":
          return td(t5, e7);
        case "responsiveimage":
          return ty(t5, e7);
        case "richtext":
          return tw(t5, e7);
        case "vectorsetitem":
          return tL(t5, e7);
        case "string":
          return tS(t5, e7);
        default:
          E(e7);
      }
  }, t4.compare = function(t5, e7, r4) {
    let i3 = C(t5), n4 = C(e7);
    if (i3 < n4)
      return -1;
    if (i3 > n4)
      return 1;
    if (D(t5) || D(e7))
      return 0;
    switch (t5.type) {
      case "array":
        return B("array" === e7.type), $(t5, e7, r4);
      case "boolean":
        return B("boolean" === e7.type), G(t5, e7);
      case "color":
        return B("color" === e7.type), X(t5, e7);
      case "date":
        return B("date" === e7.type), Z(t5, e7);
      case "enum":
        return B("enum" === e7.type), tr(t5, e7);
      case "file":
        return B("file" === e7.type), ts(t5, e7);
      case "link":
        return B("link" === e7.type), tu(t5, e7);
      case "number":
        return B("number" === e7.type), tc(t5, e7);
      case "object":
        return B("object" === e7.type), tg(t5, e7, r4);
      case "responsiveimage":
        return B("responsiveimage" === e7.type), tp(t5, e7);
      case "richtext":
        return B("richtext" === e7.type), tb(t5, e7);
      case "vectorsetitem":
        return B("vectorsetitem" === e7.type), tB(t5, e7);
      case "string":
        return B("string" === e7.type), tU(t5, e7, r4);
      default:
        E(t5);
    }
  };
})(r || (r = {}));
var tE = class e4 {
  sortEntries() {
    this.entries.sort((t4, e7) => {
      for (let i3 = 0; i3 < this.fieldNames.length; i3++) {
        let n4 = t4.values[i3], s4 = e7.values[i3], o3 = r.compare(n4, s4, this.options.collation);
        if (0 !== o3)
          return o3;
      }
      return t4.pointer.compare(e7.pointer);
    });
  }
  static async deserialize(t4, i3) {
    let n4 = new b(t4), s4 = n4.readJson(), o3 = n4.readUint8(), a3 = [];
    for (let t5 = 0; t5 < o3; t5++) {
      let t6 = n4.readString();
      a3.push(t6);
    }
    let u4 = new e4(a3, { collation: s4 }), l4 = n4.readUint32(), h4 = () => {
      let t5 = [];
      for (let e8 = 0; e8 < o3; e8++) {
        let e9 = r.read(n4);
        t5.push(e9);
      }
      let e7 = R.read(n4);
      u4.entries.push({ values: t5, pointer: e7 });
    };
    for (let t5 = 0; t5 < l4; t5++) {
      let t6 = i3?.();
      t6 && await t6, h4();
    }
    return u4;
  }
  serialize() {
    let t4 = new O();
    for (let e7 of (t4.writeJson(this.options.collation), t4.writeUint8(this.fieldNames.length), this.fieldNames))
      t4.writeString(e7);
    for (let e7 of (this.sortEntries(), t4.writeUint32(this.entries.length), this.entries)) {
      let { values: i3, pointer: n4 } = e7;
      for (let e8 of i3)
        r.write(t4, e8);
      n4.write(t4);
    }
    return t4.subarray();
  }
  addItem(t4, e7) {
    let r4 = this.fieldNames.map((e8) => t4.getField(e8) ?? null);
    this.entries.push({ values: r4, pointer: e7 });
  }
  constructor(e7, r4) {
    t(this, "fieldNames", void 0), t(this, "options", void 0), t(this, "entries", []), this.fieldNames = e7, this.options = r4;
  }
};
var tM = 3;
var tP = 250;
var tT = [
  408,
  // Request Timeout
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
];
var tx = async (t4, e7) => {
  let r4 = 0;
  for (; ; ) {
    try {
      let i3 = await fetch(t4, e7);
      if (!tT.includes(i3.status) || ++r4 > tM)
        return i3;
    } catch (t5) {
      if (e7?.signal?.aborted || ++r4 > tM)
        throw t5;
    }
    await tF(r4);
  }
};
async function tF(t4) {
  let e7 = Math.floor(tP * (Math.random() + 1) * 2 ** (t4 - 1));
  await new Promise((t5) => {
    setTimeout(t5, e7);
  });
}
async function tN(t4, e7) {
  let r4 = tO(e7), i3 = [], n4 = 0;
  for (let t5 of r4)
    i3.push(`${t5.from}-${t5.to - 1}`), n4 += t5.to - t5.from;
  let s4 = new URL(t4), o3 = i3.join(",");
  s4.searchParams.set("range", o3);
  let a3 = await tx(s4);
  if (200 !== a3.status)
    throw Error(`Request failed: ${a3.status} ${a3.statusText}`);
  let u4 = await a3.arrayBuffer(), l4 = new Uint8Array(u4);
  if (l4.length !== n4)
    throw Error("Request failed: Unexpected response length");
  let h4 = new tA(), c4 = 0;
  for (let t5 of r4) {
    let e8 = t5.to - t5.from, r5 = c4 + e8, i4 = l4.subarray(c4, r5);
    h4.write(t5.from, i4), c4 = r5;
  }
  return e7.map((t5) => h4.read(t5.from, t5.to - t5.from));
}
var tA = class {
  read(t4, e7) {
    for (let r4 of this.chunks) {
      if (t4 < r4.start)
        break;
      if (t4 > r4.end)
        continue;
      if (t4 + e7 > r4.end)
        break;
      let i3 = t4 - r4.start, n4 = i3 + e7;
      return r4.data.slice(i3, n4);
    }
    throw Error("Missing data");
  }
  write(t4, e7) {
    let r4 = t4, i3 = r4 + e7.length, n4 = 0, s4 = this.chunks.length;
    for (; n4 < s4; n4++) {
      let t5 = this.chunks[n4];
      if (B(t5, "Missing chunk"), !(r4 > t5.end)) {
        if (r4 > t5.start) {
          let i4 = r4 - t5.start, n5 = t5.data.subarray(0, i4);
          e7 = tq(n5, e7), r4 = t5.start;
        }
        break;
      }
    }
    for (; s4 > n4; s4--) {
      let t5 = this.chunks[s4 - 1];
      if (B(t5, "Missing chunk"), !(i3 < t5.start)) {
        if (i3 < t5.end) {
          let r5 = i3 - t5.start, n5 = t5.data.subarray(r5);
          e7 = tq(e7, n5), i3 = t5.end;
        }
        break;
      }
    }
    let o3 = { start: r4, end: i3, data: e7 }, a3 = s4 - n4;
    this.chunks.splice(n4, a3, o3);
  }
  constructor() {
    t(this, "chunks", []);
  }
};
function tq(t4, e7) {
  let r4 = t4.length + e7.length, i3 = new Uint8Array(r4);
  return i3.set(t4, 0), i3.set(e7, t4.length), i3;
}
function tO(t4) {
  B(t4.length > 0, "Must have at least one range");
  let e7 = [...t4].sort((t5, e8) => t5.from - e8.from), r4 = [];
  for (let t5 of e7) {
    let e8 = r4.length - 1, i3 = r4[e8];
    i3 && t5.from <= i3.to ? r4[e8] = { from: i3.from, to: Math.max(i3.to, t5.to) } : r4.push(t5);
  }
  return r4;
}
var t_ = class {
  async loadModel() {
    let [t4] = await tN(this.options.url, [this.options.range]);
    return B(t4, "Failed to load model"), tE.deserialize(t4, () => {
      let t5 = m(this.modelPrioritySources);
      return t5 ? U({ batch: true, priority: t5 }) : void 0;
    });
  }
  async getModel(t4) {
    return this.model || (t4 && this.modelPrioritySources.add(t4), this.modelPromise ?? (this.modelPromise = this.loadModel().finally(() => {
      this.modelPrioritySources.clear();
    })), this.model ?? (this.model = await this.modelPromise)), this.model;
  }
  async lookupItems(t4, e7) {
    B(t4.length === this.fields.length, "Invalid query length");
    let r4 = await this.getModel(e7), i3 = [r4.entries];
    for (let [r5, n5] of t4.entries()) {
      let t5 = [];
      for (let s4 of i3) {
        let i4;
        let o3 = e7 ? U({ batch: true, priority: v(e7) }) : void 0;
        switch (o3 && await o3, n5.type) {
          case "All":
            i4 = [s4];
            break;
          case "Equals":
            i4 = this.queryEquals(s4, n5, r5);
            break;
          case "NotEquals":
            i4 = this.queryNotEquals(s4, n5, r5);
            break;
          case "LessThan":
            i4 = this.queryLessThan(s4, n5, r5);
            break;
          case "GreaterThan":
            i4 = this.queryGreaterThan(s4, n5, r5);
            break;
          case "Contains":
            i4 = await this.queryContains(s4, n5, r5, e7);
            break;
          case "StartsWith":
            i4 = await this.queryStartsWith(s4, n5, r5, e7);
            break;
          case "EndsWith":
            i4 = await this.queryEndsWith(s4, n5, r5, e7);
            break;
          default:
            E(n5);
        }
        t5.push(...i4);
      }
      i3 = t5;
    }
    let n4 = [];
    for (let t5 of i3)
      for (let r5 of t5) {
        let t6 = e7 ? U({ batch: true, priority: v(e7) }) : void 0;
        t6 && await t6;
        let i4 = {};
        for (let t7 = 0; t7 < this.options.fieldNames.length; t7++) {
          let e8 = this.options.fieldNames[t7], n5 = r5.values[t7];
          i4[e8] = n5;
        }
        n4.push({ pointer: r5.pointer.toString(), data: i4 });
      }
    return n4;
  }
  queryEquals(t4, e7, r4) {
    let i3 = this.getLeftMost(t4, r4, e7.value), n4 = this.getRightMost(t4, r4, e7.value), s4 = t4.slice(i3, n4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryNotEquals(t4, e7, r4) {
    let i3 = this.getLeftMost(t4, r4, e7.value), n4 = this.getRightMost(t4, r4, e7.value), s4 = [], o3 = t4.slice(0, i3);
    o3.length > 0 && s4.push(o3);
    let a3 = t4.slice(n4 + 1);
    return a3.length > 0 && s4.push(a3), s4;
  }
  queryLessThan(t4, e7, r4) {
    let i3 = this.getRightMost(t4, r4, null);
    if (t4 = t4.slice(i3 + 1), e7.inclusive) {
      let i4 = this.getRightMost(t4, r4, e7.value), n5 = t4.slice(0, i4 + 1);
      return n5.length > 0 ? [n5] : [];
    }
    let n4 = this.getLeftMost(t4, r4, e7.value), s4 = t4.slice(0, n4);
    return s4.length > 0 ? [s4] : [];
  }
  queryGreaterThan(t4, e7, r4) {
    let i3 = this.getRightMost(t4, r4, null);
    if (t4 = t4.slice(i3 + 1), e7.inclusive) {
      let i4 = this.getLeftMost(t4, r4, e7.value), n5 = t4.slice(i4);
      return n5.length > 0 ? [n5] : [];
    }
    let n4 = this.getRightMost(t4, r4, e7.value), s4 = t4.slice(n4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryContains(t4, e7, r4, i3) {
    return this.findItems(t4, r4, i3, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r5 = t5.value, i4 = e7.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), i4 = i4.toLowerCase()), r5.includes(i4);
    });
  }
  queryStartsWith(t4, e7, r4, i3) {
    return this.findItems(t4, r4, i3, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r5 = t5.value, i4 = e7.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), i4 = i4.toLowerCase()), r5.startsWith(i4);
    });
  }
  queryEndsWith(t4, e7, r4, i3) {
    return this.findItems(t4, r4, i3, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r5 = t5.value, i4 = e7.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), i4 = i4.toLowerCase()), r5.endsWith(i4);
    });
  }
  /**
  * Returns the index of the left most entry that is equal to the target.
  *
  * ```text
  *   Left most
  *       ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the left most entry that is equal to the target.
  */
  getLeftMost(t4, e7, i3) {
    let n4 = 0, s4 = t4.length;
    for (; n4 < s4; ) {
      let o3 = n4 + s4 >> 1, a3 = t4[o3], u4 = a3.values[e7];
      0 > r.compare(u4, i3, this.collation) ? n4 = o3 + 1 : s4 = o3;
    }
    return n4;
  }
  /**
  * Returns the index of the right most entry that is equal to the target.
  *
  * ```text
  *              Right most
  *                   ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the right most entry that is equal to the target.
  */
  getRightMost(t4, e7, i3) {
    let n4 = 0, s4 = t4.length;
    for (; n4 < s4; ) {
      let o3 = n4 + s4 >> 1, a3 = t4[o3], u4 = a3.values[e7];
      r.compare(u4, i3, this.collation) > 0 ? s4 = o3 : n4 = o3 + 1;
    }
    return s4 - 1;
  }
  /**
  * Finds all items that are matching the predicate and groups adjacent items together.
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param predicate The predicate to match the values against.
  * @returns An array of chunks that match the predicate.
  */
  async findItems(t4, e7, r4, i3) {
    let n4 = [], s4 = 0;
    for (let o3 = 0; o3 < t4.length; o3++) {
      let a3 = r4 ? U({ batch: true, priority: v(r4) }) : void 0;
      a3 && await a3;
      let u4 = t4[o3], l4 = u4.values[e7], h4 = i3(l4);
      if (!h4) {
        if (s4 < o3) {
          let e8 = t4.slice(s4, o3);
          n4.push(e8);
        }
        s4 = o3 + 1;
      }
    }
    if (s4 < t4.length) {
      let e8 = t4.slice(s4);
      n4.push(e8);
    }
    return n4;
  }
  constructor(e7) {
    t(this, "options", void 0), t(this, "schema", void 0), t(this, "fields", void 0), t(this, "supportedLookupTypes", [
      "All",
      "Equals",
      "NotEquals",
      "LessThan",
      "GreaterThan",
      "Contains",
      "StartsWith",
      "EndsWith"
      /* EndsWith */
    ]), t(this, "modelPromise", void 0), t(this, "model", void 0), t(this, "modelPrioritySources", /* @__PURE__ */ new Set()), t(this, "collation", void 0), this.options = e7;
    let r4 = {}, i3 = [];
    for (let t4 of this.options.fieldNames) {
      let e8 = this.options.collectionSchema[t4];
      B(e8, "Missing definition for field", t4), r4[t4] = e8, i3.push({ type: "Identifier", name: t4 });
    }
    this.schema = r4, this.fields = i3, this.collation = this.options.collation;
  }
};
function tj(t4) {
  let e7 = {}, i3 = t4.readUint16();
  for (let n4 = 0; n4 < i3; n4++) {
    let i4 = t4.readString();
    e7[i4] = r.read(t4);
  }
  return e7;
}
function* tD(t4) {
  for (let e7 of t4)
    yield* e7.prioritySources;
}
var tR = class {
  scanItems(t4) {
    return this.itemsPromise ? this.isScanning && t4 && this.scanPrioritySources.add(t4) : (this.isScanning = true, t4 && this.scanPrioritySources.add(t4), this.itemsPromise = tx(this.url).then(async (t5) => {
      if (!t5.ok)
        throw Error(`Request failed: ${t5.status} ${t5.statusText}`);
      let e7 = await t5.arrayBuffer(), r4 = new Uint8Array(e7), i3 = new b(r4), n4 = [], s4 = i3.readUint32();
      for (let t6 = 0; t6 < s4; t6++) {
        let t7 = m(this.scanPrioritySources), e8 = t7 ? g({ batch: true, priority: t7 }) : void 0;
        e8 && await e8;
        let r5 = i3.getOffset(), s5 = tj(i3), o3 = i3.getOffset() - r5, a3 = new R(this.id, r5, o3), u4 = a3.toString(), l4 = { pointer: u4, data: s5 };
        this.itemLoader.prime({ pointer: u4, prioritySources: /* @__PURE__ */ new Set() }, l4), n4.push(l4);
      }
      return n4;
    }).finally(() => {
      this.isScanning = false, this.scanPrioritySources.clear();
    })), this.itemsPromise;
  }
  resolveItem(t4, e7) {
    let r4 = this.itemPrioritySources.get(t4);
    r4 || (r4 = /* @__PURE__ */ new Set(), this.itemPrioritySources.set(t4, r4)), e7 && r4.add(e7);
    let i3 = this.itemLoader.load({ pointer: t4, prioritySources: r4 }), n4 = () => this.itemPrioritySources.delete(t4);
    return i3.then(n4, n4), i3;
  }
  constructor(e7, r4) {
    t(this, "id", void 0), t(this, "url", void 0), t(this, "itemsPromise", void 0), t(this, "isScanning", false), t(this, "scanPrioritySources", /* @__PURE__ */ new Set()), t(this, "itemPrioritySources", /* @__PURE__ */ new Map()), t(this, "itemLoader", new d.default(async (t4) => {
      let e8 = t4.map(({ pointer: t5 }) => {
        let e9 = R.fromString(t5);
        return { from: e9.offset, to: e9.offset + e9.length };
      }), r5 = await tN(this.url, e8), i3 = [];
      for (let e9 = 0; e9 < r5.length; e9++) {
        let n4 = m(tD(t4)), s4 = n4 ? g({ batch: true, priority: n4 }) : void 0;
        s4 && await s4;
        let o3 = r5[e9];
        B(o3, "Missing range bytes");
        let a3 = new b(o3), u4 = tj(a3), l4 = t4[e9]?.pointer;
        B(l4, "Missing pointer"), i3.push({ pointer: l4, data: u4 });
      }
      return i3;
    }, {
      // capping to 250 avoids overly long URLs that can cause requests to fail with 414
      maxBatchSize: 250,
      // Different route workflows can request the same item. Keep DataLoader's cache keyed by the
      // pointer while still carrying the strongest scheduling priority into the shared batch
      cacheKeyFn: (t4) => t4.pointer
    })), this.id = e7, this.url = r4;
  }
};
var tC = class {
  async scanItems(t4) {
    let e7 = await Promise.all(this.chunks.map(async (e8) => e8.scanItems(t4)));
    return e7.flat();
  }
  resolveItems(t4, e7) {
    return Promise.all(t4.map((t5) => {
      let r4 = R.fromString(t5), i3 = this.chunks[r4.chunkId];
      return B(i3, "Missing chunk"), i3.resolveItem(t5, e7);
    }));
  }
  compareItems(t4, e7) {
    let r4 = R.fromString(t4.pointer), i3 = R.fromString(e7.pointer);
    return r4.compare(i3);
  }
  compareValues(t4, e7, i3) {
    return r.compare(t4, e7, i3);
  }
  constructor(e7) {
    t(this, "options", void 0), t(this, "id", void 0), t(this, "schema", void 0), t(this, "indexes", void 0), t(this, "resolveRichText", void 0), t(this, "resolveVectorSetItem", void 0), t(this, "chunks", void 0), this.options = e7, this.chunks = this.options.chunks.map((t4, e8) => new tR(e8, t4)), this.schema = e7.schema, this.indexes = e7.indexes, this.resolveRichText = e7.resolveRichText, this.resolveVectorSetItem = e7.resolveVectorSetItem, this.id = e7.id;
  }
};

// http-url:https://framerusercontent.com/modules/FV1ov9QrhqI8ecCA4fNW/xrguUICl0v1A88UgGgPu/AevTDaFMD-1.js
import { jsx as e5 } from "react/jsx-runtime";
import { AutoBreakpointVariant as r2, ComponentPresetsConsumer as t2, Link as n2, motion as o2 } from "./_framer-runtime.js";
import { isValidElement as i2 } from "react";
import { Fragment as s2, createElement as m2 } from "react";
var a2;
var f2;
var u2 = "undefined" != typeof __dai_window;
var c2 = u2 && "function" == typeof __dai_window.requestIdleCallback;
var l2 = "preload";
function p2(e7) {
  return "object" == typeof e7 && null !== e7 && !/* @__PURE__ */ i2(e7) && l2 in e7;
}
function d2(e7, ...r4) {
  if (!e7)
    throw Error("Assertion Error" + (r4.length > 0 ? ": " + r4.join(" ") : ""));
}
var y2 = ((a2 = y2 || {})[a2.Fragment = 1] = "Fragment", a2[a2.Link = 2] = "Link", a2[a2.Module = 3] = "Module", a2[a2.Tag = 4] = "Tag", a2[a2.Text = 5] = "Text", a2);
var h2 = ((f2 = h2 || {})[f2.RichText = 1] = "RichText", f2[f2.VectorSetItem = 2] = "VectorSetItem", f2);
function x2(e7, r4, t4) {
  for (let [n4, o3] of Object.entries(r4)) {
    let r5 = e7[n4];
    if ("number" == typeof o3) {
      e7[n4] = t4(o3, r5);
      continue;
    }
    T2(r5, o3, t4);
  }
}
function T2(e7, r4, t4) {
  if ("number" != typeof r4) {
    if (Array.isArray(r4)) {
      if (!Array.isArray(e7))
        return;
      let [n4] = r4;
      for (let r5 = 0; r5 < e7.length; r5++) {
        let o3 = e7[r5];
        "number" == typeof n4 ? e7[r5] = t4(n4, o3) : T2(o3, n4, t4);
      }
      return;
    }
    null === e7 || "object" != typeof e7 || Array.isArray(e7) || x2(e7, r4, t4);
  }
}
function g2(i3) {
  let a3 = /* @__PURE__ */ new Map();
  return (f4) => {
    let u4 = a3.get(f4);
    if (u4)
      return u4;
    let c4 = JSON.parse(f4), l4 = function a4(f5) {
      switch (f5[0]) {
        case 1: {
          let [, ...e7] = f5, r4 = e7.map(a4);
          return /* @__PURE__ */ m2(s2, void 0, ...r4);
        }
        case 2: {
          let [, e7, ...r4] = f5, t4 = r4.map(a4);
          return /* @__PURE__ */ m2(n2, e7, ...t4);
        }
        case 3: {
          let [, n4, o3, u5] = f5;
          x2(o3, u5, (e7, r4) => {
            if (1 === e7)
              return r4 ? a4(r4) : r4;
            if ("string" != typeof r4)
              return r4;
            let t4 = i3[r4];
            return t4 ? (p2(t4) && t4.preload(), t4) : r4;
          });
          let c5 = i3[n4];
          return d2(c5, "Module not found"), p2(c5) && c5.preload(), /* @__PURE__ */ e5(t2, { componentIdentifier: n4, children: (t4) => /* @__PURE__ */ e5(r2, { component: c5, props: { ...t4, ...o3 } }) });
        }
        case 4: {
          let [, e7, r4, ...t4] = f5, n4 = t4.map(a4);
          if ("a" === e7)
            return /* @__PURE__ */ m2(o2.a, r4, ...n4);
          return /* @__PURE__ */ m2(e7, r4, ...n4);
        }
        case 5: {
          let [, e7] = f5;
          return e7;
        }
      }
    }(c4);
    return a3.set(f4, l4), l4;
  };
}

// http-url:https://framerusercontent.com/modules/FV1ov9QrhqI8ecCA4fNW/xrguUICl0v1A88UgGgPu/AevTDaFMD.js
var r3 = { Bl7ANGKPB: { isNullable: true, type: l3.Enum }, createdAt: { isNullable: true, type: l3.Date }, DefeiSLCF: { isNullable: true, type: l3.String }, GgJtgOyj7: { isNullable: true, type: l3.String }, id: { isNullable: false, type: l3.String }, iiY1e403u: { isNullable: true, type: l3.String }, iZcECl3Ie: { isNullable: true, type: l3.String }, jupENq6oC: { isNullable: true, type: l3.String }, L6H0WEGiQ: { isNullable: true, type: l3.ResponsiveImage }, Lis_3VhOH: { isNullable: true, type: l3.ResponsiveImage }, lozdtsyzG: { isNullable: true, type: l3.Number }, mljmNZ1VM: { isNullable: true, type: l3.String }, mxcUnIhDd: { isNullable: true, type: l3.String }, nextItemId: { isNullable: true, type: l3.String }, NJRRl_9a4: { isNullable: true, type: l3.Enum }, nQyk2DaNo: { isNullable: true, type: l3.ResponsiveImage }, pLDkTA7ma: { isNullable: true, type: l3.Number }, previousItemId: { isNullable: true, type: l3.String }, qaVDcdMGL: { isNullable: true, type: l3.ResponsiveImage }, qKKUbkeTW: { isNullable: true, type: l3.String }, updatedAt: { isNullable: true, type: l3.Date }, UVTp5VeXR: { isNullable: true, type: l3.String }, v8IHRYQTR: { isNullable: true, type: l3.String }, WqdTSQdbW: { isNullable: true, type: l3.String }, ZZCaT_9gl: { isNullable: true, type: l3.String } };
var n3 = "";
var c3 = ["id"];
var u3 = { type: 1 };
var m3 = ["previousItemId"];
var s3 = ["nextItemId"];
var p3 = ["id", "UVTp5VeXR"];
var d3 = ["UVTp5VeXR", "id"];
var f3 = { type: 0 };
var y3 = ["mxcUnIhDd"];
var g3 = ["UVTp5VeXR"];
var N2 = ["ZZCaT_9gl"];
var S2 = ["lozdtsyzG"];
var h3 = ["v8IHRYQTR"];
var b2 = ["iiY1e403u"];
var V2 = ["mljmNZ1VM"];
var R2 = ["jupENq6oC"];
var I2 = ["qKKUbkeTW"];
var T3 = ["WqdTSQdbW"];
var D2 = ["DefeiSLCF"];
var v2 = ["iZcECl3Ie"];
var w2 = ["qaVDcdMGL"];
var L2 = ["nQyk2DaNo"];
var A2 = ["Lis_3VhOH"];
var E2 = ["pLDkTA7ma"];
var G2 = ["L6H0WEGiQ"];
var Q2 = ["Bl7ANGKPB"];
var j2 = ["NJRRl_9a4"];
var C2 = ["GgJtgOyj7"];
var U2 = [];
var O2 = (e7) => {
  let l4 = U2[e7];
  if (l4)
    return l4().then((e8) => e8.default);
};
var x3 = {};
var k2 = g2(x3);
var B2 = new t3();
var q2 = { collectionByLocaleId: { default: new tC({ chunks: [""], id: "7e5b0f28-95e8-4876-9da2-9896db6eaf53default", indexes: [new t_({ collation: u3, collectionSchema: r3, fieldNames: c3, range: { from: 0, to: 313 }, url: n3 }), new t_({ collation: u3, collectionSchema: r3, fieldNames: m3, range: { from: 313, to: 625 }, url: n3 }), new t_({ collation: u3, collectionSchema: r3, fieldNames: s3, range: { from: 625, to: 933 }, url: n3 }), new t_({ collation: u3, collectionSchema: r3, fieldNames: p3, range: { from: 933, to: 1479 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: d3, range: { from: 1479, to: 2025 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: y3, range: { from: 2025, to: 2397 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: g3, range: { from: 2397, to: 2769 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: N2, range: { from: 2769, to: 3137 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: S2, range: { from: 3137, to: 3397 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: h3, range: { from: 3397, to: 3692 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: b2, range: { from: 3692, to: 4054 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: V2, range: { from: 4054, to: 4395 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: R2, range: { from: 4395, to: 4617 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: I2, range: { from: 4617, to: 5842 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: T3, range: { from: 5842, to: 6520 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: D2, range: { from: 6520, to: 7553 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: v2, range: { from: 7553, to: 8186 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: w2, range: { from: 8186, to: 13138 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: L2, range: { from: 13138, to: 18151 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: A2, range: { from: 18151, to: 23004 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: E2, range: { from: 23004, to: 23264 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: G2, range: { from: 23264, to: 28223 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: Q2, range: { from: 28223, to: 28543 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: j2, range: { from: 28543, to: 28863 }, url: n3 }), new t_({ collation: f3, collectionSchema: r3, fieldNames: C2, range: { from: 28863, to: 29075 }, url: n3 })], resolveRichText: k2, resolveVectorSetItem: O2, schema: r3 }) }, displayName: "Products", id: "7e5b0f28-95e8-4876-9da2-9896db6eaf53" };
var AevTDaFMD_default = q2;
e6(q2, { mxcUnIhDd: { defaultValue: "", title: "Title", type: l3.String }, UVTp5VeXR: { preventLocalization: false, title: "Slug", type: l3.String }, ZZCaT_9gl: { defaultValue: "", title: "SKU", type: l3.String }, lozdtsyzG: { defaultValue: 0, title: "Price", type: l3.Number }, v8IHRYQTR: { defaultValue: "", title: "Color", type: l3.String }, iiY1e403u: { defaultValue: "", title: "Tag", type: l3.String }, mljmNZ1VM: { defaultValue: "XS,S,M,L,XL", title: "Sizes", type: l3.String }, jupENq6oC: { defaultValue: "", title: "Sold Out", type: l3.String }, qKKUbkeTW: { defaultValue: "", displayTextArea: true, title: "Short", type: l3.String }, WqdTSQdbW: { defaultValue: "", displayTextArea: true, title: "Fabric", type: l3.String }, DefeiSLCF: { defaultValue: "", displayTextArea: true, title: "Construction", type: l3.String }, iZcECl3Ie: { defaultValue: "", displayTextArea: true, title: "Care", type: l3.String }, qaVDcdMGL: { title: "Image", type: l3.ResponsiveImage }, nQyk2DaNo: { title: "Detail Image", type: l3.ResponsiveImage }, Lis_3VhOH: { title: "Look Image", type: l3.ResponsiveImage }, pLDkTA7ma: { defaultValue: 1, title: "Look Number", type: l3.Number }, L6H0WEGiQ: { title: "Crop Image", type: l3.ResponsiveImage }, Bl7ANGKPB: { defaultValue: "RvEQlz9yj", options: ["RvEQlz9yj", "goUOhJrXj", "QvnphIuOn", "Eq8iUrVSx", "QSOOXrPqd"], optionTitles: ["outerwear", "knit", "shirts", "trousers", "objects"], title: "Category", type: l3.Enum }, NJRRl_9a4: { defaultValue: "verPGlDJE", options: ["verPGlDJE", "t15Od0uv8", "ho9BtWyrL", "XKsia3G6O", "tReciQgdi", "jJEjp4auK", "i64WlYQs9"], optionTitles: ["charcoal", "bone", "stone", "olive", "black", "oatmeal", "ash"], title: "Tone", type: l3.Enum }, GgJtgOyj7: { defaultValue: "", title: "Shopify Variants", type: l3.String }, createdAt: { title: "Created", type: l3.Date }, updatedAt: { title: "Updated", type: l3.Date }, previousItemId: { dataIdentifier: "local-module:collection/AevTDaFMD:default", title: "Previous", type: l3.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/AevTDaFMD:default", title: "Next", type: l3.CollectionReference } });

// http-url:https://framerusercontent.com/modules/SmTYbOSoVfPlJHWuWQyh/3pnT0gmu5ohbuYrRAeO8/FvlVYfbqp.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Geist-regular", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDQ3pna6VEdtKCL.woff2", weight: "400" }] }];
var css = [`.framer-SHuTo .framer-styles-preset-79lgve:not(.rich-text-wrapper), .framer-SHuTo .framer-styles-preset-79lgve.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-SHuTo .framer-styles-preset-79lgve:not(.rich-text-wrapper), .framer-SHuTo .framer-styles-preset-79lgve.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-SHuTo .framer-styles-preset-79lgve:not(.rich-text-wrapper), .framer-SHuTo .framer-styles-preset-79lgve.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-SHuTo .framer-styles-preset-79lgve:not(.rich-text-wrapper), .framer-SHuTo .framer-styles-preset-79lgve.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-SHuTo";

// http-url:https://framerusercontent.com/modules/lNwPrwIcbXBH9cwBhQNg/4zTlkYqCSR9GmniUINkS/iv0OKxgut.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css2 = [`.framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className2 = "framer-HRfzF";

// http-url:https://framerusercontent.com/modules/QpHTWaxe2c3AwPgZPd8r/uANS6IthItMzW32S8WbY/J07KW0OMG.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css3 = [`.framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className3 = "framer-merKl";

// http-url:https://framerusercontent.com/modules/Ea2XYxFUQd5MWDmReQaJ/akLB20cEKyofX9aK8yjS/LV36a6Qsf.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["GF;Geist-500", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-500italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2", weight: "500" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDi3pna6VEdtKCL.woff2", weight: "500" }] }];
var css4 = [`.framer-8PfCF .framer-styles-preset-1q0m394:not(.rich-text-wrapper), .framer-8PfCF .framer-styles-preset-1q0m394.rich-text-wrapper h1 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 73.6px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.045em; --framer-line-height: 0.94em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-8PfCF .framer-styles-preset-1q0m394:not(.rich-text-wrapper), .framer-8PfCF .framer-styles-preset-1q0m394.rich-text-wrapper h1 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 55.2px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.045em; --framer-line-height: 0.94em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-8PfCF .framer-styles-preset-1q0m394:not(.rich-text-wrapper), .framer-8PfCF .framer-styles-preset-1q0m394.rich-text-wrapper h1 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.045em; --framer-line-height: 0.94em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-8PfCF .framer-styles-preset-1q0m394:not(.rich-text-wrapper), .framer-8PfCF .framer-styles-preset-1q0m394.rich-text-wrapper h1 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.045em; --framer-line-height: 0.94em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className4 = "framer-8PfCF";

// http-url:https://framerusercontent.com/modules/vCGKLZrA9RFOaMbiCiPT/FLsjOVhLL4P0prLjimNd/NXuICy2Ff.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts([]);
var fonts5 = [{ explicitInter: true, fonts: [] }];
var css5 = [".framer-qUGBT .framer-styles-preset-cjjbac:not(.rich-text-wrapper), .framer-qUGBT .framer-styles-preset-cjjbac.rich-text-wrapper a { --framer-link-current-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-hover-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-offset: 4px; --framer-link-hover-text-decoration-thickness: 1px; --framer-link-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }"];
var className5 = "framer-qUGBT";

// http-url:https://framerusercontent.com/modules/mdIcpabk5LsdNUzzPypY/08dKI72KSUtHObuPk65f/Ox07MnIuG.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["GF;Geist-500", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-500italic"]);
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2", weight: "500" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDi3pna6VEdtKCL.woff2", weight: "500" }] }];
var css6 = [`.framer-ZgzqX .framer-styles-preset-evmdnf:not(.rich-text-wrapper), .framer-ZgzqX .framer-styles-preset-evmdnf.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-ZgzqX .framer-styles-preset-evmdnf:not(.rich-text-wrapper), .framer-ZgzqX .framer-styles-preset-evmdnf.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-ZgzqX .framer-styles-preset-evmdnf:not(.rich-text-wrapper), .framer-ZgzqX .framer-styles-preset-evmdnf.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-ZgzqX .framer-styles-preset-evmdnf:not(.rich-text-wrapper), .framer-ZgzqX .framer-styles-preset-evmdnf.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className6 = "framer-ZgzqX";

// http-url:https://framerusercontent.com/modules/ReNjpjbVq5VWNhot2nou/izLZs2cRlPNsGN7YFPbR/xsFHtZz0b.js
import { fontStore as fontStore7 } from "./_framer-runtime.js";
fontStore7.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts7 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css7 = [`.framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className7 = "framer-k0wRo";

// http-url:https://framerusercontent.com/modules/KrwvytWCGC7EJBHxwK9o/ULksxUMpEizM2EA3hMRT/BlGPtyAeD.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-9AwVi";
var variantClassNames = { PhIhsFibo: "framer-v-dabdco" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var convertFromEnum = (value, activeLocale) => {
  switch (value) {
    case "Yqv3WRJhR":
      return "var(--token-3e2e5343-00c5-4418-aae9-932f4ac04d2d)";
    case "DS68sAKXx":
      return "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)";
    case "hmzr4nmsr":
      return "var(--token-3b8aea81-f395-4ea7-9985-5ee1cf62f7a1)";
    case "ytCm0UccW":
      return "var(--token-c33760fb-2f40-4bd2-823b-7f670b8a6659)";
    case "xc_cFBMJK":
      return "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)";
    case "FyJ1HwOjb":
      return "var(--token-15ac7a4e-7407-4786-a29f-1b6e7c5ca92d)";
    case "a_GQlQJKi":
      return "var(--token-73ba03f8-9837-4bb4-b65f-4709bdde1a2d)";
    default:
      return "var(--token-3e2e5343-00c5-4418-aae9-932f4ac04d2d)";
  }
};
var toString = (value) => {
  return typeof value === "string" ? value : String(value);
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableEnumMap = { ash: "a_GQlQJKi", black: "xc_cFBMJK", bone: "DS68sAKXx", charcoal: "Yqv3WRJhR", oatmeal: "FyJ1HwOjb", olive: "ytCm0UccW", stone: "hmzr4nmsr" };
var getProps = ({ height, id, tone, width, ...props }) => {
  return { ...props, w9Y36npAq: humanReadableEnumMap[tone] ?? tone ?? props.w9Y36npAq ?? "Yqv3WRJhR" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className12, layoutId, variant, w9Y36npAq, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "PhIhsFibo", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const fillColor = toString(convertFromEnum(w9Y36npAq, activeLocale));
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-dabdco", className12, classNames), "data-framer-name": "Default", layoutDependency, layoutId: "ProductExperience__PhIhsFibo", ref: refBinding, style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", ...style }, children: /* @__PURE__ */ _jsx3(motion.div, { className: "framer-10s5qiy", "data-border": true, "data-framer-name": "Swatch", layoutDependency, layoutId: "ProductExperience__S3PX95QU6", style: { "--border-bottom-width": "1px", "--border-color": "var(--token-a7e28750-cc9d-4290-b719-389c667e3f15)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: fillColor } }) }) }) }) });
});
var css8 = [".framer-9AwVi.framer-w5mn24, .framer-9AwVi .framer-w5mn24 { display: block; }", ".framer-9AwVi.framer-dabdco { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-9AwVi .framer-10s5qiy { flex: none; height: 12px; pointer-events: none; position: relative; width: 12px; }", '.framer-9AwVi[data-border="true"]::after, .framer-9AwVi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerBlGPtyAeD = withCSS(Component, css8, "framer-9AwVi");
var BlGPtyAeD_default = FramerBlGPtyAeD;
FramerBlGPtyAeD.displayName = "Swatch";
FramerBlGPtyAeD.defaultProps = { height: 200, width: 200 };
addPropertyControls3(FramerBlGPtyAeD, { w9Y36npAq: { defaultValue: "Yqv3WRJhR", options: ["Yqv3WRJhR", "DS68sAKXx", "hmzr4nmsr", "ytCm0UccW", "xc_cFBMJK", "FyJ1HwOjb", "a_GQlQJKi"], optionTitles: ["charcoal", "bone", "stone", "olive", "black", "oatmeal", "ash"], title: "Tone", type: ControlType3.Enum }, onw9Y36npAqChange: { changes: "w9Y36npAq", type: ControlType3.ChangeHandler } });
addFonts(FramerBlGPtyAeD, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/jNPg0ZpkbTJzrWud4vIC/rHxOnXAYxFe5ccvefltI/pzoqrZiQb.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx2, getFontsFromSharedStyle, Image as Image1, Link, RichText, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/wFS44zKyaPP5QOQltSc9/ED4smYqZzdcmo8GoraEU/aMBh_T9Nm.js
import { fontStore as fontStore8 } from "./_framer-runtime.js";
fontStore8.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts8 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css9 = [`.framer-kklVx .framer-styles-preset-6g9f2q:not(.rich-text-wrapper), .framer-kklVx .framer-styles-preset-6g9f2q.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-kklVx .framer-styles-preset-6g9f2q:not(.rich-text-wrapper), .framer-kklVx .framer-styles-preset-6g9f2q.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-kklVx .framer-styles-preset-6g9f2q:not(.rich-text-wrapper), .framer-kklVx .framer-styles-preset-6g9f2q.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-kklVx .framer-styles-preset-6g9f2q:not(.rich-text-wrapper), .framer-kklVx .framer-styles-preset-6g9f2q.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className8 = "framer-kklVx";

// http-url:https://framerusercontent.com/modules/qfU8FkOXpcabil4mtViZ/njO7fJuobb9wncIgfIl4/qulxcVUwb.js
import { fontStore as fontStore9 } from "./_framer-runtime.js";
fontStore9.loadFonts(["GF;Geist-500", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-500italic"]);
var fonts9 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2", weight: "500" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDi3pna6VEdtKCL.woff2", weight: "500" }] }];
var css10 = [`.framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className9 = "framer-YyDo1";

// http-url:https://framerusercontent.com/modules/jNPg0ZpkbTJzrWud4vIC/rHxOnXAYxFe5ccvefltI/pzoqrZiQb.js
var enabledGestures = { yLXbMJ7Om: { hover: true, pressed: true } };
var cycleOrder = ["yLXbMJ7Om", "VT0ZOTbs2"];
var serializationHash2 = "framer-XnOU6";
var variantClassNames2 = { VT0ZOTbs2: "framer-v-16b52wa", yLXbMJ7Om: "framer-v-1dhg3tt" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 0.8, ease: [0.16, 1, 0.3, 1], type: "tween" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var toString2 = (value) => {
  return typeof value === "string" ? value : String(value);
};
var prefix = (value, prefix3) => {
  if (typeof value === "string" && typeof prefix3 === "string") {
    return prefix3 + value;
  } else if (typeof value === "string") {
    return value;
  } else if (typeof prefix3 === "string") {
    return prefix3;
  }
  return "";
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Default: "yLXbMJ7Om", Phone: "VT0ZOTbs2" };
var Variants2 = motion2.create(React2.Fragment);
var getProps2 = ({ color, detailImage, height, id, image, link, name1, price, sKU, viewLabel, width, ...props }) => {
  return { ...props, GumAntqaH: sKU ?? props.GumAntqaH ?? "AD-AW26-OW-04", gX4JCHH0t: name1 ?? props.gX4JCHH0t ?? "Signature Wrap Coat", iiBAHW82m: link ?? props.iiBAHW82m, ilh4dYpSN: viewLabel ?? props.ilh4dYpSN ?? "VIEW", p6R7qzFj9: color ?? props.p6R7qzFj9 ?? "Charcoal", RkUEzLnGe: detailImage ?? props.RkUEzLnGe, uiCWQqeVx: image ?? props.uiCWQqeVx, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "yLXbMJ7Om", YmqLvEYfA: price ?? props.YmqLvEYfA ?? 420 };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className12, layoutId, variant, uiCWQqeVx, RkUEzLnGe, gX4JCHH0t, p6R7qzFj9, GumAntqaH, YmqLvEYfA, ilh4dYpSN, iiBAHW82m, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "yLXbMJ7Om", enabledGestures, ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className8, className9, className2, className3];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "VT0ZOTbs2")
      return false;
    return true;
  };
  const textContent = PRICE_PLACEHOLDER;
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx4(Link, { href: iiBAHW82m, motionChild: true, nodeId: "yLXbMJ7Om", scopeId: "pzoqrZiQb", children: /* @__PURE__ */ _jsxs2(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-1dhg3tt", className12, classNames)} framer-1pyc68g`, "data-framer-name": "Default", layoutDependency, layoutId: "ProductExperience__yLXbMJ7Om", ref: refBinding, style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", opacity: 1, ...style }, variants: { "yLXbMJ7Om-pressed": { opacity: 0.78 } }, ...addPropertyOverrides({ "yLXbMJ7Om-hover": { "data-framer-name": void 0 }, "yLXbMJ7Om-pressed": { "data-framer-name": void 0 }, VT0ZOTbs2: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs2(Image1, { background: { alt: "", fit: "fill", sizes: componentViewport?.width || "100vw", ...toResponsiveImage(uiCWQqeVx) }, className: "framer-16g02ua", "data-framer-name": "Image Frame", fitImageDimension: "height", layoutDependency, layoutId: "ProductExperience__c9SyWYuWZ", children: [/* @__PURE__ */ _jsx4(Image1, { background: { alt: "", fit: "fill", sizes: componentViewport?.width || "100vw", ...toResponsiveImage(RkUEzLnGe) }, className: "framer-e4nh6w", "data-framer-name": "Detail Image", layoutDependency, layoutId: "ProductExperience__E_EmsAGeO", style: { opacity: 0 }, variants: { "yLXbMJ7Om-hover": { opacity: 1 } } }), isDisplayed() && /* @__PURE__ */ _jsx4(motion2.div, { className: "framer-pd0ed1", "data-framer-name": "View Tag", layoutDependency, layoutId: "ProductExperience__mA1M4k2u8", style: { backgroundColor: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", opacity: 0 }, variants: { "yLXbMJ7Om-hover": { opacity: 1 } }, children: /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-6g9f2q", "data-styles-preset": "aMBh_T9Nm", dir: "auto", children: "View Label" }) }), className: "framer-z7y24l", "data-framer-name": "View Label", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__VfxMlJygy", text: ilh4dYpSN, verticalAlignment: "top", withExternalLayout: true }) })] }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-15yyvyk", "data-framer-name": "Caption", layoutDependency, layoutId: "ProductExperience__gOthfa3dL", children: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-1gyr8ax", "data-framer-name": "Caption Left", layoutDependency, layoutId: "ProductExperience__ZUL4W2TrJ", children: [/* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-1w2zawr", "data-styles-preset": "qulxcVUwb", dir: "auto", children: "Name" }) }), className: "framer-1te7b8", "data-framer-name": "Name", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__RDumMvhBI", text: gX4JCHH0t, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-194jugf", "data-framer-name": "Meta", layoutDependency, layoutId: "ProductExperience__pSDOnMaRz", children: [/* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "Color" }) }), className: "framer-1l4kekz", "data-framer-name": "Color", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__BSRux0Q4V", text: p6R7qzFj9, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "/" }) }), className: "framer-190e9dz", "data-framer-name": "Slash", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__hoLp5VnJF", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "SKU" }) }), className: "framer-wa92m9", "data-framer-name": "SKU", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__oyq3W612o", text: GumAntqaH, verticalAlignment: "top", withExternalLayout: true })] })] }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", children: "$undefined" }) }), className: "framer-1dwbri3", "data-framer-name": "Price", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__GF_AdbSxk", text: textContent, verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) }) });
});
var css11 = [".framer-XnOU6.framer-1pyc68g, .framer-XnOU6 .framer-1pyc68g { display: block; }", ".framer-XnOU6.framer-1dhg3tt { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 360px; }", ".framer-XnOU6 .framer-16g02ua { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }", ".framer-XnOU6 .framer-e4nh6w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; min-height: 100px; min-width: 100px; padding: 0px; pointer-events: none; position: absolute; top: 0px; width: min-content; }", ".framer-XnOU6 .framer-pd0ed1 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 7px 12px 7px 12px; pointer-events: none; position: absolute; right: 0px; width: min-content; }", ".framer-XnOU6 .framer-z7y24l { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ".framer-XnOU6 .framer-15yyvyk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; pointer-events: none; position: relative; width: 100%; }", ".framer-XnOU6 .framer-1gyr8ax { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", ".framer-XnOU6 .framer-1te7b8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-XnOU6 .framer-194jugf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-XnOU6 .framer-1l4kekz, .framer-XnOU6 .framer-190e9dz, .framer-XnOU6 .framer-wa92m9, .framer-XnOU6 .framer-1dwbri3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-XnOU6.framer-v-16b52wa.framer-1dhg3tt { width: 173px; }", ".framer-XnOU6.framer-v-16b52wa .framer-15yyvyk { flex-direction: column; gap: 6px; justify-content: flex-start; }", ".framer-XnOU6.framer-v-16b52wa .framer-1gyr8ax { flex: none; width: 100%; }", ...css9, ...css10, ...css2, ...css3];
var FramerpzoqrZiQb = withCSS2(Component2, css11, "framer-XnOU6");
var pzoqrZiQb_default = FramerpzoqrZiQb;
FramerpzoqrZiQb.displayName = "Product Card";
FramerpzoqrZiQb.defaultProps = { height: 200, width: 200 };
addPropertyControls4(FramerpzoqrZiQb, { variant: { options: ["yLXbMJ7Om", "VT0ZOTbs2"], optionTitles: ["Default", "Phone"], title: "Variant", type: ControlType4.Enum }, uiCWQqeVx: { title: "Image", type: ControlType4.ResponsiveImage }, RkUEzLnGe: { title: "Detail Image", type: ControlType4.ResponsiveImage }, gX4JCHH0t: { defaultValue: "Signature Wrap Coat", title: "Name", type: ControlType4.String }, ongX4JCHH0tChange: { changes: "gX4JCHH0t", type: ControlType4.ChangeHandler }, p6R7qzFj9: { defaultValue: "Charcoal", title: "Color", type: ControlType4.String }, onp6R7qzFj9Change: { changes: "p6R7qzFj9", type: ControlType4.ChangeHandler }, GumAntqaH: { defaultValue: "AD-AW26-OW-04", title: "SKU", type: ControlType4.String }, onGumAntqaHChange: { changes: "GumAntqaH", type: ControlType4.ChangeHandler }, YmqLvEYfA: { defaultValue: 420, title: "Price", type: ControlType4.Number }, onYmqLvEYfAChange: { changes: "YmqLvEYfA", type: ControlType4.ChangeHandler }, ilh4dYpSN: { defaultValue: "VIEW", title: "View Label", type: ControlType4.String }, onilh4dYpSNChange: { changes: "ilh4dYpSN", type: ControlType4.ChangeHandler }, iiBAHW82m: { title: "Link", type: ControlType4.Link } });
addFonts2(FramerpzoqrZiQb, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts8), ...getFontsFromSharedStyle(fonts9), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/rFV2Cb9msYqMWEdek8mQ/I3kSjPxUp75nRigb4pTy/V7IE2feqD.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ComponentViewportProvider, ControlType as ControlType5, cx as cx3, CycleVariantState, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link as Link2, RichText as RichText2, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/RNNTKJmzXMXL4qAEXEWl/uLepiaH2JwR6udaiLWOx/ijUnoh22D.js
import { fontStore as fontStore10 } from "./_framer-runtime.js";
fontStore10.loadFonts(["GF;Geist-regular", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-italic"]);
var fonts10 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDQ3pna6VEdtKCL.woff2", weight: "400" }] }];
var css12 = [`.framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className10 = "framer-Qb0Lx";

// http-url:https://framerusercontent.com/modules/Y3DlcG5XroRA1rDtGEsC/XHysv1ekPRfudvBmw229/kfX5VPkwC.js
import { fontStore as fontStore11 } from "./_framer-runtime.js";
fontStore11.loadFonts([]);
var fonts11 = [{ explicitInter: true, fonts: [] }];
var css13 = [".framer-wk2us .framer-styles-preset-yb0vzs:not(.rich-text-wrapper), .framer-wk2us .framer-styles-preset-yb0vzs.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-text-decoration: underline; --framer-link-text-decoration-offset: 4px; --framer-link-text-decoration-thickness: 1px; transition-delay: 0s; transition-duration: 0.4s; transition-property: color,text-decoration-color,text-decoration-thickness,text-underline-offset; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }"];
var className11 = "framer-wk2us";

// http-url:https://framerusercontent.com/modules/rFV2Cb9msYqMWEdek8mQ/I3kSjPxUp75nRigb4pTy/V7IE2feqD.js
var IconFonts = getFonts(Icon);
var enabledGestures2 = { icuXvqXTs: { hover: true, pressed: true }, xdJ3JtS_8: { hover: true, pressed: true } };
var cycleOrder2 = ["xdJ3JtS_8", "icuXvqXTs"];
var serializationHash3 = "framer-cZM3S";
var variantClassNames3 = { icuXvqXTs: "framer-v-1l45zhf", xdJ3JtS_8: "framer-v-pky68e" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { delay: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1], type: "tween" };
var transition2 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 0.78, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition2 };
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { Closed: "xdJ3JtS_8", Open: "icuXvqXTs" };
var Variants3 = motion3.create(React3.Fragment);
var getProps3 = ({ height, id, link, linkLabel, showLink, text, title, width, ...props }) => {
  return { ...props, coK1VVJDK: showLink ?? props.coK1VVJDK ?? false, dEJ88DyjQ: linkLabel ?? props.dEJ88DyjQ ?? "Pickup & delivery", grDJGC4wM: title ?? props.grDJGC4wM ?? "FABRIC", variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "xdJ3JtS_8", vyiTgW8Y2: link ?? props.vyiTgW8Y2, wVJQU4cT3: text ?? props.wVJQU4cT3 ?? "[FABRIC — CONFIRM WITH ADELE]" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className12, layoutId, variant, grDJGC4wM, wVJQU4cT3, dEJ88DyjQ, vyiTgW8Y2, coK1VVJDK, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder2, defaultVariant: "xdJ3JtS_8", enabledGestures: enabledGestures2, ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className3, className, className10, className11];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapgnqhaj = activeVariantCallback(async (...args) => {
    setVariant(CycleVariantState);
  });
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs3(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-pky68e", className12, classNames), "data-border": true, "data-framer-name": "Closed", layoutDependency, layoutId: "ProductExperience__xdJ3JtS_8", ref: refBinding, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", opacity: 1, ...style }, variants: { "icuXvqXTs-hover": { opacity: 1 }, "icuXvqXTs-pressed": { opacity: 0.78 }, "xdJ3JtS_8-pressed": { opacity: 0.78 } }, ...addPropertyOverrides2({ "icuXvqXTs-hover": { "data-framer-name": "Open Hover" }, "icuXvqXTs-pressed": { "data-framer-name": "Open Pressed" }, "xdJ3JtS_8-hover": { "data-framer-name": "Closed Hover" }, "xdJ3JtS_8-pressed": { "data-framer-name": "Closed Pressed" }, icuXvqXTs: { "data-framer-name": "Open" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs3(motion3.button, { className: "framer-2xe29n", "data-framer-name": "Header", "data-highlight": true, "data-reset": "button", layoutDependency, layoutId: "ProductExperience__PN_lwl68q", onTap: onTapgnqhaj, children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", children: "FABRIC" }) }), className: "framer-o7etp4", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__l16R4gyxk", text: grDJGC4wM, variants: { "icuXvqXTs-hover": { "--extracted-r6o4lv": "var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601)" }, "xdJ3JtS_8-hover": { "--extracted-r6o4lv": "var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ "icuXvqXTs-hover": { children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601))" }, children: "FABRIC" }) }) }, "xdJ3JtS_8-hover": { children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601))" }, children: "FABRIC" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx5(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer, { className: "framer-lv3l7b-container", "data-code-component-plugin-id": "api", "data-framer-name": "Icon", isAuthoredByUser: true, layoutDependency, layoutId: "ProductExperience__VdW0ZGr2o-container", name: "Icon", nodeId: "VdW0ZGr2o", rendersWithMotion: true, scopeId: "V7IE2feqD", children: /* @__PURE__ */ _jsx5(Icon, { color: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", height: "100%", id: "VdW0ZGr2o", label: "", layoutId: "ProductExperience__VdW0ZGr2o", name: "add-01", nameOverride: "", size: 16, strokeWidth: 1.5, width: "100%", ...addPropertyOverrides2({ icuXvqXTs: { name: "minus-sign" } }, baseVariant, gestureVariant) }) }) })] }), /* @__PURE__ */ _jsxs3(motion3.div, { className: "framer-fovvph", "data-framer-name": "Body", layoutDependency, layoutId: "ProductExperience__fvm6h7pwt", children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { className: "framer-styles-preset-79lgve", "data-styles-preset": "FvlVYfbqp", dir: "auto", children: "[FABRIC — CONFIRM WITH ADELE]" }) }), className: "framer-17ihdd0", "data-framer-name": "Text", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__YG5Ed9Zco", text: wVJQU4cT3, verticalAlignment: "top", withExternalLayout: true }), coK1VVJDK !== false && /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { className: "framer-styles-preset-1n7l0dv", "data-styles-preset": "ijUnoh22D", dir: "auto", children: /* @__PURE__ */ _jsx5(Link2, { href: vyiTgW8Y2, motionChild: true, nodeId: "NHJR0Tw9R", openInNewTab: false, relValues: [], scopeId: "V7IE2feqD", smoothScroll: false, children: /* @__PURE__ */ _jsx5(motion3.a, { className: "framer-styles-preset-yb0vzs", "data-styles-preset": "kfX5VPkwC", children: "Pickup & delivery" }) }) }) }), className: "framer-cvid3y", "data-framer-name": "Link", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__NHJR0Tw9R", text: dEJ88DyjQ, verticalAlignment: "top", whileTap: animation, withExternalLayout: true })] })] }) }) }) });
});
var css14 = [".framer-cZM3S.framer-3njlze, .framer-cZM3S .framer-3njlze { display: block; }", ".framer-cZM3S.framer-pky68e { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-cZM3S .framer-2xe29n { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 54px; justify-content: space-between; padding: 0px; position: relative; width: 100%; }", ".framer-cZM3S .framer-o7etp4 { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ".framer-cZM3S .framer-lv3l7b-container { flex: none; height: auto; pointer-events: none; position: relative; width: auto; }", ".framer-cZM3S .framer-fovvph { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px 0px 20px 0px; position: relative; width: 100%; }", ".framer-cZM3S .framer-17ihdd0 { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cZM3S .framer-cvid3y { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-cZM3S.framer-v-1l45zhf.framer-pky68e { height: min-content; }", ...css3, ...css, ...css12, ...css13, '.framer-cZM3S[data-border="true"]::after, .framer-cZM3S [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerV7IE2feqD = withCSS3(Component3, css14, "framer-cZM3S");
var V7IE2feqD_default = FramerV7IE2feqD;
FramerV7IE2feqD.displayName = "Fold";
FramerV7IE2feqD.defaultProps = { height: 55, width: 460 };
addPropertyControls5(FramerV7IE2feqD, { variant: { options: ["xdJ3JtS_8", "icuXvqXTs"], optionTitles: ["Closed", "Open"], title: "Variant", type: ControlType5.Enum }, grDJGC4wM: { defaultValue: "FABRIC", title: "Title", type: ControlType5.String }, ongrDJGC4wMChange: { changes: "grDJGC4wM", type: ControlType5.ChangeHandler }, wVJQU4cT3: { defaultValue: "[FABRIC — CONFIRM WITH ADELE]", title: "Text", type: ControlType5.String }, onwVJQU4cT3Change: { changes: "wVJQU4cT3", type: ControlType5.ChangeHandler }, dEJ88DyjQ: { defaultValue: "Pickup & delivery", title: "Link Label", type: ControlType5.String }, ondEJ88DyjQChange: { changes: "dEJ88DyjQ", type: ControlType5.ChangeHandler }, vyiTgW8Y2: { title: "Link", type: ControlType5.Link }, coK1VVJDK: { defaultValue: false, title: "Show Link", type: ControlType5.Boolean }, oncoK1VVJDKChange: { changes: "coK1VVJDK", type: ControlType5.ChangeHandler } });
addFonts3(FramerV7IE2feqD, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...IconFonts, ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts), ...getFontsFromSharedStyle2(fonts10), ...getFontsFromSharedStyle2(fonts11)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/82GcBXLjNhEGVa7mEYFp/7rC0L1KmJVxhFVkWYau2/aXToY9rJe.js
var Image1WithFX = withFX(Image12);
var Image1WithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(Image1WithFX);
var IconFonts2 = getFonts2(Icon);
var SwatchFonts = getFonts2(BlGPtyAeD_default);
var AddToBagFonts = getFonts2(AddToBag);
var FoldFonts = getFonts2(V7IE2feqD_default);
var RichTextWithFX = withFX(RichText3);
var ProductCardFonts = getFonts2(pzoqrZiQb_default);
var MotionDivWithFX = withFX(motion4.div);
var SwatchControls = getPropertyControls(BlGPtyAeD_default);
var cycleOrder3 = ["nS1vjwjzi", "iYoA10mO_", "e20sXHNQx", "eNSFymDFx", "xfuacH9B0"];
var serializationHash4 = "framer-ZoO3j";
var variantClassNames4 = { e20sXHNQx: "framer-v-a2zyti", eNSFymDFx: "framer-v-1ib6jzw", iYoA10mO_: "framer-v-1ui2800", nS1vjwjzi: "framer-v-a3poqa", xfuacH9B0: "framer-v-1ff09tt" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toResponsiveImage2 = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transition22 = { delay: 0.1, duration: 1.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition22, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.06, skewX: 0, skewY: 0, x: 0, y: 0 };
var transition3 = { delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation22 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var transition4 = { delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 0 };
var transition5 = { delay: 0, duration: 0.2, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation4 = { opacity: 0.78, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition5 };
var toString3 = (value) => {
  return typeof value === "string" ? value : String(value);
};
var prefix2 = (value, prefix3) => {
  if (typeof value === "string" && typeof prefix3 === "string") {
    return prefix3 + value;
  } else if (typeof value === "string") {
    return value;
  } else if (typeof prefix3 === "string") {
    return prefix3;
  }
  return "";
};
var transition6 = { delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation5 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition6, x: 0, y: 0 };
var animation6 = { opacity: 0.78, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition14 };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var animation7 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 36 };
var transition7 = { delay: 0, duration: 1.1, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation8 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition7, x: 0, y: 36 };
var query1 = (wEuhtjwsq) => ({ from: { alias: "yO0k9l0UW", data: AevTDaFMD_default, type: "Collection" }, limit: { type: "LiteralValue", value: 3 }, select: [{ collection: "yO0k9l0UW", name: "qaVDcdMGL", type: "Identifier" }, { collection: "yO0k9l0UW", name: "nQyk2DaNo", type: "Identifier" }, { collection: "yO0k9l0UW", name: "mxcUnIhDd", type: "Identifier" }, { collection: "yO0k9l0UW", name: "v8IHRYQTR", type: "Identifier" }, { collection: "yO0k9l0UW", name: "ZZCaT_9gl", type: "Identifier" }, { collection: "yO0k9l0UW", name: "lozdtsyzG", type: "Identifier" }, { collection: "yO0k9l0UW", name: "UVTp5VeXR", type: "Identifier" }, { collection: "yO0k9l0UW", name: "id", type: "Identifier" }], where: { operator: "not", type: "UnaryOperation", value: { left: { collection: "yO0k9l0UW", name: "UVTp5VeXR", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: wEuhtjwsq }, type: "BinaryOperation" } } });
var query3 = (wEuhtjwsq) => ({ from: { alias: "yO0k9l0UW", data: AevTDaFMD_default, type: "Collection" }, limit: { type: "LiteralValue", value: 2 }, select: [{ collection: "yO0k9l0UW", name: "qaVDcdMGL", type: "Identifier" }, { collection: "yO0k9l0UW", name: "nQyk2DaNo", type: "Identifier" }, { collection: "yO0k9l0UW", name: "mxcUnIhDd", type: "Identifier" }, { collection: "yO0k9l0UW", name: "v8IHRYQTR", type: "Identifier" }, { collection: "yO0k9l0UW", name: "ZZCaT_9gl", type: "Identifier" }, { collection: "yO0k9l0UW", name: "lozdtsyzG", type: "Identifier" }, { collection: "yO0k9l0UW", name: "UVTp5VeXR", type: "Identifier" }, { collection: "yO0k9l0UW", name: "id", type: "Identifier" }], where: { operator: "not", type: "UnaryOperation", value: { left: { collection: "yO0k9l0UW", name: "UVTp5VeXR", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: wEuhtjwsq }, type: "BinaryOperation" } } });
var QueryData = ({ query, pageSize, children }) => {
  const data = __framer_useQueryData(query);
  return children(data);
};
var Transition4 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext4.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { "Desktop XL": "eNSFymDFx", "Phone Small": "xfuacH9B0", Desktop: "nS1vjwjzi", Phone: "e20sXHNQx", Tablet: "iYoA10mO_" };
var Variants4 = motion4.create(React4.Fragment);
var humanReadableEnumMap2 = { ash: "a_GQlQJKi", black: "xc_cFBMJK", bone: "DS68sAKXx", charcoal: "Yqv3WRJhR", oatmeal: "FyJ1HwOjb", olive: "ytCm0UccW", stone: "hmzr4nmsr" };
var useStateVariable = (externalState, setExternalState) => {
  const [internalState, setInternalState] = React4.useState(externalState);
  const [previousExternalState, setPreviousExternalState] = React4.useState(externalState);
  if (setExternalState) {
    return [externalState, setExternalState];
  }
  if (externalState !== previousExternalState) {
    setInternalState(externalState);
    setPreviousExternalState(externalState);
  }
  return [internalState, setInternalState];
};
var getProps4 = ({ care, color, construction, cropImage, detailImage, fabric, height, id, image, link, lookImage, lookNumber, price, shopifyVariants, short, sizes, sKU, slug, soldOut, textContent, title, tone, width, ...props }) => {
  return { ...props, a7gKNVd_8: title ?? props.a7gKNVd_8 ?? "", CCnSijHMN: construction ?? props.CCnSijHMN ?? "", CLOkGR3pn: care ?? props.CLOkGR3pn ?? "", DUM7kGwn9: color ?? props.DUM7kGwn9 ?? "", fKnBSSYmX: lookNumber ?? props.fKnBSSYmX ?? 1, hHTuRWDWr: humanReadableEnumMap2[tone] ?? tone ?? props.hHTuRWDWr ?? "Yqv3WRJhR", ienYGC52T: textContent ?? props.ienYGC52T ?? "outerwear", kQepPk2i6: detailImage ?? props.kQepPk2i6, pq4b5hmDE: lookImage ?? props.pq4b5hmDE, pty6TTTaI: short ?? props.pty6TTTaI ?? "", pZnn2UsRI: shopifyVariants ?? props.pZnn2UsRI ?? "", qdcpE9UZs: price ?? props.qdcpE9UZs ?? 0, T4a6tqTmy: link ?? props.T4a6tqTmy, u5TniZcqZ: soldOut ?? props.u5TniZcqZ ?? "", variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "nS1vjwjzi", W2eF3Q3Sw: cropImage ?? props.W2eF3Q3Sw, w2itHfPcU: sizes ?? props.w2itHfPcU ?? "XS,S,M,L,XL", W3hl_0bVo: image ?? props.W3hl_0bVo, wEuhtjwsq: slug ?? props.wEuhtjwsq ?? "", wJKVyy1G4: sKU ?? props.wJKVyy1G4 ?? "", ZW1Dhqw69: fabric ?? props.ZW1Dhqw69 ?? "" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className12, layoutId, variant, W3hl_0bVo, kQepPk2i6, pq4b5hmDE, T4a6tqTmy, fKnBSSYmX, W2eF3Q3Sw, ienYGC52T, a7gKNVd_8, wJKVyy1G4, qdcpE9UZs, "hHTuRWDWr": externalhHTuRWDWr, "onhHTuRWDWrChange": setExternalhHTuRWDWr, DUM7kGwn9, pty6TTTaI, wEuhtjwsq, w2itHfPcU, u5TniZcqZ, pZnn2UsRI, "ZW1Dhqw69": externalZW1Dhqw69, "onZW1Dhqw69Change": setExternalZW1Dhqw69, "CCnSijHMN": externalCCnSijHMN, "onCCnSijHMNChange": setExternalCCnSijHMN, "CLOkGR3pn": externalCLOkGR3pn, "onCLOkGR3pnChange": setExternalCLOkGR3pn, ...restProps } = getProps4(props);
  const [hHTuRWDWr, sethHTuRWDWr] = useStateVariable(externalhHTuRWDWr, setExternalhHTuRWDWr);
  const [ZW1Dhqw69, setZW1Dhqw69] = useStateVariable(externalZW1Dhqw69, setExternalZW1Dhqw69);
  const [CCnSijHMN, setCCnSijHMN] = useStateVariable(externalCCnSijHMN, setExternalCCnSijHMN);
  const [CLOkGR3pn, setCLOkGR3pn] = useStateVariable(externalCLOkGR3pn, setExternalCLOkGR3pn);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder3, defaultVariant: "nS1vjwjzi", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [className7, className2, className5, className4, className3, className6, className];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  const textContent = prefix2(toString3(fKnBSSYmX), "WORN IN LOOK 0");
  const textContent1 = PRICE_PLACEHOLDER;
  const router = useRouter();
  return /* @__PURE__ */ _jsx6(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs4(motion4.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-a3poqa", className12, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "ProductExperience__nS1vjwjzi", ref: refBinding, style: { ...style }, ...addPropertyOverrides3({ e20sXHNQx: { "data-framer-name": "Phone" }, eNSFymDFx: { "data-framer-name": "Desktop XL" }, iYoA10mO_: { "data-framer-name": "Tablet" }, xfuacH9B0: { "data-framer-name": "Phone Small" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-2llooq", "data-framer-name": "Product", layoutDependency, layoutId: "ProductExperience__T6bO_2PgB", children: [/* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-1w1ys0y", "data-framer-name": "Images", layoutDependency, layoutId: "ProductExperience__Zz5eBshsH", children: [/* @__PURE__ */ _jsx6(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation2, background: { alt: "Product photograph, front", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 64), sizes: `max(${componentViewport?.width || "100vw"} * 1.45 / 2.45, 1px)`, ...toResponsiveImage2(W3hl_0bVo) }, className: "framer-1ornv6h", "data-framer-appear-id": "1ornv6h", "data-framer-name": "Image Front", fitImageDimension: "height", initial: animation1, layoutDependency, layoutId: "ProductExperience__NnZBKsJTY", optimized: true, ...addPropertyOverrides3({ e20sXHNQx: { background: { alt: "Product photograph, front", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 58), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(W3hl_0bVo) } }, iYoA10mO_: { background: { alt: "Product photograph, front", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 64), sizes: `max(${componentViewport?.width || "100vw"} / 1.9, 1px)`, ...toResponsiveImage2(W3hl_0bVo) } }, xfuacH9B0: { background: { alt: "Product photograph, front", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 58), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(W3hl_0bVo) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation22, background: { alt: "Product photograph, fabric detail", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 168), sizes: `max(${componentViewport?.width || "100vw"} * 1.45 / 2.45, 1px)`, ...toResponsiveImage2(kQepPk2i6) }, className: "framer-dmteas", "data-framer-appear-id": "dmteas", "data-framer-name": "Image Detail", fitImageDimension: "height", initial: animation1, layoutDependency, layoutId: "ProductExperience__iZpoYl9qg", optimized: true, ...addPropertyOverrides3({ e20sXHNQx: { background: { alt: "Product photograph, fabric detail", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 162), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(kQepPk2i6) } }, iYoA10mO_: { background: { alt: "Product photograph, fabric detail", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 168), sizes: `max(${componentViewport?.width || "100vw"} / 1.9, 1px)`, ...toResponsiveImage2(kQepPk2i6) } }, xfuacH9B0: { background: { alt: "Product photograph, fabric detail", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 162), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(kQepPk2i6) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx6(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, background: { alt: "Product worn in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 272), sizes: `max(${componentViewport?.width || "100vw"} * 1.45 / 2.45, 1px)`, ...toResponsiveImage2(pq4b5hmDE) }, className: "framer-7bv2ow", "data-framer-appear-id": "7bv2ow", "data-framer-name": "Image Look", fitImageDimension: "height", initial: animation1, layoutDependency, layoutId: "ProductExperience__Fj2pCPVnm", optimized: true, ...addPropertyOverrides3({ e20sXHNQx: { background: { alt: "Product worn in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 266), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(pq4b5hmDE) } }, iYoA10mO_: { background: { alt: "Product worn in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 272), sizes: `max(${componentViewport?.width || "100vw"} / 1.9, 1px)`, ...toResponsiveImage2(pq4b5hmDE) } }, xfuacH9B0: { background: { alt: "Product worn in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 266), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(pq4b5hmDE) } } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(Link3, { href: T4a6tqTmy, motionChild: true, nodeId: "Ai07Efa77", scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsxs4(motion4.a, { className: "framer-1eb35mg framer-upuk5d", "data-framer-name": "Worn In Look", layoutDependency, layoutId: "ProductExperience__Ai07Efa77", style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)" }, whileTap: animation4, children: [/* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-1vkorbo", "data-styles-preset": "xsFHtZz0b", dir: "auto", children: "WORN IN LOOK 0undefined" }) }), className: "framer-974apq", "data-framer-name": "Worn Label", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__mkEcFbY1d", text: textContent, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-111hzzh-container", "data-code-component-plugin-id": "api", "data-framer-name": "Arrow", isAuthoredByUser: true, layoutDependency, layoutId: "ProductExperience__hVGJ6HPBT-container", name: "Arrow", nodeId: "hVGJ6HPBT", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(Icon, { color: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", height: "100%", id: "hVGJ6HPBT", label: "", layoutId: "ProductExperience__hVGJ6HPBT", name: "arrow-up-right-01", nameOverride: "", size: 14, strokeWidth: 1.5, width: "100%" }) }) })] }) }) }), /* @__PURE__ */ _jsx6(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation5, background: { alt: "Close-up crop of the product in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 376), sizes: `max(${componentViewport?.width || "100vw"} * 1.45 / 2.45, 1px)`, ...toResponsiveImage2(W2eF3Q3Sw) }, className: "framer-copv8l", "data-framer-appear-id": "copv8l", "data-framer-name": "Image Crop", fitImageDimension: "height", initial: animation1, layoutDependency, layoutId: "ProductExperience__pbzgJmqkP", optimized: true, ...addPropertyOverrides3({ e20sXHNQx: { background: { alt: "Close-up crop of the product in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 370), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(W2eF3Q3Sw) } }, iYoA10mO_: { background: { alt: "Close-up crop of the product in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 376), sizes: `max(${componentViewport?.width || "100vw"} / 1.9, 1px)`, ...toResponsiveImage2(W2eF3Q3Sw) } }, xfuacH9B0: { background: { alt: "Close-up crop of the product in the look", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 370), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(W2eF3Q3Sw) } } }, baseVariant, gestureVariant) })] }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-ngoybq", "data-framer-name": "Info Column", layoutDependency, layoutId: "ProductExperience__jV8awvuA9", children: /* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-x50bc5", "data-framer-name": "Sticky Info", layoutDependency, layoutId: "ProductExperience__UoFsKEUI8", children: [/* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-5uq7f1", "data-framer-name": "Breadcrumb", layoutDependency, layoutId: "ProductExperience__cdJYRPYmF", children: [/* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: /* @__PURE__ */ _jsx6(Link3, { href: { webPageId: "DXmr4VOUc" }, motionChild: true, nodeId: "qI77X010n", openInNewTab: false, relValues: [], scopeId: "aXToY9rJe", smoothScroll: false, children: /* @__PURE__ */ _jsx6(motion4.a, { className: "framer-styles-preset-cjjbac", "data-styles-preset": "NXuICy2Ff", children: "SHOP" }) }) }) }), className: "framer-nbxz51", "data-framer-name": "Shop Link", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__qI77X010n", verticalAlignment: "top", whileTap: animation6, withExternalLayout: true }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "/" }) }), className: "framer-aw0gpt", "data-framer-name": "Slash", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__TROD5hzY4", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "Content" }) }), className: "framer-iuqb3v", "data-framer-name": "Category", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__Hub2dEx5R", text: ienYGC52T, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-1w30td9", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__YsmbTjyK4" }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.h1, { className: "framer-styles-preset-1q0m394", "data-styles-preset": "LV36a6Qsf", dir: "auto", children: "Title" }) }), className: "framer-1kk9lvs", "data-framer-name": "Product Name", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__DPKcyFMOd", text: a7gKNVd_8, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-2fm3h7", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__YKZEo22u0" }), /* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-1w9b14i", "data-border": true, "data-framer-name": "SKU and Price", layoutDependency, layoutId: "ProductExperience__PmvGqgLHi", style: { "--border-bottom-width": "0px", "--border-color": "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px" }, children: [/* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", children: "SKU" }) }), className: "framer-1e70kek", "data-framer-name": "SKU", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__cWaJYSiI6", text: wJKVyy1G4, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-evmdnf", "data-styles-preset": "Ox07MnIuG", dir: "auto", children: "$undefined" }) }), className: "framer-uw58i2", "data-framer-name": "Price", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__htz9ribal", text: textContent1, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-pb812h", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__FurBYQZ4H" }), /* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-5gvct4", "data-framer-name": "Color", layoutDependency, layoutId: "ProductExperience__YgkFatWn5", children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 200, y: (componentViewport?.y || 0) + 313.184, ...addPropertyOverrides3({ e20sXHNQx: { y: (componentViewport?.y || 0) + 707.184 }, xfuacH9B0: { y: (componentViewport?.y || 0) + 707.184 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-1yxtw4e-container", "data-framer-name": "Swatch", layoutDependency, layoutId: "ProductExperience__GqPJy_pXJ-container", name: "Swatch", nodeId: "GqPJy_pXJ", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(BlGPtyAeD_default, { height: "100%", id: "GqPJy_pXJ", layoutId: "ProductExperience__GqPJy_pXJ", name: "Swatch", onw9Y36npAqChange: sethHTuRWDWr, w9Y36npAq: hHTuRWDWr, width: "100%" }) }) }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "Color" }) }), className: "framer-1tj1uh8", "data-framer-name": "Color Name", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__mx_Xhf1TS", text: DUM7kGwn9, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-1jjfyhc", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__S8nD3MVVp" }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.p, { className: "framer-styles-preset-79lgve", "data-styles-preset": "FvlVYfbqp", dir: "auto", children: "Short" }) }), className: "framer-jetyzf", "data-framer-name": "Description", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__Q18K0zEkG", text: pty6TTTaI, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-yd8ap7", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__TceFhf0tK" }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-1xh8sus", "data-framer-name": "Add To Bag Slot", layoutDependency, layoutId: "ProductExperience__c1WumrprC", children: /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-jj2dkz-container", "data-code-component-plugin-id": "api", "data-framer-name": "Add To Bag", isAuthoredByUser: true, layoutDependency, layoutId: "ProductExperience__pJ4gL9n8E-container", name: "Add To Bag", nodeId: "pJ4gL9n8E", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(AddToBag, { accent: "var(--token-10b3c583-e6c2-4ed5-bd70-462ebcec53e7)", addLabel: "REQUEST THIS PIECE", bone: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", color: DUM7kGwn9, currency: "$", fontMono: "'Geist Mono', ui-monospace, monospace", fontSans: "Geist, system-ui, sans-serif", fontSerif: "'Instrument Serif', 'Times New Roman', serif", height: "100%", hint: "/ PLEASE CHOOSE ONE", id: "pJ4gL9n8E", image: toResponsiveImage2(W3hl_0bVo), ink: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", layoutId: "ProductExperience__pJ4gL9n8E", legend: "SIZE", loadFonts: false, maxQuantity: 9, muted: "var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170)", name: a7gKNVd_8, openBagAfterAdd: true, price: qdcpE9UZs, shopifyVariants: pZnn2UsRI, sizes: w2itHfPcU, slug: wEuhtjwsq, soldOut: u5TniZcqZ, style: { width: "100%" }, surface: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)", width: "100%" }) }) }) }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-1srtc3z", "data-framer-name": "Gap", layoutDependency, layoutId: "ProductExperience__ebgAKDX8e" }), /* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-1id0zg8", "data-border": true, "data-framer-name": "Folds", layoutDependency, layoutId: "ProductExperience__V5XhOR1dp", style: { "--border-bottom-width": "0px", "--border-color": "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px" }, children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 55, width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 64.8px)`, y: (componentViewport?.y || 0) + 851.684, ...addPropertyOverrides3({ e20sXHNQx: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1245.684 }, eNSFymDFx: { width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 92px)` }, iYoA10mO_: { width: `calc(max(${componentViewport?.width || "100vw"} * 0.9 / 1.9, 340px) - 43.4px)` }, xfuacH9B0: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1245.684 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-nyepsb-container", "data-framer-name": "Fold Fabric", layoutDependency, layoutId: "ProductExperience__JKbZjIuj5-container", name: "Fold Fabric", nodeId: "JKbZjIuj5", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(V7IE2feqD_default, { coK1VVJDK: false, dEJ88DyjQ: "Pickup & delivery", grDJGC4wM: "FABRIC", height: "100%", id: "JKbZjIuj5", layoutId: "ProductExperience__JKbZjIuj5", name: "Fold Fabric", onwVJQU4cT3Change: setZW1Dhqw69, style: { width: "100%" }, variant: matchVariant("icuXvqXTs"), width: "100%", wVJQU4cT3: ZW1Dhqw69 }) }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 55, width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 64.8px)`, y: (componentViewport?.y || 0) + 906.684, ...addPropertyOverrides3({ e20sXHNQx: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1300.684 }, eNSFymDFx: { width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 92px)` }, iYoA10mO_: { width: `calc(max(${componentViewport?.width || "100vw"} * 0.9 / 1.9, 340px) - 43.4px)` }, xfuacH9B0: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1300.684 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-ph19ev-container", "data-framer-name": "Fold Construction", layoutDependency, layoutId: "ProductExperience__LTdAy4qhF-container", name: "Fold Construction", nodeId: "LTdAy4qhF", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(V7IE2feqD_default, { coK1VVJDK: false, dEJ88DyjQ: "Pickup & delivery", grDJGC4wM: "CONSTRUCTION", height: "100%", id: "LTdAy4qhF", layoutId: "ProductExperience__LTdAy4qhF", name: "Fold Construction", onwVJQU4cT3Change: setCCnSijHMN, style: { width: "100%" }, variant: matchVariant("xdJ3JtS_8"), width: "100%", wVJQU4cT3: CCnSijHMN }) }) }), /* @__PURE__ */ _jsx6(ResolveLinks, { links: [{ href: { webPageId: "MYJeuFP6I" }, implicitPathVariables: void 0 }, { href: { webPageId: "MYJeuFP6I" }, implicitPathVariables: void 0 }, { href: { webPageId: "MYJeuFP6I" }, implicitPathVariables: void 0 }, { href: { webPageId: "MYJeuFP6I" }, implicitPathVariables: void 0 }, { href: { webPageId: "MYJeuFP6I" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 55, width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 64.8px)`, y: (componentViewport?.y || 0) + 961.684, ...addPropertyOverrides3({ e20sXHNQx: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1355.684 }, eNSFymDFx: { width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 92px)` }, iYoA10mO_: { width: `calc(max(${componentViewport?.width || "100vw"} * 0.9 / 1.9, 340px) - 43.4px)` }, xfuacH9B0: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1355.684 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-1lg3mw7-container", "data-framer-name": "Fold Shipping", layoutDependency, layoutId: "ProductExperience__bm1rSTqaX-container", name: "Fold Shipping", nodeId: "bm1rSTqaX", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(V7IE2feqD_default, { coK1VVJDK: true, dEJ88DyjQ: "Pickup & delivery", grDJGC4wM: "SHIPPING", height: "100%", id: "bm1rSTqaX", layoutId: "ProductExperience__bm1rSTqaX", name: "Fold Shipping", style: { width: "100%" }, variant: matchVariant("xdJ3JtS_8"), vyiTgW8Y2: resolvedLinks[0], width: "100%", wVJQU4cT3: "[SHIPPING & RETURNS NOTE — CONFIRM WITH ADELE]", ...addPropertyOverrides3({ e20sXHNQx: { vyiTgW8Y2: resolvedLinks[2] }, eNSFymDFx: { vyiTgW8Y2: resolvedLinks[3] }, iYoA10mO_: { vyiTgW8Y2: resolvedLinks[1] }, xfuacH9B0: { vyiTgW8Y2: resolvedLinks[4] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 55, width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 64.8px)`, y: (componentViewport?.y || 0) + 1016.684, ...addPropertyOverrides3({ e20sXHNQx: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1410.684 }, eNSFymDFx: { width: `calc(max(${componentViewport?.width || "100vw"} / 2.45, 380px) - 92px)` }, iYoA10mO_: { width: `calc(max(${componentViewport?.width || "100vw"} * 0.9 / 1.9, 340px) - 43.4px)` }, xfuacH9B0: { width: `calc(max(${componentViewport?.width || "100vw"}, 0px) - 32px)`, y: (componentViewport?.y || 0) + 1410.684 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-5p6ef1-container", "data-framer-name": "Fold Care", layoutDependency, layoutId: "ProductExperience__Ktd2cXtDs-container", name: "Fold Care", nodeId: "Ktd2cXtDs", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(V7IE2feqD_default, { coK1VVJDK: false, dEJ88DyjQ: "Pickup & delivery", grDJGC4wM: "CARE", height: "100%", id: "Ktd2cXtDs", layoutId: "ProductExperience__Ktd2cXtDs", name: "Fold Care", onwVJQU4cT3Change: setCLOkGR3pn, style: { width: "100%" }, variant: matchVariant("xdJ3JtS_8"), width: "100%", wVJQU4cT3: CLOkGR3pn }) }) })] })] }) })] }), /* @__PURE__ */ _jsxs4(motion4.div, { className: "framer-1keclm5", "data-framer-name": "More From AW26", layoutDependency, layoutId: "ProductExperience__E2ts50HdN", children: [/* @__PURE__ */ _jsx6(RichTextWithFX, { __framer__animate: { transition: transition7 }, __framer__animateOnce: true, __framer__enter: animation7, __framer__exit: animation8, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.12, __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, children: /* @__PURE__ */ _jsx6(React4.Fragment, { children: /* @__PURE__ */ _jsx6(motion4.h2, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", style: { "--framer-text-alignment": "start" }, children: "MORE FROM AW26" }) }), className: "framer-1jyhkbk", "data-framer-name": "More Label", fonts: ["Inter"], layoutDependency, layoutId: "ProductExperience__iFpmXtUVA", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(motion4.div, { className: "framer-bq0n7z", "data-framer-name": "More Products List", layoutDependency, layoutId: "ProductExperience__yO0k9l0UW", children: /* @__PURE__ */ _jsx6(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx6(QueryData, { query: query1(wEuhtjwsq), ...addPropertyOverrides3({ e20sXHNQx: { query: query3(wEuhtjwsq) }, xfuacH9B0: { query: query3(wEuhtjwsq) } }, baseVariant, gestureVariant), children: (collection, paginationInfo, loadMore) => {
    return /* @__PURE__ */ _jsx6(_Fragment, { children: collection?.map(({ id: idyO0k9l0UW, lozdtsyzG: lozdtsyzGyO0k9l0UW, mxcUnIhDd: mxcUnIhDdyO0k9l0UW, nQyk2DaNo: nQyk2DaNoyO0k9l0UW, qaVDcdMGL: qaVDcdMGLyO0k9l0UW, UVTp5VeXR: UVTp5VeXRyO0k9l0UW, v8IHRYQTR: v8IHRYQTRyO0k9l0UW, ZZCaT_9gl: ZZCaT_9glyO0k9l0UW }, index) => {
      mxcUnIhDdyO0k9l0UW ?? (mxcUnIhDdyO0k9l0UW = "");
      v8IHRYQTRyO0k9l0UW ?? (v8IHRYQTRyO0k9l0UW = "");
      ZZCaT_9glyO0k9l0UW ?? (ZZCaT_9glyO0k9l0UW = "");
      lozdtsyzGyO0k9l0UW ?? (lozdtsyzGyO0k9l0UW = 0);
      UVTp5VeXRyO0k9l0UW ?? (UVTp5VeXRyO0k9l0UW = "");
      return /* @__PURE__ */ _jsx6(LayoutGroup4, { id: `yO0k9l0UW-${idyO0k9l0UW}`, children: /* @__PURE__ */ _jsx6(PathVariablesContext.Provider, { value: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, children: /* @__PURE__ */ _jsx6(MotionDivWithFX, { __framer__animate: { transition: transition7 }, __framer__animateOnce: true, __framer__enter: animation7, __framer__exit: animation8, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.1, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-kgc34i", "data-framer-name": "Product Item", layoutDependency, layoutId: "ProductExperience__TEl7uDFqT", children: /* @__PURE__ */ _jsx6(ResolveLinks, { links: [{ href: { pathVariables: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, webPageId: "hhqRmnuxm" }, implicitPathVariables: void 0 }, { href: { pathVariables: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, webPageId: "hhqRmnuxm" }, implicitPathVariables: void 0 }, { href: { pathVariables: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, webPageId: "hhqRmnuxm" }, implicitPathVariables: void 0 }, { href: { pathVariables: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, webPageId: "hhqRmnuxm" }, implicitPathVariables: void 0 }, { href: { pathVariables: { UVTp5VeXR: UVTp5VeXRyO0k9l0UW }, webPageId: "hhqRmnuxm" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 200, width: `max((${componentViewport?.width || "100vw"} - 115.2px) / 3, 50px)`, y: (componentViewport?.y || 0) + 1295.084, ...addPropertyOverrides3({ e20sXHNQx: { width: `max((${componentViewport?.width || "100vw"} - 44px) / 2, 50px)`, y: (componentViewport?.y || 0) + 1593.084 }, eNSFymDFx: { width: `max((${componentViewport?.width || "100vw"} - 144px) / 3, 50px)`, y: (componentViewport?.y || 0) + 1311.084 }, iYoA10mO_: { width: `max((${componentViewport?.width || "100vw"} - 77.6px) / 3, 50px)`, y: (componentViewport?.y || 0) + 1248.084 }, xfuacH9B0: { width: `max((${componentViewport?.width || "100vw"} - 44px) / 2, 50px)`, y: (componentViewport?.y || 0) + 1593.084 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-jd19l8-container", "data-framer-name": "Product Card", layoutDependency, layoutId: "ProductExperience__wGAvpx_TR-container", name: "Product Card", nodeId: "wGAvpx_TR", rendersWithMotion: true, scopeId: "aXToY9rJe", children: /* @__PURE__ */ _jsx6(pzoqrZiQb_default, { GumAntqaH: ZZCaT_9glyO0k9l0UW, gX4JCHH0t: mxcUnIhDdyO0k9l0UW, height: "100%", id: "wGAvpx_TR", iiBAHW82m: resolvedLinks1[0], ilh4dYpSN: "VIEW", layoutId: "ProductExperience__wGAvpx_TR", name: "Product Card", p6R7qzFj9: v8IHRYQTRyO0k9l0UW, RkUEzLnGe: toResponsiveImage2(nQyk2DaNoyO0k9l0UW), style: { width: "100%" }, uiCWQqeVx: toResponsiveImage2(qaVDcdMGLyO0k9l0UW), variant: matchVariant("yLXbMJ7Om"), width: "100%", YmqLvEYfA: lozdtsyzGyO0k9l0UW, ...addPropertyOverrides3({ e20sXHNQx: { iiBAHW82m: resolvedLinks1[2], variant: matchVariant("VT0ZOTbs2") }, eNSFymDFx: { iiBAHW82m: resolvedLinks1[3] }, iYoA10mO_: { iiBAHW82m: resolvedLinks1[1] }, xfuacH9B0: { iiBAHW82m: resolvedLinks1[4], variant: matchVariant("VT0ZOTbs2") } }, baseVariant, gestureVariant) }) }) }) }) }) }) }, idyO0k9l0UW);
    }) });
  } }) }) })] })] }) }) }) });
});
var css15 = [".framer-ZoO3j.framer-upuk5d, .framer-ZoO3j .framer-upuk5d { display: block; }", ".framer-ZoO3j.framer-a3poqa { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-2llooq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 64px 0px 0px 0px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-1w1ys0y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.45 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", ".framer-ZoO3j .framer-1ornv6h, .framer-ZoO3j .framer-dmteas, .framer-ZoO3j .framer-7bv2ow, .framer-ZoO3j .framer-copv8l { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }", ".framer-ZoO3j .framer-1eb35mg { align-content: center; align-items: center; bottom: 0px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; left: 0px; padding: 0px 16px 0px 16px; position: absolute; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }", ".framer-ZoO3j .framer-974apq { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ".framer-ZoO3j .framer-111hzzh-container { flex: none; height: auto; pointer-events: none; position: relative; width: auto; }", ".framer-ZoO3j .framer-ngoybq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-width: 380px; padding: 0px; position: relative; width: 1px; }", ".framer-ZoO3j .framer-x50bc5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 40px 28.8px 40px 36px; position: sticky; top: 64px; width: 100%; }", ".framer-ZoO3j .framer-5uq7f1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 44px; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }", ".framer-ZoO3j .framer-nbxz51 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-ZoO3j .framer-aw0gpt, .framer-ZoO3j .framer-iuqb3v, .framer-ZoO3j .framer-1e70kek, .framer-ZoO3j .framer-uw58i2, .framer-ZoO3j .framer-1tj1uh8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-ZoO3j .framer-1w30td9 { flex: none; height: 22px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-1kk9lvs, .framer-ZoO3j .framer-1jyhkbk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-ZoO3j .framer-2fm3h7 { flex: none; height: 18px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-1w9b14i { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 14px 0px 0px 0px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-pb812h { flex: none; height: 6px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-5gvct4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }", ".framer-ZoO3j .framer-1yxtw4e-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-ZoO3j .framer-1jjfyhc { flex: none; height: 20px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-jetyzf { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-ZoO3j .framer-yd8ap7 { flex: none; height: 24px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-1xh8sus, .framer-ZoO3j .framer-1id0zg8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-jj2dkz-container, .framer-ZoO3j .framer-nyepsb-container, .framer-ZoO3j .framer-ph19ev-container, .framer-ZoO3j .framer-1lg3mw7-container, .framer-ZoO3j .framer-5p6ef1-container, .framer-ZoO3j .framer-jd19l8-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-ZoO3j .framer-1srtc3z { flex: none; height: 32px; pointer-events: none; position: relative; width: 1px; }", ".framer-ZoO3j .framer-1keclm5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 144px 28.8px 0px 28.8px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-bq0n7z { display: grid; flex: none; gap: 28.8px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }", ".framer-ZoO3j .framer-kgc34i { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }", ".framer-ZoO3j.framer-v-1ui2800.framer-a3poqa { width: 100%; }", ".framer-ZoO3j.framer-v-1ui2800 .framer-1w1ys0y { flex: 1 0 0px; }", ".framer-ZoO3j.framer-v-1ui2800 .framer-ngoybq { flex: 0.9 0 0px; min-width: 340px; }", ".framer-ZoO3j.framer-v-1ui2800 .framer-x50bc5 { padding: 40px 19.4px 40px 24px; }", ".framer-ZoO3j.framer-v-1ui2800 .framer-1keclm5 { padding: 97px 19.4px 0px 19.4px; }", ".framer-ZoO3j.framer-v-1ui2800 .framer-bq0n7z { gap: 19.4px; }", ".framer-ZoO3j.framer-v-a2zyti.framer-a3poqa { width: 100%; }", ".framer-ZoO3j.framer-v-a2zyti .framer-2llooq, .framer-ZoO3j.framer-v-1ff09tt .framer-2llooq { flex-direction: column; padding: 58px 0px 0px 0px; }", ".framer-ZoO3j.framer-v-a2zyti .framer-1w1ys0y, .framer-ZoO3j.framer-v-1ff09tt .framer-1w1ys0y { flex: none; width: 100%; }", ".framer-ZoO3j.framer-v-a2zyti .framer-ngoybq, .framer-ZoO3j.framer-v-1ff09tt .framer-ngoybq { flex: none; min-width: 0px; width: 100%; }", ".framer-ZoO3j.framer-v-a2zyti .framer-x50bc5, .framer-ZoO3j.framer-v-1ff09tt .framer-x50bc5 { padding: 28px 16px 8px 16px; position: relative; top: unset; }", ".framer-ZoO3j.framer-v-a2zyti .framer-1keclm5, .framer-ZoO3j.framer-v-1ff09tt .framer-1keclm5 { padding: 80px 16px 0px 16px; }", ".framer-ZoO3j.framer-v-a2zyti .framer-bq0n7z, .framer-ZoO3j.framer-v-1ff09tt .framer-bq0n7z { gap: 12px; grid-template-columns: repeat(2, minmax(50px, 1fr)); }", ".framer-ZoO3j.framer-v-1ib6jzw.framer-a3poqa { width: 100%; }", ".framer-ZoO3j.framer-v-1ib6jzw .framer-x50bc5 { padding: 40px 36px 40px 56px; }", ".framer-ZoO3j.framer-v-1ib6jzw .framer-1keclm5 { padding: 160px 36px 0px 36px; }", ".framer-ZoO3j.framer-v-1ib6jzw .framer-bq0n7z { gap: 36px; }", ".framer-ZoO3j.framer-v-1ff09tt.framer-a3poqa { width: 100%; }", ...css7, ...css2, ...css5, ...css4, ...css3, ...css6, ...css, '.framer-ZoO3j[data-border="true"]::after, .framer-ZoO3j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameraXToY9rJe = withCSS4(Component4, css15, "framer-ZoO3j");
var aXToY9rJe_default = FrameraXToY9rJe;
FrameraXToY9rJe.displayName = "Product Experience";
FrameraXToY9rJe.defaultProps = { height: 200, width: 1200 };
addPropertyControls6(FrameraXToY9rJe, { variant: { options: ["nS1vjwjzi", "iYoA10mO_", "e20sXHNQx", "eNSFymDFx", "xfuacH9B0"], optionTitles: ["Desktop", "Tablet", "Phone", "Desktop XL", "Phone Small"], title: "Variant", type: ControlType6.Enum }, W3hl_0bVo: { title: "Image", type: ControlType6.ResponsiveImage }, kQepPk2i6: { title: "Detail Image", type: ControlType6.ResponsiveImage }, pq4b5hmDE: { title: "Look Image", type: ControlType6.ResponsiveImage }, T4a6tqTmy: { title: "Link", type: ControlType6.Link }, fKnBSSYmX: { defaultValue: 1, title: "Look Number", type: ControlType6.Number }, onfKnBSSYmXChange: { changes: "fKnBSSYmX", type: ControlType6.ChangeHandler }, W2eF3Q3Sw: { title: "Crop Image", type: ControlType6.ResponsiveImage }, ienYGC52T: { defaultValue: "outerwear", title: "Text Content", type: ControlType6.String }, onienYGC52TChange: { changes: "ienYGC52T", type: ControlType6.ChangeHandler }, a7gKNVd_8: { defaultValue: "", title: "Title", type: ControlType6.String }, ona7gKNVd_8Change: { changes: "a7gKNVd_8", type: ControlType6.ChangeHandler }, wJKVyy1G4: { defaultValue: "", title: "SKU", type: ControlType6.String }, onwJKVyy1G4Change: { changes: "wJKVyy1G4", type: ControlType6.ChangeHandler }, qdcpE9UZs: { defaultValue: 0, title: "Price", type: ControlType6.Number }, onqdcpE9UZsChange: { changes: "qdcpE9UZs", type: ControlType6.ChangeHandler }, hHTuRWDWr: SwatchControls?.["w9Y36npAq"] && { ...SwatchControls["w9Y36npAq"], defaultValue: "Yqv3WRJhR", description: void 0, hidden: void 0, optional: void 0, title: "Tone" }, onhHTuRWDWrChange: { changes: "hHTuRWDWr", type: ControlType6.ChangeHandler }, DUM7kGwn9: { defaultValue: "", title: "Color", type: ControlType6.String }, onDUM7kGwn9Change: { changes: "DUM7kGwn9", type: ControlType6.ChangeHandler }, pty6TTTaI: { defaultValue: "", displayTextArea: true, title: "Short", type: ControlType6.String }, onpty6TTTaIChange: { changes: "pty6TTTaI", type: ControlType6.ChangeHandler }, wEuhtjwsq: { defaultValue: "", title: "Slug", type: ControlType6.String }, onwEuhtjwsqChange: { changes: "wEuhtjwsq", type: ControlType6.ChangeHandler }, w2itHfPcU: { defaultValue: "XS,S,M,L,XL", title: "Sizes", type: ControlType6.String }, onw2itHfPcUChange: { changes: "w2itHfPcU", type: ControlType6.ChangeHandler }, u5TniZcqZ: { defaultValue: "", title: "Sold Out", type: ControlType6.String }, onu5TniZcqZChange: { changes: "u5TniZcqZ", type: ControlType6.ChangeHandler }, pZnn2UsRI: { defaultValue: "", title: "Shopify Variants", type: ControlType6.String }, onpZnn2UsRIChange: { changes: "pZnn2UsRI", type: ControlType6.ChangeHandler }, ZW1Dhqw69: { defaultValue: "", displayTextArea: true, title: "Fabric", type: ControlType6.String }, onZW1Dhqw69Change: { changes: "ZW1Dhqw69", type: ControlType6.ChangeHandler }, CCnSijHMN: { defaultValue: "", displayTextArea: true, title: "Construction", type: ControlType6.String }, onCCnSijHMNChange: { changes: "CCnSijHMN", type: ControlType6.ChangeHandler }, CLOkGR3pn: { defaultValue: "", displayTextArea: true, title: "Care", type: ControlType6.String }, onCLOkGR3pnChange: { changes: "CLOkGR3pn", type: ControlType6.ChangeHandler } });
addFonts4(FrameraXToY9rJe, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...IconFonts2, ...SwatchFonts, ...AddToBagFonts, ...FoldFonts, ...ProductCardFonts, ...getFontsFromSharedStyle3(fonts7), ...getFontsFromSharedStyle3(fonts2), ...getFontsFromSharedStyle3(fonts5), ...getFontsFromSharedStyle3(fonts4), ...getFontsFromSharedStyle3(fonts3), ...getFontsFromSharedStyle3(fonts6), ...getFontsFromSharedStyle3(fonts)], { supportsExplicitInterCodegen: true });
FrameraXToY9rJe.loader = { load: (props, context) => {
  const locale = context.locale;
  const priority = context.priority;
  return runTasksWithYield([() => forwardLoader(BlGPtyAeD_default, {}, context), () => forwardLoader(V7IE2feqD_default, {}, context)], context);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FrameraXToY9rJe", "slots": [], "annotations": { "framerIntrinsicWidth": "1200", "framerIntrinsicHeight": "200", "framerAutoSizeImages": "true", "framerColorSyntax": "true", "framerContractVersion": "1", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"iYoA10mO_":{"layout":["fixed","auto"]},"e20sXHNQx":{"layout":["fixed","auto"]},"eNSFymDFx":{"layout":["fixed","auto"]},"xfuacH9B0":{"layout":["fixed","auto"]}}}', "framerComponentViewportWidth": "true", "framerVariables": '{"W3hl_0bVo":"image","kQepPk2i6":"detailImage","pq4b5hmDE":"lookImage","T4a6tqTmy":"link","fKnBSSYmX":"lookNumber","W2eF3Q3Sw":"cropImage","ienYGC52T":"textContent","a7gKNVd_8":"title","wJKVyy1G4":"sKU","qdcpE9UZs":"price","hHTuRWDWr":"tone","DUM7kGwn9":"color","pty6TTTaI":"short","wEuhtjwsq":"slug","w2itHfPcU":"sizes","u5TniZcqZ":"soldOut","pZnn2UsRI":"shopifyVariants","ZW1Dhqw69":"fabric","CCnSijHMN":"construction","CLOkGR3pn":"care"}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  aXToY9rJe_default as default
};
