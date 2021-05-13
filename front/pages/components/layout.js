import Head from 'next/head'
import Footer from './footer/footer'
import HeaderLayout from './header/header'

export default function Layout({ children, title = 'Appartment' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="maincontent">
                <HeaderLayout></HeaderLayout>
                {children}
                <Footer></Footer>
            </div>
        </>
    );
}
