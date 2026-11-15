// App.jsx
// Main component: shows the navigation bar and uses React Router to pick
// which page to show based on the URL.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles used by react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page components
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';

function App() {
  return (
    // BrowserRouter lets the app show different pages for different URLs
    <BrowserRouter>
      {/* Navigation bar: each link goes to one of the routes below */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/header">Header</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes: shows the component whose path matches the current URL */}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        {/* Read gets the movies from the server (GET) */}
        <Route path="/read" element={<Read />} />
        {/* Create sends a new movie to the server (POST) */}
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
