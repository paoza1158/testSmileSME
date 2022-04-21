import './App.css'
import React, { Component } from 'react';
import Header from "./component/Header";
import SubHeader from "./component/SubHeader";
import Monitor from "./component/Monitor";
import Footer from "./component/Footer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "" };
  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Monitor />
        <Footer />
      </div>

    );
  }
}

export default App;
