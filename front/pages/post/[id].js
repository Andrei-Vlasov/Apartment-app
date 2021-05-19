import Layout from '../components/layout';
import React from 'react';
import Slider from 'react-slick';
// import { useRouter } from 'next/router';
import Map from '../wrap-map';
import Link from 'next/link';
import Image from 'next/image';

export default function Post() {
    // const router = useRouter();

    let item = [
        {
            id: 1,
            name: 'Илья',
            phone: '+380679878736',
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
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Layout title={item[0].address}>
            <div className="container">
                <article className="post">
                    <div className="post__map-slider--wrap">
                        <Slider {...settings}>
                            {item[0].images.map(({ id, src }) => (
                                <div className="post__item-slider" key={id}>
                                    <Image
                                        layout="responsive"
                                        width="100vw"
                                        height="100"
                                        src={src}
                                    ></Image>
                                </div>
                            ))}
                        </Slider>
                        <div id="map" className="post__map">
                            <Map MarkerItem={item} center={[item[0].long, item[0].lat]} />
                        </div>
                    </div>
                    <div className="post__control">
                        <div>
                            <Link href="">
                                <a className="post__btn-back">
                                    <i className="fas fa-arrow-left"></i>
                                </a>
                            </Link>
                            <span className="post__price">{item[0].price} $</span>
                        </div>
                        <div className="post__control-btns">
                            <Link href={item[0].share}>
                                <a className="post__share">
                                    <i className="fas fa-share"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="post__info-user">
                        <span>
                            <i className="fas fa-user"></i>
                            <span>{item[0].name}</span>
                        </span>
                        <span>
                            <span>{item[0].phone}</span>
                            <i className="fas fa-phone"></i>
                        </span>
                    </div>
                    <ul className="post__info">
                        <li>
                            <span>Адрес:</span>
                            <span>{item[0].address}</span>
                        </li>
                        <li>
                            <span>Цена:</span>
                            <span>{item[0].pricePerSquare} $ за кв.</span>
                        </li>
                        <li>
                            <span>Площадь:</span>
                            <span>
                                {item[0].mainSquare} / {item[0].liveSquare}
                            </span>
                        </li>
                        <li>
                            <span>Кол-во комнат:</span>
                            <span>{item[0].rooms} комнаты</span>
                        </li>
                        <li>
                            <span>Этаж:</span>
                            <span>
                                {item[0].floor} из {item[0].floorMax} этажей
                            </span>
                        </li>
                        <li>
                            <span>Ремонт:</span>
                            <span>{item[0].repairs}</span>
                        </li>
                        <li>
                            <span>Отопление:</span>
                            <span>{item[0].heating}</span>
                        </li>
                        <li>
                            <span>Год постройки:</span>
                            <span>{item[0].year} год</span>
                        </li>
                        <li>
                            <span>Стени:</span>
                            <span>{item[0].wall}</span>
                        </li>
                    </ul>
                    <p className="post__descr">
                        ЖК «Місто Квітів»/«Город Цветов» по ул. Тираспольская, 60, 7/16 этаж.
                        Площадь: 43/18/10. После ремонта в Новом доме. Светлая и просторная
                        квартира, дизайнерский ремонт. Отдельная гардеробная комната, встроенная
                        кухня. Застекленная лоджия. С/У совмещенный, ванна. Трехкамерные окна. В
                        наличии вся необходимая мебель и бытовая техника, вкл. -Кондиционер,
                        -Бойлер, -Варочная поверхность, -Вытяжка, -Электросушилка, -Духовой шкаф,
                        -Холодильник -Стиральная машина -Мебель Счетчики на электричество, воду,
                        отопление. Паркинг на территории ЖК. Закрытая охраняемая территория,
                        видеонаблюдение на территории и консьерж в парадном. На территории ЖК есть
                        детские площадки, спортивные поля, магазины, салоны красоты и кафе. Рядом
                        поликлиника, школы, “Сырецкий Дендропарк”. Развитая инфраструктура,
                        транспортная развязка: м.”Сырец” - 15 мин пешком, до м. “Нивки” и в центр -
                        15 мин транспортом.
                    </p>
                </article>
            </div>
        </Layout>
    );
}
