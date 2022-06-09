import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const User = () => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const RenderTransactionHistory = () => {
    return loggedUser.transactions.map((item, index) => {
      if (item.sender === loggedUser.email) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.sender}</td>
            <td>{item.receiver}</td>
            <td className="text-danger">-{item.amount}₺</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.sender}</td>
            <td>{item.receiver}</td>
            <td className="text-success">+{item.amount}₺</td>
          </tr>
        );
      }
    });
  };
  return (
    <Container>
      <div className="row align-items-center ">
        <div className="col-4 text-center">
          {" "}
          <i className="bi bi-person-square" style={{ fontSize: "15vw" }}></i>
        </div>
        <div className="col-8">
          <h4>
            {loggedUser.name} {loggedUser.surname}
          </h4>
          <h4>
            <i className="bi bi-envelope"></i> {loggedUser.email}
          </h4>
          <h4>
            <i className="bi bi-wallet2"></i> {loggedUser.money}₺
          </h4>
        </div>
      </div>
      <div className="row align-items-center text-center">
        <p>İşlem Geçmişi</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Gönderen</th>
              <th>Alıcı</th>
              <th>Miktar</th>
            </tr>
          </thead>
          <tbody>
            <RenderTransactionHistory />
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default User;
