import Layout from '../layout';
import Map from '../map';
import axios from 'axios';

export default function CreateAd() {
    let inputData = [
        { id: 1, name: 'Locality', placeholder: 'Город, Село' },
        { id: 2, name: 'Area', placeholder: 'Район' },
        { id: 2, name: 'Region', placeholder: 'Область' },
        { id: 3, name: 'Address', placeholder: 'Улица, Дом' },
        { id: 4, name: 'RoomCount', placeholder: 'Комнаты' },
        { id: 5, name: 'Price', placeholder: 'Цена' },
        { id: 6, name: 'YearBuilt', placeholder: 'Год постройки' },
        { id: 8, name: 'Height', placeholder: 'Высота потолка' },
        { id: 9, name: 'condition', placeholder: 'Этажность дома' },
        { id: 10, name: 'Space', placeholder: 'Общая площадь' },
        { id: 11, name: 'LivingSpace', placeholder: 'Жилая площадь' },
        { id: 12, name: 'condition', placeholder: 'Этаж' },
        { id: 14, name: 'ContactName', placeholder: 'Контактное лицо' },
        { id: 15, name: 'ContactNumber', placeholder: 'Контактный тел.' },
    ];

    let selectData = [
        {
            id: 1,
            disabled: 'Стены',
            name: 'Wall',
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
            name: 'Heating',
            options: [
                { optionsId: 1, option: 'Автономное' },
                { optionsId: 2, option: 'Индивидуальное' },
                { optionsId: 3, option: 'Централизованное' },
            ],
        },
        {
            id: 3,
            disabled: 'Ремонт',
            name: 'Condition',
            options: [
                { optionsId: 1, option: 'Без ремонта' },
                { optionsId: 2, option: 'Старый ремонт' },
                { optionsId: 3, option: 'Евроремонт' },
                { optionsId: 4, option: 'Дизайнерский ремонт' },
            ],
        },
        {
            id: 4,
            disabled: 'Тип жилья',
            name: 'AccommodationType',
            options: [
                { optionsId: 1, option: 'Квартира' },
                { optionsId: 2, option: 'Дом' },
            ],
        },
        {
            id: 5,
            disabled: 'Сделка',
            name: 'DealType',
            options: [
                { optionsId: 1, option: 'Аренда' },
                { optionsId: 2, option: 'Продажа' },
            ],
        },
    ];

    const SubmitClick = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/apartments/create', {
                AuthorID: 1,
                DateCreated: new Date().toISOString().substr(0, 10),
                AccommodationType: e.target.AccommodationType.value,
                DealType: e.target.DealType.value,
                GlobalX: '1.5',
                GlobalY: '-1.5',
                Address: e.target.Address.value,
                Locality: e.target.Locality.value,
                Area: e.target.Area.value,
                Region: e.target.Region.value,
                Price: e.target.Price.value,
                Description: e.target.Description.value,
                ContactName: e.target.ContactName.value,
                ContactNumber: e.target.ContactNumber.value,
                RoomCount: e.target.RoomCount.value,
                Space: e.target.Space.value,
                LivingSpace: e.target.LivingSpace.value,
                Height: '4',
                Floor: '5',
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <Layout title="Create ad Page">
            <div className="create-ad">
                <h1 className="create-ad__title">Создание объявления</h1>
                <form className="create-ad__form" onSubmit={SubmitClick}>
                    {inputData.map(({ placeholder, id, name }) => (
                        <input
                            key={id}
                            name={name}
                            type="text"
                            placeholder={placeholder}
                            className="create-ad__input"
                        />
                    ))}
                    <ul className="create-ad__list">
                        {selectData.map(({ disabled, options, id, name }) => (
                            <li className="create-ad__item" key={id}>
                                <select name={name}>
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
                    <Map zoomP={8} latP={50.45} lngP={30.5} page="create" className="create__map" />
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
                    <textarea
                        type="text"
                        placeholder="Описание"
                        name="Description"
                        className="create-ad__textarea"
                    />
                    <button type="submit" className="create-ad__btn">
                        Создать
                    </button>
                </form>
            </div>
        </Layout>
    );
}
