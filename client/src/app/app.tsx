import localFont from "next/font/local";
import type { AppProps } from "next/app";
import {AppProvider} from "@/app/app-provider";

const geistSans = localFont({
    src: "../../pages/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../../pages/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export function App({ Component, pageProps }: AppProps) {
  return (
      <AppProvider>
          <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
              <Component {...pageProps} />
          </div>
      </AppProvider>
  );
}
