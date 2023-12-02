
import React from 'react'
import Body from './Body'

import gallery1 from './images/gallery4.jpg'

function About() {
  
  return (
    <>
    <section>
     <div className='pic'>
    <img src={gallery1} alt="gallery1" className='gallery1' />
  </div>
  </section>

  <div className='container ' id='about'>
    <h1 >
     
    Who we are

    </h1>
    </div>
    <div>
    <p className='container' id='aboutus'>
At Lead Events, we specialize in all aspects of event management, from event planning and event production to event execution. Our team of experienced professionals has been dedicated to creating unforgettable events since 2008, with a focus on corporate events, conferences, Musical Concerts, theatrical production, exhibition, trade show displays, weddings, and entertainment. In addition, we offer top-of-the-line sound system rentals, lighting rentals, and LED screen rentals, as well as trussing and staging for all your event needs. Lead Events is one of the top event management companies in Dubai.

    </p><br /><br /><br />

  </div>

  
  <div className="res-contanier1 bg-success" id='products'>
            <Body 
             resName="Weeding"
             stars="4.3"
             
             />
             <Body
            resName="birthday"
            stars="3.0"
            
            />
            <Body
            resName="Funerls"
            stars="3.0"
            
            />
            
             </div>
    
  </>
  )
}

export default About