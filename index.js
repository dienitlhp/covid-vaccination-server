const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const data = require('./data.json')

const fs = require('fs')

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

app.get('/', (req, res) => {
  res.send(data)
});

app.post('/', (req, res) => {
  const jsonString = JSON.stringify(req.body.data);
  fs.writeFileSync('./data.json', jsonString)

  res.send('OK');
})

app.listen(process.env.PORT || 3000);