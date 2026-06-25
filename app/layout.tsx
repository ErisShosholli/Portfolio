import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eris Shosholli | DevOps Engineer & Full-Stack Developer",
  description:
    "Portfolio for Eris Shosholli, a DevOps Engineer and Full-Stack Developer building APIs, database-backed services, Docker workflows, and tested delivery systems.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Eris Shosholli | DevOps Engineer & Full-Stack Developer",
    description:
      "DevOps and full-stack portfolio featuring FastAPI, Flask, PostgreSQL, Docker, testing, and full-stack delivery work.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
