import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  //   const getName = (e) => {
  //     setName(e.target.value);
  //   };
  //이렇게 만드는게 정석(?) 처럼 보이지만 조금 더 깔끔하게 만들면

  return (
    <Form onSubmit={addContact}>
      <Form.Group
        className="mb-3"
        controlId="formName"
        onChange={(e) => setName(e.target.value)}
      >
        {/* 이런식으로 만들어 줄수 있다 */}
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formContact"
        onChange={(e) => setPhoneNumber(e.target.value)}
      >
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
