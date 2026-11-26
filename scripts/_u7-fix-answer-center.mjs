import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const doc = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const SUBS = {
  en: 'Instant answers about our pools, technology, and backyard setups — powered by the olagoon knowledge base.',
  de: 'Sofortige Antworten zu unseren Produkten, unserer Technologie und unseren Pools — basierend auf der olagoon-Wissensdatenbank.',
  pt: 'Respostas instantâneas sobre nossos produtos, tecnologia e piscinas — com base na base de conhecimento da olagoon.',
  fr: 'Des réponses instantanées sur nos produits, notre technologie et nos piscines — propulsées par la base de connaissances olagoon.',
  es: 'Respuestas instantáneas sobre nuestros productos, tecnología y piscinas — impulsado por la base de conocimientos de olagoon.',
  it: 'Risposte immediate su prodotti, tecnologia e piscine — basate sulla knowledge base olagoon.',
  cs: 'Okamžité odpovědi o našich výrobcích, technologii a bazénech — poháněné znalostní databází olagoon.',
  da: 'Øjeblikkelige svar om vores produkter, teknologi og pools — drevet af olagoon-vidensbasen.',
  sl: 'Takojšnji odgovori o naših izdelkih, tehnologiji in bazenih — poganja jih baza znanja olagoon.',
};

let changed = 0;
for (const [loc, value] of Object.entries(SUBS)) {
  const keys = doc[loc];
  if (!keys || typeof keys['answerCenter.subtitle'] !== 'string') {
    console.error(`MISSING answerCenter.subtitle for ${loc}`);
    process.exit(1);
  }
  if (keys['answerCenter.subtitle'] !== value) {
    keys['answerCenter.subtitle'] = value;
    changed += 1;
  }
}

fs.writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
console.log(`updated ${changed} answerCenter.subtitle values`);
