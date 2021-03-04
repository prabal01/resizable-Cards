const mongoose = require("mongoose");
url = "mongodb+srv://prabalsaxena:SLJ5JNqzhUNnj07J@cluster0.bx5np.mongodb.net/precilyProjectDB"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("connected to mongoDB")
    }
})
mongoose.set('useFindAndModify', false);

// schemas for cards

const card1Schema = new mongoose.Schema({
    text: String,
    countAdd: Number,
    countUpdate: Number
})
const card2Schema = new mongoose.Schema({
    text: String,
    countAdd: Number,
    countUpdate: Number
})
const card3Schema = new mongoose.Schema({
    text: String,
    countAdd: Number,
    countUpdate: Number
})


const Card1 = mongoose.model("card1Collection", card1Schema)
const Card2 = mongoose.model("card2Collection", card2Schema)
const Card3 = mongoose.model("card3Collection", card3Schema)

module.exports = { Card1, Card2, Card3 };