/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:19:54
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-04 16:40:04
*/

'use strict';
import React, {
    Component
} from 'react';
import {Link} from 'react-router';
import { Row, Col, Button, Icon } from 'antd';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
    }

    showMenu = ()=> {
        const display = this.state.display == 'block' ? 'none' : 'block';
        this.setState({
            display
        })
    }

    render() {
        const {
            display
        } = this.state;

        return (
            <Row className="header-wrap" type="flex">

            </Row>
        );
    }
}

export default Header
