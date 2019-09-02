import React, { Component } from 'react'
import { Form, Input, Button } from "antd"
import { AddBooksWrapper } from "./styled"
class AddBooks extends Component {
    render() {
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
            <AddBooksWrapper>
                <Form {...formItemLayout} onSubmit={this.handleAdd.bind(this)}>
                    <Form.Item label="用户名称">
                        {
                            getFieldDecorator("username", {
                                rules: [
                                    {
                                        required: true,
                                        message: "该项必须填写"
                                    }
                                ]
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="用户信息">
                        {
                            getFieldDecorator("userInfo", {
                                rules: []
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="用户状态">
                        {
                            getFieldDecorator("status", {
                                rules: []
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">添加</Button>
                    </Form.Item>
                </Form>
            </AddBooksWrapper>
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

export default Form.create()(AddBooks);