/*
 * @Author: xiongsheng
 * @Date:   2016-11-09 14:54:59
 * @Last Modified by:   xiongsheng
 * @Last Modified time: 2017-02-04 16:16:26
 */

'use strict';

import React from 'react';
import {
    render
} from 'react-dom';

import routes from './src/router/router';
import {
    Router,
    useRouterHistory,
    hashHistory
} from 'react-router';

import {
    createHashHistory
} from 'history';

import 'normalize.css';
import 'antd/dist/antd.css';
// import './asset/style/app.less';

const history = useRouterHistory(createHashHistory)({
    queryKey: false
});

render(
    <Router history={history} routes={routes}/>,
    document.getElementById('app')
);

