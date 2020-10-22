import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "192.168.70.1",
  username: "root",
  db: "enok",
  poolSize: 3, // connection limit
  password: "175133Lf",
});
//create database
await client.execute(`CREATE DATABASE IF NOT EXISTS enok`);
await client.execute(`USE enok`);
//create table
await client.execute(`DROP TABLE IF EXISTS users`);
await client.execute(`
    CREATE TABLE users (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        created_at timestamp not null default current_timestamp,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
//insert
let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  "manyuanrong",
]);
console.log(result);
//update
let result = await client.execute(`update users set ?? = ?`, ["name", "MYR"]);
console.log(result);
//detele
//  let result = await client.execute(`delete from users where ?? = ?`, ["id", 1]);
//  console.log(result);
//query
const username = "manyuanrong";
const users = await client.query(`select * from users`);
const queryWithParams = await client.query(
  "select ??,name from ?? where id = ?",
  ["id", "users", 1]
);
console.log(users, queryWithParams);
//close
await client.close();
