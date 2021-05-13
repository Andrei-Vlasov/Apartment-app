import Layout from '../layout';
import Link from 'next/link';

export default function Register() {
    return (
        <Layout title="Register Page">
            <div className="login">
                <h1 className="login__title">Регистрация</h1>
                <form className="login__form">
                    <input type="text" placeholder="Имя пользователя" className="login__username" />
                    <input type="text" placeholder="Пароль" className="login__password" />
                    <button className="login__btn">Регистрация</button>
                </form>
                <Link href="/components/sing-in">
                    <a className="login__link">Войти</a>
                </Link>
            </div>
        </Layout>
    );
}
