import React from 'react';
import Apricot from './../../assets/img/apricot.png'
import Lemon from './../../assets/img/lemon.png'
import Green from './../../assets/img/green.png'

const AboutF = () => {
    return (
        <section id='aboutF'>
            <div className='container'>
                <div className='aboutF'>
                    <div className="aboutF--text-img">
                        <div className="aboutF--text-img__text">
                            <h3>About US</h3>
                            <p>Organic food is grown without the use of <br/>
                                synthetic chemicals, such as human-made <br/>
                                pesticides and fertilizers, and does not contain <br/>
                                genetically modified organisms (GMOs). <br/>
                                Organic foods include fresh produce, meats, <br/>
                                and dairy products as well as processed foods <br/>
                                 such as crackers, drinks, and frozen meals.
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className="aboutF--text-img__img">
                            <div className='aboutF--text-img__img--vegetable'>
                                <img src={Apricot} alt={Apricot}/>
                                <img src={Lemon} alt={Lemon} className='aboutF--text-img__img--vegetable__lemon'/>
                            </div>
                            <img src={Green} alt={Green} className="aboutF--text-img__img--green"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutF;