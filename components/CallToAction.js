import Link from "next/link";

function CallToAction() {
    return ( 
        <section className="callto-action-area pt-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="callto-action-wrap col-lg-12 relative section-gap">
							<div className="content">
								<h1>
									Looking for a <br />
									quality and affordable interior design?
								</h1>
								<p className="mx-auto">
								Our team of experienced and creative designers will work with you to create a space that reflects your personality and meets your needs. 
								</p>
								<Link href="/contact" className="primary-btn text-uppercase">Request quote now</Link>	
								<br /> <br />
								<a className="mx-auto" href="tel:+919324270778" ><h3>Call- 9324 2707 78</h3></a>			

							</div>							
						</div>
					</div>
				</div>	
			</section>

     );
}

export default CallToAction;