import './globals.css';
import Header from '@components/shared/Header';
import { Poppins } from 'next/font/google';
import { AuthProvider } from './contexts/AuthContext';
import { BasketProvider } from './contexts/BasketContext';
import Footer from '@components/shared/Footer';


export const metadata = {
  title: 'Wearhouse',
  description: 'The platform for your style',
};

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <BasketProvider>
          <Header />
          <main className={`${poppins.className} pt-headerHeight`}>
            {children}
          </main>
          <Footer />
        </BasketProvider>
      </AuthProvider>
    </html>
  )
};

export default RootLayout;