import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { transfer } from "../features/user/userSlice";

const Transfer = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const err = useSelector((state) => state.user.errors.transfer);
  const [value, setValue] = useState({
    sender: loggedUser.email,
    receiver: 0,
    amount: 0,
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(transfer(value));
  };
  const RenderSuccess = () => {
    if (!err) {
      return (
        <div className="alert alert-success " role="alert">
          <div className="row">
            <p>İşlem Başarı ile Gerçekleştirildi.</p>
            <a href={`/user/${loggedUser.id}`}> İşlem Hareketleri</a>
          </div>
        </div>
      );
    }
  };
  return (
    <Container>
      <Form className="m-5 p-5" onSubmit={HandleSubmit}>
        <Container>
          <div className="text-center m-3" style={{ fontSize: "5vw" }}>
            <div>
              <i className="bi bi-wallet2"></i> {loggedUser.money}₺
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formBasicIBAN">
            <Form.Label>Alıcı E-Mail Adresi</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="email"
              name="receiver"
              placeholder="e-mail"
              required
            />
          </Form.Group>
          <Form.Label>Gönderilecek Miktar</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>₺</InputGroup.Text>
            <FormControl
              onChange={handleChange}
              type="number"
              name="amount"
              min="1"
              aria-label="Amount (to the nearest dollar)"
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <div className=" p-3 row align-items-center">
            <div className="col-10 text-center">
              {err ? (
                <div className="alert alert-danger " role="alert">
                  {err}
                </div>
              ) : (
                <div></div>
              )}
              <Button variant="primary" type="submit">
                Gönder
              </Button>
            </div>
          </div>
        </Container>
      </Form>
    </Container>
  );
};
export default Transfer;
