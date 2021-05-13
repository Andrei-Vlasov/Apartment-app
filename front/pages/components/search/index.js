import Map from '../../wrap-map';
import Layout from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Search() {
    let items = [
        {
            id: 1,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/new-house-build-img.jpeg' },
            ],
            price: '177 000',
            pricePerSquare: '177',
            address: 'ул. Пушкинская 188',
            mainSquare: '30',
            liveSquare: '27',
            rooms: '2',
            floor: '5',
            floorMax: '25',
            repairs: 'евроремонт',
            heating: 'автономное',
            year: '1995',
            wall: 'кирпичные',
            link: '/post/33',
            share: '/',
        },
        {
            id: 2,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/new-house-build-img.jpeg' },
            ],
            price: '177 000',
            pricePerSquare: '177',
            address: 'ул. Пушкинская 188',
            mainSquare: '30',
            liveSquare: '27',
            rooms: '2',
            floor: '5',
            floorMax: '25',
            repairs: 'евроремонт',
            heating: 'автономное',
            year: '1995',
            wall: 'кирпичные',
            link: '/',
            share: '/',
        },
        {
            id: 3,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/new-house-build-img.jpeg' },
            ],
            price: '177 000',
            pricePerSquare: '177',
            address: 'ул. Пушкинская 188',
            mainSquare: '30',
            liveSquare: '27',
            rooms: '2',
            floor: '5',
            floorMax: '25',
            repairs: 'евроремонт',
            heating: 'автономное',
            year: '1995',
            wall: 'кирпичные',
            link: '/',
            share: '/',
        },
        {
            id: 4,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/new-house-build-img.jpeg' },
            ],
            price: '177 000',
            pricePerSquare: '177',
            address: 'ул. Пушкинская 188',
            mainSquare: '30',
            liveSquare: '27',
            rooms: '2',
            floor: '5',
            floorMax: '25',
            repairs: 'евроремонт',
            heating: 'автономное',
            year: '1995',
            wall: 'кирпичные',
            link: '/',
            share: '/',
        },
        {
            id: 5,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/new-house-build-img.jpeg' },
            ],
            price: '177 000',
            pricePerSquare: '177',
            address: 'ул. Пушкинская 188',
            mainSquare: '30',
            liveSquare: '27',
            rooms: '2',
            floor: '5',
            floorMax: '25',
            repairs: 'евроремонт',
            heating: 'автономное',
            year: '1995',
            wall: 'кирпичные',
            link: '/',
            share: '/',
        },
    ];

    let selectList1 = [
        {
            id: 1,
            disabled: 'Год постройки',
            option: [
                { id: 1, title: '1950-1959' },
                { id: 2, title: '1960-1969' },
                { id: 3, title: '1970-1979' },
                { id: 4, title: '1980-1989' },
                { id: 5, title: '1990-1999' },
                { id: 6, title: '2000-2009' },
                { id: 7, title: '2010-2019' },
                { id: 8, title: '2020-2021' },
            ],
        },
        {
            id: 1,
            disabled: 'Тип дома',
            option: [
                { id: 1, title: 'АППС' },
                { id: 2, title: 'АППС-люкс' },
                { id: 3, title: 'БСП' },
                { id: 4, title: 'чешский проект' },
                { id: 5, title: 'гостинка' },
                { id: 6, title: 'хрущевка' },
                { id: 7, title: 'дореволюционный' },
                { id: 8, title: 'сталинка' },
            ],
        },
        {
            id: 1,
            disabled: 'Высота потолка',
            option: [
                { id: 1, title: 'от 2.5 м' },
                { id: 2, title: 'от 2.8 м' },
                { id: 3, title: 'от 3 м' },
                { id: 4, title: 'от 3.2 м' },
                { id: 5, title: 'от 3.5 м' },
            ],
        },
        {
            id: 1,
            disabled: 'Стени',
            option: [
                { id: 1, title: 'блочные' },
                { id: 2, title: 'панельные' },
                { id: 3, title: 'Кирпичные' },
                { id: 4, title: 'утепленная панель' },
                { id: 5, title: 'монолитно-каркасные' },
            ],
        },
        {
            id: 1,
            disabled: 'Этажность дома',
            option: [
                { id: 1, title: 'до 5 этажей' },
                { id: 2, title: 'от 6 этажей' },
                { id: 3, title: 'от 10 этажей' },
                { id: 4, title: 'от 17 этажей' },
                { id: 5, title: 'от 25 этажей' },
            ],
        },
        {
            id: 1,
            disabled: 'Отопление',
            option: [
                { id: 1, title: 'автономное' },
                { id: 2, title: 'индивидуальное' },
                { id: 3, title: 'централизованное' },
                { id: 4, title: '1980-1989' },
                { id: 5, title: '1990-1999' },
                { id: 6, title: '2000-2009' },
                { id: 7, title: '2010-2019' },
                { id: 8, title: '2020-2021' },
            ],
        },
    ];

    let selectList2 = [
        {
            id: 1,
            disabled: 'Общая площадь',
            option: [
                { id: 1, title: 'до 25 кв' },
                { id: 2, title: 'от 26 до 35 кв' },
                { id: 3, title: 'от 36 до 45 кв' },
                { id: 4, title: 'от 46 до 55 кв' },
                { id: 5, title: 'от 56 до 65 кв' },
                { id: 6, title: 'от 66 до 75 кв' },
                { id: 7, title: 'от 76 до 85 к' },
                { id: 8, title: 'от 86 до 95 кв' },
                { id: 9, title: 'от 96 до 105 кв' },
                { id: 10, title: 'от 106 до 115 кв' },
                { id: 11, title: 'от 116 до 125 кв' },
                { id: 12, title: 'от 126 кв' },
            ],
        },
        {
            id: 1,
            disabled: 'Жилая площадь',
            option: [
                { id: 1, title: 'до 20 кв' },
                { id: 2, title: 'от 20 до 29 кв' },
                { id: 3, title: 'от 30 до 39 кв' },
                { id: 4, title: 'от 40 до 49 кв' },
                { id: 5, title: 'от 50 до 59 кв' },
                { id: 6, title: 'от 60 до 69 кв' },
                { id: 7, title: 'от 70 до 79 кв' },
                { id: 8, title: 'от 80 до 89 кв' },
                { id: 9, title: 'от 90 до 99 кв' },
                { id: 10, title: 'от 100 до 109 кв' },
                { id: 11, title: 'от 110 до 119 кв' },
                { id: 12, title: 'от 120 кв' },
            ],
        },
        {
            id: 1,
            disabled: 'Этаж',
            option: [
                { id: 1, title: 'до 5 этажа' },
                { id: 2, title: 'от 6 этажа' },
                { id: 3, title: 'от 10 этажа' },
                { id: 4, title: 'от 17 этажа' },
                { id: 5, title: 'от 25 этажа' },
            ],
        },
        {
            id: 1,
            disabled: 'Ремонт',
            option: [
                { id: 1, title: 'без ремонта' },
                { id: 2, title: '"бабушкин ремонт"' },
                { id: 3, title: 'евроремонт' },
                { id: 4, title: 'дизайнерский ремонт' },
            ],
        },
        {
            id: 1,
            disabled: 'Цена за кв',
            option: [
                { id: 1, title: 'до 500 $' },
                { id: 2, title: 'от 501 до 750 $' },
                { id: 3, title: 'от 751 до 1000 $' },
                { id: 4, title: 'от 1001 до 1250 $' },
                { id: 5, title: 'от 1251 до 1500 $' },
                { id: 6, title: 'от 1501 до 1750 $' },
                { id: 7, title: 'от 1751 до 2000 $' },
                { id: 8, title: 'от 2001 до 2250 $' },
                { id: 9, title: 'от 2251 $' },
            ],
        },
    ];

    return (
        <>
            <section className="search-map-wrap">
                <div className="search">
                    <Layout title='Search Page'>
                        <form className="search__sort">
                            <input
                                type="text"
                                placeholder="Город, улица, станция метро"
                                className="sort__search"
                            />
                            <select className="sort__rooms sort__select">
                                <option value disabled selected>
                                    Комнат
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                            <input
                                type="text"
                                className="sort__price sort__price-first sort__select"
                                placeholder="Цена: от"
                            />
                            <input
                                type="text"
                                className="sort__price sort__select"
                                placeholder="Цена: до"
                            />
                            <button className="sort__btn">Еще фильтры</button>
                            <ul className="search__list">
                                {selectList1.map(({ id, disabled, option }) => (
                                    <li className="search__item" key={id}>
                                        <select>
                                            <option value disabled selected>
                                                {disabled}
                                            </option>
                                            {option.map(({ id, item }) => (
                                                <option key={id}>{item}</option>
                                            ))}
                                        </select>
                                    </li>
                                ))}
                            </ul>
                            <ul className="search__list">
                                {selectList2.map(({ id, disabled, option }) => (
                                    <li className="search__item" key={id}>
                                        <select>
                                            <option value disabled selected>
                                                {disabled}
                                            </option>
                                            {option.map(({ id, item }) => (
                                                <option key={id}>{item}</option>
                                            ))}
                                        </select>
                                    </li>
                                ))}
                            </ul>
                            <select className="sort__params">
                                <option>Самые дешёвые</option>
                                <option>Самые дорогие</option>
                                <option>Самые новые</option>
                                <option>Наибольшая стоймость кв</option>
                                <option>Наименьшая стоймость кв</option>
                                <option>Наибольшая площадь</option>
                                <option>Наименьшая площадь</option>
                            </select>
                        </form>
                        <ul className="search__list-article">
                            {items.map(
                                ({
                                    id,
                                    images,
                                    price,
                                    pricePerSquare,
                                    address,
                                    mainSquare,
                                    liveSquare,
                                    rooms,
                                    floor,
                                    floorMax,
                                    repairs,
                                    heating,
                                    year,
                                    wall,
                                    link,
                                    share,
                                }) => (
                                    <li className="search__item-article" key={id}>
                                        <div className="search__item-slider">
                                            {images.map(({ id, src }) => (
                                                <Image layout="fill" src={src} key={id}></Image>
                                            ))}
                                        </div>
                                        <div className="search__item-info">
                                            <span className="article__price">
                                                <span>{price}</span> <span>$</span>
                                            </span>
                                            <span className="article__price-per-square">
                                                <span>{pricePerSquare}</span> <span>$ за кв.</span>
                                            </span>
                                            <span className="article__address">{address}</span>
                                            <span className="article__square">
                                                <span>{mainSquare}</span>
                                                <span>{liveSquare}</span>
                                            </span>
                                            <div className="article__wrap-details">
                                                <span className="article__rooms">
                                                    <span>{rooms}</span>
                                                    <span>комнаты</span>
                                                </span>
                                                <span className="article__floor">
                                                    <span>{floor}</span> из <span>{floorMax}</span>{' '}
                                                    этажей
                                                </span>
                                                <span className="article__repairs">{repairs}</span>
                                                <span className="article__heating">{heating}</span>
                                                <span className="article__year">
                                                    <span>{year}</span> <span>год</span>
                                                </span>
                                                <span className="article__wall">{wall}</span>
                                            </div>
                                            <div className="article__wrap-btns">
                                                <Link href={link}>
                                                    <a className="article__link">Подробней</a>
                                                </Link>
                                                <Link href={share}>
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
                                )
                            )}
                        </ul>
                        <ul className="search__list-pages">
                            <li className="search__item-pages">1</li>
                            <li className="search__item-pages search__item-pages--active">2</li>
                            <li className="search__item-pages">3</li>
                            <li className="search__item-pages">4</li>
                            <li className="search__item-pages">5</li>
                        </ul>
                    </Layout>
                </div>
                <div id="mapid">
                    <Map />
                </div>
            </section>
        </>
    );
}
