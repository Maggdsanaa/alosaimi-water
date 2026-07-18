import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'العصيمي للمياه - توصيل مياه الوايتات في صنعاء | أمانة العاصمة',
  description:
    'العصيمي للمياه لخدمات توصيل مياه الوايتات والمشروع المنزلي في صنعاء وأمانة العاصمة. اطلب المياه بسهولة عبر واتساب وحدد موقعك على الخريطة.',
  keywords: [
    'توصيل مياه صنعاء',
    'وايت مياه اليمن',
    'وايت ماء صنعاء',
    'مياه نظيفة صنعاء',
    'توصيل وايتات',
    'العصيمي للمياه',
    'مشروع مياه منزلي',
  ],
  openGraph: {
    title: 'العصيمي للمياه - توصيل مياه الوايتات في صنعاء',
    description: 'مياه نقية توصل إلى بابك في جميع أحياء أمانة العاصمة.',
    locale: 'ar_YE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B4C8C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
