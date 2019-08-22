const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    // sqlite! now!
    dialect: 'sqlite',

    // the storage engine for sqlite
    // - default ':memory:'
    storage: 'database/database.sqlite',

    // disable logging; default: console.log
    logging: false,
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync(
    // { force: true }
)