import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { createUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const SıgnUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state) => state.user.errors.signup);
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(value));
  };
  return (
    <Container className="h-100">
      <div className="row align-items-center ">
        <div className="col">
          <Container>
            <div className="text-center">
              <p>Hemen Kayıt Ol ve Hizmetlerimizden Yararlanmaya Başla</p>
              <p><strong>1000₺ HOŞGELDİN BONUSU</strong></p>
            </div>
          </Container>
        </div>
        <div className="col">
          <Container className="m-3">
            <Form onSubmit={HandleSubmit}>
              <Container>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Ad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adınızı Girin"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSurname">
                  <Form.Label>Soyad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Soyadınızı Girin"
                    name="surname"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email adresi</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Girin"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifre"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                  <Form.Label>Şifre-Tekrar</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifre-Tekrar"
                    name="rePassword"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div>
                  Zaten Üye misin ? <a href="/login">Giriş Yap</a>
                </div>
                {err ? (
                  <div className="alert alert-danger " role="alert">
                    {err}
                  </div>
                ) : (
                  <div></div>
                )}
                <Button variant="primary" type="submit">
                  Kaydol
                </Button>
              </Container>
            </Form>
          </Container>
        </div>
      </div>
    </Container>
  );
};
export default SıgnUp;
