import React from "react";
import styled from "styled-components";

import HeadArea from "./components/headArea";

class Window extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
       <HeadArea />
      </>
    );
  }
}

export default Window;

const SnowBlock = styled.img`
  display: block;
  position: absolute;
  top: 2rem;
  right: 2rem;
  animation: xuehua 3s linear infinite;

  @keyframes xuehua {
    0% {
        top: 2rem;
        opacity: 1;
    }

    100% {
        top: 4rem;
        opacity: 0;
        transform: rotate(260deg);
    }
  }
`;
