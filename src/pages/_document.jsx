import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Default meta */}
          <meta name="author" content="Cold Forest" />
          <meta name="theme-color" content="#3db0f7" />
          <meta
            name="keywords"
            content="cold forest, discord, server, cold game, waifus"
          />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="*"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Bungee&family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&family=Turret+Road:wght@400;500;700&family=Montserrat:wght@300&family=Yantramanav:wght@500&family=Pontano+Sans:wght@400&family=Acme&family=Pacifico&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
