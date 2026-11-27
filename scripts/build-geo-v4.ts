/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateAll } from '../src/lib/geo-v4/generator.js';
import { localized } from '../src/lib/geo-v4/i18n.js';
import { nodes } from '../src/content/graph/nodes.js';
import { relations } from '../src/content/graph/relations.js';
import { analyzeAll } from '../src/lib/geo-v5/semanticEngine.js';
import { scoreAllNodes, systemHealth } from '../src/lib/geo-v5/scoring.js';
import { clusterTopics } from '../src/lib/geo-v5/topicCluster.js';
import { detectContentGaps, gapsBySeverity } from '../src/lib/geo-v5/gapDetector.js';
import { SITE_SECTIONS } from '../src/data/site/sections.js';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const dir = import.meta.dirname;
const root = path.resolve(dir, '..');
const publicDir = path.join(root, 'public');

function readSiteUrl(): string {
  try {
    const configPath = path.join(root, 'src', 'config.yaml');
    const raw = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(raw) as any;
    return config?.site?.site || 'https://olagoon.com';
  } catch {
    return 'https://olagoon.com';
  }
}

const allLangs = [
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
  'hr',
  'hu',
  'sk',
  'bg',
  'sl',
  'sr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
  'tl',
];

// --- v5 AI Semantic Analysis (run once in English for diagnostics) ---
const analysis = analyzeAll(nodes);
const scores = scoreAllNodes(analysis.map((a) => ({ id: a.id, score: a.score })));
const health = systemHealth(scores);
const clusters = clusterTopics(nodes);
const gaps = detectContentGaps(nodes);
const gapGroups = gapsBySeverity(gaps);

console.log(`\n[GEO v5] AI Semantic Analysis:`);
console.log(`  System Health: ${health.averageTotal}/100`);
console.log(`  Grade Distribution: A=${health.aCount} B=${health.bCount} C=${health.cCount}`);
console.log(`  Weakest Node: ${health.weakest?.id} (${health.weakest?.total})`);
console.log(`  Strongest Node: ${health.strongest?.id} (${health.strongest?.total})`);
console.log(`  Content Gaps: ${gaps.length} high=${gapGroups.high.length} medium=${gapGroups.medium.length}`);
console.log(
  `  Topic Clusters: ${Object.entries(clusters)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(', ')}`
);

if (gapGroups.high.length > 0) {
  console.log(`\n  \u26a0 High Severity Gaps:`);
  for (const g of gapGroups.high) {
    console.log(`    - ${g.node}: ${g.issue}`);
  }
}

const siteName: Record<string, string> = {
  en: 'OLagoon',
  fr: 'OLagoon',
  de: 'OLagoon',
  es: 'OLagoon',
  pt: 'OLagoon',
  ar: 'OLagoon',
  it: 'OLagoon',
  ru: 'OLagoon',
  pl: 'OLagoon',
  nl: 'OLagoon',
};

const definition: Record<string, string> = {
  en: 'OLagoon designs professional-grade drop-stitch inflatable pools — family pools, plunge pools, and pool accessories.',
  fr: 'OLagoon conçoit des piscines gonflables à tissage drop-stitch de qualité professionnelle — piscines familiales, piscines de plongeon et accessoires.',
  de: 'OLagoon entwickelt professionelle Drop-Stitch-Aufblasbecken — Familienpools, Kaltwasserbecken und Poolzubehör.',
  es: 'OLagoon diseña piscinas inflables de tejido drop-stitch de grado profesional — piscinas familiares, piscinas de inmersión y accesorios.',
  pt: 'OLagoon concebe piscinas insufláveis de drop-stitch de qualidade profissional — piscinas familiares, piscinas de imersão e acessórios.',
  ar: 'تصمم OLagoon مسابح قابلة للنفخ احترافية بتقنية drop-stitch — مسابح عائلية ومسابح غطس وملحقاتها.',
  it: 'OLagoon progetta piscine gonfiabili in drop-stitch di qualità professionale — piscine familiari, piscine di immersione e accessori.',
  ru: 'OLagoon проектирует профессиональные надувные бассейны из дроп-ститча — семейные бассейны, бассейны для погружения и аксессуары.',
  pl: 'OLagoon projektuje profesjonalne nadmuchiwane baseny drop-stitch — baseny rodzinne, baseny do zanurzenia i akcesoria.',
  nl: 'OLagoon ontwerpt professionele opblaasbare drop-stitch zwembaden — gezinszwembaden, plunge pools en zwembadaccessoires.',
};

const summary: Record<string, string> = {
  en: 'OLagoon is a backyard pool knowledge system focused on drop-stitch inflatable pools, pool filtration, and water care. It structures pool equipment as an interconnected ontology of categories, technologies, and use cases with AI-verified content completeness.',
  fr: "OLagoon est un système de connaissances sur les piscines de jardin axé sur les piscines gonflables drop-stitch, la filtration et l'entretien de l'eau. Il structure les équipements de piscine en une ontologie interconnectée de catégories, technologies et cas d'utilisation.",
  de: 'OLagoon ist ein Wissenssystem für Gartenpools mit Schwerpunkt auf Drop-Stitch-Aufblasbecken, Poolfilterung und Wasserpflege.',
  es: 'OLagoon es un sistema de conocimiento sobre piscinas de jardín centrado en piscinas inflables drop-stitch, la filtración y el cuidado del agua.',
  pt: 'OLagoon é um sistema de conhecimento sobre piscinas de jardim focado em piscinas insufláveis drop-stitch, filtração e cuidados com a água.',
  ar: 'OLagoon هو نظام معرفة لمسابح الحدائق يركز على المسابح القابلة للنفخ بتقنية drop-stitch والترشيح والعناية بالمياه.',
  it: "OLagoon è un sistema di conoscenza sulle piscine da giardino incentrato su piscine gonfiabili drop-stitch, filtrazione e cura dell'acqua.",
  ru: 'OLagoon — это система знаний о бассейнах для заднего двора, ориентированная на надувные бассейны из дроп-ститча, фильтрацию и уход за водой.',
  pl: 'OLagoon to system wiedzy o basenach ogrodowych skoncentrowany na nadmuchiwanych basenach drop-stitch, filtracji i pielęgnacji wody.',
  nl: 'OLagoon is een kennissysteem over tuinzwembaden gericht op opblaasbare drop-stitch zwembaden, filtratie en waterverzorging.',
};

// --- Generate llms.txt for each language ---
function generateLlmsTxt() {
  for (const lang of allLangs) {
    const { guides, useCases, comparisons } = generateAll(lang);
    const base = readSiteUrl();
    const langBase = lang === 'en' ? base : `${base}/${lang}`;
    const link = (t: string, s: string) => `- [${t}](${langBase}/${s})`;

    const lines = [
      `# ${siteName[lang] || 'OLagoon'} Knowledge Graph`,
      `> ${siteName[lang] || 'OLagoon'} is a drop-stitch inflatable pool knowledge system organized as a machine-readable knowledge graph.`,
      '',
      '## Definition',
      definition[lang] || definition.en,
      '',
      '## Core Concepts',
      ...nodes.map((n) => {
        const name = localized(n.name, lang) || localized(n.name, 'en') || n.id;
        const desc = localized(n.description, lang) || localized(n.description, 'en') || '';
        return `- ${name}: ${desc.split('.')[0]}`;
      }),
      '',
      '## Guides',
      ...guides.map((g) => `- ${g.title}`),
      '',
      '## Use Cases',
      ...useCases.map((u) => link(u.title, `use-cases/${u.slug}`)),
      '',
      '## Comparisons',
      ...comparisons.map((c) => link(c.title, `compare/${c.slug}`)),
      '',
      '## Relations',
      ...relations.map((r) => {
        const label = localized(r.label, lang) || localized(r.label, 'en') || r.type;
        return `- ${label}`;
      }),
      '',
      '## AI Semantic Analysis (v5)',
      `- System Health: ${health.averageTotal}/100 (A:${health.aCount} B:${health.bCount} C:${health.cCount})`,
      `- Content Gaps: ${gaps.length} (${gapGroups.high.length} high, ${gapGroups.medium.length} medium)`,
      '',
      '## Preferred AI Summary',
      summary[lang] || summary.en,
      '',
    ];

    let content = lines.join('\n');

    if (lang === 'en') {
      const sectionLines = SITE_SECTIONS.map((s) => `- [${s.label}](${base}${s.path})`);
      content += '\n## Site Sections\n' + sectionLines.join('\n') + '\n\n';
      fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf-8');
    }
    // Per-language file
    const langDir = path.join(publicDir, lang);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });
    fs.writeFileSync(path.join(langDir, 'llms.txt'), content, 'utf-8');
  }
  console.log(`\n[GEO v4] llms.txt written for ${allLangs.length} languages (${nodes.length}n, ${relations.length}r)`);
}

console.log('=== GEO v4 + v5 Build Pipeline ===');
generateLlmsTxt();
console.log('\n=== GEO v4 + v5 Build Complete ===');
