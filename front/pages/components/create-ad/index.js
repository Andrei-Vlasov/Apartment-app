import Head from 'next/head';
import HeaderLayout from '../header/header';
import Footer from '../footer/footer';
import Layout from '../layout';

export default function Register() {
    let inputData = [
        { placeholder: 'Заголовок' },
        { placeholder: 'Комнаты' },
        { placeholder: 'Цена' },
        { placeholder: 'Год постройки' },
        { placeholder: 'Цена за кв.' },
        { placeholder: 'Высота потолка' },
        { placeholder: 'Этажность дома' },
        { placeholder: 'Общая площадь' },
        { placeholder: 'Жилая площадь' },
        { placeholder: 'Этаж' },
    ];

    let selectData = [
        {
            disabled: 'Год постройки',
            options: [
                'АППС',
                'АППС-люкс',
                'БСП',
                'чешский проект',
                'гостинка',
                'хрущевка',
                'дореволюционный',
                'сталинка',
            ],
        },
        {
            disabled: 'Стени',
            options: [
                'блочные',
                'панельные',
                'Кирпичные',
                'утепленная панель',
                'монолитно-каркасные',
            ],
        },
        { disabled: 'Отопление', options: ['автономное', 'индивидуальное', 'централизованное'] },
        {
            disabled: 'Ремонт',
            options: [
                'без ремонта',
                '&quot;бабушкин ремонт&quot;',
                'евроремонт',
                'дизайнерский ремонт',
            ],
        },
    ];

    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <HeaderLayout></HeaderLayout>
            <div className="create-ad">
                <h1 className="create-ad__title">Создание обьявления</h1>
                <form className="create-ad__form">
                    {inputData.map(({ placeholder }) => (
                        <input type="text" placeholder={placeholder} className="create-ad__input" />
                    ))}
                    <ul className="create-ad__list">
                        {selectData.map(({ disabled, options }) => (
                            <li className="create-ad__item">
                                <select>
                                    <option value disabled selected>
                                        {disabled}
                                    </option>
                                    {options.map((item) => (
                                        <option>{item}</option>
                                    ))}
                                </select>
                            </li>
                        ))}
                    </ul>
                    <button className="create-ad__btn">Создать чертеж</button>
                    <textarea type="text" placeholder="Описание" className="create-ad__textarea" />
                    <button className="create-ad__btn">Создать</button>
                </form>
            </div>
            <Footer></Footer>
        </Layout>
    );
}
