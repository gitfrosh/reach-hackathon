import React from 'react';

export class RunBackend extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Creator will deploy the microblog.
        <br />
        Ask Creator for the contract info and paste it here:
        <br />
        <textarea
          className='ContractInfo'
          spellCheck='false'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.runBackend(ctcInfoStr)}
        >Connect</button>
      </div>
    );
  }
}

export class DisplayInfo extends React.Component {
  render() {
    const {info} = this.props;
    if (!info) {
      return (
        <p>
          Waiting for Creator to post something...
        </p>
      );
    } else {
      return (
        <div>
          <p>
            Creator's recent <em>meow</em> is: <strong>{info}</strong>
          </p>
          <p>
            Thank you, Subscriber. The contract has run to completion.
          </p>
        </div>
      );
    }
  }
}

export class SubscriberWrapper extends React.Component {
  render() {
    const {bob} = this.props;
    return (
      <div className='Subscriber'>
        {bob}
      </div>
    );
  }
}
