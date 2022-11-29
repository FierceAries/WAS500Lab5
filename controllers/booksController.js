const Books = require('../models/books')
exports.get = (req, res) => {
    console.log(req, res)
    Books.find({}, function(err, data) {
        res.render('booksList', {
            books: data
        })
    })
}