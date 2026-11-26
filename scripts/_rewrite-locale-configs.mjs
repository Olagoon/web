// One-off: rewrite per-locale config.{locale}.yaml metadata for OLagoon pools.
// Line-based surgery (preserves comments/order); only brand metadata changes.
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.join(process.cwd(), 'src');

const q = (s) => `'${String(s).replace(/'/g, "''")}'`;

const T = {
  en: {
    title: 'OLagoon | High-Pressure Drop-Stitch Inflatable Pools',
    mdesc:
      'OLagoon builds high-pressure drop-stitch inflatable pools that set up in minutes and stay rigid all season. Family and plunge models with sand-filter systems and a 2-year structural warranty.',
    tagline: 'Drop-Stitch Inflatable Pools — Family & Plunge Models',
    sitedesc:
      'OLagoon designs high-pressure drop-stitch inflatable pools: family pools, plunge pools, sand-filter systems and accessories. Free US shipping and a 2-year structural warranty.',
    kws: ['OLagoon', 'inflatable pool', 'drop-stitch pool', 'plunge pool', 'family pool'],
  },
  de: {
    title: 'OLagoon — Hochdruck-Pools aus Drop-Stitch-Gewebe',
    mdesc:
      'OLagoon fertigt aufblasbare Hochdruck-Pools aus Drop-Stitch-Gewebe, die in Minuten aufgebaut sind und die ganze Saison formstabil bleiben. Familien- und Plunge-Modelle mit Sandfilter-Systemen und 2 Jahren Struktur-Garantie.',
    tagline: 'Drop-Stitch-Pools — Familien- & Plunge-Modelle',
    sitedesc:
      'OLagoon entwickelt aufblasbare Hochdruck-Pools aus Drop-Stitch-Gewebe: Familienpools, Plunge-Pools, Sandfilter-Systeme und Zubehör. Kostenloser Versand in den USA und 2 Jahre Struktur-Garantie.',
    kws: ['OLagoon', 'aufblasbarer Pool', 'Drop-Stitch-Pool', 'Plunge-Pool', 'Familienpool'],
  },
  fr: {
    title: 'OLagoon — Piscines gonflables haute pression en drop-stitch',
    mdesc:
      'OLagoon conçoit des piscines gonflables haute pression en drop-stitch, montées en quelques minutes et rigides toute la saison. Modèles family et plunge avec filtre à sable et garantie structurelle de 2 ans.',
    tagline: 'Piscines gonflables drop-stitch — Modèles family & plunge',
    sitedesc:
      'OLagoon conçoit des piscines gonflables haute pression en drop-stitch : piscines familiales, piscines plunge, systèmes de filtre à sable et accessoires. Livraison gratuite aux États-Unis et garantie structurelle de 2 ans.',
    kws: ['OLagoon', 'piscine gonflable', 'piscine drop-stitch', 'piscine plunge', 'piscine familiale'],
  },
  es: {
    title: 'OLagoon — Piscinas inflables de alta presión con drop-stitch',
    mdesc:
      'OLagoon fabrica piscinas inflables de alta presión con tecnología drop-stitch que se montan en minutos y mantienen su rigidez toda la temporada. Modelos family y plunge con filtro de arena y 2 años de garantía estructural.',
    tagline: 'Piscinas inflables drop-stitch — Modelos family y plunge',
    sitedesc:
      'OLagoon diseña piscinas inflables de alta presión con drop-stitch: piscinas familiares, piscinas plunge, sistemas de filtro de arena y accesorios. Envío gratis en EE. UU. y 2 años de garantía estructural.',
    kws: ['OLagoon', 'piscina inflable', 'piscina drop-stitch', 'piscina plunge', 'piscina familiar'],
  },
  pt: {
    title: 'OLagoon — Piscinas infláveis de alta pressão em drop-stitch',
    mdesc:
      'OLagoon fabrica piscinas infláveis de alta pressão em drop-stitch que se montam em minutos e ficam rígidas toda a temporada. Modelos family e plunge com filtro de areia e 2 anos de garantia estrutural.',
    tagline: 'Piscinas infláveis drop-stitch — Modelos family e plunge',
    sitedesc:
      'OLagoon projeta piscinas infláveis de alta pressão em drop-stitch: piscinas familiares, piscinas plunge, sistemas de filtro de areia e acessórios. Envio grátis nos EUA e 2 anos de garantia estrutural.',
    kws: ['OLagoon', 'piscina inflável', 'piscina drop-stitch', 'piscina plunge', 'piscina familiar'],
  },
  it: {
    title: 'OLagoon — Piscine gonfiabili ad alta pressione in drop-stitch',
    mdesc:
      'OLagoon produce piscine gonfiabili ad alta pressione in drop-stitch che si montano in pochi minuti e restano rigide tutta la stagione. Modelli family e plunge con filtro di sabbia e 2 anni di garanzia strutturale.',
    tagline: 'Piscine gonfiabili drop-stitch — Modelli family e plunge',
    sitedesc:
      'OLagoon progetta piscine gonfiabili ad alta pressione in drop-stitch: piscine familiari, piscine plunge, sistemi a filtro di sabbia e accessori. Spedizione gratuita negli USA e 2 anni di garanzia strutturale.',
    kws: ['OLagoon', 'piscina gonfiabile', 'piscina drop-stitch', 'piscina plunge', 'piscina familiare'],
  },
  nl: {
    title: 'OLagoon — Drop-stitch opblaaszwembaden onder hoge druk',
    mdesc:
      'OLagoon maakt opblaaszwembaden van drop-stitch materiaal die onder hoge druk staan, in minuten zijn opgebouwd en het hele seizoen hun vorm behouden. Family- en plunge-modellen met zandfiltersystemen en 2 jaar constructiegarantie.',
    tagline: 'Drop-stitch opblaaszwembaden — Family- & plunge-modellen',
    sitedesc:
      'OLagoon ontwerpt opblaaszwembaden van drop-stitch onder hoge druk: familiezwembaden, plunge-zwembaden, zandfiltersystemen en accessoires. Gratis verzending in de VS en 2 jaar constructiegarantie.',
    kws: ['OLagoon', 'opblaaszwembad', 'drop-stitch zwembad', 'plunge pool', 'familiezwembad'],
  },
  sv: {
    title: 'OLagoon — Drop-stitch-pooler med högt tryck',
    mdesc:
      'OLagoon tillverkar uppblåsbara pooler i drop-stitch som klarar högt tryck, är klara på minuter och behåller formen hela säsongen. Family- och plunge-modeller med sandfiltersystem och 2 års konstruktionsgaranti.',
    tagline: 'Drop-stitch-pooler — Family- & plunge-modeller',
    sitedesc:
      'OLagoon designar uppblåsbara pooler i drop-stitch med högt tryck: familjepooler, plunge-pooler, sandfiltersystem och tillbehör. Fraktfritt i USA och 2 års konstruktionsgaranti.',
    kws: ['OLagoon', 'uppblåsbar pool', 'drop-stitch pool', 'plunge pool', 'familjepool'],
  },
  da: {
    title: 'OLagoon — Drop-stitch-pools med højt tryk',
    mdesc:
      'OLagoon fremstiller oppustelige pools i drop-stitch, der holder til højt tryk, står på få minutter og bevarer formen hele sæsonen. Family- og plunge-modeller med sandfiltersystemer og 2 års konstruktionsgaranti.',
    tagline: 'Drop-stitch-pools — Family- & plunge-modeller',
    sitedesc:
      'OLagoon designer oppustelige pools i drop-stitch med højt tryk: familjepools, plunge-pools, sandfiltersystemer og tilbehør. Gratis fragt i USA og 2 års konstruktionsgaranti.',
    kws: ['OLagoon', 'oppustelig pool', 'drop-stitch pool', 'plunge pool', 'familjepool'],
  },
  no: {
    title: 'OLagoon — Drop-stitch-basseng med høyt trykk',
    mdesc:
      'OLagoon lager oppblåsbare bassenger i drop-stitch som tåler høyt trykk, er klare på minutter og holder formen hele sesongen. Family- og plunge-modeller med sandfiltersystemer og 2 års konstruksjonsgaranti.',
    tagline: 'Drop-stitch-bassenger — Family- & plunge-modeller',
    sitedesc:
      'OLagoon designer oppblåsbare bassenger i drop-stitch med høyt trykk: familiebassenger, plunge-bassenger, sandfiltersystemer og tilbehør. Gratis frakt i USA og 2 års konstruksjonsgaranti.',
    kws: ['OLagoon', 'oppblåsbart basseng', 'drop-stitch basseng', 'plunge pool', 'familiebasseng'],
  },
  fi: {
    title: 'OLagoon — Drop-stitch-materiaaliset korkeapaineiset allasaltaat',
    mdesc:
      'OLagoon valmistaa drop-stitch-materiaalisia korkeapaineisia ilmastoitavia altaita, jotka pystytetään minuuteissa ja jotka pysyvät jäykkinä koko kauden. Family- ja plunge-mallit hiekkasuodatinjärjestelmillä ja 2 vuoden rakennetakuulla.',
    tagline: 'Drop-stitch-ilma-altaat — Family- ja plunge-mallit',
    sitedesc:
      'OLagoon suunnittelee drop-stitch-materiaalisia korkeapaineisia ilmajousitteisia altaita: perhealtaat, plunge-altaat, hiekkasuodatinjärjestelmät ja tarvikkeet. Ilmainen toimitus Yhdysvalloissa ja 2 vuoden rakennetakuu.',
    kws: ['OLagoon', 'ilmastoitava allas', 'drop-stitch allas', 'plunge-allas', 'perheallas'],
  },
  et: {
    title: 'OLagoon — Kõrgsurve drop-stitch täispuhutavad basseinid',
    mdesc:
      'OLagoon toodab kõrgsurve drop-stitch täispuhutavaid basseine, mis paigaldatakse mõne minutiga ja püsivad jäigana kogu hooaja jooksul. Family- ja plunge-mudelid liivafiltritega ja 2-aastase struktuurigarantiiga.',
    tagline: 'Drop-stitch-basseinid — pere- ja plunge-mudelid',
    sitedesc:
      'OLagoon arendab kõrgsurve drop-stitch täispuhutavaid basseine: perebasseine, plunge-basseine, liivafiltrisüsteeme ja tarvikuid. Tasuta transport USA-s ja 2-aastane struktuurigarantii.',
    kws: ['OLagoon', 'täispuhutav bassein', 'drop-stitch bassein', 'plunge-bassein', 'perebassein'],
  },
  lv: {
    title: 'OLagoon — Augsta spiediena drop-stitch piepūšamie baseini',
    mdesc:
      'OLagoon ražo augsta spiediena drop-stitch piepūšamos baseinus, kas ir gatavi dažās minūtēs un saglabā stingru formu visu sezonu. Family un plunge modeļi ar smilšu filtra sistēmām un 2 gadu struktūras garantiju.',
    tagline: 'Drop-stitch baseini — family un plunge modeļi',
    sitedesc:
      'OLagoon izstrādā augsta spiediena drop-stitch piepūšamos baseinus: ģimenes baseinus, plunge baseinus, smilšu filtra sistēmas un piederumus. Bezmaksas piegāde ASV un 2 gadu struktūras garantija.',
    kws: ['OLagoon', 'piepūšams baseins', 'drop-stitch baseins', 'plunge baseins', 'ģimenes baseins'],
  },
  lt: {
    title: 'OLagoon — Aukšto slėgio drop-stitch pripučiami baseinai',
    mdesc:
      'OLagoon gamina aukšto slėgio drop-stitch pripučiamus baseinus, kurie surenkami per kelias minutes ir išlaiko standžią formą visą sezoną. Family ir plunge modeliai su smėlio filtro sistemomis ir 2 metų struktūros garantija.',
    tagline: 'Drop-stitch baseinai — family ir plunge modeliai',
    sitedesc:
      'OLagoon kuria aukšto slėgio drop-stitch pripučiamus baseinus: šeimos baseinus, plunge baseinus, smėlio filtro sistemas ir priedus. Nemokamas pristatymas JAV ir 2 metų struktūros garantija.',
    kws: ['OLagoon', 'pripučiamas baseinas', 'drop-stitch baseinas', 'plunge baseinas', 'šeimos baseinas'],
  },
  pl: {
    title: 'OLagoon — Baseny dmuchane drop-stitch pod wysokim ciśnieniem',
    mdesc:
      'OLagoon produkuje baseny dmuchane drop-stitch wytrzymujące wysokie ciśnienie — montaż w kilka minut i sztywność przez cały sezon. Modele family i plunge z filtrami piaskowymi oraz 2-letnią gwarancją konstrukcji.',
    tagline: 'Baseny dmuchane drop-stitch — modele family i plunge',
    sitedesc:
      'OLagoon projektuje baseny dmuchane drop-stitch pod wysokim ciśnieniem: baseny rodzinne, baseny plunge, systemy filtrów piaskowych i akcesoria. Darmowa dostawa w USA i 2-letnia gwarancja konstrukcji.',
    kws: ['OLagoon', 'basen dmuchany', 'basen drop-stitch', 'basen plunge', 'basen rodzinny'],
  },
  cs: {
    title: 'OLagoon — Drop-stitch bazény pod vysokým tlakem',
    mdesc:
      'OLagoon vyrábí nafukovací drop-stitch bazény odolné vysokému tlaku, které postavíte během několika minut a které celou sezónu drží tvar. Modely family a plunge s pískovými filtry a 2letou zárukou na konstrukci.',
    tagline: 'Drop-stitch bazény — modely family a plunge',
    sitedesc:
      'OLagoon navrhuje nafukovací drop-stitch bazény pod vysokým tlakem: rodinné bazény, plunge bazény, pískové filtry a příslušenství. Doprava zdarma v USA a 2letá záruka na konstrukci.',
    kws: ['OLagoon', 'nafukovací bazén', 'drop-stitch bazén', 'plunge bazén', 'rodinný bazén'],
  },
  sk: {
    title: 'OLagoon — Drop-stitch bazény pod vysokým tlakom',
    mdesc:
      'OLagoon vyrába nafukovacie drop-stitch bazény odolné vysokému tlaku, ktoré postavíte za pár minút a ktoré celú sezónu držia tvar. Modely family a plunge s pieskovými filtrami a 2-ročnou zárukou na konštrukciu.',
    tagline: 'Drop-stitch bazény — modely family a plunge',
    sitedesc:
      'OLagoon navrhuje nafukovacie drop-stitch bazény pod vysokým tlakom: rodinné bazény, plunge bazény, pieskové filtre a príslušenstvo. Doprava zdarma v USA a 2-ročná záruka na konštrukciu.',
    kws: ['OLagoon', 'nafukovací bazén', 'drop-stitch bazén', 'plunge bazén', 'rodinný bazén'],
  },
  sl: {
    title: 'OLagoon — Drop-stitch bazeni pod visokim tlakom',
    mdesc:
      'OLagoon izdeluje napihljive drop-stitch bazene, ki prenesejo visok tlak, so postavljeni v nekaj minutah in ohranijo obliko vso sezono. Modela family in plunge s peskovimi filtri in 2-letno garancijo na konstrukcijo.',
    tagline: 'Drop-stitch bazeni — modela family in plunge',
    sitedesc:
      'OLagoon oblikuje napihljive drop-stitch bazene pod visokim tlakom: družinske bazene, plunge bazene, peskove filtre in dodatke. Brezplačna dostava v ZDA in 2-letna garancija na konstrukcijo.',
    kws: ['OLagoon', 'napihljiv bazen', 'drop-stitch bazen', 'plunge bazen', 'družinski bazen'],
  },
  hr: {
    title: 'OLagoon — Drop-stitch bazeni pod visokim tlakom',
    mdesc:
      'OLagoon proizvodi napuhajuće drop-stitch bazene koji podnose visok tlak, postavljaju se u nekoliko minuta i zadržavaju krut oblik cijele sezone. Family i plunge modeli s pješčanim filtrima i 2 godine garancije na konstrukciju.',
    tagline: 'Drop-stitch bazeni — modeli family i plunge',
    sitedesc:
      'OLagoon dizajnira napuhajuće drop-stitch bazene pod visokim tlakom: obiteljske bazene, plunge bazene, pješčane filtre i dodatke. Besplatna dostava u SAD-u i 2 godine garancije na konstrukciju.',
    kws: ['OLagoon', 'napuhavajući bazen', 'drop-stitch bazen', 'plunge bazen', 'obiteljski bazen'],
  },
  sr: {
    title: 'OLagoon — Drop-stitch bazeni pod visokim pritiskom',
    mdesc:
      'OLagoon proizvodi napumpive drop-stitch bazene koji izdržavaju visok pritisak, postavljaju se za nekoliko minuta i zadržavaju krut oblik celu sezonu. Family i plunge modeli sa peskovim filtrima i 2 godine garancije na konstrukciju.',
    tagline: 'Drop-stitch bazeni — family i plunge modeli',
    sitedesc:
      'OLagoon dizajnira napumpive drop-stitch bazene pod visokim pritiskom: porodične bazene, plunge bazene, sisteme peskovih filtera i dodatke. Besplatna isporuka u SAD i 2 godine garancije na konstrukciju.',
    kws: ['OLagoon', 'napumpivi bazen', 'drop-stitch bazen', 'plunge bazen', 'porodični bazen'],
  },
  ro: {
    title: 'OLagoon — Piscine gonflabile drop-stitch la înaltă presiune',
    mdesc:
      'OLagoon produce piscine gonflabile drop-stitch care rezistă la înaltă presiune, se instalează în câteva minute și își păstrează rigiditatea toată sezonul. Modele family și plunge cu filtre cu nisip și 2 ani de garanție structurală.',
    tagline: 'Piscine gonflabile drop-stitch — modele family și plunge',
    sitedesc:
      'OLagoon proiectează piscine gonflabile drop-stitch la înaltă presiune: piscine de familie, piscine plunge, sisteme de filtre cu nisip și accesorii. Livrare gratuită în SUA și 2 ani de garanție structurală.',
    kws: ['OLagoon', 'piscină gonflabilă', 'piscină drop-stitch', 'piscină plunge', 'piscină de familie'],
  },
  bg: {
    title: 'OLagoon — Надувни дроп-стич басейни с високо налягане',
    mdesc:
      'OLagoon произвежда надувни басейни от дроп-стич (drop-stitch), издържащи високо налягане — монтират се за минути и запазват формата си през целия сезон. Модели family и plunge с пясъчни филтри и 2 години структурна гаранция.',
    tagline: 'Надувни дроп-стич басейни — модели family и plunge',
    sitedesc:
      'OLagoon разработва надувни басейни от дроп-стич с високо налягане: семейни басейни, plunge басейни, пясъчни филтри и аксесоари. Безплатна доставка в САЩ и 2 години структурна гаранция.',
    kws: ['OLagoon', 'надувен басейн', 'дроп-стич басейн', 'plunge басейн', 'семеен басейн'],
  },
  el: {
    title: 'OLagoon — Φουσκωτές πισίνες drop-stitch υψηλής πίεσης',
    mdesc:
      'Η OLagoon κατασκευάζει φουσκωτές πισίνες drop-stitch που αντέχουν υψηλή πίεση, στήνονται σε λίγα λεπτά και διατηρούν την ακαμψία όλη τη σεζόν. Μοντέλα family και plunge με φίλτρα άμμου και εγγύηση δομής 2 ετών.',
    tagline: 'Φουσκωτές πισίνες drop-stitch — μοντέλα family και plunge',
    sitedesc:
      'Η OLagoon σχεδιάζει φουσκωτές πισίνες drop-stitch υψηλής πίεσης: οικογενειακές πισίνες, πισίνες plunge, συστήματα φίλτρων άμμου και αξεσουάρ. Δωρεάν αποστολή στις ΗΠΑ και εγγύηση δομής 2 ετών.',
    kws: ['OLagoon', 'φουσκωτή πισίνα', 'πισίνα drop-stitch', 'πισίνα plunge', 'οικογενειακή πισίνα'],
  },
  hu: {
    title: 'OLagoon — Nagy nyomású drop-stitch felfújható medencék',
    mdesc:
      'OLagoon nagy nyomású drop-stitch felfújható medencéket gyárt, amelyek percek alatt felállíthatók, és egész szezonon át megőrzik merevségüket. Family és plunge modellek homokszűrő rendszerekkel és 2 éves szerkezeti garanciával.',
    tagline: 'Drop-stitch felfújható medencék — family és plunge modellek',
    sitedesc:
      'OLagoon nagy nyomású drop-stitch felfújható medencéket tervez: családi medencék, plunge medencék, homokszűrő rendszerek és kiegészítők. Ingyenes szállítás az USA-ban és 2 éves szerkezeti garancia.',
    kws: ['OLagoon', 'felfújható medence', 'drop-stitch medence', 'plunge medence', 'családi medence'],
  },
  ru: {
    title: 'OLagoon — Надувные бассейны дроп-стич высокого давления',
    mdesc:
      'OLagoon производит надувные бассейны из дроп-стич материала, выдерживающие высокое давление: установка за несколько минут и жёсткость весь сезон. Модели family и plunge с песочными фильтрами и 2-летней гарантией на конструкцию.',
    tagline: 'Надувные бассейны дроп-стич — модели family и plunge',
    sitedesc:
      'OLagoon разрабатывает надувные бассейны дроп-стич высокого давления: семейные бассейны, бассейны plunge, системы песочных фильтров и аксессуары. Бесплатная доставка по США и 2-летняя гарантия на конструкцию.',
    kws: ['OLagoon', 'надувной бассейн', 'дроп-стич бассейн', 'бассейн plunge', 'семейный бассейн'],
  },
  he: {
    title: 'OLagoon — בריכות שחייה מתנפחות drop-stitch בלחץ גבוה',
    mdesc:
      'OLagoon מייצרת בריכות שחייה מתנפחות drop-stitch העמידות בלחץ גבוה, שמוקמות תוך דקות ושומרות על קשיחותן לכל אורך העונה. דגמי family ו-plunge עם מערכות סינון חול ואחריות מבנית לשנתיים.',
    tagline: 'בריכות מתנפחות drop-stitch — דגמי family ו-plunge',
    sitedesc:
      'OLagoon מתכננת בריכות שחייה מתנפחות drop-stitch בלחץ גבוה: בריכות משפחתיות, בריכות plunge, מערכות סינון חול ואביזרים. משלוח חינם בארה״ב ואחריות מבנית לשנתיים.',
    kws: ['OLagoon', 'בריכה מתנפחת', 'בריכת drop-stitch', 'בריכת plunge', 'בריכה משפחתית'],
  },
  tr: {
    title: 'OLagoon — Yüksek basınçlı drop-stitch şişme havuzlar',
    mdesc:
      'OLagoon, dakikalar içinde kurulan ve tüm sezon boyunca dayanıklılığını koruyan yüksek basınçlı drop-stitch şişme havuzlar üretir. Kum filtreli family ve plunge modelleri ve 2 yıl yapısal garanti.',
    tagline: 'Drop-stitch şişme havuzlar — family ve plunge modelleri',
    sitedesc:
      'OLagoon, yüksek basınçlı drop-stitch şişme havuzlar tasarlar: aile havuzları, plunge havuzları, kum filtresi sistemleri ve aksesuarlar. ABD içinde ücretsiz kargo ve 2 yıl yapısal garanti.',
    kws: ['OLagoon', 'şişme havuz', 'drop-stitch havuz', 'plunge havuz', 'aile havuzu'],
  },
  ar: {
    title: 'OLagoon — مسابح قابلة للنفخ بتقنية drop-stitch عالية الضغط',
    mdesc:
      'تصنع OLagoon مسابح قابلة للنفخ بتقنية drop-stitch تتحمل ضغطًا عاليًا، وتُنصب في دقائق وتحافظ على صلابتها طوال الموسم. طرازات family وplunge مع أنظمة فلتر رمل وضمان هيكلي لمدة عامين.',
    tagline: 'مسابح drop-stitch القابلة للنفخ — طرازات family وplunge',
    sitedesc:
      'تصمم OLagoon مسابح قابلة للنفخ بتقنية drop-stitch عالية الضغط: مسابح عائلية، مسابح plunge، أنظمة فلتر الرمل والملحقات. شحن مجاني في الولايات المتحدة وضمان هيكلي لمدة عامين.',
    kws: ['OLagoon', 'مسابح قابلة للنفخ', 'مسابح drop-stitch', 'مسابح plunge', 'مسابح عائلية'],
  },
  th: {
    title: 'OLagoon — สระน้ำเป่าลม drop-stitch แรงดันสูง',
    mdesc:
      'OLagoon ผลิตสระน้ำเป่าลมแบบ drop-stitch ที่ทนแรงดันสูง ติดตั้งได้ในไม่กี่นาทีและคงรูปทรงตลอดทั้งฤดูกาล รุ่น family และ plunge พร้อมระบบกรองทรายและรับประกันโครงสร้าง 2 ปี',
    tagline: 'สระน้ำเป่าลม drop-stitch — รุ่น family และ plunge',
    sitedesc:
      'OLagoon ออกแบบสระน้ำเป่าลม drop-stitch แรงดันสูง: สระสำหรับครอบครัว สระ plunge ระบบกรองทรายและอุปกรณ์เสริม จัดส่งฟรีในสหรัฐอเมริกาและรับประกันโครงสร้าง 2 ปี',
    kws: ['OLagoon', 'สระน้ำเป่าลม', 'สระ drop-stitch', 'สระ plunge', 'สระครอบครัว'],
  },
  id: {
    title: 'OLagoon — Kolam tiup drop-stitch bertekanan tinggi',
    mdesc:
      'OLagoon memproduksi kolam tiup drop-stitch bertekanan tinggi yang dipasang dalam beberapa menit dan tetap kaku sepanjang musim. Model family dan plunge dengan sistem filter pasir serta garansi struktur 2 tahun.',
    tagline: 'Kolam tiup drop-stitch — model family dan plunge',
    sitedesc:
      'OLagoon merancang kolam tiup drop-stitch bertekanan tinggi: kolam keluarga, kolam plunge, sistem filter pasir, dan aksesori. Pengiriman gratis di AS dan garansi struktur 2 tahun.',
    kws: ['OLagoon', 'kolam tiup', 'kolam drop-stitch', 'kolam plunge', 'kolam keluarga'],
  },
  ms: {
    title: 'OLagoon — Kolam tiup drop-stitch bertekanan tinggi',
    mdesc:
      'OLagoon mengeluarkan kolam tiup drop-stitch bertekanan tinggi yang dipasang dalam beberapa minit dan kekal kaku sepanjang musim. Model family dan plunge dengan sistem penapis pasir serta waranti struktur 2 tahun.',
    tagline: 'Kolam tiup drop-stitch — model family dan plunge',
    sitedesc:
      'OLagoon mereka bentuk kolam tiup drop-stitch bertekanan tinggi: kolam keluarga, kolam plunge, sistem penapis pasir dan aksesori. Penghantaran percuma di AS dan waranti struktur 2 tahun.',
    kws: ['OLagoon', 'kolam tiup', 'kolam drop-stitch', 'kolam plunge', 'kolam keluarga'],
  },
  tl: {
    title: 'OLagoon — Mga drop-stitch na inflatable pool na mataas ang presyon',
    mdesc:
      'Ginagawa ng OLagoon ang mga drop-stitch na inflatable pool na tinitiis ang mataas na presyon — naitatayo sa loob ng ilang minuto at nananatiling matibay buong season. Mga modelong family at plunge na may sand filter system at 2-taong structural warranty.',
    tagline: 'Drop-stitch na inflatable pool — mga modelong family at plunge',
    sitedesc:
      'Idinidisensyo ng OLagoon ang mga drop-stitch na inflatable pool na mataas ang presyon: pampamilyang pool, plunge pool, sand filter system at mga accessory. Libreng shipping sa US at 2-taong structural warranty.',
    kws: ['OLagoon', 'inflatable pool', 'drop-stitch pool', 'plunge pool', 'family pool'],
  },
};

function rewrite(file, t) {
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  const out = [];
  let inMetadata = false;
  let inKeywords = false;
  let done = { title: false, mdesc: false, kws: false, tagline: false, sitedesc: false };
  for (const line of lines) {
    if (/^metadata:/.test(line)) {
      inMetadata = true;
      inKeywords = false;
      out.push(line);
      continue;
    }
    if (inMetadata && /^[a-zA-Z]/.test(line) && !/^metadata:/.test(line)) {
      inMetadata = false;
      inKeywords = false;
    }
    if (inKeywords && !/^\s+- /.test(line)) {
      inKeywords = false;
    }
    if (inMetadata && !done.title && /^\s{4}default: /.test(line)) {
      out.push(`    default: ${q(t.title)}`);
      done.title = true;
      continue;
    }
    if (inMetadata && !done.mdesc && /^ {2}description: /.test(line)) {
      out.push(`  description: ${q(t.mdesc)}`);
      done.mdesc = true;
      continue;
    }
    if (inMetadata && !done.kws && /^ {2}keywords:/.test(line)) {
      out.push('  keywords:');
      for (const k of t.kws) out.push(`    - ${q(k)}`);
      done.kws = true;
      inKeywords = true;
      continue;
    }
    if (inKeywords && /^\s+- /.test(line)) {
      continue; // skip old keyword entries
    }
    if (/^ {2}siteTagline: /.test(line)) {
      out.push(`  siteTagline: ${q(t.tagline)}`);
      done.tagline = true;
      continue;
    }
    if (/^ {2}siteDescription: /.test(line)) {
      out.push(`  siteDescription: ${q(t.sitedesc)}`);
      done.sitedesc = true;
      continue;
    }
    if (/^(\s*)logo: '\/android-chrome-512x512\.png'/.test(line)) {
      out.push(line.replace(/'\/android-chrome-512x512\.png'/, "'/olagoon-logo.png'"));
      continue;
    }
    if (/^ {2}logo_image: '\/android-chrome-192x192\.png'/.test(line)) {
      out.push("  logo_image: '/olagoon-logo.png'");
      continue;
    }
    if (/^ {2}logo_alt: /.test(line)) {
      out.push("  logo_alt: 'OLagoon logo'");
      continue;
    }
    out.push(line);
  }
  fs.writeFileSync(file, out.join('\n'), 'utf-8');
  const missing = Object.entries(done)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  return missing;
}

let ok = 0;
const problems = [];
for (const [loc, t] of Object.entries(T)) {
  const file = path.join(SRC, `config.${loc}.yaml`);
  if (!fs.existsSync(file)) {
    problems.push(`${loc}: file missing`);
    continue;
  }
  const missing = rewrite(file, t);
  if (missing.length) problems.push(`${loc}: missing ${missing.join(',')}`);
  else ok++;
}
console.log(`rewritten: ${ok}/${Object.keys(T).length}`);
if (problems.length) {
  console.log('problems:');
  for (const p of problems) console.log(' -', p);
}
