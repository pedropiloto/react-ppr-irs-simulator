import { Fragment } from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  static async getInitialPropsp(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="pt">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap" rel="stylesheet" />
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  renderp() {
    const { isProduction } = this.props;

    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />

          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
