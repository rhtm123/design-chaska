import Head from 'next/head'

import Features from '../../components/Features';
import CallToAction from '../../components/CallToAction';
import Link from 'next/link';
import Services from '../../components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Decorate Ghar | Home</title>
        <meta name="description" content="Decorate your home. Interior Designs, Exterior Designs, Architecture Designs, Furniture Designs. Modular Kitchen, Wardrobe and Storage, False Ceiling, Furniture" />
      </Head>

      <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row fullscreen d-flex justify-content-center align-items-center">
						<div className="banner-content col-lg-9 col-md-12 justify-content-center ">
							<h1>
								Customized, Best Quality & Afforadable <br />							</h1>
							<p className="text-white mx-auto">
							A room should never allow the eye to settle in one place. It should smile at you and create fantasy - Juan Montoya
							</p>
							<Link href="/contact" className="primary-btn header-btn text-uppercase mt-10">Get Started</Link>
						</div>											
					</div>
				</div>
			</section>

		<Services />

      {/* <section className="gallery-area pb-120">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Our Recent Works may impress you</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>							
					<div className="row">
						<div className="col-lg-8">
							<div className="single-gallery">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="/img/g1.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								    </a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-gallery">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="/img/g2.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								    </a>
								</div>
							</div>
						</div>	
						<div className="col-lg-4">
							<div className="single-gallery">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="/img/g3.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								    </a>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="single-gallery">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="/img/g4.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								    </a>
								</div>
							</div>
						</div>												
					</div>
				</div>	
			</section> */}


      <Features />

			
    </>
  )
}
