
import { Carousel, Container, Button } from "react-bootstrap";
import shirt from "../Images/gearshirt.png"
import welder from "../Images/welder.png"
import motorcycle from "../Images/motorcycle.png"
import "./Home.css";


function Home() {
    return (
      <div className="Home">
     <div className="home-details">
      <Container className="home-container">
      {/* <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shirt}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={welder}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={motorcycle}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
<Carousel fade>
  <Carousel.Item>
    <img
      className="faders"
      src={welder}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
   className="faders"
      src={motorcycle}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
   className="faders"
      src={welder}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
      <Button className="shop-button" href="/shirts" variant="dark">
 Login
      </Button>
    </div>

<div className="bottom-div"></div>
<div className="bottom-div-two">


</div>


      </div>
    );
  }
  
  export default Home;