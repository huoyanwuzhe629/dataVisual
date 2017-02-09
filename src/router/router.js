/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:17:00
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-09 10:53:21
*/

'use strict';

import React from 'react';
import {
    Route,
    IndexRedirect
} from 'react-router';

import App from '../component/App';
import SpreadOverview from '../component/content/Overview/SpreadOverview';
import OtherOverview from '../component/content/Overview/OtherOverview';

export default (
    <Route path="/" component={App}  >
        <IndexRedirect  to="/home" />
        <Route path="home" component={SpreadOverview} />
        <Route path="test" component={OtherOverview} />
    </Route>
);
