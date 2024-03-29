import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarTwo extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area navbar-style-2">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/logo.png" className="black-logo" alt="logo" />
                                    <img src="/images/logo-white.png" className="white-logo" alt="logo" />
                                </a>
                            </Link>

                            {/* Toggle navigation */}
                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Home 
                                            </a>
                                        </Link>
                                    </li> 

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Why choose us?
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a className="nav-link">Your Services</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Your Team 
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>

                                {/* <div className="others-options">
                                    <Link href="/pricing">
                                        <a className="btn btn-primary">
                                            Let's Begin
                                        </a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default NavbarTwo;