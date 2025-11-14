import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PostEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, addPost, updatePost } = useContext(PostContext);

  const editing = Boolean(id);
  const existingPost = editing ? posts.find((p) => p.id === Number(id)) : null;

  const [title, setTitle] = useState(existingPost?.title || "");
  const [content, setContent] = useState(existingPost?.content || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (editing) {
      updatePost(Number(id), { id: Number(id), title, content });
    } else {
      const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title,
        content,
      };
      addPost(newPost);
    }

    navigate("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter post body"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {editing ? "Save Changes" : "Create Post"}
      </Button>
    </Form>
  );
}

export default PostEditor;
