const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize( process.env.NODE_ENV == 'test' ? 'sqlite::memory' : 'sqlite:./db.sqlite');


const Tarefas = sequelize.define('Tarefas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    concluida: {
        type: DataTypes.STRING,
        validate: {
            isIn: [
                ['Sim', 'Não', 'sim', 'não'] 
            ]

        }
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true,
        }
    }
})


module.exports = { sequelize, Tarefas }