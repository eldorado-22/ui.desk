import React from 'react';
import Slider from "react-slick";
import avatar from './../../assets/img/avatar.svg'
import lock from './../../assets/img/lock.png'
import elModel from './../../assets/img/el-model.jpg'
import {BsArrowLeftShort, BsArrowRight} from "react-icons/bs";

const HappyClient = () => {
    // let settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     arrows: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (<section id="happyClient">
            <div className="container">
                <div className="happyClient">
                    <h4>Happy Clients Says</h4>

                    <div className="happyClient--blog">

                        <div className="happyClient--blog__one">
                            <div className="happyClient--blog__one--imgT">
                                <div className="happyClient--blog__one--imgT__io">
                                    <img src={avatar} alt={avatar}/>
                                    <h3>KHALIL NAZIR <br/>
                                        <span>CEO of UI.Desk</span>
                                    </h3>
                                </div>

                                <img src={lock} alt={lock} className="happyClient--blog__one--imgT__col"/>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. <br/>
                                He preference Partiality on or continuing in particular <br/>
                                principles as. Do believing oh disposing to supported <br/>
                                allowance we.
                            </p>
                        </div>
                        <div className="happyClient--blog__two">
                            <div className="happyClient--blog__two--imgT">
                                <div className="happyClient--blog__two--imgT__df">
                                    <img src={elModel} alt={elModel}
                                         className="happyClient--blog__two--imgT__df--ela"/>
                                    <h3> Eldorado.JM <br/>
                                        <span>Web-Developer</span>
                                    </h3>
                                </div>
                                <img src={lock} alt={lock} className="happyClient--blog__two--imgT__col"/>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. <br/>
                                He preference Partiality on or continuing in particular <br/>
                                principles as. Do believing oh disposing to supported <br/>
                                allowance we.
                            </p>
                        </div>

                    </div>
                    <div className="happyClient--arrow">
                        <BsArrowLeftShort className="happyClient--arrow__left"/>
                        <BsArrowRight className="happyClient--arrow__right"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HappyClient;