import type { ProductRecord } from '~/data/products';

type ProductTexts = Partial<
  Pick<
    ProductRecord,
    | 'name'
    | 'desc'
    | 'definition'
    | 'problem'
    | 'howItWorks'
    | 'audience'
    | 'ai_use_cases'
    | 'ai_specs'
    | 'ai_comparison'
    | 'ai_faq'
  >
>;

// Non-English product copy now ships from `src/data/product-texts/<locale>/<id>.yaml`;
// this registry is kept (empty) as a compiled fallback for legacy locales.
export const productTexts: Record<string, Record<string, ProductTexts>> = {};
