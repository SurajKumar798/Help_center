const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    card_id: {
        type: Number,
        required: true,
        unique: true
    },
    header: {
        type: String,
        required: true,
        unique: true
    },
    cardText: {
       type: String,
       required: true
    }
});
module.exports = mongoose.model("card_details", cardSchema); 