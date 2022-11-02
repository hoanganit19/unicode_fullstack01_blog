import {Routes, Route} from 'react-router-dom';

import React, { Component } from 'react'

import { routePublic } from '../../Routes/RoutePubic';

import { routeProtected } from '../../Routes/RouteProtected';

import Error404 from '../../Errors/Error404';

export class RouteCore extends Component {
  render() {
    return (
        <Routes>
            {routePublic}
            {routeProtected}
            <Route path="*" element={<Error404 />}/>
        </Routes>
    )
  }
}

export default RouteCore;
