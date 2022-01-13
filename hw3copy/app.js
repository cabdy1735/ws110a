import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'

const posts = [];

const router = new Router();

router.get('/', list)  //
  .post('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
  ctx.response.body = await render.list(posts);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {   
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body() 
  if (body.type === "form") {             
    const pairs = await body.value        
    const post = {}
    for (const [title,value] of pairs) {     
      post[title] = value;                   
    }
    const id = posts.push(post) - 1;        
    post.id = id;                       
    ctx.response.redirect('/');         
  }
}

console.log('Server run at http://127.0.0.1:8034')
await app.listen({ port: 8034 });