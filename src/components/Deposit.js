import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { deposit } from "../features/user/userSlice";
import { useNavigate } from "react-router";

const Deposit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const [value, setValue] = useState({
    email: loggedUser.email,
    amount: 0,
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(deposit(value));
    navigate("/user/" + loggedUser.id);
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
          <Form.Label>Yatırılacak Miktar</Form.Label>
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
              <Button variant="primary" type="submit">
                Yatır
              </Button>
            </div>
          </div>
        </Container>
      </Form>
    </Container>
  );
};
export default Deposit;
