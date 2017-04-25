/**
 * Created by navina on 25/4/17.
 */
//Bring mongoose into project

var mongoose=require("mongoose");

//build connection string
var dbURI='mongodb://localhost/poc';

// Create the database connection
mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});


var dishSchema=new mongoose.Schema({
   name:{type:String,unique:true}
});

var promoSchema=new mongoose.Schema({
   name:{type:String,unique:true}
});

var leadershipSchema=new mongoose.Schema({
   name:{type:String,unique:true}
});

mongoose.model( 'dish', dishSchema );
mongoose.model( 'promo', promoSchema);
mongoose.model('leadership',leadershipSchema);