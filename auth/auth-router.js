const router = require("express").Router();
const bcrypt = require("bcryptjs"); //for hashing passwords
const jwt = require("jsonwebtoken"); //for setting up web tokens

const usersDB = require("../database/dbConfig"); ///calling the db
const { jwtSecret } = require("../config/secrets");

//register set up here
router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  usersDB
  .add(user)
  .then(save => {
    res.status(201).json(save)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

//set up login here
router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body

  usersDB.findBy({ username })
  .first()
  .then(user =>{
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)

      res.status(200).json({
        message: `welcome ${user.username}.`,
        token,
      })
    } else {
      res.status(401).json({message: "invaild credentials"})
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })

});

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role || "user",
  }

  const options= {
    expiresIn: "1h",
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
