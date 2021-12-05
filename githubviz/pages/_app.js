import "../styles/globals.css";
import App from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //  exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;

// // import App from 'next/app'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// // Only uncomment this method if you have blocking data requirements for
// // every single page in your application. This disables the ability to
// // perform automatic static optimization, causing every page in your app to
// // be server-side rendered.
// //
// // MyApp.getInitialProps = async (appContext) => {
// //   // calls page's `getInitialProps` and fills `appProps.pageProps`
// //   const appProps = await App.getInitialProps(appContext);
// //
// //   return { ...appProps }
// // }

// export default MyApp