import React, { Component } from 'react';
import '../style/index.css';
import '../style/header.css';
import '../iconfont/iconfont.css';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Header extends Component{
	constructor(){
		super();
		this.state = {
			showFlag:false,
		}
		this.showmenu = this.showmenu.bind(this);
		this.nomenu = this.nomenu.bind(this);
	}
	showmenu(){
		this.setState({
			showFlag : !this.state.showFlag,
		})
		console.log(this.state.showFlag);
	}
	nomenu(){
		this.setState({
			showFlag : false,
		})
	}
	render(){
		var menu = (
			<ul className = "menu">
				<Link onClick = {this.showmenu} to='/'><li>首页</li></Link>
				<Link onClick = {this.showmenu} to='/films'><li>影片</li></Link>
				<Link onClick = {this.showmenu} to='/detail'><li>影院</li></Link>
				<Link to='/'><li>商城</li></Link>
				<Link to='/'><li>我的</li></Link>
				<Link to='/'><li>卖座卡</li></Link>
			</ul>	
		);
		var mask = <div className = "mask" onClick = {this.showmenu}></div>;
		if(this.state.showFlag === false){
			console.log("null");
			menu = null;
			mask = null;
		}
		return (
			<div className="header">
		  		<header id="myhead">
					<i className="iconfont icon-caidan" onClick = {this.showmenu}></i>
					<p onClick={this.nomenu}>{this.props.tit}</p>
					<div><span>北京</span><i className="iconfont icon-xialacaidan"></i></div>
					<i className="iconfont icon-womorenzhuangtai"></i>
					<ReactCSSTransitionGroup
			          transitionName="menu"
			          transitionEnterTimeout={300}
			          transitionLeaveTimeout={300}>
			          {menu}
			        </ReactCSSTransitionGroup>
			        <ReactCSSTransitionGroup
			          transitionName="mask"
			          transitionEnterTimeout={300}
			          transitionLeaveTimeout={300}>
			          {mask}
			        </ReactCSSTransitionGroup>
				</header>
		    </div> 
		)
	}
}