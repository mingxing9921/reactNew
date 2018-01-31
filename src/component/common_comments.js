import React, { Component } from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card,
	notification
} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
  } from 'react-router-dom'
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends Component {
    constructor() {
        super();
        this.state={
            comments:''
        }
    }
    componentDidMount() {
        this._isMounted = true;
        let myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).
        then(response => response.json()).then(json => {
            if (this._isMounted) {
                
                this.setState({comments: json});
            }
		});
    }
    handleSubmit(e){
        e.preventDefault();
        let myFetchOptions={
            method:'GET'
        }
        let formdata = this.props.form.getFieldsValue();
       
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
    };
    componentWillUnmount() {
        this._isMounted = false;
}
    addUseCollection(){
        let myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
    }
    render() {
        let {getFieldProps}=this.props.form;
        const {comments}=this.state;
        const commentList=comments.length
        ?comments.map((comment,index)=>(
            <Card key={index} title={comment.UserName} extra={<a href="#"> 发布于{comment.datetime} </a>}>
            <p>{comment.Comments}</p>
            </Card>
        ))
        : '没有加载到任何评论'
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                    {commentList}
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="您的评论">
                            <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initiaValue:''})}>
                            </Input>
                        </FormItem>
                        <Button type="primary" htmlType="submit">提交评论</Button>
                        &nbsp;&nbsp;
                        <Button type="primary" htmlType="button" onClick={this.addUseCollection.bind(this)}>收藏该文章</Button>
                    </Form>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default CommonComments;