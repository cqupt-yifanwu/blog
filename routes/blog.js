/*
*  所有的增删改查的操作
*/
/*
 * GET comments listing.
 * 完整的定义增删改查
 */

var articleSchema = require('../model/articleDB.js');  // 引入的model，可用来操作数据库和生成Entity
var CommentSchema = require('../model/commentDB.js');
var mongoose = require('mongoose');

var db2 = mongoose.createConnection('mongodb://127.0.0.1:27017/comment');
var comment = db2.model('comment', CommentSchema);
var db1 = mongoose.createConnection('mongodb://127.0.0.1:27017/article'); // 链接数据库
var article = db1.model('article', articleSchema);
// db1.connection.on('connected', function () {
//   console.log('Mongoose1 connection success');
// });
// db1.connection.on('error', function (err) {
//   console.log('connection1 error');
// });
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
  
  
// exports.delete = function(req, res){  
//   Comment.remove({_id: req.params.id},function (err) {
//     if (err) {
//       console.log(err);
//     };
//     Comment.find(function (err, comment) {
//       res.json(comment);  
//     });
//   });
// };  
  

  
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


exports.commentList = function (req, res) {
  comment.find({articleId: req.params.id.toString()}, function (err, comments) {
    if (err) {
      console.log("获取评论出错");
    }
    res.json(comments);
  })
};
exports.commentAdd = function (req, res, next) {
  if(!req.body.hasOwnProperty('author') || 
     !req.body.hasOwnProperty('text') || 
     !req.body.hasOwnProperty('articleId')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
  // 实例化新添加的内容
  var newComment = {
    articleId: req.body.articleId,
    author : req.body.author,
    text : req.body.text
  }; 
  var commentEntity = new comment(newComment);
  /*
  *  在save的成功回调函数里使用中间件next，再次执行commentList，获取完整的数据
  */
  commentEntity.save(function () {         
    next();
  });
};