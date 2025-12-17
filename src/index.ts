// --- Tambahkan Kode Kamu di Bagian Paling Atas ---
console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
console.log('\x1b[33m%s\x1b[0m', '🔥 Menggunakan Baileys Custom by Fanzevilcrasher 🔥');
console.log('\x1b[33m%s\x1b[0m', '   Terima kasih sudah menggunakan script ini!');
console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
// -------------------------------------------------

import makeWASocket from './Socket'

export * from './Socket'
export * from './Types'
export * from './Utils'
export * from './Defaults'
export * from './WAProto'
export * from './WAM'

export default makeWASocket
