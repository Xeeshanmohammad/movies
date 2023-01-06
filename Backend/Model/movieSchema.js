const mongoose = require('mongoose')


const MovieSchema = new mongoose.Schema({

    movieName :{
        type:String,
        required:true,
        unique:true
    },
    rating:{
        type:Number,
        required:true
    },
    releasedDate:{
        type:Date,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('Movies', MovieSchema)