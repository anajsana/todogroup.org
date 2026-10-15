(() => {
  const mascot = document.querySelector('[data-slash-friends]');
  if (!mascot) return;
  const toggle = mascot.querySelector('[data-animation-toggle]');
  const label = toggle.querySelector('[data-animation-label]');
  const icon = toggle.querySelector('[data-animation-icon]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncPreference = () => { toggle.hidden = reducedMotion.matches; };
  toggle.addEventListener('click', () => {
    const paused = mascot.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    label.textContent = paused ? 'Play animation' : 'Pause animation';
    icon.textContent = paused ? '▷' : 'Ⅱ';
  });
  reducedMotion.addEventListener('change', syncPreference);
  syncPreference();
})();
