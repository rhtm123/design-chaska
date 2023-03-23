import Link from "next/link";

function ContactPage() {
    return ( <>
            <section className="banner-area relative" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Contact Us				
							</h1>	
						</div>	
					</div>
				</div>
		    </section>

            <section className="contact-page-area">
				<div className="container">
					<div className="row">
						<div className="map-wrap" style={{width:"100%"}} id="map"></div>
						<div className="col-lg-4 d-flex flex-column address-wrap">
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<img className="lnr" src="/svg/contact/phone.svg" width={'40px'} />
								</div>

								<div className="contact-details">
									<h5>+91 9518 9019 02</h5>
									<p>Mon to Fri 9am to 6 pm</p>
								</div>

								
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
								<img className="lnr" src="/svg/contact/home.svg" width={'40px'} />

								</div>
								

								<div className="contact-details">
									<h5>103/3, Jay Vijay Nagar Building</h5>
									<p>
										Opposite Seven Square School, Naigaon
									</p>
								</div>
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
								<img className="lnr" src="/svg/contact/chat.svg" width={'40px'} />
									
								</div>
								<div className="contact-details">
									<h5>contact@codingchaska.com</h5>
									<p>Send us your query anytime!</p>
								</div>
							</div>														
						</div>
						<div className="col-lg-8">
							<form id="myForm" method="post" className="form-area contact-form text-right">
								<div className="row">	
									<div className="col-lg-6 form-group">
										<input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required="" type="text" />
									
										<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required="" type="email" />

										<input name="subject" placeholder="Enter your subject" className="common-input mb-20 form-control" required="" type="text" />
									</div>
									<div className="col-lg-6 form-group">
										<textarea className="common-textarea form-control" name="message" placeholder="Messege" required=""></textarea>				
									</div>
									<div className="col-lg-12">
										<div className="alert-msg" style={{textAlign: "left"}}></div>
										<button className="genric-btn primary circle" style={{float: "right"}}>Send Message</button>											
									</div>
								</div>
							</form>	
						</div>
					</div>
				</div>	
			</section>

    
    
    
    
    
    </> );
}

export default ContactPage;