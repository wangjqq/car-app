import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, My, PlayStart } from '@nutui/icons-react-taro'
import HomePage from '../home'
import PlayPage from '../play'
import MyPage from '../my'
import { TABBAR_LIST } from './data'
import './index.less'

function Index() {
  const [nowTab, setNowTab] = useState(TABBAR_LIST.HomePage) //当前的tab

  const nowComponent = () => {
    switch (nowTab) {
      case TABBAR_LIST.HomePage:
        return <HomePage></HomePage>
      case TABBAR_LIST.PlayPage:
        return <PlayPage></PlayPage>
      case TABBAR_LIST.MyPage:
        return <MyPage></MyPage>

      default:
        return <HomePage></HomePage>
    }
  }

  return (
    <View>
      {nowComponent()}
      <Tabbar
        className="tabbar"
        defaultValue={0}
        value={nowTab}
        onSwitch={(idx) => {
          setNowTab(idx)
        }}>
        <Tabbar.Item title="首页" icon={<Home width={18} height={18} />} />
        <Tabbar.Item title="操作" icon={<PlayStart width={18} height={18} />} />
        <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
      </Tabbar>
    </View>
  )
}

export default Index
