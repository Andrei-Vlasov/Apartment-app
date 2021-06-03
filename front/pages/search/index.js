import Map from '../map';
import React, { useState } from 'react';
import Layout from '../layout';
import SearchItem from '../../components/search-item/index';
import Form from './form/index';
import Context from './context';

const Search = () => {
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const value = {
        setLat,
        setLng,
        lat,
        lng,
        items: [
            {
                id: 1,
                images: [
                    { id: 1, src: '/img/new-house-build-img.jpeg' },
                    { id: 2, src: '/img/house-buy.jpg' },
                ],
                price: '177 000',
                lat: 50.4378811,
                lng: 30.6050259,
                pricePerSquare: '177',
                address: 'Илья',
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
                lng: 30.4419382,
                pricePerSquare: '177',
                address: 'Женя',
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
                lng: 30.4598583,
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
        ],
    };

    return (
        <Context.Provider value={value}>
            <section className="search-map-wrap">
                <div className="search">
                    <Layout title="Search Page">
                        <Form />
                        <ul className="search__list-article">
                            {value.items.map((items) => (
                                <SearchItem
                                    key={items.id}
                                    itemId={items.id}
                                    images={items.images}
                                    price={items.price}
                                    lat={items.lat}
                                    lng={items.lng}
                                    pricePerSquare={items.pricePerSquare}
                                    address={items.address}
                                    mainSquare={items.mainSquare}
                                    liveSquare={items.liveSquare}
                                    rooms={items.rooms}
                                    floor={items.floor}
                                    floorMax={items.floorMax}
                                    repairs={items.repairs}
                                    heating={items.heating}
                                    year={items.year}
                                    wall={items.wall}
                                    link={items.link}
                                    share={items.share}
                                />
                            ))}
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
                <Map zoom={11} latP={50.5} lngP={30.5} page="search" className="search__map" />
            </section>
        </Context.Provider>
    );
};

export default Search;
