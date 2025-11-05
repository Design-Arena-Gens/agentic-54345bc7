export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBottom: "6rem", maxWidth: "760px" }}>
      <header style={{ paddingBottom: "2.5rem" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>About NapBlog</span>
        <h1 style={{ fontSize: "3rem", margin: "0.75rem 0" }}>A haven for rested makers.</h1>
        <p style={{ color: "var(--muted)" }}>
          NapBlog was born from the realization that our best work arrives after pauses. We publish
          essays, playbooks, and tools for people who want to build ambitious things without burning
          bright or burning out.
        </p>
      </header>

      <section className="prose">
        <p>
          I&apos;m Riley — a product strategist, systems coach, and recovering hustle addict. After a
          decade helping startups grow faster, I noticed that the most sustainable teams honored a
          simple truth: rested people build better software.
        </p>
        <p>
          NapBlog documents the experiments that followed. From designing calm launch rituals to
          prototyping humane metrics dashboards, every project asks the same question:{" "}
          <em>what if rest led the roadmap?</em>
        </p>
        <h2>Our guiding ideas</h2>
        <ul>
          <li>Rest isn&apos;t the reward. It&apos;s the rehearsal.</li>
          <li>The right tool at the wrong pace is still the wrong tool.</li>
          <li>Creative teams deserve calm defaults, generous documentation, and honest metrics.</li>
        </ul>
        <h2>Ways to collaborate</h2>
        <p>
          NapBlog offers calm consulting engagements, async workshops, and bespoke templates for
          teams trying to grow sanely. Reach out if you want help designing rested rituals,
          developing mindful playbooks, or building software that respects human energy.
        </p>
        <p>
          Ready to exhale? Join the newsletter or send a note to{" "}
          <a href="mailto:rest@napblog.com" style={{ color: "#ffb298" }}>
            rest@napblog.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
