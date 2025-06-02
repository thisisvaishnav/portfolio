import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaishnav Verma | Software Engineer",
  description: "Software engineer building backend systems, cloud-native tools, and minimalist UIs.",
  keywords: ["software engineer", "backend", "cloud-native", "Go", "React", "Next.js"],
  authors: [{ name: "Vaishnav Verma" }],
  openGraph: {
    title: "Vaishnav Verma | Software Engineer",
    description: "Software engineer building backend systems, cloud-native tools, and minimalist UIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
