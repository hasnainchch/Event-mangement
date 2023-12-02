import React from 'react'
import event from './images/event.jpg'
import event1 from './images/event1.png'
import Body from './Body'

const Home = () => {
  return (
    <>
    <section>
    <div className='pic'>
    <img src={event} alt="event" className='event' />
  </div>
  </section>


  <section>
    <div className='pic2'>
    <img src={event1} alt="event1" className='event1' />
  </div>
  </section>


  
  <div className='container  text-center text-info' id='para'>
    <h1 className='text-center' >
      
       Professional Event Management 

    </h1>
    </div>
    <div>
    <p  className='container bg-dark  text-white ' id='paragraph'>
      


Welcome to Lead Events - the top event management company in Dubai! Since 2008, we've been creating extraordinary experiences for our clients by offering full-spectrum event management and production services in Dubai, Abudhabi and across UAE. But that's not all we offer - we also provide sound system rental, lighting rental, LED screen rental, trussing rental, and staging. From start to finish, we've got everything you need to make your event a success! Whether you're planning a Corporate event, gala dinner, conference, wedding, award ceremony, exhibition, trade show or musical concert, we've got you covered.

Read less
Experienced Event Management Company in Dubai

Leading the way in imaginative event management and audio visual production for more than 15 years, Lead Events has built up a strong reputation by delivering remarkable event management services to clients in Dubai. Becoming a recommended and on the to-go company for successful and one of the creative event management companies in Dubai , we are also delighted to offer a fully-combined set of required event solutions for various companies and individuals in Dubai.

Specialists in Event Production Services <br /><br /><br />
    </p>

  </div>


  <div className='container ' id='ser'>
    <h1 >
      Our Services
    </h1>
    </div>
    <div>
    <p className='container' id='service'>
      

Whether you're planning a corporate event or a private party, our event management service has got you covered. We're one of the top event management companies in Dubai, Abudhabi and across UAE, and our team has 15+ years of experience in managing events of all types and sizes. From meetings and conferences to gala dinners and award ceremonies, we provide end-to-end event planning and management, including audio-visual rentals. When it comes to event production, you need a team with experience and expertise. At Lead Events, we provide complete event management services. Let us take care of the planning and management, so you can focus on your guests and enjoy a memorable event.Contact us today and let us take care of your next event!
    </p><br /><br /><br />

  </div>
  <div className="res-contanier bg-success" id='products'>
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
            <Body
            resName="KFC"
          
            stars="3.0"
            
            />
            <Body
            resName="lighting system"
          
            stars="3.0"
            
            />
            <Body
            resName="sounds system"
          
            stars="3.0"
            
            />
             </div>
             

  </>

  
  
   

  )
}

export default Home;