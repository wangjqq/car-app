import React from 'react'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import './index.less'

function My() {
  return (
    <View className="nutui-react-demo">
      <View className="My">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="My">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default My
