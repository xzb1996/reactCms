import React, { Component } from 'react'
import { Layout } from 'antd';

import SliderTabBar from "@components/sliderTabBar"

const { Header, Content, Footer, Sider } = Layout;


export default class LayoutComponent extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <div className="logo" />
                    <SliderTabBar />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
