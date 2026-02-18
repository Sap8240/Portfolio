const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Contact Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Log the message (In a real app, save to DB or send email)
    console.log('New Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Simulate success
    res.status(200).json({ success: true, message: 'Message received successfully!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
