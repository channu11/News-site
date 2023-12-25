import React from 'react'

function Header() {
  return (
    <>
      <div className='container'>
        <div className='row '>
            <div className='col-lg-4  mt-4 '>
<img   width={330} src={require('./Image/logo1.jpg')}/>
            </div>
            <div className='col-lg-8 mt-1 d-flex justify-content-end '>
<img height={110}  src={require('./Image/add1.jpg')}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
