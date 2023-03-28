/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-28 15:37:36
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-02-28 22:55:31
 * @FilePath: /jest中的snapshot快照/snapshot.js
 * @Description: 
 */
export const config1 = () => {
  return {
    method: 'GET',
    url: '/api',
    time: new Date()
  }
}

export const config2 = () => {
  return {
    method: 'GET',
    url: '/api',
    time: new Date().getTime()
  }
}