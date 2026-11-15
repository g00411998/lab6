// NavigationBar.jsx
// A reusable navigation bar built with react-bootstrap.
// Note: App.jsx builds its own navbar, so this component is not used right now.
// To use it, import it in App.jsx and put <NavigationBar /> inside <BrowserRouter>.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
