import type { Metadata } from "next";
// import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   display: "swap",
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://tharunkv.netlify.app"),
  title: "Tharun K V | AI/ML & Software Engineer",
  description: "Final-year B.Tech (AI & ML) student and AI/ML Engineering Intern at Dview. AWS Certified, with full-stack development experience.",
  applicationName: "Tharun K V Portfolio",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Tharun K V | AI/ML & Software Engineer",
    description: "AI/ML and software engineering portfolio featuring applied AI, backend, and full-stack projects.",
    images: [{ url: "/profile.png", alt: "Tharun K V" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharun K V | AI/ML & Software Engineer",
    description: "AI/ML and software engineering portfolio featuring applied AI, backend, and full-stack projects.",
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#050505] text-[#e0e0e0]">{children}</body>
    </html>
  );
}
