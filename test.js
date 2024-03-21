const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//connection
mongoose.connect('mongodb://localhost/pcat-test-db')
// Schema ekle
const  photoSchema= Schema();
