import Link from "next/link.js";
const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      //{ cache: 'no-store' }
      next: {//incremental state generator
        revalidate: 60,
      },
    }).then((res) => res.json());
  };

export default async function Post( {children, params} ) {
    const {id} = params;
    const post = await fetchSinglePost(id); 
    return <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/coments`}>Ver Comentarios</Link>
        {children}
    </article>
}