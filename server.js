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

const collection = mongoose.model('3rd_year', {
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: Number,
    required: true,
    unique: true
  },
  attendance: {
    type: Number,
    required: true
  },
  history: {
    type: Array,
    default: []
  },
  TotalWorkDays: {
    type: Number,
    default: 0,

  },

});
const data = [
  /* {
   name : "TWD",
   rollno : 951322,
   attendance : 0,
   history : [],
   TotalWorkDays : 0,
 }
{

 name: "Ahishajeslin",
 rollno: 22104001,
 attendance: 0,
 history: [],
 TotalWorkDays: 0,

},
{
 name : "Akila",
 rollno : 22104002,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "arumuganainar",
 rollno : 22104003,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Asfar",
 rollno : 22104004,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Ashwindevashir",
 rollno : 22104005,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
},
{
 name : "cathrinwinsmilein",
 rollno : 22104006,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Davidsolomonraj",
 rollno : 22104007,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Derekjebasraj",
 rollno : 22104008,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Dharshini",
 rollno : 22104009,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Esakkimuthulogesh",
 rollno : 22104010,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Gerald",
 rollno : 22104011,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Godsonazariah",
 rollno : 22104012,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Immanuel",
 rollno : 22104014,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jackshiya",
 rollno : 22104015,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jayashree",
 rollno : 22104016,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jencyruby",
 rollno : 22104018,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Janifar",
 rollno : 22104019,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jenispriya",
 rollno : 22104021,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jenitha",
 rollno : 22104022,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Jeyadharshini",
 rollno : 22104023,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Keerthana",
 rollno : 22104025,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Kingslingibson",
 rollno : 22104026,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Kowsika",
 rollno : 22104027,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Lakshmi",
 rollno : 22104029,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Logamanoj",
 rollno : 22104030,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Mariakavin",
 rollno : 22104031,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Marimuthu",
 rollno : 22104032,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Maxvelyabes",
 rollno : 22104033,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Muthulakshmi",
 rollno : 22104034,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Muthuraja",
 rollno : 22104035,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Nagalakshmi",
 rollno : 22104036,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Nandhakumar",
 rollno : 22104037,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Petchiammal",
 rollno : 22104039,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
   name: "Prema",
   rollno: 22104040,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Princy",
   rollno: 22104041,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Renuka",
   rollno: 22104042,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Sahayaabinaya",
   rollno: 22104043,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Samroshan",
   rollno: 22104044,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Santhasri",
   rollno: 22104045,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Santhoshraman",
   rollno: 22104046,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Saranya",
   rollno: 22104047,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Shunmugapriya",
   rollno: 22104048,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Shunmugasundaram",
   rollno: 22104049,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
 name : "Sivasakthi",
 rollno : 22104050,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Solomonraja",
 rollno : 22104051,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Sowmiya",
 rollno : 22104052,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Steffinajesrin",
 rollno : 22104053,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
},
{
 name : "Subburaj",
 rollno : 22104054,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Sudharsan",
 rollno : 22104055,
 attendance : 0,
 history : [],
 TotalWorkDays : 0,
},
{
 name : "Sujitha",
 rollno : 22104056,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
},
{
   name: "Sushmidha",
   rollno: 22104057,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Vanitha",
   rollno: 22104058,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Yukeshkumar",
   rollno: 22104060,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Abishekabraham",
   rollno: 22104301,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "JebaseelanReginald",
   rollno: 22104302,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Jebastin",
   rollno: 22104303,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Michealroshan",
   rollno: 22104304,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
   name: "Mosesjonesjulion",
   rollno: 22104305,
   attendance: "0",
   history: [],
   TotalWorkDays: "0"
},
{
 name : "Thomasedison",
 rollno : 22104306,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
},
{
 name : "Mariaaaron",
 rollno : 22104701,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
},
{
 name : "Amibha",
 rollno : 22104702,
 attendance : 0,
 history : [],
 TotalWorkDays : 0
}, */
]

//collection.insertMany(data);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Route to fetch all records from the 3rd_year collection
app.get('/api/3rd_year', async (req, res) => {
  try {
    const records = await collection.find(); // Fetch all records from the 3rd_year collection
    res.json(records); // Send the records as a JSON response
  } catch (error) {
    console.error('Error fetching data from 3rd_year collection:', error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});
// Get count of all records in 3rd_year collection
app.get('/api/3rd_year/count', async (req, res) => {
  try {
    const count = await collection.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error counting 3rd_year collection:', error);
    res.status(500).json({ message: 'Failed to count data' });
  }
});

// Get a single student from 3rd_year collection by rollno
app.get('/api/3rd_year/:rollno', async (req, res) => {
  try {
    const rollno = Number(req.params.rollno); // Ensure rollno is a number
    const student = await collection.findOne({ rollno: rollno });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ message: 'Failed to fetch student' });
  }
});

// Update a student in 3rd_year collection by rollno
app.put('/api/3rd_year/:rollno', async (req, res) => {
  try {
    const attendance = await collection.findOne({ rollno: req.params.rollno });
    console.log(attendance);
    console.log(req.params.rollno);
    console.log(req.body.attendance);

    if (!attendance) {
      return res.status(404).json({ message: 'Student not found' });
    }
    if (req.params.rollno == 951322 && req.body.historyDecision == "Reset") {
      attendance.TotalWorkDays = 0;
    }
    if (req.params.rollno == 951322) {
      // Update TotalWorkDays and ensure attendance is set
      attendance.TotalWorkDays += req.body.TotalWorkingDays || 0;
      attendance.attendance = attendance.attendance || 0; // Ensure attendance is set

    } else {
      // Update attendance and history
      attendance.attendance += req.body.attendance || 0;

      const historyDecision = req.body.historyDecision || ""; // Default to an empty string if undefined
      // console.log(req.body.attendance);
      // console.log(historyDecision);

      if (historyDecision === "") {
        // No action needed
      } else if (historyDecision === "Reset") {
        attendance.history = [];
        attendance.attendance = 0;
        attendance.TotalWorkDays = 0;

      } else {
        attendance.history.push(historyDecision);
      }
    }
    const updatedAttendance = await attendance.save();
    res.json(updatedAttendance);
  } catch (error) {
    console.error('Error updating 3rd_year student:', error);
    res.status(400).json({ message: error.message });
  }
});

//const message = 'Hello from my Telegram bot!'; 

app.post('/send-to-telegram', async (req, res) => {
  const { message } = req.body;

  try {
    const token = '7598595697:AAEnzmM_t9910cHiSF-8GySyf7fnAMIWqb0';
    const chatId = '-4665190483'; // Your ID or group chat ID
    const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
    res.json({ data: response.data });
  } catch (error) {
    console.error('Telegram error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
//8164374999:AAGMFgGcMsGPBdTOX8Ji0TtfwqtDKadtAyU
//8055449636
app.post('/send-to-telegram-3rd-year', async (req, res) => {
  const { message } = req.body;
  const token = '8164374999:AAGMFgGcMsGPBdTOX8Ji0TtfwqtDKadtAyU'; // replace with your bot token
  const chatId = '-1002529226717'; // replace with your chat id

  try {
    const axios = require('axios');
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message,
    });
    res.json({ success: true, result: response.data });
  } catch (error) {
    console.error('Error sending Telegram message:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});


// Routes
app.use('/api/students', attendanceRoutes); // Ensure this path is correct
//app.use('/api/3rd_year', attendanceRoutes); // Ensure this path is correct

// Start the server
app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));