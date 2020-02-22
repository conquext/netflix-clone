import React, { Component } from "react";
import Header from "../components/Header";
import TabComponent from "../components/TabComponents";
import Footer from "../components/Footer";

export default class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabComponent />
        <Footer />
      </div>
    );
  }
}
