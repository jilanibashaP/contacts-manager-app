import { useState, useEffect } from "react"  
import React from "react";                       // HAVE TO ADD THE TOKEN 
// import { useState } from 'react';
import axios from 'axios';
import './PageHead.css'
import SearchIcon from '@mui/icons-material/Search';

const PageHead = (props) => {
    const [value, setvalue] = useState('')
    const [contactsArray, setcontactsArray] = useState([])

    //api call for search functions // save the contact arry in the useState varable 
    // HAVE TO MODIFY
    //THIS USEEFFECT NOT NEEDED, RECIVE THE DATA FROM ContactData componet / cild to child data transfer
    useEffect(() => {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };
        axios.get("https://contact-manager-app-backend.onrender.com/api/contacts", config)
            .then(res => {            
                setcontactsArray(res.data.allcontact)
            })
            .catch(err => console.log(err));
    }, []);
    // save the user input form search bar
    const onchange = (e) => {
        setvalue(e.target.value)
    }
    // when user click on the search suggstion 
    const onSearch = (searchLetter) => {
        setvalue(searchLetter)
    }
    //when user click on the search button 
    const onClickSearch = (value)=>{
        props.getSearchData(value)
    }

    return (
        <header id="pagehead-container">
            <span id='Total-contacts-heading'>Total Contacts</span>
            <div id="searchbar-button-container">
                <button onClick={() => onClickSearch(value)}><SearchIcon /></button>
                <input
                    id='inputbar'
                    placeholder='Search by Email Id.....'
                    value={value}
                    onChange={onchange}
                />
            </div>
            
            <div className='dropdown'>
                {contactsArray.filter(item => {
                    const sarchTem = value.toLocaleLowerCase();
                    const email = item.email.toLowerCase();

                    return sarchTem && email.startsWith(sarchTem) && email !== sarchTem
                }).slice(0, 6)                  // only 6 suggstion will show to the user
                    .map((item) => (
                        <div
                            key={item._id}
                            onClick={() => onSearch(item.email)} 
                        >
                        <SearchIcon />
                        {item.email}
                        </div>                    // search suggestions 
                    ))}
            </div>
        {/* //user information  */}
            <div id='user-imfo'>      
                <div id='user-image-container'>
                    <img id='user-image' src='./userImage/download.jfif' alt='user' />
                </div>
                <div id='user-name-container'>
                    <p> <b>Ram Darvin</b></p>
                    <p> Super Adimn</p>
                </div>
            </div>
            <div id='end-line'></div>

        </header>
    )
}
export default PageHead;