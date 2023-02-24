import React from 'react';
import order from './../../assets/img/order.svg';
import map from './../../assets/img/map.svg';
import organic from './../../assets/img/organic.svg';

const Choose = () => {
    return (
        <section id='choose'>
            <div className='container'>
                <div className='choose'>
                    <h3>Why Choose US?</h3>
                    <p>Organic food is grown without the use of synthetic chemicals</p>

                    <div className='choose--block'>

                        <div className='choose--block__easy'>
                            <img src={order} alt={order}/>
                            <span>Easy to order</span>
                            <p>foods include fresh produce, <br/>
                                meats as well as processed
                            </p>
                        </div>

                        <div className='choose--block__map'>
                            <img src={map} alt={map}/>
                            <span>Live Order</span>
                            <p> Place your online Order easily <br/>
                                and get the food instantly
                            </p>
                        </div>

                        <div className='choose--block__organic'>
                            <img src={organic} alt={organic}/>
                            <span>100% Organic</span>
                            <p> Organic food is grown without <br/>
                                the use of synthetic chemicals
                            </p>
                        </div>

                    </div>

                    <div className='choose--numbers'>

                        <div className='choose--numbers__forty'>
                            <h5>40+</h5>
                            <p>Food Partners</p>
                        </div>

                        <div className='choose--numbers__nine'>
                            <h5>459+</h5>
                            <p>Trusted Clients</p>
                        </div>
                        <div className='choose--numbers__twelve'>
                            <h5>12k+</h5>
                            <p>Order Online</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;