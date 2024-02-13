const express=require('express');
require('./db');
const port = 5000;
const app = express()
var cors = require('cors')
 
app.use(cors())

app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));



app.get("/",(req,res)=>{
  res.send("hello there");
})

app.listen(port, () => {
  console.log(`CloudNotes backend listening on http://localhost:${port}`)
})