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
var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ezxigjkNbiNGBMsAP4Wk/76lIznjC7uao8Qq3YLgs/NMtJ4Gvu6.js
import { jsx as _jsx10, jsxs as _jsxs8 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls10, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType10, cx as cx5, forwardLoader as forwardLoader2, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle5, RichText as RichText5, runTasksWithYield as runTasksWithYield2, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion7, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef7 } from "react";

// http-url:https://framerusercontent.com/modules/3CK2quvShQZblTTkuWTo/4iohVcJpx5csMthMx0xt/StaticForm_BagDrawer.js
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
var BAG_KEY = "static-form:bag:v1";
var EV_BAG = "static-form:bag";
var EV_OPEN = "static-form:bag-open";
var EV_CLOSE = "static-form:bag-close";
function readBag() {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(BAG_KEY) : null;
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr))
      return [];
    return arr.filter((l) => l && typeof l.slug === "string" && typeof l.name === "string" && typeof l.size === "string" && typeof l.price === "number" && typeof l.qty === "number" && l.qty > 0).map((l) => ({ slug: l.slug, name: l.name, color: String(l.color || ""), price: l.price, image: String(l.image || ""), size: l.size, qty: Math.min(9, l.qty), vid: String(l.vid || "") }));
  } catch (e) {
    return [];
  }
}
function writeBag(lines) {
  try {
    localStorage.setItem(BAG_KEY, JSON.stringify(lines));
  } catch (e) {
  }
  __dai_window.dispatchEvent(new CustomEvent(EV_BAG));
}
function bagSetQty(slug, size, qty, max = 9) {
  const cur = readBag().flatMap((l) => l.slug === slug && l.size === size ? qty <= 0 ? [] : [{ ...l, qty: Math.min(max, qty) }] : [l]);
  writeBag(cur);
}
function bagRemove(slug, size) {
  writeBag(readBag().filter((l) => !(l.slug === slug && l.size === size)));
}
function useBag() {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const r = () => setLines(readBag());
    r();
    __dai_window.addEventListener(EV_BAG, r);
    __dai_window.addEventListener("storage", r);
    return () => {
      __dai_window.removeEventListener(EV_BAG, r);
      __dai_window.removeEventListener("storage", r);
    };
  }, []);
  return lines;
}
function shopifyUrl(domain, lines) {
  if (!lines.length)
    return "";
  if (lines.length === 1 && lines[0].qty === 1 && /^https?:\/\//i.test(lines[0].vid || ""))
    return lines[0].vid;
  const d = String(domain || "").trim().replace(/^https?:\/\//i, "").replace(/\/+$/, "");
  if (!d)
    return "";
  const parts = [];
  for (const l of lines) {
    if (!l.vid || !/^\d+$/.test(l.vid))
      return "";
    parts.push(l.vid + ":" + l.qty);
  }
  return "https://" + d + "/cart/" + parts.join(",");
}
function useIsCanvas() {
  return RenderTarget.current() === RenderTarget.canvas || RenderTarget.current() === RenderTarget.thumbnail;
}
function rootVars(p) {
  return { "--sf-ink": p.ink, "--sf-bone": p.bone, "--sf-surface": p.surface, "--sf-muted": p.muted, "--sf-accent": p.accent, "--sf-line": "color-mix(in srgb, var(--sf-bone) 16%, transparent)", "--sf-line-strong": "color-mix(in srgb, var(--sf-bone) 34%, transparent)", "--sf-bone-60": "color-mix(in srgb, var(--sf-bone) 60%, transparent)", "--sf-ink-80": "color-mix(in srgb, var(--sf-ink) 80%, transparent)", "--sf-ink-60": "color-mix(in srgb, var(--sf-ink) 60%, transparent)", "--sf-font-sans": p.fontSans, "--sf-font-serif": p.fontSerif, "--sf-font-mono": p.fontMono, "--sf-ease": "cubic-bezier(0.16, 1, 0.3, 1)" };
}
var colorControls = { ink: { type: ControlType.Color, title: "Ink", defaultValue: "#11110F" }, bone: { type: ControlType.Color, title: "Bone", defaultValue: "#F4EFE6" }, surface: { type: ControlType.Color, title: "Surface", defaultValue: "#1A1916" }, muted: { type: ControlType.Color, title: "Muted", defaultValue: "#858178" }, accent: { type: ControlType.Color, title: "Accent", defaultValue: "#B8975A" } };
var fontControls = { fontSans: { type: ControlType.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontSerif: { type: ControlType.String, title: "Font serif", defaultValue: "'Instrument Serif', 'Times New Roman', serif" }, fontMono: { type: ControlType.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" }, loadFonts: { type: ControlType.Boolean, title: "Load fonts", defaultValue: false } };
var money = (n, cur) => cur + Math.round(n).toLocaleString("en-US");
function useFonts(on) {
  useEffect(() => {
    if (!on || typeof document === "undefined")
      return;
    if (document.getElementById("sf-fonts"))
      return;
    const l = document.createElement("link");
    l.id = "sf-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(l);
  }, [on]);
}
var ICON_PATHS = { "arrow-left-02": "M5.5 12.002H19m-8 6s-6-4.419-6-6s6-6 6-6", "arrow-right-02": "M18.5 12H5m8 6s6-4.419 6-6s-6-6-6-6", "arrow-up-right-01": "M9 6.65s6.938-.542 7.915.435S17.35 15 17.35 15m-.85-7.5l-10 10", "cancel-01": "M18 6L6 18m12 0L6 6", "add-01": "M12.001 5v14.002m7.001-7H5", "minus-sign": "M20 12H4", "menu-02": "M4 5h12M4 12h16M4 19h8", "delete-02": "m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" };
function Icon({ name, size = 20 }) {
  return /* @__PURE__ */ _jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", style: { display: "block", flex: "none" }, children: /* @__PURE__ */ _jsx("path", { d: ICON_PATHS[name] || "", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) });
}
var CSS = `
.sfd-scrim{position:fixed;inset:0;background:color-mix(in srgb,var(--sf-ink) var(--sfd-scrim),transparent);pointer-events:auto}
.sfd-panel{position:fixed;display:flex;flex-direction:column;background:var(--sf-ink);color:var(--sf-bone);font-family:var(--sf-font-sans);font-size:15px;line-height:1.5;pointer-events:auto;box-sizing:border-box}
.sfd-panel *{box-sizing:border-box}
.sfd-panel--side{top:0;right:0;bottom:0;border-left:1px solid var(--sf-line-strong)}
.sfd-panel--sheet{left:0;right:0;bottom:0;max-height:min(86svh,760px);border-top:1px solid var(--sf-line-strong)}
.sfd-head{display:flex;align-items:center;justify-content:space-between;min-height:64px;padding:6px 10px 6px 24px;border-bottom:1px solid var(--sf-line)}
.sfd-sheet .sfd-head{padding-left:16px;min-height:58px}
.sfd-mono{font-family:var(--sf-font-mono);font-size:12px;line-height:1.4;letter-spacing:.08em;text-transform:uppercase;margin:0;font-weight:400}
.sfd-muted{color:var(--sf-muted)}
.sfd-ib{display:grid;place-items:center;width:44px;height:44px;margin:0;padding:0;border:0;background:transparent;color:var(--sf-bone);cursor:pointer;transition:opacity .25s,background .3s}
.sfd-ib:hover{background:color-mix(in srgb,var(--sf-bone) 10%,transparent)}
.sfd-ib:active{opacity:.6}
.sfd-ib:focus-visible,.sfd-btn:focus-visible,.sfd-panel a:focus-visible{outline:1px solid var(--sf-bone);outline-offset:3px}
.sfd-lines{flex:1;overflow-y:auto;margin:0;padding:0 24px;list-style:none}
.sfd-sheet .sfd-lines{padding:0 16px}
.sfd-line{display:grid;grid-template-columns:84px 1fr auto;gap:16px;padding:18px 0;border-bottom:1px solid var(--sf-line)}
.sfd-thumb{display:block;aspect-ratio:4/5;background:var(--sf-surface);overflow:hidden}
.sfd-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.sfd-name{margin:0;font-weight:500;font-size:17px;letter-spacing:-.01em;color:var(--sf-bone);text-decoration:none}
.sfd-qty{display:inline-flex;align-items:center;margin-top:12px;border:1px solid var(--sf-line-strong)}
.sfd-qty button{display:grid;place-items:center;width:36px;height:36px;border:0;margin:0;padding:0;background:transparent;color:var(--sf-bone);cursor:pointer;transition:background .3s,opacity .2s}
.sfd-qty button:hover{background:color-mix(in srgb,var(--sf-bone) 12%,transparent)}
.sfd-qty button:active{opacity:.6}
.sfd-qty span{min-width:28px;text-align:center}
.sfd-side{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between}
.sfd-foot{padding:16px 24px 20px;border-top:1px solid var(--sf-line);display:grid;gap:12px}
.sfd-sheet .sfd-foot{padding:14px 16px calc(14px + env(safe-area-inset-bottom))}
.sfd-sum{display:flex;justify-content:space-between}
.sfd-btn{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:44px;padding:0 18px;margin:0;border:1px solid var(--sf-bone);background:var(--sf-bone);color:var(--sf-ink);font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;overflow:hidden;isolation:isolate;text-decoration:none;transition:color .5s var(--sf-ease),opacity .2s}
.sfd-btn::before{content:"";position:absolute;inset:0;background:var(--sf-ink);z-index:-1;transform:translateY(101%);transition:transform .55s var(--sf-ease)}
.sfd-btn:hover::before{transform:none}
.sfd-btn:hover{color:var(--sf-bone)}
.sfd-btn:active{opacity:.78}
.sfd-btn--ghost{background:transparent;color:var(--sf-bone);justify-content:space-between}
.sfd-btn--ghost::before{background:var(--sf-bone)}
.sfd-btn--ghost:hover{color:var(--sf-ink)}
.sfd-empty{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:28px;padding:24px}
.sfd-empty p.serif{margin:0;font-family:var(--sf-font-serif);font-size:36px;line-height:1.05;letter-spacing:-.01em}
.sfd-empty .sfd-btn{width:auto;gap:18px}
.sfd-note{margin:0;padding:12px 14px;border:1px solid var(--sf-line-strong)}
@media (prefers-reduced-motion: reduce){.sfd-panel *,.sfd-btn,.sfd-btn::before{transition-duration:.01ms!important}}
`;
var SAMPLE = [{ slug: "raw-wool-coat", name: "Signature Wrap Coat", color: "Charcoal", price: 420, image: "", size: "M", qty: 1 }, { slug: "fold-trouser", name: "[PRODUCT NAME — CONFIRM]", color: "Off-black", price: 210, image: "", size: "48", qty: 2 }];
function Panel(props) {
  const lines = props.lines;
  const { shopifyDomain, checkoutNewTab, compact, onClose, title, emptyText, emptyCta, emptyLink, checkoutLabel, checkoutNote, shippingNote, subtotalLabel, currency, productLinkBase, maxQuantity, panelWidth, preview } = props;
  const [note, setNote] = useState(false);
  const shopUrl = preview ? "" : shopifyUrl(String(shopifyDomain || ""), lines);
  const closeRef = useRef(null);
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.price, 0);
  useEffect(() => {
    if (!preview)
      closeRef.current?.focus({ preventScroll: true });
  }, []);
  return /* @__PURE__ */ _jsx(_Fragment, { children: /* @__PURE__ */ _jsxs("div", { className: compact ? "sfd-sheet" : "", style: { display: "contents" }, children: [/* @__PURE__ */ _jsxs("header", { className: "sfd-head", children: [/* @__PURE__ */ _jsxs("h2", { className: "sfd-mono", style: { fontSize: 12 }, children: [title, " (", count, ")"] }), /* @__PURE__ */ _jsx("button", { ref: closeRef, type: "button", className: "sfd-ib", onClick: onClose, "aria-label": "Close bag", children: /* @__PURE__ */ _jsx(Icon, { name: "cancel-01" }) })] }), lines.length === 0 ? /* @__PURE__ */ _jsxs("div", { className: "sfd-empty", children: [/* @__PURE__ */ _jsx("p", { className: "serif", children: emptyText }), /* @__PURE__ */ _jsxs("a", { className: "sfd-btn sfd-btn--ghost", href: emptyLink || "/shop", onClick: onClose, children: [/* @__PURE__ */ _jsx("span", { children: emptyCta }), /* @__PURE__ */ _jsx(Icon, { name: "arrow-right-02", size: 18 })] })] }) : /* @__PURE__ */ _jsx("ul", { className: "sfd-lines", "data-sf-scroll": "", children: lines.map((l) => /* @__PURE__ */ _jsxs("li", { className: "sfd-line", children: [/* @__PURE__ */ _jsx("a", { className: "sfd-thumb", href: (productLinkBase || "/product/") + l.slug, "aria-label": l.name, children: l.image ? /* @__PURE__ */ _jsx("img", { src: l.image, alt: l.name, draggable: false }) : null }), /* @__PURE__ */ _jsxs("div", { children: [/* @__PURE__ */ _jsx("a", { className: "sfd-name", href: (productLinkBase || "/product/") + l.slug, children: l.name }), /* @__PURE__ */ _jsxs("p", { className: "sfd-mono sfd-muted", style: { marginTop: 4 }, children: [l.color, " / ", l.size] }), /* @__PURE__ */ _jsxs("div", { className: "sfd-qty", role: "group", "aria-label": `Quantity for ${l.name}`, children: [/* @__PURE__ */ _jsx("button", { type: "button", "aria-label": "Decrease quantity", onClick: () => !preview && bagSetQty(l.slug, l.size, l.qty - 1, maxQuantity), children: /* @__PURE__ */ _jsx(Icon, { name: "minus-sign", size: 16 }) }), /* @__PURE__ */ _jsx("span", { className: "sfd-mono", "aria-live": "polite", children: l.qty }), /* @__PURE__ */ _jsx("button", { type: "button", "aria-label": "Increase quantity", onClick: () => !preview && bagSetQty(l.slug, l.size, l.qty + 1, maxQuantity), children: /* @__PURE__ */ _jsx(Icon, { name: "add-01", size: 16 }) })] })] }), /* @__PURE__ */ _jsxs("div", { className: "sfd-side", children: [/* @__PURE__ */ _jsx("p", { className: "sfd-mono", children: money(l.price * l.qty, currency) }), /* @__PURE__ */ _jsx("button", { type: "button", className: "sfd-ib", "aria-label": `Remove ${l.name}`, onClick: () => !preview && bagRemove(l.slug, l.size), children: /* @__PURE__ */ _jsx(Icon, { name: "delete-02", size: 18 }) })] })] }, l.slug + l.size)) }), lines.length > 0 && /* @__PURE__ */ _jsxs("footer", { className: "sfd-foot", children: [/* @__PURE__ */ _jsxs("div", { className: "sfd-sum sfd-mono", children: [/* @__PURE__ */ _jsx("span", { children: subtotalLabel }), /* @__PURE__ */ _jsx("span", { children: money(subtotal, currency) })] }), /* @__PURE__ */ _jsx("p", { className: "sfd-mono sfd-muted", children: shippingNote }), shopUrl ? /* @__PURE__ */ _jsxs("a", { className: "sfd-btn", href: shopUrl, ...checkoutNewTab ? { target: "_blank", rel: "noopener" } : {}, children: [/* @__PURE__ */ _jsx("span", { children: checkoutLabel }), /* @__PURE__ */ _jsx(Icon, { name: "arrow-right-02", size: 18 })] }) : /* @__PURE__ */ _jsxs("button", { type: "button", className: "sfd-btn", onClick: () => setNote(true), children: [/* @__PURE__ */ _jsx("span", { children: checkoutLabel }), /* @__PURE__ */ _jsx(Icon, { name: "arrow-right-02", size: 18 })] }), note && !shopUrl && /* @__PURE__ */ _jsx("p", { className: "sfd-mono sfd-note", role: "status", children: checkoutNote })] })] }) });
}
function BagDrawer(props) {
  useFonts(props.loadFonts === true);
  const { compactBelow, panelWidth, scrimOpacity, springStiffness, springDamping, previewOpen } = props;
  const canvas = useIsCanvas();
  const reduce = useReducedMotion();
  const lines = useBag();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastFocus = useRef(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (canvas)
      return;
    const mq = __dai_window.matchMedia(`(max-width: ${compactBelow - 0.02}px)`);
    const r = () => setCompact(mq.matches);
    r();
    mq.addEventListener ? mq.addEventListener("change", r) : mq.addListener(r);
    return () => mq.removeEventListener ? mq.removeEventListener("change", r) : mq.removeListener(r);
  }, [compactBelow, canvas]);
  const close = useCallback(() => {
    setOpen(false);
    __dai_window.dispatchEvent(new CustomEvent(EV_CLOSE));
    lastFocus.current?.focus?.({ preventScroll: true });
  }, []);
  useEffect(() => {
    if (canvas)
      return;
    const onOpen = () => {
      lastFocus.current = document.activeElement || null;
      setOpen(true);
    };
    __dai_window.addEventListener(EV_OPEN, onOpen);
    return () => __dai_window.removeEventListener(EV_OPEN, onOpen);
  }, [canvas]);
  useEffect(() => {
    if (!open)
      return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    __dai_window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      __dai_window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);
  const spring = reduce ? { duration: 0 } : { type: "spring", stiffness: springStiffness, damping: springDamping };
  const vars = { ...rootVars(props), "--sfd-scrim": `${Math.round(scrimOpacity * 100)}%` };
  if (canvas) {
    const demo = previewOpen;
    return /* @__PURE__ */ _jsxs("div", { style: { ...vars, position: "relative", width: "100%", height: "100%", overflow: "visible", fontFamily: "var(--sf-font-mono)" }, children: [/* @__PURE__ */ _jsx("style", { dangerouslySetInnerHTML: { __html: CSS } }), /* @__PURE__ */ _jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", border: "1px dashed var(--sf-line-strong)", background: "var(--sf-surface)", color: "var(--sf-bone)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase" }, children: "Bag Drawer" }), demo && /* @__PURE__ */ _jsx("div", { className: "sfd-panel sfd-panel--side", style: { position: "absolute", top: 40, left: 0, right: "auto", width: panelWidth, height: 620, zIndex: 5 }, children: /* @__PURE__ */ _jsx(Panel, { ...props, lines: SAMPLE, compact: false, onClose: () => {
    }, preview: true }) })] });
  }
  return /* @__PURE__ */ _jsx("div", { "aria-hidden": "true", style: { width: "100%", height: "100%", pointerEvents: "none" }, children: mounted && /* @__PURE__ */ createPortal(/* @__PURE__ */ _jsxs("div", { style: { ...vars, position: "fixed", inset: 0, zIndex: 2147483e3, pointerEvents: open ? "auto" : "none" }, children: [/* @__PURE__ */ _jsx("style", { dangerouslySetInnerHTML: { __html: CSS } }), /* @__PURE__ */ _jsx(AnimatePresence, { children: open && /* @__PURE__ */ _jsxs(_Fragment, { children: [/* @__PURE__ */ _jsx(motion.div, { className: "sfd-scrim", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: reduce ? 0 : 0.4 }, onClick: close }, "scrim"), /* @__PURE__ */ _jsx(motion.aside, { className: `sfd-panel ${compact ? "sfd-panel--sheet" : "sfd-panel--side"}`, role: "dialog", "aria-modal": "true", "aria-label": "Bag", style: compact ? void 0 : { width: `min(${panelWidth}px, 100vw)` }, initial: compact ? { y: "100%" } : { x: "100%" }, animate: { x: 0, y: 0 }, exit: compact ? { y: "100%" } : { x: "100%" }, transition: spring, children: /* @__PURE__ */ _jsx(Panel, { ...props, lines, compact, onClose: close }) }, "panel")] }) })] }), document.body) });
}
BagDrawer.displayName = "Bag Drawer";
addPropertyControls(BagDrawer, { title: { type: ControlType.String, title: "Title", defaultValue: "BAG" }, emptyText: { type: ControlType.String, title: "Empty text", defaultValue: "Nothing in the bag yet." }, emptyCta: { type: ControlType.String, title: "Empty button", defaultValue: "VIEW THE COLLECTION" }, emptyLink: { type: ControlType.Link, title: "Empty link" }, checkoutLabel: { type: ControlType.String, title: "Checkout", defaultValue: "CHECKOUT" }, shopifyDomain: { type: ControlType.String, title: "Shopify domain", defaultValue: "", placeholder: "your-store.myshopify.com", description: "Optional. When set and every item in the bag has a Shopify variant ID, CHECKOUT opens your Shopify cart. Otherwise the note below shows." }, checkoutNewTab: { type: ControlType.Boolean, title: "Checkout new tab", defaultValue: false }, checkoutNote: { type: ControlType.String, title: "Checkout note", defaultValue: "", displayTextArea: true }, shippingNote: { type: ControlType.String, title: "Shipping note", defaultValue: "Shipping and taxes are calculated at checkout.", displayTextArea: true }, subtotalLabel: { type: ControlType.String, title: "Subtotal", defaultValue: "SUBTOTAL" }, currency: { type: ControlType.String, title: "Currency", defaultValue: "$" }, productLinkBase: { type: ControlType.String, title: "Product path", defaultValue: "/product/" }, compactBelow: { type: ControlType.Number, title: "Sheet below", defaultValue: 810, min: 320, max: 1400, unit: "px" }, panelWidth: { type: ControlType.Number, title: "Panel width", defaultValue: 440, min: 320, max: 640, unit: "px" }, maxQuantity: { type: ControlType.Number, title: "Max quantity", defaultValue: 9, min: 1, max: 99, step: 1 }, scrimOpacity: { type: ControlType.Number, title: "Scrim", defaultValue: 0.55, min: 0, max: 1, step: 0.05 }, springStiffness: { type: ControlType.Number, title: "Stiffness", defaultValue: 110, min: 20, max: 400 }, springDamping: { type: ControlType.Number, title: "Damping", defaultValue: 22, min: 5, max: 80 }, previewOpen: { type: ControlType.Boolean, title: "Preview open", defaultValue: false }, ...fontControls, ...colorControls });

// http-url:https://framerusercontent.com/modules/tuUn17G7V1QMsXvNDkBF/NNZrYV4t5aF9FOnCbsFr/StaticForm_Loader.js
import { jsx as _jsx2, jsxs as _jsxs2, Fragment as _Fragment2 } from "react/jsx-runtime";
import { useEffect as useEffect2, useState as useState2 } from "react";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, RenderTarget as RenderTarget2 } from "./_framer-runtime.js";
var KEY = "static-form:loader:v1";
var LIFT = 0.6;
function StaticFormLoader(props) {
  const { enabled, oncePerSession, wordmark, subline, tag, showCounter, duration, ink, bone, muted, line, fontSans, fontMono } = props;
  const canvas = RenderTarget2.current() === RenderTarget2.canvas;
  const [phase, setPhase] = useState2("show");
  const [count, setCount] = useState2(0);
  const dur = Math.max(0.4, Math.min(1, duration || 0.9));
  useEffect2(() => {
    if (canvas)
      return;
    let seen = false;
    try {
      seen = oncePerSession && __dai_window.sessionStorage.getItem(KEY) === "1";
      if (!seen)
        __dai_window.sessionStorage.setItem(KEY, "1");
    } catch (e) {
    }
    const reduce = typeof __dai_window.matchMedia === "function" && __dai_window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled || seen) {
      setPhase("gone");
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / (dur * 1e3));
      setCount(Math.round(p * 100));
      if (p < 1)
        raf = requestAnimationFrame(tick);
    };
    if (!reduce)
      raf = requestAnimationFrame(tick);
    const end = __dai_window.setTimeout(() => setPhase("gone"), (reduce ? 0.6 : dur + LIFT) * 1e3 + 250);
    return () => {
      cancelAnimationFrame(raf);
      __dai_window.clearTimeout(end);
    };
  }, []);
  if (canvas) {
    return /* @__PURE__ */ _jsx2("div", { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: ink, color: bone, fontFamily: fontMono, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px dashed " + muted, boxSizing: "border-box" }, children: "Loader" });
  }
  if (!enabled || phase === "gone")
    return /* @__PURE__ */ _jsx2("div", { style: { width: 0, height: 0 }, "aria-hidden": "true" });
  const total = dur + LIFT;
  const css16 = `
.sfl{position:fixed;inset:0;z-index:2147483000;background:${ink};color:${bone};pointer-events:none;overflow:hidden;will-change:transform;animation:sfl-lift ${LIFT}s cubic-bezier(.16,1,.3,1) ${dur}s forwards}
.sfl *{pointer-events:none}
.sfl-top,.sfl-bot{position:absolute;left:var(--sfl-pad);right:var(--sfl-pad);display:flex;justify-content:space-between;align-items:baseline;font-family:${fontMono};font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${muted}}
.sfl-top{top:22px}.sfl-bot{bottom:26px}
.sfl-mid{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center}
.sfl-word{display:inline-block;font-family:${fontSans};font-weight:600;letter-spacing:-.065em;line-height:.8;font-size:clamp(56px,15.5vw,300px);opacity:0;transform:translate3d(0,14px,0);animation:sfl-in .7s cubic-bezier(.16,1,.3,1) .08s forwards}
.sfl-line{position:absolute;left:var(--sfl-pad);right:var(--sfl-pad);bottom:56px;height:1px;background:${line};overflow:hidden}
.sfl-line i{display:block;height:100%;background:${bone};transform:scaleX(0);transform-origin:left;animation:sfl-bar ${dur}s cubic-bezier(.65,0,.25,1) forwards}
.sfl-num{font-variant-numeric:tabular-nums;color:${bone}}
@keyframes sfl-in{to{opacity:1;transform:translate3d(0,0,0)}}
@keyframes sfl-bar{to{transform:scaleX(1)}}
@keyframes sfl-lift{from{transform:translate3d(0,0,0)}99%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,-100%,0);visibility:hidden}}
@media (prefers-reduced-motion:reduce){.sfl{animation:sfl-fade .3s linear .3s forwards}.sfl-word{animation:none;opacity:1;transform:none}.sfl-line i{animation:none;transform:scaleX(1)}@keyframes sfl-fade{to{opacity:0;visibility:hidden}}}
`;
  return /* @__PURE__ */ _jsxs2(_Fragment2, { children: [/* @__PURE__ */ _jsx2("style", { dangerouslySetInnerHTML: { __html: `:root{--sfl-pad:clamp(16px,2.4vw,36px)}${css16}` } }), /* @__PURE__ */ _jsxs2("div", { className: "sfl", "aria-hidden": "true", "data-total": total, children: [/* @__PURE__ */ _jsxs2("div", { className: "sfl-top", children: [/* @__PURE__ */ _jsx2("span", { children: wordmark }), /* @__PURE__ */ _jsx2("span", { children: tag })] }), /* @__PURE__ */ _jsx2("div", { className: "sfl-mid", children: /* @__PURE__ */ _jsx2("span", { className: "sfl-word", children: wordmark }) }), /* @__PURE__ */ _jsx2("div", { className: "sfl-line", children: /* @__PURE__ */ _jsx2("i", {}) }), /* @__PURE__ */ _jsxs2("div", { className: "sfl-bot", children: [/* @__PURE__ */ _jsx2("span", { children: subline }), showCounter ? /* @__PURE__ */ _jsx2("span", { className: "sfl-num", children: String(count).padStart(3, "0") }) : /* @__PURE__ */ _jsx2("span", {})] })] })] });
}
StaticFormLoader.displayName = "Loader";
StaticFormLoader.defaultProps = { enabled: true, oncePerSession: true, wordmark: "ADELE", subline: "AUTUMN / WINTER 26", tag: "AW26", showCounter: true, duration: 0.9, ink: "#11110F", bone: "#F4EFE6", muted: "#858178", line: "rgba(244, 239, 230, 0.16)", fontSans: "Geist, system-ui, sans-serif", fontMono: "'Geist Mono', ui-monospace, monospace" };
addPropertyControls2(StaticFormLoader, { enabled: { type: ControlType2.Boolean, title: "Show loader", defaultValue: true }, oncePerSession: { type: ControlType2.Boolean, title: "Once per visit", defaultValue: true }, wordmark: { type: ControlType2.String, title: "Wordmark", defaultValue: "ADELE" }, subline: { type: ControlType2.String, title: "Subline", defaultValue: "AUTUMN / WINTER 26" }, tag: { type: ControlType2.String, title: "Tag", defaultValue: "AW26" }, showCounter: { type: ControlType2.Boolean, title: "Counter", defaultValue: true }, duration: { type: ControlType2.Number, title: "Duration", defaultValue: 0.9, min: 0.4, max: 1, step: 0.1, unit: "s" }, ink: { type: ControlType2.Color, title: "Ink" }, bone: { type: ControlType2.Color, title: "Bone" }, muted: { type: ControlType2.Color, title: "Muted" }, line: { type: ControlType2.Color, title: "Line" }, fontSans: { type: ControlType2.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontMono: { type: ControlType2.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" } });

// http-url:https://framerusercontent.com/modules/jVnbW71Xxz7Vm1M4rOqQ/99t3QGm9dHnELE3fTcjR/StaticForm_RunwayStage.js
import { jsx as _jsx3, jsxs as _jsxs3, Fragment as _Fragment3 } from "react/jsx-runtime";
import * as React from "react";
import { useState as useState3, useEffect as useEffect3, useLayoutEffect as useLayoutEffect2, useRef as useRef2, useMemo, useCallback as useCallback2 } from "react";
import { motion as motion2, animate, AnimatePresence as AnimatePresence2, useMotionValue, useTransform, useDragControls, useReducedMotion as useReducedMotion2 } from "framer-motion";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, RenderTarget as RenderTarget3 } from "./_framer-runtime.js";
var BAG_KEY2 = "static-form:bag:v1";
var EV_BAG2 = "static-form:bag";
var EV_OPEN2 = "static-form:bag-open";
var EV_CLOSE2 = "static-form:bag-close";
function readBag2() {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(BAG_KEY2) : null;
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr))
      return [];
    return arr.filter((l) => l && typeof l.slug === "string" && typeof l.name === "string" && typeof l.size === "string" && typeof l.price === "number" && typeof l.qty === "number" && l.qty > 0).map((l) => ({ slug: l.slug, name: l.name, color: String(l.color || ""), price: l.price, image: String(l.image || ""), size: l.size, qty: Math.min(9, l.qty), vid: String(l.vid || "") }));
  } catch (e) {
    return [];
  }
}
function writeBag2(lines) {
  try {
    localStorage.setItem(BAG_KEY2, JSON.stringify(lines));
  } catch (e) {
  }
  __dai_window.dispatchEvent(new CustomEvent(EV_BAG2));
}
function bagAdd(item, max = 9) {
  const cur = readBag2();
  const hit = cur.find((l) => l.slug === item.slug && l.size === item.size);
  if (hit)
    hit.qty = Math.min(max, hit.qty + 1);
  else
    cur.push({ ...item, qty: 1 });
  writeBag2(cur);
}
function openBag() {
  __dai_window.dispatchEvent(new CustomEvent(EV_OPEN2));
}
function pickVariant(spec, size) {
  const s = String(spec || "").trim();
  if (!s)
    return "";
  if (/^https?:\/\//i.test(s))
    return s;
  const parts = s.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean);
  if (parts.length === 1 && parts[0].indexOf(":") < 0)
    return parts[0];
  for (const p of parts) {
    const i = p.indexOf(":");
    if (i > 0 && p.slice(0, i).trim().toUpperCase() === String(size).trim().toUpperCase())
      return p.slice(i + 1).trim();
  }
  return "";
}
function useIsCanvas2() {
  return RenderTarget3.current() === RenderTarget3.canvas || RenderTarget3.current() === RenderTarget3.thumbnail;
}
function imgUrl(v, fallback = "") {
  if (!v)
    return fallback;
  if (typeof v === "string")
    return v || fallback;
  if (typeof v === "object" && typeof v.src === "string")
    return v.src || fallback;
  return fallback;
}
function useBox(ref) {
  const [box, setBox] = useState3({ w: 0, h: 0 });
  useLayoutEffect2(() => {
    const el = ref.current;
    if (!el)
      return;
    const read = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    read();
    if (typeof ResizeObserver === "undefined")
      return;
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return box;
}
var clamp = (v, a, b) => Math.max(a, Math.min(b, v));
var pad2 = (n) => String(n).padStart(2, "0");
var EASE_T = [0.16, 1, 0.3, 1];
function rootVars2(p) {
  return { "--sf-ink": p.ink, "--sf-bone": p.bone, "--sf-surface": p.surface, "--sf-muted": p.muted, "--sf-accent": p.accent, "--sf-line": "color-mix(in srgb, var(--sf-bone) 16%, transparent)", "--sf-line-strong": "color-mix(in srgb, var(--sf-bone) 34%, transparent)", "--sf-bone-60": "color-mix(in srgb, var(--sf-bone) 60%, transparent)", "--sf-ink-80": "color-mix(in srgb, var(--sf-ink) 80%, transparent)", "--sf-ink-60": "color-mix(in srgb, var(--sf-ink) 60%, transparent)", "--sf-font-sans": p.fontSans, "--sf-font-serif": p.fontSerif, "--sf-font-mono": p.fontMono, "--sf-ease": "cubic-bezier(0.16, 1, 0.3, 1)" };
}
var colorControls2 = { ink: { type: ControlType3.Color, title: "Ink", defaultValue: "#11110F" }, bone: { type: ControlType3.Color, title: "Bone", defaultValue: "#F4EFE6" }, surface: { type: ControlType3.Color, title: "Surface", defaultValue: "#1A1916" }, muted: { type: ControlType3.Color, title: "Muted", defaultValue: "#858178" }, accent: { type: ControlType3.Color, title: "Accent", defaultValue: "#B8975A" } };
var fontControls2 = { fontSans: { type: ControlType3.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontSerif: { type: ControlType3.String, title: "Font serif", defaultValue: "'Instrument Serif', 'Times New Roman', serif" }, fontMono: { type: ControlType3.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" }, loadFonts: { type: ControlType3.Boolean, title: "Load fonts", defaultValue: false } };
var money2 = (n, cur) => cur + Math.round(n).toLocaleString("en-US");
var splitList = (s) => String(s || "").split(",").map((x) => x.trim()).filter(Boolean);
function useFonts2(on) {
  useEffect3(() => {
    if (!on || typeof document === "undefined")
      return;
    if (document.getElementById("sf-fonts"))
      return;
    const l = document.createElement("link");
    l.id = "sf-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(l);
  }, [on]);
}
var ICON_PATHS2 = { "arrow-left-02": "M5.5 12.002H19m-8 6s-6-4.419-6-6s6-6 6-6", "arrow-right-02": "M18.5 12H5m8 6s6-4.419 6-6s-6-6-6-6", "arrow-up-right-01": "M9 6.65s6.938-.542 7.915.435S17.35 15 17.35 15m-.85-7.5l-10 10", "cancel-01": "M18 6L6 18m12 0L6 6", "add-01": "M12.001 5v14.002m7.001-7H5", "minus-sign": "M20 12H4", "menu-02": "M4 5h12M4 12h16M4 19h8", "delete-02": "m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" };
function Icon2({ name, size = 20 }) {
  return /* @__PURE__ */ _jsx3("svg", { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", style: { display: "block", flex: "none" }, children: /* @__PURE__ */ _jsx3("path", { d: ICON_PATHS2[name] || "", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) });
}
var IMG = { "products/fold-trouser": "/adele/placeholder-shop-15.jpg", "products/heavy-scarf-01": "/adele/placeholder-shop-23.jpg", "products/layered-tee": "/adele/placeholder-shop-13.jpg", "products/leather-object-03": "/adele/placeholder-shop-21.jpg", "products/long-coat-01": "/adele/placeholder-shop-03.jpg", "products/raw-wool-coat": "/adele/placeholder-shop-01.jpg", "products/rib-knit-vest": "/adele/placeholder-shop-09.jpg", "products/soft-knit-02": "/adele/placeholder-shop-07.jpg", "products/structured-shirt": "/adele/placeholder-shop-11.jpg", "products/utility-bag": "/adele/placeholder-shop-19.jpg", "products/wide-trouser-03": "/adele/placeholder-shop-17.jpg", "products/work-jacket-02": "/adele/placeholder-shop-05.jpg", "archive/aw25": "/adele/placeholder-hidden-01.jpg", "archive/ss25": "/adele/placeholder-hidden-02.jpg", "archive/ss26": "/adele/placeholder-hidden-03.jpg", "details/fold-trouser": "/adele/placeholder-shop-16.jpg", "details/heavy-scarf-01": "/adele/placeholder-shop-24.jpg", "details/layered-tee": "/adele/placeholder-shop-14.jpg", "details/leather-object-03": "/adele/placeholder-shop-22.jpg", "details/long-coat-01": "/adele/placeholder-shop-04.jpg", "details/raw-wool-coat": "/adele/placeholder-shop-02.jpg", "details/rib-knit-vest": "/adele/placeholder-shop-10.jpg", "details/soft-knit-02": "/adele/placeholder-shop-08.jpg", "details/structured-shirt": "/adele/placeholder-shop-12.jpg", "details/utility-bag": "/adele/placeholder-shop-20.jpg", "details/wide-trouser-03": "/adele/placeholder-shop-18.jpg", "details/work-jacket-02": "/adele/placeholder-shop-06.jpg", "about/studio": "/adele/placeholder-about-01.jpg", "looks/look-01": "/adele/placeholder-home-01.jpg", "looks/look-02": "/adele/placeholder-home-02.jpg", "looks/look-03": "/adele/placeholder-home-03.jpg", "looks/look-04": "/adele/placeholder-home-04.jpg", "looks/look-05": "/adele/placeholder-home-05.jpg", "looks/look-06": "/adele/placeholder-home-06.jpg", "looks/look-07": "/adele/placeholder-home-07.jpg", "looks/look-08": "/adele/placeholder-home-08.jpg", "lookbook/detail-01": "/adele/placeholder-lookbook-02.jpg", "lookbook/detail-02": "/adele/placeholder-lookbook-03.jpg", "lookbook/detail-03": "/adele/placeholder-lookbook-05.jpg", "lookbook/wide-01": "/adele/placeholder-lookbook-01.jpg", "lookbook/wide-02": "/adele/placeholder-lookbook-04.jpg", "crops/raw-wool-coat": "/adele/placeholder-hidden-04.jpg", "crops/long-coat-01": "/adele/placeholder-hidden-05.jpg", "crops/work-jacket-02": "/adele/placeholder-hidden-06.jpg", "crops/soft-knit-02": "/adele/placeholder-hidden-07.jpg", "crops/rib-knit-vest": "/adele/placeholder-hidden-08.jpg", "crops/structured-shirt": "/adele/placeholder-hidden-09.jpg", "crops/layered-tee": "/adele/placeholder-hidden-10.jpg", "crops/fold-trouser": "/adele/placeholder-hidden-11.jpg", "crops/wide-trouser-03": "/adele/placeholder-hidden-12.jpg", "crops/utility-bag": "/adele/placeholder-hidden-13.jpg", "crops/leather-object-03": "/adele/placeholder-hidden-14.jpg", "crops/heavy-scarf-01": "/adele/placeholder-hidden-15.jpg", "meta/favicon": "/adele/placeholder-hidden-16.jpg", "meta/og": "/adele/placeholder-hidden-17.jpg" };
var PRODUCTS = [{ slug: "raw-wool-coat", name: "Signature Wrap Coat", sku: "AD-AW26-OW-04", category: "outerwear", price: 420, color: "Charcoal", tone: "charcoal", tag: "WOOL COAT 04", sizes: "XS,S,M,L,XL", soldOut: "XS", short: "A long straight coat in brushed raw wool. Dropped shoulder, concealed placket, no lining at the back to let it move." }, { slug: "long-coat-01", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OW-01", category: "outerwear", price: 480, color: "Ash", tone: "ash", tag: "LONG COAT 01", sizes: "XS,S,M,L,XL", soldOut: "", short: "Single breasted, ankle length, cut in a bone grey wool twill. Quiet from the front, severe in motion." }, { slug: "work-jacket-02", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OW-02", category: "outerwear", price: 310, color: "Olive Grey", tone: "olive", tag: "WORK JACKET 02", sizes: "XS,S,M,L,XL", soldOut: "XL", short: "A boxy short jacket in washed canvas with four patch pockets. Built for use, kept strict." }, { slug: "soft-knit-02", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-KN-02", category: "knit", price: 190, color: "Oatmeal", tone: "oatmeal", tag: "SOFT KNIT 02", sizes: "XS,S,M,L,XL", soldOut: "", short: "A heavy rib mock neck in brushed alpaca blend. Oversized through the body, narrow at the cuff." }, { slug: "rib-knit-vest", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-KN-05", category: "knit", price: 140, color: "Stone", tone: "stone", tag: "KNIT VEST 05", sizes: "XS,S,M,L,XL", soldOut: "", short: "A sleeveless chunky rib in stone wool. Layer it over a shirt or wear it alone." }, { slug: "structured-shirt", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-SH-03", category: "shirts", price: 165, color: "Bone", tone: "bone", tag: "SHIRT 03", sizes: "XS,S,M,L,XL", soldOut: "XS,S", short: "A stiff poplin shirt with an oversized collar and a high, straight hem." }, { slug: "layered-tee", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-SH-06", category: "shirts", price: 85, color: "Washed Grey", tone: "ash", tag: "LAYERED TEE 06", sizes: "XS,S,M,L,XL", soldOut: "", short: "Washed jersey with a second, longer black layer sewn into the hem." }, { slug: "fold-trouser", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-TR-01", category: "trousers", price: 210, color: "Off-black", tone: "black", tag: "FOLD TROUSER 01", sizes: "44,46,48,50,52", soldOut: "44", short: "A wide trouser with a double fold at the front and a deep break. Falls straight from the hip." }, { slug: "wide-trouser-03", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-TR-03", category: "trousers", price: 230, color: "Charcoal", tone: "charcoal", tag: "WIDE TROUSER 03", sizes: "44,46,48,50,52", soldOut: "", short: "Charcoal flannel, cut wide with one deep pleat. Sits high, finishes on the shoe." }, { slug: "utility-bag", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-01", category: "objects", price: 175, color: "Black", tone: "black", tag: "UTILITY BAG", sizes: "ONE SIZE", soldOut: "", short: "A technical nylon carry piece with a webbing strap, one steel buckle and nothing else." }, { slug: "leather-object-03", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-03", category: "objects", price: 260, color: "Black", tone: "black", tag: "LEATHER OBJECT 03", sizes: "ONE SIZE", soldOut: "", short: "A folded leather pouch that works as a bag, a case, or an object on a table." }, { slug: "heavy-scarf-01", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-05", category: "objects", price: 120, color: "Charcoal", tone: "charcoal", tag: "SCARF 01", sizes: "ONE SIZE", soldOut: "", short: "Two metres of dense brushed wool. Wrap it once and let it hang." }];
var prodImg = (slug) => IMG["products/" + slug] || "";
var toneColor = (tone) => ({ charcoal: "color-mix(in srgb, var(--sf-bone) 22%, var(--sf-ink))", bone: "var(--sf-bone)", stone: "color-mix(in srgb, var(--sf-bone) 62%, var(--sf-muted))", olive: "color-mix(in srgb, var(--sf-muted) 62%, var(--sf-ink))", black: "var(--sf-ink)", oatmeal: "color-mix(in srgb, var(--sf-bone) 78%, var(--sf-muted))", ash: "color-mix(in srgb, var(--sf-bone) 52%, var(--sf-ink))" })[tone] || "var(--sf-bone)";
var CSS2 = `
.sfr{isolation:isolate}
.sfr{position:relative;width:100%;height:100%;overflow:hidden;background:var(--sf-ink);color:var(--sf-bone);font-family:var(--sf-font-sans);font-size:15px;line-height:1.5;box-sizing:border-box;-webkit-font-smoothing:antialiased}
.sfr *{box-sizing:border-box}
.sfr button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer}
.sfr h1,.sfr h2,.sfr p,.sfr ul,.sfr figure{margin:0;padding:0}
.sfr ul{list-style:none}
.sfr a{color:inherit;text-decoration:none}
.sfr :focus-visible{outline:1px solid var(--sf-bone);outline-offset:3px}
.sfr .mono{font-family:var(--sf-font-mono);font-size:11px;line-height:1.4;letter-spacing:.08em;text-transform:uppercase;font-weight:400}
.sfr .mono-m{font-size:12px}
.sfr .muted{color:var(--sf-muted)}
.sfr .serif{font-family:var(--sf-font-serif);font-weight:400;letter-spacing:-.01em}
.sfr .stage{position:absolute;inset:0;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}
.sfr .stage:active{cursor:grabbing}
.sfr .ghost{position:absolute;color:var(--sf-surface);pointer-events:none;z-index:0;line-height:.74;letter-spacing:-.04em;font-style:normal}
.sfr .rail-mask{position:absolute;inset:0;z-index:1}
.sfr .rail-shift{position:absolute;inset:0}
.sfr .rail{position:absolute;inset:0;will-change:transform}
.sfr .slide{position:absolute;transform-origin:50% 60%;will-change:transform}
.sfr .slide:not(.cur){cursor:pointer}
.sfr .clip{position:absolute;inset:0;overflow:hidden;background:var(--sf-surface)}
.sfr .clip img{position:absolute;top:0;left:-10%;width:120%;height:100%;object-fit:cover;object-position:50% 12%;pointer-events:none;max-width:none}
.sfr .dim{position:absolute;inset:0;background:var(--sf-ink);pointer-events:none}
.sfr .sno{position:absolute;left:0;top:0;padding:6px 10px;background:var(--sf-ink);color:var(--sf-bone)}
.sfr .spots{position:absolute;inset:0;pointer-events:none}
.sfr .hs{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;pointer-events:auto;cursor:pointer;z-index:2}
.sfr .slide:not(.cur) .hs{pointer-events:none}
.sfr .hs-dot{position:absolute;inset:0;display:block}
.sfr .hs-dot::before{content:"";position:absolute;left:50%;top:50%;width:16px;height:16px;margin:-8px 0 0 -8px;border:1px solid var(--sf-bone);background:var(--sf-ink-60);border-radius:50%;transition:transform .6s var(--sf-ease),background .4s,border-color .4s}
.sfr .hs-dot::after{content:"";position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;background:var(--sf-bone);border-radius:50%}
.sfr .hs:hover .hs-dot::before,.sfr .hs:focus-visible .hs-dot::before{transform:scale(1.5)}
.sfr .hs:active .hs-dot::before{transform:scale(1.2)}
.sfr .hs.on .hs-dot::before{background:var(--sf-accent);border-color:var(--sf-accent);transform:scale(1.4)}
.sfr .hs-label{position:absolute;left:34px;top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:8px;white-space:nowrap;background:var(--sf-ink-80);padding:5px 9px;pointer-events:none}
.sfr .hs.left .hs-label{left:auto;right:34px;flex-direction:row-reverse}
.sfr .hs-label b{font-weight:500}
.sfr .hs-name{display:block;max-width:0;overflow:hidden;opacity:0;transition:max-width .7s var(--sf-ease),opacity .4s}
.sfr .hs:hover .hs-name,.sfr .hs:focus-visible .hs-name,.sfr .hs.on .hs-name{max-width:220px;opacity:1}
.sfr .connector{position:absolute;height:1px;background:var(--sf-bone);transform-origin:0 50%;z-index:5;pointer-events:none}
.sfr .meta{position:absolute;z-index:3;pointer-events:none}
.sfr .meta-in{height:100%;display:flex;flex-direction:column}
.sfr .mask{display:block;overflow:hidden;padding-bottom:.12em;margin-bottom:-.12em}
.sfr .mask-in{display:block}
.sfr .items{border-top:1px solid var(--sf-line);pointer-events:auto}
.sfr .item{display:grid;grid-template-columns:30px 1fr auto;align-items:center;width:100%;min-height:44px;text-align:left;border-bottom:1px solid var(--sf-line);transition:padding .6s var(--sf-ease),color .4s,background .3s}
.sfr .item:hover,.sfr .item.on{padding-left:8px}
.sfr .item:active{opacity:.7}
.sfr .item.on .item-name{text-decoration:underline;text-underline-offset:5px}
.sfr .bar .items{display:flex;gap:8px;border:0;overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
.sfr .bar .items::-webkit-scrollbar{display:none}
.sfr .bar .items li{flex:none}
.sfr .bar .item{display:flex;gap:10px;border:1px solid var(--sf-line-strong);padding:0 12px;width:auto;white-space:nowrap;font-size:13px}
.sfr .bar .item:hover,.sfr .bar .item.on{padding-left:12px}
.sfr .bar .item.on{background:var(--sf-bone);color:var(--sf-ink)}
.sfr .bar .item.on .muted{color:var(--sf-ink)}
.sfr .bar .item-n{display:none}
.sfr .ctrl{position:absolute;z-index:4;bottom:0;display:flex;align-items:center;justify-content:space-between}
.sfr .ticks{display:flex;align-items:center;gap:20px}
.sfr .ticks ul{display:flex;gap:2px}
.sfr .tick{position:relative;width:28px;height:44px}
.sfr .tick::after{content:"";position:absolute;left:2px;right:2px;top:50%;height:2px;margin-top:-1px;background:var(--sf-line-strong);transition:background .4s,transform .5s var(--sf-ease)}
.sfr .tick:hover::after{background:var(--sf-bone-60)}
.sfr .tick.on::after{background:var(--sf-bone);transform:scaleY(2)}
.sfr .btns{display:flex;gap:8px}
.sfr .prev{width:44px;height:44px;display:grid;place-items:center;border:1px solid var(--sf-line-strong);transition:border-color .4s,opacity .4s,background .3s}
.sfr .prev:hover:not(:disabled){border-color:var(--sf-bone);background:color-mix(in srgb,var(--sf-bone) 10%,transparent)}
.sfr .prev:active:not(:disabled){opacity:.6}
.sfr .prev:disabled{opacity:.3;cursor:default}
.sfr .next{display:inline-flex;align-items:center;gap:22px;min-height:44px;padding:0 20px;background:var(--sf-bone);color:var(--sf-ink);transition:opacity .2s,background .3s}
.sfr .next:hover{background:color-mix(in srgb,var(--sf-bone) 88%,var(--sf-ink))}
.sfr .next:active{opacity:.78}
.sfr .next svg{transition:transform .6s var(--sf-ease)}
.sfr .next:hover svg,.sfr .next:focus-visible svg{transform:translateX(6px)}
.sfr .pd{position:absolute;z-index:40;right:0;bottom:0;display:flex;flex-direction:column;background:var(--sf-ink)}
.sfr .pd.side{border-left:1px solid var(--sf-line-strong)}
.sfr .pd.sheet{left:0;border-top:1px solid var(--sf-line-strong)}
.sfr .pd-head{display:flex;align-items:center;justify-content:space-between;padding:6px 8px 6px 24px;min-height:56px;border-bottom:1px solid var(--sf-line)}
.sfr .pd.sheet .pd-head{padding-left:16px;padding-top:14px}
.sfr .pd-grab{display:block;position:absolute;top:8px;left:50%;width:44px;height:3px;margin-left:-22px;background:var(--sf-line-strong)}
.sfr .ib{display:grid;place-items:center;width:44px;height:44px;transition:background .3s,opacity .2s}
.sfr .ib:hover{background:color-mix(in srgb,var(--sf-bone) 10%,transparent)}
.sfr .ib:active{opacity:.6}
.sfr .pd-body{flex:1;overflow-y:auto;padding:20px 24px 24px}
.sfr .pd.sheet .pd-body{padding:14px 16px 12px}
.sfr .pd-crop{position:relative;aspect-ratio:5/4;background-color:var(--sf-surface);background-repeat:no-repeat;border:1px solid var(--sf-line);margin-bottom:22px}
.sfr .cross{position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px 0 0 -11px}
.sfr .cross::before,.sfr .cross::after{content:"";position:absolute;background:var(--sf-bone)}
.sfr .cross::before{left:50%;top:0;bottom:0;width:1px}
.sfr .cross::after{top:50%;left:0;right:0;height:1px}
.sfr .crop-tag{position:absolute;left:0;bottom:0;background:var(--sf-ink);padding:5px 10px}
.sfr .pd-title{display:flex;align-items:baseline;justify-content:space-between;gap:16px}
.sfr .pd-name{font-size:30px;font-weight:500;letter-spacing:-.03em;line-height:1.05}
.sfr .pd.sheet .pd-name{font-size:24px}
.sfr .pd-meta{display:flex;align-items:center;gap:10px;margin-top:8px}
.sfr .swatch{display:inline-block;width:12px;height:12px;border:1px solid var(--sf-line-strong);flex:none}
.sfr .pd-desc{margin-top:18px;color:var(--sf-bone-60);max-width:44ch}
.sfr .pd.sheet .pd-desc{font-size:14px;margin-top:12px}
.sfr .pd-more{margin-top:26px}
.sfr .pd-more ul{display:flex;gap:8px;margin-top:10px}
.sfr .chip{display:grid;gap:6px;width:78px;text-align:left;border:1px solid transparent;padding:3px;transition:border-color .4s}
.sfr .chip img{width:100%;aspect-ratio:4/5;object-fit:cover;background:var(--sf-surface)}
.sfr .chip span{font-size:9.5px;line-height:1.25;color:var(--sf-bone-60)}
.sfr .chip:hover{border-color:var(--sf-line-strong)}
.sfr .chip.on{border-color:var(--sf-bone)}
.sfr .pd-foot{padding:14px 24px 18px;border-top:1px solid var(--sf-line);display:grid;gap:4px}
.sfr .pd.sheet .pd-foot{padding:10px 16px calc(10px + env(safe-area-inset-bottom))}
.sfr .full{display:inline-flex;align-items:center;gap:6px;min-height:44px;justify-self:start}
.sfr .full:hover{text-decoration:underline;text-underline-offset:5px}
.sfr fieldset{border:0;padding:0;margin:22px 0 0;min-width:0}
.sfr .pd.sheet fieldset{margin-top:14px}
.sfr legend{padding:0;margin-bottom:10px}
.sfr .sizes{display:flex;flex-wrap:wrap;gap:8px}
.sfr .size{min-width:44px;min-height:44px;padding:0 14px;border:1px solid var(--sf-line-strong);font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.06em;transition:background .4s var(--sf-ease),color .4s,border-color .4s,opacity .2s}
.sfr .size:hover:not(:disabled){border-color:var(--sf-bone);background:color-mix(in srgb,var(--sf-bone) 12%,transparent)}
.sfr .size:active:not(:disabled){opacity:.7}
.sfr .size.on{background:var(--sf-bone);color:var(--sf-ink);border-color:var(--sf-bone)}
.sfr .size:disabled{opacity:.35;text-decoration:line-through;cursor:not-allowed}
.sfr .btn{position:relative;display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;min-height:44px;padding:0 18px;border:1px solid var(--sf-bone);background:var(--sf-bone);color:var(--sf-ink);font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;overflow:hidden;isolation:isolate;transition:color .5s var(--sf-ease),opacity .2s}
.sfr .btn::before{content:"";position:absolute;inset:0;background:var(--sf-ink);z-index:-1;transform:translateY(101%);transition:transform .55s var(--sf-ease)}
.sfr .btn:hover:not(:disabled)::before{transform:none}
.sfr .btn:hover:not(:disabled){color:var(--sf-bone)}
.sfr .btn:active:not(:disabled){opacity:.78}
.sfr .btn:disabled{opacity:.4;cursor:not-allowed}
.sfr .sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
@media (prefers-reduced-motion: reduce){.sfr *{transition-duration:.01ms!important}}
`;
var DEFAULT_LOOKS = [{ titleLine1: "Wrap yourself", titleLine2: "in confidence.", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "raw-wool-coat", hotspots: "raw-wool-coat:27:52\nsoft-knit-02:50:31\nfold-trouser:52:76" }, { titleLine1: "Look 02 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "long-coat-01", hotspots: "long-coat-01:30:46\nlayered-tee:50:30\nutility-bag:43:68\nwide-trouser-03:55:82" }, { titleLine1: "Look 03 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "structured-shirt", hotspots: "structured-shirt:45:26\nfold-trouser:47:66" }, { titleLine1: "Look 04 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "work-jacket-02", hotspots: "work-jacket-02:42:24\nutility-bag:30:39\nwide-trouser-03:50:66" }, { titleLine1: "Look 05 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "rib-knit-vest", hotspots: "rib-knit-vest:46:24\nwide-trouser-03:45:66" }, { titleLine1: "Look 06 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "layered-tee", hotspots: "layered-tee:30:26\nheavy-scarf-01:57:40\nfold-trouser:46:70" }, { titleLine1: "Look 07 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "long-coat-01", hotspots: "long-coat-01:40:34\nleather-object-03:31:50" }, { titleLine1: "Look 08 —", titleLine2: "[LOOK TITLE — CONFIRM]", note: "[LOOK NOTE — CONFIRM WITH ADELE]", lead: "heavy-scarf-01", hotspots: "heavy-scarf-01:36:36\nsoft-knit-02:53:40\nfold-trouser:50:80" }].map((l, i) => ({ ...l, image: IMG["looks/look-" + pad2(i + 1)] || void 0 }));
var DEFAULT_PRODUCTS_RW = PRODUCTS.map((p) => ({ ...p, image: prodImg(p.slug) || void 0 }));
var lineV = { enter: (d) => ({ y: d >= 0 ? "108%" : "-108%" }), center: { y: "0%", transition: { duration: 0.85, ease: EASE_T } }, exit: (d) => ({ y: d >= 0 ? "-108%" : "108%", transition: { duration: 0.3, ease: EASE_T } }) };
var wrapV = { enter: {}, center: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } }, exit: { transition: { staggerChildren: 0.025, staggerDirection: -1 } } };
var StillCtx = /* @__PURE__ */ React.createContext(false);
function Line({ dir, children, className: className11 = "" }) {
  const still = React.useContext(StillCtx);
  if (still)
    return /* @__PURE__ */ _jsx3("span", { className: `mask ${className11}`, style: { overflow: "visible" }, children: /* @__PURE__ */ _jsx3("span", { className: "mask-in", children }) });
  return /* @__PURE__ */ _jsx3("span", { className: `mask ${className11}`, children: /* @__PURE__ */ _jsx3(motion2.span, { className: "mask-in", variants: lineV, custom: dir, children }) });
}
var ZOOM = 2.6;
var bgPos = (v) => `${clamp((0.5 - v / 100 * ZOOM) / (1 - ZOOM), 0, 1) * 100}%`;
function Slide(props) {
  const { look, i, x, pitch, left0, slideW, slideH, top, current, activeProduct, onSelect, onJump, dragged, prodOf, reduce } = props;
  const p = useTransform(x, (v) => (v + i * pitch - left0) / pitch);
  const scale = useTransform(p, (v) => 1 - Math.min(Math.abs(v), 1) * 0.1);
  const dim = useTransform(p, (v) => Math.min(Math.abs(v), 1) * 0.62);
  const imgX = useTransform(p, (v) => -v * slideW * 0.1);
  const labelY = useTransform(p, (v) => clamp(v, -1, 1) * 14);
  return /* @__PURE__ */ _jsxs3(motion2.figure, { className: `slide${current ? " cur" : ""}`, style: { left: i * pitch, top, width: slideW, height: slideH, scale }, onClick: () => {
    if (!current && !dragged())
      onJump();
  }, children: [/* @__PURE__ */ _jsxs3("div", { className: "clip", children: [look.image ? /* @__PURE__ */ _jsx3(motion2.img, { src: look.image, alt: `Look ${pad2(look.id)}: ${look.title.join(" ")}`, draggable: false, style: { x: imgX }, loading: i < 2 ? "eager" : "lazy", decoding: "async" }) : null, /* @__PURE__ */ _jsx3(motion2.span, { className: "dim", style: { opacity: dim }, "aria-hidden": "true" }), /* @__PURE__ */ _jsx3(motion2.span, { className: "sno mono", style: { y: labelY }, "aria-hidden": "true", children: pad2(look.id) })] }), /* @__PURE__ */ _jsx3("div", { className: "spots", "aria-hidden": !current, children: look.hotspots.map((h, n) => {
    const prod = prodOf(h.product);
    if (!prod)
      return null;
    const active = activeProduct === h.product;
    return /* @__PURE__ */ _jsxs3(motion2.button, { type: "button", tabIndex: current ? 0 : -1, className: `hs${active ? " on" : ""}${h.x > 62 ? " left" : ""}`, style: { left: `${h.x}%`, top: `${h.y}%` }, initial: false, animate: { opacity: current ? 1 : 0, scale: current ? 1 : 0.6 }, transition: reduce ? { duration: 0 } : { type: "spring", stiffness: 110, damping: 22, delay: current ? 0.35 + n * 0.08 : 0 }, onClick: (e) => {
      e.stopPropagation();
      if (!dragged())
        onSelect(h.product);
    }, "aria-label": `${pad2(n + 1)} ${prod.name}, ${prod.color}, open details`, children: [/* @__PURE__ */ _jsx3("span", { className: "hs-dot" }), /* @__PURE__ */ _jsxs3("span", { className: "hs-label mono", children: [/* @__PURE__ */ _jsx3("b", { children: pad2(n + 1) }), /* @__PURE__ */ _jsx3("span", { className: "hs-name", children: prod.name })] })] }, h.product);
  }) })] });
}
function Drawer(props) {
  const { look, hotspot, product, compact, onClose, onSwitch, onAdd, prodOf, bar, labels, currency, productLinkBase, spring, sheetMax, drawerWidth } = props;
  const [size, setSize] = useState3(null);
  const closeRef = useRef2(null);
  const controls = useDragControls();
  const sizes = splitList(product.sizes);
  const out = splitList(product.soldOut);
  useEffect3(() => {
    setSize(sizes.length === 1 && !out.includes(sizes[0]) ? sizes[0] : null);
  }, [product.slug]);
  useEffect3(() => {
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e) => e.key === "Escape" && onClose();
    __dai_window.addEventListener("keydown", onKey);
    return () => __dai_window.removeEventListener("keydown", onKey);
  }, [hotspot, onClose]);
  const idx = look.hotspots.findIndex((h) => h.product === product.slug);
  return /* @__PURE__ */ _jsxs3(motion2.aside, { className: `pd ${compact ? "sheet" : "side"}`, role: "dialog", "aria-label": `${product.name}, product details`, "data-sf-scroll": "", style: compact ? { maxHeight: sheetMax } : { top: bar, width: drawerWidth }, initial: compact ? { y: "100%" } : { x: "100%" }, animate: { x: 0, y: 0 }, exit: compact ? { y: "100%" } : { x: "100%" }, transition: spring, drag: compact ? "y" : false, dragListener: false, dragControls: controls, dragConstraints: { top: 0, bottom: 0 }, dragElastic: { top: 0, bottom: 0.6 }, onDragEnd: (_, info) => {
    if (info.offset.y > 90 || info.velocity.y > 500)
      onClose();
  }, onPointerDown: (e) => e.stopPropagation(), children: [compact && /* @__PURE__ */ _jsx3("span", { className: "pd-grab", "aria-hidden": "true" }), /* @__PURE__ */ _jsxs3("header", { className: "pd-head", style: compact ? { touchAction: "none" } : void 0, onPointerDown: compact ? (e) => controls.start(e) : void 0, children: [/* @__PURE__ */ _jsxs3("p", { className: "mono muted", children: ["LOOK ", pad2(look.id), " / PIECE ", pad2(idx + 1), " OF ", pad2(look.hotspots.length)] }), /* @__PURE__ */ _jsx3("button", { ref: closeRef, type: "button", className: "ib", onClick: onClose, "aria-label": "Close product details", children: /* @__PURE__ */ _jsx3(Icon2, { name: "cancel-01" }) })] }), /* @__PURE__ */ _jsxs3("div", { className: "pd-body", children: [!compact && /* @__PURE__ */ _jsxs3("div", { className: "pd-crop", style: { backgroundImage: look.image ? `url(${look.image})` : void 0, backgroundSize: `${ZOOM * 100}%`, backgroundPosition: `${bgPos(hotspot.x)} ${bgPos(hotspot.y)}` }, role: "img", "aria-label": `Detail of ${product.name} in look ${pad2(look.id)}`, children: [/* @__PURE__ */ _jsx3("span", { className: "cross", "aria-hidden": "true" }), /* @__PURE__ */ _jsx3("span", { className: "crop-tag mono", children: product.sku })] }), /* @__PURE__ */ _jsxs3("div", { className: "pd-title", children: [/* @__PURE__ */ _jsx3("h2", { className: "pd-name", children: product.name }), /* @__PURE__ */ _jsx3("p", { className: "mono mono-m", children: money2(product.price, currency) })] }), /* @__PURE__ */ _jsxs3("p", { className: "mono muted pd-meta", children: [/* @__PURE__ */ _jsx3("i", { className: "swatch", style: { background: toneColor(product.tone) }, "aria-hidden": "true" }), product.color, !compact && /* @__PURE__ */ _jsxs3(_Fragment3, { children: [" / ", product.sku] })] }), /* @__PURE__ */ _jsxs3("fieldset", { children: [/* @__PURE__ */ _jsx3("legend", { className: "mono muted", children: "SIZE" }), /* @__PURE__ */ _jsx3("div", { className: "sizes", children: sizes.map((s) => /* @__PURE__ */ _jsx3("button", { type: "button", className: `size${size === s ? " on" : ""}`, disabled: out.includes(s), "aria-pressed": size === s, onClick: () => setSize(s), children: s }, s)) })] }), /* @__PURE__ */ _jsx3("p", { className: "pd-desc", children: product.short }), !compact && look.hotspots.length > 1 && /* @__PURE__ */ _jsxs3("div", { className: "pd-more", children: [/* @__PURE__ */ _jsx3("p", { className: "mono muted", children: "IN THIS LOOK" }), /* @__PURE__ */ _jsx3("ul", { children: look.hotspots.map((h) => {
    const p = prodOf(h.product);
    if (!p)
      return null;
    return /* @__PURE__ */ _jsx3("li", { children: /* @__PURE__ */ _jsxs3("button", { type: "button", className: `chip${h.product === product.slug ? " on" : ""}`, onClick: () => onSwitch(h.product), "aria-label": p.name, children: [p.image ? /* @__PURE__ */ _jsx3("img", { src: p.image, alt: "", draggable: false }) : /* @__PURE__ */ _jsx3("span", { style: { display: "block", aspectRatio: "4/5" } }), /* @__PURE__ */ _jsx3("span", { className: "mono", children: p.tag })] }) }, h.product);
  }) })] })] }), /* @__PURE__ */ _jsxs3("footer", { className: "pd-foot", children: [/* @__PURE__ */ _jsxs3("button", { type: "button", className: "btn", disabled: !size, onClick: () => size && onAdd(product, size), children: [/* @__PURE__ */ _jsx3("span", { children: size ? labels.add : labels.select }), /* @__PURE__ */ _jsx3("span", { children: money2(product.price, currency) })] }), /* @__PURE__ */ _jsxs3("a", { href: (productLinkBase || "/product/") + product.slug, className: "full mono", children: ["FULL DETAILS ", /* @__PURE__ */ _jsx3(Icon2, { name: "arrow-right-02", size: 14 })] })] })] }, "drawer");
}
function RunwayStage(props) {
  useFonts2(props.loadFonts === true);
  const { looks: looksIn, products: prodsIn, initialLook, compactBelow, barHeight, barHeightCompact, springStiffness, springDamping, wheelSensitivity, showIntro, showNudge, labelNext, labelShop, labelAdd, labelSelect, shopLink, productLinkBase, currency, drawerWidth, sidePadding, ariaLabel } = props;
  const canvas = useIsCanvas2();
  const reduce = !!useReducedMotion2();
  const rootRef = useRef2(null);
  const stageRef = useRef2(null);
  const { w: W, h: H } = useBox(rootRef);
  const compact = W > 0 && W < compactBelow;
  const products = useMemo(() => (prodsIn && prodsIn.length ? prodsIn : DEFAULT_PRODUCTS_RW).map((p) => ({ ...p, price: Number(p.price) || 0, image: imgUrl(p.image, prodImg(p.slug)) })), [prodsIn]);
  const prodOf = useCallback2((slug) => products.find((p) => p.slug === slug), [products]);
  const looks = useMemo(() => (looksIn && looksIn.length ? looksIn : DEFAULT_LOOKS).map((l, i) => ({ id: i + 1, title: [String(l.titleLine1 || ""), String(l.titleLine2 || "")], note: String(l.note || ""), image: imgUrl(l.image, IMG["looks/look-" + pad2(i + 1)] || ""), lead: String(l.lead || ""), hotspots: String(l.hotspots || "").split(/\n|;/).map((s) => s.trim()).filter(Boolean).map((s) => {
    const [product, x2, y] = s.split(":");
    return { product: (product || "").trim(), x: Number(x2) || 50, y: Number(y) || 50 };
  }).filter((h) => h.product) })), [looksIn]);
  const count = looks.length;
  const spring = reduce ? { duration: 0 } : { type: "spring", stiffness: springStiffness, damping: springDamping, restDelta: 0.5 };
  const springRef = useRef2(spring);
  springRef.current = spring;
  const start = clamp(Math.round(initialLook) - 1, 0, Math.max(0, count - 1));
  const [index, setIndex] = useState3(start);
  const [dir, setDir] = useState3(1);
  const [drawer, setDrawer] = useState3(null);
  const [bagOpen, setBagOpen] = useState3(false);
  const x = useMotionValue(0);
  const intro = useRef2(true);
  const draggedAt = useRef2(0);
  const touched = useRef2(false);
  const indexRef = useRef2(index);
  indexRef.current = index;
  const g = useMemo(() => {
    const bar = compact ? barHeightCompact : barHeight;
    const reserve = compact ? 150 : 84;
    const top = bar + (compact ? 10 : 6);
    const slideH = Math.max(240, H - top - reserve);
    const slideW = Math.min(slideH * 0.68, W * (compact ? 0.78 : 0.4));
    const gap = compact ? 14 : Math.round(W * 0.035);
    const pitch = slideW + gap;
    const center = compact ? W / 2 : W * 0.585;
    const left0 = center - slideW / 2;
    return { bar, top, slideH, slideW, pitch, left0, w: W, h: H };
  }, [W, H, compact, barHeight, barHeightCompact]);
  const pad = sidePadding > 0 ? sidePadding : clamp(W * 0.024, 16, 36);
  const target = useCallback2((i) => g.left0 - i * g.pitch, [g.left0, g.pitch]);
  useEffect3(() => {
    if (canvas)
      return;
    const o = () => setBagOpen(true);
    const c = () => setBagOpen(false);
    __dai_window.addEventListener(EV_OPEN2, o);
    __dai_window.addEventListener(EV_CLOSE2, c);
    return () => {
      __dai_window.removeEventListener(EV_OPEN2, o);
      __dai_window.removeEventListener(EV_CLOSE2, c);
    };
  }, [canvas]);
  const [mounted, setMounted] = useState3(false);
  useEffect3(() => setMounted(true), []);
  const ready = mounted && g.w > 0 && g.h > 0 && count > 0;
  useEffect3(() => {
    if (!ready)
      return;
    if (intro.current) {
      intro.current = false;
      if (!canvas) {
        try {
          const hm = /^#look-(\d+)$/.exec(__dai_window.location.hash || "");
          const q = hm ? Number(hm[1]) : Number(new URLSearchParams(__dai_window.location.search).get("look"));
          if (q >= 1 && q <= count && q - 1 !== indexRef.current) {
            indexRef.current = q - 1;
            setIndex(q - 1);
          }
        } catch (e) {
        }
      }
      if (canvas || reduce || !showIntro) {
        x.set(target(indexRef.current));
      } else {
        x.set(target(indexRef.current) + g.w * (compact ? 0.7 : 0.42));
        const c = animate(x, target(indexRef.current), { ...springRef.current, delay: 0.62 });
        return () => c.stop();
      }
      return;
    }
    x.set(target(indexRef.current));
  }, [ready, g.left0, g.pitch, compact]);
  const go = useCallback2((next2, keepDrawer) => {
    const clamped = clamp(next2, 0, count - 1);
    touched.current = true;
    if (clamped === indexRef.current) {
      animate(x, target(clamped), springRef.current);
      return;
    }
    setDir(clamped > indexRef.current ? 1 : -1);
    setIndex(clamped);
    if (!keepDrawer)
      setDrawer(null);
    animate(x, target(clamped), springRef.current);
  }, [target, x, count]);
  const next = useCallback2(() => go(indexRef.current + 1), [go]);
  const prev = useCallback2(() => go(indexRef.current - 1), [go]);
  useEffect3(() => {
    if (canvas)
      return;
    const onHash = () => {
      const m = /^#look-(\d+)$/.exec(__dai_window.location.hash || "");
      if (m) {
        const n = Number(m[1]);
        if (n >= 1 && n <= count)
          go(n - 1);
      }
    };
    __dai_window.addEventListener("hashchange", onHash);
    return () => __dai_window.removeEventListener("hashchange", onHash);
  }, [go, count, canvas]);
  useEffect3(() => {
    if (canvas)
      return;
    const onKey = (e) => {
      if (bagOpen)
        return;
      const t = e.target;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
        return;
      const r = rootRef.current?.getBoundingClientRect();
      if (!r || r.bottom <= 0 || r.top >= __dai_window.innerHeight)
        return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    __dai_window.addEventListener("keydown", onKey);
    return () => __dai_window.removeEventListener("keydown", onKey);
  }, [next, prev, bagOpen, canvas]);
  useEffect3(() => {
    const el = stageRef.current;
    if (!el || canvas)
      return;
    let locked = false;
    let accum = 0;
    let lastTrigger = 0;
    let timer = 0;
    const onWheel = (e) => {
      if (e.target.closest("[data-sf-scroll]"))
        return;
      e.preventDefault();
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      __dai_window.clearTimeout(timer);
      timer = __dai_window.setTimeout(() => {
        accum = 0;
        if (performance.now() - lastTrigger > 450)
          locked = false;
      }, 140);
      if (locked)
        return;
      accum += d;
      if (Math.abs(accum) > wheelSensitivity) {
        const step = accum > 0 ? 1 : -1;
        accum = 0;
        locked = true;
        lastTrigger = performance.now();
        go(indexRef.current + step);
        __dai_window.setTimeout(() => {
          locked = false;
        }, 900);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      __dai_window.clearTimeout(timer);
    };
  }, [go, canvas, wheelSensitivity]);
  const panStart = useRef2(0);
  const onPanStart = () => {
    x.stop();
    panStart.current = x.get();
    touched.current = true;
  };
  const onPan = (_, info) => {
    const min = target(count - 1);
    const max = target(0);
    const raw = panStart.current + info.offset.x;
    const v = raw > max ? max + (raw - max) * 0.28 : raw < min ? min + (raw - min) * 0.28 : raw;
    x.set(v);
    if (Math.abs(info.offset.x) > 4)
      draggedAt.current = performance.now();
  };
  const onPanEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 4)
      draggedAt.current = performance.now();
    const threshold = g.pitch * 0.16;
    if (info.offset.x < -threshold || info.velocity.x < -380)
      go(indexRef.current + 1);
    else if (info.offset.x > threshold || info.velocity.x > 380)
      go(indexRef.current - 1);
    else
      go(indexRef.current);
  };
  const dragged = useCallback2(() => performance.now() - draggedAt.current < 140, []);
  useEffect3(() => {
    if (!ready || canvas || reduce || !showNudge)
      return;
    const t = __dai_window.setTimeout(() => {
      if (touched.current)
        return;
      const base = target(indexRef.current);
      animate(x, base - 34, { duration: 0.7, ease: EASE_T }).then(() => {
        if (!touched.current)
          animate(x, base, springRef.current);
      });
    }, 3600);
    return () => __dai_window.clearTimeout(t);
  }, [ready]);
  if (count === 0) {
    return /* @__PURE__ */ _jsxs3("div", { ref: rootRef, className: "sfr", style: rootVars2(props), children: [/* @__PURE__ */ _jsx3("style", { dangerouslySetInnerHTML: { __html: CSS2 } }), /* @__PURE__ */ _jsx3("p", { className: "mono", style: { padding: 24 }, children: "Runway Stage: add looks in the component controls." })] });
  }
  const look = looks[Math.min(index, count - 1)];
  const lead = prodOf(look.lead) || prodOf(look.hotspots[0]?.product);
  const drawerLook = drawer ? looks.find((l) => l.id === drawer.look) || look : look;
  const hotspot = drawer ? drawerLook.hotspots.find((h) => h.product === drawer.product) || null : null;
  const dProduct = hotspot ? prodOf(hotspot.product) : null;
  const sheetH = compact ? Math.min(g.h * 0.56, 430) : 0;
  let shiftX = 0;
  let shiftY = 0;
  let hsX = 0;
  let hsY = 0;
  if (hotspot) {
    hsX = g.left0 + hotspot.x / 100 * g.slideW;
    hsY = g.top + hotspot.y / 100 * g.slideH;
    if (!compact) {
      shiftX = Math.max(-g.w * 0.22, Math.min(0, g.w - drawerWidth - 150 - hsX));
      hsX += shiftX;
    } else {
      const free = (g.bar + (g.h - sheetH)) / 2;
      shiftY = Math.min(0, free - hsY);
      hsY += shiftY;
    }
  }
  const lineLeft = hsX + 12;
  const lineWidth = Math.max(0, g.w - drawerWidth - lineLeft);
  const atEnd = index === count - 1;
  const titlePx = compact ? 36 : clamp(W * 0.037, 36, 62);
  const ghostPx = compact ? W * 0.82 : clamp(W * 0.36, 240, 620);
  const metaW = Math.min(W * 0.26, 380);
  const onAdd = (p, size) => {
    bagAdd({ slug: p.slug, name: p.name, color: p.color, price: p.price, image: p.image, size, vid: pickVariant(String(p.shopify || ""), size) });
    setDrawer(null);
    __dai_window.setTimeout(() => openBag(), 260);
  };
  const maskStyle = compact ? {} : { WebkitMaskImage: `linear-gradient(to right, transparent 0, transparent ${W * 0.28}px, black ${W * 0.34}px)`, maskImage: `linear-gradient(to right, transparent 0, transparent ${W * 0.28}px, black ${W * 0.34}px)` };
  return /* @__PURE__ */ _jsx3(StillCtx.Provider, { value: canvas, children: /* @__PURE__ */ _jsxs3("div", { ref: rootRef, className: "sfr", style: rootVars2(props), "aria-roledescription": "carousel", "aria-label": ariaLabel, role: "region", children: [/* @__PURE__ */ _jsx3("style", { dangerouslySetInnerHTML: { __html: CSS2 } }), ready && /* @__PURE__ */ _jsxs3(motion2.div, { ref: stageRef, className: "stage", onPanStart: canvas ? void 0 : onPanStart, onPan: canvas ? void 0 : onPan, onPanEnd: canvas ? void 0 : onPanEnd, children: [/* @__PURE__ */ _jsx3(AnimatePresence2, { mode: "wait", custom: dir, initial: false, children: /* @__PURE__ */ _jsx3(motion2.div, { className: "ghost serif", "aria-hidden": "true", style: { fontSize: ghostPx, left: "-0.04em", bottom: compact ? 130 : "0.2vh" }, initial: { x: dir * 80, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: dir * -80, opacity: 0 }, transition: { duration: reduce ? 0 : 0.8, ease: EASE_T }, children: pad2(look.id) }, look.id) }), /* @__PURE__ */ _jsx3("div", { className: "rail-mask", style: maskStyle, children: /* @__PURE__ */ _jsx3(motion2.div, { className: "rail-shift", animate: { x: shiftX, y: shiftY }, transition: spring, children: /* @__PURE__ */ _jsx3(motion2.div, { className: "rail", style: { x }, children: looks.map((l, i) => /* @__PURE__ */ _jsx3(Slide, { look: l, i, x, pitch: g.pitch, left0: g.left0, slideW: g.slideW, slideH: g.slideH, top: g.top, current: i === index, activeProduct: drawer && drawer.look === l.id ? drawer.product : null, onSelect: (slug) => setDrawer({ look: l.id, product: slug }), onJump: () => go(i), dragged, prodOf, reduce }, l.id)) }) }) }), /* @__PURE__ */ _jsx3(AnimatePresence2, { children: hotspot && !compact && /* @__PURE__ */ _jsx3(motion2.span, { className: "connector", style: { left: lineLeft, top: hsY, width: lineWidth }, initial: { scaleX: 0 }, animate: { scaleX: 1 }, exit: { scaleX: 0 }, transition: { duration: reduce ? 0 : 0.7, ease: EASE_T, delay: reduce ? 0 : 0.12 }, "aria-hidden": "true" }, "link") }), /* @__PURE__ */ _jsx3("div", { className: `meta${compact ? " bar" : ""}`, style: compact ? { left: 0, right: 0, bottom: 56, padding: `10px ${pad}px 6px`, background: "var(--sf-ink)", pointerEvents: "auto" } : { left: pad, top: g.bar + 24, bottom: 96, width: metaW }, onPointerDown: (e) => compact && e.stopPropagation(), children: /* @__PURE__ */ _jsx3(AnimatePresence2, { mode: "wait", custom: dir, initial: !canvas, children: /* @__PURE__ */ _jsxs3(motion2.div, { className: "meta-in", style: compact ? { height: "auto", gap: 8 } : void 0, variants: wrapV, initial: canvas ? false : "enter", animate: "center", exit: "exit", custom: dir, children: [/* @__PURE__ */ _jsx3(Line, { dir, children: /* @__PURE__ */ _jsxs3("span", { className: "mono mono-m", style: compact ? { display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } : { display: "block", paddingBottom: 14 }, children: ["LOOK ", pad2(look.id), lead ? ` / ${lead.tag} / ${String(lead.color).toUpperCase()} / ${money2(lead.price, currency)}` : ""] }) }), !compact ? /* @__PURE__ */ _jsxs3(_Fragment3, { children: [/* @__PURE__ */ _jsxs3("h1", { style: { marginTop: "auto", fontWeight: 400 }, children: [/* @__PURE__ */ _jsx3(Line, { dir, className: "serif", children: /* @__PURE__ */ _jsx3("span", { style: { display: "block", fontSize: titlePx, lineHeight: 1.02 }, children: look.title[0] }) }), /* @__PURE__ */ _jsx3(Line, { dir, className: "serif", children: /* @__PURE__ */ _jsx3("em", { style: { display: "block", fontSize: titlePx, lineHeight: 1.02 }, children: look.title[1] }) })] }), /* @__PURE__ */ _jsx3(Line, { dir, children: /* @__PURE__ */ _jsx3("span", { style: { display: "block", marginTop: 18, maxWidth: "32ch", fontSize: 14, color: "var(--sf-bone-60)" }, children: look.note }) })] }) : /* @__PURE__ */ _jsx3("h1", { className: "sr", children: look.title.join(" ") }), /* @__PURE__ */ _jsx3(Line, { dir, children: /* @__PURE__ */ _jsx3("ul", { className: "items", style: compact ? void 0 : { marginTop: 24 }, onPointerDown: (e) => e.stopPropagation(), children: look.hotspots.map((h, n) => {
    const p = prodOf(h.product);
    if (!p)
      return null;
    const on = drawer?.product === h.product && drawer.look === look.id;
    return /* @__PURE__ */ _jsx3("li", { children: /* @__PURE__ */ _jsxs3("button", { type: "button", className: `item${on ? " on" : ""}`, onClick: () => setDrawer({ look: look.id, product: h.product }), children: [/* @__PURE__ */ _jsx3("span", { className: "mono muted item-n", children: pad2(n + 1) }), /* @__PURE__ */ _jsx3("span", { className: "item-name", children: p.name }), /* @__PURE__ */ _jsx3("span", { className: "mono item-p", children: money2(p.price, currency) })] }) }, h.product);
  }) }) })] }, look.id) }) }), /* @__PURE__ */ _jsxs3("div", { className: "ctrl", style: { left: compact ? 0 : pad, right: compact ? 0 : pad, height: compact ? 56 : 84, padding: compact ? `0 ${pad}px` : 0, background: compact ? "var(--sf-ink)" : "transparent", borderTop: compact ? "1px solid var(--sf-line)" : 0 }, onPointerDown: (e) => e.stopPropagation(), children: [/* @__PURE__ */ _jsxs3("div", { className: "ticks", children: [/* @__PURE__ */ _jsxs3("span", { className: "mono", "aria-live": "polite", children: [pad2(index + 1), " / ", pad2(count)] }), !compact && /* @__PURE__ */ _jsx3("ul", { role: "tablist", "aria-label": "Looks", children: looks.map((l, i) => /* @__PURE__ */ _jsx3("li", { children: /* @__PURE__ */ _jsx3("button", { type: "button", role: "tab", "aria-selected": i === index, "aria-label": `Go to look ${pad2(l.id)}`, className: `tick${i === index ? " on" : ""}`, onClick: () => go(i) }) }, l.id)) })] }), /* @__PURE__ */ _jsxs3("div", { className: "btns", children: [/* @__PURE__ */ _jsx3("button", { type: "button", className: "prev", onClick: prev, disabled: index === 0, "aria-label": "Previous look", children: /* @__PURE__ */ _jsx3(Icon2, { name: "arrow-left-02" }) }), atEnd ? /* @__PURE__ */ _jsxs3("a", { href: shopLink || "/shop", className: "next mono mono-m", style: compact ? { padding: "0 16px" } : void 0, children: [/* @__PURE__ */ _jsx3("span", { children: labelShop }), /* @__PURE__ */ _jsx3(Icon2, { name: "arrow-right-02" })] }) : /* @__PURE__ */ _jsxs3("button", { type: "button", className: "next mono mono-m", onClick: next, style: compact ? { padding: "0 16px" } : void 0, children: [/* @__PURE__ */ _jsx3("span", { children: labelNext }), /* @__PURE__ */ _jsx3(Icon2, { name: "arrow-right-02" })] })] })] })] }), /* @__PURE__ */ _jsx3(AnimatePresence2, { children: ready && hotspot && dProduct && /* @__PURE__ */ _jsx3(Drawer, { look: drawerLook, hotspot, product: dProduct, compact, onClose: () => setDrawer(null), onSwitch: (slug) => setDrawer({ look: drawerLook.id, product: slug }), onAdd, prodOf, bar: g.bar, labels: { add: labelAdd, select: labelSelect }, currency, productLinkBase, spring, sheetMax: `${Math.round(sheetH / g.h * 100) || 56}%`, drawerWidth }, "drawer") })] }) });
}
RunwayStage.displayName = "Runway Stage";
addPropertyControls3(RunwayStage, { looks: { type: ControlType3.Array, title: "Looks", defaultValue: DEFAULT_LOOKS, control: { type: ControlType3.Object, controls: { image: { type: ControlType3.Image, title: "Image" }, titleLine1: { type: ControlType3.String, title: "Title 1", defaultValue: "Title," }, titleLine2: { type: ControlType3.String, title: "Title 2 (italic)", defaultValue: "second line" }, note: { type: ControlType3.String, title: "Note", defaultValue: "", displayTextArea: true }, lead: { type: ControlType3.String, title: "Lead product", defaultValue: "", description: "Product slug shown in the spec line" }, hotspots: { type: ControlType3.String, title: "Hotspots", defaultValue: "", displayTextArea: true, description: "One per line: product-slug:x:y (x and y in percent of the image)" } } } }, products: { type: ControlType3.Array, title: "Products", defaultValue: DEFAULT_PRODUCTS_RW, control: { type: ControlType3.Object, controls: { slug: { type: ControlType3.String, title: "Slug", defaultValue: "product" }, name: { type: ControlType3.String, title: "Name", defaultValue: "Product" }, sku: { type: ControlType3.String, title: "SKU", defaultValue: "AD-AW26-00" }, tag: { type: ControlType3.String, title: "Tag", defaultValue: "PRODUCT 00" }, price: { type: ControlType3.Number, title: "Price", defaultValue: 100, min: 0, max: 1e5, step: 1 }, color: { type: ControlType3.String, title: "Color", defaultValue: "Charcoal" }, tone: { type: ControlType3.Enum, title: "Swatch", options: ["charcoal", "bone", "stone", "olive", "black", "oatmeal", "ash"], defaultValue: "charcoal" }, sizes: { type: ControlType3.String, title: "Sizes", defaultValue: "XS,S,M,L,XL" }, soldOut: { type: ControlType3.String, title: "Sold out", defaultValue: "" }, shopify: { type: ControlType3.String, title: "Shopify variants", defaultValue: "", description: "Optional. Variant IDs per size, for example S:123, M:456" }, short: { type: ControlType3.String, title: "Description", defaultValue: "", displayTextArea: true }, image: { type: ControlType3.Image, title: "Image" } } } }, initialLook: { type: ControlType3.Number, title: "Start look", defaultValue: 1, min: 1, max: 20, step: 1 }, shopLink: { type: ControlType3.Link, title: "Shop link" }, productLinkBase: { type: ControlType3.String, title: "Product path", defaultValue: "/product/" }, labelNext: { type: ControlType3.String, title: "Next", defaultValue: "NEXT LOOK" }, labelShop: { type: ControlType3.String, title: "Shop", defaultValue: "VIEW SHOP" }, labelAdd: { type: ControlType3.String, title: "Add", defaultValue: "REQUEST THIS PIECE" }, labelSelect: { type: ControlType3.String, title: "Select size", defaultValue: "SELECT A SIZE" }, ariaLabel: { type: ControlType3.String, title: "Aria label", defaultValue: "AW26 runway" }, currency: { type: ControlType3.String, title: "Currency", defaultValue: "$" }, compactBelow: { type: ControlType3.Number, title: "Compact below", defaultValue: 810, min: 320, max: 1400, unit: "px" }, barHeight: { type: ControlType3.Number, title: "Nav height", defaultValue: 64, min: 0, max: 200, unit: "px" }, barHeightCompact: { type: ControlType3.Number, title: "Nav height compact", defaultValue: 58, min: 0, max: 200, unit: "px" }, drawerWidth: { type: ControlType3.Number, title: "Drawer width", defaultValue: 440, min: 320, max: 640, unit: "px" }, sidePadding: { type: ControlType3.Number, title: "Side padding", defaultValue: 0, min: 0, max: 120, unit: "px", description: "0 = automatic (matches the page gutter)" }, springStiffness: { type: ControlType3.Number, title: "Stiffness", defaultValue: 110, min: 20, max: 400 }, springDamping: { type: ControlType3.Number, title: "Damping", defaultValue: 22, min: 5, max: 80 }, wheelSensitivity: { type: ControlType3.Number, title: "Wheel", defaultValue: 36, min: 5, max: 200 }, showIntro: { type: ControlType3.Boolean, title: "Intro", defaultValue: true }, showNudge: { type: ControlType3.Boolean, title: "Nudge", defaultValue: true }, ...fontControls2, ...colorControls2 });

// http-url:https://framerusercontent.com/modules/RNNTKJmzXMXL4qAEXEWl/uLepiaH2JwR6udaiLWOx/ijUnoh22D.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Geist-regular", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDQ3pna6VEdtKCL.woff2", weight: "400" }] }];
var css = [`.framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-Qb0Lx .framer-styles-preset-1n7l0dv:not(.rich-text-wrapper), .framer-Qb0Lx .framer-styles-preset-1n7l0dv.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-Qb0Lx";

// http-url:https://framerusercontent.com/modules/MSYR2iffi3ErdGhvQriA/kqb5ioiMtLRgMxASkcwP/Nlt6RdS7c.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["GF;Instrument Serif-italic", "GF;Instrument Serif-italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Instrument Serif", openType: true, source: "google", style: "italic", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css2 = [`.framer-7mwGA .framer-styles-preset-rp1lc:not(.rich-text-wrapper), .framer-7mwGA .framer-styles-preset-rp1lc.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 38px; --framer-font-style: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-7mwGA .framer-styles-preset-rp1lc:not(.rich-text-wrapper), .framer-7mwGA .framer-styles-preset-rp1lc.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 31.2px; --framer-font-style: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-7mwGA .framer-styles-preset-rp1lc:not(.rich-text-wrapper), .framer-7mwGA .framer-styles-preset-rp1lc.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-7mwGA .framer-styles-preset-rp1lc:not(.rich-text-wrapper), .framer-7mwGA .framer-styles-preset-rp1lc.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className2 = "framer-7mwGA";

// http-url:https://framerusercontent.com/modules/qfU8FkOXpcabil4mtViZ/njO7fJuobb9wncIgfIl4/qulxcVUwb.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["GF;Geist-500", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-500italic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2", weight: "500" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDi3pna6VEdtKCL.woff2", weight: "500" }] }];
var css3 = [`.framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-YyDo1 .framer-styles-preset-1w2zawr:not(.rich-text-wrapper), .framer-YyDo1 .framer-styles-preset-1w2zawr.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className3 = "framer-YyDo1";

// http-url:https://framerusercontent.com/modules/om9UoJ2NRcpXdKl5kgqf/s9wzEbW0UJ2knJxk2loH/XhiG8yeyc.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["GF;Instrument Serif-regular", "GF;Instrument Serif-italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Instrument Serif", openType: true, source: "google", style: "normal", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }, { cssFamilyName: "Instrument Serif", openType: true, source: "google", style: "italic", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css4 = [`.framer-8igeK .framer-styles-preset-v2e5c6:not(.rich-text-wrapper), .framer-8igeK .framer-styles-preset-v2e5c6.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-8igeK .framer-styles-preset-v2e5c6:not(.rich-text-wrapper), .framer-8igeK .framer-styles-preset-v2e5c6.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 31.2px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-8igeK .framer-styles-preset-v2e5c6:not(.rich-text-wrapper), .framer-8igeK .framer-styles-preset-v2e5c6.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-8igeK .framer-styles-preset-v2e5c6:not(.rich-text-wrapper), .framer-8igeK .framer-styles-preset-v2e5c6.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className4 = "framer-8igeK";

// http-url:https://framerusercontent.com/modules/ReNjpjbVq5VWNhot2nou/izLZs2cRlPNsGN7YFPbR/xsFHtZz0b.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css5 = [`.framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-k0wRo .framer-styles-preset-1vkorbo:not(.rich-text-wrapper), .framer-k0wRo .framer-styles-preset-1vkorbo.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className5 = "framer-k0wRo";

// http-url:https://framerusercontent.com/modules/mK1KalBQLozYzCXGcgYe/Swu5ifRCRbva2w24MGSX/UlNizQwZu.js
import { jsx as _jsx9, jsxs as _jsxs7 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls9, ComponentViewportProvider, ControlType as ControlType9, cx as cx4, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle4, ResolveLinks, RichText as RichText4, runTasksWithYield, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useRouter, useVariantState as useVariantState4, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion6, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/QQOBRtthq3ZAwjWMB0nA/CfC0TUJf8tvHatXvt1Lt/StaticForm_BagButton.js
import { jsx as _jsx4, jsxs as _jsxs4 } from "react/jsx-runtime";
import { useState as useState4, useEffect as useEffect4, useLayoutEffect as useLayoutEffect3 } from "react";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType4, RenderTarget as RenderTarget4 } from "./_framer-runtime.js";
var BAG_KEY3 = "static-form:bag:v1";
var EV_BAG3 = "static-form:bag";
var EV_OPEN3 = "static-form:bag-open";
function readBag3() {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(BAG_KEY3) : null;
    const arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr))
      return [];
    return arr.filter((l) => l && typeof l.slug === "string" && typeof l.name === "string" && typeof l.size === "string" && typeof l.price === "number" && typeof l.qty === "number" && l.qty > 0).map((l) => ({ slug: l.slug, name: l.name, color: String(l.color || ""), price: l.price, image: String(l.image || ""), size: l.size, qty: Math.min(9, l.qty) }));
  } catch (e) {
    return [];
  }
}
function openBag2() {
  __dai_window.dispatchEvent(new CustomEvent(EV_OPEN3));
}
function useBag2() {
  const [lines, setLines] = useState4([]);
  useEffect4(() => {
    const r = () => setLines(readBag3());
    r();
    __dai_window.addEventListener(EV_BAG3, r);
    __dai_window.addEventListener("storage", r);
    return () => {
      __dai_window.removeEventListener(EV_BAG3, r);
      __dai_window.removeEventListener("storage", r);
    };
  }, []);
  return lines;
}
function useIsCanvas3() {
  return RenderTarget4.current() === RenderTarget4.canvas || RenderTarget4.current() === RenderTarget4.thumbnail;
}
function rootVars3(p) {
  return { "--sf-ink": p.ink, "--sf-bone": p.bone, "--sf-surface": p.surface, "--sf-muted": p.muted, "--sf-accent": p.accent, "--sf-line": "color-mix(in srgb, var(--sf-bone) 16%, transparent)", "--sf-line-strong": "color-mix(in srgb, var(--sf-bone) 34%, transparent)", "--sf-bone-60": "color-mix(in srgb, var(--sf-bone) 60%, transparent)", "--sf-ink-80": "color-mix(in srgb, var(--sf-ink) 80%, transparent)", "--sf-ink-60": "color-mix(in srgb, var(--sf-ink) 60%, transparent)", "--sf-font-sans": p.fontSans, "--sf-font-serif": p.fontSerif, "--sf-font-mono": p.fontMono, "--sf-ease": "cubic-bezier(0.16, 1, 0.3, 1)" };
}
var colorControls3 = { ink: { type: ControlType4.Color, title: "Ink", defaultValue: "#11110F" }, bone: { type: ControlType4.Color, title: "Bone", defaultValue: "#F4EFE6" }, surface: { type: ControlType4.Color, title: "Surface", defaultValue: "#1A1916" }, muted: { type: ControlType4.Color, title: "Muted", defaultValue: "#858178" }, accent: { type: ControlType4.Color, title: "Accent", defaultValue: "#B8975A" } };
var fontControls3 = { fontSans: { type: ControlType4.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontSerif: { type: ControlType4.String, title: "Font serif", defaultValue: "'Instrument Serif', 'Times New Roman', serif" }, fontMono: { type: ControlType4.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" }, loadFonts: { type: ControlType4.Boolean, title: "Load fonts", defaultValue: false } };
function useFonts3(on) {
  useEffect4(() => {
    if (!on || typeof document === "undefined")
      return;
    if (document.getElementById("sf-fonts"))
      return;
    const l = document.createElement("link");
    l.id = "sf-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(l);
  }, [on]);
}
function BagButton(props) {
  useFonts3(props.loadFonts === true);
  const { label, showCount, hoverUnderline, openOnClick, fontSize, letterSpacing, fontMono, bone, ink, surface, muted, accent } = props;
  const canvas = useIsCanvas3();
  const lines = useBag2();
  const count = canvas ? 2 : lines.reduce((n, l) => n + l.qty, 0);
  const [hover, setHover] = useState4(false);
  const [press, setPress] = useState4(false);
  const text = showCount ? `${label} (${count})` : label;
  return /* @__PURE__ */ _jsx4("button", { type: "button", "aria-label": `${text}, open bag`, onClick: canvas || !openOnClick ? void 0 : openBag2, onPointerEnter: () => setHover(true), onPointerLeave: () => {
    setHover(false);
    setPress(false);
  }, onPointerDown: () => setPress(true), onPointerUp: () => setPress(false), style: { ...rootVars3(props), position: "relative", display: "inline-flex", alignItems: "center", height: "100%", minHeight: 44, padding: "0 2px", margin: 0, border: 0, background: "transparent", color: "var(--sf-bone)", fontFamily: "var(--sf-font-mono)", fontSize, lineHeight: 1.4, letterSpacing: `${letterSpacing}em`, textTransform: "uppercase", cursor: "pointer", opacity: press ? 0.6 : 1, transition: "opacity 0.2s", whiteSpace: "nowrap" }, children: /* @__PURE__ */ _jsxs4("span", { style: { position: "relative", paddingBottom: 2, color: hover ? "var(--sf-bone)" : "var(--sf-bone-60)", transition: "color 0.4s var(--sf-ease)" }, children: [text, hoverUnderline && /* @__PURE__ */ _jsx4("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, background: "currentColor", transformOrigin: "0 50%", transform: hover ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.6s var(--sf-ease)" } })] }) });
}
BagButton.displayName = "Bag Button";
addPropertyControls4(BagButton, { label: { type: ControlType4.String, title: "Label", defaultValue: "BAG" }, showCount: { type: ControlType4.Boolean, title: "Show count", defaultValue: true }, openOnClick: { type: ControlType4.Boolean, title: "Open bag", defaultValue: true }, hoverUnderline: { type: ControlType4.Boolean, title: "Underline", defaultValue: true }, fontSize: { type: ControlType4.Number, title: "Size", defaultValue: 12, min: 8, max: 32, unit: "px" }, letterSpacing: { type: ControlType4.Number, title: "Spacing", defaultValue: 0.08, min: 0, max: 0.4, step: 0.01, unit: "em" }, ...fontControls3, ...colorControls3 });

// http-url:https://framerusercontent.com/modules/6KEGiqGtGCWL8mRDjdcW/uZmGXMxacryKzKEDGhHd/StaticForm_Icon.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls5, ControlType as ControlType5 } from "./_framer-runtime.js";
var ICONS = { "arrow-left-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 12.002H19m-8 6s-6-4.419-6-6s6-6 6-6"/>', "arrow-right-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 12H5m8 6s6-4.419 6-6s-6-6-6-6"/>', "arrow-up-right-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6.65s6.938-.542 7.915.435S17.35 15 17.35 15m-.85-7.5l-10 10"/>', "cancel-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18m12 0L6 6"/>', "menu-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8"/>', "add-01": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.001 5v14.002m7.001-7H5"/>', "minus-sign": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4"/>', "delete-02": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6"/>' };
var NAMES = Object.keys(ICONS);
function Icon3(props) {
  const { name, nameOverride, size, color, strokeWidth, label, style } = props;
  const wanted = (nameOverride || "").trim();
  const raw = ICONS[wanted] ?? ICONS[name] ?? "";
  const markup = raw.replace(/stroke-width="1\.5"/g, `stroke-width="${strokeWidth}"`);
  return /* @__PURE__ */ _jsx5("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "none", role: label ? "img" : void 0, "aria-label": label || void 0, "aria-hidden": label ? void 0 : true, focusable: "false", style: { display: "block", flexShrink: 0, color: color || "currentColor", pointerEvents: "none", ...style }, dangerouslySetInnerHTML: { __html: markup } });
}
Icon3.displayName = "Icon";
Icon3.defaultProps = { name: "arrow-right-02", nameOverride: "", size: 18, strokeWidth: 1.5, label: "" };
addPropertyControls5(Icon3, { name: { type: ControlType5.Enum, title: "Icon", options: NAMES, optionTitles: NAMES.map((n) => n.replace(/-/g, " ")) }, nameOverride: { type: ControlType5.String, title: "Icon name", placeholder: "arrow-right-02" }, size: { type: ControlType5.Number, title: "Size", min: 10, max: 96, step: 1, unit: "px", displayStepper: true }, color: { type: ControlType5.Color, title: "Color" }, strokeWidth: { type: ControlType5.Number, title: "Stroke", min: 1, max: 2.5, step: 0.25, displayStepper: true }, label: { type: ControlType5.String, title: "Alt text", placeholder: "Decorative if empty" } });

// http-url:https://framerusercontent.com/modules/lNwPrwIcbXBH9cwBhQNg/4zTlkYqCSR9GmniUINkS/iv0OKxgut.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css6 = [`.framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-HRfzF .framer-styles-preset-thhi5p:not(.rich-text-wrapper), .framer-HRfzF .framer-styles-preset-thhi5p.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className6 = "framer-HRfzF";

// http-url:https://framerusercontent.com/modules/QpHTWaxe2c3AwPgZPd8r/uANS6IthItMzW32S8WbY/J07KW0OMG.js
import { fontStore as fontStore7 } from "./_framer-runtime.js";
fontStore7.loadFonts(["GF;Geist Mono-regular", "GF;Geist Mono-700", "GF;Geist Mono-700italic", "GF;Geist Mono-italic"]);
var fonts7 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2", weight: "400" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "normal", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2", weight: "700" }, { cssFamilyName: "Geist Mono", openType: true, source: "google", style: "italic", uiFamilyName: "Geist Mono", url: "https://fonts.gstatic.com/s/geistmono/v6/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2", weight: "400" }] }];
var css7 = [`.framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-merKl .framer-styles-preset-18sna8l:not(.rich-text-wrapper), .framer-merKl .framer-styles-preset-18sna8l.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.08em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className7 = "framer-merKl";

// http-url:https://framerusercontent.com/modules/v9EReRoDdMuTCh8RKrSH/QXEqUZZKAOE6ntN2KB2R/i4Z_VEgia.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion3, MotionConfigContext } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/dPpsaRDIgkFb65tMg1Ig/cw0ACCe9UcHGgPAeXFSq/GGThu5wvw.js
import { fontStore as fontStore8 } from "./_framer-runtime.js";
fontStore8.loadFonts(["GF;Geist-600", "GF;Geist-900", "GF;Geist-900italic", "GF;Geist-600italic"]);
var fonts8 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2", weight: "600" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RNeQ4mJPby1QNtA.woff2", weight: "900" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKB52Zna6VEdtKCL.woff2", weight: "900" }, { cssFamilyName: "Geist", openType: true, source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKAO2Zna6VEdtKCL.woff2", weight: "600" }] }];
var css8 = [`.framer-jv7cO .framer-styles-preset-1qpzx3t:not(.rich-text-wrapper), .framer-jv7cO .framer-styles-preset-1qpzx3t.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-jv7cO .framer-styles-preset-1qpzx3t:not(.rich-text-wrapper), .framer-jv7cO .framer-styles-preset-1qpzx3t.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-jv7cO .framer-styles-preset-1qpzx3t:not(.rich-text-wrapper), .framer-jv7cO .framer-styles-preset-1qpzx3t.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-jv7cO .framer-styles-preset-1qpzx3t:not(.rich-text-wrapper), .framer-jv7cO .framer-styles-preset-1qpzx3t.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className8 = "framer-jv7cO";

// http-url:https://framerusercontent.com/modules/v9EReRoDdMuTCh8RKrSH/QXEqUZZKAOE6ntN2KB2R/i4Z_VEgia.js
var enabledGestures = { EOv5oPhPu: { hover: true, pressed: true } };
var serializationHash = "framer-8l4WH";
var variantClassNames = { EOv5oPhPu: "framer-v-11i3g0v" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion3.create(React2.Fragment);
var getProps = ({ height, id, link, text, width, ...props }) => {
  return { ...props, bngy1GW86: link ?? props.bngy1GW86, WFZ8PPVSL: text ?? props.WFZ8PPVSL ?? "ADELE" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className11, layoutId, variant, WFZ8PPVSL, bngy1GW86, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "EOv5oPhPu", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className8];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition, { value: transition1, children: /* @__PURE__ */ _jsx6(Link, { href: bngy1GW86, motionChild: true, nodeId: "EOv5oPhPu", scopeId: "i4Z_VEgia", children: /* @__PURE__ */ _jsx6(motion3.a, { ...restProps, ...gestureHandlers, "aria-label": "ADELE, home", className: `${cx(scopingClassNames, "framer-11i3g0v", className11, classNames)} framer-10oovir`, "data-framer-name": "Default", layoutDependency, layoutId: "HomeExperience__EOv5oPhPu", ref: refBinding, style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", opacity: 1, ...style }, variants: { "EOv5oPhPu-pressed": { opacity: 0.78 } }, ...addPropertyOverrides({ "EOv5oPhPu-hover": { "data-framer-name": "Hover" }, "EOv5oPhPu-pressed": { "data-framer-name": "Pressed" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React2.Fragment, { children: /* @__PURE__ */ _jsx6(motion3.p, { className: "framer-styles-preset-1qpzx3t", "data-styles-preset": "GGThu5wvw", dir: "auto", children: "Text" }) }), className: "framer-1f1au86", "data-framer-name": "Wordmark", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__EAHNYZlp3", text: WFZ8PPVSL, variants: { "EOv5oPhPu-hover": { "--extracted-r6o4lv": "var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "EOv5oPhPu-hover": { children: /* @__PURE__ */ _jsx6(React2.Fragment, { children: /* @__PURE__ */ _jsx6(motion3.p, { className: "framer-styles-preset-1qpzx3t", "data-styles-preset": "GGThu5wvw", dir: "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601))" }, children: "ADELE" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) });
});
var css9 = [".framer-8l4WH.framer-10oovir, .framer-8l4WH .framer-10oovir { display: block; }", ".framer-8l4WH.framer-11i3g0v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-8l4WH .framer-1f1au86 { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ...css8];
var Frameri4Z_VEgia = withCSS(Component, css9, "framer-8l4WH");
var i4Z_VEgia_default = Frameri4Z_VEgia;
Frameri4Z_VEgia.displayName = "Logo";
Frameri4Z_VEgia.defaultProps = { height: 200, width: 200 };
addPropertyControls6(Frameri4Z_VEgia, { WFZ8PPVSL: { defaultValue: "ADELE", title: "Text", type: ControlType6.String }, onWFZ8PPVSLChange: { changes: "WFZ8PPVSL", type: ControlType6.ChangeHandler }, bngy1GW86: { title: "Link", type: ControlType6.Link } });
addFonts(Frameri4Z_VEgia, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts8)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/k58Yp8bRq7O31VqlxsEz/gJTMuRP3F3v7fFeGmoPg/jZ2CqbYBf.js
import { jsx as _jsx7, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx2, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link as Link2, RichText as RichText2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/IOEXEIXAeTh4Da17KgF8/ihML5bBBALIZtXK9K2hn/EyXgoJaek.js
import { fontStore as fontStore9 } from "./_framer-runtime.js";
fontStore9.loadFonts(["GF;Instrument Serif-regular", "GF;Instrument Serif-italic"]);
var fonts9 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Instrument Serif", openType: true, source: "google", style: "normal", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2", weight: "400" }, { cssFamilyName: "Instrument Serif", openType: true, source: "google", style: "italic", uiFamilyName: "Instrument Serif", url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2", weight: "400" }] }];
var css10 = [`.framer-mv5pO .framer-styles-preset-rvm4y7:not(.rich-text-wrapper), .framer-mv5pO .framer-styles-preset-rvm4y7.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1599px) and (min-width: 1200px) { .framer-mv5pO .framer-styles-preset-rvm4y7:not(.rich-text-wrapper), .framer-mv5pO .framer-styles-preset-rvm4y7.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-mv5pO .framer-styles-preset-rvm4y7:not(.rich-text-wrapper), .framer-mv5pO .framer-styles-preset-rvm4y7.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-mv5pO .framer-styles-preset-rvm4y7:not(.rich-text-wrapper), .framer-mv5pO .framer-styles-preset-rvm4y7.rich-text-wrapper p { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 42.9px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className9 = "framer-mv5pO";

// http-url:https://framerusercontent.com/modules/k58Yp8bRq7O31VqlxsEz/gJTMuRP3F3v7fFeGmoPg/jZ2CqbYBf.js
var enabledGestures2 = { hjp2Ykor0: { hover: true, pressed: true } };
var serializationHash2 = "framer-gG3tC";
var variantClassNames2 = { hjp2Ykor0: "framer-v-rmdiwe" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 0.4, ease: [0.16, 1, 0.3, 1], type: "tween" };
var Transition2 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion4.create(React3.Fragment);
var getProps2 = ({ height, id, link, number, title, width, ...props }) => {
  return { ...props, eLCgscqgF: title ?? props.eLCgscqgF ?? "Shop", g4HqdcWNh: number ?? props.g4HqdcWNh ?? "01", lKL_QBDVz: link ?? props.lKL_QBDVz };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className11, layoutId, variant, g4HqdcWNh, eLCgscqgF, lKL_QBDVz, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "hjp2Ykor0", enabledGestures: enabledGestures2, ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className6, className9];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx7(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx7(Link2, { href: lKL_QBDVz, motionChild: true, nodeId: "hjp2Ykor0", scopeId: "jZ2CqbYBf", children: /* @__PURE__ */ _jsxs5(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-rmdiwe", className11, classNames)} framer-jiv1aw`, "data-border": true, "data-framer-name": "Default", layoutDependency, layoutId: "HomeExperience__hjp2Ykor0", ref: refBinding, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)", opacity: 1, ...style }, variants: { "hjp2Ykor0-pressed": { opacity: 0.78 } }, ...addPropertyOverrides2({ "hjp2Ykor0-hover": { "data-framer-name": "Hover" }, "hjp2Ykor0-pressed": { "data-framer-name": "Pressed" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx7(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React3.Fragment, { children: /* @__PURE__ */ _jsx7(motion4.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "01" }) }), className: "framer-9nkhqe", "data-framer-name": "Number", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__ZKIhwDUo_", text: g4HqdcWNh, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx7(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React3.Fragment, { children: /* @__PURE__ */ _jsx7(motion4.p, { className: "framer-styles-preset-rvm4y7", "data-styles-preset": "EyXgoJaek", dir: "auto", children: "Shop" }) }), className: "framer-8034ma", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__CfmksCOA_", text: eLCgscqgF, variants: { "hjp2Ykor0-hover": { "--extracted-r6o4lv": "var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ "hjp2Ykor0-hover": { children: /* @__PURE__ */ _jsx7(React3.Fragment, { children: /* @__PURE__ */ _jsx7(motion4.p, { className: "framer-styles-preset-rvm4y7", "data-styles-preset": "EyXgoJaek", dir: "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601))" }, children: "Shop" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css11 = [".framer-gG3tC.framer-jiv1aw, .framer-gG3tC .framer-jiv1aw { display: block; }", ".framer-gG3tC.framer-rmdiwe { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 64px; justify-content: flex-start; padding: 0px 0px 8px 0px; position: relative; text-decoration: none; width: 358px; }", ".framer-gG3tC .framer-9nkhqe, .framer-gG3tC .framer-8034ma { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ...css6, ...css10, '.framer-gG3tC[data-border="true"]::after, .framer-gG3tC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerjZ2CqbYBf = withCSS2(Component2, css11, "framer-gG3tC");
var jZ2CqbYBf_default = FramerjZ2CqbYBf;
FramerjZ2CqbYBf.displayName = "Menu Row";
FramerjZ2CqbYBf.defaultProps = { height: 200, width: 200 };
addPropertyControls7(FramerjZ2CqbYBf, { g4HqdcWNh: { defaultValue: "01", title: "Number", type: ControlType7.String }, ong4HqdcWNhChange: { changes: "g4HqdcWNh", type: ControlType7.ChangeHandler }, eLCgscqgF: { defaultValue: "Shop", title: "Title", type: ControlType7.String }, oneLCgscqgFChange: { changes: "eLCgscqgF", type: ControlType7.ChangeHandler }, lKL_QBDVz: { title: "Link", type: ControlType7.Link } });
addFonts2(FramerjZ2CqbYBf, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts6), ...getFontsFromSharedStyle2(fonts9)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/UWuiyshCVFM3ycCqJ2NJ/qMxjlM0o7vcyWILiAhOl/WG2XT4hJS.js
import { jsx as _jsx8, jsxs as _jsxs6 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls8, ControlType as ControlType8, cx as cx3, getFontsFromSharedStyle as getFontsFromSharedStyle3, Link as Link3, RichText as RichText3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef5 } from "react";

// http-url:https://framerusercontent.com/modules/kpXVmlGQXmqrv38SIi69/1p9ogBO6Cj8e7VoHlFPQ/wf7DPSsMX.js
import { fontStore as fontStore10 } from "./_framer-runtime.js";
fontStore10.loadFonts([]);
var fonts10 = [{ explicitInter: true, fonts: [] }];
var css12 = [".framer-HAwNU .framer-styles-preset-10yodyn:not(.rich-text-wrapper), .framer-HAwNU .framer-styles-preset-10yodyn.rich-text-wrapper a { --framer-link-current-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-current-text-decoration: underline; --framer-link-current-text-decoration-offset: 6px; --framer-link-current-text-decoration-thickness: 1px; --framer-link-hover-text-color: var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81); --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-offset: 6px; --framer-link-hover-text-decoration-thickness: 1px; --framer-link-text-color: var(--token-cfccb85f-83a5-4458-ac22-43b33dee2601); --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }"];
var className10 = "framer-HAwNU";

// http-url:https://framerusercontent.com/modules/UWuiyshCVFM3ycCqJ2NJ/qMxjlM0o7vcyWILiAhOl/WG2XT4hJS.js
var serializationHash3 = "framer-bNMFW";
var variantClassNames3 = { Dg5lxp101: "framer-v-3yrzyv" };
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { delay: 0, duration: 0.2, ease: [0.16, 1, 0.3, 1], type: "tween" };
var animation = { opacity: 0.78, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition2 };
var Transition3 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion5.create(React4.Fragment);
var getProps3 = ({ height, id, label, link, showLiveDot, width, ...props }) => {
  return { ...props, EFzLfe34P: label ?? props.EFzLfe34P ?? "SHOP", QmAy9ZNM8: showLiveDot ?? props.QmAy9ZNM8 ?? false, WJA8aoH2v: link ?? props.WJA8aoH2v };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className11, layoutId, variant, EFzLfe34P, WJA8aoH2v, QmAy9ZNM8, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "Dg5lxp101", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className7, className10];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx8(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs6(motion5.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-3yrzyv", className11, classNames), "data-framer-name": "Default", layoutDependency, layoutId: "HomeExperience__Dg5lxp101", ref: refBinding, style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", ...style }, children: [QmAy9ZNM8 !== false && /* @__PURE__ */ _jsx8(motion5.div, { className: "framer-iejo5b", "data-framer-name": "Live Dot", layoutDependency, layoutId: "HomeExperience__sdOg1Q6HZ", style: { backgroundColor: "var(--token-10b3c583-e6c2-4ed5-bd70-462ebcec53e7)", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" } }), /* @__PURE__ */ _jsx8(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React4.Fragment, { children: /* @__PURE__ */ _jsx8(motion5.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", children: /* @__PURE__ */ _jsx8(Link3, { href: WJA8aoH2v, motionChild: true, nodeId: "Nu5C1yrdy", openInNewTab: false, relValues: [], scopeId: "WG2XT4hJS", smoothScroll: false, children: /* @__PURE__ */ _jsx8(motion5.a, { className: "framer-styles-preset-10yodyn", "data-styles-preset": "wf7DPSsMX", children: "Label" }) }) }) }), className: "framer-xo5byd", "data-framer-name": "Label", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__Nu5C1yrdy", text: EFzLfe34P, verticalAlignment: "top", whileTap: animation, withExternalLayout: true })] }) }) }) });
});
var css13 = [".framer-bNMFW.framer-43kf8t, .framer-bNMFW .framer-43kf8t { display: block; }", ".framer-bNMFW.framer-3yrzyv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }", ".framer-bNMFW .framer-iejo5b { flex: none; height: 6px; pointer-events: none; position: relative; width: 6px; }", ".framer-bNMFW .framer-xo5byd { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ...css7, ...css12];
var FramerWG2XT4hJS = withCSS3(Component3, css13, "framer-bNMFW");
var WG2XT4hJS_default = FramerWG2XT4hJS;
FramerWG2XT4hJS.displayName = "Nav Link";
FramerWG2XT4hJS.defaultProps = { height: 200, width: 200 };
addPropertyControls8(FramerWG2XT4hJS, { EFzLfe34P: { defaultValue: "SHOP", title: "Label", type: ControlType8.String }, onEFzLfe34PChange: { changes: "EFzLfe34P", type: ControlType8.ChangeHandler }, WJA8aoH2v: { title: "Link", type: ControlType8.Link }, QmAy9ZNM8: { defaultValue: false, title: "Show Live Dot", type: ControlType8.Boolean }, onQmAy9ZNM8Change: { changes: "QmAy9ZNM8", type: ControlType8.ChangeHandler } });
addFonts3(FramerWG2XT4hJS, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts7), ...getFontsFromSharedStyle3(fonts10)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/mK1KalBQLozYzCXGcgYe/Swu5ifRCRbva2w24MGSX/UlNizQwZu.js
var LogoFonts = getFonts(i4Z_VEgia_default);
var NavLinkFonts = getFonts(WG2XT4hJS_default);
var BagButtonFonts = getFonts(BagButton);
var IconFonts = getFonts(Icon3);
var MenuRowFonts = getFonts(jZ2CqbYBf_default);
var cycleOrder = ["zrFSe3dwx", "vizv_x8gM", "XqzmX1Zck", "fZ3FFoPW1"];
var serializationHash4 = "framer-89T6s";
var variantClassNames4 = { fZ3FFoPW1: "framer-v-r9emcd", vizv_x8gM: "framer-v-13o8d27", XqzmX1Zck: "framer-v-ssr52a", zrFSe3dwx: "framer-v-182awoh" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { bounce: 0, delay: 0, duration: 0.5, type: "spring" };
var transition22 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation2 = { opacity: 0.78, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition22 };
var Transition4 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx9(MotionConfigContext4.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Phone Open": "fZ3FFoPW1", Desktop: "zrFSe3dwx", Phone: "XqzmX1Zck", Tablet: "vizv_x8gM" };
var Variants4 = motion6.create(React5.Fragment);
var getProps4 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "zrFSe3dwx" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className11, layoutId, variant, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder, defaultVariant: "zrFSe3dwx", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [className7, className6];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  const router = useRouter();
  const isDisplayed = () => {
    if (["XqzmX1Zck", "fZ3FFoPW1"].includes(baseVariant))
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (["XqzmX1Zck", "fZ3FFoPW1"].includes(baseVariant))
      return true;
    return false;
  };
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap6kmnua = activeVariantCallback(async (...args) => {
    setVariant("fZ3FFoPW1");
  });
  const onTap2106rp = activeVariantCallback(async (...args) => {
    setVariant("XqzmX1Zck");
  });
  const isDisplayed2 = () => {
    if (baseVariant === "fZ3FFoPW1")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx9(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx9(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx9(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs7(motion6.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-182awoh", className11, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "HomeExperience__zrFSe3dwx", ref: refBinding, style: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", ...style }, variants: { fZ3FFoPW1: { backgroundColor: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)" } }, ...addPropertyOverrides3({ fZ3FFoPW1: { "data-framer-name": "Phone Open" }, vizv_x8gM: { "data-framer-name": "Tablet" }, XqzmX1Zck: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-7jm7x4", "data-framer-name": "Bar Row", layoutDependency, layoutId: "HomeExperience__N21JjSCy3", style: { backgroundColor: "rgba(0, 0, 0, 0)" }, variants: { fZ3FFoPW1: { backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)" } }, children: [/* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-1spbz0t", "data-framer-name": "Left Group", layoutDependency, layoutId: "HomeExperience__KnCx1tcR3", children: [/* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0, ...addPropertyOverrides3({ fZ3FFoPW1: { y: (componentViewport?.y || 0) + 0 + 0 + -71 + 0 }, XqzmX1Zck: { y: (componentViewport?.y || 0) + 0 + 0 + -71 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-4ldm54-container", "data-framer-name": "Logo", layoutDependency, layoutId: "HomeExperience__SkAD83w6x-container", name: "Logo", nodeId: "SkAD83w6x", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(i4Z_VEgia_default, { bngy1GW86: resolvedLinks[0], height: "100%", id: "SkAD83w6x", layoutId: "HomeExperience__SkAD83w6x", name: "Logo", WFZ8PPVSL: "ADELE", width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { bngy1GW86: resolvedLinks[3] }, vizv_x8gM: { bngy1GW86: resolvedLinks[1] }, XqzmX1Zck: { bngy1GW86: resolvedLinks[2] } }, baseVariant, gestureVariant) }) }) }) }), isDisplayed() && /* @__PURE__ */ _jsx9(motion6.div, { className: "framer-192iwzx", "data-framer-name": "Rule", layoutDependency, layoutId: "HomeExperience__yh2EjdTrv", children: /* @__PURE__ */ _jsx9(motion6.div, { className: "framer-1uk7mxm", "data-framer-name": "Rule Line", layoutDependency, layoutId: "HomeExperience__PnSSaLu9x", style: { backgroundColor: "var(--token-a7e28750-cc9d-4290-b719-389c667e3f15)" } }) }), isDisplayed() && /* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-19j6azc", "data-framer-name": "Links", layoutDependency, layoutId: "HomeExperience__HQF2OA4Qi", children: [/* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-1qn9yr7-container", "data-framer-name": "Nav Link AW26", layoutDependency, layoutId: "HomeExperience__MROXrC_Kw-container", name: "Nav Link AW26", nodeId: "MROXrC_Kw", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(WG2XT4hJS_default, { EFzLfe34P: "AW26", height: "100%", id: "MROXrC_Kw", layoutId: "HomeExperience__MROXrC_Kw", name: "Nav Link AW26", QmAy9ZNM8: true, width: "100%", WJA8aoH2v: resolvedLinks1[0], ...addPropertyOverrides3({ vizv_x8gM: { WJA8aoH2v: resolvedLinks1[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "DXmr4VOUc" }, implicitPathVariables: void 0 }, { href: { webPageId: "DXmr4VOUc" }, implicitPathVariables: void 0 }], children: (resolvedLinks2) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-1hx4igx-container", "data-framer-name": "Nav Link Shop", layoutDependency, layoutId: "HomeExperience__qdkYwYxro-container", name: "Nav Link Shop", nodeId: "qdkYwYxro", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(WG2XT4hJS_default, { EFzLfe34P: "SHOP", height: "100%", id: "qdkYwYxro", layoutId: "HomeExperience__qdkYwYxro", name: "Nav Link Shop", QmAy9ZNM8: false, width: "100%", WJA8aoH2v: resolvedLinks2[0], ...addPropertyOverrides3({ vizv_x8gM: { WJA8aoH2v: resolvedLinks2[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "TQ75j8laF" }, implicitPathVariables: void 0 }, { href: { webPageId: "TQ75j8laF" }, implicitPathVariables: void 0 }], children: (resolvedLinks3) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-103y1rq-container", "data-framer-name": "Nav Link Lookbook", layoutDependency, layoutId: "HomeExperience__nx1VmGt0V-container", name: "Nav Link Lookbook", nodeId: "nx1VmGt0V", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(WG2XT4hJS_default, { EFzLfe34P: "LOOKBOOK", height: "100%", id: "nx1VmGt0V", layoutId: "HomeExperience__nx1VmGt0V", name: "Nav Link Lookbook", QmAy9ZNM8: false, width: "100%", WJA8aoH2v: resolvedLinks3[0], ...addPropertyOverrides3({ vizv_x8gM: { WJA8aoH2v: resolvedLinks3[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "YC1UUV7Db" }, implicitPathVariables: void 0 }, { href: { webPageId: "YC1UUV7Db" }, implicitPathVariables: void 0 }], children: (resolvedLinks4) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-15n1nyq-container", "data-framer-name": "Nav Link Archive", layoutDependency, layoutId: "HomeExperience__O4XL2nX2I-container", name: "Nav Link Archive", nodeId: "O4XL2nX2I", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(WG2XT4hJS_default, { EFzLfe34P: "ARCHIVE", height: "100%", id: "O4XL2nX2I", layoutId: "HomeExperience__O4XL2nX2I", name: "Nav Link Archive", QmAy9ZNM8: false, width: "100%", WJA8aoH2v: resolvedLinks4[0], ...addPropertyOverrides3({ vizv_x8gM: { WJA8aoH2v: resolvedLinks4[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "MZVze2NoP" }, implicitPathVariables: void 0 }, { href: { webPageId: "MZVze2NoP" }, implicitPathVariables: void 0 }], children: (resolvedLinks5) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, y: (componentViewport?.y || 0) + 0 + 0 + -68 + 0 + 0, children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-kd70lg-container", "data-framer-name": "Nav Link About", layoutDependency, layoutId: "HomeExperience__mYGSkZpsL-container", name: "Nav Link About", nodeId: "mYGSkZpsL", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(WG2XT4hJS_default, { EFzLfe34P: "ABOUT", height: "100%", id: "mYGSkZpsL", layoutId: "HomeExperience__mYGSkZpsL", name: "Nav Link About", QmAy9ZNM8: false, width: "100%", WJA8aoH2v: resolvedLinks5[0], ...addPropertyOverrides3({ vizv_x8gM: { WJA8aoH2v: resolvedLinks5[1] } }, baseVariant, gestureVariant) }) }) }) })] })] }), /* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-raay7p", "data-framer-name": "Right Group", layoutDependency, layoutId: "HomeExperience__qQxOSEBaV", children: [/* @__PURE__ */ _jsx9(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-pcvwtj-container", "data-code-component-plugin-id": "api", "data-framer-name": "Bag Button", isAuthoredByUser: true, layoutDependency, layoutId: "HomeExperience__ZgmS0rhMN-container", name: "Bag Button", nodeId: "ZgmS0rhMN", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(BagButton, { accent: "var(--token-10b3c583-e6c2-4ed5-bd70-462ebcec53e7)", bone: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", fontMono: "'Geist Mono', ui-monospace, monospace", fontSans: "Geist, system-ui, sans-serif", fontSerif: "'Instrument Serif', 'Times New Roman', serif", fontSize: 12, height: "100%", hoverUnderline: true, id: "ZgmS0rhMN", ink: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", label: "BAG", layoutId: "HomeExperience__ZgmS0rhMN", letterSpacing: 0.08, loadFonts: false, muted: "var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170)", name: "Bag Button", openOnClick: true, showCount: true, style: { height: "100%" }, surface: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)", width: "100%" }) }) }), isDisplayed1() && /* @__PURE__ */ _jsxs7(motion6.button, { "aria-label": "Menu", className: "framer-1o2yds1", "data-framer-name": "Menu Button", "data-highlight": true, "data-reset": "button", layoutDependency, layoutId: "HomeExperience__n5GN41vkM", onTap: onTap6kmnua, whileTap: animation2, ...addPropertyOverrides3({ fZ3FFoPW1: { onTap: onTap2106rp } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx9(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React5.Fragment, { children: /* @__PURE__ */ _jsx9(motion6.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", children: "MENU" }) }), className: "framer-1firbnz", "data-framer-name": "Menu Label", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__JVNkX2wOy", verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ fZ3FFoPW1: { children: /* @__PURE__ */ _jsx9(React5.Fragment, { children: /* @__PURE__ */ _jsx9(motion6.p, { className: "framer-styles-preset-18sna8l", "data-styles-preset": "J07KW0OMG", dir: "auto", style: { "--framer-text-alignment": "start" }, children: "CLOSE" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx9(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-18poq6i-container", "data-code-component-plugin-id": "api", "data-framer-name": "Menu Icon", isAuthoredByUser: true, layoutDependency, layoutId: "HomeExperience__TLlu_lCkM-container", name: "Menu Icon", nodeId: "TLlu_lCkM", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(Icon3, { color: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", height: "100%", id: "TLlu_lCkM", label: "", layoutId: "HomeExperience__TLlu_lCkM", name: "menu-02", nameOverride: "", size: 18, strokeWidth: 1.5, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { name: "cancel-01" } }, baseVariant, gestureVariant) }) }) })] })] })] }), isDisplayed2() && /* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-db9tg5", "data-framer-name": "Menu Panel", layoutDependency, layoutId: "HomeExperience__k6AKIljiv", style: { backgroundColor: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)" }, children: [/* @__PURE__ */ _jsxs7(motion6.div, { className: "framer-115tvb7", "data-framer-name": "Menu Rows", "data-highlight": true, layoutDependency, layoutId: "HomeExperience__NhevesCOf", onTap: onTap2106rp, children: [/* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { webPageId: "augiA20Il" }, implicitPathVariables: void 0 }], children: (resolvedLinks6) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-2w64kw-container", "data-framer-name": "Menu Row AW26", layoutDependency, layoutId: "HomeExperience__jbIFGjxbI-container", name: "Menu Row AW26", nodeId: "jbIFGjxbI", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "Aw26", g4HqdcWNh: "01", height: "100%", id: "jbIFGjxbI", layoutId: "HomeExperience__jbIFGjxbI", lKL_QBDVz: resolvedLinks6[0], name: "Menu Row AW26", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks6[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "DXmr4VOUc" }, implicitPathVariables: void 0 }, { href: { webPageId: "DXmr4VOUc" }, implicitPathVariables: void 0 }], children: (resolvedLinks7) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 200 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-gg9ibv-container", "data-framer-name": "Menu Row Shop", layoutDependency, layoutId: "HomeExperience__bfXRRYdTi-container", name: "Menu Row Shop", nodeId: "bfXRRYdTi", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "Shop", g4HqdcWNh: "02", height: "100%", id: "bfXRRYdTi", layoutId: "HomeExperience__bfXRRYdTi", lKL_QBDVz: resolvedLinks7[0], name: "Menu Row Shop", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks7[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "TQ75j8laF" }, implicitPathVariables: void 0 }, { href: { webPageId: "TQ75j8laF" }, implicitPathVariables: void 0 }], children: (resolvedLinks8) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 400 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-1kvxswm-container", "data-framer-name": "Menu Row Lookbook", layoutDependency, layoutId: "HomeExperience__QG1d15ZZx-container", name: "Menu Row Lookbook", nodeId: "QG1d15ZZx", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "Lookbook", g4HqdcWNh: "03", height: "100%", id: "QG1d15ZZx", layoutId: "HomeExperience__QG1d15ZZx", lKL_QBDVz: resolvedLinks8[0], name: "Menu Row Lookbook", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks8[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "YC1UUV7Db" }, implicitPathVariables: void 0 }, { href: { webPageId: "YC1UUV7Db" }, implicitPathVariables: void 0 }], children: (resolvedLinks9) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 600 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-1xp3abq-container", "data-framer-name": "Menu Row Archive", layoutDependency, layoutId: "HomeExperience__qXlrWoujn-container", name: "Menu Row Archive", nodeId: "qXlrWoujn", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "Archive", g4HqdcWNh: "04", height: "100%", id: "qXlrWoujn", layoutId: "HomeExperience__qXlrWoujn", lKL_QBDVz: resolvedLinks9[0], name: "Menu Row Archive", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks9[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "MZVze2NoP" }, implicitPathVariables: void 0 }, { href: { webPageId: "MZVze2NoP" }, implicitPathVariables: void 0 }], children: (resolvedLinks10) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 800 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-pqx6iq-container", "data-framer-name": "Menu Row About", layoutDependency, layoutId: "HomeExperience__V7E2gctKw-container", name: "Menu Row About", nodeId: "V7E2gctKw", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "About", g4HqdcWNh: "05", height: "100%", id: "V7E2gctKw", layoutId: "HomeExperience__V7E2gctKw", lKL_QBDVz: resolvedLinks10[0], name: "Menu Row About", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks10[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx9(ResolveLinks, { links: [{ href: { webPageId: "M9e7nO2iH" }, implicitPathVariables: void 0 }, { href: { webPageId: "M9e7nO2iH" }, implicitPathVariables: void 0 }], children: (resolvedLinks11) => /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 200, ...addPropertyOverrides3({ fZ3FFoPW1: { width: `calc(${componentViewport?.width || "100vw"} - 32px)`, y: (componentViewport?.y || 0) + 0 + 58 + 24 + 0 + 0 + 1e3 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-13ob96d-container", "data-framer-name": "Menu Row Contact", layoutDependency, layoutId: "HomeExperience__tZSef8T8s-container", name: "Menu Row Contact", nodeId: "tZSef8T8s", rendersWithMotion: true, scopeId: "UlNizQwZu", children: /* @__PURE__ */ _jsx9(jZ2CqbYBf_default, { eLCgscqgF: "Contact", g4HqdcWNh: "06", height: "100%", id: "tZSef8T8s", layoutId: "HomeExperience__tZSef8T8s", lKL_QBDVz: resolvedLinks11[0], name: "Menu Row Contact", style: { width: "100%" }, width: "100%", ...addPropertyOverrides3({ fZ3FFoPW1: { lKL_QBDVz: resolvedLinks11[1] } }, baseVariant, gestureVariant) }) }) }) })] }), /* @__PURE__ */ _jsx9(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React5.Fragment, { children: /* @__PURE__ */ _jsx9(motion6.p, { className: "framer-styles-preset-thhi5p", "data-styles-preset": "iv0OKxgut", dir: "auto", children: "ADELE / AUTUMN WINTER 26 / PORTO" }) }), className: "framer-1axg2zp", "data-framer-name": "Menu Footnote", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__O0RNsoEoG", verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) });
});
var css14 = [".framer-89T6s.framer-1elv621, .framer-89T6s .framer-1elv621 { display: block; }", ".framer-89T6s.framer-182awoh { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-89T6s .framer-7jm7x4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 64px; justify-content: space-between; padding: 0px 16px 0px 16px; position: relative; width: 100%; }", ".framer-89T6s .framer-1spbz0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }", ".framer-89T6s .framer-4ldm54-container, .framer-89T6s .framer-1qn9yr7-container, .framer-89T6s .framer-1hx4igx-container, .framer-89T6s .framer-103y1rq-container, .framer-89T6s .framer-15n1nyq-container, .framer-89T6s .framer-kd70lg-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-89T6s .framer-192iwzx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 18px; justify-content: center; padding: 0px 24px 0px 24px; position: relative; width: min-content; }", ".framer-89T6s .framer-1uk7mxm { flex: none; height: 18px; pointer-events: none; position: relative; width: 1px; }", ".framer-89T6s .framer-19j6azc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }", ".framer-89T6s .framer-raay7p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }", ".framer-89T6s .framer-pcvwtj-container { flex: none; height: 44px; position: relative; width: auto; }", ".framer-89T6s .framer-1o2yds1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; padding: 0px 0px 0px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-89T6s .framer-1firbnz { flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }", ".framer-89T6s .framer-18poq6i-container { flex: none; height: auto; pointer-events: none; position: relative; width: auto; }", ".framer-89T6s .framer-db9tg5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: space-between; min-height: 0px; overflow: auto; overscroll-behavior: contain; padding: 24px 16px 96px 16px; position: relative; width: 100%; }", ".framer-89T6s .framer-115tvb7 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-89T6s .framer-2w64kw-container, .framer-89T6s .framer-gg9ibv-container, .framer-89T6s .framer-1kvxswm-container, .framer-89T6s .framer-1xp3abq-container, .framer-89T6s .framer-pqx6iq-container, .framer-89T6s .framer-13ob96d-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-89T6s .framer-1axg2zp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-89T6s.framer-v-13o8d27.framer-182awoh { width: 100%; }", ".framer-89T6s.framer-v-13o8d27 .framer-192iwzx { padding: 0px 16px 0px 16px; }", ".framer-89T6s.framer-v-13o8d27 .framer-19j6azc { gap: 16px; }", ".framer-89T6s.framer-v-ssr52a.framer-182awoh { width: 100%; }", ".framer-89T6s.framer-v-ssr52a .framer-7jm7x4, .framer-89T6s.framer-v-r9emcd .framer-7jm7x4 { height: 58px; padding: 0px 16px 0px 16px; }", ".framer-89T6s.framer-v-r9emcd.framer-182awoh { min-height: calc(var(--framer-viewport-height, 100vh) * 1); width: 100%; }", ...css7, ...css6];
var FramerUlNizQwZu = withCSS4(Component4, css14, "framer-89T6s");
var UlNizQwZu_default = FramerUlNizQwZu;
FramerUlNizQwZu.displayName = "Nav";
FramerUlNizQwZu.defaultProps = { height: 64, width: 1200 };
addPropertyControls9(FramerUlNizQwZu, { variant: { options: ["zrFSe3dwx", "vizv_x8gM", "XqzmX1Zck", "fZ3FFoPW1"], optionTitles: ["Desktop", "Tablet", "Phone", "Phone Open"], title: "Variant", type: ControlType9.Enum } });
addFonts4(FramerUlNizQwZu, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...LogoFonts, ...NavLinkFonts, ...BagButtonFonts, ...IconFonts, ...MenuRowFonts, ...getFontsFromSharedStyle4(fonts7), ...getFontsFromSharedStyle4(fonts6)], { supportsExplicitInterCodegen: true });
FramerUlNizQwZu.loader = { load: (props, context) => {
  return runTasksWithYield([() => forwardLoader(i4Z_VEgia_default, {}, context), () => forwardLoader(WG2XT4hJS_default, {}, context), () => forwardLoader(jZ2CqbYBf_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/ezxigjkNbiNGBMsAP4Wk/76lIznjC7uao8Qq3YLgs/NMtJ4Gvu6.js
var NavFonts = getFonts2(UlNizQwZu_default);
var RunwayStageFonts = getFonts2(RunwayStage);
var BagDrawerFonts = getFonts2(BagDrawer);
var LoaderFonts = getFonts2(StaticFormLoader);
var cycleOrder2 = ["dHScHprIc", "cfBMosz4e", "L4kSGZwhr", "IiTdSYk37", "HT7FRcVyn"];
var serializationHash5 = "framer-wreoD";
var variantClassNames5 = { cfBMosz4e: "framer-v-ackhku", dHScHprIc: "framer-v-lkx9ei", HT7FRcVyn: "framer-v-1e7twdi", IiTdSYk37: "framer-v-z8mp55", L4kSGZwhr: "framer-v-4iq9m6" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition5 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx10(MotionConfigContext5.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "Desktop XL": "IiTdSYk37", "Phone Small": "HT7FRcVyn", Desktop: "dHScHprIc", Phone: "L4kSGZwhr", Tablet: "cfBMosz4e" };
var Variants5 = motion7.create(React6.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "dHScHprIc" };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef7(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className11, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder2, defaultVariant: "dHScHprIc", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [className4, className2, className5, className3, className];
  const scopingClassNames = cx5(serializationHash5, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx10(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx10(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx10(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs8(motion7.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-lkx9ei", className11, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "HomeExperience__dHScHprIc", ref: refBinding, style: { ...style }, ...addPropertyOverrides4({ cfBMosz4e: { "data-framer-name": "Tablet" }, HT7FRcVyn: { "data-framer-name": "Phone Small" }, IiTdSYk37: { "data-framer-name": "Desktop XL" }, L4kSGZwhr: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx10(motion7.div, { className: "framer-1y38kjd", "data-border": true, "data-framer-name": "Nav Bar", layoutDependency, layoutId: "HomeExperience__OYnQJ_6Pr", style: { "--border-bottom-width": "1px", "--border-color": "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)" }, children: /* @__PURE__ */ _jsx10(ComponentViewportProvider2, { height: 64, width: `calc(${componentViewport?.width || "100vw"} - 57.6px)`, y: componentViewport?.y || 0, ...addPropertyOverrides4({ cfBMosz4e: { width: `calc(${componentViewport?.width || "100vw"} - 38.8px)` }, HT7FRcVyn: { width: componentViewport?.width || "100vw" }, IiTdSYk37: { width: `calc(${componentViewport?.width || "100vw"} - 72px)` }, L4kSGZwhr: { width: componentViewport?.width || "100vw" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer2, { className: "framer-12o9vk7-container", "data-framer-name": "Nav", layoutDependency, layoutId: "HomeExperience__FOq8tfiWM-container", name: "Nav", nodeId: "FOq8tfiWM", rendersWithMotion: true, scopeId: "NMtJ4Gvu6", children: /* @__PURE__ */ _jsx10(UlNizQwZu_default, { height: "100%", id: "FOq8tfiWM", layoutId: "HomeExperience__FOq8tfiWM", name: "Nav", style: { width: "100%" }, variant: matchVariant("zrFSe3dwx"), width: "100%", ...addPropertyOverrides4({ cfBMosz4e: { variant: matchVariant("vizv_x8gM") }, HT7FRcVyn: { variant: matchVariant("XqzmX1Zck") }, L4kSGZwhr: { variant: matchVariant("XqzmX1Zck") } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-wjfb1z", "data-framer-name": "Runway", layoutDependency, layoutId: "HomeExperience__RBWd77n6q", children: /* @__PURE__ */ _jsx10(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer2, { className: "framer-t8plnc-container", "data-code-component-plugin-id": "api", "data-framer-name": "Runway Stage (edit the Runway Stage component)", isAuthoredByUser: true, layoutDependency, layoutId: "HomeExperience__VE5NNrxIH-container", name: "Runway Stage (edit the Runway Stage component)", nodeId: "VE5NNrxIH", rendersWithMotion: true, scopeId: "NMtJ4Gvu6", children: /* @__PURE__ */ _jsx10(RunwayStage, { accent: "var(--token-10b3c583-e6c2-4ed5-bd70-462ebcec53e7)", ariaLabel: "AW26 runway", barHeight: 64, barHeightCompact: 58, bone: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", compactBelow: 810, currency: "$", drawerWidth: 440, fontMono: "'Geist Mono', ui-monospace, monospace", fontSans: "Geist, system-ui, sans-serif", fontSerif: "'Instrument Serif', 'Times New Roman', serif", height: "100%", id: "VE5NNrxIH", initialLook: 1, ink: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", labelAdd: "REQUEST THIS PIECE", labelNext: "NEXT LOOK", labelSelect: "SELECT A SIZE", labelShop: "VIEW SHOP", layoutId: "HomeExperience__VE5NNrxIH", loadFonts: false, looks: [{ hotspots: "raw-wool-coat:27:52\nsoft-knit-02:50:31\nfold-trouser:52:76", id: "default-item-0", lead: "raw-wool-coat", note: "The Signature Wrap Coat, made in several colors.", titleLine1: "Wrap yourself", titleLine2: "in confidence." }, { hotspots: "long-coat-01:30:46\nlayered-tee:50:30\nutility-bag:43:68\nwide-trouser-03:55:82", id: "default-item-1", lead: "long-coat-01", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 02 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "structured-shirt:45:26\nfold-trouser:47:66", id: "default-item-2", lead: "structured-shirt", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 03 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "work-jacket-02:42:24\nutility-bag:30:39\nwide-trouser-03:50:66", id: "default-item-3", lead: "work-jacket-02", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 04 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "rib-knit-vest:46:24\nwide-trouser-03:45:66", id: "default-item-4", lead: "rib-knit-vest", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 05 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "layered-tee:30:26\nheavy-scarf-01:57:40\nfold-trouser:46:70", id: "default-item-5", lead: "layered-tee", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 06 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "long-coat-01:40:34\nleather-object-03:31:50", id: "default-item-6", lead: "long-coat-01", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 07 —", titleLine2: "[LOOK TITLE — CONFIRM]" }, { hotspots: "heavy-scarf-01:36:36\nsoft-knit-02:53:40\nfold-trouser:50:80", id: "default-item-7", lead: "heavy-scarf-01", note: "[LOOK NOTE — CONFIRM WITH ADELE]", titleLine1: "Look 08 —", titleLine2: "[LOOK TITLE — CONFIRM]" }], muted: "var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170)", name: "Runway Stage (edit the Runway Stage component)", productLinkBase: "/product/", products: [{ color: "Charcoal", id: "default-item-0", name: "Signature Wrap Coat", price: 420, shopify: "", short: "A long straight coat in brushed raw wool. Dropped shoulder, concealed placket, no lining at the back to let it move.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-OW-04", slug: "raw-wool-coat", soldOut: "XS", tag: "WOOL COAT 04", tone: "charcoal" }, { color: "Ash", id: "default-item-1", name: "[PRODUCT NAME — CONFIRM]", price: 480, shopify: "", short: "Single breasted, ankle length, cut in a bone grey wool twill. Quiet from the front, severe in motion.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-OW-01", slug: "long-coat-01", soldOut: "", tag: "LONG COAT 01", tone: "ash" }, { color: "Olive Grey", id: "default-item-2", name: "[PRODUCT NAME — CONFIRM]", price: 310, shopify: "", short: "A boxy short jacket in washed canvas with four patch pockets. Built for use, kept strict.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-OW-02", slug: "work-jacket-02", soldOut: "XL", tag: "WORK JACKET 02", tone: "olive" }, { color: "Oatmeal", id: "default-item-3", name: "[PRODUCT NAME — CONFIRM]", price: 190, shopify: "", short: "A heavy rib mock neck in brushed alpaca blend. Oversized through the body, narrow at the cuff.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-KN-02", slug: "soft-knit-02", soldOut: "", tag: "SOFT KNIT 02", tone: "oatmeal" }, { color: "Stone", id: "default-item-4", name: "[PRODUCT NAME — CONFIRM]", price: 140, shopify: "", short: "A sleeveless chunky rib in stone wool. Layer it over a shirt or wear it alone.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-KN-05", slug: "rib-knit-vest", soldOut: "", tag: "KNIT VEST 05", tone: "stone" }, { color: "Bone", id: "default-item-5", name: "[PRODUCT NAME — CONFIRM]", price: 165, shopify: "", short: "A stiff poplin shirt with an oversized collar and a high, straight hem.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-SH-03", slug: "structured-shirt", soldOut: "XS,S", tag: "SHIRT 03", tone: "bone" }, { color: "Washed Grey", id: "default-item-6", name: "[PRODUCT NAME — CONFIRM]", price: 85, shopify: "", short: "Washed jersey with a second, longer black layer sewn into the hem.", sizes: "XS,S,M,L,XL", sku: "AD-AW26-SH-06", slug: "layered-tee", soldOut: "", tag: "LAYERED TEE 06", tone: "ash" }, { color: "Off-black", id: "default-item-7", name: "[PRODUCT NAME — CONFIRM]", price: 210, shopify: "", short: "A wide trouser with a double fold at the front and a deep break. Falls straight from the hip.", sizes: "44,46,48,50,52", sku: "AD-AW26-TR-01", slug: "fold-trouser", soldOut: "44", tag: "FOLD TROUSER 01", tone: "black" }, { color: "Charcoal", id: "default-item-8", name: "[PRODUCT NAME — CONFIRM]", price: 230, shopify: "", short: "Charcoal flannel, cut wide with one deep pleat. Sits high, finishes on the shoe.", sizes: "44,46,48,50,52", sku: "AD-AW26-TR-03", slug: "wide-trouser-03", soldOut: "", tag: "WIDE TROUSER 03", tone: "charcoal" }, { color: "Black", id: "default-item-9", name: "[PRODUCT NAME — CONFIRM]", price: 175, shopify: "", short: "A technical nylon carry piece with a webbing strap, one steel buckle and nothing else.", sizes: "ONE SIZE", sku: "AD-AW26-OB-01", slug: "utility-bag", soldOut: "", tag: "UTILITY BAG", tone: "black" }, { color: "Black", id: "default-item-10", name: "[PRODUCT NAME — CONFIRM]", price: 260, shopify: "", short: "A folded leather pouch that works as a bag, a case, or an object on a table.", sizes: "ONE SIZE", sku: "AD-AW26-OB-03", slug: "leather-object-03", soldOut: "", tag: "LEATHER OBJECT 03", tone: "black" }, { color: "Charcoal", id: "default-item-11", name: "[PRODUCT NAME — CONFIRM]", price: 120, shopify: "", short: "Two metres of dense brushed wool. Wrap it once and let it hang.", sizes: "ONE SIZE", sku: "AD-AW26-OB-05", slug: "heavy-scarf-01", soldOut: "", tag: "SCARF 01", tone: "charcoal" }], showIntro: true, showNudge: true, sidePadding: 0, springDamping: 22, springStiffness: 110, style: { height: "100%", width: "100%" }, surface: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)", wheelSensitivity: 36, width: "100%" }) }) }) }), /* @__PURE__ */ _jsxs8(motion7.div, { className: "framer-b7lmaf", "data-framer-name": "Look Anchors (do not delete, used by Lookbook and product links)", layoutDependency, layoutId: "HomeExperience__YWP2Wv1Oc", children: [/* @__PURE__ */ _jsx10(motion7.div, { className: "framer-1yry3cz", "data-framer-name": "Anchor look 1", layoutDependency, layoutId: "HomeExperience__aeiXufKPq" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-1yph8hq", "data-framer-name": "Anchor look 2", layoutDependency, layoutId: "HomeExperience__J2ZLFdHFm" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-16jqvsg", "data-framer-name": "Anchor look 3", layoutDependency, layoutId: "HomeExperience__GGPEKMD9G" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-bb1bti", "data-framer-name": "Anchor look 4", layoutDependency, layoutId: "HomeExperience__lY1NRgWpA" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-52q3jj", "data-framer-name": "Anchor look 5", layoutDependency, layoutId: "HomeExperience__Av8PCO2ON" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-e3jcup", "data-framer-name": "Anchor look 6", layoutDependency, layoutId: "HomeExperience__FE36hTLXF" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-1o81zzc", "data-framer-name": "Anchor look 7", layoutDependency, layoutId: "HomeExperience__Ihow2Hw6o" }), /* @__PURE__ */ _jsx10(motion7.div, { className: "framer-lawfga", "data-framer-name": "Anchor look 8", layoutDependency, layoutId: "HomeExperience__LKmnUdvLy" })] }), /* @__PURE__ */ _jsx10(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer2, { className: "framer-ahahua-container", "data-code-component-plugin-id": "api", "data-framer-name": "Bag Drawer (edit the Bag Drawer component)", isAuthoredByUser: true, layoutDependency, layoutId: "HomeExperience__rnzBzwt5q-container", name: "Bag Drawer (edit the Bag Drawer component)", nodeId: "rnzBzwt5q", rendersWithMotion: true, scopeId: "NMtJ4Gvu6", children: /* @__PURE__ */ _jsx10(BagDrawer, { accent: "var(--token-10b3c583-e6c2-4ed5-bd70-462ebcec53e7)", bone: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", checkoutLabel: "CHECKOUT", checkoutNewTab: false, checkoutNote: "", compactBelow: 810, currency: "$", emptyCta: "VIEW THE COLLECTION", emptyText: "Nothing in the bag yet.", fontMono: "'Geist Mono', ui-monospace, monospace", fontSans: "Geist, system-ui, sans-serif", fontSerif: "'Instrument Serif', 'Times New Roman', serif", height: "100%", id: "rnzBzwt5q", ink: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", layoutId: "HomeExperience__rnzBzwt5q", loadFonts: false, maxQuantity: 9, muted: "var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170)", name: "Bag Drawer (edit the Bag Drawer component)", panelWidth: 440, previewOpen: false, productLinkBase: "/product/", scrimOpacity: 0.55, shippingNote: "Shipping and taxes are calculated at checkout.", shopifyDomain: "", springDamping: 22, springStiffness: 110, style: { height: "100%", width: "100%" }, subtotalLabel: "SUBTOTAL", surface: "var(--token-6491f914-f7eb-4d7a-bab8-d9eec2f1e837)", title: "BAG", width: "100%" }) }) }), /* @__PURE__ */ _jsxs8(motion7.div, { className: "framer-1p6y9k3", "data-framer-name": "Font Preload (keeps Geist, Geist Mono and Instrument Serif loaded for the code components, do not delete)", layoutDependency, layoutId: "HomeExperience__QRGJBCEoX", style: { opacity: 0 }, children: [/* @__PURE__ */ _jsx10(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React6.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { className: "framer-styles-preset-v2e5c6", "data-styles-preset": "XhiG8yeyc", dir: "auto", children: "Aa" }) }), className: "framer-umju3u", "data-framer-name": "Serif", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__WayFimj33", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx10(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React6.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { className: "framer-styles-preset-rp1lc", "data-styles-preset": "Nlt6RdS7c", dir: "auto", children: "Aa" }) }), className: "framer-l2n0wk", "data-framer-name": "Serif Italic", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__FW9OJFHm3", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx10(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React6.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { className: "framer-styles-preset-1vkorbo", "data-styles-preset": "xsFHtZz0b", dir: "auto", children: "Aa" }) }), className: "framer-1j7ti5o", "data-framer-name": "Mono", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__nO2l_eCLz", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx10(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React6.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { className: "framer-styles-preset-1w2zawr", "data-styles-preset": "qulxcVUwb", dir: "auto", children: "Aa" }) }), className: "framer-22nqnq", "data-framer-name": "Sans Medium", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__wfHbMWKJB", verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx10(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React6.Fragment, { children: /* @__PURE__ */ _jsx10(motion7.p, { className: "framer-styles-preset-1n7l0dv", "data-styles-preset": "ijUnoh22D", dir: "auto", children: "Aa" }) }), className: "framer-1bdhn9h", "data-framer-name": "Sans Regular", fonts: ["Inter"], layoutDependency, layoutId: "HomeExperience__qb4SSeMnJ", verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx10(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer2, { className: "framer-1suoc6y-container", "data-code-component-plugin-id": "api", "data-framer-name": "Loader (edit the Loader component)", isAuthoredByUser: true, layoutDependency, layoutId: "HomeExperience__hXQ2_bzU9-container", name: "Loader (edit the Loader component)", nodeId: "hXQ2_bzU9", rendersWithMotion: true, scopeId: "NMtJ4Gvu6", children: /* @__PURE__ */ _jsx10(StaticFormLoader, { bone: "var(--token-31bf6c1c-c2e5-4905-a3a6-36d3d25ecb81)", duration: 0.9, enabled: true, fontMono: "'Geist Mono', ui-monospace, monospace", fontSans: "Geist, system-ui, sans-serif", height: "100%", id: "hXQ2_bzU9", ink: "var(--token-a3482f54-0c70-45ca-ae50-d600c5840b70)", layoutId: "HomeExperience__hXQ2_bzU9", line: "var(--token-d428742b-4060-4ea2-80f7-8fa00d8f3eb3)", muted: "var(--token-266155f1-ee22-4c4d-a7f9-14396f3b3170)", name: "Loader (edit the Loader component)", oncePerSession: true, showCounter: true, style: { height: "100%", width: "100%" }, subline: "AUTUMN / WINTER 26", tag: "AW26", width: "100%", wordmark: "ADELE" }) }) })] }) }) }) });
});
var css15 = [".framer-wreoD.framer-12b2s9x, .framer-wreoD .framer-12b2s9x { display: block; }", ".framer-wreoD.framer-lkx9ei { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-wreoD .framer-1y38kjd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px 28.8px 0px 28.8px; position: absolute; right: 0px; top: 0px; z-index: 10; }", ".framer-wreoD .framer-12o9vk7-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-wreoD .framer-wjfb1z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-wreoD .framer-t8plnc-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }", ".framer-wreoD .framer-b7lmaf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 8px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: none; position: absolute; top: 0px; width: 1px; z-index: 0; }", ".framer-wreoD .framer-1yry3cz, .framer-wreoD .framer-1yph8hq, .framer-wreoD .framer-16jqvsg, .framer-wreoD .framer-bb1bti, .framer-wreoD .framer-52q3jj, .framer-wreoD .framer-e3jcup, .framer-wreoD .framer-1o81zzc, .framer-wreoD .framer-lawfga { flex: none; height: 1px; pointer-events: none; position: relative; width: 1px; }", ".framer-wreoD .framer-ahahua-container { bottom: 0px; flex: none; height: 36px; left: 0px; pointer-events: none; position: absolute; width: 140px; z-index: 10; }", ".framer-wreoD .framer-1p6y9k3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 10px; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; top: 0px; width: 10px; z-index: 0; }", ".framer-wreoD .framer-umju3u, .framer-wreoD .framer-l2n0wk, .framer-wreoD .framer-1j7ti5o, .framer-wreoD .framer-22nqnq, .framer-wreoD .framer-1bdhn9h { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-wreoD .framer-1suoc6y-container { bottom: 0px; flex: none; height: 34px; left: 150px; pointer-events: none; position: absolute; width: 190px; z-index: 10; }", ".framer-wreoD.framer-v-ackhku.framer-lkx9ei { width: 100%; }", ".framer-wreoD.framer-v-ackhku .framer-1y38kjd { padding: 0px 19.4px 0px 19.4px; }", ".framer-wreoD.framer-v-4iq9m6.framer-lkx9ei { width: 100%; }", ".framer-wreoD.framer-v-4iq9m6 .framer-1y38kjd, .framer-wreoD.framer-v-1e7twdi .framer-1y38kjd { padding: 0px; }", ".framer-wreoD.framer-v-z8mp55.framer-lkx9ei { width: 100%; }", ".framer-wreoD.framer-v-z8mp55 .framer-1y38kjd { padding: 0px 36px 0px 36px; }", ".framer-wreoD.framer-v-1e7twdi.framer-lkx9ei { width: 100%; }", ...css4, ...css2, ...css5, ...css3, ...css, '.framer-wreoD[data-border="true"]::after, .framer-wreoD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerNMtJ4Gvu6 = withCSS5(Component5, css15, "framer-wreoD");
var NMtJ4Gvu6_default = FramerNMtJ4Gvu6;
FramerNMtJ4Gvu6.displayName = "Home Experience";
FramerNMtJ4Gvu6.defaultProps = { height: 200, width: 1200 };
addPropertyControls10(FramerNMtJ4Gvu6, { variant: { options: ["dHScHprIc", "cfBMosz4e", "L4kSGZwhr", "IiTdSYk37", "HT7FRcVyn"], optionTitles: ["Desktop", "Tablet", "Phone", "Desktop XL", "Phone Small"], title: "Variant", type: ControlType10.Enum } });
addFonts5(FramerNMtJ4Gvu6, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...NavFonts, ...RunwayStageFonts, ...BagDrawerFonts, ...LoaderFonts, ...getFontsFromSharedStyle5(fonts4), ...getFontsFromSharedStyle5(fonts2), ...getFontsFromSharedStyle5(fonts5), ...getFontsFromSharedStyle5(fonts3), ...getFontsFromSharedStyle5(fonts)], { supportsExplicitInterCodegen: true });
FramerNMtJ4Gvu6.loader = { load: (props, context) => {
  return runTasksWithYield2([() => forwardLoader2(UlNizQwZu_default, {}, context)], context);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerNMtJ4Gvu6", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cfBMosz4e":{"layout":["fixed","auto"]},"L4kSGZwhr":{"layout":["fixed","auto"]},"IiTdSYk37":{"layout":["fixed","auto"]},"HT7FRcVyn":{"layout":["fixed","auto"]}}}', "framerContractVersion": "1", "framerColorSyntax": "true", "framerIntrinsicHeight": "200", "framerAutoSizeImages": "true", "framerComponentViewportWidth": "true", "framerIntrinsicWidth": "1200" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  NMtJ4Gvu6_default as default
};
