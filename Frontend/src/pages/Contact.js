import React from "react";
import Sidenav from "../Sidenav";
import { Carousel } from 'react-bootstrap';
import Typography from '@mui/material/Typography';


const Contact = () => {
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
      `}</style>

<h1><u>Feel Free to Contact us regarding more information that you need</u></h1>
        
          
          <section className="get-in-touch">
            <div className="container">
              <h2><u>Get in Touch</u></h2>
              
              <form action="your_contact_endpoint" method="post">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                >
                </textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
      

    </>
        
     );
}
 
export default Contact;