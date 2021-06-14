import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-nav-left">
          <img src="Group 220.png" alt="" className="header-nav-logo" />
          <div className="header-nav-heading">organic</div>
        </div>
        <div className="header-nav-right">
          <span>Home</span>
          <span>Product</span>
          <span>Blog</span>
          <span>About Us</span>
          <span id="contact">Contact Us</span>
        </div>
      </div>
      <div className="header-content">
        <div className="header-content-left">
          <div className="header-content-left1">Healthy life with</div>
          <div className="header-content-left2">Nature Organic</div>
          <div className="header-content-left3">
            Vegetables are the edible parts of a plant
            <br /> that is used in cooking or can be eaten now.
          </div>
          <Button
            style={{
              color: "white",
              backgroundColor: "#00dbd0",
              fontFamily: "Libre Baskerville",
              fontWeight: "bold"
            }}
            variant="contained"
          >
            Explore Now
          </Button>
        </div>
        <div className="header-content-right">
          <img className="img-top" src="Group 195.png" alt="" />
          <img className="img-bottom" src="Group 228.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
