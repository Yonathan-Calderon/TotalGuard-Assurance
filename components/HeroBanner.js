import React from "react";
import CotizadorForm from "./CotizadorForm";
import HeroImage from "./HeroImage";


const HeroBanner = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className='hero-title'>SAFEGUARDING WHAT MATTERS MOST</h1>
                        <CotizadorForm />
                    </div>
                        <div className="hero-right">
                            <HeroImage />
                        </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
