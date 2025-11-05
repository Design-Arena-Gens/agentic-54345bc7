import Link from "next/link";
import Image from "next/image";
import { featuredPosts, latestPosts } from "../data/posts";

export default function HomePage() {
  return (
    <div>
      <section
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          paddingBottom: "3.5rem"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(255, 127, 80, 0.14)",
              borderRadius: "999px",
              padding: "0.4rem 0.85rem",
              width: "fit-content",
              color: "#ffb298",
              fontWeight: 600
            }}
          >
            <span
              style={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "999px",
                background: "#ff7f50"
              }}
            />
            A calmer internet begins here
          </span>
          <h1
            style={{
              fontSize: "3.25rem",
              lineHeight: 1.03,
              letterSpacing: "-0.04em",
              margin: 0
            }}
          >
            Essays, experiments, and tools for rested makers.
          </h1>
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: "1.1rem",
              maxWidth: "32rem"
            }}
          >
            NapBlog charts a course toward sustainable creativity. Explore mindful workflows,
            humane tech, and ideas that make space for deep rest.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/posts"
              style={{
                padding: "0.8rem 1.4rem",
                borderRadius: "999px",
                fontWeight: 600,
                background: "linear-gradient(135deg, #ff7f50, #ffb298)",
                color: "#0d0f12",
                boxShadow: "0 18px 45px rgba(255, 127, 80, 0.25)"
              }}
            >
              Read the latest
            </Link>
            <Link
              href="#newsletter"
              style={{
                padding: "0.8rem 1.4rem",
                borderRadius: "999px",
                fontWeight: 600,
                border: "1px solid var(--border)",
                color: "var(--muted)"
              }}
            >
              Join the newsletter
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            minHeight: "320px",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            background:
              "radial-gradient(circle at 25% 20%, rgba(255, 127, 80, 0.3), rgba(27, 31, 36, 0.95))",
            padding: "2.5rem"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {featuredPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  background: "rgba(13, 15, 18, 0.65)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem"
                }}
              >
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                  {post.category}
                </span>
                <strong style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>{post.title}</strong>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.55)" }}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="container"
        style={{
          paddingBottom: "4rem"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Latest highlights</h2>
          <Link href="/posts" style={{ color: "#ffb298" }}>
            Browse archive →
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem"
          }}
        >
          {latestPosts.slice(0, 6).map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              style={{
                borderRadius: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                background: "rgba(13, 15, 18, 0.75)",
                backdropFilter: "blur(12px)"
              }}
            >
              <Image
                src={post.hero}
                alt=""
                width={640}
                height={360}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "1rem"
                }}
              />
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                {post.readingTime} • {post.category}
              </span>
              <strong style={{ fontSize: "1.2rem" }}>{post.title}</strong>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, rgba(255, 127, 80, 0.12), rgba(27, 31, 36, 0.9))",
          padding: "4rem 0"
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "2.4rem", margin: 0 }}>The NapBlog Manifesto</h2>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              We believe every creative deserves a calm corner on the internet. No growth hacks, no
              hustle panic. Just thoughtful systems, unhurried craft, and breathing room.
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gap: "0.75rem"
              }}
            >
              {[
                "Design workflows that honor your nervous system.",
                "Ship tools that help teams move slower and smarter.",
                "Celebrate intentional breaks as fuel for breakthroughs."
              ].map((value) => (
                <li
                  key={value}
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "999px",
                      background: "#ff7f50",
                      marginTop: "0.5rem"
                    }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.65)" }}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            id="newsletter"
            style={{
              borderRadius: "1.75rem",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "2.5rem",
              background: "rgba(13, 15, 18, 0.8)",
              boxShadow: "0 30px 80px rgba(12, 14, 17, 0.45)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem"
            }}
          >
            <strong style={{ fontSize: "1.5rem" }}>Stay in the nap loop</strong>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>
              Two thoughtful emails per month. Highlights, frameworks, and field notes you can apply
              in under ten minutes.
            </p>
            <form
              action="/api/newsletter"
              method="post"
              style={{ display: "grid", gap: "0.75rem" }}
              data-nap-newsletter
            >
              <label htmlFor="email" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}>
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                style={{
                  padding: "0.9rem 1rem",
                  borderRadius: "0.9rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(12, 14, 17, 0.85)",
                  color: "var(--foreground)",
                  fontSize: "1rem"
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.85rem 1rem",
                  borderRadius: "0.9rem",
                  border: "none",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #ff7f50, #ffb298)",
                  color: "#0d0f12",
                  cursor: "pointer"
                }}
              >
                Send me slow signals
              </button>
              <small style={{ color: "rgba(255,255,255,0.45)" }}>
                We respect your rest. Unsubscribe anytime.
              </small>
            </form>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "4rem 0 6rem" }}>
        <h2 style={{ fontSize: "2rem" }}>Toolbox for mindful makers</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {[
            {
              title: "Rested Launch Planner",
              description:
                "Plan releases around energy patterns while keeping stakeholders aligned and calm.",
              cta: "Download template",
              href: "/lab"
            },
            {
              title: "Async Rituals Playbook",
              description:
                "Build team rhythms that protect deep work with lightweight rituals and clear signals.",
              cta: "Explore guide",
              href: "/lab"
            },
            {
              title: "Mindful Metrics Dashboard",
              description:
                "Track leading indicators of burnout and creative flow alongside product metrics.",
              cta: "See live demo",
              href: "/lab"
            }
          ].map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              style={{
                borderRadius: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "1.75rem",
                background: "rgba(13, 15, 18, 0.7)",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem"
              }}
            >
              <strong style={{ fontSize: "1.35rem" }}>{tool.title}</strong>
              <p style={{ margin: 0, color: "var(--muted)" }}>{tool.description}</p>
              <span style={{ color: "#ffb298", fontWeight: 600 }}>{tool.cta} →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
