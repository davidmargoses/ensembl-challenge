import React from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogo from '../assets/social/facebook-white.svg';
import TwitterLogo from '../assets/social/twitter-white.svg';
import InstagramLogo from '../assets/social/instagram-white.svg';
import AppStoreLogo from '../assets/store/app-store.svg';
import GooglePlayLogo from '../assets/store/play-store.svg';
import WindowsLogo from '../assets/store/windows-store.svg';

const Footer = () => {
    const history = useHistory();
    const redirectButtonsFooter = [
        { id: 0, name: 'Home', redirect: '/' },
        { id: 1, name: 'Terms and Conditions', redirect: null },
        { id: 2, name: 'Privacy Policy', redirect: null },
        { id: 3, name: 'Collection Statement', redirect: null },
        { id: 4, name: 'Help', redirect: null },
        { id: 5, name: 'Manage Account', redirect: null },
    ];

    return (
        <div className="footer-container">
            <div>
                <div>
                    {redirectButtonsFooter.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <button onClick={() => item.redirect && history.push(item.redirect)}>{item.name}</button>
                                {index !== redirectButtonsFooter.length - 1 && <span>|</span>}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <span>Copyright © 2016 DEMO Streaming. All Rights Reserved.</span>
                </div>
            </div>
            <div>
                <div className="social-container">
                    <button>
                        <img src={FacebookLogo} alt="Logo Facebook" />
                    </button>
                    <button>
                        <img src={TwitterLogo} alt="Logo Twitter" />
                    </button>
                    <button>
                        <img src={InstagramLogo} alt="Logo Instagram" />
                    </button>
                </div>
                <div>
                    <button>
                        <img src={AppStoreLogo} alt="Logo Apple Store" />
                    </button>
                    <button>
                        <img src={GooglePlayLogo} alt="Logo Google Play" />
                    </button>
                    <button>
                        <img src={WindowsLogo} alt="Logo Microsoft Windows" height={40} width={120} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
