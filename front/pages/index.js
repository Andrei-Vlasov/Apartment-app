import MainTopBlock from '../components/main/main-top-block/main-top-block';
import MainViewSelect from '../components/main/main-view-select/main-view-select';
import MainAbout from '../components/main/main-about/main-about';
import Cooperation from '../components/main/cooperation/cooperation';
import Info from '../components/main/main-info/main-info';
import Layout from './layout';

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
