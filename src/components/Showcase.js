import React, { useState, useEffect } from "react";
import HeroImg from '../images/group.png'


const Showcase = () => {
    // eslint-disable-next-line
    const [deadline] = useState("Dec, 17, 2021")
    const [days, setDays] = useState("0")
    const [hours, setHours] = useState("0")
    const [minutes, setMinutes] = useState("0")
    const [seconds, setSeconds] = useState("0")

    const getTimeUntil = () => {
        let time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            console.log("Date passed");
        } else {
            let seconds = Math.floor((time / 1000) % 60);
            let minutes = Math.floor((time / 1000 / 60) % 60);
            let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            let days = Math.floor((time / (1000 * 60 * 60 * 24)));

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
        }
    }

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);
    })
    return (
        <div className="content-section">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center ">
                    <div className="col-lg-6">
                        <div className="showcase-img">
                            <img src={HeroImg} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-end ">
                        <div className="showcase-content space-mx-10">
                            <h3 className="content__subtitle text-center py-3">
                                Coming Soon!
                            </h3>
                            <p className="content__title">
                                We are currently working very hard on getting  you a fantastic product.
                            </p>
                            <div className="countdown space-mt--50 space-pb--25">
                                <div className="single-countdown">
                                    <span className="single-countdown__time">{days}</span>
                                    <span className="single-countdown__text">Days</span>
                                </div>
                                <div className="single-countdown">
                                    <span className="single-countdown__time">{hours}</span>
                                    <span className="single-countdown__text">Hours</span>
                                </div>
                                <div className="single-countdown">
                                    <span className="single-countdown__time">{minutes}</span>
                                    <span className="single-countdown__text">Minutes</span>
                                </div>
                                <div className="single-countdown">
                                    <span className="single-countdown__time">{seconds}</span>
                                    <span className="single-countdown__text">Seconds</span>
                                </div>
                            </div>
                            <div className="cs-14-subscription-wrapper space-mb--30 space-sm">
                                <div>
                                    <div className="newsletter-form">
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email Address"
                                            required=""
                                        />
                                        <button>Notify Me</button>
                                    </div>
                                    <div className="mailchimp-alerts"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
