const posts = [
  {
    title: "My First Blog Post",
    date: "April 2026",
    excerpt: "This is my first test blog post using Next.js and Vercel.",
  },
  {
    title: "Why I Started Blogging",
    date: "April 2026",
    excerpt: "A simple blog can help me share ideas, tutorials, and updates.",
  },
  {
    title: "Next.js Test Project",
    date: "April 2026",
    excerpt: "This page is deployed from GitHub to Vercel.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Personal Blog</p>
        <h1>Welcome to My Blog</h1>
        <p className="subtitle">
          A simple test blog website built with Next.js.
        </p>
      </header>

      <section className="posts">
        {posts.map((post) => (
          <article className="card" key={post.title}>
            <p className="date">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button>Read More</button>
          </article>
        ))}
      </section>
    </main>
  );
}
