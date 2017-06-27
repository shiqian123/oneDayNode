/**
 * Created by shiqian on 16/8/11.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleModel = new Schema({
  title          : String,
  content      : String,
  date       : String,
  author     :String
});
articleModel.add({number:'string',img:'string',introduction:'string',id:'string'});
module.exports = mongoose.model('articleModel', articleModel);