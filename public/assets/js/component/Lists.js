import React from 'react'

class ArticleTitle extends React.Component {
	render() {
		return <div className="articleTitle"> 
			<h3>
				{this.props.title}
			</h3>
		</div>
	}
}
class TitleList extends React.Component {
	render() {
		let titleNodes = this.props.data.map(function (article) {
			return <ArticleTitle title={article.title}/>;
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
			<h2>文章列表</h2>
			<TitleList data={this.state.data}/>
		</div>
	}
}
module.exports = Lists;