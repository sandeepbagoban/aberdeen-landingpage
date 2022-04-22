import React, { Component } from 'react';
import Link from 'next/link';
import Zoom from 'react-reveal/Fade';


class About1 extends Component {
    render() {
        return (
            <>

<header>
  {/* <div class="ripple-1"></div>
  <div class="ripple-2"></div>
  <div class="ripple-3"></div>
  <div class="ripple-4"></div>
  <div class="ripple-5"></div> */}


                                <section className="about-area ptb-100" id="xxx">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title"> 
                                        <h5>Aberdeen <br/>TRENDS 2022: </h5>
                                        <p>To achieve sustainable growth and relevance, organizations must understand and respond to their customers’ motivations 
                                            and behaviors. Aberdeen Trends tracks and clarifies changes in people’s behavior that will affect culture, society and 
                                            business in the coming year, and guides organizations as they create new systems, products and services in response. </p>
                                    </div>

                                    <div className="about-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <a href="#" target="_blank">Read the Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center top-margin-20">
                            <div className="col-lg-3 col-sm-6">
                                <div className="service-card-one white-bg border">
                                    <Zoom delay='300'>
                                        <div className='roadmap-number'>
                                            <p className='roadmap-number-txt'>1</p> 
                                        </div>
                                    </Zoom>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>CONSULTING</a>
                                        </Link>
                                    </h3>
                                    <p className='font-weight-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="service-card-one white-bg border">
                                    <Zoom delay='600'>
                                    <div className='roadmap-number'>
                                            <p className='roadmap-number-txt'>2</p> 
                                        </div>
                                    </Zoom>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>PROJECT<br/>MANAGEMENT</a>
                                        </Link>
                                    </h3>
                                    <p className='font-weight-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div> 
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="service-card-one white-bg border">
                                    <Zoom delay='900'>
                                    <div className='roadmap-number'>
                                            <p className='roadmap-number-txt'>3</p> 
                                        </div>
                                    </Zoom>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>SECURITY</a> 
                                        </Link>
                                    </h3>
                                    <p className='font-weight-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="service-card-one white-bg border">
                                    <Zoom delay='1200'>
                                    <div className='roadmap-number'>
                                            <p className='roadmap-number-txt'>4</p>
                                        </div>
                                    </Zoom>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>HELP DESK</a> 
                                        </Link>
                                    </h3>
                                    <p className='font-weight-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
</header>
            </>
        );
    }
}

export default About1;