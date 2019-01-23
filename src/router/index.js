import React from "react";
import asyncLoader from "../util/asyncLoader";
import {Route, Switch} from "react-router-dom";

const routes = [
    {
		path: '/',
        name: 'home',
        exact: true,
		component: asyncLoader(() => import(/* webpackChunkName: "home" */'../containers/Home')),
	},
	{
		path: '/home',
		name: 'home',
		component: asyncLoader(() => import(/* webpackChunkName: "home" */'../containers/Home')),
	},
	{
		path: '/game/:seoname',
		name: 'game',
		component: asyncLoader(() => import(/* webpackChunkName: "game" */'../containers/Game')),
	},
	{
		path: '/schedule',
		name: 'schedule',
		component: asyncLoader(() => import(/* webpackChunkName: "schedule" */'../containers/Schedule')),
	},
];

let pathNameList = {};
routes.forEach(item => pathNameList[item.path] = item.name);

export const pathList = pathNameList;

const RouteWithSubRoutes = route => (
		<Route path={route.path}
                exact={!!route.exact}
                render={props => (    
                    <route.component {...props} routes={route.routes}/>
                )}
		/>
);

const MainRoute = () => (
		<Switch>
			{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route}/>
            ))}
            <Route path="*" component={asyncLoader(() => import(/* webpackChunkName: "notfound" */'../containers/NotFound'))} />
		</Switch>
);

export default MainRoute