import Head from 'next/head'
import HeaderLayout from '../header/header'
import Footer from '../footer/footer'
import Layout from '../layout'
import Link from 'next/link'

export default function Register() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <HeaderLayout></HeaderLayout>
            <div className="create-ad">
                <h1 className="create-ad__title">Создание обьявления</h1>
                <form className="create-ad__form">
                    <input type="text" placeholder="Заголовок" className="create-ad__input"/>
                    <input type="text" placeholder="Комнаты" className="create-ad__input"/>
                    <input type="text" placeholder="Цена" className="create-ad__input"/>
                    <input type="text" placeholder="Год постройки" className="create-ad__input"/>
                    <input type="text" placeholder="Цена за кв." className="create-ad__input"/>
                    <input type="text" placeholder="Высота потолка" className="create-ad__input"/>
                    <input type="text" placeholder="Этажность дома" className="create-ad__input"/>
                    <input type="text" placeholder="Общая площадь" className="create-ad__input"/>
                    <input type="text" placeholder="Жилая площадь" className="create-ad__input"/>
                    <input type="text" placeholder="Этаж" className="create-ad__input"/>
                    <ul className="create-ad__list">
                        <li className="create-ad__item">
                            <select>
                                <option value disabled selected>Год постройки</option>
                                <option>АППС</option>
                                <option>АППС-люкс</option>
                                <option>БСП</option>
                                <option>чешский проект</option>
                                <option>гостинка</option>
                                <option>хрущевка</option>
                                <option>дореволюционный</option>
                                <option>сталинка</option>
                            </select>
                        </li>
                        <li className="create-ad__item">
                            <select>
                                <option value disabled selected>Стени</option>
                                <option>блочные</option>
                                <option>панельные</option>
                                <option>Кирпичные</option>
                                <option>утепленная панель</option>
                                <option>монолитно-каркасные</option>
                            </select>
                        </li>
                        <li className="create-ad__item">
                            <select>
                                <option value disabled selected>Отопление</option>
                                <option>автономное</option>
                                <option>индивидуальное</option>
                                <option>централизованное</option>
                            </select>
                        </li>
                        <li className="create-ad__item">
                            <select>
                                <option value disabled selected>Ремонт</option>
                                <option>без ремонта</option>
                                <option>"бабушкин ремонт"</option>
                                <option>евроремонт</option>
                                <option>дизайнерский ремонт</option>
                            </select>
                        </li>
                    </ul>
                    <button className="create-ad__btn">Создать чертеж</button>
                    <textarea type="text" placeholder="Описание" className="create-ad__textarea"/>
                    <button className="create-ad__btn">Создать</button>
                </form>
            </div>
            <Footer></Footer>
        </Layout>
    );
}