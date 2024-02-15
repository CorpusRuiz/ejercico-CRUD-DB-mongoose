const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

router.post('create', async (req, res) =>{
    try {
        const taskTitle = req.body.title;
        const taskCompleted = req.body.completed;
        const task = new Task( { title: taskTitle, completed: taskCompleted});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to create task'});
    }
})

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to view all tasks'});
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        const id = req.params;
        const task = await Task.findById(id)
        res.status(201).json(task);
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to view this task'});
    }
})

router.get('/markAsCompleted/:_id', async (req, res) => {
    try {
        const id = req.params;
        const task = await Task.findByIdAndUpdate(id, {completed: true}, {new: true});
        res.status(201).json(task);
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to mark this task'});
    }
})

router.put('/id/:id', async (req, res) => {
    try {
        const id = req.params;
        const title = req.body.title;
        const task = await Task.findOneAndUpdate(id, {title: title}, {new: true});
        res.status(201).json(task);
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to modify this task'});
    }
})

router.delete('/id/:id', async (req, res) => {
    try {
        const id = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(201).json({message: 'Task deleted'});
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to delete this task'});
    }
})
module.exports = router;