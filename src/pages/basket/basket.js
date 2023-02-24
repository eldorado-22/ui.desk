import React from 'react';
import tomato from './../../assets/img/tomato.png'
import cols from './../../assets/img/cols.png'
import cucumber from './../../assets/img/cacumber.png'
import nutS from './../../assets/img/nutS.png'
import greenS from './../../assets/img/greenS.png'
import white from './../../assets/img/white.png'
import black from './../../assets/img/black.png'

const Basket = () => {
    return (
        <section id='basket'>
            <div className="container">
                <div className="basket">
                    <h3>What's in your cart?</h3>
                    <div className="basket--group">
                        <div className="basket--group__first">
                            <img src={tomato} alt={tomato}/>
                            <h5>Salad Assorted</h5>
                            <p>400 som</p>
                            <button>Delete</button>
                        </div>

                        <div className="basket--group__second">
                            <img src={cols} alt={cols}/>
                            <h5>Salad Universal</h5>
                            <p>900 som</p>
                            <button>Delete</button>
                        </div>

                        <div className="basket--group__third">
                            <img src={white} alt={white}/>
                            <h5>White Meat Salad</h5>
                            <p>560 som</p>
                            <button>Delete</button>
                        </div>

                        <div className="basket--group__fourth">
                            <img src={nutS} alt={nutS}/>
                            <h5>Chinese cabbage <br/> pepper salad</h5>
                            <p>850 som</p>
                            <button>Delete</button>
                        </div>

                        <div className="basket--group__fifth">
                            <img src={black} alt={black}/>
                            <h5>CBlack Souce Pasta </h5>
                            <p>700 som</p>
                            <button>Delete</button>
                        </div>

                        <div className="basket--group__six">
                            <img src={cucumber} alt={cucumber}/>
                            <h5>Cacumber  Salad <br/> Cacumber, Orange, etc... </h5>
                            <p>560 som</p>
                            <button>Delete</button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;