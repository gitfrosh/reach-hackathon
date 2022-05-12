import React from 'react';
import * as SubscriberViews from './../views/SubscriberViews';
import * as backend from './../build/index.main.mjs';
import { Layout, Alert, Space, Modal, Button, Card } from 'antd';
import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
export class Subscriber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'Start', isModalOpen: false };
    }
    async runBackend(ctcInfoStr) { // from mode: RunBackend
        this.setState({
            isModalOpen: false
        })
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = this.props.acc.attach(backend, ctcInfo);
        const interact = {
            got: (infoBytes) => {
                console.log(infoBytes)
                this.setState({ info: infoBytes })
            },
        };
        await backend.Subscriber(ctc, interact);
        this.setState({ mode: 'DisplayInfo' })
    }

    render() {
        let bob = null;
        const parent = this;
        const { mode, info } = this.state;
        if (mode === "Start") {
            bob = <>
                <Modal title="Add Subscription" onCancel={() => this.setState({ isModalOpen: false})} visible={this.state.isModalOpen}>
                    <SubscriberViews.RunBackend  {...{ parent }} />
                </Modal>

                <Button type="primary" onClick={() => this.setState({
                    isModalOpen: true
                })} icon={<SearchOutlined />}>
                    Subscribe!   </Button>
            </>
            //  }
            // else if (mode === 'RunBackend') {
            //     bob = <SubscriberViews.RunBackend {...{ parent }} />
        } else {
            bob = <SubscriberViews.DisplayInfo {...{ info }} />
        }
        return <SubscriberViews.SubscriberWrapper {...{ bob }} />;
    }
}