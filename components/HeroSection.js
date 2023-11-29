import React from "react";
import { Title } from "@/components/common/Title";

const HeroSection = ({ home }) => {
    return (
        <section className='hero-sec'>
            <div className='container'>
                <div className='heading-title'>
                    <Title title="The last insurance provider you'll ever need" />
                    <p>Safeguarding what matters most is our commitment. We specialize in providing top-notch home and mobility insurance to ensure peace of mind for you and your loved ones.</p>
                </div>
                <div className='hero-content grid-4'>
                    {home.map((item, i) => (
                        <div className='box' key={i}>
                            <span className='blue'>{item.icon}</span> <br />
                            <br />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
