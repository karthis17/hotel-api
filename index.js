const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ("mongoose");
const Hotel = require("./model/room.model.js");
const Customers = require("./model/customer.model.js");
const Contact = require("./model/contact.model.js");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.get('/api/rooms', (req, res) => {
    Hotel.find().then(data => res.send(data));
});

app.get('/api/rooms/get/:id', (req, res) => {
    try{
    Hotel.findById(req.params.id).exec().then((data) => {res.send(data)}).catch((err) => {console.log(err)});
    } catch(err) {res.send(err)}
});

app.post('/api/customer/create', async (req, res) => {
    try{
    await Customers.create(req.body).then((data) => {res.send(data)}).catch((err) => {console.log(err)});
    } catch(e){
        console.log(e);
        res.statusCode(404);
        res.send({"error": e});
    }
});

app.post('/api/contact/create', async (req, res) => {
    try{
    await Contact.create(req.body).then((data) => {res.send(data)}).catch((err) => {console.log(err)});
    } catch(e){
        console.log(e);
        res.statusCode(404);
        res.send({"error": e});
    }
});

mongoose.connect("mongodb+srv://karthirs602:adminkarthi@cluster0.camz86p.mongodb.net/hotel?retryWrites=true&w=majority").then((res) =>{
    app.listen(port, (req,res) =>{
        console.log(`listening on port ${port} on http://localhost:${port}`);
    });
}).catch((err) =>console.log(err));