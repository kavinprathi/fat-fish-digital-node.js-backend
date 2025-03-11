const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');
const taskRoutes = require('./folders/routes/task.routes');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//App routes <-- START -->
app.use(`/${process.env.SUBDOMAIN}/${process.env.VERSION}/tasks`, taskRoutes);
//App routes <-- END -->

module.exports = app;
