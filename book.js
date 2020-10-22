import client from "./db.js";

class Book{
 findAll(){
   return client.execute(SELECT * FROM a);
   }
  
 create({id,name,address}){
    return client.execute('INSERT INTO a (id,name,address) VALUES (${id},${name},${address})')
   }
}

const bookModel=new Book();

export const bookAll=async()=>{
    return await bookModel.findAll();
}

export const bookSel=async(id)=>{
   console.info("~~~~~~~~query id: ",id)
   console.log('SELECT id,name,address FROM a WHERE id=${id} ORDER BY id LIMIT 10');
   return await client.execute('SELECT id,name,address FROM a WHERE id=${id} ORDER BY id LIMIT 10');
}
