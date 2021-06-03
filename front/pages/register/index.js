import Layout from '../layout';
import Link from 'next/link';
import axios from 'axios';

export default function Register() {
    const SubmitClick = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/auth/register', {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <Layout title="Register Page">
            <div className="login">
                <h1 className="login__title">Регистрация</h1>
                <form className="login__form" onSubmit={SubmitClick}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Имя пользователя"
                        className="login__username"
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Пароль"
                        className="login__password"
                    />
                    <button type="submit" className="login__btn">
                        Регистрация
                    </button>
                </form>
                <Link href="/sing-in">
                    <a className="login__link">Войти</a>
                </Link>
            </div>
        </Layout>
    );
}
