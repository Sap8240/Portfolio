import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import './index.css';

function App() {
    useEffect(() => {
        const faders = document.querySelectorAll('.fade-in');
        const appearOptions = {
            threshold: 0.15
        };

        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        return () => {
            appearOnScroll.disconnect();
        };
    }, []);

    return (
        <div className="App">
            <BackgroundCanvas />

            <div className="content">
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
