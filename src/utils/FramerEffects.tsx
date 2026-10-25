/**
 * FramerEffects — auto-populated by the exporter
 *
 * The bundled Framer runtime's withFX HOC does NOT execute the
 * `__framer__*` animation props it receives. This file
 * reimplements those animations via WAAPI so the rendered
 * components actually animate.
 *
 *
 * Pre-populated targets:
 *
 * REVEALS (12):
 *   - .framer-un6ure-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-1dyr3uf-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-19u9t3m-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-1kyi6t9-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-w2zdm3-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-zazoba-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-ey97y4-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-1cwh69-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-1by460j-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-190jmo2-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-glqvqg-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *   - .framer-1bh1aiw-container (1100ms cubic-bezier(0.16, 1, 0.3, 1))
 *
 * Mount this component once at the page root.
 */
"use client";
import { useEffect } from "react";

interface RevealSpec {
  selector: string;
  keyframes: Keyframe[];
  duration: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}

interface LoopSpec {
  selector: string;
  keyframes: Keyframe[];
  duration: number;
  easing?: string;
  pauseOffscreen?: boolean;
}

// Shared fade-up reveal used by most targets in the exported bundles
const fadeUp = (selector: string): RevealSpec => ({
  selector,
  keyframes: [
    { opacity: 0, transform: "translateY(36px)" },
    { opacity: 1, transform: "none" },
  ],
  duration: 1100,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  threshold: 0.12,
  once: true,
});

// Lookbook-Experience reveals (all share the fade-up spec)
export const LOOKBOOK_REVEALS: RevealSpec[] = [
  "un6ure", "1dyr3uf", "19u9t3m", "1kyi6t9", "w2zdm3", "zazoba",
  "ey97y4", "1cwh69", "1by460j", "190jmo2", "glqvqg", "1bh1aiw",
].map((id) => fadeUp(`.framer-${id}-container`));

// About-Experience reveals: two have their own spec, the rest are fade-up
export const ABOUT_REVEALS: RevealSpec[] = [
  {
    selector: ".framer-1eckh1a",
    keyframes: [
      { opacity: 0, transform: "scale(1.06)" },
      { opacity: 1, transform: "none" },
    ],
    duration: 1400,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    threshold: 0.12,
    once: true,
  },
  {
    selector: ".framer-styles-preset-thhi5p",
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    duration: 1100,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    threshold: 0.12,
    once: true,
  },
  ...["sedb5n", "dijmpz", "1pzn97h", "n8aqas", "styles-preset-1lgkhab", "styles-preset-1n7l0dv", "j8loz2"]
    .map((id) => fadeUp(id.startsWith("styles-") ? `.framer-${id}` : `.framer-${id}-container`)),
];

// Shipping-Experience reveals (all fade-up)
export const SHIPPING_REVEALS: RevealSpec[] = [
  "jbfniv", "1ddxb50", "o5j133", "bgtak7", "7jw81w",
].map((id) => fadeUp(`.framer-${id}-container`));

// Returns-Experience reveals (all fade-up)
export const RETURNS_REVEALS: RevealSpec[] = [
  "8dmsqq", "1rd3w7v", "18r9wna", "1wfkerb", "5fzlio",
].map((id) => fadeUp(`.framer-${id}-container`));

// Privacy-Experience reveals (all fade-up)
export const PRIVACY_REVEALS: RevealSpec[] = [
  "1q1nlzh", "1odrnnj", "1is82r1", "17vdk4z", "8h7d1y",
].map((id) => fadeUp(`.framer-${id}-container`));

// Product-Experience reveals (all fade-up)
export const PRODUCT_REVEALS: RevealSpec[] = [
  ".framer-styles-preset-thhi5p", ".framer-kgc34i",
].map((selector) => fadeUp(selector));

const LOOP_SPECS: LoopSpec[] = [];

export default function FramerEffects({ reveals }: { reveals: RevealSpec[] }) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const fired = new Set<Element>();

    for (const spec of reveals) {
      const targets = document.querySelectorAll<HTMLElement>(spec.selector);
      if (targets.length === 0) continue;
      targets.forEach((el) => {
        const initial = el.animate(spec.keyframes.slice(0, 1) as Keyframe[], { duration: 1, fill: "forwards" });
        initial.pause();
      });
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (spec.once !== false && fired.has(e.target)) continue;
          (e.target as HTMLElement).animate(spec.keyframes, {
            duration: spec.duration,
            easing: spec.easing,
            fill: "forwards",
          });
          if (spec.once !== false) fired.add(e.target);
        }
      }, { threshold: spec.threshold ?? 0, rootMargin: "0px" });
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    for (const spec of LOOP_SPECS) {
      const targets = document.querySelectorAll<HTMLElement>(spec.selector);
      const anims: Animation[] = [];
      targets.forEach((el) => {
        const anim = el.animate(spec.keyframes, {
          duration: spec.duration,
          easing: spec.easing,
          iterations: Infinity,
        });
        anims.push(anim);
      });
      if (spec.pauseOffscreen) {
        const io = new IntersectionObserver((entries) => {
          for (const e of entries) {
            const i = Array.from(targets).indexOf(e.target as HTMLElement);
            if (i < 0) continue;
            if (e.isIntersecting) anims[i]?.play();
            else anims[i]?.pause();
          }
        }, { threshold: 0 });
        targets.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
      cleanups.push(() => anims.forEach((a) => a.cancel()));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [reveals]);

  return null;
}
