import React, { Component } from "react";
import styled from "styled-components";

import useJudgeTerminal from "../../hooks/useJudgeTerminal";

import Window from "./window"
import Mobile from "./mobile"

class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("render");
    const isMobile = useJudgeTerminal()
    return (
      isMobile?<Mobile />:<Window />
    )
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
