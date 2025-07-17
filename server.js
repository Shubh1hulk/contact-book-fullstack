// server.js

// --- 1. Import Dependencies ---
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// --- 2. Initialize Express App ---
const app = express();
const PORT = process.env.PORT || 5002; // Port for the server to run on

// --- 3. Configure Middleware ---
app.use(cors()); // Allows requests from your frontend
app.use(bodyParser.json()); // Parses incoming JSON data from the form

// --- 4. Connect to MongoDB ---
// IMPORTANT: Replace the placeholder below with your actual MongoDB connection string.
// You can get this from MongoDB Atlas (cloud) or your local MongoDB instance.
const MONGO_URI = 'mongodb+srv://pandeyshubhranshu001:hello123@cluster0.yiqxaf8.mongodb.net/'

mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- 5. Define the Data Schema and Model ---
// This defines the structure of the contact documents in your database.
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true }, // Storing date as string for simplicity
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- 6. Define API Routes (Endpoints) ---

// GET /api/contacts - Fetches all contacts from the database
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Get newest first
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
});

// POST /api/contacts - Creates a new contact in the database
app.post('/api/contacts', async (req, res) => {
  try {
    // Create a new contact instance using the data from the request body
    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      dob: req.body.dob
    });

    // Save the new contact to the database
    const savedContact = await newContact.save();
    res.status(201).json(savedContact); // Respond with the saved contact
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Failed to create contact' });
  }
});

// --- 7. Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
