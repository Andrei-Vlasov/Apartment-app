import Link from 'next/link';

export default function MainTopBlock() {
    return (
        <>
            <section className="main-top-block">
                <div className="container j-c-s-a main-top-block--container">
                    <h1 className="main-top-block__title">Ищи с нами</h1>
                    <form className="main-top-block__search-form">
                        <select className="main-top-block__select">
                            <option>Продажа квартир</option>
                            <option>Аренда квартир</option>
                            <option>Продажа домов</option>
                            <option>Аренда домов</option>
                        </select>
                        <select className="main-top-block__select">
                            <option>Киев</option>
                            <option>Одесса</option>
                            <option>Львов</option>
                            <option>Харьков</option>
                        </select>
                        <Link href="/components/search">
                            <a className="main-top-block__btn">Поиск</a>
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
}
