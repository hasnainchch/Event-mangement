
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
  
  <footer >
      <Container  className='  pt-5 bg-dark  p-sticky' id='footer' > 
        <Row className='text-white'>
          <Col md={4}>
            <h5>About</h5>
            <p>we are here to leading provider of corporate event services, specializing in offering creative, customized solutions.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li>Corporate Events</li>
              <li>Audio Visual Rental</li>
          
              <li>Entertainment</li>
              <li>Weddings</li>
              
            </ul>
          </Col>
          <Col md={4}>
            <h5>Get in Touch</h5>
            <p>Warehouse 6, Street 29, Industrial Area 5, pakistan</p>
            <p>+923405605662</p>
            <p>hasnainchch@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
         
  </>
   
   
  );
};

export default Footer