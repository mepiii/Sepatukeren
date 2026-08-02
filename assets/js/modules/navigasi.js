// Tujuan: simple navigation. Dipakai: main.js. Butuh: DOM/window. API: mulaiNavigasi. Efek: toggles menu/classes.
let bound = false;
const updateActive = () => {
  const page = document.documentElement.dataset.page;
  document.querySelectorAll('[data-page-link]').forEach(link => link.classList.toggle('active', link.dataset.pageLink === page));
};
export const mulaiNavigasi = () => {
  updateActive();
  if (bound) return;
  bound = true;
  document.addEventListener('click', event => {
    if (event.target.closest('[data-action]')?.dataset.action === 'toggle-menu') document.querySelector('[data-menu-hp]')?.classList.toggle('open');
  });
};
