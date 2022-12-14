const express = require('express') // using express
const mongoose = require('mongoose') //using mongoose
const app = express()
// require('./models/books')
// defining controller
homeController = require("./controllers/homeController")
booksController = require("./controllers/booksController")
singlebookController = require("./controllers/singlebookController")
app.use(express.static('public'))
//let uri = 'mongodb+srv://testuser:testuser@cluster0.drxe2xa.mongodb.net/project5?retryWrites=true&w=majority'; // connecting mongoDB
// connecting mongodb to mongoose
// mongoose.connect(uri, {
//     useNewUrlParser: true, useUnifiedTopology: true
// }, (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Successfully connected: localhost:3000')
//     }
// })
// defining datasbase datatypes and characteristics
// const Schema = mongoose.Schema;
// const BooksSchema = new Schema({
//     name: String,
//     author_name: String,
//     description: String,
//     book_image: String
// })
// here we use books for BooksSchema
// const Books = mongoose.model("books", BooksSchema)
app.set('view engine', 'ejs')
// here we define our pages which will open on the following links:
app.get('/', homeController.get)

app.get('/home', homeController.get)

app.get('/contactus', (req, res) => {
    res.render('contactus');
    console.log(req, res)
})

app.get('/contactus', (req, res) => {
    res.render('contactus');
    console.log(req, res)
})

app.get('/surveypage', (req, res) => {
    res.render('surveypage');
    console.log(req, res)
})

app.get('/honesty', (req, res) => {
    res.render('honesty');
    console.log(req, res)
})
app.get('/booksList', booksController.get)
// here we get books by ID
app.get('/books/:bookID', singlebookController.get)
app.get('*', function(req, res){
    console.log(req, res)
    res.status(404).send('The page you are looking for was not found!'); //here we return error of page not found, if we run into an error.
  })
app.listen(3000)