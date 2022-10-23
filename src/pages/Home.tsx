import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Nav } from "react-bootstrap";
import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export function Home() {
  return (
    <Container>
      <Row>
        <h1>Home</h1>
        <Col className="page-hero d-flex align-items-center justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../public/imgs/2jpg.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 style={{color:"white"}}>BUY our goods</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../public/imgs/2jpg.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
              <h3 style={{color:"white"}}>BUY our goods</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../public/imgs/2jpg.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
              <h3 style={{color:"white"}}>BUY our goods</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <Button variant="primary" size="lg">
          <Nav.Link to="/store" as={NavLink}>
            Go to Store <FiChevronsRight />
          </Nav.Link>
        </Button>
      </div>
    </Container>
  );
}

export default Home;
