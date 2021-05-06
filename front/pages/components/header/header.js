import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLayout() {
    return (
        <>
            <header className="header">
                <Link href="/">
                    <a className="header__link-logo">
                        <Image
                            width={40}
                            height={40}
                            className="header__logo"
                            src="/img/logo.png"
                        />
                        <h1 className="header__title">Appartment</h1>
                    </a>
                </Link>
                <div>
                    <Link href="/components/instruction">
                        <a className="header__link-about">
                            <i className="fas fa-plus"></i>
                            <span>Розмістити оголошення</span>
                        </a>
                    </Link>
                    <Link href="/components/sing-in">
                        <a className="header__link-login">
                            <i className="fas fa-user"></i>
                        </a>
                    </Link>
                    <ul className="header-user__list">
                        <li className="header-user__item">
                            <Link href="/components/likes">
                                <a className="header-user__link">Понравившиеся</a>
                            </Link>
                        </li>
                        <li className="header-user__item">
                            <Link href="/components/create-ad">
                                <a className="header-user__link">Создать обьявления</a>
                            </Link>
                        </li>
                        <li className="header-user__item">
                            <Link href="/">
                                <a className="header-user__link">Выход</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
