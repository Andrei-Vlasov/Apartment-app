import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <Link href="">
                            <a className="footer__social-link">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link href="">
                            <a className="footer__social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link href="">
                            <a className="footer__social-link">
                                <i className="fab fa-telegram-plane"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className="footer__bottom">© flatfy.ua 2015-2021</div>
            </footer>
        </>
    );
}
