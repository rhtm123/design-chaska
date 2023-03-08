import Link from "next/link"
export default function Navbar() {
    return (
      
      <header id="header">
		  		<div class="header-top">
		  			<div class="container">
				  		<div class="row">
				  			<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
				  				<a href="tel:+91 9518 9019 02">+91 9518 9019 02</a>
				  				<a href="mailto:contact@codingchaska.com">contact@codingchaska.com</a>					  
				  			</div>
				  			<div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
				  				<ul>
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i class="fa fa-behance"></i></a></li>
				  				</ul>			
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <Link href="/"><img src="/img/logo.png" alt="" title="" /></Link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				          <li class="menu-active">
							<Link href="/">Home
							</Link>
							</li>
				          <li><Link href="/about">About</Link></li>
				          <li><Link href="/services">Services</Link></li>
				          <li><Link href="/projects">Projects</Link></li>
				          <li><Link href="/blogs">Blogs</Link></li>
				          <li class="menu-has-children"><a href="">Pages</a>
				            <ul>
			              		<li><a href="project-details.html">Project Details</a></li>		
				                <li><a href="elements.html">Elements</a></li>
						          <li class="menu-has-children"><a href="">Level 2 </a>
						            <ul>
						              <li><a href="#">Item One</a></li>
						              <li><a href="#">Item Two</a></li>
						            </ul>
						          </li>					                		
				            </ul>
				          </li>					          					          		          
				          <li><a href="contact.html">Contact</a></li>
				        </ul>
				      </nav>	
			    	</div>
			    </div>
			  </header>

    )
  }