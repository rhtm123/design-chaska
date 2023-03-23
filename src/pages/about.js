
import Link from "next/link";
import CallToAction from "../../components/CallToAction";
import Features from "../../components/Features";
import Services from "../../components/Services";

function AboutPage() {
    return (
        <>
        <section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								About Us				
							</h1>	
						</div>	
					</div>
				</div>
			</section>

            <section className="about-video-area section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 about-video-left">
							<h6 className="text-uppercase">Interior design is a business of trust</h6>
							<h1>
							Customized, Best Quality & Afforadable
							Interior Designs 
							</h1>
							
							<p>
							We are a team of passionate interior designers who believe that every space deserves to be beautiful, functional and comfortable. We offer a range of services in interior design, from consultation and planning to execution and installation. 
							</p>
							<p>
							Whether you need to renovate your home, office or commercial space, we can help you transform your vision into reality. Contact us today and let us create your dream space.

							</p>
							<Link className="primary-btn mt-30" href="/contact">Get Started Now</Link>
						</div>
						<div className="col-lg-6 justify-content-center align-items-center d-flex relative">
							<img className="img-fluid mx-auto" src="/img/banner-bg4.jpg" alt="" />
						</div>
					</div>
				</div>	
			</section>

			<Services />

            <Features />
        </>
     );
}

export default AboutPage;