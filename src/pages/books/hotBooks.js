import React, { Component, Fragment } from 'react'
import { Table, Divider } from 'antd';
import { connect } from "react-redux"
// Modal 对话框
import { Modal, Card, Button } from "antd"
// 导出表格
import XLSX from "xlsx"
import ModelForm from "@components/ModelForm"
import { mapStateToProps, mapDispatchToProps } from "./connect"


class HotBooks extends Component {
    constructor() {
        super()
        this.state = {
            // 模态框初始状态
            visible: false,
            modelData: {},
            columns: [
                {
                    title: '用户ID',
                    dataIndex: '_id',
                    key: '_id',
                    render: text => <a>{text}</a>,
                    width: 200
                },
                {
                    title: '用户名称',
                    dataIndex: 'username',
                    key: 'username',
                    width: 200
                },
                {
                    title: '用户信息',
                    dataIndex: 'userInfo',
                    key: 'userInfo',
                    width: 200
                },
                {
                    title: '开户状态',
                    dataIndex: 'status',
                    key: 'status',
                    render: text => <a>{text}</a>,
                    width: 200
                },
                {
                    title: '开户时间',
                    dataIndex: 'registerTime',
                    key: 'registerTime',
                    width: 200
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            <a onClick={this.handleShowModel.bind(this, record)}>修改 {record.name}</a>
                            <Divider type="vertical" />
                            <a onClick={this.hadnleDel.bind(this, record)}>删除</a>
                        </span>
                    ),
                },
            ]
        }
    }
    render() {
        let { hotBooks } = this.props;
        let { columns, modelData } = this.state;
        return (
            <Fragment>
                <Card title="个人信息列表" extra={<Button onClick={this.exportFile.bind(this)}>导出表格</Button>}>
                    <Table 
                    rowSelection={{
                        onChange:this.handleTabOnChange.bind(this)
                    }}
                    columns={columns} 
                    dataSource={hotBooks} 
                    />
                </Card>

                <Modal
                    title="修改个人信息"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <ModelForm modelData={modelData} />
                </Modal>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getHotBooks();
    }
    exportFile() {
        let data = [["用户名", "用户信息", "开户状态", "开户事件"]];
        let { hotBooks } = this.props
        for (var i = 0; i < hotBooks.length; i++) {
            var arr = [];
            // for (var key in hotBooks[i]) {
            //     if (key === "booksTag") {
            //         arr.push(hotBooks[i][key].join(""))
            //     } else {
            //         arr.push(hotBooks[i][key])
            //     }
            // }
            arr.push(hotBooks[i])
            data.push(arr);
        }
        //设置导出的数据
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        XLSX.writeFile(wb, "用户列表.xlsx")
    };
    handleTabOnChange(key,info){
        console.log(key,info)
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleShowModel(record) {
        this.setState({
            visible: true,
            modelData: record
        })
    }
    hadnleDel(record) {
        Modal.confirm({
            content: `您确定要删除 ${record.username} 用户吗?`,
            cancelText: "取消",
            okText: "确认",
            onOk: () => {
                console.log(record._id)
            }

        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HotBooks)