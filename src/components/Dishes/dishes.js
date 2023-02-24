import React from 'react';
import greenS from './../../assets/img/greenS.png'
import breetS from './../../assets/img/breetS.png'
import nutS from './../../assets/img/nutS.png'

const Dishes = () => {
    return (
        <section id="dishes">
            <div className="container">
                <div className="dishes">
                    <h3>Special Dishes for you</h3>
                    <p className="dishes--para">Made with premium & 100% Organic ingredients</p>
                    <div className="dishes--block">

                        <div className="dishes--block__greenS">
                            <img src={greenS} alt={greenS}/>
                            <h2>Green Salad</h2>
                            <p> A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>

                        <div className="dishes--block__breetS">
                            <img src={breetS} alt={breetS}/>
                            <h2>Green Salad</h2>
                            <p> A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>

                        <div className="dishes--block__nutS">
                            <img src={nutS} alt={nutS}/>
                            <h2>Green Salad</h2>
                            <p> A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>

                    </div>
                    <button>View All</button>
                </div>
            </div>
        </section>
    );
};

export default Dishes;