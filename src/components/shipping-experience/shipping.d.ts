export interface ShippingExperienceProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop XL" → e5JVgGi8L
   *   "Phone Small" → JK1l82ycN
   *   "Desktop" → gRWuwdUCG
   *   "Phone" → MRi2ZNpzC
   *   "Tablet" → gV6LJmJsH
   */
  variant?: 'Desktop XL' | 'Phone Small' | 'Desktop' | 'Phone' | 'Tablet' | 'gRWuwdUCG' | 'gV6LJmJsH' | 'MRi2ZNpzC' | 'e5JVgGi8L' | 'JK1l82ycN';
  /** Additional properties */
  [key: string]: unknown;
}
