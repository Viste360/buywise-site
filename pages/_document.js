// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Apple touch icon */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          {/* Google Font preload */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Theme color for mobile browser */}
          <meta name="theme-color" content="#0f9d58" />

          {/* (Optional) Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GA_ID');
              `,
            }}
          />
        </Head>
        <body className="font-inter scroll-smooth">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
