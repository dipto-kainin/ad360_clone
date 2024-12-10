import React, { useState } from "react";

function FAQ() {
    const [showIndex, setShowIndex] = useState(null);

    function showAns(index) {
        setShowIndex(showIndex === index ? null : index);
    }

    return (
        <div id="faq">
            <h1 className="poppins">Frequently asked questions</h1>
            <div className="qa__accordion">
                <div className="accordion">
                    <div className="accordion__top" onClick={() => showAns(0)}>
                        <span className="accordion__question poppins">
                            How many domains, pixels and pages can be used in
                            the Account?
                        </span>
                        <img
                            src={
                                !(showIndex === 0)
                                    ? `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/plus.svg`
                                    : `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/minus.svg`
                            }
                            alt="plus-icon"
                            height="21px"
                            width="21px"
                        />
                    </div>
                    <p
                        className={`accordion__answer poppins ${
                            showIndex === 0 ? "show" : ""
                        }`}
                    >
                        You can use an unlimited number of domains, pixels and
                        pages can be used in the ad account, but we suggest you
                        use the minimum required number.
                    </p>
                    <hr />
                </div>
                <div className="accordion">
                    <div className="accordion__top" onClick={() => showAns(1)}>
                        <span className="accordion__question poppins">
                            What if the ad360.ai ad accounts get disabled? Will
                            the funds be transferred?
                        </span>
                        <img
                            src={
                                !(showIndex === 1)
                                    ? `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/plus.svg`
                                    : `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/minus.svg`
                            }
                            alt="plus-icon"
                            height="21px"
                            width="21px"
                        />
                    </div>
                    <p
                        className={`accordion__answer poppins ${
                            showIndex === 1 ? "show" : ""
                        }`}
                    >
                        Within 24-48 hours of time, we will provide a solution
                        by reinstating the disabled ad account or replace it
                        with a new account under the same subscription. Yes, the
                        remaining budget will be transferred to the new account.
                    </p>
                    <hr />
                </div>
                <div className="accordion">
                    <div className="accordion__top" onClick={() => showAns(2)}>
                        <span className="accordion__question poppins">
                            Do you provide multiple ad accounts?
                        </span>
                        <img
                            src={
                                !(showIndex === 2)
                                    ? `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/plus.svg`
                                    : `https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/minus.svg`
                            }
                            alt="plus-icon"
                            height="21px"
                            width="21px"
                        />
                    </div>
                    <p
                        className={`accordion__answer poppins ${
                            showIndex === 2 ? "show" : ""
                        }`}
                    >
                        Yes, We can provide multiple ad accounts.
                    </p>
                </div>
            </div>
            <div className="qa__contactSupport">
                <img
                    src="https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/Info Circle.svg"
                    alt="info-icon"
                />
                <p className="poppins">
                    Didn't find the answer you're looking for?
                </p>
                <a href="mailto:support@zocket.com" className="poppins">
                    Please contact support
                </a>
            </div>
        </div>
    );
}

export default FAQ;
