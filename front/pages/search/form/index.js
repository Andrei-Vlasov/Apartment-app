export default function Form() {
    let formListShow = [
        {
            id: 1,
            type: 'input',
            disabled: 'Год постройки: от',
        },
        {
            id: 2,
            type: 'input',
            disabled: 'Год постройки: до',
        },
        {
            id: 3,
            type: 'input',
            disabled: 'Высота потолка(м): от',
        },
        {
            id: 4,
            type: 'input',
            disabled: 'Этажность дома: от',
        },
        {
            id: 5,
            type: 'input',
            disabled: 'Этажность дома: до',
        },
        {
            id: 6,
            type: 'input',
            disabled: 'Высота потолка(м): до',
        },
        {
            id: 7,
            type: 'input',
            disabled: 'Общая площадь: от',
        },
        {
            id: 8,
            type: 'input',
            disabled: 'Общая площадь: до',
        },
        {
            id: 9,
            type: 'input',
            disabled: 'Жилая площадь: от',
        },
        {
            id: 10,
            type: 'input',
            disabled: 'Цена за кв.м: от',
        },
        {
            id: 11,
            type: 'input',
            disabled: 'Цена за кв.м: до',
        },
        {
            id: 12,
            type: 'input',
            disabled: 'Жилая площадь: до',
        },
        {
            id: 13,
            type: 'input',
            disabled: 'Этаж: от',
        },
        {
            id: 14,
            type: 'input',
            disabled: 'Этаж: до',
        },
        {
            id: 15,
            type: 'select',
            disabled: 'Стены',
            option: [
                { id: 1, title: 'Блочные' },
                { id: 2, title: 'Панельные' },
                { id: 3, title: 'Кирпичные' },
                { id: 4, title: 'Утепленная панель' },
                { id: 5, title: 'Монолитно-каркасные' },
            ],
        },
        {
            id: 16,
            type: 'select',
            disabled: 'Отопление',
            option: [
                { id: 1, title: 'Автономное' },
                { id: 2, title: 'Индивидуальное' },
                { id: 3, title: 'Централизованное' },
            ],
        },
        {
            id: 17,
            type: 'select',
            disabled: 'Ремонт',
            option: [
                { id: 1, title: 'Без ремонта' },
                { id: 2, title: '"Бабушкин ремонт"' },
                { id: 3, title: 'Евроремонт' },
                { id: 4, title: 'Дизайнерский ремонт' },
            ],
        },
    ];

    let formSort = [
        {
            id: 1,
            title: 'Самые дешёвые',
        },
        {
            id: 2,
            title: 'Самые дорогие',
        },
        {
            id: 3,
            title: 'Самые новые',
        },
        {
            id: 4,
            title: 'Наибольшая стоимость кв.м',
        },
        {
            id: 5,
            title: 'Наименьшая стоимость кв.м',
        },
        {
            id: 6,
            title: 'Наибольшая площадь',
        },
        {
            id: 7,
            title: 'Наименьшая площадь',
        },
    ];

    return (
        <>
            <form className="form">
                <input
                    type="text"
                    placeholder="Город, улица, станция метро"
                    className="form__select form__title"
                />
                <select className="form__select form__select--rooms">
                    <option value disabled selected>
                        Число комнат
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                </select>
                <input
                    type="text"
                    className="form__select form__select--price form__select--price-first"
                    placeholder="Цена: от"
                />
                <input
                    type="text"
                    className="form__select form__select--price"
                    placeholder="Цена: до"
                />
                <input
                    id="form__btn-checkbox"
                    className="form__btn-checkbox"
                    type="checkbox"
                ></input>
                <label htmlFor="form__btn-checkbox" className="form__btn">
                    Еще фильтры
                </label>
                <ul className="form__list--show">
                    {formListShow.map(({ id, type, disabled, option }) => (
                        <li className="form__item" key={id}>
                            {type == 'input' && <input type="text" placeholder={disabled} />}
                            {type == 'select' && (
                                <select>
                                    <option value disabled selected>
                                        {disabled}
                                    </option>
                                    {option.map(({ id, title }) => (
                                        <option key={id}>{title}</option>
                                    ))}
                                </select>
                            )}
                        </li>
                    ))}
                </ul>
                <select className="form__sort">
                    {formSort.map(({ title, id }) => (
                        <option key={id}>{title}</option>
                    ))}
                </select>
                <button className="form__search">Искать</button>
            </form>
        </>
    );
}
