const mongoose = require('mongoose'); //JS object-oriented programming library que crea una conexión entre MongoDB y el NodeJS runtime environment

const PieceSchema = new mongoose.Schema({
    id: {
        type: BigInt,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    founded: {
        type: String,
        required: false
    }, 
    img: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Piece', PieceSchema,"Fossils");
//module.exports = mongoose.model('Piece', new mongoose.Schema(), 'Fossils');