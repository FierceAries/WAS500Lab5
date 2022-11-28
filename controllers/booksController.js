const mongoose = require('mongoose')
let uri = 'mongodb+srv://testuser:testuser@was500.u2a9nl5.mongodb.net/project5?retryWrites=true&w=majority';
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
exports.get = (req, res) => {
    Books.find({}, function(err, data) {
        res.render('booksList', {
            books: data
        })
    })
  }