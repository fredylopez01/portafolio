import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Fredy López — Full-Stack Developer",
  description:
    "Portafolio de Fredy Oswaldo López Daza. Full-Stack Developer especializado en backend, microservicios y sistemas distribuidos.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${permanentMarker.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="scanlines" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
