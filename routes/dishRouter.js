/**
 * Created by navina on 25/4/17.
 */
var mongoose=require('mongoose');
var dish=mongoose.model('dish');

exports.getDishes=function (req,res) {
    dish.find(function (err,dish) {
        if(!err){
            console.log(dish);
            res.json(dish);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding dishes"});
        }
    })
};

exports.getSpecificDishes=function (req,res) {
    console.log(req.params.id);
    dish.findOne({_id:req.params.id},function (err,dish) {
        if(!err){
           console.log(dish);
            res.json(dish);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding dishes"});
        }
    })
};