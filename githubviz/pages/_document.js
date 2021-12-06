import Document from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: (App) => (props) => App,
          // useful for wrapping in a per-page basis
          //   enhanceComponent: (Component) => Component,
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);
      //   return { ...initialProps };
      return initialProps;
    } catch (error) {
      console.log(error);
    }
  }
}

export default MyDocument;

// Taken from https://nextjs.org/docs/advanced-features/custom-document
