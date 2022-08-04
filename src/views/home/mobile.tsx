import React from "react";
import styled from "styled-components";


import MobileHeadArea from "./components/mobileHeadArea";


class Mobile extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <MobileHeadArea />
      </>
    );
  }
}

export default Mobile;
