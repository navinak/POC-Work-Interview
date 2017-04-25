/**
 * Created by navina on 25/4/17.
 */

var mongoose=require('mongoose');
var leadership=mongoose.model('leadership');

exports.getLeadership=function (req,res) {
    leadership.find(function (err,leadership) {
        if(!err){
            console.log(leadership);
            res.json(leadership);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding leadership"});
        }
    })
};

exports.getSpecificLeadership=function (req,res) {
    console.log(req.params.id);
    leadership.findOne({_id:req.params.id},function (err,leadership) {
        if(!err){
            console.log(leadership);
            res.json(leadership);
        }else{
            console.log(err);
            res.json({"status":"error","error":"Error finding leadership"});
        }
    })
};

exports.addLeadership=function (req,res) {
    if(!req.body.name) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        leadership.create({
            name:req.body.name
        },function (err,leadership) {
            if (err){
                res.json({"status":"error","error":"Error in inserting leadership"});
            }else {
                res.json({"status":"success"})
            }
        });
    }
};

exports.updateLeadership=function (req,res) {
    if(!req.body.name) {
        res.json({"status":"error","error":"missing parameter"});
    }else{
        leadership.update({_id:req.params.id},{$set:{name:req.body.name}},function (err,leadership) {
            if (err){
                res.json({"status":"error","error":"Error in updating leadership"});
            } else{
                res.json({"status":"success"});
            }
        });
    }
};

exports.deleteById=function (req,res) {
    leadership.remove({_id:req.params.id},function (err) {
        if(!err){
            res.json({"status":"success"});
        }else {
            res.json({"status":"error","error":"Error in deleting"});
        }
    })
};

exports.deleteAll=function (req,res) {
    leadership.remove({},function (err) {
        if(!err){
            res.json({"status":"success"});
        }else {
            res.json({"status":"error","error":"Error in deleting"});
        }
    })
};