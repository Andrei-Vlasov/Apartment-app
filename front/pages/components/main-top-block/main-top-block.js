import Link from 'next/link'

export default function MainTopBlock() {
    return (
        <>
            <section className="main-top-block">
                <div className="container j-c-s-a">
                    <h1 className="main-top-block__title">Шукай з нами</h1>
                    <form className="main-top-block__search-form">
                        <select className="main-top-block__select">
                            <option>Продаж квартир</option>
                            <option>Оренда квартир</option>
                            <option>Продаж будинків</option>
                            <option>Оренда будинків</option>
                        </select>
                        <select className="main-top-block__select">
                            <option>Київ</option>
                            <option>Одеса</option>
                            <option>Львів</option>
                            <option>Харків</option>
                        </select>
                        <Link href="/components/search"><a className="main-top-block__btn">пошук</a></Link>
                    </form>
                </div>
            </section>
        </>
    )
}