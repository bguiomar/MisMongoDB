const mongoose = require('mongoose');


const subjectSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    credits: {
        required: true,
        type: Number
    },
})

const subjectModel = mongoose.model('Subject', subjectSchema)


const studentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    subject: {
        type: mongoose.Types.ObjectId, 
        ref: "Subject"
    }
})

const studentModel = mongoose.model('Student', studentSchema)


module.exports = {subjectModel, studentModel}