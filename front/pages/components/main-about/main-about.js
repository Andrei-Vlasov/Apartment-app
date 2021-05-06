export default function MainAbout() {
    return (
        <>
            <section className="main-about">
                <div className="container">
                    <div className="main-about__info">
                        <h1 className="main-about__title">Чим ми займаємося</h1>
                        <p className="main-about__descr">
                            Appartment - це пошуковик нерухомості на вторинному ринку. Ми збираємо
                            всі актуальні оголошення, групуємо дублікати та пропонуємо нашим
                            користувачам у 29 країнах зручний інтерфейс для перегляду всіх
                            пропозицій в одному місці.
                        </p>
                        <ul className="main-about__list">
                            <li className="main-about__item">
                                <i className="fas fa-list-ul"></i>
                                <p className="main-about__item-descr">усі оголошення на ринку</p>
                            </li>
                            <li className="main-about__item">
                                <i className="fas fa-layer-group"></i>
                                <p className="main-about__item-descr">
                                    дублікати оголошень згруповані
                                </p>
                            </li>
                            <li className="main-about__item">
                                <i className="fas fa-check"></i>
                                <p className="main-about__item-descr">контроль якості оголошень</p>
                            </li>
                            <li className="main-about__item">
                                <i className="fas fa-search"></i>
                                <p className="main-about__item-descr">комфортний пошук</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
