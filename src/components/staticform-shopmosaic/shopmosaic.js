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
var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/hk8kEK22gQzKxY6N3gYd/4zRBbUoJFLNi4nKxwied/StaticForm_ShopMosaic.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
function useIsCanvas() {
  return RenderTarget.current() === RenderTarget.canvas || RenderTarget.current() === RenderTarget.thumbnail;
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
  const [box, setBox] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
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
function rootVars(p) {
  return { "--sf-ink": p.ink, "--sf-bone": p.bone, "--sf-surface": p.surface, "--sf-muted": p.muted, "--sf-accent": p.accent, "--sf-line": "color-mix(in srgb, var(--sf-bone) 16%, transparent)", "--sf-line-strong": "color-mix(in srgb, var(--sf-bone) 34%, transparent)", "--sf-bone-60": "color-mix(in srgb, var(--sf-bone) 60%, transparent)", "--sf-ink-80": "color-mix(in srgb, var(--sf-ink) 80%, transparent)", "--sf-ink-60": "color-mix(in srgb, var(--sf-ink) 60%, transparent)", "--sf-font-sans": p.fontSans, "--sf-font-serif": p.fontSerif, "--sf-font-mono": p.fontMono, "--sf-ease": "cubic-bezier(0.16, 1, 0.3, 1)" };
}
var colorControls = { ink: { type: ControlType.Color, title: "Ink", defaultValue: "#11110F" }, bone: { type: ControlType.Color, title: "Bone", defaultValue: "#F4EFE6" }, surface: { type: ControlType.Color, title: "Surface", defaultValue: "#1A1916" }, muted: { type: ControlType.Color, title: "Muted", defaultValue: "#858178" }, accent: { type: ControlType.Color, title: "Accent", defaultValue: "#B8975A" } };
var fontControls = { fontSans: { type: ControlType.String, title: "Font sans", defaultValue: "Geist, system-ui, sans-serif" }, fontSerif: { type: ControlType.String, title: "Font serif", defaultValue: "'Instrument Serif', 'Times New Roman', serif" }, fontMono: { type: ControlType.String, title: "Font mono", defaultValue: "'Geist Mono', ui-monospace, monospace" }, loadFonts: { type: ControlType.Boolean, title: "Load fonts", defaultValue: false } };
var money = (n, cur) => PRICE_PLACEHOLDER;
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
var IMG = { "products/fold-trouser": "/adele/placeholder-shop-15.jpg", "products/heavy-scarf-01": "/adele/placeholder-shop-23.jpg", "products/layered-tee": "/adele/placeholder-shop-13.jpg", "products/leather-object-03": "/adele/placeholder-shop-21.jpg", "products/long-coat-01": "/adele/placeholder-shop-03.jpg", "products/raw-wool-coat": "/adele/placeholder-shop-01.jpg", "products/rib-knit-vest": "/adele/placeholder-shop-09.jpg", "products/soft-knit-02": "/adele/placeholder-shop-07.jpg", "products/structured-shirt": "/adele/placeholder-shop-11.jpg", "products/utility-bag": "/adele/placeholder-shop-19.jpg", "products/wide-trouser-03": "/adele/placeholder-shop-17.jpg", "products/work-jacket-02": "/adele/placeholder-shop-05.jpg", "archive/aw25": "/adele/placeholder-hidden-01.jpg", "archive/ss25": "/adele/placeholder-hidden-02.jpg", "archive/ss26": "/adele/placeholder-hidden-03.jpg", "details/fold-trouser": "/adele/placeholder-shop-16.jpg", "details/heavy-scarf-01": "/adele/placeholder-shop-24.jpg", "details/layered-tee": "/adele/placeholder-shop-14.jpg", "details/leather-object-03": "/adele/placeholder-shop-22.jpg", "details/long-coat-01": "/adele/placeholder-shop-04.jpg", "details/raw-wool-coat": "/adele/placeholder-shop-02.jpg", "details/rib-knit-vest": "/adele/placeholder-shop-10.jpg", "details/soft-knit-02": "/adele/placeholder-shop-08.jpg", "details/structured-shirt": "/adele/placeholder-shop-12.jpg", "details/utility-bag": "/adele/placeholder-shop-20.jpg", "details/wide-trouser-03": "/adele/placeholder-shop-18.jpg", "details/work-jacket-02": "/adele/placeholder-shop-06.jpg", "about/studio": "/adele/placeholder-about-01.jpg", "looks/look-01": "/adele/placeholder-home-01.jpg", "looks/look-02": "/adele/placeholder-home-02.jpg", "looks/look-03": "/adele/placeholder-home-03.jpg", "looks/look-04": "/adele/placeholder-home-04.jpg", "looks/look-05": "/adele/placeholder-home-05.jpg", "looks/look-06": "/adele/placeholder-home-06.jpg", "looks/look-07": "/adele/placeholder-home-07.jpg", "looks/look-08": "/adele/placeholder-home-08.jpg", "lookbook/detail-01": "/adele/placeholder-lookbook-02.jpg", "lookbook/detail-02": "/adele/placeholder-lookbook-03.jpg", "lookbook/detail-03": "/adele/placeholder-lookbook-05.jpg", "lookbook/wide-01": "/adele/placeholder-lookbook-01.jpg", "lookbook/wide-02": "/adele/placeholder-lookbook-04.jpg", "crops/raw-wool-coat": "/adele/placeholder-hidden-04.jpg", "crops/long-coat-01": "/adele/placeholder-hidden-05.jpg", "crops/work-jacket-02": "/adele/placeholder-hidden-06.jpg", "crops/soft-knit-02": "/adele/placeholder-hidden-07.jpg", "crops/rib-knit-vest": "/adele/placeholder-hidden-08.jpg", "crops/structured-shirt": "/adele/placeholder-hidden-09.jpg", "crops/layered-tee": "/adele/placeholder-hidden-10.jpg", "crops/fold-trouser": "/adele/placeholder-hidden-11.jpg", "crops/wide-trouser-03": "/adele/placeholder-hidden-12.jpg", "crops/utility-bag": "/adele/placeholder-hidden-13.jpg", "crops/leather-object-03": "/adele/placeholder-hidden-14.jpg", "crops/heavy-scarf-01": "/adele/placeholder-hidden-15.jpg", "meta/favicon": "/adele/placeholder-hidden-16.jpg", "meta/og": "/adele/placeholder-hidden-17.jpg" };
var PRODUCTS = [{ slug: "raw-wool-coat", name: "Signature Wrap Coat", sku: "AD-AW26-OW-04", category: "outerwear", price: 420, color: "Charcoal", tone: "charcoal", tag: "WOOL COAT 04", sizes: "XS,S,M,L,XL", soldOut: "XS", short: "A long straight coat in brushed raw wool. Dropped shoulder, concealed placket, no lining at the back to let it move." }, { slug: "long-coat-01", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OW-01", category: "outerwear", price: 480, color: "Ash", tone: "ash", tag: "LONG COAT 01", sizes: "XS,S,M,L,XL", soldOut: "", short: "Single breasted, ankle length, cut in a bone grey wool twill. Quiet from the front, severe in motion." }, { slug: "work-jacket-02", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OW-02", category: "outerwear", price: 310, color: "Olive Grey", tone: "olive", tag: "WORK JACKET 02", sizes: "XS,S,M,L,XL", soldOut: "XL", short: "A boxy short jacket in washed canvas with four patch pockets. Built for use, kept strict." }, { slug: "soft-knit-02", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-KN-02", category: "knit", price: 190, color: "Oatmeal", tone: "oatmeal", tag: "SOFT KNIT 02", sizes: "XS,S,M,L,XL", soldOut: "", short: "A heavy rib mock neck in brushed alpaca blend. Oversized through the body, narrow at the cuff." }, { slug: "rib-knit-vest", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-KN-05", category: "knit", price: 140, color: "Stone", tone: "stone", tag: "KNIT VEST 05", sizes: "XS,S,M,L,XL", soldOut: "", short: "A sleeveless chunky rib in stone wool. Layer it over a shirt or wear it alone." }, { slug: "structured-shirt", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-SH-03", category: "shirts", price: 165, color: "Bone", tone: "bone", tag: "SHIRT 03", sizes: "XS,S,M,L,XL", soldOut: "XS,S", short: "A stiff poplin shirt with an oversized collar and a high, straight hem." }, { slug: "layered-tee", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-SH-06", category: "shirts", price: 85, color: "Washed Grey", tone: "ash", tag: "LAYERED TEE 06", sizes: "XS,S,M,L,XL", soldOut: "", short: "Washed jersey with a second, longer black layer sewn into the hem." }, { slug: "fold-trouser", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-TR-01", category: "trousers", price: 210, color: "Off-black", tone: "black", tag: "FOLD TROUSER 01", sizes: "44,46,48,50,52", soldOut: "44", short: "A wide trouser with a double fold at the front and a deep break. Falls straight from the hip." }, { slug: "wide-trouser-03", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-TR-03", category: "trousers", price: 230, color: "Charcoal", tone: "charcoal", tag: "WIDE TROUSER 03", sizes: "44,46,48,50,52", soldOut: "", short: "Charcoal flannel, cut wide with one deep pleat. Sits high, finishes on the shoe." }, { slug: "utility-bag", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-01", category: "objects", price: 175, color: "Black", tone: "black", tag: "UTILITY BAG", sizes: "ONE SIZE", soldOut: "", short: "A technical nylon carry piece with a webbing strap, one steel buckle and nothing else." }, { slug: "leather-object-03", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-03", category: "objects", price: 260, color: "Black", tone: "black", tag: "LEATHER OBJECT 03", sizes: "ONE SIZE", soldOut: "", short: "A folded leather pouch that works as a bag, a case, or an object on a table." }, { slug: "heavy-scarf-01", name: "[PRODUCT NAME — CONFIRM]", sku: "AD-AW26-OB-05", category: "objects", price: 120, color: "Charcoal", tone: "charcoal", tag: "SCARF 01", sizes: "ONE SIZE", soldOut: "", short: "Two metres of dense brushed wool. Wrap it once and let it hang." }];
var sizedUrl = (u, w) => u && /framerusercontent\.com\/images\/[^?]+$/.test(u) ? `${u}?scale-down-to=${w}` : u;
var srcSetFor = (u) => u && /framerusercontent\.com\/images\/[^?]+$/.test(u) ? `${sizedUrl(u, 512)} 512w, ${sizedUrl(u, 1024)} 1024w` : void 0;
var sizesFor = (slot) => `(min-width: 810px) ${[58, 33, 33, 42, 33, 58][slot] || 58}vw, ${slot === 0 || slot === 5 || slot === 3 ? 100 : 50}vw`;
var prodImg = (slug) => IMG["products/" + slug] || "";
var prodDetail = (slug) => IMG["details/" + slug] || "";
var CATS = [{ id: "all", label: "ALL" }, { id: "outerwear", label: "OUTERWEAR" }, { id: "knit", label: "KNIT" }, { id: "shirts", label: "SHIRTS" }, { id: "trousers", label: "TROUSERS" }, { id: "objects", label: "OBJECTS" }];
var CSS = `
.sfm{width:100%;box-sizing:border-box;font-family:var(--sf-font-sans);color:var(--sf-bone);background:var(--sf-ink)}
.sfm *{box-sizing:border-box}
.sfm ul{list-style:none;margin:0;padding:0}
.sfm a{color:inherit;text-decoration:none}
.sfm .mono{font-family:var(--sf-font-mono);font-size:11px;line-height:1.4;letter-spacing:.08em;text-transform:uppercase;margin:0}
.sfm .mono-m{font-size:12px}
.sfm .muted{color:var(--sf-muted)}
.sfm{isolation:isolate}
.sfm-filters{position:sticky;z-index:2;background:var(--sf-ink);border-block:1px solid var(--sf-line)}
.sfm-filters-in{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
.sfm-filters-in::-webkit-scrollbar{display:none}
.sfm-filter{position:relative;flex:none;min-height:52px;margin:0;padding:18px 16px 0;border:0;background:transparent;color:var(--sf-bone-60);display:inline-flex;align-items:flex-start;gap:4px;cursor:pointer;transition:color .4s,opacity .2s;font-family:var(--sf-font-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.sfm-filter:first-child{padding-left:0}
.sfm-filter:hover,.sfm-filter.on{color:var(--sf-bone)}
.sfm-filter:active{opacity:.7}
.sfm-filter:focus-visible{outline:1px solid var(--sf-bone);outline-offset:-4px}
.sfm-filter sup{font-size:9px;color:var(--sf-muted)}
.sfm-mark{position:absolute;left:16px;right:16px;bottom:0;height:2px;background:var(--sf-bone)}
.sfm-filter:first-child .sfm-mark{left:0}
.sfm-card{display:block}
.sfm-img{position:relative;overflow:hidden;background:var(--sf-surface)}
.sfm-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .8s var(--sf-ease),transform 1.4s var(--sf-ease);display:block}
.sfm-img .b{opacity:0}
.sfm-card:hover .b,.sfm-card:focus-visible .b{opacity:1}
.sfm-card:hover .sfm-img img,.sfm-card:focus-visible .sfm-img img{transform:scale(1.035)}
.sfm-card:active .sfm-img{opacity:.85}
.sfm-card:focus-visible{outline:1px solid var(--sf-bone);outline-offset:4px}
.sfm-no{position:absolute;left:0;top:0;padding:6px 10px;background:var(--sf-ink);z-index:1}
.sfm-view{position:absolute;right:0;bottom:0;padding:7px 12px;background:var(--sf-bone);color:var(--sf-ink);z-index:1;transform:translateY(101%);transition:transform .6s var(--sf-ease)}
.sfm-card:hover .sfm-view,.sfm-card:focus-visible .sfm-view{transform:none}
.sfm-cap{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-top:14px}
.sfm-name{margin:0;font-weight:500;letter-spacing:-.01em;font-size:17px}
.sfm-rule{flex:1;height:1px;background:var(--sf-line)}
.sfm.compact .sfm-view{display:none}
.sfm.compact .sfm-cap{flex-direction:column;gap:6px}
.sfm.compact .sfm-name{font-size:15px}
.sfm.compact .sfm-cap .muted{font-size:10px}
@media (prefers-reduced-motion: reduce){.sfm *{transition-duration:.01ms!important}}
`;
function compose(list, all) {
  const cells = [];
  list.forEach((p, i) => {
    cells.push({ kind: "product", slot: i % 6, key: p.slug, i });
    if (all && i === 1)
      cells.push({ kind: "type", key: "t1", variant: 0 });
    if (all && i === 5)
      cells.push({ kind: "break", key: "b1" });
    if (all && i === 8)
      cells.push({ kind: "type", key: "t2", variant: 1 });
  });
  return cells;
}
var DEFAULT_NOTES = [{ big: "Cut by hand.", small: "Worn with confidence.", body: "[CONFIRM WITH ADELE]" }, { big: "[PRICING — CONFIRM WITH ADELE].", small: "[CONFIRM WITH ADELE]", body: "[CONFIRM WITH ADELE]" }];
var DEFAULT_PRODUCTS = PRODUCTS.map((p) => ({ slug: p.slug, name: p.name, sku: p.sku, category: p.category, price: p.price, color: p.color, image: prodImg(p.slug) || void 0, detail: prodDetail(p.slug) || void 0 }));
var SPRING = { type: "spring", stiffness: 110, damping: 22 };
function ShopMosaic(props) {
  useFonts(props.loadFonts === true);
  const { products, notes, currency, productLinkBase, compactBelow, barHeight, barHeightCompact, allLabel, breakA, breakB, breakC, noteLabel, viewLabel, labels } = props;
  const canvas = useIsCanvas();
  const ref = useRef(null);
  const { w } = useBox(ref);
  const compact = w > 0 && w < compactBelow;
  const [cat, setCat] = useState("all");
  const items = useMemo(() => (products && products.length ? products : DEFAULT_PRODUCTS).map((p) => ({ ...p, img: imgUrl(p.image, prodImg(p.slug)), det: imgUrl(p.detail, prodDetail(p.slug)) })), [products]);
  const noteList = notes && notes.length ? notes : DEFAULT_NOTES;
  const cats = CATS.map((c, i) => ({ ...c, label: i === 0 ? allLabel : labels && labels[i] ? labels[i] : c.label }));
  const list = useMemo(() => cat === "all" ? items : items.filter((p) => p.category === cat), [cat, items]);
  const cells = useMemo(() => compose(list, cat === "all"), [list, cat]);
  const count = (id) => id === "all" ? items.length : items.filter((p) => p.category === id).length;
  const gutter = clamp(w * 0.024, 16, 36);
  const rowGap = compact ? 40 : clamp(w * 0.08, 56, 128);
  const padTop = clamp(w * 0.07, 48, 110);
  const bigPx = compact ? 40 : clamp(w * 0.06, 40, 104);
  const slotStyle = (slot) => {
    if (compact) {
      if (slot === 0 || slot === 5 || slot === 3)
        return { gridColumn: "1 / -1" };
      if (slot === 1)
        return { gridColumn: "1", alignSelf: "start" };
      if (slot === 2)
        return { gridColumn: "2", marginTop: 56 };
      return { gridColumn: "1" };
    }
    switch (slot) {
      case 0:
        return { gridColumn: "1 / span 7" };
      case 1:
        return { gridColumn: "9 / span 4", alignSelf: "end" };
      case 2:
        return { gridColumn: "2 / span 4" };
      case 3:
        return { gridColumn: "7 / span 5", marginTop: clamp(w * 0.09, 40, 150) };
      case 4:
        return { gridColumn: "1 / span 4" };
      default:
        return { gridColumn: "6 / span 7" };
    }
  };
  const ratio = (slot) => slot === 0 || slot === 5 ? "4 / 5" : slot === 3 ? "5 / 6" : "3 / 4";
  return /* @__PURE__ */ _jsxs("div", { ref, className: `sfm${compact ? " compact" : ""}`, style: rootVars(props), children: [/* @__PURE__ */ _jsx("style", { dangerouslySetInnerHTML: { __html: CSS } }), /* @__PURE__ */ _jsx("div", { className: "sfm-filters", style: { top: compact ? barHeightCompact : barHeight }, role: "toolbar", "aria-label": "Filter products", children: /* @__PURE__ */ _jsx("div", { className: "sfm-filters-in", style: { padding: `0 ${gutter}px` }, children: cats.map((c) => /* @__PURE__ */ _jsxs("button", { type: "button", className: `sfm-filter${cat === c.id ? " on" : ""}`, "aria-pressed": cat === c.id, onClick: () => setCat(c.id), children: [cat === c.id && /* @__PURE__ */ _jsx(motion.i, { layoutId: "StaticFormShopMosaic__sf-filter-mark", className: "sfm-mark", transition: SPRING }), /* @__PURE__ */ _jsx("span", { children: c.label }), /* @__PURE__ */ _jsx("sup", { children: count(c.id) })] }, c.id)) }) }), /* @__PURE__ */ _jsx(motion.ul, { layout: true, transition: SPRING, style: { display: "grid", gridTemplateColumns: compact ? "repeat(2, minmax(0, 1fr))" : "repeat(12, minmax(0, 1fr))", columnGap: compact ? 12 : gutter, rowGap, alignItems: "start", padding: `${padTop}px ${gutter}px 0` }, children: /* @__PURE__ */ _jsx(AnimatePresence, { mode: "popLayout", initial: false, children: cells.map((c) => {
    if (c.kind === "product") {
      const p = items.find((x) => x.slug === c.key);
      if (!p)
        return null;
      return /* @__PURE__ */ _jsx(motion.li, { layout: "position", style: slotStyle(c.slot), initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 }, transition: SPRING, children: /* @__PURE__ */ _jsxs("a", { className: "sfm-card", href: (productLinkBase || "/product/") + p.slug, children: [/* @__PURE__ */ _jsxs("div", { className: "sfm-img", style: { aspectRatio: ratio(c.slot) }, children: [p.img ? /* @__PURE__ */ _jsx("img", { className: "a", src: sizedUrl(p.img, 1024), srcSet: srcSetFor(p.img), sizes: sizesFor(c.slot), alt: `${p.name}, ${p.color}`, loading: c.i < 2 ? "eager" : "lazy", ...c.i < 2 ? { fetchPriority: "high" } : {}, decoding: "async", draggable: false }) : null, p.det ? /* @__PURE__ */ _jsx("img", { className: "b", src: sizedUrl(p.det, 1024), srcSet: srcSetFor(p.det), sizes: sizesFor(c.slot), alt: "", loading: "lazy", decoding: "async", draggable: false }) : null, /* @__PURE__ */ _jsx("span", { className: "sfm-no mono", children: pad2(c.i + 1) }), /* @__PURE__ */ _jsx("span", { className: "sfm-view mono", children: viewLabel })] }), /* @__PURE__ */ _jsxs("div", { className: "sfm-cap", children: [/* @__PURE__ */ _jsxs("div", { children: [/* @__PURE__ */ _jsx("h2", { className: "sfm-name", children: p.name }), /* @__PURE__ */ _jsxs("p", { className: "mono muted", children: [p.color, " / ", p.sku] })] }), /* @__PURE__ */ _jsx("p", { className: "mono mono-m", children: money(Number(p.price) || 0, currency) })] })] }) }, c.key);
    }
    if (c.kind === "type") {
      const t = noteList[c.variant] || noteList[0];
      const bone = c.variant === 1;
      const padBlock = bone ? clamp(w * 0.03, 24, 48) : 0;
      return /* @__PURE__ */ _jsxs(motion.li, { layout: "position", style: { gridColumn: compact ? "1 / -1" : bone ? "2 / span 6" : "4 / span 7", padding: bone ? padBlock : "24px 0", background: bone ? "var(--sf-bone)" : "transparent", color: bone ? "var(--sf-ink)" : "var(--sf-bone)" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: SPRING, children: [/* @__PURE__ */ _jsx("p", { className: "mono muted", style: bone ? { color: "color-mix(in srgb, var(--sf-ink) 62%, var(--sf-bone))" } : void 0, children: noteLabel }), /* @__PURE__ */ _jsxs("p", { style: { margin: "14px 0 0", fontSize: bigPx, fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 0.92 }, children: [t.big, " ", /* @__PURE__ */ _jsx("em", { style: { fontFamily: "var(--sf-font-serif)", fontWeight: 400, letterSpacing: "-0.02em" }, children: t.small })] }), /* @__PURE__ */ _jsx("p", { style: { margin: "20px 0 0", maxWidth: "42ch", color: bone ? "var(--sf-ink)" : "var(--sf-bone-60)" }, children: t.body })] }, c.key);
    }
    return /* @__PURE__ */ _jsxs(motion.li, { layout: "position", className: "mono", style: { gridColumn: "1 / -1", display: "flex", flexWrap: compact ? "wrap" : "nowrap", alignItems: "center", gap: compact ? 10 : 24, whiteSpace: compact ? "normal" : "nowrap", color: "var(--sf-muted)" }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: SPRING, children: [/* @__PURE__ */ _jsx("span", { children: breakA }), !compact && /* @__PURE__ */ _jsx("span", { className: "sfm-rule", "aria-hidden": "true" }), /* @__PURE__ */ _jsx("span", { children: breakB }), !compact && /* @__PURE__ */ _jsx("span", { className: "sfm-rule", "aria-hidden": "true" }), /* @__PURE__ */ _jsx("span", { children: breakC })] }, c.key);
  }) }) })] });
}
ShopMosaic.displayName = "Shop Mosaic";
addPropertyControls(ShopMosaic, { products: { type: ControlType.Array, title: "Products", defaultValue: DEFAULT_PRODUCTS, control: { type: ControlType.Object, controls: { slug: { type: ControlType.String, title: "Slug", defaultValue: "product" }, name: { type: ControlType.String, title: "Name", defaultValue: "Product" }, sku: { type: ControlType.String, title: "SKU", defaultValue: "AD-AW26-00" }, category: { type: ControlType.Enum, title: "Category", options: ["outerwear", "knit", "shirts", "trousers", "objects"], optionTitles: ["Outerwear", "Knit", "Shirts", "Trousers", "Objects"], defaultValue: "outerwear" }, price: { type: ControlType.Number, title: "Price", defaultValue: 100, min: 0, max: 1e5, step: 1 }, color: { type: ControlType.String, title: "Color", defaultValue: "Charcoal" }, image: { type: ControlType.Image, title: "Image" }, detail: { type: ControlType.Image, title: "Hover image" } } } }, notes: { type: ControlType.Array, title: "Text blocks", defaultValue: DEFAULT_NOTES, maxCount: 2, control: { type: ControlType.Object, controls: { big: { type: ControlType.String, title: "Big" }, small: { type: ControlType.String, title: "Italic" }, body: { type: ControlType.String, title: "Body", displayTextArea: true } } } }, allLabel: { type: ControlType.String, title: "All label", defaultValue: "ALL" }, noteLabel: { type: ControlType.String, title: "Note label", defaultValue: "NOTE / AW26" }, viewLabel: { type: ControlType.String, title: "View tag", defaultValue: "VIEW" }, breakA: { type: ControlType.String, title: "Break 1", defaultValue: "AW26" }, breakB: { type: ControlType.String, title: "Break 2", defaultValue: "COUTURE / BESPOKE TAILORING / FORMALWEAR" }, breakC: { type: ControlType.String, title: "Break 3", defaultValue: "MADE IN PORTLAND, MAINE" }, currency: { type: ControlType.String, title: "Currency", defaultValue: "$" }, productLinkBase: { type: ControlType.String, title: "Product path", defaultValue: "/product/" }, compactBelow: { type: ControlType.Number, title: "Compact below", defaultValue: 810, min: 320, max: 1400, unit: "px" }, barHeight: { type: ControlType.Number, title: "Nav height", defaultValue: 64, min: 0, max: 200, unit: "px" }, barHeightCompact: { type: ControlType.Number, title: "Nav height compact", defaultValue: 58, min: 0, max: 200, unit: "px" }, ...fontControls, ...colorControls });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "ShopMosaic", "slots": [], "annotations": { "framerSupportedLayoutHeight": "auto", "framerContractVersion": "1", "framerSupportedLayoutWidth": "any", "framerIntrinsicWidth": "1200", "framerIntrinsicHeight": "1400" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  ShopMosaic as default
};
