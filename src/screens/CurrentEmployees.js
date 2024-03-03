import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "./currentEmploy.css"
import { Link } from "react-router-dom";
export default function CurrentEmployees() {
  const [employeelist, setlist] = useState([]);

  useEffect((e) => {
    const fetchdata = async () => {
      try {
        let responce = await fetch(require("../myconstants") + "/allemployees");
        let data = await responce.json();
        if (data.success) {
          setlist(data.list);
         
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchdata();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div className="text-center my-5 fw-bold fs-2">Current Employees</div>
      <div className="myemp ">
      
      {employeelist.map((emp) => (
        <div class="card container my-5 " style={{width:"18rem",border:"2px solid black"}}>
          <img src={emp.profileImage} class="card-img-top" alt="..."   style={{ height: '200px' ,width:'100%',objectFit:"cover"}}  />
          <div class="card-body " style={{display:"flex",flexDirection:"column"}}>
            <h5 class="card-title text-center">{emp.employeeName}</h5>
            <p class="card-text">
             Contact : {emp.phoneNumber}
            </p>
            <p class="card-text">
             Email : {emp.email}
            </p>
            <p class="card-text">
             ID : {emp.employeeID}
            </p>

            <Link to={`/edit/${emp.employeeID}/${emp.employeeName}/${emp.email}/${emp.phoneNumber}/${emp.reportsTo}/${encodeURIComponent(emp.profileImage)}`} class="btn btn-dark mt-auto">
              Edit
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
