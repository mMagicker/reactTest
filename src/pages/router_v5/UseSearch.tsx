import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UseSearch() {
  const location = useLocation()
  console.log(location.search)
  return (
    <div>UseSearch</div>
  )
}
