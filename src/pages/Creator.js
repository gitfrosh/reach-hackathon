import React from 'react'
import * as CreatorViews from './../views/CreatorViews'
import * as backend from './../build/index.main.mjs'
import { FormOutlined } from '@ant-design/icons'
import { Button } from 'antd'
export class Creator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mode: 'Start' }
    }
    async deploy() {
        this.setState({ mode: 'BackendRunning' })
        const ctc = this.props.acc.contract(backend)
        backend.Creator(ctc, this)
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2)
        const ctcInfo = await ctc.getInfo()

        this.setState({ mode: 'BackendRunning', ctcInfoStr, ctcInfo: ctcInfo })
    }
    async meow() {
        const meow = await new Promise((resolveMeow) => {
            this.setState({ resolveMeow })
        })
        return meow || 'Test'
    }
    enterMeow(meow) {
        this.state?.resolveMeow && this.state.resolveMeow(meow)
    }

    render() {
        let view = null
        const parent = this
        const { mode, ctcInfoStr, ctcInfo, resolveMeow } = this.state
        if (mode === 'Start') {
            view = (
                <Button
                    size="large"
                    type="primary"
                    onClick={() => this.deploy()}
                    icon={<FormOutlined />}
                >
                    Start blog
                </Button>
            )
        } else {
            view = (
                <CreatorViews.BackendRunning
                    {...{ ctcInfoStr, ctcInfo, parent, resolveMeow }}
                />
            )
        }
        return <CreatorViews.CreatorWrapper {...{ view }} />
    }
}
