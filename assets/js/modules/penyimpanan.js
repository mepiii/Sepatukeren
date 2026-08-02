// Tujuan: localStorage persistence. Dipakai: keranjang/favorit/ulasan/barang/bayar modules. Butuh: browser localStorage. API: store object. Efek: reads/writes localStorage.
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const store = {
  getKeranjang: () => read('sepatukeren.keranjang', []), setKeranjang: keranjang => write('sepatukeren.keranjang', keranjang),
  getFavorit: () => read('sepatukeren.favorit', []), setFavorit: favorit => write('sepatukeren.favorit', favorit),
  getUlasan: () => read('sepatukeren.ulasan', []), setUlasan: ulasan => write('sepatukeren.ulasan', ulasan),
  getPesanan: () => read('sepatukeren.pesanan', []), setPesanan: pesanan => write('sepatukeren.pesanan', pesanan)
};
