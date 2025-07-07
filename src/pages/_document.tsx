// import Document, {
//   Html,
//   Head,
//   Main,
//   NextScript,
//   DocumentContext,
//   DocumentInitialProps
// } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// const meta = {
//   title: 'Saravanakumar Portfolio',
//   description:
//     'Saravanakumar Portfolio',
//   image:
//     'https://raw.githubusercontent.com/Saravanakumar2003/Portfolio/main/public/ogimage.png'
// }

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
// 		const sheet = new ServerStyleSheet();
// 		const originalRenderPage = ctx.renderPage;

// 		try {
// 			ctx.renderPage = () =>
// 				originalRenderPage({
// 					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
// 				});

// 			const initialProps = await Document.getInitialProps(ctx);
// 			return {
// 				...initialProps,
// 				styles: [initialProps.styles, sheet.getStyleElement()],
// 			};
// 		} finally {
// 			sheet.seal();
// 		}
// 	}

//   render() {
//     return (
//       <Html lang="en" translate="no">
//         <Head>
//           <meta charSet="utf-8" />
//           <meta name="author" content="Saravanakumar" />
//           <meta name="description" content={meta.description} />
//           <meta itemProp="name" content={meta.title} />
//           <meta itemProp="description" content={meta.description} />
//           <meta itemProp="image" content={meta.image} />
//           <meta name="keywords" content="Saravanakumar, website, programmer, front-end, personal website, developer, portfolio, sites, web, JavaScript, TypeScript, ReactJS, NextJS, software, Freelancer, portfolio developer, Saravanakumar portfolio" />
//           <meta name="copyright" content="Saravanakumar 2023" />
//           <meta name="robots" content="index, follow" />
//           <meta http-equiv="Content-Language" content="en" />
//           <meta name="google" content="notranslate" />
//           <meta http-equiv="Content-Language" content="en" />
//           <meta name="rating" content="general" />
//           <link rel="canonical" href="https://saravana.vercel.app/" />

//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
//             rel="stylesheet"
//           />

//           <meta property="og:url" content="https://saravana.vercel.app/" />
//           <meta property="og:type" content="website" />
//           <meta property="og:site_name" content="Saravanakumar" />
//           <meta property="og:title" content={meta.title} />
//           <meta property="og:description" content={meta.description} />
//           <meta property="og:image" content={meta.image} />

//           <meta name="twitter:title" content={meta.title} />
//           <meta name="twitter:description" content={meta.description} />
//           <meta name="twitter:image" content={meta.image} />

//           <link rel="icon" href="/Logo1.png" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const meta = {
  title: 'Saravanakumar Portfolio',
  description: 'Saravanakumar Portfolio',
  image:
    'https://raw.githubusercontent.com/Saravanakumar2003/Portfolio/main/public/ogimage.png',
};

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          {/* No <title> tag here - it should be set per-page with <Head> in pages */}
          <meta charSet="utf-8" />
          <meta name="author" content="Saravanakumar" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="Saravanakumar, website, programmer, front-end, personal website, developer, portfolio, sites, web, JavaScript, TypeScript, ReactJS, NextJS, software, Freelancer, portfolio developer, Saravanakumar portfolio"
          />
          <meta name="copyright" content="Saravanakumar 2023" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="google" content="notranslate" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://saravana.vercel.app/" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph */}
          <meta property="og:url" content="https://saravana.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Saravanakumar" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          {/* Twitter Meta */}
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <link rel="icon" href="/Logo1.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
