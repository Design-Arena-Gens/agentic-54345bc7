import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: "6rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)" }}>404</span>
      <h1 style={{ fontSize: "3rem", margin: 0 }}>Nap interrupted.</h1>
      <p style={{ color: "var(--muted)", maxWidth: "26rem" }}>
        We looked under every pillow and still couldn&apos;t find the page you&apos;re after. Maybe it&apos;s
        still resting?
      </p>
      <Link
        href="/"
        style={{
          padding: "0.85rem 1.4rem",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #ff7f50, #ffb298)",
          color: "#0d0f12",
          fontWeight: 600
        }}
      >
        Return home
      </Link>
    </div>
  );
}
