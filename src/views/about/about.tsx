import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "query-string";

class About extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.getData();
  }

  componentDidMount() {
    console.log("componentDidMount");
  }


  render() {
    console.log("render");
    return (
      <>
        <div>about</div>
      </>
    );
  }

  getData = () => {
    console.log("getData");
    // const [searchParams] = useSearchParams();
    // const id = searchParams.get("id");
  };
}

export default About;
