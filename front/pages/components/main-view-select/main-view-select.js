import Link from 'next/link';
import Image from 'next/image';

export default function MainViewSelect() {
    let item = [
        { id: 1, title: 'Новобудови', imgSrc: '/img/new-house-build-img.jpeg', link: '/' },
        { id: 2, title: 'Оренда квартир', imgSrc: '/img/flat-rent.jpg', link: '/' },
        { id: 3, title: 'Оренда будинків', imgSrc: '/img/house-rent.jpg', link: '/' },
        { id: 4, title: 'Продаж квартир', imgSrc: '/img/flat-buy.jpg', link: '/' },
        { id: 5, title: 'Продаж будинків', imgSrc: '/img/house-buy.jpg', link: '/' },
    ];

    return (
        <>
            <section className="main-view-select">
                <div className="container">
                    <ul className="main-view-select__list">
                        {item.map(({ id, title, imgSrc, link }) => (
                            <li className="main-view-select__item" key={id}>
                                <Link href={link}>
                                    <a className="main-view-select__link">
                                        <h3 className="main-view-select__title">{title}</h3>
                                        <Image
                                            layout="fill"
                                            className="main-view-select__img"
                                            src={imgSrc}
                                        />
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
