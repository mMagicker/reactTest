import React, { useCallback, useEffect, useState } from "react";
import { Button } from 'antd'

const UseCallback = () => {


  function fn() {
    console.log('fn')
  }

  // const fn = useCallback(() => {
  //   console.log('fn')
  // }, []);
  //

  console.log('render')
  return (
    <div>
      <Son onClick={fn} />
    </div>
  )
}

const Son = (props: any) => {
  const {onClick} = props;

  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1)
    onClick()
  }

  console.log('son render')
  return (
    <div>
      Son
      {count}
      <Button onClick={add}>add</Button>
    </div>
  )
}


export default UseCallback;
