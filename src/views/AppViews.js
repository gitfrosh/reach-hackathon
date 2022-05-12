import React from 'react'
import { Alert } from 'antd'

export class ConnectAccount extends React.Component {
  render() {
    return (
      <Alert
        style={{ marginTop: '1rem', textAlign: 'left' }}
        message="Please wait.."
        description="Please wait while we connect to your account.
      If this takes more than a few seconds, there may be something wrong.."
        type="warning"
        showIcon
      />
    )
  }
}