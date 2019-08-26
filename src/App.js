import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout,
         Menu,
         Breadcrumb,
         Input,
         List,
         Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const ShoppingList = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function App() {

  function addToList(value){

  }

  function onUserType(event){
 
  }

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Shopping List</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <div>
        <div id="input-container">
        <Search
          placeholder="Add Shopping Item Here ..."
          onChange={(event) => onUserType(event)}
          onSearch={value => addToList(value)}
          style={{ width: 200 }}
        />
        <h4 style={{ marginLeft: 10}}>Waiting on Yummy Treats...</h4>
        </div>
      <div>
    <h3 style={{ marginBottom: 16, marginTop: 10}}>Our Amazing List</h3>
    <List
      style={{marginBottom: 16}}
      header={<div class="centered"><h3><u>Our Amazing List</u></h3></div>}
      footer={<div class="centered"><h5>-----</h5></div>}
      bordered
      dataSource={ShoppingList}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  </div>
  </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}><h3>Made With ❤️</h3></Footer>
  </Layout>
  );
}

export default App;
