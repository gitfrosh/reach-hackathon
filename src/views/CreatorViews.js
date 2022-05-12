import React from 'react';
import { Space, Row, Col, Input, Avatar, Button, Comment, Form, Card } from 'antd';
const { TextArea } = Input;
const defaultInfo = 'cats are frens';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

// export class Deploy extends React.Component {
//   render() {
//     const { parent } = this.props;
//     console.log(parent)
//     return (
//       <>
//       <Card title="gdf">
//           <Space direction='vertical'> <Input value="#blogname" />
//             <Button type="primary" onClick={() => parent.deploy()}>Start blog</Button></Space>
//         </Card>
//       </>

//     );
//   }
// }

export class EnterMeow extends React.Component {
  render() {
    const { parent, defaultInfo } = this.props;
    const { info } = this.state || {};
    return (
      <>
        <br /> <Card title="Hey Creator, send your meow now!">
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>              <Form.Item>
                <TextArea max={200} rows={4} onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({ info: e.target.value })
                }} />
              </Form.Item>
                <Form.Item>
                  <Button onClick={() => parent.enterMeow(info || defaultInfo)} type="primary">
                    Publish post
                  </Button>
                </Form.Item></>
            }>

          </Comment>


        </Card>
      </>

    );
  }
}

// export class RunBackend extends React.Component {
//   render() {
//     const { parent, info, requestStandard, standardUnit } = this.props;
//     return (
//       <div>
//         <p>
//           You request <strong>{requestStandard}</strong> {standardUnit + ' '}
//           to reveal secret info: <strong>{info}</strong>
//         </p>
//         <p>
//           Ready to connect to the contract?
//         </p>
//         <p>
//           You will be prompted to pay foBackendRunningr two transactions.
//           The first transaction will publish your requested amount,
//           and the second will publish your secret while simultaneously
//           retrieving the requested amount from the contract.
//         </p>
//         <button
//           onClick={() => parent.runBackend()}
//         >Connect</button>
//       </div>
//     );
//   }
// }

export class BackendRunning extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: '' };
  }
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
    console.log(this.props)

    const { ctcInfoStr, parent, ctcInfo } = this.props;
    console.log(ctcInfo)
    if (ctcInfoStr === undefined) {
      return (
        <div>
          Waiting for the microblog to deploy...
          If this takes more than 1 min, something may be wrong.
        </div>
      )
    } else {
      console.log(ctcInfo)
      return (
        <>
          <Row>
            <Col span={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Hej {ctcInfo?._hex}!</h1>
              </div></Col>
            <Col span={12}>
              <div style={{ textAlign: "right" }}>
                <Button
                  onClick={async (e) => this.copyToClipborad(e.currentTarget)}
                >Copy stream info to clipboard</Button>
              </div></Col>

          </Row>


          <em>Time to blog :)</em>
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>              <Form.Item>
                <TextArea max={200} rows={4} onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({ info: e.target.value })
                }} />
              </Form.Item>
                <div style={{ textAlign: "right" }}>

                  <Form.Item>
                    <Button onClick={() => parent.enterMeow(this.state.info || defaultInfo)} type="primary">
                      meow!
                    </Button>
                  </Form.Item>
                </div>

              </>
            }>

          </Comment>
        </>
        // <div>
        //   <h2>Microblog deployed!</h2>
        //   Please give your subscribers the following contract info.

        //   <pre className='ContractInfo'>
        //     {ctcInfoStr}
        //   </pre>
        //   <br />
        //   <button
        //     onClick={async (e) => this.copyToClipborad(e.currentTarget)}
        //   >Copy to clipboard</button>
        //   <br />
        // </div>
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
      <Card>
        {alice}
      </Card>
    );
  }
}