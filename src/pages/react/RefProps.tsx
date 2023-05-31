/**
 * 验证是否可以通过ref传递props
 */
import React, { useRef } from 'react'

const RefProps = () => {
  const inputRef = useRef<string>('')
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value
  }
  return <div style={{height:200, display:"flex"}}>
    <input onChange={onInputChange} />
    <Son inputValue={inputRef.current} />
  </div>
}
const Son = (props: { inputValue: string }) => {
  console.log(props)
  return <div>{props.inputValue}</div>
}

export default RefProps