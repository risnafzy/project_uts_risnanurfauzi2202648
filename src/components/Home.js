import React from "react";
import { Col } from "react-bootstrap";
import Type from "./Type";
import './css/Landingpage.css'

const Home = () => {
  return (
    <section className="home_container bg">
      <Col md={7} className="home-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hello!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name">
          I'M
          <strong className="main-name"> RISNA NURFAUZI</strong>
        </h1>

        <div style={{ padding: 40, textAlign: "left" }}>
          <Type />
        </div>
      </Col>
      <div>
        <img src="./assets/img/risna6.jpeg" alt="" class="home_img"></img>
      </div>
    </section>
  )
}

export default Home;