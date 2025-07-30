const express = require('express');
const { request } = require('http');
const path = require('path');
const bodyparser=require("body-parser");
const app = express();
const port = 8000;

//connectind mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
}

//now defining mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

//making collection in mongodb or database
const Contact = mongoose.model('Contact', contactSchema);


//EXPRESS SPECIFIC STUFF

// for serving static files
// here '/static' is url and 'static is folder'
app.use('/static', express.static('static'))
//her the below line is used for to recive data comming from html. like here our data is coming from the html form made for gym
app.use(express.urlencoded())



//PUG SPECIFIC STUFF.
//set the template engine as pug t
app.set('view engine', 'pug') //taken from google
//set the views directort/folder
app.set('views', path.join(__dirname, 'views'));



//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})
//post request
app.post('/contact', (req, res) => {
    //jb bhi koi 'post request' mare to kia ho. to aik new object ke ander data save ho jaye. (.then) use hwa promise ko handle krne ke lia . q ke node js me jb data save hota h to .save ik promise retun krta h
    var myData= new Contact(req.body);
    myData.save().then(()=>{
        res.send("item is saved to data base")
    })
    //if error comes up then
    .catch(()=>{
        res.status(400).send("item is not saved to database")
    })

    
    // res.status(200).render('contact.pug');
})



//LISTENING , START THE SERVER
app.listen(port, () => {
    console.log("the application is started successfully on port 8000")
})