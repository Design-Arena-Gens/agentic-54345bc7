import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, latestPosts } from "../../../data/posts";
import type { Metadata } from "next";

type PostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return latestPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "NapBlog — Post not found"
    };
  }

  return {
    title: `${post.title} • NapBlog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.hero]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.hero]
    }
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = latestPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .filter((candidate) => candidate.category === post.category)
    .slice(0, 2);

  return (
    <article>
      <div
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(255, 127, 80, 0.18), transparent 60%)"
        }}
      >
        <div className="container" style={{ paddingBottom: "3rem" }}>
          <Link href="/posts" style={{ color: "#ffb298" }}>
            ← Back to all posts
          </Link>
          <header
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2.5rem 0 2rem"
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              {post.category} • {post.readingTime}
            </span>
            <h1 style={{ fontSize: "3rem", margin: 0, lineHeight: 1.05 }}>{post.title}</h1>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              Published {new Date(post.publishedAt).toLocaleDateString(undefined, { dateStyle: "medium" })}
              {post.updatedAt
                ? ` • Updated ${new Date(post.updatedAt).toLocaleDateString(undefined, {
                    dateStyle: "medium"
                  })}`
                : ""}
            </span>
          </header>
        </div>
      </div>

      <div className="container" style={{ maxWidth: "780px" }}>
        <Image
          src={post.hero}
          alt=""
          width={1280}
          height={720}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "2.5rem"
          }}
        />

        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <section
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.5rem",
            padding: "2rem",
            margin: "3.5rem 0",
            background: "rgba(12, 14, 17, 0.75)"
          }}
        >
          <h3 style={{ marginTop: 0 }}>NapBlog Dispatch</h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            One thoughtful email twice a month. Rest experiments, deep-dive essays, and templates to
            help your team recharge without losing momentum.
          </p>
          <form action="/api/newsletter" method="post" style={{ display: "grid", gap: "0.75rem" }}>
            <label htmlFor="subscribe-email" style={{ color: "rgba(255,255,255,0.5)" }}>
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(13, 15, 18, 0.85)",
                color: "var(--foreground)"
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
              Join the calm list
            </button>
          </form>
        </section>

        {related.length > 0 && (
          <section style={{ marginBottom: "4rem" }}>
            <h3 style={{ fontSize: "1.75rem" }}>More in {post.category}</h3>
            <div
              style={{
                display: "grid",
                gap: "1.5rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
              }}
            >
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/posts/${item.slug}`}
                  style={{
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "1.5rem",
                    background: "rgba(12,14,17,0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                    {item.readingTime}
                  </span>
                  <strong>{item.title}</strong>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>{item.excerpt}</p>
                  <span style={{ color: "#ffb298" }}>Keep reading →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
