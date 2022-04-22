import React, { Component } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Partner extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear"
        };

        const settings_2 = {
            // dots: true,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear",
            rtl: true
        };

        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted By</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <Slider {...settings} >
                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner3.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner4.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner5.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner6.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner7.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner8.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner9.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner10.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner11.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner12.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </Slider>

                    
                    <Slider {...settings_2}>
                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner3.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner4.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner5.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner6.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner7.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner8.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner9.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner10.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner11.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner12.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Partner;