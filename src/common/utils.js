/*
* @Author: xiongsheng
* @Date:   2017-01-12 15:12:52
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-01-12 15:24:42
*/

'use strict';
const mq = window.matchMedia("(min-width: 768px)");

export function isPc() {
    return mq.matches;
}
