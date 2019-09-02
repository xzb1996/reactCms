import React, { Component } from 'react'
import { Card , Form , Input ,Button } from "antd";
import wangEditor from "wangeditor"
class PublicArticle extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Card title="发布文章">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Item label="标题">
                        {
                            getFieldDecorator("title",{
                                rules:[{
                                    required:true,
                                    message:"章节名称必须填写"
                                }]
                            })(
                                <Input type="text" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <div ref="aditorContent"></div>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
    componentDidMount(){
        this.editor2 = new wangEditor(this.refs.aditorContent)
        this.editor2.create()
    }
    handleSubmit(e){
        e.preventDefault();
        let content = this.editor2.txt.html()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(content, values);
            }
        });
    }
}


export default Form.create()(PublicArticle)