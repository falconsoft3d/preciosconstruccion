import '../styles/globals.css'
import Script from 'next/script'
import $ from 'jquery';

export default function App({ Component, pageProps }) {
  return (
     <>
         <Script src="vendor/jquery/jquery.min.js" />
        {/* <Script src="vendor/jquery-easing/jquery.easing.min.js" /> */}
        <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="js/sb-admin-2.min.js" />
        {/* <Script src="js/demo.js" /> */}

        <Component {...pageProps} />
        </>
     )
}
