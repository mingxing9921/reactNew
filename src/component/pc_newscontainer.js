import React, { Component } from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import img1 from '../images/carousel_1.jpg';
import img2 from '../images/carousel_2.jpg';
import img3 from '../images/carousel_3.jpg';
import img4 from '../images/carousel_4.jpg';
import PCNewsBlock from './pc_news_block';
import PCNewsImage from './pc_news_image_block';
class PCNewscontainer extends Component {
    render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true
		  };
        return (
            <div>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className="container"> 
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src={img1}/></div>
									<div><img src={img2}/></div>
									<div><img src={img3}/></div>
									<div><img src={img4}/></div>
								</Carousel>
							</div>
							<PCNewsImage count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImage>
						</div>

						<Tabs clssName="tabs_news">
							<Tabs.TabPane tab="头条" key="1">
							<PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
							</Tabs.TabPane>
							<Tabs.TabPane tab="国际" key="2">
							<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
							</Tabs.TabPane>
						</Tabs>
						<div>
						<PCNewsImage count={10} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"></PCNewsImage>
						<PCNewsImage count={20} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"></PCNewsImage>
						</div>
                    </Col>
                    <Col span={2} />
                </Row>
                
            </div>
        );
    }
}

export default PCNewscontainer;