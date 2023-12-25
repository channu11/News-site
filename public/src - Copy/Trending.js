import React from 'react'
import { Link } from 'react-router-dom'
import Tdata from './Data/Tdata'

function Trending() {
    return (
        <>
            <div className='container'>
                <div className='outline'>
            <h2 className='pt-5 fw-bold fs-1'>TRENDING NEWS</h2>
                <div className='row'>
            
                    {Tdata.map((a) => (
                        <div className='col-lg-6'>

                            <div className='card mt-5'>
                                <img className='w-100' src={a.image} />
                                <div className='card-body'>
                                    <p className='fw-bold fs-4 baner1' ><Link to={`/details/${a.id}`}>{a.title}</Link></p>
                                    <p className='fs-5  text-secondary-emphasis'><i class="bi bi-stopwatch "></i> {a.date}</p>
                                </div>
                            </div>


                        </div>
                    ))}


                </div>
                </div>
            </div>
        </>
    )
}

export default Trending
