import React from 'react'
import {
    Layout,
    Card,
} from 'antd'
import { Subscriber } from './pages/Subscriber'
import { Creator } from './pages/Creator'
import * as AppViews from './views/AppViews'

const { Header, Content, Footer } = Layout

export class Root extends React.Component {
    render() {
        const { acc, mode } = this.props
        return (
            <Layout className="layout">
                <Header style={{ color: '#fff' }}>
                    <em>meow</em> - an Algorand powered microblog
                </Header>
                <Content style={{ padding: '50px 50px', display: 'block', marginLeft: "auto", marginRight: "auto" }}>
                    <div
                        style={{ minHeight: '90vH' }}
                        className="site-layout-content"
                    >
                        <Card style={{ padding: '2rem' }}>
                            {mode === 'ConnectAccount' ? (
                                <AppViews.ConnectAccount />
                            ) : (
                                <center>
                                    <Creator acc={acc} />
                                    <Subscriber acc={acc} />
                                </center>
                            )}
                        </Card>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Built with &hearts; during <b><em>Reach</em>{' '}Women Who Code Bounty Hack</b> | 2022
                </Footer>
            </Layout>
        )
    }
}
