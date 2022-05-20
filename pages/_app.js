import React from 'react';
import { SessionProvider } from "next-auth/react";

import '../styles/globals.css'


const MyApp = ({ session, Component, pageProps }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
