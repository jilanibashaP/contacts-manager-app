import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "..logIn/form.css"
import { Link, useNavigate } from "react-router-dom";
import Dots from "../LogIn/dots";
const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    let [isRevealed, setIsReaveled] = useState(false)
    let [pwd, setpwd] = useState(false)

    const [error, setError] = useState({ emailError: "", passwordError: "", confirmPassword: "" })

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(userDetails)
        if (userDetails.email.indexOf("@") === -1) {
            // console.log(userDetails.email)
            setError((oldData) => ({ ...oldData, emailError: "please enter valid email id" }))
        } else {
            setError((oldData) => ({ ...oldData, emailError: "" }))
        }
        //password error
        if ((userDetails.password.length < 6) || (userDetails.password.length > 16)) {
            // console.log(userDetails.password)
            setError((oldData) => ({ ...oldData, passwordError: "password should contain atleast 6 characteristics and atmax 16 characteristics" }))
        } else {
            setError((oldData) => ({ ...oldData, passwordError: "" }))
        }
        if (userDetails.password !== userDetails.confirmPassword) {
            setError((oldData) => ({ ...oldData, passwordError: "please check password and confirmPassword not matched" }))
        }
        else {
            setError((oldData) => ({ ...oldData, passwordError: "" }))
        }

        fetch("https://contact-manager-app-backend.onrender.com/api/users/register", {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.status === "Success") {
                alert("user created successfully and please login now")
                navigate('/login')
            }
            else {
                alert(data.message)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="mainDiv">
            <img className="EllipseLeft" src="../images/Ellipse-31.png" alt="Ellipse-31" />
                <div className="insideDiv">
                    <div className="div1">
                        {/* <Dots/> */}
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        {/* <img className="dotsRight" src="./images/Dots-Group.png" alt="Dots-Group" /> */}
                    </div>
                    

                    <div className="div2">
                        <div className="div2Form">
                            {/* <div className="logo" >Logo</div><br></br> */}
                            <img className="logo" src="../images/logo.png"/>
                            <p className="para signUpPara">Create New account</p>
                            <form className="form" onSubmit={submitHandler}>
                                <input className="emailId" type="text" name="email" onChange={(event) => { setUserDetails({ ...userDetails, email: event.target.value }) }} placeholder="Email Id"></input>
                                <input className="password" type={isRevealed ? "text" : "password"} name="password" onChange={(event) => { setUserDetails({ ...userDetails, password: event.target.value }) }} placeholder="password"></input>
                                <img id="hide" src="../images/eye1.png" alt="eyecon" onClick={() => setIsReaveled(prevState => !prevState)} />
                                <input className="password confirmPassword" id="eyeCon" type={pwd ? "text" : "password"} name="confirmPassword" onChange={(event) => { setUserDetails({ ...userDetails, confirmPassword: event.target.value }) }} placeholder="confirmPassword"></input>
                                <img id="hidez" src="../images/eye1.png" alt="eyecon" onClick={() => setpwd(prevState => !prevState)} />
                                {/* <button className="signUp">Sign Up</button> */}
                                <input type="submit" className="signUp signUpRe" value="Sign Up" />
                            </form>
                            <p1 className="goto">if user is already registered  <Link className="SignInLink" to="/login">signIn</Link>  </p1>
                           <p className="errorMessage">{(error.emailError) && (<h5>{error.emailError}</h5>) || error.passwordError && <h5>{error.passwordError}</h5>}</p> 
                        </div>
                    </div>

                    {/* <p1 className="goto">if user is already register <Link to="/login">signIn</Link> </p1> */}
                    <div className="div3 ">
                        {/* <img className="dotsRight dots" src="./images/Dots-Group.png" alt="Dots-Group" /> */}
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                    </div>

                   

                </div>
                <div className="signUpEll">
                <img className="ellipse32" src="../images/Ellipse-32.png" />
                </div>

            </div>
        </>
    )
}

export default SignUp