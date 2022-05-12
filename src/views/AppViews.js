import React from 'react';
import { Layout, Alert, Space, Button, Card } from 'antd';
import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';

export class ConnectAccount extends React.Component {
  render() {
    return (
      <Alert
        style={{ marginTop: '1rem', textAlign: "left" }}
        message="Please wait.."
        description="Please wait while we connect to your account.
      If this takes more than a few seconds, there may be something wrong.."
        type="warning"
        showIcon
      />

    )
  }
}

export class SelectRole extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <>
        <br /> <Card>
          <Space>       
             <Link to="/subscriber">
             <Button type="primary" icon={<SearchOutlined />}>
             Subscribe    </Button>
            </Link>
            <Link to="/creator">
            <Button type="primary">Subscribe</Button>
            </Link></Space>
        </Card>
      </>


    );
  }
}
