import React from 'react'
import $ from 'jquery';
import { Router, Route, hashHistory,Link } from 'react-router'
import style from './Lists.css'

class ArticleTitle extends React.Component {
	render() {
		let url = "/detile/" + this.props.atl._id;
		return <div className={style.article}> 
			<h4>
				<Link to={url}>{this.props.atl.title}</Link>
			</h4>
			<p className={style.text}>
				{this.props.atl.text}
			</p>
			<span className={style.read}>
				<Link to={url}>阅读原文</Link>
			</span>
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
			<h2 className={style.title}>文章列表</h2>
			<TitleList data={this.state.data}/>
		</div>
	}
}
module.exports = Lists;