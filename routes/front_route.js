const express = require('express');
const router = express.Router();
const Piece = require('../models/Piece'); //de Piece.js se obtiene el modelo 

router.get('/', async (req, res) => {
    try {
        const pieces = await Piece.find();//await Piece.aggregate([{$sort:{ createdAt: -1}}]);
        res.render('../views/index', { //show_pieces.ejs
            data: pieces
        })
        console.log(pieces)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;