export default function MainAbout() {
    let mainAboutList = [
        { id: 1, iconClass: 'fas fa-list-ul', title: 'усі оголошення на ринку' },
        { id: 2, iconClass: 'fas fa-layer-group', title: 'дублікати оголошень згруповані' },
        { id: 3, iconClass: 'fas fa-check', title: 'контроль якості оголошень' },
        { id: 4, iconClass: 'fas fa-search', title: 'комфортний пошук' },
    ];

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
                            {mainAboutList.map(({id, iconClass, title}) => (
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
