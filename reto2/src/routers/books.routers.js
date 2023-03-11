const {Router} = require ("express")
const router = Router();
const bookCtrl = require("../controller/books.controller")

router.get("/books", bookCtrl.getBookId);

// router.get("/books", bookCtrl.getBook);
        
router.post("/books", bookCtrl.postBook);
        
router.put("/books", bookCtrl.putBook);
        
router.delete("/books", bookCtrl.deleteBook); 

module.exports = router;
