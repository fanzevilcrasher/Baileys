// --- BAGIAN LOG ---
console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
console.log('\x1b[33m%s\x1b[0m', '🔥 Menggunakan Baileys Custom by Fanzevilcrasher 🔥');
console.log('\x1b[33m%s\x1b[0m', '   Terima kasih sudah menggunakan script ini!');
console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
// ------------------

import makeWASocket from './Socket'

export * from './Socket'
export * from './Types'
export * from './Utils'
export * from './Defaults'
export * from './WAM'

// KITA HAPUS BARIS WAProto YANG BIKIN ERROR
// export * from './WAProto' <-- Ini biang keroknya kalau filenya gak ada

export default makeWASocket
