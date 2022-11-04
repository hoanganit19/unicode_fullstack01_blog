import React, { Component } from 'react'
import Header from '../Headers/Headers';
import Footer from '../Footers/Footers';
import RouteCore from '../../Services/Routes/RouteCore';

export class Main extends Component {
  render() {
    return (
        <>
            <Header />
            <main id="main">
                <RouteCore />
            </main>
            <Footer />
        </>
    )
  }
}

export default Main