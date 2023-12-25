import React from 'react'
import { Link } from 'react-router-dom'
import Recentdata from './Data/Recentdata'
import Rightdata from './Data/Rightdata'


function Rightpage() {
    return (
        <>
            <div className='container'>
                <div className='outline'>

                    <div className='row'>

                        {Rightdata.map((a) => (
                            <div className='col-lg-12'>

                                <div className='card mt-2'>
                                    <img className='w-100' src={a.image} />

                                </div>


                            </div>
                        ))}


                    </div>

                </div>
                {/* weather widget start */}
                <a target="_blank" href="https://www.booked.net/weather/london-18114"><img className='w-100' src="https://w.bookcdn.com/weather/picture/3_18114_1_1_137AE9_250_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=38535&domid=w209&anc_id=56010" alt="booked.net" /></a>   {/* weather widget end */}




                <div className="btn-group mt-5" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                    <label className="btn btn2 btn-outline-text-secondary-emphasis fw-bold p-3" htmlFor="btnradio1">
                        RECENT</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn2 btn-outline-text-secondary-emphasis p-3" htmlFor="btnradio2">POPULAR</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                    <label className="btn btn2 btn-outline-text-secondary-emphasis p-3" htmlFor="btnradio3">COMMENTS</label>
                </div>

                {Recentdata.map((a) => (

                    <div className='box1 mt-4'>
                        <div className="d-flex align-items-center ">
                            <div className="flex-shrink-0">
                                <img src={a.image} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p className='fw-bold fs-5 baner1'><Link>{a.title}</Link></p>
                                <p className=' fw-bold fs-6 text-secondary-emphasis'>{a.date}</p>
                            </div>
                        </div>
                    </div>
                ))}


                <div className='box2 mt-5'>
                    <ul>
                        <h2 className=' cat'>NEWS CATEGORY</h2>
                        <hr />
                        <li> <Link to='#'> WORLD </Link></li>
                        <hr />
                        <li> <Link to='#'>TRAVEL</Link> </li>
                        <hr />
                        <li> <Link to='#'>FOODS</Link></li>
                        <hr />
                        <li> <Link to='#'>CREATIVE</Link></li>
                        <hr />
                        <li> <Link to='#'>SPORTS</Link></li>
                        <hr />
                        <li> <Link to='#'>RACING</Link></li>
                        <hr />
                        <li> <Link to='#'>TECHNOLOGY</Link></li>

                    </ul>
                </div>

                <div className='box1 mt-5'>
                    <h2 className='feat m-3'>SUBSCRIBE NEWS24</h2>
                    <form className=" mx-4 my-4 " role="search">
                        <input className="form-control me-2 p-4 fs-4" type="search" placeholder="Enter Your Email " aria-label="Search" />
                        <button class="btn btn-outline-success btn4" type="submit">Suscribe</button>
                    </form>

                </div>



            <div>
                <div className='box1 px-3 py-3 mt-5'>
  <div className="month " >
    <ul>
      <li className="prev">❮</li>
      <li className="next">❯</li>
      <li>
        August<br />
        <span style={{fontSize: 18}}>2021</span>
      </li>
    </ul>
  </div>
  <ul className="weekdays">
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
  </ul>
  <ul className="days">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li><span className="active">10</span></li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
  </ul>
  </div>
</div>


            </div>

        </>
    )
}

export default Rightpage
