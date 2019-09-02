import React, { Component } from 'react'
import { Form, Input, Button } from "antd"

class ModelForm extends Component {
    render() {
        let { username, userInfo, status } = this.props.modelData
        // 表单身上的属性，用来做表单验证
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 20 }
            }
        }
        return (
            <Form {...formItemLayout} onSubmit={this.handleAdd.bind(this)}>
                <Form.Item label="用户名称">
                    {
                        getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message: "该项必须填写"
                                }
                            ],
                            // 设置默认值
                            initialValue: username
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="用户信息">
                    {
                        getFieldDecorator("userInfo", {
                            rules: [],
                            initialValue: userInfo
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="用户状态">
                    {
                        getFieldDecorator("status", {
                            rules: [],
                            initialValue: status
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">修改</Button>
                </Form.Item>
            </Form>
        )
    }
    handleAdd(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //进行前后端的数据交互
                console.log("received values of form :", values)
            }

        })
    }
}

export default Form.create()(ModelForm);