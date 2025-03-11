const supertest = require("supertest")
const task = require("../folders/routes/task.routes");
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Test API working ==>>")
})

test("Create a Task", async () => {
    const data = {
        title: "Title 1",
        description: "Description 1",
    };

    const result = await fetchData('http://localhost:3000/tasks/create-task');
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/tasks/create-task');
});

test("Get a Task List", async () => {
    const response = await supertest(task).get('/tasks/get-tasks?page=0&limit=-1');
    console("Task List with Page ==> 0")
    expect(response.statusCode).toBe(201);
    expect(response.status).toBe(true);
});
