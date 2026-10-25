/**
 * linkNavItem
 *
 * Gives a nav item an href. Framer nav links resolve their hrefs through Framer's router,
 * which doesn't exist in this app, so those anchors render with no href at all.
 *
 * Variant swaps re-mount nav items, so a MutationObserver re-applies the href after each change.
 * Returns a cleanup function that disconnects the observer.
 */
export function linkNavItem(root: HTMLElement, label: string, href: string): () => void {
  const apply = () => {
    root.querySelectorAll<HTMLAnchorElement>('a').forEach((anchor) => {
      if (anchor.textContent?.trim() === label && anchor.getAttribute('href') !== href) {
        anchor.setAttribute('href', href)
      }
    })
  }

  apply()
  const observer = new MutationObserver(apply)
  observer.observe(root, { childList: true, subtree: true })
  return () => observer.disconnect()
}
