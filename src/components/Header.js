import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { generateMedia } from "styled-media-query";
import Button from "./Button";

import logo from "../svg/logo.svg";

export default class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Link to="/">
            <Logo className="logo" src={logo} />
          </Link>
          <NavLink to="/login" className="btn signin-btn">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>See what's next</Title>
          <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME</SubTitle>
          <Link to="/choose-plan">
            <Button className="main-offer-btn" primary>
              try it now{" "}
              <Icon className="icon" icon={ic_keyboard_arrow_right} size={37} />
            </Button>
          </Link>
        </div>
      </HeaderComponent>
    );
  }
}

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

// Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
    left: 30%;
  `}
`;

// Header Container
const HeaderComponent = styled.header`
  .icon svg {
    vertical-align: bottom !important;
    margin-left: 1.5rem;
    ${customMedia.lessThan("smTablet")`
    display: none !important;
  `}
  }

  .signin-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: #d30913;
    }
    ${customMedia.lessThan("smTablet")`
      margin-top: 1.25rem;
      right: 5%;
    `}
  }

  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }

  // Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan("smTablet")`
      width: 90%;
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}
  

      // Lg Main
    .main-offer-btn {
      line-height: 1.7em;
      ${customMedia.lessThan("lgDesktop")`
      // line-height: 2.4em;
      margin: 0 33%;
      font-size: 1.5rem;
    `}
    
      ${customMedia.lessThan("mdDesktop")`
      margin: 0 25%;
      font-size: 1.2rem;
      line-height: 2em;
      `}
    
      ${customMedia.lessThan("tablet")`
        margin: 0 20%;
        font-size: 1rem;
      `}

      ${customMedia.lessThan("smTablet")`
        margin: 0 20%;
        font-size: 1rem;
        line-height: 0.8em;
      `}

    }
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  ${customMedia.lessThan("tablet")`
    font-size: 2.2rem;
  `}
`;

// Sub Title
const SubTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan("smTablet")`
   font-size: 1rem;
   margin: 0;
  `}
`;
