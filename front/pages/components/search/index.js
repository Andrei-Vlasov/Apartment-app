import HeaderLayout from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Layout from '../layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const styles = [
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e9e6de"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#95da59"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7ddde6"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

class MyComponent extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyA0iB7QXBsyBBIMlJStsQoL4zejVqy51VA">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} styles={styles}></GoogleMap>
      </LoadScript>
    )
  }
}

export default function Search() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
                <script src="map.js" />
                <script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
            </Head>
            <section className="search-map-wrap">
                <div className="search">
                    <HeaderLayout></HeaderLayout>
                    <form className="search__sort">
                        <input type="text" placeholder="Город, улица, станция метро" className="sort__search"/>
                        <select className="sort__rooms sort__select">
                            <option value disabled selected>Комнат</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5+</option>
                        </select>
                        <input type="text" className="sort__price sort__select" placeholder="Цена: от"/>
                        <input type="text" className="sort__price sort__select" placeholder="Цена: до"/>
                        <button className="sort__btn">Еще фильтры</button>
                        <ul className="search__list">
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Год постройки</option>
                                    <option>1950-1959</option>
                                    <option>1960-1969</option>
                                    <option>1970-1979</option>
                                    <option>1980-1989</option>
                                    <option>1990-1999</option>
                                    <option>2000-2009</option>
                                    <option>2010-2019</option>
                                    <option>2020-2021</option>
                                </select>
                            </li>
                            <li className="search__item">
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
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Высота потолка</option>
                                    <option>от 2.5 м</option>
                                    <option>от 2.8 м</option>
                                    <option>от 3 м</option>
                                    <option>от 3.2 м</option>
                                    <option>от 3.5 м</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Стени</option>
                                    <option>блочные</option>
                                    <option>панельные</option>
                                    <option>Кирпичные</option>
                                    <option>утепленная панель</option>
                                    <option>монолитно-каркасные</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Этажность дома</option>
                                    <option>до 5 этажей</option>
                                    <option>от 6 этажей</option>
                                    <option>от 10 этажей</option>
                                    <option>от 17 этажей</option>
                                    <option>от 25 этажей</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Отопление</option>
                                    <option>автономное</option>
                                    <option>индивидуальное</option>
                                    <option>централизованное</option>
                                </select>
                            </li>
                        </ul>
                        <ul className="search__list">
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Общая площадь</option>
                                    <option>до 25 кв</option>
                                    <option>от 26 до 35 кв</option>
                                    <option>от 36 до 45 кв</option>
                                    <option>от 46 до 55 кв</option>
                                    <option>от 56 до 65 кв</option>
                                    <option>от 66 до 75 кв</option>
                                    <option>от 76 до 85 кв</option>
                                    <option>от 86 до 95 кв</option>
                                    <option>от 96 до 105 кв</option>
                                    <option>от 106 до 115 кв</option>
                                    <option>от 116 до 125 кв</option>
                                    <option>от 126 кв</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Жилая площадь</option>
                                    <option>до 20 кв</option>
                                    <option>от 20 до 29 кв</option>
                                    <option>от 30 до 39 кв</option>
                                    <option>от 40 до 49 кв</option>
                                    <option>от 50 до 59 кв</option>
                                    <option>от 60 до 69 кв</option>
                                    <option>от 70 до 79 кв</option>
                                    <option>от 80 до 89 кв</option>
                                    <option>от 90 до 99 кв</option>
                                    <option>от 100 до 109 кв</option>
                                    <option>от 110 до 119 кв</option>
                                    <option>от 120 кв</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Этаж</option>
                                    <option>до 5 этажа</option>
                                    <option>от 6 этажа</option>
                                    <option>от 10 этажа</option>
                                    <option>от 17 этажа</option>
                                    <option>от 25 этажа</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Ремонт</option>
                                    <option>без ремонта</option>
                                    <option>"бабушкин ремонт"</option>
                                    <option>евроремонт</option>
                                    <option>дизайнерский ремонт</option>
                                </select>
                            </li>
                            <li className="search__item">
                                <select>
                                    <option value disabled selected>Цена за кв</option>
                                    <option>до 500 $</option>
                                    <option>от 501 до 750 $</option>
                                    <option>от 751 до 1000 $</option>
                                    <option>от 1001 до 1250 $</option>
                                    <option>от 1251 до 1500 $</option>
                                    <option>от 1501 до 1750 $</option>
                                    <option>от 2001 до 1250 $</option>
                                    <option>от 1501 до 1750 $</option>
                                    <option>от 2001 $</option>
                                </select>
                            </li>
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
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout='fill' src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square"><span>30 кв</span><span>27 кв</span></span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor"><span>11</span> из <span>21</span> этажей</span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/"><a className="article__link">Подробней</a></Link>
                                    <Link href="/"><a className="article__share"><i class="fas fa-share"></i></a></Link>
                                    <span className="article__like"><i class="far fa-heart"></i></span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout='fill' src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square"><span>30 кв</span><span>27 кв</span></span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor"><span>11</span> из <span>21</span> этажей</span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/"><a className="article__link">Подробней</a></Link>
                                    <Link href="/"><a className="article__share"><i class="fas fa-share"></i></a></Link>
                                    <span className="article__like"><i class="far fa-heart"></i></span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout='fill' src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square"><span>30 кв</span><span>27 кв</span></span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor"><span>11</span> из <span>21</span> этажей</span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/"><a className="article__link">Подробней</a></Link>
                                    <Link href="/"><a className="article__share"><i class="fas fa-share"></i></a></Link>
                                    <span className="article__like"><i class="far fa-heart"></i></span>
                                </div>
                            </div>
                        </li>ввпип
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout='fill' src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square"><span>30 кв</span><span>27 кв</span></span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor"><span>11</span> из <span>21</span> этажей</span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/"><a className="article__link">Подробней</a></Link>
                                    <Link href="/"><a className="article__share"><i class="fas fa-share"></i></a></Link>
                                    <span className="article__like"><i class="far fa-heart"></i></span>
                                </div>
                            </div>
                        </li>
                        <li className="search__item-article">
                            <div className="search__item-slider">
                                <Image layout='fill' src="/img/new-house-build-img.jpeg"></Image>
                            </div>
                            <div className="search__item-info">
                                <span className="article__price">177 000 $</span>
                                <span className="article__price-per-square">177 $ за кв.</span>
                                <span className="article__address">ул. Пушкинская 188</span>
                                <span className="article__square"><span>30 кв</span><span>27 кв</span></span>
                                <div className="article__wrap-details">
                                    <span className="article__rooms">2 комнаты</span>
                                    <span className="article__floor"><span>11</span> из <span>21</span> этажей</span>
                                    <span className="article__repairs">евроремонт</span>
                                    <span className="article__heating">автономное</span>
                                    <span className="article__year">1995 год</span>
                                    <span className="article__wall">кирпичные</span>
                                </div>
                                <div className="article__wrap-btns">
                                    <Link href="/"><a className="article__link">Подробней</a></Link>
                                    <Link href="/"><a className="article__share"><i class="fas fa-share"></i></a></Link>
                                    <span className="article__like"><i class="far fa-heart"></i></span>
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
                <MyComponent id="map" className="map">
    
                </MyComponent>
            </section>
        </Layout>
    )
}