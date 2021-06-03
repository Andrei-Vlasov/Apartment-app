import Link from 'next/link';

export default function Footer() {
    let footerSocialLink = [
        { id: 1, link: '', iconClass: 'fab fa-facebook-f' },
        { id: 2, link: '', iconClass: 'fab fa-instagram' },
        { id: 3, link: '', iconClass: 'fab fa-telegram' },
    ];

    return (
        <>
            <footer className="footer">
                <ul className="footer__social-list">
                    {footerSocialLink.map(({ link, iconClass, id }) => (
                        <li className="footer__social-item" key={id}>
                            <Link href={link}>
                                <a className="footer__social-link">
                                    <i className={iconClass}></i>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="footer__bottom">© Appartment 2021</div>
            </footer>
        </>
    );
}
