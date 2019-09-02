import React, { Component } from 'react'
import {Table,Switch } from "antd"
// 时间转换
import moment from "moment";

  
  const data = [
    {
      key: '1',
      username: 'Alley',
      account: 'alley9008',
      date: moment(parseInt(1567224501331+Math.random()*10000000000)).subtract(10, 'days').calendar(),
      status:true
    },
    {
        key: '2',
        username: '吴彦祖',
        account: 'yanzu008',
        date:moment(parseInt(1567224501331+Math.random()*100000000)).subtract(10, 'days').calendar(),
        status:false
    },
    {
        key: '3',
        username: '胡歌',
        account: 'huge7788',
        date: moment(parseInt(1567224501331+Math.random()*1000000000000000)).subtract(10, 'days').calendar(),
        status:true
    },
  ];
export default class Auth extends Component {
    render() {
        const columns = [
            {
              title: '账号',
              dataIndex: 'account',
              key: 'account',
              render: text => <a>{text}</a>,
            },
            {
              title: '用户名',
              dataIndex: 'username',
              key: 'username',
            },
            {
              title: '注册时间',
              dataIndex: 'date',
              key: 'date',
            },
            {
                title: '是否冻结',
                dataIndex: 'status',
                key: 'status',
                render:(flag,record)=><Switch defaultChecked={flag} onChange={this.handleOnchange.bind(this,record)} />
              },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>删除</a>
                </span>
              ),
            },
          ];
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
    handleOnchange(info,status){
        console.log(status,info);
    }
}
