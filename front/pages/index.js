import MainTopBlock from './components/main-top-block/main-top-block';
import MainViewSelect from './components/main-view-select/main-view-select';
import MainAbout from './components/main-about/main-about';
import Cooperation from './components/cooperation/cooperation';
import Info from './components/main-info/main-info';
import Layout from './components/layout';

export default function Index() {
    return (
        <Layout title="Appartment">
            <MainTopBlock></MainTopBlock>
            <MainViewSelect></MainViewSelect>
            <MainAbout></MainAbout>
            <Cooperation></Cooperation>
            <Info></Info>
        </Layout>
    );
}
