
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Foodu | Your favourite food delivery partner</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
        <meta name="description" content="Our job is to filling your expectation with delicious food fastest delivery in your doorstap" />
        <meta name="geo.region" content="en-BD" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}