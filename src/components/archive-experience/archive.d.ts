export interface ArchiveExperienceProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop XL" → mCxdCVuca
   *   "Phone Small" → IXqLxtQ7s
   *   "Desktop" → icJCXP8dr
   *   "Phone" → vFoEFCuqk
   *   "Tablet" → plbMJblPe
   */
  variant?: 'Desktop XL' | 'Phone Small' | 'Desktop' | 'Phone' | 'Tablet' | 'icJCXP8dr' | 'plbMJblPe' | 'vFoEFCuqk' | 'mCxdCVuca' | 'IXqLxtQ7s';
  /** Additional properties */
  [key: string]: unknown;
}
