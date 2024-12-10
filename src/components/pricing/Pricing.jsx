import React, { useEffect, useState } from "react";

function Pricing() {
    const [value, setValue] = useState(1); // Default value
    const [isHid, setIsHid] = useState(false);
    // {2250*value*value - 1250*value +3500}
    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    useEffect(() => {
        setIsHid(value === 5); // Set hidden state based on value
    }, [value]);

    return (
        <div id="pricing">
            <img
                className="budget__coin1"
                src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Coin1.svg"
                alt="gold-coin-img"
            />
            <img
                className="budget__coin2"
                src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Coin2.svg"
                alt="gold-coin-img"
            />
            <span className="poppins budget__heading">
                Pick the right plan for your ad budget
            </span>
            {isHid ? (
                <h2 className="poppins budget__subHeading">
                    My monthly ad spend is above <span>$50001</span>
                </h2>
            ) : (
                <h2 className="poppins budget__subHeading">
                    My monthly ad spend is up to{" "}
                    <span>
                        $
                        {Math.ceil(
                            2583.33 * value * value * value -
                                13250 * value * value +
                                27166.67 * value
                        ) -
                            12000 >
                        0
                            ? Math.ceil(
                                  2583.33 * value * value * value -
                                      13250 * value * value +
                                      27166.67 * value
                              ) - 12000
                            : 0}
                    </span>
                </h2>
            )}
            <div className="slider-container1">
                <input
                    type="range"
                    min="0"
                    max="5"
                    value={value}
                    onChange={handleChange}
                    className="slider1"
                    step="1"
                />
                <div
                    className="slider-track"
                    style={{
                        background: `linear-gradient(to right, blue ${
                            value * 20
                        }%, #e0e0e0 ${value * 20}%)`,
                    }}
                ></div>
                <div className="dotdiv bg-white h-2 w-2 round"></div>
                <div className="dotdiv bg-white h-2 w-2 round"></div>
                <div className="dotdiv bg-white h-2 w-2 round"></div>
                <div className="dotdiv bg-white h-2 w-2 round"></div>
            </div>

            <div className="budget__plansCards">
                <div
                    id="plansCard"
                    className={`dflexc justifycenter planCard planCardSelected ${
                        isHid ? "hidden" : ""
                    }`}
                >
                    <h3 className="plansCard__heading poppins">Plan</h3>
                    <h2 className="plansCard__price poppins">
                        $199<span>/month</span>
                    </h2>
                    <p className="plansCard__overages poppins">
                        <span>Overages</span> apply if ad spend limit is
                        exceeded
                    </p>
                    <a
                        href="https://enterprise.zocket.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="plansCard__button poppins-semiBold dflexr justifycenter planCard__buttonSelected"
                    >
                        Proceed with this
                    </a>
                    <p className="plansCard__excludingGst inter">
                        *Excluding GST
                    </p>
                    <img
                        className="plansCard__purpleTickCircle"
                        src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/purple-tick-circle.svg"
                        alt="purple-tick-circle"
                    />
                </div>
                <div
                    id="plansCard"
                    className="dflexc justifycenter planCard planCardSelected"
                >
                    <h3 className="plansCard__heading poppins">
                        Higher ad spends?
                    </h3>
                    <h2 className="plansCard__price poppins">Custom Price</h2>
                    <p className="plansCard__overages poppins">
                        <span>
                            <br />
                        </span>
                    </p>
                    <a
                        href="https://ad360.ai/book-a-demo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="plansCard__button poppins-semiBold dflexr justifycenter planCard__buttonSelected"
                    >
                        Talk to us
                    </a>
                    <p className="plansCard__excludingGst inter">
                        *Excluding GST
                    </p>
                    <img
                        className={`plansCard__purpleTickCircle ${
                            !isHid ? "hidden" : ""
                        }`}
                        src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/purple-tick-circle.svg"
                        alt="purple-tick-circle"
                    />
                </div>
            </div>
        </div>
    );
}

export default Pricing;
