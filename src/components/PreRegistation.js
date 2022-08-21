import React, { useState } from 'react'
import './css/form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationForm from './RegistrationForm';

const PreRegistation = () => {
  // for form values
  const [stream, setStream] = useState("");
  const [registerVal, setRegisterVal] = useState({
    name: "",
    BSdob: "",
    ADdob: "",
    fName: "",
    mName: "",
    pAddress: "",
    lAddress: "",
    phNumber: "",
    email: "",
    stream: "",
  })
  const formValChange = (e) => {
    setRegisterVal({ ...registerVal, [e.target.name]: e.target.value })
  }
  const formValChangeStream = (e) => {
    if (e.target.checked === true) {
      setStream(e.target.value);
    }
  }
  // for form validation error 
  const [valError, setValError] = useState({
    stream: "",
    name: "",
    DOB: "",
    fName: "",
    mName: "",
    pAddress: "",
    lAddress: "",
    phNumber: "",
    email: ""
  });

  //for submit form
  const preRegistrationFormSubmit = (e) => {
    e.preventDefault();
    let a = document.getElementsByName("stream");
    let newVar = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].checked === true) {
        newVar++;
        setRegisterVal({ ...registerVal, stream: a[i].value });
      }
      else {
        setRegisterVal({ ...registerVal, stream: "" });
      }
    }
    let validation = true;

    if (newVar !== 1) {
      setValError({ stream: "Please check only one stream", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
      validation = false;
    }
    else if (registerVal.name.length <= 5 || registerVal.name.length>=20) {
      setValError({ stream: "", name: "Name must be greater than five and lesser than twenty character", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" });
      validation = false;
    }
    else if (Number(registerVal.BSdob.slice(0, 4)) < 2052 || Number(registerVal.BSdob.slice(0, 4)) > 2067) {
      setValError({ stream: "", name: "", DOB: "Please enter valid date of birth in BS", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
      validation = false
    }
    else if (Number(registerVal.ADdob.slice(0, 4)) < 1995 || Number(registerVal.ADdob.slice(0, 4)) > 2010) {
      setValError({ stream: "", name: "", DOB: "Please enter valid date of birth in AD", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
      validation = false
    }
    // for father name
    else if (registerVal.fName.length <= 5 || registerVal.fName.length>=20) {
      setValError({ stream: "", name: "", DOB: "", fName: "Name must be greater than five and lesser than twenty character", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
      validation = false
    }
    // for mother name
    else if (registerVal.mName.length <= 5 || registerVal.mName.length>=20) {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "Name must be greater than five and lesser than twenty character", pAddress: "", lAddress: "", phNumber: "", email: "" })
      validation = false
    }
    else if (registerVal.pAddress.length <= 5 || registerVal.pAddress.length>=25) {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "Address must be greater than five and lesser than twenty-five character", lAddress: "", phNumber: "", email: "" })
      validation = false
    }
    else if (registerVal.lAddress.length <= 5 || registerVal.lAddress.length>=25) {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "Address must be greater than five and lesser than twenty-five character", phNumber: "", email: "" })
      validation = false
    }
    else if (registerVal.phNumber.toString().length <= 9 || registerVal.phNumber.toString().length > 13) {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "Please enter valid phone number", email: "" })
      validation = false
    }
    else if (registerVal.email.length <= 5 || registerVal.email.length > 30) {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "Please enter valid email" })
      validation = false
    }
    else {
      setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
      if (!isNaN(registerVal.name)) {
        setValError({ stream: "", name: "Enter valid name", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
        validation = false;
      }
      else if (!isNaN(registerVal.fName)) {
        setValError({ stream: "", name: "", DOB: "", fName: "Enter valid name", mName: "", pAddress: "", lAddress: "", phNumber: "", email: "" })
        validation = false;
      }
      else if (!isNaN(registerVal.mName)) {
        setValError({ stream: "", name: "", DOB: "", fName: "", mName: "Enter valid name", pAddress: "", lAddress: "", phNumber: "", email: "" })
        validation = false;
      }
      else if (!isNaN(registerVal.pAddress)) {
        setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "Enter valid pernament address", lAddress: "", phNumber: "", email: "" })
        validation = false;
      }
      else if (!isNaN(registerVal.lAddress)) {
        setValError({ stream: "", name: "", DOB: "", fName: "", mName: "", pAddress: "", lAddress: "Enter valid address", phNumber: "", email: "" })
        validation = false;
      }
      else {
        validation = true;
      }
    }

    let notify = () => toast.warn("Please enter valid data to register");
    //sending to backend
    if (validation === true) {
      registerVal.stream = stream
      console.log(registerVal);
      // for notification
      notify = () => toast.success("Thank you for Pre-registration");
    }
    notify();
  }

  return (
    <div id='PreRegistation'>
      <h2 id='FormMainHeading'>Greenfield National College</h2>
      <h3 id="FormSubHeading">Pre-Registration Form</h3>
      <RegistrationForm formValChangeStream={formValChangeStream} registerVal={registerVal} formValChange={formValChange} valError={valError} preRegistrationFormSubmit={preRegistrationFormSubmit}/>
      <ToastContainer />
    </div>
  )
}

export default PreRegistation
