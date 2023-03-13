import React, {useState} from 'react';
import hero from './../../assets/img/hero img.png';
import list from './../../assets/img/list.png';


const Hero = () => {
    const [dark, setDark] = useState(false)
    return (
        <section style={{
            background: dark ? 'green' : '',
            color: dark ? 'white' : ''
        }} id='hero'>
            <div className='container'>

                <div className='hero'>
                    <div className='hero--text'>

                        <h1> Just <span>Eat healthy </span>
                            food to live a <br/>
                            healthier life
                        </h1>

                        <p>Enjoy a healthy life by eating healthy foods <br/>
                            that have extraordinary flavors that make <br/>
                            your life healthier for today and in the future
                        </p>

                        <button>Order Now</button>
                    </div>
                    <div className="hero--img">
                        <img src={hero} alt={hero} className="hero--img__one"/>
                        <img src={list} alt={list} className="hero--img__two"/>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;