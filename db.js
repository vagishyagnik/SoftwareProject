const Sequelize = require('sequelize')

const db = new Sequelize({
    dialesct: 'sqlite',
    storage: __dirname + '/naam_soch'
})

const Employee_Table = db.define('idha rkya aayega',{
    Job_Title : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : false
    },
    Name : {
        type : Sequelize.STRING,
        allowNull : false,
        unique: false
    },
    Emp_Id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true
    },
    Phone_Number : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : false
    },
    Res_Add : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : false
    },
    Password : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : false
    },
});