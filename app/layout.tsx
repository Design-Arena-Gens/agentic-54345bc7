"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/lab", label: "Lab" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <title>NapBlog &mdash; Experiments in Rested Creativity</title>
        <meta
          name="description"
          content="NapBlog is a home for essays on rested creativity, mindful tech, and building sustainable digital products."
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <header className="container" style={{ padding: "2.5rem 0" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.25rem"
            }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "1rem",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 127, 80, 0.3))",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  color: "#0d0f12",
                  fontSize: "1.35rem"
                }}
              >
                N
              </span>
              <div>
                <strong style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}>NapBlog</strong>
                <p style={{ margin: 0, color: "var(--muted)" }}>
                  Notes on rest, systems, and calm creation.
                </p>
              </div>
            </Link>
            <nav
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem"
              }}
            >
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: "0.55rem 1.05rem",
                      borderRadius: "999px",
                      background: active ? "rgba(255, 127, 80, 0.15)" : "transparent",
                      border: active ? "1px solid rgba(255, 127, 80, 0.35)" : "1px solid transparent",
                      color: active ? "#ffb298" : "var(--muted)",
                      fontWeight: 500,
                      transition: "all 0.2s ease"
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "4rem",
            padding: "3rem 0"
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "var(--muted)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
              <span>&copy; {new Date().getFullYear()} NapBlog.</span>
              <span>Rest more. Create better.</span>
            </div>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              Built with a focus on calm interfaces, slow content, and generous knowledge sharing.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
