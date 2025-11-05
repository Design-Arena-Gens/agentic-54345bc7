import Link from "next/link";
import Image from "next/image";
import { latestPosts } from "../../data/posts";

export default function PostsPage() {
  return (
    <div className="container" style={{ paddingBottom: "6rem" }}>
      <header style={{ paddingBottom: "2.5rem" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "0.8rem" }}>
          NapBlog Library
        </span>
        <h1 style={{ fontSize: "3rem", margin: "0.6rem 0" }}>An archive of unhurried essays.</h1>
        <p style={{ color: "var(--muted)", maxWidth: "38rem" }}>
          Deep dives into rested leadership, systems design, and the art of building with enough
          time to breathe. Bookmark what resonates, then take a nap before acting on it.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}
      >
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            style={{
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "1.5rem",
              background: "rgba(12, 14, 17, 0.75)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.2s ease"
            }}
          >
            <Image
              src={post.hero}
              alt=""
              width={640}
              height={360}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                {post.readingTime} • {post.category}
              </span>
              <strong style={{ fontSize: "1.3rem" }}>{post.title}</strong>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>{post.excerpt}</p>
              <span style={{ color: "#ffb298", fontWeight: 600 }}>Read essay →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
