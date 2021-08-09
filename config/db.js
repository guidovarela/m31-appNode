//Conexion MySQL
const Sequelize = require('sequelize')

/*conexion local -> wamp
let database = 'utn2021'
let userMYSQL = 'root'
let passMySQL = ''
let hostMySQL = '127.0.0.1'*/

//Conexion a Heroku
//mysql://b9d288e326c067:ad7d4dbf@eu-cdbr-west-01.cleardb.com/heroku_7ec77051f3a3e63?reconnect=true
let database = "heroku_7ec77051f3a3e63"
let userMYSQL = "b9d288e326c067"
let passMySQL = "ad7d4dbf"
let hostMySQL = "eu-cdbr-west-01.cleardb.com"

const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

module.exports = db;