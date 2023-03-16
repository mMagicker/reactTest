import React, { useState, useEffect } from "react"

export default function ImgError() {
  const [load, setLoad] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState(
    "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  )

  const bakSrc =
    "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const onImgLoad = () => {
    setLoad(false)
  }

  const changeUrl = () => {
    setImgSrc(bakSrc)
  }

  useEffect(() => {
    setLoad(true)
  }, [imgSrc])

  return (
    <div>
      {load ? <div>加载中</div> : ""}
      <img src={imgSrc} alt="" onLoad={() => onImgLoad()} />
      <button onClick={() => changeUrl()}>change url</button>
    </div>
  )
}
