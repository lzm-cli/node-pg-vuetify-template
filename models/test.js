const dbRaw = require('.')

const test_DDL = `
create table if not exsist test (
  id uuid not null primary key,
  created_at timestamp with time zone default now()
);
`

dbRaw(test_DDL)

exports.getAllTests = () => dbRaw(`SELECT * FROM test`)

exports.getFirstTest = () => dbRaw(`SELECT * FROM test LIMIT 1`)

exports.getTestByID = id => dbRaw(`SELECT * FROM test WHERE id=$1`, [id])

exports.insertTest = id => dbRaw(`INSERT INTO test(id) VALUES($1)`, [id])

exports.updateTest = ({ id, created_at }) =>
  dbRaw(`UPDATE test SET created_at=$2 WHERE id=$1`, [id, created_at])

exports.deleteTestByID = id => dbRaw(`DELETE FROM test WHERE id=$1`, [id])

