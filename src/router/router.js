/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:17:00
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-08 17:21:07
*/

'use strict';

import React from 'react';
import {
    Route,
    IndexRedirect
} from 'react-router';

import App from '../component/App';
import Home from '../component/content/Home';

export default (
    <Route path="/" component={App}  >
        <IndexRedirect  to="/home" />
        <Route path="home" component={Home} />
    </Route>
);
