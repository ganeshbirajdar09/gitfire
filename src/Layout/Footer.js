import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="position-fixed bg-info text-center text-white text-uppercase fixed-bottom p-3"
    >
      Ganesh github app with firebase
    </Container>
  );
};

export default Footer;