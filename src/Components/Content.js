import React from "react";
import "./Content.css";
import Rating from "./Rating";
import Button from "@material-ui/core/Button";
import Card from "./Card";

function Content() {
  return (
    <div className="content">
      <div className="content-top">
        <img src="Group 114.png" alt="" />
        <div className="content-top-text">
          <div className="content-text1">Welcome to Nature</div>
          <div className="content-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="content-cards">
        <img className="content-card-img" src="Group 207.png" alt="" />
        <img className="content-card-img" src="Group 205.png" alt="" />
        <img className="content-card-img" src="Group 207.png" alt="" />
        <img className="content-card-img" src="Group 207.png" alt="" />
      </div>
      <div className="content-mid">
        <div className="content-text1">Proudly presented by</div>
        <div className="content-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="content-mid-images">
          <img className="content-mid-img" src="Group 39.png" alt="" />
          <img className="content-mid-img" src="Group 64.png" alt="" />
          <img className="content-mid-img" src="Group 55.png" alt="" />
          <img className="content-mid-img" src="Group 64.png" alt="" />
          <img className="content-mid-img" src="Group 39.png" alt="" />
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot1"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <img className="invert" src="Group 86.png" alt="" />
            </div>
            <div>
              <img className="jane" src="Group 1.png" alt="" />
            </div>
            <div className="jane-text">Jane Doe</div>
            <Rating />
            <div style={{ lineHeight: "2rem" }}>
              Thank you for all the amazing produce and products you deliver
              each week…
              <br />
              you make my life so easy an bring goodness into our family eating.{" "}
              <br />
              I’ve been roasting a lot of brussel sprouts and
            </div>
            <div className="dots">
              <span class="dot1"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div>
            <div>
              <div className="content-text1">Subscribe to Our Newsletter</div>
              <div className="content-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="content-subscribe">
                <span>
                  <input
                    placeholder="Enter your email address"
                    className="content-subscribe-input content-text2"
                    type="text"
                  />
                  <Button
                    style={{
                      borderRadius: "20px",
                      color: "white",
                      backgroundColor: "#00dbd0",
                      fontFamily: "Libre Baskerville",
                      fontWeight: "bold",
                      padding: "10px"
                    }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </span>
              </div>
              <div>
                <img className="content-top-img" src="Group 114.png" alt="" />
                <div className="content-top-text">
                  <div className="content-text1">Read Our Blog</div>
                  <div className="content-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <Card image="Group 2.png" />
              <Card image="Group 4.png" />
              <Card image="Group 5.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
