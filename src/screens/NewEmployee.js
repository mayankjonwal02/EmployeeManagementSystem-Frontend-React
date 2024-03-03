import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const ipaddress = require("../myconstants");
export default function NewEmployee() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [manager, setmanager] = useState("");
  const [url, seturl] = useState("");
  const [showload, setshowload] = useState(false);
    var navigate = useNavigate();
  const addemployee = async () => {
    
    setshowload(true)
    var apiurl = ipaddress+"/addemployee";
    var employeedata = {
      
      employeeName: name,
      phoneNumber: number,
      email: email,
      reportsTo: manager,
      profileImage: url,
    };
    var requestoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeedata),
    };

    try {
      var responce = await fetch(apiurl, requestoptions);
      var data = await responce.json();
      setshowload(false)
      console.log(data);
      alert("Your Employee ID: " + data.employeeid +" message: "+data.message);
      navigate("/currentemployees")
    } catch (error) {
        setshowload(false)
      alert(error.message);
      navigate("/currentemployees")
      
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div
        className="container my-5 rounded-4 p-2 pb-5"
        style={{ border: "2px solid black" }}
      >
        <div className="text-center fw-bold fs-3 my-5">
          New Employee Details
        </div>
        <div className="p-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label for="floatingInput">Employee Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label for="floatingInput">Employee Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => {
                setnumber(e.target.value);
              }}
            />
            <label for="floatingPassword">Phone Number</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="EID"
              value={manager}
              onChange={(e) => {
                setmanager(e.target.value);
              }}
            />
            <label for="floatingInput">Manager EID</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="https://imageaddress"
              value={url}
              onChange={(e) => {
                seturl(e.target.value);
              }}
            />
            <label for="floatingInput">ProfilePIC URL</label>
          </div>

          <div className="text-center mt-5">
            <div
              className="btn bg-success text-white"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={addemployee}
            >
              Submit
              {showload ? (
                <div className="ms-3">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
