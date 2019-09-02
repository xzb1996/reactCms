import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { LoginWrapper } from "./styled"
import logo from "@static/logo.svg"
import {withRouter} from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
class Login extends Component {
    render() {
        // console.log(this.props)
        let { getFieldDecorator } = this.props.form;
        return (
            <LoginWrapper>
                <div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <Form onSubmit={this.handleLogin}>
                        <Form.Item >
                            {
                                getFieldDecorator("username", {
                                    // 校验规则
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名必须填写"
                                        },
                                        {
                                            pattern: /^\w{5,13}$/,
                                            message: "密码应在5-13位之间"
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text"
                                        placeholder="Username"
                                    />
                                )

                            }

                        </Form.Item>
                        <Form.Item >
                            {
                                getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "密码必须填写"
                                        }

                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Log in
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginWrapper>
        )
    }
    handleLogin = (e) => {
        // 获取表单中的数据
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleLogin(values.username,values.password)
            }
        });
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login)))