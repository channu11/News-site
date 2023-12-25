import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DtlData from './Data/DtlData'

function Details() {
    let { pid } = useParams()
    let dtl = DtlData.find((a) => a.id == pid)
    return (
        <>
            <div className='container'>

                <div className='outline'>
                    <h2 className='pt-5 fw-bold fs-1'>TRENDING NEWS</h2>
                    <div className='row'>


                        <div className='col-lg-12'>

                            <div className='card mt-5'>
                                <img className='w-100' src={dtl.image} />
                                <div className='card-body'>
                                    <p className='fw-bold fs-1 baner1' ><Link to='#'>{dtl.title}</Link></p>
                                    <p className='fs-5  text-secondary-emphasis'><i class="bi bi-stopwatch "></i> {dtl.date}</p>
                                    <p className='fs-5  text-secondary-emphasis fs-3'> {dtl.des}</p>
                                   
                                    
                                </div>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
