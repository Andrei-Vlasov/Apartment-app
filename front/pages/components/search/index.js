import Map from '../../wrap-map';
import React from 'react';
import Slider from 'react-slick';
import Layout from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Search() {
    let items = [
        {
            id: 1,
            images: [
                { id: 1, src: '/img/new-house-build-img.jpeg' },
                { id: 2, src: '/img/house-buy.jpg' },
            ],
            price: '177 000',
            lat: 50.4378811,
            long: 30.6050259,
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
            lat: 50.4740758,
            long: 30.4419382,
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
            lat: 50.4510538,
            long: 30.4598583,
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
            disabled: 'Стены',
            option: [
                { id: 1, title: 'Блочные' },
                { id: 2, title: 'Панельные' },
                { id: 3, title: 'Кирпичные' },
                { id: 4, title: 'Утепленная панель' },
                { id: 5, title: 'Монолитно-каркасные' },
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
                { id: 1, title: 'Автономное' },
                { id: 2, title: 'Индивидуальное' },
                { id: 3, title: 'Централизованное' },
            ],
        },
        {
            id: 1,
            disabled: 'Общая площадь',
            option: [
                { id: 1, title: 'до 25 кв.м' },
                { id: 2, title: 'от 26 до 35 кв.м' },
                { id: 3, title: 'от 36 до 45 кв.м' },
                { id: 4, title: 'от 46 до 55 кв.м' },
                { id: 5, title: 'от 56 до 65 кв.м' },
                { id: 6, title: 'от 66 до 75 кв.м' },
                { id: 7, title: 'от 76 до 85 кв.м' },
                { id: 8, title: 'от 86 до 95 кв.м' },
                { id: 9, title: 'от 96 до 105 кв.м' },
                { id: 10, title: 'от 106 до 115 кв.м' },
                { id: 11, title: 'от 116 до 125 кв.м' },
                { id: 12, title: 'от 126 кв.м' },
            ],
        },
        {
            id: 1,
            disabled: 'Жилая площадь',
            option: [
                { id: 1, title: 'до 20 кв.м' },
                { id: 2, title: 'от 20 до 29 кв.м' },
                { id: 3, title: 'от 30 до 39 кв.м' },
                { id: 4, title: 'от 40 до 49 кв.м' },
                { id: 5, title: 'от 50 до 59 кв.м' },
                { id: 6, title: 'от 60 до 69 кв.м' },
                { id: 7, title: 'от 70 до 79 кв.м' },
                { id: 8, title: 'от 80 до 89 кв.м' },
                { id: 9, title: 'от 90 до 99 кв.м' },
                { id: 10, title: 'от 100 до 109 кв.м' },
                { id: 11, title: 'от 110 до 119 кв.м' },
                { id: 12, title: 'от 120 кв.м' },
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
                { id: 1, title: 'Без ремонта' },
                { id: 2, title: '"Бабушкин ремонт"' },
                { id: 3, title: 'Евроремонт' },
                { id: 4, title: 'Дизайнерский ремонт' },
            ],
        },
        {
            id: 1,
            disabled: 'Цена за кв.м',
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

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="search-map-wrap">
                <div className="search">
                    <Layout title="Search Page">
                        <form className="search__sort">
                            <input
                                type="text"
                                placeholder="Город, улица, станция метро"
                                className="sort__search"
                            />
                            <select className="sort__rooms sort__select">
                                <option value disabled selected>
                                    Число комнат
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
                            <input
                                id="sort__btn"
                                className="sort__btn-checkbox"
                                type="checkbox"
                            ></input>
                            <label htmlFor="sort__btn" className="sort__btn">
                                Еще фильтры
                            </label>
                            <div className="search__lists--show">
                                <ul className="search__list">
                                    {selectList1.map(({ id, disabled, option }) => (
                                        <li className="search__item" key={id}>
                                            <select>
                                                <option value disabled selected>
                                                    {disabled}
                                                </option>
                                                {option.map(({ id, title }) => (
                                                    <option key={id}>{title}</option>
                                                ))}
                                            </select>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <select className="sort__params">
                                <option>Самые дешёвые</option>
                                <option>Самые дорогие</option>
                                <option>Самые новые</option>
                                <option>Наибольшая стоимость кв.м</option>
                                <option>Наименьшая стоимость кв.м</option>
                                <option>Наибольшая площадь</option>
                                <option>Наименьшая площадь</option>
                            </select>
                            <button className="sort__search-btn">Искать</button>
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
                                    <li className="search__item-article" value={id} key={id}>
                                        <Slider {...settings}>
                                            {images.map(({ id, src }) => (
                                                <div className="search__item-slider" key={id}>
                                                    <Image layout="fill" src={src}></Image>
                                                </div>
                                            ))}
                                        </Slider>
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
                <div id="map">
                    <Map MarkerItem={items} zoom={8} center={[30.5, 50.5]} page={'search'} />
                </div>
            </section>
        </>
    );
}
