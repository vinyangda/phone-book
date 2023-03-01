import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col lg={2}>
        <Button>Search</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
