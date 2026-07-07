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
    result:            '📊 Kampfergebnis',
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
    upgradeBonus:                'Aufwertung',
    steinmauer:                  '🧱 Steinmauer',
    steinmauerLevel:             'Stufe',
    steinmauerBonus:             def => `+${def} Verteidigung`,
    lagerhaus:                   '🏚️ Lagerhaus',
    lagerhausDesc:               'Stufe 0–30 · schützt Ressourcen',
    lagerhausLevel:              'Stufe',
    lagerhausProtect:            n => `🔒 ${n} geschützt`,
    // dynamic
    troops:     n => `${n} Truppen`,
    slotsFree:  n => `${n} Plätze frei`,
    noShips:       '⚠️ Keine Schiffe!',
    slotsZero:     '0 Plätze',
    resources:  n => `${n} Ressourcen`,
    draw:    (a, d)       => `⚖️ Unentschieden — Angriff (${a}) = Verteidigung (${d})`,
    victory: (a, d, adv)  => `🏆 Sieg! — Angriff ${a} schlägt Verteidigung ${d} (Vorteil: +${adv})`,
    defeat:  (d, a, def)  => `💀 Niederlage — Verteidigung ${d} schlägt Angriff ${a} (Defizit: ${def})`,
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
    tip: 'Tipp: Kombiniere mehrere Einheitentypen für maximale Effizienz. Die Liste zeigt jeweils die Menge, die alleine zum Sieg reicht.',
    unitNames: {
      gks:                  'Gr. Kriegsschiff',
      speertreaeger:        'Speerträger',
      bogenschuetze:        'Bogenschütze',
      kolonisierungsschiff: 'Kolonisierungsschiff',
      kks:                  'Kl. Kriegsschiff',
      katapult:             'Katapult',
      steinwerfer:          'Steinwerfer',
    },
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
    result:            '📊 Battle Result',
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
    upgradeBonus:                'Upgrade',
    steinmauer:                  '🧱 Stone Wall',
    steinmauerLevel:             'Level',
    steinmauerBonus:             def => `+${def} Defence`,
    lagerhaus:                   '🏚️ Warehouse',
    lagerhausDesc:               'Level 0–30 · protects resources',
    lagerhausLevel:              'Level',
    lagerhausProtect:            n => `🔒 ${n} protected`,
    // dynamic
    troops:     n => `${n} troops`,
    slotsFree:  n => `${n} slots free`,
    noShips:       '⚠️ No ships!',
    slotsZero:     '0 slots',
    resources:  n => `${n} resources`,
    draw:    (a, d)       => `⚖️ Draw — Attack (${a}) = Defence (${d})`,
    victory: (a, d, adv)  => `🏆 Victory! — Attack ${a} beats Defence ${d} (Advantage: +${adv})`,
    defeat:  (d, a, def)  => `💀 Defeat — Defence ${d} beats Attack ${a} (Deficit: ${def})`,
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
    tip: 'Tip: Combine multiple unit types for maximum efficiency. Each row shows the amount needed if used alone.',
    unitNames: {
      gks:                  'Lg. Warship',
      speertreaeger:        'Spearman',
      bogenschuetze:        'Archer',
      kolonisierungsschiff: 'Colonization Ship',
      kks:                  'Sm. Warship',
      katapult:             'Catapult',
      steinwerfer:          'Stone Thrower',
    },
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

const UNITS_NEEDED_DEFS = [
  { id: 'gks',                  icon: '🚢' },
  { id: 'speertreaeger',        icon: '🗡️' },
  { id: 'bogenschuetze',        icon: '🏹' },
  { id: 'kolonisierungsschiff', icon: '⛴️' },
  { id: 'kks',                  icon: '⛵' },
  { id: 'katapult',             icon: '💥' },
  { id: 'steinwerfer',          icon: '🪨' },
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

  /* Read upgrade bonuses per unit per side */
  const aBonusAtk = {}, dBonusDef = {};
  ALL.forEach(u => {
    aBonusAtk[u] = num(`a-${u}-atk`);
    dBonusDef[u] = num(`d-${u}-def`);
  });

  const wallLevel = Math.min(20, num('d-steinmauer'));
  const wallBonus = wallLevel * 100;

  const warehouseLevel = Math.min(30, num('d-lagerhaus'));
  const warehouseProtect = warehouseLevel === 0 ? 0 : Math.floor(1200 * Math.pow(1.15, warehouseLevel)/10);
  $$('warehouse-protect-label').textContent = warehouseProtect > 0 ? t.lagerhausProtect(fmt(warehouseProtect)) : '';

  const totalAtk = ALL.reduce((s, u) => s + a[u] * (UNITS[u].atk + aBonusAtk[u]), 0);
  const totalDef = ALL.reduce((s, u) => s + d[u] * (UNITS[u].def + dBonusDef[u]), 0) + wallBonus;

  const troops    = GROUND.reduce((s, u) => s + a[u], 0);
  const shipCap   = a.kks * 5 + a.gks * 10;
  const transport = ALL.reduce((s, u) => s + a[u] * (UNITS[u].resCap || 0), 0);
  const capOver   = troops > 0 && troops > shipCap;

  const wins     = totalAtk > totalDef;
  const draw     = totalAtk === totalDef;
  const hasInput = totalAtk > 0 || totalDef > 0;

  /* ── Summary bar ── */
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

  /* ── Outcome banner ── */
  const banner = $$('outcome-banner');
  if (!hasInput) {
    banner.style.display = 'none';
  } else if (draw) {
    banner.style.display = '';
    banner.className = 'warning';
    banner.innerHTML = t.draw(fmt(totalAtk), fmt(totalDef));
  } else if (wins) {
    banner.style.display = '';
    banner.className = 'success';
    banner.innerHTML = t.victory(fmt(totalAtk), fmt(totalDef), fmt(totalAtk - totalDef));
  } else {
    banner.style.display = '';
    banner.className = 'error';
    banner.innerHTML = t.defeat(fmt(totalDef), fmt(totalAtk), fmt(totalDef - totalAtk));
  }

  /* ── Result detail ── */
  const detailEl = $$('result-detail');
  if (!hasInput) { detailEl.innerHTML = ''; return; }

  if (wins) {
    detailEl.innerHTML = renderLoot(t, res, transport, warehouseProtect);
  } else if (!draw) {
    detailEl.innerHTML = renderUnitsNeeded(t, totalDef - totalAtk, aBonusAtk);
  } else {
    detailEl.innerHTML = '';
  }
}

/* ─── Loot ─── */
function renderLoot(t, res, transport, warehouseProtect) {
  if (transport === 0) {
    return `<div class="warning" style="margin-top:10px;">${t.noMerchants}</div>`;
  }
  const totalRes = res.gold + res.silber + res.holz;
  const stealable = Math.max(0, totalRes - warehouseProtect);

  let loot = { gold: 0, silber: 0, holz: 0 };
  if (stealable > 0) {
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
    </div>`;
}

/* ─── Units needed ─── */
function renderUnitsNeeded(t, deficit, aBonusAtk) {
  const rows = UNITS_NEEDED_DEFS.map(u => {
    const effectiveAtk = UNITS[u.id].atk + (aBonusAtk[u.id] || 0);
    const count = Math.ceil(deficit / effectiveAtk);
    const name  = t.unitNames[u.id];
    return `<tr>
      <td>${u.icon} ${name}</td>
      <td class="text-muted" style="font-size:0.8rem;">⚔ ${effectiveAtk}</td>
      <td class="units-needed-count">+${fmt(count)}</td>
    </tr>`;
  }).join('');

  return `
    <div class="building-card" style="margin-top:10px; border-left: 3px solid var(--c-red-border);">
      <div class="building-card-header">
        <span class="building-card-name">${t.unitsNeededTitle}</span>
        <span class="building-card-level">${t.unitsNeededLevel(fmt(deficit))}</span>
      </div>
      <div style="padding: 8px 10px;">
        <table class="units-needed-table">
          <thead><tr>
            <th>${t.colUnit}</th>
            <th>${t.colAtk}</th>
            <th style="text-align:right;">${t.colNeeded}</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="building-benefit" style="margin-top:6px;">
          💡 ${t.tip}
        </div>
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
