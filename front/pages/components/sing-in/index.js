import Head from 'next/head';
import HeaderLayout from '../header/header';
import Footer from '../footer/footer';
import Layout from '../layout';
import Link from 'next/link';

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Appartment</title>
            </Head>
            <HeaderLayout></HeaderLayout>
            <div className="login">
                <h1 className="login__title">Войти</h1>
                <form className="login__form">
                    <input type="text" placeholder="Имя пользователя" className="login__username" />
                    <input type="text" placeholder="Пароль" className="login__password" />
                    <button className="login__btn">Войти</button>
                </form>
                <Link href="/components/register">
                    <a className="login__link">Регистрация</a>
                </Link>
            </div>
            <Footer></Footer>
        </Layout>
    );
}
