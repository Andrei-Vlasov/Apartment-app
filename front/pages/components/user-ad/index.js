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
