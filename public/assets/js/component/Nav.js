import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
	render () {
		return <div className="nabBar">
			<h1>我的个人网站</h1>
			<ul role="nav">
				<li><Link to="/list">博文</Link></li>
				<li><Link to="/input">新文章</Link></li>
				<li><Link to="/about">关于</Link></li>
			</ul>
			{this.props.children}
		</div>
	}
}
module.exports = Nav;