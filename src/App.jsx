import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import PostEditor from "./pages/PostEditor";
import PostView from "./pages/PostView";
import { PostProvider } from "./pages/PostProvider";

function App() {
  return (
    <PostProvider>
      <Router basename="/simple-react-blog">
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              React-Blog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/post-editor">
                  New Post
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-editor" element={<PostEditor />} />
            <Route path="/edit/:id" element={<PostEditor />} />
            <Route path="/post/:id" element={<PostView />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
