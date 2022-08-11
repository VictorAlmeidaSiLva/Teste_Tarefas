const express = require ('express');
const cors = require ('cors');
const tarefaRoutes = require('./tarefasRoutes')


const app = express();
app.use(express.json());
app.use(cors());

app.use('/tarefas', tarefaRoutes);

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('error');
})

module.exports = app;