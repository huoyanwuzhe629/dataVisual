/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:19:54
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-02-08 15:34:04
*/

'use strict';
import React, {
    Component
} from 'react';
import Header from './layout/Header';
import Content from './content';
import Footer from './layout/Footer';

class App extends Component {

    render() {
        const {
            children
        } = this.props;
        return (
            <div className="layout-topaside">
                <Header />
                <Content >
                    {children}
                </Content>
                <Footer />
            </div>
        );
    }
}

export default App
