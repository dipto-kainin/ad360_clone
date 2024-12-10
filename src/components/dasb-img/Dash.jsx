import React from 'react';

import img1 from "../images/greenTickCircle.svg";
import img2 from "../images/greenTickCircle.svg";
import img3 from "../images/greenTickCircle.svg";
import img4 from "../images/ProductShowCaseImage.webp";
function Dash() {
  return (
    <div className="dflexc justifycenter" id="productShowCase">
      <div className="dflexr productShowCase__features">
        <div className="dflexr productShowCase__feature">
          <img 
            src={img1}
            height="57" 
            width="57"
            alt="Green circle tick" 
            decoding="async" 
            loading="lazy" 
            className="productShowCase__featureGreenCircleTick" 
          />
          <div className="productShowCase__content">
            <span className="poppins">No limits in daily ad spends from Day 1</span>
            <p className="poppins">Start with a bang</p>
          </div>
        </div>
        <div className="dflexr productShowCase__feature">
          <img 
            src={img2} 
            height="57" 
            width="57"
            alt="Green circle tick" 
            decoding="async" 
            loading="lazy" 
            className="productShowCase__featureGreenCircleTick" 
          />
          <div className="productShowCase__content">
            <span className="poppins">24*7 ad account top up</span>
            <p className="poppins">No more waiting for days</p>
          </div>
        </div>
        <div className="dflexr productShowCase__feature">
          <img 
            src={img3}
            height="57" 
            width="57"
            alt="Green circle tick" 
            decoding="async" 
            loading="lazy" 
            className="productShowCase__featureGreenCircleTick" 
          />
          <div className="productShowCase__content">
            <span className="poppins">Custom dashboard access</span>
            <p className="poppins">Monitor your ads effectively</p>
          </div>
        </div>
      </div>
      <img 
        src={img4}     
        height="100" 
        width="100" 
        alt="Product showcase" 
        decoding="async" 
        loading="lazy" 
        className="productShowCase__img" 
      />
    </div>
  );
}

export default Dash;