import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactItems = () => {
  return (
    <Row>
      <Col>
        <img
          width={50}
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
        />
      </Col>
      <Col>
        <div>양다빈 </div>
        <div>01025874123</div>
      </Col>
    </Row>
  );
};

export default ContactItems;
