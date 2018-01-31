import React, { Component } from 'react';
import {Row, Col, BackTop,Form} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";
  import CommonComments from './common_comments';
class MobileNewsDetails extends Component {
    constructor() {
        super();
        this.state={
            newsItem:''
        }
    }
    componentDidMount() {
        console.log(this.state);
        let myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    };
    createMarkup(){
        return {__html: this.state.newsItem.pagecontent};
    }
    render() {
        const MobileHeader1 = Form.create()(MobileHeader);
        const CommonComments1=Form.create()(CommonComments);
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader1/>
                <div className="ucmobileList">
                <Row>
                    <Col span={24} className="container" >
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                        <hr/>
                        <CommonComments1 uniquekey={this.props.match.params.uniquekey}></CommonComments1>
                    </Col>
                </Row>
                </div>
                <MobileFooter></MobileFooter>
                <BackTop></BackTop>
                
                
            </div>
        );
    }
}

export default MobileNewsDetails;