
import React from 'react';
import * as CreatorViews from './../views/CreatorViews';
import * as backend from './../build/index.main.mjs';
import { FormOutlined } from '@ant-design/icons';
import { Layout, Alert, Space, Button, Card } from 'antd';

const defaultInfo = 'cats are frens';

export class Creator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'Start' };
    }
    async deploy() { // from mode: Deploy
        this.setState({ mode: 'BackendRunning'})
        const ctc = this.props.acc.contract(backend); // deploys contract
        backend.Creator(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const ctcInfo = await ctc.getInfo();

        this.setState({ mode: 'BackendRunning',  ctcInfoStr, ctcInfo: ctcInfo });
    }
    async meow() { // Fun([], Bytes(1000)
        const meow = await new Promise(resolveMeow => {
            console.log(resolveMeow)
            this.setState({ resolveMeow });
        });
        return meow || "Test";
    }
    // enterInfo(meow) { this.setState({ mode: 'RunBackend', meow }); } // from mode: EnterInfo
    enterMeow(meow) { this.state.resolveMeow(meow) } // from mode: EnterInfo

    async runBackend() {
        const { ctc, meow } = this.state;
        console.log(ctc, meow)
        this.setState({ mode: 'BackendRunning', ctc: ctc });
        console.log(meow)
        const interact = {
            meow: () => meow
        };
        const post = await backend.Creator(ctc, interact);
        console.log(post) // empty
        this.setState({ mode: 'BackendRan' }); // not working, loop
    }
    render() {
        let alice = null;
        const parent = this;
        const { mode, ctcInfoStr, ctcInfo, requestStandard, meow } = this.state;
        console.log(mode, meow)
        if (mode === 'Start') {
            alice = <Button size="large" type="primary" onClick={() => this.deploy()} icon={<FormOutlined />}>
                Start blog    </Button>
       // } 
        // else if (mode === 'Deploy') {
        //     alice = <CreatorViews.Deploy {...{ parent }} />;
        } else  {
            alice = <CreatorViews.BackendRunning {...{ ctcInfoStr, ctcInfo ,parent }} />;
        } 
        return <CreatorViews.CreatorWrapper {...{ alice }} />
    }
}