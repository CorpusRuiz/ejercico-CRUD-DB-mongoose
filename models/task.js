const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: String,
        completed: Boolean,
    },
    { timestamps: true}
)

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;