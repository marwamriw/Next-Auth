const { bookModel } = require ("../models/book")

const Add = async ( req, res) => {
    try {
        const book = await bookModel.create(req.body);
        res.send  (book)

    } catch (error){
        console.log(error)
    }
};

const Find = async (req , res) => {
    try {
        const books = await bookModel.find()
        res.send (books)

    } catch (error){
        console.log(error)
    }
}


module.exports.booksControllers = {
    Add,
    Find,
};