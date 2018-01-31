import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  notification,
  Upload
} from "antd";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import PCNewsImageBlock from "./pc_news_image_block";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import index from "antd/lib/layout";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPans = Tabs.TabPane;

class MobileUserCenter extends Component {
  constructor() {
    super();
    this.state = {
      usercollection: "",
      usercomments: "",
      previewImage: "",
      previewVisible: false,
      fileList: [
        {
          uid: -1,
          name: "xxx.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
      ]
    };
  }
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  componentDidMount() {
    let myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" +
        localStorage.userid,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ usercollection: json });
      });
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" +
        localStorage.userid,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ usercomments: json });
      });
  }
  render() {
    const MobileHeader1 = Form.create()(MobileHeader);
    const { previewVisible, previewImage, fileList } = this.state;
    const {usercollection,usercomments} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const usercollectionList=usercollection.length?
    usercollection.map((uc,index)=>(
        <Card key={index} title={uc.uniquekey} extra={<a  href={`./details/${uc.uniquekey}`}>查看</a>}>
            <p>{uc.Title}</p>
        </Card>
    ))
    :
    '您还没有收藏任何的新闻，快去收藏一些新闻吧';

    const usercommentsList=usercomments.length?
    usercomments.map((comment,index)=>(
        <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a  href={`/details/${comment.uniquekey}`}>查看</a>}>
            <p>{comment.Comments}</p>
        </Card>
    ))
    :
    '您还没有发表过任何评论。';
    return (
      <div>
        <MobileHeader1 />
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPans tab="我的收藏列表" key="1">
                <div className="comment">
                  <Row>
                    <Col span={24}>{usercollectionList}</Col>
                  </Row>
                </div>
              </TabPans>
              <TabPans tab="我的评论列表" key="2">
                <div className="comment">
                  <Row>
                    <Col span={24}>{usercommentsList}</Col>
                  </Row>
                </div>
              </TabPans>
              <TabPans tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {fileList.length >= 3 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
              </TabPans>
            </Tabs>
          </Col>

        </Row>
        <MobileFooter />
      </div>
    );
  }
}

export default MobileUserCenter;
