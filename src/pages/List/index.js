import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import request from '@/utils/axios';
import { List, Avatar, Button, message } from 'antd';

const BlogList = ({ history }) => {
  const [list, setList] = useState([]);

  function queryList() {
    request.get('api/getList').then((res) => {
      if (res.code === 'Y') {
        setList(res.data);
      } else {
        setList([]);
      }
    });
  }
  useEffect(() => {
    queryList();
  }, []);

  function handleDelete(id) {
    request.get('/api/deleteBlog', { id }).then((res) => {
      if (res.code === 'Y') {
        message.success('删除成功');
        queryList();
        return;
      }
      message.warn('删除失败');
    });
  }

  function modifyBlog(id) {
    history.push({
      pathname: '/editor',
      state: { id }
    });
  }

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <div>
                  <Link to={`/detial/${item.id}`}>
                    {item.title}&nbsp;&nbsp;{item.author}
                  </Link>
                  <span style={{ float: 'right' }}>
                    <Button size="small" onClick={() => modifyBlog(item.id)}>
                      修改
                    </Button>
                    &nbsp;&nbsp;
                    <Button size="small" type="danger" onClick={() => handleDelete(item.id)}>
                      删除
                    </Button>
                  </span>
                </div>
              }
              description={item.describe}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default withRouter(BlogList);
