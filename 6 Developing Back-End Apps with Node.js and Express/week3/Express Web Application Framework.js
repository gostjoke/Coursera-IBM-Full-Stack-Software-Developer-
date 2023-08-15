// new express()
const express = require('express');
const app = new express();

// express.listen()
app.listen(3333, () => {
    console.log('Listening at http://localhost:3333')
  })

//  express.get();
// handles GET queries to end point /user/about/id.
app.get('user/about/:id', (req,res)=>{
    res.send('Response about user '
    +req.params.id)
  
  })

//  express.post();
// handles POST queries to the same end point.
app.post('user/about/:id', (req,res)=>{
    res.send('Response about user '
    +req.params.id)
  })

//  express.use()
const express = require("express");
const app = express();

function myLogger(req, res, next) {
  req.timeReceived = Date();
  next();
}
app.use(myLogger);
app.get("/", (req, res) => {
  res.send("Request received at " + req.timeReceived + " is a success!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// express.Router()
const express = require("express");
const app = express(); // 创建 express 应用实例

let userRouter = express.Router(); // 创建用户路由实例
let itemRouter = express.Router(); // 创建物品路由实例

userRouter.use(function (req, res, next) {
  console.log("User query time:", Date());
  next();
});

userRouter.get("/:id", function (req, res, next) {
  res.send("User " + req.params.id + " last successful login " + Date());
});

// express.static()
const express = require("express");
const app = express(); // 创建 express 应用实例

app.use(express.static("cad220_staticfiles"));

app.listen(3333, () => {
  console.log("Listening at http://localhost:3333");
});

// jsonwebtoken.sign()
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");

const app = express();

const JWT_SECRET = "your_secret_key"; // 用于签署 JWT 的密钥，需要保密

app.use(express.json());

app.post("/login", (req, res) => {
  const { uname, pwd } = req.body;

  if (uname === "user" && pwd === "password") {
    const token = jsonwebtoken.sign({ user: "user" }, JWT_SECRET);
    return res.json({
      token: token,
    });
  } else {
    return res.status(401).json({ message: "Authentication failed" });
  }
});

app.listen(3333, () => {
  console.log("Listening at http://localhost:3333");
});


// jsonwebtoken.verify()
const verificationStatus =   jsonwebtoken.verify(tokenValue, "aVeryVerySecretString");

// Project folder strucure
test-project/
   node_modules/
   config/
     db.js           //Database connection and configuration
     credentials.js  //Passwords/API keys for external services used by your app
   models/            //For mongoose schemas
      items.js
      prices.js
   routes/           //All routes for different entities in different files
      items.js
      prices.js
   app.js
   routes.js         //Require all routes in this and then require this file in
   package.json