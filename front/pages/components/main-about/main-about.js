export default function MainAbout() {
    let mainAboutList = [
        { id: 1, iconClass: 'fas fa-list-ul', title: 'все объявления на рынке' },
        { id: 2, iconClass: 'fas fa-layer-group', title: 'работа с картой' },
        { id: 3, iconClass: 'fas fa-check', title: 'контроль качества объявлений' },
        { id: 4, iconClass: 'fas fa-search', title: 'удобный поиск' },
    ];

    return (
        <>
            <section className="main-about">
                <div className="container">
                    <div className="main-about__info">
                        <h1 className="main-about__title">Чем мы занимаемся</h1>
                        <p className="main-about__descr">
                            Appartment - это поисковик недвижимости на вторичном рынке. Мы собираем
                            актуальные объявления, предлагаем нашим пользователям удобный интерфейс
                            для просмотра всех предложений в одном месте.
                        </p>
                        <ul className="main-about__list">
                            {mainAboutList.map(({ id, iconClass, title }) => (
                                <li className="main-about__item" key={id}>
                                    <i className={iconClass}></i>
                                    <p className="main-about__item-descr">{title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
