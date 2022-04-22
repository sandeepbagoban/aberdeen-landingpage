import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class FooterCustom extends Component { 

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true,
        hidden: false
    };

    constructor(props) {

        super(props);
    
        // Bind the function to this component, so it has access to this.state
        this.handleScroll = this.handleScroll.bind(this);
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {}

    componentWillMount() {
        if (typeof window !== "undefined") {
            window.removeEventListener('scroll', this.handleScroll);
        }
        
    }

    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll(e) {

        console.log('xxxx: ', this.elementInViewport);

        let lastScrollTop = 0;
        const currentScrollTop = navbar.scrollTop;
        
    
        // Set the state of hidden depending on scroll position
        // We only change the state if it needs to be changed
        if (!this.state.hidden && currentScrollTop < lastScrollTop) {
          this.setState({ hidden: true });
        } 
        else if(this.state.hidden) {
          this.setState({ hidden: false });
        }
        lastScrollTop = currentScrollTop;

    }

    

    

    render() {

        {}

        return (
            <>
               <nav id="businessMenu" className= {this.state.hidden ? 'units_menu' : 'units_menu showCustomFooter'}>
                    <ul class="menu">
                        <li class="menu_item">
                            <a href="#xxx" data-unit="wshop">
                                CONSULTING
                            </a>
                        </li>

                        <li class="menu_item">
                            <a href="#" data-unit="kromz">
                                SAGE X3
                            </a>
                        </li>

                        <li class="menu_item">
                            <a href="#" data-unit="skeet">
                                SECURITY
                            </a>
                        </li>

                        <li class="menu_item">
                            <a href="#" data-unit="operf">
                                DATA
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default FooterCustom;