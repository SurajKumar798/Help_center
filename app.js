const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');
const Card = require('./CardModel')
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/cardDetails', async(req, res) => {
    try{
        const cards = await Card.find();
        res.send(cards)
    }catch(err){
       console.log(err)
       res.status(500).send('server error')
    }
})

app.get('/cardDetails/:card_id', async(req, res) => {
   
   try{
    const card =  await Card.findOne({ card_id: req.params.card_id })
    if(!card){
        return res.status(404).send('card not found');
    }
    res.json(card);
   }catch(err){
    console.log(err);
        res.status(500).send("Internal server error");
   }

})

mongoose.connect("mongodb://localhost:27017/help-center", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit();
});

app.listen(port, ()=> {
   console.log(`server starts on port ${port}`);
})