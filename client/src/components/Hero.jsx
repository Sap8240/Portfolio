import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content fade-in">
                <h1>Saptarshi Kayal</h1>
                <p className="subtitle">A Passionate Full Stack Developer</p>
                <p className="description">I build responsive, performance driven websites and enjoy turning ideas into code.</p>
                <div className="hero-image">
                    <div className="placeholder">
                        <img src="/images/P1011274.jpg" alt="Saptarshi Kayal" />
                    </div>
                </div>
                <div className="btns">
                    <a className="insta" href="https://www.instagram.com/_mj.rocks/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram (1).png" alt="Instagram" />
                    </a>
                    <a className="Github" href="https://github.com/Sap8240" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" alt="GitHub" />
                    </a>
                    <a className="Twitter" href="https://www.linkedin.com/in/saptarshi-kayal-70711731a/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.png" alt="Twitter" />
                    </a>
                    <a className="Twitter" href="https://api.whatsapp.com/send/?phone=918240432534&text=Hello%2C+I+came+across+your+profile+and+would+like+to+connect+regarding+website+development+services.+Please+let+me+know+a+suitable+time+to+discuss+further.+Thank+you.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <img src="/images/whatsapp.png" alt="Twitter" />
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;
