import React from "react";
import { Routes, Link, Route} from "react-router-dom"
import Posts from "../Cards";
import { Navbar, Nav, Container } from "react-bootstrap";
import style from "./Navigation.module.css"


export default function Navigation () {

  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
              <Link className={style.link} to="/">Cards</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
           <Route path='/' element={<Posts />} />
      </Routes>
    </div>
  );
};


// export default Navigation;
