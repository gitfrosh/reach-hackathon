import React from 'react';
import {  Card, Button, Input } from 'antd';

const { TextArea } = Input;
export class RunBackend extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Ask Creator for the stream info and paste it here:
        <br />
        <TextArea
        style={{ marginBottom: '1rem' }}
          className='ContractInfo'
          spellCheck='false'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        
        <Button
          disabled={!ctcInfoStr}
          onClick={() => parent.runBackend(ctcInfoStr)}
        >Connect</Button>
      </div>
    );
  }
}


export class SubscriberWrapper extends React.Component {
  render() {
    const {bob} = this.props;
    return (
      <Card style={{ marginTop: '1rem'}}>
        {bob}
      </Card>
    );
  }
}
