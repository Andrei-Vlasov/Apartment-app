import Head from 'next/head';
import Footer from '../footer/footer';
import HeaderLayout from '../header/header';
import Layout from '../layout';

export default function Instruction() {
    let itemMainBlock = [
        { id: 1, paragraph: 'Зарегистрируйтесь' },
        { id: 2, paragraph: 'Убедитесь, что оно соответствует нашим правилам публикации' },
        { id: 3, paragraph: 'Радуйтесь увеличению количества просмотров объявления и звонков!' },
    ];

    let itemSubBlock = [
        { id: 1, paragraph: 'актуальная цена' },
        { id: 2, paragraph: 'точный адрес (включая номер дома)' },
        { id: 3, paragraph: 'детальное описани' },
        { id: 4, paragraph: 'не менее 5 фотографий интерьера' },
        { id: 5, paragraph: 'размеры не менее чем 500х500 px' },
    ];

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
                            {itemMainBlock.map(({ paragraph, id }) => (
                                <li className="main-instuction__item" key={id}>
                                    <span className="main-instuction__icon">{id}</span>
                                    <p>{paragraph}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="instuction-advice">
                <div className="container">
                    <div className="instuction-advice__wrap">
                        <h1 className="instuction-advice__title">Идеальное объявление это:</h1>
                        <ul className="instuction-advice__list">
                            {itemSubBlock.map(({ id, paragraph }) => (
                                <li className="instuction-advice__item" key={id}>
                                    <span className="instuction-advice__icon">
                                        <i className="fas fa-check-square"></i>
                                    </span>
                                    <p>{paragraph}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Layout>
    );
}
