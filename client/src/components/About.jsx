import React from 'react';

const About = () => {
    return (
        <>
            <div className="scrolling-container">
                <div className="scrolling-text">
                    <span className="text-item">CREATIVE • INNOVATIVE • PASSIONATE • DEDICATED • CREATIVE • INNOVATIVE • PASSIONATE • DEDICATED • CREATIVE • INNOVATIVE • PASSIONATE • DEDICATED</span>
                </div>
            </div>

            <section id="about" className="about fade-in">
                <div className="about-image fade-in">
                    <img src="/images/img2.jpg" alt="Saptarshi Kayal" />
                </div>
                <div className="about-text fade-in">
                    <p>Hello, I'm Saptarshi, a passionate Web Developer. I'm deeply committed to bringing design & ideas to life through, user centered design. I believe, Every project I put my hands on i built with care, creativity and a clear understanding of what the client truly needs.</p>
                    <p>Here, my goal is always to create websites that not only look great but also work smoothly and deliver the needed results, my true satisfaction is problem solving and making a real impact for the people I work with.</p>
                    <p>I believe in clear communication, long term value, and building strong relationships through trust and reliability. I also enjoy sharing what I learn along the way, helping others grow through content on social-media</p>
                </div>
            </section>
        </>
    );
};

export default About;
