const mongoose = require('mongoose') //here we define mongoose for mngodb
let uri = 'mongodb+srv://testuser:testuser@cluster0.drxe2xa.mongodb.net/project5?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Successfully connected: localhost 3000') //makes a connection and upon successful connection returns Successfully Connected.
    }
})
// here we fetch the books schema
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
    name: String,
    author_name: String,
    description: String,
    book_image: String
})
// here we are dealing with books and render the Books list page
let Books = mongoose.model("books", BooksSchema)
exports.get = (req, res) => {
    Books.find({}, function(err, data) {
        res.render('booksList', {
            books: data
        })
        console.log(req, res)
    })
  }