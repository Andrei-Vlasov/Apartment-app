import React, { useContext } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import Context from '../../pages/search/context';

export default function SearchItem({
    itemId,
    images,
    price,
    lat,
    lng,
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
}) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const value = useContext(Context);

    return (
        <>
            <li
                className="search__item-article"
                key={itemId}
                onMouseEnter={() => {
                    value.setLat(lat);
                    value.setLng(lng);
                }}
                onMouseLeave={() => {
                    value.setLat();
                }}
            >
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
                            <span>{floor}</span> из <span>{floorMax}</span> этажей
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
        </>
    );
}
