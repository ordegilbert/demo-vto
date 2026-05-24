import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import MobileLayout from "@/layout/MobileLayout";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.variable}>
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </main>
  );
}
