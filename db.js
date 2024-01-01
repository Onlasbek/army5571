const Pool = require("pg").Pool
const pool = new Pool({
    'host':'localhost',
    'user':'postgres',
    'password':'Onlasbek1',
    'port': 5432,
    'database':'asu5571'
})

module.exports = pool