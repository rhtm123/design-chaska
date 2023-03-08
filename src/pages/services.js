import Features from "../../components/Features";


function ServicesPage() {
    return ( 

        <>
        <section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Services				
							</h1>	
							<p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="services.html"> Services</a></p>
						</div>	
					</div>
				</div>
			</section>


            <section class="service-area section-gap" id="service">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12 pb-50 header-text text-center">
							<h1 class="mb-10">What we offer to our clients</h1>
							<p>
								Who are in extremely love with eco friendly system..
							</p>
						</div>
					</div>						
					<div class="row">
						<div class="col-lg-4">
							<div class="single-service">
								<a href="#"><h4>Interior Design</h4></a>
								<p>
									Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product.
								</p>
							</div>
						</div>	
						<div class="col-lg-4">
							<div class="single-service">
								<a href="#"><h4>Architecture Design</h4></a>
								<p>
									Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
								</p>
							</div>
						</div>	
						<div class="col-lg-4">
							<div class="single-service">
								<a href="#"><h4>Concept Design</h4></a>
								<p>
									Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
								</p>
							</div>
						</div>																													
					</div>
				</div>	
			</section>

        <Features />

        
        </>
     );
}

export default ServicesPage;