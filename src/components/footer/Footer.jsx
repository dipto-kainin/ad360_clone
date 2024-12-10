import React from 'react';
import img1 from "../images/facebook.svg";
import img2 from "../images/instagram.svg";
import img3 from "../images/linkedin.svg";
import img4 from "../images/youtubeIcon.svg";
import img5 from "../images/Ad360_Footer.svg";

function Footer() {
  return (
    <div className="footer__normal" id="footer">
      <div className="footer__top footer__top__normal">
        <div className="footer__top__infoLinks">
          <img
            src={img5}
            height="28"
            width="150"
            alt="companylogo-img"
            decoding="async"
            loading="lazy"
            className="companylogo"
          />
          <p className="poppins footer__top__note">Break Free<br />From Ad Restrictions</p>
          <div className="footer__topFirstCol__div2">
            <a href="https://www.facebook.com/profile.php?id=61555714807257" className="socialIcon__link" rel="noopener noreferrer" target="_blank">
              <img src={img1} height="24" width="24" alt="facebook-icon" />
            </a>
            <a href="https://www.instagram.com/ad360.ai/" className="socialIcon__link" rel="noopener noreferrer" target="_blank">
              <img src={img2} height="24" width="24" alt="instagram-icon" />
            </a>
            <a href="https://www.linkedin.com/company/ad360-ai" className="socialIcon__link" rel="noopener noreferrer" target="_blank">
              <img src={img3} height="24" width="24" alt="linkedin-icon" />
            </a>
            <a href="https://www.youtube.com/@ad360ai" className="socialIcon__link" rel="noopener noreferrer" target="_blank">
              <img src={img4} height="24" width="24" alt="youtube-icon" />
            </a>
          </div>
        </div>
        <div className="footer__top__lists">
          <span className="poppins footerTopHeading">About</span>
          <a href="#faq" className="poppins footerTopic">FAQs</a>
          <a href="#testimonials" className="poppins footerTopic">Our customers</a>
        </div>
        <div className="footer__top__lists">
          <span className="poppins footerTopHeading">Resources</span>
          <a href="https://zocket.com/contact_us/" className="poppins footerTopic" rel="noopener noreferrer" target="_blank">Contact Us</a>
        </div>
        <div className="footer__top__lists">
          <span className="poppins footerTopHeading">Security and Terms</span>
          <a href="/privacy-policy" className="poppins footerTopic">Privacy Policy</a>
          <a href="/terms-services" className="poppins footerTopic">Terms</a>
        </div>
      </div>
      <div className="poppins dflexr justifycenter footer__bottom">© 2024 Ad360 by Zocket Technologies Private Limited. All rights reserved.</div>
    </div>
  );
}

export default Footer;
