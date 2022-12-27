import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
     <>
        <Script src="/vendor/jquery/jquery.min.js" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/vendor/jquery-easing/jquery.easing.min.js" />
        <Script src="/js/sb-admin-2.min.js" />

        <Component {...pageProps} />
        </>
     )
}
