const mongoose = require('mongoose');

const dbConnection =async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('DB online');
    } catch (error) {
        throw new Error('error coneccion con la bse de datos');
    }
}
module.exports = dbConnection;