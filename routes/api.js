var express = require('express');
var router = express.Router();
const {studentModel, subjectModel} = require('../models/model');


router.get('/find/', async (req, res) => {
     try{
         const data = await studentModel.find({name: req.query.name, age: {$gte: req.query.age}}).exec();
         res.json(data)
     }
     catch(error){
         res.status(500).json({message: error.message})
     }
 })


// //Get all Method
// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //Get by ID Method
// router.get('/getOne/:id', async (req, res) => {
//     try{
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })


//Post Method
router.post('/post_subject', async (req, res) => {
    const data = new subjectModel({
        title: req.body.title,
        credits: req.body.credits
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})


//Post Method
router.post('/post_student', async (req, res) => {
    const data = new studentModel({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})

router.patch('/add_subject/:id', async (req, res) => {
    try{
        const subjet = await subjectModel.findOne({title: req.body.subject})
        const data = await studentModel.findByIdAndUpdate(req.params.id, {age: 30}).exec();

        res.status(200).json(data)
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;
