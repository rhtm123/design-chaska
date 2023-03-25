import Link from "next/link";
import Head from "next/head";

function ProjectsPage() {
    return ( 

        <>
	  <Head>
        <title>Decorate Ghar | Projects </title>
        <meta name="description" content="We have created 100+ Projects in Mira Road, Naigaon & Vasai Mumbai" />
      </Head>

        <section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Projects				
							</h1>	
						</div>	
					</div>
				</div>
			</section>

			<section className="gallery-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Our Recent Works may impress you</h1>
							<p>
							Being trustworthy requires: Doing the right thing. And doing things right. - Don Peppers
							</p>
						</div>
					</div>							
					<div className="row">
						<div className="col-lg-8">
							<div className="single-gallery">
								<div className="content">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/g1.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-gallery">
								<div className="content">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/g2.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								</div>
							</div>
						</div>	
						<div className="col-lg-4">
							<div className="single-gallery">
								<div className="content">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/g3.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="single-gallery">
								<div className="content">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/g4.jpg" alt="" />
								      <div className="content-details fadeIn-bottom">
								        <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
								        <a href="project-details.html" className="primary-btn text-uppercase mt-20">More Details</a>
								      </div>
								</div>
							</div>
						</div>												
					</div>
				</div>	
			</section>
        
        </>
     );
}

export default ProjectsPage;