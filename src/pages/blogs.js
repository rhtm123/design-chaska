import Link from "next/link";
import React from "react";
import Author from "../../components/Author";

function BlogsPage() {
	const [blogs, setBlogs] = React.useState([]);


	React.useEffect(() => {
        
		let url =  `https://codingchaska.up.railway.app/api/v1/short-tutorial/short-tuts/?author=&tags=30`;
        // console.log(data);
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
			let data1 = await response.json();
			setBlogs(data1.results);
			console.log(data1.results);
          }
        }).catch(error=>{  })

    
      },[]);

    return ( <>
    
    <section className="banner-area relative blog-home-banner" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content blog-header-content col-lg-12">
							<h1 className="text-white">
								Learn more about Interior Designing	from our blogs	
							</h1>	
							<p className="text-white">
								
							</p>
						</div>	
					</div>
				</div>
			</section>


            {/* <section className="top-category-widget-area pt-90 pb-90 ">
				<div className="container">
					<div className="row">		
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
								    <a href="#" target="_blank">
								      <div className="thumb">
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget1.jpg" alt="" />
								  	  </div>
								      <div className="content-details">
								        <h4 className="content-title mx-auto text-uppercase">Social life</h4>
								        <span></span>								        
								        <p>Enjoy your social life together</p>
								      </div>
								    </a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
								    <a href="#" target="_blank">
								      <div className="thumb">
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget2.jpg" alt="" />
								  	  </div>
								      <div className="content-details">
								        <h4 className="content-title mx-auto text-uppercase">Politics</h4>
								        <span></span>								        
								        <p>Be a part of politics</p>
								      </div>
								    </a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
								    <a href="#" target="_blank">
								      <div className="thumb">
								  		 <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget3.jpg" alt="" />
								  	  </div>
								      <div className="content-details">
								        <h4 className="content-title mx-auto text-uppercase">Food</h4>
								        <span></span>
								        <p>Let the food be finished</p>
								      </div>
								    </a>
								</div>
							</div>
						</div>												
					</div>
				</div>	
			</section>
 */}


            <section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">

							{blogs.map((blog, index)=>
								<div key={index} className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									{/* <ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul> */}
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><Link href={"/blog/"+blog.slug}>{blog.author?.firstname} {blog.author?.lastname}</Link> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><Link href={"/blog/"+blog.slug}>{new Date(blog.updated).toLocaleDateString()}</Link> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><Link href={"/blog/"+blog.slug}>{blog.read_time_minutes} Minutes Read</Link> <span className="lnr lnr-eye"></span></p>
										{/* <p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>						 */}
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src={blog.feature_img} alt="" />
									</div>
									<Link className="posts-title" href={"/blog/"+blog.slug}><h3>{blog.header}</h3></Link>
									<p className="excert">
										{blog.sub_header}
									</p>
									<Link href={"/blog/"+blog.slug} className="primary-btn">View More</Link>
								</div>
							</div>
							)}
							
																				
		                    {/* <nav className="blog-pagination justify-content-center d-flex">
		                        <ul className="pagination">
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Previous">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-left"></span>
		                                    </span>
		                                </a>
		                            </li>
		                            <li className="page-item"><a href="#" className="page-link">01</a></li>
		                            <li className="page-item active"><a href="#" className="page-link">02</a></li>
		                            <li className="page-item"><a href="#" className="page-link">03</a></li>
		                            <li className="page-item"><a href="#" className="page-link">04</a></li>
		                            <li className="page-item"><a href="#" className="page-link">09</a></li>
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Next">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-right"></span>
		                                    </span>
		                                </a>
		                            </li>
		                        </ul>
		                    </nav> */}
						</div>
						<div className="col-lg-4 sidebar-widgets">
							<div className="widget-wrap">
								{/* <div className="single-sidebar-widget search-widget">
									<form className="search-form" action="#">
			                            <input placeholder="Search Posts" name="search" type="text" />
			                            <button type="submit"><i className="fa fa-search"></i></button>
			                        </form>
								</div> */}
								<Author />
								{/* <div className="single-sidebar-widget popular-post-widget">
									<h4 className="popular-title">Popular Posts</h4>
									<div className="popular-post-list">
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="img/blog/pp1.jpg" alt="" />
											</div>
											<div className="details">
												<a href="blog-single.html"><h6>Space The Final Frontier</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="img/blog/pp2.jpg" alt="" />
											</div>
											<div className="details">
												<a href="blog-single.html"><h6>The Amazing Hubble</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="img/blog/pp3.jpg" alt="" />
											</div>
											<div className="details">
												<a href="blog-single.html"><h6>Astronomy Or Astrology</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="img/blog/pp4.jpg" alt="" />
											</div>
											<div className="details">
												<a href="blog-single.html"><h6>Asteroids telescope</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>															
									</div>
								</div>
								<div className="single-sidebar-widget ads-widget">
									<a href="#"><img className="img-fluid" src="img/blog/ads-banner.jpg" alt="" /></a>
								</div>
								<div className="single-sidebar-widget post-category-widget">
									<h4 className="category-title">Post Catgories</h4>
									<ul className="cat-list">
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Technology</p>
												<p>37</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Lifestyle</p>
												<p>24</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Fashion</p>
												<p>59</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Art</p>
												<p>29</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Food</p>
												<p>15</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Architecture</p>
												<p>09</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Adventure</p>
												<p>44</p>
											</a>
										</li>															
									</ul>
								</div>	
								<div className="single-sidebar-widget newsletter-widget">
									<h4 className="newsletter-title">Newsletter</h4>
									<p>
										Here, I focus on a range of items and features that we use in life without
										giving them a second thought.
									</p>
									<div className="form-group d-flex flex-row">
									   <div className="col-autos">
									      <div className="input-group">
									        <div className="input-group-prepend">
									          <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i>
											</div>
									        </div>
									        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email'" />
									      </div>
									    </div>
									    <a href="#" className="bbtns">Subcribe</a>
									</div>	
									<p className="text-bottom">
										You can unsubscribe at any time
									</p>								
								</div>
								<div className="single-sidebar-widget tag-cloud-widget">
									<h4 className="tagcloud-title">Tag Clouds</h4>
									<ul>
										<li><a href="#">Technology</a></li>
										<li><a href="#">Fashion</a></li>
										<li><a href="#">Architecture</a></li>
										<li><a href="#">Fashion</a></li>
										<li><a href="#">Food</a></li>
										<li><a href="#">Technology</a></li>
										<li><a href="#">Lifestyle</a></li>
										<li><a href="#">Art</a></li>
										<li><a href="#">Adventure</a></li>
										<li><a href="#">Food</a></li>
										<li><a href="#">Lifestyle</a></li>
										<li><a href="#">Adventure</a></li>
									</ul>
								</div>								 */}
							</div>
						</div>
					</div>
				</div>	
			</section>  
    </> );
}

export default BlogsPage;