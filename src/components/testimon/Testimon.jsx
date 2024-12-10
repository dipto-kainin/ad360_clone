import React, { useRef, useState, useEffect } from 'react';
import img1 from "../images/dresssexy.svg";
import img2 from "../images/Right4paws.svg";
import img3 from "../images/shrathyas.svg";
import img4 from "../images/positivegems.svg";
import img5 from "../images/guardianlink.svg";
function Testimon() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        if (carouselRef.current) { carouselRef.current.scrollLeft += 1; }
      }, 20);
    }
    return () => { if (intervalId) { clearInterval(intervalId); } };
  }, [isHovered]); const handleMouseEnter = () => { setIsHovered(true); }; const handleMouseLeave = () => {
    setIsHovered(false);
  };
    return (
      <div className="testimonials" id="testimonials">
        <h2 className="poppins testimonials__heading">This is why customers love us</h2>
        <div className="slider">
          <div className="testimonial-track carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={carouselRef}>
            <div className="testimonial-card testimonial-card1 card">
              <div className="top">
                <img src={img1} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Nitin Mittal</h3>
                  <p className="poppins">Founder, Dress Sexy</p>
                </div>
              </div>
              <p className="poppins">Ad360 transformed our ad strategy! Our Meta campaigns are now running smoothly, with no more ad blocks. Truly a game-changer!</p>
            </div>
            <div className="testimonial-card testimonial-card2 card">
              <div className="top">
                <img src={img2} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Sameer Achan</h3>
                  <p className="poppins">Co-Founder, Right4Paws</p>
                </div>
              </div>
              <p className="poppins">Since using Ad360, our Google ads have been unstoppable. The automated top-ups are a lifesaver for our fast-paced business.</p>
            </div>
            <div className="testimonial-card testimonial-card3 card">
              <div className="top">
                <img src={img3} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Aravindhan</h3>
                  <p className="poppins">Founder, Shrathyas</p>
                </div>
              </div>
              <p className="poppins">The analytics dashboard from Ad360 is a revelation - intuitive and insightful. It's simplified our ad tracking immensely.</p>
            </div>
            <div className="testimonial-card testimonial-card4 card">
              <div className="top">
                <img src={img4} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Gagan Manchanda</h3>
                  <p className="poppins">CEO/Co-Founder, PositiveGems</p>
                </div>
              </div>
              <p className="poppins">Ad360's 24/7 support is phenomenal. They're always there, helping us navigate through every ad challenge.</p>
            </div>
            <div className="testimonial-card testimonial-card5 card">
              <div className="top">
                <img src={img5} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Kameshwaran Elangovan</h3>
                  <p className="poppins">COO, Guardian Link</p>
                </div>
              </div>
              <p className="poppins">Ad360's expert consultations have been crucial. They helped us align with Meta and Google policies, ensuring smooth ad campaigns.</p>
            </div>
            <div className="testimonial-card testimonial-card1 card">
              <div className="top">
                <img src={img1} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Nitin Mittal</h3>
                  <p className="poppins">Founder, Dress Sexy</p>
                </div>
              </div>
              <p className="poppins">Ad360 transformed our ad strategy! Our Meta campaigns are now running smoothly, with no more ad blocks. Truly a game-changer!</p>
            </div>
            <div className="testimonial-card testimonial-card2 card">
              <div className="top">
                <img src={img2} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Sameer Achan</h3>
                  <p className="poppins">Co-Founder, Right4Paws</p>
                </div>
              </div>
              <p className="poppins">Since using Ad360, our Google ads have been unstoppable. The automated top-ups are a lifesaver for our fast-paced business.</p>
            </div>
            <div className="testimonial-card testimonial-card3 card">
              <div className="top">
                <img src={img3} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Aravindhan</h3>
                  <p className="poppins">Founder, Shrathyas</p>
                </div>
              </div>
              <p className="poppins">The analytics dashboard from Ad360 is a revelation - intuitive and insightful. It's simplified our ad tracking immensely.</p>
            </div>
            <div className="testimonial-card testimonial-card4 card">
              <div className="top">
                <img src={img4} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Gagan Manchanda</h3>
                  <p className="poppins">CEO/Co-Founder, PositiveGems</p>
                </div>
              </div>
              <p className="poppins">Ad360's 24/7 support is phenomenal. They're always there, helping us navigate through every ad challenge.</p>
            </div>
            <div className="testimonial-card testimonial-card5 card">
              <div className="top">
                <img src={img5} height="64" width="64" alt="company-logo" decoding="async" loading="eager" />
                <div className="testimonial-person">
                  <h3 className="poppins">Kameshwaran Elangovan</h3>
                  <p className="poppins">COO, Guardian Link</p>
                </div>
              </div>
              <p className="poppins">Ad360's expert consultations have been crucial. They helped us align with Meta and Google policies, ensuring smooth ad campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Testimon;