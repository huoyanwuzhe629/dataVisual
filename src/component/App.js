/*
* @Author: xiongsheng
* @Date:   2017-01-10 14:19:54
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-01-10 14:22:42
*/

'use strict';
import React, {
    Component
} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {

    render() {
        const {
            children
        } = this.props;


        return (
            <div >
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

export default App
