var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	articleId: Number,
	author: String,
	text: String
});

// 将Schema发布为model
var Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;
