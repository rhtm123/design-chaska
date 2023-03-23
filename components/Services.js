
function Services() {
    return ( 
        <section className="service-area section-gap" id="service">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 pb-50 header-text text-center">
                    <h1 className="mb-10">What we offer to our clients</h1>
                    <p>
                    Home is the starting place of love, hope and dreams
                    </p>
                </div>
            </div>						
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-service">
                        <img src='/svg/sofa.svg' width={"80px"} height={"80px"} />
                        <h3>Interior</h3>
                        <p>
                        Interior design is more than just arranging furniture and choosing colors. It is a creative and rewarding way to express your personality and transform your living space.
                        </p>
                    </div>
                </div>	
                <div className="col-lg-4">
                    <div className="single-service">
                        <img src='/svg/home2.svg' width={"80px"} height={"80px"} />

                        <h3>Exterior</h3>
                        <p>
                        {`It's a creation of beautiful and functional outdoor spaces. Whether it's a cozy patio, a lush garden, or a facade, exterior design can transform any property into a dream home.`}
                        </p>
                    </div>
                </div>	
                <div className="col-lg-4">
                    <div className="single-service">
                    <img src='/svg/tool.svg' width={"80px"} height={"80px"} />

                        <h3>Architecture</h3>
                        <p>
                        It is the process of creating and planning the form and function of buildings and other physical structures. The design can inspire us, challenge us and transform us.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-service">
                    <img src='/svg/furniture.svg' width={"80px"} height={"80px"} />

                        <h3>Furniture</h3>
                        <p>
                        {`It's a fascinating and creative field. Whether it's a cozy sofa, a sleek desk or a quirky lamp, furniture design can transform any space into a unique and inviting environment.`}
                        </p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-service">
                    <img src='/svg/decoration.svg' width={"80px"} height={"80px"} />

                        <h3>Decoration</h3>
                        <p>
                        Decoration is the art of making something more beautiful, attractive and inviting. You can experiment with different styles, themes and colors to create your own unique look.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-service">
                    <img src='/svg/plan.svg' width={"80px"} height={"80px"} />

                        <h3>Plans & Projects</h3>
                        <p>
                        {`Are you ready to turn your dream home into a reality? we have the perfect plan and project for you! You'll find inspiration, advice, and tutorials from our expert designers.`}
                        </p>
                    </div>
                </div>																												
            </div>
        </div>	
    </section>
     );
}

export default Services;