require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        const newContact = new Contact({
            name,
            email,
            message
        });

        const contact = await newContact.save();

        res.status(200).json({ success: true, message: 'Message received successfully!', data: contact });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
