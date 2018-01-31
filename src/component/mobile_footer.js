import React, { Component } from "react";
import { Row, Col, Menu, Icon } from "antd";

class PCFooter extends Component {

  render() {
    return (
      <footer>
        <Row>
          <Col span={2} />
          <Col span={20} className="footer">
			&copy;&nbsp;2016 ReactNew. All Rights Reserved.
          </Col>
          <Col span={2} />
        </Row>
      </footer>
    );
  }
}

export default PCFooter;