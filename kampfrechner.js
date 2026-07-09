/* ─── Translations ─── */
const T = {
  de: {
    title:             'Kampfrechner — Kampfinsel',
    h1:                'Kampfrechner',
    attack:            'Angriff',
    defense:           'Verteidigung',
    capacity:          'Kapazität',
    transport:         'Transport',
    attacker:          '⚔️ Angreifer',
    defender:          '🛡️ Verteidiger',
    landUnit:          'Landtruppe',
    fleet:             'Flotte',
    slots5:            '5 Plätze',
    slots10:           '10 Plätze',
    res500:            '500 Res.',
    res2000:           '2000 Res.',
    troopCapacity:     '⚓ Truppenkapazität',
    transportCapacity: '🛶 Transportkapazität',
    defResources:      '💰 Ressourcen des Verteidigers',
    gold:              'Gold',
    stone:             'Stein',
    wood:              'Holz',
    result:            '📊 Kampfergebnis (nach Phasen)',
    footerText:        'Kampfinsel Kampfrechner · Inoffizielles Tool',
    handbook:          'Handbuch',
    'unit-steinwerfer':          '🪨 Steinwerfer',
    'unit-speertreaeger':        '🗡️ Speerträger',
    'unit-bogenschuetze':        '🏹 Bogenschütze',
    'unit-katapult':             '💥 Katapult',
    'unit-kks':                  '⛵ Kl. Kriegsschiff',
    'unit-gks':                  '🚢 Gr. Kriegsschiff',
    'unit-khs':                  '🛶 Kl. Handelsschiff',
    'unit-ghs':                  '🛥️ Gr. Handelsschiff',
    'unit-kolonisierungsschiff': '⛴️ Kolonisierungsschiff',
    forschung:                   '🔬 Forschung',
    forschungDescAtk:            'Stufe eintragen (0–10) — wirkt automatisch auf die passende Einheit.',
    forschungSpeer:              'Speer-Stufe (+2 Speerträger-Angriff/Stufe)',
    forschungBogen:              'Bogen-Stufe (+3 Bogenschütze-Angriff/Stufe)',
    forschungHintAtk:            'Speer und Bogen anhand Militär-Übersicht bestätigt (+2 bzw. +3 Angriff/Stufe, max. Stufe 10). Katapult-Angriff kann nicht erforscht werden — auf das Katapult wirkt nur der Schild-Bonus des Verteidigers. Kampf-Forschung wirkt nur auf Landtruppen-Angriff, nicht auf Schiffs-Angriff.',
    forschungDescDef:            'Schild wirkt gleichmäßig auf die Verteidigung aller Landeinheiten (Steinwerfer, Speerträger, Bogenschütze, Katapult) — nicht auf Schiffe.',
    forschungSchild:             'Schild-Stufe (+2 Verteidigung aller Landeinheiten/Stufe)',
    forschungHintDef:            'Stufe 0–10, siehe Forschungsmenü. Anhand Militär-Übersicht bestätigt (+2 Verteidigung/Stufe, max. 20 bei Stufe 10). Wirkt nicht auf Schiffe.',
    steinmauer:                  '🧱 Steinmauer',
    steinmauerLevel:             'Stufe',
    steinmauerBonus:             def => `+${def} Verteidigung`,
    lagerhaus:                   '🏚️ Lagerhaus',
    lagerhausDesc:               'Stufe 0–30 · schützt Ressourcen',
    lagerhausLevel:              'Stufe',
    lagerhausProtect:            n => `🔒 ${n} geschützt`,
    hafen:                       '🚩 Hafen',
    hafenDesc:                   'Stufe 0–40 · Hafenverteidigung (Phase 2)',
    hafenStaerkeLabel:           'Hafen-Stärke',
    hafenHint:                   'Berechnet als Hafen-Stufe × 10 Punkte.',
    haupthaus:                   '🏛️ Haupthaus',
    haupthausDesc:               'Basis-Wert für Landkampf (Phase 3)',
    basisLabel:                  'Basis-Wert',
    basisHint:                   'Wert unbekannt/geschätzt eintragen — genaue Formel (Haupthaus-Level → Basis) ist derzeit nicht bekannt.',
    // dynamic
    troops:     n => `${n} Truppen`,
    slotsFree:  n => `${n} Plätze frei`,
    noShips:       '⚠️ Keine Schiffe!',
    slotsZero:     '0 Plätze',
    resources:  n => `${n} Ressourcen`,
    capWarn: (ex, gks, kks) =>
      `${ex} Truppe(n) ohne Schiffsplatz! Du brauchst mindestens ${gks} Gr. Kriegsschiff(e) oder ${kks} Kl. Kriegsschiff(e) mehr.`,
    noMerchants:  '🛶 Keine Traglast — keine Ressourcen können geraubt werden.',
    lootGold:     'Gold geraubt',
    lootStone:    'Stein geraubt',
    lootWood:     'Holz geraubt',
    lootFrom:   n => `von ${n}`,
    lootSummary:(total, used, cap) => `Gesamtbeute: ${total} · Transport genutzt: ${used} / ${cap}`,
    lootProtected: n => `🔒 ${n} Res. durch Lagerhaus geschützt`,
    unitsNeededTitle: '📊 Fehlende Einheiten für einen Sieg',
    unitsNeededLevel: deficit => `Defizit: ${deficit} Punkte`,
    colUnit:    'Einheit',
    colAtk:     'Angriff',
    colNeeded:  'Zusätzlich nötig',
    tip: 'Tipp: Kombiniere mehrere Einheitentypen für maximale Effizienz. Die Liste zeigt jeweils die Menge, die alleine zum Sieg reicht (Landkampf).',
    tipSea: 'Tipp: Kombiniere mehrere Schiffstypen für maximale Effizienz. Die Liste zeigt jeweils die Menge, die alleine zum Sieg reicht (Seeschlacht).',
    unitNames: {
      gks:                  'Gr. Kriegsschiff',
      speertreaeger:        'Speerträger',
      bogenschuetze:        'Bogenschütze',
      kolonisierungsschiff: 'Kolonisierungsschiff',
      kks:                  'Kl. Kriegsschiff',
      khs:                  'Kl. Handelsschiff',
      ghs:                  'Gr. Handelsschiff',
      katapult:             'Katapult',
      steinwerfer:          'Steinwerfer',
    },
    // ── Phases ──
    phase1Title: '🌊 Phase 1 — Seeschlacht',
    phase2Title: '⚓ Phase 2 — Hafenverteidigung',
    phase3Title: '🏹 Phase 3 — Landkampf',
    phase4Title: '💥 Phase 4 — Belagerung',
    phase5Title: '💰 Phase 5 — Plünderung',
    phaseNotRun: 'Nicht ausgeführt — vorherige Phase nicht bestanden.',
    phase4Todo:  'Noch nicht berechenbar: die genaue Formel für Katapult-Belagerung (Mauer-/Hafen-/Haupthaus-Level senken) ist derzeit nicht bekannt.',
    seaNone:     'Keine Seeschlacht (Verteidiger hat keine Kriegsschiffe).',
    seaWin:      (a, d) => `Angreifer gewinnt die Seeschlacht — Flottenangriff ${a} schlägt Flottenverteidigung ${d}.`,
    seaDraw:     (a, d) => `Unentschieden auf See — Flottenangriff ${a} = Flottenverteidigung ${d}. Angriff gilt als abgewehrt.`,
    seaLose:     (a, d) => `Angreifer verliert die Seeschlacht — Flottenverteidigung ${d} schlägt Flottenangriff ${a}. Angriff abgewehrt.`,
    seaAssumption: '⚠️ Annahme (ungetestet): Bei Niederlage/Unentschieden in der Seeschlacht wird der gesamte Angriff abgewehrt und die Folgephasen entfallen.',
    harbourBreak: (a, h) => `Angreifer durchbricht die Hafenverteidigung — Flottenangriff ${a} übersteigt Hafen-Stärke ${h}.`,
    harbourHeld:  (a, h) => `Hafenverteidigung hält — Flottenangriff ${a} reicht nicht gegen Hafen-Stärke ${h}. Angriff abgewehrt.`,
    harbourNoInput: 'Keine Hafen-Stärke eingetragen — Phase wird als bestanden angenommen.',
    landWin:  (a, d) => `Angreifer gewinnt den Landkampf — Angriff ${a} schlägt Verteidigung ${d}.`,
    landDraw: (a, d) => `Unentschieden — Angriff ${a} = Verteidigung ${d}. Angriff gilt als abgewehrt.`,
    landLose: (a, d) => `Verteidiger gewinnt den Landkampf — Verteidigung ${d} schlägt Angriff ${a}.`,
    fleetAtkLabel: 'Flottenangriff',
    fleetDefLabel: 'Flottenverteidigung',
    groundAtkLabel: 'Landtruppen-Angriff',
    groundDefLabel: 'Verteidigung gesamt',
    groundDefBreakdown: (troops, wall, basis) => `Truppen ${troops} + Mauer ${wall} + Basis ${basis}`,
  },

  en: {
    title:             'Battle Calculator — Kampfinsel',
    h1:                'Battle Calculator',
    attack:            'Attack',
    defense:           'Defence',
    capacity:          'Capacity',
    transport:         'Transport',
    attacker:          '⚔️ Attacker',
    defender:          '🛡️ Defender',
    landUnit:          'Land unit',
    fleet:             'Fleet',
    slots5:            '5 slots',
    slots10:           '10 slots',
    res500:            '500 res.',
    res2000:           '2000 res.',
    troopCapacity:     '⚓ Troop Capacity',
    transportCapacity: '🛶 Transport Capacity',
    defResources:      '💰 Defender\'s Resources',
    gold:              'Gold',
    stone:             'Stone',
    wood:              'Wood',
    result:            '📊 Battle Result (by phase)',
    footerText:        'Kampfinsel Battle Calculator · Unofficial Tool',
    handbook:          'Handbook',
    'unit-steinwerfer':          '🪨 Stone Thrower',
    'unit-speertreaeger':        '🗡️ Spearman',
    'unit-bogenschuetze':        '🏹 Archer',
    'unit-katapult':             '💥 Catapult',
    'unit-kks':                  '⛵ Sm. Warship',
    'unit-gks':                  '🚢 Lg. Warship',
    'unit-khs':                  '🛶 Sm. Merchant',
    'unit-ghs':                  '🛥️ Lg. Merchant',
    'unit-kolonisierungsschiff': '⛴️ Colonization Ship',
    forschung:                   '🔬 Research',
    forschungDescAtk:            'Enter a level (0–10) — applies automatically to the matching unit.',
    forschungSpeer:              'Spear level (+2 Spearman attack/level)',
    forschungBogen:              'Bow level (+3 Archer attack/level)',
    forschungHintAtk:            'Spear and Bow confirmed against the Military overview (+2 / +3 attack per level, max level 10). Catapult attack cannot be researched — only the defender\'s Shield bonus affects the catapult. Combat research only affects land troop attack, not ship attack.',
    forschungDescDef:            'Shield applies evenly to the defence of all land units (Stone Thrower, Spearman, Archer, Catapult) — not to ships.',
    forschungSchild:             'Shield level (+2 defence of all land units/level)',
    forschungHintDef:            'Level 0–10, see the research menu. Confirmed against the Military overview (+2 defence/level, max 20 at level 10). Does not affect ships.',
    steinmauer:                  '🧱 Stone Wall',
    steinmauerLevel:             'Level',
    steinmauerBonus:             def => `+${def} Defence`,
    lagerhaus:                   '🏚️ Warehouse',
    lagerhausDesc:               'Level 0–30 · protects resources',
    lagerhausLevel:              'Level',
    lagerhausProtect:            n => `🔒 ${n} protected`,
    hafen:                       '🚩 Harbour',
    hafenDesc:                   'Level 0–40 · harbour defence (Phase 2)',
    hafenStaerkeLabel:           'Harbour strength',
    hafenHint:                   'Calculated as harbour level × 10 points.',
    haupthaus:                   '🏛️ Town Hall',
    haupthausDesc:               'Base value for land combat (Phase 3)',
    basisLabel:                  'Base value',
    basisHint:                   'Enter a known/estimated value — the exact town hall level → base formula is not yet known.',
    // dynamic
    troops:     n => `${n} troops`,
    slotsFree:  n => `${n} slots free`,
    noShips:       '⚠️ No ships!',
    slotsZero:     '0 slots',
    resources:  n => `${n} resources`,
    capWarn: (ex, gks, kks) =>
      `${ex} troop(s) without a ship slot! You need at least ${gks} Lg. Warship(s) or ${kks} Sm. Warship(s) more.`,
    noMerchants:  '🛶 No carrying capacity — no resources can be looted.',
    lootGold:     'Gold looted',
    lootStone:   'Stone looted',
    lootWood:     'Wood looted',
    lootFrom:   n => `of ${n}`,
    lootSummary:(total, used, cap) => `Total loot: ${total} · Transport used: ${used} / ${cap}`,
    lootProtected: n => `🔒 ${n} res. protected by warehouse`,
    unitsNeededTitle: '📊 Units needed for victory',
    unitsNeededLevel: deficit => `Deficit: ${deficit} pts`,
    colUnit:    'Unit',
    colAtk:     'Attack',
    colNeeded:  'Additionally needed',
    tip: 'Tip: Combine multiple unit types for maximum efficiency. Each row shows the amount needed if used alone (land combat).',
    tipSea: 'Tip: Combine multiple ship types for maximum efficiency. Each row shows the amount needed if used alone (naval battle).',
    unitNames: {
      gks:                  'Lg. Warship',
      speertreaeger:        'Spearman',
      bogenschuetze:        'Archer',
      kolonisierungsschiff: 'Colonization Ship',
      kks:                  'Sm. Warship',
      khs:                  'Sm. Merchant',
      ghs:                  'Lg. Merchant',
      katapult:             'Catapult',
      steinwerfer:          'Stone Thrower',
    },
    // ── Phases ──
    phase1Title: '🌊 Phase 1 — Naval Battle',
    phase2Title: '⚓ Phase 2 — Harbour Defence',
    phase3Title: '🏹 Phase 3 — Land Combat',
    phase4Title: '💥 Phase 4 — Siege',
    phase5Title: '💰 Phase 5 — Plunder',
    phaseNotRun: 'Not run — previous phase was not passed.',
    phase4Todo:  'Not yet calculable: the exact formula for catapult sieges (lowering wall/harbour/town hall levels) is not currently known.',
    seaNone:     'No naval battle (defender has no warships).',
    seaWin:      (a, d) => `Attacker wins the naval battle — fleet attack ${a} beats fleet defence ${d}.`,
    seaDraw:     (a, d) => `Draw at sea — fleet attack ${a} = fleet defence ${d}. Attack counts as repelled.`,
    seaLose:     (a, d) => `Attacker loses the naval battle — fleet defence ${d} beats fleet attack ${a}. Attack repelled.`,
    seaAssumption: '⚠️ Assumption (untested): on a naval defeat/draw, the entire attack is repelled and later phases are skipped.',
    harbourBreak: (a, h) => `Attacker breaks through the harbour defence — fleet attack ${a} exceeds harbour strength ${h}.`,
    harbourHeld:  (a, h) => `Harbour defence holds — fleet attack ${a} isn't enough against harbour strength ${h}. Attack repelled.`,
    harbourNoInput: 'No harbour strength entered — phase assumed passed.',
    landWin:  (a, d) => `Attacker wins the land battle — attack ${a} beats defence ${d}.`,
    landDraw: (a, d) => `Draw — attack ${a} = defence ${d}. Attack counts as repelled.`,
    landLose: (a, d) => `Defender wins the land battle — defence ${d} beats attack ${a}.`,
    fleetAtkLabel: 'Fleet attack',
    fleetDefLabel: 'Fleet defence',
    groundAtkLabel: 'Land troop attack',
    groundDefLabel: 'Total defence',
    groundDefBreakdown: (troops, wall, basis) => `Troops ${troops} + Wall ${wall} + Base ${basis}`,
  },
};

/* ─── Unit data ─── */
const UNITS = {
  steinwerfer:          { atk: 5,  def: 8, resCap: 15 },
  speertreaeger:        { atk: 15, def: 25, resCap: 25 },
  bogenschuetze:        { atk: 35, def: 10, resCap: 10 },
  katapult:             { atk: 10, def: 5 },
  kks:                  { atk: 20, def: 30, troopCap: 5 },
  gks:                  { atk: 60, def: 80, troopCap: 10 },
  khs:                  { atk: 2,  def: 5,  resCap: 500 },
  ghs:                  { atk: 5,  def: 10, resCap: 2000 },
  kolonisierungsschiff: { atk: 30, def: 50 },
};
const GROUND = ['steinwerfer', 'speertreaeger', 'bogenschuetze', 'katapult'];
const SHIPS  = ['kks', 'gks', 'khs', 'ghs', 'kolonisierungsschiff'];
const ALL    = [...GROUND, ...SHIPS];
/* Handelsschiffe (khs, ghs) nehmen laut Nutzerangabe nicht am Seekampf teil —
   sie zählen nur für Transportkapazität, nicht für Seeschlacht/Hafenverteidigung. */
const COMBAT_SHIPS = ['kks', 'gks', 'kolonisierungsschiff'];

const UNITS_NEEDED_DEFS = [
  { id: 'bogenschuetze',        icon: '🏹' },
  { id: 'speertreaeger',        icon: '🗡️' },
  { id: 'katapult',             icon: '💥' },
  { id: 'steinwerfer',          icon: '🪨' },
];
const SHIPS_NEEDED_DEFS = [
  { id: 'gks',                  icon: '🚢' },
  { id: 'kks',                  icon: '⛵' },
  { id: 'kolonisierungsschiff', icon: '⛴️' },
];

/* ─── Language state ─── */
let lang = localStorage.getItem('kf-lang')
  || (navigator.language.startsWith('en') ? 'en' : 'de');

function setLang(l) {
  lang = l;
  localStorage.setItem('kf-lang', l);
  document.documentElement.lang = l;
  document.title = T[l].title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key in T[l]) el.textContent = T[l][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });

  calculate();
}

/* ─── Helpers ─── */
function $$(id) { return document.getElementById(id); }
function num(id) { const el = $$(id); return el ? Math.max(0, parseInt(el.value) || 0) : 0; }
function fmt(n)  { return n.toLocaleString(lang === 'en' ? 'en-GB' : 'de-DE'); }

/* ─── Main calculation ─── */
function calculate() {
  const t = T[lang];

  const a = {}, d = {};
  ALL.forEach(u => { a[u] = num(`a-${u}`); d[u] = num(`d-${u}`); });
  const res = { gold: num('d-gold'), silber: num('d-silber'), holz: num('d-holz') };

  /* Forschungs-Boni: Eingabe erfolgt als Stufe (0–10), nicht als Direktwert.
     Umrechnung anhand Militär-Screenshot bestätigt:
       Speer  Stufe 10 → +20 Speerträger-Angriff  = 2 / Stufe
       Bogen  Stufe 10 → +30 Bogenschütze-Angriff = 3 / Stufe
       Schild Stufe 10 → +20 Verteidigung (alle)  = 2 / Stufe
     Katapult-Angriff kann nicht erforscht werden — auf das Katapult
     wirkt ausschließlich der Verteidiger-Schild-Bonus (Verteidigung). */
  const SPEER_PER_LEVEL  = 2;
  const BOGEN_PER_LEVEL  = 3;
  const SCHILD_PER_LEVEL = 2;
  const HAFEN_PER_LEVEL  = 10; // laut Nutzerangabe

  const speerLevel  = Math.min(10, num('a-forschung-speer'));
  const bogenLevel  = Math.min(10, num('a-forschung-bogen'));
  const schildLevel = Math.min(10, num('d-forschung-schild'));

  const fSpeer  = speerLevel  * SPEER_PER_LEVEL;
  const fBogen  = bogenLevel  * BOGEN_PER_LEVEL;
  const fSchild = schildLevel * SCHILD_PER_LEVEL;

  const aBonusAtk = {};
  ALL.forEach(u => { aBonusAtk[u] = 0; });
  aBonusAtk.speertreaeger = fSpeer;
  aBonusAtk.bogenschuetze = fBogen;

  const dBonusDef = {};
  ALL.forEach(u => { dBonusDef[u] = 0; });
  GROUND.forEach(u => { dBonusDef[u] = fSchild; }); // Schild wirkt nur auf Landeinheiten

  const wallLevel = Math.min(20, num('d-steinmauer'));
  const wallBonus = wallLevel * 100;

  const warehouseLevel = Math.min(30, num('d-lagerhaus'));
  const warehouseProtect = warehouseLevel === 0 ? 0 : Math.floor(1200 * Math.pow(1.15, warehouseLevel)/10);
  $$('warehouse-protect-label').textContent = warehouseProtect > 0 ? t.lagerhausProtect(fmt(warehouseProtect)) : '';

  const hafenLevel   = Math.min(40, num('d-hafen'));
  const hafenStaerke = hafenLevel * HAFEN_PER_LEVEL;
  $$('hafen-strength-label').textContent = hafenLevel > 0 ? `= ${fmt(hafenStaerke)} 🛡` : '';
  const basisWert    = num('d-basis');

  /* ── Split: land troops and ships fight in separate phases ──
     (Confirmed against real Kampfinsel-Berichte: Landkampf-Angriff
     matches the ground-unit sum alone, ships are NOT included.) */
  const groundAtk = GROUND.reduce((s, u) => s + a[u] * (UNITS[u].atk + aBonusAtk[u]), 0);
  const groundDefTroops = GROUND.reduce((s, u) => s + d[u] * (UNITS[u].def + dBonusDef[u]), 0);
  const groundDef = groundDefTroops + wallBonus + basisWert;

  const shipAtkA = COMBAT_SHIPS.reduce((s, u) => s + a[u] * (UNITS[u].atk + aBonusAtk[u]), 0);
  const shipDefD = COMBAT_SHIPS.reduce((s, u) => s + d[u] * (UNITS[u].def + dBonusDef[u]), 0);

  const defenderHasShips = COMBAT_SHIPS.some(u => d[u] > 0);

  const troops    = GROUND.reduce((s, u) => s + a[u], 0);
  const shipCap   = a.kks * 5 + a.gks * 10;
  const transport = ALL.reduce((s, u) => s + a[u] * (UNITS[u].resCap || 0), 0);
  const capOver   = troops > 0 && troops > shipCap;

  const hasInput = groundAtk > 0 || groundDefTroops > 0 || shipAtkA > 0 || shipDefD > 0 || wallBonus > 0 || basisWert > 0;

  /* ── Summary bar (rough overview across all phases combined) ── */
  const totalAtk = groundAtk + shipAtkA;
  const totalDef = groundDef + shipDefD;
  $$('bar-atk').textContent = fmt(totalAtk);
  $$('bar-def').textContent = fmt(totalDef);
  $$('wall-bonus-label').textContent = wallBonus > 0 ? t.steinmauerBonus(fmt(wallBonus)) : '';
  $$('bar-cap').textContent = `${fmt(troops)} / ${fmt(shipCap)}`;
  $$('bar-cap').style.color = capOver ? 'var(--c-red)' : 'var(--c-text-muted)';
  $$('bar-transport').textContent = fmt(transport);

  /* ── Capacity bar ── */
  const capPct = shipCap === 0 ? (troops > 0 ? 100 : 0) : Math.min(100, (troops / shipCap) * 100);
  $$('cap-bar').style.width = capPct + '%';
  $$('cap-bar').className   = 'timer-bar-fill' + (capOver ? ' over' : '');
  $$('cap-label-troops').textContent = t.troops(fmt(troops));
  $$('cap-label-slots').textContent  = shipCap > 0
    ? t.slotsFree(fmt(Math.max(0, shipCap - troops)))
    : (troops > 0 ? t.noShips : t.slotsZero);
  $$('cap-label-transport').textContent = t.resources(fmt(transport));

  /* ── Capacity warning ── */
  const capWarn = $$('cap-warning');
  if (capOver) {
    const excess = troops - shipCap;
    capWarn.style.display = '';
    $$('cap-warning-text').textContent = t.capWarn(
      fmt(excess), Math.ceil(excess / 10), Math.ceil(excess / 5)
    );
  } else {
    capWarn.style.display = 'none';
  }

  /* ── Old single banner is retired in favor of per-phase cards ── */
  $$('outcome-banner').style.display = 'none';

  /* ── Result detail: render the 5 phases ── */
  const detailEl = $$('result-detail');
  if (!hasInput) { detailEl.innerHTML = ''; return; }

  detailEl.innerHTML = renderPhases(t, {
    groundAtk, groundDef, groundDefTroops, wallBonus, basisWert,
    shipAtkA, shipDefD, defenderHasShips, hafenStaerke,
    res, transport, warehouseProtect, aBonusAtk,
  });
}

/* ─── Phase rendering (mirrors the in-game Kampfbericht) ─── */
function renderPhases(t, ctx) {
  const {
    groundAtk, groundDef, groundDefTroops, wallBonus, basisWert,
    shipAtkA, shipDefD, defenderHasShips, hafenStaerke,
    res, transport, warehouseProtect, aBonusAtk,
  } = ctx;

  let alive = true;      // whether the attack still proceeds to the next phase
  let landWon = false;

  const cards = [];

  /* ── Phase 1: Seeschlacht ── */
  let p1Body, p1Class = '';
  if (!defenderHasShips) {
    p1Body = `<div class="text-muted" style="padding:8px 10px;">${t.seaNone}</div>`;
  } else {
    const seaWin  = shipAtkA > shipDefD;
    const seaDraw = shipAtkA === shipDefD;
    p1Class = seaWin ? 'success' : 'error';
    let msg;
    if (seaWin)       msg = t.seaWin(fmt(shipAtkA), fmt(shipDefD));
    else if (seaDraw) msg = t.seaDraw(fmt(shipAtkA), fmt(shipDefD));
    else               msg = t.seaLose(fmt(shipAtkA), fmt(shipDefD));
    p1Body = `
      <div class="${p1Class}" style="margin:8px 10px 4px;">${msg}</div>
      ${!seaWin ? `<div class="warning" style="margin:0 10px 8px;font-size:0.82rem;">${t.seaAssumption}</div>` : ''}
      <div class="building-benefit" style="padding:0 10px 8px;">
        ${t.fleetAtkLabel}: <strong>${fmt(shipAtkA)}</strong> · ${t.fleetDefLabel}: <strong>${fmt(shipDefD)}</strong>
      </div>`;
    if (!seaWin) alive = false;
    if (!seaWin && !seaDraw) {
      p1Body += renderUnitsNeeded(t, shipDefD - shipAtkA, aBonusAtk, SHIPS_NEEDED_DEFS, 'sea');
    }
  }
  cards.push(phaseCard(t.phase1Title, p1Body));

  /* ── Phase 2: Hafenverteidigung ── */
  let p2Body;
  if (!alive) {
    p2Body = `<div class="text-muted" style="padding:8px 10px;">${t.phaseNotRun}</div>`;
  } else {
    if (hafenStaerke <= 0) {
      p2Body = `<div class="text-muted" style="padding:8px 10px;">${t.harbourNoInput}</div>`;
    } else {
      const breakThrough = shipAtkA > hafenStaerke;
      const cls = breakThrough ? 'success' : 'error';
      const msg = breakThrough
        ? t.harbourBreak(fmt(shipAtkA), fmt(hafenStaerke))
        : t.harbourHeld(fmt(shipAtkA), fmt(hafenStaerke));
      p2Body = `<div class="${cls}" style="margin:8px 10px;">${msg}</div>
        <div class="building-benefit" style="padding:0 10px 8px;">${t.hafenHint}</div>`;
      if (!breakThrough) alive = false;
    }
  }
  cards.push(phaseCard(t.phase2Title, p2Body));

  /* ── Phase 3: Landkampf ── */
  let p3Body;
  if (!alive) {
    p3Body = `<div class="text-muted" style="padding:8px 10px;">${t.phaseNotRun}</div>`;
  } else {
    const win  = groundAtk > groundDef;
    const draw = groundAtk === groundDef;
    const cls  = win ? 'success' : (draw ? 'warning' : 'error');
    let msg;
    if (win)       msg = t.landWin(fmt(groundAtk), fmt(groundDef));
    else if (draw) msg = t.landDraw(fmt(groundAtk), fmt(groundDef));
    else            msg = t.landLose(fmt(groundAtk), fmt(groundDef));
    p3Body = `
      <div class="${cls}" style="margin:8px 10px 4px;">${msg}</div>
      <div class="building-benefit" style="padding:0 10px 8px;">
        ${t.groundAtkLabel}: <strong>${fmt(groundAtk)}</strong> ·
        ${t.groundDefLabel}: <strong>${fmt(groundDef)}</strong>
        (${t.groundDefBreakdown(fmt(groundDefTroops), fmt(wallBonus), fmt(basisWert))})
      </div>`;
    if (win) landWon = true; else alive = false;
    if (!win && !draw) {
      p3Body += renderUnitsNeeded(t, groundDef - groundAtk, aBonusAtk, UNITS_NEEDED_DEFS, 'land');
    }
  }
  cards.push(phaseCard(t.phase3Title, p3Body));

  /* ── Phase 4: Belagerung (formula not yet known, not modeled) ── */
  const p4Body = `<div class="text-muted" style="padding:8px 10px;">
    ${!landWon ? t.phaseNotRun : t.phase4Todo}
  </div>`;
  cards.push(phaseCard(t.phase4Title, p4Body, true));

  /* ── Phase 5: Plünderung ── */
  let p5Body;
  if (!landWon) {
    p5Body = `<div class="text-muted" style="padding:8px 10px;">${t.phaseNotRun}</div>`;
  } else {
    p5Body = renderLoot(t, res, transport, warehouseProtect);
  }
  cards.push(phaseCard(t.phase5Title, p5Body));

  return cards.join('');
}

function phaseCard(title, bodyHtml, muted) {
  return `
    <div class="building-card" style="margin-bottom:10px;${muted ? 'opacity:0.75;' : ''}">
      <div class="building-card-header">
        <span class="building-card-name">${title}</span>
      </div>
      ${bodyHtml}
    </div>`;
}

/* ─── Loot ─── */
function renderLoot(t, res, transport, warehouseProtect) {
  if (transport === 0) {
    return `<div class="warning" style="margin:8px 10px;">${t.noMerchants}</div>`;
  }
  const totalRes = res.gold + res.silber + res.holz;
  const stealable = Math.max(0, totalRes - warehouseProtect);

  let loot = { gold: 0, silber: 0, holz: 0 };
  if (stealable > 0 && totalRes > 0) {
    const ratio = stealable / totalRes;
    const avail = {
      gold:   Math.floor(res.gold   * ratio),
      silber: Math.floor(res.silber * ratio),
      holz:   Math.floor(res.holz   * ratio),
    };
    const totalAvail = avail.gold + avail.silber + avail.holz;
    if (totalAvail <= transport) {
      loot = { ...avail };
    } else {
      loot.gold   = Math.floor(avail.gold   * transport / totalAvail);
      loot.silber = Math.floor(avail.silber * transport / totalAvail);
      loot.holz   = Math.floor(avail.holz   * transport / totalAvail);
    }
  }
  const totalLoot = loot.gold + loot.silber + loot.holz;
  const usedCap   = Math.min(transport, stealable);
  const pct = (n, b) => b > 0 ? ` (${Math.round(n / b * 100)}%)` : '';
  const protectedNote = warehouseProtect > 0
    ? `<div class="building-benefit" style="margin-top:4px;text-align:right;color:var(--c-text-muted);">${t.lootProtected(fmt(Math.min(warehouseProtect, totalRes)))}</div>`
    : '';

  return `
    <div style="padding:8px 10px;">
    <div class="result-grid">
      <div class="result-tile">
        <div class="result-tile-icon">⚜</div>
        <div class="result-tile-label">${t.lootGold}</div>
        <div class="result-tile-value">${fmt(loot.gold)}</div>
        <div class="result-tile-sub">${t.lootFrom(fmt(res.gold))}${pct(loot.gold, res.gold)}</div>
      </div>
      <div class="result-tile">
        <div class="result-tile-icon">🪨</div>
        <div class="result-tile-label">${t.lootStone}</div>
        <div class="result-tile-value">${fmt(loot.silber)}</div>
        <div class="result-tile-sub">${t.lootFrom(fmt(res.silber))}${pct(loot.silber, res.silber)}</div>
      </div>
      <div class="result-tile">
        <div class="result-tile-icon">🪵</div>
        <div class="result-tile-label">${t.lootWood}</div>
        <div class="result-tile-value">${fmt(loot.holz)}</div>
        <div class="result-tile-sub">${t.lootFrom(fmt(res.holz))}${pct(loot.holz, res.holz)}</div>
      </div>
    </div>
    ${protectedNote}
    <div class="building-benefit" style="margin-top:6px;text-align:right;">
      ${t.lootSummary(fmt(totalLoot), fmt(usedCap), fmt(transport))}
    </div>
    </div>`;
}

/* ─── Units needed (land combat or naval battle, deficit-based) ─── */
function renderUnitsNeeded(t, deficit, aBonusAtk, unitDefs, context) {
  const rows = unitDefs.map(u => {
    const effectiveAtk = UNITS[u.id].atk + (aBonusAtk[u.id] || 0);
    const count = Math.ceil(deficit / effectiveAtk);
    const name  = t.unitNames[u.id];
    return `<tr>
      <td>${u.icon} ${name}</td>
      <td class="text-muted" style="font-size:0.8rem;">⚔ ${effectiveAtk}</td>
      <td class="units-needed-count">+${fmt(count)}</td>
    </tr>`;
  }).join('');

  const tip = context === 'sea' ? t.tipSea : t.tip;

  return `
    <div style="padding: 4px 10px 8px;">
      <div class="text-muted" style="font-size:0.82rem;margin-bottom:4px;">${t.unitsNeededTitle} · ${t.unitsNeededLevel(fmt(deficit))}</div>
      <table class="units-needed-table">
        <thead><tr>
          <th>${t.colUnit}</th>
          <th>${t.colAtk}</th>
          <th style="text-align:right;">${t.colNeeded}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="building-benefit" style="margin-top:6px;">
        💡 ${tip}
      </div>
    </div>`;
}

/* ─── Init ─── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

document.querySelectorAll('input[type="number"]').forEach(el => {
  el.addEventListener('input', calculate);
  el.addEventListener('blur', () => {
    if (el.value === '' || Number(el.value) < 0) el.value = 0;
    if (el.max !== '' && Number(el.value) > Number(el.max)) el.value = el.max;
    calculate();
  });
});

setLang(lang);
