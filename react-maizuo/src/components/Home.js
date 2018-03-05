import React, {Component} from 'react';
import { Carousel} from 'antd-mobile';
import '../style/home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component{
  constructor(){
		super();
		this.state = {
		    data: [],
		    imgHeight: 176,
		    slideIndex: 0,
		    films:[]
		}
		this.myRender = this.myRender.bind(this);
	}
  componentWillMount() {
    // simulate img loading

    	// 轮播图
    	axios.get('/v4/api/billboard/home?__t=1519826140958').then((res)=>{
    		if(res.data.data.billboards!=undefined){
	    		console.log(res.data.data.billboards);
				this.setState({
					data:res.data.data.billboards,
				})
    		}	  		
	  	})

    	//正在热映
	  	axios.get('/v4/api/film/now-playing?__t=1519955236450&page=1&count=5').then((res)=>{
	  		// console.log(res.data.data.films);
			this.setState({
				films:res.data.data.films,
			})
	  	})

  }
  myRender(){

  }
  render() {
  	{console.log(this.state.data)}
    return (
    	<div>
	        <Carousel
	          autoplay={true}
	          infinite
	          selectedIndex={1}
	          dots={false}
	        >
	          {this.state.data.map(val => (
	            <a
	              key={val}
	              href="https://m.maizuo.com/v4/"
	              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
	            >
	              <img
	                src={val.imageUrl}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	                onLoad={() => {
	                  // fire window resize event to change height
	                  window.dispatchEvent(new Event('resize'));
	                  this.setState({ imgHeight: 'auto' });
	                }}
	              />
	            </a>
	          ))}
	        </Carousel>
	        <div>
				<ul className="list">
					{this.state.films.map((val,ind)=>{
						return(
							<li key={ind}>
								<Link to="/detail">
									<img src={val.cover.origin} />
								</Link>
								<div className="d">
			 						<div className="left">
										<p className="p1">{val.name}</p>
										<p className="p2"><span>{val.cinemaCount}</span>家影院上映 <span>{val.watchCount}</span>人购票</p>
									</div>
									<div className="right">{val.grade}</div>
								</div>
							</li>
						)
					})}	
				</ul>
				<div className="btn1">更多热映电影</div>
		  </div>
        </div>
    )
  }
}