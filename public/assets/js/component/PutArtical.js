import React from 'react';
import $ from 'jquery';
class ArticalForm extends React.Component {
	handleSubmit (e) {
		e.preventDefault();
		let title = this.refs.title.value.trim();
		let text = this.refs.text.value.trim();
		let date = new Date();
		$.ajax({
			url: '/blog',
			type: 'POST',
			dataType: 'json',
			data: {
				"title": title,
				"text": text,
				"time": date
			},
			success: (data) => {
				console.log('chenggong');
				window.location.hash = '#list';
			}
		})
	}
	render() { 
		return <form className="ArticalForm" onSubmit={this.handleSubmit.bind(this)}>
			<lable htmlFor="title">标题：</lable><input placeholder="标题" type="text" ref="title"/><br/>
			<lable htmlFor="text">正文：</lable><textarea placeholder="你的文章" rows="30" cols="60" ref="text"></textarea><br/>
			<input type="submit" value="发表" />
		</form>;
	}
}
class PutArtical extends React.Component {
	render() {
		return <div className="putartical">
			<h3 className="partTitle">上传文章</h3>
			<ArticalForm />
		</div>
	}
}
module.exports = PutArtical;