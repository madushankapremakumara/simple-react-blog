import { useContext } from "react";
import { PostContext } from "./PostContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home() {
  const { posts } = useContext(PostContext);

  return (
    <>
      <h2 className="mb-3">All Posts</h2>

      {posts.map((item) => (
        <Card className="mb-3" key={item.id} style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>

            <Card.Text>
              {item.content.length > 100 ? (
                <>
                  {item.content.substring(0, 100)}...
                  <Link to={`/post/${item.id}`} className="ms-2">
                    Read more
                  </Link>
                </>
              ) : (
                item.content
              )}
            </Card.Text>

            <Button as={Link} to={`/edit/${item.id}`} variant="secondary">
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Home;
