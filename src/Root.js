import React from 'react';
import { Layout, Alert, Space, PageHeader, Button, Typography, Menu, Card, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Subscriber } from './pages/Subscriber';
import { Creator } from './pages/Creator';

import * as AppViews from './views/AppViews';

const { Header, Content, Footer } = Layout;

export class Root extends React.Component {
    render() {
        const { acc, parent, mode } = this.props;
        console.log(mode)
        // const Home = () => {
        //     if (mode === 'ConnectAccount') {
        //         return <AppViews.ConnectAccount />
        //     } else {
        //         return <AppViews.SelectRole {...{ parent }} />
        //     }
        // }

        return (

            <Layout className="layout">
                <Header style={{ color: '#fff' }} >
                    <em>meow</em> - an Algorand powered microblog
                </Header>
                <Content style={{ padding: '50px 50px' }}>
                    <div style={{ minHeight: '90vH' }} className="site-layout-content">
                        <Card style={{ padding: '2rem' }}>
                          {mode === 'ConnectAccount' ? <AppViews.ConnectAccount /> : <center>
                                                               <Creator acc={acc} />
                               
                                                              
                                <Subscriber acc={acc} />


                            </center>}
                        </Card>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Built with &hearts;</Footer>
            </Layout>

        );
    }
}