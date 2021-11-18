const express = require("express");
const taskRouter = express.Router();
const Task = require("../models/task.js");

// Export
module.exports = taskRouter;

// ROUTES
taskRouter.get("/", async (req, res) => {
    try {
        res.json(await Task.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

taskRouter.post("/", async (req, res) => {
    try {
        res.json(await Task.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})