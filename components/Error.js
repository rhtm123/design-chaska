import Link from "next/link";
function Error() {
    return ( 
        <>
            <section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Error 404 			
							</h1>	
						</div>	
					</div>
				</div>
			</section>

            <section className="error-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center">

                            <img width={"100%"} src="/img/dog.png" />
                            <h1>The page is not available.</h1>

							<Link className="primary-btn mt-30" href="/">Visit Home</Link>


                            

                        </div>
                        <div className="col-md-3"></div>

                    </div>
                </div>
            </section>
        </>
     );
}

export default Error;