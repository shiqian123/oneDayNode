/**
* @Author: shiqian
* @Date:   2016-08-15T15:05:43+08:00
* @Email:  15611555640@163.com
* @Last modified by:   shiqian
* @Last modified time: 2016-10-11T15:13:17+08:00
*/

'use strict'
var express = require('express');
var router = express.Router();
var article = require('./article');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* get user*/
router.post('/all',article.all);
router.post('/updateMsg',article.updateMsg);
router.post('/article',article.article);
router.post('/delete',article.delete);
router.get('/loginOut',article.loginOut);
router.post('/access',article.access);
router.post('/upload',article.upload);
router.get('/faceNumber',article.faceNumber);


module.exports = router;
