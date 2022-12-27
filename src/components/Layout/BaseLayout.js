import Head from 'next/head';
import MyFooter from '../Fotter/MyFooter';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

function BaseLayout({children}) {
  return (
    <>
      <Head>
        <title>PreConst | Precios construcción</title>
        <meta name="description" content="Precios construcción" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div id="page-top">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <MyFooter/>
                </div>
            </div>
        
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
        </div>
    </>
  )
}

export default BaseLayout