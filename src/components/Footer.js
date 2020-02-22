import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

export default class Footer extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions? <Link to="/">Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">Ways to Watch</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
            <li>
              <Link to="/">Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notices</Link>
            </li>
          </ul>
          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <div style={{ display: "flex" }}>
              <Icon icon={iosWorld} size={20} />
              &nbsp;&nbsp;English&nbsp;&nbsp;
              <Icon icon={arrowSortedDown} />
              {/* Toggle Language Content */}
            </div>
            {this.state.langContent && (
              <div className="lang-toggle">
                <ul>
                  <li>English</li>
                </ul>
                <ul>
                  <li>French</li>
                </ul>
              </div>
            )}
            <br />
          </div>
        </div>
        <span
          style={{
            marginLeft: "15%",
            fontSize: "0.9rem",
            marginTop: "2rem",
            display: `${this.state.langContent ? "none" : "block"}`
          }}
        >
          Netflix Canada
        </span>
      </FooterContainer>
    );
  }
}

// Media
const customMedia = generateMedia({
  tablet: "740px"
});

// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(2, 1fr);
    `}
  }
  ul li {
    list-style: none;
    line-height: 2.5;
  }
  a {
    color: #999;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }
  // Toggle Language Content
  .lang-toggle {
    // margin-left: -90%;
    grid-column: 1 / 3;
    margin-top: 1rem;
    // position: absolute;
  }
  .lang-toggle ul {
    // background: var(--main-deep-dark);
    width: 6.125rem;
    line-height: 0;
    padding: 0.1rem;
    margin-top: 0.5rem;
    border-bottom: 0.5px solid #333;
    text-align: right;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
