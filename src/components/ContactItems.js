import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactItems = ({ item }) => {
  return (
    <Row>
      <Col>
        <img
          width={50}
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
        />
      </Col>
      <Col>
        <div>{item.name}</div>
        <div>{item.contact}</div>
      </Col>
    </Row>
  );
};

export default ContactItems;
