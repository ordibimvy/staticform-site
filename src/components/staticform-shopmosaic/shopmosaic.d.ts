export interface StaticFormShopMosaicProps {
  /**
   * Products
   */
  products?: unknown[];
  /**
   * Text blocks — pass as `notes` not `textBlocks`.
   */
  notes?: unknown[];
  /**
   * All label
   * @default "ALL"
   */
  allLabel?: string;
  /**
   * Note label
   * @default "NOTE / AW26"
   */
  noteLabel?: string;
  /**
   * View tag — pass as `viewLabel` not `viewTag`.
   * @default "VIEW"
   */
  viewLabel?: string;
  /**
   * Break 1 — pass as `breakA` not `break1`.
   * @default "AW26"
   */
  breakA?: string;
  /**
   * Break 2 — pass as `breakB` not `break2`.
   * @default "PART TWO / KNIT, SHIRTS, TROUSERS, OBJECTS"
   */
  breakB?: string;
  /**
   * Break 3 — pass as `breakC` not `break3`.
   * @default "MADE IN PORTUGAL"
   */
  breakC?: string;
  /**
   * Currency
   * @default "€"
   */
  currency?: string;
  /**
   * Product path — pass as `productLinkBase` not `productPath`.
   * @default "/product/"
   */
  productLinkBase?: string;
  /**
   * Compact below
   * Range: min: 320, max: 1400
   * @default 810
   */
  compactBelow?: number;
  /**
   * Nav height — pass as `barHeight` not `navHeight`.
   * Range: min: 0, max: 200
   * @default 64
   */
  barHeight?: number;
  /**
   * Nav height compact — pass as `barHeightCompact` not `navHeightCompact`.
   * Range: min: 0, max: 200
   * @default 58
   */
  barHeightCompact?: number;
  /**
   * Font sans
   * @default "Geist, system-ui, sans-serif"
   */
  fontSans?: string;
  /**
   * Font serif
   * @default "'Instrument Serif', 'Times New Roman', serif"
   */
  fontSerif?: string;
  /**
   * Font mono
   * @default "'Geist Mono', ui-monospace, monospace"
   */
  fontMono?: string;
  /**
   * Load fonts
   * @default false
   */
  loadFonts?: boolean;
  /**
   * Ink
   * @default "#11110F"
   */
  ink?: string;
  /**
   * Bone
   * @default "#EDEAE2"
   */
  bone?: string;
  /**
   * Surface
   * @default "#1A1916"
   */
  surface?: string;
  /**
   * Muted
   * @default "#858178"
   */
  muted?: string;
  /**
   * Accent
   * @default "#B93F32"
   */
  accent?: string;
  /** Additional properties */
  [key: string]: unknown;
}
