export function layout(title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style> 
      #posts {
        margin: 50;
        padding: 50;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],input[type=password],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text],input[type=password] {
        width: 500px;
      }
      .top{
        background:linear-gradient(to right, #5B4B00,#302002)	;
        position: fixed;
        width : 100%;
        padding:15px;
        height: 4%; 
    }
    .top a{
        text-decoration: none;
        color: #f7f79a;
        font-family:" DFKai-sb";
        padding:10px;
        
    }
    .top a:hover{
        background:linear-gradient(to right,#fafab2, #927700);;
        color: 	#292100;
    }
    .right { 
        float: right;  
        padding-right: 3%;      
    }

    .btn{
        border: none;
        outline: none;
        background-color: inherit;          
    }
    
    .down{
        display: none;
        position: absolute;
        background-color: #302002;
        min-width: 60px;
        z-index: 1;
    }
    .down a{
        float: none;
        color: #ddd;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: right;
    }
    .drop{
        float: right;
    }
    
    .drop:hover .down {
        display: block;
    }
    .main {
      margin-bottom: 10px;
      margin-right: auto;
      margin-left: auto;
      width: 90%;
      padding: 10px;
      background-image: url(picture/052-05-2.jpg);
      background-position: center;
      background-size: cover;
      background-repeat: repeat;
  }

    .big {
    padding: 10px 15px;
    }
    .back{
        margin:0;
        background-image: url(picture/052-05-2.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: repeat;
    }
    .all{ 
        background:rgba(30,20,02,0.8) ;
        border-collapse: collapse;
        color: #ffffe2;
        margin-left:auto; 
        margin-right:auto;
        
    }
    </style>
  </head>
  <body class="back" >
    <div class=top>
          <div style=float:left>
              <button class="btn"><a href='/'">留言網</a></button>
          </div>
          <div class=right>
          <button class="btn"><a href='/userpost'>留言紀錄</a></button>
          <div class=drop>
              <button class="btn"><a onclick="Setting.start()">帳號</a></button>
              <div class=down>            
                  <a href="/login">登入</a>
                  <a href="/logout">登出</a>
                  <a href="/signup">註冊</a>
                  
              </div>
          </div>

          <div class=drop>
              <button class="btn"><a >圖片素材來源</a></button>
              <div class=down>
                  <a href="https://kaboompics.com/page/license-and-faq">Kaboompics</a>
                  <a href="https://burst.shopify.com/?ref=techmoon">Burst</a>
                  <a href="https://unsplash.com/images/stock/public-domain">Unsplash</a>
              </div>
          </div>
          <div class=drop>
              <button class="btn"><a>學生資料</a></button>
              <div class=down>
                  <a href="https://github.com/cabdy1735/wp109b">git hub</a>
                  <a href="https://github.com/cabdy1735/wp109b/wiki">期中筆記</a>
                  <a href="https://github.com/cabdy1735/wp109b/tree/main/%E6%9C%9F%E6%9C%AB3">程式碼</a>
                  <a href="https://github.com/cabdy1735/wp109b/blob/main/%E6%9C%9F%E6%9C%AB3/readme.ed">報告</a>
              </div>
          </div>
          
          </div>
      </div>
  </div>
  <div style=height:12%></div>
  <div class="main">
    <section id="content">
      ${content}
    </section>
  </div>
  </body>
  </html>
  `
}

export function loginUi() {
  return layout('Login', `
  <h1>Login</h1>
  <form action="/login" method="post">
    <p><input type="text" placeholder="username" name="username"></p>
    <p><input type="password" placeholder="password" name="password"></p>
    <p><input type="submit" value="Login"></p>
    <p>New user? <a href="/signup">Create an account</p>
  </form>
  `)
}

export function signupUi() {
  return layout('Signup', `
  <h1>Signup</h1>
  <form action="/signup" method="post">
    <p><input type="text" placeholder="username" name="username"></p>
    <p><input type="password" placeholder="password" name="password"></p>
    <p><input type="text" placeholder="email" name="email"></p>
    <p><input type="submit" value="Signup"></p>
  </form>
  `)
}

export function success() {
  return layout('Success', `
  <h1>Success!</h1>
  You may <a href="/">read all Post</a> / <a href="/login">login</a> again !
  `)
}

export function fail() {
  return layout('Fail', `
  <h1>Fail!</h1>
  You may <a href="/">read all Post</a> or <a href="JavaScript:window.history.back()">go back</a> !
  `)
}

export function list(posts, user) {
  console.log('list: user=', user)
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${ post.title } -- by ${post.username}</h2>
      <p><a href="/post/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>${(user==null)?'<a href="/login">Login</a> to Create a Post!':'Welcome '+user.username+', You may <a href="/post/new">Create a Post</a> or <a href="/logout">Logout</a> !'}</p>
  <p>There are <strong>${posts.length}</strong> posts!</p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return layout('Posts', content)
}

export function newPost() {
  return layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form action="/post" method="post">
    <p><input type="text" placeholder="Title" name="title"></p>
    <p><textarea placeholder="Contents" name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
  </form>
  `)
}

export function show(post) {
  return layout(post.title, `
    <h1>${post.title} -- by ${post.username}</h1>
    <p>${post.body}</p>
  `)
}
