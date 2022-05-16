import React from 'react'
import {
  PageHeader,
  Input,
  Button,
  Comment,
  Form,
  Card,
} from 'antd'
import logo from './../assets/kitty.png'

const { TextArea } = Input
const defaultInfo = 'cats are frens'

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

export class BackendRunning extends React.Component {
  constructor(props) {
    super(props)
    this.state = { info: '' }
  }
  async copyToClipborad(button) {
    const { ctcInfoStr } = this.props
    navigator.clipboard.writeText(ctcInfoStr)
    const origInnerHTML = button.innerHTML
    button.innerHTML = 'Copied!'
    button.disabled = true
    await sleep(1000)
    button.innerHTML = origInnerHTML
    button.disabled = false
  }

  render() {
    const { ctcInfoStr, parent, ctcInfo, resolveMeow } = this.props
    if (ctcInfoStr === undefined) {
      return (
        <div>
          Waiting for the microblog to deploy... there are two transaction to sign.  If this takes more
          than 1 min, something may be wrong.
        </div>
      )
    }
    else if (!resolveMeow) {
      return <>Wating for your first test 'meow' ...</>
    } else {
      return (
        <>
          <PageHeader
            avatar={{ src: logo }}
            className="site-page-header"
            title={`Hej ${ctcInfo?._hex}!`}
            subTitle="time to blog"
            extra={[
              <Button
                type="dashed"
                size="small"
                onClick={async (e) =>
                  this.copyToClipborad(e.currentTarget)
                }
              >
                Copy stream info to clipboard
              </Button>,
            ]}
          />

          <Comment
            style={{ textAlign: 'right' }}
            content={
              <>
                {' '}
                <Form.Item>
                  <TextArea
                    value={this.state.info}
                    placeholder="cats are frens"
                    style={{ maxWidth: '90%' }}
                    maxLength={500}
                    rows={4}
                    onChange={(e) => {
                      this.setState({
                        info: e.target.value,
                      })
                    }}
                  />
                </Form.Item>
                <div style={{ textAlign: 'right' }}>
                  <Form.Item>
                    <Button
                      onClick={() => {
                        parent.enterMeow(
                          this.state.info ||
                          defaultInfo
                        )
                        this.setState({ info: '' })
                      }}
                      type="primary"
                    >
                      meow!
                    </Button>
                  </Form.Item>
                </div>
              </>
            }
          ></Comment>
        </>
      )
    }
  }
}

export class CreatorWrapper extends React.Component {
  render() {
    const { view } = this.props
    return <Card style={{ backgroundColor: '#edf6ff' }}>{view}</Card>
  }
}
