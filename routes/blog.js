/*
*  所有的增删改查的操作
*/
/*
 * GET comments listing.
 * 完整的定义增删改查
 */

var article = require('../model/articleDB.js');  // 引入的model，可用来操作数据库和生成Entity
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/article'); // 链接数据库
db.connection.on('connected', function () {
  console.log('Mongoose connection success');
});
db.connection.on('error', function (err) {
  console.log('connection error');
});
var i = 0;
  
exports.list = function(req, res){  
  article.find(function (err, article) {
      console.log(article);
      res.json(article);  
  });
};  
  
exports.get = function(req, res){  
  var q = article.find({_id:req.params.id}, function(err, article) {
    if (err) {
      console.log("查询文章错误！");
    };
    console.log(article);
    res.json(article)
  })
};  
  
  
exports.delete = function(req, res){  
  Comment.remove({_id: req.params.id},function (err) {
    if (err) {
      console.log(err);
    };
    Comment.find(function (err, comment) {
      res.json(comment);  
    });
  });
};  
  

  
exports.add = function(req, res){  
  if(!req.body.hasOwnProperty('title') || 
     !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
  // 实例化新添加的内容
  var newArticle = {
    title : req.body.title,
    text : req.body.text,
    time: req.body.time
  }; 
  var ArticleEntity = new article(newArticle);
  ArticleEntity.save();
  res.json(true);   
};