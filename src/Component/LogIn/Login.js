import { Link } from "react-router-dom";
import "./Login.css"
import React from "react";
import { useState, useContext, useEffect } from 'react'
import { contextProvider } from "../../../src/App"
import { useNavigate } from "react-router-dom"
import Dots from "./dots";
// import eye from "../"
// import axios from "axios";


const LogIn = () => {
    const [loader, setLoader] = useState(false)
    let [isRevealed, setIsReaveled] = useState(false)
    let [userNotReg, setUserNotReg] = useState({
        wrongPassword: "",
        newUser: ""
    })
    const [error, setError] = useState({ emailError: "", passwordError: "" })
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();

        // email varification
        if (userDetails.email.indexOf("@") === -1) {
            console.log(userDetails.email)
            setError((oldData) => ({ ...oldData, emailError: "please enter proper email" }))
        } else {
            setError((oldData) => ({ ...oldData, emailError: "" }))
        }
        //password error
        if (userDetails.password.length < 6 || userDetails.password.length > 16) {
            console.log(userDetails.password)
            setError((oldData) => ({ ...oldData, passwordError: "password should contain atleast 6 characteristics and atmax 16 characteristics" }))
        } else {
            setError((oldData) => ({ ...oldData, passwordError: "" }))
        }
        // console.log(error)

        setLoader(true)
        fetch("https://contact-manager-app-backend.onrender.com/api/users/login", {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((res) => {
            return res.json()
        }).then((data) => {

            if (data.status == "Password not matched") {
                // <h1>{data.message}</h1>
                console.log("from  Password not matched")
                setUserNotReg((prevData) => ({ ...prevData, wrongPassword: data.message }))
            } else {
                setUserNotReg((prevData) => ({ ...prevData, wrongPassword: "" }))
            }

            if (data.status === "Failed") {
                setUserNotReg((prevData) => ({ ...prevData, newUser: data.message }))
            } else {
                setUserNotReg((prevData) => ({ ...prevData, newUser: "" }))
                localStorage.setItem("token", data.token)
                navigate("/dashBoard")
            }
            // if(token){
            //     navigate('/dashBoard')
            // }

        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoader(false)
        })
    }
    let dotsArr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className="mainDiv">
                <div className="ellipse1">
                    <img className="EllipseLeft" src="../images/Ellipse-31.png" alt="Ellipse-31" />
                </div>

                <div className="insideDiv">


                    <div className="div1">
                        {/* <img className="dotsLeft dots" src="./images/Dots-Group.png" alt="Dots-Group" /> */}
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                    </div>
                    <div className="div2">
                        <div className="div2Form">
                            {/* <div className="logo" >Logo</div><br></br> */}
                            <img className="logo" src="../images/logo.png"/>
                            <p className="para">Enter your credentials to access your account</p>
                            <form className="form" method="POST" onSubmit={submitHandler}>
                                <input className="emailId" type="text" name="email" onChange={(event) => { setUserDetails({ ...userDetails, email: event.target.value }) }} placeholder="Email Id"></input>
                                <input className="password" type={isRevealed ? "text" : "password"} name="password" onChange={(event) => { setUserDetails({ ...userDetails, password: event.target.value }) }} placeholder="Password"></input><br></br>
                                <img id="hide" src="../images/eye1.png" alt="eyecon" onClick={() => setIsReaveled(prevState => !prevState)} />
                                {/* <button className="signIn">Sign In</button> */}
                                <input type="submit" className="signIn" value="Sign In" /><br />
                                {loader && <div className="loader-div"><img src="./images/Loading_icon.gif" alt="Loading_icon" /></div>}
                            </form>
                            <Link to="/register"><button className="signUp">Sign Up</button></Link>
                            <center className="errorMessage ">
                                {error.emailError && <h5>{error.emailError}</h5> || error.passwordError && <h5>{error.passwordError}</h5> || <h5>{userNotReg.wrongPassword}</h5> || <h5>{userNotReg.newUser}</h5>}
                            </center>
                        </div>
                    </div>
                    <div className="div3">
                        {/* <img className="dotsRight dots" src="./images/Dots-Group.png" alt="Dots-Group" /> */}
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>

                    </div>

                </div>
                <div className="logInEll">
                    <img className="ellipse32" src="../images/Ellipse-32.png" />
                </div>

            </div>

        </>
    )
}

export default LogIn
