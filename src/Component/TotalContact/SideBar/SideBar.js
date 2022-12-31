// import {useState , useEffect} from "react"
import React from 'react';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import green from "@material-ui/core/colors/green";
import './SideBar.css'
import { Navigate, useNavigate } from 'react-router-dom';
const SideBar = ()=>{
    const navigate = useNavigate();
    return (
        <aside id="sidebar-container">
            <div id='logo-sidebar-container'>
                Logo
            </div>

            <div id='dashbord-icon'>
                <div id='dashbord-text'>
                    <DashboardOutlinedIcon/>
                    <p>Dashbord</p>
                </div>
            </div>

            <div id='total-contact-sidebar'>
                <div id='total-contact-sidebar-child'>                    
                        <ContactsOutlinedIcon 
                        style={{ color: "white" }}
                        />                    
                    <p id='total-contas-text'>Total Contacts</p>
                    <div id='total-contact-icon-line'></div>
                </div>
            </div>

            <div id='logout-button'>
                <button onClick={()=>{localStorage.clear();navigate("/")}}>
                   <LogoutIcon/> <span id='logout-text'> Log out </span>                   
                </button>
            </div>

        </aside>
    )
}
export default SideBar;