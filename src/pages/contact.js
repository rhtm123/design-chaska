import Link from "next/link";
import Head from "next/head";
import React from "react";
import { postData } from "../../functions/auth";

function ContactPage() {
	const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState(false);


	const handleClick = (e) => {
		e.preventDefault();
        var url = 'https://codingchaska.up.railway.app/api/v1/auth/contact-us/';

        postData(url, {email: email, name: name, message:msg, subject:subject})
          .then(data => {
            setEmail("");setMsg("");setName("");setSubject("");
            setMsgSet(true);
        }).catch(error => {
            setError(error);
            console.log(error);
        })
    }


    return ( <>
		<Head>
        <title>Decorate Ghar | Contact </title>
        <meta name="description" content="Contact us for free consultation. Decorate your home with Modular Kitchen, Wardrobe, False Ceiling, Furniture etc" />
      </Head>
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
							{!msgSent && <form method="post" className="form-area contact-form text-right">
								<div className="row">	
									<div className="col-lg-6 form-group">
										<input value={name} onChange={e=>setName(e.target.value)} name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required="" type="text" />
										{error.name && <p className='text-danger'>{error.name}</p>}

										<input value={email} onChange={e=>setEmail(e.target.value)} name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required="" type="email" />
                                        {error.email && <p className='text-danger'>{error.email}</p>}

										<input value={subject} onChange={e=>setSubject(e.target.value)} name="subject" placeholder="Enter your subject" className="common-input mb-20 form-control" required="" type="text" />
										{error.subject && <p className='text-danger'>{error.subject}</p>}

									</div>
									<div className="col-lg-6 form-group">
										<textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="common-textarea form-control" name="message" placeholder="Messege" required=""></textarea>				
										{error.message && <p className='text-danger'>{error.message}</p>}

									</div>
									<div className="col-lg-12">
										<div className="alert-msg" style={{textAlign: "left"}}></div>
										<button onClick={handleClick} className="genric-btn primary circle" style={{float: "right"}}>Send Message</button>											
									</div>
								</div>
							</form>	}


							{msgSent && <p className="form-messege text-success">Thank You for sending your message. Our team will contact you soon.</p>}

						</div>
					</div>
				</div>	
			</section>

    
    
    
    
    
    </> );
}

export default ContactPage;