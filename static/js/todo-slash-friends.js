(() => {
  const mascot = document.querySelector('[data-slash-friends]');
  if (!mascot) return;
  const illustration = mascot.querySelector('svg');
  const description = illustration.getAttribute('aria-label');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncState = () => {
    const paused = mascot.classList.contains('is-paused');
    illustration.setAttribute('role', reducedMotion.matches ? 'img' : 'button');
    illustration.setAttribute('tabindex', reducedMotion.matches ? '-1' : '0');
    illustration.setAttribute('aria-label', reducedMotion.matches
      ? description
      : `${description}. ${paused ? 'Play' : 'Pause'} animation.`);
    if (reducedMotion.matches) illustration.removeAttribute('aria-pressed');
    else illustration.setAttribute('aria-pressed', String(paused));
  };
  const toggle = () => {
    if (reducedMotion.matches) return;
    mascot.classList.toggle('is-paused');
    syncState();
  };
  illustration.addEventListener('click', toggle);
  illustration.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggle();
    }
  });
  reducedMotion.addEventListener('change', syncState);
  syncState();
})();
