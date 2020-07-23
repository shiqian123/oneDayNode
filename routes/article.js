'use strict';
var express = require('express');
var router = express.Router();
var Article = require('../model/article');
var formidable = require('formidable');
var util = require('util');
var path = require('path');
var fs = require('fs');
/* GET Articles listing. */
router.get('/save', function(req, res, next) {
   res.send('respond with a resource');
});
//添加文章
exports.article =function (req,res,next) {
  var _Article = new Article();
  var _req = req.body
  _Article.title = _req.title;
  _Article.date = _req.date;
  _Article.number = _req.number;
  _Article.content = _req.content;
  _Article.author = _req.author;
  _Article.save(function (err,_Article,data) {
    if(!err){
      res.json({"status": 200,"message": "OK"}
      );
    }
  })
}
//退出
exports.loginOut = function (req,res,next) {
  res.json([{"shi":'shiqian'}])
};
//退出
exports.access = function (req,res,next) {
  res.json({
    "data": true,
    "return_code": "0000",

    "message": "成功"
})
};
// faceNumber
exports.faceNumber = function (req,res,next) {
  res.json({
    "data": 5623,
    "return_code": "0000",

    "message": "成功"
})
};
//退出
exports.upload = function (req,res,next) {
  var form = new formidable.IncomingForm({keepExtensions:true});
  form.uploadDir = path.join(__dirname);
  form.parse(req,function (err,fields,files) {
    console.log(fields,files)
    fs.rename(files.file.path,__dirname+'/'+files.file.name,function (a,b) {
    });
    res.json({success:'修改成功'})
  });
};
//注册
exports.all = function (req,res,next) {
  var params = {
    author:''
  }
  if(req.body.searchAuthor){
    params.author = req.body.searchAuthor
  }

  Article.find(req.body.searchAuthor?params:'',function (err, data) {
   if(data.length!=0){
     return res.json(data);
   }else{
     return res.json(data);
     // var Article = new Article();
     // Article.name = 'shiqian';
     // Article.password = '123456';
     // Article.save(function (err,Article,data) {
     //   if(!err){
     //     res.json({"status": 200,"message": "OK"});
     //   }
     // })
   }
  });
};
exports.updateMsg = function(req,res){
  var data = req.body;
  Article.where({ _id: data.id }).update({ author: data.author,content:data.content,title:data.title },function(){
       res.json({success:'修改成功'})
  })

};
exports.delete = function (req,res) {
  Article.remove({ _id: req.body.id }).then(function () {
    res.json({success:'删除成功'})
    }
  )
}