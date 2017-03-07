import React from 'react'
import style from './Home.css'

class Home extends React.Component {
	render() {
		return <div className={style.index}>
			<h3>项目介绍</h3>
			<div className={style.content}>
				<p>此项目是个人搭建的一个简单的网站，它包括的功能有浏览文章列表，浏览完整文章，发布新文章，进行留言</p>
				<span>该网站利用了：</span>
				<ul className={style.tip}>
					<li>react构建前端的组件</li>
					<li>react-router管理路由使其成为单页应用</li>
					<li>express4.X搭建后台接口</li>
					<li>mongodb(mongoose)数据的存取</li>
					<li>webpack管理+构建</li>
				</ul>
				<p className={style.github}><a href='https://github.com/cqupt-yifanwu/blog'>github项目地址</a></p>
			</div>
		</div>
	}
}
module.exports = Home;