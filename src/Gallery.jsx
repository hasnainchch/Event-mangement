import React  from 'react'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'
import gallery4 from './images/gallery4.jpg'

const Gallery = () => {
  return(
    <>
<section>
    <div className='pic'>
    <img src={gallery1} alt="gallery1" className='gallery1' />
  </div>
  </section><br></br>


  <section>
    <div className='pic2'>
    <img src={gallery2} alt="gallery2" className='gallery2' />
  </div>
  </section><br></br>
  <section>
    <div className='pic3'>
    <img src={gallery3} alt="gallery3" className='gallery3' />
  </div>
  </section><br></br>
  <section>
    <div className='pic4'>
    <img src={gallery4} alt="gallery4" className='gallery4' />
  </div>
  </section>
  </>
  )
}

export default Gallery;