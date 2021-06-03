import Layout from '../layout';
import Link from 'next/link';

export default function Login() {
    return (
        <Layout title="Sing-in Page">
            <div className="login">
                <h1 className="login__title">Войти</h1>
                <form className="login__form">
                    <input type="text" placeholder="Имя пользователя" className="login__username" />
                    <input type="text" placeholder="Пароль" className="login__password" />
                    <button className="login__btn">Войти</button>
                </form>
                <Link href="/register">
                    <a className="login__link">Регистрация</a>
                </Link>
            </div>
        </Layout>
    );
}
