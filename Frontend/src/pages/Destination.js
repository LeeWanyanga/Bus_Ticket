import React from "react";
import Sidenav from "../Sidenav";
import { Carousel } from 'react-bootstrap';
import { Divider } from "@mui/material";
import destination1m from '../Images/destination1.1.jpg'
import destination2m from '../Images/destination1.2.jpg'
import destination3m from '../Images/destination1.3.jpg'
import destination1k from '../Images/destination2.1.jpg'
import destination2k from '../Images/destination2.2.jpg'
import destination3k from '../Images/destination2.3.jpg'
  


const Destination = () => {
    return ( 
            <div style={{ fontFamily: 'Arial', padding: '20px' }}>
              <h2 style={{ fontSize: '2rem', textAlign: 'center', marginLeft: '50px' }}> Destinations</h2>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination1m}
                    // Place photos here
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Mombasa</h3>
                    <p>Take a swim in the sandy coastal beaches.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination2m}
                                // Place photos here
        
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Mombasa</h3>
                    <p>Enjoy yourself by taking a walk in the active town center.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination3m}
                                // Place photos here
        
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Mombasa</h3>
                    <p>Visit Historical sites such as Fort Jesus.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <Divider />
              <Divider />


              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination3k}
                    // Place photos here
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Kisumu</h3>
                    <p>Welcome to Kisumu City.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination2k}
                                // Place photos here
        
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Kisumu</h3>
                    <p>Enjoy the Lakeside City near Lake Victoria.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={destination1k}
                                // Place photos here
        
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Kisumu</h3>
                    <p>Tour the rapidly growing city and enjoy their cuisines.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    // Place photos here
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                                // Place photos here
        
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                                // Place photos here
        
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
 
); 
   
};
 
export default Destination;