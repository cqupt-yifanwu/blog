import React from 'react'
class Home extends React.Component {
	render() {
		return <div className="Index">
			<h3>项目介绍</h3>
			<p>次此项目是个人搭建的一个简单的网站，它包括的功能有浏览文章列表，浏览完整文章，发布新文章，进行留言</p>
			<span>该网站利用了：</span>
			<ul>
				<li>react构建前端的组件</li>
				<li>react-router管理路由使其成为单页应用</li>
				<li>express4.X搭建后台接口</li>
				<li>mongodb(mongoose)数据的存取</li>
				<li>webpack管理+构建</li>
			</ul>
			<p><a href='https://github.com/cqupt-yifanwu/blog'>github项目地址</a></p>
		</div>
	}
}
module.exports = Home;