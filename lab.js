const toggle = document.querySelector('.lab-toggle');
const card = toggle.closest('.lab-card');

toggle.addEventListener('click', () => {
  const revealed = card.toggleAttribute('data-revealed');
  toggle.setAttribute('aria-pressed', String(revealed));
});
