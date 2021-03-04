const express = require("express")
var bodyParser = require('body-parser')
const cors = require("cors")
const { Card1, Card2, Card3 } = require("./models/cardModels")
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// ----------------APIs---------------

//creating post api
app.post("/card/api/", (req, res) => {
    console.log(req.body.text)

    // card1 add operation
    if (req.body.card === 1) {

        const newCard = new Card1({ text: req.body.text, countAdd: 1, countUpdate: 0 })
        newCard.save((err) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            }
            else {
                console.log("saved!!")
                res.send(200)
            }
        })
    }
    // card2 add operation

    if (req.body.card === 2) {

        const newCard = new Card2({ text: req.body.text, countAdd: 1, countUpdate: 0 })
        newCard.save((err) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            }
            else {
                console.log("saved!!")
                res.sendStatus(200)
            }
        })
    }

    // card3 add operation

    if (req.body.card === 3) {

        const newCard = new Card3({ text: req.body.text, countAdd: 1, countUpdate: 0 })
        newCard.save((err) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            }
            else {
                console.log("saved!!")
                res.send(200)
            }
        })
    }

})

// creating get post api
app.get("/card/api/", (req, res) => {
    if (req.query.card == 1) {
        Card1.find({}, function (err, data) {
            if (!err) {
                if (data) {
                    res.json(data[data.length - 1])
                }
            } else {
                console.log(err)
            }

        })
    }
    else if (req.query.card == 2) {
        Card2.find({}, function (err, data) {
            if (!err) {
                if (data) {
                    res.json(data[data.length - 1])
                }
            } else {
                console.log(err)
            }

        })
    }
    else if (req.query.card == 3) {
        Card3.find({}, function (err, data) {
            if (!err) {
                if (data) {
                    res.json(data[data.length - 1])
                }            } else {
                console.log(err)
            }

        })
    }
})


// creating patch api

app.patch("/card/api", function (req, res) {
    if (req.body.card == 1) {
        Card1.find({}, function (err, data) {
            if (!err) {
                id = data[data.length - 1]._id
                Card1.findByIdAndUpdate(id, { text: req.body.text }, (err, docs) => {
                    if (!err) {
                        res.sendStatus(200)
                    }
                    else {
                        console.log(err)
                    }
                })


            } else {
                console.log(err)
            }

        })
    }
    else if (req.body.card == 2) {
        Card2.find({}, function (err, data) {
            if (!err) {
                id = data[data.length - 1]._id
                Card2.findByIdAndUpdate(id, { text: req.body.text }, (err, docs) => {
                    if (!err) {
                        res.sendStatus(200)
                    }
                    else {
                        console.log(err)
                    }
                })


            } else {
                console.log(err)
            }

        })

    }
    else if (req.body.card == 3) {
        Card3.find({}, function (err, data) {
            if (!err) {
                id = data[data.length - 1]._id
                Card3.findByIdAndUpdate(id, { text: req.body.text }, (err, docs) => {
                    if (!err) {
                        res.sendStatus(200)
                    }
                    else {
                        console.log(err)
                    }
                })


            } else {
                console.log(err)
            }

        })
    }
})




const port = 9000

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server started at port :" + port)
    }
})