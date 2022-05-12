import React from 'react'
import { Alert, Typography } from 'antd'
import logo from './../assets/kitty.png'; // Tell webpack this JS file uses this image

export class ConnectAccount extends React.Component {
  render() {
    return (
      <center>
        <img width={'200'} src={logo} alt="Logo" />
        <Typography.Title level={1}><em>meow</em></Typography.Title>


        <Alert
          style={{ marginTop: '1rem', textAlign: 'left' }}
          message="Please wait.."
          description="Please wait while we connect to your account. Be sure you have MyAlgo wallet installed in your browser.
      If this process takes more than a few seconds, there may be something wrong.."
          type="warning"
          showIcon
        />
      </center>
    )
  }
}