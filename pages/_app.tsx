// pages/_app.tsx
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '../styles/globals.css';

const InventoryApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log("App Mounted");
    // Any side-effects can be handled here.

    return () => {
      // Cleanup if needed when the app is unmounted or rerendered.
      console.log("App Unmounted");
    };
  }, []);

  return <Component {...pageProps} />;
};

export default InventoryApp;
