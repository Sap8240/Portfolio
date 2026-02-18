import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Katherine Johnson",
            role: "Event Coordinator",
            text: "Ashar delivered an exceptional scheduling tool for our festival. The interface was smooth, filters worked flawlessly, and the printable view was a game changer for attendees. His attention to detail and user focused design really stood out."
        },
        {
            name: "Benjamin Smith",
            role: "CEO",
            text: "Ashar provided good quality work. He was very fast and knowledgable. He responded very quickly and was always available. The language barrier was a challenge a few times, but we were able to work around that. I would definitely hire him again."
        },
        {
            name: "Elena Morgan",
            role: "Owner",
            text: "Ashar transformed our outdated website into a stunning, modern platform that truly reflects our brand. The clean design, fast loading, and elegant layout exceeded our expectations. Highly professional work!"
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <h2 className="fade-in">What Clients Say</h2>
                <p className="section-subtitle fade-in">Don't just take my word for it. Hear what my clients have to say about working with me.</p>
                <div className="testimonials-grid">
                    {testimonials.map((testi, index) => (
                        <div key={index} className="testimonial-card fade-in">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    Avatar
                                </div>
                                <div className="testimonial-info">
                                    <h4>{testi.name}</h4>
                                    <p>{testi.role}</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p>{testi.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
