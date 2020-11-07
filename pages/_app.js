import '../styles/main.css';
// import normalize.css
import 'normalize.css';

import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';

// import your default seo configuration
import SEO from '../next-seo.config.js';

export default class OverwriteApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    /* The different references to the favicons. */
    const favicon = {
      icon: 'https://stefankuehnel.com/favicon.ico',
      touch: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/touch-icon.png',
      x16: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/favicon-16x16.png',
      x32: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/favicon-32x32.png'
    };

    /* The reference to the mask vector graphic including the color to be used. */
    const mask = {
      icon: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/mask-icon.svg',
      color: '#1e2530'
    };

    /* The reference to the Web App Manifesto. */
    const manifest = 'https://assets-cdn.stefankuehnel.com/manifest/modules/site/site.webmanifest';
    
    /* The search engine site verification tokens. */
    const siteVerification = {
      google: 'H47K0swK5bh6SXK9qxMwjYFD6zOgpGYq1rhaTQEOQ3s',
    }

    return (
      <>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={favicon.icon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon.x32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon.x16} />
          <link rel="apple-touch-icon" sizes="180x180" href={favicon.touch} />
          <link rel="manifest" href={manifest} />
          <link rel="mask-icon" href={mask.icon} color={mask.color} />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="google-site-verification" content={siteVerification.google}" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
