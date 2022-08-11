const {sequelize, Tarefas} = require('./models');
const request = require ('supertest');
const app = require('./app');

describe ("Rota Tarefas" , () => {

    beforeAll(async() => {
        await sequelize.sync();

        await Tarefas.create({
            titulo:"Limpar banheiro",
            descricao: "Limpar banheiro por completo",
            concluida: "sim",
            data: "01/01/2015"

        })
    });

    test("GET / tarefas", (done) => {
        request(app)
        .get('/tarefas')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);


    });

    test("POST / tarefas", (done) => {
        request(app)
        .post('/tarefas')
        .send({
            titulo:"Limpar sala",
            descricao: "Limpar sala por completo",
            concluida: "sim",
            data: "07/06/2019"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);

    });

    test("POST / tarefas - tarefa duplicado", (done) => {
        request(app)
            .post('/tarefas')
            .send({
                titulo:"Limpar sala",
                descricao: "Limpar sala por completo",
                concluida: "sim",
                data: "07/06/2019"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });


   
});