import { View } from '@tarojs/components'
import './index.less'
import { Button } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    Taro.openBluetoothAdapter({
      success: function (res) {
        console.log(res)
      },
    })
  }, [])

  return (
    <View className="home">
      <View className="Home">主页</View>
      <Button>打开蓝牙</Button>
    </View>
  )
}

export default Home
