const express = require('express')
const mongoose = require('mongoose')
const app = express()
homeController = require("./controllers/homeController")
app.use(express.static('public'))
let uri = 'mongodb+srv://testuser:testuser@cluster0.drxe2xa.mongodb.net/project5?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Successfully connected')
    }
})
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
    name: String,
    author_name: String,
    description: String,
    book_image: String
})

const Books = mongoose.model("books", BooksSchema)
app.set('view engine', 'ejs')

app.get('/', homeController.get)

app.get('/home', homeController.get)

app.get('/contactus', (req, res) => {
    res.render('contactus');
})

app.get('/contactus', (req, res) => {
    res.render('contactus');
})

app.get('/surveypage', (req, res) => {
    res.render('surveypage');
})

app.get('/honesty', (req, res) => {
    res.render('honesty');
})



app.get('/booksList', (req, res) => {
    Books.find({}, function(err, data) {
        res.render('booksList', {
            books: data
        })
    })
})

app.get('/books/:bookID', (req, res) => {
    Books.findOne({'_id': req.params.bookID}, function(err, data) {
        res.render('book', {
            book: data
        })
    })
})
app.get('*', function(req, res){
    res.status(404).send('The page you are looking for was not found!');
  })
app.listen(3000)