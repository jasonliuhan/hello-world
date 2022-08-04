import React, { Component } from "react";
import styled from "styled-components";

class Home extends Component {
  constructor(props: any) {
    console.log("constructor");
    super(props);
    this.state = {};
  }

  render() {
    console.log("render");
    return <>this is comment page</>;
  }

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate");
  };
}

export default Home;
