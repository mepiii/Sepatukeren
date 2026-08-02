// Tujuan: transient notifikasi notifications. Dipakai: keranjang/favorit/bayar. Butuh: shared UI root. API: tampilNotifikasi. Efek: mutates DOM.
export const tampilNotifikasi = (message, type = 'info', icon = 'fa-info-circle') => {
  const wadah = document.querySelector('[data-wadah-notifikasi]');
  if (!wadah) return;
  const notifikasi = document.createElement('div');
  const colors = { sukses: '#22c55e', gagal: '#ef4444', info: '#3b82f6' };
  notifikasi.className = `notifikasi ${type}`;
  notifikasi.innerHTML = `<i class="fas ${icon}" style="color:${colors[type] || colors.info};font-size:16px"></i><span>${message}</span>`;
  wadah.appendChild(notifikasi);
  setTimeout(() => notifikasi.remove(), 3100);
};
