import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "a",
  poolSize: 3, // connection limit
  password: "175133Lf",
});
//const DATABASE="a";
//const TABLE={BOOK:"aa"}
//create database
//await client.execute(`CREATE DATABASE IF NOT EXISTS enok`);
await client.execute(`USE a`);
const res=client.execute("SELECT * FROM aa")
console.info(res.rows)
//await client.execute(`USE aa`);
//create table
//await client.execute(`
  //  CREATE TABLE users (
    //    id int(11) NOT NULL AUTO_INCREMENT,
    //    name varchar(100) NOT NULL,
    //    created_at timestamp not null default current_timestamp,
    //    PRIMARY KEY (id)
  //  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
//`);
//insert
// let result = await client.execute(`INSERT INTO aa(name) values(?)`, [  "manyuanrong", ]);
// console.log(result);
//update
// let result1 = await client.execute(`update aa set ?? = ?`, ["name", "MYR"]);
// console.log(result1);
//detele
//  let result = await client.execute(`delete from users where ?? = ?`, ["id", 1]);
//  console.log(result);
//query
// const username = "liufan";
//const users = await client.query(`select * from aa`);
//const queryWithParams = await client.query( `select * from ??` , ["aa"] );
//console.log(users, queryWithParams);
//close
 //await client.close();
export default client;
