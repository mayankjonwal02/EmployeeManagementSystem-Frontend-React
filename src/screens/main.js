import React from 'react'
import Navbar from '../components/navbar'
import imgurl from "../images/images-removebg-preview.png"
export default function Main() {
  return (
    <div>
      <Navbar/>
      <div className='container ' style={{display:"flex",flexDirection:"column",height:"80vh",alignItems:"center",justifyContent:"center"}}>

      <div className='text-center my-4 fw-bold fs-1'>Employee Management System</div>
      <div className='text-center my-4 fs-5'>This is out Employee Management System</div>
      <div className='' style={{display:"flex",justifyContent:"center"}}>
      <img className="" style={{display:"block",height:"300px"}} src={imgurl} />

      </div>
      </div>
    </div>
  )
}
