import Image from "next/image.js";
const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Ha ocurrido un error al cargar los comentarios');
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul style={{ color: "gray", fontSize: "10px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
            <img alt={comment.name}src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${comment.email}`}  />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
