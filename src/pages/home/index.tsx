import { View } from '@tarojs/components'
import './index.less'
import { Button, VirtualList } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { useEffect, useRef, useState } from 'react'

const Home: React.FC = () => {
  const [flag, setFlag] = useState(true)
  const btList = useRef<any[]>([])
  const [pageNo, setPageNo] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const itemVariable = (data: any, dataIndex: number) => {
    return (
      <div
        style={{
          height: `${dataIndex % 2 === 0 ? '100px' : '50px'}`,
        }}>
        {data.deviceId}
      </div>
    )
  }
  const onScroll = () => {
    if (pageNo > 50 || isLoading) return
    setIsLoading(true)
    setTimeout(() => {
      setPageNo(pageNo + 1)
      setIsLoading(false)
    }, 30)
  }

  const ab2hex = (buffer) => {
    var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    })
    return hexArr.join('')
  }
  const initBlue = async () => {
    await Taro.openBluetoothAdapter()
    await Taro.startBluetoothDevicesDiscovery()

    Taro.onBluetoothDeviceFound(async function (res) {
      var devices = res.devices
      console.log('new device list has founded')
      console.dir(devices)
      console.log(ab2hex(devices[0].advertisData))
      const newRes = devices[0]
      let shouldBeAdd = true
      btList.current.forEach((element) => {
        if (element.deviceId === newRes.deviceId || !newRes.connectable || !newRes.name) {
          shouldBeAdd = false
        }
      })
      if (shouldBeAdd) {
        // setBtList(btList.push(newRes))
        btList.current.push(newRes)
      }
      if (btList.current.length === 3) {
        const success = await Taro.stopBluetoothDevicesDiscovery()
      }
      console.log(btList)
    })
  }
  return (
    <View className="home">
      <View className="Home">主页</View>
      <Button onClick={() => initBlue()}>初始化蓝牙</Button>
      <VirtualList
        itemHeight={80}
        list={btList.current}
        itemRender={itemVariable}
        onScroll={onScroll}
        itemEqual={false}
        containerHeight={500}
      />
      {btList.current[0]?.deviceId}
    </View>
  )
}

export default Home
