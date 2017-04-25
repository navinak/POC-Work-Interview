/**
 * Created by navina on 25/4/17.
 */
var mongoose=require('mongoose');
var promo=mongoose.model('promo');

exports.getPromos=function (req,res) {
    promo.find(function (err,promo) {
        if(!err){
            console.log(promo);
            res.json(promo);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding promotion"});
        }
    })
};

exports.getSpecificPromos=function (req,res) {
    console.log(req.params.id);
    promo.findOne({_id:req.params.id},function (err,promo) {
        if(!err){
            console.log(promo);
            res.json(promo);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding promos"});
        }
    })
};

exports.addPromos=function (req,res) {
    if(!req.body.name) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        promo.create({
            name:req.body.name
        },function (err,promo) {
            if (err){
                res.json({"status":"error","error":"Error in inserting promos"});
            }else {
                res.json({"status":"success"})
            }
        });
    }
};

exports.updatePromo=function (req,res) {
    if(!req.body.name) {
        res.json({"status":"error","error":"missing parameter"});
    }else{
        promo.update({_id:req.params.id},{$set:{name:req.body.name}},function (err,promo) {
            if (err){
                res.json({"status":"error","error":"Error in updating promos"});
            } else{
                res.json({"status":"success"});
            }
        });
    }
};

exports.deleteById=function (req,res) {
    promo.remove({_id:req.params.id},function (err) {
        if(!err){
            res.json({"status":"success"});
        }else {
            res.json({"status":"error","error":"Error in deleting"});
        }
    })
};

exports.deleteAll=function (req,res) {
    promo.remove({},function (err) {
        if(!err){
            res.json({"status":"success"});
        }else {
            res.json({"status":"error","error":"Error in deleting"});
        }
    })
};