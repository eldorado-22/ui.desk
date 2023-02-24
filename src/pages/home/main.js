import React from 'react';
import Hero from "../../components/Hero/hero";
import Choose from "../../components/Choose/choose";
import AboutF from "../../components/AboutF/aboutF";
import Vegetables from "../../components/FreshVegetables/vegetables";
import Cook from "../../components/Cook/cook";
import Dishes from "../../components/Dishes/dishes";
import HappyClients from "../../components/HappyClients/happyClient";
import Subscribe from "../../components/Subscribe/subscribe";

const Main = () => {
    return (
        <>
            <Hero/>
            <Choose/>
            <AboutF/>
            <Vegetables/>
            <Cook/>
            <Dishes/>
            <HappyClients/>
            <Subscribe/>
        </>
    );
};

export default Main;