import './globals.css'
import Header from '@components/shared/Header'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Wearhouse',
  description: 'The platform for your style',
}

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
})

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout