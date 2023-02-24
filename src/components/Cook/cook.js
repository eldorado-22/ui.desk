import React from 'react';
import {BsFillCheckSquareFill} from "react-icons/bs";
import Chefs from "./../../assets/img/povar.png"

const Cook = () => {
    return (
        <section id="cook">
            <div className="container">
                <div className="cook">
                    <div className="cook--chefs">

                        <div className="cook--chefs__text">
                            <h4>Cooked by the <br/>
                                Best Chefs
                            </h4>
                            <p>Believing neglected so so allowance existence <br/>
                                departure in. In design active temper be <br/>
                                uneasy. Thirty for remove plenty regard you <br/>
                                summer though. He preference connection <br/>
                                astonished on of ye.
                            </p>
                            <div className="cook--chefs__text--one">
                                <BsFillCheckSquareFill className="cook--chefs__text--one__icons"/>
                                <p>A guaranteed delicious meal</p>
                            </div>
                            <div className="cook--chefs__text--two">
                                <BsFillCheckSquareFill className="cook--chefs__text--two__icons"/>
                                <p>Food is guaranteed hygienic</p>
                            </div>
                            <div className="cook--chefs__text--three">
                                <BsFillCheckSquareFill className="cook--chefs__text--three__icons"/>
                                <p>Cooked quickly</p>
                            </div>
                        </div>
                        <img src={Chefs} alt={Chefs}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cook;

