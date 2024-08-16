import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let mycolor={
    color:'white',
    backgroundColor: '$purple-800',
    display:'flex' ,
    flexDirection :'column'
  }
  return (
  <div className='cont' style={mycolor}  >

  
    <nav className= "navbar navbar-light, bg-dark ">
    <div className="container-fluid">
      <a className="navbar-brand  text-light "href="/" >{props.title}</a>
      <button className="navbar-toggler" type="button" style={mycolor}data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active  text-light" aria-current="page"href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">{props.About}
            </a>
          </li>
        
      
        </ul>
        {/* <div class="form-check form-switch">
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark MODE  </label>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div> */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit"> Search</button>
        </form>
        <br/>
        <div className={'form-check form-switch '}>
  <input className="form-check-input"  conclick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable DarkMode</label>
</div>
      </div>
    </div>
  </nav>
  </div>
  )
}
