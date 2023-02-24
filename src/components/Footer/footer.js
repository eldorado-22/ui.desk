import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">

                    <div className="footer--desk">
                        <h4>UI.desk</h4>
                        <p>On formed merits hunted unable <br/>
                            merely by mr whence or.
                        </p>
                    </div>

                    <nav className="footer--nav">
                        <nav className="footer--nav__home">
                            <Link to={"/"}>
                                <a href='#'>
                                    <p>Home</p>
                                </a>
                            </Link>
                            <a href="#">Company</a>
                            <a href="#">News</a>
                            <a href="#">Team</a>
                        </nav>

                        <nav className="footer--nav__about">
                            <Link to={"about"}>
                                <a href='#'>
                                    <p>About</p>
                                </a>
                            </Link>
                            <a href="#">History</a>
                            <a href="#">Service</a>
                            <a href="#">Prising</a>
                        </nav>

                        <nav className="footer--nav__partner">
                            <a href="#">
                                <p>Partner</p>
                            </a>
                            <a href="#">Business</a>
                            <a href="#">Plan</a>
                            <a href="#">Marketing</a>
                        </nav>

                        <nav className="footer--nav__contact">
                            <Link to={"subscribe"}>
                                <a href='#'>
                                    <p>Contact</p>
                                </a>
                            </Link>
                            <a href="#">UI.desk</a>
                            <a className="link" href="tel:+996708229173">+(996)-708-229-173</a>
                            <a href="https://www.google.com/maps/@42.8797851,74.5838557,2893a,13.1y/data=!3m8!1e1!3m6!1sAF1QipMeIsUDhTvb08FtVG8OkK0K4rb_NuqoSEDejzuf!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMeIsUDhTvb08FtVG8OkK0K4rb_NuqoSEDejzuf%3Dw203-h100-k-no-pi-20-ya21-ro-0-fo100!7i8192!8i4096!5m2!1e1!1e4">Kyrgyzstan Bishkek</a>
                        </nav>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;