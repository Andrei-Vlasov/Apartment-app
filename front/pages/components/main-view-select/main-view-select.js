import Link from 'next/link';
import Image from 'next/image';

export default function MainViewSelect() {
    return (
        <>
            <section className="main-view-select">
                <div className="container">
                    <ul className="main-view-select__list">
                        <li className="main-view-select__item">
                            <Link href="/">
                                <a className="main-view-select__link">
                                    <h3 className="main-view-select__title">Новобудови</h3>
                                    <Image
                                        layout="fill"
                                        className="main-view-select__img"
                                        src="/img/new-house-build-img.jpeg"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="main-view-select__item">
                            <Link href="/">
                                <a className="main-view-select__link">
                                    <h3 className="main-view-select__title">Оренда квартир</h3>
                                    <Image
                                        layout="fill"
                                        className="main-view-select__img"
                                        src="/img/new-house-build-img.jpeg"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="main-view-select__item">
                            <Link href="/">
                                <a className="main-view-select__link">
                                    <h3 className="main-view-select__title">Оренда будинків</h3>
                                    <Image
                                        layout="fill"
                                        className="main-view-select__img"
                                        src="/img/new-house-build-img.jpeg"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="main-view-select__item">
                            <Link href="/">
                                <a className="main-view-select__link">
                                    <h3 className="main-view-select__title">Продаж квартир</h3>
                                    <Image
                                        layout="fill"
                                        className="main-view-select__img"
                                        src="/img/new-house-build-img.jpeg"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="main-view-select__item">
                            <Link href="/">
                                <a className="main-view-select__link">
                                    <h3 className="main-view-select__title">Продаж будинків</h3>
                                    <Image
                                        layout="fill"
                                        className="main-view-select__title__img"
                                        src="/img/new-house-build-img.jpeg"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
