import React from "react";
import Sidenav from "../Sidenav";
import { Carousel } from 'react-bootstrap';
import { Typography } from "@mui/material";

const Ticket = () => {
    return ( 
        <>
      <style>{`
        .container-fluid {
          padding-bottom: 100px;
        }
        .heading-section h2 {
          margin-bottom: 20px;
        }
        .heading-borders {
          display: block;
          width: 100px;
          height: 2px;
          background-color: #000;
          margin-bottom: 20px;
        }
        .get-in-touch {
          margin-top: 50px;
        }
        .get-in-touch h2 {
          margin-bottom: 20px;
        }
        .get-in-touch p {
          margin-bottom: 20px;
        }
        .get-in-touch input,
        .get-in-touch textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .get-in-touch button {
          padding: 10px 20px;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}
      </style>
      
          <section className="get-in-touch">
            <div className="container">
              <h2>Book Your Ticket Here</h2>
              
              <form action="your_contact_endpoint" method="POST">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  required
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Your age"
                  required
                />
              
                {/* <input type="radio" id="male" name="gender" value="male">
    
                <input type="radio" id="female" name="gender" value="female"> */}
        
                <p>Gender:</p>
                <label
                htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
              
              <label
                htmlFor="male">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
                
                <input
                type="email"
                name="email"
                placeholder="Your Email"
                  required
                />

                <button type="submit">Purchase Ticket</button>
              </form>
            </div>
        </section>
    </>
       
     );
}
 
export default Ticket;