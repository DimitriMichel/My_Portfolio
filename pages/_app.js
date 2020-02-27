import React from "react";
import "../sass/styles.sass";

// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS & CSS Styling
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
