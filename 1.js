import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
<<<<<<< HEAD

import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "enok",
  password: "175133Lf",
});
=======
>>>>>>> 3b633c6f95df87fd3979e23f75cfd67a94c551e5

const router = new Router();
router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    });
  })
  .get("/books", (ctx) => {
  getQuery(ctx, { mergeParams: true });
  });

<<<<<<< HEAD
  .get("/books",)=>{

}
//tset 
  .get("/book/:id/page/:page", (ctx) => {
  getQuery(ctx, { mergeParams: true });
});
=======
>>>>>>> 3b633c6f95df87fd3979e23f75cfd67a94c551e5

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// console.log(`${Deno.cwd()}`)

await app.listen({ port: 8080 });
