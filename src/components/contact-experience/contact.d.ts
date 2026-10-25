export interface ContactExperienceProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop XL" → oBSvAPjBL
   *   "Phone Small" → cjLKw_Mli
   *   "Desktop" → nRlT_RF5N
   *   "Phone" → YsDDIncE1
   *   "Tablet" → UQhiR68pS
   */
  variant?: 'Desktop XL' | 'Phone Small' | 'Desktop' | 'Phone' | 'Tablet' | 'nRlT_RF5N' | 'UQhiR68pS' | 'YsDDIncE1' | 'oBSvAPjBL' | 'cjLKw_Mli';
  /** Additional properties */
  [key: string]: unknown;
}
