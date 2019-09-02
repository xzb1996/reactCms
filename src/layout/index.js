import React, { Component } from 'react'
import { Layout } from 'antd';

import SliderTabBar from "@components/sliderTabBar"

import { LayoutWrapper } from "./styled"
const { Header, Content, Footer, Sider } = Layout;


export default class LayoutComponent extends Component {
    render() {
        return (
            <LayoutWrapper>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <div className="logo" >
                            <img src="http://img0.bdstatic.com/static/searchresult/img/logo-2X_32a8193.png" alt="" />
                        </ div>
                        <SliderTabBar />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '16px' ,background:"#fff"}}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </LayoutWrapper>
        )
    }
}
