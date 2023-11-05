const express = require('express')
const router = express.Router()
const task = require('../models/task')
 
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await task.find();
        res.status(200).json({ message: 'hello working', tasks });
    } catch (err) {
        res.status(500).send('Error' + err);
    }
});

// router.get('/tasks:id', async (req, res) => {

//     try {
//         const tasks1 = await task.findById(req.params.id);
//         res.status(200).json({ tasks1});
//     } catch (err) {
//         res.status(500).send('Error' + err);
//     }
// });


router.post('/tasks', async (req, res) => { 
    const newTask = new task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    })

    try {
        const savedTask = await newTask.save()
        res.json(savedTask)
    } catch (err) {
        res.status(500).send('Error')
    }
})

router.patch('/tasks:id', async (req, res) => {
    try {
        const updatedTask = await task.findById(req.params.id);
        updatedTask.title = req.body.title;
        updatedTask.description = req.body.description;
        updatedTask.completed = req.body.completed;
        const savedTask = await updatedTask.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).send('Error');
    }
});



module.exports = router