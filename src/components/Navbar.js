import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const HandleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <i className="bi bi-bank text-warning"></i> MericBank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {loggedUser ? (
              <>
                <Nav className="me-auto">
                  <Nav.Link href="/transfer" eventKey="4.2">
                    <i className="bi bi-arrow-left-right"></i> Havale
                  </Nav.Link>
                  <Nav.Link href="/deposit" eventKey="4.2">
                    <i className="bi bi-cash"></i> Para Yatır
                  </Nav.Link>
                  <Nav.Link href="/withdraw" eventKey="4.2">
                    <i className="bi bi-cash"></i> Para Çek
                  </Nav.Link>
                  <Nav.Link />
                </Nav>
                <Nav>
                  <Nav.Link href={`/user/${loggedUser.id}`} eventKey="4.1">
                    <i className="bi bi-person"></i> Profil
                  </Nav.Link>
                  <Nav.Link onClick={HandleLogout} eventKey="4.3">
                    <i className="bi bi-box-arrow-right"></i> Çıkış
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/login">Giriş</Nav.Link>
                  <Nav.Link href="/signup">Kayıt Ol</Nav.Link>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default Header;
