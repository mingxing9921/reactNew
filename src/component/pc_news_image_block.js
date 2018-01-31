import React, { Component } from "react";
import { Card } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from "react-router-dom";

class PCNewsImage extends Component {
  constructor() {
    super();
    this.state = {
      news: ""
    };
  }
  componentWillMount() {
    var myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
        this.props.type +
        "&count=" +
        this.props.count,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => this.setState({ news: json }));
  }

  render() {
      const styleImage={
          display:"block",
          width:this.props.imageWidth,
          height:"90px"
      }
      const styH3={
          width:this.props.imageWidth,
          whiteSpace:"nowrap",
          overflow:"hidden",
          textOverflow:"ellipsis"
      }
    const { news } = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
          <div className="imageblock" key={index}>
            <Router>
              <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                <div className="custom-image">
                  <img
                    src={newsItem.thumbnail_pic_s}
                    alt=""
                    style={styleImage}
                  />
                </div>
                <div className="custom-card">
                  <h3 style={styH3}>{newsItem.title}</h3>
                  <p>{newsItem.author_name}</p>
                </div>
              </Link>
            </Router>
          </div>
        ))
      : "没有加载到任何新闻";
    return (
      <div className="topNewsList">
       <Card title={this.props.cartTitle} bordered={true} style={{
					width: this.props.width
				}}>
					{newsList}
				</Card>
      </div>
    );
  }
}

export default PCNewsImage;
