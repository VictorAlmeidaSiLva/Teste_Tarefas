const express = require('express');
const { Tarefas } = require('./models')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        res.send(await Tarefas.findAll())
    }
    catch (err){
        next(err);
    }
    
});

router.post('/', async(req, res) => {
    res.status(200).send(await Tarefas.create(req.body))
})

router.get('/:id' , async (req, res) => {
    let tarefa = await Tarefas.findByPk(req.params.id)
    tarefa.set(req.body)
    await tarefa.save()
    res.send(tarefa)
})

router.delete('/:id', async (req,res) => {
    (await Tarefas.findByPk(req.params.id)).destroy()
    res.status(200).send('ok')
})

router.put('/:id', async (req, res) => {
     let putTarefa = await Tarefas.findByPk(req.params.id)
    putTarefa.set(req.body)
    await putTarefa.save()
    res.send(putTarefa)
})
module.exports = router;