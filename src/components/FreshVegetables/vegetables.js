import React from 'react';
import FreshVegetables from './../../assets/img/salad.png'

const Vegetables = () => {
    return (
        <section id='freshVegetables'>
            <div className='container'>
                <div className="freshVegetables">
                    <img src={FreshVegetables} alt={FreshVegetables}/>
                    <div className="freshVegetables--text">
                        <h4>Fresh Vegetables <br/>
                            Every Day
                        </h4>
                        <p> Healthy life as informed declared we enjoy the <br/>
                            margaret. Joy horrible moreover man feelings <br/>
                            own shy. Request norland neither mistake for yet. <br/>
                            Between the for morning assured country <br/>
                            believe.
                        </p>
                        <button>Learn More</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vegetables;