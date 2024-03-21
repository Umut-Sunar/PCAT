const express = require('express');
const path = require('path')

// Templete engine modülünü ekle
const ejs = require('ejs')

const app = express();
const port = 3000;


const middleware = (req,res,next) => {

console.log("middel ware geldi")
next()

}

// Express'in static dosyaları okuması için klasör 
app.use(express.static('public'));

//Templete engine

app.set('view engine','ejs')


app.use(middleware)

app.get('/', (req, res) => {
  
  res.render('index')
});
app.get('/about', (req, res) => {
  
  res.render('about')
});
app.get('/contact', (req, res) => {
  
  res.render('contact')
});
app.get('/about', (req, res) => {
  
  res.render('about')
});

app.listen(port, () => {
  console.log(`Sunucum ${port} 'ta ayağa kalktı. Tebrikler`);
});
