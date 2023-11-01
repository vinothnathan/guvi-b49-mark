const bodyParser = require ("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL; 

mongoose
    .connect(DB_URL,{})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB",err));

    //Create API to Create Mentor

    app.post("/mentor", async (req,res) => {
        try {
            const mentor = new Mentor(req.body);
            await mentor.save();
            res.status(201).send(mentor);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    //Create API to Create Student
    
    app.post("/student", async (req,res) => {
        try {
            const student = new Student(req.body);
            await student.save();
            res.status(201).send(student);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    //Create API to Assign Student to Mentor

    app.post("/mentor/:mentorId/assign", async (req,res) => {
        try {
           const mentor = await Mentor.findById(req.params.mentorId);
           const students = await Student.find({'_id':{$in: req.body.students} });
    
           students.forEach((student) => {
            student.cMentor = mentor._id;
            student.save();
           });
    
           mentor.students = [
             ...mentor.students,
             ...students.map((student) => student._id),
           ];
            await mentor.save();
            res.send(mentor);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    //Create API to Assign or Change Mentor for a Student

    app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
        try{
            const mentor = await Mentor.findById(req.params.mentorId);
            const student = await Student.findById(req.params.studentId);
    
            if (student.cMentor) {
                student.pMentor.push(student.cMentor);
            }
    
            student.cMentor = mentor._id;
            await student.save();
            res.send(student);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    //Create API to Show Students for a Particular Mentor

    app.get("/mentor/:mentorId/students", async (req, res) => {
        try {
        const mentor = await Mentor.findById(req.params.mentorId).populate(
            "students"
        );
        res.send(mentor);
        } catch (error) {
            res.status(400).send(error);
        }
    });  
    
         //Create API to Show Previously Assigned Mentor for a Student

    app.get('/app/student/:studentId/previous-mentor', async (req, res) => {
        
        try {
          const student = await Student.findById(req.params.studentId);
          const previousMentor = await Mentor.findById(student.previousMentor);

          res.status(200).json({ previousMentor });
          } catch (error) {
           res.status(500).json({ message: 'Internal server error' });
        }
      });
      
    app.listen(PORT, () => {
        console.log("Server is running on PORT",PORT);
    });    
