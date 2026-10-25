export interface LookbookExperienceProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop XL" → c_AklSVqp
   *   "Phone Small" → sjyAps2za
   *   "Desktop" → k_eLkRz2s
   *   "Phone" → o2xz9uquY
   *   "Tablet" → JdmuOBueD
   */
  variant?: 'Desktop XL' | 'Phone Small' | 'Desktop' | 'Phone' | 'Tablet' | 'k_eLkRz2s' | 'JdmuOBueD' | 'o2xz9uquY' | 'c_AklSVqp' | 'sjyAps2za';
  /** Additional properties */
  [key: string]: unknown;
}
