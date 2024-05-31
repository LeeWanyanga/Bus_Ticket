import React from 'react';
import Sidenav from '../Sidenav';
import { Carousel } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import buswelcome from '/Users/ADMIN/Desktop/bus ticket/Busticketsystem/Frontend/src/pages/Images/buswelcome.jpg'
import buswelcome2 from '/Users/ADMIN/Desktop/bus ticket/Busticketsystem/Frontend/src/pages/Images/buswelcome2.jpg'
import buswelcome3 from '/Users/ADMIN/Desktop/bus ticket/Busticketsystem/Frontend/src/pages/Images/buswelcome3.jpg'
import buswelcome4 from '/Users/ADMIN/Desktop/bus ticket/Busticketsystem/Frontend/src/pages/Images/buswelcome4.jpg'


const WelcomeHome = () => {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginLeft: '50px' }}> Welcome to Easy Going 101</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={buswelcome2}
            // Place photos here
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Travel with us</h3>
            <p>Get ready to visit prestigious locations with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={buswelcome3}
                        // Place photos here
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Get comfort while on the go</h3>
            <p>Sit Back and relax as we take you to your destination today.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={buswelcome4}
                        // Place photos here

            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Ready to Go! Book with us!</h3>
            <p>Head over to the Navigation Bar to Book Your Ticket Today.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WelcomeHome;