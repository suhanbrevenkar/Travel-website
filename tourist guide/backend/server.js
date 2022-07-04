const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/travelguru" , { useNewUrlParser: true , useCreateIndex: true ,  useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () =>{
    console.log("connected to mongodb...")
})

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    countryName: String,
    name: String ,
    descrpition : String,
   
})

const Countries = mongoose.model('Countries' , countriesSchema);

app.get('/countries' , function (req , res) {
    Countries.find()
        .then(users =>res.json(users))
        .catch(err => res.satus(400).json('Error ' + err))

})

const signupRouter = require('./routes/userRouter')

app.use('/users' , signupRouter)

app.listen(5000 , () => {
    console.log('Server running on port 5000 ....')
})