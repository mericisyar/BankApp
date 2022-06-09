import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";

const SıgnIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const err = useSelector((state) => state.user.errors.login);

  const [value, setValue] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.type]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(value));
  };
  return (
    <Container className="h-100">
      <div className="row align-items-center ">
        <div className="col">
          <Container className="m-3">
            <Form onSubmit={HandleSubmit}>
              <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div>
                  Üye Değil misin? <a href="/signup">Şimdi Kaydol</a>
                </div>
                {err ? (
                  <div className="alert alert-danger " role="alert">
                    {err}
                  </div>
                ) : (
                  <div></div>
                )}
                <Button variant="primary" type="submit">
                  Giriş
                </Button>
              </Container>
            </Form>
          </Container>
        </div>
        <div className="col">
          <Container>
            <div className="text-center">
              <p>
                <strong>MericBank</strong> sayesinde kolayca para çek,yatır ve
                gönder.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};
export default SıgnIn;
