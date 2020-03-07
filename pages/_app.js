import React from "react";
import "../sass/main.sass";
import Head from "next/head";
// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dimitri Michel</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
