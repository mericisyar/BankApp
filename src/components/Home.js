import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import transfer from "../img/transfer.png";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";
const Home = () => {
  const users = useSelector((state) => state.user);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  console.log(loggedUser);
  console.log(users);
  return (
    <Container className="h-100">
      <div
        className="row  align-items-center h-100  m-5 "
        style={{ marginTop: "20%" }}
      >
        <div className="col ">
          <div className="row text-center" style={{ fontSize: "4vw" }}>
            <p>Paranız Emin Ellerde</p>
            <p className="text-secondary">Yani Benim Cebimde</p>
          </div>
        </div>

        <div className="text-center " style={{ marginTop: "10%" }}>
          <a href="/signup" className="btn btn-dark btn-small w-25">
            Başla
          </a>
        </div>
      </div>
      <div
        className="row bg-primary text-center text-light"
        style={{
          marginTop: "15%",
          marginBottom: "20%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <div className="col-4 ">
          <i className="bi bi-safe2" style={{ fontSize: "8vh" }}></i>
          <p>Üst Seviye Güvenlik</p>
        </div>
        <div className="col-4">
          <i className="bi bi-arrow-left-right" style={{ fontSize: "8vh" }}></i>
          <p>Hızlı Para Transferi</p>
        </div>
        <div className="col-4">
          <i className="bi bi-bullseye" style={{ fontSize: "8vh" }}></i>
          <p>Hedefe Yönelik Kolay Kullanım</p>
        </div>
      </div>
      <div
        className="row text-center "
        style={{ fontSize: "3vw", marginTop: "20%", marginBottom: "20%" }}
      >
        <div className="col-6">
          <p className="text-secondary">
            Paranızı transfer etmek hiç bu kadar kolay olmamıştı
          </p>
        </div>
        <div className="col-6">
          <Image src={transfer} fluid />
        </div>
      </div>
      <Footer />
    </Container>
  );
};
export default Home;
