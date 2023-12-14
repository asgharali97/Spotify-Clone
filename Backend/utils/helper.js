const jwt = require('jsonwebtoken')
require('dotenv').config(); 
exports ={}

const  getToken  = async(email,user) =>{
  const token =jwt.sign({identifier : user._id},process.env.hkey)
  return token
}

module.exports = getToken