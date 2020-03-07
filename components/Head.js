import React, { Fragment } from "react";
import Head from "next/head";

function IndexPage() {
    return (
        <Fragment>
            <Head>
                <title>Dimitri Michel</title>
                <link rel="shortcut icon" type="image/x-icon" href="../public/static/favicon.ico" />

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </Fragment>
    );
}

export default IndexPage;
