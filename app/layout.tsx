import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eris Shosholli | Backend & DevOps Engineer",
  description:
    "Portfolio for Eris Shosholli, a backend and DevOps-focused engineer building APIs, database-backed services, and tested delivery workflows.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Eris Shosholli | Backend & DevOps Engineer",
    description:
      "Backend and DevOps-focused portfolio featuring FastAPI, Flask, PostgreSQL, Docker, testing, and full-stack delivery work.",
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
