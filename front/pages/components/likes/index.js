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
            </Head>
            <section className="search-map-wrap">
                <div className="search">
                    <HeaderLayout></HeaderLayout>
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