import HeaderLayout from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Map from '../../wrap-map';
import Layout from '../layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Search() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <section className="search-map-wrap">
                <div className="search">
                    <HeaderLayout></HeaderLayout>
                    <ul className="search__list-article">
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout="fill" src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square">
                                    <span>30 кв</span>
                                    <span>27 кв</span>
                                </span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor">
                                        <span>11</span> из <span>21</span> этажей
                                    </span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/">
                                        <a className="article__link">Подробней</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="article__share">
                                            <i classNameName="fas fa-share"></i>
                                        </a>
                                    </Link>
                                    <span className="article__like">
                                        <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout="fill" src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square">
                                    <span>30 кв</span>
                                    <span>27 кв</span>
                                </span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor">
                                        <span>11</span> из <span>21</span> этажей
                                    </span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/">
                                        <a className="article__link">Подробней</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="article__share">
                                            <i className="fas fa-share"></i>
                                        </a>
                                    </Link>
                                    <span className="article__like">
                                        <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout="fill" src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square">
                                    <span>30 кв</span>
                                    <span>27 кв</span>
                                </span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor">
                                        <span>11</span> из <span>21</span> этажей
                                    </span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/">
                                        <a className="article__link">Подробней</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="article__share">
                                            <i className="fas fa-share"></i>
                                        </a>
                                    </Link>
                                    <span className="article__like">
                                        <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout="fill" src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square">
                                    <span>30 кв</span>
                                    <span>27 кв</span>
                                </span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor">
                                        <span>11</span> из <span>21</span> этажей
                                    </span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/">
                                        <a className="article__link">Подробней</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="article__share">
                                            className <i className="fas fa-share"></i>
                                        </a>
                                    </Link>
                                    <span className="article__like">
                                        className <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout="fill" src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square">
                                    <span>30 кв</span>
                                    <span>27 кв</span>
                                </span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor">
                                        <span>11</span> из <span>21</span> этажей
                                    </span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/">
                                        <a className="article__link">Подробней</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="article__share">
                                            <i className="fas fa-share"></i>
                                        </a>
                                    </Link>
                                    <span className="article__like">
                                        <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="search__list-pages">
                        <li className="search__item-pages">1</li>
                        <li className="search__item-pages search__item-pages--active">2</li>
                        <li className="search__item-pages">3</li>
                        <li className="search__item-pages">4</li>
                        <li className="search__item-pages">5</li>
                    </ul>
                    <Footer></Footer>
                </div>
                <Map />
            </section>
        </Layout>
    );
}
