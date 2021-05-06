import Head from 'next/head';
import Footer from '../footer/footer';
import HeaderLayout from '../header/header';
import Layout from '../layout';

export default function Instruction() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <HeaderLayout></HeaderLayout>
            <section className="main-instuction">
                <div className="container">
                    <div className="main-instuction__wrap">
                        <h1 className="main-instuction__title">
                            Хотите, чтобы ваше объявление появилось на Flatfy? Вот что нужно
                            сделать:
                        </h1>
                        <ul className="main-instuction__list">
                            <li className="main-instuction__item">
                                <span className="main-instuction__icon">1</span>
                                <p>Зарегистрируйтесь</p>
                            </li>
                            <li className="main-instuction__item">
                                <span className="main-instuction__icon">2</span>
                                <p>Убедитесь, что оно соответствует нашим правилам публикации</p>
                            </li>
                            <li className="main-instuction__item">
                                <span className="main-instuction__icon">3</span>
                                <p>
                                    Радуйтесь увеличению количества просмотров объявления и звонков!
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="instuction-advice">
                <div className="container">
                    <div className="instuction-advice__wrap">
                        <h1 className="instuction-advice__title">Идеальное объявление это:</h1>
                        <ul className="instuction-advice__list">
                            <li className="instuction-advice__item">
                                <span className="instuction-advice__icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <p>актуальная цена</p>
                            </li>
                            <li className="instuction-advice__item">
                                <span className="instuction-advice__icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <p>точный адрес (включая номер дома)</p>
                            </li>
                            <li className="instuction-advice__item">
                                <span className="instuction-advice__icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <p>детальное описание</p>
                            </li>
                            <li className="instuction-advice__item">
                                <span className="instuction-advice__icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <p>не менее 5 фотографий интерьера</p>
                            </li>
                            <li className="instuction-advice__item">
                                <span className="instuction-advice__icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <p>размеры не менее чем 500х500 px</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Layout>
    );
}
