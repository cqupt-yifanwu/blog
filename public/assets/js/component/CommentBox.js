import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import $ from 'jquery';
import style from './CommentBox.css'

class Comment extends React.Component {
  render () {
    return  <div className={style.comment}>
        <p className={style.text}>{this.props.text}</p>
        <span>评论人：</span><h4 className={style.author}>
          {this.props.author}
        </h4>
      </div>;
  }
}
class CommentList extends React.Component {
  render () {
    let commentNodes = this.props.data.map(function (comment) {
      return <Comment author={comment.author} text={comment.text}>
        </Comment>;
    });     
    return <div className={style.list}>
        {commentNodes}
      </div>;
  }
}
class CommentForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    let author = this.refs.author.value.trim();
    let text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({articleId: this.props.articleId, author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  }
  render () {
    return <form className={style.form} onSubmit={this.handleSubmit.bind(this)}>
        <input className={style.name} type="text" placeholder="你的名字" ref="author" /><br/>
        <textarea className={style.textInput} placeholder="说些什么" rows="10" cols="95" ref="text"></textarea><br />
        <input className={style.btn} type="submit" value="发表" />
      </form>;
  }
}
class CommentBox extends React.Component {
	constructor(props){
	    super(props);
	    this.state={
	      data:[]
	    }
	}
	loadCommentsFromServer () {
	    $.ajax({
	      url: '/comment/'+this.props.id,
	      type: 'GET',
	      dataType: 'json',
	      cache: false,
	      success: (data) => {
	        this.setState({data: data});
	      }
	    });
	}
	handleCommentSubmit (comment) {
	    $.ajax({
	      url: '/comment/'+this.props.id,
	      dataType: 'json',
	      type: 'POST',
	      data: comment,
	      success: (data) => {
	        this.setState({data: data});
	        console.log(data);
	      }
	    });    
	}
	componentDidMount() {
		this.loadCommentsFromServer();
	}
	render() {
		return <div className={style.box}>
			<h3>留言区</h3>
			<CommentList data={this.state.data}/>
			<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} articleId={this.props.id}/>
		</div>;
	}
}
module.exports = CommentBox;