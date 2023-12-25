import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className='bg1 mt-4'>

                <div className='container pb-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img className='w-50 mt-5' src={require('./Image/logo1.jpg')} />
                            <p className='text-light mt-4 fs-5 fw-bold text-secondary-emphasis'>News24 is a Clean Responsive HTML News- <br />paper, Magazine, News and Blog template. <br />with good feature that allow you to completely <br />customize your website to your needs.</p>
                        </div>
                        <div className='col-lg-4 text-light mt-5'>
                            <h3 className='fw-bold nn pb-2'>MOST VIWED</h3>
                            <i class="bi bi-circle-fill text-danger fs-4 "></i> <span className='fw-bold fs-4 ps-1'> Oct 28, 2016</span>
                            <div className='ps-5 ll mb-4 '>
                                <Link to='#'>Success is not a good teacher failure makes you humble
                                    Oct 28, 2016</Link>
                            </div>
                            <i class="bi bi-circle-fill text-danger fs-4 "></i> <span className='fw-bold fs-4 ps-1 '> Oct 28, 2016</span>
                            <div className='ps-5 ll '>
                                <Link to='#'>Success is not a good teacher failure makes you humble
                                    Oct 28, 2016</Link>
                            </div>
                        </div>

                        <div className='col-lg-4 text-light mt-5'>
                        <h3 className='fw-bold nn pb-2'>MOST VIWED</h3> 
                        <button className='py-2 px-4 fs-5 fw-bold mx-1 mt-2 btn5'>Worlds</button> <button className='py-2 px-4 mt-2 fs-5 fw-bold mx-1 btn5'>Entertainment</button><button className='py-2 mt-2 px-4 fs-5 fw-bold mx-1 btn5'>Health</button>
                        <button className='py-2 px-4 fs-5 fw-bold mx-1 mt-2 btn5'>Football</button> <button className='py-2 px-3 mt-2 fs-5 fw-bold mx-1 btn5'>News</button><button className='py-2 mt-2 px-3 fs-5 fw-bold mx-1 btn5'>Fashion</button><button className='py-2 mt-2 px-4 fs-5 fw-bold mx-1 btn5'>Health</button>
                        <button className='py-2 px-4 fs-5 fw-bold mx-1 mt-2 btn5 '>Western Food</button> <button className='py-2 px-4 mt-2 fs-5 fw-bold mx-1 btn5'>Weswtern Food</button>
                        <button className='py-2 px-4 fs-5 fw-bold mx-1 mt-2  btn5'>Rice</button> <button className='py-2 px-4 mt-2 fs-5 fw-bold mx-1 btn5'>Football</button><button className='py-2 mt-2 px-4 fs-5 fw-bold mx-1 btn5'>Food</button>
                        </div>

                    </div>
                </div>

                <hr />
                <div className='footer1 pt-3'>
                    <div className='container'>

                        <div className='d-flex justify-content-between'>
                            <div className=' fw-bold text-secondary-emphasis fs-6'>
                                © Copyright Crackthemes 2017, All Rights Reserved
                            </div>

                            <div className='ficon d-flex justify-content-end text-light mb-5'>
                                <i class="bi bi-facebook  mx-2 "></i>
                                <i class="bi bi-twitter mx-2 "></i>
                                <i class="bi bi-google mx-2"></i>
                                <i class="bi bi-pinterest mx-2 "></i>
                                <i class="bi bi-instagram mx-2 "></i>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Footer
