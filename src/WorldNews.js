import React from 'react'
import { Link } from 'react-router-dom'

function WorldNews() {
    return (
        <>
            <div className='container'>
                <div className='outline'>
                    <h2 className='pt-5 fw-bold fs-1 '>WORLD NEWS</h2>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='card mt-5'>
                                <img className='w-100' src={require('./Image/world-1.jpg')} />
                                <div className='card-body'>
                                    <p className='fw-bold fs-4 baner1'> <Link to='#'> The future of possible innovation for business company.</Link></p>
                                    <p className='fs-5 text-secondary-emphasis'><i class="bi bi-stopwatch"></i>  November 16 , 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 mt-5'>

                            <div className='box1'>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={require('./Image/world-2.jpg')} />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='fw-bold fs-5 baner1'> <Link>William braynt went to visit.</Link></p>
                                        <p className=' fw-bold fs-6 text-secondary-emphasis'>NATIONAL OCTOBAR 2017</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box1 mt-4'>
                                <div className="d-flex align-items-center ">

                                    <div className="flex-shrink-0">
                                        <img className='' src={require('./Image/world-3.jpg')} />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='fw-bold fs-5 baner1'> <Link>William braynt went to visit.</Link></p>
                                        <p className=' fw-bold fs-6 text-secondary-emphasis'>NATIONAL OCTOBAR 2017</p>

                                    </div>
                                </div>
                            </div>
                            <div className='box1 mt-4'>
                                <div className="d-flex align-items-center ">
                                    <div className="flex-shrink-0">
                                        <img src={require('./Image/world-4.jpg')} />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className='fw-bold fs-5 baner1'><Link>William braynt went to visit.</Link></p>
                                        <p className=' fw-bold fs-6 text-secondary-emphasis'>NATIONAL OCTOBAR 2017</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorldNews
