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
    <div className="posts">
    
      {posts.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id}>
            <div>
            <h2 >{post.title}</h2>
            <p>{post.body}</p>
            </div>
          
        </Link>
      ))}
    
    </div>
  );
}

export default Posts;
