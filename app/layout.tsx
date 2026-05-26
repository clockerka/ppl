import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";
import { MusicProvider } from "@/contexts/MusicContext";
export const metadata: Metadata = {
  title: "ppl corporation",
  description: "сайт про корабли там поняли",
  icons: {
    icon: "/logo.jpg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MusicProvider>
          <BackgroundMusic />
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
