import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ipaddress = require("../myconstants");
export default function Edit() {
  const { id, name, email, contact, manager, profile } = useParams();
  const [eid, setid] = useState("");
  const [ename, setname] = useState("");
  const [eemail, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [emanager, setmanager] = useState("");
  const [url, seturl] = useState("");
  const [showload, setshowload] = useState(false);
  const [showload1, setshowload1] = useState(false);

  useEffect(() => {
    setid(id);
    setname(name);
    setemail(email);
    setnumber(contact);
    setmanager(manager);
    seturl(decodeURIComponent(profile));
  }, []);
  var employeedata = {
    employeeID:id,
    employeeName: name,
    phoneNumber: number,
    email: email,
    reportsTo: manager,
    profileImage: url,
  };
  const navigate = useNavigate()
  const saveemployee = async () => {
    setshowload(true);
    var apiurl = ipaddress + "/updateemployee";
    
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
      setshowload(false);
      console.log(data);
      navigate("/currentemployees")
      alert(
       " message: " + data.message
      );
    } catch (error) {
      setshowload(false);
      navigate("/currentemployees")
      alert(error.message);
    }
  };

  const deleteemployee = async () => {
    setshowload1(true);
    var apiurl = ipaddress + "/deleteemployee";
    
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
      navigate("/currentemployees")
      setshowload(false);
      console.log(data);
      alert(
       " message: " + data.message
      );
    } catch (error) {
        navigate("/currentemployees")
      setshowload(false);
      alert(error.message);
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
          Update Employee Details
        </div>
        <div className="p-1">
          <div
            className=""
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
          >
            <div className="mb-5">
              <img
                src={url}
                className="card "
                style={{ width: "250px", height: "240px", borderRadius: "47%" }}
              />
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Employee ID"
              value={eid}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label for="floatingInput">Employee ID</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
              value={ename}
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
              value={eemail}
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
              value={emanager}
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

          <div
            className=" mt-5"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="btn bg-success text-white"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={saveemployee}
            >
              Save
              {showload ? (
                <div className="ms-3">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              className="btn bg-success text-white"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={deleteemployee}
            >
              Delete
              {showload1 ? (
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
