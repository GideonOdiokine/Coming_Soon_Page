import React from "react";
// import Layout from './Layout'

const Showcase = () => {
    return (
        <div className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 class="content__subtitle space-mb--10">
                            Coming Soon
                        </h3>
                        <p class="content__title">
                            We are currently working very hard on getting  you a fantastic product.
                        </p>
                        <div className="countdown space-mt--50">
                            <div class="single-countdown">
                                <span class="single-countdown__time">26</span>
                                <span class="single-countdown__text">Days</span>
                            </div>
                            <div class="single-countdown">
                                <span class="single-countdown__time">26</span>
                                <span class="single-countdown__text">Hours</span>
                            </div>
                            <div class="single-countdown">
                                <span class="single-countdown__time">26</span>
                                <span class="single-countdown__text">Minutes</span>
                            </div>
                            <div class="single-countdown">
                                <span class="single-countdown__time">26</span>
                                <span class="single-countdown__text">Seconds</span>
                            </div>
                        </div>
                        <div class="cs-14-subscription-wrapper space-mt--50 space-mb--30">
                            <div>
                                <div class="newsletter-form space-mb--10">
                                    <input
                                        type="email"
                                        placeholder="Enter email here"
                                        required=""
                                    />
                                    <button>NOTIFY ME</button>
                                </div>
                                <div class="mailchimp-alerts"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Showcase;
