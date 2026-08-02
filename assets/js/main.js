 // Tujuan: browser entrypoint. Dipakai: HTML pages. Butuh: feature modules. API: none. Efek: bootstraps UI.
import { tampilUiBersama } from './modules/modal.js';
import { mulaiNavigasi } from './modules/navigasi.js';
import { mulaiProduk } from './modules/produk.js';
import { mulaiKeranjang } from './modules/keranjang.js';
import { mulaiFavorit } from './modules/favorit.js';
import { mulaiBayar } from './modules/bayar.js';
import { mulaiUlasan } from './modules/ulasan.js';

tampilUiBersama();
mulaiNavigasi();
mulaiKeranjang();
mulaiFavorit();
mulaiProduk();
mulaiBayar();
mulaiUlasan();
