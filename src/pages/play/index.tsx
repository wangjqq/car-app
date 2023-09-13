import React from 'react'
import { View } from '@tarojs/components'
import { Joystick } from 'react-joystick-component'
import { useDispatch, useSelector } from 'react-redux'
import { setPwm } from '../../store/reducers'
import './index.less'
import { IPwmState } from './type'

const My: React.FC = () => {
  const dispatch = useDispatch()
  const pwm = useSelector((state: IPwmState) => state)
  console.log(pwm)
  // 将摇杆的位置映射到PWM占空比
  function mapJoystickToPWM(x) {
    // x是摇杆的位置，范围是-1到1
    // 返回一个PWM占空比，范围是0到100
    return ((x + 1) / 2) * 100
  }

  // 根据摇杆的方向和位置，设置PWM占空比给电机
  function setPWMByJoystick(e) {
    // e是摇杆移动事件，包含了方向和位置信息
    // 假设你有一个setPWM的方法来设置PWM占空比给电机，参数是电机编号（A或B）和占空比（0到100）
    if (e.direction === 'FORWARD') {
      // 向上时，两个电机都正转，速度由y值决定
      let speed = mapJoystickToPWM(e.y)
      dispatch(setPwm({ left: speed, right: speed }))
    } else if (e.direction === 'BACKWARD') {
      // 向下时，两个电机都反转，速度由y值决定
      let speed = mapJoystickToPWM(e.y)
      dispatch(setPwm({ left: -speed, right: -speed }))
    } else if (e.direction === 'LEFT') {
      // 向左时，左边电机反转，右边电机正转，速度由x值决定
      let speed = mapJoystickToPWM(e.x)
      dispatch(setPwm({ left: -speed, right: speed }))
    } else if (e.direction === 'RIGHT') {
      // 向右时，左边电机正转，右边电机反转，速度由x值决定
      let speed = mapJoystickToPWM(e.x)
      dispatch(setPwm({ left: speed, right: -speed }))
    } else {
      // 其他情况，两个电机都停止
      dispatch(setPwm({ left: 0, right: 0 }))
    }
  }

  return (
    <View>
      left:{pwm.left}
      right:{pwm.right}
      <Joystick size={200} baseColor="#EEEEEE" stickColor="#000000" move={setPWMByJoystick} />
    </View>
  )
}

export default My
