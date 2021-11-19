const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    medicine: {type: String, required: true
},
    details: String
},
    {timestamps: true}
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;