import React, { Component } from "react";
import MobileHeader from "./component/mobile_header";
import MobileFooter from "./component/mobile_footer";
import "./mobileApp.css";
import { Form, Tabs,Carousel } from "antd";
import MobileList from "./component/mobile_list";
import img1 from './images/carousel_1.jpg';
import img2 from './images/carousel_2.jpg';
import img3 from './images/carousel_3.jpg';
import img4 from './images/carousel_4.jpg';
class MobileApp extends Component {
  render() {
    const MobileHeader1 = Form.create()(MobileHeader);
    const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
            autoplay:true
            
		  };
    return (
      <div >
        <MobileHeader1 />
     
        <Tabs >
        
          <Tabs.TabPane tab="头条" key="1">
          <div className="carousel">
								<Carousel {...settings}>
									<div><img src={img1}/></div>
									<div><img src={img2}/></div>
									<div><img src={img3}/></div>
									<div><img src={img4}/></div>
								</Carousel>
							</div>
            <MobileList count={20} type="top" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="体育" key="6">
            <MobileList count={20} type="tiyu" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="科技" key="7">
            <MobileList count={20} type="keji" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="时尚" key="8">
            <MobileList count={20} type="caijing" />
          </Tabs.TabPane>
        </Tabs>

        <MobileFooter />
      </div>
    );
  }
}

export default MobileApp;
