
import '@/styles/font-awesome.min.css'
import '@/styles/linearicons.css'

import '@/styles/bootstrap.css'
import '@/styles/magnific-popup.css'
import '@/styles/nice-select.css'
import '@/styles/animate.min.css'
// import '@/styles/owl.carousel.css'
import '@/styles/main.css'



import Layout from '../../layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}