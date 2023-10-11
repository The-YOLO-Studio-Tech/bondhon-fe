import NextAuthProvider from '@/components/provider/NextAuthProvider';
import TanStackQueryProvider from '@/components/provider/TanstackProvider';
import { authOptions } from '@/libs/authOptions';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bondhon',
  description: 'Bondhon',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en,bn">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextAuthProvider session={session}>
          <TanStackQueryProvider>{children}</TanStackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
