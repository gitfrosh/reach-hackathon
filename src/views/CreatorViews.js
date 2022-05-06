import React from 'react';
import { Space, Input, Button, Card } from 'antd';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

export class Deploy extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <>
        <br /> <Card>
          <Space direction='vertical'> <Input value="#blogname" />
            <Button type="primary" onClick={() => parent.deploy()}>Start blog</Button></Space>
        </Card>
      </>

    );
  }
}

export class EnterInfo extends React.Component {
  render() {
    const { parent, defaultInfo } = this.props;
    const { info } = this.state || {};
    return (
      <>
        <br /> <Card title="Hey Creator, send your first meow now!">
          <Space direction='vertical'> 
            <Input
              onChange={(e) => {
                console.log(e.target.value)
                this.setState({ info: e.target.value })
              } }
              placeholder={defaultInfo}
            />
            <Button type="primary" onClick={() => parent.enterInfo(info || defaultInfo)}>Start blog</Button></Space>
        </Card>
      </>

    );
  }
}

export class RunBackend extends React.Component {
  render() {
    const { parent, info, requestStandard, standardUnit } = this.props;
    return (
      <div>
        <p>
          You request <strong>{requestStandard}</strong> {standardUnit + ' '}
          to reveal secret info: <strong>{info}</strong>
        </p>
        <p>
          Ready to connect to the contract?
        </p>
        <p>
          You will be prompted to pay for two transactions.
          The first transaction will publish your requested amount,
          and the second will publish your secret while simultaneously
          retrieving the requested amount from the contract.
        </p>
        <button
          onClick={() => parent.runBackend()}
        >Connect</button>
      </div>
    );
  }
}

export class BackendRunning extends React.Component {
  async copyToClipborad(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr } = this.props;
    if (ctcInfoStr === undefined) {
      return (
        <div>
          Waiting for the microblog to deploy...
          If this takes more than 1 min, something may be wrong.
        </div>
      )
    } else {
      return (
        <div>
          <h2>Microblog deployed!</h2>
          Please give your subscribers the following contract info.

          <pre className='ContractInfo'>
            {ctcInfoStr}
          </pre>
          <br />
          <button
            onClick={async (e) => this.copyToClipborad(e.currentTarget)}
          >Copy to clipboard</button>
          <br />
        </div>
      );
    }
  }
}

export class BackendRan extends React.Component {
  render() {
    return (
      <div>
        Thank you, Creator.
        The contract has run to completion.
      </div>
    );
  }
}

export class CreatorWrapper extends React.Component {
  render() {
    const { alice } = this.props;
    return (
      <div className="Creator">
        {alice}
      </div>
    );
  }
}