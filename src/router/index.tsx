import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import routes from './routes.config';
import type {Route as RouteProps} from './routes.config';

export default function Router() {

  const renderRoute = (route: RouteProps []) => {
    return route.map((item, index) => {
      const {children} = item;
      if (children) {
        return renderRoute(children);
      }
      return <Route key={index} path={item.path} component={item.component}/>;
    });
  }

  return (
    <BrowserRouter>
      <div className="menu">
        {
          routes.map((item, index) => {
            return <div className="category">
              <div className="category-name">{item.name}</div>
              <div className="list">
                {
                  item.children?.map((child, index) => {
                    return <Link to={child.path}>
                      {child.name}
                    </Link>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
      <Switch>
        {
          renderRoute(routes)
        }
      </Switch>
    </BrowserRouter>
  )
}