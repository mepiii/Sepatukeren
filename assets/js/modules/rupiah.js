// Tujuan: formatting helpers. Dipakai: store modules. Butuh: Intl/Date. API: namad exports. Efek: none.
export const formatRupiah = number => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFraksiDigits: 0 }).format(number);
export const generateResi = () => `${['JNE','TIKI','SICEPAT','ANTERAJA','NINJA'][Math.floor(Math.random()*5)]}${Math.floor(100000000000+Math.random()*900000000000)}ID`;
export const generateOrderId = () => { const now = new Date(); return `INV-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${Math.floor(10000+Math.random()*90000)}`; };
