import React, { FC } from "react";
import styled from "styled-components";

import Circles from "../../../assets/images/home/window/head-background.png";
import HeadLogo from "../../../assets/images/home/window/head-logo.png";
import HeadButton from "../../../assets/images/home/window/head-button.png";

import HeadIcon1 from "../../../assets/images/home/window/head-icon1.png";
import HeadPhone from "../../../assets/images/home/window/head-phone.png";

const HeadArea: React.FC = () => {
  const jumpOut = (webUrl: any) => {
    console.log(webUrl);
    window.open(webUrl);
  };
  return (
    <>
      <Block>
        <FlexCenter>
          <LeftBlock>
            <PopText>
              <PopLogo src={HeadLogo}></PopLogo>
              <PopInfo>
                <PopTitle>Popshots</PopTitle>
                <PopContent>Share anything, anytime, anywhere.</PopContent>
              </PopInfo>
            </PopText>
            <PopButton
              onClick={jumpOut.bind(
                this,
                "https://play.google.com/store/apps/details?id=com.start.pop"
              )}
              src={HeadButton}
            />
          </LeftBlock>
          <RightBlock>
            <PopIcon1 src={HeadIcon1} />
            <PopPhone src={HeadPhone} />
            <PopAnnotations>
              <text
                onClick={jumpOut.bind(
                  this,
                  "https://www.app-privacy-policy.com/live.php?token=yvVQTONdZyKEBQn3zholTUcedrY9SpO5"
                )}
              >
                Terms of Service
              </text>
              <span> & </span>
              <text
                onClick={jumpOut.bind(
                  this,
                  "http://privacypolicy.popshots.io/"
                )}
              >
                Privacy Policy.
              </text>
            </PopAnnotations>
          </RightBlock>
        </FlexCenter>
      </Block>
    </>
  );
};

export default HeadArea;

const Block = styled.div`
  background: #ecf2f6 url(${Circles});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 0 3rem;
  height: 8.14rem;
  cursor: default;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const LeftBlock = styled.div`
  width: 50%;
`;

const PopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const PopLogo = styled.img`
  width: 0.6rem;
  height: 0.6rem;
`;

const PopInfo = styled.div`
  margin-left: 0.2rem;
`;
const PopTitle = styled.div`
  font-size: 0.32rem;
  font-weight: bold;
  color: #232028;
  line-height: 0.32rem;
  margin-bottom: 0.04rem;
`;
const PopContent = styled.div`
  font-size: 0.2rem;
  font-weight: 400;
  color: #232028;
  line-height: 0.2rem;
  margin-top: 0.04rem;
`;
const PopButton = styled.img`
  width: 2.67rem;
  height: 0.52rem;
  margin-top: 1.05rem;
  margin-left: 0.65rem;
  cursor: pointer;
`;

const RightBlock = styled.div`
  width: 50%;
`;

const PopIcon1 = styled.img`
  width: 0.51rem;
  height: 0.54rem;
  display: block;
  margin-top: 0.49rem;
  margin-left: 2.5rem;
`;

const PopPhone = styled.img`
  width: 3.17rem;
  height: 5.64rem;
  display: block;
  margin-top: 0.78rem;
`;
const PopAnnotations = styled.div`
  font-size: 0.1rem;
  font-weight: 400;
  color: #232028;
  line-height: 0.1rem;
  margin-left: 1.06rem;
  margin-top: 0.35rem;
  text{
    text-decoration:underline;
  }
`;
