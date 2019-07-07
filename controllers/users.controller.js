const users = require('../models/users.model');


//Simple version, without validation or sanitation
exports.create = function (req, res) {

    let saveObj=new users({
        fullname:req.body.fullname,
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    saveObj.save().then(data=>{
        res.json({
            status:'OK',
            message:"successfully add user"
        })
    }).catch(err=>{
        console.log(err);
    })
};
exports.list = function (req, res) {
    users.find({}).exec().then(data=>{
        res.json({
            status:'OK',
            message:data
        })
    }).catch(err=>{
        console.log(err);
    })
};
exports.update = function (req, res) {
    var userid=req.body.userid;
    var fullname=req.body.fullname;
    users.findOneAndUpdate({_id:req.body.userid},{$set:{fullname:req.body.fullname}}).exec().then(data=>{
        res.json({
            status:'OK',
            message:data
        })
    }).catch(err=>{
        console.log(err);
    })
};
exports.delete = function (req, res) {
    users.deleteOne({_id:req.body.userid}).exec().then(data=>{
        res.json({
            status:'OK',
            message:data
        })
    }).catch(err=>{
        console.log(err);
    })
};