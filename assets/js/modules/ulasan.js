// Tujuan: testimonial ulasan rendering. Dipakai: main.js. Butuh: penyimpanan. API: mulaiUlasan/tampilUlasan. Efek: writes testimonial HTML.
import { store } from './penyimpanan.js';

const defaults = [
  { nama:'Budi Santoso', foto:'https://randomuser.me/api/portraits/men/32.jpg', nilai:5, teks:'Sepatunya keren banget, persis kayak di foto. Pengiriman super cepet!' },
  { nama:'Siti Aminah', foto:'https://randomuser.me/api/portraits/women/44.jpg', nilai:5, teks:'Adminnya ramah diajak konsultasi ukuran. Pas datang ukurannya pas.' },
  { nama:'Rizky Pratama', foto:'https://randomuser.me/api/portraits/men/86.jpg', nilai:5, teks:'Kualitas original dengan harga miring. Packing rapi dan aman.' }
];
const stars = nilai => '★★★★★'.slice(0, nilai) + '☆☆☆☆☆'.slice(nilai);
const card = ulasan => `<article class="kartu-testimoni"><i class="fas fa-quote-left ikon-kutip"></i><p>"${ulasan.teks}"</p><div class="pelanggan"><img src="${ulasan.foto}" alt="${ulasan.nama}"><div><h2>${ulasan.nama}</h2><span>${stars(Number(ulasan.nilai) || 5)}</span></div></div></article>`;

export const tampilUlasan = () => {
  const list = document.querySelector('[data-ulasan-list]');
  if (list) list.innerHTML = [...defaults, ...store.getUlasan()].map(card).join('');
};
export const mulaiUlasan = tampilUlasan;
