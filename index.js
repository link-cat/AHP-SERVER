const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/matrix.routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/consistence',router)

app.listen(3000,()=>{
console.log("server started on port "+ 3000);
})