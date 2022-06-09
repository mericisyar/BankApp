import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";

import Header from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import User from "./User";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
      </Routes>
    </div>
  );
}

export default App;
