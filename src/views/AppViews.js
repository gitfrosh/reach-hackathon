import React from 'react';
import { Layout, Alert, Space, Button, Typography, Menu, Card, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
export class Wrapper extends React.Component {
  render() {
    const { app } = this.props;
    return (
      <Layout className="layout">
        <Header style={{ color: '#fff' }} >
          <em>meow</em> - an Algorand powered microblog
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ minHeight: '90vH' }} className="site-layout-content">
            <Card style={{ padding: '5rem' }}>
              <center>
                <Typography.Title level={1} style={{ margin: 0 }}>
                  <em>meow</em>
                </Typography.Title>
                {app}
              </center>
            </Card>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Built with &hearts;</Footer>
      </Layout>


    );
  }
}

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
          <Space><Button type="primary" onClick={() => parent.selectCreator()}>Start blog</Button><Button onClick={() => parent.selectSubscriber()}>Subscribe</Button></Space>
        </Card>
      </>


    );
  }
}
