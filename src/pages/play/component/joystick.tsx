import { View } from '@tarojs/components'
import { useRef, useState, useEffect } from 'react'

const Joystick = ({ onChange, size }) => {
  const joystickRef = useRef(null)
  const [joystickPosition, setJoystickPosition] = useState({ x: size / 2, y: size / 2 })
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const joystickElement = joystickRef.current
    const containerSize = size
    const joystickSize = containerSize / 2 // 摇杆的尺寸，这里假设摇杆和容器尺寸相等

    const handleTouchStart = (event) => {
      event.preventDefault() // 阻止页面滚动

      const touch = event.touches[0]
      const offsetX = touch.clientX - joystickSize / 2
      const offsetY = touch.clientY - joystickSize / 2

      setJoystickPosition({ x: offsetX, y: offsetY })
      setIsDragging(true)
    }

    const handleTouchMove = (event) => {
      event.preventDefault() // 阻止页面滚动

      if (!isDragging) return

      const touch = event.touches[0]
      const offsetX = touch.clientX - joystickSize / 2
      const offsetY = touch.clientY - joystickSize / 2

      const maxX = containerSize - joystickSize
      const maxY = containerSize - joystickSize

      const boundedX = Math.max(0, Math.min(maxX, offsetX))
      const boundedY = Math.max(0, Math.min(maxY, offsetY))
      console.log(maxX, offsetX, maxY, offsetY, boundedX, boundedY)
      setJoystickPosition({ x: boundedX, y: boundedY })
      onChange({ x: boundedX, y: boundedY })
    }

    const handleTouchEnd = () => {
      setJoystickPosition({ x: size / 2, y: size / 2 })
      setIsDragging(false)
      onChange({ x: size / 2, y: size / 2 })
    }

    joystickElement.addEventListener('touchstart', handleTouchStart)
    joystickElement.addEventListener('touchmove', handleTouchMove)
    joystickElement.addEventListener('touchend', handleTouchEnd)
    joystickElement.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      joystickElement.removeEventListener('touchstart', handleTouchStart)
      joystickElement.removeEventListener('touchmove', handleTouchMove)
      joystickElement.removeEventListener('touchend', handleTouchEnd)
      joystickElement.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [size, onChange, isDragging])

  return (
    <View
      ref={joystickRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: '#ccc',
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'none',
      }}>
      <View
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          top: joystickPosition.y,
          left: joystickPosition.x,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </View>
  )
}

export default Joystick
