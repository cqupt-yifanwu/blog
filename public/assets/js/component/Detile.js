import React from 'react';
import $ from 'jquery';
class Detile extends React.Component {
	loadArticleFromServer () {
		$.ajax({
			url: '/blog/'+this.props.params.id,
			type: 'GET',
			dataType: 'json',
			success: (data) => {
				data = data[0]
				document.getElementsByClassName('detile')[0].innerHTML = "<div>" +
					"<h3>" + data.title + "</h3>" +
					"<span>" + data.time + "</span>" +
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
		</div>;
	}
}
module.exports = Detile;