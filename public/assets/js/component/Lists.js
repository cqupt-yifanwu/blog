import React from 'react'
import $ from 'jquery';
import { Router, Route, hashHistory,Link } from 'react-router'

class ArticleTitle extends React.Component {
	render() {
		let url = "/detile/" + this.props.atl._id;
		return <div className="articleTitle"> 
			<h4>
				<Link to={url}>{this.props.atl.title}</Link>
			</h4>
		</div>
	}
}
class TitleList extends React.Component {
	render() {
		let titleNodes = this.props.data.map(function (article) {
			return <ArticleTitle atl={article}/>;
		});
		return <div className="titleLists">
			{titleNodes}
		</div>;
	}
}
class Lists extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{tltle: 'sedfsadf'}
			]
		};
	}
	loadArticleFromServer() {
		$.ajax({
			url: '/blog',
			dataType: 'json',
			cache: false,
			success: (data) => {
				this.setState({data: data});
			}
		});
	}
	componentDidMount() {
		this.loadArticleFromServer();
	}
	render() {
		return <div>
			<h2 className="partTitle">文章列表</h2>
			<TitleList data={this.state.data}/>
		</div>
	}
}
module.exports = Lists;