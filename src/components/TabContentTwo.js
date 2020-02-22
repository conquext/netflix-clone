import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Link } from "react-router-dom";

import imgTv from "../images/tab-tv.png";
import imgTablet from "../images/tab-tablet.png";
import imgMacbook from "../images/tab-macbook.png";
import Button from "./Button";

export default function TabContentTwo() {
  return (
    <TabContentContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere — personalized for you
          </span>
          <Link className="btn" to="/choose-plan">
            <Button>try it now</Button>
          </Link>
        </div>
        <div className="tab-bottom-content">
          {/* TV image container */}
          <div>
            <img src={imgTv} alt="Img" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, playstation, Xbox, Chromecast, Apple Tv, Blue-ray
              players and more
            </p>
          </div>
          {/* Tablet image container */}
          <div>
            <img src={imgTablet} alt="Img" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, playstation, Xbox, Chromecast, Apple Tv, Blue-ray
              players and more
            </p>
          </div>
          {/* TV image container */}
          <div>
            <img src={imgMacbook} alt="Img" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, playstation, Xbox, Chromecast, Apple Tv, Blue-ray
              players and more
            </p>
          </div>
        </div>
      </div>
    </TabContentContainer>
  );
}

//Media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px"
});

// Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan("smDesktop")`
    grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }

  img {
    width: 100%;
  }

  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / -1;
    font-size: 1.5rem;
  `}
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-right: 30%;
  `}
  }

  //Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    text-align: center;
    ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    `}
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;
