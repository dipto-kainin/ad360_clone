// src/Heade.js
import React from "react";
import img1 from "../images/update_meta.svg";
import img2 from "../images/update_snapchat.svg";
import img3 from "../images/update_google_partner.svg";
import img4 from "../images/Ad360MainSectionImg.webp";
function Heade() {
    return (
        <div
            className="dflexr main__section"
            style={{ height: "100dvh", margin: "auto" }}
        >
            <div className="main__section__left">
                <h2 className="poppins left__heading">
                    Break Free
                    <br />
                    From Ad Restrictions
                </h2>
                <p className="poppins left__subHeading">
                    Resume Meta and Google ad campaigns effortlessly. No more ad
                    account worries. Get started within seconds
                </p>
                <a
                    href="https://ad360.ai/book-a-demo/"
                    className="dflexr justifycenter poppins-semiBold left__btn mainSectionBookADemo"
                >
                    Book a Demo
                </a>
                <div className="dflexr left__tags">
                    <img
                        src={img1}
                        height="44"
                        width="116"
                        alt="meta-business-partner-img"
                        decoding="async"
                        loading="lazy"
                        className="tags__images"
                    />
                    <img
                        src={img2}
                        height="44"
                        width="116"
                        alt="meta-business-partner-img"
                        decoding="async"
                        loading="lazy"
                        className="tags__images"
                    />
                    <img
                        src={img3}
                        height="45"
                        width="125"
                        alt="google-for-startup-img"
                        decoding="async"
                        loading="lazy"
                        className="tags__images"
                    />
                </div>
            </div>
            <div className="main__section__right">
                <img
                    src={img4}
                    height="580"
                    width="669"
                    alt="main-section-img"
                />
            </div>
        </div>
    );
}

export default Heade;
