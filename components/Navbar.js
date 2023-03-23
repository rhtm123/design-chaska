import Link from "next/link"
import SocialMedia from "./SocialMedia"
export default function Navbar() {
    return (
      
      <header id="header">
		  		<div className="header-top">
		  			<div className="container">
				  		<div className="row">
				  			<div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
				  				<a href="tel:+91 9518 9019 02">+91 9518 9019 02</a>
				  				<a href="mailto:contact@codingchaska.com">contact@codingchaska.com</a>					  
				  			</div>
				  			<div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
				  				<SocialMedia />		
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div className="container main-menu">
			    	<div className="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <Link href="/"><img style={{width:"auto",height:"40px"}} src="/img/logo_3.png" alt="Decorate Ghar" title="Decorate Ghar" /></Link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul className="nav-menu">
				          <li className="menu-active">
							<Link href="/">Home
							</Link>
							</li>
				          <li><Link href="/about">About</Link></li>
				          <li><Link href="/projects">Projects</Link></li>
				          <li><Link href="/blogs">Blogs</Link></li>
				          {/* <li className="menu-has-children"><a href="">Pages</a>
				            <ul>
			              		<li><a href="project-details.html">Project Details</a></li>		
				                <li><a href="elements.html">Elements</a></li>
						          <li className="menu-has-children"><a href="">Level 2 </a>
						            <ul>
						              <li><a href="#">Item One</a></li>
						              <li><a href="#">Item Two</a></li>
						            </ul>
						          </li>					                		
				            </ul>
				          </li>					          					          		           */}
				          <li><Link href="/contact">Contact</Link></li>
				        </ul>
				      </nav>	
			    	</div>
			    </div>
			  </header>

    )
  }