import React from 'react';
import Router from 'next/router';
import '../styles/globals.css';
import * as gtag from 'common/src/lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /></>;
}

export default MyApp;
