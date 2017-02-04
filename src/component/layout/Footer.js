/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:23:31
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-01-11 10:58:34
*/

'use strict';

import React, {
    Component
} from 'react';

import { Row, Col } from 'antd';


class Footer extends Component {

    render() {
        return (
            <div className="footer-wrap">
                <Row className="footer">
                    <Col xs={24} sm={24} md={18} lg={18} className="logo-wrap">
                        <div className="logo">design by @bizdev_fe Copyright© 2016</div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} className="link-wrap">
                        <ul>
                            <li><span>FE</span></li>
                            <li><a href="javascript:;">Blog</a></li>
                            <li><a href="javascript:;">NPM</a></li>
                            <li><a href="javascript:;">BizGallery</a></li>
                            <li><a href="javascript:;">BizUI</a></li>
                        </ul>
                        <ul>
                            <li><span>BizTech</span></li>
                            <li><a href="javascript:;">Bizwork</a></li>
                            <li><a href="javascript:;">PMS</a></li>
                            <li><a href="javascript:;">BizTask</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer
