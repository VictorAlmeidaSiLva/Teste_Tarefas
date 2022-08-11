const { sequelize, Tarefas } = require('./models');

describe('Tarefas', () => {


    beforeAll(async () => {
        await sequelize.sync({ logging: true });
    });

    beforeEach(async () => {
        await Tarefas.truncate();
    });

    test("Tarefas com todos os dados válidos", async() => {
        const tarefa = await Tarefas.create({
            titulo: " Limpar cozinha ",
            descricao: " Limpeza completa na cozinha ",
            concluida: "sim",
            data: "08/08/2022"
        });
        expect(tarefa.id).toBeGreaterThan(0);

    });

    test("Tarefa sem titulo", async() => {

        await expect(Tarefas.create({
            descricao: " Limpeza completa na cozinha ",
            concluida: "sim",
            data: "08/08/2022"
        })).rejects.toThrow();

        await expect(Tarefas.create({
            titulo: " ",
            descricao: " Limpeza completa na cozinha ",
            concluida: "sim",
            data: "08/08/2022"
        })).rejects.toThrow();
        
    });

   


})