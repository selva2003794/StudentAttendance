const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
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
        type:Number,
        default : 0,
        
    },
});

module.exports = mongoose.model('students', attendanceSchema);