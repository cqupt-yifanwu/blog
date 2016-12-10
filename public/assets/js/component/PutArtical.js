import React from 'react'
class ArticalFrom extends React.Component {
	handleSubmit () {
		e.preventDefault();
	}
	render() { <form className="ArticalForm" onSubmit={this.handleSubmit.bind(this)}>
		<lable for="title"></lable><input placeholder="标题" type="text"/>
		<lable for="text"></lable><textarea value="你的文章" row="10" cols="50"></textarea>
		<input type="submit" value="发表" />
	</form>
	}
}
class PutArtical extends React.Component {
	render() {
		return <div>
			<h3>上传文章</h3>
			<ArticalForm />
		</div>
	}
}
module.exports = PutArtical;