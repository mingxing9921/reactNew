import React, { Component } from 'react';
import {Row, Col, BackTop,Form} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";
  import CommonComments from './common_comments';
class PCNewsDetails extends Component {
    constructor() {
        super();
        this.state={
            newsItem:''
        }
    }
    componentDidMount() {
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
        const PCHeader1 = Form.create()(PCHeader);
        const CommonComments1=Form.create()(CommonComments);
        return (
            <div>
                <PCHeader1/>
                <Row>
                    <Col span={2} />
                    <Col span={14} className="container" >
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                        
                        <hr/>
                        <CommonComments1 uniquekey={this.props.match.params.uniquekey}></CommonComments1>
                    </Col>
                    <Col span={6} >
                     <PCNewsImageBlock count={30} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"></PCNewsImageBlock>
                    </Col>
                    <Col span={2} ></Col>
                </Row>
                
                <PCFooter></PCFooter>
                
                <BackTop></BackTop>
                
            </div>
        );
    }
}

export default PCNewsDetails;