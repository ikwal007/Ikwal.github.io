import Head from 'next/head'
import React from 'react'

const Seo = () => {
    return (
        <Head>
            <title>Ikwal Blog & Portofolio - Programmer Web Developer</title>
            <meta
                name="description"
                content="Selamat datang di blog pribadi dan portofolio Muhammad Ikwal Ramadhan. Temukan artikel informatif tentang pemrograman, bahasa PHP, JavaScript, dan proyek-proyek pengembangan web yang saya kerjakan."
            />
            <meta
                name="keywords"
                content="blog, portofolio, programmer web developer, pengembang web, PHP, JavaScript, pemrograman, portofolio web"
            />
            <meta name="author" content="Muhammad Ikwal Ramadhan" />
            <meta
                property="og:title"
                content="Ikwal's Blog & Portofolio - Programmer Web Developer"
            />
            <meta
                property="og:description"
                content="Selamat datang di blog pribadi dan portofolio Muhammad Ikwal Ramadhan. Temukan artikel informatif tentang pemrograman, bahasa PHP, JavaScript, dan proyek-proyek pengembangan web yang saya kerjakan."
            />
            <meta property="og:image" content="/og-image.jpg" />
            <meta property="og:url" content="https://ikwal.netlify.app/" />
            <meta
                name="twitter:title"
                content="Ikwal's Blog & Portofolio - Programmer Web Developer"
            />
            <meta
                name="twitter:description"
                content="Selamat datang di blog pribadi dan portofolio Muhammad Ikwal Ramadhan. Temukan artikel informatif tentang pemrograman, bahasa PHP, JavaScript, dan proyek-proyek pengembangan web yang saya kerjakan."
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo
