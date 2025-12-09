import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/logo.jpg",
  },
  title: "BoatHungary.hu - Elektromos Hajó és Tesla Bérlés",
  description: "Elektromos megoldások szárazon és vizen. Béreljen prémium elektromos hajót vagy Tesla Model Y-t.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={`${outfit.className} antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
