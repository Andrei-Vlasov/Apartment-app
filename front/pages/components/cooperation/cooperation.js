import Link from 'next/link'

export default function Cooperation() {
    return (
        <>
            <section className="cooperation">
                <div className="container f-d-c">
                    <h2 className="cooperation__title">По поводу сотрудничества пишите</h2>
                    <Link href="/"><a className="cooperation__link">appartment.co@gmail.com</a></Link>
                </div>
            </section>
        </>
    );
}