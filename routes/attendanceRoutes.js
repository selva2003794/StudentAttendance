const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceSchema');

// Route to get all attendance records
router.get('/', async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.json(attendanceRecords);
        //console.log(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to get the count of attendance records
router.get('/count', async (req, res) => {
    try {
        const count = await Attendance.countDocuments();
        res.json({ count });
        //console.log(count);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Route to add a new attendance record
router.post('/', async (req, res) => {
    const attendance = new Attendance({
        name: req.body.name,
        rollno: req.body.rollno,
        attendance: req.body.attendance,
        history: req.body.history
    });

    try {
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get(`/:rollno`, async (req, res) => {
    try {
        const Student = await Attendance.findOne({ rollno: req.params.rollno });
        if (!Student) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json(Student);
        console.log(Student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//   router.get('/:_id', async (req, res) => {
//     try {
//       const TotalWorkDays = await Attendance.findOne({_id : "4321"});
//       if (!TotalWorkDays) return res.status(404).json({ error: 'Total Working days not found' });
//       res.status(200).json(TotalWorkDays);
//       console.log(TotalWorkDays);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


// Route to update attendance
router.put('/:rollno', async (req, res) => {
    try {
        const attendance = await Attendance.findOne({ rollno: req.params.rollno });
        if (!attendance) {
            return res.status(404).json({ message: 'Student not found' });
        }
        console.log(req.params.rollno);
        console.log(req.body.TotalWorkingDays);
        console.log(attendance.count);
        console.log(attendance);
        console.log(attendance.TotalWorkDays);
        if(req.params.rollno == 951323 && req.body.historyDecision == "Reset") {
            attendance.TotalWorkDays = 0;
        }
        if (req.params.rollno == 951323) {
            // Update TotalWorkDays and ensure attendance is set
            attendance.TotalWorkDays += req.body.TotalWorkingDays || 0;
            attendance.attendance = attendance.attendance || 0; // Ensure attendance is set

        } else {
            // Update attendance and history
            attendance.attendance += req.body.attendance || 0;

            const historyDecision = req.body.historyDecision || ""; // Default to an empty string if undefined
            console.log(req.body.attendance);
            console.log(historyDecision);

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
        res.status(400).json({ message: error.message });
    }
});

// Route to delete a student
router.delete('/:rollno', async (req, res) => {
    try {
        const attendance = await Attendance.findOneAndDelete({ rollno: req.params.rollno });
        if (!attendance) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;