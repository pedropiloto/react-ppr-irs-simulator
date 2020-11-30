import { Fragment } from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

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
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q8KK0WB0PN" />

              <script>
                dangerouslySetInnerHTML=
                {{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Q8KK0WB0PN', {
                      page_path: window.location.pathname,
                    });                  
                  `,
                }}
              </script>
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
}

export default MyDocument;
