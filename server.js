const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");


if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY)

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function(req, res){
        res.sendFile(express.static(path.join(__dirname, "client/build", "index.html")))
    });
}


app.listen(port, error =>{
    if (error) throw error;

    console.log("Server running at port: ", port)
});


app.post("/payment", (req, res) =>{
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd"
    }
    
    stripe.charge.create(body, (stripeErr, stripeRes) =>{
        if (stripeErr){
            res.status(500).send({error: stripeErr})
        }else{
            res.status(200).send(stripeRes)
        }
    })

});