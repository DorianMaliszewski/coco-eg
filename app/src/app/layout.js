import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coco Learning',
  description: 'Learn to configure your EdgeRouter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen max-w-screen overflow-x-hidden'>

          <nav className='navbar bg-base-300'>
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl">CocoLearning</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/docs">Docs</Link></li>
                <li><Link href="/references">References</Link></li>
                <li><Link href="/feedbacks">Feedbacks</Link></li>
              </ul>
            </div>
          </nav>
          <main className='flex-grow block min-h-full grid'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
