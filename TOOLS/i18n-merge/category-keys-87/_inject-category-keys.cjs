const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const KEYS = {
  'category.all': {
    en: 'All',
    ar: 'الكل',
    cs: 'Vše',
    da: 'Alle',
    de: 'Alle',
    el: 'Όλα',
    es: 'Todo',
    fi: 'Kaikki',
    fr: 'Tout',
    it: 'Tutto',
    ja: 'すべて',
    ko: '전체',
    nl: 'Alles',
    no: 'Alle',
    pl: 'Wszystko',
    pt: 'Tudo',
    ro: 'Toate',
    ru: 'Все',
    sv: 'Alla',
    th: 'ทั้งหมด',
    tr: 'Tümü',
  },
  'category.premium': {
    en: 'Premium',
    ar: 'فاخر',
    cs: 'Prémiové',
    da: 'Premium',
    de: 'Premium',
    el: 'Premium',
    es: 'Premium',
    fi: 'Premium',
    fr: 'Premium',
    it: 'Premium',
    ja: 'プレミアム',
    ko: '프리미엄',
    nl: 'Premium',
    no: 'Premium',
    pl: 'Premium',
    pt: 'Premium',
    ro: 'Premium',
    ru: 'Премиум',
    sv: 'Premium',
    th: 'พรีเมียม',
    tr: 'Premium',
  },
  'category.metaDesc': {
    en: 'Browse OLagoon {category} products.',
    ar: 'تصفح منتجات OLagoon {category}.',
    cs: 'Procházejte produkty OLagoon {category}.',
    da: 'Gennemse OLagoon {category}-produkter.',
    de: 'Entdecken Sie OLagoon {category}-Produkte.',
    el: 'Εξερευνήστε τα προϊόντα OLagoon {category}.',
    es: 'Explora los productos {category} de OLagoon.',
    fi: 'Selaa OLagoonin {category}-tuotteita.',
    fr: 'Parcourez les produits {category} OLagoon.',
    it: 'Sfoglia i prodotti {category} OLagoon.',
    ja: 'OLagoonの{category}製品をご覧ください。',
    ko: 'OLagoon {category} 제품을 둘러보세요.',
    nl: 'Bekijk OLagoon {category}-producten.',
    no: 'Utforsk OLagoon {category}-produkter.',
    pl: 'Przeglądaj produkty OLagoon {category}.',
    pt: 'Explore os produtos {category} da OLagoon.',
    ro: 'Răsfoiți produsele OLagoon {category}.',
    ru: 'Просмотрите товары OLagoon {category}.',
    sv: 'Utforska OLagoons {category}-produkter.',
    th: 'สำรวจผลิตภัณฑ์ {category} ของ OLagoon',
    tr: 'OLagoon {category} ürünlerine göz atın.',
  },
};

const locales = Object.keys(j).filter((k) => typeof j[k] === 'object' && k !== 'en');
let added = 0;
for (const [key, vals] of Object.entries(KEYS)) {
  for (const l of locales) {
    if (j[l][key] === undefined) {
      j[l][key] = vals[l];
      added++;
    } else console.log('SKIP exists: ' + l + '.' + key);
  }
  if (j.en[key] === undefined) j.en[key] = vals.en;
}
fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n');
console.log('added ' + added + ' entries; locales: ' + locales.length);
