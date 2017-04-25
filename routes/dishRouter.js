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

exports.addDish=function (req,res) {
    if(!req.body.name) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        dish.create({
            name:req.body.name
        },function (err,dish) {
            if (err){
                res.json({"status":"error","error":"Error in inserting dishes"});
            }else {
                res.json({"status":"success"})
            }
        });
    }
};

exports.updateDish=function (req,res) {
  if(!req.body.name) {
      res.json({"status":"error","error":"missing parameter"});
  }else{
      dish.update({_id:req.params.id},{$set:{name:req.body.name}},function (err,dish) {
          if (err){
              res.json({"status":"error","error":"Error in updating dishes"});
          } else{
              res.json({"status":"success"});
          }
      });
  }
};

exports.deleteById=function (req,res) {
  dish.remove({_id:req.params.id},function (err) {
      if(!err){
          res.json({"status":"success"});
      }else {
          res.json({"status":"error","error":"Error in deleting"});
      }
  })
};

exports.deleteAll=function (req,res) {
  dish.remove({},function (err) {
      if(!err){
          res.json({"status":"success"});
      }else {
        res.json({"status":"error","error":"Error in deleting"});
    }
  })
};