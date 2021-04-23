import Link from 'next/link'
import Image from 'next/image'

export default function HeaderLayout() {
    return (
        <>
            <header className="header">
                <Link href="/">
                    <a className="header__link-logo">
                        <Image width={40} height={40} className="header__logo" src="/img/logo.png"/>
                        <h1 className="header__title">Appartment</h1>
                    </a>
                </Link>
                <div>
                    <Link href="/components/instruction"><a className="header__link-about"><i className="fas fa-plus"></i><span>Розмістити оголошення</span></a></Link>
                    <Link href="/"><a className="header__link-login"><i className="fas fa-user"></i></a></Link>
                </div>
            </header>
        </>
    )
}