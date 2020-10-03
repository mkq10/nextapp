import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Mainpage from '../components/mainpage.js'
import Hero from '../components/hero.js'

export default function Home() {
  return (
    <div >
      <Head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

        <title>Sailor</title>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        {/* <!-- Favicons --> */}
        {/* <link href="/assets/img/favicon.png" rel="icon"/> */}
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

        {/* <!-- Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

        {/* <!-- Vendor CSS Files --> */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet"/>
        <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet"/>
        {/* <!-- Template Main CSS File --> */}
        <link href="/assets/css/style.css" rel="stylesheet"/>
      </Head>
      <Header />
      <Hero/>
      <Mainpage/>
      <Footer />
      <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </div>
  )
}
