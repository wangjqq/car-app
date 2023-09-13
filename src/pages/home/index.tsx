import { View } from '@tarojs/components'
import './index.less'
import { Button } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const [res, setRes] = useState<any>('')
  const ab2hex = (buffer) => {
    var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    })
    return hexArr.join('')
  }
  const initBlue = () => {
    Taro.openBluetoothAdapter({
      success: function (res) {
        Taro.startBluetoothDevicesDiscovery({
          success: function (res) {
            Taro.onBluetoothDeviceFound(function (res) {
              var devices = res.devices
              console.log('new device list has founded')
              console.dir(devices)
              console.log(ab2hex(devices[0].advertisData))
            })
          },
        })
      },
    })
  }
  return (
    <View className="home">
      <View className="Home">主页</View>
      <Button onClick={() => initBlue()}>初始化蓝牙</Button>
      {res}
    </View>
  )
}

export default Home
