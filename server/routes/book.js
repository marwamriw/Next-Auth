const express = require ("express")
const router = express.Router();
const { booksControllers } = require("../controllers/book")

router.post ('/book', booksControllers.Add )
router.get ("/books", booksControllers.Find)


module.exports.booksRoute = router