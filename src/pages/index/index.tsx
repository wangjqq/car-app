import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, My } from '@nutui/icons-react-taro'
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
        <Tabbar.Item
          title="操作"
          icon={
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8786"
              width="18"
              height="18">
              <path
                d="M825 579.1h-87.2c-49.9-201.9-164.1-326.9-300.4-326.9H277.1c-0.4 0-0.8 0.1-1.2 0.1-14.7-91.4-127.5-148-132.7-150.5l-15 30.6c1.1 0.5 102.9 51.4 114.3 125.9-43.8 14.6-75.6 55.5-75.6 104.1v218.3c-58.7 8.2-97.2 58-97.2 129.9 0 72.6 59.1 131.6 131.5 131.6l36.7 0.4c8 42.7 45.4 75.2 90.4 75.2 45.1 0 82.6-32.7 90.4-75.6h221c7.8 42.9 45.3 75.6 90.4 75.6 45.1 0 82.6-32.7 90.4-75.6h4.7c72.6 0 131.6-59.1 131.6-131.6S897.6 579.1 825 579.1z m0 229.2h-18.9c-2.6 0-5.1 0.7-7.3 1.8-6.3 2.5-10.8 8.6-10.8 15.8 0 32-26 58-58 58s-58-26-58-58c0-0.1-0.1-0.2-0.1-0.3 0-0.1 0.1-0.2 0.1-0.3 0-9.4-7.6-17-17-17H403.2c-9.4 0-17 7.6-17 17 0 0.1 0.1 0.2 0.1 0.3 0 0.1-0.1 0.2-0.1 0.3 0 32-26 58-58 58s-58-26-58-58c0-1.1-0.4-2.1-0.6-3.1-0.2-1.2-0.3-2.4-0.7-3.4-0.4-1-1.2-1.8-1.7-2.6-0.6-0.9-1.1-2-1.9-2.8-0.7-0.8-1.7-1.2-2.6-1.8-0.9-0.6-1.7-1.4-2.8-1.9-1-0.4-2.2-0.5-3.2-0.7-1.1-0.2-2.1-0.7-3.3-0.7l-52-0.5c-53.8 0-97.6-43.8-97.6-97.6 0-45 21-97.6 80.2-97.6 8.7 0 15.5-6.6 16.6-14.9h0.4V362.5c0-42 34.2-76.2 76.2-76.2h160.4c122.4 0 226 120.2 270.4 313.7l0.3-0.1c1.7 7.6 8.2 13.3 16.3 13.3H825c53.8 0 97.6 43.8 97.6 97.6s-43.8 97.5-97.6 97.5z"
                p-id="8787"
                fill={nowTab === TABBAR_LIST.PlayPage ? '#fa2c19' : undefined}></path>
              <path
                d="M453.4 365.1c-23.8 0-44.4 3.8-66.9 12.3-0.7 0.3-1.2 0.8-1.9 1.2-6.9 2.2-12 8.4-12 16v212.9H633c9.4 0 17-7.6 17-17 0-1.8-0.5-3.5-1-5.1 0.9-7.6 1.7-15.2 1.7-22.8 0.1-108.9-88.5-197.5-197.3-197.5z m-46.7 41.5c15.4-5 29.9-7.4 46.7-7.4 90.1 0 163.3 73.3 163.3 163.3 0 3.7-0.6 7.3-0.8 10.9H406.7V406.6z"
                p-id="8788"
                fill={nowTab === TABBAR_LIST.PlayPage ? '#fa2c19' : undefined}></path>
            </svg>
          }
        />
        <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
      </Tabbar>
    </View>
  )
}

export default Index
