import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className=' footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Majalengka food delivery</h5>
              <p>siap mengantarkan makanan sampai depan pintu</p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Waktu pengiriman</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Senin - Jumat</span>
                <p>08:00am - 08:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>sabtu-Minggu</span>
                <p>09.00am - 10.00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Alamat</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <p>Lokasi: Jalan Pahlawan, 01, Majalengka</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Hubungi Kami</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <p>Handphone: 01712345678</p>
              </ListGroupItem>

              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <p>Email: majalengkafooddelivery@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='12' md='12'>
            <p className='copyright__text'>
              Copyright - 2022, Yayat Nurhidayat - DTS KOMINFO 2022. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
