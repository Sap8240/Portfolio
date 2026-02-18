import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="fade-in">Get In Touch</h2>
                <p className="section-subtitle fade-in">I'm currently accepting new projects and freelance opportunities. Let's discuss your project!</p>
                <form onSubmit={handleSubmit} className="contact-form fade-in">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                        <span className="btn-text">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </span>
                        {status === 'sending' && <span className="loading" style={{ display: 'none' }}>Sending...</span>}
                    </button>
                    {status === 'success' && <div id="responseMessage" className="response-message" style={{ color: '#00d9ff', marginTop: '1rem' }}>Message sent successfully!</div>}
                    {status === 'error' && <div id="responseMessage" className="response-message" style={{ color: 'red', marginTop: '1rem' }}>Failed to send message. Please try again.</div>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
