import React from 'react'
import Videodata from './Data/Videodata'

function Featured() {
    return (
        <>
            <div className='container'>
                <div className='box1 p-3'>
                    <h2 className='feat '>FEATURED VIDEOS</h2>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <video src="v.mp4" controls autoplay loop="2" width="100%" ></video>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                {Videodata.map((a) => (
                                    <div className='col-lg-6  '>
                                        <div className='bb'>
                                            <img className='w-100 video' src={a.image} />
                                            <div className='play'>
                                                <i class="bi bi-play-circle"></i>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='box1 mt-3 '>
                   <img className='m-3 add2' src={require('./Image/add2.jpg')}/>
                   </div>
            </div>
           
           
        </>
    )
}

export default Featured
