import { Playfair } from '@/fonts/fonts'
import './globals.css'
import { Providers } from './providers'



export const metadata = {
  title: 'ProgrammerXpress Blogs',
  description: 'Development By Md Sujon Mia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Playfair.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
