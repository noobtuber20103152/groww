import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grow stonks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProvider>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
