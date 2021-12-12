import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id}>
          <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Posts;
