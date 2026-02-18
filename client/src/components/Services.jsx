import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Web Design",
            desc: "Custom UI/UX design, mobile-first layouts, and aesthetic visuals that represent your brand.",
            link: "/services/website-design"
        },
        {
            title: "Landing Page Design",
            desc: "High-converting landing pages tailored for campaigns and product launches.",
            link: "/services/website-design"
        },
        {
            title: "Responsive Design",
            desc: "Mobile, tablet, and desktop-friendly designs that adapt beautifully to all screens.",
            link: "/services/website-design"
        },
        {
            title: "Web Development",
            desc: "Full-stack solutions, landing pages, API integrations, and clean, scalable code for performance.",
            link: "/services/website-development"
        },
        {
            title: "Website Maintenance",
            desc: "Ongoing support, updates, and security improvements for long-term stability.",
            link: "/services/maintenance"
        },
        {
            title: "E-commerce",
            desc: "Online store setup, product management, secure payment gateways, and cart optimization.",
            link: "/services/cms-solutions"
        },
        {
            title: "SEO Optimization",
            desc: "Core Web Vitals improvement, on-page SEO, meta tags, and speed optimization for better ranking.",
            link: "/services/speed-seo"
        },
        {
            title: "Speed Optimization",
            desc: "Improve load times and performance with caching, compression, and code cleanup.",
            link: "/services/speed-seo"
        },
        {
            title: "Content Management",
            desc: "WordPress, Shopify, and custom CMS setup with easy dashboards and secure admin panels.",
            link: "/services/cms-solutions"
        }
    ];

    return (
        <section id="services" className="services fade-in">
            <div className="services-container">
                <h2 className="fade-in">What I Offer</h2>
                <p className="section-subtitle fade-in">Comprehensive web development and design services tailored to your specific needs.</p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card fade-in">
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href={service.link} className="learn-more">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
