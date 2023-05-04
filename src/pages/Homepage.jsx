import React from "react";
import Template from "../components/Template";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

function Homepage() {
  return (
    <div>
      <Header/>
      <Template/>
      <HomeBody />
    </div>
  );
}

export default Homepage;
