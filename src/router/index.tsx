import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import routes from "./router.config"
import { ROUTE } from "./types"

const RouterCom = () => {
  const renderRoute = (data = routes): ROUTE.route[] => {
    return data.map((item) => {
      if (item.children) {
        return (
          <Route key={item.path} path={item.path} element={item.component}>
            {renderRoute(item.children)}
          </Route>
        )
      } else {
        if (item.index) {
          return <Route index element={<Navigate to={item.path} />} key={`${item.path}-navigate`} />
        } else {
          return <Route key={item.path} path={item.path} element={<item.component />} />
        }
      }
    })
  }

  return (
    <BrowserRouter>
      <Routes>{renderRoute()}</Routes>
    </BrowserRouter>
  )
}

export default RouterCom
