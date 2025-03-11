const Task = require('../models/task.model');

exports.saveTask = async (task) => {
    return await new Task(task).save();
}

exports.getHealth = async (page, limit) => {
    return await Task.find().skip(page).limit(limit == -1 ? 0 : limit);
}

exports.getTasks = async (page, limit) => {
    return await Task.find().skip(page).limit(limit == -1 ? 0 : limit);
}

exports.getTaskById = async (id) => {
    return await Task.findById(id)
}

exports.updateTask = async (id, task) => {
    return await Task.findByIdAndUpdate(id, task, { new: true });
}

exports.deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
}
