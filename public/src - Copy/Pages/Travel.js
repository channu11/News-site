import React from 'react'
import Xdata from '../Data/Xdata' 
import { Link } from 'react-router-dom'

function Travel() {
  return (
    <>
     <div className='container'>
                <div className='outline'>
                    <h2 className='pt-5 fw-bold fs-1'>TRENDING NEWS</h2>
                    <div className='row'>

                        { Xdata.map((a) => (
                            <div className='col-lg-6'>

                                <div className='card mt-5'>
                                    <img className='w-100 ' src={a.image} />
                                    <div className='card-body'>
                                        <p className='fw-bold fs-4 baner1' ><Link to='#'>{a.title}</Link></p>
                                        <p className='fs-5  text-secondary-emphasis'><i class="bi bi-stopwatch "></i> {a.date}</p>
                                    </div>
                                </div>


                            </div>
                        ))}


                    </div>
                </div>

                <nav aria-label="Page navigation example  ">
                    <ul className="pagination mm">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item "><a className="page-link aa " href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div> 
    </>
  )
}

export default Travel
