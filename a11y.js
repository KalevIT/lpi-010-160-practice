/**
 * LPI Exam Practice — Accessibility Controller (a11y.js) v2
 *
 * Supported accessibility needs:
 *  • Dyslexia        — dyslexia-friendly font, wide letter/word spacing
 *  • Dyscalculia     — hide or pause exam timer
 *  • Dysgraphia      — larger tap targets, reduced clutter
 *  • Low vision      — font size up to 24px, high contrast modes
 *  • ADHD            — reduced motion, focus highlight, progress bar
 *  • Colorblindness  — 4 colorblind-safe palette modes
 *                      (Deuteranopia/Protanopia, Tritanopia, Achromatopsia, High-contrast)
 *  • Motor           — larger tap targets (already in dysgraphia mode)
 */

const A11Y_KEY = 'lpi_a11y_v2';

const A11Y_DEFAULTS = {
  font:       'default',   // 'default' | 'dyslexic' | 'mono'
  fontSize:   '16',        // '14' | '16' | '18' | '20' | '22' | '24'
  letterSp:   'normal',    // 'normal' | 'wide' | 'xwide'
  lineSp:     'normal',    // 'normal' | 'relaxed' | 'loose'
  contrast:   'default',   // 'default' | 'high' | 'dark' | 'cb-deu' | 'cb-tri' | 'cb-achr'
  motion:     'on',        // 'on' | 'off'
  timerMode:  'show',      // 'show' | 'pause-ok' | 'hide'
  targets:    'normal',    // 'normal' | 'large'  (tap target size)
};

let A11Y = { ...A11Y_DEFAULTS };

function a11yLoad() {
  try {
    const saved = JSON.parse(localStorage.getItem(A11Y_KEY) || '{}');
    A11Y = { ...A11Y_DEFAULTS, ...saved };
  } catch (e) { A11Y = { ...A11Y_DEFAULTS }; }
  a11yApply();
}

function a11ySave() {
  try { localStorage.setItem(A11Y_KEY, JSON.stringify(A11Y)); } catch (e) {}
}

function a11yApply() {
  const root = document.documentElement;
  root.setAttribute('data-font', A11Y.font);
  root.style.setProperty('--a11y-font-size', A11Y.fontSize + 'px');
  const lsMap = { normal: '0', wide: '0.05em', xwide: '0.12em' };
  root.style.setProperty('--a11y-letter-sp', lsMap[A11Y.letterSp] || '0');
  const lhMap = { normal: '1.55', relaxed: '1.8', loose: '2.2' };
  root.style.setProperty('--a11y-line-h', lhMap[A11Y.lineSp] || '1.55');
  root.setAttribute('data-contrast', A11Y.contrast);
  root.setAttribute('data-motion', A11Y.motion);
  root.setAttribute('data-targets', A11Y.targets);
  a11yUpdatePanel();
}

function a11yPanelHTML() {
  const G = (attr, val, label) => {
    const on = A11Y[attr] === val;
    return `<button class="a11y-pill ${on?'a11y-on':''}" onclick="a11ySet('${attr}','${val}')" aria-pressed="${on}">${label}</button>`;
  };

  return `
<div id="a11yPanel" role="dialog" aria-modal="true" aria-label="Accessibility settings">
  <div class="a11y-header">
    <strong>♿ Accessibility</strong>
    <button onclick="a11yClose()" aria-label="Close accessibility panel">✕</button>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Font family</div>
    <div class="a11y-pills">
      ${G('font','default','Default')}
      ${G('font','dyslexic','Dyslexia-friendly')}
      ${G('font','mono','Monospace')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Text size</div>
    <div class="a11y-pills">
      ${G('fontSize','14','A<sub>14</sub>')}
      ${G('fontSize','16','A<sub>16</sub>')}
      ${G('fontSize','18','A<sub>18</sub>')}
      ${G('fontSize','20','A<sub>20</sub>')}
      ${G('fontSize','22','A<sub>22</sub>')}
      ${G('fontSize','24','A<sub>24</sub>')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Letter spacing</div>
    <div class="a11y-pills">
      ${G('letterSp','normal','Normal')}
      ${G('letterSp','wide','Wide')}
      ${G('letterSp','xwide','Extra wide')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Line spacing</div>
    <div class="a11y-pills">
      ${G('lineSp','normal','Normal')}
      ${G('lineSp','relaxed','Relaxed')}
      ${G('lineSp','loose','Loose')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Colour theme</div>
    <div class="a11y-pills">
      ${G('contrast','default','Default')}
      ${G('contrast','high','High contrast')}
      ${G('contrast','dark','Dark mode')}
    </div>
    <div class="a11y-label" style="margin-top:8px">Colorblind modes</div>
    <div class="a11y-pills">
      ${G('contrast','cb-deu','🔴🟢 Deut/Prot')}
      ${G('contrast','cb-tri','🔵🟡 Tritan')}
      ${G('contrast','cb-achr','⬛⬜ Greyscale')}
    </div>
    <div style="font-size:11px;color:#888;margin-top:4px">Deut/Prot = red-green colorblindness · Tritan = blue-yellow · Greyscale = no color perception</div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Animations</div>
    <div class="a11y-pills">
      ${G('motion','on','On')}
      ${G('motion','off','Reduced')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Tap/click target size <span style="font-size:11px;color:#888">(motor accessibility)</span></div>
    <div class="a11y-pills">
      ${G('targets','normal','Normal')}
      ${G('targets','large','Large (44px+)')}
    </div>
  </div>

  <div class="a11y-group">
    <div class="a11y-label">Exam timer <span style="font-size:11px;color:#888">(dyscalculia / anxiety)</span></div>
    <div class="a11y-pills">
      ${G('timerMode','show','Show')}
      ${G('timerMode','pause-ok','Pauseable')}
      ${G('timerMode','hide','Hide')}
    </div>
  </div>

  <button class="a11y-reset" onclick="a11yReset()">Reset all to defaults</button>
</div>`;
}

function a11yInit() {
  const fab = document.createElement('button');
  fab.id = 'a11yFab';
  fab.setAttribute('aria-label', 'Open accessibility settings');
  fab.setAttribute('title', 'Accessibility settings');
  fab.innerHTML = '♿';
  fab.onclick = a11yOpen;
  document.body.appendChild(fab);

  const overlay = document.createElement('div');
  overlay.id = 'a11yOverlay';
  overlay.setAttribute('role', 'presentation');
  overlay.onclick = (e) => { if (e.target === overlay) a11yClose(); };
  document.body.appendChild(overlay);

  a11yLoad();
}

function a11yOpen() {
  document.getElementById('a11yOverlay').innerHTML = a11yPanelHTML();
  document.getElementById('a11yOverlay').style.display = 'flex';
  document.getElementById('a11yPanel').focus();
}
function a11yClose() {
  document.getElementById('a11yOverlay').style.display = 'none';
}

function a11ySet(attr, val) {
  A11Y[attr] = val;
  a11ySave();
  a11yApply();
  if (document.getElementById('a11yPanel')) {
    document.getElementById('a11yOverlay').innerHTML = a11yPanelHTML();
  }
}

function a11yReset() {
  A11Y = { ...A11Y_DEFAULTS };
  a11ySave();
  a11yApply();
  if (document.getElementById('a11yPanel')) {
    document.getElementById('a11yOverlay').innerHTML = a11yPanelHTML();
  }
}

function a11yUpdatePanel() {
  if (document.getElementById('a11yPanel')) {
    document.getElementById('a11yOverlay').innerHTML = a11yPanelHTML();
  }
}

function a11yTimerMode() { return A11Y.timerMode || 'show'; }

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', a11yInit);
} else {
  a11yInit();
}
