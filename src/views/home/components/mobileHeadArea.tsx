import React from "react";
import styled from "styled-components";

import MobileHeadImage from "../../../assets/images/home/mobile/head-background.png";
import HeadLogo from "../../../assets/images/home/mobile/head-logo.png";
import HeadButton from "../../../assets/images/home/mobile/head-button.png";
import HeadPhone from "../../../assets/images/home/window/head-phone.png";

class MobileHeadArea extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const jumpOut = (webUrl: any) => {
      window.open(webUrl);
    };
    return (
      <>
        <MobileHeadBlock>
          <PopText>
            <PopLogo src={HeadLogo}></PopLogo>
            <PopInfo>
              <PopTitle>Popshots</PopTitle>
              <PopContent>Share anything, anytime, anywhere.</PopContent>
            </PopInfo>
          </PopText>
          <PopButton src={HeadButton} onClick={jumpOut.bind(this,'https://play.google.com/store/apps/details?id=com.start.pop')} />
          <PopPhone src={HeadPhone} />
          <PopAnnotations>
            <text onClick={jumpOut.bind(this,'https://www.app-privacy-policy.com/live.php?token=yvVQTONdZyKEBQn3zholTUcedrY9SpO5')}>Terms of Service</text>
            <text> & </text>
            <text onClick={jumpOut.bind(this,'http://privacypolicy.popshots.io/')}>Privacy Policy.</text>
            </PopAnnotations>
        </MobileHeadBlock>
      </>
    );
  }
}

export default MobileHeadArea;

const MobileHeadBlock = styled.div`
  width: 7.5rem;
  background-image: url(${MobileHeadImage});
  background-repeat: no-repeat;
  background-size: 7.5rem 18.98rem;
  background-position: 0% 0%;
  min-height: 100vh;
`;

const PopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.4rem;
`;
const PopLogo = styled.img`
  width: 0.64rem;
  height: 0.64rem;
`;

const PopInfo = styled.div`
  margin-left: 0.2rem;
`;
const PopTitle = styled.div`
  font-size: 0.4rem;
  font-weight: bold;
  color: #232028;
  line-height: 0.4rem;
  margin-bottom: 0.03rem;
`;
const PopContent = styled.div`
  font-size: 0.24rem;
  font-weight: 500;
  color: #232028;
  line-height: 0.24rem;
  margin-top: 0.03rem;
`;
const PopButton = styled.img`
  display: block;
  width: 4.64rem;
  height: 1.48rem;
  margin: 0.94rem auto 0 auto;
`;

const PopPhone = styled.img`
  width: 6.3rem;
  height: 10.42rem;
  display: block;
  margin-top: 0.78rem;
  margin-left: 0.2rem;
`;

const PopAnnotations = styled.div`
    font-size: 0.2rem;
    font-weight: 400;
    color: #232028;
    line-height: 0.2rem;
    text-align: center;
    padding: 0.34rem 0 0.56rem 0;
`;
