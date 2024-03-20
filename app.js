const express = require('express');
const path = require('path')

const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  
  res.sendFile(path.resolve('temp/index.html'))
});



app.listen(port, () => {
  console.log(`Sunucum ${port} 'ta ayağa kalktı. Tebrikler`);
});
