import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

   

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="#" style={{fontSize:"24px",marginInlineEnd:"30px"}}>Employee Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div className='btn bg-white text-dark'>Options</div>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/currentemployees">Current Employees</Link>
        </li>

       
       
      </ul>
     <Link className='text-dark btn bg-white fw-bold ' to = "/newemployee" >Add Employee</Link>
    </div>
  </div>
</nav>
    </div>
  )
}
