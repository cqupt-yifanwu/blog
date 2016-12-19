import React from 'react'
import style from './AboutMe.css'
class AboutMe extends React.Component {
	render() {
		return <div>
			<h3 className={style.title}>关于我</h3>
			<ul className={style.msg}>
				<li><em>姓名</em>：焦贵彬</li>
				<li><em>学校</em>：重庆邮电大学</li>
				<li><em>专业</em>：信息管理与商务智能创新实验班</li>
				<li><em>emile</em>：616584789@qq.com</li>
				<li><em>电话</em>：18883990913</li>
				<li><em>github</em>：<a href="https://github.com/cqupt-yifanwu">https://github.com/cqupt-yifanwu</a></li>
				<li><em>博客园</em>：<a href="https://home.cnblogs.com/nanshanlaoyao/">https://home.cnblogs.com/nanshanlaoyao/</a></li>
			</ul>
		</div>
	}
}
module.exports = AboutMe;