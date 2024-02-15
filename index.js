const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config.js');
const routes = require('./routes/task.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})