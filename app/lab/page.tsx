import Link from "next/link";

const experiments = [
  {
    title: "Rested Launch Planner",
    status: "Available",
    description:
      "A Notion template that lines up roadmap milestones with energy audits, so you can ship without panic.",
    linkText: "Duplicate template",
    href: "https://napblog.com/lab/rested-launch-planner"
  },
  {
    title: "Async Rituals Toolkit",
    status: "Beta",
    description:
      "A bundle of Google Docs and Loom scripts to help teams adopt calm communication cadences.",
    linkText: "Request access",
    href: "mailto:rest@napblog.com?subject=Async%20Rituals%20Toolkit"
  },
  {
    title: "Mindful Metrics Dashboard",
    status: "Coming soon",
    description:
      "A lightweight, privacy-first dashboard built on Next.js and Supabase for tracking rest debt alongside product metrics.",
    linkText: "Join waitlist",
    href: "https://napblog.com/newsletter"
  }
];

export default function LabPage() {
  return (
    <div className="container" style={{ paddingBottom: "6rem" }}>
      <header style={{ paddingBottom: "2.5rem", maxWidth: "760px" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>NapBlog Lab</span>
        <h1 style={{ fontSize: "3rem", margin: "0.75rem 0" }}>Tools for gentle ambition.</h1>
        <p style={{ color: "var(--muted)" }}>
          The Lab is where we ship experiments: templates, calculators, and starter kits for teams
          rewiring their relationship to rest. Everything here is field-tested with real clients
          before it graduates to a featured release.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}
      >
        {experiments.map((experiment) => (
          <div
            key={experiment.title}
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.5rem",
              padding: "2rem",
              background: "rgba(12, 14, 17, 0.75)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              minHeight: "320px"
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.45)" }}>{experiment.status}</span>
            <strong style={{ fontSize: "1.5rem" }}>{experiment.title}</strong>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>{experiment.description}</p>
            <Link href={experiment.href} style={{ color: "#ffb298", fontWeight: 600 }}>
              {experiment.linkText} →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
