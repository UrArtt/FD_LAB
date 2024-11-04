import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';


function BasicExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another
action</NavDropdown.Item>
                <NavDropdown.Item
href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated
link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="d-flex flex-column align-items-center my-4">
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="/src/kubica1.png" />
          <Card.Body>
            <Card.Title>Powrut Roberta</Card.Title>
            <Card.Text>EEEEE</Card.Text>
            <Button variant="primary">
              <a href="https://www.youtube.com/watch?v=JEQC7LZDtNA" style={{
color: '#fff', textDecoration: 'none' }}>
                Obrona Le Mans
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Container className="d-flex flex-column align-items-center my-4">
        <Carousel style={{ width: '50%' }}>
          <Carousel.Item>
            <ExampleCarouselImage text="" imgSrc="/src/kubica1.png" />
            <Carousel.Caption>
              <h3>Robert Kubica</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage text="" imgSrc="/src/kubica2.png" />
            <Carousel.Caption>
              <h3>Driver błyskawica</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage text="" imgSrc="/src/kubica3.png" />
            <Carousel.Caption>
              <h3>Zawsze na wyścigach czadu da za trzech</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <footer className="Footer text-center my-4">
        <h3>Pozdrawiam</h3>
      </footer>
    </>
  );
}

export default BasicExample;
