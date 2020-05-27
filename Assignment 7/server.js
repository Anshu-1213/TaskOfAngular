const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');
// const port = 4000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

app.get('/',(req,res) => {
  res.send("hello world")
})
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(3000, function(){
    console.log("Server running on localhost: 3000");
});