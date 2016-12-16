import React from 'react'
import { Link } from 'react-router'
import style from './Main.css'

class Main extends React.Component {
	render () {
		return <div className={style.whole}>
			<div className={style.navbar}>
				<h1 className={style.title}>我的个人网站</h1>
				<ul role="nav" className={style.nav}>
					<li className={style.lead}><Link to="/list">博文</Link></li>
					<li className={style.lead}><Link to="/input">新文章</Link></li>
					<li className={style.lead}><Link to="/about">关于</Link></li>
				</ul>
			</div>
			<div id="contents" className={style.contents}>
				{this.props.children}
			</div>
		</div>
	}
}
module.exports = Main;