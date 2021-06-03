import Layout from '../layout';
import Map from '../../wrap-map';

export default function CreateAd() {
    let inputData = [
        { id: 1, placeholder: 'Город, Село' },
        { id: 2, placeholder: 'Район' },
        { id: 3, placeholder: 'Улица, Дом' },
        { id: 4, placeholder: 'Комнаты' },
        { id: 5, placeholder: 'Цена' },
        { id: 6, placeholder: 'Год постройки' },
        { id: 8, placeholder: 'Высота потолка' },
        { id: 9, placeholder: 'Этажность дома' },
        { id: 10, placeholder: 'Общая площадь' },
        { id: 11, placeholder: 'Жилая площадь' },
        { id: 12, placeholder: 'Этаж' },
        { id: 14, placeholder: 'Контактное лицо' },
        { id: 15, placeholder: 'Контактный тел.' },
    ];

    let selectData = [
        {
            id: 1,
            disabled: 'Стены',
            options: [
                { optionsId: 1, option: 'Блочные' },
                { optionsId: 2, option: 'Панельные' },
                { optionsId: 3, option: 'Кирпичные' },
                { optionsId: 4, option: 'Утепленная панель' },
                { optionsId: 5, option: 'Монолитно-каркасные' },
            ],
        },
        {
            id: 2,
            disabled: 'Отопление',
            options: [
                { optionsId: 1, option: 'Автономное' },
                { optionsId: 2, option: 'Индивидуальное' },
                { optionsId: 3, option: 'Централизованное' },
            ],
        },
        {
            id: 3,
            disabled: 'Ремонт',
            options: [
                { optionsId: 1, option: 'Без ремонта' },
                { optionsId: 2, option: '"Бабушкин ремонт"' },
                { optionsId: 3, option: 'Евроремонт' },
                { optionsId: 4, option: 'Дизайнерский ремонт' },
            ],
        },
        {
            id: 4,
            disabled: 'Тип жилья',
            options: [
                { optionsId: 1, option: 'Квартира' },
                { optionsId: 2, option: 'Дом' },
            ],
        },
    ];

    return (
        <Layout title="Create ad Page">
            <div className="create-ad">
                <h1 className="create-ad__title">Создание объявления</h1>
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
                                    {options.map(({ option, optionsId }) => (
                                        <option key={optionsId}>{option}</option>
                                    ))}
                                </select>
                            </li>
                        ))}
                    </ul>
                    <div id="map" className="create__map">
                        <Map page={'create'} zoom={8} center={[30.5, 50.45]} />
                    </div>
                    <input
                        type="file"
                        id="create__file"
                        className="create__file"
                        accept=".jpg, .jpeg, .png"
                        placeholder="Загрузить изображение"
                        multiple
                    />
                    <label htmlFor="create__file" className="create__file-style">
                        Выберите файл
                    </label>
                    <textarea type="text" placeholder="Описание" className="create-ad__textarea" />
                    <button className="create-ad__btn">Создать</button>
                </form>
            </div>
        </Layout>
    );
}
