import React, { Component } from 'react';





class TeamStyleMgt extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <div className="ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Management Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="section">
                            <div className="section-box box">
                                <div className="slider">
                                    <img className="media media1" src="https://www.fillmurray.com/g/580/580" />
                                    <img className="media media2" src="https://www.fillmurray.com/g/600/600" />
                                    <img className="media media3" src="https://www.fillmurray.com/g/540/540" />
                                    <img className="media media4" src="https://www.fillmurray.com/g/510/510" />
                                    <img className="media media5" src="https://www.fillmurray.com/g/520/520" />
                                    <img className="media media6" src="https://www.fillmurray.com/g/560/560" />
                                </div>
                                <div className="quote typograpy">
                                <blockquote>
                                    <p>It’s kind of a shock to wake up each morning and be bathed in this purple light.</p>
                                    <cite>
                                    <span className="quote-name">Bill Murray</span>
                                    <span className="quote-location">Actor &amp; Comedian</span>
                                    </cite>
                                </blockquote>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default TeamStyleMgt;