import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import CallToAction from "../components/CallToAction";

export default function Layout({ children }) {
    return (
      <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet" />

<meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <Navbar />
      <main>{children}</main>

      <CallToAction />
      <Footer />



      <script src="/js/vendor/jquery-2.2.4.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
			<script src="/js/vendor/bootstrap.min.js"></script>			
  			<script src="/js/easing.min.js"></script>			
			<script src="/js/hoverIntent.js"></script>
			<script src="/js/superfish.min.js"></script>	
			{/* <script src="js/jquery.ajaxchimp.min.js"></script> */}
			<script src="/js/jquery.magnific-popup.min.js"></script>	
			{/* <script src="/js/owl.carousel.min.js"></script>						 */}
			<script src="/js/jquery.nice-select.min.js"></script>							
			{/* <script src="/js/mail-script.js"></script>	 */}
			<script src="/js/main.js"></script>	
      </>
    )
  }