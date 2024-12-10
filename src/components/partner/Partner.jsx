import React from "react";
import img1 from "../images/metaicon.svg";
import img2 from "../images/metaicon2.svg";
import img3 from "../images/metaicon2.svg";
import img4 from "../images/googleicon2.svg";

function Partner() {
    return (
        <div id="partnershipPlatform">
            <span className="poppins dflexr justifycenter partnershipPlatform__heading1">
                Our Partnership Platforms
            </span>
            <h2 className="poppins partnershipPlatform__heading2">
                Connecting You With Leading Media Platforms
            </h2>
            <p className="poppins partnershipPlatform__subHeading">
                Working seamlessly with major social media platforms, we provide
                enterprise-tier solutions for businesses of all sizes. Wave
                goodbye to advertising limitations, restrictions, and campaigns
                that are not sustainable.
            </p>
            <div className="dflexr justifycenter partnershipPlatform__cards">
                <div className="partnershipPlatform__cardMeta">
                    <img
                        src={img1}
                        height="69"
                        width="123"
                        alt="Meta logo"
                        decoding="async"
                        loading="lazy"
                        className="partnershipPlatform__cardImgMeta"
                    />
                    <span className="poppins dflex partnershipPlatform__cardHeading">
                        Meta Agency Accounts
                    </span>
                    <p className="poppins partnershipPlatform__cardSubHeading">
                        Unleash the complete power of your brand through Meta
                        Advertising, connecting with billions of users on
                        platforms like Facebook, Instagram, WhatsApp, and
                        beyond.
                    </p>
                    <img
                        src={img2}
                        height="247"
                        width="440"
                        alt="Meta advertising"
                        decoding="async"
                        loading="lazy"
                        className="partnershipPlatform__cardImgMeta2"
                    />
                </div>
                <div className="partnershipPlatform__cardGoogle">
                    <img
                        src={
                            "https://drbgg29kvmub6.cloudfront.net/assets/ad360/googleicon.svg"
                        }
                        height="33"
                        width="98"
                        alt="Google logo"
                        decoding="async"
                        loading="lazy"
                        className="partnershipPlatform__cardImgGoogle"
                    />
                    <span className="poppins dflex partnershipPlatform__cardHeading partnershipPlatform__cardHeadingGoogle">
                        Google Agency Accounts
                    </span>
                    <p className="poppins partnershipPlatform__cardSubHeading">
                        Unlock the potential of Google's extensive network and
                        boost your brand's online visibility with our
                        specialized advertising campaigns, strategically crafted
                        to engage your target audience effectively.
                    </p>
                    <img
                        src={img4}
                        height="247"
                        width="440"
                        alt="Google advertising"
                        decoding="async"
                        loading="lazy"
                        className="partnershipPlatform__cardImgGoogle2"
                    />
                </div>
            </div>
        </div>
    );
}

export default Partner;
