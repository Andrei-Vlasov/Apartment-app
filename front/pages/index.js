import Head from 'next/head'
import HeaderLayout from './components/header/header'
import MainTopBlock from './components/main-top-block/main-top-block'
import MainViewSelect from './components/main-view-select/main-view-select'
import MainAbout from './components/main-about/main-about'
import Cooperation from './components/cooperation/cooperation'
import Info from './components/main-info/main-info'
import Footer from './components/footer/footer'
import Layout from './components/layout'

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <HeaderLayout></HeaderLayout>
            <MainTopBlock></MainTopBlock>
            <MainViewSelect></MainViewSelect>
            <MainAbout></MainAbout>
            <Cooperation></Cooperation>
            <Info></Info>
            <Footer></Footer>
        </Layout>
    );
}
