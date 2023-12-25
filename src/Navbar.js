import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Health from './Pages/Health';
import Travel from './Pages/Travel';
import Details from './Details';


import Rightpage from './Rightpage';
import Topbanner from './Topbanner';
import Entertainment from './Pages/Enter';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  mt-1 py-4 sticky-top ">
        <div className="container">


          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <div className='box'>
                <li className="nav-item ">
                  <Link className="nav-link   " aria-current="page" to="/">HOME</Link>
                </li>
              </div>
              <div className='box'>
                <li className="nav-item ">
                  <Link className="nav-link" to="/health">HEALTH</Link>
                </li>
              </div>
              <div className='box'>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link>
                </li>
              </div>
              <div className='box'>
                <li className="nav-item">
                  <a className="nav-link" href="#">WORLD</a>
                </li>
              </div>
              <div className='box'>
                <li className="nav-item">
                  <Link className="nav-link" to="/travel">TRAVEL</Link>
                </li>
              </div>
              <div className='box'>
                <li className="nav-item">
                  <a className="nav-link" href="#">PAGE</a>
                </li>
              </div>


            </ul>
            <form className="d-flex " role="search">

              <input className="form-control me-2 search " type="search" placeholder="Search news " aria-label="Search" />
              <i class="bi bi-search text-light"></i>

            </form>
          </div>
        </div>
      </nav>

      <Topbanner />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/health" element={<Health />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/details/:pid" element={<Details />} />

            </Routes>
          </div>
          <div className='col-lg-4'>
            <Rightpage />
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar
