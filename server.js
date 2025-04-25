const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const attendanceRoutes = require('./routes/attendanceRoutes'); // Ensure this path is correct
const axios = require('axios');
require('dotenv').config(); // Load environment variables
const cors = require('cors');



const app = express();
app.use(cors());

const PORT = 5500;
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://selva91823:Selva91823@cluster0.sxbcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(MONGO_URL, {

})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


const token = '7598595697:AAEnzmM_t9910cHiSF-8GySyf7fnAMIWqb0';
const chatId = '-4665190483'; // Your ID or group chat ID
//const message = 'Hello from my Telegram bot!'; 

app.post('/send-to-telegram', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: message
        });
        res.json({  data: response.data });
    } catch (error) {
        console.error('Telegram error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});



// Routes
app.use('/api/students', attendanceRoutes); // Ensure this path is correct

// Start the server
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));