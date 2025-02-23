import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import { CourseProvider } from "@/app/contexts/CourseContext";
import { TabProvider } from "@/app/contexts/TabContext";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['vietnamese'],
  display: 'swap',
})

export const metadata: Metadata = {
  icons: '/icons/app-icon.svg',
  title: "LexiUp 🚀",
  description: "Nền tảng học từ vựng thông minh, giúp bạn mở rộng vốn từ nhanh chóng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} w-screen h-screen overflow-hidden`}
      >
        <TabProvider>
          <CourseProvider>
            {children}
          </CourseProvider>
        </TabProvider>
        
        
      </body>
    </html>
  );
}
