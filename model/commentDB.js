var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	articleId: String,
	author: String,
	text: String
});

module.exports = CommentSchema;
