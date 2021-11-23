const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    medicine: {type: String, required: true},
    details: String,
    quantity: Number,
    date: { type: Date, default: Date.now }
},

    {timestamps: true}
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;