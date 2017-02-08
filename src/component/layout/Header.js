/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:19:54
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-08 14:46:35
*/

'use strict';
import React, {
    Component
} from 'react';
import {Link} from 'react-router';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="layout-header">
              <div className="layout-wrapper">
                <div className="layout-logo"></div>
                <Menu theme="dark" mode="horizontal"
                  defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
                  <Menu.Item key="1">挖</Menu.Item>
                  <Menu.Item key="2">掘</Menu.Item>
                  <Menu.Item key="3">机</Menu.Item>
                </Menu>
              </div>
            </div>
            <div className="layout-subheader">
              <div className="layout-wrapper">
                <Menu mode="horizontal"
                  defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
                  <Menu.Item key="1">大</Menu.Item>
                  <Menu.Item key="2">队</Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
        );
    }
}

export default Header
