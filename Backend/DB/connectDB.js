const mongoose =require('mongoose')

const connect = ()=>{
    mongoose.set('strictQuery', true);
    new mongoose.connect(process.env.MONGO_URI,{

    }).then(()=>console.log('Database is connected'))
    .catch((error)=>console.log('Database is not connected'));
}

module.exports = connect