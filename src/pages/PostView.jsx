import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "./PostContext";
import Card from "react-bootstrap/Card";

function PostView() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found</p>;

  return (
    <Card className="p-3">
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.content}</Card.Text>
    </Card>
  );
}

export default PostView;
