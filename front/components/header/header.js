import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function HeaderLayout() {
    let menu = [
        {
            id: 1,
            link: '/create-ad',
            title: 'Создать объявление',
        },
        {
            id: 2,
            link: '/user-ad',
            title: 'Мои объявления',
        },
        {
            id: 3,
            link: '/',
            title: 'Выход',
        },
    ];
    let router = useRouter();

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
                    {router.asPath != '/instruction' && (
                        <Link href="/instruction">
                            <a className="header__link-about">
                                <i className="fas fa-plus"></i>
                                <span>Рекомендации</span>
                            </a>
                        </Link>
                    )}
                    <Link href="/sing-in">
                        <a className="header__link-login">
                            <i className="fas fa-user"></i>
                        </a>
                    </Link>
                    <ul className="header-user__list">
                        {menu.map(({ id, link, title }) => (
                            <li className="header-user__item" key={id}>
                                <Link href={link}>
                                    <a className="header-user__link">{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}
