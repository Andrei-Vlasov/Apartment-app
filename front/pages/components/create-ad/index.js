import Layout from '../layout';

export default function CreateAd() {
    let inputData = [
        { id: 1, placeholder: 'Заголовок' },
        { id: 2, placeholder: 'Комнаты' },
        { id: 3, placeholder: 'Цена' },
        { id: 4, placeholder: 'Год постройки' },
        { id: 5, placeholder: 'Цена за кв.' },
        { id: 6, placeholder: 'Высота потолка' },
        { id: 7, placeholder: 'Этажность дома' },
        { id: 8, placeholder: 'Общая площадь' },
        { id: 9, placeholder: 'Жилая площадь' },
        { id: 10, placeholder: 'Этаж' },
    ];

    let selectData = [
        {
            id: 1,
            disabled: 'Год постройки',
            options: [
                { optionsId: 1, option: 'АППС' },
                { optionsId: 2, option: 'АППС-люкс' },
                { optionsId: 3, option: 'БСП' },
                { optionsId: 4, option: 'чешский проект' },
                { optionsId: 5, option: 'гостинка' },
                { optionsId: 6, option: 'хрущевка' },
                { optionsId: 7, option: 'дореволюционный' },
                { optionsId: 8, option: 'сталинка' },
            ],
        },
        {
            id: 2,
            disabled: 'Стени',
            options: [
                { optionsId: 1, option: 'блочные' },
                { optionsId: 2, option: 'панельные' },
                { optionsId: 3, option: 'Кирпичные' },
                { optionsId: 4, option: 'утепленная панель' },
                { optionsId: 5, option: 'монолитно-каркасные' },
            ],
        },
        {
            id: 3,
            disabled: 'Отопление',
            options: [
                { optionsId: 1, option: 'автономное' },
                { optionsId: 2, option: 'индивидуальное' },
                { optionsId: 3, option: 'централизованное' },
            ],
        },
        {
            id: 4,
            disabled: 'Ремонт',
            options: [
                { optionsId: 1, option: 'без ремонта' },
                { optionsId: 2, option: '"бабушкин ремонт"' },
                { optionsId: 3, option: 'евроремонт' },
                { optionsId: 4, option: 'дизайнерский ремонт' },
            ],
        },
    ];

    return (
        <Layout title="Create ad Page">
            <div className="create-ad">
                <h1 className="create-ad__title">Создание обьявления</h1>
                <form className="create-ad__form">
                    {inputData.map(({ placeholder, id }) => (
                        <input
                            key={id}
                            type="text"
                            placeholder={placeholder}
                            className="create-ad__input"
                        />
                    ))}
                    <ul className="create-ad__list">
                        {selectData.map(({ disabled, options, id }) => (
                            <li className="create-ad__item" key={id}>
                                <select>
                                    <option value disabled selected>
                                        {disabled}
                                    </option>
                                    {options.map(({ item, id }) => (
                                        <option key={id}>{item}</option>
                                    ))}
                                </select>
                            </li>
                        ))}
                    </ul>
                    <button className="create-ad__btn">Создать чертеж</button>
                    <textarea type="text" placeholder="Описание" className="create-ad__textarea" />
                    <button className="create-ad__btn">Создать</button>
                </form>
            </div>
        </Layout>
    );
}
