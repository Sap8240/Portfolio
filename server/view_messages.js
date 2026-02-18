require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');
const connectDB = require('./config/db');

const viewMessages = async () => {
    try {
        await connectDB();

        const contacts = await Contact.find().sort({ date: -1 });

        console.log('\n--- Contact Form Submissions ---\n');

        if (contacts.length === 0) {
            console.log('No messages found.');
        } else {
            contacts.forEach((contact, index) => {
                console.log(`#${index + 1}`);
                console.log(`Date:    ${new Date(contact.date).toLocaleString()}`);
                console.log(`Name:    ${contact.name}`);
                console.log(`Email:   ${contact.email}`);
                console.log(`Message: ${contact.message}`);
                console.log('-----------------------------------');
            });
        }

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

viewMessages();
