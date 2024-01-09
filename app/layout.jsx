import './globals.css'
import Header from '@components/shared/Header'

export const metadata = {
  title: 'Wearhouse',
  description: 'The platform for your style',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout