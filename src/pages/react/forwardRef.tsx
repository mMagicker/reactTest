import React, { forwardRef } from 'react'
// 测试向forwardref传递值

const FatherPage = () => {
  return <div>
    <SonPage ref={ ref => console.log(ref) } title="测试forwardRef" />
  </div>
}
const SonPage = forwardRef((props: { title: string }, ref) => {
  const {title} = props
  return <div>
    { title }
  </div>
})
export default FatherPage
