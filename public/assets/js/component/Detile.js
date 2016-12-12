import React from 'react';
import $ from 'jquery';
import CommentBox from './CommentBox.js';

class Detile extends React.Component {
	loadArticleFromServer () {
		$.ajax({
			url: '/blog/'+this.props.params.id,
			type: 'GET',
			dataType: 'json',
			success: (data) => {
				data = data[0]
				document.getElementsByClassName('articleDetile')[0].innerHTML = "<div>" +
					"<h3>" + data.title + "</h3>" +
					"<span>发表时间<strong>" + data.time + "</strong></span>" +
					"<p>" + data.text + "</p>" +
				"</div>";
			}
		})
	}
	componentDidMount() {
		this.loadArticleFromServer();
	}
	render() {
		return <div className="detile">
			<div className="articleDetile">
			</div>
			<CommentBox id={this.props.params.id}/>
		</div>;
	}
}
module.exports = Detile;