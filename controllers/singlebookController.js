const Books = require('../models/books')
exports.get = (req, res) => {
    console.log(req, res)
    Books.findOne({'_id': req.params.bookID}, function(err, data) {
        res.render('book', {
            book: data
        })
    })
}