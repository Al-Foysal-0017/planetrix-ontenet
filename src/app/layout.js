import { Noto_Kufi_Arabic } from 'next/font/google';
import "./globals.css";

// Font configuration
const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'], 
  variable: '--font-noto-kufi', 
});

export const metadata = {
  title: "PLANETRIX",
  description: "Created by Naiem Al Foysal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${notoKufi.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

