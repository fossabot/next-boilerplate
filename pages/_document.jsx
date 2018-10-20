import Document from 'next/document';
import { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render = () => (
    <html>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}

export default CustomDocument;