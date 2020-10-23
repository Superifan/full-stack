import client from "./da.js";

class Book{
 findAll(){
   return client.execute("SELECT * FROM aa");
   }
  
 create({id,name,address}){
    return client.execute(`INSERT INTO aa (id,name,sex,address) VALUES (${id},${name},${sex}${address})`)
   }
}

const bookModel=new Book();

export const bookAll=async()=>{
    return await bookModel.findAll();
}

export const bookSel=async(id)=>{
   console.info("~~~~~~~~query id: ",id)
   console.log(`SELECT * FROM aa WHERE id=${id}`);
   return await client.execute(`SELECT * FROM aa WHERE id=${id}`);
}
