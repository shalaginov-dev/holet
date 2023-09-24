import type {Metadata} from 'next'
import {Inter, Roboto} from 'next/font/google'
import '../styles/app.scss'

const inter = Inter({subsets: ['latin']})
const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Frontend Mentor | Newsletter sign-up form with success message',
    description: 'Submit form',
    icons: 'icon.png'
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={roboto.className}>{children}</body>
        </html>
    )
}
