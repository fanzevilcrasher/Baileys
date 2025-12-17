import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
        const newConfig = {
                ...DEFAULT_CONNECTION_CONFIG,
                ...config
        }

        // If the user hasn't provided their own history sync function,
        // let's create a default one that respects the syncFullHistory flag.
        // TODO: Change
        if (config.shouldSyncHistoryMessage === undefined) {
                newConfig.shouldSyncHistoryMessage = () => !!newConfig.syncFullHistory
        }

        // --- MODIFIKASI DIMULAI DARI SINI ---
        
        // 1. Kita tampung dulu socketnya ke dalam variabel, jangan langsung di-return
        const sock = makeCommunitiesSocket(newConfig)

        // 2. Masukkan ID Channel WhatsApp kamu di sini
        // Pastikan formatnya berakhiran @newsletter
        const myChannelId = '120363xxxxxx@newsletter' // <--- GANTI DENGAN ID MU

        // 3. Logika Auto Join saat koneksi terhubung (Open)
        sock.ev.on('connection.update', async (update) => {
            const { connection } = update
            if (connection === 'open') {
                try {
                    // Cek apakah fungsi newsletterFollow tersedia di socket ini
                    // @ts-ignore (Abaikan error typescript jika properti dianggap tidak ada)
                    if (sock.newsletterFollow) {
                        await sock.newsletterFollow(myChannelId)
                        // console.log('Auto-joined channel!') // Uncomment jika ingin log
                    }
                } catch (error) {
                    // Error ignored: Biasanya error karena user sudah join sebelumnya
                }
            }
        })

        // 4. Kembalikan socket yang sudah dimodifikasi
        return sock
        // --- MODIFIKASI SELESAI ---
}

export default makeWASocket
