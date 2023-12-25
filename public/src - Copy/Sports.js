import React from 'react'
import Sdata from './Data/Sdata'
import Imgdata from './Data/Imgdata'
import { Link } from 'react-router-dom'

function Sports() {
    return (
        <>
            <div className='container'>
                <div className='box1 mt-5'>
                    <h2 className='ss m-4'>SPORTS NEWS</h2>
                    {Sdata.map((a) => (

                        <div className='box1 m-4'>
                            <div className="d-flex align-items-center  ">
                                <div className="flex-shrink-0">
                                    <img className='w-100' src={a.image} />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className='fw-bold fs-4 baner1'><Link>{a.title}</Link></p>
                                    <p className='  fs-5 text-secondary-emphasis'>{a.description}</p>
                                    <p className='  fs-5 text-secondary-emphasis'>{a.date}</p>
                                </div>
                            </div>

                            
                        </div>
                    ))}

                    <div className='row m-3'>
                      
                        {Imgdata.map((a) => (
                            <div className='col-lg-3  '>
                                <img className='w-100' src={a.image} />
                            </div>
                        ))}

                    </div>



                </div>
            </div>
        </>
    )
}

export default Sports
