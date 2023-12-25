import React from 'react'

function Top() {
  return (
    <>
    <section className='head'>
      <div className='container'>
        <div className='row mx-2'>
            <div className='col-lg-6  text-light'>
              <div className='tleft d-flex '>
            <i class="bi bi-phone cell border-end my-3 mx-2 "></i><p className='my-3'>983 592 88 52</p> 
            <i class="bi bi-envelope mail border-end my-3 mx-2"></i> <p className='my-3'>mail@domain.com</p>
            </div>
            </div>
           
         
            <div className='col-lg-6 text-light'>
                
                <div className='tright d-flex  justify-content-end'>
                  
                <i class="bi bi-facebook  my-3 mx-2 ps-2   icon"></i>
                <i class="bi bi-twitter  my-3 mx-2  ps-2  icon"></i>
                <i class="bi bi-google icon my-3 mx-2 ps-2 icon "></i>
                <i class="bi bi-pinterest  my-3 mx-2 ps-2  icon"></i>
                <i class="bi bi-instagram  my-3 mx-2 ps-2 pe-2  icon"></i>
                
              
                <p className='my-3 mx-2'>Thousday July 4 , 2017</p>
                </div>
                </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Top
