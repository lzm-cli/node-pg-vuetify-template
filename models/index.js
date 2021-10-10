const pgsql = require('pg')
const { database } = require('../config.json')

let pool = new pgsql.Pool(database)
const getConnect = async function () {
  try {
    return await pool.connect()
  } catch (e) {
    await new Promise(resolve => setTimeout(resolve, 500))
    pool = new pgsql.Pool(database)
    return getConnect()
  }
}


const raw = async function (sql, params) {
  let client = await getConnect()
  try {
    let { rows } = await client.query(sql, params)
    return rows
  } catch (e) {
    console.log(`sql error...:${e}
sql: ${sql}
params: ${JSON.stringify(params, null, 2)}
    `)
  } finally {
    await client.release()
  }
}

module.exports = raw
