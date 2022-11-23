import { Provider } from 'react-redux'
import store from '../store'
import { SessionProvider } from "next-auth/react"
// global style
import '../styles/globals.scss'
// font set
import { Barlow } from '@next/font/google'
const font = Barlow({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})


function MyApp ({Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />   
        </Provider>
      </SessionProvider>
      <style jsx global>{`
        html, body {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
    </>
  )
}


export default MyApp