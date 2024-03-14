import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Footer() {
    return (
		<>
      <footer className="footer-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								{/* <h6>About Us</h6> */}
								<img style={{width:"auto",height:"60px"}} src="/img/logo_3.png" alt="Decorate Ghar" title="Decorate Ghar" />
								<br /> <br />
								<p>
								We are a team of passionate interior designers who love to create beautiful and functional spaces for our clients. <br />
								We listen to your needs, preferences, and budget, and offer you personalized solutions that suit your lifestyle and personality. 
								Decorate Ghar provides its services in Naigaon, Mira Road, Bhayandar, & Vasai. 
								</p>

								<a href="tel:+919324270778" ><h3>Call- 9324 2707 78</h3></a>			


								<p>Let us be social</p>
								<div className="social-media-footer">
								<SocialMedia />
								</div>


															
							</div>
						</div>
						<div className="col-lg-3  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Important Links</h6>
								<ul>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/contact">Contact Us</Link></li>
									<li><Link href="/projects">Projects</Link></li>
									<li><Link href="/blogs">Blogs</Link></li>

								</ul>
								
							</div>
						</div>						
						<div className="col-lg-3 col-md-3 col-sm-3 social-widget">
							{/* <div className="single-footer-widget">
								<h6>Follow Us</h6>
								
							</div> */}
						</div>							
					</div>
				</div>

				
			</footer>
			<div className="footer-bottom">
					<p>@copyright Coding Chaska</p>
				</div>	
			</>
    )
  }