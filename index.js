const connectToMongo = require('./db');
const express = require('express')
// const cors=require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 6000

app.use(express.json())
// app.use(cors())
app.use('/api/user', require('./routes/user'))
app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})