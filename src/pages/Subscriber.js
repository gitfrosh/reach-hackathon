import React from "react";
import * as SubscriberViews from "./../views/SubscriberViews";
import * as backend from "./../build/index.main.mjs";
import { PageHeader, Image, Tooltip, List, Modal, Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import logo from "./../assets/kitty.png";

export class Subscriber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: "Start", isModalOpen: false, meows: [] };
    }
    async runBackend(ctcInfoStr) {
        this.setState({
            isModalOpen: false,
        });
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = this.props.acc.attach(backend, ctcInfo);
        const interact = {
            got: ({ text: text, owner: owner }) => {
                console.log(text, owner);
                this.setState((prevState) => ({
                    meows: [...prevState.meows, { text: text, owner: owner }],
                }));
            },
        };
        await backend.Subscriber(ctc, interact);
        this.setState({ mode: "DisplayInfo" });
    }

    render() {
        let view = null;
        const parent = this;
        view = (
            <>
                <Modal
                    footer={null}
                    title="Add Subscription"
                    onCancel={() => this.setState({ isModalOpen: false })}
                    visible={this.state.isModalOpen}
                >
                    <SubscriberViews.RunBackend {...{ parent }} />
                </Modal>
                <PageHeader
                    className="site-page-header"
                    title="Timeline"
                    subTitle="all the meows"
                    extra={[
                        <Button
                            type="default"
                            onClick={() =>
                                this.setState({
                                    isModalOpen: true,
                                })
                            }
                            icon={<PlusOutlined />}
                        >
                            Add subscription
                        </Button>,
                    ]}
                />

                <Divider />
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.meows}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Image src={logo} style={{ width: 32 }} />}
                                title={
                                    <div style={{ textAlign: "left" }}>
                                        <Tooltip
                                            placement="topLeft"
                                            title={item.owner}
                                        >{`${item.owner?.substring(0, 8)}..`}</Tooltip>
                                    </div>
                                }
                                description={
                                    <div style={{ textAlign: "left" }}>{item.text}</div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </>
        );
        return <SubscriberViews.SubscriberWrapper {...{ view }} />;
    }
}
