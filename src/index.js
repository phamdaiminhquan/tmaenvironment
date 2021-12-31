var apiTMA = new Array({
    NODE_ENV: 'TMA',
    SEQUELIZE_DATA_NAME: 'dbdemo',
    SEQUELIZE_USER_NAME: 'root',
    SEQUELIZE_PASSWORD: '',
    SEQUELIZE_HOST: 'localhost',
    SEQUELIZE_DIALECT: 'mysql',
});

var jsonArray = JSON.parse(JSON.stringify(apiTMA))

console.log(jsonArray);
module.exports = jsonArray