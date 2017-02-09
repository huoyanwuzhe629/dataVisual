/*
* @Author: xiongsheng
* @Date:   2017-02-08 14:26:30
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-08 18:05:27
*/

'use strict';
import React, {Component} from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Content extends Component {
    render() {
      const {
            children
        } = this.props;
        return (
            <div className="layout-wrapper">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>App list</Breadcrumb.Item>
                <Breadcrumb.Item>Any app</Breadcrumb.Item>
              </Breadcrumb>
              <div className="layout-container">
                <aside className="layout-sider">
                  <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu key="sub1" title={<span><Icon type="user" />Navigation 1</span>}>
                      <Menu.Item key="1">item 1</Menu.Item>
                      <Menu.Item key="2">item 2</Menu.Item>
                      <Menu.Item key="3">item 3</Menu.Item>
                      <Menu.Item key="4">item 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />Navigation 2</span>}>
                      <Menu.Item key="5">item 5</Menu.Item>
                      <Menu.Item key="6">item 6</Menu.Item>
                      <Menu.Item key="7">item 7</Menu.Item>
                      <Menu.Item key="8">item 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />Navigation 3</span>}>
                      <Menu.Item key="9">item 9</Menu.Item>
                      <Menu.Item key="10">item 10</Menu.Item>
                      <Menu.Item key="11">item 11</Menu.Item>
                      <Menu.Item key="12">item 12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </aside>
                <div className="layout-content">
                    {children}
                </div>
              </div>
            </div>
        );
    }
}

export default Content
