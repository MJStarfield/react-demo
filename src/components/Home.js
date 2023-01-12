import { Link } from "react-router-dom";
import React, { useState } from "react";
import AddNumber from "./AddNumber";
import Modal from "./Modal";
import catImage from "../cat.png";
import "../styles/Home.css";

const Home = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status === true && (
        <Modal closeModal={() => setStatus(false)}>
          <p>Modal message</p>
          <h1>Test</h1>
        </Modal>
      )}
      <img src={catImage}></img>
      <h1>Home</h1>
      <button onClick={() => setStatus(true)} className="homepage-button">
        Test button
      </button>
    </div>
  );
};

export default Home;
