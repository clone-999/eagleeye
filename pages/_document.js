import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/line-awesome.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/animate.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/animated-headline.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/jquery-ui.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/flag-icon.min.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
            <link rel="stylesheet" href="/style.css" type="text/css" />
            <link rel="stylesheet" href="/assets/css/mobile.css" type="text/css" />

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Tajawal:300,400,500,700,800&amp;subset=arabic" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}