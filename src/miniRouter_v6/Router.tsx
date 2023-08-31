import React from 'react';
import { NavigateContext} from "./Context";

const Router = (props:React.PropsWithChildren<{}>) => {
	const { children } = props
	return <NavigateContext.Provider value={""}>


	</NavigateContext.Provider>
};

export default Router;
