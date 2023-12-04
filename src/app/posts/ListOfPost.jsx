import { LikeButton } from "./LikeButton.jsx";
import Link from "next/link.js";
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    //{ cache: 'no-store' }
    next: {
      //incremental state generator
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ));
}
