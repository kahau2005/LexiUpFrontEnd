import type { Metadata } from "next";
import { Quicksand  } from "next/font/google";
import "./globals.css";
import { CourseProvider } from "@/app/contexts/CourseContext";
import { TabProvider } from "@/app/contexts/TabContext";
import Head from "next/head";
import { NavDrawerProvider } from "@/app/contexts/NavDrawerContext";
import ReduxProvider from "@/app/Provider";
// import { Provider } from "react-redux";
// import store from "./redux/store";

const quicksand = Quicksand({
  weight: ['300', '700'],
  style: ['normal'],
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
      </Head>
      <body
        className={`${quicksand.className} w-screen h-screen overflow-hidden`}
      >
        <ReduxProvider>
          <TabProvider>
              <CourseProvider>
                <NavDrawerProvider>
                  {children}
                </NavDrawerProvider>
                
              </CourseProvider>
            </TabProvider>
        </ReduxProvider>
          
        {/* </Provider> */}
          
        
        
      </body>
    </html>
  );
}
