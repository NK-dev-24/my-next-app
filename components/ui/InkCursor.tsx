'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const InkCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLSpanElement[]>([])
  const amount = 20
  const sineDots = Math.floor(amount * 0.3)
  const width = 26
  const idleTimeout = 150
  let mousePosition = { x: 0, y: 0 }
  let dots: any[] = []
  let timeoutId: NodeJS.Timeout
  let idle = false

  useEffect(() => {
    if (cursorRef.current) {
      buildDots()
      document.addEventListener('mousemove', onMouseMove)
      startIdleTimer()
      gsap.ticker.add(render)
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      clearTimeout(timeoutId)
      gsap.ticker.remove(render)
    }
  }, [])

  const buildDots = () => {
    for (let i = 0; i < amount; i++) {
      const dot = document.createElement('span')
      gsap.set(dot, { scale: 1 - 0.05 * i, x: 0, y: 0 })
      cursorRef.current?.appendChild(dot)
      dotsRef.current.push(dot)
      dots.push({
        x: 0,
        y: 0,
        scale: 1 - 0.05 * i,
        index: i,
        dot: dot,
      })
    }
  }

  const onMouseMove = (event: MouseEvent) => {
    mousePosition.x = event.clientX - width / 2
    mousePosition.y = event.clientY - width / 2
    resetIdleTimer()
  }

  const startIdleTimer = () => {
    timeoutId = setTimeout(goInactive, idleTimeout)
    idle = false
  }

  const resetIdleTimer = () => {
    clearTimeout(timeoutId)
    startIdleTimer()
  }

  const goInactive = () => {
    idle = true
    for (let dot of dots) {
      dot.x = mousePosition.x
      dot.y = mousePosition.y
    }
  }

  const render = () => {
    let x = mousePosition.x
    let y = mousePosition.y
    dots.forEach((dot, index) => {
      let nextDot = dots[index + 1] || dots[0]
      dot.x = x
      dot.y = y
      gsap.set(dot.dot, { x: dot.x, y: dot.y })
      if (!idle || index <= sineDots) {
        const dx = (nextDot.x - dot.x) * 0.35
        const dy = (nextDot.y - dot.y) * 0.35
        x += dx
        y += dy
      }
    })
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div ref={cursorRef} className="ink-cursor" />
    </>
  )
}

export default InkCursor

