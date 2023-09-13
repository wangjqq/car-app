import React, { useEffect } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

// 全局样式
import './app.less'

function App(props) {
  const store = configureStore({
    reducer: rootReducer,
  })

  return <Provider store={store}> {props.children} </Provider>
}

export default App
