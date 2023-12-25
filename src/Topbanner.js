import React from 'react'
import { Link } from 'react-router-dom'

function Topbanner() {
    return (
        <>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-lg-5 '>
                        <div className='baner'>
                            <img className='w-100 ' src={require('./Image/img1.jpg')} />
                            <div className='under'>
                                <button className='btn1'>WORLD</button>
                                <p><Link to="#"> Michel Brown Talks About American People.</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='baner1'>
                            <img className='w-100' src={require('./Image/img2.jpg')} />
                            <div className='under1 '>
                                <button className='btn1 '>SPORTS</button>
                                <p><Link to="#"> Improve Your Health And Stamina With Cycling .</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 '>
                        <div className='row '>
                            <div className='col-lg-12 '>
                                <div className='baner2'>
                                    <img className='w-100' src={require('./Image/img3.jpg')} />
                                    <div className='under2'>
                                        <button className='btn1'>WORLD</button>
                                        <p><Link to="#">An Army or Ground Force is a Fighting <br />
                                            Force That Fights Primarily On Land  .</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12 my-3  '>
                                <div className='baner2'>
                                    <img className='w-100 img4' src={require('./Image/img4.jpg')} />
                                    <div className='under2'>
                                        <button className='btn1'>WORLD</button>
                                        <p><Link to="#"> alex Helis Confirms Mystery Pop Singer <br /> On New Music Albums .</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='adds'>
                    <span className='bnews '> BREAKING NEWS</span> <span className='add'>An Army or Ground Force is a Fighting Force That Fights Primarily On Land.</span><i class="bi bi-chevron-left anglel "></i><i class="bi bi-chevron-right angler"></i>
                </div>









            </div>
        </>
    )
}

export default Topbanner
